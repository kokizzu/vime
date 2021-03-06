/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@vime/core';


interface VimeSliderProps {
  
  /** A number that specifies the granularity that the value must adhere to. */
  step?: Components.VimeSlider["step"]
  
  /** The lowest value in the range of permitted values. */
  min?: Components.VimeSlider["min"]
  
  /** The greatest permitted value. */
  max?: Components.VimeSlider["max"]
  
  /** The current value. */
  value?: Components.VimeSlider["value"]
  
  /** Human-readable text alternative for the current value. Defaults to `value:max` percentage. */
  valueText?: Components.VimeSlider["valueText"]
  
  /** A human-readable label for the purpose of the slider. */
  label?: Components.VimeSlider["label"]
}

interface VimeSliderEvents {
  
  /** Emitted when the value of the underlying `input` field changes. */
  vValueChange: Parameters<JSX.VimeSlider["onVValueChange"]>[0]
}

interface VimeSliderSlots {
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
	let vime_slider;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[10].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[9], null);

	return {
		c() {
			vime_slider = element("vime-slider");
			if (default_slot) default_slot.c();
			set_custom_element_data(vime_slider, "step", /*step*/ ctx[0]);
			set_custom_element_data(vime_slider, "min", /*min*/ ctx[1]);
			set_custom_element_data(vime_slider, "max", /*max*/ ctx[2]);
			set_custom_element_data(vime_slider, "value", /*value*/ ctx[3]);
			set_custom_element_data(vime_slider, "value-text", /*valueText*/ ctx[4]);
			set_custom_element_data(vime_slider, "label", /*label*/ ctx[5]);
		},
		m(target, anchor) {
			insert(target, vime_slider, anchor);

			if (default_slot) {
				default_slot.m(vime_slider, null);
			}

			/*vime_slider_binding*/ ctx[11](vime_slider);
			current = true;

			if (!mounted) {
				dispose = listen(vime_slider, "vValueChange", /*onEvent*/ ctx[7]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 512) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[9], dirty, null, null);
				}
			}

			if (!current || dirty & /*step*/ 1) {
				set_custom_element_data(vime_slider, "step", /*step*/ ctx[0]);
			}

			if (!current || dirty & /*min*/ 2) {
				set_custom_element_data(vime_slider, "min", /*min*/ ctx[1]);
			}

			if (!current || dirty & /*max*/ 4) {
				set_custom_element_data(vime_slider, "max", /*max*/ ctx[2]);
			}

			if (!current || dirty & /*value*/ 8) {
				set_custom_element_data(vime_slider, "value", /*value*/ ctx[3]);
			}

			if (!current || dirty & /*valueText*/ 16) {
				set_custom_element_data(vime_slider, "value-text", /*valueText*/ ctx[4]);
			}

			if (!current || dirty & /*label*/ 32) {
				set_custom_element_data(vime_slider, "label", /*label*/ ctx[5]);
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
			if (detaching) detach(vime_slider);
			if (default_slot) default_slot.d(detaching);
			/*vime_slider_binding*/ ctx[11](null);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { step = undefined } = $$props;
	let { min = undefined } = $$props;
	let { max = undefined } = $$props;
	let { value = undefined } = $$props;
	let { valueText = undefined } = $$props;
	let { label = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(6, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	let { $$slots = {}, $$scope } = $$props;

	function vime_slider_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(6, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("step" in $$props) $$invalidate(0, step = $$props.step);
		if ("min" in $$props) $$invalidate(1, min = $$props.min);
		if ("max" in $$props) $$invalidate(2, max = $$props.max);
		if ("value" in $$props) $$invalidate(3, value = $$props.value);
		if ("valueText" in $$props) $$invalidate(4, valueText = $$props.valueText);
		if ("label" in $$props) $$invalidate(5, label = $$props.label);
		if ("$$scope" in $$props) $$invalidate(9, $$scope = $$props.$$scope);
	};

	return [
		step,
		min,
		max,
		value,
		valueText,
		label,
		__ref,
		onEvent,
		getWebComponent,
		$$scope,
		$$slots,
		vime_slider_binding
	];
}

class VimeSlider extends SvelteComponent {
  $$prop_def: VimeSliderProps;
  $$events_def: VimeSliderEvents;
  $$slot_def: VimeSliderSlots;

  $on<K extends keyof VimeSliderEvents>(type: K, callback: (e: VimeSliderEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<VimeSliderProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			step: 0,
			min: 1,
			max: 2,
			value: 3,
			valueText: 4,
			label: 5,
			getWebComponent: 8
		});
	}

	get getWebComponent(): HTMLVimeSliderElement | undefined {
		return this.$$.ctx[8];
	}
}

export default VimeSlider;