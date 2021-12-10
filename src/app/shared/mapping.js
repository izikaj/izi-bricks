import Hidden from '../types/Hidden.vue';
import String from '../types/String.vue';
import Number from '../types/Number.vue';
import Text from '../types/Text.vue';
import Select from '../types/Select.vue';
import Boolean from '../types/Boolean.vue';
import Hash from '../types/Hash.vue';
import List from '../types/List.vue';

export const MAPPING = {
  hidden: Hidden,
  string: String,
  number: Number,
  numeric: Number,
  text: Text,
  ckeditor: Text,
  object: Hash,
  hash: Hash,
  list: List,
  select: Select,
  boolean: Boolean,
  toggle: Boolean,
  checkbox: Boolean,
}

export function isHidden(value) {
  return value === Hidden || MAPPING[value] === Hidden;
}

export function isHash(value) {
  return value === Hash || MAPPING[value] === Hash;
}

export function isList(value) {
  return value === List || MAPPING[value] === List;
}

export function isComplex(value) {
  return isHash(value) || isList(value);
}

const mapping = function (value) {
  return MAPPING[value] || String;
}
mapping.aliases = MAPPING;
mapping.isHidden = isHidden;
mapping.isHash = isHash;
mapping.isList = isList;
mapping.isComplex = isComplex;

export default mapping;
