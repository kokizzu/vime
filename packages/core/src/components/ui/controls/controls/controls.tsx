import {
  h, Host, Component,
  Prop, Element, Watch,
  State,
} from '@stencil/core';
import { withPlayerContext } from '../../../core/player/PlayerContext';
import { PlayerProp, PlayerProps } from '../../../core/player/PlayerProp';
import { PlayerDispatcher, createPlayerDispatcher } from '../../../core/player/PlayerDispatcher';
import { Disposal } from '../../../core/player/Disposal';
import { listen, isColliding } from '../../../../utils/dom';
import { isNull } from '../../../../utils/unit';
import { debounce } from '../../../../utils/timing';
import { findRootPlayer } from '../../../core/player/utils';
import { findUIRoot } from '../../ui/utils';

/**
 * We want to keep the controls active state in-sync per player.
 */
const playerRef: Record<any, HTMLVimePlayerElement> = {};
const hideControlsTimeout: Record<any, number | undefined> = {};

/**
 * @slot - Used to pass in controls.
 */
@Component({
  tag: 'vime-controls',
  styleUrl: 'controls.scss',
})
export class Controls {
  private dispatch?: PlayerDispatcher;

  private disposal = new Disposal();

  @Element() el!: HTMLVimeControlsElement;

  @State() isInteracting = false;

  /**
   * Whether the controls are visible or not.
   */
  @Prop() hidden = false;

  /**
   * Whether the controls container should be 100% width. This has no effect if the view is of
   * type `audio`.
   */
  @Prop() fullWidth = false;

  /**
   * Whether the controls container should be 100% height. This has no effect if the view is of
   * type `audio`.
   */
  @Prop() fullHeight = false;

  /**
   * Sets the `flex-direction` property that manages the direction in which the controls are layed
   * out.
   */
  @Prop() direction: 'row' | 'column' = 'row';

  /**
   * Sets the `align-items` flex property that aligns the individual controls on the cross-axis.
   */
  @Prop() align: 'start' | 'center' | 'end' = 'center';

  /**
   * Sets the `justify-content` flex property that aligns the individual controls on the main-axis.
   */
  @Prop() justify: 'start'
  | 'center'
  | 'end'
  | 'space-around'
  | 'space-between'
  | 'space-evenly' = 'start';

  /**
   * Pins the controls to the defined position inside the video player. This has no effect when
   * the view is of type `audio`.
   */
  @Prop({
    reflect: true,
  }) pin: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'center' = 'bottomLeft';

  /**
   * The length in milliseconds that the controls are active for before fading out. Audio players
   * are not effected by this prop.
   */
  @Prop() activeDuration = 2750;

  /**
   * Whether the controls should wait for playback to start before being shown. Audio players
   * are not effected by this prop.
   */
  @Prop() waitForPlaybackStart = false;

  /**
   * Whether the controls should show/hide when paused. Audio players are not effected by this prop.
   */
  @Prop() hideWhenPaused = false;

  /**
   * Whether the controls should hide when the mouse leaves the player. Audio players are not
   * effected by this prop.
   */
  @Prop() hideOnMouseLeave = false;

  /**
   * @internal
   */
  @Prop() isAudioView: PlayerProps[PlayerProp.isAudioView] = false;

  /**
   * @internal
   */
  @Prop() isSettingsActive: PlayerProps[PlayerProp.isSettingsActive] = false;

  /**
   * @internal
   */
  @Prop() playbackReady: PlayerProps[PlayerProp.playbackReady] = false;

  /**
   * @internal
   */
  @Prop() isControlsActive: PlayerProps[PlayerProp.isControlsActive] = false;

  /**
   * @internal
   */
  @Prop() paused: PlayerProps[PlayerProp.paused] = true;

  /**
   * @internal
   */
  @Prop() playbackStarted: PlayerProps[PlayerProp.playbackStarted] = false;

  connectedCallback() {
    this.dispatch = createPlayerDispatcher(this);
  }

  componentWillLoad() {
    this.setupPlayerListeners();
    this.checkForCaptionsCollision();
    this.checkForSettingsCollision();
    this.onControlsChange();
  }

  componentDidRender() {
    this.checkForCaptionsCollision();
    this.checkForSettingsCollision();
  }

