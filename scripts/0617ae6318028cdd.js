"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["31898"],{748756:function(e,n,t){t.d(n,{V:()=>l}),t(399606);var i=t(87051),a=t(9156),o=t(621600),c=t(113449),_=t(686660),d=t(981631),r=t(526761);function l(e,n){let t=a.ZP.getGuildFlags(e);n===_.s8.ALL_MESSAGES?i.Z.updateGuildNotificationSettings(e,{message_notifications:d.bL.ALL_MESSAGES,flags:(0,c.Q4)(t,r.vc.UNREADS_ALL_MESSAGES)},o.ZB.PresetAll):n===_.s8.MENTIONS?i.Z.updateGuildNotificationSettings(e,{message_notifications:d.bL.ONLY_MENTIONS,flags:(0,c.Q4)(t,r.vc.UNREADS_ONLY_MENTIONS)},o.ZB.PresetMentions):n===_.s8.NOTHING&&i.Z.updateGuildNotificationSettings(e,{message_notifications:d.bL.NO_MESSAGES,flags:(0,c.Q4)(t,r.vc.UNREADS_ONLY_MENTIONS)},o.ZB.PresetNothing)}},552958:function(e,n,t){t.d(n,{Z:()=>c}),t(47120);var i=t(192379),a=t(460181),o=t(974180);function c(){let[e,n]=i.useState(),t=i.useRef(-1);return{playSound:i.useCallback(e=>{n(e),a.GN(o.Ay,o.yk,()=>{clearTimeout(t.current),t.current=setTimeout(()=>{n(void 0)},500)},e)},[]),isPlaying:null!=e,soundpackPlaying:e}}},213931:function(e,n,t){t.d(n,{M:()=>r,t:()=>d});var i=t(381499),a=t(675478),o=t(592125),c=t(626135),_=t(981631);function d(e,n,t,o){n!==t&&((0,a.PS)(e,e=>{e.customNotificationSoundConfig={notificationSoundPackId:i.Gm.create({value:t})}},a.fy.INFREQUENT_USER_ACTION),c.default.track(_.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED,{guild_id:e,location:o,soundpack:t}))}function r(e,n,t,d,r){var l;t!==d&&((0,a.BU)(e,n,e=>{e.customNotificationSoundConfig={notificationSoundPackId:i.Gm.create({value:d})}},a.fy.INFREQUENT_USER_ACTION),c.default.track(_.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED,{guild_id:e,channel_id:n,channel_type:null===(l=o.Z.getChannel(n))||void 0===l?void 0:l.type,location:r,soundpack:d}))}},767157:function(e,n,t){t.d(n,{Z:()=>o});var i=t(626135),a=t(981631);function o(e,n){i.default.track(a.rMx.CUSTOM_NOTIFICATION_SOUND_OPTION_PLAYED,{location:n,soundpack:e})}},938693:function(e,n,t){e.exports={spacing:"spacing_db81c6",smallSpacing:"smallSpacing_db81c6",largeSpacing:"largeSpacing_db81c6",lighten:"lighten_db81c6",checkboxContainer:"checkboxContainer_db81c6",checkboxMute:"checkboxMute_db81c6",checkboxContainerMuted:"checkboxContainerMuted_db81c6 checkboxContainer_db81c6",muteUntilTitle:"muteUntilTitle_db81c6",muteUntilText:"muteUntilText_db81c6",muteTimeSelector:"muteTimeSelector_db81c6",checkboxGroup:"checkboxGroup_db81c6",overrideList:"overrideList_db81c6",override:"override_db81c6",overrideHighlight:"overrideHighlight_db81c6",removeOverride:"removeOverride_db81c6",overridePlaceholder:"overridePlaceholder_db81c6",nameContainer:"nameContainer_db81c6",icon:"icon_db81c6 lighten_db81c6",overrideHeader:"overrideHeader_db81c6 lighten_db81c6",header:"header_db81c6",headerName:"headerName_db81c6 header_db81c6",headerOption:"headerOption_db81c6 header_db81c6",channelNameContainer:"channelNameContainer_db81c6",channelName:"channelName_db81c6",channelNameByline:"channelNameByline_db81c6 lighten_db81c6",highlightsLink:"highlightsLink_db81c6",customNotificationSoundsDivider:"customNotificationSoundsDivider_db81c6",guildName:"guildName_db81c6",modalHeader:"modalHeader_db81c6"}},123240:function(e,n,t){e.exports={advanceSetting:"advanceSetting_e7c13f",advanceSettingTitle:"advanceSettingTitle_e7c13f",settingTitleIcon:"settingTitleIcon_e7c13f"}},749021:function(e,n,t){e.exports={table:"table__4126d",row:"row__4126d",rowName:"rowName__4126d",rowOption:"rowOption__4126d",icon:"icon__4126d",channels:"channels__4126d",channelRow:"channelRow__4126d",modColor:"modColor__4126d",removeButton:"removeButton__4126d",channel:"channel__4126d",separator:"separator__4126d"}},913655:function(e,n,t){e.exports={input:"input_cf6804"}},666401:function(e,n,t){e.exports={header:"header_da32a8",headerLeft:"headerLeft_da32a8",headerBell:"headerBell_da32a8",sectionContent:"sectionContent_da32a8",sectionContentPadding:"sectionContentPadding_da32a8",sectionHeader:"sectionHeader_da32a8",sectionHeaderTitle:"sectionHeaderTitle_da32a8",content:"content_da32a8"}},496228:function(e,n,t){e.exports={mutedConfig:"mutedConfig__3e00b"}},243251:function(e,n,t){e.exports={segmentedControlsContainer:"segmentedControlsContainer__9c019",presetSeparator:"presetSeparator__9c019",segmentedControl:"segmentedControl__9c019",customPresetsContainer:"customPresetsContainer__9c019",input:"input__9c019",grid:"grid__9c019",channeList:"channeList__9c019",channelListChannel:"channelListChannel__9c019",channelListChannelIcon:"channelListChannelIcon__9c019",channelListChannelName:"channelListChannelName__9c019",muted:"muted__9c019",unread:"unread__9c019",unreadMuted:"unreadMuted__9c019",hidden:"hidden__9c019",badge:"badge__9c019",mockMessageDisabled:"mockMessageDisabled__9c019",mockMessage:"mockMessage__9c019",mockMessageAvatar:"mockMessageAvatar__9c019"}},661532:function(e,n,t){e.exports={header:"header__654c5",nitroWheelContainer:"nitroWheelContainer__654c5",nitroWheel:"nitroWheel__654c5",newBadge:"newBadge__654c5",subheader:"subheader__654c5",warningContainer:"warningContainer__654c5",warningLabel:"warningLabel__654c5",optionsContainer:"optionsContainer__654c5",options:"options__654c5",option:"option__654c5",optionRedesign:"optionRedesign__654c5",optionPlaying:"optionPlaying__654c5",playableOption:"playableOption__654c5"}},163698:function(e,n,t){e.exports={container:"container__6b668",containerActive:"containerActive__6b668",playButton:"playButton__6b668",textContainer:"textContainer__6b668"}},117760:function(e,n,t){e.exports={container:"container_a9b435",nitroWheel:"nitroWheel_a9b435",text:"text_a9b435",nitroButton:"nitroButton_a9b435"}}}]);
//# sourceMappingURL=0617ae6318028cdd.js.map