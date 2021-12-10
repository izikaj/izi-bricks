import init from '../lib';
import prepare from './prepare';

const { editor, result } = prepare({
  title: 'Example 1: Basic example',
  description: 'todo: some description'
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
      name: "number1",
      title: "Number 1",
      as: "number",
      default: 99,
      min: 10,
      max: 100,
      step: 0.1
    },
    {
      name: "boolean1",
      title: "Yes-no 1",
      as: "boolean",
      default: "yes"
    },
    {
      name: "boolean2",
      title: "Yes-no 2",
      as: "boolean"
    },
    {
      name: "select1",
      title: "Select 1",
      as: "select",
      collection: [
        "1",
        "2",
        "3"
      ]
    },
    {
      name: "text1",
      title: "Text 1",
      as: "text",
      placeholder: "some text..."
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
