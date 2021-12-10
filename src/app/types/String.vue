<template>
  <input
    v-bind="$props"
    v-bind:placeholder="this.placeholder || this.default"
    v-on:change="propagate"
    v-bind:value="value"
    type="text"
  />
</template>

<script>
import propagate from "../shared/propagate";
import createdHook from "../shared/commitOnCreate";
import props from "../shared/props";

export default {
  methods: {
    propagate,
  },
  created: createdHook,
  inject: ['rootID'],
  props: {
    ...props,
    value: {
      type: [String, Number],
      default: ''
    },
  },
};
</script>
