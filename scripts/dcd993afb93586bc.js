"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["87337"],{444812:function(e){e.exports="/assets/85365cfdb1a824c8.svg"},289823:function(e,t,n){n.d(t,{Z:()=>x});var s=n(200651),i=n(192379),r=n(120356),a=n.n(r),l=n(974674),o=n(438784),_=n(481060),c=n(686546),d=n(3682),u=n(974193);let g={},A=1/4;function m(e){let{height:t,fillColor:n}=e;return(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:t/2,backgroundColor:n,height:t,width:t*d.jR},children:(0,s.jsx)(o.b,{className:u.dots,dotRadius:t*A})})}function h(e){let{isTyping:t,statusCoords:n,status:i}=e,r=(0,_.vjg)(_.Skl.ONLINE);return t?(0,s.jsx)("div",{style:{position:"absolute",top:n.y,left:n.x},children:(0,s.jsx)(m,{height:n.height,fillColor:r})}):null!=i?(0,s.jsx)(_.qbd,{size:n.height,status:i,style:{position:"absolute",top:n.y,left:n.x}}):null}function I(e){let{src:t,size:n}=e;return(0,s.jsx)("img",{className:u.circularImage,src:t,alt:"",width:n,height:n})}let E={[_.EFr.SIZE_16]:{default:c.QS.DIAGONAL_FACEPILE_16,typing:c.QS.DIAGONAL_FACEPILE_TYPING_16,status:c.QS.DIAGONAL_FACEPILE_STATUS_16},[_.EFr.SIZE_20]:{default:c.QS.DIAGONAL_FACEPILE_20,typing:c.QS.DIAGONAL_FACEPILE_TYPING_20,status:c.QS.DIAGONAL_FACEPILE_STATUS_20},[_.EFr.SIZE_24]:{default:c.QS.DIAGONAL_FACEPILE_24,typing:c.QS.DIAGONAL_FACEPILE_TYPING_24,status:c.QS.DIAGONAL_FACEPILE_STATUS_24},[_.EFr.SIZE_32]:{default:c.QS.DIAGONAL_FACEPILE_32,typing:c.QS.DIAGONAL_FACEPILE_TYPING_32,status:c.QS.DIAGONAL_FACEPILE_STATUS_32},[_.EFr.SIZE_40]:{default:c.QS.DIAGONAL_FACEPILE_32,typing:c.QS.DIAGONAL_FACEPILE_TYPING_32,status:c.QS.DIAGONAL_FACEPILE_STATUS_32},[_.EFr.SIZE_48]:{default:c.QS.DIAGONAL_FACEPILE_40,typing:c.QS.DIAGONAL_FACEPILE_TYPING_40,status:c.QS.DIAGONAL_FACEPILE_STATUS_40},[_.EFr.SIZE_56]:{default:c.QS.DIAGONAL_FACEPILE_56,typing:c.QS.DIAGONAL_FACEPILE_TYPING_56,status:c.QS.DIAGONAL_FACEPILE_STATUS_56},[_.EFr.SIZE_80]:{default:c.QS.DIAGONAL_FACEPILE_80,typing:c.QS.DIAGONAL_FACEPILE_TYPING_80,status:c.QS.DIAGONAL_FACEPILE_STATUS_80},[_.EFr.SIZE_120]:{default:c.QS.DIAGONAL_FACEPILE_120,typing:c.QS.DIAGONAL_FACEPILE_TYPING_120,status:c.QS.DIAGONAL_FACEPILE_STATUS_120}},x=function(e){var t;let{backSrc:n,frontSrc:r,size:o,isTyping:A,status:m,style:x,className:f,...N}=e,{size:S}=_.ny6[o],{statusCoords:L,frontAvatarOffsetPx:p,frontAvatarSizePx:j,backAvatarSizePx:C}=i.useMemo(()=>{var e;let t="".concat(S,"-").concat(A);return null!==(e=g[t])&&void 0!==e?e:function(e,t,n){let s=_.ny6[e],i=s.size/(d.z3+d.o),r=i*d.z3,a=i*d.o,o={statusCoords:(0,l.Vq)(s,_.Skl.ONLINE,!1,t),frontAvatarSizePx:r,backAvatarSizePx:i,frontAvatarOffsetPx:a,frontAvatarCenter:a+r/2};return g[n]=o,o}(o,A,t)},[S,A,o]),G=(t=null!=m,A?E[o].typing:t?E[o].status:E[o].default);return(0,s.jsxs)("div",{style:{width:S,height:S,...x},"aria-label":N["aria-label"],"aria-hidden":N["aria-hidden"],className:a()(u.container,f),children:[(0,s.jsxs)(c.ZP,{mask:G,height:S,width:S,children:[(0,s.jsx)("img",{src:n,alt:"",width:C,height:C}),(0,s.jsx)("div",{style:{position:"absolute",top:p,left:p},children:(0,s.jsx)(I,{src:r,size:j,isTyping:A,status:m})})]}),(0,s.jsx)(h,{statusCoords:L,status:m,isTyping:A})]})}},785232:function(e,t,n){n.d(t,{Z:()=>o});var s=n(200651);n(192379);var i=n(442837),r=n(481060),a=n(289823),l=n(594174);let o=function(e){let{recipients:t,size:n,status:o,isTyping:_,className:c,...d}=e,u=r.ny6[n],g=(0,i.Wu)([l.default],()=>t.slice(0,2).map(e=>{let t=l.default.getUser(e);if(null!=t)return t.getAvatarURL(void 0,u.size,!1)}),[t,u.size]);return(0,s.jsx)(a.Z,{"aria-label":d["aria-label"],"aria-hidden":d["aria-hidden"],backSrc:g[0],frontSrc:g[1],size:n,status:o,isTyping:null!=_&&_,className:c})}},511010:function(e,t,n){n.d(t,{Z:()=>c});var s=n(200651),i=n(192379),r=n(120356),a=n.n(r),l=n(661824),o=n(71938);let _=i.forwardRef(function(e,t){let{className:n,isBeforeGroup:i=!1,...r}=e,{children:_}=r;return(0,s.jsx)(l.Z,{...r,ref:t,role:"separator","aria-label":"string"==typeof _?_:void 0,className:a()(n,{[o.divider]:!0,[o.hasContent]:null!=_,[o.beforeGroup]:i})})}),c=i.memo(_)},164375:function(e,t,n){n.d(t,{default:()=>S}),n(47120),n(733860);var s=n(200651),i=n(192379),r=n(481060),a=n(493683),l=n(785232),o=n(922611),_=n(592125),c=n(594174),d=n(626135),u=n(799352),g=n(343544),A=n(14251),m=n(110223),h=n(981631),I=n(388032),E=n(882587);let x=e=>{let{multipleBlockedUsers:t}=e;return(0,o.Do)({location:"blocked_user_in_gdm_header"})?I.intl.string(I.t["mwJJ+f"]):t?I.intl.string(I.t.aJRlSU):I.intl.string(I.t.rlBMub)},f=e=>{let{numOfBlockedUsers:t,numOfIgnoredUsers:n}=e;if(!(0,o.Do)({location:"blocked_user_in_voice_channel_header"}))return;let i=t>0,r=n>0;return i&&r?(0,s.jsxs)(s.Fragment,{children:[I.intl.string(I.t.xbRNIy),(0,s.jsx)("br",{}),I.intl.string(I.t["Bp2/np"])]}):i?(0,s.jsxs)(s.Fragment,{children:[I.intl.format(I.t.iKtixc,{n:t}),(0,s.jsx)("br",{}),I.intl.string(I.t.SN1hrq)]}):r?(0,s.jsxs)(s.Fragment,{children:[I.intl.format(I.t["6IRwub"],{n:n}),(0,s.jsx)("br",{}),I.intl.string(I.t["6AKLRk"])]}):null},N=e=>{let{channelId:t,blockedUserIds:n,ignoredUserIds:i,isStealthRemediationEnabled:a}=e,o=n.length>1;if(!a){var d;return[{icon:o?(0,s.jsx)(r.BFJ,{}):(0,s.jsx)(r.tBG,{}),text:o?I.intl.formatToPlainString(I.t.Zqlt5e,{blockedUserCount:n.length}):I.intl.formatToPlainString(I.t.V0aCFx,{userName:null===(d=c.default.getUser([...n][0]))||void 0===d?void 0:d.username})},{icon:(0,s.jsx)(r.owu,{}),text:I.intl.string(I.t["RIMw5+"])},{icon:(0,s.jsx)(r._XJ,{}),text:I.intl.string(I.t.bejNWF)}]}let u=_.Z.getChannel(t),g=n.length>0,m=i.length>0,h=[{icon:(0,s.jsx)("div",{className:E.icon,children:(0,s.jsx)(r.owK,{})}),text:I.intl.string(I.t["RIMw5+"]),className:E.row},{icon:(0,s.jsx)("div",{className:E.icon,children:(0,s.jsx)(r.d3s,{})}),text:I.intl.string(I.t.bejNWF),className:E.row}];if(g&&m){let e=[...n,...i],a=e.slice(0,2);h.unshift({icon:(0,s.jsx)("div",{className:E.icon,children:(0,s.jsx)(l.Z,{recipients:a,size:r.EFr.SIZE_32})}),text:(0,A.a)(a,e.length,null==u?void 0:u.guild_id,t),className:E.row})}else{let e=g?[...n].slice(0,2):[...i].slice(0,2),r=g?n.length:i.length;h.unshift({icon:(0,s.jsx)("div",{className:E.icon,children:(0,A.r)(e,null==u?void 0:u.guild_id)}),text:(0,A.a)(e,r,null==u?void 0:u.guild_id,t),className:E.row})}return h};function S(e){let{channelId:t,blockedUserIds:n,ignoredUserIds:r=[],transitionState:l,onClose:_}=e,c=(0,o.Do)({location:"blocked_user_in_gdm_modal"});i.useEffect(()=>{d.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_VIEWED,{channel_id:t,warning_medium:m.WR.MODAL,blocked_user_ids:n,ignored_user_ids:r})},[t,n,r]);let A=n.length>1;return(0,s.jsx)(g.Z,{headerText:(0,s.jsx)(x,{multipleBlockedUsers:A}),secondaryHeaderText:c?void 0:I.intl.string(I.t["mwJJ+f"]),descriptionText:(0,s.jsx)(f,{numOfBlockedUsers:n.length,numOfIgnoredUsers:r.length}),infoRows:N({channelId:t,blockedUserIds:n,ignoredUserIds:r,isStealthRemediationEnabled:c}),onDismissAndStay:()=>{_(),(0,u.O)(t),d.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT,{action:m.q.CLICK_TO_STAY,channel_id:t,warning_medium:m.WR.MODAL,blocked_user_ids:n,ignored_user_ids:r})},onDismissAndLeave:()=>{_(),(0,u.O)(t),a.Z.closePrivateChannel(t,!0,!0),d.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT,{action:m.q.CLICK_TO_LEAVE,channel_id:t,warning_medium:m.WR.MODAL,blocked_user_ids:n,ignored_user_ids:r})},leaveButtonText:I.intl.string(I.t.I4q1kJ),stayButtonText:I.intl.string(I.t.DRJhmZ),transitionState:l,onClose:_})}},343544:function(e,t,n){n.d(t,{Z:()=>u});var s=n(200651),i=n(192379),r=n(120356),a=n.n(r),l=n(481060),o=n(511010),_=n(922611),c=n(410671),d=n(444812);function u(e){let{headerText:t,secondaryHeaderText:n,descriptionText:r,infoRows:u,onDismissAndStay:g,onDismissAndLeave:A,leaveButtonText:m,stayButtonText:h,transitionState:I,impression:E}=e,x=(0,_.Do)({location:"blocked_user_warning_modal"});return(0,s.jsxs)(l.Y0X,{transitionState:I,impression:E,children:[(0,s.jsx)("img",{alt:"",className:c.headerImage,src:d}),(0,s.jsxs)(l.xBx,{separator:!1,className:c.header,children:[(0,s.jsxs)(l.X6q,{variant:x?"heading-xl/bold":"heading-lg/bold",color:x?"header-primary":void 0,className:c.title,children:[t,null!=n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("br",{}),n]})]}),null!=r&&(0,s.jsx)(l.Text,{variant:"text-md/medium",color:"header-secondary",children:r})]}),(0,s.jsxs)(l.hzk,{className:c.content,children:[(0,s.jsx)("div",{className:c.infoGroup,children:u.map((e,t)=>(0,s.jsxs)(i.Fragment,{children:[(0,s.jsxs)("div",{className:a()(c.infoRow,e.className),children:[e.icon,(0,s.jsx)(l.Text,{variant:"text-md/medium",children:e.text})]}),t<u.length-1&&(0,s.jsx)(o.Z,{})]},t))}),(0,s.jsxs)("div",{className:c.buttonGroup,children:[(0,s.jsx)(l.zxk,{color:l.zxk.Colors.PRIMARY,onClick:g,children:h}),(0,s.jsx)(l.zxk,{color:l.zxk.Colors.BRAND,size:l.zxk.Sizes.MEDIUM,onClick:A,className:c.leave,children:m})]})]})]})}},14251:function(e,t,n){n.d(t,{a:()=>d,r:()=>c}),n(47120);var s=n(200651),i=n(481060),r=n(785232),a=n(594174),l=n(5192),o=n(388032),_=n(882587);let c=(e,t)=>{if(1===e.length){let n=a.default.getUser(e[0]);return null!=n?(0,s.jsx)(i.qEK,{src:n.getAvatarURL(t,32),size:i.EFr.SIZE_32,"aria-hidden":!0}):(0,s.jsx)(i.tBG,{})}return(0,s.jsx)(r.Z,{recipients:e,size:i.EFr.SIZE_32})},d=(e,t,n,r)=>{let c=[...e].map(e=>a.default.getUser(e)),d=e=>(0,s.jsx)(i.Text,{variant:"text-md/semibold",className:_.username,children:l.ZP.getName(n,r,e)});return t>=4?o.intl.format(o.t.qfo6KS,{usernameHook1:()=>d(c[0]),usernameHook2:()=>d(c[1]),numberOfOtherUsers:t-e.length}):3===t?o.intl.format(o.t["67ZE+/"],{usernameHook1:()=>d(c[0]),usernameHook2:()=>d(c[1])}):2===t?o.intl.format(o.t.veV4IC,{usernameHook1:()=>d(c[0]),usernameHook2:()=>d(c[1])}):o.intl.format(o.t["4WHCtr"],{usernameHook:()=>d(c[0])})}},974193:function(e,t,n){e.exports={container:"container__1ce5d",circularImage:"circularImage__1ce5d",dots:"dots__1ce5d"}},71938:function(e,t,n){e.exports={ephemeral:"ephemeral__5126c",nitroMessage:"nitroMessage__5126c",automodMessage:"automodMessage__5126c",potioned:"potioned__5126c",mentioned:"mentioned__5126c",replying:"replying__5126c",message:"message__5126c",editing:"editing__5126c",hasOpenPopouts:"hasOpenPopouts__5126c",messageListItem:"messageListItem__5126c",selected:"selected__5126c",quotedChatMessage:"quotedChatMessage__5126c",jump:"jump__5126c",buttons:"buttons__5126c",buttonsInner:"buttonsInner__5126c",hideIfMessageNotFocused:"hideIfMessageNotFocused__5126c",cozyMessage:"cozyMessage__5126c",groupStart:"groupStart__5126c",systemMessage:"systemMessage__5126c",backgroundFlash:"backgroundFlash__5126c",channelTextArea:"channelTextArea__5126c",divider:"divider__5126c",disableInteraction:"disableInteraction__5126c",hasContent:"hasContent__5126c",beforeGroup:"beforeGroup__5126c",interactionSending:"interactionSending__5126c"}},882587:function(e,t,n){e.exports={row:"row__6e3d6",icon:"icon__6e3d6",username:"username__6e3d6"}},410671:function(e,t,n){e.exports={header:"header_f549e5",headerImage:"headerImage_f549e5",title:"title_f549e5",content:"content_f549e5",buttonGroup:"buttonGroup_f549e5",leave:"leave_f549e5",infoGroup:"infoGroup_f549e5",infoRow:"infoRow_f549e5"}}}]);
//# sourceMappingURL=dcd993afb93586bc.js.map