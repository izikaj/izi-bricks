function extractValue(target) {
  if (/input/i.test(target.nodeName)) {
    if (/checkbox|radio/i.test(target.type)) {
      return target.checked;
    }
    if (/number/i.test(target.type)) {
      return parseFloat(target.value);
    }
  }

  return target.value;
}

function propagate(event) {
  const path = this.path;
  const value = extractValue(event.target);

  // console.warn('>>>', path, value);
  this.$store.commit("update", {
    id: this.rootID,
    path,
    value
  });
}

export default propagate;
