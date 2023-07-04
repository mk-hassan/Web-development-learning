function deepCloning( src, dst ) {
  for (let key in src) {
    if (typeof src[key] === 'object') {
      dst[key] = {}
      deepCloning(src[key], dst[key]);
    } else {
      dst[key] = src[key];
    }
  }
}

export default deepCloning;