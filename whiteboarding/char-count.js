function charCounts(string) {
  const newObject = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== newObject[string[i]]) {
      newObject[string[i]] = 1;
    } else if (string[i] === newObject[string[i]]) {
      newObject[string[i]]++;
    }
  }
  return newObject;
}
