"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["76815"],{617921:function(t){t.exports="/assets/8b51584a8a756996.svg"},832239:function(t,n,e){e.d(n,{JO:()=>s,KK:()=>u,Vp:()=>l,hW:()=>c,zu:()=>o});var i=e(544891),r=e(570140),a=e(981631);function s(){r.Z.dispatch({type:"VIBING_WUMPUS_PLAY_MUSIC"})}function o(){r.Z.dispatch({type:"VIBING_WUMPUS_STOP_MUSIC"})}function c(){r.Z.dispatch({type:"VIBING_WUMPUS_PAUSE_MUSIC"})}function l(t){return i.tn.del({url:a.ANM.DELETE_SAFETY_WARNINGS(t),rejectWithError:!1})}function u(t,n){return i.tn.post({url:a.ANM.ADD_SAFETY_WARNING(t),body:{safety_warning_type:n},rejectWithError:!1})}},407383:function(t,n,e){e.d(n,{G:()=>a,I:()=>s});var i,r,a=((i={}).PLAY="play",i.PAUSE="pause",i.BACK_TO_CONVERSATION="back_to_conversation",i),s=((r={}).INAPPROPRIATE_CONVERSATION="inappropriate_conversation",r.KEYBIND="keybind",r)},336977:function(t,n,e){e.d(n,{default:()=>C}),e(47120);var i=e(200651),r=e(192379),a=e(120356),s=e.n(a),o=e(399606),c=e(481060),l=e(607070),u=e(626135),_=e(832239),d=e(407383),N=e(981631),I=e(388032),x=e(673807),p=e(617921);function h(t){let{onClose:n,source:a=d.I.INAPPROPRIATE_CONVERSATION}=t,h=(0,o.e7)([l.Z],()=>l.Z.useReducedMotion),[C,A]=r.useState(!1);r.useEffect(()=>{let t=new Date;return u.default.track(N.rMx.VIBING_WUMPUS_VIEWED,{source:a}),(0,_.JO)(),()=>{u.default.track(N.rMx.VIBING_WUMPUS_CLOSED,{duration_open_ms:new Date().getTime()-t.getTime(),source:a}),(0,_.zu)()}},[a]);let S=()=>{C?((0,_.JO)(),u.default.track(N.rMx.VIBING_WUMPUS_ACTION,{action:d.G.PLAY})):((0,_.hW)(),u.default.track(N.rMx.VIBING_WUMPUS_ACTION,{action:d.G.PAUSE})),A(!C)};async function f(){let{default:t}=await e.e("29641").then(e.t.bind(e,937359,19));return t}return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:x.ringContainer,children:(0,i.jsx)("img",{src:p,alt:"",className:x.__invalid_ringArt})}),(0,i.jsx)(c.Fmz,{importData:f,shouldAnimate:!C&&!h,className:x.wumpus,pauseAtFrame:h?200:void 0}),(0,i.jsx)(c.ua7,{text:C?I.intl.string(I.t.RscU7O):I.intl.string(I.t.ZcgDJS),position:"top","aria-label":C?I.intl.string(I.t.RscU7O):I.intl.string(I.t.ZcgDJS),children:t=>(0,i.jsx)(c.P3F,{...t,onClick:S,className:x.iconButton,children:C?(0,i.jsx)(c.o1U,{size:"xs",color:"currentColor",className:x.icon}):(0,i.jsx)(c.fpf,{size:"xs",color:"currentColor",className:x.icon})})}),(0,i.jsx)(c.hzk,{className:s()(x.body),children:(0,i.jsxs)("div",{className:s()(x.textContainer),children:[(0,i.jsx)(c.X6q,{variant:"heading-xl/semibold",color:"header-primary",children:I.intl.string(I.t.L4ifkZ)}),(0,i.jsx)(c.Text,{variant:"text-md/normal",color:"header-secondary",children:I.intl.string(I.t.R8LCMT)})]})}),(0,i.jsx)(c.mzw,{children:(0,i.jsx)("div",{className:x.buttonContainer,children:(0,i.jsx)(c.zxk,{fullWidth:!0,color:c.zxk.Colors.BRAND,size:c.zxk.Sizes.MEDIUM,onClick:()=>{n(),u.default.track(N.rMx.VIBING_WUMPUS_ACTION,{action:d.G.BACK_TO_CONVERSATION})},children:I.intl.string(I.t["8eKkaW"])})})})]})}let C=t=>{let{onClose:n,transitionState:e}=t;return(0,i.jsx)(c.Y0X,{transitionState:e,children:(0,i.jsx)(h,{onClose:n})})}},673807:function(t,n,e){t.exports={body:"body__7ce16",wumpus:"wumpus__7ce16",textContainer:"textContainer__7ce16",buttonContainer:"buttonContainer__7ce16",ringContainer:"ringContainer__7ce16",iconButton:"iconButton__7ce16",icon:"icon__7ce16"}}}]);
//# sourceMappingURL=0696d772da73cf20.js.map