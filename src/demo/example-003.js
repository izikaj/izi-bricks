import init from '../lib';
import prepare from './prepare';

const { editor, result } = prepare({
  title: 'Example 3: Numeric input',
  description: 'todo: some description'
})

const config = {
  as: "object",
  fields: [
    {
      as: 'number',
      name: 'number1'
    }, {
      as: 'number',
      name: 'number2',
      title: 'With title set'
    }, {
      as: 'number',
      name: 'number3',
      title: 'With require',
      required: true
    }, {
      as: 'number',
      name: 'number4',
      title: 'With placeholder',
      placeholder: 'Sample placeholder'
    }, {
      as: 'number',
      name: 'number5',
      title: 'With default',
      default: 99
    }, {
      as: 'number',
      name: 'number6',
      title: 'With value passed'
    }, {
      as: 'number',
      name: 'number7',
      min: 10,
      max: 30,
      step: 2,
      default: 20,
      title: 'With min/max/step'
    },
  ]
}

const value = {
  number6: 123
}

init(editor, {
  ...config,
  value,
  onChange(data) {
    result.innerText = JSON.stringify(data, null, '  ');
  },
});

export default {};
