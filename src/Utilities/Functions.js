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

export const renderArrayLabels = (arrToMap) => {
  return arrToMap.map((item) => <li key={item}>{item}</li>);
};

export const checkIfRecipeExisted = (favoriteStorage, obj) => {
  let flag = false;
  favoriteStorage.forEach((favorite) => {
    if (favorite.uri === obj.uri) {
      flag = true;
    }
  });
  return flag;
};
