"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["91315"],{235449:function(e,t,n){n.d(t,{FO:()=>N,nA:()=>T,qQ:()=>C,r7:()=>j}),n(47120);var a=n(192379),l=n(392711),s=n.n(l),r=n(442837),i=n(883429),o=n(592125),c=n(496675),d=n(306680),u=n(823379),h=n(709054),m=n(344185),g=n(920303),x=n(569471),f=n(346479),Z=n(91159),v=n(231338);function j(){a.useEffect(()=>{(0,Z.A_)()},[])}function N(e){let t=function(e){let t=(0,r.Wu)([c.Z,m.Z,o.Z],()=>s()(m.Z.getThreadsForParent(e.guild_id,e.id)).values().map(e=>{let{id:t}=e;return o.Z.getChannel(t)}).filter(u.lm).filter(e=>c.Z.can(v.Pl.VIEW_CHANNEL,e)).map(e=>e.id).value(),[e.guild_id,e.id]);return a.useMemo(()=>s()(t).sort((e,t)=>h.default.compare(d.ZP.lastMessageId(e),d.ZP.lastMessageId(t))).reverse().value(),[t])}(e),[n,l]=(0,r.e7)([x.Z],()=>s().partition(t,e=>x.Z.hasJoined(e)),[t],r.pF);return{joinedThreadIds:n,unjoinedThreadIds:l}}function T(e){let t=(0,r.Wu)([c.Z,m.Z,o.Z],()=>s()(m.Z.getThreadsForGuild(e)).values().map(e=>s().values(e)).flatten().map(e=>{let{id:t}=e;return o.Z.getChannel(t)}).filter(u.lm).filter(e=>c.Z.can(v.Pl.VIEW_CHANNEL,e)).map(e=>e.id).value(),[e]);return a.useMemo(()=>s()(t).sort((e,t)=>h.default.compare(d.ZP.lastMessageId(e),d.ZP.lastMessageId(t))).reverse().value(),[t])}function C(e,t,n){let{canLoadMore:l,loading:d,nextOffset:u,isInitialLoad:h}=(0,r.cj)([g.Z],()=>({loading:g.Z.isLoading(e.id,t,n),isInitialLoad:g.Z.isInitialLoad,canLoadMore:g.Z.canLoadMore,nextOffset:g.Z.nextOffset})),m=a.useCallback(()=>{c.Z.can(v.Pl.READ_MESSAGE_HISTORY,e)&&f.Z.loadArchivedThreads(e.guild_id,e.id,t,n,u)},[e,t,n,u]),x=a.useRef(m);return a.useEffect(()=>{x.current=m}),a.useEffect(()=>{h&&x.current()},[e.id,t,n,h]),a.useEffect(()=>{i.Z.resort(e.id)},[e.id]),{threadIds:(0,r.Wu)([g.Z,o.Z,c.Z],()=>s()(g.Z.getThreads(e.id,t,n)).filter(e=>{let t=o.Z.getChannel(e);return null!=t&&c.Z.can(v.Pl.VIEW_CHANNEL,t)}).value()),canLoadMore:l,loading:d||h,loadMore:m}}},443671:function(e,t,n){n.d(t,{Z:()=>h});var a=n(200651),l=n(192379),s=n(120356),r=n.n(s),i=n(481060),o=n(487894),c=n(300234),d=n(388032),u=n(339996);function h(e){let{channel:t,threadIds:n,startThread:s,goToThread:h}=e,m=l.useCallback(e=>(0,a.jsx)(c.Z,{threadId:n[e.row],goToThread:h},"".concat(e.section,"-").concat(e.row)),[n,h]);return 0===n.length?(0,a.jsx)(o.Z,{channel:t,header:d.intl.string(d.t.HgTQ8v),startThread:s}):(0,a.jsx)(i.aVo,{className:r()(u.list,u.activeThreadsList),fade:!0,sections:[n.length],sectionHeight:0,rowHeight:80,renderRow:m,renderSection:()=>null,chunkSize:20})}},593130:function(e,t,n){n.d(t,{Z:()=>N}),n(47120);var a=n(200651),l=n(192379),s=n(120356),r=n.n(s),i=n(442837),o=n(481060),c=n(496675),d=n(346479),u=n(665906),h=n(91159),m=n(443671),g=n(342449),x=n(488131),f=n(124368),Z=n(981631),v=n(388032),j=n(242141);function N(e){let{channel:t,className:n,onClose:s}=e,N=(0,i.e7)([c.Z],()=>c.Z.can(Z.Plq.READ_MESSAGE_HISTORY,t)),C=(0,u.cD)(t),I=()=>{s(),(0,x.R6)(t,void 0,"Thread Browser Empty State")},p=l.useCallback((e,t)=>{s(),(0,x.ok)(e,!t,f.on.BROWSER)},[s]),E=function(e,t){let[n,a]=l.useState(""),[s,r]=l.useState(!1),[i,o]=l.useState(!1),[c,u]=l.useState([]),h=async()=>{if(null!=n&&""!==n&&!s){r(!0);try{let a=await d.Z.searchThreads(e,t,n);o(!0),u(a)}finally{r(!1)}}};return{query:n,setQuery:e=>{a(e),0===e.length&&o(!1)},isLoading:s,hasResults:i,submit:h,results:c}}(t.guild_id,t.id);return l.useEffect(()=>{(0,h.A_)()},[]),(0,a.jsx)("div",{className:r()(n,j.container),children:(0,a.jsx)(o.y5t,{component:(0,a.jsxs)("div",{className:j.header,children:[(0,a.jsx)(o.or_,{size:"md",color:"currentColor",className:j.threadIcon}),(0,a.jsx)(o.X6q,{variant:"heading-md/semibold",className:j.title,children:v.intl.string(v.t.E3H5lJ)}),N?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:j.divider}),(0,a.jsx)(T,{...E})]}):null,(0,a.jsx)("div",{className:j.spacer}),C?(0,a.jsx)(o.zxk,{size:o.zxk.Sizes.TINY,className:j.createButton,onClick:()=>{s(),(0,x.R6)(t,void 0,"Thread Browser Toolbar")},children:v.intl.string(v.t.CumH4u)}):null,(0,a.jsx)(o.P3F,{className:j.closeIcon,onClick:s,"aria-label":v.intl.string(v.t.cpT0Cg),children:(0,a.jsx)(o.Dio,{size:"md",color:"currentColor"})})]}),children:E.hasResults?(0,a.jsx)(m.Z,{channel:t,startThread:I,goToThread:p,threadIds:E.results}):(0,a.jsx)(g.Z,{channel:t,startThread:I,goToThread:p})})})}function T(e){let{query:t,setQuery:n,submit:l,isLoading:s}=e;return(0,a.jsx)(o.E1j,{autoFocus:!0,className:j.searchBox,query:t,isLoading:s,onChange:e=>n(e),onClear:()=>n(""),onKeyDown:e=>"Enter"===e.key&&l(),placeholder:v.intl.string(v.t.h0JN7e),"aria-label":v.intl.string(v.t.h0JN7e)})}},487894:function(e,t,n){n.d(t,{Z:()=>c});var a=n(200651);n(192379);var l=n(481060),s=n(499033),r=n(665906),i=n(388032),o=n(567170);function c(e){let{channel:t,header:n,startThread:c}=e,d=(0,r.NE)(t),u=(0,r.Xu)(t);return(0,a.jsxs)("div",{className:o.container,children:[(0,a.jsxs)("div",{className:o.iconContainer,children:[(0,a.jsx)("div",{className:o.icon,children:(0,a.jsx)(l.or_,{size:"custom",color:"currentColor",width:36,height:36})}),(0,a.jsx)(s.Z,{className:o.stars})]}),(0,a.jsx)(l.X6q,{className:o.header,variant:"heading-xl/semibold",children:n}),(0,a.jsx)(l.Text,{color:"header-secondary",variant:"text-md/normal",children:i.intl.string(i.t.jmq9GB)}),d||u?(0,a.jsx)(l.zxk,{className:o.cta,onClick:c,children:i.intl.string(i.t.rBIGBA)}):null]})}},300234:function(e,t,n){n.d(t,{Z:()=>Z});var a=n(200651),l=n(192379),s=n(442837),r=n(481060),i=n(239091),o=n(493773),c=n(884338),d=n(592125),u=n(720202),h=n(594174),m=n(260483),g=n(314208),x=n(124368),f=n(466218);let Z=l.memo(function(e){let{threadId:t,goToThread:l,showChannelName:o}=e,c=(0,s.e7)([d.Z],()=>d.Z.getChannel(t)),u=(0,s.e7)([d.Z],()=>d.Z.getChannel(c.parent_id));return(0,a.jsxs)(r.P3F,{className:f.container,onClick:e=>l(c,e.shiftKey),onContextMenu:e=>(0,i.jW)(e,async()=>{let{default:e}=await Promise.all([n.e("38902"),n.e("40157")]).then(n.bind(n,422200));return t=>(0,a.jsx)(e,{...t,channel:c})}),children:[(0,a.jsxs)("div",{className:f.left,children:[(0,a.jsxs)(r.X6q,{className:f.threadNameLine,variant:"heading-md/semibold",children:[(0,a.jsx)("span",{className:f.threadName,children:c.name}),o&&null!=u?(0,a.jsx)("span",{className:f.parentName,children:"#".concat(u.name)}):null]}),(0,g.Z)(c)]}),(0,a.jsx)(v,{channel:c})]})});function v(e){let{channel:t}=e,n=(0,s.e7)([m.Z],()=>{var e;return null!==(e=m.Z.getMemberIdsPreview(t.id))&&void 0!==e?e:[]}),l=(0,s.e7)([m.Z],()=>{var e;return null!==(e=m.Z.getMemberCount(t.id))&&void 0!==e?e:0}),r=(0,s.Wu)([h.default],()=>n.map(e=>h.default.getUser(e)));return((0,o.ZP)(()=>{n.filter((e,t)=>null==r[t]).forEach(e=>{u.Z.requestMember(t.guild_id,e)})}),0===n.length)?null:(0,a.jsx)(c.Z,{className:f.facepile,showDefaultAvatarsForNullUsers:!0,guildId:t.guild_id,users:r,count:l,max:x.yX})}},314208:function(e,t,n){n.d(t,{Z:()=>E});var a=n(200651),l=n(192379),s=n(442837),r=n(481060),i=n(99690),o=n(616780),c=n(471445),d=n(905405),u=n(937889),h=n(739566),m=n(267128),g=n(271383),x=n(306680),f=n(699516),Z=n(594174),v=n(709054),j=n(51144),N=n(144140),T=n(91159),C=n(217702),I=n(388032),p=n(466218);function E(e){return e.isActiveThread()?(0,a.jsx)(k,{channel:e}):(0,a.jsx)(_,{channel:e})}function k(e){let{channel:t}=e,n=(0,s.e7)([N.Z],()=>N.Z.getMostRecentMessage(t.id));return null==n?(0,a.jsx)(S,{channel:t}):(0,a.jsx)(P,{channel:t,message:n})}function S(e){let{channel:t}=e,n=(0,T.Ok)(t);return(0,a.jsxs)(r.Text,{className:p.subtext,variant:"text-sm/normal",color:"header-secondary",children:[I.intl.string(I.t.Jmh6n5),"\xa0 • \xa0",(0,T.Ye)(n)]})}function P(e){let{channel:t,message:n}=e;(0,o.$)({[t.guild_id]:[n.author.id]});let c=(0,s.e7)([Z.default],()=>{var e;return null!==(e=Z.default.getUser(n.author.id))&&void 0!==e?e:n.author}),{nick:g,colorString:x}=(0,h.ZP)(n),{isBlocked:j,isIgnored:N}=(0,s.cj)([f.Z],()=>({isBlocked:f.Z.isBlockedForMessage(n),isIgnored:f.Z.isIgnoredForMessage(n)}),[n]),I=(0,d.p)(),E=l.useMemo(()=>{let e=null!=n.content&&""!==n.content?(0,u.ZP)(n,{formatInline:!0,shouldFilterKeywords:I}).content:null,{contentPlaceholder:t,renderedContent:l,trailingIcon:s,leadingIcon:r}=(0,m.f)(n,e,j,N,p.messageContent,{trailingIconClass:p.messageContentTrailingIcon,leadingIconClass:p.messageContentLeadingIcon,iconSize:C.WW});return(0,a.jsxs)(a.Fragment,{children:[r,null!=l?l:(0,a.jsx)("span",{children:t}),s]})},[n,j,N,I]);return(0,a.jsxs)(r.Text,{className:p.subtext,variant:"text-sm/normal",color:"header-secondary",children:[(0,a.jsx)(i.Z,{className:p.avatar,user:c,size:r.EFr.SIZE_16}),(0,a.jsx)(r.PUh,{name:g,color:x,className:p.authorName}),":\xa0",E,"\xa0 • \xa0",(0,T.Ye)(v.default.extractTimestamp(n.id))]})}function _(e){var t,n,l;let{channel:d}=e,u=(0,s.e7)([x.ZP],()=>x.ZP.lastMessageId(d.id)),h=null==u?new Date(null!==(n=null===(t=d.threadMetadata)||void 0===t?void 0:t.archiveTimestamp)&&void 0!==n?n:Date.now()).getTime():v.default.extractTimestamp(u);(0,o.$)({[d.guild_id]:[d.ownerId]});let m=(0,s.e7)([Z.default],()=>Z.default.getUser(d.ownerId)),f=(0,s.e7)([g.ZP],()=>g.ZP.getMember(d.guild_id,d.ownerId)),N=null!==(l=(0,c.KS)(d))&&void 0!==l?l:r.or_;return(0,a.jsx)(r.Text,{className:p.subtext,variant:"text-sm/normal",color:"header-secondary",children:null==m?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:p.noAvatarIcon,children:(0,a.jsx)(N,{width:10,height:10,size:"custom",color:"currentColor"})}),I.intl.format(I.t["5Wk9+v"],{time:(0,T.Ye)(h)})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{className:p.avatar,user:m,size:r.EFr.SIZE_16}),I.intl.format(I.t.GFDmd3,{authorHook(e,t){var n,l;return(0,a.jsx)(r.PUh,{className:p.startedByName,color:null!==(n=null==f?void 0:f.colorString)&&void 0!==n?n:void 0,name:null!==(l=null==f?void 0:f.nick)&&void 0!==l?l:j.ZP.getName(m)},t)}}),(0,a.jsx)("span",{className:p.bullet,children:"•"}),I.intl.format(I.t["5Wk9+v"],{time:(0,T.Ye)(h)})]})})}},342449:function(e,t,n){n.d(t,{Z:()=>m}),n(47120);var a=n(200651),l=n(192379),s=n(683860),r=n(481060),i=n(235449),o=n(487894),c=n(300234),d=n(388032),u=n(339996);let h=new Set;function m(e){let{channel:t,startThread:n,goToThread:m}=e,{joinedThreadIds:x,unjoinedThreadIds:f}=(0,i.FO)(t),{threadIds:Z,canLoadMore:v,loading:j,loadMore:N}=(0,i.qQ)(t,s.z.LATEST_ACTIVITY,h),T=l.useRef(null);(0,i.r7)();let C=l.useCallback(e=>{let t=0===e.section?x:1===e.section?f:Z;return(0,a.jsx)(c.Z,{threadId:t[e.row],goToThread:m},"".concat(e.section,"-").concat(e.row))},[Z,x,f,m]),I=l.useCallback(e=>0===e.section?(0,a.jsx)(g,{text:d.intl.formatToPlainString(d.t["4E27f3"],{count:x.length})},e.section):1===e.section?(0,a.jsx)(g,{text:d.intl.formatToPlainString(d.t.csPc4O,{count:f.length})},e.section):(0,a.jsx)(g,{text:d.intl.string(d.t["wUNQ+/"])},e.section),[x.length,f.length]),p=l.useCallback(e=>1===e&&x.length>0?64:2===e&&(x.length>0||f.length>0)?64:32,[x.length,f.length]),E=l.useCallback(()=>{var e;let t=null===(e=T.current)||void 0===e?void 0:e.getScrollerState();if(null==t)return;let n=t.scrollTop+t.offsetHeight;t.scrollHeight-n<200&&N()},[N]);return 0===x.length&&0===f.length&&0===Z.length?j?(0,a.jsx)("div",{className:u.list,children:(0,a.jsx)(r.$jN,{className:u.spinner})}):(0,a.jsx)("div",{className:u.list,children:(0,a.jsx)(o.Z,{channel:t,header:d.intl.string(d.t.HgTQ8v),startThread:n})}):(0,a.jsx)(r.aVo,{ref:T,className:u.list,fade:!0,sections:[x.length,f.length,Z.length],sectionHeight:p,rowHeight:80,renderRow:C,renderSection:I,chunkSize:20,onScroll:v?E:void 0})}function g(e){let{text:t}=e;return(0,a.jsx)(r.Text,{color:"header-secondary",variant:"text-xs/bold",className:u.sectionHeader,children:t})}}}]);
//# sourceMappingURL=d4ac6f86089c0db3.js.map