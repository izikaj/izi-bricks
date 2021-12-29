<script setup>
import Field from "../brick/Field";
</script>

<template>
  <div class="hash-pane" :class="{ titled: viewTitle }">
    <div class="hash-pane-wrapper">
      <div class="hash-title" v-if="viewTitle">{{ viewTitle }}</div>
      <Field v-for="item in list" v-bind="item" v-bind:key="item.id" />
    </div>
  </div>
</template>

<script>
import props from "../shared/props";
import firstExisting from "../shared/firstExisting";
import uid from "../shared/uid";
import joinPaths from "../shared/joinPaths";

export default {
  data() {
    const viewTitle = firstExisting(this.title, this.name, undefined);
    return {
      viewTitle,
      list: (this.fields || []).map((item) => {
        const value = firstExisting(
          item.value,
          (this.value || {})[item.name],
          item.default,
          undefined
        );
        return {
          ...item,
          path: joinPaths(this.path, item.name),
          id: item.id || uid(),
          value,
        };
      }),
    };
  },
  inject: ["rootID"],
  props: {
    ...props,
    fields: {
      type: Array,
      default: [],
    },
    value: {
      type: Object,
      default: {},
    },
  },
};
</script>
