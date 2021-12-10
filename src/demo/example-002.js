import init from '../lib';
import prepare from './prepare';

const { editor, result } = prepare({
  title: 'Example 2: String input',
  description: 'todo: some description'
})

const config = {
  as: "object",
  fields: [{
      as: 'string',
      name: 'string1'
    },
    {
      as: 'string',
      name: 'string2',
      title: 'With title set'
    },
    {
      as: 'string',
      name: 'string3',
      title: 'With require',
      required: true
    },
    {
      as: 'string',
      name: 'string4',
      title: 'With placeholder',
      placeholder: 'Sample placeholder'
    },
    {
      as: 'string',
      name: 'string5',
      title: 'With default',
      default: 'TODO'
    },
    {
      as: 'string',
      name: 'string6',
      title: 'With value passed'
    },
    {
      as: 'string',
      name: 'string7',
      title: 'With values combo',
      placeholder: 'sample 1',
      default: 'sample 2'
    },
  ]
}

const value = {
  string6: 'sample value exists',
  string7: 'sample 3'
}

init(editor, {
  ...config,
  value,
  onChange(data) {
    result.innerText = JSON.stringify(data, null, '  ');
  },
});

export default {};
