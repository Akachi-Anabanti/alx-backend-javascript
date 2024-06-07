export default function getFullResponseFromAPI(condition) {
  return new Promise((resolve, reject) => {
    if (condition) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
