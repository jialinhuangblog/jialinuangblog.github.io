(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[463],{5333:function(e,t,n){Promise.resolve().then(n.bind(n,6064))},6064:function(e,t,n){"use strict";n.d(t,{default:function(){return b}});var r=n(5008),i=n(1595),l=n(3146),o=n(2265),c=n(6915),a=n(5206),s=n(8826),u=function(e,t){let n=e.replace("#",""),r=function(e,t,n){let r=Math.max(e/=255,t/=255,n/=255),i=Math.min(e,t,n),l=0,o,c=(r+i)/2;if(r===i)l=o=0;else{let a=r-i;switch(o=c>.5?a/(2-r-i):a/(r+i),r){case e:l=(t-n)/a+(t<n?6:0);break;case t:l=(n-e)/a+2;break;case n:l=(e-t)/a+4}l/=6}return[360*l,100*o,100*c]}(parseInt(n.substring(0,2),16),parseInt(n.substring(2,4),16),parseInt(n.substring(4,6),16));r[2]=Math.min(100,r[2]+t);let i=function(e,t,n){let r,i,l;if(e/=360,n/=100,0==(t/=100))r=i=l=n;else{let o=(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6)?e+(t-e)*6*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e,c=n<.5?n*(1+t):n+t-n*t,a=2*n-c;r=o(a,c,e+1/3),i=o(a,c,e),l=o(a,c,e-1/3)}return[Math.round(255*r),Math.round(255*i),Math.round(255*l)]}(r[0],r[1],r[2]);return"#".concat(i.map(e=>e.toString(16).padStart(2,"0")).join(""))};function f(){let e=(0,r._)(["\n          padding: 80px 16px;\n        "]);return f=function(){return e},e}function d(){let e=(0,r._)(["\n        width: 100vw;\n        overflow: auto;\n        padding: 80px 64px;\n        border-radius: 10px;\n        min-height: 100vh;\n        ","\n      "]);return d=function(){return e},e}function p(){let e=(0,r._)(["\n          position: relative;\n          padding: 0;\n        "]);return p=function(){return e},e}function v(){let e=(0,r._)(["\n                position: absolute;\n                width: 100%;\n                height: ","px;\n                z-index: ",";\n              "]);return v=function(){return e},e}function h(){let e=(0,r._)(["\n                    background-color: ",";\n                    box-shadow: 3px 4px 8px 2px ",";\n                  "]);return h=function(){return e},e}function m(){let e=(0,r._)(["\n                  display: ",";\n                  position: sticky;\n                  border-radius: 20px;\n                  height: ","px;\n                  top: ","px;\n                  border: ","px solid black;\n                  box-shadow: 3px 4px 3px 0px ",";\n                  background-color: ",";\n                  color: var(--background);\n                  ","\n                  padding: 16px;\n                  pre {\n                    font-size: 16px;\n                    overflow: auto;\n                  }\n                "]);return m=function(){return e},e}function x(){let e=(0,r._)(["\n                          color: var(--foreground);\n                        "]);return x=function(){return e},e}function y(){let e=(0,r._)(["\n                      height: 100%;\n                      ",";\n                      &,\n                      & a {\n                        color: var(--background);\n                        ","\n                      }\n                      font-size: 18px;\n                    "]);return y=function(){return e},e}function g(){let e=(0,r._)(["\n                      height: 100%;\n                      ",";\n                      font-size: 18px;\n                    "]);return g=function(){return e},e}let w=(0,o.memo)(function(e){let{}=e,t=a.rY.concat(["transparent"]);return(0,i.tZ)("div",{css:(0,l.iv)(d(),s.BC.mobile((0,l.iv)(f()))),children:(0,i.tZ)("div",{css:(0,l.iv)(p()),children:t.map((e,n)=>{let r=n===t.length-1,o=640+660*n+(r?-580:0),a=r?200:640,f=40*n;return(0,i.tZ)("div",{css:(0,l.iv)(v(),o,t.length-n),children:(0,i.tZ)("div",{css:(0,l.iv)(m(),r?"none":"inherit",a,f,r?0:4,e,e,(0,s.GA)((0,l.iv)(h(),u(e,20),u(e,20)))),children:n===t.length-2?(0,i.BX)("div",{css:(0,l.iv)(y(),c.f.v.allCenter,(0,s.GA)((0,l.iv)(x()))),children:["Inspired by"," ",(0,i.tZ)("a",{target:"_blank",href:"https://aws.amazon.com/serverless/?nc1=h_ls",children:"here"})]}):0===n?(0,i.tZ)("div",{css:(0,l.iv)(g(),c.f.v.allCenter),children:"Scroll down"}):(0,i.tZ)("pre",{children:"<div\n  key={color}\n  css={css\n    position: absolute;\n    width: 100%;\n    height: ".concat(o,"px;\n    z-index: ").concat(t.length-n,";\n  }\n>\n  <div\n    css={css\n      position: sticky;\n      border-radius: 20px;\n      height: ").concat(a,"px;\n      top: ").concat(f,"px;\n    }\n  >\n\n  </div>\n</div>")})})},e)})})})});c.f.h.allCenter;var b=w},8826:function(e,t,n){"use strict";n.d(t,{BC:function(){return i},GA:function(){return l}});var r=n(3146);let i={mobile:e=>(0,r.iv)("@media (max-width:",600,"px){",e,"}"),tablet:e=>(0,r.iv)("@media (max-width:",900,"px){",e,"}"),desktop:e=>(0,r.iv)("@media (max-width:",1024,"px){",e,"}")},l=e=>(0,r.iv)("@media (prefers-color-scheme:dark){",e,"}")},5206:function(e,t,n){"use strict";n.d(t,{a9:function(){return f},g5:function(){return v},kG:function(){return d},rY:function(){return p}});var r=n(1595),i=n(9654),l=n.n(i),o=n(6479),c=n.n(o),a=n(1273),s=n(2909),u=n(2768);let f=[{link:"./ws-quotes",title:"Realtime Quotes via webSocket (powered by ReactJs)"},{link:"https://jialin00.com/ng-chunks-chunks-chunks/",title:"My Tech skills (powered by Angular)"},{link:"https://aws.jialin00.com",title:"Serving your pages using S3, CloudFront and Route 53",hard:!0},{link:"/css-decode/firefox",title:"I Adore You, Firefox."},{link:"https://audio-editor-dnd.jialin00.com",title:"Audio Editor DND and scrolling sync"},{link:"/css-decode/stacked-cards",title:"Progressive Card Stack Scroll "},{link:"/html/z/frontend/angular-upgrade",title:"Rewriting Angular 10 Directly with Version 18"},{link:"/html/z/frontend/nextjs-cors",title:"Frontend Server-Side Calls and CORS"},{link:"/html/z/cloud/fargate-ecs-go-server",title:"Implementing a Go HTTP Server and Websocket with Fargate and ECR"},{link:"/html/z/network/loopback-localhost-anywhere",title:"loopback(127.0.0.1, ::1), localhost, and 0.0.0.0 in Local Development"}],d=[{link:"https://www.linkedin.com/in/jlhuangprogramming/",title:"Linkedin",hard:!0,icon:(0,r.tZ)(a.ltd,{})},{link:"https://github.com/jialinhuang00",title:"Github",hard:!0,icon:(0,r.tZ)(a.hJX,{})},{link:"/cv",title:"CV",icon:(0,r.tZ)(s.xxC,{})},{link:"https://www.credly.com/badges/a8f99d0f-58e1-4d16-b3d9-36822f482153/",title:"AWS Practitioner",hard:!0,icon:"/aws-badge.png"},{link:"mailto:linao264590000@gmail.com",title:"Mail: linao264590000@gmail.com",hard:!0,icon:(0,r.tZ)(u.GYo,{})}],p=["#9f58e0","#17b3fb","#f48f27","#fc44b2","#dcdc24","#1aea9d","#222222"],v={vt323:l(),merriweather:c()}},6915:function(e,t,n){"use strict";n.d(t,{f:function(){return N},jc:function(){return u}});var r=n(3146);let i=(0,r.iv)("justify-content:space-between;"),l=(0,r.iv)("justify-content:space-around;"),o=(0,r.iv)("justify-content:space-evenly;"),c=(0,r.iv)("justify-content:flex-start;"),a=(0,r.iv)("justify-content:flex-end;"),s=(0,r.iv)("justify-content:stretch;"),u={spaceBetween:i,spaceAround:l,spaceEvenly:o,flexStart:c,flexEnd:a,center:(0,r.iv)("justify-content:center;"),stretch:s},f=(0,r.iv)("display:flex;flex-direction:row;"),d=(0,r.iv)("display:flex;flex-direction:column;"),p=(0,r.iv)("display:inline-flex;"),v=(0,r.iv)("display:inline-flex;flex-direction:row;align-items:center;justify-content:center;"),h=(0,r.iv)("display:inline-flex;flex-direction:row;justify-content:center;"),m=(0,r.iv)("display:inline-flex;flex-direction:row;align-items:center;"),x=(0,r.iv)("display:flex;flex-direction:row;align-items:center;justify-content:center;"),y=(0,r.iv)("display:flex;flex-direction:row;justify-content:center;"),g=(0,r.iv)("display:flex;flex-direction:row;align-items:center;"),w=(0,r.iv)("display:flex;flex-direction:column;align-items:center;justify-content:center;"),b=(0,r.iv)("display:flex;flex-direction:column;align-items:center;"),k=(0,r.iv)("display:flex;flex-direction:column;justify-content:center;"),j=(0,r.iv)("display:flex;flex-direction:row;flex-wrap:wrap;"),_=(0,r.iv)("display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center;"),C=(0,r.iv)("display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;"),O=(0,r.iv)("display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;"),S=(0,r.iv)("display:flex;flex-wrap:wrap;flex-direction:column;"),P=(0,r.iv)("display:flex;flex-wrap:wrap;flex-direction:column;justify-content:center;align-items:center;"),E=(0,r.iv)("display:flex;flex-wrap:wrap;flex-direction:column;align-items:center;"),N={h:{default:f,allCenter:x,mainCenter:y,crossCenter:g},v:{default:d,allCenter:w,mainCenter:k,crossCenter:b},inline:{default:p,allCenter:v,mainCenter:h,crossCenter:m},wrap:{default:j,allCenter:_,mainCenter:O,crossCenter:C},verticalWrap:{default:S,allCenter:P,mainCenter:(0,r.iv)("display:flex;flex-wrap:wrap;flex-direction:column;justify-content:center;"),crossCenter:E}}},6479:function(e){e.exports={style:{fontFamily:"'__Merriweather_6c37aa', '__Merriweather_Fallback_6c37aa'",fontStyle:"normal"},className:"__className_6c37aa"}},9654:function(e){e.exports={style:{fontFamily:"'__VT323_f6b3a3', '__VT323_Fallback_f6b3a3'",fontWeight:400,fontStyle:"normal"},className:"__className_f6b3a3"}},6231:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(2265),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(i),o=["attr","size","title"];function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e){return t=>r.createElement(f,c({attr:s({},e.attr)},t),function e(t){return t&&t.map((t,n)=>r.createElement(t.tag,s({key:n},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var n,{attr:i,size:l,title:a}=e,u=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,o),f=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,u,{className:n,style:s(s({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),e.children)};return void 0!==l?r.createElement(l.Consumer,null,e=>t(e)):t(i)}}},function(e){e.O(0,[267,957,240,706,394,971,117,744],function(){return e(e.s=5333)}),_N_E=e.O()}]);