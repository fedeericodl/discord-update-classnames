"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["58493"],{481637:function(e,t,i){i.d(t,{Z:()=>l});let l=(0,i(818083).B)({kind:"user",id:"2021-10_runtime_accessibility_system",label:"Runtime Accessibility System",defaultConfig:{enabled:!1,reporting:!1},treatments:[{id:1,label:"Enabled but silent",config:{enabled:!0,reporting:!1}},{id:2,label:"Enabled and reporting",config:{enabled:!0,reporting:!0}}]})},80753:function(e,t,i){i.r(t),i.d(t,{default:()=>u}),i(47120);var l=i(200651),n=i(192379),s=i(481060),r=i(377171),o=i(31336),a=i(481637),c=i(532810),d=i(915312);function u(){let[e,t]=n.useState(!1),i=(0,d.LL)(),{reporting:u}=a.Z.useExperiment({location:"be7a1c_1"},{autoTrackExposure:!1});return(n.useEffect(()=>{if(u&&e&&null!=i)return i.forEach(e=>{e.elements.forEach(e=>{e.setAttribute(c.OF,"")})}),()=>{i.forEach(e=>{e.elements.forEach(e=>{e.removeAttribute(c.OF)})})}},[i,u,e]),u&&null!=i&&0!==i.length)?(0,l.jsxs)("div",{style:{backgroundColor:r.Z.INFO_DANGER_BACKGROUND,color:r.Z.INFO_DANGER_TEXT,display:"flex",alignItems:"center",padding:"8px 12px"},children:[(0,l.jsx)(s.Text,{variant:"text-sm/semibold",color:"info-danger-text",children:"Accessibility compliance issue(s) detected, check in-app DevTools"}),(0,l.jsxs)("div",{style:{display:"grid",gridAutoFlow:"column",gap:4,marginLeft:"auto"},children:[(0,l.jsx)(s.zxk,{size:s.zxk.Sizes.TINY,color:s.zxk.Colors.RED,style:{marginLeft:"auto"},onClick:o.SO,children:"Open DevTools"}),(0,l.jsxs)(s.zxk,{size:s.zxk.Sizes.TINY,color:s.zxk.Colors.RED,style:{marginLeft:"auto"},onClick:()=>t(!e),children:[e?"Hide":"Show"," Overlays"]})]})]}):null}}}]);
//# sourceMappingURL=e5722aeff3a2279c.js.map