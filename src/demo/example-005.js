import init from '../lib';
import prepare from './prepare';

const { editor, result } = prepare({
  title: 'Example 5: text input (textarea)',
  description: 'todo: some description'
})

const config = {
  as: "object",
  fields: [{
      as: 'text',
      name: 'text1'
    },
    {
      as: 'text',
      name: 'text2',
      title: 'With title'
    },
    {
      as: 'text',
      name: 'text3',
      title: 'With require',
      required: true
    },
    {
      as: 'text',
      name: 'text4',
      title: 'With placeholder',
      placeholder: 'Some placeholder'
    },
    {
      as: 'text',
      name: 'text5',
      title: 'With default',
      default: 'Some preset text'
    },
    {
      as: 'text',
      name: 'text6',
      title: 'With value passed',
      default: true
    }
  ]
};

const value = {
  text6: `
    Excepteur do ut amet duis duis officia incididunt commodo exercitation
    laborum qui. Do adipisicing tempor sint voluptate pariatur tempor.
    Dolore amet irure ut quis aliqua eiusmod. Ullamco occaecat elit
    incididunt aliquip consectetur veniam deserunt ad nisi excepteur
    consectetur consequat.
  `.replace(/\s\s+/mg, ' ').trim()
};


init(editor, {
  ...config,
  value,
  onChange(data) {
    result.innerHTML = JSON.stringify(data, null, '  ').replace(/\\n/g, "<br/>");
  },
});

export default {};
