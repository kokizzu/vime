/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@vime/core';


interface VimeYoutubeProps {
  
  /** Whether cookies should be enabled on the embed. */
  cookies?: Components.VimeYoutube["cookies"]
  
  /** The YouTube resource ID of the video to load. */
  videoId?: Components.VimeYoutube["videoId"]
  
  /** Whether the fullscreen control should be shown. */
  showFullscreenControl?: Components.VimeYoutube["showFullscreenControl"]
  
  /**  */
  language?: Components.VimeYoutube["language"]
  
  /**  */
  autoplay?: Components.VimeYoutube["autoplay"]
  
  /**  */
  controls?: Components.VimeYoutube["controls"]
  
  /**  */
  logger?: Components.VimeYoutube["logger"]
  
  /**  */
  loop?: Components.VimeYoutube["loop"]
  
  /**  */
  muted?: Components.VimeYoutube["muted"]
  
  /**  */
  playsinline?: Components.VimeYoutube["playsinline"]
}

interface VimeYoutubeEvents {
  
  /**  */
  vLoadStart: Parameters<JSX.VimeYoutube["onVLoadStart"]>[0]
}

interface VimeYoutubeSlots {
  default: any
}
  
/* generated by Svelte v3.24.1 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	init,
	insert,
	listen,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let vime_youtube;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[15].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[14], null);

	return {
		c() {
			vime_youtube = element("vime-youtube");
			if (default_slot) default_slot.c();
			set_custom_element_data(vime_youtube, "cookies", /*cookies*/ ctx[0]);
			set_custom_element_data(vime_youtube, "video-id", /*videoId*/ ctx[1]);
			set_custom_element_data(vime_youtube, "show-fullscreen-control", /*showFullscreenControl*/ ctx[2]);
			set_custom_element_data(vime_youtube, "language", /*language*/ ctx[3]);
			set_custom_element_data(vime_youtube, "autoplay", /*autoplay*/ ctx[4]);
			set_custom_element_data(vime_youtube, "controls", /*controls*/ ctx[5]);
			set_custom_element_data(vime_youtube, "loop", /*loop*/ ctx[6]);
			set_custom_element_data(vime_youtube, "muted", /*muted*/ ctx[7]);
			set_custom_element_data(vime_youtube, "playsinline", /*playsinline*/ ctx[8]);
		},
		m(target, anchor) {
			insert(target, vime_youtube, anchor);

			if (default_slot) {
				default_slot.m(vime_youtube, null);
			}

			/*vime_youtube_binding*/ ctx[16](vime_youtube);
			current = true;

			if (!mounted) {
				dispose = listen(vime_youtube, "vLoadStart", /*onEvent*/ ctx[10]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 16384) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[14], dirty, null, null);
				}
			}

			if (!current || dirty & /*cookies*/ 1) {
				set_custom_element_data(vime_youtube, "cookies", /*cookies*/ ctx[0]);
			}

			if (!current || dirty & /*videoId*/ 2) {
				set_custom_element_data(vime_youtube, "video-id", /*videoId*/ ctx[1]);
			}

			if (!current || dirty & /*showFullscreenControl*/ 4) {
				set_custom_element_data(vime_youtube, "show-fullscreen-control", /*showFullscreenControl*/ ctx[2]);
			}

			if (!current || dirty & /*language*/ 8) {
				set_custom_element_data(vime_youtube, "language", /*language*/ ctx[3]);
			}

			if (!current || dirty & /*autoplay*/ 16) {
				set_custom_element_data(vime_youtube, "autoplay", /*autoplay*/ ctx[4]);
			}

			if (!current || dirty & /*controls*/ 32) {
				set_custom_element_data(vime_youtube, "controls", /*controls*/ ctx[5]);
			}

			if (!current || dirty & /*loop*/ 64) {
				set_custom_element_data(vime_youtube, "loop", /*loop*/ ctx[6]);
			}

			if (!current || dirty & /*muted*/ 128) {
				set_custom_element_data(vime_youtube, "muted", /*muted*/ ctx[7]);
			}

			if (!current || dirty & /*playsinline*/ 256) {
				set_custom_element_data(vime_youtube, "playsinline", /*playsinline*/ ctx[8]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(vime_youtube);
			if (default_slot) default_slot.d(detaching);
			/*vime_youtube_binding*/ ctx[16](null);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { cookies = undefined } = $$props;
	let { videoId } = $$props;
	let { showFullscreenControl = undefined } = $$props;
	let { language = undefined } = $$props;
	let { autoplay = undefined } = $$props;
	let { controls = undefined } = $$props;
	let { logger = undefined } = $$props;
	let { loop = undefined } = $$props;
	let { muted = undefined } = $$props;
	let { playsinline = undefined } = $$props;
	const getAdapter = (...args) => __ref.getAdapter(...args);
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(17, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(9, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	let { $$slots = {}, $$scope } = $$props;

	function vime_youtube_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(9, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("cookies" in $$props) $$invalidate(0, cookies = $$props.cookies);
		if ("videoId" in $$props) $$invalidate(1, videoId = $$props.videoId);
		if ("showFullscreenControl" in $$props) $$invalidate(2, showFullscreenControl = $$props.showFullscreenControl);
		if ("language" in $$props) $$invalidate(3, language = $$props.language);
		if ("autoplay" in $$props) $$invalidate(4, autoplay = $$props.autoplay);
		if ("controls" in $$props) $$invalidate(5, controls = $$props.controls);
		if ("logger" in $$props) $$invalidate(11, logger = $$props.logger);
		if ("loop" in $$props) $$invalidate(6, loop = $$props.loop);
		if ("muted" in $$props) $$invalidate(7, muted = $$props.muted);
		if ("playsinline" in $$props) $$invalidate(8, playsinline = $$props.playsinline);
		if ("$$scope" in $$props) $$invalidate(14, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*__mounted, logger*/ 133120) {
			$: if (__mounted) setProp("logger", logger);
		}
	};

	return [
		cookies,
		videoId,
		showFullscreenControl,
		language,
		autoplay,
		controls,
		loop,
		muted,
		playsinline,
		__ref,
		onEvent,
		logger,
		getAdapter,
		getWebComponent,
		$$scope,
		$$slots,
		vime_youtube_binding
	];
}

class VimeYoutube extends SvelteComponent {
  $$prop_def: VimeYoutubeProps;
  $$events_def: VimeYoutubeEvents;
  $$slot_def: VimeYoutubeSlots;

  $on<K extends keyof VimeYoutubeEvents>(type: K, callback: (e: VimeYoutubeEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<VimeYoutubeProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			cookies: 0,
			videoId: 1,
			showFullscreenControl: 2,
			language: 3,
			autoplay: 4,
			controls: 5,
			logger: 11,
			loop: 6,
			muted: 7,
			playsinline: 8,
			getAdapter: 12,
			getWebComponent: 13
		});
	}

	
  /**  */
 get getAdapter(): Components.VimeYoutube["getAdapter"] {
		return this.$$.ctx[12];
	}

	get getWebComponent(): HTMLVimeYoutubeElement | undefined {
		return this.$$.ctx[13];
	}
}

export default VimeYoutube;