export default class PhotoData {
  constructor(uri) {
    //cancelled, height, type, , width
    // this._cancelled = cancelled;
    // this._height = height;
    // this._type = type;
    this._uri = uri;
    // this._width = width;
  }

  //   get cancelled() {
  //     return this._cancelled;
  //   }
  //   set cancelled(newValue) {
  //     this._cancelled = newValue;
  //   }

  //   get height() {
  //     return this._height;
  //   }
  //   set height(newValue) {
  //     this._height = newValue;
  //   }

  //   get type() {
  //     return this._type;
  //   }
  //   set type(newValue) {
  //     this._type = newValue;
  //   }

  get uri() {
    return this._uri;
  }
  set uri(newValue) {
    this._uri = newValue;
  }

  //   get width() {
  //     return this._width;
  //   }
  //   set width(newValue) {
  //     this._width = newValue;
  //   }
}
