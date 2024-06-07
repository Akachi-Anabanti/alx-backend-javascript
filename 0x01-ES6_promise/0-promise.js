export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const condition = true;
    // eslint-disable-next-line no-unused-expressions, prefer-promise-reject-errors
    condition ? resolve('success') : reject('failure');
  });
}
