"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["96888"],{829302:function(e){e.exports="/assets/d7b222069635263e.svg"},900564:function(e){e.exports="/assets/c0070cb5c7749661.svg"},670903:function(e){e.exports="/assets/6251823cd63fdeac.svg"},144535:function(e,t,n){n.d(t,{I:()=>l});var i=n(852985);let l=function(e){let{intl:t,t:l}=n(388032),o=l[(0,i.runtimeHashMessageKey)(e)],a=t.currentLocale;t.currentLocale="en-US";let s=t.string(o);return t.currentLocale=a,s}},988645:function(e,t,n){n.d(t,{default:()=>m});var i=n(200651);n(192379);var l=n(481060),o=n(144535),a=n(332664),s=n(142497),c=n(774378),r=n(445102),u=n(190378),d=n(388032);function m(e){let{onClose:t,transitionState:m,analyticsData:_}=e,h=(0,o.I)("CALL_FEEDBACK_OPTION_OTHER");return(0,i.jsx)(a.Z,{modalType:"voice",header:d.intl.string(d.t.Ss6tlZ),body:d.intl.string(d.t.tLi4cX),problemTitle:d.intl.string(d.t.FJmoxM),problems:(0,c.Z)(!1),feedbackProblems:[h],onSubmit:function(e){var t,o;let{rating:a,problem:m,dontShowAgain:h,feedback:g}=e;h&&(0,s.Kw)(u.v.VOICE_CALL_FEEDBACK),null!=a&&((0,r.Z)(a,null!==(o=null===(t=(0,c.Z)(!1).find(e=>e.label===m))||void 0===t?void 0:t.code)&&void 0!==o?o:null,m,g,_),null!=m&&(0,l.ZDy)(async()=>{let{default:e}=await n.e("14466").then(n.bind(n,729328));return t=>(0,i.jsx)(e,{body:d.intl.string(d.t["d9+vQ0"]),...t})}))},onClose:t,transitionState:m,otherKey:h})}},957115:function(e,t,n){n.d(t,{B:()=>o}),n(653041);var i=n(392711),l=n.n(i);let o=(e,t)=>{let n=l().shuffle(e),i=n.findIndex(e=>e.value===t);if(i>-1){let e=n[i];n.splice(i,1),n.push(e)}return n}},332664:function(e,t,n){n.d(t,{L:()=>N,Z:()=>S}),n(47120);var i=n(200651),l=n(192379),o=n(120356),a=n.n(o),s=n(392711),c=n.n(s),r=n(481060),u=n(493773),d=n(110924),m=n(600164),_=n(313201),h=n(237617),g=n(572539),p=n(626135),x=n(63063),v=n(957115),b=n(531578),f=n(981631),j=n(388032),Z=n(357099);let k=[{className:Z.emojiSad,rating:b.aZ.BAD,classNameSelected:Z.selected},{className:Z.emojiNeutral,rating:b.aZ.NEUTRAL,classNameSelected:Z.selected},{className:Z.emojiHappy,rating:b.aZ.GOOD,classNameSelected:Z.selected}];function N(e){let{className:t,selectedRating:n,ratingConfigs:l,onChangeRating:o}=e;return(0,i.jsx)("div",{className:a()(Z.ratingsSelector,t),children:(null!=l?l:k).map(e=>{let{rating:t,className:l,classNameSelected:s}=e;return(0,i.jsx)(r.P3F,{onClick:()=>o(t),"aria-label":t,children:(0,i.jsx)("div",{className:a()(l,n===t?s:null)})},t)})})}function L(){return(0,i.jsx)(r.Text,{className:Z.helpdeskLink,variant:"text-xs/normal",color:"text-muted",children:j.intl.format(j.t.ybi2tL,{helpdeskURL:x.Z.getSubmitRequestURL()})})}function S(e){let{modalType:t,header:n,body:o,problemTitle:s,problems:x,transitionState:k,ratingConfigs:S,feedbackProblems:C=[],otherKey:y,ratingsSelectorClassName:D,hideDontShowCheckbox:I,startRating:O=null,hideHelpDeskLink:A=!1,onSubmit:E,onClose:w}=e,R=(0,d.Z)(x),[T,B]=l.useState(!1),[z,M]=l.useState(O),[P,F]=l.useState(null),[K,G]=l.useState(c().shuffle(x)),[H,U]=l.useState(""),V=(0,_.Dt)(),J=(0,h.Z)(z),X=(0,h.Z)(T),q=(0,h.Z)(P),W=(0,h.Z)(E),Q=(0,h.Z)(H),Y=null!=P&&C.includes(P),$=null!=z&&z!==b.aZ.GOOD,ee=Y||!I;return l.useEffect(()=>{c().isEqual(R,x)||G((0,v.B)(x,y))},[x,R,y]),(0,u.ZP)(()=>(p.default.track(f.rMx.OPEN_MODAL,{type:t,source:"Feedback Modal"}),()=>{W.current({rating:J.current,problem:q.current,dontShowAgain:X.current,feedback:Q.current})})),(0,i.jsxs)(r.Y0X,{transitionState:k,className:Z.__invalid_modalRoot,"aria-labelledby":V,children:[(0,i.jsxs)(r.xBx,{separator:!1,className:Z.headerContainer,children:[(0,i.jsx)(r.X6q,{id:V,variant:"heading-xl/extrabold",color:"none",children:n}),(0,i.jsx)(r.Text,{variant:"text-md/normal",color:"none",className:Z.ratingBody,children:o}),Y?null:(0,i.jsx)(N,{className:a()(Z.emojis,D),selectedRating:z,onChangeRating:function(e){M(e),e===b.aZ.GOOD&&w()},ratingConfigs:S})]}),(Y||$)&&(0,i.jsxs)(r.hzk,{className:Z.__invalid_content,children:[$&&!Y?(0,i.jsx)(r.xJW,{title:s,className:Z.problemInfo,children:(0,i.jsx)(g.Z,{options:K,onClick:function(e){let{value:t}=e;F(t),C.includes(t)||w()},hideCaret:e=>{let{value:t}=e;return!C.includes(t)}})}):null,Y?(0,i.jsxs)(r.xJW,{title:j.intl.string(j.t.h95hcn),className:Z.problemInfo,children:[(0,i.jsx)(r.Kx8,{value:H,maxLength:b.iF,onChange:U}),!A&&(0,i.jsx)(L,{})]}):null]}),ee&&(0,i.jsx)(r.mzw,{className:Z.footer,direction:m.Z.Direction.HORIZONTAL,children:Y?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.zxk,{size:r.zxk.Sizes.SMALL,look:r.zxk.Looks.LINK,color:r.zxk.Colors.PRIMARY,onClick:()=>{F(null),U("")},children:j.intl.string(j.t["13/7kZ"])}),(0,i.jsx)(r.zxk,{size:r.zxk.Sizes.SMALL,onClick:w,children:j.intl.string(j.t.geKm7u)})]}):(0,i.jsx)(r.XZJ,{type:r.XZJ.Types.INVERTED,size:18,value:T,onChange:()=>B(!T),children:(0,i.jsx)(r.Text,{variant:"text-sm/normal",children:j.intl.string(j.t["5E9SBw"])})})})]})}},572539:function(e,t,n){n.d(t,{Z:()=>r});var i=n(200651);n(192379);var l=n(120356),o=n.n(l),a=n(481060),s=n(259580),c=n(159558);function r(e){let{options:t,onClick:n,className:l,optionClassName:r,hideCaret:u}=e;return(0,i.jsx)("div",{className:o()(c.root,l),children:t.map((e,t)=>(0,i.jsxs)(a.P3F,{onClick:()=>n(e),className:o()(c.option,r),children:[(0,i.jsx)(a.Text,{className:c.text,color:"none",variant:"text-md/normal",children:e.label}),!(null==u?void 0:u(e))&&(0,i.jsx)(s.Z,{className:c.caret,direction:s.Z.Directions.RIGHT})]},t))})}},774378:function(e,t,n){n.d(t,{Z:()=>l}),n(653041);var i=n(388032);function l(e){let t=[{label:i.intl.string(i.t["UqD/9f"]),code:2,value:"I couldn't hear audio at all"},{label:i.intl.string(i.t.DVEGuL),code:3,value:"Nobody could hear me"},{label:i.intl.string(i.t["2nWcBw"]),code:4,value:"Audio had echos or feedback"},{label:i.intl.string(i.t.K3E4Dw),code:5,value:"Audio was robotic or distorted"},{label:i.intl.string(i.t.Dpm2U1),code:6,value:"Audio cut in and out"},{label:i.intl.string(i.t.kuGsi4),code:7,value:"Volume was too low or high"},{label:i.intl.string(i.t.PkiFCQ),code:8,value:"Background noise was too loud"}];return e&&t.push({label:i.intl.string(i.t.hvIDwc),code:9,value:"Issues with speakerphone"}),t.push({label:i.intl.string(i.t["+gUm1t"]),code:10,value:"Issues with headset/bluetooth"},{label:i.intl.string(i.t["emlT9/"]),code:1,value:"Other"}),t}},445102:function(e,t,n){n.d(t,{Z:()=>a});var i=n(131951),l=n(626135),o=n(981631);function a(e,t,n,a,s){let c=i.Z.getSettings(),r=i.Z.getInputDeviceId(),u=i.Z.getInputDevices()[r],d=i.Z.getOutputDeviceId(),m=i.Z.getOutputDevices()[d],_=i.Z.getVideoDeviceId(),h=i.Z.getVideoDevices()[_],g=i.Z.getNoiseCancellation(),p=i.Z.getMediaEngine().getAudioSubsystem(),x=i.Z.getMediaEngine().getAudioLayer();l.default.track(o.rMx.CALL_REPORT_PROBLEM,{rating:null!=e?e:"no response",reason_code:t,reason_description:n,feedback:a,audio_input_mode:c.mode,automatic_audio_input_sensitivity_enabled:c.modeOptions.autoThreshold,audio_input_sensitivity:c.modeOptions.threshold,echo_cancellation_enabled:c.echoCancellation,noise_suppression_enabled:c.noiseSuppression,automatic_gain_control_enabled:c.automaticGainControl,voice_output_volume:c.outputVolume,noise_cancellation_enabled:g,input_device_name:null==u?void 0:u.name,output_device_name:null==m?void 0:m.name,video_device_name:null==h?void 0:h.name,audio_subsystem:p,audio_layer:x,automatic_audio_subsystem:c.automaticAudioSubsystem,...s})}},357099:function(e,t,n){e.exports={headerContainer:"headerContainer__6c12c",modalCloseButton:"modalCloseButton__6c12c",helpdeskLink:"helpdeskLink__6c12c",header:"header__6c12c",ratingBody:"ratingBody__6c12c",footer:"footer__6c12c",ratingsSelector:"ratingsSelector__6c12c",emojis:"emojis__6c12c",problemInfo:"problemInfo__6c12c",emoji:"emoji__6c12c",selected:"selected__6c12c",emojiSad:"emojiSad__6c12c emoji__6c12c",emojiNeutral:"emojiNeutral__6c12c emoji__6c12c",emojiHappy:"emojiHappy__6c12c emoji__6c12c"}},159558:function(e,t,n){e.exports={root:"root__66e7e",option:"option__66e7e",text:"text__66e7e",caret:"caret__66e7e"}}}]);
//# sourceMappingURL=98a04fe697f7c5b1.js.map