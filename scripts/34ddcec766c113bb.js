"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["2634"],{296507:function(n){n.exports="/assets/30d1720360dd2c40.svg"},866402:function(n){n.exports="/assets/3a6a08a976f34e04.svg"},471253:function(n,e,t){t.d(e,{DT:()=>N,Ef:()=>v,HO:()=>C,NZ:()=>O,Pq:()=>S,Q1:()=>g,RK:()=>I,_0:()=>m,hz:()=>y,yi:()=>A});var i=t(512722),r=t.n(i),l=t(149765),a=t(544891),o=t(493683);t(749210);var s=t(911969),c=t(367907),d=t(944486),u=t(979651),_=t(700785),h=t(922482),E=t(192079),T=t(706058),p=t(590415),f=t(981631);function g(n,e){let t=n.getGuildId();return r()(null!=t,"This channel cannot be guildless."),e&&(0,c.yw)(f.rMx.REQUEST_TO_SPEAK_INITIATED,{...(0,E.s$)(n)}),a.tn.patch({url:f.ANM.UPDATE_VOICE_STATE(t),body:{request_to_speak_timestamp:e?new Date().toISOString():null,channel_id:n.id},rejectWithError:!1})}function m(n,e){let t=n.getGuildId();return r()(null!=t,"This channel cannot be guildless."),a.tn.patch({url:f.ANM.UPDATE_VOICE_STATE(t,e),body:{suppress:!1,request_to_speak_timestamp:new Date().toISOString(),channel_id:n.id},rejectWithError:!1})}function I(n,e){let t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=null==n?void 0:n.getGuildId();r()(null!=i,"This channel cannot be guildless.");let l=u.Z.getVoiceStateForChannel(n.id);return(0,p.gf)(l)!==p.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK||e||(0,c.yw)(f.rMx.PROMOTED_TO_SPEAKER,{...(0,E.s$)(n)}),a.tn.patch({url:f.ANM.UPDATE_VOICE_STATE(i),body:{suppress:e,request_to_speak_timestamp:null,channel_id:n.id,...t?{silent:t}:{}},rejectWithError:!1})}function A(n){let e=null==n?void 0:n.getGuildId();return r()(null!=e,"This channel cannot be guildless."),a.tn.patch({url:f.ANM.UPDATE_VOICE_STATE(e),body:{suppress:!0,channel_id:n.id,self_video:!1,self_stream:!1},rejectWithError:!1})}function N(n,e,t){let i=n.getGuildId();return r()(null!=i,"This channel cannot be guildless."),a.tn.patch({url:f.ANM.UPDATE_VOICE_STATE(i,e),body:{suppress:t,channel_id:n.id},rejectWithError:!1})}function y(n,e){if(null==e||null==n)return;let t=e.getGuildId();return r()(null!=t,"This channel cannot be guildless."),N(e,n.id,!0),a.tn.patch({url:f.ANM.UPDATE_VOICE_STATE(t,n.id),body:{suppress:!0,channel_id:e.id,self_video:!1,self_stream:!1},rejectWithError:!1})}function S(n,e,t){let i=n.getGuildId();r()(null!=i,"Channel cannot be guildless");let a=n.permissionOverwrites[i],c={id:i,type:s.BN.ROLE,allow:_.Hn,deny:_.Hn,...a};t?(c.allow=l.IH(c.allow,e),c.deny=l.Od(c.deny,e)):(c.allow=l.Od(c.allow,e),c.deny=l.IH(c.deny,e)),o.Z.updatePermissionOverwrite(n.id,c)}async function C(n,e,t,i){if(""===e)return;d.Z.getVoiceChannelId()!==n.id&&(0,h.TM)(n);let r=await (0,T.me)(n.id,e,t,i);return I(n,!1,!0),r}async function v(n,e,t){if(""!==e)return await (0,T.Dk)(n.id,e,t)}async function O(n){await (0,T.Ix)(n.id)}},192079:function(n,e,t){t.d(e,{ER:()=>u,kk:()=>_,s$:()=>h}),t(724458),t(47120),t(392711);var i=t(19780),r=t(5192),l=t(700785),a=t(427679),o=t(157925),s=t(981631),c=t(71080),d=t(388032);function u(n,e,t,i){let l=e[0],a=r.ZP.getName(n,t,l),o=null!=i?i:e.length;return 1===o&&null!=l?a:null==l?d.intl.formatToPlainString(d.t.chmM9P,{count:o}):d.intl.formatToPlainString(d.t.GhkJ29,{name:a,count:o-1})}function _(n,e){switch(n){case c.aC.OWNER:return d.intl.string(d.t.icuNBA);case c.aC.ADMINISTRATOR:return d.intl.string(d.t.eTmN5e);case c.aC.MEMBER:case c.aC.ROLE:return e?d.intl.string(d.t.Hw3XW1):d.intl.string(d.t.YieyPj);case c.aC.EMPTY_STATE:}return null}function h(n){let e=a.Z.getStageInstanceByChannel(n.id);return{channel_id:n.id,guild_id:n.guild_id,topic:null==e?void 0:e.topic,media_session_id:i.Z.getMediaSessionId(),request_to_speak_state:l.Uu(s.Plq.REQUEST_TO_SPEAK,n)?o.BM.EVERYONE:o.BM.NO_ONE,stage_instance_id:null==e?void 0:e.id}}},706058:function(n,e,t){t.d(e,{Dk:()=>a,Ix:()=>o,me:()=>l});var i=t(544891),r=t(981631);async function l(n,e,t,l,a){return(await i.tn.post({url:r.ANM.STAGE_INSTANCES,body:{channel_id:n,topic:e,privacy_level:t,guild_scheduled_event_id:a,send_start_notification:l},rejectWithError:!1})).body}async function a(n,e,t){return(await i.tn.patch({url:r.ANM.STAGE_INSTANCE(n),body:{topic:e,privacy_level:t},rejectWithError:!1})).body}function o(n){return i.tn.del({url:r.ANM.STAGE_INSTANCE(n),rejectWithError:!1})}},548841:function(n,e,t){t.d(e,{default:()=>u});var i=t(200651);t(192379);var r=t(481060),l=t(287734),a=t(313201),o=t(471253),s=t(939863),c=t(388032),d=t(853743);let u=n=>{let{channel:e,...t}=n,u=(0,a.Dt)();return(0,i.jsxs)(r.ConfirmModal,{confirmText:c.intl.string(c.t.saZaRU),cancelText:c.intl.string(c.t["ETE/oK"]),onConfirm:()=>{(0,o.NZ)(e),l.default.disconnect()},confirmButtonColor:r.zxk.Colors.RED,bodyClassName:d.body,...t,children:[(0,i.jsx)(s.Z,{className:d.headerIconContainer,children:(0,i.jsx)("div",{className:d.iconBackground,children:(0,i.jsx)(r.XzT,{size:"custom",color:"currentColor",width:40,height:40,className:d.headerIcon})})}),(0,i.jsx)(r.X6q,{id:u,variant:"heading-xl/semibold",color:"header-primary",className:d.title,children:c.intl.string(c.t.xrYNBA)}),(0,i.jsx)(r.Text,{variant:"text-md/normal",color:"header-secondary",className:d.subtitle,children:c.intl.string(c.t.TP1D8v)})]})}},939863:function(n,e,t){t.d(e,{Z:()=>d});var i=t(200651);t(192379);var r=t(120356),l=t.n(r),a=t(388032),o=t(146791),s=t(296507),c=t(866402);function d(n){let{className:e,children:t}=n;return(0,i.jsxs)("div",{className:l()(o.container,e),children:[(0,i.jsx)("img",{alt:a.intl.string(a.t.VoB8OT),src:c,className:l()(o.sparkleIcon,o.sparkleBottom)}),t,(0,i.jsx)("img",{alt:a.intl.string(a.t.VoB8OT),src:s,className:l()(o.sparkleIcon,o.sparkleTop)})]})}},853743:function(n,e,t){n.exports={body:"body__33efa",headerIconContainer:"headerIconContainer__33efa",iconBackground:"iconBackground__33efa",headerIcon:"headerIcon__33efa",title:"title__33efa",subtitle:"subtitle__33efa"}},146791:function(n,e,t){n.exports={container:"container__05cdc",sparkleIcon:"sparkleIcon__05cdc",sparkleTop:"sparkleTop__05cdc",sparkleBottom:"sparkleBottom__05cdc"}}}]);
//# sourceMappingURL=34ddcec766c113bb.js.map