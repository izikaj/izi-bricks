function uid() {
  return Math.random().toString(36).slice(2, 12);
}

export default uid;
