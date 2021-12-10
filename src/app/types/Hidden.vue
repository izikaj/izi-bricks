<template>
  <input
    v-bind="$props"
    v-bind:value="value"
    type="hidden"
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
      type: String,
      default: '',
      required: true
    },
  },
};
</script>
