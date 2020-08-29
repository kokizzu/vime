/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@vime/core';


interface VimeIconProps {
  
  /** The URL to an SVG element or fragment to load. */
  href?: Components.VimeIcon["href"]
  
  /** The color (fill) of the icon. */
  color?: Components.VimeIcon["color"]
  
  /** The amount to scale the size of the icon (respecting aspect ratio) up or down by. */
  scale?: Components.VimeIcon["scale"]
  
  /** The amount of transparency to add to the icon. */
  opacity?: Components.VimeIcon["opacity"]
}

interface VimeIconEvents {
  
}

interface VimeIconSlots {
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
	let vime_icon;
	let current;
	const default_slot_template = /*$$slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	return {
		c() {
			vime_icon = element("vime-icon");
			if (default_slot) default_slot.c();
			set_custom_element_data(vime_icon, "href", /*href*/ ctx[0]);
			set_custom_element_data(vime_icon, "color", /*color*/ ctx[1]);
			set_custom_element_data(vime_icon, "scale", /*scale*/ ctx[2]);
			set_custom_element_data(vime_icon, "opacity", /*opacity*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, vime_icon, anchor);

			if (default_slot) {
				default_slot.m(vime_icon, null);
			}

			/*vime_icon_binding*/ ctx[8](vime_icon);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 64) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
				}
			}

			if (!current || dirty & /*href*/ 1) {
				set_custom_element_data(vime_icon, "href", /*href*/ ctx[0]);
			}

			if (!current || dirty & /*color*/ 2) {
				set_custom_element_data(vime_icon, "color", /*color*/ ctx[1]);
			}

			if (!current || dirty & /*scale*/ 4) {
				set_custom_element_data(vime_icon, "scale", /*scale*/ ctx[2]);
			}

			if (!current || dirty & /*opacity*/ 8) {
				set_custom_element_data(vime_icon, "opacity", /*opacity*/ ctx[3]);
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
			if (detaching) detach(vime_icon);
			if (default_slot) default_slot.d(detaching);
			/*vime_icon_binding*/ ctx[8](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { href = undefined } = $$props;
	let { color = undefined } = $$props;
	let { scale = undefined } = $$props;
	let { opacity = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(4, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	let { $$slots = {}, $$scope } = $$props;

	function vime_icon_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("href" in $$props) $$invalidate(0, href = $$props.href);
		if ("color" in $$props) $$invalidate(1, color = $$props.color);
		if ("scale" in $$props) $$invalidate(2, scale = $$props.scale);
		if ("opacity" in $$props) $$invalidate(3, opacity = $$props.opacity);
		if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
	};

	return [
		href,
		color,
		scale,
		opacity,
		__ref,
		getWebComponent,
		$$scope,
		$$slots,
		vime_icon_binding
	];
}

class VimeIcon extends SvelteComponent {
  $$prop_def: VimeIconProps;
  $$events_def: VimeIconEvents;
  $$slot_def: VimeIconSlots;

  $on<K extends keyof VimeIconEvents>(type: K, callback: (e: VimeIconEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<VimeIconProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			href: 0,
			color: 1,
			scale: 2,
			opacity: 3,
			getWebComponent: 5
		});
	}

	get getWebComponent(): HTMLVimeIconElement | undefined {
		return this.$$.ctx[5];
	}
}

export default VimeIcon;