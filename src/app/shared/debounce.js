function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.call(this, ...args);
    }, timeout);
  };
}

export default debounce;
