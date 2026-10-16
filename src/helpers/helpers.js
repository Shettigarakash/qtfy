export const truncate = (str, length) => {
  if (!str) return "";
  return str.length > length ? str.slice(0, length) + "..." : str;
};
