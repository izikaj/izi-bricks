import init from '../lib';
import prepare from './prepare';

const { editor, result } = prepare({
  title: '[List] Example 4: typed list',
  description: 'todo: some description'
})

const config = {
  as: "object",
  fields: [{
    as: 'list',
    name: 'items',
    types: [{
        type: 'line',
        as: 'string',
        required: true,
        title: 'Simple line'
      },
      {
        type: 'counter',
        as: 'number',
        title: 'Simple number',
        default: 1,
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
            placeholder: 'type some title...'
          },
          {
            as: 'number',
            name: 'count',
            title: 'Count',
            placeholder: 0
          },
          {
            as: 'boolean',
            name: 'is_visible',
            title: 'Is shown',
            default: false,
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
          placeholder: 'type some title...'
        }, {
          as: 'text',
          name: 'description',
          title: 'Description'
        }]
      },
    ],
    items: [{
      type: 'line',
      value: 'Some predefined line'
    }, {
      type: 'combo2',
      title: 'Some predefined line 1',
      description: 'Example description'
    }, {
      type: 'combo2',
      title: 'Some predefined line'
    }]
  }]
}

init(editor, {
  ...config,
  onChange(data) {
    result.innerText = JSON.stringify(data, null, '  ');
  },
});

export default {};
