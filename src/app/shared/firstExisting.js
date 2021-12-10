function firstExisting(...args) {
  for (const item of args) {
    if (item !== undefined && item !== null && item !== '') {
      return item;
    }
  }
  return args[args.length - 1];
}

export default firstExisting;
