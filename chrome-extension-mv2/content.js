let s = document.createElement('script');
(function () {
  let ic = "\
  window.__CUPm = 'ce';\
  window.__CUPmV = 17.04;\
  //mV3: window.__CUPceTV = new Date(2024, 6, 15, 12, 20);"
  s.innerHTML = ic
})()
let is = setInterval(function () {
  if (document.head) {
    clearInterval(is)
    let sf = ['/', 'coppernicous.github.io', 'hcu-pro', '']
    let s = document.createElement('script')
    s.src = sf.join('/') + 'core/cup-init.js'
    s.addEventListener('error', function () {
      let n = document.createElement('div')
      n.classList.add('e-m-cup')
      let ch = `<div class="elcup">
              <div class="m">
                <div class="p">ERROR: No se pudo cargar Campus USAT PRO</div>
              </div>
              <div class="o">
                <a class="a bl" target="_blank" href="@URL">Saber más</a>
                <a class="a bc">Cerrar</a>
              </div>
              </div>
              <style>@CSS</style>`
      let cs = ''
      if (true) {
        cs = '.elcup{display:flex;flex-direction:column;margin:0 auto;\
  background-color:white;border:1px solid #c0c0c0;user-select:none;border-radius:\
  12px;overflow:hidden;box-shadow:0 4px 6px 0 #00000045;pointer-events:all}\
  .elcup *{font-family:system-ui;font-size:14px;line-height:1.4}.elcup .m,.elcup .o{\
  display:flex;align-items:stretch;justify-content:center}.e-m-cup{position:fixed;\
  display:flex;background-image:linear-gradient(0deg, #000000ab, transparent);left:0;\
  right:0;bottom:0;width:100%;padding:20px 10px 80px;z-index:99999999999;pointer-events:\
  none}.elcup .o .a{background-color:#ededed;color:#7f7f7f;padding:10px;flex:1;cursor:\
  pointer;transition:all 0.3s;text-align:center;text-decoration:none}.elcup .o .a:hover{\
  background-color:#c8c8c8;color:#393939}.elcup .p{padding:18px 14px;white-space:pre-line\
  }.elcup .o{background-color:#cbcbcb;gap:1px;border-top:1px solid #cbcbcb}'
      }
      n.innerHTML = ch.replace('@CSS', cs).replace('@URL', sf.join('/') + 'site/errcsp')
      document.body.appendChild(n)
      n.querySelector('.bc').addEventListener('click', function () {
        n.remove()
      })
    })
    document.head.appendChild(s)
  }
}, 50)