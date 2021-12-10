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
      <span v-if="withTypes">
        <ul class="drop">
          <li v-for="item in types" v-bind:key="item.type">
            <button type="button" @click.stop.prevent="addItem(item)">
              Add {{ item.title || item.type }} Item
            </button>
          </li>
        </ul>
      </span>
      <span v-if="withFields">
        <button type="button" @click.stop.prevent="addItem()">Add Item</button>
      </span>
    </div>
  </div>
</template>

<script>
import propagate from "../shared/propagate";
import props from "../shared/props";
import firstExisting from "../shared/firstExisting";
import typeNormalize from "../shared/typeNormalize";

function joinPaths(parent, name) {
  if (parent === undefined || parent === "") {
    return name;
  }
  return [parent, name].join(".");
}

function listItemIndex(path, cursor) {
  return {
    name: cursor.toString(),
    path: joinPaths(path, cursor),
  };
}

export default {
  data() {
    const viewTitle = firstExisting(this.title, this.name, undefined);
    const withTypes = Array.isArray(this.types) && this.types.length > 0;
    const withFields = Array.isArray(this.fields) && this.fields.length > 0;

    return {
      viewTitle,
      list: undefined,
      cursor: 0,
      withTypes,
      withFields,
    };
  },
  created() {
    const items = firstExisting(this.value, this.list, this.items, []);
    const list = [];
    const types = {};
    const fallback = { as: "object", fields: this.fields };
    if (this.withTypes) {
      firstExisting(this.types, []).forEach(function (type) {
        types[type.type] = type;
      });
    }
    let { cursor, path } = this;
    items.forEach(function (item) {
      const type = typeNormalize(types[item.type] || fallback);
      list.push({
        ...type,
        ...listItemIndex(path, cursor++),
        value: item,
      });
    });
    this.list = list;
    this.cursor = cursor;
  },
  methods: {
    propagate,
    addItem: function (data) {
      const type = typeNormalize(
        firstExisting(data, { as: "object", fields: this.fields })
      );

      data = {
        ...type,
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
