"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["96858"],{2984:function(e){e.exports="/assets/131c318dd45b7aa4.svg"},575703:function(e){e.exports="/assets/d8680b1c1576ecc8.svg"},285773:function(e,t,n){n.r(t),n.d(t,{default:()=>h});var s=n(200651);n(192379);var i=n(765717),l=n(384666),r=n(69580),o=n(397394),a=n(449934),c=n(721751),d=n(981631);function h(){return(0,s.jsxs)(c.Z,{splash:(0,a.gK)(),children:[(0,s.jsx)(i.Z,{path:d.Z5c.OAUTH2_AUTHORIZED,component:o.Xg}),(0,s.jsx)(i.Z,{path:d.Z5c.OAUTH2_AUTHORIZE,component:r.OAuth2AuthorizePage}),(0,s.jsx)(i.Z,{path:d.Z5c.OAUTH2_ERROR,component:o.j3}),(0,s.jsx)(i.Z,{path:[d.Z5c.OAUTH2_WHITELIST_ACCEPT,"/oauth2/whitelist/accept"],component:l.Z})]})}},721751:function(e,t,n){let s;n.d(t,{Z:()=>A}),n(47120);var i=n(200651),l=n(192379),r=n(120356),o=n.n(r),a=n(873546),c=n(442837),d=n(481060),h=n(980591),u=n(605782),_=n(133853),p=n(568154),E=n(353926),m=n(703656),I=n(981631),T=n(692690);let Z=n(575703),f=n(2984),g=[I.Z5c.LOGIN,I.Z5c.LOGIN_HANDOFF,I.Z5c.REGISTER,I.Z5c.INVITE(""),I.Z5c.GIFT_CODE(""),I.Z5c.GUILD_TEMPLATE_LOGIN(""),I.Z5c.GUILD_TEMPLATE(""),I.Z5c.DISABLE_EMAIL_NOTIFICATIONS,I.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,I.Z5c.BILLING_PREMIUM_SUBSCRIBE,I.Z5c.BILLING_PAYMENT_SOURCES_CREATE,I.Z5c.BILLING_PAYMENTS,I.Z5c.BILLING_PREMIUM_SWITCH_PLAN,I.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,I.Z5c.VERIFY,I.Z5c.VERIFY_HUB_EMAIL,I.Z5c.REJECT_IP,I.Z5c.REJECT_MFA,I.Z5c.AUTHORIZE_IP,I.Z5c.AUTHORIZE_PAYMENT,I.Z5c.RESET,I.Z5c.HANDOFF,I.Z5c.REPORT,I.Z5c.REPORT_SECOND_LOOK,I.Z5c.ACCOUNT_REVERT("")];function b(e){return g.some(t=>e.startsWith(t))}let L=e=>(s=e,e);function x(e){let{children:t}=e;switch(function(){var e;let[t,n]=l.useState(!1),[i,r]=l.useState(!0),o=(0,c.e7)([E.Z],()=>E.Z.hasLoadedExperiments);return((0,h.Z)(()=>{},300),void 0!==s)?s:!i&&o?(t||n(!0),L((e=0,"default"))):i?L("default"):"loading"}()){case"default":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{className:T.artwork,src:Z,alt:""}),(0,i.jsx)("img",{className:T.logoWithText,src:f,alt:""}),t]});case"experimental":case"loading":return null}}class R extends l.Component{componentDidMount(){window.addEventListener("resize",this.handleResize)}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}mobileTransitionTo(e,t){if(b(e))(0,m.uL)(e,t);else{let n=null!=t&&null!=t.search?t.search:null;window.location=null==n?e:"".concat(e,"?").concat(n)}}mobileReplaceWith(e){b(e)?(0,m.dL)(e):window.location=e}renderDefault(){let{splash:e}=this.props,t=(0,i.jsx)(u.Z,{component:l.Fragment,children:l.Children.map(this.props.children,e=>l.cloneElement(e,{transitionTo:m.uL,replaceWith:m.dL}))});return(0,i.jsx)("div",{className:T.characterBackground,children:(0,i.jsx)(d.y5t,{forceLevel:1,children:null!=e?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.Z,{show:!0,className:o()(T.logo)}),(0,i.jsx)(p.h,{splash:e,children:t})]}):(0,i.jsx)(x,{children:t})})})}renderMobile(){return(0,i.jsx)(u.Z,{component:l.Fragment,children:l.Children.map(this.props.children,e=>l.cloneElement(e,{transitionTo:this.mobileTransitionTo,replaceWith:this.mobileReplaceWith}))})}render(){let{isMobileWidth:e}=this.state,t=navigator.userAgent.includes("GameLauncher");return e||a.tq||a.Em||t?this.renderMobile():this.renderDefault()}constructor(e){var t,n;super(e),t="handleResize",n=()=>{this.setState({isMobileWidth:window.innerWidth<=485})},t in this?Object.defineProperty(this,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[t]=n,this.state={isMobileWidth:window.innerWidth<=485}}}let A=R},605782:function(e,t,n){n.d(t,{Z:()=>a});var s=n(200651),i=n(192379),l=n(512969),r=n(215569);class o extends i.Component{render(){let{children:e,location:t,history:n,staticContext:o,match:a,...c}=this.props,d=null,h=null;return i.Children.forEach(e,e=>{if(null==d&&i.isValidElement(e)){let{component:s,render:r,...a}=e.props,c=a.path||a.from;null!=(d=null!=c?(0,l.LX)(t.pathname,{...a,path:c}):null)&&(a={...a,key:c,location:t,match:d,history:n,staticContext:o},null!=s?h=i.createElement(s,a):null!=r&&(h=r(a)))}}),(0,s.jsx)(r.W,{...c,children:h})}}let a=(0,l.EN)(o)},384666:function(e,t,n){n.d(t,{Z:()=>h}),n(47120);var s=n(200651),i=n(192379),l=n(593473),r=n(512969),o=n(489863),a=n(787025),c=n(397394),d=n(388032);function h(){let e;let t=(0,r.TH)(),[n,h]=i.useState(!1),[u,_]=i.useState(!1);return i.useEffect(()=>{(async function(){let e=(0,l.parse)(t.search);try{var n;await (0,o.g)(null!==(n=e.token)&&void 0!==n?n:""),h(!0)}catch{_(!0)}})()},[t.search]),e=n?(0,s.jsx)(c.c7,{message:d.intl.string(d.t.Tqu3OT),showsCloseWindowText:!0}):u?(0,s.jsx)(c.Lk,{message:d.intl.string(d.t.J8LsCg),showsCloseWindowText:!0}):(0,s.jsx)(c.ZP,{message:d.intl.string(d.t.BAcf6e),spinner:!0}),(0,s.jsx)(a.G,{children:e})}},692690:function(e,t,n){e.exports={characterBackground:"characterBackground_eb4069",artwork:"artwork_eb4069",logoWithText:"logoWithText_eb4069",logo:"logo_eb4069"}},660623:function(e,t,n){e.exports={image:"image__5901e",loaded:"loaded__5901e"}},293419:function(e,t,n){e.exports={logo:"logo__11f7b"}},573875:function(e,t,n){e.exports={canvas:"canvas_e99198",fallbackImage:"fallbackImage_e99198",visible:"visible_e99198",embedded:"embedded_e99198"}},856704:function(e,t,n){var s={wrapper:"wrapper__8bf38 "+n(175581).scrollbarGhost,rightSplit:"rightSplit__8bf38",embedded:"embedded__8bf38",leftSplit:"leftSplit__8bf38",nonEmbeddedLeftSplit:"nonEmbeddedLeftSplit__8bf38",mobileWave:"mobileWave__8bf38",logo:"logo__8bf38"};e.exports=s}}]);
//# sourceMappingURL=c5e8bb034ee45379.js.map