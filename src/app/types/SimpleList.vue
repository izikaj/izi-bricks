<script setup>
import Field from "../brick/Field";
</script>

<template>
  <div class="list-pane" :class="{ titled: viewTitle }">
    <div class="list-title">{{ title || name }}</div>

    <div
      class="list-item-container"
      v-for="item in list"
      v-bind:key="item && item.id"
      :class="{
        'list-item-removed': !item,
      }"
    >
      <div
        class="list-item"
        v-if="item"
        :class="{ 'list-item-removeable': allowRemove }"
      >
        <Field v-bind="item" v-bind:name="null" />
        <button
          class="remove"
          type="button"
          v-if="allowRemove"
          @click="removeItem(item)"
        >
          remove
        </button>
      </div>
    </div>
    <div class="list-controls" v-if="allowAdd">
      <button type="button" @click.stop.prevent="addItem()">Add Item</button>
    </div>
  </div>
</template>

<script>
import propagate from "../shared/propagate";
import props from "../shared/props";
import firstExisting from "../shared/firstExisting";
import joinPaths from "../shared/joinPaths";

function listItemIndex(path, cursor) {
  return {
    name: cursor.toString(),
    path: joinPaths(path, cursor),
  };
}

export default {
  data() {
    const viewTitle = firstExisting(this.title, this.name, undefined);

    return {
      viewTitle,
      list: undefined,
      cursor: 0,
    };
  },
  created() {
    const items = firstExisting(this.value, this.list, this.items, this.default, []);
    const list = [];
    let { cursor, path, fields } = this;
    items.forEach(function (value) {
      list.push({
        as: "object",
        fields,
        ...listItemIndex(path, cursor++),
        value,
      });
    });
    this.list = list;
    this.cursor = cursor;
  },
  methods: {
    propagate,
    addItem: function (data) {
      const { fields } = this;
      data = {
        as: "object",
        fields,
        ...listItemIndex(this.path, this.cursor++),
      };

      this.list.push(data);
    },
    removeItem: function (item) {
      delete this.list[item.name];
      this.$store.commit("remove", {
        id: this.rootID,
        path: joinPaths(this.path, item.name),
      });
    },
  },
  inject: ["rootID"],
  props,
};
</script>
