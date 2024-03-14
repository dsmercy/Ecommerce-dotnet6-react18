
class commonFunctions {
  static generateUUID() {
    return window.crypto.getRandomValues(new Uint32Array(4)).join('-');
  }
}

export default commonFunctions;