"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["99617"],{138715:function(n){n.exports="/assets/4e11cf8e80a816c6.svg"},979770:function(n){n.exports="/assets/a09cfd7678b20f8c.svg"},502801:function(n,e,t){t.d(e,{default:()=>M}),t(653041),t(47120);var i=t(200651),l=t(192379),r=t(120356),E=t.n(r),a=t(442837),d=t(952265),o=t(481060),_=t(493683),u=t(700582),s=t(100527),c=t(906732),C=t(933557),A=t(471445),T=t(734307),S=t(359110),I=t(814443),L=t(210887),D=t(131704),N=t(699516),h=t(944486),U=t(914010),P=t(594174),R=t(186523),f=t(553826),g=t(823379),G=t(407316),O=t(937784),m=t(388032),v=t(949574),Z=t(138715),H=t(979770);function x(n){let{channel:e,ChannelIcon:t,selected:l,onClick:r}=n,E=(0,C.ZP)(e);return(0,i.jsxs)(o.P3F,{className:v.channelRow,onClick:()=>r(e.id),children:[l?(0,i.jsx)(f.Z,{className:v.radioIcon}):(0,i.jsx)(R.Z,{className:v.radioIcon}),(0,i.jsx)(t,{className:v.icon,size:"xs",color:"currentColor"}),(0,i.jsx)(o.Text,{variant:"text-md/medium",color:"interactive-active",children:E})]})}function p(n){let{guildId:e,selectedChannelId:t,onSelectChannelId:r}=n,d=(0,a.e7)([h.Z],()=>h.Z.getChannelId()),{guildChannels:_}=(0,a.cj)([T.Z],()=>T.Z.getGuildWithoutChangingGuildActionRows(e)),u=l.useMemo(()=>{let n=[];return _.forEachChannel(e=>{!1!==(0,G.W)(e.id)&&((0,D.r8)(e.type)||(0,D.bw)(e.type))&&n.push(e)}),n.sort((n,e)=>n.id===d?-1:e.id===d?1:0)},[_,d]);return 0===u.length?null:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:E()(v.divider,v.bottomDivider)}),(0,i.jsx)(o.Text,{variant:"eyebrow",color:"interactive-normal",className:v.contentPadding,children:m.intl.string(m.t.SOtDeX)}),(0,i.jsx)(o.aVo,{sections:[u.length],sectionHeight:0,renderRow:n=>{let{section:e,row:l}=n;if(e>0)return null;let E=u[l],a=(0,A.KS)(E);return null==a?null:(0,i.jsx)(x,{channel:E,ChannelIcon:a,selected:t===E.id,onClick:r},E.id)},rowHeight:(n,e)=>n>0?0:null!=u[e]?56:0,renderSection:()=>null,className:E()(v.channelList,v.contentPadding),fade:!0})]})}function b(n){let{friends:e,searchQuery:t,disabled:r,onShareClip:d}=n,_=l.useMemo(()=>0===t.length?e:e.filter(n=>n.username.toLowerCase().includes(t.toLowerCase())),[e,t]),s=(0,a.e7)([L.Z],()=>L.Z.theme);return 0===_.length?(0,i.jsxs)(o.ubH,{theme:s,className:v.emptyStateContainer,children:[(0,i.jsx)(o.oxh,{width:415,height:75,lightSrc:H,darkSrc:Z}),(0,i.jsx)(o.OZU,{note:m.intl.string(m.t["+Zg0lZ"])})]}):(0,i.jsx)(o.aVo,{sections:[_.length],sectionHeight:0,renderRow:n=>{let{section:e,row:t}=n;if(e>0)return null;let l=_[t],E=_[t].username;return(0,i.jsxs)("div",{className:v.userRow,children:[(0,i.jsx)(u.Z,{user:l}),(0,i.jsx)(o.Text,{className:v.username,variant:"text-md/normal",children:E}),(0,i.jsx)(o.zxk,{disabled:r,onClick:()=>d(l.id),className:v.__invalid_friendShareButton,look:o.iLD.OUTLINED,size:o.PhG.SMALL,color:o.Ttl.BRAND,children:(0,i.jsx)(o.Text,{variant:"text-sm/medium",children:m.intl.string(m.t.RDE0SU)})})]},l.id)},rowHeight:(n,e)=>n>0?0:null!=_[e]?52:0,renderSection:()=>null,className:E()(v.friendsList,v.contentPadding),fade:!0})}function M(n){let{clip:e,editMetadata:t,transitionState:r,onClose:u}=n,[C,A]=l.useState(""),[T,L]=l.useState(!1),[D,h]=l.useState(null),R=(0,a.Wu)([N.Z],()=>N.Z.getFriendIDs()),f=(0,a.Wu)([I.Z,P.default],()=>R.map(n=>P.default.getUser(n)).filter(g.lm).sort((n,e)=>{var t,i,l,r;return(null!==(l=null===(t=I.Z.getUserAffinity(e.id))||void 0===t?void 0:t.affinity)&&void 0!==l?l:0)-(null!==(r=null===(i=I.Z.getUserAffinity(n.id))||void 0===i?void 0:i.affinity)&&void 0!==r?r:0)}),[R]),G=(0,a.e7)([U.Z],()=>U.Z.getGuildId()),{analyticsLocations:Z}=(0,c.ZP)(s.Z.CLIPS_SHARE_MODAL);async function H(n){let i=null!=n?n:D;if(null!=i){L(!0);try{await (0,O.e)(e,{channelId:i,editMetadata:t,analyticsLocations:Z}),null==n&&(0,S.Kh)(i),d.pT()}catch(n){}finally{L(!1)}}}async function x(n){let e=await _.Z.openPrivateChannel(n);await H(e)}return(0,i.jsxs)(o.Y0X,{size:o.CgR.SMALL,transitionState:r,children:[(0,i.jsx)(o.X6q,{className:E()(v.title,v.contentPadding),variant:"heading-lg/semibold",color:"interactive-active",children:m.intl.string(m.t["6EcIlJ"])}),(0,i.jsx)(o.Text,{variant:"text-md/normal",color:"text-normal",className:E()(v.subtitle,v.contentPadding),children:m.intl.string(m.t.Ey7mOT)}),(0,i.jsx)(o.E1j,{className:v.searchBar,query:C,onChange:A,size:o.E1j.Sizes.MEDIUM,onClear:function(){A("")},placeholder:m.intl.string(m.t.CmSHY2)}),(0,i.jsx)("div",{className:E()(v.divider,v.topDivider)}),(0,i.jsx)(b,{searchQuery:C,friends:f,onShareClip:x,disabled:T}),null!=G&&(0,i.jsx)(p,{guildId:G,selectedChannelId:D,onSelectChannelId:h}),(0,i.jsxs)(o.mzw,{children:[(0,i.jsx)(o.zxk,{disabled:null==D,submitting:T,color:o.zxk.Colors.BRAND,onClick:()=>H(),children:m.intl.string(m.t.I8lglZ)}),(0,i.jsx)(o.zxk,{submitting:T,look:o.iLD.LINK,onClick:u,color:o.Ttl.PRIMARY,children:m.intl.string(m.t["13/7kZ"])})]})]})}},734307:function(n,e,t){t.d(e,{Z:()=>K}),t(47120);var i,l,r,E=t(392711),a=t.n(E),d=t(442837),o=t(570140),_=t(317381),u=t(16609),s=t(430198),c=t(924301),C=t(601070),A=t(569471),T=t(581883),S=t(314897),I=t(680089),L=t(592125),D=t(58468),N=t(77498),h=t(496675),U=t(306680),P=t(944486),R=t(9156),f=t(823379),g=t(709054),G=t(540126),O=t(526761);let m=null,v=null,Z=new G.ZP;function H(){let n=P.Z.getChannelId(),e=P.Z.getVoiceChannelId();return m=n,v=e,Z.clear()}function x(n){let{guild:{id:e}}=n;return Z.clearGuildId(e)}function p(n){let{channel:{guild_id:e}}=n;return Z.clearGuildId(e)}function b(n){let{guildId:e}=n;return Z.clearGuildId(e)}function M(n){let{channelId:e}=n;return Z.nonPositionalChannelIdUpdate(e)}function j(n){let{channel:e}=n;return Z.nonPositionalChannelIdUpdate(e.id)}function w(n){let{id:e}=n;return Z.nonPositionalChannelIdUpdate(e)}function y(){let n=P.Z.getChannelId(),e=P.Z.getVoiceChannelId(),t=m!==n||v!==e;return!!t&&(a()([m,v,n,e]).uniq().forEach(n=>{null!=n&&Z.nonPositionalChannelIdUpdate(n)&&(t=!0)}),m=n,v=e,!0)}function F(n){let{id:e}=n,t=L.Z.getChannel(e);return null==t?Z.clearGuildId(e):Z.clearGuildId(t.guild_id)}function B(n){let{guildId:e}=n;return Z.clearGuildId(e)}function V(){return Z.updateSubtitles()}function Y(n){let{guildScheduledEvent:e}=n;return Z.updateSubtitles(e.guild_id)}class k extends(i=d.ZP.Store){initialize(){this.waitFor(C.Z,S.default,I.Z,L.Z,D.Z,_.ZP,N.Z,s.Z,c.ZP,A.Z,h.Z,U.ZP,P.Z,R.ZP,T.Z)}getGuild(n,e){var t,i;let l=Z.getGuild(n,null!==(t=null==e?void 0:e.guildActionRows)&&void 0!==t?t:[],null!==(i=null==e?void 0:e.channelNoticeRows)&&void 0!==i?i:[]);return{guildChannelsVersion:l.version,guildChannels:l}}getGuildWithoutChangingGuildActionRows(n){let e=Z.getGuildChannelRowsOnly(n);return{guildChannelsVersion:e.version,guildChannels:e}}recentsChannelCount(n){if(null==n)return 0;let e=Z.getGuildChannelRowsOnly(n);return e.getCategoryFromSection(e.recentsSectionNumber).getShownChannelIds().length}}r="ChannelListStore",(l="displayName")in k?Object.defineProperty(k,l,{value:r,enumerable:!0,configurable:!0,writable:!0}):k[l]=r;let K=new k(o.Z,{APPLICATION_FETCH_FAIL:V,APPLICATION_FETCH_SUCCESS:V,APPLICATION_FETCH:V,APPLICATIONS_FETCH_FAIL:V,APPLICATIONS_FETCH_SUCCESS:V,APPLICATIONS_FETCH:V,BACKGROUND_SYNC:H,BULK_ACK:function(n){let{channels:e}=n,t=!1;return a()(e).map(n=>{var e;return null===(e=L.Z.getChannel(n.channelId))||void 0===e?void 0:e.guild_id}).filter(f.lm).uniq().forEach(n=>{Z.clearGuildId(n)&&(t=!0)}),t},BULK_CLEAR_RECENTS:b,CACHE_LOADED_LAZY:H,CATEGORY_COLLAPSE_ALL:b,CATEGORY_COLLAPSE:F,CATEGORY_EXPAND_ALL:b,CATEGORY_EXPAND:F,CHANNEL_ACK:M,CHANNEL_COLLAPSE:function(n){var e;let{channelId:t}=n;return Z.clearGuildId(null===(e=L.Z.getChannel(t))||void 0===e?void 0:e.guild_id)},CHANNEL_CREATE:p,CHANNEL_DELETE:p,CHANNEL_LOCAL_ACK:M,CHANNEL_MUTE_EXPIRED:b,CHANNEL_RTC_UPDATE_CHAT_OPEN:M,CHANNEL_SELECT:y,CHANNEL_STATUSES:function(n){return Z.clearGuildId(n.guildId)},CHANNEL_UPDATES:function(n){let{channels:e}=n,t=!1;return a()(e).map(n=>n.guild_id).uniq().forEach(n=>{Z.clearGuildId(n)&&(t=!0)}),t},CONNECTION_OPEN_SUPPLEMENTAL:V,CONNECTION_OPEN:H,CURRENT_USER_UPDATE:H,DECAY_READ_STATES:H,DEV_TOOLS_DESIGN_TOGGLE_SET:H,DISABLE_AUTOMATIC_ACK:M,DISMISS_FAVORITE_SUGGESTION:function(n){let{channelId:e}=n;return Z.nonPositionalChannelIdUpdate(e)},EMBEDDED_ACTIVITY_UPDATE_V2:function(n){var e,t;let{location:i}=n;return Z.updateSubtitles(null!==(e=(0,u.jS)(i))&&void 0!==e?e:(0,u.hu)(i),null!==(t=(0,u.pY)(i))&&void 0!==t?t:(0,u.wq)(i))},EMBEDDED_ACTIVITY_LAUNCH_START:function(n){V()},EMBEDDED_ACTIVITY_LAUNCH_SUCCESS:V,ENABLE_AUTOMATIC_ACK:M,FETCH_GUILD_EVENTS_FOR_GUILD:function(n){let{guildId:e}=n;return Z.updateSubtitles(e)},GAMES_DATABASE_FETCH_FAIL:V,GAMES_DATABASE_FETCH:V,GAMES_DATABASE_UPDATE:V,GUILD_APPLICATIONS_FETCH_SUCCESS:V,GUILD_CREATE:x,GUILD_DELETE:x,GUILD_MEMBER_UPDATE:function(n){let{guildId:e,user:t}=n;return S.default.getId()===t.id&&Z.clearGuildId(e)},GUILD_MUTE_EXPIRED:b,GUILD_ROLE_CREATE:b,GUILD_ROLE_DELETE:b,GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE:b,GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS:b,GUILD_ROLE_UPDATE:b,GUILD_SCHEDULED_EVENT_CREATE:Y,GUILD_SCHEDULED_EVENT_DELETE:Y,GUILD_SCHEDULED_EVENT_UPDATE:Y,GUILD_TOGGLE_COLLAPSE_MUTED:b,GUILD_UPDATE:x,IMPERSONATE_STOP:b,IMPERSONATE_UPDATE:b,LOAD_CHANNELS:function(n){n.channels.forEach(n=>{let{guildId:e}=n;return Z.clearGuildId(e)})},LOAD_MESSAGES_SUCCESS:M,MESSAGE_ACK:M,MESSAGE_CREATE:function(n){let{channelId:e}=n;return Z.nonPositionalChannelIdUpdate(e)},MESSAGE_DELETE_BULK:M,MESSAGE_DELETE:M,NOTIFICATION_SETTINGS_UPDATE:H,OVERLAY_INITIALIZE:H,PASSIVE_UPDATE_V2:function(n){return Z.clearGuildId(n.guildId)},RECOMPUTE_READ_STATES:H,RESORT_THREADS:M,SET_RECENTLY_ACTIVE_COLLAPSED:H,THREAD_CREATE:j,THREAD_DELETE:function(n){let{channel:e}=n;return Z.nonPositionalChannelUpdate(e)},THREAD_LIST_SYNC:b,THREAD_MEMBER_UPDATE:w,THREAD_MEMBERS_UPDATE:w,THREAD_UPDATE:j,TRY_ACK:M,UPDATE_CHANNEL_DIMENSIONS:M,UPDATE_CHANNEL_LIST_SUBTITLES:function(n){let{guildId:e}=n;Z.updateSubtitles(e)},USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK:b,USER_GUILD_SETTINGS_CHANNEL_UPDATE:b,USER_GUILD_SETTINGS_FULL_UPDATE:function(n){let{userGuildSettings:e}=n;e.forEach(n=>{let{guild_id:e}=n;return Z.clearGuildId(e)})},USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE:b,USER_GUILD_SETTINGS_GUILD_UPDATE:b,USER_SETTINGS_PROTO_UPDATE:function(n){var e;let{settings:t}=n;if(t.type!==O.yP.PRELOADED_USER_SETTINGS)return!1;let i=null===(e=t.proto.guilds)||void 0===e?void 0:e.guilds,l=!1;return null!=i&&g.default.keys(i).forEach(n=>{null!=i[n].guildRecentsDismissedAt&&(l=Z.updateRecentsCategory(n)||l)}),l},VOICE_CATEGORY_COLLAPSE:B,VOICE_CATEGORY_EXPAND:B,VOICE_CHANNEL_SELECT:y,VOICE_CHANNEL_STATUS_UPDATE:function(n){return Z.nonPositionalChannelIdUpdate(n.id)},VOICE_STATE_UPDATES:function(n){let{voiceStates:e}=n,t=y(),i=new Set;for(let{channelId:n,oldChannelId:l}of e)null==l||i.has(l)||(Z.nonPositionalChannelIdUpdate(l)&&(t=!0),i.add(l)),null==n||i.has(n)||(Z.nonPositionalChannelIdUpdate(n)&&(t=!0),i.add(n));return t},WINDOW_FOCUS:function(){return null!=m&&Z.nonPositionalChannelIdUpdate(m)}})},949574:function(n,e,t){n.exports={contentPadding:"contentPadding__1db97",title:"title__1db97",subtitle:"subtitle__1db97",searchBar:"searchBar__1db97",friendsList:"friendsList__1db97",channelList:"channelList__1db97",userRow:"userRow__1db97",username:"username__1db97",radioIcon:"radioIcon__1db97",channelRow:"channelRow__1db97",icon:"icon__1db97",divider:"divider__1db97",bottomDivider:"bottomDivider__1db97",topDivider:"topDivider__1db97",emptyStateContainer:"emptyStateContainer__1db97"}}}]);
//# sourceMappingURL=ec359377aef466cb.js.map