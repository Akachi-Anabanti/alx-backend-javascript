export default function getFullResponseFromAPI(condition) {
  return new Promise((resolve, reject) => {
    if (condition) {
      resolve({ status: 200, body: 'success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
