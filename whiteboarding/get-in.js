function getIn(path, data) {
  let level = 1;
  for(let i = 0; i < path.length; i++) {
    if (path[i] === '.') {
      level++;
    }
  }
  if (level === 2) {
    console.log(data[path]);
  }
  return data[path];
}
