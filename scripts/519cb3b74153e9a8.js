"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["31649"],{787885:function(e){e.exports="/assets/7d67842f58b6d155.svg"},875425:function(e,t,n){n.d(t,{Df:()=>o,FO:()=>s,Q9:()=>u,s0:()=>i,wS:()=>r});var l=n(231338),a=n(388032);let i=128,s=Object.freeze({MINUTES_30:18e5,HOURS_1:36e5,HOURS_4:144e5,TODAY:"TODAY",DONT_CLEAR:"DONT_CLEAR"}),o=[{value:l.Sk.ONLINE,label:()=>a.intl.string(a.t.WbGtnJ)},{value:l.Sk.IDLE,label:()=>a.intl.string(a.t.qWbtVV)},{value:l.Sk.DND,label:()=>a.intl.string(a.t.jaNpQE)},{value:l.Sk.INVISIBLE,label:()=>a.intl.string(a.t.bg24HB)}],r=[{value:s.TODAY,label:()=>a.intl.string(a.t.GQmLra)},{value:s.HOURS_4,label:()=>a.intl.formatToPlainString(a.t.Rea2gY,{hours:4})},{value:s.HOURS_1,label:()=>a.intl.formatToPlainString(a.t.Rea2gY,{hours:1})},{value:s.MINUTES_30,label:()=>a.intl.formatToPlainString(a.t.TS3eJS,{minutes:30})},{value:s.DONT_CLEAR,label:()=>a.intl.string(a.t.bRn8cn)}],u=[{value:s.TODAY,label:()=>a.intl.string(a.t.TOEOaW)},{value:s.HOURS_4,label:()=>a.intl.formatToPlainString(a.t.Yizuvb,{hours:4})},{value:s.HOURS_1,label:()=>a.intl.formatToPlainString(a.t.Yizuvb,{hours:1})},{value:s.MINUTES_30,label:()=>a.intl.formatToPlainString(a.t["/XUoq6"],{minutes:30})},{value:s.DONT_CLEAR,label:()=>a.intl.string(a.t.bRn8cn)}]},720449:function(e,t,n){n.d(t,{Z:()=>c});var l=n(913527),a=n.n(l),i=n(695346),s=n(626135),o=n(337953),r=n(875425),u=n(981631);function c(e,t,n,l,c){let d=e.trim();if(!(d.length>0)&&null==t)return i.Ok.updateSetting(void 0);{let e=i.Ok.updateSetting({text:d.length>0?d:"",expiresAtMs:null!=n&&n!==r.FO.DONT_CLEAR?String(a()().add((0,o.Z)(n),"ms").toDate().getTime()):"0",emojiId:null!=t&&null!=t.id?t.id:"0",emojiName:null!=t?t.name:"",createdAtMs:String(null!=c?c:a()().toDate().getTime())});return s.default.track(u.rMx.CUSTOM_STATUS_UPDATED,{location:null!=l?l.location:null,emoji_type:null==t?null:null!=t.id?"custom":"unicode",text_len:d.length,clear_after:null!=n?"".concat(n):null}),e}}},684269:function(e,t,n){n.d(t,{Z:()=>s});var l=n(695346),a=n(875425);let i=Object.values(a.FO).filter(e=>"number"==typeof e).sort((e,t)=>e-t);function s(){var e;let t=l.Ok.getSetting();if(null==t||""===t.expiresAtMs)return a.FO.TODAY;let n=Number(t.expiresAtMs);if(isNaN(n))return a.FO.TODAY;if(0===n)return a.FO.DONT_CLEAR;let s=new Date,o=new Date(n);if(s.getFullYear()!==o.getFullYear()||s.getMonth()!==o.getMonth()||s.getDate()!==o.getDate())return a.FO.TODAY;let r=Number(n)-Date.now();return null!==(e=i.find(e=>r<=e))&&void 0!==e?e:a.FO.TODAY}},678865:function(e,t,n){n.d(t,{Z:()=>s}),n(627341);var l=n(278074),a=n(481060),i=n(695346);function s(){let e=i.co.getSetting();return(0,l.EQ)(e).with(a.Skl.IDLE,()=>a.Skl.IDLE).with(a.Skl.DND,()=>a.Skl.DND).with(a.Skl.INVISIBLE,()=>a.Skl.INVISIBLE).otherwise(()=>a.Skl.ONLINE)}},337953:function(e,t,n){n.d(t,{Z:()=>s});var l=n(512722),a=n.n(l),i=n(875425);function s(e){if(e!==i.FO.TODAY)return a()("number"==typeof e,"Invalid custom status clear timeout"),e;{let e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate()+1).getTime()-e.getTime()}}},211065:function(e,t,n){n.d(t,{Z:()=>D}),n(47120);var l=n(200651),a=n(192379),i=n(512722),s=n.n(i),o=n(442837),r=n(481060),u=n(596454),c=n(410575),d=n(318766),m=n(907040),h=n(246133),f=n(233200),p=n(695346),S=n(293273),x=n(594174),_=n(626135),v=n(720449),j=n(684269),g=n(678865),b=n(875425),N=n(981631),C=n(185923),I=n(388032),T=n(154424);function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){return(0,l.jsxs)("div",{className:T.statusOptionItem,children:[(0,l.jsx)(r.qbd,{status:e.value,size:10,className:T.statusIcon}),e.label]})}class k extends a.PureComponent{componentDidMount(){let{sourceAnalyticsLocations:e,sourceAnalyticsContext:t}=this.props;_.default.track(N.rMx.OPEN_MODAL,{source:null==t?void 0:t.location,type:N.jXE.CUSTOM_STATUS_MODAL,load_id:null==t?void 0:t.loadId,location_stack:e})}get analyticsLocation(){return{page:N.ZY5.CUSTOM_STATUS_MODAL}}get canShowStatusSelector(){return!(0,f.A)({location:"CustomStatusModal"})}getEmojiButtonRenderer(){let{emojiInfo:e}=this.state;return null==e?null:()=>(0,l.jsx)(u.Z,{className:T.emoji,emojiId:e.id,emojiName:e.name,animated:!!e.animated})}renderCustomStatusInput(){let{user:e}=this.props,{text:t,emojiInfo:n}=this.state;return(0,l.jsx)(r.hjN,{className:T.formGroup,title:I.intl.formatToPlainString(I.t["/w9pHx"],{username:e.username}),children:(0,l.jsxs)("div",{className:T.inputContainer,children:[(0,l.jsx)("div",{className:T.emojiButtonContainer,children:(0,l.jsx)(r.yRy,{renderPopout:this.renderEmojiPicker,position:"left",animation:r.yRy.Animation.NONE,align:"top",children:(e,t)=>{let{isShown:n}=t;return(0,l.jsx)(d.Z,{...e,active:n,className:T.emojiButton,tabIndex:0,renderButtonContents:this.getEmojiButtonRenderer()})}})}),(0,l.jsx)(r.oil,{maxLength:b.s0,value:t,inputClassName:T.input,placeholder:I.intl.string(I.t["zYR38/"]),onChange:this.handleStatusChange,onKeyPress:this.handleKeyPress,autoFocus:!0}),t.length>0||null!=n?(0,l.jsx)(r.zxk,{focusProps:{offset:{top:8,bottom:8,left:-2,right:-2}},className:T.clearButton,onClick:this.handleClearStatus,look:r.zxk.Looks.BLANK,size:r.zxk.Sizes.NONE,children:(0,l.jsx)(r.k$p,{size:"md",color:"currentColor",className:T.clearIcon})}):null]})})}renderClearAfter(){let{clearAfter:e}=this.state;return(0,l.jsx)(r.hjN,{className:T.formGroup,title:I.intl.string(I.t.E45wvL),children:(0,l.jsx)(r.q4e,{placeholder:I.intl.string(I.t.E45wvL),maxVisibleItems:5,value:e,options:b.wS.map(e=>({...e,value:e.value,key:e.value,label:e.label()})),onChange:this.handleChangeClearAfter})})}renderStatusInput(){let{status:e}=this.state;return(0,l.jsx)(r.hjN,{className:T.formGroup,title:I.intl.string(I.t.zOdg0N),children:(0,l.jsx)(r.q4e,{maxVisibleItems:4,value:e,options:b.Df.map(e=>({...e,value:e.value,key:e.value,label:e.label()})),onChange:this.handleChangeStatus,renderOptionLabel:O})})}render(){let{transitionState:e,onClose:t}=this.props;return(0,l.jsx)(c.Z,{...this.analyticsLocation,children:(0,l.jsxs)(r.Y0X,{transitionState:e,className:T.modalRoot,"aria-label":I.intl.string(I.t["/UonHB"]),children:[(0,l.jsxs)(r.xBx,{separator:!1,className:T.headerContainer,children:[(0,l.jsx)("div",{className:T.art}),(0,l.jsx)("div",{className:T.header,children:(0,l.jsx)(r.H,{className:T.headerText,children:I.intl.string(I.t["/UonHB"])})}),(0,l.jsx)(r.olH,{onClick:t,className:T.modalCloseButton})]}),(0,l.jsxs)(r.hzk,{children:[this.renderCustomStatusInput(),this.renderClearAfter(),this.canShowStatusSelector&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.$i$,{className:T.formDivider}),this.renderStatusInput()]})]}),(0,l.jsxs)(r.mzw,{children:[(0,l.jsx)(r.zxk,{onClick:this.handleSubmit,children:I.intl.string(I.t.R3BPHx)}),(0,l.jsx)(r.zxk,{onClick:t,look:r.zxk.Looks.LINK,color:T.cancelButton,children:I.intl.string(I.t["ETE/oK"])})]})]})})}constructor(...e){super(...e),E(this,"state",{emojiInfo:null!=this.props.customStatus?this.props.customStatus.emoji:null,text:null!=this.props.customStatus&&null!=this.props.customStatus.state?this.props.customStatus.state:"",clearAfter:(0,j.Z)(),status:(0,g.Z)()}),E(this,"handleClearStatus",()=>{this.setState({emojiInfo:null,text:""})}),E(this,"handleSubmit",e=>{e.preventDefault(),this.handleSaveStatus()}),E(this,"handleStatusChange",e=>{this.setState({text:e})}),E(this,"handleEmojiChange",e=>{if(null==e)return;let t=null!=e.id?{id:e.id,name:e.name,animated:e.animated}:{id:null,name:e.optionallyDiverseSequence,animated:!1};this.setState({emojiInfo:t})}),E(this,"handleChangeClearAfter",e=>{this.setState({clearAfter:e})}),E(this,"handleChangeStatus",e=>{this.setState({status:e})}),E(this,"handleSaveStatus",()=>{let{sourceAnalyticsContext:e,onClose:t}=this.props,{emojiInfo:n,text:l,clearAfter:a,status:i}=this.state,s=p.co.getSetting();s!==i&&(0,h.Z)(i,s,e),(0,v.Z)(l,n,a,e),t()}),E(this,"handleKeyPress",e=>{e.which===N.yXg.ENTER&&this.handleSaveStatus()}),E(this,"renderEmojiPicker",e=>{let{closePopout:t}=e,{onClose:n}=this.props;return(0,l.jsx)(m.Z,{closePopout:t,onSelectEmoji:(e,n)=>{this.handleEmojiChange(e),n&&t()},pickerIntention:C.Hz.STATUS,onNavigateAway:n})})}}let D=o.ZP.connectStores([S.Z,x.default],()=>{let e=x.default.getCurrentUser();return s()(null!=e,"CustomStatusModal: user cannot be null"),{customStatus:S.Z.getCustomStatusActivity(),user:e}},{forwardRef:!0})(k)},475613:function(e,t,n){n.d(t,{default:()=>o});var l=n(200651),a=n(503817),i=n(211065),s=n(245247);function o(e){let{location:t,...n}=e;return(0,a.DX)({location:t})?(0,l.jsx)(s.Z,{...n}):(0,l.jsx)(i.Z,{...n})}},926563:function(e,t,n){n.d(t,{Z:()=>S});var l=n(200651);n(192379);var a=n(481060),i=n(680295),s=n(687158),o=n(899007),r=n(648052),u=n(867176),c=n(502762),d=n(530),m=n(4517),h=n(5192),f=n(228168),p=n(963792);function S(e){let{user:t,previewText:n,previewEmoji:S,previewStatus:x,placeHolderText:_,transitionState:v}=e,j=(0,s.ZP)(t.id);return(0,l.jsxs)(c.Z,{user:t,displayProfile:j,profileType:f.y0.BITE_SIZE,className:p.profilePreviewContainer,children:[(0,l.jsxs)("header",{children:[(0,l.jsx)(u.Z,{user:t,displayProfile:j,profileType:f.y0.BITE_SIZE}),(0,l.jsx)("div",{inert:"",children:(0,l.jsx)(o.Z,{user:t,displayProfile:j,profileType:f.y0.BITE_SIZE,previewStatus:x,className:p.avatar})}),(0,l.jsx)(m.Z,{location:"CustomStatusUserProfilePreview",user:t,profileType:f.y0.BITE_SIZE,previewText:n,previewEmoji:S,placeholderText:_,hasEntered:v===a.Dvm.ENTERED})]}),(null==j?void 0:j.profileEffectId)!=null&&(0,l.jsx)(i.Z,{profileEffectId:j.profileEffectId}),(0,l.jsx)("div",{className:p.usernameContainer,inert:"",children:(0,l.jsx)(d.Z,{user:t,profileType:f.y0.BITE_SIZE,nickname:h.ZP.getName(null,null,t),pronouns:null==j?void 0:j.pronouns,tags:(0,l.jsx)(r.Z,{displayProfile:j,profileType:f.y0.BITE_SIZE})})})]})}},245247:function(e,t,n){n.d(t,{Z:()=>O}),n(47120);var l=n(200651),a=n(192379),i=n(442837),s=n(481060),o=n(596454),r=n(100527),u=n(318766),c=n(907040),d=n(246133),m=n(503817),h=n(695346),f=n(594174),p=n(626135),S=n(720449),x=n(684269),_=n(678865),v=n(676035),j=n(926563),g=n(875425),b=n(981631),N=n(185923),C=n(388032),I=n(558969);function T(e){let{value:t,label:n}=e;return(0,l.jsxs)("div",{className:I.statusOptionItem,children:[(0,l.jsx)(s.qbd,{status:t,size:10,className:I.statusIcon}),n]},t)}function E(e){return e.map(e=>(0,l.jsx)(T,{value:e.value,label:e.label},e.value))}function O(e){var t,n;let{transitionState:O,onClose:k,sourceAnalyticsContext:D,sourceAnalyticsLocations:B}=e,{enabledWithStatusSelection:w}=(0,m.hM)({location:"CustomStatusModalWithPreview"}),A=(0,i.e7)([f.default],()=>{var e;return null!==(e=f.default.getCurrentUser())&&void 0!==e?e:null}),y=(0,v.a)(),[Z,P]=a.useState(null!==(t=null==y?void 0:y.state)&&void 0!==t?t:""),[z,R]=a.useState(null!==(n=null==y?void 0:y.emoji)&&void 0!==n?n:null),[L,M]=a.useState((0,_.Z)()),[U,Y]=a.useState((0,x.Z)()),H=a.useRef(null);a.useEffect(()=>{p.default.track(b.rMx.OPEN_MODAL,{type:r.Z.CUSTOM_STATUS_MODAL,location_stack:B})},[B]),a.useEffect(()=>{if(null!=H.current){let e=H.current;e.focus(),e.setSelection(Z.length,Z.length)}});let W=e=>{null!=e&&R(null!=e.id?{id:e.id,name:e.name,animated:e.animated}:{id:null,name:e.optionallyDiverseSequence,animated:!1})},F=()=>{let e=h.co.getSetting();e!==L&&(0,d.Z)(L,e,D),(0,S.Z)(Z,z,U,D),k()},q=()=>null==z?null:()=>(0,l.jsx)(o.Z,{className:I.emoji,emojiId:z.id,emojiName:z.name,animated:!!z.animated});return(0,l.jsxs)(s.Y0X,{transitionState:O,children:[(0,l.jsxs)(s.xBx,{separator:!1,className:I.header,children:[(0,l.jsx)("div",{className:I.headerTitle,children:(0,l.jsx)(s.X6q,{variant:"heading-xl/semibold",children:C.intl.string(C.t.Zx4jzM)})}),(0,l.jsx)("div",{className:I.headerCloseButton,children:(0,l.jsx)(s.olH,{onClick:k})})]}),(0,l.jsxs)(s.hzk,{children:[null!=A&&(0,l.jsx)("div",{className:I.profilePreview,children:(0,l.jsx)(j.Z,{user:A,previewText:Z,previewEmoji:z,placeHolderText:C.intl.string(C.t["xod36+"]),previewStatus:L,transitionState:O})}),(0,l.jsx)(s.hjN,{className:I.formGroup,title:C.intl.string(C.t.UcdRn5),children:(0,l.jsxs)("div",{className:I.inputContainer,children:[(0,l.jsx)("div",{className:I.emojiButtonContainer,children:(0,l.jsx)(s.yRy,{renderPopout:e=>{let{closePopout:t}=e;return(0,l.jsx)(c.Z,{closePopout:t,onSelectEmoji:(e,n)=>{W(e),n&&t()},pickerIntention:N.Hz.STATUS,onNavigateAway:k})},position:"left",animation:s.yRy.Animation.NONE,align:"top",children:(e,t)=>{let{isShown:n}=t;return(0,l.jsx)(u.Z,{...e,active:n,className:I.emojiButton,tabIndex:0,renderButtonContents:q()})}})}),(0,l.jsx)(s.Kx8,{autosize:!0,value:Z,maxLength:g.s0,rows:1,showRemainingCharacterCount:!1,placeholder:C.intl.string(C.t["xod36+"]),onChange:e=>{P(e)},onKeyDown:e=>{"Enter"===e.key&&F()},className:I.input,inputRef:H}),(Z.length>0||null!=z)&&(0,l.jsx)("div",{className:I.clearButtonWrapper,children:(0,l.jsx)(s.zxk,{focusProps:{offset:{top:8,bottom:8,left:-2,right:-2}},className:I.clearButton,onClick:()=>{P(""),R(null)},look:s.zxk.Looks.BLANK,size:s.zxk.Sizes.NONE,children:(0,l.jsx)(s.k$p,{size:"md",color:"currentColor",className:I.clearIcon})})})]})}),w&&(0,l.jsxs)(s.hjN,{className:I.formGroup,title:C.intl.string(C.t.zOdg0N),children:[(0,l.jsx)(s.q4e,{maxVisibleItems:g.Df.length,value:L,options:g.Df.map(e=>({...e,key:e.value,value:e.value,label:e.label()})),onChange:M,renderOptionLabel:e=>{let{value:t,label:n}=e;return(0,l.jsx)(T,{value:t,label:n})},renderOptionValue:E}),L===s.Skl.INVISIBLE&&(0,l.jsx)("div",{className:I.invisibleStatusNotice,children:(0,l.jsx)(s.Text,{variant:"text-sm/medium",color:"text-muted",children:C.intl.string(C.t.IUwOOD)})})]})]}),(0,l.jsx)(s.mzw,{children:(0,l.jsxs)("div",{className:I.footer,children:[(0,l.jsx)("div",{className:I.clearAfterSelectContainer,children:(0,l.jsx)(s.q4e,{maxVisibleItems:g.Q9.length,value:U,options:g.Q9.map(e=>({...e,key:e.value,value:e.value,label:e.label()})),onChange:Y,look:s.qQH.CUSTOM,popoutWidth:200,popoutPosition:"right"})}),(0,l.jsx)(s.zxk,{type:"submit",size:s.zxk.Sizes.MEDIUM,color:s.zxk.Colors.BRAND,onClick:F,children:C.intl.string(C.t.R3BPHx)})]})})]})}},233200:function(e,t,n){n.d(t,{A:()=>a});let l=(0,n(818083).B)({kind:"user",id:"2025-02_custom_status_editing_without_status_selector",label:"Custom Status Editing Without Status Selector",defaultConfig:{enabled:!1},treatments:[{id:1,label:"Enable custom status editing without status selector",config:{enabled:!0}}]});function a(e){let{location:t,autoTrackExposure:n=!0}=e;return l.getCurrentConfig({location:t},{autoTrackExposure:n}).enabled}},503817:function(e,t,n){n.d(t,{DX:()=>a,hM:()=>i});let l=(0,n(818083).B)({kind:"user",id:"2025-01_user_profile_custom_status_edit_preview",label:"User Profile Custom Status Edit Preview",defaultConfig:{enabledWithStatusSelection:!1,enabledWithoutSatusSelection:!1},treatments:[{id:1,label:"Enable updated custom status editing modal with preview",config:{enabledWithStatusSelection:!0,enabledWithoutSatusSelection:!1}},{id:2,label:"Enable updated custom status editing modal with preview without status selection",config:{enabledWithStatusSelection:!1,enabledWithoutSatusSelection:!0}}]});function a(e){let{location:t,autoTrackExposure:n=!0}=e,a=l.getCurrentConfig({location:t},{autoTrackExposure:n});return a.enabledWithStatusSelection||a.enabledWithoutSatusSelection}function i(e){let{location:t,autoTrackExposure:n=!0}=e,{enabledWithStatusSelection:a,enabledWithoutSatusSelection:i}=l.useExperiment({location:t},{autoTrackExposure:n});return{enabledWithStatusSelection:a,enabledWithoutSatusSelection:i}}},154424:function(e,t,n){e.exports={formGroup:"formGroup__9b8f6",formDivider:"formDivider__9b8f6",modalRoot:"modalRoot__9b8f6",inputContainer:"inputContainer__9b8f6",modalCloseButton:"modalCloseButton__9b8f6",headerText:"headerText__9b8f6",emojiButton:"emojiButton__9b8f6",emojiButtonContainer:"emojiButtonContainer__9b8f6",emoji:"emoji__9b8f6",input:"input__9b8f6",clearButton:"clearButton__9b8f6",clearIcon:"clearIcon__9b8f6",headerContainer:"headerContainer__9b8f6",header:"header__9b8f6",art:"art__9b8f6",cancelButton:"cancelButton__9b8f6",statusOptionItem:"statusOptionItem__9b8f6",statusIcon:"statusIcon__9b8f6"}},963792:function(e,t,n){e.exports={profilePreviewContainer:"profilePreviewContainer__8771c",usernameContainer:"usernameContainer__8771c",avatar:"avatar__8771c"}},558969:function(e,t,n){e.exports={formGroup:"formGroup__7fd1c",inputContainer:"inputContainer__7fd1c",emojiButton:"emojiButton__7fd1c",emojiButtonContainer:"emojiButtonContainer__7fd1c",emoji:"emoji__7fd1c",input:"input__7fd1c",clearButtonWrapper:"clearButtonWrapper__7fd1c",clearButton:"clearButton__7fd1c",clearIcon:"clearIcon__7fd1c",statusOptionItem:"statusOptionItem__7fd1c",statusIcon:"statusIcon__7fd1c",header:"header__7fd1c",headerTitle:"headerTitle__7fd1c",headerCloseButton:"headerCloseButton__7fd1c",footer:"footer__7fd1c",clearAfterSelectContainer:"clearAfterSelectContainer__7fd1c",profilePreview:"profilePreview__7fd1c",invisibleStatusNotice:"invisibleStatusNotice__7fd1c"}}}]);
//# sourceMappingURL=519cb3b74153e9a8.js.map