export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new RangeError('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const Int8View = new Int8Array(buffer);
  Int8View[position] = value;

  return new DataView(buffer);
}
