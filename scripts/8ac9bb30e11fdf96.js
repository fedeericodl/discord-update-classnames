"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["11495"],{829302:function(e){e.exports="/assets/d7b222069635263e.svg"},900564:function(e){e.exports="/assets/c0070cb5c7749661.svg"},670903:function(e){e.exports="/assets/6251823cd63fdeac.svg"},957115:function(e,t,n){n.d(t,{B:()=>i}),n(653041);var l=n(392711),a=n.n(l);let i=(e,t)=>{let n=a().shuffle(e),l=n.findIndex(e=>e.value===t);if(l>-1){let e=n[l];n.splice(l,1),n.push(e)}return n}},332664:function(e,t,n){n.d(t,{L:()=>v,Z:()=>S}),n(47120);var l=n(200651),a=n(192379),i=n(120356),s=n.n(i),c=n(392711),r=n.n(c),o=n(481060),d=n(493773),u=n(110924),m=n(600164),x=n(313201),_=n(237617),h=n(572539),f=n(626135),j=n(63063),p=n(957115),g=n(531578),N=n(981631),k=n(388032),b=n(357099);let C=[{className:b.emojiSad,rating:g.aZ.BAD,classNameSelected:b.selected},{className:b.emojiNeutral,rating:g.aZ.NEUTRAL,classNameSelected:b.selected},{className:b.emojiHappy,rating:g.aZ.GOOD,classNameSelected:b.selected}];function v(e){let{className:t,selectedRating:n,ratingConfigs:a,onChangeRating:i}=e;return(0,l.jsx)("div",{className:s()(b.ratingsSelector,t),children:(null!=a?a:C).map(e=>{let{rating:t,className:a,classNameSelected:c}=e;return(0,l.jsx)(o.P3F,{onClick:()=>i(t),"aria-label":t,children:(0,l.jsx)("div",{className:s()(a,n===t?c:null)})},t)})})}function Z(){return(0,l.jsx)(o.Text,{className:b.helpdeskLink,variant:"text-xs/normal",color:"text-muted",children:k.intl.format(k.t.ybi2tL,{helpdeskURL:j.Z.getSubmitRequestURL()})})}function S(e){let{modalType:t,header:n,body:i,problemTitle:c,problems:j,transitionState:C,ratingConfigs:S,feedbackProblems:E=[],otherKey:O,ratingsSelectorClassName:D,hideDontShowCheckbox:R,startRating:T=null,hideHelpDeskLink:L=!1,onSubmit:y,onClose:A}=e,B=(0,u.Z)(j),[I,z]=a.useState(!1),[K,F]=a.useState(T),[U,G]=a.useState(null),[w,H]=a.useState(r().shuffle(j)),[M,P]=a.useState(""),X=(0,x.Dt)(),q=(0,_.Z)(K),J=(0,_.Z)(I),V=(0,_.Z)(U),W=(0,_.Z)(y),Y=(0,_.Z)(M),Q=null!=U&&E.includes(U),$=null!=K&&K!==g.aZ.GOOD,ee=Q||!R;return a.useEffect(()=>{r().isEqual(B,j)||H((0,p.B)(j,O))},[j,B,O]),(0,d.ZP)(()=>(f.default.track(N.rMx.OPEN_MODAL,{type:t,source:"Feedback Modal"}),()=>{W.current({rating:q.current,problem:V.current,dontShowAgain:J.current,feedback:Y.current})})),(0,l.jsxs)(o.Y0X,{transitionState:C,className:b.__invalid_modalRoot,"aria-labelledby":X,children:[(0,l.jsxs)(o.xBx,{separator:!1,className:b.headerContainer,children:[(0,l.jsx)(o.X6q,{id:X,variant:"heading-xl/extrabold",color:"none",children:n}),(0,l.jsx)(o.Text,{variant:"text-md/normal",color:"none",className:b.ratingBody,children:i}),Q?null:(0,l.jsx)(v,{className:s()(b.emojis,D),selectedRating:K,onChangeRating:function(e){F(e),e===g.aZ.GOOD&&A()},ratingConfigs:S})]}),(Q||$)&&(0,l.jsxs)(o.hzk,{className:b.__invalid_content,children:[$&&!Q?(0,l.jsx)(o.xJW,{title:c,className:b.problemInfo,children:(0,l.jsx)(h.Z,{options:w,onClick:function(e){let{value:t}=e;G(t),E.includes(t)||A()},hideCaret:e=>{let{value:t}=e;return!E.includes(t)}})}):null,Q?(0,l.jsxs)(o.xJW,{title:k.intl.string(k.t.h95hcn),className:b.problemInfo,children:[(0,l.jsx)(o.Kx8,{value:M,maxLength:g.iF,onChange:P}),!L&&(0,l.jsx)(Z,{})]}):null]}),ee&&(0,l.jsx)(o.mzw,{className:b.footer,direction:m.Z.Direction.HORIZONTAL,children:Q?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.zxk,{size:o.zxk.Sizes.SMALL,look:o.zxk.Looks.LINK,color:o.zxk.Colors.PRIMARY,onClick:()=>{G(null),P("")},children:k.intl.string(k.t["13/7kZ"])}),(0,l.jsx)(o.zxk,{size:o.zxk.Sizes.SMALL,onClick:A,children:k.intl.string(k.t.geKm7u)})]}):(0,l.jsx)(o.XZJ,{type:o.XZJ.Types.INVERTED,size:18,value:I,onChange:()=>z(!I),children:(0,l.jsx)(o.Text,{variant:"text-sm/normal",children:k.intl.string(k.t["5E9SBw"])})})})]})}},572539:function(e,t,n){n.d(t,{Z:()=>o});var l=n(200651);n(192379);var a=n(120356),i=n.n(a),s=n(481060),c=n(259580),r=n(159558);function o(e){let{options:t,onClick:n,className:a,optionClassName:o,hideCaret:d}=e;return(0,l.jsx)("div",{className:i()(r.root,a),children:t.map((e,t)=>(0,l.jsxs)(s.P3F,{onClick:()=>n(e),className:i()(r.option,o),children:[(0,l.jsx)(s.Text,{className:r.text,color:"none",variant:"text-md/normal",children:e.label}),!(null==d?void 0:d(e))&&(0,l.jsx)(c.Z,{className:r.caret,direction:c.Z.Directions.RIGHT})]},t))})}},801320:function(e,t,n){n.d(t,{default:()=>x});var l=n(200651),a=n(192379),i=n(481060),s=n(332664),c=n(142497),r=n(626135),o=n(981631),d=n(190378),u=n(388032);let m=["OTHER"];function x(e){let{analyticsData:t,transitionState:x,onClose:_}=e;return a.useEffect(()=>{r.default.track(o.rMx.OPEN_MODAL,{type:"Video Background Feedback"})},[]),(0,l.jsx)(s.Z,{modalType:"video_background",header:u.intl.string(u.t.Wl8qXl),body:u.intl.string(u.t.vPw6j4),problemTitle:u.intl.string(u.t["UNFF8/"]),problems:[{value:"BAD_OUTLINE",label:u.intl.string(u.t.pyhS3t)},{value:"BACKGROUND_DETECTION_ACCURACY",label:u.intl.string(u.t.cymRTU)},{value:"FLICKERING",label:u.intl.string(u.t.xZ60CA)},{value:"BACKGROUND_DETECTION_LAG",label:u.intl.string(u.t.DweTcX)},{value:"OTHER",label:u.intl.string(u.t["emlT9/"])}],feedbackProblems:m,onSubmit:function(e){let{rating:a,problem:s,dontShowAgain:m,feedback:x}=e;m&&(0,c.Kw)(d.v.VIDEO_BACKGROUND_FEEDBACK),null!=a&&(r.default.track(o.rMx.VIDEO_BACKGROUND_FEEDBACK,{...t,reason:s,rating:a,feedback:x}),null!=s&&(0,i.ZDy)(async()=>{let{default:e}=await n.e("14466").then(n.bind(n,729328));return t=>(0,l.jsx)(e,{body:u.intl.string(u.t.aHB11d),...t})}))},onClose:_,transitionState:x,otherKey:"OTHER"})}},357099:function(e,t,n){e.exports={headerContainer:"headerContainer__6c12c",modalCloseButton:"modalCloseButton__6c12c",helpdeskLink:"helpdeskLink__6c12c",header:"header__6c12c",ratingBody:"ratingBody__6c12c",footer:"footer__6c12c",ratingsSelector:"ratingsSelector__6c12c",emojis:"emojis__6c12c",problemInfo:"problemInfo__6c12c",emoji:"emoji__6c12c",selected:"selected__6c12c",emojiSad:"emojiSad__6c12c emoji__6c12c",emojiNeutral:"emojiNeutral__6c12c emoji__6c12c",emojiHappy:"emojiHappy__6c12c emoji__6c12c"}},159558:function(e,t,n){e.exports={root:"root__66e7e",option:"option__66e7e",text:"text__66e7e",caret:"caret__66e7e"}}}]);
//# sourceMappingURL=8ac9bb30e11fdf96.js.map