/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@vime/core';


interface VimeDefaultSettingsProps {
  
  /**  */
  i18n?: Components.VimeDefaultSettings["i18n"]
  
  /**  */
  playbackRate?: Components.VimeDefaultSettings["playbackRate"]
  
  /**  */
  playbackRates?: Components.VimeDefaultSettings["playbackRates"]
  
  /**  */
  playbackQuality?: Components.VimeDefaultSettings["playbackQuality"]
  
  /**  */
  playbackQualities?: Components.VimeDefaultSettings["playbackQualities"]
  
  /**  */
  isCaptionsActive?: Components.VimeDefaultSettings["isCaptionsActive"]
  
  /**  */
  currentCaption?: Components.VimeDefaultSettings["currentCaption"]
  
  /**  */
  textTracks?: Components.VimeDefaultSettings["textTracks"]
}

interface VimeDefaultSettingsEvents {
  
}

interface VimeDefaultSettingsSlots {
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
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let vime_default_settings;
	let current;
	const default_slot_template = /*$$slots*/ ctx[11].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);

	return {
		c() {
			vime_default_settings = element("vime-default-settings");
			if (default_slot) default_slot.c();
			set_custom_element_data(vime_default_settings, "playback-rate", /*playbackRate*/ ctx[0]);
			set_custom_element_data(vime_default_settings, "playback-quality", /*playbackQuality*/ ctx[1]);
			set_custom_element_data(vime_default_settings, "is-captions-active", /*isCaptionsActive*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, vime_default_settings, anchor);

			if (default_slot) {
				default_slot.m(vime_default_settings, null);
			}

			/*vime_default_settings_binding*/ ctx[12](vime_default_settings);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 1024) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[10], dirty, null, null);
				}
			}

			if (!current || dirty & /*playbackRate*/ 1) {
				set_custom_element_data(vime_default_settings, "playback-rate", /*playbackRate*/ ctx[0]);
			}

			if (!current || dirty & /*playbackQuality*/ 2) {
				set_custom_element_data(vime_default_settings, "playback-quality", /*playbackQuality*/ ctx[1]);
			}

			if (!current || dirty & /*isCaptionsActive*/ 4) {
				set_custom_element_data(vime_default_settings, "is-captions-active", /*isCaptionsActive*/ ctx[2]);
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
			if (detaching) detach(vime_default_settings);
			if (default_slot) default_slot.d(detaching);
			/*vime_default_settings_binding*/ ctx[12](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { i18n = undefined } = $$props;
	let { playbackRate = undefined } = $$props;
	let { playbackRates = undefined } = $$props;
	let { playbackQuality = undefined } = $$props;
	let { playbackQualities = undefined } = $$props;
	let { isCaptionsActive = undefined } = $$props;
	let { currentCaption = undefined } = $$props;
	let { textTracks = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(13, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(3, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	let { $$slots = {}, $$scope } = $$props;

	function vime_default_settings_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("i18n" in $$props) $$invalidate(4, i18n = $$props.i18n);
		if ("playbackRate" in $$props) $$invalidate(0, playbackRate = $$props.playbackRate);
		if ("playbackRates" in $$props) $$invalidate(5, playbackRates = $$props.playbackRates);
		if ("playbackQuality" in $$props) $$invalidate(1, playbackQuality = $$props.playbackQuality);
		if ("playbackQualities" in $$props) $$invalidate(6, playbackQualities = $$props.playbackQualities);
		if ("isCaptionsActive" in $$props) $$invalidate(2, isCaptionsActive = $$props.isCaptionsActive);
		if ("currentCaption" in $$props) $$invalidate(7, currentCaption = $$props.currentCaption);
		if ("textTracks" in $$props) $$invalidate(8, textTracks = $$props.textTracks);
		if ("$$scope" in $$props) $$invalidate(10, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*__mounted, i18n*/ 8208) {
			$: if (__mounted) setProp("i18n", i18n);
		}

		if ($$self.$$.dirty & /*__mounted, playbackRates*/ 8224) {
			$: if (__mounted) setProp("playbackRates", playbackRates);
		}

		if ($$self.$$.dirty & /*__mounted, playbackQualities*/ 8256) {
			$: if (__mounted) setProp("playbackQualities", playbackQualities);
		}

		if ($$self.$$.dirty & /*__mounted, currentCaption*/ 8320) {
			$: if (__mounted) setProp("currentCaption", currentCaption);
		}

		if ($$self.$$.dirty & /*__mounted, textTracks*/ 8448) {
			$: if (__mounted) setProp("textTracks", textTracks);
		}
	};

	return [
		playbackRate,
		playbackQuality,
		isCaptionsActive,
		__ref,
		i18n,
		playbackRates,
		playbackQualities,
		currentCaption,
		textTracks,
		getWebComponent,
		$$scope,
		$$slots,
		vime_default_settings_binding
	];
}

class VimeDefaultSettings extends SvelteComponent {
  $$prop_def: VimeDefaultSettingsProps;
  $$events_def: VimeDefaultSettingsEvents;
  $$slot_def: VimeDefaultSettingsSlots;

  $on<K extends keyof VimeDefaultSettingsEvents>(type: K, callback: (e: VimeDefaultSettingsEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<VimeDefaultSettingsProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			i18n: 4,
			playbackRate: 0,
			playbackRates: 5,
			playbackQuality: 1,
			playbackQualities: 6,
			isCaptionsActive: 2,
			currentCaption: 7,
			textTracks: 8,
			getWebComponent: 9
		});
	}

	get getWebComponent(): HTMLVimeDefaultSettingsElement | undefined {
		return this.$$.ctx[9];
	}
}

export default VimeDefaultSettings;