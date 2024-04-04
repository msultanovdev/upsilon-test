export const setLocal = (key: string, value: string) => {
  localStorage.setItem(key, value);
};
export const getLocal = (key: string) => {
  return JSON.parse(localStorage.getItem(key) ?? "");
};
