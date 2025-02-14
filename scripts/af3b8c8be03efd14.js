"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["94989"],{545505:function(e){e.exports="/assets/55d1dca921a75d17.svg"},184269:function(e){e.exports="/assets/cee409b63b0cd907.svg"},769928:function(e){e.exports="/assets/1fc96c69951bfa5c.svg"},12e3:function(e){e.exports="/assets/44782635b911ed40.svg"},98021:function(e){e.exports="/assets/4120cce23ff52c68.svg"},661745:function(e){e.exports="/assets/a5318ae82097a21e.svg"},246016:function(e,l,s){s.d(l,{Y:()=>d});var t=s(192379),i=s(442837),a=s(699516),n=s(594174),r=s(372460),c=s(320582);let o=[];function d(e){let{userId:l,location:s}=e,d=(0,i.e7)([a.Z,n.default],()=>{var e;return a.Z.isFriend(l)||(null===(e=n.default.getUser(l))||void 0===e?void 0:e.isProvisional)}),u=(0,c.ML)(l),m=(0,r.wn)({location:s});return t.useMemo(()=>!m||d?o:u.map(e=>{let{applicationId:l}=e;return l}),[u,d,m])}},138201:function(e,l,s){s.d(l,{ZP:()=>d,rT:()=>o});var t=s(200651);s(192379);var i=s(120356),a=s.n(i),n=s(481060),r=s(720882);function c(e){let{title:l}=e;return(0,t.jsx)(n.Text,{variant:"text-sm/semibold",color:"header-secondary",children:l})}function o(e){let{children:l,title:s,description:i,accessibilityRole:a="none",accessibilityLabel:o}=e;return(0,t.jsxs)("div",{className:r.tableRowGroup,children:[null!=s&&(0,t.jsx)(c,{title:s}),null!=i&&(0,t.jsx)(n.Text,{variant:"text-sm/normal",color:"text-secondary",children:i}),(0,t.jsx)("div",{className:r.content,role:a,"aria-label":o,children:l})]})}function d(e){let{icon:l,title:s,titleVariant:i="text-md/semibold",description:c,descriptionVariant:o="text-xs/medium",iconClassName:d,color:u,buttonText:m,buttonColor:x=n.zxk.Colors.PRIMARY,buttonSize:v=n.zxk.Sizes.SMALL,buttonLook:j=n.zxk.Looks.FILLED,buttonDisabled:h,onButtonPress:p,listType:f="icon",index:N}=e,g=null!=m?(0,t.jsx)(n.zxk,{className:r.button,size:v,color:x,look:j,disabled:h,"aria-label":m,onClick:p,children:m}):void 0;return(0,t.jsxs)("div",{className:r.row,children:["numbered"===f&&null!=N?(0,t.jsx)(n.X6q,{variant:"heading-md/semibold",color:"text-brand",className:r.number,children:N+1}):null!=l&&(0,t.jsx)("div",{className:r.iconContainer,children:(0,t.jsx)(l,{color:null!=u?u:"currentColor",className:a()(r.icon,d)})}),(0,t.jsxs)("div",{className:r.textContainer,children:[(0,t.jsx)(n.Text,{variant:i,color:"header-primary",children:s}),null!=c&&(0,t.jsx)(n.Text,{variant:o,color:"text-secondary",children:c})]}),null!=g&&g]})}},78806:function(e,l,s){s.d(l,{Z:()=>c});var t=s(200651);s(192379);var i=s(481060),a=s(835473),n=s(833062),r=s(388032);function c(e){let{applicationIds:l}=e,s=(0,a.Z)(l).filter(e=>null!=e);if(0===s.length)return null;let c=null;if(1===s.length)c=r.intl.format(r.t.wQ6ur6,{applicationName:()=>(0,t.jsx)(n.Z,{application:s[0]},s[0].id)});else if(2===s.length)c=r.intl.format(r.t.C98CSE,{applicationName:()=>(0,t.jsx)(n.Z,{application:s[0]},s[0].id),applicationName2:()=>(0,t.jsx)(n.Z,{application:s[1]},s[1].id)});else{let e=s[s.length-1],l=s.slice(0,-1);c=r.intl.format(r.t.UxpwAg,{applications:()=>l.map(e=>(0,t.jsx)(n.Z,{application:e,useComma:!0},e.id)),applicationNameLast:()=>(0,t.jsx)(n.Z,{application:e},e.id)})}return(0,t.jsx)(i.Text,{variant:"text-sm/normal",children:c})}},900927:function(e,l,s){s.d(l,{Z:()=>v});var t=s(200651);s(192379);var i=s(399606),a=s(481060),n=s(275759),r=s(565138),c=s(706454),o=s(271383),d=s(430824),u=s(709054),m=s(388032),x=s(198873);function v(e){let{userId:l,guildId:s,textClassName:v,tooltipDelay:j}=e,h=(0,i.e7)([c.default],()=>c.default.locale),p=(0,i.e7)([d.Z],()=>null!=s?d.Z.getGuild(s):null),f=(0,i.e7)([o.ZP],()=>null!=s?o.ZP.getMember(s,l):null),N=(0,n.FI)(u.default.extractTimestamp(l),h),g=(0,n.FI)(null==f?void 0:f.joinedAt,h);return null==p||null==f?(0,t.jsx)(a.Text,{variant:"text-sm/normal",className:v,children:N}):(0,t.jsxs)("div",{className:x.memberSinceWrapper,children:[(0,t.jsxs)("div",{className:x.memberSince,children:[(0,t.jsx)(a.ua7,{text:m.intl.string(m.t.uvGmCw),delay:j,children:e=>(0,t.jsx)(a.gw7,{size:"custom",width:28,height:28,color:"currentColor",...e,className:x.discordIcon})}),(0,t.jsx)(a.Text,{variant:"text-sm/normal",className:v,children:N})]}),(0,t.jsx)("div",{className:x.divider}),(0,t.jsxs)("div",{className:x.memberSince,children:[(0,t.jsx)(a.ua7,{text:p.name,delay:j,children:e=>(0,t.jsx)(r.Z,{...e,guild:p,size:r.Z.Sizes.SMOL})}),(0,t.jsx)(a.Text,{variant:"text-sm/normal",className:v,children:g})]})]})}},389190:function(e,l,s){s.d(l,{T:()=>p,Z:()=>f});var t=s(200651);s(192379);var i=s(442837),a=s(481060),n=s(239091),r=s(129861),c=s(906732),o=s(158776),d=s(785717),u=s(697927),m=s(171368),x=s(981631),v=s(388032),j=s(547759);let h=(0,a.pxk)(a.EFr.SIZE_40);function p(e){let{user:l,status:c,onSelect:d}=e,u=(0,i.e7)([o.Z],()=>o.Z.isMobileOnline(l.id));return(0,t.jsxs)(a.P3F,{focusProps:{offset:{right:8}},className:j.listRow,onClick:d,onContextMenu:e=>{(0,n.jW)(e,async()=>{let{default:e}=await Promise.all([s.e("79695"),s.e("69220"),s.e("34272")]).then(s.bind(s,881351));return s=>(0,t.jsx)(e,{...s,user:l})})},children:[(0,t.jsx)(a.qEK,{src:l.getAvatarURL(void 0,h),"aria-label":l.username,size:a.EFr.SIZE_40,status:c,isMobile:u,className:j.listAvatar}),(0,t.jsx)(r.Z,{user:l,className:j.listName,discriminatorClass:j.listDiscriminator})]})}function f(e){let{user:l,onClose:s}=e,{mutualFriends:i,isFetching:n}=(0,u.Z)(l.id),{analyticsLocations:r}=(0,c.ZP)(),{context:o,trackUserProfileAction:h}=(0,d.KZ)(),f=e=>{s(),(0,m.openUserProfileModal)({...o,userId:e,sourceAnalyticsLocations:r,analyticsLocation:{section:x.jXE.USER_PROFILE_MUTUAL_FRIENDS}})};return(0,t.jsx)(a.zJl,{className:j.listScroller,fade:!0,children:null==i&&n?(0,t.jsx)("div",{className:j.empty,children:(0,t.jsx)(a.$jN,{})}):(null!=i||n)&&(null==i?void 0:i.length)!==0?null==i?void 0:i.map(e=>{let{key:l,user:s,status:i}=e;return(0,t.jsx)(p,{user:s,status:i,onSelect:()=>{h({action:"PRESS_MUTUAL_FRIEND"}),f(s.id)}},l)}):(0,t.jsxs)("div",{className:j.empty,children:[(0,t.jsx)("div",{className:j.emptyIconFriends}),(0,t.jsx)("div",{className:j.emptyText,children:v.intl.string(v.t["/5p4g4"])})]})})}},428927:function(e,l,s){s.d(l,{D:()=>S,Z:()=>I});var t=s(200651);s(192379);var i=s(120356),a=s.n(i),n=s(780384),r=s(481060),c=s(239091),o=s(37234),d=s(410030),u=s(44315),m=s(565138),x=s(769654),v=s(51144),j=s(785717),h=s(200634),p=s(228168),f=s(981631),N=s(388032),g=s(547759),Z=s(321257);let b=(0,r.pxk)(r.EFr.SIZE_16);function S(e){let{user:l,guild:i,nick:o,theme:d,onSelect:x}=e,j=l.hasAvatarForGuild(i.id);return(0,t.jsxs)(r.P3F,{focusProps:{offset:{right:8}},className:g.listRow,onClick:x,onContextMenu:e=>{(0,c.jW)(e,async()=>{let{default:e}=await Promise.all([s.e("48835"),s.e("25292"),s.e("90508"),s.e("95477"),s.e("11212"),s.e("40190"),s.e("68445"),s.e("7654"),s.e("33862"),s.e("80284"),s.e("9371"),s.e("60691"),s.e("70205"),s.e("44156"),s.e("71864"),s.e("63104"),s.e("6850"),s.e("58227"),s.e("16114"),s.e("54408"),s.e("11684"),s.e("93375"),s.e("64679"),s.e("60707"),s.e("21881"),s.e("33213"),s.e("53419")]).then(s.bind(s,545135));return l=>(0,t.jsx)(e,{...l,guild:i})})},children:[(0,t.jsx)(m.Z,{tabIndex:-1,guild:i,showBadge:!0,className:a()(g.listAvatar,null==i.icon?Z.guildAvatarWithoutIcon:null),badgeStrokeColor:(0,u.Lq)((0,n.wj)(d)?f.Ilk.PRIMARY_600:f.Ilk.WHITE_500),badgeTooltipColor:r.FGA.PRIMARY,badgeTooltipDelay:p.vB,size:m.Z.Sizes.MEDIUM,active:!0}),(0,t.jsxs)("div",{className:g.listRowContent,children:[(0,t.jsx)("div",{className:g.listName,children:i.toString()}),j||null!=o?(0,t.jsxs)("div",{className:Z.guildNick,children:[j&&(0,t.jsx)(r.qEK,{src:l.getAvatarURL(i.id,b),size:r.EFr.SIZE_16,className:Z.guildAvatar,"aria-hidden":!0}),null!=o?o:v.ZP.getName(l)]}):null]})]})}function I(e){let{user:l,onClose:s}=e,{trackUserProfileAction:i}=(0,j.KZ)(),{mutualGuilds:a,isFetching:n}=(0,h.Z)(l.id),c=(0,d.ZP)(),u=e=>{(0,x.X)(e),s(),(0,o.xf)()};return(0,t.jsx)(r.zJl,{className:g.listScroller,fade:!0,children:null==a&&n?(0,t.jsx)("div",{className:g.empty,children:(0,t.jsx)(r.$jN,{})}):(null!=a||n)&&(null==a?void 0:a.length)!==0?null==a?void 0:a.map(e=>{let{guild:s,nick:a}=e;return(0,t.jsx)(S,{user:l,guild:s,nick:a,theme:c,onSelect:()=>{i({action:"PRESS_MUTUAL_GUILD"}),u(s.id)}},s.id)}):(0,t.jsxs)("div",{className:g.empty,children:[(0,t.jsx)("div",{className:g.emptyIconGuilds}),(0,t.jsx)("div",{className:g.emptyText,children:N.intl.string(N.t.zjVh8v)})]})})}}}]);
//# sourceMappingURL=af3b8c8be03efd14.js.map