"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["31177"],{234888:function(e,t,a){a.d(t,{A:()=>r,i:()=>c});let c=3e4,r="Captcha"},644947:function(e,t,a){a.d(t,{Zq:()=>p,_8:()=>u,s$:()=>s}),a(47120);var c=a(15729),r=a(286379),o=a(731965),i=a(797614);let n=(0,c.U)(e=>({captchaServeVolume:{}}));function u(){return 0===Object.keys(n.getState().captchaServeVolume).length}function s(e){(0,o.j)(()=>{n.setState(t=>null==e?t:e in t.captchaServeVolume?{captchaServeVolume:{...t.captchaServeVolume,[e]:t.captchaServeVolume[e]+1}}:{captchaServeVolume:{...t.captchaServeVolume,[e]:1}})})}function p(){for(let[e,t]of Object.entries(n.getState().captchaServeVolume))i.Z.distribution({name:r.V.CAPTCHA_SERVE_VOLUME_DISTRIBUTION,tags:["user_flow:".concat(e)]},t,!0);(0,o.j)(()=>n.setState({captchaServeVolume:{}}))}},353250:function(e,t,a){a.r(t),a.d(t,{CaptchaError:()=>i,emitCaptchaDistributionMetric:()=>u,extractCaptchaPropsFromResponse:()=>n});var c,r=a(644947),o=a(234888),i=((c={}).CANCEL="cancel",c.ERROR="error",c.EXPIRED="expired",c);function n(e){var t;return{captchaService:e.captcha_service,sitekey:e.captcha_sitekey,options:{rqdata:e.captcha_rqdata,rqtoken:e.captcha_rqtoken,serveInvisible:null!==(t=e.should_serve_invisible)&&void 0!==t&&t,userflow:e.user_flow}}}function u(e){(0,r._8)()&&setTimeout(()=>(0,r.Zq)(),o.i),(0,r.s$)(e)}}}]);
//# sourceMappingURL=555245dfb68185de.js.map