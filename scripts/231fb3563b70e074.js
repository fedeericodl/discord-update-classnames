"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["3378"],{702286:function(n,e,o){o.d(e,{Z:()=>l});var t=o(703656),i=o(981631);function l(){let n=(0,t.s1)();n.length>0?n.goBack():(0,t.uL)(i.Z5c.ME)}},523924:function(n,e,o){o.d(e,{Z:()=>u});var t=o(200651),i=o(192379),l=o(442837),c=o(481060),a=o(693546),d=o(937111),r=o(388032),s=o(739387);let u=n=>{let{headerId:e,reapplyText:o,onReapply:u,confirmText:b,onWithdrawApplication:m,rejectionReason:p=null,guild:_=null}=n,f=(0,l.e7)([d.Z],()=>{var n;return d.Z.getCooldown(null!==(n=null==_?void 0:_.id)&&void 0!==n?n:"0")});i.useEffect(()=>{null==f&&null!=_&&a.Z.fetchJoinRequestCooldown(_.id)},[f,_]);let C=(null!=f?f:0)>0,g=C&&null!=f?Math.ceil((1e3*f-Date.now())/864e5):0;return(0,t.jsxs)("div",{className:s.confirmation,children:[(0,t.jsx)("div",{className:s.iconWrapper,children:(0,t.jsx)(c.P$X,{size:"md",color:c.TVs.colors.INTERACTIVE_ACTIVE})}),(0,t.jsxs)("div",{className:s.statusTextContainer,children:[(0,t.jsx)(c.X6q,{id:e,variant:"heading-lg/semibold",color:"header-primary",children:(null==_?void 0:_.name)!=null?r.intl.formatToPlainString(r.t["P+/gzM"],{guildName:_.name}):r.intl.string(r.t.gBPcuL)}),null!=p&&""!==p?(0,t.jsxs)(c.Text,{variant:"text-md/medium",color:"header-secondary",children:[(0,t.jsx)("span",{className:s.rejectionReasonLabel,children:r.intl.string(r.t.cf1psb)}),(0,t.jsx)("span",{children:p})]}):null]}),(0,t.jsxs)("div",{className:s.confirmationButtonRow,children:[(0,t.jsx)(c.DY3,{className:s.confirmationButton,text:C?r.intl.formatToPlainString(r.t.A0f0Pz,{days:g}):null,"aria-label":C?r.intl.formatToPlainString(r.t.A0f0Pz,{days:g}):void 0,children:(0,t.jsx)(c.zxk,{className:s.confirmationTooltipContents,onClick:u,color:c.zxk.Colors.PRIMARY,size:c.zxk.Sizes.LARGE,submitting:null==f,disabled:C,children:o})}),(0,t.jsx)(c.zxk,{onClick:m,size:c.zxk.Sizes.LARGE,color:c.zxk.Colors.RED,className:s.confirmationButton,children:b})]})]})}},76075:function(n,e,o){o.d(e,{default:()=>h});var t=o(200651);o(192379);var i=o(442837),l=o(481060),c=o(100527),a=o(970606),d=o(313201),r=o(271383),s=o(430824),u=o(594174),b=o(693546),m=o(305325),p=o(937111),_=o(702286),f=o(523924),C=o(981631),g=o(388032);let h=function(n){let{guildId:e,transitionState:o,...h}=n,x=(0,d.Dt)(),v=(0,i.e7)([p.Z],()=>p.Z.getRequest(e),[e]),j=(0,i.e7)([s.Z],()=>s.Z.getGuild(e),[e]),k=(0,i.e7)([u.default],()=>{var n;return null===(n=u.default.getCurrentUser())||void 0===n?void 0:n.id}),R=(0,i.e7)([r.ZP],()=>null!=k?r.ZP.getMember(e,k):null,[k,e]),I=async()=>{var n;if(null!==(n=null==j?void 0:j.hasFeature(C.oNc.CLAN))&&void 0!==n&&n&&(0,a.Vr)({guildId:e,source:c.Z.CLAN_REAPPLY}),null==R?void 0:R.isPending){try{await b.Z.removeGuildJoinRequest(e)}catch(n){throw n}h.onClose(),(0,m.hk)(e)}else b.Z.resetGuildJoinRequest(e)};return(0,t.jsx)(l.Y0X,{size:l.CgR.DYNAMIC,transitionState:o,"aria-labelledby":x,children:(0,t.jsx)(f.Z,{...h,headerId:x,reapplyText:g.intl.string(g.t.I1LYVl),onReapply:I,confirmText:g.intl.string(g.t.BddRzc),onWithdrawApplication:()=>{h.onClose(),null==R&&(0,_.Z)()},rejectionReason:null==v?void 0:v.rejectionReason,guild:j})})}},739387:function(n,e,o){n.exports={container:"container_b962dc",guildSidebar:"guildSidebar_b962dc",guildDescription:"guildDescription_b962dc",guildIcon:"guildIcon_b962dc",guildIconNoIcon:"guildIconNoIcon_b962dc",guildName:"guildName_b962dc",emojisContainer:"emojisContainer_b962dc",emoji:"emoji_b962dc",onlineCount:"onlineCount_b962dc",dot:"dot_b962dc",dotOnline:"dotOnline_b962dc dot_b962dc",dotMembers:"dotMembers_b962dc dot_b962dc",divider:"divider_b962dc",modal:"modal_b962dc",sequencer:"sequencer_b962dc",modalContent:"modalContent_b962dc",content:"content_b962dc",centerContent:"centerContent_b962dc",closeButton:"closeButton_b962dc",applicationIconContainer:"applicationIconContainer_b962dc",applicationIcon:"applicationIcon_b962dc",animationAndSparklesContainer:"animationAndSparklesContainer_b962dc",sparkleIcon:"sparkleIcon_b962dc",sparkleTop:"sparkleTop_b962dc",sparkleBottom:"sparkleBottom_b962dc",animation:"animation_b962dc",header:"header_b962dc",subheader:"subheader_b962dc",footer:"footer_b962dc",submitButton:"submitButton_b962dc",formItem:"formItem_b962dc",resendButton:"resendButton_b962dc",confirmation:"confirmation_b962dc",iconWrapper:"iconWrapper_b962dc",confirmationButtonRow:"confirmationButtonRow_b962dc",confirmationButton:"confirmationButton_b962dc",confirmationTooltipContents:"confirmationTooltipContents_b962dc",notice:"notice_b962dc",rejectionReasonLabel:"rejectionReasonLabel_b962dc",disclaimerFooter:"disclaimerFooter_b962dc",statusTextContainer:"statusTextContainer_b962dc",incompleteButtonsContainer:"incompleteButtonsContainer_b962dc"}}}]);
//# sourceMappingURL=231fb3563b70e074.js.map