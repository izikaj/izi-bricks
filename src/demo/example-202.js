import init from '../lib';
import prepare from './prepare';

const { editor, result } = prepare({
  title: '[List] Example 2: fixed simple list',
  description: 'todo: some description'
});

const config = {
  as: "object",
  fields: [{
    name: "list1",
    title: "List 1",
    as: "list",
    allowAdd: false,
    allowRemove: false,
    fields: [{
        as: "string",
        name: "title",
        title: "Title"
      },
      {
        as: "number",
        default: 5,
        name: "count"
      },
      {
        as: "boolean",
        default: true,
        name: "is_visible",
        title: "Is Visible"
      }
    ],
    items: [
      { title: 'Some default title' },
      { count: -99, is_visible: false },
    ]
  }]
}

init(editor, {
  ...config,
  onChange(data) {
    result.innerText = JSON.stringify(data, null, '  ');
  },
});

export default {};
