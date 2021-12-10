const props = {
  name: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: () => Math.random().toString(36).slice(2, 12)
  },
  path: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  title: String,
  placeholder: String,
  default: {
    type: [Number, String, Boolean, Array, Object],
    default: undefined
  },
  collection: Array,
  step: Number,
  min: Number,
  max: Number,
  as: String,
  fields: Array,
  types: Array,
  items: Array,
  allowAdd: {
    type: Boolean,
    default: true
  },
  allowRemove: {
    type: Boolean,
    default: true
  },
  value: {
    type: [Number, String, Boolean, Array, Object],
    default: undefined
  }
};

export default props;
