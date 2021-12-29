import Hidden from '../types/Hidden.vue';
import String from '../types/String.vue';
import Number from '../types/Number.vue';
import Text from '../types/Text.vue';
import Select from '../types/Select.vue';
import Boolean from '../types/Boolean.vue';
import Hash from '../types/Hash.vue';
import TypedHash from '../types/TypedHash.vue';
import SimpleList from '../types/SimpleList.vue';
import TypedList from '../types/TypedList.vue';

export const MAPPING = {
  hidden: Hidden,
  string: String,
  number: Number,
  numeric: Number,
  select: Select,
  boolean: Boolean,
  toggle: Boolean,
  checkbox: Boolean,
  text: Text,
  ckeditor: Text,
  // objects
  object: Hash,
  hash: Hash,
  tobject: TypedHash,
  thash: TypedHash,
  typed_hash: TypedHash,
  typedHash: TypedHash,
  'typed-hash': TypedHash,
  // lists
  list: SimpleList,
  slist: SimpleList,
  simpleList: SimpleList,
  simple_list: SimpleList,
  'simple-list': SimpleList,
  tlist: TypedList,
  typed_list: TypedList,
  'typed-list': TypedList,
  typedList: TypedList,
}

export function isHidden(value) {
  return value === Hidden || MAPPING[value] === Hidden;
}

export function isHash(value) {
  return (
    value === Hash || MAPPING[value] === Hash ||
    value === TypedHash || MAPPING[value] === TypedHash
  );
}

export function isList(value) {
  return (
    value === SimpleList || MAPPING[value] === SimpleList ||
    value === TypedList || MAPPING[value] === TypedList
  );
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
