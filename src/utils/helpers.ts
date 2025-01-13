export const setLocal = (key: string, value: string) => {
  localStorage.setItem(key, value);
};
export const getLocal = (key: string) => {
  const localData = localStorage.getItem(key);
  if (!localData) return;
  return isJsonString(localData) ? JSON.parse(localData) : localData;
};

function isJsonString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
