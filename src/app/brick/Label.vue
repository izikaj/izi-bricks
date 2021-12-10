<template>
  <label v-bind:for="id">{{ text }}<span v-if="required">*</span></label>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
