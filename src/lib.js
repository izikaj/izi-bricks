import { createApp, h } from 'vue';
import Field from "./app/brick/Field";
import store from './app/store';
import uid from './app/shared/uid';
import debounce from './app/shared/debounce';

import "./app/styles.css";

const noop = function() {};
const init = function(rootNode, { value, onChange, ...config }) {
  const id = uid();
  let propagateChanges;
  const props = {
    ...config,
    value
  };

  const RichRoot = {
    render() {
      return h(Field, props);
    },
    provide: {
      rootID: id,
    },
    computed: {
      resultValue() {
        return this.$store.getters.value(id);
      },
    },
    created() {
      this.$store.commit('setup', { id, value, config });
    },
    watch: {
      resultValue() {
        propagateChanges(this.resultValue);
      }
    }
  }

  const app = createApp(RichRoot);
  propagateChanges = debounce(function(data) {
    (onChange || noop).call(app, data);
  });
  app.rootID = id;
  app.use(store);
  app.mount(rootNode);
}

if (typeof globalThis !== 'undefined') {
  globalThis.IziBricks = init;
}
if (typeof window !== 'undefined') {
  window.IziBricks = init;
}

export default init;
