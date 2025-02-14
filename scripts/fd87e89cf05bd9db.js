"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["33397"],{98369:function(e,t,n){n.d(t,{Z:()=>Z}),n(47120),n(518263),n(970173),n(520712),n(268111),n(941497),n(32026),n(480839),n(744285),n(492257),n(873817),n(724458);var r,l,i,u=n(442837),s=n(46973),a=n(570140),o=n(569545),c=n(314897),d=n(19780),f=n(959457),E=n(630759),_=n(729303),S=n(651941),g=n(981631);let h=new Map,m=new Map,R=!1,N=null;function I(){return f.Z.getAllActiveStreamKeys().reduce((e,t)=>{let{ownerId:n}=(0,o.my)(t),r=!0===h.get(n),l=m.get(t)!==r;return m.set(t,r),!!l||e},!1)}function T(){var e;let t=null!==(e=d.Z.getUserIds())&&void 0!==e?e:new Set,n=c.default.getId(),r=!0;for(let e of t)if(n!==e&&!0!==h.get(e)){r=!1;break}let l=r!==R;return R=r,l}function v(e){let{userId:t}=e;if(c.default.getId()===t)return!1;let n=function(e){let t=d.Z.getSecureFramesRosterMapEntry(e);if(null==t)return!1;let n=new Uint8Array(t),r=S.Z.isKeyVerified(e,n)||_.Z.isKeyVerified(e,n),l=(0,E.UB)(e,[d.Z,f.Z]),i=r&&!l,u=i!==h.get(e);return h.set(e,i),u}(t),r=I(),l=T();return n||r||l}function y(){h.clear(),m.clear(),R=!1}class C extends(r=u.ZP.Store){initialize(){this.waitFor(_.Z,S.Z,d.Z,f.Z)}isCallVerified(){return R}isStreamVerified(e){return m.get(e)}isUserVerified(e){return h.get(e)}}i="SecureFramesVerifiedStore",(l="displayName")in C?Object.defineProperty(C,l,{value:i,enumerable:!0,configurable:!0,writable:!0}):C[l]=i;let Z=new C(a.Z,{CONNECTION_OPEN:y,VOICE_CHANNEL_SELECT:function(e){let{channelId:t}=e;if(t===N)return!1;N=t,y()},RTC_CONNECTION_STATE:function(e){let{streamKey:t,state:n,context:r}=e;if(n!==g.hes.DISCONNECTED)return!1;switch(r){case s.Yn.STREAM:if(null==t)return!1;return m.delete(t),T();case s.Yn.DEFAULT:y()}},RTC_CONNECTION_ROSTER_MAP_UPDATE:function(e){let{userIds:t}=e,n=c.default.getId(),r=t.reduce((e,t)=>n===t?e:!!v({userId:t})||e,!1),l=I(),i=T();return r||l||i},SECURE_FRAMES_TRANSIENT_KEY_CREATE:v,SECURE_FRAMES_TRANSIENT_KEY_DELETE:v,SECURE_FRAMES_VERIFIED_KEY_CREATE:v,SECURE_FRAMES_VERIFIED_KEY_DELETE:v,SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE:v})},729303:function(e,t,n){n.d(t,{Z:()=>c}),n(47120),n(518263),n(970173),n(520712),n(268111),n(941497),n(32026),n(480839),n(744285),n(492257),n(873817);var r,l,i,u=n(442837),s=n(570140);let a=new Map;class o extends(r=u.ZP.Store){getUsers(){return a}isKeyVerified(e,t){let n=a.get(e);if(null==t||null==n||n.length!==t.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==n[e])return!1;return!0}}i="TransientKeyStore",(l="displayName")in o?Object.defineProperty(o,l,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[l]=i;let c=new o(s.Z,{CONNECTION_OPEN:function(){a.clear()},SECURE_FRAMES_TRANSIENT_KEY_CREATE:function(e){let{userId:t,key:n}=e,r=new Uint8Array(n);a.set(t,r)},SECURE_FRAMES_TRANSIENT_KEY_DELETE:function(e){let{userId:t}=e;return a.delete(t)}})},651941:function(e,t,n){n.d(t,{Z:()=>d}),n(518263),n(970173),n(520712),n(268111),n(941497),n(32026),n(480839),n(744285),n(492257),n(873817),n(47120);var r,l=n(442837),i=n(253135),u=n(570140),s=n(709054);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let o={};class c extends(r=l.ZP.PersistedStore){initialize(e){var t;o=null!==(t=null==e?void 0:e.users)&&void 0!==t?t:{}}getState(){return{users:o}}getKeyTrustedAt(e,t){var n;let r=(0,i.MK)(t);return null===(n=o[e])||void 0===n?void 0:n[r]}isKeyVerified(e,t){return null!=this.getKeyTrustedAt(e,t)}getUserIds(){return s.default.keys(o)}getUserVerifiedKeys(e){return o[e]}}a(c,"displayName","VerifiedKeyStore"),a(c,"persistKey","VerifiedKeyStore");let d=new c(u.Z,{SECURE_FRAMES_VERIFIED_KEY_CREATE:function(e){let{userId:t,key:n}=e,r=function(e){var t;let n=null!==(t=o[e])&&void 0!==t?t:{};return o[e]=n,n}(t),l=new Uint8Array(n);r[(0,i.MK)(l)]=Date.now()},SECURE_FRAMES_VERIFIED_KEY_DELETE:function(e){let{userId:t,serializedKey:n}=e,r=o[t];if(null==r)return!1;let l=delete r[n],i=!1;return 0===Object.keys(r).length&&(delete o[t],i=!0),l||i},SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE:function(e){let{userId:t}=e;return null!=o[t]&&delete o[t]}})},277642:function(e,t,n){n.d(t,{r:()=>o,t:()=>a});var r=n(442837),l=n(314897),i=n(19780),u=n(959457);function s(e,t){return 0===e.size||1===e.size&&e.has(t)}function a(e){return(0,r.e7)([u.Z,l.default],()=>{if(null==e)return!0;let t=u.Z.getUserIds(e);return null==t||s(t,l.default.getId())})}function o(){return(0,r.e7)([i.Z,l.default],()=>{let e=i.Z.getUserIds();return null==e||s(e,l.default.getId())})}},539067:function(e,t,n){n.d(t,{y:()=>a}),n(47120);var r=n(192379),l=n(442837),i=n(19780),u=n(630759),s=n(760373);function a(e){let{userId:t}=e,n=(0,l.e7)([i.Z],()=>i.Z.getSecureFramesRosterMapEntry(t)),[a,o]=r.useState(!0),[c,d]=r.useState(!1),[f,E]=r.useState(!1),_=r.useCallback(async(e,t)=>{o(!0);try{let n=s.GB,r=await (0,u.uX)(n),l=await (0,u.J6)(e,t,n);d(r),E(l)}catch(e){d(!1),E(!1)}finally{o(!1)}},[]);return r.useEffect(()=>{null==n?(d(!1),E(!1),o(!1)):_(t,n)},[n,_,t]),{loading:a,isCurrentUserKeyPersistent:c,isOtherUserKeyPersistent:f}}},802063:function(e,t,n){n.d(t,{i:()=>a});var r=n(192379),l=n(442837),i=n(19780),u=n(959457),s=n(630759);function a(e){let{channelId:t,userId:n,nickname:a,onAlertOpen:o}=e,c=function(e){let{userId:t}=e;return(0,l.e7)([i.Z,u.Z],()=>(0,s.UB)(t,[i.Z,u.Z]))}({userId:n}),d=r.useRef(null);r.useEffect(()=>{c&&null==d.current?d.current=setTimeout(()=>{o(),(0,s.lg)({userId:n,channelId:t,nickname:a})},1e3):(clearTimeout(d.current),d.current=null);let e=d.current;return()=>{clearTimeout(e)}},[t,c,a,o,n])}},441894:function(e,t,n){n.d(t,{J:()=>a}),n(47120);var r=n(442837),l=n(592125),i=n(19780),u=n(977059),s=n(760373);function a(e){let{channelId:t,location:n}=e,{enabled:a}=(0,u.S)({location:n});return(0,r.e7)([i.Z,l.Z],()=>(function(e,t){var n;let[r,u]=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[i.Z,l.Z];if(!t||null==e||r.getChannelId()!==e)return!1;let a=u.getChannel(e);if(null==a||a.isGuildStageVoice())return!1;let o=null===(n=r.getSecureFramesState())||void 0===n?void 0:n.version;return null!=o&&o!==s.Eg})(t,a,[i.Z,l.Z]),[t,a])}},210975:function(e,t,n){n.d(t,{m$:()=>f,wV:()=>c,zU:()=>d});var r=n(442837),l=n(569545),i=n(314897),u=n(19780),s=n(98369),a=n(277642),o=n(441894);function c(e){let{userId:t,channelId:n,location:l}=e,a=(0,o.J)({channelId:n,location:l});return(0,r.e7)([s.Z,i.default,u.Z],()=>null!=t&&a&&u.Z.isUserConnected(t)&&i.default.getId()!==t&&s.Z.isUserVerified(t),[a,t])}function d(e){let{streamKey:t,channelId:n,location:u}=e,c=(0,o.J)({channelId:n,location:u}),d=(0,a.t)(t);return(0,r.e7)([s.Z,i.default],()=>{if(!c||d||null==t)return!1;let e=i.default.getId(),{ownerId:n}=(0,l.my)(t);return n!==e&&s.Z.isStreamVerified(t)},[d,c,t])}function f(e){let{channelId:t,location:n}=e,l=(0,o.J)({channelId:t,location:n}),i=(0,a.r)();return(0,r.e7)([s.Z],()=>!!l&&!i&&s.Z.isCallVerified(),[i,l])}},301107:function(e,t,n){n.d(t,{W:()=>u}),n(411104);var r=n(192379),l=n(250683),i=n(253135);function u(e){let{fingerprintBase64:t,chunkSize:n,desiredLength:u}=e,s=r.useMemo(()=>{if(null==t||""===t)return null;let e=l.toByteArray(t),r=(0,i.Dq)(e,u,n);if(null==r)return null;let s=RegExp(".{1,".concat(n,"}"),"g"),a=r.match(s);return null==a?null:Array.from(a)},[n,t,u]);if(null!=t&&""!==t&&null==s)throw Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");return s}},65692:function(e,t,n){n.d(t,{q:()=>_}),n(47120),n(518263),n(970173),n(520712),n(268111),n(941497),n(32026),n(480839),n(744285),n(492257),n(873817);var r=n(192379),l=n(250683),i=n(512722),u=n.n(i),s=n(442837),a=n(253135),o=n(314897),c=n(131951),d=n(19780),f=n(760373),E=n(65154);function _(e){let{userId:t}=e,n=(0,s.e7)([o.default],()=>o.default.getId());u()(n!==t,"[useSecureFramesPairwiseFingerprint] Should not pass current user id.");let[i,_]=r.useState(null),[S,g]=r.useState(!1),h=(0,s.e7)([d.Z],()=>d.Z.getSecureFramesRosterMapEntry(t)),m=(0,s.e7)([d.Z],()=>d.Z.getSecureFramesRosterMapEntry(n)),R=r.useCallback(e=>{_(l.fromByteArray(e)),g(!1)},[]),N=r.useCallback(async(e,t,n,r)=>{if(c.Z.supports(E.AN.MLS_PAIRWISE_FINGERPRINTS)){var l;null===(l=d.Z.getRTCConnection())||void 0===l||l.getMLSPairwiseFingerprint(f.Xj,n,e=>{R(new Uint8Array(e))})}else R(await (0,a.Il)(f.Xj,new Uint8Array(t),e,new Uint8Array(r),n))},[R]),I=r.useRef(null);return r.useEffect(()=>{null!=h&&null!=m&&null==I.current&&(g(!0),I.current=setTimeout(()=>N(n,m,t,h),0));let e=I.current;return()=>{null!=e&&clearTimeout(e)}},[n,m,N,t,h]),r.useMemo(()=>({fingerprint:i,userKey:h,loading:S}),[i,S,h])}},540247:function(e,t,n){n.d(t,{P:()=>s}),n(518263),n(970173),n(520712),n(268111),n(941497),n(32026),n(480839),n(744285),n(492257),n(873817);var r=n(192379),l=n(442837),i=n(253135),u=n(651941);function s(e){let{userId:t,keyToOmit:n}=e,s=r.useMemo(()=>{if(null==n)return null;let e=new Uint8Array(n);return(0,i.MK)(e)},[n]);return(0,l.e7)([u.Z],()=>{let e=u.Z.getUserVerifiedKeys(t);return null==e?0:Object.keys(e).filter(e=>e!==s).length},[s,t])}},785792:function(e,t,n){n.d(t,{b:()=>o});var r=n(200651),l=n(192379),i=n(120356),u=n.n(i),s=n(481060),a=n(491585);function o(e){let{chunks:t,columns:n,className:i}=e,o=l.useMemo(()=>({"--secure-frames-columns":n}),[n]);return null==t?(0,r.jsx)("div",{className:a.loading,children:(0,r.jsx)(s.$jN,{})}):(0,r.jsx)("div",{style:o,className:u()(a.code,i),children:t.map((e,t)=>(0,r.jsx)("div",{className:u()(a.chunk,{[a.divider]:t>n-1}),children:(0,r.jsx)(s.Text,{className:a.codeText,variant:"code",color:"text-normal",children:e})},"".concat(e,"-").concat(t)))})}},190054:function(e,t,n){n.d(t,{H:()=>d}),n(47120);var r=n(200651),l=n(192379),i=n(120356),u=n.n(i),s=n(481060),a=n(572004),o=n(388032),c=n(984610);function d(e){let{chunks:t,className:n,onCopy:i,...d}=e,f=l.useMemo(()=>null==t?void 0:t.join(" "),[t]),[E,_]=l.useState(!1),S=l.useCallback(()=>{_(!0),(0,a.JG)(f),null==i||i()},[i,f]),g=E?s.owK:s.TIy;return(0,r.jsx)(s.P3F,{className:u()(c.container,n),onClick:S,children:(0,r.jsx)(s.ua7,{text:E?o.intl.string(o.t["t5VZ8/"]):o.intl.string(o.t.OpuAlJ),children:e=>(0,r.jsx)(g,{...d,...e,size:"xxs",color:E?s.TVs.colors.TEXT_POSITIVE:s.TVs.colors.INTERACTIVE_NORMAL})})})}},963410:function(e,t,n){n.r(t),n.d(t,{default:()=>A}),n(47120);var r=n(200651),l=n(192379),i=n(442837),u=n(481060),s=n(377171),a=n(592125),o=n(594174),c=n(5192),d=n(571826),f=n(630759),E=n(539067),_=n(802063),S=n(210975),g=n(301107),h=n(65692),m=n(540247),R=n(785792),N=n(190054),I=n(245581),T=n(760373),v=n(981631),y=n(388032),C=n(464459);function Z(e){let{badgeText:t,badgeColor:n}=e,i=l.useRef(t),s=l.useRef(n);return(0,r.jsx)(u.IGR,{text:i.current,color:s.current})}function A(e){let{transitionState:t,userId:n,channelId:A,onClose:x}=e,p=(0,i.e7)([o.default],()=>o.default.getUser(n)),b=(0,i.e7)([a.Z],()=>{var e;return null===(e=a.Z.getChannel(A))||void 0===e?void 0:e.getGuildId()}),M=c.ZP.useName(b,null,p),{fingerprint:U,userKey:j}=(0,h.q)({userId:n}),k=(0,g.W)({fingerprintBase64:U,chunkSize:T.iQ,desiredLength:T.KN}),F=l.useCallback(()=>{(0,d.s$)({userId:n,channelId:A})},[A,n]),V=(0,S.wV)({userId:n,channelId:A,location:"WebSecureFramesUserVerificationModal"});(0,_.i)({channelId:A,userId:n,nickname:M,onAlertOpen:x});let{isCurrentUserKeyPersistent:w,isOtherUserKeyPersistent:D,loading:K}=(0,E.y)({userId:n}),O=l.useCallback(()=>{null!=j&&((0,f.TQ)(n,j,D,A,v.Sbl.E2EE_USER_VERIFY_MODAL),x())},[j,n,D,A,x]),P=l.useCallback(()=>{null!=j&&((0,f.LO)(n,j,D),x())},[j,n,D,x]),[L,Y]=l.useMemo(()=>V?[y.intl.string(y.t.UNUuen),s.Z.BG_BRAND]:[y.intl.string(y.t.y2b7CA),s.Z.STATUS_DANGER],[V]),z=l.useMemo(()=>(0,f.kK)({isCurrentUserKeyPersistent:w,isOtherUserKeyPersistent:D,otherUserNickname:M}),[w,D,M]),G=(0,m.P)({userId:n,keyToOmit:j});return l.useEffect(()=>{(0,d.Rq)({userId:n,channelId:A})},[A,n]),(0,r.jsxs)(I.Z,{transitionState:t,title:y.intl.string(y.t["/WPGnJ"]),subtitle:y.intl.format(y.t.oc2kcX,{username:M}),children:[(0,r.jsxs)("div",{className:C.verification,children:[G>0&&(0,r.jsx)(u.Wn,{messageType:u.QYI.INFO,className:C.helpMessage,children:y.intl.format(y.t.uZDkz8,{count:G})}),(0,r.jsxs)("div",{className:C.header,children:[(0,r.jsx)(u.X6q,{variant:"text-sm/bold",color:"header-primary",children:y.intl.string(y.t["/WPGnJ"])}),null!=k&&(0,r.jsx)(N.H,{className:C.copyIcon,chunks:k,color:u.TVs.colors.INTERACTIVE_NORMAL,onCopy:F}),(0,r.jsx)("div",{className:C.codeStatus,children:null==k?(0,r.jsx)(u.$jN,{className:C.spinner,type:u.RAz.SPINNING_CIRCLE}):(0,r.jsx)(Z,{badgeText:L,badgeColor:Y})})]}),(0,r.jsx)(R.b,{className:C.code,chunks:k,columns:T.ak})]}),(0,r.jsx)(u.Text,{className:C.footer,variant:"text-sm/normal",color:"text-muted",children:z}),(0,r.jsx)(u.zxk,{fullWidth:!0,className:C.verifiedButton,color:u.Ttl.BRAND,size:u.PhG.MEDIUM,look:u.iLD.FILLED,disabled:null==k||K,onClick:V?P:O,children:V?y.intl.string(y.t["Osb+/v"]):y.intl.string(y.t["0tvNAg"])}),(0,r.jsx)(u.zxk,{fullWidth:!0,color:u.Ttl.PRIMARY,size:u.PhG.MEDIUM,look:u.iLD.FILLED,onClick:x,children:y.intl.string(y.t["ETE/oK"])})]})}},245581:function(e,t,n){n.d(t,{Z:()=>s});var r=n(200651);n(192379);var l=n(481060),i=n(313201),u=n(464459);function s(e){let{transitionState:t,title:n,subtitle:s,children:a}=e,o=(0,i.Dt)();return(0,r.jsxs)(l.Y0X,{transitionState:t,"aria-labelledby":o,children:[(0,r.jsx)("div",{className:u.shieldIconContainer,children:(0,r.jsx)("div",{className:u.shieldIcon,children:(0,r.jsx)(l.tQf,{size:"custom",width:55,height:55,color:l.TVs.colors.HEADER_SECONDARY})})}),(0,r.jsxs)(l.hzk,{className:u.content,children:[(0,r.jsx)(l.X6q,{className:u.title,variant:"heading-lg/bold",color:"header-primary",children:n}),(0,r.jsx)(l.Text,{className:u.subtitle,variant:"text-md/normal",color:"header-secondary",children:s}),a]})]})}},491585:function(e,t,n){e.exports={code:"code__1a1f5",chunk:"chunk__1a1f5",divider:"divider__1a1f5",codeText:"codeText__1a1f5",loading:"loading__1a1f5"}},984610:function(e,t,n){e.exports={container:"container_e03deb"}},464459:function(e,t,n){e.exports={content:"content_d43202",title:"title_d43202",subtitle:"subtitle_d43202",shieldIconContainer:"shieldIconContainer_d43202",shieldIcon:"shieldIcon_d43202",verification:"verification_d43202",header:"header_d43202",copyIcon:"copyIcon_d43202",code:"code_d43202",footer:"footer_d43202",verifiedButton:"verifiedButton_d43202",codeStatus:"codeStatus_d43202",spinner:"spinner_d43202",helpMessage:"helpMessage_d43202"}}}]);
//# sourceMappingURL=fd87e89cf05bd9db.js.map