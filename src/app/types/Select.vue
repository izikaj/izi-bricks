<template>
  <select v-bind="$props" v-on:change="propagate">
    <option
      v-for="item in optionsList"
      v-bind:key="item.value"
      v-bind:value="item.value"
    >
      {{ item.title }}
    </option>
  </select>
</template>

<script>
import propagate from "../shared/propagate";
import createdHook from "../shared/commitOnCreate";
import props from "../shared/props";

const Select = {
  data() {
    const items = this.collection || [];
    return {
      optionsList: items.map((item) => {
        let title, value;
        if (typeof item === "object" && item !== null) {
          if (Array.isArray(item)) {
            title = item[0];
            value = item[1] || item[0];
          } else {
            title = item.title || item.text;
            value = item.value || item.id;
          }
        } else {
          value = title = item.toString();
        }
        return { value, title };
      }),
    };
  },
  methods: {
    propagate,
  },
  created: createdHook,
  inject: ['rootID'],
  props: {
    ...props,
    collection: {
      type: Array,
      default: [],
    },
  },
};

export default Select;
</script>