  disconnectedCallback() {
    this.disposal.empty();
    delete hideControlsTimeout[playerRef[this]];
    delete playerRef[this];
  }

  private setupPlayerListeners() {
    const player = findRootPlayer(this);
    const events = ['focus', 'keydown', 'click', 'mousemove', 'touchstart', 'mouseleave'];
    const callback = debounce(this.onControlsChange, 50, true).bind(this);
    events.forEach((event) => { this.disposal.add(listen(player, event, callback)); });
    // @ts-ignore
    playerRef[this] = player;
  }

  private checkForCaptionsCollision() {
    const captions = findUIRoot(this).querySelector('vime-captions') as HTMLVimeCaptionsElement;
    if (isNull(captions)) return;
    captions!.controlsHeight = isColliding(this.el, captions) ? this.getHeight() : 0;
  }

  private getHeight() {
    return parseFloat(window.getComputedStyle(this.el).height);
  }

  private checkForSettingsCollision() {
    const settings = findUIRoot(this).querySelector('vime-settings') as HTMLVimeSettingsElement;
    if (isNull(settings)) return;
    settings!.controlsHeight = (this.isAudioView || isColliding(this.el, settings))
      ? this.getHeight()
      : 65;
  }

  private show() {
    this.dispatch!(PlayerProp.isControlsActive, true);
  }

  private hide() {
    this.dispatch!(PlayerProp.isControlsActive, false);
  }

  private hideWithDelay() {
    hideControlsTimeout[playerRef[this]] = setTimeout(() => {
      this.hide();
    }, this.activeDuration) as any;
  }

  @Watch('paused')
  @Watch('hidden')
  @Watch('isAudioView')
  @Watch('isInteracting')
  @Watch('isSettingsActive')
  @Watch('hideWhenPaused')
  @Watch('hideOnMouseLeave')
  @Watch('playbackStarted')
  @Watch('waitForPlaybackStart')
  @Watch('playbackReady')
  private onControlsChange(event?: Event) {
    // @ts-ignore
    clearTimeout(hideControlsTimeout[playerRef[this]]);

    if (this.hidden || !this.playbackReady) {
      this.hide();
      return;
    }

    if (this.isAudioView) {
      this.show();
      return;
    }

    if (this.waitForPlaybackStart && !this.playbackStarted) {
      this.hide();
      return;
    }

    if (this.isInteracting || this.isSettingsActive) {
      this.show();
      return;
    }

    if (this.hideWhenPaused && this.paused) {
      this.hideWithDelay();
      return;
    }

    if (this.hideOnMouseLeave && (event?.type === 'mouseleave')) {
      this.hide();
      return;
    }

    if (!this.paused) {
      this.show();
      this.hideWithDelay();
      return;
    }

    this.show();
  }

  private getPosition() {
    if (this.isAudioView) return {};

    if (this.pin === 'center') {
      return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };
    }

    // topLeft => { top: 0, left: 0 }
    const pos = this.pin.split(/(?=[L|R])/).map((s) => s.toLowerCase());
    return { [pos[0]]: 0, [pos[1]]: 0 };
  }

  private onStartInteraction() {
    this.isInteracting = true;
  }

  private onEndInteraction() {
    this.isInteracting = false;
  }

  render() {
    return (
      <Host
        style={{
          ...this.getPosition(),
          flexDirection: this.direction,
          alignItems: (this.align === 'center') ? 'center' : `flex-${this.align}`,
          justifyContent: this.justify,
        }}
        class={{
          audio: this.isAudioView,
          hidden: this.hidden,
          active: this.playbackReady && this.isControlsActive,
          fullWidth: this.isAudioView || this.fullWidth,
          fullHeight: !this.isAudioView && this.fullHeight,
        }}
        onMouseEnter={this.onStartInteraction.bind(this)}
        onMouseLeave={this.onEndInteraction.bind(this)}
        onTouchStart={this.onStartInteraction.bind(this)}
        onTouchEnd={this.onEndInteraction.bind(this)}
      >
        <slot />
      </Host>
    );
  }
}

withPlayerContext(Controls, [
  PlayerProp.playbackReady,
  PlayerProp.isAudioView,
  PlayerProp.isControlsActive,
  PlayerProp.isSettingsActive,
  PlayerProp.paused,
  PlayerProp.playbackStarted,
]);
