import {
  PlayerProp,
  usePlayerContext,
  PlayerProps,
  PlayerDispatcher,
  isExternalReadonlyPlayerProp,
  isInternalReadonlyPlayerProp,
  createPlayerDispatcher,
  findRootPlayer,
} from '@vime/core';
import { onMount } from 'svelte';
import {
  writable, get, Writable, Readable,
} from 'svelte/store';
import {
  InternalWritablePlayerProp,
  ExternalWritablePlayerProp,
} from '@vime/core/dist/types/components/core/player/PlayerProp';

type PropStoreType<P extends keyof PlayerProps> =
  P extends ExternalWritablePlayerProp
    ? Writable<PlayerProps[P]>
    : Readable<PlayerProps[P]>;

type InternalPropStoreType<P extends keyof PlayerProps> =
  P extends InternalWritablePlayerProp
    ? Writable<PlayerProps[P]>
    : Readable<PlayerProps[P]>;

type PlayerStore = {
  [P in keyof PlayerProps]: PropStoreType<P>;
};

type InternalPlayerStore = {
  [P in keyof PlayerProps]: InternalPropStoreType<P>;
};

const buildStore = (ref: () => HTMLElement, isInternal = false) => {
  let dispatch: PlayerDispatcher = () => {};
  const internalStoreRef: Map<PlayerProp, Writable<any>> = new Map();

  const mountedQueue = [];
  const onPlayerMounted = () => { mountedQueue.forEach((fn) => fn()); };

  const vimeable = <P extends keyof PlayerProps>(prop: P, initialValue: PlayerProps[P]) => {
    const store = writable(initialValue);
    const canWrite = (!isInternal && !isExternalReadonlyPlayerProp(prop))
      || (!isInternalReadonlyPlayerProp(prop) && isInternal);

    const set = (value: PlayerProps[P]) => {
      if (!get(internalStoreRef.get(PlayerProp.mounted))) {
        mountedQueue.push(() => dispatch(prop as any, value));
      } else {
        dispatch(prop as any, value);
      }
    };

    const update = (updater: (value: PlayerProps[P]) => PlayerProps[P]) => {
      set(updater(get(store)));
    };

    internalStoreRef.set(prop, store);

    return {
      subscribe: store.subscribe,
      update: canWrite ? update : undefined,
      set: canWrite ? set : undefined,
    };
  };

  const store = {
    [PlayerProp.theme]: vimeable(PlayerProp.theme, undefined),
    [PlayerProp.paused]: vimeable(PlayerProp.paused, true),
    [PlayerProp.playing]: vimeable(PlayerProp.playing, false),
    [PlayerProp.duration]: vimeable(PlayerProp.duration, -1),
    [PlayerProp.mediaTitle]: vimeable(PlayerProp.mediaTitle, undefined),
    [PlayerProp.currentSrc]: vimeable(PlayerProp.currentSrc, undefined),
    [PlayerProp.currentPoster]: vimeable(PlayerProp.currentPoster, undefined),
    [PlayerProp.currentTime]: vimeable(PlayerProp.currentTime, 0),
    [PlayerProp.autoplay]: vimeable(PlayerProp.autoplay, false),
    [PlayerProp.mounted]: vimeable(PlayerProp.mounted, false),
    [PlayerProp.destroyed]: vimeable(PlayerProp.destroyed, false),
    [PlayerProp.ready]: vimeable(PlayerProp.ready, false),
    [PlayerProp.playbackReady]: vimeable(PlayerProp.playbackReady, false),
    [PlayerProp.loop]: vimeable(PlayerProp.loop, false),
    [PlayerProp.muted]: vimeable(PlayerProp.muted, false),
    [PlayerProp.buffered]: vimeable(PlayerProp.buffered, 0),
    [PlayerProp.playbackRate]: vimeable(PlayerProp.playbackRate, 1),
    [PlayerProp.playbackRates]: vimeable(PlayerProp.playbackRates, [1]),
    [PlayerProp.playbackQuality]: vimeable(PlayerProp.playbackQuality, undefined),
    [PlayerProp.playbackQualities]: vimeable(PlayerProp.playbackQualities, []),
    [PlayerProp.seeking]: vimeable(PlayerProp.seeking, false),
    [PlayerProp.debug]: vimeable(PlayerProp.debug, false),
    [PlayerProp.playbackStarted]: vimeable(PlayerProp.playbackStarted, false),
    [PlayerProp.playbackEnded]: vimeable(PlayerProp.playbackEnded, false),
    [PlayerProp.buffering]: vimeable(PlayerProp.buffering, false),
    [PlayerProp.controls]: vimeable(PlayerProp.controls, false),
    [PlayerProp.isControlsActive]: vimeable(PlayerProp.isControlsActive, false),
    [PlayerProp.errors]: vimeable(PlayerProp.errors, []),
    [PlayerProp.textTracks]: vimeable(PlayerProp.textTracks, undefined),
    [PlayerProp.volume]: vimeable(PlayerProp.volume, 50),
    [PlayerProp.isFullscreenActive]: vimeable(PlayerProp.isFullscreenActive, false),
    [PlayerProp.aspectRatio]: vimeable(PlayerProp.aspectRatio, '16:9'),
    [PlayerProp.viewType]: vimeable(PlayerProp.viewType, undefined),
    [PlayerProp.isAudioView]: vimeable(PlayerProp.isAudioView, false),
    [PlayerProp.isVideoView]: vimeable(PlayerProp.isVideoView, false),
    [PlayerProp.mediaType]: vimeable(PlayerProp.mediaType, undefined),
    [PlayerProp.isAudio]: vimeable(PlayerProp.isAudio, false),
    [PlayerProp.isVideo]: vimeable(PlayerProp.isVideoView, false),
    [PlayerProp.isMobile]: vimeable(PlayerProp.isMobile, false),
    [PlayerProp.isTouch]: vimeable(PlayerProp.isTouch, false),
    [PlayerProp.isCaptionsActive]: vimeable(PlayerProp.isCaptionsActive, false),
    [PlayerProp.isSettingsActive]: vimeable(PlayerProp.isSettingsActive, false),
    [PlayerProp.currentCaption]: vimeable(PlayerProp.currentCaption, undefined),
    [PlayerProp.isLive]: vimeable(PlayerProp.isLive, false),
    [PlayerProp.isPiPActive]: vimeable(PlayerProp.isPiPActive, false),
    [PlayerProp.autopause]: vimeable(PlayerProp.autopause, true),
    [PlayerProp.playsinline]: vimeable(PlayerProp.playsinline, false),
    [PlayerProp.language]: vimeable(PlayerProp.language, 'en'),
    [PlayerProp.languages]: vimeable(PlayerProp.languages, ['en']),
    [PlayerProp.translations]: vimeable(PlayerProp.translations, { en: {} }),
    [PlayerProp.i18n]: vimeable(PlayerProp.i18n, {}),
  };

  onMount(() => {
    const player = findRootPlayer(ref());
    dispatch = createPlayerDispatcher(ref());
    internalStoreRef.get(PlayerProp.mounted).set(player.mounted);

    const disconnect = usePlayerContext(
      ref(),
      Object.values(PlayerProp),
      (prop, value) => { internalStoreRef.get(prop as PlayerProp)?.set(value); },
    );

    if (!player.mounted) {
      const off = usePlayerContext(
        ref(),
        [PlayerProp.mounted],
        () => {
          onPlayerMounted();
          off();
        },
      );
    }

    return () => {
      disconnect();
      internalStoreRef.clear();
    };
  });

  return store;
};

/**
 * Creates and returns a store for the given player `ref`. The store is a collection of stores
 * for each player property. It is safe to write to properties before the player has mounted or
 * playback is ready.
 *
 * @param ref The player to create a store for.
 *
 * @example
 * <vime-player bind:this={player}>
 *  <!-- ... -->
 * </vime-player>
 *
 * <script lang="ts">
 *  let player;
 *
 *  const { currentTime } = usePlayerStore(player);
 *
 *  $currentTime = 50;
 *
 *  $: console.log($currentTime);*
 * </script>
 */
export const usePlayerStore = (
  ref: () => HTMLVimePlayerElement,
): PlayerStore => buildStore(ref);

/**
 * Creates and returns a store for the closest ancestor player of the given `ref`. The internal
 * player store gives us the ability to write to properties that are considered unsafe to write to
 * from the "outside" (when directly interacting with the player). **Remember, with great power
 * comes great responsibility**.
 *
 * @param ref The root HTMLElement of the custom component.
 */
export const useInternalPlayerStore = (
  ref: () => HTMLElement,
): InternalPlayerStore => buildStore(ref, true);
