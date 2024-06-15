export default function cleanset(set, startString) {
  if (!startString.length >= 1) return '';
  return Array.from(set).filter((el) => el.startsWith(startString))
    .map((word) => word.slice(startString.length))
    .join('-');
}
