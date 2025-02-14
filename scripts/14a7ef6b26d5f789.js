"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["60133"],{247272:function(e,t,i){i.d(t,{C:()=>r,x:()=>a}),i(47120);var n=i(570140),l=i(93127);function a(e){let{omitUserIds:t,guild:i,channel:a,applicationId:r,inviteTargetType:s}=e;return(0,l.W)().then(()=>{n.Z.dispatch({type:"LOAD_INVITE_SUGGESTIONS",omitUserIds:null!=t?t:new Set,guild:i,channel:a,applicationId:r,inviteTargetType:s})})}function r(e){n.Z.dispatch({type:"INVITE_SUGGESTIONS_SEARCH",query:e})}i(751771)},827940:function(e,t,i){i.d(t,{default:()=>A}),i(47120),i(653041);var n=i(200651),l=i(192379),a=i(990547),r=i(442837),s=i(481060),o=i(493683),I=i(247272),u=i(904245),d=i(100527),_=i(906732),c=i(213609),T=i(43267),N=i(933557),m=i(430824),S=i(751771),E=i(699516),O=i(594174),f=i(626135),g=i(768581),p=i(572004),P=i(971130),h=i(624138),D=i(51144),x=i(778569),v=i(981631),C=i(245335),y=i(388032),M=i(814955);function A(e){let{activityItem:t,analyticsLocations:i,...T}=e,N=(0,r.e7)([O.default],()=>O.default.getCurrentUser()),{analyticsLocations:m}=(0,_.ZP)(i);(0,c.Z)({type:a.ImpressionTypes.MODAL,name:a.ImpressionNames.ACTIVITY_BOOKMARK_SHARE_MODAL,properties:{application_id:t.application.id,location_stack:m}});let[E,g]=l.useState(""),[p,h]=l.useState([]),D=(0,x.Z)({applicationId:t.application.id,size:256}),A="".concat(window.location.origin).concat(v.Z5c.ACTIVITY_DETAILS(t.application.id)),R=(0,r.Wu)([S.Z],()=>S.Z.getInviteSuggestionRows());l.useEffect(()=>{(0,I.x)({omitUserIds:new Set,applicationId:t.application.id,inviteTargetType:C.Iq.EMBEDDED_APPLICATION})},[t.application.id]),l.useEffect(()=>(0,I.C)(E),[E]);let Z=l.useCallback(async()=>{let e=0,i=0,n=0,l=S.Z.getInviteSuggestionRows().filter(e=>p.includes(e.item.id)).map(t=>(function(t,l){switch(t.type){case P.bm.DM:case P.bm.FRIEND:e++;break;case P.bm.GROUP_DM:i++;break;case P.bm.CHANNEL:n++}return t.type===P.bm.GROUP_DM||t.type===P.bm.CHANNEL?u.Z.sendActivityBookmark(t.item.id,l,d.Z.ACTIVITY_DETAIL_PAGE,null):t.type===P.bm.DM||t.type===P.bm.FRIEND?o.Z.ensurePrivateChannel(t.item.id).then(e=>u.Z.sendActivityBookmark(e,A,d.Z.ACTIVITY_DETAIL_PAGE,null)):Promise.resolve()})(t,A));await l,f.default.track(v.rMx.ACTIVITY_BOOKMARK_SHARED,{user_id:null==N?void 0:N.id,application_id:t.application.id,n_users:e,n_gdms:i,n_channels:n}),T.onClose()},[t,p,T,A,N]);return(0,n.jsxs)(s.Y0X,{...T,className:M.modalRoot,children:[(0,n.jsxs)(s.xBx,{className:M.header,children:[(0,n.jsx)(s.X6q,{variant:"heading-md/semibold",children:y.intl.format(y.t.tOVbbG,{activityName:t.application.name})}),(0,n.jsx)(s.olH,{onClick:T.onClose})]}),(0,n.jsxs)(s.hzk,{className:M.modalContent,children:[(0,n.jsx)(s.Rj2,{className:M.searchBar,placeholder:y.intl.string(y.t["5h0QOD"]),label:y.intl.string(y.t["5h0QOD"]),searchTerm:E,onChange:e=>g(e),onClear:()=>g("")}),R.map((e,t)=>(0,n.jsxs)(l.Fragment,{children:[0===t?null:(0,n.jsx)("div",{className:M.rowDivider}),(0,n.jsx)(U,{row:e,onClick:()=>{let t=[...p];t.includes(e.item.id)?t=t.filter(t=>t!==e.item.id):t.push(e.item.id),h(t)},checked:p.includes(e.item.id)})]},e.item.id))]}),(0,n.jsxs)(s.mzw,{className:M.footer,children:[(0,n.jsx)("div",{className:M.activityInfoOuterContainer,children:(0,n.jsxs)("div",{className:M.activityInfoInnerContainer,children:[(0,n.jsx)("img",{src:D.url,className:M.activityInfoImage,alt:t.application.name}),(0,n.jsxs)("div",{className:M.activityInfoText,children:[(0,n.jsx)(s.Text,{variant:"text-md/semibold",className:M.ellipsis,children:t.application.name}),(0,n.jsx)(s.Text,{variant:"text-sm/medium",className:M.ellipsis,children:t.application.description}),(0,n.jsx)(s.Text,{variant:"text-xs/medium",className:M.ellipsis,children:(0,n.jsx)(s.eee,{href:A,children:A})})]})]})}),(0,n.jsx)("div",{className:M.footerDivider}),(0,n.jsxs)("div",{className:M.copySendBar,children:[(0,n.jsx)(V,{link:A,applicationId:t.application.id}),(0,n.jsx)(s.zxk,{onClick:Z,disabled:p.length<=0,children:y.intl.string(y.t.TXNS7e)})]})]})]})}function U(e){let{row:t,onClick:i,checked:l}=e,a=null,r=null,o=null;switch(t.type){case P.bm.DM:case P.bm.FRIEND:a=(0,n.jsx)(s.qEK,{size:s.EFr.SIZE_40,src:t.item.getAvatarURL(null,128,!1),"aria-label":t.item.username}),r=D.ZP.getName(t.item),o=D.ZP.getUserTag(t.item);break;case P.bm.GROUP_DM:{let e=(0,T.x)(t.item),i=(0,N.F6)(t.item,O.default,E.Z);a=(0,n.jsx)(s.qEK,{src:e,"aria-label":i,size:s.EFr.SIZE_40}),r=(0,N.F6)(t.item,O.default,E.Z);break}case P.bm.CHANNEL:{let e=t.item,i=m.Z.getGuild(e.guild_id);if(null==i)return null;if(r="#".concat((0,N.F6)(e,O.default,E.Z)),o=i.name,null!=i.icon){let t=g.ZP.getGuildIconURL({id:e.guild_id,icon:i.icon,size:40});a=(0,n.jsx)(s.qEK,{src:t,"aria-label":r,size:s.EFr.SIZE_40})}else{let e=(0,h.Zg)(i.name);a=(0,n.jsx)("div",{className:M.acronym,"aria-hidden":!0,children:e})}}}return(0,n.jsxs)(s.P3F,{onClick:i,className:M.rowContainer,children:[(0,n.jsxs)("div",{className:M.rowLeft,children:[(0,n.jsx)("div",{className:M.rowAvatar,children:a}),(0,n.jsxs)("div",{className:M.rowNameContainer,children:[(0,n.jsx)(s.Text,{variant:"text-md/semibold",className:M.rowName,children:r}),(0,n.jsx)(s.Text,{variant:"text-xs/medium",className:M.rowSubName,children:o})]})]}),(0,n.jsx)(s.XZJ,{value:l,type:s.XZJ.Types.INVERTED,displayOnly:!0,className:M.rowRight})]})}function V(e){let{applicationId:t,link:i}=e,a=(0,r.e7)([O.default],()=>O.default.getCurrentUser()),[o,I]=l.useState(!1);return l.useEffect(()=>{let e;return o&&(e=setTimeout(()=>{I(!1)},1e3)),()=>{null!=e&&clearTimeout(e)}},[o]),(0,n.jsxs)(s.zxk,{look:s.zxk.Looks.LINK,color:s.zxk.Colors.LINK,onClick:function(){f.default.track(v.rMx.ACTIVITY_BOOKMARK_COPY_URL,{user_id:null==a?void 0:a.id,application_id:t}),(0,p.JG)(i),I(!0)},innerClassName:M.copyButton,children:[o?(0,n.jsx)(s.owK,{size:"md",color:"currentColor"}):(0,n.jsx)(s.xPt,{size:"md",color:"currentColor"}),o?y.intl.string(y.t["t5VZ8/"]):y.intl.string(y.t.WqhZsr)]})}},751771:function(e,t,i){let n,l,a,r,s,o,I;i.d(t,{Z:()=>M}),i(47120);var u,d,_,c=i(442837),T=i(570140),N=i(823385),m=i(814443),S=i(823379),E=i(971130),O=i(592125),f=i(496675),g=i(699516),p=i(981631),P=i(245335);let h=new Set,D=[],x=new Map;function v(e){let t=new Set,i=null==r||I===P.Iq.EMBEDDED_APPLICATION?void 0:r.id,n=(0,E.rh)(h,i);for(let e of(null==n||g.Z.isBlocked(n.id)||t.add(n.id),m.Z.getUserAffinitiesUserIds()))t.add(e);let l=new Set;return I===P.Iq.EMBEDDED_APPLICATION&&N.Z.getChannelHistory().map(e=>O.Z.getChannel(e)).filter(S.lm).filter(e=>e.type===p.d4z.GUILD_TEXT).filter(e=>f.Z.can(p.Plq.SEND_MESSAGES,e)).slice(0,3).forEach(e=>l.add(e.id)),(0,E.an)({query:e,omitUserIds:h,suggestedUserIds:t,maxRowsWithoutQuery:100,omitGuildId:i,suggestedChannelIds:l,inviteTargetType:I})}function C(e){D=e,x=new Map,e.forEach((e,t)=>{x.set(e,{index:t})})}class y extends(u=c.ZP.Store){initialize(){this.waitFor(g.Z,m.Z)}getInviteSuggestionRows(){return D}getTotalSuggestionsCount(){return l}getInitialCounts(){return n}getSelectedInviteMetadata(e){let t=x.get(e),i=m.Z.getUserAffinitiesUserIds();return null!=t?{rowNum:t.index,isAffinitySuggestion:e.isSuggested,numTotal:D.length,numAffinityConnections:i.size,isFiltered:a}:null}}_="InviteSuggestionsStore",(d="displayName")in y?Object.defineProperty(y,d,{value:_,enumerable:!0,configurable:!0,writable:!0}):y[d]=_;let M=new y(T.Z,{LOAD_INVITE_SUGGESTIONS:function(e){let{omitUserIds:t,guild:i,channel:u,applicationId:d,inviteTargetType:_}=e;r=null!=u?i:null,s=u,o=d,I=_,h=new Set([...t,...g.Z.getBlockedOrIgnoredIDs(),...(0,E.Sz)({channel:s,applicationId:o,inviteTargetType:_})]),a=!1;let{rows:c,counts:T}=v("");C(c),n=T,l=D.length},INVITE_SUGGESTIONS_SEARCH:function(e){let{query:t}=e;a=""!==t;let{rows:i}=v(t);C(i)}})},971130:function(e,t,i){let n;i.d(t,{Sz:()=>C,Vg:()=>A,ZP:()=>U,an:()=>x,bm:()=>m,rh:()=>v}),i(653041),i(47120);var l,a=i(317381),r=i(592125),s=i(271383),o=i(306680),I=i(699516),u=i(594174),d=i(55589),_=i(483360),c=i(981631),T=i(245335),N=i(388032);n=i(603617);var m=((l={}).GROUP_DM="GROUP_DM",l.DM="DM",l.FRIEND="FRIEND",l.CHANNEL="CHANNEL",l);let S=(e,t)=>null!=e&&s.ZP.isMember(e,t),E=e=>{let{omitUserIds:t,suggestedUserIds:i,maxRowsWithoutQuery:n,omitGuildId:l,shownUserIds:a,rows:r,counts:s}=e;if(null!=i)for(let e of i){if(null!=n&&n>0&&r.length>=n)break;if(t.has(e)||a.has(e))continue;let i=u.default.getUser(e);!(null==i||S(l,i.id))&&(a.add(i.id),r.push({type:"FRIEND",item:i,isSuggested:!0}),s.numFriends++)}},O=e=>{let{suggestedChannelIds:t,maxRowsWithoutQuery:i,rows:n,counts:l}=e;if(null!=t)for(let e of t){if(null!=i&&i>0&&n.length>=i)break;let t=r.Z.getChannel(e);null!=t&&(n.push({type:"CHANNEL",item:t,isSuggested:!0}),l.numChannels++)}},f=e=>{let{omitUserIds:t,maxRowsWithoutQuery:i,omitGuildId:n,shownUserIds:l,rows:a,counts:s,includeGroupDms:I,limit:_}=e,T=0;for(let e of d.Z.getPrivateChannelIds()){if(null!=i&&i>0&&a.length>=i||null!=_&&T>=_)break;let d=r.Z.getChannel(e);if(null==d||!d.isPrivate())continue;if(I&&d.type===c.d4z.GROUP_DM){a.push({type:"GROUP_DM",item:d,isSuggested:!1}),s.numGroupDms++,T++;continue}if(null==o.ZP.lastMessageId(d.id))continue;let N=d.getRecipientId();if(null!=N&&!t.has(N)&&!l.has(N)){let e=u.default.getUser(N);if(null==e||e.bot||S(n,e.id))continue;l.add(e.id),a.push({type:"DM",item:e,isSuggested:!1}),s.numDms++,T++}}},g=e=>{let{omitUserIds:t,maxRowsWithoutQuery:i,omitGuildId:n,shownUserIds:l,rows:a,counts:r}=e;for(let e of I.Z.getFriendIDs()){if(null!=i&&i>0&&a.length>=i)break;if(t.has(e)||l.has(e))continue;let s=u.default.getUser(e);!(null==s||S(n,s.id))&&(a.push({type:"FRIEND",item:s,isSuggested:!1}),r.numFriends++)}},p=e=>{let{query:t,rows:i,counts:n,inviteTargetType:l}=e;l===T.Iq.EMBEDDED_APPLICATION&&_.ZP.queryChannels({query:t,limit:3,guildId:void 0}).forEach(e=>{let{record:t}=e;i.push({type:"CHANNEL",item:t,isSuggested:!1}),n.numChannels++})},P=e=>{let{query:t,omitUserIds:i,shownUserIds:n,rows:l,counts:a}=e;_.ZP.queryDMUsers({query:t,limit:50}).forEach(e=>{let{record:t}=e;if(i.has(t.id))return;let s=r.Z.getDMFromUserId(t.id);null!=s&&null!=o.ZP.lastMessageId(s)&&(n.add(t.id),l.push({type:"DM",item:t,isSuggested:!1}),a.numDms++)})},h=e=>{let{query:t,rows:i,counts:n}=e;_.ZP.queryGroupDMs({query:t,limit:50,fuzzy:!1}).forEach(e=>{let{record:t}=e;i.push({type:"GROUP_DM",item:t,isSuggested:!1}),n.numGroupDms++})},D=e=>{let{query:t,rows:i,counts:n,omitUserIds:l,shownUserIds:a}=e;_.ZP.queryFriends({query:t,limit:500,_fuzzy:!1}).forEach(e=>{let{record:t}=e;!(l.has(t.id)||a.has(t.id))&&(a.add(t.id),i.push({type:"FRIEND",item:t,isSuggested:!1}),n.numFriends++)})};function x(e){let{query:t,inviteTargetType:i,omitUserIds:n,suggestedUserIds:l,suggestedChannelIds:a,maxRowsWithoutQuery:r,omitGuildId:s}=e,o=new Set,I=[],u={numFriends:0,numDms:0,numGroupDms:0,numGuildMembers:0,numChannels:0};if(""===t){let e={omitUserIds:n,maxRowsWithoutQuery:r,omitGuildId:s,shownUserIds:o,rows:I,counts:u};i===T.Iq.EMBEDDED_APPLICATION&&(f({...e,includeGroupDms:!1,limit:1}),O({...e,suggestedChannelIds:a})),E({...e,suggestedUserIds:l}),f({...e,includeGroupDms:!0}),g(e)}else{let e={query:t,rows:I,counts:u};i===T.Iq.EMBEDDED_APPLICATION&&p({...e,inviteTargetType:i}),P({...e,omitUserIds:n,shownUserIds:o}),h(e),D({...e,omitUserIds:n,shownUserIds:o})}return{rows:I,counts:u}}function v(e,t){for(let i of d.Z.getPrivateChannelIds()){let n=r.Z.getChannel(i);if(null==n||!n.isDM()||null==o.ZP.lastMessageId(n.id))continue;let l=n.getRecipientId();if(null!=l&&!e.has(l)){let e=u.default.getUser(l);if(null==e||e.bot||S(t,e.id))continue;return e}}return null}function C(e){let{channel:t,inviteTargetType:i,applicationId:n}=e;if(i===T.Iq.EMBEDDED_APPLICATION&&null!=t){for(let e of a.ZP.getEmbeddedActivitiesForChannel(t.id))if(e.applicationId===n)return new Set(e.userIds)}return new Set}let y={MINUTES:"minutes",HOURS:"hours",DAYS:"days",NEVER:"never"},M={[n.INVITE_OPTIONS_30_MINUTES.value]:{value:30,type:y.MINUTES},[n.INVITE_OPTIONS_1_HOUR.value]:{value:1,type:y.HOURS},[n.INVITE_OPTIONS_6_HOURS.value]:{value:6,type:y.HOURS},[n.INVITE_OPTIONS_12_HOURS.value]:{value:12,type:y.HOURS},[n.INVITE_OPTIONS_1_DAY.value]:{value:1,type:y.DAYS},[n.INVITE_OPTIONS_7_DAYS.value]:{value:7,type:y.DAYS},[n.INVITE_OPTIONS_FOREVER.value]:{value:0,type:y.NEVER}};function A(e,t){let i=parseInt(t,10),n=0===i,l=M[e].value;switch(M[e].type){case y.MINUTES:if(n)return N.intl.string(N.t["/WbTXF"]);return N.intl.formatToPlainString(N.t.eDRWJC,{numUses:i});case y.HOURS:if(n)return N.intl.formatToPlainString(N.t.ZVdJMz,{numHours:l});return N.intl.formatToPlainString(N.t.NgZgAA,{numHours:l,numUses:i});case y.DAYS:if(n)return N.intl.formatToPlainString(N.t.T96qsr,{numDays:l});return N.intl.formatToPlainString(N.t.TfuB9P,{numDays:l,numUses:i});case y.NEVER:if(n)return N.intl.string(N.t.QrHBnJ);return N.intl.formatToPlainString(N.t.yJnTxM,{numUses:i});default:return""}}let U={getMaxAgeOptions:n.MAX_AGE_OPTIONS,getMaxUsesOptions:n.MAX_USES_OPTIONS,INVITE_OPTIONS_FOREVER:n.INVITE_OPTIONS_FOREVER,INVITE_OPTIONS_1_DAY:n.INVITE_OPTIONS_1_DAY,INVITE_OPTIONS_7_DAYS:n.INVITE_OPTIONS_7_DAYS,INVITE_OPTIONS_12_HOURS:n.INVITE_OPTIONS_12_HOURS,INVITE_OPTIONS_6_HOURS:n.INVITE_OPTIONS_6_HOURS,INVITE_OPTIONS_1_HOUR:n.INVITE_OPTIONS_1_HOUR,INVITE_OPTIONS_30_MINUTES:n.INVITE_OPTIONS_30_MINUTES,INVITE_OPTIONS_UNLIMITED:n.INVITE_OPTIONS_UNLIMITED,INVITE_OPTIONS_ONCE:n.INVITE_OPTIONS_ONCE,INVITE_OPTIONS_5_TIMES:n.INVITE_OPTIONS_5_TIMES,INVITE_OPTIONS_10_TIMES:n.INVITE_OPTIONS_10_TIMES,INVITE_OPTIONS_25_TIMES:n.INVITE_OPTIONS_25_TIMES,INVITE_OPTIONS_50_TIMES:n.INVITE_OPTIONS_50_TIMES,INVITE_OPTIONS_100_TIMES:n.INVITE_OPTIONS_100_TIMES}},603617:function(e,t,i){i.r(t),i.d(t,{INVITE_OPTIONS_100_TIMES:()=>d,INVITE_OPTIONS_10_TIMES:()=>o,INVITE_OPTIONS_12_HOURS:()=>m,INVITE_OPTIONS_1_DAY:()=>S,INVITE_OPTIONS_1_HOUR:()=>T,INVITE_OPTIONS_25_TIMES:()=>I,INVITE_OPTIONS_30_MINUTES:()=>c,INVITE_OPTIONS_50_TIMES:()=>u,INVITE_OPTIONS_5_TIMES:()=>s,INVITE_OPTIONS_6_HOURS:()=>N,INVITE_OPTIONS_7_DAYS:()=>E,INVITE_OPTIONS_FOREVER:()=>O,INVITE_OPTIONS_ONCE:()=>r,INVITE_OPTIONS_UNLIMITED:()=>a,MAX_AGE_OPTIONS:()=>f,MAX_USES_OPTIONS:()=>_});var n=i(388032);function l(e,t){return{value:e,get label(){return t()}}}let a=l(0,()=>n.intl.formatToPlainString(n.t["r/IcuL"],{maxUses:0})),r=l(1,()=>n.intl.formatToPlainString(n.t["r/IcuL"],{maxUses:1})),s=l(5,()=>n.intl.formatToPlainString(n.t["r/IcuL"],{maxUses:5})),o=l(10,()=>n.intl.formatToPlainString(n.t["r/IcuL"],{maxUses:10})),I=l(25,()=>n.intl.formatToPlainString(n.t["r/IcuL"],{maxUses:25})),u=l(50,()=>n.intl.formatToPlainString(n.t["r/IcuL"],{maxUses:50})),d=l(100,()=>n.intl.formatToPlainString(n.t["r/IcuL"],{maxUses:100})),_=[a,r,s,o,I,u,d],c=l(1800,()=>n.intl.formatToPlainString(n.t.iXLF9f,{minutes:30})),T=l(3600,()=>n.intl.formatToPlainString(n.t.xCjYxM,{hours:1})),N=l(21600,()=>n.intl.formatToPlainString(n.t.xCjYxM,{hours:6})),m=l(43200,()=>n.intl.formatToPlainString(n.t.xCjYxM,{hours:12})),S=l(86400,()=>n.intl.formatToPlainString(n.t.k2UNz8,{days:1})),E=l(604800,()=>n.intl.formatToPlainString(n.t.k2UNz8,{days:7})),O=l(0,()=>n.intl.string(n.t.PqEzn5)),f=[c,T,N,m,S,E,O]},814955:function(e,t,i){e.exports={modalRoot:"modalRoot__78cd9",header:"header__78cd9",modalContent:"modalContent__78cd9",searchBar:"searchBar__78cd9",rowDivider:"rowDivider__78cd9",rowContainer:"rowContainer__78cd9",rowLeft:"rowLeft__78cd9",rowAvatar:"rowAvatar__78cd9",rowNameContainer:"rowNameContainer__78cd9",rowName:"rowName__78cd9",rowSubName:"rowSubName__78cd9",rowRight:"rowRight__78cd9",footer:"footer__78cd9",footerDivider:"footerDivider__78cd9",activityInfoOuterContainer:"activityInfoOuterContainer__78cd9",activityInfoInnerContainer:"activityInfoInnerContainer__78cd9",activityInfoImage:"activityInfoImage__78cd9",activityInfoText:"activityInfoText__78cd9",ellipsis:"ellipsis__78cd9",copySendBar:"copySendBar__78cd9",copyButton:"copyButton__78cd9",acronym:"acronym__78cd9"}}}]);
//# sourceMappingURL=14a7ef6b26d5f789.js.map