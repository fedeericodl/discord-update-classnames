"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["80606"],{905423:function(l,e,n){n.d(e,{Z:()=>c});var u=n(512969),t=n(65400),a=n(731965),d=n(893607),r=n(981631);function i(l){let e=(0,u.LX)(null!=l?l:"",{path:r.Z5c.CHANNEL(d.Hw.guildId(),d.Hw.channelId({optional:!0}),":messageId?")});if(null!=e){let{guildId:l,channelId:n}=e.params;return{guildId:l===r.ME?null:l,channelId:null!=n?n:null}}let n=(0,u.LX)(null!=l?l:"",{path:r.Z5c.GUILD_BOOSTING_MARKETING(d.Hw.guildId())});return null!=n?{guildId:n.params.guildId,channelId:null}:{guildId:null,channelId:null}}let c=(0,t.F)(l=>({path:null,basePath:"/",guildId:null,channelId:null,updatePath(e){let{guildId:n,channelId:u}=i(e);(0,a.j)(()=>l({path:e,guildId:n,channelId:u}))},resetPath(e){let{guildId:n,channelId:u}=i(e);(0,a.j)(()=>l({path:null,guildId:n,channelId:u,basePath:e}))}}))},977059:function(l,e,n){n.d(e,{R:()=>a,S:()=>t});let u=(0,n(987170).Z)({kind:"user",id:"2024-05_secure_frames_ui_rollout",label:"Secure Frames Rollout",defaultConfig:{enabled:!1},treatments:[{id:1,label:"Enabled.",config:{enabled:!0}}]});function t(l){let{location:e}=l;return u.useExperiment({location:e},{autoTrackExposure:!0})}function a(l){let{location:e}=l;return u.getCurrentConfig({location:e},{autoTrackExposure:!0})}}}]);
//# sourceMappingURL=aaacc61fea496448.js.map