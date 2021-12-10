import init from '../lib';
import prepare from './prepare';

const { editor, result } = prepare({
  title: 'Example 4: boolean input (checkbox)',
  description: 'todo: some description'
})

const config = {
  as: "object",
  fields: [{
      as: 'boolean',
      name: 'boolean1',
    },
    {
      as: 'boolean',
      name: 'boolean2',
      title: 'With title'
    },
    {
      as: 'boolean',
      name: 'boolean3',
      title: 'With default',
      default: true
    },
    {
      as: 'boolean',
      name: 'boolean4',
      title: 'With value',
      default: true
    },
  ]
};

const value = {
  boolean4: true,
};

init(editor, {
  ...config,
  value,
  onChange(data) {
    result.innerText = JSON.stringify(data, null, '  ');
  },
});

export default {};
