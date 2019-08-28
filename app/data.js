const LS = window.localStorage;

const getKey = function(index) {
  return LS.key(index)
}
const create = function(key, value) {
  LS.setItem(key, value);
}
const get = function(key) {
  let keyValue = LS.getItem(key)
  try {keyValue = JSON.parse(keyValue);} catch(err) {}
  return keyValue;
}

const remove = function(key) {
  return LS.removeItem(key);
}

const count = function(key) {
  return LS.length;
}
