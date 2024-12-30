// ==UserScript==
// @name        CUP RAW
// @namespace   Violentmonkey Scripts
// @version     18.28
// @description 2024-12-29 22:10
// @match       *://*usat.edu.pe/*
// @icon        https://www.iconsdb.com/icons/preview/red/books-xxl.png
// @grant       none
// @homepageURL https://coppernicous.github.io/hcu-pro/site
// @downloadURL https://coppernicous.github.io/hcu-pro/core/cup-main.user.js
// @updateURL   https://coppernicous.github.io/hcu-pro/core/cup-main.user.js
// @author      coppernicous
// @run-at      document-start
// ==/UserScript==
(function() {
  let loc = location
  let cSite = {d: 'usat.edu.pe'}
  cSite.c = function(strP, strS = '', prt = '') {
    let prot = 'http'
    prot = prt == 's' ? prot + 's:' : prt == 'p' ? prot + ':' : prot = ''
    return prot + '//' + (strP ? strP + '.' + cSite.d : cSite.d) + '/' + strS;
  }
  if (loc.host.endsWith(cSite['d']) && 1 == 1) {
    let CUPvS = 18.28
    let CUPvT = '@24-12-29 22:10'
    let CUPvSce = 17.04
    let CUPvSaa = 18.32
    let supVm = ''
    try {
      supVm = top.__CUPm
    } catch (e) {
      supVm = false
    }
    window.__CUPm = window.__CUPm || supVm || 'dv'
    let um = window.__CUPm, hlog = []
    let scm = function(v) { return v.split(',').includes(um) }
    if (window.__readyCUP != undefined) {
      if (top == self && !scm('ce,dv,us')) {
        alert('CUP ya fue ejecutado!')
      }
      return false
    }
    function clog() {
      if (localStorage['cup-dvm'] == '1') {
        let ds = []
        arguments.length == 1
          ? ds = arguments[0]
          : ds = Array.prototype.slice.call(arguments)
        let cdt = new Date(), scdt = ''
        scdt = cdt.toLocaleTimeString('en-ES', {
          hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: !1
        }) + '.' + String(cdt.getMilliseconds()).padStart(3, '0')
        hlog.push([scdt, ds])
      }
      console.log.apply(console, arguments)
    }
    if (scm('dv,aa,ce')) {
      window.__CUPupdate = function() {
        scm('dv') && (localStorage['cup-dv-updreq'] = '1')
        scm('aa,ce') && (localStorage['cup-iup'] = '1')
        location.href = lSitesU['main']
      }
    }
    if (localStorage['cup-dvm'] == '1') {
      window.__md = {
        p: function() { console.log(hlog) },
        c: function() { hlog = [] },
        s: function() { localStorage.removeItem('cup-dvm') },
        u: window.__CUPupdate || function() {return 'not valid'}
      }
    } else {
      window.__md = function() {
        localStorage['cup-dvm'] = '1'
        location.reload()
      }
    }
    window.devMode = typeof(window.__md) == 'object'
    if (!document.contentType.includes('html')) {
      let errHC = '- Ignore CUP, site is not page\nURL: '
      errHC += loc.href + '\n'
      errHC += 'SubFrame: ' + (top != self)
      clog(errHC)
      return false
    }
    localStorage['cup-iup'] = 60 * 24
    CUPvT = CUPvT.replace('@', '20').replace(' ', 'T') + ':00.0Z'
    CUPvT = new Date(CUPvT) * 1 + 5 * 36e5
    window.__readyCUP = true
    let extHost = '//coppernicous.github.io/hcu-pro/site'
    let strCryp = {
      en: function(_str, key = '#_;') {
        const textToChars = (_str) => _str.split('').map((c) => c.charCodeAt(0))
        const byteHex = (n) => ('0' + Number(n).toString(16)).slice(-2)
        const applySaltToChar = (code) => textToChars(key).reduce((a, b) => a ^ b, code)
        return _str.split('').map(textToChars).map(applySaltToChar).map(byteHex).join('')
      },
      de: function(_str, key = '#_;') {
        const textToChars = (_str) => _str.split('').map((c) => c.charCodeAt(0))
        const applySaltToChar = (code) => textToChars(key).reduce((a, b) => a ^ b, code)
        return _str.match(/.{1,2}/g).map((hex) => parseInt(hex, 16)).map(applySaltToChar)
          .map((charCode) => String.fromCharCode(charCode)).join('')
      }
    }
    window.__CUPvS = Number(CUPvS)
    window.__timesLoad = {'init': new Date() * 1, 'dom': 0, 'end': 0}
    function fDTgHM(date = new Date(), showSe = false, showMs = false) {
      let d = date == 1 ? new Date() : new Date(date)
      function zfill(n) { return (n + '').padStart(2, '0')}
      let h = zfill(d.getHours())
      let m = zfill(d.getMinutes())
      showSe && (m += ":" + zfill(d.getSeconds()))
      showMs && (m += "." + zfill(d.getMilliseconds()))
      return h + ':' + m
    }
    let wT = window.__timesLoad
    let curCic = ''
    if (true) {
      let dt = new Date()
      let dm = dt.getMonth()
      curCic = dt.getFullYear() + '-' + (dm > 6 ? 'II' : dm < 2 ? '0' : 'I')
    }
    // ---- ---- GLOBAL FUNCTIONS
    HTMLElement.prototype.qsf = function(query) { return this.querySelector(query)}
    HTMLElement.prototype.qsa = function(query) { return this.querySelectorAll(query)}
    HTMLElement.prototype.on = function(nameEvents, fn) {
      let ts = this
      nameEvents.split(',').forEach(function(en) {
        ts.addEventListener(en, function(event) {
          fn(event)
        }, false)
      })
    }
    function $$(e) {return document.querySelectorAll(e)}
    function $(e) {return $$(e)[0]}
    function $n(tag, att = '', txt = '', w = false) {
      let n = document.createElement(tag)
      "" != txt && ("html:" == txt.slice(0,5) ? n.innerHTML = txt.slice(5) : n.innerText = txt)
      att != '' && att.split(',,').forEach(function (at) {
        let [a, v] = at.split('::')
        n.setAttribute(a, v)
      })
      w && ('ddbb' == w && (w = document.body), 'ddhh' == w && (w = document.head), w.appendChild(n))
      return n
    }
    function setStyle(css, attr = 'und', r = false) {
      let s = $n('style', 'css-cup::' + attr, css.replaceAll('\n', ''),  'ddhh')
      if (r) return s
    }
    function setFavicon(pathFav) {
      let linksTemplate = [
        ['meta', {
          'name': 'theme-color',
          'content': '#e0202e'
        }],
        ['link', {
          'rel': 'apple-touch-icon',
          'href': pathFav
        }],
        ['link', {
          'rel': 'icon',
          'type': 'image/png',
          'href': pathFav,
          'sizes': '144x144'
        }],
        ['link', {
          'rel': 'icon',
          'href': pathFav
        }],
        ['link', {
          'rel': 'shortcut icon',
          'href': pathFav
        }]
      ]
      linksTemplate.forEach(function(item) {
        $$('link[rel*=icon]').forEach(function(a) {
          a.remove()
        })
        let link = $n(item[0])
        Object.entries(item[1]).forEach(([attr, value]) => {
          link.setAttribute(attr, value)
        })
        document.head.appendChild(link)
      })
    }
    function moveElementVertically(e2a, iniTopVal) {
      let isScrolling = false, startY = 0
      function handleMouseDown(event) {
        isScrolling = true
        startY = event.clientY
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('touchmove', handleMouseMove)
        document.addEventListener('touchend', handleMouseUp)
      }
      function handleMouseMove(event) {
        if (!isScrolling) return
        e2a.setAttribute('prol', '')
        const deltaY = event.type === 'touchmove' ? event.touches[0].clientY - startY : event.clientY - startY
        const newTopValue = parseFloat(e2a.style.top) + deltaY / window.innerHeight * 100
        const roundedTopValue = Math.round(newTopValue * 100) / 100
        if (roundedTopValue >= 0 && roundedTopValue <= 100 - e2a.offsetHeight / window.innerHeight * 100) {
          e2a.style.top = `${roundedTopValue}vh`
        }
        startY = event.type === 'touchmove' ? event.touches[0].clientY : event.clientY
      }
      function handleMouseUp() {
        setTimeout(function() {
          e2a.removeAttribute('prol')
        }, 1e2)
        isScrolling = false
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('touchmove', handleMouseMove)
        document.removeEventListener('touchend', handleMouseUp)
      }
      e2a.style.top = `${iniTopVal}vh`
      e2a.on('mousedown', handleMouseDown)
      e2a.on('touchstart', handleMouseDown)
    }
    function isElementVisible(element) {
      let rect = element.getBoundingClientRect()
      return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.left >= 0 &&
        rect.bottom >= 0 &&
        rect.width > 1 &&
        rect.height > 1
      )
    }
    window[strCryp.de('390b0308050a0f04', 'cup')] = strCryp
    function tml(sec) {
      if (window.__timesLoad.end == 0) return !1
      return 1 * new Date - window.__timesLoad.end >= sec * 1e3
    }
    function timeDate() {
      return new Date(new Date().toISOString().replace(/\d{2}:\d{2}:\d{2}\.\d{3}/, '05:00:00.000')) * 1
    }
    function strMin(str) {
      return str
        .toLocaleLowerCase()
        .replaceAll('á', 'a')
        .replaceAll('é', 'e')
        .replaceAll('í', 'i')
        .replaceAll('ó', 'o')
        .replaceAll('ú', 'u')
        .replaceAll('ñ', 'n')
        .replace(/\s+/g, '-')
    }
    function strCap(str) {
      return str
        .toLowerCase()
        .split('')
        .map((char, i, arr) => (i === 0 || arr[i - 1] === ' ') ? char.toUpperCase() : char)
        .join('')
    }
    function strCapC(strCourse) {
      let strEC = strCourse.charAt(0).toUpperCase() + strCourse.slice(1).toLowerCase()
      return strEC.replace(/ ii */, 'II').replace(/ i *$/, 'I')
    }
    function strCapP(strP) {
      return strCapC(strP).replace(/\(.+\)/, function(tbp) {
        return tbp.toUpperCase()
      })
    }
    function runOrwait(fn, ...params) {
      let c = 0
      let i2r = setInterval(function() {
        if (c > 30) {
          clearInterval(i2r)
        }
        if (typeof fn === 'function') {
          fn(...params)
          clearInterval(i2r)
        }
        c++
      }, 1e2)
    }
    function validCIZ() {
      let css_cvw = $('style[css-cup=css-cup-imgvieweropts]')
      if (!css_cvw) {
        setStyle(/*css*/`.imgvw-btns-opts{position:absolute;left:10px;top:10px;z-index:100;background:white;
border:none;border-radius:5px;display:flex;padding:0px 2px;box-shadow:0 1px 4px 1px rgba(0, 0, 0, 0.15);transition:
box-shadow 0.2s ease}.imgvw-btns-opts:hover{box-shadow:0 1px 4px 1px rgba(0, 0, 0, 0.3)}.ivbtn-o{background:
none;border:none;cursor:pointer;padding:8px 10px;transition:all 0.2s}.ivbtn-o:hover{background-color:#00000015}
.ivbtn-o svg{height:14px}[ivci]{position:relative;margin-inline:auto}`, 'css-cup-imgvieweropts')
      }
      const ncvw = {'p': 'img-view-q', 's': 'img-view-cont'}
      const scvw = {'iz': `<svg viewBox="0 0 12 12"><path d="M4.88 9.75c-1.38-.03-2.52-.51-3.45-1.43S.03 6.25 0 4.88C.\
03 3.5.51 2.36 1.43 1.43S3.5.03 4.88 0C6.26.03 7.4.51 8.33 1.43s1.4 2.07 1.43 3.45c-.02 1.17-.37 2.18-1.05 3.02l3.14 \
3.14c.22.27.22.53 0 .8-.27.22-.53.22-.8 0L7.91 8.7c-.84.69-1.85 1.04-3.02 1.05zm0-8.62c-.67 0-1.3.16-1.88.49-.58.34-1.\
04.8-1.38 1.38-.33.59-.49 1.22-.49 1.88s.16 1.28.49 1.88c.34.58.8 1.04 1.38 1.38.58.33 1.2.49 1.88.49s1.3-.16 1.88-.49\
c.58-.34 1.04-.8 1.38-1.38.33-.59.49-1.22.49-1.88S8.47 3.6 8.14 3c-.34-.58-.8-1.04-1.38-1.38-.58-.33-1.2-.49-1.88-.\
49zm-.56 5.81v-1.5h-1.5c-.34-.03-.53-.22-.56-.56.03-.34.22-.53.56-.56h1.5v-1.5c.03-.34.22-.53.56-.56.34.03.53.22.56.\
56v1.5h1.5c.34.03.53.22.56.56-.03.34-.22.53-.56.56h-1.5v1.5c-.03.34-.22.53-.56.56-.34-.03-.53-.22-.56-.56z"/></svg>`,
      'ix': '<svg viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 \
210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 \
12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>'}
      const qcvw = $$('[' + ncvw['p'] + ']')
      qcvw.forEach(function (qcv) {
        const maxZoom = qcv.getAttribute(ncvw['p']) * 1 || 4
        qcv.removeAttribute(ncvw['p'])
        qcv.setAttribute(ncvw['s'], '')
        const imgEC = qcv.qsf('img')
        const imgSrc = imgEC.src
        const innerCont = $n('div', 'ivci::', '', qcv)
        innerCont.appendChild(imgEC)
        const zoomButtonContainer = $n('div', 'class::imgvw-btns-opts', '', innerCont)
        const zoomButton = $n('button', 'class::ivbtn-o', 'html:' + scvw['iz'], zoomButtonContainer)
        const removeButton = $n('button', 'class::ivbtn-o', 'html:' + scvw['ix'], zoomButtonContainer)

        zoomButton.addEventListener('click', function (e) {
          e.preventDefault()
          const zoomImgModal = $n('div', 'class::zoom-overlay', '', 'ddbb')
          const fullImg = $n('img', 'src::' + imgSrc, '', zoomImgModal)
          const closeButton = $n('button', 'class::close-btn-ivwc', 'Cerrar', zoomImgModal)

          const cssIVC = setStyle(/*css*/`.zoom-overlay{opacity:1;position:fixed;left:0;top:0;width:100%;
height:100%;background-color:rgba(0,0,0,0.8);z-index:9999999999;cursor:grab}.zoom-overlay img{max-width:
100%;max-height:100%;transform-origin:0px 0px;width:auto;height:auto}.zoom-overlay img:not(.ready){opacity:
0;transition:opacity 0.4s}.zoom-overlay img.ready{transition:transform 0.15s ease}.close-btn-ivwc{position:
absolute;top:10px;left:50%;transform:translateX(-50%);z-index:1000;background:#00000060;color:white;
line-heigh:1.2;border:none;padding:10px 20px;cursor:pointer;border-radius:5px}`, 'css-cup-imgviewercont', true)
          zoomImgModal.appendChild(cssIVC)
          var scale = 1,
            minScale = 0.3,
            maxScale = parseInt(maxZoom),
            panning = false,
            pointX = 0,
            pointY = 0,
            start = { x: 0, y: 0 },
            closing = false
          function setTransform() {
            fullImg.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`
          }
          function centerImage() {
            const rect = fullImg.getBoundingClientRect()
            const viewportWidth = window.innerWidth
            const viewportHeight = window.innerHeight
            pointX = (viewportWidth - rect.width) / 2
            pointY = (viewportHeight - rect.height) / 2
            fullImg.style.opacity = 1
            setTimeout(function() {
              fullImg.classList.add('ready')
            }, 5e2)
            setTransform()
          }
          zoomImgModal.onmousedown = function (e) {
            if (closing) { return }
            e.preventDefault()
            start = { x: e.clientX - pointX, y: e.clientY - pointY }
            panning = true
            zoomImgModal.style.cursor = 'grabbing'
          }
          zoomImgModal.onmouseup = function (e) {
            if (closing) { return }
            panning = false
            zoomImgModal.style.cursor = 'grab'
          }
          zoomImgModal.onmousemove = function (e) {
            if (closing) { return }
            e.preventDefault()
            if (!panning) {
              return
            }
            pointX = (e.clientX - start.x)
            pointY = (e.clientY - start.y)
            setTransform()
          }
          zoomImgModal.onwheel = function (e) {
            if (closing) { return }
            e.preventDefault()
            var xs = (e.clientX - pointX) / scale
            var ys = (e.clientY - pointY) / scale
            var delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY)
            if (delta > 0) {
              scale += 0.2
              if (scale > maxScale) {
                scale = maxScale
              }
            } else {
              scale -= 0.2
              if (scale < minScale) {
                scale = minScale
              }
            }
            pointX = e.clientX - xs * scale
            pointY = e.clientY - ys * scale
            setTransform()
          }
          let touchStartDist = 0
          let lastTouchCenter = { x: 0, y: 0 }
          function getDistance(touches) {
            const dx = touches[0].clientX - touches[1].clientX
            const dy = touches[0].clientY - touches[1].clientY
            return Math.sqrt(dx * dx + dy * dy)
          }
          function getTouchCenter(touches) {
            return {
              x: (touches[0].clientX + touches[1].clientX) / 2,
              y: (touches[0].clientY + touches[1].clientY) / 2
            }
          }
          zoomImgModal.ontouchstart = function (e) {
            if (closing) { return }
            if (e.touches.length === 2) {
              touchStartDist = getDistance(e.touches)
              lastTouchCenter = getTouchCenter(e.touches)
            } else if (e.touches.length === 1) {
              start = { x: e.touches[0].clientX - pointX, y: e.touches[0].clientY - pointY }
              panning = true
              zoomImgModal.style.cursor = 'grabbing'
            }
          }
          zoomImgModal.ontouchmove = function (e) {
            if (closing) { return }
            e.preventDefault()
            if (e.touches.length === 2) {
              const currentDist = getDistance(e.touches)
              const touchCenter = getTouchCenter(e.touches)
              const deltaScale = currentDist / touchStartDist
              scale *= deltaScale
              pointX = touchCenter.x - (touchCenter.x - pointX) * deltaScale
              pointY = touchCenter.y - (touchCenter.y - pointY) * deltaScale
              touchStartDist = currentDist
              lastTouchCenter = touchCenter
              setTransform()
            } else if (e.touches.length === 1 && panning) {
              pointX = e.touches[0].clientX - start.x
              pointY = e.touches[0].clientY - start.y
              setTransform()
            }
          }
          zoomImgModal.ontouchend = function (e) {
            if (closing) { return }
            if (e.touches.length < 2) {
              panning = false
              zoomImgModal.style.cursor = 'grab'
            }
          }
          closeButton.addEventListener('click', function () {
            closing = true
            let centerX = (window.innerWidth / 2) - (fullImg.offsetWidth * 0.2 / 2)
            let centerY = (window.innerHeight / 2) - (fullImg.offsetHeight * 0.2 / 2)
            let centerTransform = `translate(${centerX}px, ${centerY}px)`
            closeButton.remove()
            fullImg.style.transition = 'transform 0.8s ease'
            fullImg.style.transform = centerTransform + ' scale(0.2)'
            zoomImgModal.style.transition = 'opacity 0.9s ease 0.2s'
            zoomImgModal.style.opacity = '0'
            setTimeout(function () {
              zoomImgModal.remove()
            }, 1000)
          })
          setTimeout(function() {
            centerImage()
          }, 80)
        })
        removeButton.addEventListener('click', function (e) {
          e.preventDefault()
          zoomButtonContainer.remove()
        })
      })
    }
    // ---- ---- ID SITE
    let lSitesU = {
      'main': cSite.c('intranet', 'campusestudiante/Main.aspx'),
      'campus': cSite.c('campus'),
      'h_intranet': cSite.c('intranet')
    }
    let locSite = ''
    if (locSite == '') {
      let dir = loc.pathname.toLowerCase()
      if (dir.endsWith('campusestudiante/') || dir.endsWith('campusestudiante/default.aspx')) {
        if (loc.search.includes('Tipo')) { //note:?Tipo=Mg==
          locSite = 'ls_loginLastC_Egre'
        } else {
          locSite = 'ls_loginLastC'
        }
        // $('form[name=frmLogin')
      } else if (dir.endsWith('campusvirtual/estudiante/') || dir.endsWith('campusvirtual/estudiante/index.asp')) {
        // $('form[name=frmAcceso]'
        locSite = 'ls_loginLastLastC'
      } else if (loc.host.startsWith('campus')) {
        // $('form#enviarData')
        locSite = 'ls_loginRecentC'
      } else if (dir.includes('aulavirtual/login/index.php')) {
        // $('.rememberpass')
        locSite = 'ls_moodleClose'
      } else if (dir.includes('campusestudiante/main.aspx')) {
        // $('#div_menu_bar')
        locSite = 'ls_campusMain'
      } else if (dir == '/aulavirtual/my/') {
        locSite = 'ls_moodle'
      } else if (dir.startsWith('/aulavirtual/mod/assign')) {
        locSite = 'ls_av.assign'
      } else if (dir.startsWith('/aulavirtual/mod/')) {
        locSite = 'ls_av.mod'
      } else if (dir.startsWith('/aulavirtual/course/')) {
        locSite = 'ls_av.course'
      } else if (dir.startsWith('/anuncios') || dir.startsWith('/campusestudiante/anuncios.aspx')) {
        locSite = 'ls_anuncios'
      } else if (dir.endsWith('frmcalificadorestudiante.aspx')) {
        locSite = 'ls_calificaciones'
      } else {}
    }
    function evalSiteFn(inf, ext) {
      return (inf = typeof inf == 'boolean' ? inf : locSite == inf) && ext
    }
    function onlyAtLoad(evalSite, fnMain, other = true) {
      if (evalSiteFn(evalSite, other)) {
        if (document.readyState == 'complete') {
          fnMain()
        } else {
          window.addEventListener('load', fnMain)
        }
      }
    }
    function atDomReady(evalSite, fnMain, other = true) {
      if (evalSiteFn(evalSite, other)) {
        if (document.readyState == 'interactive' || document.readyState == 'complete') {
          fnMain()
        } else {
          window.addEventListener('DOMContentLoaded', fnMain)
        }
      }
    }
    // ---- ---- MANIFEST
    atDomReady(true, function() {
      let bui = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgur.com%2F'
      let lh = cSite.c('intranet', '', 's')
      console.log(lh)
      let jsmf = JSON.stringify({"background_color":"#fcc0c4",
        "description":"Campus Virtual USAT, con mejoras",
        "dir":"ltr","display":"standalone","name":"Campus USAT PRO",
        "scope":"/","short_name":"Campus USAT PRO","start_url":lh+"/campusestudiante/Default.aspx",
        "theme_color":"#e0202e","categories":[],"screenshots":[],
        "icons":[
          {"src":bui+"6sP8Zkp.png&h=32","sizes":"32x32","type":"image/png","purpose":"any"},
          {"src":bui+"6sP8Zkp.png&h=64","sizes":"64x64","type":"image/png","purpose":"any"},
          {"src":bui+"6sP8Zkp.png&h=96","sizes":"96x96","type":"image/png","purpose":"any"},
          {"src":bui+"6sP8Zkp.png&h=128","sizes":"128x128","type":"image/png","purpose":"any"},
          {"src":bui+"6sP8Zkp.png&h=144","sizes":"144x144","type":"image/png","purpose":"any"},
          {"src":bui+"6sP8Zkp.png&h=192","sizes":"192x192","type":"image/png","purpose":"any"},
          {"src":bui+"6sP8Zkp.png&h=256","sizes":"256x256","type":"image/png","purpose":"any"},
          {"src":bui+"6sP8Zkp.png&h=512","sizes":"512x512","type":"image/png","purpose":"any"},
          {"src":bui+"njH5hwU.png&h=32","sizes":"32x32","type":"image/png","purpose":"maskable"},
          {"src":bui+"njH5hwU.png&h=64","sizes":"64x64","type":"image/png","purpose":"maskable"},
          {"src":bui+"njH5hwU.png&h=96","sizes":"96x96","type":"image/png","purpose":"maskable"},
          {"src":bui+"njH5hwU.png&h=128","sizes":"128x128","type":"image/png","purpose":"maskable"},
          {"src":bui+"njH5hwU.png&h=144","sizes":"144x144","type":"image/png","purpose":"maskable"},
          {"src":bui+"njH5hwU.png&h=192","sizes":"192x192","type":"image/png","purpose":"maskable"},
          {"src":bui+"njH5hwU.png&h=256","sizes":"256x256","type":"image/png","purpose":"maskable"},
          {"src":bui+"njH5hwU.png&h=512","sizes":"512x512","type":"image/png","purpose":"maskable"}
        ],"shortcuts":[
          {"name":"Campus Virtual","description":"Información genera del estudiante",
          "id":lh+"/campusestudiante/Default.aspx",
          "url":lh+"/campusestudiante/Default.aspx","icons":[
          {"src":bui+"6sP8Zkp.png&h=64","sizes":"64x64","type":"image/png"},
          {"src":bui+"6sP8Zkp.png&h=192","sizes":"192x192","type":"image/png"},
          {"src":bui+"6sP8Zkp.png&h=256","sizes":"256x256","type":"image/png"}
          ]},{"name":"Aula Virtual","description":"Panel de todos tus cursos",
          "url":lh+"/aulavirtual/my/","icons":[
          {"src":bui+"YdTfVhs.png&h=64","sizes":"64x64","type":"image/png"},
          {"src":bui+"YdTfVhs.png&h=192","sizes":"192x192","type":"image/png"},
          {"src":bui+"YdTfVhs.png&h=256","sizes":"256x256","type":"image/png"}
        ]}]
      })
      if (top == self && locSite == 'ls_campusMain' && 1 == 0) {
        clog(JSON.parse(jsmf))
      }
      let dataURL = 'data:application/manifest+json,' + encodeURIComponent(jsmf)
      $n('link', 'rel::manifest,,href::' + dataURL, '', 'ddhh')
    }, loc.host.includes('intranet'))
    // ---- ---- LOG TIMES LOAD
    if (wT) {
      function fTime(di) {return new Date(di).toLocaleString()}
      window.__timesLoad.resume = function() {
        return `> beg: ${fTime(wT.init)}\n> dom: ${fTime(wT.dom)}\n> end: ${fTime(wT.end)}`
      }
      window.__timesLoad.print = function() {clog(window.__timesLoad.resume())}
      atDomReady(true, function() {window.__timesLoad.dom = 1 * new Date})
      onlyAtLoad(true, function() {window.__timesLoad.end = 1 * new Date})
    }
    // ---- ---- INSERT SCRIPT INTO FRAMES
    let injJSFr = function() {
      if (!scm('ce,us,dv')) {
        $$('iframe').forEach(function(i) {
          let hl = i.getAttribute('data-ijs')
          if (hl != '1') {
            try {
              i.addEventListener('load', function() {
                if (i.contentDocument) {
                  try {
                    let attS = 'src::' + extHost + '/../core/cup-main.user.js?' + CUPvS
                    let is = $n('script', attS)
                    let h = i.contentDocument.head
                    h.insertBefore(is, h.children[0])
                  } catch (e) {}
                }
              })
              i.setAttribute('data-ijs', '1')
            } catch (e) {}
          }
        })
      }
    }
    if (scm('aa,bk')) {
      atDomReady(true, function() {
        if (window.MutationObserver) {
          let observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
              if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(function(node) {
                  if (node.tagName && node.tagName.toLowerCase() === 'iframe') {
                    injJSFr()
                    observeIframeSrc(node)
                  }
                })
              }
              if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
                injJSFr()
              }
            })
          })
          let config = { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] }

          observer.observe(document.body, config)
          function observeIframeSrc(iframe) {
            let iframeObserver = new MutationObserver(function(mutations) {
              mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
                  injJSFr()
                }
              })
            })
            let iframeConfig = { attributes: true, attributeFilter: ['src'] }
            iframeObserver.observe(iframe, iframeConfig)
          }
        } else {
          window.addEventListener('click', function() {
            injJSFr()
            setTimeout(function() { injJSFr() }, 1e3)
          })
        }
        onlyAtLoad(true, function() { injJSFr() })
        injJSFr()
      })
    }
    // ---- ---- LOAD CREDENTIALS TO MOODLE AND OPEN COURSE IN MOODLE
    let arrMoodleCourses = []
    function getCoursesMoodle() {
      fetch('/aulavirtual').then(function(r) {
        r.text().then(function(t) {
          let modskey = t.match(/sesskey.:.[^"]+/)
          if (modskey) {
            modskey = modskey[0].split(':')[1].slice(1)
            fetch("/aulavirtual/lib/ajax/service.php?sesskey=" + modskey + "&info=core_course_get_enrolled_courses_by_timeline_classification", {
              "body": JSON.stringify([
                {
                  "index": 0,
                  "methodname": "core_course_get_enrolled_courses_by_timeline_classification",
                  "args": {
                    "offset": 0,
                    "limit": 24,
                    "classification": "inprogress",
                    "sort": "fullname",
                    "customfieldname": "",
                    "customfieldvalue": ""
                  }
                }
              ], null, 2),
              "method": "POST"
            }).then(function(r) {
              r.text().then(function(t) {
                try {
                  let modCData = JSON.parse(t)
                  let objModData = modCData[0]
                  if (!objModData['error']) {
                    arrMoodleCourses = objModData?.['data']?.['courses'] || []
                  }
                } catch(e) {}
              })
            }).catch(function() {})
          }
        })
      }).catch(function() {})
    }
    function createMoodleSession(target, rSubmit, presistentForm = false, formAuxName = '', getCourses = false) {
      function loadCourses() {
        setTimeout(function() {
          getCoursesMoodle()
        }, 5e2)
      }
      let e = $n('div', 'style::display:none', '', 'ddbb')
      fetch('aulavirtual.aspx', {method: 'POST'})
      .then((response) => response.text())
      .then(function(data) {
        let s = data
        if (s != '') {
          let fhtml = s.substring(s.indexOf('<form '), s.indexOf('</form') + 7)
          e.innerHTML = fhtml
          let f = e.qsf('form')
          if (f) {
            f.setAttribute('target', target)
            f.addEventListener('submit', function() {
              setTimeout(function() {
                // dev: invalid operation
              }, 50)
            })
            if (presistentForm) {
              f.id = formAuxName
            }
            rSubmit && f.submit()
            loadCourses()
          }
          if (!presistentForm) {
            setTimeout(function() {
              e.remove()
            }, 1e3)
          }
        }
      })
      .catch(function(error) {
        e.remove()
        console.error(error)
        if (!presistentForm) {
          f_Menu('aulavirtual.aspx')
          let k = setInterval(function() {
            if ($('#moodletablacursosmatriculados_wrapper')) {
              if (rSubmit) {
                let ft = $('form[action*="aulavirtual/login"]')
                ft && ft.submit()
                loadCourses()
              }
              setTimeout(function() {
                clearInterval(k)
                // some item not found or invalid operation
              }, 50)
            }
          }, 1e3)
        }
      })
    }
    function openCourseByName(nameCourseRaw) {
      if (arrMoodleCourses.length == 0) {
        setTimeout(function() {
          runOrwait(msgUI_show, 'Buscando curso...', 'yellow', false, 3)
        }, 3e2)
      }
      function sendAndDelete(form) {
        setTimeout(function() {
          let btnFrame = $('button.toggle-cf')
          btnFrame && btnFrame.click()
          setTimeout(function() {
            form.remove()
          }, 2e2)
        }, 2e2)
        form.submit()
      }
      function asUser() {
        runOrwait(msgUI_show, 'Abriendo aula virtual...', 'yellow', false, 3)
        let f = document.createElement('form')
        f.action = '/aulavirtual/my/'
        f.method = 'GET'
        f.appendChild((function() {
          let iprm = document.createElement('input')
          iprm.name = 'cdest'
          iprm.value = encodeURIComponent(strMin(nameCourseRaw))
          return iprm
        })())
        f.target = 'subav'
        document.body.appendChild(f)
        sendAndDelete(f)
      }
      if (arrMoodleCourses.length > 0) {
        let arrModCse = arrMoodleCourses.filter(function(c) {
          return c['fullname'].toLowerCase().includes(nameCourseRaw.toLocaleLowerCase())
        })
        if (arrModCse.length) {
          let f = $n('form', 'method::GET,,action::/aulavirtual/course/view.php,,target::subav', '', 'ddbb')
          let iptIdC = $n('input', 'name::id', '', f)
          iptIdC.value = arrModCse[0]['id']
          runOrwait(msgUI_show, 'Abriendo curso...', 'yellow', false, 3)
          sendAndDelete(f)
        } else {
          asUser()
        }
      } else {
        asUser()
      }
    }
    // ---- ---- AUTO REDIRECT TO MOODLE ROOM
    function redirectMoodleAccount() {
      sessionStorage['rfav'] = new Date() * 1
      location.replace('/campusestudiante/Main.aspx')
    }
    function requireLoginAV() {
      let nss = 'rfav', end = false
      let vss = sessionStorage[nss]
      let validDate = !isNaN(vss) ? Number(vss) : 0
      if (validDate) {
        if (validDate + 9e4 > 1 * new Date) {
          end = true
        } else {
          sessionStorage.removeItem(nss)
        }
      }
      return end
    }
    // ---- ---- MSGUI, TOASTMSG AND EVAL UPDATE
    let msgUI_show
    atDomReady(true, function() {
      let cssMainMsgUI = /*css*/`.cont-msgui{display:flex;flex-direction:column;
align-items:flex-start;position:fixed;bottom:0;left:0;z-index:99999999999;pointer-events:none;max-width:100%;
width:-webkit-fill-available}@media (max-width:700px){.cont-msgui{padding:0 0 40px 10px}}@media (min-width:701px){
.cont-msgui{padding:0px 0px 44px 30px}}.cont-msgui .msg-item{pointer-events:fill;transition:all 0.2s;cursor:pointer;
border-radius:4px;min-width:10rem;max-width:calc(100% - 8px);border-width:1px;border-style:solid;
box-sizing:border-box;margin-bottom:8px;user-select:none}.cont-msgui .msg-item .msg-text{
font-family:system-ui}.cont-msgui .msg-item .msg-text.bold{font-weight:bold}.cont-msgui .msg-item:hover{
background-color:#ffffff !important;box-shadow:0 2px 6px 0 #00000025}.cont-msgui .msg-item.blue{
background-color:#d4f8ff;border-color:#9fc7cf}.cont-msgui .msg-item.blue:hover{border-color:#60848a}
.cont-msgui .msg-item.green{background-color:#d4ffd9;border-color:#9fcfa2}
.cont-msgui .msg-item.green:hover{border-color:#6f9c72}.cont-msgui .msg-item.red{
background-color:#fae5e5;border-color:#cf9f9f}.cont-msgui .msg-item.red:hover{border-color:#8b6363}
.cont-msgui .msg-item.yellow{background-color:#fffcd4;border-color:#cfcd9f}.cont-msgui .msg-item.yellow:hover{
border-color:#878565}.cont-msg{padding:4px 12px;margin-top:4px;overflow:hidden;display:flex;align-items:center;
font-size:16px;line-height:1.3;}.bar-timeout{height:4px;backdrop-filter: saturate(3.5) brightness(0.85);
animation-name:closeBar;animation-fill-mode:forwards;animation-delay:0s;
animation-timing-function:linear}@keyframes closeBar{from{width:100%}to{width:0}}
.cont-msgui .msg-item.closing{transition:height 1s;height:0px !important;border-width:0px !important;
border-color:transparent !important;padding-top:0 !important;padding-bottom:0 !important;
margin-bottom:0 !important;overflow:hidden}.cont-msgui .msg-item.closing .bar-timeout{height:0}
button.sabtn {border:1px solid transparent;border-radius:4px;background-color:#00000015;padding:2px 6px;
transition:all 0.2s;font-family:system-ui}.buttons-list {margin-left:10px;display:flex;gap:4px;
align-items:center}button.sabtn:hover {border:1px solid #00000035}`
      window.msgUI = { fn: {} }
      let msgUI = window.msgUI
      msgUI.fn.ne = function(tag, classes, inText = '', listChilds = [], clickAction = '') {
        let item = $n(tag)
        classes.split(',').forEach(function(c) { c != '' && item.classList.add(c) })
        inText.startsWith('html:')
          ? item.innerHTML = inText.slice(5)
          : '' != inText && (item.innerText = inText)
        if (typeof (clickAction) == 'function') {
          item.on('click', function(e) { clickAction(e) })
        }
        listChilds.forEach(function(ic) { if (ic instanceof Node) { item.appendChild(ic) } })
        return item
      }
      let ne = msgUI.fn.ne
      document.body.appendChild(ne('div', 'cont-msgui-main', '', [
        setStyle(cssMainMsgUI, 'css-cup-msgui', true),
        ne('div', 'cont-msgui', ''),
      ]))
      msgUI.fn.closeMsg = function(i) {
        if (i) {
          if (i.parentNode) {
            i.style.height = (i.offsetHeight) + 'px'
            setTimeout(function() {
              i.classList.add('closing')
            }, 10)
            setTimeout(function() {
              if (i.parentNode) { i.remove() }
            }, 11e2)
          }
        }
      }
      let contMsgs = $('.cont-msgui-main .cont-msgui')
      msgUI.show = function(msg, color = 'blue', bold = false, duration = 5, listButtons = []) {
        let iMsg = ne('div', 'msg-item,' + color, '', [
          ne('div', 'cont-msg', '', [
            ne('div', 'msg-text' + (bold ? ',bold' : ''), msg),
            ne('div', 'buttons-list', '', listButtons)
          ]),
          ne('div', 'bar-timeout')
        ], function(i) {
          if (!i.target.closest('button')) {
            msgUI.fn.closeMsg(i.target.closest('.msg-item'))
          }
        })
        contMsgs.appendChild(iMsg)
        iMsg.qsf('.bar-timeout').style.animationDuration = duration + 's'
        setTimeout(function() {
          msgUI.fn.closeMsg(iMsg)
        }, duration * 1e3 + 5e2)
      }
      msgUI_show = msgUI.show
      let toastMSGStyle = /*css*/`.msg-over{z-index:2147483647;position:fixed;bottom:80px;left:0;right:0;
width:100%;padding-inline:10px;display:flex;justify-content:center;user-select:none;pointer-events:none;
transition:all .3s ease-in-out;;transform:translateY(20%);transform-origin:center;opacity:0}
.shw-t-m .msg-over{opacity:1;transform:translateY(0)}.msg-cont{pointer-events:all;display:flex;max-width:
800px;background-color:#333333d9;border-radius:6px;padding:10px;align-items:center;column-gap:10px;
box-shadow:0 4px 8px 0 #00000069;backdrop-filter:brightness(.8) blur(4px)}.msg-cont *{margin:0;line-height
:initial;font-size:15px;font-family:system-ui}.msg-cup-v .msg-over .msg-cont .fl, .msg-cont p{color:#ffffff;
display:inline-block}.msg-cont a{padding:3px 8px;border-radius:4px;background-color:#ffffff21;color:#5cb5ff;
cursor:pointer;transition:all .3s;display:inline-block}.msg-cont .fl{flex:1;padding-inline:4px}
.msg-cont .fl a{margin-inline-start:6px}.msg-cont a:hover{text-decoration:none;background-color:#ffffff5c;
color:#fff}.fr{display:flex;align-items:center}`
      setStyle(toastMSGStyle, 'css-toast-msg')
      window.toastMSG = function(cl, cr = '', dur = 3e3) {
        if (!cl.includes('<') && !cl.includes('>')) {
          cl = '<p>' + cl + '</p>'
        }
        if (cl.charAt(0) == ':') {
          cl = '<p>' + cl.slice(1) + '</p>'
        }
        cr == '' && (cr = 'btnc:No')
        if (cr.startsWith('btnc')) {
          let t = cr.split(':')[1]
          cr = /*html*/`<a btn-2c><span>${t}</span></a>`
        }
        let nmt = $n('div','class::msg-cup-v', `html:
        <div class="msg-over">
          <div class="msg-cont">
            <div class="fl">${cl}</div>
            <div class="fr">${cr}</div>
          </div>
        </div>
        <style></style>
        `, 'ddbb')
        if (cr == '-') {
          nmt.qsf('.fr').remove()
        }
        setTimeout(function() {
          nmt.classList.add('shw-t-m')
        }, 2e2)
        function cltm() {
          nmt.classList.remove('shw-t-m')
          setTimeout(function() {
            nmt && nmt.remove()
          }, 4e2)
        }
        setTimeout(function() { cltm() }, dur)
        let btnc = nmt.qsf('a[btn-2c]')
        btnc && btnc.on('click', function() { cltm() })
        let cna = []
        nmt.qsa('a').forEach(function(a) { cna.push(a) })
        return cna
      }
      if (top == self) {
        let linkUP = '<a href=" ' + extHost + '@">Descargar</a>'
        setTimeout(function() {
          if (scm('aa')) {
            linkUP = linkUP.replace('@', 'campus-usat-pro.apk')
            if (window.__CUPmV != CUPvSaa) {
              clog(window.__CUPmV)
              clog(CUPvSaa)
              toastMSG(`:Actualice la app a la versión ${CUPvSaa} ${linkUP}`, '-', 4e3)
            }
          }
          if (scm('ce')) {
            linkUP = linkUP.replace('@', 'campus-usat-pro.zip')
            if (window.__CUPmV != CUPvSce) {
              toastMSG(`:Actualice la extensión USAT PRO a la versión ${CUPvSce} ${linkUP}`, '-', 4e3)
            }
          }
        }, 3e3)
      }
    })
    // ---- ---- REDIRECT FROM EGRE
    atDomReady(true, function() {
      toastMSG(
        'Este es el formulario de acceso para egresados, ¿desea ir al de estudiantes?',
        '<a target="_top" href="' + lSitesU['main'] + '">Sí</a>',
        7e3
      )
    }, (locSite == 'ls_loginLastC' || locSite == 'ls_loginLastC_Egre'))
    atDomReady('ls_loginLastLastC', function() {
      let t2rw = $('form[name="frmAcceso"] table')
      if (t2rw) {
        t2rw.innerHTML = `<tbody>
          <tr align="center" bgcolor="#990000">
            <td colspan="4" bgcolor="#661C1D" class="usatSubTitulo"><b>Ingrese al Campus Virtual</b></td>
          </tr>
          <tr bgcolor="#DECE9C">
            <td width="100%" align="center" class="nll">
              <a href="${lSitesU['main']}">Ir al formulario de acceso</a>
            </td>
          </tr>
        </tbody>
        <style>
        .nll a {color:black;font-size:15px;margin:6px 0px;display:block;padding:4px 6px}
        </style>`
      }
    })
    // ---- ---- CSS CUSTOM
    atDomReady(true, function() {
      let cssList = [
        ['ls_moodle', /*css*/`.card.dashboard-card{border-radius:8px;overflow:hidden;border:2px solid #bebebe;
width:100%;margin-bottom:1rem}.card.dashboard-card.disabled-course{display:none}.card.dashboard-card > a{display:none}
.card .card-body .text-muted{display:none !important}@media (max-width: 800px){
.card-deck.dashboard-card-deck .dashboard-card{width:100%}}@media (min-width: 800px) and (max-width: 1400px){
.card-deck.dashboard-card-deck .dashboard-card{width:calc(50% - (0.5rem * 2))}}@media (min-width: 1400px){
.card-deck.dashboard-card-deck .dashboard-card{width:calc(33% - (0.5rem * 2))}}
[data-region=favourite-icon]{display:none}.dashboard-card .card-body a .multiline{font-weight:normal;
font-family:\'Open Sans\';white-space:nowrap;text-overflow:ellipsis;overflow:hidden;display:block}
.dashboard-card-deck{padding-top:10px}.card.dashboard-card .card-body a.coursename{margin:0 !important;width:100%;
text-align:left;padding-left:0.8rem;padding-right:0.8rem;display:block}
.block-myoverview.block-cards .dashboard-card-deck .ml-auto.dropdown{top:0;background-color:rgba(255, 255, 255, .6)}
.card.dashboard-card{box-shadow:none;border:2px solid #ebebeb}.card.dashboard-card:hover{border:2px solid #686868;
box-shadow:none}[data-region="recentlyaccessedcourses-view-content"] .card.dashboard-card{width:auto}
.block-cards .course-info-container{padding: 0px 0px 0px 0px !important}
.block-cards .course-info-container a.aalink.coursename{padding: 0.8rem}
.block-cards .course-info-container .ml-auto.dropdown{display: none}`],
        ['ls_av.course,ls_av.mod', /*css*/`iframe#contentframe{height:80vh !important}.resourcecontent.resourcepdf,
#resourceobject{height:100vh}`],// oldfn_46
        ['ls_loginRecentC', /*css*/`.fixed-image-message{display:none}`],
        ['ls_campusMain', /*css*/`*{box-sizing:border-box;font-family:system-ui}#bodyPrincipal{padding-right:
0px !important}*::-webkit-scrollbar,div#divleft.left-bar::-webkit-scrollbar{width:10px}*::-webkit-scrollbar-thumb,
div#divleft.left-bar::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, 0.18);background-clip:padding-box;
border:2px solid rgba(0, 0, 0, 0)}*::-webkit-scrollbar-thumb:hover,div#divleft.left-bar::-webkit-scrollbar-thumb
:hover{background-color:rgba(0, 0, 0, 0.22);border:0 solid rgba(0, 0, 0, 0)}*::-webkit-scrollbar-thumb:active,
div#divleft.left-bar::-webkit-scrollbar-thumb:active{background-color:rgba(0, 0, 0, 0.29)}body{--alto:
calc(100vh - 70px)}#divContent .row.grid.col-md-12{overflow:auto;height:calc(var(--alto) - 1px)}.wrapper{
min-height:var(--alto)}@media (min-width:992px){#divContent .row.grid.col-md-12 .col-md-4,#divContent .row.grid
.col-md-12 .col-md-8{height:calc(var(--alto) - 8px);overflow:auto}}a#lnkCiclo{display:none}
object#anuncio{height:calc(var(--alto) - 120px) !important;
overflow:auto !important}div#div_anuncio_bd{height:calc(var(--alto) - 81px);overflow-y:auto;overflow-x:hidden}
.panel.panel-piluku{margin:0}@media (min-width:1200px){div#divleft{overflow-y:auto !important;z-index:555;display:flex;
flex-direction:column;overflow-x:hidden !important}div#divLeftbar{overflow-y:scroll;flex-grow:1;overflow-x:hidden}}
.nicescroll-rails.nicescroll-rails-vr{display:none !important}.left-bar .menu-parent,.side-bar .menu-parent{
margin-top:0;padding-top:0}div#divleft > *{position:relative !important}#divContent .row.grid.col-md-12{
transform:translateX(16px);padding:0;float:none}#divContent .row.grid.col-md-12 > *{padding:10px 0 0 10px}
#divContent .col-md-8 .panel-heading .panel-title a{padding:7px 12px;background-color:#ffffff;border-radius:20px;
font-size:1.1em;margin-right:12px;color:white;cursor:pointer;border:2px solid #e33439;color:#e33439}
#divContent .col-md-8 .panel-heading .panel-title a:hover{color:white;background-color:#e33439}
#div_anuncio_bd iframe{width:134%;height:calc(var(--alto) * 1.08);border:2px solid #aaaaaa;margin-bottom:12px;
transform:scale(0.75);transform-origin:top left}#div_anuncio_bd iframe:not(.first){transform:scale(0.75) translateY(-33%)}
.panel-piluku > .panel-heading h3{display:flex;flex-wrap:wrap;row-gap:8px}body .wrapper .left-bar{z-index:
9999 !important}body .wrapper #content.content .overlay.show{z-index:9998 !important}
.top-bar .navbar-default .navbar-nav,.top-bar .navbar-default .navbar-nav>li{display:flex;align-items:stretch}
.top-bar .navbar-default .navbar-nav>li>a{display:flex;align-items:center;column-gap:8px}
.top-bar .avatar_width span.avatar-holder{width:32px;margin:0px}.avatar_width{padding-inline:16px !important}
.avatar_width span.drop-icon{display:none}
body #content form .top-bar nav.navbar .menu-bar-mobile{z-index:9997 !important}@media (min-width:800px){
img#imgAvatar{object-fit:contain;background-color:white;;transform:translateX(-4px);height:30px;width:30px}}
@media (max-width:680px){.nav #lnkHome,.nav #homeReset{padding:0 12px}.avatar_width .avatar-holder{margin-right:
0px !important}}@media (max-width:860px){li.piluku-dropdown.dropdown:nth-child(2),
li.piluku-dropdown.dropdown:nth-child(3),li.piluku-dropdown.dropdown:nth-child(6){display:none !important}
img#imgAvatar{object-fit:contain;filter:brightness(0.1);height:30px;width:30px}
span.avatar_info{display:none !important}span.avatar-holder{width:40px !important}
ul.nav.navbar-nav.navbar-right.top-elements{float:right;display:flex;justify-content:flex-end}
ul.nav.navbar-nav.navbar-left.top-elements{float:left;display:none}}ul.dropdown-menu.dropdown-piluku-menu.animated
.fadeInUp.wow.avatar_drop.neat_drop.dropdown-right.animated{left:auto !important;width:min-content !important;
right:8px;position:absolute !important;border-radius:8px 0 8px 8px;overflow:hidden;box-shadow:0 2px 6px 2px #00000025;
border-top:none;width:178px !important;min-width:40px}.navbar-nav.navbar-right.top-elements .dropdown-menu{
background-color:#252525}.navbar-nav.navbar-right.top-elements .dropdown-menu i{margin-left:6px}ul
.dropdown-menu.dropdown-piluku-menu li a i{width:26px;text-align:center;font-size:20px !important}
.navbar-nav.navbar-right.top-elements .dropdown-menu .ion-android-create{color:#606060}
.dropdown-piluku-menu.neat_drop.dropdown-menu a{display:flex !important;align-items:center;padding:
20px 8px !important}.dropdown-piluku-menu.neat_drop.dropdown-menu a:not(.logout_button){background-color:
white}.dropdown-piluku-menu.neat_drop.dropdown-menu li a i{color:#606060}.dropdown-piluku-menu
.neat_drop.dropdown-menu li{cursor:pointer;user-select:none}.dropdown-piluku-menu.neat_drop.dropdown-menu .logout_button
:hover{color:white !important;background-color:#b31d22 !important}.dropdown-piluku-menu.neat_drop
.dropdown-menu .logout_button{border-radius:0px !important}#mdlCarnetDigital #divLogo img{object-fit:contain}
.piluku-dropdown .dropdown-piluku-menu li:hover a{background-color:#e9ecf2 !important}
li.inf-acc{font-size:14px;padding:6px;background-color:#ffffff}li.inf-acc .c div{padding:4px 12px;color:#9c9c9c;
text-align:center}li.inf-acc .btn2dacc{color:#000;font-weight:700}.inf-acc .c{border-style:solid;border-width:1px;
border-color:#cecece}li.inf-acc:hover .c{border-color:#000}li.inf-acc:hover .c div{color:#000}
li.inf-acc:hover .btn2dacc{background-color:#c8c8c8}.top-bar .open a span#lblCodigoUniversitario{color:black !important}
.btn-close-modal-b{display:block !important}`],
        ['ls_calificaciones', /*css*/`.col-xs-12,.col-xs-12 > * > *,.container-fluid,.panel.panel-body{padding:0 !important}
@media (max-width:599px){.form-group{display:flex;flex-direction:column;align-items:stretch;margin-bottom:0}
.row .form-group{margin:0px}.form-group *{width:100% !important}}@media (min-width:600px){.form-group{display:flex;
align-items:center}.col-xs-3{margin-inline-end:16px}}.form-group * select{max-width:400px;font-size:14px;padding:4px 12px;
height:37px;margin-block-end:6px}.panel-default,.panel.panel-body{border:none}.treeview span.indent{margin:0}
.table-responsive > .row{margin:0}.panel{box-shadow:none !important}`]
      ]
      for (let i = 0; i < cssList.length; i++) {
        let datCss = cssList[i]
        if (datCss[0].split(',').includes(locSite)) {
          setStyle(datCss[1], 'css-cup-main')
          break
        }
      }
    })

    // ---- ---- SET FAVICON
    atDomReady(true, function() {
      let fded = false
      let faviconsBySites = [
        'ls_loginLastC,ls_loginRecentC,ls_loginLastLastC,ls_campusMain:iXksnKc',
        'ls_moodleClose,ls_moodle:xbwd3Pr',
        'ls_av.course:ewk4kOX',
        'ls_av.assign,ls_av.mod:TkahZ9d'
      ]
      for (let l of faviconsBySites) {
        if (l.split(':')[0].split(',').includes(locSite)) {
          fded = true
          setFavicon('//i.imgur.com/' + l.split(':')[1] + '.png')
          break
        }
      }
      if (!fded) {
        // a/Tu4hlYjj
        // a/U52xAUY
        setFavicon('https://icons.iconarchive.com/icons/hopstarter/soft-scraps/48/Book-icon.png')
      }
    })
    function mmodal(m = true) {
      if (m) {
        document.body.classList.add('modal-open')
        if (!$('[css-cup="css-cup-mmodal"]')) {
          setStyle('body.modal-open{overflow:hidden !important}', 'css-cup-mmodal')
        }
      } else {
        document.body.classList.remove('modal-open')
      }
    }
    window.__baBP = function() {
      return false
    }
    window.__baSH = function(v = '') {
      location.hash = v
    }
    let baSH = window.__baSH
    // ---- CUSTOM FOR SITES
    // ---- ---- BACK PRESS
    if (locSite == 'ls_loginRecentC') {
      window.__baBP = function() {
        let mnfl = $('.nfl-c-form')
        if (mnfl) {
          if (mnfl.style.display != 'none') {
            mnfl.qsf('.btn-back-nlf').click()
          }
          return true
        } else {
          return false
        }
      }
      window.addEventListener('hashchange', function() {
        let h = location.hash.replace('#', '')
        h == '' && window.__baBP()
      })
    }
    // ---- ---- FORM LOGIN FROM RECENT LOGIN
    function createAlternativeFormLogin(qU, qP, qSbmt, cssdplay = '', preFn = false) {
      let iptU = $(qU)
      let iptP = $(qP)
      let iptS = $(qSbmt)
      if (iptU && iptP && iptS) {
        if (typeof(preFn) == 'function') {
          preFn()
        }
        function showErrNetwrk(strErrMessage) {
          msgUI.show(strErrMessage, 'red', true, 10)
        }
        let simSbmt = function(u, p) {
          iptU.value = u
          iptP.value = p
          fetch(lSitesU['h_intranet'])
          .then(response => {
            if (!response.ok) {
              const errorMessages = [
                '400=Error:  de solicitud. Intente nuevamente.',
                '401=Error: El servidor no le concedió acceso al recurso.',
                '403=Error: El servidor no le concedió acceso al recurso.',
                '404=Error: Recurso del servidor no disponible.',
                '500=Error interno del servidor: Por favor, intenta más tarde.',
                '503=Error: el servidor está temporalmente fuera de servicio.'
              ]
              const errorMessage = errorMessages.find(item => item.split('=')[0] == response.status.toString())
              showErrNetwrk(`ERROR ${response.status}`)
              if (errorMessage) {
                throw new Error(errorMessage.split('=')[1])
              } else {
                throw new Error('Error desconocido en la solicitud.')
              }
            }
          })
          .catch(error => {
            if (error.message === 'Failed to fetch') {
              showErrNetwrk('Error: No se pudo establecer conexción con el servidor. Verifica tu conexión a internet o intenta más tarde que el sitio esté disponible.')
            } else {
              showErrNetwrk(`${error.message}`)
            }
          })
          iptS.click()
        }
        let mel = window['_menclib']
        let pcf = $n('div', 'class::nfl-c-form', /*html*/`html:
<div class="f-form">
  <div class="form-in" data-fsi="1">
    <div class="form-s margin"></div>
    <div class="form-s" data-fs="1">
      <a class="btn-reload"><svg viewBox="0 0 512 512"><path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14\
.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.\
5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-\
1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"></path></svg></a>
      <div class="himgs">
        <img src="https://i.ibb.co/9Z035J9/cup-nfl-i-1.png">
        <img src="https://i.ibb.co/1JqMwLJ/cup-nfl-i-2.png">
      </div>
      <div class="p">Identifícate</div>
      <div class="nfl-form-c">
        <label>
          <span>Usuario</span>
          <input type="text" id="nfl-lu" placeholder="Usuario" autocomplete="off">
        </label>
        <label>
          <span>Contraseña</span>
          <input type="password" id="nfl-lp" placeholder="Contraseña">
        </label>
        <button id="nflblb" class="nfl-bs-r">Ingresar</button>
        <div class="nfl-oopts apb">
          <div class="nfl-oopts-in pa">
            <p class="nfl-ipla">Acceso automático en <span id="nfl-ci"></span> s</p>
            <button id="nflbstop" class="nfl-bs-g">No iniciar sesión</button>
          </div>
          <div class="nfl-oopts-in pb">
            <button id="nflbsp" class="nfl-bs-g">Configurar acceso automático</button>
          </div>
        </div>
      </div>
    </div>
    <div class="form-s" data-fs="2">
      <div class="sh-b">
        <svg class="svg-i-close" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.\
5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
        <div class="sh">Atrás</div>
      </div>
      <div class="form-w">
        <div class="form-w-i">La clave será almacenada para utilizarse en los siguientes inicios de sesión. \
Asegúrese de escribir las credenciales correctas para evitar errores.<p><a></a></p>
        </div>
      </div>
      <div class="nfl-form-c">
        <label>
          <span>Usuario</span>
          <input type="text" id="nfl-su" placeholder="Usuario" autocomplete="off">
        </label>
        <label>
          <span>Contraseña</span>
          <input type="password" id="nfl-sp" placeholder="Contraseña">
        </label>
        <button id="nflbsb" class="nfl-bs-r">Guardar datos</button>
      </div>
    </div>
    <div class="form-s" data-fs="3">
      <div class="sh-b">
        <svg class="svg-i-close" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 \
12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
        <div class="sh">Atrás</div>
      </div>
      <div class="form-w pcdis-1">
        <p>
          El servicio de inicio automático se encuentra activado para la cuenta <b id="nfl-dlu"></b>. Al pulsar "desactivar"\
, la cuenta ya no será utlizada y podrá configurar una nueva cuenta o la misma.
        </p>
      </div>
      <div class="form-w pcdis-2">
        <p>Puede configurar nuevamente el autocompletado desde el botón <strong>"Configurar inicio automático".</strong></p>
      </div>
      <div class="nfl-form-c">
        <button id="nflbdb" class="nfl-bs-r">Desactivar</button>
      </div>
    </div>
  </div>
  <div class="form-out"></div>
</div>
<div class="form-bgs"></div>
<div class="btn-back-nlf">
  <span class="bbnflb"></span>
  <svg class="svg-i-close" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 \
45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
  <span>Atrás</span>
</div>
        `, 'ddbb')
        pcf.appendChild(setStyle(/*css*/`.nfl-c-form{height:100vh;
background-image:url("https://i.ibb.co/SnhMDvs/descarga.jpg");background-size:cover;background-position:center;
display:flex;z-index:99999999;position:fixed;left:0;right:0;top:0;bottom:0}.nfl-c-form *{box-sizing:border-box;
font-family:system-ui, 'Open Sans', 'Helvetica Neue', sans-serif}.nfl-c-form *::selection{background-color:
#1997ff35}.form-bgs{position:absolute;left:0;top:0;width:100%;height:100%;background-color:#0000005c;
background-image:linear-gradient(0deg, #0000006b, transparent, transparent)}.nfl-c-form .f-form{margin:auto;
position:relative;z-index:2;width:100%;max-width:340px;padding:16px 8px}.nfl-c-form .form-in img{max-width:
106px;margin-block-end:10px}.nfl-c-form .form-in{position:relative;background-color:white;border-radius:10px;
box-shadow:0 4px 16px 0 #00000055;width:100%;border-style:solid;border-width:1px;border-color:#d5d5d5;overflow:
hidden}@media (max-width: 360px){.form-s{padding-inline:12px}}@media (min-width: 361px){.form-s{padding-inline:
40px}}.nfl-c-form .form-in,.nfl-c-form .form-s.margin{height:100%;max-height:500px}
.nfl-c-form .f-form{height:100%;max-height:534px}.btn-reload{border-style:solid;border-width:1px;border-color:
#cecece;position:absolute;right:8px;top:8px;height:36px;width:36px;display:flex;align-items:center;
justify-content:center;padding:8px;border-radius:50%;cursor:pointer;background-color:transparent;transition:
all 0.3s;transform:translateY(-46px);opacity:0}.btn-reload.down{transform:none;opacity:1}
.btn-reload:hover{border-color:#999999;background-color:#e5e5e5}.btn-reload svg path{fill:#8d8d8d}
.nfl-c-form .form-s:not(.margin){transition:transform ease-out 0.4s;position:absolute;top:0;left:0;right:0;
bottom:0;height:100%;width:100%;background-color:#ffffff;overflow:auto}[data-fs="1"]{padding-block:28px}
[data-fs="2"] .nfl-form-c{margin-block:18px 22px}[data-fsi="1"] [data-fs="2"],[data-fsi="1"] [data-fs="3"],
[data-fsi="2"] [data-fs="3"],[data-fsi="3"] [data-fs="2"]{transform:translateX(calc(100% + 10px))}[data-fs="2"],
[data-fs="3"]{padding-block:32px;box-shadow:0 0 10px 0 #00000055}[data-fsi="2"] [data-fs="1"],
[data-fsi="3"] [data-fs="1"]{transform:translateX(-20%)}[data-reqconf="1"][data-reqna="1"] [data-fs="2"],
[data-fsi="2"] [data-fs="2"],[data-fsi="3"] [data-fs="3"]{transform:translateX(0px)}.form-s{width:100%}
.form-s .sh-b{background-color:#efefef;color:#a2a2a2;border-radius:4px;cursor:pointer;padding:4px 8px;
margin-left:0;margin-right:auto;display:flex;align-items:center;gap:6px;font-size:14px;line-height:22px;
transition:all 0.3s}.form-s .sh-b:hover{background-color:#dfdfdf;color:#767676}.form-s .sh-b svg path{
fill:#a2a2a2}.form-s .sh-b:hover svg path{fill:#767676}.form-s .sh-b .sh{margin-right:6px}.form-s .sh-b .sh{
color:inherit}.svg-i-close{transform:translateY(1px);height:15px;width:1em}.nfl-c-form .form-s,
.nfl-c-form .himgs,.nfl-c-form .nfl-form-c,.nfl-oopts-in{display:flex;flex-direction:column;align-items:center}
.nfl-oopts,.nfl-oopts-in{width:100%}.nfl-oopts.apa .nfl-oopts-in.pb{display:none}.nfl-oopts.apb .nfl-oopts-in.pa{
display:none}.nfl-form-c label{margin-block-end:16px;width:100%}.nfl-ipla{font-size:15px;color:#8d8d8d;
margin-block:12px 2px}#nflbstop{width:auto;color:#6b6b6b;border-radius:22px;font-size:15px;padding:2px 22px;
white-space:nowrap;transition:all 0.3s}.nfl-form-c #nflbstop:hover{color:#5f5f5f;background-color:#dcdcdc}
.form-in .p{font-size:17px;font-weight:bold;margin-block-start:12px;margin-block-end:22px}
.nfl-form-c label span{display:none}.nfl-form-c label input{text-align:center;border-style:solid;border-width:
1px;font-size:15px;border-color:#e6e6e6;background-color:#f1f1f1;outline-style:solid !important;outline-width:
0 !important;outline-color:#ff121217;transition:all 0.3s}.nfl-form-c label input:focus{background-color:#ffffff;
border-color:#893838 !important;outline-width:4px !important;outline-color:#ff121217 !important}
.nfl-form-c button,.nfl-form-c label input{border-radius:6px;padding:4px 8px;font-size:15px;font-weight:400;
width:100%;line-height:30px}.form-w,.nfl-form-c{width:100%}.nfl-form-c button{cursor:pointer;margin-block-start:
12px;border:none}.nfl-form-c .nfl-bs-r{background-color:#d91212;padding:6px;color:white}.nfl-form-c .nfl-bs-r
:hover{background-color:#b60f0f}.nfl-form-c .nfl-bs-g{background-color:#ebebeb;color:#a1a1a1;padding:2px 6px;
font-size:14px}.nfl-form-c .nfl-bs-g:hover{background-color:#d4d4d4;color:#7c7c7c}.nfl-form-c .nfl-bs-b{
cursor:default;border:1px solid #a5a5a5;background-color:transparent;color:#252525}.form-w{margin-block-start:
18px}.f-form .form-w-i{border-style:solid;border-width:1px;font-size:13px;color:#747474;padding:10px;
border-radius:4px;background-color:#efefef;line-height:17px}.f-form .form-w p,.f-form .form-w-i{text-align:
justify}.f-form .form-w p{font-size:15px;line-height:24px;}.f-form .form-w-i p{line-height:inherit;margin-block-start:6px;
margin-block-end:0}.f-form .form-w-i a{
color:#ce1515}.f-form .form-w-i a:hover{text-decoration:underline}.btn-back-nlf{cursor:pointer;position:absolute;
left:0;top:0;border-style:solid;border-color:white;color:white;border-width:1px;padding:4px 16px 4px 12px;
line-height:22px;font-size:15px;margin:16px;z-index:3;display:flex;align-items:center;transition:all 0.2s}
@media (max-height: 700px){.btn-back-nlf{opacity:0.9;background-color:#00000026}}@media (min-height: 701px){
.btn-back-nlf{opacity:0.6}}.btn-back-nlf svg{transform:translateY(-1px);width:1em;margin-right:6px}
.btn-back-nlf svg path{fill:#ffffff}span.bbnflb{height:18px;width:16px;position:relative;display:none}
span.bbnflb::after,span.bbnflb::before{content:"";border-width:2px;border-style:solid;position:absolute}
span.bbnflb::before{top:8px;width:12px;border-width:1px;border-color:white transparent;display:none}
span.bbnflb::after{transform:translateY(4px) rotate(-135deg);border-color:white white transparent transparent;
width:10px;height:10px}.btn-back-nlf:hover{opacity:1;background-color:#ffffff15}
        `, 'css-cup-nfl', true))
        pcf.qsf('.btn-back-nlf').on('click', function() {
          pcf.qsf('.form-in').classList.add('p')
          pcf.style.display = 'none'
          mmodal(false)
          baSH()
        })
        if (pcf) {
          let nflgn = {m: pcf}
          nflgn.cs = nflgn.m.qsf('.form-in')
          nflgn.copts = nflgn.m.qsf('.nfl-oopts')
          nflgn.pl_u = nflgn.m.qsf('#nfl-lu')
          nflgn.pl_p = nflgn.m.qsf('#nfl-lp')
          nflgn.ps_u = nflgn.m.qsf('#nfl-su')
          nflgn.ps_p = nflgn.m.qsf('#nfl-sp')
          nflgn.pl_sbmt = nflgn.m.qsf('#nflblb')
          nflgn.pl_pcm = nflgn.m.qsf('.nfl-ipla')
          nflgn.pl_pcc = nflgn.m.qsf('#nfl-ci')
          nflgn.pl_stop = nflgn.m.qsf('#nflbstop')
          nflgn.pl_codaa = nflgn.m.qsf('#nflbsp')
          nflgn.pl_setdat = nflgn.m.qsf('#nflbsb')
          nflgn.dlu = nflgn.m.qsf('#nfl-dlu')
          nflgn.pl_brld = nflgn.m.qsf('.btn-reload')
          nflgn.dmsg = [
            $('.pcdis-1'),
            $('.pcdis-2')
          ]
          nflgn.pl_brld.href = location.href
          function viptrim(arrIpts) {
            let endvld = true
            let i = 0
            while (i < arrIpts.length) {
              if (endvld) {
                endvld = !!arrIpts[i].value.trim()
              }
              i++
            }
            return endvld
          }
          let remDat = {'ks': '_lad-f/59635'}
          remDat.up = function(p, u) {
            localStorage.setItem(remDat['ks'], mel.en(JSON.stringify([p, u])))
          }
          remDat.re = {da: [false, []]}
          remDat.de = function() {
            localStorage.removeItem(remDat['ks'])
            remDat.re.da = [false, []]
            nflgn.dlu.innerText = ''
            nflgn.ps_u.value = ''
            nflgn.ps_p.value = ''
          }
          remDat.re.get = function() {
            remDat.re.da = [false, []]
            let parrd = localStorage.getItem(remDat['ks']) || ''
            if (parrd) {
              let corrRem = false
              try {
                let adat = JSON.parse(mel.de(parrd))
                if (typeof(adat) == 'object') {
                  let _adat = [mel.de(adat[0]), mel.de(adat[1])]
                  if (_adat.length == 2) {
                    if (_adat[0].trim() != '' && _adat[1].trim() != '') {
                      if (/^\d{3}/.test(_adat[0])) {
                        corrRem = true
                        remDat.re.da = [true, _adat]
                      }
                    }
                  }
                }
              } catch (e) {}
              if (!corrRem) {
                remDat.de()
              }
            } else {
              remDat.de()
            }
          }
          let itvLgn
          let baseTimeCount = 3
          function ciALgn() {
            clearInterval(itvLgn)
            remDat.re.get()
            if (remDat.re.da[0]) {
              setTimeout(function() {
                nflgn.m.style.display = ''
                mmodal(true)
                baSH('nflogin')
              }, 3e2)
              nflgn.cs.setAttribute('data-reqna', '0')
              nflgn.pl_pcm.innerHTML = 'Acceso automático en <span id="nfl-ci"></span> s'
              nflgn.pl_pcc = nflgn.m.qsf('#nfl-ci')
              nflgn.pl_stop.style.display = ''
              nflgn.pl_stop.innerText = 'No iniciar sesión'
              nflgn.dlu.innerText = remDat.re.da[1][0]
              nflgn.dmsg[1].style.display = 'none'
              remDat.re.da[1]
              nflgn.copts.classList.replace('apb', 'apa')
              let timeCount = baseTimeCount
              nflgn.pl_pcc.innerText = timeCount
              itvLgn = setInterval(function() {
                let stopFwU = nflgn.cs.classList.contains('p')
                if (nflgn.cs.getAttribute('data-fsi') == '1' && !stopFwU) {
                  timeCount--
                  nflgn.pl_pcc.innerText = timeCount
                  if (timeCount < 1) {
                    clearInterval(itvLgn)
                    nflgn.pl_u.value = remDat.re.da[1][0]
                    nflgn.pl_p.value = remDat.re.da[1][1]
                    simSbmt(nflgn.pl_u.value, nflgn.pl_p.value)
                  }
                } else {
                  timeCount = baseTimeCount
                  setTimeout(function() {
                    nflgn.pl_pcc.innerText = timeCount
                  }, 1e3)
                }
                if (stopFwU) {
                  nflgn.cs.classList.remove('p')
                  clearInterval(itvLgn)
                }
              }, 1e3)
            } else {
              nflgn.cs.setAttribute('data-reqna', '1')
              nflgn.copts.classList.replace('apa', 'apb')
            }
          }
          ciALgn()
          function vfromt(item, text) {
            return item.innerText.toLowerCase().includes(text)
          }
          nflgn.cs.on('click', function (e) {
            let tbtn = e.target
            function setfs(n) {
              nflgn.cs.setAttribute('data-fsi', n)
              if (n == 1) {
                nflgn.cs.classList.remove('p')
                nflgn.cs.removeAttribute('data-reqconf')
              }
            }
            if (tbtn.closest('.sh-b')) {
              setfs(1)
            }
            if (tbtn.closest('#nflbsp')) {
              if (tbtn.closest('.b2')) {
                setfs(3)
              } else {
                setfs(2)
              }
            }
            if (tbtn.closest('#nflbstop')) {
              tbtn.style.display = 'none'
              nflgn.cs.classList.add('p')
              nflgn.pl_pcm.innerText = 'Cancelando...'
              setTimeout(function() {
                nflgn.pl_brld.classList.add('down')
                nflgn.pl_codaa.innerText = 'Desactivar acceso automático'
                nflgn.pl_codaa.classList.add('b2')
                nflgn.copts.classList.replace('apa', 'apb')
              }, 5e2)
            }
            if (tbtn.closest('#nflbdb')) {
              if (vfromt(tbtn, 'desactivar')) {
                nflgn.dmsg[1].style.display = ''
                nflgn.dmsg[0].style.display = 'none'
                tbtn.innerText = 'Desactivando...'
                setTimeout(function() {
                  tbtn.classList.replace('nfl-bs-r', 'nfl-bs-b')
                  tbtn.innerText = '¡Desactivado correctamente!'
                  remDat.de()
                  ciALgn()
                }, 1e3)
                setTimeout(function() {
                  nflgn.pl_codaa.classList.remove('b2')
                  nflgn.pl_codaa.innerText = 'Configurar inicio automático'
                }, 1e3)
                setTimeout(function() {
                  setfs(1)
                }, 2e3)
                setTimeout(function() {
                  tbtn.classList.replace('nfl-bs-b', 'nfl-bs-r')
                  tbtn.innerText = 'Desactivar'
                }, 3e3)
              }
            }
            if (tbtn.closest('#nflbsb')) {
              if (!vfromt(nflgn.pl_setdat, 'complete')) {
                if (!vfromt(tbtn, '...')) {
                  if (viptrim([nflgn.ps_u, nflgn.ps_p])) {
                    let remRDat = [nflgn.ps_u.value, nflgn.ps_p.value]
                    let remTDat = [mel.en(remRDat[0])]
                    remTDat.push(mel.en(remRDat[1]))
                    remDat.up(remTDat[0], remTDat[1])
                    nflgn.pl_u.value = remRDat[0]
                    nflgn.pl_p.value = remRDat[1]
                    nflgn.pl_setdat.innerText = 'Guardando datos...'
                    ciALgn()
                    nflgn.dmsg[0].style.display = ''
                    nflgn.dmsg[1].style.display = 'none'
                    setTimeout(function() {
                      nflgn.pl_setdat.classList.replace('nfl-bs-r', 'nfl-bs-b')
                      nflgn.pl_setdat.innerText = '¡Configuración guardada!'
                      nflgn.pl_codaa.classList.add('b2')
                      nflgn.pl_codaa.innerText = 'Desactivar acceso automático'
                    }, 1e3)
                    setTimeout(function() {
                      setfs(1)
                      nflgn.pl_setdat.classList.replace('nfl-bs-r', 'nfl-bs-b')
                      nflgn.pl_setdat.innerText = '¡Configuración guardada!'
                    }, 2e3)
                    setTimeout(function() {
                      nflgn.pl_setdat.classList.replace('nfl-bs-b', 'nfl-bs-r')
                      nflgn.pl_setdat.innerText = 'Guardar datos'
                    }, 3e3)
                  } else {
                    nflgn.pl_setdat.innerText = 'Complete los campos!'
                    setTimeout(function() {
                      nflgn.pl_setdat.innerText = 'Guardar datos'
                    }, 1e3)
                  }
                }
              }
            }
            if (tbtn.closest('#nflblb')) {
              if (!vfromt(nflgn.pl_sbmt, 'complete')) {
                if (viptrim([nflgn.pl_u, nflgn.pl_p])) {
                  simSbmt(nflgn.pl_u.value, nflgn.pl_p.value)
                } else {
                  nflgn.pl_sbmt.innerText = 'Complete los campos!'
                  setTimeout(function() {
                    nflgn.pl_sbmt.innerText = 'Ingresar'
                  }, 1e3)
                }
              }
            }
          })
        }
        pcf.style.display = cssdplay
        pcf.parentNode.insertBefore(pcf, pcf.parentNode.children[0])
      }
    }
    // oldfn_29
    // ---- ---- SHOW LAST LOGIN AS FRAME
    atDomReady('ls_loginRecentC', function() {
      let pfd = $('[name="txtUsername"]')
      pfd && (pfd = pfd.closest('.wpb_column.vc_column_container.vc_col-sm-12'))
      if (pfd) {
        pfd.appendChild(setStyle(/*css*/`
.al-cbtn{display:flex;flex-direction:column;align-items:center;justify-content:center}.al-cbtn button{
background-image:linear-gradient(to left, #E33439, #ff0f16, #c40e13, #E33439);background-size:300%;
margin-block-start:12px;border-style:solid;border-width:1px;border-color:#ffffff65;border-radius:25px;
padding:2px 20px;text-decoration:none;background-position:left;transition:all 0.3s ease;font-size:15px;
color:White;line-height:28px;display:flex;align-items:center}.al-cbtn button:hover{background-position:
100%}.cup-sett-al{padding-block-end:8px}.wpb_raw_code.wpb_content_element.wpb_raw_html{margin-bottom:0}
        `, 'css-cup-fsd', true))
        let bCF = $n('div', 'class::wpb_column vc_column_container vc_col-sm-12 cup-sett-al', '', pfd)
        let cCF = $n('div', 'class::al-cbtn', '', bCF)
        let btnSett = $n('button', '', '', cCF)
        btnSett.innerText = 'Configurar inicio automático'
        btnSett.on('click', function() {
          let df = $('.nfl-c-form')
          if (df) {
            mmodal(true)
            baSH('nflogin')
            df.qsf('.form-in').setAttribute('data-reqconf', '1')
            df.style.display = ''
          }
        })
      }
      createAlternativeFormLogin('[name="txtUsername"]', '[name="txtPassword"]', '#lnkbtnIngresar', 'none')
    })
    // oldfn_14
    if (loc.pathname.startsWith('/campusestudiante')) {
      // ---- ---- SITE ERROR
      atDomReady(true, function() {
        if ($('h1')) {
          if ($('h1').innerText.toLowerCase().includes('error de servidor en la aplicación')) {
            location.replace(lSitesU['main'])
          }
        }
        if (new RegExp('^el servicio no est.+ disponible$', 'i').test(document.body.textContent.trim())) {
          let posC = document.body.childNodes
          if (posC.length > 0) {
            if (posC[0].nodeName == '#text') {
              posC[0].remove()
            }
          }
          setStyle(/*css*/ `body{margin:0;padding:46px 12px;font-family:monospace;background-color:#fff2f2}
.error-msg{padding:12px;font-size:16px;background-color:#ffdddd;border:1px solid #8b2323;max-width:600px;
margin:0 auto}`,'css-cup-error-site')
          $n('div', 'class::site-na-error-msg', /*html*/ `
          <div class="error-msg">Campus USAT temporalmente no disponible por mantenimiento interno. \
Sigue el <a href="https://whatsapp.com/channel/0029VaaqtvuKLaHfqGedEK40" target="_blank">canal de whatsapp\
</a> para que se te notifque al estar activo nuevamente.</div>
          `, 'ddbb')
        }
      }, (locSite == 'ls_loginLastC' || locSite == 'ls_campusMain'))
      // ---- ---- CHECK UPDATES
      onlyAtLoad('ls_campusMain', function() {
        let kLLU = 'cup-tcv'
        let lV = localStorage[kLLU]
        if (lV) {
          isNaN(lV) && localStorage.removeItem(kLLU)
        }
        let lU = lV || (localStorage[kLLU] = timeDate())
        lU = Number(lU)
        let codeDate = timeDate()
        let forceUpdate = localStorage['cup-dv-updreq']
        let logCompare = ''
        if (codeDate - lU > (48 * 60 * 60 * 1e3) || forceUpdate) {
          let s = $n('script', 'src::' + extHost + '/../core/cup-v.js?' + (1 * new Date()), '', 'ddhh')
          s.addEventListener('load', function() {
            if (forceUpdate) {
              logCompare += 'Local version : ' + CUPvS + '\n'
              logCompare += 'Remote version: ' + __CUPvR + '\n'
            }
            if (__CUPvR != CUPvS) {
              let msgAsk = 'Es necesario actualizar el complemento de automatización USAT a la versión '
              msgAsk += __CUPvR + '. ¿Desea actualizar ahora?'
              let lkdl = extHost + 'cup-main.user.js?' + (1 * new Date)
              localStorage[kLLU] = new Date * 1
              toastMSG(':' + msgAsk + '<a target="_blank" href="' + lkdl + '">Sí</a>', '-', 3e3)
            } else {
              if (forceUpdate) {
                toastMSG('El complemento está actualizado', '-')
                logCompare += 'No require update CUP'
                clog(logCompare)
              }
            }
            localStorage.removeItem('cup-dv-updreq')
          })
        }
        if (CUPvS > lU) {
          localStorage[kLLU] = CUPvT
        }
      }, (new Date().getDate() % 2 == 0 || localStorage['cup-dv-updreq']) && top == self && scm('dv'))
      // ---- ---- LOAD AUTO LOGIN TO MOODLE AND NEW LOADER AND REMOVE MODALOPEN
      if (locSite == 'ls_campusMain') {
        // ---- ---- ---- AUTO LOGIN TO MOODLE
        let waitCredentials = requireLoginAV()
        if (waitCredentials || top != self) {
          window.__requireLAV = true
          waitCredentials && sessionStorage.removeItem('rfav')
          onlyAtLoad(true, function() { createMoodleSession('_self', true)})
        }
        // ---- ---- ---- NEW STYLE LOADER ANIMATION
        if (1 == 1) {
          let contDots = $n('div', 'class::stage', /*html*/`html:
            <div class="dot-bricks"><span></span><span></span><span></span></div>
          `)
          contDots.appendChild(
            setStyle(/*css*/`
:root{--mmcolor:#e61c1c;--mmdista:24px}.stage{position:absolute;top:40%;left:50%}.piluku-preloader{opacity:1;
background-color:#000000cc}.dot-bricks span{width:16px;height:16px;background-color:#d3d3d3;border-radius:35%;
position:absolute;animation-duration:1.5s;animation-iteration-count:infinite;animation-name:move;left:-20px;top:-20px}
.dot-bricks span:nth-child(1){animation-delay:0s}.dot-bricks span:nth-child(2){animation-delay:0.5s}
.dot-bricks span:nth-child(3){animation-delay:1s}@keyframes move{0%,100%,80%{transform:translate(0%, 0%)}
25%,5%{transform:translate(150%, 0%)}30%,50%{transform:translate(150%, 150%)}55%,75%{transform:translate(0%, 150%)}}
.piluku-preloader .loader{display:none !important}.piluku-preloader.auto{background-color:#e9e9e9}
.auto .dot-bricks span{background-color:#808080}.msg-init-loader{user-select:none;color:#808088;font-size:16px;
transform:translate(-50%, 4rem)}.piluku-preloader.auto{visibility:visible !important;display:block !important}`,
              'css-cup-dotsloader', true
            )
          )
          let i = setInterval(function() {
            let s = $('.piluku-preloader')
            if (s || tml(5)) {
              let wait = false
              if (s) {
                if (waitCredentials) {
                  document.body.classList.add('red')
                  setStyle(/*css*/`body.red{overflow:hidden !important}
  body.red .row,.red .cont-msgui{display:none !important}`, 'css-cup-automoodle')
                  s.classList.add('auto')
                  let m = $n('div', 'class::msg-init-loader', 'Cargando credenciales...')
                  contDots.appendChild(m)
                }
                s.addEventListener('dblclick', function() {
                  if (wait) {
                    s.classList.add('hidden')
                  } else {
                    setTimeout(function() {
                      wait = true
                      setTimeout(function() {
                        wait = false
                      }, 2e3)
                    }, 2e3)
                  }
                })
                s.appendChild(contDots)
              }
              clearInterval(i)
            }
          }, 40)
        }
      }
      // oldfn_63
      // ---- ---- CUSTOM MENU PROFILE, MODAL INFO, ACC INFO
      atDomReady('ls_campusMain', function() {
        let btLgO = $('.logout_button')
        if (btLgO) {
          btLgO.innerHTML = '<i class="ion-log-out"></i>Cerrar sesión'
          let m = btLgO.parentNode.parentNode
          let btn_inf = $n('li', '', /*html*/`html:<a id="aboutpro"><i class="ion-ios-star"></i>Acerca de PRO</a>`, m)
          if (!scm('aa')) {
            let btn_max = $n('li', '', /*html*/`html:<a><i class="ion-arrow-expand"></i>Ampliar</a>`, m)
            btn_max.addEventListener('click', function() {
              if (document.fullscreenElement == null) {
                document.documentElement.requestFullscreen()
                btn_max.innerHTML = '<a><i class="ion-arrow-shrink"></i>Minimizar</a'
              } else{
                document.exitFullscreen()
                btn_max.innerHTML = '<a><i class="ion-arrow-expand"></i>Ampliar</a'
              }
            })
          }
          setStyle(/*css*/`.cup-mdl-f{position:fixed;left:0;top:0;bottom:0;right:0;height:100vh;max-height:
-webkit-fill-available;background-color:#ffffff94;z-index:999999999;display:flex;padding:8px;justify-content
:center;align-items:center;overflow:hidden}.cup-mdl-in{box-shadow:0 0 7px 2px #00000030;background-color:
#ffffff;width:100%;max-width:800px;padding:6px;max-height:90vh;overflow:hidden;display:flex;flex-direction
:column}.mdl-b,.mdl-h{padding:8px;border-style:solid;border-width:1px;border-color:#b5b5b5}.mdl-h{display:
flex;align-items:center;border-bottom-width:0}.mdl-h p{font-size:16px;color:#1a1a1a;flex:1;margin:0}
.mdl-b .ht,.mdl-h p{font-weight:700}.mdl-b .ht{color:#693939;margin-block-end:2px}.bcls{height:30px;width:
30px;display:flex;align-items:center;justify-content:center;border:1px solid #cacaca;transition:all .3s;
cursor:pointer;font-size:18px;color:#aeaeae}.mdl-b .p p{text-align:justify;margin-block:0 18px}.mdl-b{
overflow:auto;height:100%;flex:1;padding-block-end:80px}.bcls:hover{color:#484848;border-color:#484848;
background-color:#e9e9e9}.cup-mdl-in a{cursor:pointer;color:#2b71f8}.cup-mdl-in a:hover{text-decoration:
underline;color:#123b99}`, 'css-cup-modal')
          btn_inf.addEventListener('click', function() {
            nsirHL = /*html*/`<div class="cup-mdl-in">
<div class="mdl-h"><p>Campus USAT PRO</p><div class="bcls"><i class="ion-android-close"></i></div></div>
<div class="mdl-b">
<div class="p"><div class="ht">¿Qué es?</div>
<p>"Campus USAT PRO" es un complemento de navegador y aplicación que agrega múltiples \
funcionalidades y renueva la apariencia del "Campus Virtual" y del "Aula Virtual" clásicos.</p>
</div>
<div class="p"><div class="ht">¿Qué hace?</div>
<p>Hace tantas cosas como para colocarlas aquí. Conforme lo uses, notarás lo útil que resulta. Pero \
si igualmente deseas saber que hace con exactitud, puedes visitar la @HOMELINK</p>
</div>
<div class="p"><div class="ht">Compatibilidad</div>
<p>Las funcionalidades otorgadas son totalmente compatibles con los navegadores basados en Chromium \
(Chrome, Edge, Opera, Brave, Vivaldi, etc) en sus versiones de escritorio. En la aplicación \
para Android, tiene compatibilidad casi completa (debido a que no soporta múltiples pestañas, las \
opciones de vista e impresión de horario y pagos en línea no están disponibles).</p>
</div>
<div class="p"><div class="ht">Soporte</div>
<p>Este complemento es revisado de forma constante y recibe actualizaciones conforme se diseñen \
nuevas características o que algunos cambios en el Campus lo requieran. Recibirá soporte hasta \
que el autor acabe la carrera, se cambie o retire de la universidad o se canse de darle mantemi\
ento, lo primero que ocurra. También puede ser descontinuado si el Campus Virtual es configurado \
para rechazar, eludir o complicar estas características.</p>
</div>
<div class="p"><div class="ht">Contribuir</div>
<p>Si este complemento te está resultando útil y deseas aportar a este proyecto, puedes simpleme\
nte compartir con tus contactos en enlace de la @HOMELINK y comentarles las funciones que trae, \
así, ya estarías aportando bastante.</p>
<p>También puedes abrir algunos de los siguientes enlaces si deseas aportar.</p>
<li><a id="n-btn">Donar</a></li>
<li><a href="@URLFD1FAIpQLSfYkQq4FA6bAllDj2J3wP7pJEDtG5NtI8T4iy2ouLRgwbmuHQ/viewform">\
Formulario de sugerencias</a></li>
<li><a href="@URLFD1FAIpQLScoGoyJZY-kj7_6lXFsfsnvTLKmeqD4ChRKDDKeHFPlwta6VA/viewform">\
Formulario para reportar un error</a></li><p></p>
<p>Sí llegaste hasta aquí, te invito a que registres en el <a href="@URLFD1FAIpQLSduXS\
7cC2mA8C3iTo7m4ljsgYY4Q3w-JU4Y1xHE1AGfCqNCBw/viewform">formulario de comentarios</a> tu \
experiencia con este complemento o aplicación, de esta forma ayudarás a autor a tener un \
estimado de cuántos estudiantes están usando y disfrutando gratamente estas características.</p>
</div></div></div>`
            nsirHL = nsirHL
              .replaceAll('@URLFD', 'https://docs.google.com/forms/d/e/')
              .replaceAll('@HOMELINK', /*html*/`<a href="${extHost}">página de inicio</a>`)
            let nsi = $n('div', 'class::cup-mdl-f', 'html:' + nsirHL, 'ddbb')
            let bj = nsi.qsf('#n-btn')
            if (bj) {
              bj.addEventListener('click', function() {
                bj.outerHTML = '<em>No siempre se trata de dinero Spiderman...</em>'
              })
            }
            let bc = nsi.qsf('.bcls')
            mmodal()
            baSH('mpro')
            if (bc) {
              bc.addEventListener('click', function() {
                nsi.remove()
                mmodal(false)
                baSH()
              })
            }
          })
          let idest = $('#lblCodigoUniversitario')
          if (idest) {
            idest = idest.innerText.trim()
            if (idest != '') {
              // oldfn_33
            }
          }
          m.appendChild(btLgO.parentNode)
        }
      })
      //  oldfn_25
      // ---- ---- SHORTCUTS FOR EASY LOGIN
      onlyAtLoad('ls_campusMain', function() {
        window.addEventListener('keydown', function(e) {
          if (!e.altKey && e.ctrlKey && e.code == 'KeyI' && !e.shiftKey) {
            let i = setInterval(function() {
              if (typeof(f_Menu) != 'undefined') {
                clearInterval(i)
                f_Menu('aulavirtual.aspx')
              }
            }, 5e2)
            if ($('#moodletablacursosmatriculados_wrapper')) {
              let defFormMoodle = $('form[name=form1]')
              defFormMoodle.setAttribute('target', '_blank')
              defFormMoodle.submit()
            }
          }
        })
      })
      // ---- ---- BACK PRESS
      let posMdls = {}
      function updStModls() {
        posMdls = {
          c: $('.custom-panel'),
          m: $('.float-frame.visible'),
          i: $('.cup-mdl-f'),
          s: $('.float-sch'),
          g: $('.float-grades')
        }
      }
      if (locSite == 'ls_campusMain') {
        window.__baBP = function() {
          updStModls()
          if (!posMdls.c || posMdls.m || posMdls.i || posMdls.s || posMdls.g) {
            if (posMdls.m) {
              $('.toggle-cf').click()
            } else if (posMdls.i) {
              posMdls.i.qsf('.bcls').click()
            } else if (posMdls.s) {
              posMdls.s.qsf('#bfs-c').click()
            } else if (posMdls.g) {
              posMdls.g.qsf('.h button').click()
            } else {
              $('#homeReset').click()
            }
            return true
          } else {
            return false
          }
        }
      }
      // ---- ---- REMOVE POPUPS
      atDomReady('ls_campusMain', function() {
        function logRemoveAsking(isSuccess, namereference, itemCont) {
          let report = isSuccess ? '' : "NO FUE "
          let timeStrIfSucess = isSuccess? ' (' + (new Date().toLocaleString()) + ')' : ''
          timeStrIfSucess = ''
          let strMsgLog = `Modal "${namereference}" ${report}removido${timeStrIfSucess}`
          if (isSuccess) {
            runOrwait(msgUI_show, strMsgLog, 'blue', false, 3, [
              msgUI.fn.ne('button', 'sabtn', 'VER', [], function() {
                itemCont.style.display = 'block'
                clog('> Modal ' + report + ': ', itemCont)
              })
            ])
          } else {
            clog('> ' + strMsgLog)
          }
        }
        let items2Del = [
          ['#divInfoALuDeuda', '.row', 'Deuda pendiente'],
          ['#divInstrumentoEvaluacion', '.row', 'Encuesta de satisfacción estudiantil'],
          // /campusestudiante/InstrumentosEvaluacion/VerInstrumentoEvaluacion.aspx
          ['#divModal34', '.row', 'UNKNOW'],
          ['#divAlumnoAvisoCarne', '.row', 'Modal aviso carnet'],
          ['#divAlumnoTermino', '.row', 'Aceptar términos y condiciones de uso de imagen'],
          ['#modalDatos', '.row', 'Actualiza tus datos'],
          ['#divAlumnoTerminoBiblioteca', '.row', 'Términos y condiciones de biblioteca'],
          ['mt:Evaluación de Desempeño Docente', '.row', 'Aviso evaluación desempeño docente'],
          ['mt:PLAN MAESTRO USAT', '.row', 'Encuesta plan maestro USAT'],
          ['#divAvisoCreditoAlumno', '.row', 'Aviso créditos'],
          ['mt:nadores Encuesta Plan Maestro', '.row', 'Ganadores de encuesta']
        ]
        function delItem(item, sfind, sname) {
          if (item) {
            let wasVisible = false
            if (typeof item.checkVisibility == 'function') {
              wasVisible = item.checkVisibility()
            } else {
              wasVisible = isElementVisible(item)
            }
            let e2d = item.closest(sfind)
            let nCont = $n('div')
            if (1 == 1) {
              e2d.parentNode.insertBefore(nCont, e2d)
              nCont.style.display = 'none'
              nCont.appendChild(e2d)
            } else {
              e2d.remove()
            }
            if (wasVisible) {
              logRemoveAsking(!!1, sname, nCont)
            }
          }
        }
        function query2del(arrItem) {
          let period = 5e2
          let tries = 0
          let v2d = setInterval(function() {
            tries++
            let ifinded = false
            if (arrItem[0].startsWith('mt:')) {
              let ltm = $$('.modal-title')
              let ltz = ltm.length, i = 0
              while (i < ltz) {
                let supi = ltm[i]
                let title = supi.innerText.trim().toLowerCase()
                if (title.includes(arrItem[0].slice(3).toLowerCase())) {
                  ifinded = supi
                  break
                }
                i++
              }
            } else {
              ifinded = $(arrItem[0])
            }
            if (ifinded) {
              delItem(ifinded, arrItem[1], arrItem[2])
              clearInterval(v2d)
            }
            if (tries > (15 / (1 / period))) {
              if (tml(6)) {
                logRemoveAsking(!1, arrItem[2])
                clearInterval(v2d)
              }
            }
          }, period)
        }
        items2Del.forEach(function(itemStr) {
          query2del(itemStr)
        })
        mmodal(false)
        setTimeout(function() {
          $$('div>.modal-title:first-child,div>button+.modal-title').forEach(function(a) {
            let p = a.parentNode
            if (!p.qsf('button.close')) {
              let pr = p.closest('.row')
              if (pr) {
                let brH = '<span aria-hidden="true" class="ti-close" style="color:white"></span>'
                let b = $n('button', 'class::close,,type::button', 'html:' + brH)
                b.addEventListener('click', function() {
                  pr.remove()
                })
                b.classList.add('btn-close-modal-b')
                p.insertBefore(b, p.firstChild)
              }
            } else {
              p.qsf('button.close').classList.add('btn-close-modal-b')
            }
          })
        }, 2e3)
      })
      // ---- ---- REMOVE ADS, CUSTOM BUTTONS, MOODLE FRAME, FIX BUTTON MENU
      atDomReady('ls_campusMain', function() {
        // ---- ---- ---- REMOVE IFRAME ADS
        setTimeout(function() {
          let adIfr = $('#anuncio')
          if (adIfr) {
            adIfr.data = ''
            adIfr.style.display = 'none'
          }
        }, 50)
        // ---- ---- ---- EVENT ACTION HOME BTN
        setTimeout(function() {
          let btnHome = $('#lnkHome')
          let btnHP = btnHome.parentNode
          let nLi = $n('li', 'class::' + btnHP.className, 'html:' + btnHP.innerHTML)
          btnHP.parentNode.insertBefore(nLi, btnHP.nextElementSibling)
          btnHP.qsf('a').innerHTML = /*html*/`<i class="ion-refresh"></i>`
          let a = nLi.qsf('a')
          a.setAttribute('id', 'homeReset')
        }, 50)
        // ---- ---- ---- CUSTOM LINKS PANEL AND SCHEDULE
        if (1 == 1) {
          let boardHomeNative = $('.main-content #divContent > .col-md-12')
          let pp = boardHomeNative.qsf('.col-md-8')
          let custom_panel = $n('div', 'class::panel panel-piluku custom-panel')
          let cssCustomLinks = /*css*/ `.panel.panel-piluku.custom-panel{margin-bottom:10px}
.panel.panel-piluku.custom-panel+.panel-piluku{display:none}#divContent .row.col-md-12{transform:none !important;
margin:6px 0 -6px 6px}#divContent .row.grid.col-md-12 .col-md-8{padding:0 !important}
.custom-panel .panel-body{padding-inline:10px}.custom-panel .panel-body > .row{margin-inline:0}
.custom-panel .panel-body .col-md-12{padding-inline:2px}.links-cont{display:grid;grid-template-columns:
repeat(auto-fit, minmax(190px, 2fr));grid-gap:8px;margin-bottom:32px}.links-cont a{cursor:pointer;border-style:solid;
text-decoration:none;border-width:1px;border-color:#0988d712;transition:all 0.2s;padding:6px 12px;background-color:#f9f9f9;
position:relative;color:#6281ac}.links-cont a *{text-decoration:none;user-select:none}.links-cont a:hover{border-color:
#0988d7c5;text-decoration:none;box-shadow:0 2px 2px -2px #284e6555;color:#0793fe}.links-cont a i{width:36px;text-align:
center;font-size:28px}.links-cont a .a-in-text{display:flex;align-items:center;gap:6px;position:relative}.links-cont a
::before{content:'';z-index:0;background-color:#d8e8ef;transition-duration:0.1s;position:absolute;top:0;left:0;width:0;
height:100%}.links-cont a[href*=\\/\\/]::after{content:"";height:20px;width:20px;position:absolute;right:4px;top:4px;
border-style:solid;border-color:transparent;border-right-color:#15436547;border-width:10px;transform:translateX
(50%) translateY(-50%) rotate(135deg);transition:all 0.2s}.links-cont a[href*=\\/\\/]:hover::after{border-right-color:
#0793fe}.links-cont a:hover::before{transition-duration:0.4s;width:100%}.info-cup b{font-weight:bold}.foo-cvp{display:
flex;margin-bottom:-2px;font-size:12px;flex-direction:column;align-items:flex-end}.info-cup{margin-right:0;margin-left:
auto;display:flex;flex-direction:column;align-items:flex-end}.info-cup a{margin-top:8px;cursor:pointer}.info-cup div,
.info-cup span{color:#a6a6a6}.info-cup a{color:#0063c8}.foo-cvp .btn-exp{cursor:pointer;border:1px solid #e9e9e9;color:
#cbcbcb;display:flex;align-items:center;gap:6px;padding:2px 12px;height:24px;background-color:#fdfdfd;transition:
all 0.2s;border-radius:4px}.foo-cvp .btn-exp:hover{border-color:#b5b5b5;background-color:#eeeeee;color:#a2a2a2}
.foo-cvp.min>.info-cup,.foo-cvp.min>div:nth-child(2){display:none}.foo-cvp:not(.min)>div:nth-child(1){display:none}
.btn-exp.btn-min{margin-bottom:14px}`
          custom_panel.innerHTML = /*html*/ `<div class="panel-heading" style="background:#E33439;">
<h3 class="panel-title">Accesos principales</h3></div>
<div class="panel-body">
</div>`
          custom_panel.appendChild(setStyle(cssCustomLinks, 'css-custom-links', true))
          let custom_panel_body = custom_panel.qsf('.panel-body')
          let ctm_panel_links = $n('div', 'class::links-cont')
          let ctm_panel_version = $n('div', 'class::foo-cvp min')

          let custom_panel_bgosec = $n('div', 'class::shortcuts-sections,,style::display:none')
          if (typeof (boardHomeNative.scrollIntoView) == 'function') {
            let btnGoSections = [
              ['1', 'Eventos', '.b-sc > .cont-e'],
              ['2', 'Horario', '.b-sc > .cont-s-space'],
              ['3', 'Cursos', '.b-sc > .cont-c']
            ]
            custom_panel_body.appendChild(
              setStyle(/*css*/`.shortcuts-sections{display:flex;flex-wrap:wrap;gap:6px;
margin-block-end:36px;justify-content:flex-end}.shrct-button{border-radius:4px;padding:
4px 12px;font-size:13px;background-color:#f9f9f9;color:#939393;border-style:solid;
border-width:1px;border-color:#dfdfdf;cursor:pointer;transition:all 0.3s}.shrct-button:hover{
background-color:#dcdcdc;color:#656565;border-color:#c7c7c7}`, 'css-cup-shorcuts', true)
            )
            btnGoSections.forEach(function(btnShrct) {
              let ibtnShrct = $n(
                'div', 'class::shrct-button,,data-sbtn::' + btnShrct[0], btnShrct[1], custom_panel_bgosec
              )
              ibtnShrct.on('click', function() {
                let divSection = $(btnShrct[2])
                if (divSection) {
                  divSection.scrollIntoView({ block: 'start',  behavior: 'smooth' })
                }
              })
            })
            custom_panel_body.appendChild(custom_panel_bgosec)
          }
          let listLinks = [
            ['Ficha de matrícula', 'icon ion-clipboard', 'cursosmatriculados.aspx'],
            ['Historial académico', 'icon ion-ios-list', 'historialacademico.aspx'],
            ['Aula virtual', 'ion-university', 'aulavirtual.aspx'],
            ['Mis cursos', 'ion-ios-book', function() {
              let btnFrame = $('button.toggle-cf')
              btnFrame && btnFrame.click()
            }],
            ['Calificaciones', 'ion-stats-bars', 'calificadorestudiante.aspx'],
            ['Plan de estudio', 'ion-calendar', 'planesestudio.aspx'],
            ['Pagos en línea', 'ion-card', 'MediosPago/frmMedioPago.aspx'],
            ['Movimientos', 'ion-ios-cart', 'SDEestadocuenta.aspx'],
            ['Anuncios', 'ion-ios-paper', cSite.c('www','anuncios/index.php?pagina=usat&e=2&c=3','p')],
            ['Usat informa', 'ion-social-tumblr', '//usatininforma.usat.pe/'],
            ['Usatin', 'ion-chatboxes', '//t.me/USATIN_bot'],
            ['Mostrar carnet', 'ion-image', function() {
              if (typeof f_Menu == 'function') {
                f_Menu('cursosmatriculados.aspx')
                let i = setInterval(function() {
                  let s = $('#divCarnet a')
                  if (s) {
                    s.click()
                    clearInterval(i)
                  }
                }, 5e2)
              }
            }]
          ]
          listLinks.forEach(function(link) {
            let arHL = /*html*/ `<span class="a-in-text"><i class="${link[1]}"></i><span>${link[0]}</span></span>`
            let a = $n('a', '', 'html:' + arHL)
            if (typeof link[2] == 'function') {
              a.addEventListener('click', function() { setTimeout(function() {link[2]()}, 5e2)})
            } else {
              if (link[2].startsWith('//') || link[2].startsWith('http')) {
                a.href = link[2]
                a.target = '_blank'
              } else {
                a.addEventListener('click', function() {
                  if (typeof f_Menu == 'function') {
                    f_Menu(link[2])
                  }
                })
              }
            }
            ctm_panel_links.appendChild(a)
          })
          // ---- ---- ---- ---- CONTROL VALIDATION
          if (!0) {
            let lastComprbTm = '', lastComprbTx
            if (scm('dv')) {
              lastComprbTx = 'Última comprobación'
              lastComprbTm = localStorage['cup-tcv'] || '-'
            } else {
              lastComprbTx = 'Versión ejecutada'
              lastComprbTm = window.__CUPiT || '-'
            }
            if (scm('ce')) {
              lastComprbTm = window.__CUPiT || '-'
              // mV3: window.__CUPceTV
            }
            if (!isNaN(lastComprbTm)) {
              let tmVrsD = new Date(Number(lastComprbTm))
              let tmVrsF = [tmVrsD.getDate(), tmVrsD.getMonth() + 1, tmVrsD.getFullYear()]
              lastComprbTm = tmVrsF.join('/')
              lastComprbTm += ' ' + fDTgHM(tmVrsD)
            }
            ctm_panel_version.innerHTML = /*html*/ `
  <div><div class="btn-exp btn-max"><i class="icon ion-plus"></i><span>Más</span></div></div>
  <div><div class="btn-exp btn-min"><i class="icon ion-minus"></i><span>Menos</span></div></div>
  <div class="info-cup">
    <div><a class="lkm">Campus USAT PRO</a> versión <b>${CUPvS}</b></div>
    <span>${lastComprbTx}: <b>${lastComprbTm}</b></span>
  <a class="lku" href="#">Verificar ahora</a></div>`
            ctm_panel_version.qsf('.btn-max').addEventListener('click', function() {
              ctm_panel_version.classList.remove('min')
            })
            ctm_panel_version.qsf('.btn-min').addEventListener('click', function() {
              ctm_panel_version.classList.add('min')
            })
            let bupdt =  ctm_panel_version.qsf('.lku')
            if (scm('bk')) {
              bupdt.remove()
            }
            if (scm('ce') && 1 == 0) {
              bupdt.target = '_blank'
              bupdt.href = extHost + 'ce/v'
            }
            if (scm('aa,dv,ce')) {
              bupdt.on('click', function() {
                window.__CUPupdate()
              })
            }
            ctm_panel_version.qsf('.lkm').on('click', function() {
              let bsm = $('#aboutpro')
              bsm && bsm.click()
            })
          }
          custom_panel_body.appendChild(ctm_panel_links)
          custom_panel_body.appendChild(ctm_panel_version)
          pp.insertBefore(custom_panel, pp.children[0])
          let updateEvents = function() {}
          function goBoardM() {
            let dC = $('#divContent')
            dC.innerHTML = ''
            dC.appendChild(custom_panel)
            updateEvents()
          }
          setTimeout(function() {
            let nBtnHome = $('#homeReset')
            if (nBtnHome) {
              nBtnHome.on('click', goBoardM)
            }
          }, 5e2)
          window.addEventListener('hashchange', function() {
            let h = location.hash.replace('#', '')
            h == '' && window.__baBP()
          })
          // ---- ---- ---- ---- DISABLE BTN NOT AVAILABLE
          if (scm('aa')) {
            let propDis = 'data-btnua'
            function obsButtons() {
              function disMsgBtn(btn) {
                btn.onclick = function() {
                  toastMSG('Esta opción solo es compatible desde el navegador', '-', 4e3)
                }
              }
              function disBtn(qs, fn, msgIncomp = false) {
                let binh = cont.qsf(qs)
                if (binh && binh.getAttribute(propDis) != '1') {
                  binh.setAttribute(propDis, '1')
                  fn(binh)
                  if (msgIncomp) {
                    disMsgBtn(binh)
                  }
                }
              }
              disBtn('#btnSubmit', function(ib) {
                let pf = ib.closest('form')
                pf.setAttribute('target', '_top')
              })
              disBtn('a[onclick*="EstadoCuentaResumen"]', function(ib) {
                ib.removeAttribute('onclick')
                ib.removeAttribute('href')
              }, true)
              disBtn('#crearimagen', function(ib) {
                let copyB = $n('a', 'class::btn btn-primary,,style::width:40%', /*html*/`html:
                  <i class="icon ion-ios-paper"></i>      Descargar Carnet Digital</a>`, ib.parentNode)
                disMsgBtn(copyB)
                ib.remove()
              }, true)
            }
            let cont = $('#divContent')
            if (cont && window.MutationObserver) {
              let obsContet = new MutationObserver(function(mutationsList, observer) {
                for (let mutation of mutationsList) {
                  if (mutation.type === 'childList') {
                    obsButtons()
                  }
                }
              })
              obsContet.observe(cont, { childList: true, subtree: true })
            }
          }
          // ---- ---- ---- ---- SCHEDULE
          let codUni = $('#lblCodigoUniversitario')?.innerText || ''
          let timesOut = ['240707-240816','241207-250317']
          timesOut = timesOut
            .map(function(i) {return i.split('-')})
            .map(function(a) {
              return a.map(function(d) {
                return new Date(2e3 + 1 * d.slice(0,2), d.slice(2,4) - 1, d.slice(4,6)) * 1
              })
            })
          let nD = new Date() * 1
          let isTOut = timesOut.some(function([fa, fb]) { return nD > fa && nD < fb})
          function showBannersTOut() {
            let bOut = $n('div', 'class::b-tout', /*html*/`html:
              <div class="bnn-fimg" img-view-q="4"><img src="//i.ibb.co/fnhjbRR/programacion-usat-25-0.jpg"></div>
              <div class="bnn-fimg" img-view-q="4"><img src="//i.ibb.co/YdvtrsW/programacion-usat-25-1.jpg"></div>`,
              custom_panel_body
            )
            bOut.appendChild(setStyle(/*css*/`
              .b-tout{margin-top:28px}
              .bnn-fimg{margin-top:12px;display:flex}
              .b-tout .bnn-fimg img{margin:0 auto;max-width:760px;width:100%;height:auto}
              `, 'css-cup-plann', true)
            )
            validCIZ()
          }
          // GET COURSES DATA AND PRINT
          if (top == self && !(/^\d{3}pg/i).test(codUni) && !isTOut) {
            $n('div', 'class::b-sc', /*html*/`html:
              <style>.b-sc .msg-pl{text-align:center;color:gray;font-size:13px;margin-top:26px}}</style>
              <div class="msg-pl">Cargando horario...</div>`,
              custom_panel_body
            )
            setTimeout(function() {
              let msgFailE = $('.b-sc .msg-pl')
              function showFail(msg) {
                setTimeout(function() {
                  msgFailE.innerText = msg
                  setTimeout(function() {
                    msgFailE.remove()
                  }, 3e3)
                }, 2e3)
              }
              function showGrades(name, dataArrUnits) {
                let printGrades = {}
                printGrades.clearDiv = function(strHtx) {
                  return $n('div', '', 'html:' + strHtx).textContent.trim()
                }
                printGrades.nodes = function(arrNodes, where, ite = 0) {
                  arrNodes.forEach(function(node) {
                    let textNode = printGrades.clearDiv(node.text)
                    textNode = textNode.replace(/\[ */, '').replace(/ *\]/, '').replace(/ +/g, ' ')
                    let spaces = '<div class="padleft"></div>'
                    spaces = spaces.repeat(ite < 0 ? 0 : ite)
                    let row = $n('ul', '', '', where)
                    let row_li = $n('li', '', 'html:' + spaces, row)
                    if (where.tagName.toLowerCase() != 'ul') {
                      row_li.classList.add('tab-unit')
                    }
                    let row_li_p = $n('p', '', textNode, row_li)
                    if (textNode.toLowerCase().includes('promedio final')) {
                      row_li.classList.add('end-score')
                      row_li.parentNode.classList.add('end-score')
                    }
                    if (node.tags && node.tags.length > 0) {
                      let endTags = []
                      node.tags.forEach(function(rt) {
                        rt.split('|').forEach(function(t) {
                          endTags.push(t.replace('.00%', '%'))
                        })
                      })
                      endTags.forEach(function(tag) {
                        let tValScore = printGrades.clearDiv(tag)
                        let cssType = !isNaN(tValScore.charAt(0))
                          ? Number(tValScore) > 13.49
                            ? 'b' : 'r'
                          : tValScore.toLowerCase().startsWith('peso')
                            ? 'y' : 'g'
                        if (cssType == 'y') {
                          row_li_p.parentNode.classList.add('unit-desc')
                        }
                        $n('span', 'class::score ' + cssType, tValScore, row_li)
                      })
                    } else {
                      if (ite > 0) {
                        row_li_p.classList.add('subunit-name')
                      }
                    }
                    if (node.nodes) {
                      let arrow_li = $n('div', 'class::arrow-collps', 'html:<span></span>')
                      row_li.insertBefore(arrow_li, row_li_p)
                      row_li.addEventListener('click', function() {
                        row.classList.toggle('unfld')
                      })
                      printGrades.nodes(node.nodes, row, ite + 1)
                    }
                  })
                }
                let ff_grades = $n('div', 'class::float-grades', /*html*/`html:
                  <div class="h">
                    <div class="tit">Notas de: <b>${name}</b></div>
                    <button><i class="ion-close-round"></i></button>
                    </div>
                    <div class="cont-grades">
                      <div class="ctgrades"></div>
                    </div>
                `, 'ddbb')
                ff_grades.appendChild(setStyle(/*css*/`
.float-grades{position:fixed;top:0;left:0;right:0;bottom:0;padding:10px 8px 0;background-color:#000000d1;z-index:
10000;display:flex;flex-direction:column;gap:12px}.float-grades .h{display:flex;align-items:center;justify-content:
space-between}.float-grades .h button{width:24px;height:26px;display:flex;background-color:transparent;border:none;
color:white;font-size:18px;opacity:0.4;transition:all 0.3s;cursor:pointer}.float-grades .h button:hover{opacity:1}
.float-grades .h button i{margin:auto}.float-grades .h .tit{color:white;font-size:16px;flex:1;text-align:center}
.cont-grades{flex:1;overflow:auto;padding-block-end:50vh;}.ctgrades{max-width:1000px;margin:0 auto}.ctgrades ul{
padding-inline-start:0}.ctgrades > *{font-size:13px}.ctgrades > ul{border-style:solid;border-width:1px;border-color:
#23699a;border-radius:8px;margin-block-start:0;margin-block-end:12px;overflow:hidden;background-color:white}
.ctgrades ul li{border-block-start-style:solid;border-block-start-width:1px;border-block-start-color:#9fbed3}
.ctgrades li{padding:6px 8px;list-style:none}.ctgrades li{display:flex;align-items:center;flex-wrap:nowrap;
transition:all 0.3s}.ctgrades li:not(.unit-desc):not(.tab-unit):hover{background-color:#f1f1f1}.ctgrades li p{
margin:0;flex:1}.ctgrades li .padleft{width:20px;height:10px}.ctgrades .arrow-collps{height:14px;width:14px;
position:relative;margin-inline-end:6px;display:flex}.ctgrades .arrow-collps span{height:8px;width:8px;
border-color:#0000002d;border-style:solid;border-width:2px 2px 0 0;transition:all 0.2s;transform:
translate(0px, -2px) rotate(135deg);display:inline-block;margin:auto}.ctgrades li:hover > .arrow-collps span{
border-color:#000000a6}.ctgrades li > .arrow-collps:hover span{border-color:#000000e3}
.ctgrades ul.unfld > li .arrow-collps span{transform:translate(-2px) rotate(45deg)}.ctgrades ul.unfld > ul{
display:none}.ctgrades li span.score{font-size:13px;border-radius:6px;padding:3px 6px;margin-inline-start:6px}
.ctgrades > ul.end-score{border-color:#a97808}.ctgrades ul li.end-score{background-color:#fdfd94 !important}
.ctgrades .unit-desc{background-color:#daebf5}.ctgrades .subunit-name{color:#7f7f7f}.ctgrades li span.score.b{
background-color:#316fff;color:white}.ctgrades li span.score.r{background-color:#941a1a;color:white}
.ctgrades li span.score.y{border:1px solid #c1c1c1;background-color:white}.ctgrades li span.score.g{
color:#979797;background-color:#e4e4e4}.ctgrades > ul > li:first-child{
border-block-start:0;font-weight:bold;background-color:#a3d5ff}
                `, 'css-cup-floatgrades', true))
                printGrades.display = function(arrData) {
                  printGrades.nodes(arrData, ff_grades.qsf('.ctgrades'), -1)
                }
                printGrades.display(dataArrUnits)
                mmodal(true)
                baSH('grades')
                ff_grades.qsf('button').on('click', function() {
                  ff_grades.remove()
                  mmodal(false)
                  baSH()
                })
              }
              function loadGradesByCrs(refName, idCrs) {
                function closeLoader() {
                  $('.piluku-preloader').classList.add('hidden')
                }
                function objToFD(objAny) {
                  const formData = new FormData()
                  for (const clave in objAny) {
                    if (objAny.hasOwnProperty(clave)) {
                      formData.append(clave, objAny[clave])
                    }
                  }
                  return formData
                }
                fetch('FrmCalificadorEstudiante.aspx', {
                  method: 'get',
                }).then(function(r) {
                  r.text().then(function(t) {
                    let tempForCalf = document.createElement('div')
                    tempForCalf.style.display = 'none'
                    document.body.appendChild(tempForCalf)
                    tempForCalf.innerHTML = t.slice(t.indexOf('<body>') + 6, t.indexOf('</body>'))
                    function valByNameIptForm(n, f = tempForCalf) {
                      return f.querySelector('[name="' + n + '"]').value
                    }
                    fetch('FrmCalificadorEstudiante.aspx', {
                      method: 'POST',
                      body: objToFD({
                        '__EVENTTARGET': 'ddlCurso',
                        '__LASTFOCUS': '',
                        '__VIEWSTATE': valByNameIptForm('__VIEWSTATE'),
                        '__VIEWSTATEGENERATOR': valByNameIptForm('__VIEWSTATEGENERATOR'),
                        '__VIEWSTATEENCRYPTED': '',
                        '__EVENTVALIDATION': valByNameIptForm('__EVENTVALIDATION'),
                        'ddlSemestre': valByNameIptForm('ddlSemestre'),
                        'ddlCurso': idCrs
                      })
                    }).then(function(r) {
                      r.text().then(function(t) {
                        if (t.toLowerCase().includes('loadtree([')) {
                          let strFormRaw = t.slice(t.indexOf('<form'), t.indexOf('</form'))
                          let strData = strFormRaw.slice(strFormRaw.indexOf('script>LoadTree'), strFormRaw.length)
                          strData = strData.substring(16, strData.lastIndexOf('</script'))
                          strData = strData.replace(/\}\]\);*/, '}]')
                          strData = strData.replace(/\t/g, '')
                          try {
                            let dataGrades = JSON.parse(strData)
                            closeLoader()
                            showGrades(refName, dataGrades)
                          } catch {
                            closeLoader()
                            runOrwait(msgUI_show, 'No se pudo interpretar la información', 'red', false, 3)
                          }
                        } else {
                          closeLoader()
                          runOrwait(msgUI_show, 'La sesión caducó. Vuelva a ingresar', 'red', false, 3) //dev: fv
                        }
                      })
                    }).catch(function() {
                      closeLoader()
                      runOrwait(msgUI_show, 'No se pudo cargar la información', 'red', false, 3)
                    })
                    tempForCalf.remove()
                  })
                }).catch(function() {
                  closeLoader()
                  runOrwait(msgUI_show, 'No se pudo cargar la información', 'red', false, 3)
                })
              }
              function setSchedule(schData) {
                function HH2hh(hh) {
                  return hh.split('-').map(function(h) {
                    return h < 12 ? Number(h) + 'am' : h < 13 ? h + 'pm' : (h - 12) + 'pm'
                  }).join(' - ')
                }
                function tH2h(e) {
                  let lv = e.innerText
                  let rv = e.getAttribute('data-sht-range')
                  e.innerText = lv.includes('m') ? rv : HH2hh(rv)
                }
                function neHh(h) {
                  h = h.split('-').map(function(n) {return n.padStart(2, '0')}).join('-')
                  return `<span data-sht-range="${h}">${HH2hh(h)}</span>`
                }
                let mb = {m: $('.custom-panel .b-sc')}
                mb.m.innerHTML = /*html*/ `
                  <div class="cont-e">
                    <div class="cc-e cc-e-c">
                      <div class="cc-e-t">Curso actual</div>
                      <div class="cc-e-l"></div>
                    </div>
                    <div class="cc-e cc-e-n">
                      <div class="cc-e-t">Siguiente curso</div>
                      <div class="cc-e-l"></div>
                    </div>
                    <div class="cc-e cc-e-p">
                      <div class="cc-e-t">Próximos cursos hoy</div>
                      <div class="cc-e-l"></div>
                    </div>
                  </div>
                  <div class="cont-s-space"></div>
                  <div class="cont-s">
                    <p class="simpletip">
                    <marquee>Novedad: Menú de acciones por curso, \
pruébalo pulsando sobre cualquiera de los cursos en el horario</marquee>
                    </p>
                    <div class="cont-s-c">
                      <div class="cont-s-t sad">
                        <div class="cont-s-t-h">
                          <div class="cont-s-t-h-c"></div>
                        </div>
                        <div class="cont-s-t-b"></div>
                        <div class="cont-s-t-i">
                          <div class="cont-s-t-i-c"></div>
                        </div>
                        <div class="cont-s-t-s"></div>
                      </div>
                    </div>
                    <div class="cont-s-ctrl-c">
                      <div class="cont-s-ctrls-h">
                        <span>Personalizar</span>
                        <i class="ion-chevron-down"></i>
                        </div>
                        <div class="cont-s-ctrls-b">
                        <p>Puedes editar los colores de un curso en el horario haciendo doble clic sobre ese</p>
                        <div class="cont-s-ctrls"></div>
                        <div class="cont-s-ctrls-btns">
                          <div id="p-sch-f" class="bprsch">
                            <i class="ion-arrow-expand"></i><span>Ampliar</span>
                          </div>
                          <div id="p-sch-d" class="bprsch">
                            <i class="ion-android-download"></i><span>Descargar</span>
                          </div>
                          <div id="p-sch-t" class="bprsch">
                            <i class="ion-android-open"></i><span>Abrir</span>
                          </div>
                          <div id="p-sch-i" class="bprsch">
                            <i class="ion-ios-printer"></i><span>Imprimir</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="cont-s-n">
                      <p class="sh">Ten en cuenta</p>
                      <p>- El horario proporcionado toma los datos a partir de la ficha de matrícula.</p>
                      <p>- El horario no considera feriados, cambios de \
  horarios no actualizados en la ficha de matrícula o fechas fuera del ciclo académico.</p>
                      <p>- La lista de eventos se basa en la fecha y hora de tu dispositivo.  \
Asegúrate de que estén configuradas correctamente.</p>
                    </div>
                  </div>
                  <div class="cont-c"></div>
                  <div id="btn-e-pr" class="bprsch"><span>Imprimir</span></div>
                  <style css-cup="css-cup-vars"></style>
                  <style css-cup="css-cup-vars-aplied"></style>
                  <style css-cup="css-cup-schedule"></style>
                `
                mb.e = mb.m.qsf('.cont-e')
                mb.h = mb.m.qsf('.cont-s')
                mb.c = mb.m.qsf('.cont-c')
                mb.s = mb.m.qsf('[css-cup="css-cup-vars"]')
                mb.ss = mb.m.qsf('[css-cup="css-cup-vars-aplied"]')
                mb.sb = mb.m.qsf('[css-cup="css-cup-schedule"]')
                let cssSchedule = /*css*/`
.b-sc,.c-inf-t,.cont-c{display:flex;flex-direction:column}.b-sc{margin-block-start:60px;gap:8px}
.cont-e{margin-block-end:20px;padding-block-start:12px}.cont-e .cc-e{border-style:solid;
border-width:0;border-color:#a4a4a4;border-inline-start-width:6px;border-radius:4px;
padding-inline-start:8px;padding-block:6px;background-color:#f8f8f8;margin-block-end:12px}
.cc-e-t{color:#b1b1b1;font-weight:bold;
margin-block-end:12px;font-size:13px}.msg-empty{color:#9a9a9a}.ccc-e-c{margin-block-end:14px}
.cc-e-ci-n{display:flex;align-items:center;margin-block-end:2px}.ci-b-oc{margin-inline:8px;
font-size:13px;border-color:#0000001c;transition:all 0.2s;cursor:pointer;color:#0000007a;border-style:
solid;border-width:1px;padding:1px 6px;border-radius:3px}.ci-b-oc:hover{border-color:#34808159;color:
#000000d6;background-color:#92ddff70}.cc-e-ci-n .ci-n-t{font-weight:bold}.cc-e-ci-d{font-size:15px}
.cc-e-ci-t{margin-inline-end:12px}.cc-e.cc-e-c.act{border-color:#1caba6;background-color:#d5fbfa}
.cc-e.cc-e-c.act .cc-e-t{color:#2b858e}.cc-e.cc-e-n.act{border-color:#ebbf33;background-color:#fff7e6}
.cc-e.cc-e-n.act .cc-e-t{color:#c7aa1a}.cc-e.cc-e-p.act{border-color:#7b8aff;background-color:#f5f5ff}
.cc-e.cc-e-p.act .cc-e-t{color:#404dcf}.cont-e .cc-e{border-width:1px 1px 1px 6px}
.cont-e.dayemp .cc-e.cc-e-n,.cont-e.dayemp .cc-e.cc-e-p {display:none}.cont-c{gap:8px;overflow:hidden;
margin-block-start:12px;padding-block-start:12px}.itm-course{display:flex;width:100%;
background-color:#f9f9f9;position:relative}.c-color{position:relative;width:30px;flex:none;
display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:6px 0 0 6px}
.iptcolor{position:absolute;left:0;top:0;border:none;height:100%;width:100%;z-index:-1}.c-color i{
color:white;font-size:15px;opacity:0.4;transition:all 0.3s}.c-color:hover i{opacity:1}.bt-e-i{
position:absolute;top:12px;right:12px;font-size:16px;color:#bcbcbc;padding:4px;border-radius:6px;
background-color:#0000000d;cursor:pointer;transition:all 0.2s;width:26px;height:26px;display:flex;
align-items:center;justify-content:center}.bt-e-i i{transition:all 0.2s}.show .bt-e-i i{transform:
rotate(180deg) translateY(1px)}.bt-e-i:hover{background-color:#0000002d;color:#696969}.c-inf-t{flex:1;
padding-inline-end:40px}.c-inf-b{height:100%;width:6px;border-radius:0 6px 6px 0;flex:none}.c-inf
::-webkit-scrollbar{height:4px;background-color:#00000025}.c-inf{display:flex;padding-inline-start:2px;
width:100%;overflow:auto}.c-name input{width:4px;font-weight:bold;border-style:solid;border-width:1px;
border-color:transparent;padding:4px 8px;transition:all 0.3s;background-color:transparent}.c-det{
display:flex;gap:6px;align-items:center;padding-inline-start:6px}.c-inf-t:not(.show) .c-det{
margin-block-end:8px}.c-inf-t.show .c-det{margin-block-end:4px}.c-det .i-grp{padding:1px 6px;
font-family:monospace;font-size:13px;border-radius:2px;background-color:#e3e3e3;color:#858585}
.c-name input:focus{outline:none;border-color:black;background-color:#ffffffc5}.c-name{width:100%}
.i-doc{font-size:14px}.show .c-hrs{display:block}.c-hrs{display:none;padding-inline-start:24px;
margin-block-start:2px;margin-block-end:6px;color:#8e8e8e}.c-i-h::before{content:'';position:absolute;
left:-12px;top:50%;height:4px;width:4px;transform:translateY(-2px);background-color:gray}.c-i-h{
position:relative;display:flex;align-items:center;flex-wrap:nowrap}.c-i-h .c-i-h-d{width:3.2em}
.c-i-h .c-i-h-t{width:6em}.c-i-h span,.i-doc,.i-grp{white-space:nowrap}.cont-s-ctrls,.cont-s-n{
padding-inline:10px}.cont-s-ctrls label{font-weight:normal;display:flex;align-items:center;
flex-wrap:wrap;row-gap:4px}.cont-s-n{font-size:14px;color:#989898;font-style:italic;
margin-block-end:12px}.cont-s-n p{margin:0;max-width:700px}.cont-s-n p.sh{font-style:normal;
font-weight:bold}.cont-s-ctrl-c{margin:10px;border-style:solid;border-width:1px;border-color:
#dfdfdf}.cont-s-ctrl-c.fold{border-color:#8d8d8d}.cont-s-ctrl-c:not(.fold) .cont-s-ctrls-b,
.cont-s-ctrls-b{display:none}.fold .cont-s-ctrls-h>*{color:#000000}.cont-s-ctrls-h>*{color:
#afafaf}.cont-s-ctrl-c.fold .cont-s-ctrls-b{display:block}.cont-s-ctrl-c.fold .cont-s-ctrls-h i{
transform:rotate(180deg)}.cont-s-ctrls-h{cursor:pointer;display:flex;align-items:center;
border-style:solid;border-width:0;border-color:#a5a5a5;padding:8px 14px}
.cont-s-ctrl-c.fold .cont-s-ctrls-h{border-width:0 0 1px 0}.cont-s-ctrls-h span{flex:1}
.cont-s-ctrls-b{padding-block-start:8px}.cont-s-ctrls-b > p{padding-inline-start:10px;
font-size:15px;color:#a5a5a5;margin-block:0 16px}.cont-s-ctrls{display:flex;flex-direction:column;
align-items:stretch;user-select:none;gap:6px;margin-block-end:28px}.cont-s-ctrls span{color:#616161;
font-size:15px}.cont-s-ctrls span:first-child{width:12em;display:inline-block}
.cont-s-t:not(.sad) .col-d.emp,.cont-s-t:not(.sad) .d-i-n.emp{display:none}
.cont-s-ctrls input[type=checkbox]{transform:translateY(-2px);margin:0 8px 0 0;display:inline-block;
overflow:hidden;height:18px;width:18px}.cont-s-ctrls input[type=checkbox]{position:relative;
cursor:pointer}.cont-s-ctrls input[type=checkbox]:before{content:"";display:block;position:absolute;
width:18px;height:18px;top:0;left:0;background-color:#e9e9e9}
.cont-s-ctrls input[type=checkbox]:checked:before{content:"";display:block;position:absolute;
width:18px;height:18px;top:0;left:0;background-color:#154fa5}.cont-s-ctrls input[type=checkbox]
:checked:after{content:"";display:block;width:6px;height:11px;border:solid white;
border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);
transform:rotate(45deg);position:absolute;top:2px;left:6px}.cont-s-ctrls input[type="range"]
{width:100%;max-width:250px}.cont-s-ctrls input[type="range"]
{-webkit-appearance:none;appearance:none;width:100%;cursor:pointer;outline:none;overflow:hidden;
border-radius:16px}.cont-s-ctrls input[type="range"]::-webkit-slider-runnable-track{height:15px;
background:#cccccc;border-radius:16px}.cont-s-ctrls input[type="range"]::-moz-range-track{
height:15px;background:#cccccc;border-radius:16px}.cont-s-ctrls input[type="range"]
::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;height:15px;width:15px;
background-color:#ffffff;border-radius:50%;border:2px solid #154fa5;
box-shadow:-407px 0 0 400px #154fa5}.cont-s-ctrls input[type="range"]::-moz-range-thumb{
height:15px;width:15px;background-color:#ffffff;border-radius:50%;border:1px solid #154fa5;
box-shadow:-407px 0 0 400px #154fa5}.cont-s-c{margin-block-end:16px;padding:10px;display:flex;
justify-content:center}.cont-s{border-style:solid;border-width:1px;border-color:#aba5a5}.cont-s-space{
height:4px}.cont-s-t{display:flex;flex-direction:column;position:relative;overflow:hidden;
transition-property:box-shadow;transition-duration:0.5s}.cont-s-t-s{position:absolute;left:0;right:6px;
top:0;bottom:6px;z-index:3;pointer-events:none}.cont-s-t-h{position:absolute;left:0;right:0px;
overflow:hidden;top:0;z-index:2}.cont-s-t-b{margin-block-start:30px;max-height:80vh;overflow:auto}
.cont-s-t-b::-webkit-scrollbar{height:6px;width:6px}.cont-s-t-b::-webkit-scrollbar-thumb{
background-color:#00000000}.cont-s-t-b:hover::-webkit-scrollbar-thumb{background-color:#00000014}
.cont-s-t-b::-webkit-scrollbar-thumb:hover{background-color:#00000024}
.cont-s-t-b::-webkit-scrollbar-thumb:active{background-color:#00000036}.cont-s-t.vhrsi .cont-s-t-i
{display:block}.cont-s-t:not(.vhrsi) .cont-s-t-i{display:none}.cont-s-t-i{position:absolute;
left:0;padding-inline-end:10px;top:30px;bottom:6px;overflow:hidden;background-color:#ffffffc9;
border-inline-end:1px solid #bebebe}.cont-s-t-i .sc-row-guide{
padding-block-start:4px}.cont-s-t-i span{font-size:14px;text-shadow:0 0 6px #ffffff;width:100%;
text-align:right;display:inline-block;color:#6d6d6d}.cont-s-t.vhrsi .cont-s-t-b,.cont-s-t.vhrsi .
cont-s-t-h{padding-inline-start:var(--sh-left-ih)}.cont-s-t.h-hrs .scdc-t span,.cont-s-t.h-shs .
cont-s-t-s{display:none}.cont-s-t-b,.cont-s-t-h-c{display:flex}.cont-s-t-i, .cont-s-t-b{padding-
block-start:10px}.col-d,.cont-s-t-h .d-i-n{font-size:var(--sch-th-size);width:var(--tsc-cw);
flex:none}.cont-s-t-h .d-i-n{text-align:center;font-weight:bold;background-color:skyblue;
padding-block:4px}.col-h{margin-block-start:4px;position:relative;margin-block-end:16px}
.sc-row-guide:not(.last){height:var(--tsc-rh)}.col-h .sc-row-guide:not(.last){border-style:dashed;
border-width:0;border-color:#c9c9c9;border-bottom-width:1px}.sc-row-guide.last{height:8px}
.sc-d-cc{position:absolute;left:0;right:0;width:100%;padding-inline:var(--sh-space);padding-
block-end:calc(2 * var(--sh-space))}.sc-d-cc .inspd{height:100%;width:100%;
border-radius:var(--course-event-round);overflow:hidden}.scdc-t{display:flex;justify-content:center;
margin-block-end:var(--course-time-mgnb)}.scdc-t span{color:var(--course-color-font);
background-color:var(--course-color-back);font-size:var(--course-time-size);padding:2px 12px;
border-radius:0 0 8px 8px}.sc-d-cc input[type="color"]{z-index:-1;position:absolute;bottom:0;
left:0;height:4px;width:4px;border:none;opacity:1;visibility:hidden}.scdc-n{padding-block-start:
2px;padding-inline:6px;color:var(--course-color-font);font-size:var(--course-name-size);
line-height:var(--course-name-size)}.cont-s-ctrls-btns{margin-inline-start:12px;margin-block-end:
20px;display:flex;gap:10px;flex-wrap:wrap}.bprsch{display:inline-flex;align-items:center;gap:8px;
font-size:16px;border-radius:4px;background-color:#f1f1f1;padding:4px 10px;cursor:pointer;
transition:all 0.3s;color:#585858;border-style:solid;
border-color:transparent;border-width:1px}.bprsch:hover{background-color:#dfdfdf;color:
#000000;border-color:#adadad}body.b2pr{margin:0}.b2pr .cont-e,.b2pr .cont-s-ctrl-c.fold,.b2pr .
cont-c,.b2pr .cont-s-n,.b2pr .cont-s-t-s,.b2pr .cont-s-t-i{display:none !important}.b2pr .cont-s-t
.sad.vhrsi{width:100%}.b2pr .d-i-n{flex:1}.b2pr .col-d{flex:1}.b2pr .cont-s-c,.b2pr .cont-s-t{
width:100%;padding:0}.b2pr .cont-s{border:none}.b2pr .cont-s-t-h-c,.b2pr .cont-s-t.sad{width:100%}
.b2pr .cont-s-t.vhrsi .cont-s-t-b,.b2pr .cont-s-t.vhrsi .cont-s-t-h{padding-inline-start:0px}
.b2pr .cont-s-t-h{right:0px}.b2pr .col-md-12.b-sc{margin:0px}#btn-e-pr{display:none}.b2pr #
btn-e-pr{position:fixed;right:24px;bottom:24px;display:inline-block;margin:0}@media print
{#btn-e-pr{display:none !important}}.lac{transition:all 0.3s;transform:scaleY(1%);opacity:0;
position:absolute;left:0;width:100%}.lac:not(.elac){pointer-events:none}.lac.elac{
pointer-events:all}.lac.ad{transform-origin:top center;margin-top:10px}.lac.au{
transform-origin:top center;top:-10px;transform:translateY(0) scaleY(1%)}.lac *{color:
var(--course-color-font)}.lac-c{border-style:solid;border-width:6px;position:absolute;left:50%}
.lac.ad .lac-c{transform:translate(-6px, -6px) rotate(45deg)}.lac.au .lac-c{bottom:0px;
transform:translateX(-6px) translateY(calc(100% - 6px)) rotate(45deg)}.lac-l{padding:4px 0px;
box-shadow:0px 6px 5px 1px #00000047;display:flex;flex-direction:column;gap:2px;z-index:1;
position:relative}.lac-l .lac-a{cursor:pointer;padding:2px 8px;transition:all 0.3s}
.lac-l .lac-a:hover{background-color:#00000025}.lac.elac{opacity:1}
.lac.ad.elac{transform:none}.lac.elac.au{transform: translateY(-100%) !important}
p.simpletip{padding:12px;margin:0px;font-size:15px;color:#5d5d5d;background-color:#efefef;
font-style:italic;display:none}`
                mb.sb.innerHTML = cssSchedule.replace(/\n/g, '')
                $('.cont-s-ctrls-h').addEventListener('click', function() {
                  $('.cont-s-ctrl-c').classList.toggle('fold')
                })
                let rootCss = {}
                function setRCss(prop, val) {
                  rootCss[prop] = val
                  let rawCss = ''
                  for (const p in rootCss) {
                    if (rootCss.hasOwnProperty(p)) {
                    }
                    rawCss += `--${p}: ${rootCss[p]};\n`
                  }
                  mb.s.innerHTML = ':root{\n' + rawCss + '}'
                }
                function hslToHex(h, s, l) {
                  l /= 100;
                  let a = s * Math.min(l, 1 - l) / 100
                  let f = n => {
                    let k = (n + h / 30) % 12
                    let color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
                    return Math.round(255 * color).toString(16).padStart(2, '0')
                  }
                  return `#${f(0)}${f(8)}${f(4)}`
                }
                function invertColor(hex, bw) {
                  hex = hex.replace('#', '')
                  if (hex.length === 3) {
                    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
                  }
                  if (hex.length == 6) {
                    let r = parseInt(hex.slice(0, 2), 16),
                      g = parseInt(hex.slice(2, 4), 16),
                      b = parseInt(hex.slice(4, 6), 16);
                    if (bw) {
                      return (r * 0.299 + g * 0.587 + b * 0.114) > 186
                        ? '#000000'
                        : '#ffffff'
                    }
                    r = (255 - r).toString(16)
                    g = (255 - g).toString(16)
                    b = (255 - b).toString(16)
                    function pl(v) { return String(v).padStart(2, '0')}
                    return "#" + pl(r) + pl(g) + pl(b);
                  } else {
                    return '#000000'
                  }
                }
                function updateColors(course, ncolor) {
                  setRCss('course-color-' + course, ncolor)
                  let contColor = invertColor(ncolor, true)
                  let cResp = $$(`.sc-d-cc[data-course="${course}"]`)
                  cResp.forEach(function(cr) {
                    cr.style.setProperty('--course-color-font', contColor)
                    let bgColorTime = contColor.includes('0') ? '#ffffff45' : '#00000045'
                    cr.style.setProperty('--course-color-back', bgColorTime)
                  })
                }
                let baseColor = []
                let ns = 100
                let nb = 40
                if (schData.c.length > 0) {
                  let increment = 360 / schData.c.length
                  let hueCount = 0
                  let i = 1
                  while (hueCount < 360) {
                    let hexVal = hslToHex(hueCount, ns, nb)
                    baseColor.push(hexVal)
                    setRCss('course-color-' + i, hexVal)
                    hueCount = Math.round(hueCount + increment)
                    i++
                  }
                }
                let courses = []
                let dWn = 'LUN,MAR,MIE,JUE,VIE,SAB,DOM'
                schData.c.forEach(function(c, o) {
                  courses.push(c['name'])
                  mb.c.appendChild((function() {
                    let ic = o + 1
                    let attrs = 'class::itm-course,,data-course::' + ic
                    let ds = '[data-course="' + ic + '"]'
                    let cv = 'var(--course-color-' + ic + ')'
                    mb.ss.innerHTML += ds + ' .c-color,'
                    mb.ss.innerHTML += ds + ' .c-inf-b,'
                    mb.ss.innerHTML += '.sc-d-cc' + ds + ' .inspd,'
                    mb.ss.innerHTML += '.sc-d-cc' + ds + ' .lac-l{background-color:' + cv + '}'
                    mb.ss.innerHTML += '.sc-d-cc' + ds + ' .lac-c{border-color:' + cv + '}'
                    let listHrs = ''
                    c['sch'].forEach(function(d, od) {
                      if (d) {
                        let nd = dWn.split(',')[od]
                        listHrs += /*html*/`
                        <div class="c-i-h">
                          <span class="c-i-h-d">${nd}</span>
                          <span class="c-i-h-t" data-sht-range="${d['t']}">${HH2hh(d['t'])}</span>
                          <span class="c-i-h-p">${strCapP(d['p'])}</span>
                        </div>
                        `
                      }
                    })
                    let card = $n('div', attrs, /*html*/`html:
                      <div class="c-color">
                        <input class="iptcolor" tabindex="-1" type="color">
                        <i class="ion-edit"></i>
                        <i class="ion-ios-book"></i>
                      </div>
                      <div class="c-inf">
                        <div class="c-inf-t">
                          <span class="bt-e-i"><i class="ion-chevron-down"></i></span>
                          <div class="c-name">
                            <input class="ipt-rename">
                          </div>
                          <div class="c-det">
                            <div class="i-grp">Grupo ${c.group}</div>
                            <div class="i-doc">${strCap(c.prof)}</div>
                            </div>
                          <div class="c-hrs">${listHrs}</div>
                        </div>
                        <div class="c-inf-b"></div>
                      </div>
                    `)
                    let iptRn = card.qsf('.ipt-rename')
                    iptRn.value = strCapC(c['name'])
                    setTimeout(function() {
                      iptRn.style.width = (iptRn.value.length + 3) + 'ch'
                    }, 5e2)
                    iptRn.addEventListener('input', function() {
                      iptRn.style.width = (iptRn.value.length + 3) + 'ch'
                      $$('.sc-d-cc[data-course="' + ic + '"]').forEach(function(c) {
                        c.qsf('.scdc-n').innerText = iptRn.value.trim()
                      })
                    })
                    card.qsf('.bt-e-i').addEventListener('click', function() {
                      card.qsf('.c-inf-t').classList.toggle('show')
                    })
                    let iptColor = card.qsf('.iptcolor')
                    if (1 == 0) {
                      iptColor.value = baseColor[o]
                      iptColor.addEventListener('input', function() {
                        updateColors(ic, iptColor.value)
                      })
                      card.qsf('.c-color').addEventListener('click', function() {
                        iptColor.click()
                      })
                    } else {
                      card.qsf('.ion-edit').remove()
                      iptColor.remove()
                      card.qsf('.c-color').on('click', function() {
                        openCourseByName(c['name'])
                      })
                    }
                    return card
                  })())
                })
                function view_sch(toDL = false) {
                  function modSch() {
                    let nCiclo = 'HORARIO ' + curCic
                    let c = $('.cont-s .cont-s-c .cont-s-t')
                    let bcStyle = /*css*/`.float-sch{display:flex;flex-direction:column;align-items:center;
justify-content:center;background-color:#000000d4;position:fixed;top:0;left:0;right:0;bottom:0;
height:100%;width:100%;padding:6px;z-index:99999}.cont-sch-pr{width:100%;height:100%;display:flex;
flex-direction:column}.cont-sch-pr .in{flex:1;display:flex;align-items:center;overflow:hidden;
justify-content:center}.float-sch .sch-f{background-color:#fff;border:1px solid #1f1f1f;max-width:1600px;
max-height:100%;overflow:auto}.float-sch .sch-f::-webkit-scrollbar{height:8px;width:8px}
.float-sch .cont-s-t-h-c{transform:none !important}.float-sch .cont-s-t-s{display:none}.float-sch .cont-s-t-b,
.float-sch .cont-s-t-i{overflow:initial;height:fit-content}.float-sch .cont-s-t-b{max-height:fit-content}
.float-sch .cont-s-t-h{right:0 !important;overflow:visible}.float-sch .cont-s-t-i{bottom:0 !important;
padding-inline:5px 5px !important}.float-sch .cont-s-t-i-c{transform:none !important}.float-sch p
.sch-name-file{font-size:18px;font-weight:700;width:100%;text-align:center;margin-block-start:16px;
margin-block-end:16px;color:white}.cont-sch-pr .h{display:flex;padding:4px;align-items:center}
.cont-sch-pr .h .mo{flex:1}.float-sch .mo,.float-sch .mr{display:flex;gap:6px}.float-sch .h a{width:40px;
height:40px;font-size:20px;border-style:solid;border-width:1px;border-color:#ffffff65;display:flex;
align-items:center;justify-content:center;color:#ffffffb2;transition:all 0.3s;cursor:pointer}
.float-sch .h a:hover{background-color:#ffffff25;color:#fff;border-color:#fff}@keyframes pulse{0%{
-webkit-transform:scaleX(1);transform:scaleX(1)}25%{-webkit-transform:scale3d(1.15, 1.15, 1.15);
transform:scale3d(1.15, 1.15, 1.15);background-color:#ffffff25}100%,50%{-webkit-transform:scaleX(1);
transform:scaleX(1)}}.float-sch .h a.pulse{animation-name:pulse;animation-duration:2s;
animation-iteration-count:infinite;border-color:#ffffff}.float-sch .sc-row-guide:not(.last){height:
var(--tsc-rh)}.float-sch .sub .inf-sch{color:white;text-align:center;font-size:14px}
.float-sch .lac{display:none;}`
                    bcStyle = bcStyle.replaceAll('\n', '')
                    let bc = $n('div', 'class::float-sch', /*html*/`html:
<div class="cont-sch-pr">
  <div class="h">
    <div class="mo">
      <a id="bfs-dh"><i class="ion-chevron-up"></i></a>
      <a id="bfs-ih"><i class="ion-chevron-down"></i></a>
      <a id="bfs-dw"><i class="ion-chevron-left"></i></a>
      <a id="bfs-iw"><i class="ion-chevron-right"></i></a>
    </div>
    <div class="mr">
      <a id="bfs-d"><i class="ion-android-download"></i></a>
      <a id="bfs-c"><i class="ion-close-round"></i></a>
    </div>
  </div>
  <div class="in"><div class="sch-f"></div></div>
  <div class="sub">
    <p class="sch-name-file">${nCiclo}</p>
  </div>
  <style>${bcStyle}</style>
  <style class="cs">
    .float-sch .sch-f,.float-sch .cont-s-t {width:100%}
    .float-sch .col-d,.float-sch .cont-s-t-h .d-i-n{flex:1;width:auto}
    .float-sch .sch-f .cont-s-t {width:100%}</style>
</div>`, 'ddbb')
                    bc.qsf('.sch-f').appendChild(c.cloneNode(true))
                    setTimeout(function() {
                      let cpo = bc.qsf('.cont-s-t')
                      let varSH = $('.float-sch .col-h .sc-row-guide').clientHeight
                      let varSW = $('.float-sch .d-i-n').clientWidth - 2
                      function setValEditFromBtn(qsb, rootprop, defprop, incVal) {
                        cpo.style.setProperty(rootprop, defprop + 'px')
                        let b = bc.qsf('.h #' + qsb)
                        let ivalEdit, currEdit =  false
                        function changeVal(v) {
                          let lv = Number(cpo.style.getPropertyValue(rootprop).replace('px', ''))
                          cpo.style.setProperty(rootprop, (lv + v) + 'px')
                        }
                        function propEdit(val) {
                          currEdit = true
                          ivalEdit = setInterval(function() { changeVal(val)}, 100 )
                        }
                        function propSave() { if(currEdit) { clearInterval(ivalEdit);currEdit = false} }
                        let ea = 'mousedown,touchstart'
                        let ez = 'mouseup,mouseout,touchend,touchcancel,blur'
                        ea.split(',').forEach(function(en) {
                          b.addEventListener(en, function() { propEdit(incVal)} )
                        })
                        ez.split(',').forEach(function(en) {
                          b.addEventListener(en, propSave)
                        })
                        b.addEventListener('click', function() { changeVal(incVal) })
                      }
                      setValEditFromBtn('bfs-dh', '--sch-vf-sh', 0, -1)
                      setValEditFromBtn('bfs-ih', '--sch-vf-sh', varSH, 1)
                      setValEditFromBtn('bfs-dw', '--sch-vf-sw', 0, -1)
                      setValEditFromBtn('bfs-iw', '--sch-vf-sw', varSW, 1)
                      $$('.float-sch [data-sh-c-s]').forEach(function(c) {
                        let [a, b] = c.getAttribute('data-sh-c-s').split('-')
                        let h = b - a
                        a -= Number(cpo.qsf('.cont-s-t-b').getAttribute('data-sh-sp'))
                        c.style.top = `calc(var(--sch-vf-sh) * ${a})`
                        c.style.height = `calc(var(--sch-vf-sh) * ${h})`
                      })
                      let ih = bc.qsf('.vhrsi')
                      if (ih) {
                        bc.qsf('.cont-s-t-h')
                      }
                      bc.qsf('.cs').innerHTML = /*css*/`
                      .float-sch .col-d,.float-sch .cont-s-t-h .d-i-n{flex:none;width:var(--sch-vf-sw)}
                      .float-sch .sc-row-guide:not(.last){height:var(--sch-vf-sh)}
                      .float-sch .sch-f .cont-s-t {width:fit-content}`
                      if (cpo.parentNode.scrollHeight > cpo.parentNode.clientHeight) {
                        let btn_sug = bc.qsf('#bfs-dh')
                        btn_sug.classList.add('pulse')
                        let evstr = ['click', 'touchstart', 'mousedown']
                        evstr.forEach(function(en) {
                          btn_sug.addEventListener(en, function() {
                            btn_sug.classList.remove('pulse')
                          })
                        })
                        bc.qsf('.sub').innerHTML += '<p class="inf-sch">Disminuya el alto de \
filas para una mejor vista</p>'
                      }
                      let b = bc.qsf('#bfs-d')
                      b.addEventListener('click', function() {
                        if (!scm('aa')) {
                          html2canvas(document.querySelector('.float-sch .cont-s-t'), {
                            onrendered: function (canvas) {
                              let isrc = canvas.toDataURL('image/png')
                              let nb = $n('a', 'download::' + nCiclo + '.png', nCiclo + '.png', 'ddbb')
                              nb.href = isrc
                              nb.click()
                              nb.remove()
                            }
                          })
                        } else {
                          toastMSG('Esta opción solo es compatible desde el navegador', '-', 4e3)
                        }
                      })
                      if (toDL) {
                        b.click()
                      }
                    }, 2e2)
                    bc.qsf('#bfs-c').addEventListener('click', function(e) {
                      e.preventDefault()
                      bc.remove()
                      mmodal(false)
                      baSH()
                    })
                    mmodal()
                    baSH('prev_sch')
                  }
                  if (typeof html2canvas == 'function') {
                    modSch()
                  } else {
                    let s = document.createElement('script')
                    s.src = '/campusestudiante/RetornoSeguro/html2canvas.js'
                    document.head.appendChild(s)
                    s.addEventListener('load', function() {
                      modSch()
                    })
                  }
                }
                $('#p-sch-f').addEventListener('click', function() {
                  view_sch()
                })
                if (scm('bk,dv,us,ce')) {
                  function printSch(asImg = false) {
                    tbl_b.scrollLeft = 0
                    tbl_b.scrollTop = 0
                    setTimeout(function() {
                      let n = open('')
                      let g = mb.m.cloneNode(true)
                      n.document.body.classList.add('b2pr')
                      n.document.body.appendChild(g)
                      let contentJSe = ''
                      if (asImg) {
                        let lojsr = location.origin + '/campusestudiante/RetornoSeguro/html2canvas.js'
                        contentJSe = /*js*/`
                        let s = document.createElement('script')
                        s.src = '${lojsr}'
                        document.body.appendChild(s)
                        function failt2img() {
                          alert('Error al convertir a imagen')
                          window.print()
                        }
                        s.addEventListener('load', function() {
                          try {
                            html2canvas(document.querySelector('.cont-s-c'), {
                              onrendered: function(canvas) {
                                let isrc = canvas.toDataURL('image/png')
                                let img = new Image()
                                img.src = isrc
                                document.write('<img src="' + img.src + '" style="width:100%;">')
                                setTimeout(function() {
                                  window.print()
                                }, 1e3)
                              }
                            })
                          } catch(e) {failt2img()}
                        })
                        s.addEventListener('error', function() {failt2img()})
                        `
                      } else {
                        contentJSe = /*js*/`
                        document.querySelector('#btn-e-pr').addEventListener('click', function() {
                          window.print()
                        })
                        `
                      }
                      let se = $n('script', '', 'html:' + contentJSe)
                      n.document.body.appendChild(se)
                    }, 5e2)
                  }
                  $('#p-sch-t').on('click', function() {
                    printSch()
                  })
                  $('#p-sch-i').on('click', function() {
                    printSch(true)
                  })
                  $('#p-sch-d').on('click', function() {
                    view_sch(true)
                  })
                } else {
                  $('#p-sch-d').on('click', function() {
                    toastMSG('Esta opción solo es compatible desde el navegador', '-', 4e3)
                  })
                  $('#p-sch-t').on('click', function() {
                    toastMSG('Esta opción solo es compatible desde el navegador', '-', 4e3)
                  })
                  $('#p-sch-i').on('click', function() {
                    toastMSG('Esta opción solo es compatible desde el navegador', '-', 4e3)
                  })
                }
                let regHrs = {a: [], z: []}
                schData.w.forEach(function(d) {
                  d.forEach(function(h) {
                    let hh = h['time'].split('-')
                    regHrs.a.push(Number(hh[0]))
                    regHrs.z.push(Number(hh[1]))
                  })
                })
                regHrs.min = Math.min(...regHrs.a)
                regHrs.max = Math.max(...regHrs.z)
                let countRows = regHrs.max - regHrs.min
                let configSc = {h: 30, w: 150}
                let tbl_i = $('.b-sc .cont-s-t-i-c')
                let tbl_h = $('.b-sc .cont-s-t-h-c')
                let tbl_b = $('.b-sc .cont-s-t-b')
                tbl_b.setAttribute('data-sh-sp', regHrs.min)
                function updateCardSizes() {
                  setRCss('tsc-cw', configSc.w + 'px')
                  setRCss('tsc-rh', configSc.h + 'px')
                  $$('[data-sh-c-s]').forEach(function(c) {
                    let [a, b] = c.getAttribute('data-sh-c-s').split('-')
                    let h = b - a
                    a -= regHrs.min
                    c.style.top = (a * configSc.h) + 'px'
                    c.style.height = (h * configSc.h) + 'px'
                  })
                  updateShadows()
                }
                function newCtrl(type, id, fns, attrs, txt, pre, fdef) {
                  let l = $n('label', 'for::' + id)
                  $n('span', '', txt, l)
                  let c = $n('input', attrs.replaceAll(',', ',,').replaceAll(':', '::'), '', l)
                  c.type = type
                  c.id = id
                  fns.forEach(function(ev) {
                    c.addEventListener(ev[0], function() {
                      ev[1](c)
                    })
                  })
                  if (type == 'checkbox') {
                    l.insertBefore(c, l.children[0])
                    c.checked = pre
                  } else {
                    c.value = pre
                  }
                  fdef(pre)
                  return l
                }
                let contCtrls = $('.cont-s-ctrls')
                function calcShTHSize() {
                  let sth = tbl_h.offsetHeight
                  tbl_b.style.marginBlockStart = sth + 'px'
                  tbl_i.parentNode.style.top = sth + 'px'
                }
                function setLeftSp() {
                  setRCss('sh-left-ih', (tbl_i.parentNode.offsetWidth - 1) + 'px')
                }
                contCtrls.appendChild(newCtrl('checkbox', 'sh-c-ssw', [
                  ['change', function(e) {
                    $('.b-sc .cont-s-t').classList.toggle('h-shs')
                  }]
                ], '', 'Mostrar sombras', true, function() {}))
                contCtrls.appendChild(newCtrl('checkbox', 'sh-c-sih', [
                  ['change', function(e) {
                    $('.b-sc .cont-s-t').classList.toggle('h-hrs')
                  }]
                ], '', 'Mostrar indicador de horas', true, function() {}))
                contCtrls.appendChild(newCtrl('checkbox', 'sh-c-vhi', [
                  ['change', function(e) {
                    $('.b-sc .cont-s-t').classList.toggle('vhrsi')
                    setLeftSp()
                  }]
                ], '', 'Mostrar columna de horas', false, function() {}))
                contCtrls.appendChild(newCtrl('checkbox', 'sh-c-uhh', [
                  ['input', function(e) {
                    $$('[data-sht-range]').forEach(function(i) {
                      tH2h(i)
                    })
                    setLeftSp()
                  }]
                ], '', 'Usar formato de 24 horas', false, function() {}))
                contCtrls.appendChild(newCtrl('checkbox', 'sh-c-sad', [
                  ['change', function(e) {
                    let e2t = $('.b-sc .cont-s-t')
                    if (e.checked) {
                      e2t.classList.add('sad')
                    } else {
                      e2t.classList.remove('sad')
                    }
                    updateShadows()
                  }]
                ], '', 'Mostrar días sin cursos', true, function() {}))
                contCtrls.appendChild(newCtrl('range', 'sh-c-ths', [
                  ['input', function(e) {
                    setRCss('sch-th-size', e.value + 'px')
                    calcShTHSize()
                  }]
                ], 'step:1,min:8,max:24', 'Tamaño de los días', 15, function(d) {
                  setRCss('sch-th-size', d + 'px')
                  calcShTHSize()
                }))
                contCtrls.appendChild(newCtrl('range', 'sh-c-fsn', [
                  ['input', function(e) {
                    setRCss('course-name-size', e.value + 'px')
                  }]
                ], 'step:0.5,min:8,max:22', 'Tamaño de los nombres', 15, function(d) {
                  setRCss('course-name-size', d + 'px')
                }))
                contCtrls.appendChild(newCtrl('range', 'sh-c-fsh', [
                  ['input', function(e) {
                    setRCss('course-time-size', e.value + 'px')
                  }]
                ], 'step:0.5,min:8,max:22', 'Tamaño de la hora', 13, function(d) {
                  setRCss('course-time-size', d + 'px')
                }))
                contCtrls.appendChild(newCtrl('range', 'sh-c-hmb', [
                  ['input', function(e) {
                    setRCss('course-time-mgnb', e.value + 'px')
                  }]
                ], 'step:0.5,min:0,max:16', 'Espacio de los nombres', 1, function(d) {
                  setRCss('course-time-mgnb', d + 'px')
                }))
                contCtrls.appendChild(newCtrl('range', 'sh-c-rnd', [
                  ['input', function(e) {
                    setRCss('course-event-round', e.value + 'px')
                  }]
                ], 'step:1,min:0,max:16', 'Radio de esquinas', 0, function(d) {
                  setRCss('course-event-round', d + 'px')
                }))
                contCtrls.appendChild(newCtrl('range', 'sh-c-w', [
                  ['input', function(e) {
                    configSc.w = e.value
                    updateCardSizes()
                  }]
                ], 'step:1,min:40,max:250', 'Ancho de columnas', 150, function(d) {
                  configSc.w = d
                  updateCardSizes()
                  setTimeout(function() {
                    tbl_b.scrollLeft = (new Date().getDay() - 1) * d
                  }, 5e2)
                }))
                contCtrls.appendChild(newCtrl('range', 'sh-c-w', [
                  ['input', function(e) {
                    configSc.h = e.value
                    updateCardSizes()
                  }]
                ], 'step:1,min:20,max:60', 'Alto de filas', 30, function(d) {
                  configSc.h = d
                  updateCardSizes()
                }))
                contCtrls.appendChild(newCtrl('range', 'sh-c-spc', [
                  ['input', function(e) {
                    setRCss('sh-space', e.value + 'px')
                  }]
                ], 'step:1,min:0,max:10', 'Espaciado', 0, function(d) {
                  setRCss('sh-space', d + 'px')
                }))
                for (let di = 0; di < 6; di++) {
                  let sUse = (di < 5 || !!schData.w[di]) ? ' reg' : ' emp'
                  tbl_h.appendChild(function() {
                    let dW = dWn.split(',')[di]
                    return $n('div', 'class::d-i-n' + sUse, dW)
                  }())
                  tbl_b.appendChild(function() {
                    let divsHrs = ''
                    let rrows = countRows + 1
                    while (rrows--) {
                      let il = !rrows ? ' last' : ''
                      divsHrs += '<div class="sc-row-guide' + il + '"></div>'
                      if (di + 1 == 6) {
                        let ih = regHrs.min + (countRows - rrows)
                        let t = `${ih}-${ih+1}`
                        let it = neHh(t)
                        il != '' && (it = '')
                        tbl_i.innerHTML += /*html*/`<div class="sc-row-guide${il}">${it}</div>`
                      }
                    }
                    let colDay = $n('div', 'class::col-d' + sUse, /*html*/`html:
                      <div class="col-h">${divsHrs}</div>
                    `)
                    if (schData.w[di]) {
                      schData.w[di].forEach(function(c) {
                        let [cha, chz] = c['time'].split('-')
                        colDay.children[0].appendChild((function() {
                          let attrs = 'class::sc-d-cc,,data-sh-c-s::'
                          attrs += cha + '-' + chz + ',,'
                          let ic = (courses.indexOf(c['name']) + 1)
                          let posLAC = chz < regHrs.min + (countRows / 2) ? 'ad' : 'au'
                          attrs += 'data-course::' + ic
                          let cardCourse = $n('div', attrs, /*html*/`html:
                            <div class="inspd" title="${c['name']}">
                              <input type="color">
                              <div class="scdc-t">${neHh(c['time'])}</div>
                              <div class="scdc-n">${c['name']}</div>
                            </div>
                            <div class="lac ${posLAC}">
                              <div class="lac-c"></div>
                              <div class="lac-l">
                                <div class="lac-a lac-ao1">Abrir curso</div>
                                <div class="lac-a lac-ao2">Ver notas</div>
                                <div class="lac-a lac-ao3">Cambiar color</div>
                              </div>
                            </div>
                          `)
                          function closeMOptsCrs() {
                            cardCourse.qsf('.lac').classList.remove('elac')
                            cardCourse.style.zIndex = ''
                          }
                          cardCourse.qsf('.lac-ao1').on('click', function() {
                            openCourseByName(c['name'])
                            closeMOptsCrs()
                          })
                          cardCourse.qsf('.lac-ao2').on('click', function() {
                            $('.piluku-preloader').classList.remove('hidden')
                            loadGradesByCrs(strCapC(c['name']), c['idCrsP'])
                            closeMOptsCrs()
                          })
                          cardCourse.qsf('.lac-ao3').on('click', function() {
                            iptClr.click()
                          })
                          cardCourse.style.setProperty('--course-color-font', '#ffffff')
                          cardCourse.style.setProperty('--course-color-back', '#00000045')
                          let iptClr = cardCourse.qsf('input[type="color"')
                          iptClr.value = baseColor[ic - 1]
                          iptClr.on('input', function() {
                            updateColors(ic, iptClr.value)
                          })
                          cardCourse.qsf('.inspd').on('click', function() {
                            let endLac = cardCourse.qsf('.lac')
                            let reqCLac = endLac.classList.contains('elac')
                            $$('.sc-d-cc').forEach(function(tcrs) {
                              if (tcrs == cardCourse && !reqCLac) {
                                cardCourse.style.zIndex = '2'
                                endLac.classList.add('elac')
                              } else {
                                tcrs.style.zIndex = ''
                                tcrs.qsf('.lac').classList.remove('elac')
                              }
                            })
                          })
                          return cardCourse
                        })())
                      })
                    }
                    return colDay
                  }())
                }
                function updateShadows() {
                  let tb = tbl_b
                  tbl_h.style.transform = 'translateX(-' + (tb.scrollLeft) + 'px)'
                  tbl_i.style.transform = 'translateY(-' + (tb.scrollTop) + 'px)'
                  let fx = tb.scrollWidth - (tb.clientWidth + tb.scrollLeft)
                  let fy = tb.scrollHeight - (tb.clientHeight + tb.scrollTop)
                  let ct = $('.cont-s-t-s')
                  let bp = ''
                  if (fx == 0 && fy == 0) {
                    bp = '0px 0px 0px 0px #00000000'
                  } else {
                    bp += 'inset '
                    bp += fx > 0 ? '-16px ' : '0px '
                    bp += fy > 0 ? '-16px ' : '0px '
                    bp += '10px -14px #00000035'
                  }
                  ct.style.bottom = (tb.offsetHeight - tb.clientHeight) + 'px'
                  ct.style.right = (tb.offsetWidth - tb.clientWidth) + 'px'
                  tbl_h.parentNode.style.right = ct.style.right
                  tbl_i.parentNode.style.bottom = ct.style.bottom
                  ct.style.boxShadow = bp
                }
                setTimeout(function() {
                  calcShTHSize()
                  updateShadows()
                }, 2e2)
                tbl_b.on('scroll', function() { updateShadows() })
                updateCardSizes()
                mb.m.qsf('.cont-s-c').addEventListener('click', function(e) {
                  if (!e.target.closest('.sc-d-cc')) {
                    $$('.lac.elac').forEach(function(elac) {
                      elac.classList.remove('elac')
                      elac.parentNode.zIndex = ''
                    })
                  }
                })
                function setEventsOrMsg(where, data, msgEmpty) {
                  if (data.length == 0) {
                    where.innerHTML = /*html*/ `<div class="msg-empty">${msgEmpty}</div>`
                    where.parentNode.classList.remove('act')
                  } else {
                    where.parentNode.classList.add('act')
                    where.innerHTML = ''
                    data.forEach(function(c) {
                      where.innerHTML += /*html*/`
                      <div class="ccc-e-c">
                        <div class="cc-e-ci-n">
                          <div class="ci-n-t">${strCapC(c.name)}</div>
                          <div class="ci-b-oc">Abrir</div>
                        </div>
                        <p class="cc-e-ci-d">
                          <span class="cc-e-ci-t" data-sht-range="${c.time}">${HH2hh(c.time)}</span>
                          <span class="cc-e-ci-a">${strCapP(c.amb)}</span>
                        </p>
                      </div>
                      `
                    })
                    where.qsa('.ci-b-oc').forEach(function(b) {
                      let nameDest = b.parentNode.qsf('.ci-n-t').innerText
                      b.on('click', function() {
                        openCourseByName(nameDest)
                      })
                    })
                  }
                }
                function sortHr(a, b){return a.ta < b.ta ? -1 : a.ta > b.ta ? 1 : 0}
                updateEvents = function(dy = new Date().getDay(), hr = new Date().getHours()) {
                  let pc = $('.cont-e .cc-e.cc-e-c')
                  if (pc) {
                    let dr = {n: [], c: [], p: []}
                    let currDay = dy - 1
                    let currCrs = schData.w[currDay]
                    if (currCrs) {
                      $('.cont-e').classList.remove('dayemp')
                      currCrs.forEach(function(posCc) {
                        let [ta, tz] = posCc['time'].split('-')
                        if (1 * ta > hr) {
                          posCc['ta'] = 1 * ta
                          dr['p'].push(posCc)
                        } else {
                          if (1 * tz > hr) {
                            dr.c.push(posCc)
                          }
                        }
                      })
                      dr.p.sort(sortHr)
                      if (dr.p.length > 0) {
                        dr.n.push(dr.p[0])
                      }
                      setEventsOrMsg($('.cont-e .cc-e.cc-e-c .cc-e-l'), dr.c, 'Sin cursos a esta hora')
                      setEventsOrMsg($('.cont-e .cc-e.cc-e-n .cc-e-l'), dr.n, 'Sin cursos pendientes por hoy')
                      setEventsOrMsg($('.cont-e .cc-e.cc-e-p .cc-e-l'), dr.p, 'Sin cursos pendientes por hoy')
                    } else {
                      $('.cont-e').classList.add('dayemp')
                      $('.cont-e').innerHTML = /*html*/`<div class="cc-e cc-e-c">
                        <div class="cc-e-l">Sin cursos para hoy</div>
                      </div>
                      <div class="cc-e cc-e-n"><div class="cc-e-l"></div></div>
                      <div class="cc-e cc-e-p"><div class="cc-e-l"></div></div>`
                    }
                  }
                }
                let nct = new Date()
                let sec2nextHour =  (60 - nct.getSeconds()) + (59 - nct.getMinutes()) * 60
                updateEvents()
                // updateEvents(1, 8) //dev: test
                // window.updateEvents = updateEvents
                setTimeout(function() {
                  setInterval(function() {
                    updateEvents()
                  }, 60e3 * 60)
                }, sec2nextHour * 1e3 + 2e3)
              }
              function trCourses2Data() {
                let dataCrs = {c: [], w: []}
                try {
                  let clist = $$('#tbCursos tr[role="row"][id]')
                  let clods = 0
                  clist.forEach(function(rc) {
                    let urlFetchCourse = 'detallecursosmatriculados.aspx?cup=' + rc.id
                    if (rc.firstElementChild.hasAttribute('taller')) {
                      urlFetchCourse = 'detallematricula.aspx?cur=' + rc.id + '&param1=mat'
                    }
                    fetch(urlFetchCourse, {
                      method: "GET",
                      headers: {"Content-Type": "application/json; charset=utf-8"}
                    })
                    .then(function(response) {
                      if (!response.ok) { return [] }
                      return response.json()
                    })
                    .then(function(data) {
                      let arrIf = data
                      let arrIl = []
                      arrIf.forEach(function(i) {
                        arrIl.push(JSON.stringify(i))
                      })
                      let arrCl = arrIl.filter(function(e, i, a) {
                        return a.indexOf(e) === i
                      })
                      let arrCa = []
                      arrCl.forEach((function(i) { arrCa.push(JSON.parse(i)) } ))
                      rc.lastElementChild.style.visibility = 'hidden'
                      rc.lastElementChild.innerHTML = JSON.stringify(arrCa)
                      clods++
                      if (clods == clist.length) {
                        clist.forEach(function(c) {
                          let fc2r = c.qsf('.details-control')
                          if (fc2r) {
                            fc2r.remove()
                          }
                          _schedule = []
                          let backRespData = JSON.parse(c.lastElementChild.innerHTML)
                          backRespData.forEach(function(i) {
                            let dw = ('lu,ma,mi,ju,vi,sa,do').split(',')
                            let h = i['nombre_Hor'] + '-' + i['horaFin_Lho']
                            h = h.replace(/00/g, '').replace(/:/g, '')
                            let p = i['ambiente']
                            p = p.toLowerCase().includes('e por conf') ? 'Por confirmar' : p
                            let di = dw.indexOf(i['dia_Lho'].toLowerCase())
                            let cH = _schedule[di] ? _schedule[di]['h'] : []
                            cH.push(h)
                            _schedule[di] = {"p": p, "h": cH}
                          })
                          function setTrueHours(arr, hrs) {
                            let [a, z] = hrs.split('-').map(Number)
                            for (let i = a; i < z && i < arr.length; i++) {
                              arr[i] = true
                            }
                          }
                          function h2s(n) {
                            return String(n).padStart(2, 0)
                          }
                          _schedule.forEach(function(d) {
                            let fd = new Array(24).fill(false)
                            d['h'].forEach(function(ha) {
                              setTrueHours(fd, ha)
                            })
                            let hA = fd.indexOf(true)
                            let hZ = fd.slice(hA).indexOf(false)
                            d['t'] = ([h2s(hA), h2s(hA + hZ)]).join('-')
                          })
                          dataCrs.c.push({
                            name: backRespData[0]['nombre_Cur'],
                            idCrsP: backRespData[0]['codigo_cup'],
                            group: backRespData[0]['grupohor_cup'],
                            prof: backRespData[0]['docente'],
                            sch: _schedule
                          })
                        })
                        dataCrs.c.forEach(function(c) {
                          c.sch.forEach(function(s, di) {
                            dataCrs.w[di] = dataCrs.w[di] || []
                            dataCrs.w[di].push({
                              time: s['t'],
                              amb: s['p'],
                              idCrsP: c.idCrsP,
                              name: c.name,
                              prof: c.prof
                            })
                          })
                        })
                        let ltd = $('.---rm-div-data')
                        if (ltd) {
                          ltd.remove()
                        }
                        setSchedule(dataCrs)
                        custom_panel_bgosec.style.display = ''
                      }
                    })
                  })
                } catch(e) {
                  showFail('Error al interpretar los datos de su horario')
                }
              }
              try {
                let d = $n('div', 'class::---rm-div-data,,style::display:none')
                let pd = $('#divContent .col-md-12 .col-md-8')
                if (!pd) {
                  pd = $('#divContent')
                }
                pd.appendChild(d)
                fetch('cursosmatriculados.aspx')
                .then(function(r) {
                  if (!r.ok) {
                    throw new Error(`No se pudo obtener información de matrícula`)
                  }
                  return r.text()
                })
                .then(function(t) {
                  d.innerHTML = t
                  return fetch('procesar.aspx?param0=lstTaller')
                })
                .then(function(r) {
                  if (!r.ok) {
                    throw new Error(`No se pudo obtener información de matrícula de cursos de verano`)
                  }
                  return r.text();
                })
                .then(function(talleresRaw) {
                  let arrTalleres = JSON.parse(talleresRaw)
                  arrTalleres.forEach(function(taller) {
                    let strTD = 'html:<td taller>' + taller['nomCurso'] + '</td><td></td>'
                    $n('tr', 'role::row,,id::' + taller['cur'], strTD, d.qsf('#tbCursos'))
                  })
                  trCourses2Data()
                })
                .catch(function(error) {
                  showFail(error.message)
                })
              } catch (e) {
                showFail('Error al obtener los datos de su horario')
              }
            }, 50)
          } else {
            $$('[data-sbtn="1"],[data-sbtn="2"],[data-sbtn="3"]').forEach(function(b) {
              b.remove()
            })
          }
          if (isTOut) {
            showBannersTOut()
          }
          // ---- ---- ---- ---- CUP FORMS
          if (!0) {
            let ctm_panel_more = $n('div', 'class::controlscup', '', custom_panel_body)
            ctm_panel_more.appendChild(setStyle(/*css*/`
.controlscup{padding-block-start:8px;margin-block:50px 200px}.info-appm{padding:10px;border-style:solid;
border-radius:8px;border-width:1px;border-color:#d5d5d5;background-color:#f7f7f7}.info-appm .p{font-size:
14px;font-weight:bold;margin-bottom:12px;padding-block:4px}.iappm-links{display:flex;gap:8px;flex-wrap:wrap;
margin-block-end:8px}.iappm-links a{font-size:15px}.iappm-links i{font-size:17px}.iappm-links a{padding:
4px 14px;background-color:#ebebeb;border-radius:8px;display:flex;align-items:center;gap:8px;cursor:pointer;
text-decoration:none;transition:all 0.3s;border-style:solid;border-width:1px;border-color:#e3e3e3;
white-space:nowrap}.iappm-links a:hover{background-color:#ffffff;border-color:#c5c5c5;color:#5b66c1}
.iappm-links a.dest{border-color:#ffa52f;background-image:linear-gradient(90deg, #ffe740, #fdce4a);
color:#603a12}.iappm-links a.dest:hover{border-color:#956322;background-image:
linear-gradient(90deg, #fff18c, #ffdfa2);color:#663a0d;box-shadow:0 4px 10px -2px #0000003b}
.info-appm .ptext{font-size:15px;color:gray;margin-bottom:14px;
text-align:justify}`, 'css-cup-ownbanner', true))
            let ctm_pmore_in = $n('div', 'class::info-appm', '', ctm_panel_more)
            $n('div', 'class::p', 'Contribuye con Campus USAT', ctm_pmore_in)
            $n('div', 'class::ptext', 'Sigue el canal de novedades en WhatsApp, \
entérate que mejoras se están desarrollando (y cada que el campus se cae o \
reactiva por las configuraciones internas de prueba que le aplican). \
Si esta app te resulta útil, no olvides recomendarla a tus contactos.', ctm_pmore_in)
            ctm_panel_more.appendChild($n('div', 'class::p', ''))
            let ctm_pmore_in_l = $n('div', 'class::iappm-links', '', ctm_pmore_in)
            let links_ref = [
              {
                'class': 'dest',
                'i': 'ion-speakerphone',
                'text': 'Sigue el canal de novedades',
                'href': '//whatsapp.com/channel/0029VaaqtvuKLaHfqGedEK40',
              },
              {
                'i': 'ion-edit',
                'text': 'Escribe una sugerencia',
                'href': '@docf@1FAIpQLSfYkQq4FA6bAllDj2J3wP7pJEDtG5NtI8T4iy2ouLRgwbmuHQ/viewform',
              },
              {
                'i': 'ion-chatbox-working',
                'text': 'Deja un comentario',
                'href': '@docf@1FAIpQLSduXS7cC2mA8C3iTo7m4ljsgYY4Q3w-JU4Y1xHE1AGfCqNCBw/viewform',
              },
              {
                'i': 'ion-bug',
                'text': 'Reporta un error',
                'href': '@docf@1FAIpQLScoGoyJZY-kj7_6lXFsfsnvTLKmeqD4ChRKDDKeHFPlwta6VA/viewform',
              }
            ]
            links_ref.forEach(function(lk) {
              let link_ref = lk['href'].replace('@docf@', '//docs.google.com/forms/d/e/')
              let lk_ref = $n('a', 'target::_blank,,href::' + link_ref, /*html*/`html:
              <i class="${lk['i']}"></i><span>${lk['text']}</span>`, ctm_pmore_in_l)
              if (lk['class']) {
                lk_ref.className = lk['class']
              }
            })
          }
        }
        // ---- ---- ---- OPEN MOODLE WINDOW
        if (top == self && !window.__requireLAV) {
          let d = $('.moodle-frame')
          d && d.remove()
          let m = $n('div', 'class::moodle-frame')
          let c = $n('div', 'class::float-frame')
          c.style.display = 'none'
          // let s = $n('style')
          let s = setStyle(/*css*/`button.toggle-cf{position:fixed;z-index:99997;right:0;top:80vh;border-style:solid;
border-width:1px;border-right-width:0;border-color:#cbcbcb;color:#a5a5a5;padding:6px 30px 6px 16px;user-select:none;
border-radius:28px 0 0 28px;color;transition:0.2s;
transition-timing-function:ease-in-out;font-size:14px;cursor:pointer;transform:translateX(14px);
background-color:#ebebeb;opacity:0.5}.no-animate + button.toggle-cf{opacity:0.15;transform:none}
button.toggle-cf:hover{transform:none;color:black;border-color:#8c8c8c;opacity:1}button.toggle-cf:focus{outline:none}
.float-frame{position:fixed;z-index:99997;top:0;left:0;right:0;bottom:0;height:100vh;
max-height:-webkit-fill-available;width:100%}.float-frame:not(.no-animate){transition:all 0.6s;
background-color:transparent;transition-delay:0.3s}@media (max-width:700px){
.float-frame:not(.no-animate){padding:8px}}@media (min-width:701px){.float-frame:not(.no-animate){padding:18px}}
.float-frame.visible{transition-delay:0s;background-color:#000000c5}iframe.moodle-float{user-select:none;
transform:translateX(-100vw);background-color:white;border:none;height:100%;width:100%}
.float-frame:not(.no-animate) iframe.moodle-float{border-radius:8px;transition:all 0.7s}
iframe.moodle-float.show{transform:none}`, 'css-cup-avframe', true)
          let i = $n('iframe', 'class::moodle-float')
          i.name = 'subav'
          // i.src = '/aulavirtual/my/'
          let b = $n('button', 'class::toggle-cf')
          b.innerText = 'Aula virtual'
          function isvis() {
            return c.classList.contains('visible')
          }
          b.on('click', function() {
            if (!b.hasAttribute('prol')) {
              let iv = isvis()
              if (c.classList.contains('no-animate')) {
                if (iv) {
                  b.innerText = 'Aula virtual'
                  c.classList.remove('visible', 'show')
                  c.style.display = 'none'
                  baSH()
                  mmodal(false)
                } else {
                  b.innerText = 'Campus virtual'
                  c.classList.add('visible', 'show')
                  c.style.display = 'block'
                  baSH('av')
                  mmodal()
                }
              } else {
                if (iv) {
                  i.classList.remove('show')
                  c.classList.remove('visible')
                  b.innerText = 'Aula virtual'
                } else {
                  c.style.display = 'block'
                  setTimeout(function() {
                    c.classList.add('visible')
                  }, 2e2)
                  b.innerText = 'Campus virtual'
                }
                setTimeout(function() {
                  if (iv) {
                    c.style.display = 'none'
                    baSH()
                    mmodal(false)
                  } else {
                    i.classList.add('show')
                    baSH('av')
                    mmodal()
                  }
                }, 7e2)
              }
            }
          })
          let lastCMEvent = 0
          b.addEventListener('contextmenu', function(e) {
            e.preventDefault()
            let nCMEvent = new Date() * 1
            if (lastCMEvent + 3e3 > nCMEvent) {
              let bo = toastMSG(':¿Volver a cargar el aula virtual?<a>Sí</a>', '', 4e3)
              bo[0].on('click', function() {
                let formCredentials = $('body > div > #bckAVL')
                formCredentials && formCredentials.submit()
              })
            }
            lastCMEvent = nCMEvent
            isvis() && c.classList.toggle('no-animate')
          })
          m.appendChild(s)
          c.appendChild(i)
          m.appendChild(c)
          m.appendChild(b)
          moveElementVertically(b, 80)
          document.body.appendChild(m)
          if (scm('aa,bk')) {
            injJSFr()
          }
          createMoodleSession('subav', true, true, 'bckAVL', true)
        }
        // ---- ---- ---- FIX MENU MOBILE ACTION
        setTimeout(function() {
          $('#open-left').on('click', function() {
            let de = {over: $('#divOverlay'), menu: $('#divleft')}
            de.over.classList.add('show')
            de.menu.classList.add('menu_appear')
          })
        }, 50)
        // ---- ---- APPEND IFRAME TO COURSES ROOM
        setTimeout(function() {
          if (top == self && 1 == 0) {
            let pa = $('#div_anuncio_bd')
            if (pa) {
              let aula = $n('iframe', 'class::first,,src::/aulavirtual/my/')
              pa.appendChild(aula)
            }
          }
        }, 50)
        // ---- ---- CARNET MOBILE VIEW
        setTimeout(function() {
          function resize_carnet() {
            let carnetCont = $('#mdlCarnetDigital .modal-content #divpase.modal-body')
            if (carnetCont) {
              carnetCont.style.zoom = '1'
              carnetCont.style.zoom = Math.round(carnetCont.offsetWidth/carnetCont.scrollWidth * 10) / 10 - 0.1
            }
          }
          window.addEventListener('resize', resize_carnet)
          window.addEventListener('click', function() {
            function validHS() {
              updStModls()
              if (!posMdls.c && !posMdls.m && !posMdls.i && !posMdls.s) {
                baSH('page_menu')
              }
            }
            resize_carnet()
            let ci = 0
            let i = setInterval(function() {
              if (ci > 40) {
                clearInterval(i)
              } else {
                ci++
                validHS()
              }
            }, 1e2)
            setTimeout(function() {
              resize_carnet()
            }, 1e3)
          })
        }, 50)
      })
    }
    // ---- ---- REDIRECT FOR AUTO LOGIN OR BUTTON
    if (locSite == 'ls_moodleClose') {
      if (top != self) {
        redirectMoodleAccount()
      } else {
        atDomReady(!0, function() {
          let nbtn = $n('button', 'class::btn btn-second btn-block mt-3 ml-0', 'Ingresar automaticamente')
          nbtn.addEventListener('click', function(e) {
            e.preventDefault()
            redirectMoodleAccount()
          })
          let btnSubmit = $('#loginbtn')
          btnSubmit && (btnSubmit.parentNode.appendChild(nbtn))
        })
      }
    }
    // ---- ---- FOR FILTER COURSES
    onlyAtLoad('ls_moodle', function() {
      let paramCourseDest = decodeURIComponent(new URLSearchParams(location.search).get('cdest'))
      paramCourseDest = paramCourseDest == 'null' ? '': paramCourseDest
      // ---- ---- BUTTON TO RESET STYLE
      setTimeout(function() {
        let styleItem = $('[css-cup-main]')
        if (styleItem) {
          let styleCode = styleItem.innerHTML
          let filtDiv = $('[data-region=filter]')
          let btnToggleSyles = $n('button',
            'class::btn btn-outline-secondary dropdown-toggle',
            'html:<span>Cambiar vista</span')
          btnToggleSyles.addEventListener('click', function() {
            if (styleItem.innerHTML != '') {
              styleItem.innerHTML = ''
            } else {
              styleItem.innerHTML = styleCode
            }
          })
          filtDiv.children[0].appendChild(btnToggleSyles)
        }
      }, 50)
      // ---- ---- FILTER CARDS OF COURSES
      let findList = setInterval(function() {
        if ($('.card.dashboard-card .multiline') || tml(10)) {
          clearInterval(findList)
          function getFirstCourseName() {
            let fcc = $('.card.dashboard-card .multiline')
            return fcc ? fcc.innerText.trim() : ''
          }
          let firstCourseName = getFirstCourseName()
          function filterCourses() {
            let queryStrCards = '[data-block=myoverview] .card.dashboard-card'
            let courseDestNotFound = ''
            if (paramCourseDest != '') {
              courseDestNotFound = 'No se encontró el curso'
            }
            $$(queryStrCards).forEach(function(card) {
              let courseName = card.qsf('.multiline').textContent.trim()
              if (paramCourseDest != '') {
                let minNameCourseCard = courseName
                  .replace(/\(.+\)/, '')
                  .replace(/\d{4}-.{1,2} - /, '')
                  .replace(/ - .+$/, '')
                minNameCourseCard = strMin(minNameCourseCard)
                if (paramCourseDest.includes(minNameCourseCard.replace(/\./g, '').trim())) {
                  courseDestNotFound = ''
                  runOrwait(msgUI_show, 'Accediendo al curso...', 'blue', false, 2)
                  let a_course = card.qsf('a.aalink.coursename')
                  a_course.style.backgroundColor = '#fffbcc'
                  location.replace(a_course.href)
                }
              }
              let iscurrent = courseName.includes(curCic)
              if (iscurrent) {
                card.classList.remove('disabled-course')
              } else {
                card.classList.add('disabled-course')
              }
              if (top == self) {
                clog(courseName, iscurrent)
              }
            })
            if (paramCourseDest != '' && courseDestNotFound != '') {
              runOrwait(msgUI_show, courseDestNotFound, 'red', false, 3)
            }
          }
          if (firstCourseName.includes(curCic)) {
            filterCourses()
          } else {
            listBtns = {
              'listLimit': ['[data-region=paging-control-limit-container] [data-toggle=dropdown]', []],
              'listFilter': ['#groupingdropdown', []],
              'filt.opt.destacados': ['[aria-labelledby=groupingdropdown]', [8, 1]],
              'filt.opt.enprogreso': ['[aria-labelledby=groupingdropdown]', [4, 1]],
              'loadIcon': '[data-region=paged-content-container] .loading-icon.icon-no-margin img'
            }
            function fac(lstElements) {
              let idxEmnt = 0
              let iEmnt = null
              function nextEmnt() {
                if (idxEmnt >= lstElements.length) {
                  clearInterval(obs)
                  return
                }
                let qof = lstElements[idxEmnt]
                iEmnt = typeof qof == 'function'
                  ? qof()
                  : $(qof[0] + qof[1].map(function(c) {
                    return '>*:nth-child(' + c + ')'
                  }).join(''))
                if (iEmnt == null) return
                iEmnt instanceof HTMLElement && iEmnt.click()
                idxEmnt++
              }
              let obs = setInterval(nextEmnt, 2e2)
            }
            runOrwait(msgUI_show, 'Filtrando cursos del ciclo: ' + curCic, 'yellow', false, 2)
            if (paramCourseDest) {
              let courseDestFormat = paramCourseDest.toUpperCase().replace(/-/g, ' ')
              runOrwait(msgUI_show, 'Buscando curso "' + courseDestFormat + '"', 'yellow', false, 2)
            }
            fac([
              listBtns['listFilter'],
              listBtns['filt.opt.enprogreso'],
              function() {
                let findNewCourses = setInterval(function() {
                  let nrc = getFirstCourseName()
                  if (nrc != firstCourseName && nrc != '' || tml(12)) {
                    clearInterval(findNewCourses)
                    setTimeout(function() {
                      filterCourses()
                    }, 5e2)
                  }
                }, 5e2)
                return 1
              },
            ])
          }
        }
      }, 5e2)
    })
    // ---- ---- TITLE FOR CONTENT COURSES
    atDomReady(loc.pathname.includes('/aulavirtual/'), function() {
      // ---- ---- ---- FIND RELEVANT TITLE
      setTimeout(function() {
        let qsTC = $('.breadcrumb-nav nav a[href*="course/view"]')
        if (qsTC) {
          let tc = qsTC.innerText.trim()
          if (tc) {
            function m(t) { return t.toLocaleLowerCase()}
            function flm(t) { return t.charAt(0).toLocaleLowerCase()}
            let nt = tc.replace(/\d{4}-.{1,2} - /, '').replace(/ -.+$/, '')
            nt = nt.toLocaleUpperCase()
            let ntw = nt.split(' ')
            ntw = ntw.map(function(t) {return ['y', 'de'].includes(m(t)) ? flm(t) : t})
            nt = ntw.map(function(t) {return t.charAt(0)})
              .join('.')
              .replaceAll('d.', 'd')
              .replaceAll('y.', 'y')
            let lt = document.title.replace(/^\d+: /, '')
            document.title = nt + ': ' + lt
          }
        }
      }, 50)
      // ---- ---- ---- FORCE NO DOWNLOAD
      setTimeout(function() {
        $$('#page-content a').forEach(function(a) {
          a.setAttribute('target', '_self')
          if (a.hasAttribute('href')) {
            if (a.getAttribute('href').includes('forcedownload')) {
              a.href = a.href.substring(0, a.href.indexOf('?f'))
            }
          }
        })
        $$('#region-main a').forEach(function(a) {a.removeAttribute('onclick')})
      }, 50)
    })
    // ---- NEW TITLES COURSE, AUTO LINKS
    atDomReady('ls_av.course', function() {
      // ---- ---- ---- SET TITLE PAGE
      setTimeout(function() {
        let dt = document.title
        dt = dt.replace(/, tema.+/i, '')
        if (dt.includes('Curso:')) {
          dt = dt
            .replace(/.+-[\w\d]{1,2} - /, '')
            .replace(' - ', '-')
            .replace(/ *\(.+\)$/, '')
            .toLowerCase()
            .replace(/-adm-esc.pre.+$/, '')
            .replace(/ii/i, 'II')
          let ndt = dt
          ndt = dt.slice(0, 1).toLocaleUpperCase()
          if (dt.charAt(dt.length - 2) == '-') {
            ndt += dt.slice(1, -2)
            ndt += ' (' + dt.slice(-1).toLocaleUpperCase() + ')'
          } else {
            ndt += dt.slice(1)
          }
          document.title = ndt
        }
      }, 50)
    })
    onlyAtLoad('ls_av.course', function() {
      // ---- ---- ---- AUTO LINKS, FOLDERS AND ACTIVITIES
      setTimeout(function() {
        let cssFoldersLinksAuto = /*css*/`#region-main [role=main] a:focus,#region-main [role=main] button:focus,
#region-main [role=main] li button{outline:none !important;box-shadow:none !important}.fold-c-page{display:flex;
flex-direction:column;align-items:flex-start;gap:4px;margin-block-start:10px;margin-block-end:20px;
padding-block:6px !important;padding-inline-start:14px !important;border-style:dashed;border-width:1px;
border-color:#969696;border-radius:6px}.fold-c-page a{padding:4px 6px;padding-inline-start:14px;position:relative;
color:#468398;transition:all 0.2s}@media (max-width:600px){li.activity.folder>.fold-c-page{
padding:6px 12px !important}}.fold-c-page a:hover{padding-inline-start:20px;color:#187dcb}.fold-c-page a::before{
content:'';position:absolute;height:4px;width:4px;border-radius:4px;background-color:#468398;top:calc(50% - 2px);
left:0}.fold-c-page a:hover::before{background-color:#187dcb}div a.btn-c-expand{border-style:solid;border-width:1px;
padding:2px 12px;border-radius:16px;font-size:12px;transform:translateY(10%);margin-inline-start:16px;user-select:none;
white-space:nowrap;cursor:pointer}.frame-c-page{user-select:none;padding-block-start:10px !important;margin-block:
12px 36px}.frame-c-page iframe{width:100%;border:2px solid #e6e6e6;min-height:180px;border-radius:6px}
@media (orientation:portrait){.frame-c-page iframe{height:100vh;max-height:320px;min-height:100px}}
@media (orientation:landscape){.frame-c-page iframe{height:86vh;max-height:300px}}.sub-page-options{
margin-block-end:6px;display:flex;gap:10px}.sub-page-options div{border:1px solid #e3e3e3;border-radius:4px;padding:
4px 18px;cursor:pointer;background-color:white;color:#b8b8b8;transition:all 0.3s}.sub-page-options div:hover{color:
#454545;border-color:#bbbbbb;background-color:#dbdbdb}
a.btn-c-e-url{border-color:#c8c8c8;color:#a1a1a1;background-color:transparent}
a.btn-c-e-url:hover{border-color:#999999;color:#6e6e6e;background-color:#d8d8d8}
a.btn-c-e-fol{border-color:#3f737b;color:#3f737b;background-color:transparent}
a.btn-c-e-fol:hover{background-color:#3f737b;color:white}
a.btn-c-e-act{border-color:#aab2ed;color:#707794;background-color:#f5f7ff}
a.btn-c-e-act:hover{border-color:#707bce;color:#3a3685;background-color:#d9eefd}`
        setStyle(cssFoldersLinksAuto, 'css-auto-pages')
        let linksPages = $$('a[href*="/mod/folder/"],a[href*="/mod/url/"],a[href*="/mod/assign/"]')
        linksPages.forEach(function(a) {
          if (a.closest('.block_tree')) {
            return false
          }
          let btn = $n('a', 'class::btn-c-expand')
          a.parentNode.appendChild(btn)
          if (a.href.includes('/folder/')) {
            btn.innerText = 'Mostrar'
            btn.classList.add('btn-c-e-fol')
            btn.addEventListener('click', function() {
              if (btn.innerText == 'Mostrar') {
                btn.innerText = 'Ocultar'
                let p = a.closest('li')
                let folR = $n('div', 'class::fold-c-page', 'Cargando...', p)
                fetch(a.href).then(function(r) {
                  r.text().then(function(t) {
                    let h = t
                    let tit = h.match(/<title>.+<\/title>/)
                    tit = tit ? tit[0].slice(7, -8): '-'
                    h = h.substring(h.indexOf('<div id="folder_tree'), h.indexOf('folderbuttons">'))
                    h = h.substring(0, h.lastIndexOf('</div><div'))
                    let e = $n('div', '', 'html:' + h)
                    let data = {'list': [], 'title': tit}
                    e.qsa('.fp-filename-icon a')
                      .forEach(function(i) {data.list.push(
                        {'href': i.href.replace(/\?force.+/, ''), 'text': i.innerText.trim()}
                      )})
                    folR.innerHTML = ''
                    data.list.forEach(function(link) {
                      $n('a', 'targe::_blank,,href::' + link.href, link.text, folR)
                    })
                  })
                })
                .catch(function(e) {
                  folR.innerText = 'Error al cargar el contenido'
                })
              } else {
                let fCont = a.closest('li').qsf('.fold-c-page')
                if (btn.innerText == 'Ocultar') {
                  btn.innerText = 'Ver'
                  fCont.style.display = 'none'
                } else {
                  btn.innerText = 'Ocultar'
                  fCont.style.display = ''
                }
              }
            })
          }
          if (a.href.includes('/url/')) {
            btn.innerText = 'Ver enlace'
            btn.classList.add('btn-c-e-url')
            btn.addEventListener('click', function() {
              if (!btn.hasAttribute('href')) {
                btn.innerText = 'Cargando...'
                function errorLink() {
                  btn.innerText = 'Error: no se pudo cargar el enlace'
                  setTimeout(function() {
                    btn.remove()
                  }, 2e3)
                }
                fetch(a.href).then(function(r) {
                  r.text().then(function(t) {
                    let h = t
                    h = h.substring(h.indexOf('id="region-main') - 9, h.indexOf('<aside'))
                    h = h.replaceAll('\n', '')
                    let e = $n('div', '', 'html:' + h)
                    let link = e.qsf('#region-main .urlworkaround a')
                    if (!link) {
                      link = e.qsf('.resourcecontent iframe')
                    }
                    let srcOut = ''
                    if (link.tagName == 'A') {
                      srcOut = link.href
                    } else {
                      srcOut = link.src
                    }
                    if (srcOut) {
                      btn.innerText = srcOut.substring(0, 40) + (srcOut.length > 40 ? '...' : '')
                      btn.title = srcOut
                      btn.href = srcOut
                      btn.setAttribute('target', '_blank')
                    } else {
                      errorLink()
                    }
                  })
                })
                .catch(function() {
                  errorLink()
                })
              }
            })
          }
          if (a.href.includes('/assign/')) {
            btn.innerText = 'Ver actividad'
            btn.classList.add('btn-c-e-act')
            btn.addEventListener('click', function() {
              if (btn.innerText.toLocaleLowerCase().includes('actividad')) {
                let p = a.closest('li')
                let contFrm = $n('div', 'class::frame-c-page')
                let frm = $n('iframe', 'src::' + a.href + '&preview=1')
                let menu_opsrHL = /*html*/ `<div>Recargar</div><div>-</div><div>+</div>`
                let menu_opts = $n('div', 'class::sub-page-options', 'html:' + menu_opsrHL)
                let mo = {c: menu_opts.children}
                mo.r = mo.c[0], mo.m = mo.c[1], mo.a = mo.c[2]
                mo.r.addEventListener('click', function() {
                  frm.removeAttribute('src')
                  setTimeout(function() {frm.src = a.href + '&preview=1'}, 5e2)
                })
                function changeHeight(increment) {
                  let nr = (frm.clientHeight + increment) + 'px !important'
                  frm.setAttribute('style' , `max-height:${nr};height:${nr}`)
                }
                let countBack, countRun =  false
                function startChange(val) {
                  countRun = true
                  countBack = setInterval(function() {changeHeight(val)}, 40)
                }
                function stopChange() {if(countRun) {clearInterval(countBack);countRun = false}}
                let ea = 'mousedown,touchstart'
                let ez = 'mouseup,mouseout,touchend,touchcancel,blur'
                ea.split(',').forEach(function(en) {
                  mo.m.addEventListener(en, function() {startChange(-3)})
                  mo.a.addEventListener(en, function() {startChange(3)})
                })
                ez.split(',').forEach(function(en) {
                  mo.m.addEventListener(en, stopChange)
                  mo.a.addEventListener(en, stopChange)
                })
                contFrm.appendChild(menu_opts)
                contFrm.appendChild(frm)
                p.appendChild(contFrm)
                injJSFr()
                btn.innerText = 'Cerrar'
              } else {
                let contF = a.closest('li').qsf('.frame-c-page')
                contF && (contF.remove())
                btn.innerText = 'Ver actividad'
              }
            })
          }
        })
      }, 50)
    })
    // ---- ---- FORMAT PAGE TO SIMPLE ASSINGN
    atDomReady('ls_av.assign', function() {
      let cssMinAssign = /*css*/ `[h_],#page-footer{display:none}.back-to-top{display:none !important}div#wrapper{
width:100%;border-top:none}div#page{padding:0}body{background-image:none;padding-inline:0px !important}@media (
min-height:500px){body{padding-bottom:60px !important;padding-top:15px !important}}div#page-header-nav,
header#page-header{display:none}tr.ygtvrow .ygtvcell{background-image:none}@media (max-height:500px)
{div .submissionstatustable,div .feedback{margin-bottom:26px !important}}.submissionstatustable{margin-bottom:0}
.feedback h3,.submissionstatustable h3{margin-top:26px;font-size:18px;padding-left:12px;line-height:1.2;color:
#a1a1a1}.feedbacktable,.submissionsummarytable{margin-block-start:0;padding-block:0 !important}th.cell.c0{padding-left:
12px}.generaltable{margin:0}.czoom{opacity:.14;display:flex;align-items:center;position:fixed;transform-origin:
bottom right;transition:opacity .3s;bottom:18px;right:18px}.czoom:hover{opacity:.9}.czoom *{
user-select:none;border-color:#c2c2c2;border-width:1px;border-style:solid;height:2.6rem;cursor:pointer;
background-color:#f3f3f3;margin:0;line-height:2.6rem;display:flex;align-items:center;justify-content:center;
box-shadow:none;box-sizing:border-box}.czoom span{width:3.4rem;color:black;border-inline:none;
font-size:14px}.czoom .btm{transition:all 0.3s;color:#9e9e9e;font-weight:bold;font-size:20px;
width:2.8rem}.czoom .btm:not(.ne):hover{background-color:#c5c5c5;color:black !important}.czoom .btm.m{border-radius:
30px 0 0 30px;padding-left:4px}.czoom .btm.a{border-radius:0 30px 30px 0;padding-right:4px}.czoom .btm.ne{
cursor:not-allowed;color:#d3d3d3}body::-webkit-scrollbar{width:10px;height:10px;background-color:#f1f1f1}
body::-webkit-scrollbar-corner{background-color:#f1f1f1}body::-webkit-scrollbar-thumb{background-color:#a8a8a830;
border:3px solid #f1f1f1;border-radius:8px}body:hover::-webkit-scrollbar-thumb{background-color:#c5c5c5}
body::-webkit-scrollbar-thumb:hover{background-color:#9e9e9e}body::-webkit-scrollbar-thumb:active{
background-color:#828282}div#intro{padding: 0px 10px !important}`
      setStyle(cssMinAssign, 'css-mini-assign')
      $$('body *').forEach(function(e) {
        e.removeAttribute('h_')
        let qS = '.submissionstatustable'
        let qF = '.feedback'
        let qA = '#intro'
        if (!e.qsf(`${qS},${qF},${qA}`) && !e.closest(qS) && !e.closest(qF) && !e.closest(qA)
        && !e.classList.contains(qS) && !e.classList.contains(qF) && !e.getAttribute('id', qA.slice(1))) {
          e.setAttribute('h_', '')
        }
      })
      let czoomrHL = '<div class="btm m">-</div><span class="i">90</span><div class="btm a">+</div>'
      let czoom = $n('div', 'class::czoom', 'html:' + czoomrHL)
      let itms = {
        m: czoom.qsf('.btm.m'),
        a: czoom.qsf('.btm.a'),
        s: czoom.qsf('.i')
      }
      let zoomv = 90, stepCh = 5
      function setZoom(val) {
        val > 150 ? (zoomv = val = 150, itms.a.classList.add('ne')) :itms.a.classList.remove('ne')
        val < 60 ? (zoomv = val = 60, itms.m.classList.add('ne')) :itms.m.classList.remove('ne')
        let fs = Math.round((1 / val * 100) * 1e3) / 1e3
        czoom.style.transform = `scale(${fs})`
        let fsP = Math.round(1 / val * 18 * 100)
        czoom.style.right = `${fsP}px`
        czoom.style.bottom = `${fsP}px`
        document.body.style.zoom = val / 100
        zoomv == 60 || zoomv == 150 ? itms.s.style.color='#adadad' : itms.s.style.color= ''
        itms.s.innerText = val
      }
      setZoom(zoomv)
      itms.m.addEventListener('click', function() {zoomv -= stepCh;setZoom(zoomv)})
      itms.a.addEventListener('click', function() {zoomv += stepCh;setZoom(zoomv)})
      itms.s.addEventListener('dblclick', function() {zoomv = 90;setZoom(zoomv)})
      document.body.appendChild(czoom)

    }, new URLSearchParams(location.search).get('preview'))
    // ---- ---- FOR PREVENT LOAD YOUTUBE VIDEOS FRAMES
    atDomReady('ls_anuncios', function() {
      let ifp = setInterval(function() {
        if (tml(10) || $('.part1')) {
          clearInterval(ifp)
          let page = $('.part1')
          if (page) {
            let css1 = /*css*/`button.toggStyles{cursor:pointer;position:fixed;left:40px;bottom:50px;
font-size:14px;z-index:1000;transition:all 0.3s;font-family:system-ui,sans-serif;padding:8px 12px;
border-width:2px;border-style:solid;border-color:#cecece;opacity:0.2;border-radius:6px;color:#454545;
box-shadow:0px 4px 10px -1px #00000045}button.toggStyles:hover{
border-color:#9b9b9b;opacity:1}a.vid-card img{max-width:100%}`
            let css2 = /*css*/`body{padding:0 8px}.part1 center img{max-width:600px !important;width:100% !important}
a:not(.vid-card) img{outline-width:0;outline-style:solid;outline-color:#13a3f74f;transition:outline-width 0.3s}
a:not(.vid-card):hover img{outline-width:6px;box-shadow:0px 0px 11px 2px #00000059}
.card-video{height:329px;display:flex;justify-content:center;background-color:#e8ebf1}
@media (min-width:800px){.card-video{border-left:4px solid red}}
@media (max-width:608px){.card-video{height:53vw}}
.vid-card{height:100%;display:flex;max-height:inherit;border-width:4px;border-radius:0px;border-color:#f28a8a;
border-style:solid;transition:all 0.2s;overflow:hidden;position:relative;box-sizing:border-box;width:600px}
.vid-card:hover{border-color:red}
.vid-card img{transition:all 0.3s;object-fit:cover;width:100%}
.vid-card:hover img{transform:scale(1.025) rotate(0.3deg)}
a.vid-card:after{content:"";height:0;width:0;position:absolute;top:50%;left:50%;transform:translate(-20%, -50%);
border-color:transparent;border-style:solid;border-width:22px 46px;border-left-color:white;
filter:drop-shadow(0px 2px 28px #000000ef);transition:all 0.2s}a.vid-card:hover:after{border-left-color:red}
.note-upv{text-align:center;font-family:sans-serif;color:#bdbdbd;font-size:14px;font-weight:bold;
margin-block-start:18px;margin-block-end:52px;user-select:none}
center{font-family:system-ui,sans-serif}center a{text-decoration:none}
*::-webkit-scrollbar{width:14px}*::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, 0.18);
background-clip:padding-box;border:2px solid rgba(0, 0, 0, 0)}
*::-webkit-scrollbar-thumb:hover{background-color:rgba(0, 0, 0, 0.22);border:0 solid rgba(0, 0, 0, 0)}
*::-webkit-scrollbar-thumb:active{background-color:rgba(0, 0, 0, 0.29)}
.toggStyles{border-color:#cd2d21 !important}`
            setStyle(css1, 'css-main-ads')
            noterHL = '<style>' + css2 + '</style><div class="note-upv">STOP LOAD VIDEOS</div>'
            let note = $n('div', '', 'html:' + noterHL)
            page.insertBefore(note, page.children[0])
            setTimeout(function() {
              let b = $n('button', 'class::toggStyles', 'Resturar vista')
              b.addEventListener('click', function() {
                let s = note.qsf('style')
                s.innerHTML = s.innerHTML != '' ? '' : css2
              })
              document.body.appendChild(b)
            }, 50)
            let countFrames = 0
            logytframes = ''
            $$('iframe[src*=youtube]').forEach(function(ifr, ord) {
              countFrames++
              let idSrc = ifr.getAttribute('src')
              idSrc = idSrc.split('embed/')[1]
              idSrc = idSrc.replaceAll('/', '')
              let p = ifr.parentNode
              logytframes += `> Replace YouTube iframe ${ord + 1}\n\t(https://wwww.youtu.be/${idSrc})\n\n`
              let block = `<div class="card-video"><a class="vid-card" href="//youtu.be/${idSrc}"target="_blank"></a></div>`
              p.classList.remove('facebook-responsive')
              p.innerHTML = block
              let imgThumb = $n('img')
              let srcTried = `//img.youtube.com/vi/${idSrc}/maxresdefault.jpg`
              let mImg = new Image()
              mImg.addEventListener('load', function() {
                if (mImg.height < 100) {
                  imgThumb.src = srcTried.replace('maxresdefault', 'hqdefault')
                } else {
                  imgThumb.src = srcTried
                }
                p.qsf('a').appendChild(imgThumb)
              })
              mImg.src = srcTried
            })
            if (top == self) {
              clog(logytframes)
            } else {
              clog('> Stop load ' + countFrames + ' videos')
            }
            if (countFrames) {
              runOrwait(msgUI_show, 'Agilizando sitio...', 'yellow', false, 3)
              setTimeout(function() {
                runOrwait(
                  msgUI.show,
                  'Se detuvo la carga de ' + countFrames + ' videos que ralentizaban el sitio',
                  'green', false, 4
                )
              }, 3e3)
            }
          }
        }
      }, 1e3)
    })
    // ---- ---- EXTENAL LINKS
    if (top != self) {
      function insLiks() {
        $$('a').forEach(function(a) {
          let h = a.getAttribute('href') || ''
          if (h) {
            if (h.startsWith('//') || h.startsWith('http')) {
              if (!h.includes(cSite['d'])) {
                a.setAttribute('target', '_blank')
              }
            }
          }
        })
      }
      atDomReady(true, function() { insLiks() })
      onlyAtLoad(true, function() {
        insLiks()
        window.addEventListener('click', insLiks)
        window.addEventListener('touchstart', insLiks)
      })
    }
    // ---- ---- AUXILIARY CONS DEBUG
    let loadedJSIns = false
    onlyAtLoad(true, function() {
      let ccount = 0, timeLtClick = 0
      function countClicks() {
        const cTime = new Date * 1
        if (cTime - timeLtClick > 300) {
          ccount = 0
        }
        ccount++
        timeLtClick = cTime
        if (ccount === 10 && !loadedJSIns && typeof (eruda) == 'undefined') {
          let p = toastMSG(':¿Abrir consola de depuración?<a>Sí</a>', '', 2e3)
          p[0].addEventListener('click', function() {
            let s = $n('script', 'src:://cdn.jsdelivr.net/npm/eruda', '', 'ddbb')
            s.addEventListener('load', function() {
              loadedJSIns = true
              if (typeof eruda == 'object') {
                eruda.init()
              } else {
                toastMSG('Eruda charged, but did not declare', 'btnc:OK', 5e3)
              }
            })
          })
          ccount = 0
        }
      }
      document.addEventListener('click', countClicks)
    })
    console.groupCollapsed((locSite != '' ? '+' : '-') + ' RUN CUP SUCCESSFULLY! (' + CUPvS + ')')
    clog('URL: ' + loc.href), clog('SubFrame: ' + (top != self))
    clog('ID: ' + (locSite != '' ? locSite : '_EMPTY_'))
    clog('M: ' + um + ', V: ' + CUPvS + ', mV: '  + (window.__CUPmV || '-'))
    console.groupEnd()
  }
})()