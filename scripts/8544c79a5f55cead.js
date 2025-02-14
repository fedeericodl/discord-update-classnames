"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["13474"],{565568:function(e,t,r){r(250668)("Uint16",function(e){return function(t,r,n){return e(this,t,r,n)}})},597846:function(e,t,r){r.d(t,{z:()=>c});var n=r(200651),a=r(192379),i=r(658312),l=r(503082);let u={minInterval:1e3/60},c=e=>{let{drawCallback:t,size:r,fps:c=60,useOffscreen:s=!0,playing:o=!0,useClockOptions:d={}}=e,f=a.useMemo(()=>Object.assign({minInterval:1e3/c},u,d),[c,d]),m=a.useRef(null),p=a.useRef();a.useEffect(()=>{null!=p.current&&r.w>0&&r.h>0&&p.current.setSize(r)},[r]),a.useEffect(()=>{if(null!=m.current){let e=new l.Z(m.current);p.current=e,s&&e.setupOffscreenCanvas()}},[m,s,r]);let{ticking:h,stop:y,reset:v}=(0,i.Z)(e=>{if(null!=p.current){let{width:r,height:n}=p.current.canvas;p.current.clearRect({x:0,y:0,w:r,h:n}),t(p.current,e/1e3)}},f);return a.useEffect(()=>{o&&!h.current&&v(),o||y()},[o,v,y,h]),(0,n.jsx)("div",{children:(0,n.jsx)("canvas",{ref:m})})}},258340:function(e,t,r){r.d(t,{Z:()=>p}),r(47120),r(518263),r(970173),r(520712),r(268111),r(941497),r(32026),r(480839),r(744285),r(492257),r(873817),r(565568);var n=r(192379),a=r(392711),i=r(633302),l=r(960048),u=r(709054),c=r(693824);let s=e=>Math.round(4*e)/4,o=e=>{let[t,r]=n.useState({y:.9*e.h,x:.3*e.w}),[a,i]=n.useState(1400),[l,u]=n.useState(.94),[c,s]=n.useState(110),[o,d]=n.useState(30),[f,m]=n.useState(900),[p,h]=n.useState(60);n.useEffect(()=>{r({y:.9*e.h,x:.3*e.w})},[e.h,e.w]);let y=n.useCallback(()=>{let e,t;return 60===p?h(()=>45):(d(t=>null!=(e=Math.max(3,Math.floor(.75*t)))?e:t),m(e=>null!=(t=Math.max(6,Math.floor(.8*e)))?t:e),null!=e&&e<16.875&&h(()=>28)),!0},[p,30]);return{SPEED:t,GRAVITY:a,DRAG:l,Y_POS:c,PARTICLES_PER_EMISSION:o,MAX_PARTICLES:f,tickRate:1e3/p,improvePerformance:y}},d=()=>{let e=Math.random();return e<.15?(0,a.random)(.8,1):e<.8?(0,a.random)(1,1.3):(0,a.random)(1.3,1.75)},f=(e,t)=>e.position.y>t.h||e.position.x<-128||e.position.x>t.w,m=e=>{let t=e.particles.current,r=e.particleStates.current;e.sortedParticles.current.sort((e,n)=>{let a=r[e],i=r[n];return a!==i?a-i:1===a?t[e].scale-t[n].scale:0})},p=e=>{let{SPEED:t,GRAVITY:r,DRAG:p,Y_POS:h,PARTICLES_PER_EMISSION:y,MAX_PARTICLES:v,tickRate:w,improvePerformance:x}=o(e),E={particles:n.useRef(Array(v)),particleStates:n.useRef(new Uint8Array(v)),sortedParticles:n.useRef(new Uint16Array(Array.from({length:v},(e,t)=>t))),freeParticles:n.useRef(v),activeParticles:n.useRef(0)},S=n.useRef(!1);return{update:t=>{if(0===E.activeParticles.current)return;let n=E.particleStates.current,a=E.particles.current;for(let i=0;i<v;i++){if(0===n[i])continue;let l=a[i];l.position.x-=l.velocity.x*t,l.position.y-=l.velocity.y*t,l.velocity.x*=p**t,l.velocity.y*=p**t,l.rotation+=l.angularVelocity*t,l.velocity.y-=r*t,f(l,e)&&(E.particleStates.current[i]=0,E.activeParticles.current-=1,E.freeParticles.current+=1)}0===E.activeParticles.current&&(S.current=!1)},draw:t=>{if(t.clearRect({x:0,y:0,w:e.w,h:e.h}),0===E.activeParticles.current)return;let r=E.particleStates.current,n=E.particles.current,a=E.sortedParticles.current;for(let e=0;e<v;e++){var u;let o=a[e];if(0===r[o])continue;let d=n[o];if(null==d)continue;let{x:f,y:m}=d.position,{scale:p}=d;if(p>=1.3&&t.setFilter({blur:s((d.scale-1)*3)}),p>=1.3&&(p=p**2),null===(u=t.assetMap)||void 0===u?void 0:u.has(d.key)){let e={w:32*p,h:32*p},r={x:f+e.w/2,y:m+e.h/2};t.rotateAroundOriginAndDraw(r,d.rotation,()=>t.drawImage(d.key,{x:0,y:0},e,{fillMode:c.JU.Contain}))}else{let e=i.ZP.contentHasUnicodeOrEmoji(d.key),r=24*d.scale,n={x:f+r/2,y:m+r/2};null!=e?(t.setFont({size:r}),t.rotateAroundOriginAndDraw(n,d.rotation,()=>t.drawText(d.key,{x:0,y:0}))):(t.setFont({size:r}),t.rotateAroundOriginAndDraw(n,d.rotation,()=>t.drawText("\uD83C\uDF89",{x:0,y:0})),l.Z.captureMessage("Simple Confetti couldn't trigger explosion for ".concat(d.key,".  It doesn't have an image and seemingly isn't a valid unicode emoji.")))}t.setFilter({blur:0})}},emit:(r,n)=>{if(u.default.isProbablyAValidSnowflake(r),E.freeParticles.current<y/2)return;let i=0===n.x&&0===n.y&&0===n.w&&0===n.h,l={min:e.h/8,max:e.h/3},c=n.y<.66*e.h?Math.max(.2,n.y/(.66*e.h)):1,s=1+(1-c);for(let u=0;u<y;u++){let u,o;u=i?{x:(0,a.random)(-t.x,t.x,!0),y:t.y+(0,a.random)(-l.min,l.max,!0)}:{x:(0,a.random)(-t.x*s,t.x*s,!0),y:t.y*c+(0,a.random)(-l.min,l.max,!0)};let f=(0,a.random)(0,30),p=Math.atan2(-t.y-(0,a.random)(-l.min,l.max,!0),(0,a.random)(-t.x,t.x,!0))*(0,a.random)(-50,50);if(i)o={x:e.w/2+(0,a.random)(-50,50),y:e.h-h+(0,a.random)(-50,50)};else{let e=n.h/4,t=n.h/4;o={x:n.x+n.w/2+(0,a.random)(-t,t),y:n.y+n.h/2+(0,a.random)(-e,e)}}for(let e=0;e<v;e+=1)if(0===E.particleStates.current[e]){E.particles.current[e]={key:r,position:o,velocity:u,scale:d(),rotation:f,angularVelocity:p},E.particleStates.current[e]=1,E.freeParticles.current-=1,E.activeParticles.current+=1;break}m(E)}S.current=!0},tickRate:w,improvePerformance:x,shouldTick:S}}},420541:function(e,t,r){r.r(t),r.d(t,{default:()=>f});var n=r(200651),a=r(192379),i=r(597846),l=r(885006),u=r(111810),c=r(317568),s=r(516604),o=r(118013);let d=()=>{let e=(0,l.Z)(),t=a.useMemo(()=>({w:e.width,h:e.height}),[e]),r=(0,s.Z)(t);return(0,c.Z)(),(0,n.jsx)("div",{className:o.canvasWrapper,id:"simple-confetti-canvas",children:(0,n.jsx)(i.z,{playing:r.playing,size:t,useClockOptions:{minInterval:r.tickRate,droppedFramesCallbackThreshold:10,droppedFramesResetTime:2e3,droppedFramesCallback:r.improvePerformance},drawCallback:(e,t)=>{r.update(t),r.draw(e)}})})},f=()=>(0,u.kf)("ConfettiCanvasComponent")?(0,n.jsx)(d,{}):null},317568:function(e,t,r){r.d(t,{Z:()=>u});var n=r(192379),a=r(442837),i=r(570140),l=r(451478);let u=()=>{let e=(0,a.e7)([l.Z],()=>l.Z.isFocused());n.useEffect(()=>{e||i.Z.dispatch({type:"POTIONS_SET_CONFETTI_MODE",enabled:!1})},[e])}},516604:function(e,t,r){r.d(t,{Z:()=>o}),r(47120);var n=r(192379),a=r(570140),i=r(4646),l=r(258340),u=r(768581),c=r(176354),s=r(823961);let o=e=>{let{update:t,draw:r,emit:o,tickRate:d,improvePerformance:f,shouldTick:m}=(0,l.Z)(e),p=n.useMemo(()=>new i.ZP,[]),h=n.useCallback(e=>{e.assetMap=p,r(e)},[p,r]),[y,v]=n.useState(!1),w=n.useRef(),x=n.useRef(),E=n.useRef(s.Z.lastConfetti);return n.useEffect(()=>{async function e(e){var t;let{emoji:r,boundingRect:n}=e,i=null!==(t=r.id)&&void 0!==t?t:r.name,l=null==r.id?c.ZP.getURL(r.name):u.ZP.getEmojiURL({id:r.id,animated:!1,size:64,forcePNG:!0});await p.loadRemoteImage(i,l),o(i,n),v(!0),null!=x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{var e;let t=null===(e=s.Z.lastConfetti)||void 0===e?void 0:e.triggerTime;(null==t||Date.now()-t>2500)&&a.Z.dispatch({type:"POTIONS_SET_CONFETTI_MODE",enabled:!1})},2500)}let t=E.current;return null!=t&&(E.current=void 0,e(t)),a.Z.subscribe("POTIONS_TRIGGER_MESSAGE_CONFETTI",e),()=>a.Z.unsubscribe("POTIONS_TRIGGER_MESSAGE_CONFETTI",e)},[p,o]),n.useEffect(()=>()=>{null!=x.current&&(a.Z.dispatch({type:"POTIONS_SET_CONFETTI_MODE",enabled:!1}),clearTimeout(x.current))},[]),n.useEffect(()=>{let e=()=>{m.current?w.current=setTimeout(e,1e3):(v(!1),w.current=null)};return w.current=setTimeout(e,1e3),()=>{null!=w.current&&(a.Z.dispatch({type:"POTIONS_SET_CONFETTI_MODE",enabled:!1}),clearTimeout(w.current))}},[y,m]),{update:t,draw:h,tickRate:d,improvePerformance:f,playing:y}}},885006:function(e,t,r){r.d(t,{Z:()=>a}),r(47120);var n=r(192379);function a(){var e,t;let[r,a]=n.useState({width:null!==(e=window.innerWidth)&&void 0!==e?e:1080,height:null!==(t=window.innerHeight)&&void 0!==t?t:1080});return n.useLayoutEffect(()=>{function e(){a({width:window.innerWidth,height:window.innerHeight})}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),r}},118013:function(e,t,r){e.exports={canvasWrapper:"canvasWrapper_f7aebd"}}}]);
//# sourceMappingURL=8544c79a5f55cead.js.map