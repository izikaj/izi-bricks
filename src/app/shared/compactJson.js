function compactHash(data) {
  const clean = {};

  Object.getOwnPropertyNames(data).forEach((key) => {
    const compacted = compactJson.call(this, data[key]);
    if (compacted !== undefined) {
      clean[key] = compacted;
    }
  });

  if (Object.getOwnPropertyNames(clean).length === 0) {
    return;
  }

  return clean;
}

function compactArray(data) {
  const clean = data.map((v) => compactJson.call(this, v))
                    .filter(v => v !== undefined);

  if (clean.length === 0) {
    return;
  }

  return clean;
}

function compactObject(data) {
  if (Array.isArray(data)) {
    return compactArray.call(this, data);
  }

  return compactHash.call(this, data);
}

function compactJson(data) {
  if (data === null || data === undefined) {
    return;
  }

  switch (typeof data) {
    case 'undefined':
      return;
    case 'boolean':
      return data;
    case 'string':
      return (data !== '') ? data : undefined;
    case 'number':
      return Number.isFinite(data) ? data : undefined;
    case 'function':
      return compactJson.call(this, data.call(this));
    case 'object':
      return compactObject.call(this, data);
  }

  return data.toString();
}

export default compactJson;
