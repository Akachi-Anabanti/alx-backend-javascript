export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees).flat();
  let index = 0;
  return {
    next() {
      if (index < allEmployees.length) {
        const value = allEmployees[index];
        index += 1;
        return { value, done: false };
      }
      return { value: undefined, done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
