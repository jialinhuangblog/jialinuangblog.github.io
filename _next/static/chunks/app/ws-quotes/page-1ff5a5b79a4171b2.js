(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8273],{2946:function(e,n,t){Promise.resolve().then(t.bind(t,5835))},5835:function(e,n,t){"use strict";t.d(n,{Symbols:function(){return y}});var r=t(5008),i=t(1595),l=t(2265),c=t(3146),o=t(6915),a=t(7648),s=t(8989),u=t(8826);function f(){let e=(0,r._)(["\n  0% {\n    background: transparent;\n  }\n  80% {\n    background: ",";\n  }\n  100% {\n    background: transparent;\n  }"]);return f=function(){return e},e}function d(){let e=(0,r._)(["\n        ",";\n        gap: 10px;\n      "]);return d=function(){return e},e}function p(){let e=(0,r._)(["\n            border: 1px solid var(--foreground);\n          "]);return p=function(){return e},e}function x(){let e=(0,r._)(["\n          text-decoration: none;\n          animation: "," 300ms linear forwards;\n          padding: 16px;\n          width: 200px;\n          border-radius: 8px;\n          border: 1px solid black;\n          ","\n        "]);return x=function(){return e},e}let v=(0,l.memo)(function(e){let{symbol:n}=e,[t,r]=(0,l.useState)(0),[,v]=function(e){let n=(0,l.useRef)(0),t=(0,l.useRef)(0),r=void 0===n.current;t.current!==e&&(n.current=t.current,t.current=e);let i=!r&&e>n.current,c=!r&&e<n.current,o=!r&&e===n.current;return[n.current,{isUp:i,isDown:c,isSame:o,noAnimate:r}]}(t),m=(0,l.useRef)(null);(0,l.useEffect)(()=>(m.current=new WebSocket("wss://stream.binance.com:9443/ws"),m.current.onopen=()=>{var e;let t={id:(0,s.randomBytes)(16).toString("hex"),method:"SUBSCRIBE",params:[n.toLowerCase()+"@aggTrade"]};null===(e=m.current)||void 0===e||e.send(JSON.stringify(t))},m.current.onmessage=e=>{let n=JSON.parse(e.data);1===n.id&&null===n.result?console.log("Subscription successful!"):"aggTrade"===n.e&&r(n.p)},m.current.onclose=()=>{console.log("Connection closed")},()=>{m.current&&m.current.close()}),[]);let w=(0,c.F4)(f(),v.isUp?"rgba(255, 99, 71, 0.3)":"rgba(144, 238, 144, 0.3)");return(0,i.tZ)("div",{css:(0,c.iv)(d(),o.f.wrap.allCenter),children:(0,i.BX)(a.default,{href:"./ws-quotes/".concat(n),css:(0,c.iv)(x(),w,(0,u.GA)((0,c.iv)(p()))),children:[(0,i.tZ)("h2",{children:n}),(0,i.tZ)("p",{children:t})]})})});function m(){let e=(0,r._)(["\n          align-content: inherit;\n        "]);return m=function(){return e},e}function w(){let e=(0,r._)(["\n        ","\n        gap: 8px;\n        height: 100vh;\n        width: 100vw;\n        margin: auto;\n        align-content: center;\n        padding: 16px;\n        ","\n      "]);return w=function(){return e},e}let y=(0,l.memo)(function(e){let{symbols:n}=e;return(0,i.tZ)("div",{css:(0,c.iv)(w(),o.f.wrap.allCenter,u.BC.mobile((0,c.iv)(m()))),children:n&&n.map(e=>(0,i.tZ)(v,{symbol:e},e))})})},8826:function(e,n,t){"use strict";t.d(n,{BC:function(){return i},GA:function(){return l}});var r=t(3146);let i={mobile:e=>(0,r.iv)("@media (max-width:",600,"px){",e,"}"),tablet:e=>(0,r.iv)("@media (max-width:",900,"px){",e,"}"),desktop:e=>(0,r.iv)("@media (max-width:",1024,"px){",e,"}")},l=e=>(0,r.iv)("@media (prefers-color-scheme:dark){",e,"}")},6915:function(e,n,t){"use strict";t.d(n,{f:function(){return Z},jc:function(){return u}});var r=t(3146);let i=(0,r.iv)("justify-content:space-between;"),l=(0,r.iv)("justify-content:space-around;"),c=(0,r.iv)("justify-content:space-evenly;"),o=(0,r.iv)("justify-content:flex-start;"),a=(0,r.iv)("justify-content:flex-end;"),s=(0,r.iv)("justify-content:stretch;"),u={spaceBetween:i,spaceAround:l,spaceEvenly:c,flexStart:o,flexEnd:a,center:(0,r.iv)("justify-content:center;"),stretch:s},f=(0,r.iv)("display:flex;flex-direction:row;"),d=(0,r.iv)("display:flex;flex-direction:column;"),p=(0,r.iv)("display:inline-flex;"),x=(0,r.iv)("display:inline-flex;flex-direction:row;align-items:center;justify-content:center;"),v=(0,r.iv)("display:inline-flex;flex-direction:row;justify-content:center;"),m=(0,r.iv)("display:inline-flex;flex-direction:row;align-items:center;"),w=(0,r.iv)("display:flex;flex-direction:row;align-items:center;justify-content:center;"),y=(0,r.iv)("display:flex;flex-direction:row;justify-content:center;"),g=(0,r.iv)("display:flex;flex-direction:row;align-items:center;"),h=(0,r.iv)("display:flex;flex-direction:column;align-items:center;justify-content:center;"),C=(0,r.iv)("display:flex;flex-direction:column;align-items:center;"),b=(0,r.iv)("display:flex;flex-direction:column;justify-content:center;"),j=(0,r.iv)("display:flex;flex-direction:row;flex-wrap:wrap;"),_=(0,r.iv)("display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center;"),k=(0,r.iv)("display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;"),S=(0,r.iv)("display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;"),B=(0,r.iv)("display:flex;flex-wrap:wrap;flex-direction:column;"),E=(0,r.iv)("display:flex;flex-wrap:wrap;flex-direction:column;justify-content:center;align-items:center;"),N=(0,r.iv)("display:flex;flex-wrap:wrap;flex-direction:column;align-items:center;"),Z={h:{default:f,allCenter:w,mainCenter:y,crossCenter:g},v:{default:d,allCenter:h,mainCenter:b,crossCenter:C},inline:{default:p,allCenter:x,mainCenter:v,crossCenter:m},wrap:{default:j,allCenter:_,mainCenter:S,crossCenter:k},verticalWrap:{default:B,allCenter:E,mainCenter:(0,r.iv)("display:flex;flex-wrap:wrap;flex-direction:column;justify-content:center;"),crossCenter:N}}}},function(e){e.O(0,[8218,9394,7648,4609,4123,2971,2117,1744],function(){return e(e.s=2946)}),_N_E=e.O()}]);