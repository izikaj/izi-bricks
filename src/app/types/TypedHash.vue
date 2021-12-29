<script setup>
import Field from "../brick/Field";
import Select from "./Select.vue";
import Hash from "./Hash.vue";
</script>

<template>
  <div class="hash-pane" :class="{ titled: viewTitle }">
    <div class="hash-pane-wrapper">
      <div class="hash-title" v-if="viewTitle">{{ viewTitle }}</div>

      <select v-on:change="onTypeChange" v-model="typeId">
        <option
          v-for="item in typesList"
          v-bind:key="item.value"
          v-bind:value="item.value"
        >
          {{ item.title }}
        </option>
      </select>

      <Field v-for="item in list" v-bind="item" v-bind:key="item.id" />
    </div>
  </div>
</template>

<script>
import props from "../shared/props";
import firstExisting from "../shared/firstExisting";
import uid from "../shared/uid";
import joinPaths from "../shared/joinPaths";
import typeNormalize from "../shared/typeNormalize";

function buildList({ path, value, fields }) {
  return (fields || []).map((item) => {
    const itemValue = firstExisting(
      item.value,
      (value || {})[item.name],
      item.default,
      undefined
    );
    return {
      ...item,
      path: joinPaths(path, item.name),
      id: item.id || uid(),
      value: itemValue,
    };
  });
}

function normalizeTypes(typesList) {
  return firstExisting(typesList, []).map((type) => typeNormalize(type));
}

function mapTypes(typesList) {
  const types = {};
  firstExisting(typesList).forEach((type) => {
    types[type.type] = type;
  });
  return types;
}

function listForType({ typesMapping, typeId, path, value }) {
  value = value || {};
  const type = typesMapping[typeId];
  return buildList({
    ...type,
    path,
    value,
  });
}

export default {
  data() {
    const types = normalizeTypes(this.types || []);
    const viewTitle = firstExisting(this.title, this.name);
    const typesList = types.map(function (type) {
      return {
        value: type.type,
        title: type.title || type.name || type.type,
      };
    });
    let defaultType = typesList[0];
    const value = firstExisting(this.value, this.default);
    if (value && value.type) {
      typesList.forEach((type) => {
        if (type.value === value.type) {
          defaultType = type;
        }
      });
    }
    const typesMapping = mapTypes(types);

    let typeId, list;
    typeId = defaultType.value;
    list = listForType({
      typesMapping,
      typeId,
      path: this.path,
      value: this.value,
    });
    return {
      viewTitle,
      typesList,
      typesMapping,
      typeId,
      list,
    };
  },
  inject: ["rootID"],
  methods: {
    onTypeChange(_evt) {
      const { path, typeId } = this;
      console.warn("onTypeChange", typeId);

      this.$store.commit("update", {
        id: this.rootID,
        path,
        value: {},
      });

      const types = {};
      firstExisting(this.types, []).forEach(function (type) {
        types[type.type] = type;
      });

      const type = typeNormalize(types[typeId]);
      const list = buildList({
        ...type,
        path,
        value: {},
      });
      this.list = list;
    },
  },
  props: {
    ...props,
    types: {
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
