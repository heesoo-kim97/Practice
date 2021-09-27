function getIn(path, data) {
  let level = 1;
  for(let i = 0; i < path.length; i++) {
    if (path[i] === '.') {
      level++;
    }
  }
  if (level === 2 && data[path] === {}) {
    return data[path];
  }
  return data[path];
}
