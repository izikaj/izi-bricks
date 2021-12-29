import init from '../lib';
import prepare from './prepare';

const { editor, result } = prepare({
  title: '[Hash] Example 3: typed object with value & defaults',
  description: 'TODO: some description'
})

const config = {
  as: 'tobject',
  types: [{
      type: 'line',
      as: 'string',
      required: true,
      title: 'Simple line',
      default: 'some required line'
    },
    {
      type: 'counter',
      as: 'number',
      title: 'Simple number',
      default: '123',
    },
    {
      type: 'combo',
      as: 'object',
      title: 'Combo 1',
      fields: [{
          as: 'string',
          name: 'title',
          required: true,
          title: 'Title',
          placeholder: 'type some title...',
          default: 'some title'
        },
        {
          as: 'number',
          name: 'count',
          title: 'Count',
          placeholder: '0',
          default: '987'
        },
        {
          as: 'boolean',
          name: 'is_visible',
          title: 'Is shown',
          default: 'true'
        },
      ]
    },
    {
      type: 'combo2',
      as: 'object',
      title: 'Combo 2',
      fields: [{
        as: 'string',
        name: 'title',
        required: true,
        title: 'Title',
        placeholder: 'type some title...',
        default: 'title of combo 2'
      }, {
        as: 'text',
        name: 'description',
        title: 'Description',
        default: 'description of combo 2'
      }]
    },
  ],
  value: {
    type: 'combo',
    title: 'lorem ipsum dolor sit amet',
    count: '123456789',
    is_visible: 'true'
  }
}

init(editor, {
  ...config,
  onChange(data) {
    result.innerText = JSON.stringify(data, null, '  ');
  },
});

export default {};
