"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["522"],{515695:function(e){e.exports="/assets/dd05fd1ea37e7747.png"},198993:function(e,r,t){t.d(r,{ZP:()=>N,c2:()=>h,cK:()=>x});var n,a,s,o=t(200651),i=t(192379),c=t(120356),l=t.n(c),d=t(841226),u=t(960337);function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var x=((n={}).SIZE_40="SIZE_40",n.SIZE_60="SIZE_60",n);let f=Object.freeze({SIZE_40:"size-40",SIZE_60:"size-60"}),_=t(515695);class C extends(a=i.PureComponent){render(){let{className:e,text:r,...t}=this.props;return(0,o.jsx)("div",{style:{width:t.size,height:t.size,backgroundColor:t.bgColor},className:l()(u.qrCodeContainer,e),children:(0,o.jsx)(d.default,{value:r,level:"M",...t})})}}m(C,"defaultProps",{size:128,bgColor:"#ffffff",fgColor:"#000000"});class h extends(s=i.PureComponent){render(){let{overlaySize:e}=this.props,r=f[null!=e?e:"SIZE_40"];return(0,o.jsxs)("div",{className:u.qrCodeOverlayContainer,children:[(0,o.jsx)(C,{...this.props}),(0,o.jsx)("div",{className:u.qrCodeOverlay,children:(0,o.jsx)("img",{className:u[r],src:_,alt:""})})]})}}m(h,"defaultProps",{size:144,bgColor:"#ffffff",fgColor:"#000000"});let N=C},259408:function(e,r,t){t.d(r,{Z:()=>m});var n=t(544891),a=t(933557),s=t(430824),o=t(131951),i=t(699516),c=t(594174),l=t(927923),d=t(981631),u=t(388032);function m(e,r){var t;let{nonce:m,forQRCode:x}=r,f=e.getGuildId(),_=s.Z.getGuild(f),C=(0,l.Lc)({guildId:null!=f?f:d.aIL,channelId:e.id,channelName:(0,a.F6)(e,c.default,i.Z),guildName:null!==(t=null==_?void 0:_.name)&&void 0!==t?t:u.intl.string(u.t.LJpTRE),muted:o.Z.isSelfMute(),deafened:o.Z.isSelfDeaf(),nonce:m});return x?"".concat((0,n.K0)()).concat(d.ANM.XBOX_HANDOFF,"?").concat(C.toString()):"".concat(l.bJ,"?").concat(C.toString())}},200623:function(e,r,t){t.d(r,{default:()=>N});var n=t(200651),a=t(192379),s=t(442837),o=t(481060),i=t(198993),c=t(639351),l=t(63063),d=t(258609),u=t(259408),m=t(893387),x=t(927923),f=t(981631),_=t(388032),C=t(699701);function h(e){let{step:r,instructions:t}=e;return(0,n.jsxs)("div",{className:C.cardRow,children:[(0,n.jsx)("div",{className:C.stepNumberContainer,children:(0,n.jsx)(o.Text,{variant:"text-sm/semibold",className:C.stepNumber,children:r})}),(0,n.jsx)(o.Text,{variant:"text-sm/normal",color:"header-primary",className:C.instructions,children:t})]})}function N(e){let{channel:r,transitionState:t,onClose:N}=e,p=(0,s.e7)([d.Z],()=>null!=d.Z.getRemoteSessionId()),v=(0,u.Z)(r,{forQRCode:!0});return a.useEffect(()=>{p&&N()},[p,N]),a.useEffect(()=>{(0,m.Z)(r.id,x.YE.XBOX)},[r.id]),(0,n.jsxs)(o.Y0X,{size:o.CgR.DYNAMIC,className:C.modalRoot,transitionState:t,children:[(0,n.jsxs)(o.xBx,{separator:!1,className:C.modalHeaderContainer,children:[(0,n.jsx)(o.X6q,{className:C.modalHeader,variant:"heading-xl/extrabold",children:_.intl.string(_.t["f+Aijo"])}),(0,n.jsx)(o.Text,{variant:"text-md/medium",color:"header-secondary",children:_.intl.string(_.t.mYFmDQ)})]}),(0,n.jsx)(o.hzk,{className:C.content,children:(0,n.jsxs)("div",{className:C.card,children:[(0,n.jsxs)("div",{className:C.cardText,children:[(0,n.jsxs)(o.Text,{variant:"text-lg/semibold",color:"header-primary",className:C.cardRow,children:[(0,n.jsx)(c.Z,{className:C.cardHeaderIcon}),_.intl.string(_.t.ZNlYbG)]}),(0,n.jsx)(h,{step:1,instructions:_.intl.string(_.t.dDtkl5)}),(0,n.jsx)(h,{step:2,instructions:_.intl.string(_.t.IWuXjI)}),(0,n.jsx)(o.Text,{variant:"text-sm/medium",children:(0,n.jsx)(o.eee,{className:C.learnMore,href:l.Z.getArticleURL(f.BhN.XBOX_CONNECTION),children:_.intl.string(_.t.hvVgAQ)})})]}),(0,n.jsx)(i.ZP,{className:C.qrCode,size:120,text:v})]})}),(0,n.jsx)(o.olH,{className:C.closeButton,onClick:N})]})}},960337:function(e,r,t){t.r(e.exports={qrCodeOverlay:"qrCodeOverlay_c28498","size-40":"size-40_c28498","size-60":"size-60_c28498",qrCodeOverlayContainer:"qrCodeOverlayContainer_c28498",qrCodeContainer:"qrCodeContainer_c28498"})},699701:function(e,r,t){e.exports={modalRoot:"modalRoot__3988c",modalHeaderContainer:"modalHeaderContainer__3988c",modalHeader:"modalHeader__3988c",content:"content__3988c",card:"card__3988c",cardText:"cardText__3988c",cardRow:"cardRow__3988c",cardHeaderIcon:"cardHeaderIcon__3988c",qrCode:"qrCode__3988c",closeButton:"closeButton__3988c",learnMore:"learnMore__3988c",stepNumberContainer:"stepNumberContainer__3988c",stepNumber:"stepNumber__3988c",instructions:"instructions__3988c"}}}]);
//# sourceMappingURL=73b13ec1a7d6919a.js.map