export default function iterateThroughObject(reportWithIterator) {
  const allNames = [];
  for (const employee of reportWithIterator) {
    allNames.push(employee);
  }
  return allNames.join(' | ');
}
