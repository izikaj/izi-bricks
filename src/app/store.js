import { createStore } from 'vuex';
import nested from './shared/nested';
import compactJson from "./shared/compactJson";

const store = createStore({
  state: () => ({
    object: {},
    configs: {},
    values: {},
  }),
  getters: {
    value: (state) => ((id) => compactJson(state.values[id])),
    config: (state) => ((id) => state.configs[id] || {}),
  },
  mutations: {
    update(state, { id, path, value }) {
      nested(state.values[id]).set(path, value);
    },
    remove(state, { id, path }) {
      nested(state.values[id]).remove(path);
    },
    setup(state, { id, value, config }) {
      state.values[id] = value || {};
      state.configs[id] = config || {};
    }
  }
});


export default store;
