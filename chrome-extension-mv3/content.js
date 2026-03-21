(function () {
    console.log("CUP PRO: Ejecutando en entorno:", chrome.runtime?.getURL ? "AISLADO" : "PRINCIPAL");

    if (!location.host.endsWith('usat.edu.pe') && !location.host.includes('github.io')) return;

    window.__CUPm = 'ce';
    window.__CUPmV = 18.20;

    const bh = 'https://coppernicous.github.io/hcu-pro/core/';
    function gtv(itval) {
        itval = itval * 6e4;
        let now = new Date(), c = 0;
        let tbP = new Date(localStorage['cup-rrt'] * 1 || new Date() * 1);
        if (itval < 60 * 6e4) {
            tbP.setHours(tbP.getHours(), 0, 0, 0);
        } else {
            tbP.setHours(0, 0, 0, 0);
            if (itval > 1440 * 6e4) {
                tbP.setDate(1);
                tbP.setHours(0, 0, 0, 0);
            }
        }
        while (now * 1 - tbP * 1 > itval && c < 1000) {
            c++;
            tbP = new Date(tbP * 1 + itval);
        }
        return tbP;
    }
    function aj() {
        let lt = gtv(localStorage['cup-iup'] * 1 || 60) * 1;

        function ls(nm, ps, callback) {
            let s = document.createElement('script');
            s.src = nm.startsWith('http') ? nm : bh + nm + '?' + ps;

            s.onload = () => {
                console.log(`CUP PRO: Script cargado con éxito: ${nm}`);
                if (callback) callback();
            };

            s.onerror = (e) => {
                console.error(`CUP PRO: Error cargando script: ${nm}`, e);
                showErrorUI(nm);
            };

            (document.head || document.documentElement).appendChild(s);
        }

        ls('cup-v.js', lt, function () {
            console.log("CUP PRO: Versión detectada:", window.__CUPvR);

            localStorage['cup-rrt'] = Math.max(localStorage['cup-rrt'] * 1 || 0, window.__CUPiT);
            window.__CUPiT = localStorage['cup-rrt'] * 1;

            let vR = window.__CUPvR || localStorage['cup-rrv'] || '0';
            localStorage['cup-rrv'] = vR;

            const mainScript = 'cup-main.user.js';

            // console.log(`CUP PRO: Intentando cargar el core desde: ${bh}${mainScript}?${vR}`);

            ls(mainScript, vR, function () {
                console.log("CUP PRO: Cargado correctamente");
            });
        });
    }

    function showErrorUI(scriptName) {
        const injectUI = () => {
            if (document.querySelector('.e-m-cup')) return;
            let n = document.createElement('div');
            document.body.appendChild(n);
        };

        if (document.body) {
            injectUI();
        } else {
            window.addEventListener('DOMContentLoaded', injectUI);
        }
    }

    if (document.head) {
        aj();
    } else {
        const observer = new MutationObserver(() => {
            if (document.head) {
                observer.disconnect();
                aj();
            }
        });
        observer.observe(document.documentElement, { childList: true });
    }
})();