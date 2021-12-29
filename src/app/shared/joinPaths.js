function joinPaths(parent, name) {
  if (parent === undefined || parent === "") {
    return name;
  }
  return [parent, name].join(".");
}

export default joinPaths;
