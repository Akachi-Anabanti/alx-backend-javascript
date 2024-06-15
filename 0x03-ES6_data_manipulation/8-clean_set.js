export default function cleanset(set, startString) {
  if (!startString || typeof (startString) !== 'string') return '';
  return Array.from(set).filter((el) => el && el.startsWith(startString))
    .map((word) => word.slice(startString.length))
    .join('-');
}
