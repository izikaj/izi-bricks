import init from '../lib';
import prepare from './prepare';

const { editor, result } = prepare({
  title: 'Example 12: todo',
  description: 'todo: some description'
})

const config = {
  as: "object",
  fields: []
};

const value = {

};

init(editor, {
  ...config,
  value,
  onChange(data) {
    result.innerText = JSON.stringify(data, null, '  ');
  },
});

export default {};
