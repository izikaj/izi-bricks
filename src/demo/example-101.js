import init from '../lib';
import prepare from './prepare';

const { editor, result } = prepare({
  title: '[Hash] Example 1: nested object',
  description: 'todo: some desc'
})

const config = {
  as: "object",
  fields: [{
      name: "string1",
      title: "String 1",
      as: "string",
      required: true,
      placeholder: "input some string"
    },
    {
      name: "object1",
      title: "Object 1",
      as: "object",
      fields: [{
          title: "Nseted Title",
          name: "title",
          as: "string"
        },
        {
          title: "Nested Counter",
          name: "count",
          as: "number",
          default: 5
        },
        {
          title: "Some Check",
          name: "is_visible",
          as: "boolean",
          default: "yes"
        }
      ]
    }
  ]
}

init(editor, {
  ...config,
  onChange(data) {
    result.innerText = JSON.stringify(data, null, '  ');
  },
});

export default {};
