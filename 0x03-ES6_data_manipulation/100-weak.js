export const weakMap = new WeakMap();
export function queryAPI(endpoint = { protocol: 'http', name: 'getUsers' }) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const callCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, callCount);

  if (callCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
