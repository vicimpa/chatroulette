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
let state = []
let func = () => {}
let first = true

Object.defineProperty(window, '_0x3be7', {
  get() {
    return state
  },
  set(v) {
    state = v
  },
  configurable: true
})

Object.defineProperty(window, '_0x5138', {
  get() {
    return func
  },
  set(v) {
    func = v
    if(first) {
      first = false
      _0x3be7 = state.map((e, i) => {
        let d = func(i)
        
        if(/Snap Camera/.test(d))
          return 'asdfasjdcnawecaseaec'
        else
          return d
      })
    }
  },
  configurable: true
})


function toObject(from = {}, to = {}) {
  for(let key in from) {
    let value = from[key]

    if(typeof value === 'object' && value && !Array.isArray(value)) {
      toObject(value, from[key])
      continue
    }

    to[key] = value
  }
}

/**
 * @param {string} tagName 
 * @param {Partial<HTMLElement> & {ref(v: HTMLDivElement) => void}} options 
 * @param {HTMLElement[]} childs 
 */
function createElement(tagName = '', options = {}, childs = []) {
  const element = document.createElement(tagName)

  toObject(options, element)

  for(let child of childs)
    element.appendChild(child)

  if(typeof options.ref == 'function')
    options.ref(element)

  return element
}

async function runDevices(/** @type {HTMLDivElement} */ frame) {
  const outputDevices = (await navigator.mediaDevices.enumerateDevices())
    .filter(e => e.kind == 'audiooutput')

  const outputId = 'output_device'
  const state = {
    _needDevice: '',
    /** @type {HTMLDivElement} */ labelDevice: null,
    /** @type {HTMLDivElement} */mediaSelect: null,
    get needDevice() {
      if(this._needDevice)
        return outputDevices.find(e => e.deviceId == this._needDevice) ?
          this._needDevice : 'default'

      return 'default'
    },
    set needDevice(v = '') {
      localStorage.setItem(outputId, v)
      this._needDevice = v

      this.labelDevice.innerText = 
        outputDevices.find(e => 
          e.deviceId == this.needDevice).label

      if(outputDevices.length > 1)
          this.mediaSelect.style.display = 'block'

      setTimeout(() => hide(), 1)
    }
  }

  const show = () => {
    state.mediaSelect.classList.add('opened')
    state.mediaSelect.querySelector('.media-select__list')
      .style.display = 'block'
  }

  const hide = () => {
    state.mediaSelect.classList.remove('opened')
    state.mediaSelect.querySelector('.media-select__list')
      .style.display = 'none'
  }
    
  const mediaSelect = createElement('div', {
    className: 'media-select',
    id: 'audio-devices-out',
    ref: (e) => state.mediaSelect = e,
    onclick: () => show(),
    onmouseleave: () => hide(),
    style: {display: 'block'}
  }, [
    createElement('div', {
      className: 'media-select__select'
    }, [
      createElement('div', {
        className: 'media-select__label'
      }, [
        createElement('span', {
          className: 'media-select__label-text',
          innerText: '',
          ref: (e) => state.labelDevice = e
        })
      ]),
      createElement('div', {
        className: 'media-select__list'
      }, outputDevices.map(e => {
        return createElement('div', {
          className: 'media-select__list-item',
          onclick: () => state.needDevice = e.deviceId
        }, [
          createElement('div', {
            innerText: e.label
          })
        ])
      }))
    ]),
    createElement('div', {
      className: 'media-devices__icon icon icon_speaker'
    })
  ])

  setTimeout(() => {
    state.needDevice = localStorage.getItem(outputId) || 'default'
  }, 100)

  frame.appendChild(mediaSelect)

  setInterval(() => {
    const { needDevice } = state
    const deviceObject = outputDevices.find(e => e.deviceId == needDevice)
    const deviceId = deviceObject ? deviceObject.deviceId : 'default'

    /** @type {HTMLVideoElement} */
    const videoContainer = document.getElementById('remote-video')

    if(!videoContainer)
      return null
    
    if(videoContainer.sinkId == deviceId)
      return null

    videoContainer.setSinkId(deviceId)
      .catch(() => {})
  }, 200)
}

let interval = setInterval(() => {
  /** @type {HTMLDivElement} */
  const localVideo = document.getElementById('local-video-wrapper')

  if(!localVideo) 
    return null

  /** @type {HTMLDivElement} */
  const mediaDevices = localVideo.querySelector('#media-devices')

  if(!mediaDevices)
    return null

  /** @type {HTMLDivElement} */
  const frame = mediaDevices.querySelector('.media-devices__frame')

  if(!frame)
    return null

  /** @type {HTMLDivElement} */
  const wrapper = mediaDevices.querySelector('.media-devices__wrapper')

  if(!wrapper)
    return null

  clearInterval(interval)
  runDevices(wrapper).catch(console.error)
}, 300)