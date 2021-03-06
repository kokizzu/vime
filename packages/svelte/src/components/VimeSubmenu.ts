/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@vime/core';


interface VimeSubmenuProps {
  
  /** The title of the submenu. */
  label?: Components.VimeSubmenu["label"]
  
  /** Whether the submenu should be displayed or not. */
  hidden?: Components.VimeSubmenu["hidden"]
  
  /** This can provide additional context about the current state of the submenu. For example, the
hint could be the currently selected option if the submenu contains a radio group. */
  hint?: Components.VimeSubmenu["hint"]
  
  /** Whether the submenu is open/closed. */
  active?: Components.VimeSubmenu["active"]
}

interface VimeSubmenuEvents {
  
}

interface VimeSubmenuSlots {
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
	let vime_submenu;
	let current;
	const default_slot_template = /*$$slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	return {
		c() {
			vime_submenu = element("vime-submenu");
			if (default_slot) default_slot.c();
			set_custom_element_data(vime_submenu, "label", /*label*/ ctx[0]);
			vime_submenu.hidden = /*hidden*/ ctx[1];
			set_custom_element_data(vime_submenu, "hint", /*hint*/ ctx[2]);
			set_custom_element_data(vime_submenu, "active", /*active*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, vime_submenu, anchor);

			if (default_slot) {
				default_slot.m(vime_submenu, null);
			}

			/*vime_submenu_binding*/ ctx[8](vime_submenu);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 64) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
				}
			}

			if (!current || dirty & /*label*/ 1) {
				set_custom_element_data(vime_submenu, "label", /*label*/ ctx[0]);
			}

			if (!current || dirty & /*hidden*/ 2) {
				vime_submenu.hidden = /*hidden*/ ctx[1];
			}

			if (!current || dirty & /*hint*/ 4) {
				set_custom_element_data(vime_submenu, "hint", /*hint*/ ctx[2]);
			}

			if (!current || dirty & /*active*/ 8) {
				set_custom_element_data(vime_submenu, "active", /*active*/ ctx[3]);
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
			if (detaching) detach(vime_submenu);
			if (default_slot) default_slot.d(detaching);
			/*vime_submenu_binding*/ ctx[8](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { label } = $$props;
	let { hidden = undefined } = $$props;
	let { hint = undefined } = $$props;
	let { active = undefined } = $$props;
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

	function vime_submenu_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("label" in $$props) $$invalidate(0, label = $$props.label);
		if ("hidden" in $$props) $$invalidate(1, hidden = $$props.hidden);
		if ("hint" in $$props) $$invalidate(2, hint = $$props.hint);
		if ("active" in $$props) $$invalidate(3, active = $$props.active);
		if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
	};

	return [
		label,
		hidden,
		hint,
		active,
		__ref,
		getWebComponent,
		$$scope,
		$$slots,
		vime_submenu_binding
	];
}

class VimeSubmenu extends SvelteComponent {
  $$prop_def: VimeSubmenuProps;
  $$events_def: VimeSubmenuEvents;
  $$slot_def: VimeSubmenuSlots;

  $on<K extends keyof VimeSubmenuEvents>(type: K, callback: (e: VimeSubmenuEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<VimeSubmenuProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			label: 0,
			hidden: 1,
			hint: 2,
			active: 3,
			getWebComponent: 5
		});
	}

	get getWebComponent(): HTMLVimeSubmenuElement | undefined {
		return this.$$.ctx[5];
	}
}

export default VimeSubmenu;