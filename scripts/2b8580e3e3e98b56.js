"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["1906"],{46920:function(e,t,n){n.d(t,{Ie:()=>g,mv:()=>k}),n(47120);var s=n(200651);n(192379);var r=n(442837),l=n(692547),i=n(481060),o=n(239091),c=n(584511),a=n(118012),d=n(922611),x=n(699516),m=n(51144),u=n(88751),h=n(930180),b=n(388032),j=n(265394);let k=e=>{let{channelId:t}=e,n=(0,h._d)(t);return(0,d.Do)({location:"blocked-users-notice"})?(0,s.jsx)(_,{channelId:t}):0===n?null:(0,s.jsxs)("div",{className:j.blockedNotice,children:[(0,s.jsx)(i.t6m,{size:"lg",className:j.__invalid_blockedIcon,color:l.Z.unsafe_rawColors.RED_400.css}),(0,s.jsx)(i.Text,{variant:"text-xs/normal",color:"header-secondary",children:b.intl.format(b.t["6Tcdt7"],{number:n})}),(0,s.jsx)(i.P3F,{className:j.blockedButton,onClick:e=>{(0,o.vq)(e,e=>(0,s.jsx)(N,{...e,channelId:t}),{position:"left",align:"bottom"})},children:b.intl.string(b.t.rUEjBQ)})]})},_=e=>{let{channelId:t}=e,n=(0,h._d)(t),r=(0,h.K3)(t);if(0===n&&0===r)return null;let c=e=>{(0,o.vq)(e,e=>(0,s.jsx)(N,{...e,channelId:t}),{position:"left",align:"bottom"})};return n>0&&r>0?(0,s.jsxs)("div",{className:j.blockedNotice,children:[(0,s.jsx)(i.t6m,{size:"lg",color:l.Z.unsafe_rawColors.RED_400.css}),(0,s.jsx)(i.Text,{variant:"text-xs/normal",color:"header-secondary",children:b.intl.string(b.t["P/KFX1"])}),(0,s.jsx)(i.P3F,{className:j.blockedButton,onClick:c,children:b.intl.string(b.t.rUEjBQ)})]}):r>0?(0,s.jsxs)("div",{className:j.blockedNotice,children:[(0,s.jsx)(i.kZF,{size:"lg"}),(0,s.jsx)(i.Text,{variant:"text-xs/normal",color:"header-secondary",children:b.intl.format(b.t.Ri3o39,{number:r})}),(0,s.jsx)(i.P3F,{className:j.blockedButton,onClick:c,children:b.intl.string(b.t.rUEjBQ)})]}):(0,s.jsxs)("div",{className:j.blockedNotice,children:[(0,s.jsx)(i.t6m,{size:"lg",color:l.Z.unsafe_rawColors.RED_400.css}),(0,s.jsx)(i.Text,{variant:"text-xs/normal",color:"header-secondary",children:b.intl.format(b.t["6Tcdt7"],{number:n})}),(0,s.jsx)(i.P3F,{className:j.blockedButton,onClick:c,children:b.intl.string(b.t.rUEjBQ)})]})},g=e=>{let{user:t,showStatus:n,speaker:l,channelId:o}=e,d=(0,r.e7)([u.ZP],()=>u.ZP.isModerator(t.id,o)),h=(0,r.e7)([x.Z],()=>x.Z.isBlocked(t.id)),k=null;return n&&(k=l?b.intl.string(b.t.LqMmGx):d?b.intl.string(b.t.GMZqSk):b.intl.string(b.t.suRAp6)),(0,s.jsxs)("div",{className:j.user,children:[(0,s.jsx)(c.Z,{src:t.getAvatarURL(null,32),size:i.EFr.SIZE_32,muted:!1,deafen:!1,speaking:!1,ringing:!1,renderIcon:l?()=>(0,s.jsx)(i.S6n,{size:"md",color:"currentColor",className:j.icon}):null},t.id),(0,s.jsxs)("div",{className:j.userInfo,children:[(0,s.jsxs)("div",{className:j.username,children:[(0,s.jsx)(a.Z,{size:n?a.Z.Sizes.SIZE_16:a.Z.Sizes.SIZE_14,children:m.ZP.getName(t)}),(0,s.jsx)(a.Z,{size:n?a.Z.Sizes.SIZE_16:a.Z.Sizes.SIZE_14,color:a.Z.Colors.HEADER_SECONDARY,children:"#".concat(t.discriminator)})]}),(0,s.jsxs)("div",{className:j.username,children:[(0,s.jsx)(i.Text,{variant:"text-xs/normal",color:h?"text-danger":"text-normal",children:h?b.intl.string(b.t["4bDptL"]):b.intl.string(b.t.tFY5ZW)}),(0,s.jsxs)(i.Text,{variant:"text-xs/normal",color:"text-muted",children:["| ",k]})]})]})]})},N=e=>{let{channelId:t}=e,n=(0,h.z)(t),r=(0,h.bA)(t);return(0,s.jsx)(i.Ttm,{className:j.container,children:[...n,...r].map(e=>{let{user:n}=e;return(0,s.jsx)(g,{user:n,channelId:t},n.id)})})}},854510:function(e,t,n){n.d(t,{default:()=>m}),n(47120);var s=n(200651);n(192379);var r=n(481060),l=n(313201),i=n(930180),o=n(46920),c=n(388032),a=n(528601);function d(e){let{blockedUsersCount:t,ignoredUsersCount:n}=e;return t>0&&n>0?c.intl.format(c.t.Uzdyho,{number:t+n}):n>0?c.intl.format(c.t.wvygk5,{number:n}):c.intl.format(c.t.HviVAw,{number:t})}function x(e){let{blockedUsersCount:t,ignoredUsersCount:n}=e;return t>0&&n>0?c.intl.string(c.t["P/KFX1"]):n>0?c.intl.format(c.t.Ri3o39,{number:n}):c.intl.format(c.t["28qZMT"],{number:t})}function m(e){let{channel:t,onAccept:n,transitionState:m,onClose:u,...h}=e,b=(0,l.Dt)(),j=(0,i.z)(t.id),k=(0,i.bA)(t.id);return(0,s.jsxs)(r.Y0X,{transitionState:m,"aria-labelledby":b,...h,size:r.CgR.SMALL,children:[(0,s.jsxs)(r.xBx,{className:a.header,children:[(0,s.jsx)(r.X6q,{variant:"heading-xl/semibold",children:(0,s.jsx)(d,{blockedUsersCount:j.length,ignoredUsersCount:k.length})}),(0,s.jsx)(r.Text,{color:"header-secondary",className:a.description,variant:"text-sm/normal",children:(0,s.jsx)(x,{blockedUsersCount:j.length,ignoredUsersCount:k.length})})]}),(0,s.jsx)(r.hzk,{className:a.content,children:[...j,...k].map(e=>{let{user:n,id:r,speaker:l}=e;return(0,s.jsx)(o.Ie,{user:n,speaker:l,showStatus:!0,channelId:t.id},r)})}),(0,s.jsxs)(r.mzw,{className:a.footer,children:[(0,s.jsx)(r.zxk,{onClick:()=>{n(t),u()},color:r.zxk.Colors.BRAND,children:c.intl.string(c.t.mbD50N)}),(0,s.jsx)(r.zxk,{onClick:()=>{u()},color:r.zxk.Colors.PRIMARY,look:r.zxk.Looks.LINK,children:c.intl.string(c.t.CZGqeX)})]})]})}},265394:function(e,t,n){e.exports={container:"container__26abc",user:"user__26abc",username:"username__26abc",blockedNotice:"blockedNotice__26abc",blockedButton:"blockedButton__26abc",icon:"icon__26abc",userInfo:"userInfo__26abc"}},528601:function(e,t,n){e.exports={content:"content_ed987b",header:"header_ed987b",footer:"footer_ed987b",description:"description_ed987b"}}}]);
//# sourceMappingURL=2b8580e3e3e98b56.js.map