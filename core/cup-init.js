(function() {
  if (!location.host.endsWith('usat.edu.pe')) return!1
  if (window.__readyCUP) return!1
  if (!document.contentType.includes('html')) return!1
  let bh = '//coppernicous.github.io/hcu-pro/core/'
  function gtv(itval) {
    itval = itval * 6e4
    let now = new Date(), c = 0
    let tbP = new Date(localStorage['cup-rrt'] * 1 || new Date() * 1)
    if (itval < 60 * 6e4) {
        tbP.setHours(tbP.getHours(), 0, 0, 0)
    } else {
      tbP.setHours(0, 0, 0, 0)
      if (itval > 1440 * 6e4) {
        tbP.setDate(1)
        tbP.setHours(0, 0, 0, 0)
      }
    }
    while (now * 1 - tbP * 1 > itval && c < 1000) {
      c++
      tbP = new Date(tbP * 1 + itval)
    }
    return tbP
  }
  function aj() {
    let lt = gtv(localStorage['cup-iup'] * 1 || 60) * 1
    function ls(nm, ps, fn=[]) {
      let s = document.createElement('script')
      s.src = nm.startsWith('//') ? nm : bh + nm + '?' + ps
      if (fn.length == 2) { s.addEventListener(fn[0], fn[1]) }
      document.head.appendChild(s)
    }
    if (localStorage['cup-dvm'] == '1') {
      ls('//cdn.jsdelivr.net/npm/eruda', '', ['load', function() { eruda.init() }])
    }
    window.__CUPiT = lt
    ls('cup-v.js', lt, ['load', function() {
      localStorage['cup-rrt'] = Math.max(localStorage['cup-rrt'] * 1 || 0, window.__CUPiT)
      window.__CUPiT = localStorage['cup-rrt'] * 1
      localStorage['cup-rrv'] = Math.max(localStorage['cup-rrv'] * 1 || 0, window.__CUPvR)
      ls('cup-main.user.js', localStorage['cup-rrv'])
    }])
  }
  let is = setInterval(function() {
    document.head && ( clearInterval(is), aj() )
  }, 50)
})()