"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["21863"],{653904:function(e){e.exports="/assets/f75f573d637b0f28.svg"},347157:function(e){e.exports="/assets/22e523ffc4109e89.svg"},816814:function(e,t,i){i.d(t,{Z:()=>s});var n=i(544891),r=i(570140),l=i(325067),o=i(981631);function a(e,t){return r.Z.dispatch({type:"MFA_SMS_TOGGLE"}),n.tn.post({url:e,body:{password:t},oldFormErrors:!0,rejectWithError:!1}).then(e=>(r.Z.dispatch({type:"MFA_SMS_TOGGLE_COMPLETE"}),e),e=>{throw r.Z.dispatch({type:"MFA_SMS_TOGGLE_COMPLETE"}),e})}let s={enableMFAStart:async e=>(await n.tn.post({url:o.ANM.MFA_TOTP_ENABLE,body:{password:e},oldFormErrors:!0,rejectWithError:!1})).body,enable(e){let{password:t,code:i,secret:l}=e;return n.tn.post({url:o.ANM.MFA_TOTP_ENABLE,body:{code:i,secret:l,password:t},oldFormErrors:!0,rejectWithError:!1}).then(e=>r.Z.dispatch({type:"MFA_ENABLE_SUCCESS",token:e.body.token,codes:e.body.backup_codes}))},disable(){n.tn.post({url:o.ANM.MFA_TOTP_DISABLE,oldFormErrors:!0,rejectWithError:!1}).then(e=>{let{body:{token:t}}=e;return r.Z.dispatch({type:"MFA_DISABLE_SUCCESS",token:t})})},enableSMS:e=>a(o.ANM.MFA_SMS_ENABLE,e),disableSMS:e=>a(o.ANM.MFA_SMS_DISABLE,e),sendMFABackupCodesVerificationKeyEmail:e=>n.tn.post({url:o.ANM.MFA_SEND_VERIFICATION_KEY,body:{password:e},oldFormErrors:!0,rejectWithError:!1}).then(e=>r.Z.dispatch({type:"MFA_SEND_VERIFICATION_KEY",nonces:{viewNonce:e.body.nonce,regenerateNonce:e.body.regenerate_nonce}}),e=>{throw e}),confirmViewBackupCodes(e,t){let{viewNonce:i,regenerateNonce:a}=l.Z.getNonces();return n.tn.post({url:o.ANM.MFA_CODES_VERIFICATION,body:{key:e,nonce:t?a:i,regenerate:t},oldFormErrors:!0,rejectWithError:!1}).then(t=>r.Z.dispatch({type:"MFA_VIEW_BACKUP_CODES",codes:t.body.backup_codes,key:e}),e=>{throw e})},clearBackupCodes(){r.Z.dispatch({type:"MFA_CLEAR_BACKUP_CODES"})}}},400842:function(e,t,i){i.d(t,{d:()=>d});var n=i(200651);i(192379);var r=i(120356),l=i.n(r),o=i(692547),a=i(481060);i(651711);var s=i(551556);i(388032);var c=i(710903);i(347157),i(177266);let d=e=>{let{name:t,description:i,checked:r,actionLabel:d,actionHandler:_}=e,u=null;return u=r?(0,n.jsx)(s.Z,{width:20,height:20}):(0,n.jsx)(a.k$p,{size:"custom",color:o.Z.unsafe_rawColors.RED_400.css,width:20,height:20}),(0,n.jsxs)("div",{className:c.checklistItem,children:[(0,n.jsx)("div",{className:c.checklistIcon,children:u}),(0,n.jsxs)("div",{className:l()(c.__invalid_checklistText,r&&c.ineligibleRow),children:[(0,n.jsx)(a.X6q,{variant:"heading-md/semibold",className:c.checklistItemName,children:t}),(0,n.jsx)(a.Text,{color:"interactive-normal",variant:"text-sm/normal",children:i})]}),null!=d&&(0,n.jsx)("div",{className:c.eligibilityActionContainer,children:(0,n.jsx)(a.zxk,{className:c.eligibilityActionButton,look:a.iLD.OUTLINED,color:a.Ttl.PRIMARY,onClick:_,grow:!0,children:d})})]})}},466501:function(e,t,i){i.d(t,{default:()=>g});var n=i(200651),r=i(192379),l=i(481060),o=i(651711),a=i(434404),s=i(202858),c=i(587431),d=i(400842),_=i(271267),u=i(981631),h=i(388032),E=i(9710),b=i(653904);function A(){return(0,n.jsxs)("div",{className:E.eligibilityHeader,children:[(0,n.jsx)(l.X6q,{className:E.eligibilityHeaderText,variant:"heading-lg/extrabold",color:"header-primary",children:h.intl.string(h.t["3s47iI"])}),(0,n.jsx)("img",{className:E.eligibilityHeaderImage,src:b,alt:""}),(0,n.jsx)(l.olH,{className:E.eligibilityHeaderCloseButton,onClick:()=>{(0,l.Mr3)(_.Q)}})]})}function M(e){let{eligibility:t,eligibilityLoading:i,eligibilityError:h,guildId:b,onEligibilityBecameStale:A}=e,M=r.useMemo(()=>({onEligibilityBecameStale:A,sortedByIneligible:!0,actions:{onEnableMFAClick:s.ZP.enableMFA,onRequireModeratorMFAClick:()=>{(0,l.Mr3)(_.Q),a.Z.open(b,u.pNK.SAFETY,void 0,u.KsC.SAFETY_PERMISSIONS)}}}),[b,A]),g=(0,o.Z)(t,M);return null!=h?(0,n.jsx)("div",{className:E.paddedContainer,children:(0,n.jsx)(c.Z,{children:h.message})}):null==g||i?(0,n.jsx)("div",{className:E.paddedContainer,children:(0,n.jsx)(l.$jN,{})}):(0,n.jsx)("div",{children:g.map((e,t)=>(0,n.jsxs)(r.Fragment,{children:[(0,n.jsx)(d.d,{name:e.checked?e.checkedLabel:e.uncheckedLabel,description:e.description,checked:e.checked,actionLabel:e.actionLabel,actionHandler:e.actionHandler}),t<g.length-1?(0,n.jsx)(l.$i$,{}):null]},e.checkedLabel))})}function g(e){let{eligibility:t,eligibilityLoading:i,eligibilityError:r,refreshEligibility:o,guildId:a,transitionState:s}=e;return(0,n.jsxs)(l.Y0X,{className:E.eligibilityModal,size:l.CgR.MEDIUM,transitionState:s,children:[(0,n.jsx)(A,{}),(0,n.jsx)(l.hzk,{children:(0,n.jsx)(M,{eligibility:t,eligibilityLoading:i,eligibilityError:r,guildId:a,onEligibilityBecameStale:o})})]})}},551556:function(e,t,i){i.d(t,{Z:()=>o});var n=i(200651);i(192379);var r=i(692547),l=i(325767);function o(e){let{width:t=24,height:i=24,color:o=r.Z.unsafe_rawColors.WHITE_500.css,backgroundColor:a=r.Z.unsafe_rawColors.BRAND_500.css,...s}=e;return(0,n.jsxs)("svg",{...(0,l.Z)(s),width:t,height:i,viewBox:"0 0 14 14",children:[(0,n.jsx)("path",{fill:a,d:"M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166"}),(0,n.jsx)("path",{d:"M6.5,10.3L3.4,8l0.9-1.2l1.8,1.4l3.3-4.3l1.2,0.9L6.5,10.3z",fill:o})]})}},202858:function(e,t,i){i.d(t,{Yn:()=>_,ZP:()=>u}),i(411104),i(47120);var n=i(200651),r=i(192379),l=i(283693),o=i(481060),a=i(816814),s=i(981631),c=i(388032);function d(e){let{onError:t,onSuccess:i,PasswordConfirm:o,...d}=e,[_,u]=r.useState("");return(0,n.jsx)(o,{...d,handleSubmit:e=>a.Z.enableMFAStart(e),onError:e=>{("object"==typeof e&&null!=e&&(0,l.nr)(e,"code")&&"number"==typeof e.code?e.code:0)===s.evJ.MFA_INVALID_SECRET?(i(_),d.onClose()):t(e)},onPasswordChange:u,title:c.intl.string(c.t.cDgKtb),actionText:c.intl.string(c.t["3PatS0"]),skipErrorMsgAbortCode:s.evJ.MFA_INVALID_SECRET})}function _(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return new Promise(t=>{(0,o.ZDy)(async()=>{let{default:t}=await Promise.all([i.e("76540"),i.e("18298")]).then(i.bind(i,628908));return i=>(0,n.jsx)(t,{...i,isTotp:e})},{onCloseCallback:t,onCloseRequest:s.VqG})})}let u={enableMFA:async function(){let e=await new Promise((e,t)=>{(0,o.ZDy)(async()=>{let{default:r}=await i.e("24642").then(i.bind(i,279837));return i=>(0,n.jsx)(d,{...i,onSuccess:e,onError:t,PasswordConfirm:r})})});await new Promise(t=>{(0,o.ZDy)(async()=>{let{default:r}=await Promise.all([i.e("62729"),i.e("23746")]).then(i.bind(i,837651));return i=>(0,n.jsx)(r,{...i,password:e,handleEnableMFASuccess:t})})}),await _()}}},325067:function(e,t,i){i.d(t,{Z:()=>M});var n,r,l,o=i(392711),a=i.n(o),s=i(213919),c=i(442837),d=i(570140);let _=!1,u=[],h="",E=!1,b={viewNonce:"",regenerateNonce:""};class A extends(l=c.ZP.Store){getVerificationKey(){return h}getBackupCodes(){return u}get togglingSMS(){return _}getNonces(){return b}get hasSeenBackupPrompt(){return E}}r="MFAStore",(n="displayName")in A?Object.defineProperty(A,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):A[n]=r;let M=new A(d.Z,{MFA_ENABLE_SUCCESS:function(e){let{token:t,codes:i}=e;void 0!==t&&s.setToken(t),u=i},MFA_DISABLE_SUCCESS:function(e){let{token:t}=e;s.setToken(t)},MFA_SMS_TOGGLE:function(){_=!0},MFA_SMS_TOGGLE_COMPLETE:function(){_=!1},MFA_CLEAR_BACKUP_CODES:function(){u=[]},MFA_VIEW_BACKUP_CODES:function(e){let{codes:t,key:i}=e;u=a().sortBy(t,"code"),h=i},MFA_SEND_VERIFICATION_KEY:function(e){let{nonces:t}=e;b=t},MFA_SEEN_BACKUP_CODE_PROMPT:function(){E=!0}})},710903:function(e,t,i){e.exports={checklistItem:"checklistItem__54e17",checklistIcon:"checklistIcon__54e17",checklistItemName:"checklistItemName__54e17",ineligibleRow:"ineligibleRow__54e17",eligibilityActionContainer:"eligibilityActionContainer__54e17",eligibilityActionButton:"eligibilityActionButton__54e17"}},9710:function(e,t,i){e.exports={eligibilityModal:"eligibilityModal__17e0d",eligibilityHeader:"eligibilityHeader__17e0d",eligibilityHeaderText:"eligibilityHeaderText__17e0d",eligibilityHeaderImage:"eligibilityHeaderImage__17e0d",eligibilityHeaderCloseButton:"eligibilityHeaderCloseButton__17e0d",paddedContainer:"paddedContainer__17e0d"}}}]);
//# sourceMappingURL=a21929f65c991397.js.map