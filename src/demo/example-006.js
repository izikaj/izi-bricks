import init from '../lib';
import prepare from './prepare';

const { editor, result } = prepare({
  title: 'Example 6: select',
  description: 'todo: some description'
})

const config = {
  as: "object",
  fields: [{
      as: 'select',
      name: 'select1',
      collection: ['1', '2', '3', '4', '5']
    },
    {
      as: 'select',
      name: 'select2',
      title: 'With title',
      collection: ['1', '2', '3', '4', '5']
    },
    {
      as: 'select',
      name: 'select3',
      title: 'With required',
      required: true,
      collection: ['1', '2', '3', '4', '5']
    },
    {
      as: 'select',
      name: 'select4',
      title: 'With placeholder',
      placeholder: 'Some placeholder',
      collection: ['1', '2', '3', '4', '5']
    },
    {
      as: 'select',
      name: 'select5',
      title: 'With default',
      default: '3',
      collection: ['1', '2', '3', '4', '5']
    },
    {
      as: 'select',
      name: 'select6',
      title: 'With value passed',
      collection: ['1', '2', '3', '4', '5']
    },
    {
      as: 'select',
      name: 'select7',
      title: 'With includeBlank',
      includeBlank: true,
      collection: ['1', '2', '3', '4', '5']
    },
    {
      as: 'select',
      name: 'select8',
      title: 'Collection [text, value]',
      collection: [
        ['Item 1', '1'],
        ['Item 2', '2'],
        ['Item 3', '3'],
        ['Item 4', '4'],
        ['Item 5', '5']
      ],
      value: '5'
    },
    {
      as: 'select',
      name: 'select9',
      title: 'Collection {text, value}',
      collection: [
        { text: 'Item 1', value: '1' },
        { text: 'Item 2', value: '2' },
        { text: 'Item 3', value: '3' },
        { text: 'Item 4', value: '4' },
        { text: 'Item 5', value: '5' }
      ]
    },
    {
      as: 'select',
      name: 'select10',
      title: 'Conflict value',
      collection: ['1', '2', '3', '4', '5']
    },
    {
      as: 'select',
      name: 'select11',
      title: 'Blank collection'
    },
    {
      as: 'select',
      name: 'select12',
      title: 'Single item',
      collection: ['TODO']
    },
  ]
};

const value = {
  select6: '4',
  select10: '-1',
};

init(editor, {
  ...config,
  value,
  onChange(data) {
    result.innerText = JSON.stringify(data, null, '  ');
  },
});

export default {};
