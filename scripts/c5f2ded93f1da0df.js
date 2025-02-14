"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["3828"],{775666:function(e,n,t){t.d(n,{EQ:()=>N,T5:()=>L,ZP:()=>p}),t(47120),t(789020);var i=t(200651),a=t(192379),o=t(442837),d=t(481060),c=t(87051),s=t(221259),r=t(113449),_=t(686660),l=t(9156),g=t(621600),h=t(981631),u=t(490897),S=t(526761),b=t(388032);function p(e){let n=N(e);return e.type===h.d4z.GUILD_VOICE?null:(0,i.jsx)(d.sNh,{id:"channel_notification_settings",label:b.intl.string(b.t.HcoRu7),children:n})}function N(e){let n=(0,s.ZA)(e),t=(0,s.yN)(e),r=n.preset===_.s8.CUSTOM&&!t.inherited,[g,u]=a.useState(r),[S,p]=a.useState(!1),N=S?_.s8.CUSTOM:n.preset,E=L(e,()=>p(!1)),m=(0,o.e7)([l.ZP],()=>l.ZP.getNewForumThreadsCreated(e)),f="parent"===t.inheritedFrom?b.intl.string(b.t.wlrV1d):b.intl.string(b.t["1Wn2Mz"]);return e.type===h.d4z.GUILD_STAGE_VOICE?(0,i.jsxs)(d.kSQ,{children:[(0,i.jsx)(d.k5B,{id:"cns_default",label:f,checked:t.inherited,group:"channel_notification_settings",subtext:n.notification===h.bL.NO_MESSAGES?b.intl.string(b.t.CtVGyc):b.intl.string(b.t["BENn//"]),action:()=>(0,s.JK)(e.guild_id,e.id)}),(0,i.jsx)(d.k5B,{id:"cns_only_mention",group:"channel_notification_settings",checked:!t.inherited&&n.notification!==h.bL.NO_MESSAGES,label:b.intl.string(b.t["BENn//"]),action:()=>(0,s.ft)(e.guild_id,e.id,h.bL.ONLY_MENTIONS)}),(0,i.jsx)(d.k5B,{id:"cns_no_message",group:"channel_notification_settings",label:b.intl.string(b.t.CtVGyc),checked:!t.inherited&&n.notification===h.bL.NO_MESSAGES,action:()=>(0,s.ft)(e.guild_id,e.id,h.bL.NO_MESSAGES)})]}):(0,i.jsxs)(i.Fragment,{children:[e.isForumLikeChannel()?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.S89,{id:"new-forum-threads-created",label:b.intl.string(b.t.Rkgjpq),checked:m,action:()=>c.Z.setForumThreadsCreated(e,!m)}),(0,i.jsx)(d.Clw,{})]}):null,(0,i.jsxs)(d.kSQ,{children:[(0,i.jsx)(d.k5B,{id:"cns_default",label:f,group:"channel_notification_settings",checked:t.inherited&&!S,subtext:t.inheritedPreset,action:()=>((0,s.JK)(e.guild_id,e.id),p(!1))}),(0,i.jsx)(d.k5B,{id:"cns_everything",group:"channel_notification_settings",label:b.intl.string(b.t.hZrr6u),checked:!t.inherited&&N===_.s8.ALL_MESSAGES,action:()=>((0,s._m)(e.guild_id,e.id,_.s8.ALL_MESSAGES),p(!1))}),(0,i.jsx)(d.k5B,{id:"cns_essentials",group:"channel_notification_settings",label:b.intl.string(b.t.y59NJi),checked:!t.inherited&&N===_.s8.MENTIONS,action:()=>((0,s._m)(e.guild_id,e.id,_.s8.MENTIONS),p(!1))}),(0,i.jsx)(d.k5B,{id:"cns_nothing",group:"channel_notification_settings",label:b.intl.string(b.t["pGn/bG"]),checked:!t.inherited&&N===_.s8.NOTHING,action:()=>((0,s._m)(e.guild_id,e.id,_.s8.NOTHING),p(!1))}),(0,i.jsx)(d.k5B,{id:"cns_custom",group:"channel_notification_settings",label:b.intl.string(b.t["32yow8"]),checked:S||!t.inherited&&N===_.s8.CUSTOM,action:()=>(u(!0),p(!0))})]}),(g||r)&&E]})}function L(e,n){let{notification:t,unread:a}=(0,s.ZA)(e),o=e=>{e(),n()},_=n=>{let t={message_notifications:n};n===h.bL.ALL_MESSAGES&&a!==u.i.ALL_MESSAGES&&(t.flags=(0,r.pq)(l.ZP.getChannelIdFlags(e.guild_id,e.id),S.ic.UNREADS_ALL_MESSAGES)),c.Z.updateChannelOverrideSettings(e.guild_id,e.id,t,g.UE.notifications(n))};return(0,i.jsxs)(d.kSQ,{children:[(0,i.jsxs)(d.sNh,{id:"unread_setting",label:"Unread Badges",children:[(0,i.jsx)(d.k5B,{id:"unread_setting_all_messages",group:"unread_setting",checked:a===u.i.ALL_MESSAGES,label:b.intl.string(b.t["HVah//"]),action:()=>o(()=>(0,s.IG)(e.guild_id,e.id,u.i.ALL_MESSAGES))}),(0,i.jsx)(d.k5B,{id:"unread_setting_mention_only",group:"unread_setting",checked:a===u.i.ONLY_MENTIONS,label:b.intl.string(b.t["tu+ZWF"]),disabled:a!==u.i.ONLY_MENTIONS&&t===h.bL.ALL_MESSAGES,subtext:a!==u.i.ONLY_MENTIONS&&t===h.bL.ALL_MESSAGES?b.intl.string(b.t.eP8yWV):void 0,action:()=>o(()=>(0,s.IG)(e.guild_id,e.id,u.i.ONLY_MENTIONS))})]},"unread_setting"),(0,i.jsxs)(d.sNh,{id:"push_settings",label:b.intl.string(b.t.HcoRu7),children:[(0,i.jsx)(d.k5B,{group:"notification-preset",id:"push_settings_everything",label:b.intl.string(b.t["HVah//"]),checked:t===h.bL.ALL_MESSAGES,subtext:a!==u.i.ALL_MESSAGES&&t!==h.bL.ALL_MESSAGES?b.intl.string(b.t.idXSbG):void 0,action:()=>o(()=>_(h.bL.ALL_MESSAGES))}),(0,i.jsx)(d.k5B,{group:"notification-preset",id:"push_settings_everything_mention",checked:t===h.bL.ONLY_MENTIONS,label:b.intl.string(b.t["tu+ZWF"]),action:()=>o(()=>_(h.bL.ONLY_MENTIONS))}),(0,i.jsx)(d.k5B,{group:"notification-preset",id:"push_settings_everything_nothing",label:b.intl.string(b.t.X4wWUl),checked:t===h.bL.NO_MESSAGES,action:()=>o(()=>_(h.bL.NO_MESSAGES))})]},"push_settings")]})}},221259:function(e,n,t){t.d(n,{IG:()=>N,JK:()=>p,ZA:()=>u,_m:()=>b,ft:()=>L,yN:()=>S}),t(47120);var i=t(399606),a=t(87051),o=t(592125),d=t(9156),c=t(621600),s=t(423589),r=t(113449),_=t(686660),l=t(981631),g=t(490897),h=t(526761);function u(e){let n=(0,i.e7)([d.ZP],()=>d.ZP.resolveUnreadSetting(e)),t=(0,i.e7)([d.ZP],()=>d.ZP.resolvedMessageNotifications(e));return{unread:n,notification:t,preset:(0,_.gs)(n,t)}}function S(e){let n=(0,i.Wu)([d.ZP],()=>(0,s.OD)(d.ZP.getChannelOverrides(e.guild_id),{ignoreMute:!0,ignoreUnreadSetting:!1,ignoreNotificationSetting:!1})),[t,a]=(0,i.Wu)([d.ZP,o.Z],()=>{let t=o.Z.getChannel(e.parent_id);return null!=t&&n.includes(t.id)?["parent",(0,_.p1)((0,_.gs)(d.ZP.resolveUnreadSetting(t),d.ZP.resolvedMessageNotifications(t)))]:["guild",(0,_.p1)((0,_.gs)(d.ZP.getGuildUnreadSetting(e.guild_id),d.ZP.getMessageNotifications(e.guild_id)))]},[e.guild_id,e.parent_id,n]);return{inherited:!n.includes(e.id),inheritedFrom:t,inheritedPreset:a}}function b(e,n,t){let i=d.ZP.getChannelIdFlags(e,n);t===_.s8.ALL_MESSAGES?a.Z.updateChannelOverrideSettings(e,n,{message_notifications:l.bL.ALL_MESSAGES,flags:(0,r.pq)(i,h.ic.UNREADS_ALL_MESSAGES)},c.ZB.PresetAll):t===_.s8.MENTIONS?a.Z.updateChannelOverrideSettings(e,n,{message_notifications:l.bL.ONLY_MENTIONS,flags:(0,r.pq)(i,h.ic.UNREADS_ONLY_MENTIONS)},c.ZB.PresetMentions):t===_.s8.NOTHING&&a.Z.updateChannelOverrideSettings(e,n,{message_notifications:l.bL.NO_MESSAGES,flags:(0,r.pq)(i,h.ic.UNREADS_ONLY_MENTIONS)},c.ZB.PresetNothing)}function p(e,n){a.Z.updateChannelOverrideSettings(e,n,{message_notifications:l.bL.NULL,flags:(0,r.YF)(d.ZP.getChannelIdFlags(e,n))},c.ZB.PresetDefault)}function N(e,n,t){let i=d.ZP.getChannelIdFlags(e,n);a.Z.updateChannelOverrideSettings(e,n,{flags:(0,r.pq)(i,t===g.i.ALL_MESSAGES?h.ic.UNREADS_ALL_MESSAGES:h.ic.UNREADS_ONLY_MENTIONS)},c.UE.unreads(t))}function L(e,n,t){a.Z.updateChannelOverrideSettings(e,n,{message_notifications:t},c.UE.notifications(t))}},938693:function(e,n,t){e.exports={spacing:"spacing_db81c6",smallSpacing:"smallSpacing_db81c6",largeSpacing:"largeSpacing_db81c6",lighten:"lighten_db81c6",checkboxContainer:"checkboxContainer_db81c6",checkboxMute:"checkboxMute_db81c6",checkboxContainerMuted:"checkboxContainerMuted_db81c6 checkboxContainer_db81c6",muteUntilTitle:"muteUntilTitle_db81c6",muteUntilText:"muteUntilText_db81c6",muteTimeSelector:"muteTimeSelector_db81c6",checkboxGroup:"checkboxGroup_db81c6",overrideList:"overrideList_db81c6",override:"override_db81c6",overrideHighlight:"overrideHighlight_db81c6",removeOverride:"removeOverride_db81c6",overridePlaceholder:"overridePlaceholder_db81c6",nameContainer:"nameContainer_db81c6",icon:"icon_db81c6 lighten_db81c6",overrideHeader:"overrideHeader_db81c6 lighten_db81c6",header:"header_db81c6",headerName:"headerName_db81c6 header_db81c6",headerOption:"headerOption_db81c6 header_db81c6",channelNameContainer:"channelNameContainer_db81c6",channelName:"channelName_db81c6",channelNameByline:"channelNameByline_db81c6 lighten_db81c6",highlightsLink:"highlightsLink_db81c6",customNotificationSoundsDivider:"customNotificationSoundsDivider_db81c6",guildName:"guildName_db81c6",modalHeader:"modalHeader_db81c6"}},123240:function(e,n,t){e.exports={advanceSetting:"advanceSetting_e7c13f",advanceSettingTitle:"advanceSettingTitle_e7c13f",settingTitleIcon:"settingTitleIcon_e7c13f"}},749021:function(e,n,t){e.exports={table:"table__4126d",row:"row__4126d",rowName:"rowName__4126d",rowOption:"rowOption__4126d",icon:"icon__4126d",channels:"channels__4126d",channelRow:"channelRow__4126d",modColor:"modColor__4126d",removeButton:"removeButton__4126d",channel:"channel__4126d",separator:"separator__4126d"}},913655:function(e,n,t){e.exports={input:"input_cf6804"}},666401:function(e,n,t){e.exports={header:"header_da32a8",headerLeft:"headerLeft_da32a8",headerBell:"headerBell_da32a8",sectionContent:"sectionContent_da32a8",sectionContentPadding:"sectionContentPadding_da32a8",sectionHeader:"sectionHeader_da32a8",sectionHeaderTitle:"sectionHeaderTitle_da32a8",content:"content_da32a8"}},496228:function(e,n,t){e.exports={mutedConfig:"mutedConfig__3e00b"}},243251:function(e,n,t){e.exports={segmentedControlsContainer:"segmentedControlsContainer__9c019",presetSeparator:"presetSeparator__9c019",segmentedControl:"segmentedControl__9c019",customPresetsContainer:"customPresetsContainer__9c019",input:"input__9c019",grid:"grid__9c019",channeList:"channeList__9c019",channelListChannel:"channelListChannel__9c019",channelListChannelIcon:"channelListChannelIcon__9c019",channelListChannelName:"channelListChannelName__9c019",muted:"muted__9c019",unread:"unread__9c019",unreadMuted:"unreadMuted__9c019",hidden:"hidden__9c019",badge:"badge__9c019",mockMessageDisabled:"mockMessageDisabled__9c019",mockMessage:"mockMessage__9c019",mockMessageAvatar:"mockMessageAvatar__9c019"}},661532:function(e,n,t){e.exports={header:"header__654c5",nitroWheelContainer:"nitroWheelContainer__654c5",nitroWheel:"nitroWheel__654c5",newBadge:"newBadge__654c5",subheader:"subheader__654c5",warningContainer:"warningContainer__654c5",warningLabel:"warningLabel__654c5",optionsContainer:"optionsContainer__654c5",options:"options__654c5",option:"option__654c5",optionRedesign:"optionRedesign__654c5",optionPlaying:"optionPlaying__654c5",playableOption:"playableOption__654c5"}},163698:function(e,n,t){e.exports={container:"container__6b668",containerActive:"containerActive__6b668",playButton:"playButton__6b668",textContainer:"textContainer__6b668"}},117760:function(e,n,t){e.exports={container:"container_a9b435",nitroWheel:"nitroWheel_a9b435",text:"text_a9b435",nitroButton:"nitroButton_a9b435"}}}]);
//# sourceMappingURL=c5f2ded93f1da0df.js.map