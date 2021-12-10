function normalizedParts(path) {
  if (Array.isArray(path)) {
    return path;
  }

  if (typeof path === 'number') {
    return [path];
  }

  return path.toString().split('.');
}

function isNumeric(value) {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return true;
  }

  if (typeof value === 'string' && /^\d+$/.test(value)) {
    return true;
  }

  return false
}

function dig(target, parts) {
  for (const part of parts) {
    if (typeof target === 'object' && target.hasOwnProperty(part)) {
      target = target[part];
    } else {
      return undefined;
    }
  }
  return target;
}

function digForHead(target, parts) {
  for (let index = 1; index < parts.length; index++) {
    const curr = parts[index - 1];
    const next = parts[index];

    if (typeof target[curr] === 'undefined') {
      // need to be created object
      const newObj = isNumeric(next) ? [] : {};
      target[curr] = newObj;
    }

    target = target[curr];
  }
  return target;
}

function compact(array) {
  let cursor = 0;
  for (let index = 0; index < array.length; index++) {
    if (typeof array[index] !== 'undefined') {
      array[cursor] = array[index];
      delete(array[index]);
      cursor = cursor + 1;
    }
  }
  array.length = cursor;
  return array;
}

function nested(data) {
  var $data = data;
  var $fn = function() {};

  $fn.reset = (data) => {
    $data = data || {};
  }
  $fn.clear = () => $fn.reset()
  $fn.get = (path) => {
    return dig($data, normalizedParts(path));
  }
  $fn.set = (path, value) => {
    const parts = normalizedParts(path);
    const head = digForHead($data, parts);
    const lastKey = parts[parts.length - 1];
    head[lastKey] = value;
  }
  $fn.remove = (path) => {
    const parts = normalizedParts(path);
    const head = digForHead($data, parts);
    const lastKey = parts[parts.length - 1];
    delete(head[lastKey]);
  }
  return $fn;
}

export default nested;
