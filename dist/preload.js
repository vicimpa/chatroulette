Object.defineProperty(window, 'FCN', {
  get() {
    function r() {}

    r.isValid = function (e) {
      return true
    }

    r.isSuspicious = function (e) {
      return false
    }
    return r
  },
  set(v) {
    console.log(v)
  }
})