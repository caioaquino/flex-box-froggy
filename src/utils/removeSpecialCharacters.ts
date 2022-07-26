export const removeSpecialCharacters = (value: any) => {
  const result = JSON.stringify(value)
    .replaceAll("{", "")
    .replaceAll("}", "")
    .replaceAll('"', "")
    .replaceAll(",", ";\n");

  return result;
};
