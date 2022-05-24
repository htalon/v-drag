/*!
 * v-drag v2.1.5
 * by Nil Vila and contributors
 */
function a(a,o,t="add"){a.forEach(a=>{document[t+"EventListener"](a,o)})}function o(a,o,t){return`matrix(${a||"1, 0, 0, 1,"} ${o}, ${t})`}function t(a,t){window.data.relativeX=window.data.mouseX*a,window.data.relativeY=window.data.mouseY*t,window.data.move.style.transform=o(window.data.matrix,window.data.matrixX+window.data.relativeX,window.data.matrixY+window.data.relativeY),(window.getSelection?window.getSelection():document.selection).empty()}const n={x(){t(!0,!1)},y(){t(!1,!0)},all(){t(!0,!0)}};function d(){n[window.data.axis](window.data),window.data.posAnimation=requestAnimationFrame(d)}function e(){window.data.move.classList.add(window.data.class.move),window.data.posAnimation=requestAnimationFrame(d),a(["mousemove","touchmove"],e,"remove")}function i(a,o){let t=Number(window.getComputedStyle(window.data.move)[o].replace("px",""));if("none"!==a){const n=a.match(/[0-9.-]+/g);t+=Number(n[8-o.length])}return t}function w(a,o,t){window.data.move.style.transform=a,window.data.move.style.left=o,window.data.move.style.top=t}function s(a){window.data.mouseX=(a.pageX||a.touches[0].pageX)-window.data.initialX,window.data.mouseY=(a.pageY||a.touches[0].pageY)-window.data.initialY}function l(t,n,d,l){window.data.grab=t,window.data.move=n,window.data.axis=d,window.data.initialX=l.pageX||l.touches[0].pageX,window.data.initialY=l.pageY||l.touches[0].pageY,window.data.relativeX=0,window.data.relativeY=0;const c=window.getComputedStyle(window.data.move).transform;window.data.matrix="none"!==c&&c.match(/\d([^,]*,){4}/g);const r=i(c,"left"),m=i(c,"top");w(o(window.data.matrix,r,m),0,0),window.data.matrixX=r,window.data.matrixY=m,window.data.grab.classList.add(window.data.class.down),a(["mousemove","touchmove"],s),a(["mousemove","touchmove"],e)}function c(){window.data.grab&&window.data.move&&(cancelAnimationFrame(window.data.posAnimation),a(["mousemove","touchmove"],e,"remove"),w(window.data.matrix?o(window.data.matrix,0,0):"none",window.data.matrixX+window.data.relativeX+"px",window.data.matrixY+window.data.relativeY+"px"),window.data.grab.classList.remove(window.data.class.down),window.data.move.classList.remove(window.data.class.move),a(["mousemove","touchmove"],s,"remove"))}function r(a){return!!["x","y","all"].includes(a)}function m(o,t){const n=t.value,d=n instanceof Object?n.handle:n;let e;e=n instanceof Object&&n.axis&&r(n.axis)?n.axis:r(t.arg)?t.arg:"all";const i=document.querySelectorAll(d);0!==i.length?(o.classList.add(window.data.class.usesHandle),i.forEach(a=>{a.classList.add(window.data.class.handle),a.onmousedown=t=>l(a,o,e,t),a.ontouchstart=t=>l(a,o,e,t)})):(o.onmousedown=a=>l(o,o,e,a),o.ontouchstart=a=>l(o,o,e,a)),o.classList.add(window.data.class.initial),a(["mouseup","touchend"],c)}var u={install(a,o){if(window.data={},window.data.class={initial:"drag-draggable",usesHandle:"drag-uses-handle",handle:"drag-handle",down:"drag-down",move:"drag-move"},o){const a=o.eventClass;Object.keys(a).forEach(o=>{a[o]&&(window.data.class[o]=a[o])})}const t=document.createElement("style");t.innerHTML=`.${window.data.class.initial}{position:relative;transition:none;}.${window.data.class.initial}:not(.${window.data.class.usesHandle}),.${window.data.class.handle}{cursor:move;cursor:grab;cursor:-webkit-grab;}.${window.data.class.handle}.${window.data.class.down},.${window.data.class.initial}:not(.${window.data.class.usesHandle}).${window.data.class.down}{z-index:999;cursor:grabbing;cursor:-webkit-grabbing;}`,document.body.appendChild(t),a.directive("drag",{mounted(a,o){m(a,o)},updated(a,o){a.onmousedown=null,a.ontouchstart=null;const t="object"==typeof o.oldValue?o.oldValue.handle:o.oldValue;document.querySelectorAll(t).forEach(o=>{o.onmousedown=null,o.ontouchstart=null,o.classList.remove(window.data.class.handle),a.classList.remove(window.data.class.usesHandle)}),m(a,o)}})}};export{u as default};
