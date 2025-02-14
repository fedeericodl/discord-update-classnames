"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["7251"],{796111:function(e,n,t){t.d(n,{P:()=>r});let o=(0,t(818083).B)({id:"2024-06_quest_inline_console_connection",kind:"user",label:"Quest Inline Console Connection Experiment",defaultConfig:{enabled:!1},treatments:[{id:0,label:"Simplified console connection flow",config:{enabled:!1}},{id:1,label:"Inline console connection flow",config:{enabled:!0}}]}),r=e=>{let{location:n,autoTrackExposure:t=!1}=e,{enabled:r}=o.useExperiment({location:n},{autoTrackExposure:t});return r}},164495:function(e,n,t){t.d(n,{i0:()=>k,yD:()=>y});var o=t(200651),r=t(192379),a=t(120356),d=t.n(a),i=t(481060),s=t(617136),l=t(915750),c=t(497505),f=t(918701),u=t(796111),p=t(880199),_=t(667105),C=t(341907),v=t(604162),x=t(46140),g=t(388032),m=t(822923);function B(e){let{quest:n,taskDetails:t}=e;return(0,o.jsx)(i.zxk,{className:m.cta,color:i.zxk.Colors.BRAND,fullWidth:!0,onClick:()=>{(0,C.openVideoQuestModal)(n)},size:i.zxk.Sizes.SMALL,children:(0,v.F9)(t)})}let S=e=>{let{quest:n}=e,t=(0,l.aM)();return(0,o.jsx)(i.zxk,{className:m.cta,size:i.zxk.Sizes.SMALL,onClick:()=>(0,f.FE)(n,{content:c.jn.QUEST_BAR_V2,ctaContent:s.jZ.OPEN_GAME_LINK,impressionId:t}),children:(0,f.pO)(n)?g.intl.string(g.t.hvVgAQ):g.intl.string(g.t.lwQdjI)})},b=e=>{var n;let{quest:t}=e,r=null===(n=(0,l.WD)())||void 0===n?void 0:n.getId();return(0,o.jsx)(i.zxk,{fullWidth:!0,className:m.cta,onClick:()=>(0,f.gI)({quest:t},{content:c.jn.QUEST_BAR_V2,ctaContent:s.jZ.CONNECT_CONSOLE,impressionId:r}),size:i.zxk.Sizes.SMALL,children:g.intl.string(g.t.csptqa)})},k=e=>{let{quest:n,useReducedMotion:t,isExpanded:a,className:s,ctaLabel:l,onClick:f,...u}=e,p=(0,_.hf)({quest:n,location:c.jn.QUEST_BAR_V2}),C=r.useCallback(e=>{null==f||f(e),p()},[f,p]);return(0,o.jsx)(i.gtL,{fullWidth:!0,size:i.zxk.Sizes.SMALL,onClick:C,pauseAnimation:t||!a,className:d()(m.cta,s),buttonShineClassName:m.shine,...u,children:null!=l?l:g.intl.string(g.t.cfY4PD)})},h=e=>{var n;let{quest:t,useReducedMotion:r,isExpanded:a,awaitingConsoleConnections:d,hasMadeProgress:i,isProgressing:s,activeScreen:l,taskDetails:_}=e,C=(null===(n=t.userStatus)||void 0===n?void 0:n.completedAt)!=null,v=(0,u.P)({location:x.dr.QUESTS_BAR}),g=(0,f.q8)(t),m=(0,f.xN)(t.config);if(C&&m){let e=(0,f.LM)(t.config);return(0,o.jsx)(k,{quest:t,useReducedMotion:r,isExpanded:a,ctaLabel:(0,o.jsx)(p.Z,{orbQuantity:e})})}if(C)return(0,o.jsx)(k,{quest:t,useReducedMotion:r,isExpanded:a});if(g)return(0,o.jsx)(B,{quest:t,taskDetails:_});if(l===c.LI.CONSOLE&&d&&!v)return(0,o.jsx)(b,{quest:t});if(l!==c.LI.SELECT&&!i&&!s)return(0,o.jsx)(S,{quest:t});return null};function y(e){return(0,o.jsxs)("div",{className:m.ctaButtons,children:[e.showBackButton&&(0,o.jsx)(i.zxk,{className:m.backButton,innerClassName:m.backButtonInner,look:"blank",grow:!1,fullWidth:!1,size:"none",onClick:e.onBack,children:(0,o.jsx)(i.V7D,{className:m.backIcon})}),(0,o.jsx)(h,{...e})]})}},472144:function(e,n,t){t.d(n,{Z:()=>u});var o=t(200651),r=t(192379),a=t(120356),d=t.n(a),i=t(642128),s=t(481060),l=t(569379),c=t(642145),f=t(819893);let u=r.forwardRef((e,n)=>{let{quest:t,percentComplete:r,size:a=42,strokeWidth:u=3,glowBlur:p=.4,percentCompleteText:_,percentCompleteTextVariant:C="text-lg/medium",children:v}=e,x=(0,l.E)(t,r>0),g=a/2,m=a/2-u/2,B=2*Math.PI*m,S=B-r*B,b={strokeDasharray:"".concat(B," ").concat(B),strokeDashoffset:S},k={strokeDasharray:"".concat(B," ").concat(B),strokeDashoffset:-r*B},h={boxShadow:"0 0 30px 0px ".concat(x.glow)},{progressTextAnimation:y}=(0,s.q_F)({progressTextAnimation:null!=_&&1!==r?1:0,config:c.Y});return(0,o.jsxs)("div",{className:f.outer,ref:n,children:[(0,o.jsxs)("div",{className:f.inner,style:h,children:[v,(0,o.jsxs)(i.animated.div,{style:{opacity:y},className:d()(f.coverContent,f.progressTextWrapper),children:[(0,o.jsx)("div",{className:d()(f.coverContent,f.progressTextOverlay)}),(0,o.jsx)(s.Text,{variant:C,color:"text-primary",className:f.progressText,children:_})]})]}),(0,o.jsxs)("svg",{className:f.progressBar,height:a,width:a,children:[(0,o.jsxs)("defs",{children:[(0,o.jsxs)("filter",{id:"glow",children:[(0,o.jsx)("feGaussianBlur",{result:"coloredBlur",stdDeviation:p}),(0,o.jsxs)("feMerge",{children:[(0,o.jsx)("feMergeNode",{in:"coloredBlur"}),(0,o.jsx)("feMergeNode",{in:"coloredBlur"}),(0,o.jsx)("feMergeNode",{in:"coloredBlur"}),(0,o.jsx)("feMergeNode",{in:"SourceGraphic"})]})]}),(0,o.jsxs)("linearGradient",{id:"linear",x1:"100%",y1:"0%",x2:"0%",y2:"0%",children:[(0,o.jsx)("stop",{offset:"0%",stopColor:x.backgroundTop}),(0,o.jsx)("stop",{offset:"100%",stopColor:x.backgroundBottom})]})]}),(0,o.jsx)("circle",{className:f.progress,strokeWidth:u,fill:"transparent",r:m,cx:g,cy:g,stroke:"url(#linear)",style:k}),(0,o.jsx)("circle",{className:f.progress,strokeWidth:u,fill:"transparent",r:m,cx:g,cy:g,stroke:x.foreground,style:b})]})]})})},569379:function(e,n,t){t.d(n,{E:()=>s,G:()=>i}),t(47120);var o=t(192379),r=t(481060),a=t(410030),d=t(113434);function i(){let[{spring:e},n]=(0,r.q_F)(()=>({spring:0}),"animate-always");return{completionSpring:e,startCompletionAnimation:o.useCallback(()=>{n({spring:1}),n({spring:0,delay:2e3})},[n])}}function s(e,n){var t;let o=(0,d.z)(e),r=null!==(t=(0,a.i6)())&&void 0!==t?t:0,i="var(--green-330)",s=["var(--background-tertiary)","var(--interactive-normal)"];return{backgroundTop:n?s[r]:["#828288","#CBCDD4"][r],backgroundBottom:n?s[r]:["#535356","#8B8C95"][r],foreground:i,glow:n&&o?i:"#C4C1D66E"}}},822923:function(e,n,t){e.exports={ctaButtons:"ctaButtons_a77fde",cta:"cta_a77fde",shine:"shine_a77fde",backButton:"backButton_a77fde",backButtonInner:"backButtonInner_a77fde",backIcon:"backIcon_a77fde"}},819893:function(e,n,t){e.exports={outer:"outer_bb1069",progressBar:"progressBar_bb1069",progress:"progress_bb1069",inner:"inner_bb1069",coverContent:"coverContent_bb1069",progressTextWrapper:"progressTextWrapper_bb1069",progressTextOverlay:"progressTextOverlay_bb1069",progressText:"progressText_bb1069"}},795265:function(e,n,t){e.exports={endScreenOverlay:"endScreenOverlay_afedfc","animate-fade-in":"animate-fade-in_afedfc",endScreenImageBackground:"endScreenImageBackground_afedfc",endScreenContainer:"endScreenContainer_afedfc",endScreenCard:"endScreenCard_afedfc",endScreenCtaContainer:"endScreenCtaContainer_afedfc",endScreenCtaTitleContainer:"endScreenCtaTitleContainer_afedfc",endScreenCtaBtnTitle:"endScreenCtaBtnTitle_afedfc",endScreenCtaTitle:"endScreenCtaTitle_afedfc",endScreenCtaSubtitle:"endScreenCtaSubtitle_afedfc",endScreenCtaBtn:"endScreenCtaBtn_afedfc",accentOnHover:"accentOnHover_afedfc",endScreenIcon:"endScreenIcon_afedfc",shine:"shine_afedfc"}},152860:function(e,n,t){e.exports={modalRoot:"modalRoot_de2fa0",modalBody:"modalBody_de2fa0",modalBg:"modalBg_de2fa0",modalContent:"modalContent_de2fa0",videoCont:"videoCont_de2fa0",videoContInnerRelative:"videoContInnerRelative_de2fa0",videoContOverlay:"videoContOverlay_de2fa0","animate-fade-in":"animate-fade-in_de2fa0",hidden:"hidden_de2fa0",videoInner:"videoInner_de2fa0",videoFooterCont:"videoFooterCont_de2fa0",videoFooterContGradient:"videoFooterContGradient_de2fa0",videoControlsCont:"videoControlsCont_de2fa0",videoControlsGroup:"videoControlsGroup_de2fa0",videoControlsGroupMid:"videoControlsGroupMid_de2fa0",videoControlsGroupEnd:"videoControlsGroupEnd_de2fa0",videoControlsBtnCont:"videoControlsBtnCont_de2fa0",videoControlsBtn:"videoControlsBtn_de2fa0",videoControlsBtnContDisabled:"videoControlsBtnContDisabled_de2fa0",videoControlsBtnTooltip:"videoControlsBtnTooltip_de2fa0",videoControlsBtnTooltipKeyCombo:"videoControlsBtnTooltipKeyCombo_de2fa0",volumeControlGroup:"volumeControlGroup_de2fa0",controlsBarItem:"controlsBarItem_de2fa0",controlsBarItemActive:"controlsBarItemActive_de2fa0",durationTimeWrapper:"durationTimeWrapper_de2fa0",durationTimeDisplay:"durationTimeDisplay_de2fa0",durationTimeSeparator:"durationTimeSeparator_de2fa0",volumeSlider:"volumeSlider_de2fa0",contentHeader:"contentHeader_de2fa0",contentHeaderGameInfo:"contentHeaderGameInfo_de2fa0",contentHeaderLogotype:"contentHeaderLogotype_de2fa0",accentOnHover:"accentOnHover_de2fa0",questHeading:"questHeading_de2fa0",contentFooter:"contentFooter_de2fa0",contentFooterButtonCont:"contentFooterButtonCont_de2fa0",claimBtn:"claimBtn_de2fa0",progressCont:"progressCont_de2fa0",questProgressRewardTile:"questProgressRewardTile_de2fa0",transcriptOverlay:"transcriptOverlay_de2fa0",transcriptCont:"transcriptCont_de2fa0",transcriptScroller:"transcriptScroller_de2fa0",transcriptBackBtn:"transcriptBackBtn_de2fa0",transcriptHeader:"transcriptHeader_de2fa0",transcriptBody:"transcriptBody_de2fa0",stillFrameImageCard:"stillFrameImageCard_de2fa0",stillFrameImageCardHidden:"stillFrameImageCardHidden_de2fa0",endScreenPanel:"endScreenPanel_de2fa0",endScreenPanelInner:"endScreenPanelInner_de2fa0",endScreenPanelTextCont:"endScreenPanelTextCont_de2fa0",endScreenPanelTextTitle:"endScreenPanelTextTitle_de2fa0",endScreenPanelTextSubtitle:"endScreenPanelTextSubtitle_de2fa0",endScreenPanelRight:"endScreenPanelRight_de2fa0",endScreenIcon:"endScreenIcon_de2fa0",verticalDivider:"verticalDivider_de2fa0",loadingSpinner:"loadingSpinner_de2fa0",captionContainer:"captionContainer_de2fa0",captionText:"captionText_de2fa0",playPausePopCont:"playPausePopCont_de2fa0",playPausePopIcon:"playPausePopIcon_de2fa0",pause:"pause_de2fa0",play:"play_de2fa0",playPauseAnimation:"playPauseAnimation_de2fa0",transcriptBodySpinner:"transcriptBodySpinner_de2fa0",pauseText:"pauseText_de2fa0",copyLinkBtn:"copyLinkBtn_de2fa0",footerBtn:"footerBtn_de2fa0"}},269954:function(e,n,t){e.exports={cont:"cont__370d1",hitboxArea:"hitboxArea__370d1",interactionEnabled:"interactionEnabled__370d1",progress:"progress__370d1",progressGlow:"progressGlow__370d1",buffer:"buffer__370d1",seekableBar:"seekableBar__370d1",bufferHovered:"bufferHovered__370d1",timeDisplay:"timeDisplay__370d1",grabber:"grabber__370d1"}}}]);
//# sourceMappingURL=26693137b10ff20c.js.map