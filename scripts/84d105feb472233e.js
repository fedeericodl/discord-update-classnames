"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["95480"],{275869:function(t,n,i){i.d(n,{default:()=>u});var e=i(200651);i(192379);var r=i(481060),l=i(923298),a=i(63063),d=i(981631),s=i(388032);function u(t){let{listing:n,transitionState:i,onClose:u,...o}=t;return(0,e.jsx)(l.Z,{sku_id:n.id,sku_name:n.name,guild_id:n.guild_id,header:s.intl.format(s.t.avKMZm,{listingName:n.name}),transitionState:i,onClose:u,...o,children:(0,e.jsx)(r.Text,{variant:"text-md/normal",children:s.intl.format(s.t.jkvpmp,{listingName:n.name,monetizationTermsUrl:a.Z.getArticleURL(d.BhN.CREATOR_TERMS),communityGuidelinesUrl:d.EYA.GUIDELINES})})})}},923298:function(t,n,i){i.d(n,{Z:()=>m});var e=i(200651);i(192379);var r=i(399606),l=i(481060),a=i(668781),d=i(594174),s=i(626135),u=i(981631),o=i(388032);function m(t){let{header:n,children:i,sku_id:m,sku_name:c,guild_id:f,cancelLabel:_,confirmLabel:h,transitionState:g,onClose:k,...T}=t,p=(0,r.e7)([d.default],()=>d.default.getCurrentUser());return(0,e.jsx)(l.ConfirmModal,{header:null!=n?n:o.intl.string(o.t["+78Pfn"]),cancelText:null!=_?_:o.intl.string(o.t["ETE/oK"]),confirmText:null!=h?h:o.intl.string(o.t["+78Pfn"]),onConfirm:()=>{s.default.track(u.rMx.TNS_SKU_REPORT_SUBMITTED,{sku_id:m,guild_id:f,user_id:null==p?void 0:p.id}),a.Z.show({title:o.intl.string(o.t.sUvCKS),body:o.intl.format(o.t["7KJnk5"],{skuName:c})})},transitionState:g,onClose:k,...T,children:i})}}}]);
//# sourceMappingURL=84d105feb472233e.js.map