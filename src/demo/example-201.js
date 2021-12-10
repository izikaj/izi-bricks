import init from '../lib';
import prepare from './prepare';

const { editor, result } = prepare({
  title: '[List] Example 1: simple list',
  description: 'todo: some description'
})

const config = {
  as: "object",
  fields: [{
    name: "list1",
    title: "List 1",
    as: "list",
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
    ]
  }]
}

const value = {
  list1: [{
    title: "Some title",
    count: 1,
    is_visible: true
  }, {
    title: "Some other title",
    count: 999,
    is_visible: false
  }]
}

init(editor, {
  ...config,
  value,
  onChange(data) {
    result.innerText = JSON.stringify(data, null, '  ');
  },
});

export default {};
