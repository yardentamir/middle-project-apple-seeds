export function debounce(func, duration) {
  let timeout;
  return function (...args) {
    const effect = () => {
      timeout = null;
      return func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(effect, duration);
  };
}

export function filterObjByKey(objToFilter, onlyTheseKeysArr) {
  const filtered = Object.keys(objToFilter)
    .filter((key) => onlyTheseKeysArr.includes(key))
    .reduce((obj, key) => {
      obj[key] = objToFilter[key];
      return obj;
    }, {});

  return filtered;
}

export function renameKeys(obj, newKeys) {
  const keyValues = Object.keys(obj).map((key) => {
    const newKey = newKeys[key] || key;
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
}
