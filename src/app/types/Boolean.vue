<template>
  <span
    class="field-input-wrap"
    :class="{ 'field-on': curr, 'field-off': !curr }"
  >
    <input type="hidden" value="0" v-bind:name="name" />
    <input
      type="checkbox"
      value="1"
      v-model="curr"
      v-bind:id="id"
      v-bind:name="name"
      v-bind:checked="checked"
      v-on:change="propagate"
    />
    <label v-bind:for="id">{{ curr ? "YES" : "NO" }}</label>
  </span>
</template>

<script>
import firstExisting from "../shared/firstExisting";
import propagate from "../shared/propagate";
import props from "../shared/props";

const TRUE_VALUES = [
  true,
  1,
  "+",
  "y",
  "Y",
  "yes",
  "YES",
  "t",
  "T",
  "true",
  "TRUE",
  "ok",
  "OK",
];
const isTrue = (value) => TRUE_VALUES.indexOf(value) >= 0;

export default {
  data() {
    const checked = isTrue(firstExisting(this.value, this.default, undefined));
    return {
      curr: checked,
      checked,
    };
  },
  created() {
    const value = isTrue(firstExisting(this.value, this.default, undefined));
    const path = this.path;
    this.$store.commit("update", {
      id: this.rootID,
      path,
      value,
    });
  },
  methods: {
    propagate,
  },
  inject: ["rootID"],
  props,
};
</script>
