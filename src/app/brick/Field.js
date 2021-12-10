import {
  h
} from 'vue';

import Label from './Label.vue';
import props from '../shared/props';
import mapping from '../shared/mapping';

const Field = {
  render: function () {
    const isRoot = this.path === '' && this.name === '';
    const Input = mapping(this.as);
    const isHidden = mapping.isHidden(Input);
    const isHash = mapping.isHash(Input);
    const isList = mapping.isList(Input);
    const hideLabel = (
      isRoot || isHidden || isHash || isList
    );
    const label = hideLabel ? undefined : (this.title || this.name);

    return h(
      'div', {
        class: isHidden ? 'field-hidden' : 'field'
      }, [
        label && h(Label, {
          id: this.id,
          text: label,
          required: this.required
        }),
        h(Input, this.$props),
        // h('span', {
        //   style: 'display:none;'
        // }, JSON.stringify(this.$props)),
      ]
    );
  },
  // inject: ['rootID'],
  props,
}

export default Field;
