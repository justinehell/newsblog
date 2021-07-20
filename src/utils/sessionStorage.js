export const getStoredData = (keyName) => {
  return JSON.parse(sessionStorage.getItem(keyName));
};

export const setStoredData = (keyName, data) => {
  return sessionStorage.setItem(keyName, JSON.stringify(data));
};
