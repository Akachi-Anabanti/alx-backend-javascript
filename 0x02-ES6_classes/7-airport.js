export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  set name(value) {
    if (typeof (value) === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set code(value) {
    if (typeof (value) === 'string') {
      this._code = value;
    }
  }

  toString() {
    return `[object ${this._code}]`;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
