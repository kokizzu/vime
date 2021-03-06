/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@vime/core';


interface VimeControlGroupProps {
  
  /** Determines where to add spacing/margin. The amount of spacing is determined by the CSS variable
`--control-group-spacing`. */
  space?: Components.VimeControlGroup["space"]
}

interface VimeControlGroupEvents {
  
}

interface VimeControlGroupSlots {
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
	let vime_control_group;
	let current;
	const default_slot_template = /*$$slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

	return {
		c() {
			vime_control_group = element("vime-control-group");
			if (default_slot) default_slot.c();
			set_custom_element_data(vime_control_group, "space", /*space*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, vime_control_group, anchor);

			if (default_slot) {
				default_slot.m(vime_control_group, null);
			}

			/*vime_control_group_binding*/ ctx[5](vime_control_group);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 8) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, null, null);
				}
			}

			if (!current || dirty & /*space*/ 1) {
				set_custom_element_data(vime_control_group, "space", /*space*/ ctx[0]);
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
			if (detaching) detach(vime_control_group);
			if (default_slot) default_slot.d(detaching);
			/*vime_control_group_binding*/ ctx[5](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { space = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(1, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	let { $$slots = {}, $$scope } = $$props;

	function vime_control_group_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(1, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("space" in $$props) $$invalidate(0, space = $$props.space);
		if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	return [space, __ref, getWebComponent, $$scope, $$slots, vime_control_group_binding];
}

class VimeControlGroup extends SvelteComponent {
  $$prop_def: VimeControlGroupProps;
  $$events_def: VimeControlGroupEvents;
  $$slot_def: VimeControlGroupSlots;

  $on<K extends keyof VimeControlGroupEvents>(type: K, callback: (e: VimeControlGroupEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<VimeControlGroupProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { space: 0, getWebComponent: 2 });
	}

	get getWebComponent(): HTMLVimeControlGroupElement | undefined {
		return this.$$.ctx[2];
	}
}

export default VimeControlGroup;