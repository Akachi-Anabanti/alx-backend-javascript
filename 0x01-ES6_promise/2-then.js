export default function handleResponseFromAPI(promise) {
  return promise
  // eslint-disable-next-line no-unused-vars
    .then((res) => ({ status: 200, body: 'success' }))
  // eslint-disable-next-line no-unused-vars
    .catch((e) => new Error())
    .finally(() => { console.log('Got a response from the API'); });
}
