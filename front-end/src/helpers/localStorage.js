export const readLocal = (key) => JSON.parse(localStorage.getItem(key));

export const saveLocal = (key, obj) => localStorage.setItem(key, JSON.stringify(obj));

export const removeLocalKey = (key) => localStorage.removeItem(key);

export const clearLocal = () => localStorage.clear();

export const checkLocal = (key) => {
  if (!readLocal(key)) saveLocal(key, {});
  readLocal(key);
};
