import init from '../lib';
import raw from './example-501.json';
import prepare from './prepare';

const { editor, result } = prepare({
  title: '[Complex] Example: 1',
  description: 'Witch multiple objects & lists & with existing value'
})

init(editor, {
  ...raw.config,
  value: raw.value,
  onChange(data) {
    result.innerText = JSON.stringify(data, null, '  ');
  },
});

export default {};
