import init from '../lib';
import prepare from './prepare';

const { editor, result } = prepare({
  title: '[List] Example 3: deep nesting',
  description: 'todo: some description'
})

const config = {
  as: "object",
  fields: [{
    name: 'object',
    as: 'list',
    fields: [{
        as: 'string',
        name: 'text'
      },
      {
        name: 'level2',
        as: 'list',
        fields: [{
          as: 'string',
          name: 'text'
        }, {
          name: 'level3',
          as: 'list',
          fields: [{
            as: 'string',
            name: 'text'
          }],
          items: [{ text: 'item 1' }, { text: 'item 2' }],
        }],
        items: [{}],
      }
    ],
    items: [{}],
  }]
}

init(editor, {
  ...config,
  onChange(data) {
    result.innerText = JSON.stringify(data, null, '  ');
  },
});

export default {};
