"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["2059"],{400354:function(e,t,n){n.d(t,{l:()=>a});var l=n(200651),i=n(192379),r=n(709014);let u={deafen:{name:"deafen",start:0,duration:70},undeafen:{name:"undeafen",start:110,duration:70},hover_undeafened:{name:"hover_undeafened",start:200,duration:70},hover_deafened:{name:"hover_deafened",start:300,duration:70}},a=e=>{let t=i.useRef(null),a=i.useRef(e);a.current=e;let o=i.useMemo(()=>()=>{null!=t.current&&t.current.play(e)},[e]),d=i.useCallback(()=>{if(null==t.current)return;let n="deafen"===e?"hover_undeafened":"hover_deafened";t.current.play(n)},[e]);return{events:{onClick:o,onMouseEnter:d,onMouseLeave:i.useCallback(()=>{if(null==t.current)return;let n="deafen"===e?"hover_undeafened":"hover_deafened";t.current.stopIfPlaying(n)},[e])},play:o,Component:i.useCallback(e=>(0,l.jsx)(r.L,{...e,src:()=>n.e("68449").then(n.t.bind(n,406785,19)),ref:t,initialAnimation:a.current,markers:u}),[])}}},571250:function(e,t,n){n.d(t,{Z:()=>i});var l=n(388032);function i(e,t,n){return n?l.intl.string(l.t["2Ne/Y2"]):t?l.intl.string(l.t.QZ7WSU):e?l.intl.string(l.t["2US87+"]):l.intl.string(l.t.wjcRFR)}},55311:function(e,t,n){n.d(t,{Z:()=>o});var l=n(200651);n(192379);var i=n(481060),r=n(846027),u=n(468026),a=n(388032);function o(e,t){if(e){(0,i.h7j)(e=>(0,l.jsx)(u.default,{...e,title:a.intl.string(a.t.QZ7WSU),body:a.intl.string(a.t.Tl9JpK)}));return}r.Z.toggleSelfDeaf({location:t})}},225559:function(e,t,n){n.d(t,{L:()=>i,v:()=>r});var l=n(570140);function i(){l.Z.dispatch({type:"NOW_PLAYING_MOUNTED"})}function r(){l.Z.dispatch({type:"NOW_PLAYING_UNMOUNTED"})}},989373:function(e,t,n){n.r(t),n.d(t,{default:()=>p,useOverlayInitialFocus:()=>v}),n(47120);var l=n(200651),i=n(192379),r=n(442837),u=n(13245),a=n(493773),o=n(238246),d=n(358085);n(606206);var s=n(998502),c=n(145597);n(371467);var f=n(554370),h=n(610394);function v(e){let t=(0,r.e7)([h.ZP],()=>{let e=h.ZP.getFocusedPID();return!d.isPlatformEmbedded||null!=e&&e!==c.R2}),[n,l]=i.useState(t),o=i.useCallback(()=>{requestAnimationFrame(()=>{try{u.Z.successfullyShown((0,c.QF)()),s.ZP.showInactive(e)}catch(t){t.message.includes("IPC")&&setTimeout(()=>{s.ZP.showInactive(e)},100)}})},[e]);return i.useEffect(()=>{(t||n)&&t&&!n&&(l(!0),o())},[o,n,t,e]),(0,a.Ng)(()=>{n&&o()}),n}function p(e){let{withTitleBar:t,windowKey:n}=e;return v(n)?(0,l.jsx)(o.Z,{withTitleBar:t,windowKey:n,title:"Discord Overlay",children:(0,l.jsx)(f.Z,{})}):null}},46145:function(e,t,n){n.d(t,{Z:()=>h}),n(47120),n(733860);var l,i=n(442837),r=n(570140),u=n(592125),a=n(271383),o=n(430824);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let s=[],c=new Set;class f extends(l=i.ZP.PersistedStore){initialize(e){var t;this.waitFor(a.ZP,o.Z,u.Z),c=new Set([...s=null!==(t=null==e?void 0:e.channelHistory)&&void 0!==t?t:[]])}getState(){return{channelHistory:s}}getChannelHistory(){return s}}d(f,"displayName","RecentVoiceChannelStore"),d(f,"persistKey","RecentVoiceChannelStore");let h=new f(r.Z,{POST_CONNECTION_OPEN:function(){c=new Set([...s])},VOICE_CHANNEL_SELECT:function(e){var t,n;let{channelId:l}=e;return!(null==l||!(null!==(n=null===(t=u.Z.getChannel(l))||void 0===t?void 0:t.isVocal())&&void 0!==n&&n)||c.has(l))&&(s.unshift(l),c.add(l),s.length>10&&(s.length=10,c=new Set([...s])),!0)}})},879815:function(e,t,n){n.d(t,{Z:()=>a});var l=n(442837),i=n(314897),r=n(131951),u=n(979651);function a(e){return(0,l.cj)([u.Z,r.Z,i.default],()=>(function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.Z,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.Z,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:i.default,o=null!=e?n.getVoiceState(e.getGuildId(),a.getId()):null;return{selfDeaf:l.isSelfDeaf(),deaf:null!==(t=null==o?void 0:o.deaf)&&void 0!==t&&t}})(e,u.Z,r.Z,i.default),[e])}},606206:function(e,t,n){let l;n.d(t,{Z:()=>m}),n(47120),n(653041),n(411104);var i,r,u,a=n(442837),o=n(570140),d=n(278323),s=n(212819),c=n(933557),f=n(592125),h=n(430824),v=n(293273),p=n(158776),g=n(699516),I=n(594174),_=n(55589),E=n(981631);let N=[s.h8.TEXT_CHANNEL,s.h8.GROUP_DM,s.h8.USER],C=null,Z=null,y=[],S=[];function A(e){y=[...y,e],S=S.map(e=>({...e,sent:y.includes(e.data.record.id)})),w.emitChange()}function P(){C=null,null!=l&&(l.destroy(),l=null),null!=Z&&Z()}function T(){let e=null!=C&&null!=C.application_id?v.Z.getApplicationActivity(C.application_id):null;if(null!=C&&(null==e||null==e.party||null==e.party.id))return P()}class O extends(i=a.ZP.Store){initialize(){this.waitFor(v.Z)}getActivity(){return C}getQuery(){var e;return null!==(e=null==l?void 0:l.query)&&void 0!==e?e:""}getResults(){return S}}u="ActivityInviteModalStore",(r="displayName")in O?Object.defineProperty(O,r,{value:u,enumerable:!0,configurable:!0,writable:!0}):O[r]=u;let w=new O(o.Z,{ACTIVITY_INVITE_MODAL_OPEN:function(e){C=e.activity,Z=e.resolve,y=[],null==l&&(l=new s.ZP((e,t)=>{S=(""===t.trim()?function(){let e=[];return _.Z.getPrivateChannelIds().forEach(t=>{let n=f.Z.getChannel(t);if(null!=n){if(n.type===E.d4z.DM){let t=n.getRecipientId(),l=null!=t?I.default.getUser(t):null;null!=l&&e.push({type:s.h8.USER,record:l,score:0})}else n.isMultiUserDM()&&e.push({type:s.h8.GROUP_DM,record:n,score:0})}}),e}():e).map(e=>{switch(e.type){case s.h8.USER:{let{record:t}=e;return{type:s.h8.USER,sent:y.includes(t.id),status:p.Z.getStatus(t.id),data:e}}case s.h8.TEXT_CHANNEL:{let{record:t}=e,n=f.Z.getChannel(t.parent_id),l=h.Z.getGuild(t.guild_id);return{type:s.h8.TEXT_CHANNEL,sent:y.includes(t.id),categoryName:null!=n?(0,c.F6)(n,I.default,g.Z):"",guildName:null!=l?l.toString():"",data:e}}case s.h8.GROUP_DM:{let{record:t}=e;return{type:s.h8.GROUP_DM,sent:y.includes(t.id),data:e}}default:throw Error("Unknown Result Type: ".concat(e.type))}}),w.emitChange()},N,100)),l.search("")},ACTIVITY_INVITE_MODAL_QUERY:function(e){let{query:t}=e;null!=l&&l.search(t)},ACTIVITY_INVITE_MODAL_SEND:function(e){if(null==C)return;let t=e.channelId,n=e.userId;null!=t?d.Z.sendActivityInvite({channelId:t,type:E.mFx.JOIN,activity:C,location:"Channel Text Area - Invite to Join Modal"}).then(()=>A(t)):null!=n&&d.Z.sendActivityInviteUser({userId:n,type:E.mFx.JOIN,activity:C,location:"Channel Text Area - Invite to Join Modal"}).then(()=>A(n))},ACTIVITY_INVITE_MODAL_CLOSE:P,OVERLAY_SET_INPUT_LOCKED:function(e){let{locked:t}=e;return!!t&&null!=C&&(P(),!0)},LOCAL_ACTIVITY_UPDATE:T,RPC_APP_DISCONNECTED:T}),m=12633==n.j?w:null},141038:function(e,t,n){n.d(t,{Z:()=>o}),n(653041),n(47120);var l=n(512722),i=n.n(l),r=n(90757),u=n.n(r),a=n(65154);function o(e,t,n){let l=window.DiscordNative;i()(null!=l,"Can't get desktop sources outside of native app"),t=null!=t?t:[a.vA.WINDOW,a.vA.SCREEN],n=null!=n?n:{width:150,height:150};let r=[];return t.includes(a.vA.SCREEN)&&e.supports(a.AN.SCREEN_PREVIEWS)&&(r.push(e.getScreenPreviews(n.width,n.height)),t=t.filter(e=>e!==a.vA.SCREEN)),t.includes(a.vA.WINDOW)&&e.supports(a.AN.WINDOW_PREVIEWS)&&(r.push(e.getWindowPreviews(n.width,n.height)),t=t.filter(e=>e!==a.vA.WINDOW)),0!==t.length&&r.push(l.desktopCapture.getDesktopCaptureSources({types:t,thumbnailSize:n})),Promise.all(r).then(e=>u()(e))}}}]);
//# sourceMappingURL=c54135e636b09be8.js.map