"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["6284"],{257514:function(e,t,i){i.d(t,{default:()=>S}),i(47120);var n=i(200651),a=i(192379),s=i(481060),l=i(355467),r=i(100527),o=i(906732),d=i(313201),c=i(740492),_=i(626135),C=i(171246),u=i(225715),N=i(635840),x=i(981631),m=i(388032),h=i(48008);let I=e=>{let[t,i]=a.useState(!1),[n,s]=a.useState(null);return{cancelSubscription:async t=>{try{return i(!0),await l.EO(t,e),!0}catch(e){s(e)}finally{i(!1)}},error:n,submitting:t}};function S(e){let{transitionState:t,application:i,storeListing:l,subscription:S,guild:T,onClose:A}=e,E=(0,d.Dt)(),{analyticsLocations:O}=(0,o.ZP)(r.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL),{cancelSubscription:p,error:g,submitting:j}=I(O),[P,L]=a.useState(0),f=async()=>{await p(S.id)&&(c.ZP.disableApplicationSubscriptionCancellationSurvey?A():L(1))};a.useEffect(()=>{_.default.track(x.rMx.CANCELLATION_FLOW_STARTED,{location_stack:O})},[O]);let k=(0,C.KW)(l.skuFlags);return(0,n.jsx)(s.Y0X,{transitionState:t,className:h.modal,"aria-labelledby":E,children:(0,n.jsxs)(s.MyZ,{activeSlide:P,width:440,children:[(0,n.jsx)(s.Mi4,{id:0,children:(0,n.jsxs)("div",{className:h.slideContainer,children:[null!=g?(0,n.jsx)(s.kzN,{children:g.message}):null,(0,n.jsxs)(s.hzk,{className:h.content,children:[(0,n.jsx)(s.LZC,{size:16}),(0,n.jsxs)(u.q$,{children:[(0,n.jsx)(u.CW,{application:i}),(0,n.jsx)(u.r0,{id:E,children:m.intl.format(m.t.irka9v,{tier:l.summary})}),(0,n.jsx)(u.s$,{}),(0,n.jsx)(u.K9,{title:m.intl.string(m.t.LZunzc),description:k?m.intl.formatToPlainString(m.t["+HdfBw"],{timestamp:S.currentPeriodEnd.getTime()}):m.intl.formatToPlainString(m.t.qxiBnZ,{timestamp:S.currentPeriodEnd.getTime(),guildName:null==T?void 0:T.name})}),(0,n.jsx)(u.G9,{applicationId:l.applicationId,storeListingBenefits:l.benefits})]})]}),(0,n.jsxs)(s.mzw,{className:h.footer,children:[(0,n.jsx)(s.zxk,{color:s.zxk.Colors.RED,onClick:f,submitting:j,children:m.intl.string(m.t.KSqyfX)}),(0,n.jsx)(s.zxk,{look:s.zxk.Looks.LINK,color:s.zxk.Colors.PRIMARY,className:h.goBackButton,onClick:A,children:m.intl.string(m.t["05jDxs"])})]})]})}),(0,n.jsx)(s.Mi4,{id:1,children:(0,n.jsx)("div",{className:h.slideContainer,children:(0,n.jsx)(N.Z,{application:i,subscriptionId:S.id,onClose:A})})})]})})}},635840:function(e,t,i){i.d(t,{Z:()=>C}),i(47120);var n=i(200651),a=i(192379),s=i(481060),l=i(153867),r=i(626135),o=i(981631),d=i(388032),c=i(305189);let _=[{value:"APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",nameGetter:()=>d.intl.string(d.t["+RZgNT"])},{value:"APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",nameGetter:()=>d.intl.string(d.t.kgPXgo)},{value:"APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",nameGetter:()=>d.intl.string(d.t.vujsUF)},{value:"APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",nameGetter:()=>d.intl.string(d.t.AYAOLC)},{value:"APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",nameGetter:()=>d.intl.string(d.t.wZLu3d)}];function C(e){let{application:t,subscriptionId:i,onClose:C}=e,[u,N]=a.useState(!1),[x,m]=a.useState(null),[h,I]=a.useState(""),S=a.useCallback(()=>{null!=x&&(r.default.track(o.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED,{answer:x,application_id:t.id,reason:h,subscription_id:i}),C())},[t.id,i,x,C,h]);return a.useEffect(()=>{l.ZP.updatedUnsyncedSettings({disableApplicationSubscriptionCancellationSurvey:u})},[u]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.xBx,{className:c.headerContainer,separator:!1,children:[(0,n.jsxs)("div",{className:c.titleContainer,children:[(0,n.jsx)(s.Text,{className:c.headerTitle,variant:"text-lg/semibold",children:d.intl.string(d.t.zPxMdX)}),(0,n.jsx)(s.olH,{className:c.modalCloseButton,onClick:C})]}),(0,n.jsx)(s.LZC,{size:8}),(0,n.jsx)(s.Text,{className:c.headerSubtitle,variant:"text-md/medium",children:d.intl.string(d.t.QJGdBw)})]}),(0,n.jsxs)(s.hzk,{children:[(0,n.jsx)("div",{className:c.answerChoicesContainer,children:(0,n.jsx)(s.FXm,{value:x,options:_.map(e=>{let{nameGetter:t,value:i}=e;return{name:t(),value:i}}),onChange:e=>m(e.value),withTransparentBackground:!0})}),"APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER"===x&&(0,n.jsx)(s.oil,{autoFocus:!0,className:c.otherField,placeholder:d.intl.string(d.t.s6tM8f),value:h,onChange:I})]}),(0,n.jsxs)(s.mzw,{className:c.footer,children:[(0,n.jsx)(s.zxk,{onClick:S,color:s.zxk.Colors.BRAND,disabled:null==x,children:d.intl.string(d.t.geKm7u)}),(0,n.jsx)(s.XZJ,{type:s.XZJ.Types.INVERTED,value:u,onChange:(e,t)=>N(t),size:20,className:c.__invalid_checkbox,children:(0,n.jsx)(s.Text,{variant:"text-sm/medium",children:d.intl.string(d.t["3vPFQk"])})})]})]})}},48008:function(e,t,i){e.exports={modal:"modal__339fa",content:"content__339fa",footer:"footer__339fa",goBackButton:"goBackButton__339fa",slideContainer:"slideContainer__339fa"}},305189:function(e,t,i){e.exports={headerContainer:"headerContainer__6d90b",titleContainer:"titleContainer__6d90b",headerTitle:"headerTitle__6d90b",modalCloseButton:"modalCloseButton__6d90b",headerSubtitle:"headerSubtitle__6d90b",answerChoicesContainer:"answerChoicesContainer__6d90b",otherField:"otherField__6d90b",footer:"footer__6d90b"}}}]);
//# sourceMappingURL=675bc9fc3c898fb7.js.map