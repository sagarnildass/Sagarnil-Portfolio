export const truncateText = (text: string, length: number) => {
  if (text && text.length <= length) {
    return text;
  }
  return text && text.substring(0, length) + "...";
};
