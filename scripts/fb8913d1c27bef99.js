"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["46455"],{857458:function(t,r,e){e.d(r,{M:()=>u,Z:()=>c});var o=e(200651);e(192379);var n=e(512969),a=e(860911),l=e(981631),i=e(188785);function u(){let t=location.pathname+location.search;return i.a?l.Z5c.REGISTER:(0,a.Ui)(t,!1)}let c=function(){return(0,o.jsx)(n.l_,{to:u()})}},77987:function(t,r,e){e.d(r,{e:()=>u});var o=e(200651);e(192379);var n=e(314897),a=e(449934),l=e(857458),i=e(981631);function u(t,r){var e,u;let c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{passProps:!0};function d(e){return!(0,a.$8)()&&n.default.getLoginStatus()!==i.u34.LOGGING_IN&&n.default.allowLogoutRedirect()?null!=r?(0,o.jsx)(r,{renderRedirect:(0,o.jsx)(l.Z,{})}):(0,o.jsx)(l.Z,{}):(0,o.jsx)(t,{...c.passProps?e:null})}return d.displayName="Authenticated(".concat(null!==(u=null!==(e=t.displayName)&&void 0!==e?e:t.name)&&void 0!==u?u:"<Unknown>",")"),d}},924339:function(t,r,e){e.r(r),e.d(r,{default:()=>O}),e(411104);var o=e(200651);e(192379);var n=e(512722),a=e.n(n),l=e(593473),i=e(186231),u=e(159277),c=e(478677),d=e(457330),s=e(702493),A=e(77987),h=e(275759),I=e(710845),p=e(807675),T=e(69580),v=e(787025),_=e(591759),w=e(981631),L=e(602091);let P=new I.Z("LinkAuthorize");async function N(t,r,e,o){var n,l,i,u,s;let A=null;try{let{body:t}=await d.Z.authorize(o,{twoWayLinkType:c.g.WEB});A=t.url}catch(t){throw Error("error at authorize with code ".concat(null!==(l=null==t?void 0:null===(n=t.body)||void 0===n?void 0:n.code)&&void 0!==l?l:0))}let I=null;try{a()(null!=A,"No URL in authorize response");let{state:t}=(0,h.xp)(A);a()(null!=t,"Authorize URL state query parameter must be present"),I=t}catch(t){throw Error("error at authorize parsing callback params")}try{let n=await d.Z.completeTwoWayLink(o,t,r,I,e);return null==n?void 0:null===(i=n.body)||void 0===i?void 0:i.redirect}catch(t){throw Error("error at callback with code ".concat(null!==(s=null==t?void 0:null===(u=t.body)||void 0===u?void 0:u.code)&&void 0!==s?s:0))}}function f(t){let{platformType:r}=t;(0,s.Z)();let e=(0,p.y)(window.location.search),{code:n,token_redirect_uri:a}=l.parse(window.location.search),u=async t=>{let{location:e}=t;if(null==e)return;let{error:o}=l.parse(e),u=null;if(null==o&&null!=n)try{u=await N(e,n,a,r)}catch(r){var c;P.error("Error Creating Discord link",null==r?void 0:r.message);let t=_.Z.toURLSafe(e);if(null==t)return;t.searchParams.delete("code"),t.searchParams.set("error","two_way_link_error"),t.searchParams.set("error_description",null!==(c=null==r?void 0:r.message)&&void 0!==c?c:"unknown_error"),e=t.toString()}window.location=null==u||u===i.b.OAUTH_REDIRECT?e:u};return(0,o.jsx)(v.G,{removeChildWrapper:!0,children:(0,o.jsx)(T.OAuth2AuthorizeModal,{transitionState:L.Dv.ENTERED,...e,showLogout:!0,callback:u})})}let O=(0,A.e)(function(t){let{match:r}=t,e=r.params.type,{client_id:n=""}=l.parse(window.location.search),a=e===w.ABu.PLAYSTATION&&n===u.t.PLAYSTATION_APPLICATION_ID,i=e===w.ABu.PLAYSTATION_STAGING&&n===u.t.PLAYSTATION_STAGING_APPLICATION_ID;return a||i?(0,o.jsx)(f,{platformType:e}):null})},186231:function(t,r,e){e.d(r,{b:()=>n});var o,n=((o={}).OAUTH_REDIRECT="oauth_redirect",o)},159277:function(t,r,e){e.d(r,{M:()=>a,t:()=>n}),e(47120);var o,n=((o={}).XBOX_APPLICATION_ID="622174530214821906",o.PLAYSTATION_APPLICATION_ID="1008890872156405890",o.PLAYSTATION_STAGING_APPLICATION_ID="984193235868065795",o);let a={PLAYSTATION_APPLICATION_IDS:new Set(["984193235868065795","1008890872156405890"]),ALL:new Set(["622174530214821906","984193235868065795","1008890872156405890"])}},478677:function(t,r,e){e.d(r,{g:()=>n}),e(47120);var o,n=((o={}).MOBILE="mobile",o.DESKTOP="desktop",o.WEB="web",o.DEVICE_CODE="device_code",o)}}]);
//# sourceMappingURL=fb8913d1c27bef99.js.map