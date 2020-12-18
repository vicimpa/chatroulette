const _0x3be7 = require('./new_w.json')
const fs = require('fs')

var _0x5138 = function(e, n) {
  var a = _0x3be7[e -= 0];
  if (void 0 === _0x5138.ZHgmGT) {
      _0x5138.OfdZIV = function(e) {
          for (var n = function(e) {
              for (var n, a, f = String(e).replace(/=+$/, ""), i = "", u = 0, r = 0; a = f.charAt(r++); ~a && (n = u % 4 ? 64 * n + a : a,
              u++ % 4) ? i += String.fromCharCode(255 & n >> (-2 * u & 6)) : 0)
                  a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(a);
              return i
          }(e), a = [], f = 0, i = n.length; f < i; f++)
              a += "%" + ("00" + n.charCodeAt(f).toString(16)).slice(-2);
          return decodeURIComponent(a)
      }
      ,
      _0x5138.EXVTkk = {},
      _0x5138.ZHgmGT = !0
  }
  var f = _0x5138.EXVTkk[e];
  return void 0 === f ? (a = _0x5138.OfdZIV(a),
  _0x5138.EXVTkk[e] = a) : a = f,
  a
}

const arr = _0x3be7.map((e, i) => _0x5138(i))

const regExp = /[a-z]+\("(0x[0-9a-f]+)"\)/gi
const dataString = fs.readFileSync('./new.js', 'utf-8')
const strings = [''].filter(e => e)
const chank = 10000

let newString = dataString

while(newString.length) {
  strings.push(newString.substr(0, chank))
  newString = newString.substr(chank)
}

/** @type {RegExpExecArray} */
let array = null

while(array = regExp.exec(dataString)) {
  const [f, v] = array

  if (array.index === regExp.lastIndex) {
    regExp.lastIndex++
  }

  const data = arr[+v]
  console.log(f, data)

  for(let i = 0; i < strings.length; i++) 
    strings[i] = strings[i].replace(f, JSON.stringify(data))
}


fs.writeFileSync('./new_out.js', strings.join(''), 'utf-8')