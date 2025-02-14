"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["38902"],{787014:function(e,t,n){n.d(t,{S1:()=>s,ZP:()=>T,pW:()=>N,wk:()=>S,xv:()=>E,zc:()=>_,zz:()=>c}),n(789020);var l=n(544891),i=n(570140),r=n(408987);n(777639);var u=n(346479);n(388610);var a=n(592125),o=n(37234),d=n(981631);function s(e,t,n){i.Z.dispatch({type:"CHANNEL_SETTINGS_INIT",channelId:e,location:t,subsection:n})}function E(){i.Z.dispatch({type:"CHANNEL_SETTINGS_CLOSE"})}function _(e){i.Z.dispatch({type:"CHANNEL_SETTINGS_SET_SECTION",section:e})}function N(e){let{name:t,type:n,topic:l,bitrate:r,userLimit:u,nsfw:a,flags:o,rateLimitPerUser:d,defaultThreadRateLimitPerUser:s,defaultAutoArchiveDuration:E,template:_,defaultReactionEmoji:N,rtcRegion:S,videoQualityMode:c,autoArchiveDuration:T,locked:I,invitable:h,availableTags:C,defaultSortOrder:m,defaultForumLayout:f,iconEmoji:A,themeColor:p}=e;i.Z.dispatch({type:"CHANNEL_SETTINGS_UPDATE",name:t,channelType:n,topic:l,bitrate:r,userLimit:u,nsfw:a,flags:o,rateLimitPerUser:d,defaultThreadRateLimitPerUser:s,defaultAutoArchiveDuration:E,template:_,defaultReactionEmoji:N,rtcRegion:S,videoQualityMode:c,autoArchiveDuration:T,locked:I,invitable:h,availableTags:C,defaultSortOrder:m,defaultForumLayout:f,iconEmoji:A,themeColor:p})}async function S(e,t){let{name:n,type:o,position:s,topic:E,bitrate:_,userLimit:N,nsfw:S,flags:c,permissionOverwrites:T,rateLimitPerUser:I,defaultThreadRateLimitPerUser:h,defaultAutoArchiveDuration:C,template:m,defaultReactionEmoji:f,rtcRegion:A,videoQualityMode:p,autoArchiveDuration:L,locked:v,invitable:g,availableTags:y,defaultSortOrder:Z,defaultForumLayout:O,iconEmoji:G,themeColor:H}=t,U=a.Z.getChannel(e);return i.Z.dispatch({type:"CHANNEL_SETTINGS_SUBMIT"}),await u.Z.unarchiveThreadIfNecessary(e),l.tn.patch({url:d.ANM.CHANNEL(e),body:{name:n,type:o,position:s,topic:E,bitrate:_,user_limit:N,nsfw:S,flags:c,permission_overwrites:T,rate_limit_per_user:I,default_thread_rate_limit_per_user:h,default_auto_archive_duration:C,template:m,rtc_region:A,video_quality_mode:p,auto_archive_duration:L,locked:v,invitable:g,default_reaction_emoji:null!=f?{emoji_id:null==f?void 0:f.emojiId,emoji_name:null==f?void 0:f.emojiName}:null===f?null:void 0,available_tags:null==y?void 0:y.map(e=>({id:e.id,name:e.name,emoji_id:e.emojiId,emoji_name:e.emojiName,moderated:e.moderated})),default_sort_order:Z,default_forum_layout:O,icon_emoji:null!=G?{id:G.id,name:G.name}:null===G?null:void 0,theme_color:H},oldFormErrors:!0,rejectWithError:!1}).then(t=>{i.Z.dispatch({type:"CHANNEL_SETTINGS_SUBMIT_SUCCESS",channelId:e});let n=null==U?void 0:U.getGuildId();return null==n||(null==U?void 0:U.isThread())||r.Z.checkGuildTemplateDirty(n),t},e=>(i.Z.dispatch({type:"CHANNEL_SETTINGS_SUBMIT_FAILURE",errors:e.body}),e))}function c(e){let t=a.Z.getChannel(e);l.tn.del({url:d.ANM.CHANNEL(e),oldFormErrors:!0,rejectWithError:!0}).then(()=>{let e=null==t?void 0:t.getGuildId();null==e||(null==t?void 0:t.isThread())||r.Z.checkGuildTemplateDirty(e),E()})}let T={init:s,open:function(e,t,n){s(e,t,n),(0,o.jN)(d.S9g.CHANNEL_SETTINGS)},close:E,setSection:_,selectPermissionOverwrite:function(e){i.Z.dispatch({type:"CHANNEL_SETTINGS_OVERWRITE_SELECT",overwriteId:e})},updateChannel:N,saveChannel:S,deleteChannel:c,updateVoiceChannelStatus:function(e,t){return l.tn.put({url:d.ANM.UPDATE_VOICE_CHANNEL_STATUS(e),body:{status:t},rejectWithError:!1})},removeLinkedLobby:function(e){return l.tn.del({url:d.ANM.CHANNEL_LINKED_LOBBY(e),rejectWithError:!0})}}},388610:function(e,t,n){let l,i,r,u,a,o;n.d(t,{Z:()=>k}),n(724458),n(789020),n(47120);var d,s,E,_=n(392711),N=n.n(_),S=n(913527),c=n.n(S),T=n(442837),I=n(544891),h=n(570140),C=n(131704),m=n(601964),f=n(758449),A=n(598077),p=n(592125),L=n(981631);let v=L.QZA.CLOSED,g={},y={},Z=!1,O=!1,G=null,H=["name","type","topic_","bitrate_","userLimit_","nsfw_","flags_","rateLimitPerUser_","defaultThreadRateLimitPerUser","defaultAutoArchiveDuration","template","defaultReactionEmoji","rtcRegion","videoQualityMode","threadMetadata","banner","availableTags","defaultSortOrder","defaultForumLayout","iconEmoji","themeColor"];function U(e){let t=p.Z.getChannel(e.channelId);if(null==t)return j();v=L.QZA.OPEN,u=r=t,G="location"in e&&null!=e.location?e.location:null,i="subsection"in e?e.subsection:null,null!=u&&(u=u.set("nsfw",u.isNSFW())),a=p.Z.getChannel(u.parent_id),o=u.getGuildId(),g={},b({type:"CHANNEL_SETTINGS_SET_SECTION",section:null!=l?l:L.CoT.OVERVIEW,subsection:i})}function b(e){l=e.section,i=e.subsection,null!=u&&l===L.CoT.INSTANT_INVITES&&(Z=!0,I.tn.get({url:L.ANM.INSTANT_INVITES(u.id),oldFormErrors:!0,rejectWithError:!0}).then(e=>{Z=!1,h.Z.dispatch({type:"CHANNEL_SETTINGS_LOADED_INVITES",invites:e.body})},()=>Z=!1))}function j(){O=!1,v=L.QZA.CLOSED,l=null,u=r=null,a=null,y={}}let M=N().debounce(()=>{if(null==u||null==r)return!1;let e=u.toJS(),t=r.toJS();H.every(n=>e[n]===t[n])&&u!==r&&(u=r,V.emitChange())},500);function P(e){return new f.Z({code:e.code,temporary:e.temporary,revoked:e.revoked,inviter:null!=e.inviter?new A.Z(e.inviter):null,channel:(0,C.jD)(e.channel),guild:null!=e.guild?new m.ZP(e.guild):null,uses:e.uses,maxUses:e.max_uses,maxAge:e.max_age,createdAt:c()(e.created_at),type:e.type})}function R(e){return!!function(e){if(null==r||r.id!==e)return!1;if(r===u){let t=p.Z.getChannel(e);if(null==t)return!1;u=r=t,a=p.Z.getChannel(u.parent_id)}else{let t=p.Z.getChannel(e);if(null==t)return!1;r=t,null!=u&&(u=u.set("permissionOverwrites",r.permissionOverwrites),a=p.Z.getChannel(u.parent_id))}return!0}(e)&&null!=u&&(null!=o&&null==u.permissionOverwrites[o]&&(o=u.getGuildId()),!0)}function w(e){let{channelId:t}=e;return R(t)}class D extends(d=T.ZP.Store){initialize(){this.waitFor(p.Z)}hasChanges(){return u!==r}isOpen(){return O}getSection(){return l}getInvites(){return{invites:y,loading:Z}}showNotice(){return this.hasChanges()}getChannel(){return u}getFormState(){return v}getCategory(){return a}getProps(){return{submitting:v===L.QZA.SUBMITTING,errors:g,channel:u,section:l,subsection:i,invites:y,selectedOverwriteId:o,hasChanges:this.hasChanges(),analyticsLocation:G}}}E="ChannelSettingsStore",(s="displayName")in D?Object.defineProperty(D,s,{value:E,enumerable:!0,configurable:!0,writable:!0}):D[s]=E;let V=new D(h.Z,{CHANNEL_SETTINGS_INIT:U,CHANNEL_SETTINGS_OPEN:function(e){O=!0,U(e)},CHANNEL_SETTINGS_SUBMIT:function(){v=L.QZA.SUBMITTING,g={}},CHANNEL_SETTINGS_SUBMIT_SUCCESS:function(){r=u,v=L.QZA.OPEN},CHANNEL_SETTINGS_SUBMIT_FAILURE:function(e){var t;v=L.QZA.OPEN,g=Object.keys(null!==(t=e.errors)&&void 0!==t?t:{}).reduce((t,n)=>{let l=e.errors[n];return(0,_.isArray)(l)?t[n]=l.join("\n"):t[n]=l,t},{})},CHANNEL_SETTINGS_CLOSE:j,CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS:w,CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS:w,CHANNEL_SETTINGS_OVERWRITE_SELECT:function(e){let{overwriteId:t}=e;o=t},CHANNEL_SETTINGS_UPDATE:function(e){let{name:t,channelType:n,topic:l,bitrate:i,userLimit:r,nsfw:a,flags:o,rateLimitPerUser:d,defaultThreadRateLimitPerUser:s,autoArchiveDuration:E,locked:_,invitable:N,defaultAutoArchiveDuration:S,template:c,defaultReactionEmoji:T,rtcRegion:I,videoQualityMode:h,availableTags:C,defaultSortOrder:m,defaultForumLayout:f,iconEmoji:A,themeColor:p}=e;if(null==u)return!1;null!=t&&(u=u.set("name",t)),null!=l&&(u=u.set("topic",l)),null!=i&&(u=u.set("bitrate",i)),null!=r&&(u=u.set("userLimit",r)),null!=a&&(u=u.set("nsfw",a)),null!=o&&(u=u.set("flags",o)),null!=d&&(u=u.set("rateLimitPerUser",d)),null!=s&&(u=u.set("defaultThreadRateLimitPerUser",s)),null!=E&&(u=u.set("threadMetadata",{...u.threadMetadata,autoArchiveDuration:E})),null!=_&&(u=u.set("threadMetadata",{...u.threadMetadata,locked:_})),null!=N&&(u=u.set("threadMetadata",{...u.threadMetadata,invitable:N})),null!=S&&(u=u.set("defaultAutoArchiveDuration",S)),null!=c&&(u=u.set("template",c)),null!=n&&(u=u.set("type",n)),void 0!==I&&(u=u.set("rtcRegion",I)),null!=h&&(u=u.set("videoQualityMode",h)),void 0!==T&&(u=u.set("defaultReactionEmoji",T)),null!=C&&(u=u.set("availableTags",C)),null!=m&&(u=u.set("defaultSortOrder",m)),null!=f&&(u=u.set("defaultForumLayout",f)),void 0!==A&&(u=u.set("iconEmoji",A)),null!=p&&(u=u.set("themeColor",p)),M()},CHANNEL_SETTINGS_SET_SECTION:b,CHANNEL_SETTINGS_LOADED_INVITES:function(e){y={},e.invites.forEach(e=>{y[e.code]=P(e)})},CHANNEL_UPDATES:function(e){let{channels:t}=e;if(null==u)return!1;let n=!1;for(let e of t)n=R(e.id)||n;return n},CHANNEL_DELETE:function(e){let{channel:{id:t}}=e;if(null==u||u.id!==t)return!1;v=L.QZA.CLOSED},INSTANT_INVITE_REVOKE_SUCCESS:function(e){y={...y},delete y[e.code]},INSTANT_INVITE_CREATE_SUCCESS:function(e){y={...y,[e.invite.code]:P(e.invite)}}}),k=12633==n.j?V:null}}]);
//# sourceMappingURL=239f4e29ebe72fbb.js.map