/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@vime/core';


interface VimeUiProps {
  
  /**  */
  isVideoView?: Components.VimeUi["isVideoView"]
  
  /**  */
  playsinline?: Components.VimeUi["playsinline"]
  
  /**  */
  isFullscreenActive?: Components.VimeUi["isFullscreenActive"]
}

interface VimeUiEvents {
  
}

interface VimeUiSlots {
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
	let vime_ui;
	let current;
	const default_slot_template = /*$$slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	return {
		c() {
			vime_ui = element("vime-ui");
			if (default_slot) default_slot.c();
			set_custom_element_data(vime_ui, "is-video-view", /*isVideoView*/ ctx[0]);
			set_custom_element_data(vime_ui, "playsinline", /*playsinline*/ ctx[1]);
			set_custom_element_data(vime_ui, "is-fullscreen-active", /*isFullscreenActive*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, vime_ui, anchor);

			if (default_slot) {
				default_slot.m(vime_ui, null);
			}

			/*vime_ui_binding*/ ctx[7](vime_ui);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 32) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
				}
			}

			if (!current || dirty & /*isVideoView*/ 1) {
				set_custom_element_data(vime_ui, "is-video-view", /*isVideoView*/ ctx[0]);
			}

			if (!current || dirty & /*playsinline*/ 2) {
				set_custom_element_data(vime_ui, "playsinline", /*playsinline*/ ctx[1]);
			}

			if (!current || dirty & /*isFullscreenActive*/ 4) {
				set_custom_element_data(vime_ui, "is-fullscreen-active", /*isFullscreenActive*/ ctx[2]);
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
			if (detaching) detach(vime_ui);
			if (default_slot) default_slot.d(detaching);
			/*vime_ui_binding*/ ctx[7](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { isVideoView = undefined } = $$props;
	let { playsinline = undefined } = $$props;
	let { isFullscreenActive = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(3, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	let { $$slots = {}, $$scope } = $$props;

	function vime_ui_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("isVideoView" in $$props) $$invalidate(0, isVideoView = $$props.isVideoView);
		if ("playsinline" in $$props) $$invalidate(1, playsinline = $$props.playsinline);
		if ("isFullscreenActive" in $$props) $$invalidate(2, isFullscreenActive = $$props.isFullscreenActive);
		if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	return [
		isVideoView,
		playsinline,
		isFullscreenActive,
		__ref,
		getWebComponent,
		$$scope,
		$$slots,
		vime_ui_binding
	];
}

class VimeUi extends SvelteComponent {
  $$prop_def: VimeUiProps;
  $$events_def: VimeUiEvents;
  $$slot_def: VimeUiSlots;

  $on<K extends keyof VimeUiEvents>(type: K, callback: (e: VimeUiEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<VimeUiProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			isVideoView: 0,
			playsinline: 1,
			isFullscreenActive: 2,
			getWebComponent: 4
		});
	}

	get getWebComponent(): HTMLVimeUiElement | undefined {
		return this.$$.ctx[4];
	}
}

export default VimeUi;