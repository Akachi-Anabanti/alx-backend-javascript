export default function hasValuesFromArray(set, array) {
  return array.every((el) => Array.from(set).includes(el));
}
