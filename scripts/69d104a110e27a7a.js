(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["63141"],{447479:function(e){e.exports=function(e,t,n,i){var r=-1,a=null==e?0:e.length;for(i&&a&&(n=e[++r]);++r<a;)n=t(n,e[r],r,e);return n}},826193:function(e){e.exports=function(e){return e.split("")}},160739:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},975412:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},448730:function(e,t,n){var i=n(801282);e.exports=function(e,t,n){var r=e.length;return n=void 0===n?r:n,!t&&n>=r?e:i(e,t,n)}},128971:function(e,t,n){var i=n(448730),r=n(386015),a=n(232396),o=n(263604);e.exports=function(e){return function(t){var n=r(t=o(t))?a(t):void 0,s=n?n[0]:t.charAt(0),d=n?i(n,1).join(""):t.slice(1);return s[e]()+d}}},145983:function(e,t,n){var i=n(447479),r=n(658141),a=n(401427),o=RegExp("['’]","g");e.exports=function(e){return function(t){return i(a(r(t).replace(o,"")),e,"")}}},851707:function(e,t,n){var i=n(975412)({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"});e.exports=i},386015:function(e){var t=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return t.test(e)}},988513:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},232396:function(e,t,n){var i=n(826193),r=n(386015),a=n(12276);e.exports=function(e){return r(e)?a(e):i(e)}},12276:function(e){var t="\ud800-\udfff",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",i="\ud83c[\udffb-\udfff]",r="[^"+t+"]",a="(?:\ud83c[\udde6-\uddff]){2}",o="[\ud800-\udbff][\udc00-\udfff]",s="(?:"+n+"|"+i+")?",d="[\\ufe0e\\ufe0f]?",l="(?:\\u200d(?:"+[r,a,o].join("|")+")"+d+s+")*",c=RegExp(i+"(?="+i+")|"+("(?:"+[r+n+"?",n,a,o,"["+t+"]"].join("|"))+")"+(d+s+l),"g");e.exports=function(e){return e.match(c)||[]}},519342:function(e){var t="\ud800-\udfff",n="\\u2700-\\u27bf",i="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="['’]",s="["+a+"]",d="["+i+"]",l="[^"+t+a+"\\d+"+n+i+r+"]",c="(?:\ud83c[\udde6-\uddff]){2}",u="[\ud800-\udbff][\udc00-\udfff]",_="["+r+"]",f="(?:"+d+"|"+l+")",p="(?:"+_+"|"+l+")",h="(?:"+o+"(?:d|ll|m|re|s|t|ve))?",v="(?:"+o+"(?:D|LL|M|RE|S|T|VE))?",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",x="[\\ufe0e\\ufe0f]?",g="(?:\\u200d(?:"+["[^"+t+"]",c,u].join("|")+")"+x+m+")*",E="(?:"+["["+n+"]",c,u].join("|")+")"+(x+m+g),C=RegExp([_+"?"+d+"+"+h+"(?="+[s,_,"$"].join("|")+")",p+"+"+v+"(?="+[s,_+f,"$"].join("|")+")",_+"?"+f+"+"+h,_+"+"+v,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])","\\d+",E].join("|"),"g");e.exports=function(e){return e.match(C)||[]}},877921:function(e,t,n){var i=n(14469),r=n(145983)(function(e,t,n){return t=t.toLowerCase(),e+(n?i(t):t)});e.exports=r},14469:function(e,t,n){var i=n(263604),r=n(278759);e.exports=function(e){return r(i(e).toLowerCase())}},658141:function(e,t,n){var i=n(851707),r=n(263604),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(a,i).replace(o,"")}},278759:function(e,t,n){var i=n(128971)("toUpperCase");e.exports=i},401427:function(e,t,n){var i=n(160739),r=n(988513),a=n(263604),o=n(519342);e.exports=function(e,t,n){return(e=a(e),void 0===(t=n?void 0:t))?r(e)?o(e):i(e):e.match(t)||[]}},567409:function(e,t,n){"use strict";n.d(t,{Ns:()=>h}),n(47120);var i=n(192379),r=n(392711),a=n.n(r),o=n(876215),s=n(442837),d=n(146282),l=n(26033),c=n(897674),u=n(709054),_=n(206583);let f=new Set([o.s.PLAYED_GAME,o.s.LAUNCHED_ACTIVITY]),p=e=>f.has(e.content_type);function h(e){let{entries:t}=function(){let e=(0,c.Z)(_.YN.GAME_PROFILE_FEED),t=(0,c.Z)(_.YN.GLOBAL_FEED),n=i.useMemo(()=>a()(t).unionBy(e,e=>e.id).filter(p).orderBy(e=>u.default.extractTimestamp(e.id),"desc").uniqWith((e,t)=>e.author_id===t.author_id&&e.extra.application_id===t.extra.application_id).value(),[e,t]);return{requestId:(0,s.e7)([d.Z],()=>d.Z.getFeedRequestId(_.YN.GAME_PROFILE_FEED)),entries:n}}();return i.useMemo(()=>null==t?void 0:t.filter(t=>((0,l.dX)(t)||(0,l.Mq)(t))&&t.extra.application_id===e),[t,e])}},635324:function(e,t,n){"use strict";n(47120);var i=n(200651),r=n(149765),a=n(481060),o=n(570140),s=n(700785);__OVERLAY__&&o.Z.subscribe("OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN",function(e){let{clientId:t,authorizeProps:{authorizations:d,permissions:l,...c}}=e,u="OAuth2Authorize_".concat(t,"_").concat(c.guildId,"_").concat(c.channelId);function _(e){let{location:n}=e;o.Z.dispatch({type:"OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE",clientId:t,location:n})}let f=s.Hn;try{f=r.vB(null!=l?l:0)}catch(e){}(0,a.ZDy)(async()=>{let{OAuth2AuthorizeModal:e}=await Promise.resolve().then(n.bind(n,69580));return t=>(0,i.jsx)(e,{...t,...c,authorizations:new Map(d),permissions:f,callback:_})},{modalKey:u,onCloseRequest:()=>{(0,a.Mr3)(u),_({})}})})},614554:function(e,t,n){"use strict";n.d(t,{Z:()=>a});var i=n(314897),r=n(981631);function a(e){if(r.TPd.CALLABLE.has(e.type)){var t;return(null===(t=e.recipients)||void 0===t?void 0:t.length)===1?e.recipients[0]:null}return i.default.getId()}},290161:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>E});var i=n(200651),r=n(192379),a=n(442837),o=n(481060),s=n(490173),d=n(735246),l=n(40851),c=n(503737),u=n(823453),_=n(436774),f=n(686546),p=n(314910),h=n(367207),v=n(241890),m=n(649561),x=n(631553),g=n(981631);n(635324),n(167666),n(308765),n(913487),a.ZP.initialize();let E=function(){return r.useEffect(()=>(h.Z.initialize(),c.Z.initialize(),v.Z.init(),()=>{h.Z.terminate(),c.Z.terminate()}),[]),(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)(u.Z,{}),(0,i.jsx)(d.T,{children:(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(f.Co,{}),(0,i.jsx)(_.ZP,{}),(0,i.jsx)(l.Wu,{appContext:g.IlC.OVERLAY,renderWindow:window,children:(0,i.jsxs)(p.yP,{children:[(0,i.jsx)(x.Z,{}),(0,i.jsx)(o.nKe,{}),(0,i.jsx)(s.Z,{}),(0,i.jsx)(p.Un,{})]})})]})})]})}},681603:function(e,t,n){"use strict";n.d(t,{Z:()=>b});var i=n(192379),r=n(149765),a=n(442837),o=n(367907),s=n(731429),d=n(188471),l=n(318885),c=n(592125),u=n(984933),_=n(271383),f=n(430824),p=n(496675),h=n(944486),v=n(914010),m=n(594174),x=n(237997),g=n(145597),E=n(981631);class C extends i.Component{componentDidUpdate(e){if(this.props.locked)return null;let{selectedGuild:t,selectedChannel:n,isMemberPending:i,hasPreviewEnabled:r,postableChannelCount:a}=this.props;if(null!=t&&(t!==e.selectedGuild||i&&!e.isMemberPending)&&((0,l.Q)(E.rMx.GUILD_VIEWED,{...i?{is_pending:i,preview_enabled:r}:{},postable_channels:a}),(0,d.a)(E.rMx.GUILD_VIEWED_CLICKSTREAM,{guildId:t})),null!=n&&n!==e.selectedChannel){let e=(0,s.K)(c.Z.getChannel(n),!0);(0,l.Q)(E.rMx.CHANNEL_OPENED,{...e,...(0,o.$H)(n)}),(0,d.a)(E.rMx.CHANNEL_OPENED_CLICKSTREAM,{channelId:n})}}render(){return null}}let b=a.ZP.connectStores([v.Z,h.Z,f.Z,m.default,x.Z,u.ZP,p.Z,_.ZP],()=>{var e,t,n;let i=v.Z.getGuildId(),a=h.Z.getChannelId(i),o=f.Z.getGuild(i),s=m.default.getCurrentUser(),d=null!==(t=u.ZP.getChannels(null==o?void 0:o.id)[u.sH])&&void 0!==t?t:[],l=d.length>0?d.filter(e=>{let{channel:t}=e;return p.Z.can(r.$e(E.Plq.SEND_MESSAGES,E.Plq.VIEW_CHANNEL),t)}).length:0,c=null!=s&&null!=i&&null!==(n=null===(e=_.ZP.getMember(i,s.id))||void 0===e?void 0:e.isPending)&&void 0!==n&&n;return{selectedGuild:i,selectedChannel:a,locked:x.Z.isLocked((0,g.QF)()),hasPreviewEnabled:null==o?void 0:o.features.has(E.oNc.PREVIEW_ENABLED),isMemberPending:c,postableChannelCount:l}})(C)},649561:function(e,t,n){"use strict";n.d(t,{Z:()=>P}),n(47120),n(177593);var i=n(200651),r=n(192379),a=n(120356),o=n.n(a),s=n(392711),d=n.n(s),l=n(818405),c=n(587158),u=n(286379),_=n(481060),f=n(13245),p=n(490029),h=n(797614),v=n(593481),m=n(703656),x=n(254761),g=n(70956),E=n(960048),C=n(145597),b=n(692546),Z=n(518084),y=n(987650),I=n(981631),k=n(388032),O=n(912469);function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let A=10*g.Z.Millis.SECOND;function T(){let e=(0,C.QF)(),t=(0,C.Ht)();(0,p.lW)({type:I.BmY.DISPATCH,pid:e,token:t,payloads:[{type:"OVERLAY_SET_INPUT_LOCKED",locked:!0,pid:e}]})}class N extends r.PureComponent{componentDidMount(){this.notificationTimer=setTimeout(this.hideNotification,A),f.Z.track(I.rMx.NOTIFICATION_VIEWED,{notif_type:y.n0.OverlayCrashed})}componentWillUnmount(){let{notificationTimer:e}=this;null!=e&&clearTimeout(e)}render(){let{info:e,error:t}=this.props,{showTrace:n}=this.state,{notificationTimer:r}=this;return null==r?null:(0,i.jsx)(b.Z,{observe:!1,children:(0,i.jsx)(_.f6W,{theme:I.BRd.DARK,children:r=>(0,i.jsxs)(_.P3F,{className:o()(r,O.container),onClick:e=>e.stopPropagation(),children:[(0,i.jsx)(v.ZP,{expand:!0,icon:(0,i.jsx)(x.Z,{width:40,height:40,className:O.notificationIcon}),title:k.intl.string(k.t.U38qZm),confirmText:k.intl.string(k.t.TzAl1d),onNotificationClick:this.handleNotificationClick,onConfirmClick:this.handleReload,onDismissClick:this.hideNotification}),n&&null!=e?(0,i.jsxs)(Z.ZP,{className:O.stackTrace,children:[(0,i.jsx)(Z.ZP.Bar,{children:"Error Details"}),(0,i.jsx)(Z.ZP.Content,{className:O.stackTraceCode,children:(0,i.jsx)("code",{className:O.code,children:(0,i.jsx)("pre",{children:t.stack})})})]}):null]})})})}constructor(...e){super(...e),L(this,"state",{showTrace:!1,busy:!1}),L(this,"notificationTimer",void 0),L(this,"hideNotification",()=>{T();let{notificationTimer:e}=this;null!=e&&clearTimeout(e),this.notificationTimer=null}),L(this,"handleReload",e=>{this.setState({busy:!0}),T(),f.Z.track(I.rMx.NOTIFICATION_CLICKED,{notif_type:y.n0.OverlayCrashed,action_type:"reload"},!0),e.stopPropagation(),setTimeout(()=>location.reload(!0),200)}),L(this,"handleNotificationClick",e=>{e.stopPropagation();let{notificationTimer:t}=this;null!=t&&clearTimeout(t),e.shiftKey&&this.setState({showTrace:!0})})}}let w=d().throttle(()=>{h.Z.increment({name:u.V.APP_CRASHED,tags:["reason:".concat(l.v.UNHANDLED_JS_ERROR),"level:".concat(c.c.FATAL)]},!0)},100,{trailing:!1});class S extends r.PureComponent{componentDidCatch(e,t){let n=(0,m.s1)().location;this.setState({error:e,info:t});let i=(0,C.QF)(),r=(0,C.Ht)();(0,p.lW)({type:I.BmY.DISPATCH,pid:(0,C.QF)(),token:r,payloads:[{type:"OVERLAY_CRASHED",error:e.message,pid:i},{type:"OVERLAY_SET_INPUT_LOCKED",locked:!0,pid:i}]}),setImmediate(()=>window.addEventListener("click",T));let a=E.Z.captureCrash(e,{extra:t});f.Z.track(I.rMx.APP_CRASHED,{path:n.pathname,extra:t,error_message:e.message,error_stack:e.stack,sentry_issue_id:a,error_level:"fatal"}),w()}render(){let{children:e,className:t}=this.props,{error:n,info:r}=this.state;return null!=n?(0,i.jsx)(N,{error:n,info:r}):(0,i.jsx)("div",{className:t,children:e})}constructor(...e){super(...e),L(this,"state",{error:null,info:null})}}let P=S},631553:function(e,t,n){"use strict";let i;n.d(t,{Z:()=>ek}),n(653041);var r=n(200651),a=n(192379),o=n(120356),s=n.n(o),d=n(921738),l=n.n(d),c=n(954955),u=n.n(c),_=n(498607),f=n.n(_),p=n(442837),h=n(704215),v=n(481060),m=n(668781),x=n(239091),g=n(13245),E=n(425493),C=n(615287),b=n(951483),Z=n(714338),y=n(185666),I=n(100527),k=n(906732),O=n(146282),L=n(600164);n(70097);var A=n(605236),T=n(594190),N=n(567409),w=n(74299),S=n(989941),P=n(377400),R=n(329557),j=n(93127),D=n(199902),z=n(314897),W=n(592125),M=n(480294),U=n(430824),G=n(355863),B=n(131951),K=n(944486),V=n(618541),H=n(449224),Y=n(574254),F=n(556296),X=n(808506),q=n(372679),Q=n(237997),J=n(451478),$=n(70956),ee=n(358085),et=n(998502),en=n(13140),ei=n(145597),er=n(658785),ea=n(32300),eo=n(681603),es=n(358446),ed=n(348733),el=n(312178),ec=n(708383),eu=n(923532),e_=n(107200),ef=n(983660),ep=n(987650),eh=n(981631),ev=n(206583),em=n(388032),ex=n(622330);function eg(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}p.ZP.PersistedStore.disableWrites=__OVERLAY__,p.ZP.initialize();let eE=null;function eC(e){e.preventDefault()}function eb(e){(0,x.jW)(e,async()=>{let{default:e}=await n.e("92780").then(n.bind(n,930381));return t=>(0,r.jsx)(e,{...t})})}ee.isPlatformEmbedded;let eZ=e=>{let{keybind:t,onClick:n,isPreviewingInGame:i,locked:a}=e,o=a?v.P3F:"div";return(0,r.jsx)(o,{className:s()(ex.overlayBackground,{[ex.overlayActive]:!a,[ex.overlayLocked]:a,[ex.previewMode]:!a&&i}),onMouseDown:e=>{let{currentTarget:t,target:i,button:r}=e;r===eh.AeJ.PRIMARY&&t===i&&n()},onContextMenu:eb,children:a?null:(0,r.jsx)("div",{className:ex.closeContainer,children:(0,r.jsx)(E.Z,{variant:E.Z.Variants.BOLD,keybind:t,closeAction:n})})})},ey=e=>{let{keyCode:t,shiftKey:n,metaKey:i,altKey:r,ctrlKey:a}=e;return{keyCode:t,shiftKey:n,metaKey:i,altKey:r,ctrlKey:a}};class eI extends a.Component{handleLock(){(0,v.$sL)()||Y.Z.isOpen()||g.Z.setInputLocked(!0,(0,ei.QF)())}handleDeactivate(){g.Z.deactivateAllRegions()}componentDidMount(){g.Z.startSession(),P.Z.initialize(),y.Z.initialize(),R.Z.initialize()}componentDidUpdate(e){let{initialized:t}=this.props;if(t){if(t&&!e.initialized){this.initialSetup();return}if(!e.locked&&this.props.locked){if(window.addEventListener("contextmenu",eC,!1),null!=eE){let e=Date.now()-eE;g.Z.track(eh.rMx.OVERLAY_LOCKED,{unlocked_duration:e}),eE=null}Z.Z.disable(),this.activeKeyEventShapes=[],Q.Z.isPinned(eh.Odu.TEXT)&&(Z.Z.setLayout(b.Xq),Z.Z.enable())}else e.locked&&!this.props.locked&&(window.removeEventListener("contextmenu",eC,!1),null==eE&&(eE=Date.now(),g.Z.track(eh.rMx.OVERLAY_UNLOCKED)),Z.Z.disable(),this.activeKeyEventShapes=[],Z.Z.setLayout(b.Sr),Z.Z.enable());e.keybindKeyCodes!==this.props.keybindKeyCodes&&(this.lockEventShape=(0,en.d2)(this.props.keybindKeyCodes)),!e.hasFetchedContentInventory&&this.props.hasFetchedContentInventory&&g.Z.notifyContentInventoryReady(this.props.contentInventoryEntries)}}initialSetup(){let{connectedToVoice:e,locked:t,canGoLive:n,isStreaming:i,voiceGuild:r,voiceChannelId:a,game:o,showKeybindNotification:s,dismissKeybindNotification:d}=this.props;g.Z.track(eh.rMx.OVERLAY_INITIALIZED,{voice_widget_connected:e,text_widget_connected:Q.Z.isPinned(eh.Odu.TEXT),overlay_render_method:C.gl[C.gl.Hook],unpinned_widget_types:G.Z.getAllUnpinnedPinnedWidgets(ei.qU)}),er.Z.trackExposure({location:"Overlay"});let l=n&&!i&&null!=o,c=e&&null!=r&&null!=a,u=(0,A.un)(h.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX),_=this.props.hasOverlayV3UI,f={type:ep.nc.WELCOME};if(_?f={type:ep.nc.OOP_WELCOME,game:null!=o?o:void 0,isFirstTimeNux:!u}:s?f={type:ep.nc.KEYBIND_INDICATORS,markAsDismissed:d}:l&&c?f={type:ep.nc.GO_LIVE_VOICE,game:o,voiceChannelId:a,voiceGuild:r}:l&&(f={type:ep.nc.GO_LIVE_NON_VOICE,game:o}),g.Z.overlayMounted(f),window.addEventListener("resize",this.handleWindowResize),t&&window.addEventListener("contextmenu",eC,!1),ee.isPlatformEmbedded){let e=(0,q.M)();if(null==e)return;if(void 0!==e.setPerfInfoCallback){var p;e.setPerfInfoCallback(e=>{g.Z.track(eh.rMx.OVERLAY_PERF_INFO,e)}),null===(p=e.broadcastCommand)||void 0===p||p.call(e,{message:"set_perf_report_interval",interval:15*$.Z.Millis.MINUTE})}et.ZP.on("REQUEST_OPEN_EXTERNAL_URL",(e,t)=>{Q.Z.getDisableExternalLinkAlert()||t===V.Z.getLastURL()?et.ZP.send("OPEN_EXTERNAL_URL",t):m.Z.show({title:em.intl.string(em.t.WLx4Fx),body:em.intl.string(em.t.H8O1TE),secondaryConfirmText:em.intl.string(em.t.IwqGhY),confirmText:em.intl.string(em.t["3PatS0"]),cancelText:em.intl.string(em.t["ETE/oK"]),onConfirmSecondary:()=>{g.Z.disableExternalLinkAlert(),et.ZP.send("OPEN_EXTERNAL_URL",t)},onConfirm:()=>et.ZP.send("OPEN_EXTERNAL_URL",t)})})}window.addEventListener("keydown",this.onKeyDownGlobal,!0),window.addEventListener("keyup",this.onKeyUpGlobal,!0)}componentWillUnmount(){window.removeEventListener("resize",this.handleWindowResize),window.removeEventListener("keydown",this.onKeyDownGlobal,!0),window.removeEventListener("keyup",this.onKeyUpGlobal,!0),this.props.locked&&window.removeEventListener("contextmenu",eC,!1),P.Z.terminate(),y.Z.terminate(),R.Z.terminate()}renderInvalidSizeMessage(){return(0,r.jsx)(L.Z,{justify:L.Z.Justify.CENTER,align:L.Z.Align.CENTER,className:ex.invalidContainer,children:(0,r.jsx)("div",{className:ex.inactiveContainer,children:em.intl.format(em.t.ketnW1,ei.FW)})})}render(){let{locked:e,keybind:t,incompatibleApp:n,initialized:a,isPreviewingInGame:o,activeRegions:d,windowSize:l,voiceGuild:c,voiceChannelId:u,hasOverlayV3UI:_}=this.props,{width:f,height:p}=l;if(0===f||0===p||n||!a)return null;let h=e||o,v=z.default.getId();return(0,r.jsxs)("div",{className:ex.overlay,children:[(0,r.jsx)(ec.Z,{}),o&&(0,r.jsx)("header",{className:ex.previewingInGameHeader,children:em.intl.string(em.t.iOq96u)}),i,(!e||d.has(eh.O0n.TEXT_WIDGET))&&(0,r.jsx)(eZ,{locked:e,keybind:t,onClick:e?this.handleDeactivate:this.handleLock,isPreviewingInGame:o}),(0,ei.Te)(l)?(0,r.jsx)(el.Z,{className:s()({[ex.layoutLocked]:e,[ex.layoutUnlocked]:!e})}):e?null:this.renderInvalidSizeMessage(),(0,r.jsx)(e_.Z,{}),null!=c&&null!=u&&(0,r.jsx)(eu.Z,{streamerId:v,guildId:c.id,channelId:u}),_&&(0,r.jsx)(ef.Z,{locked:e}),(0,r.jsx)(ed.Z,{locked:h,keybind:t}),(0,r.jsx)(eo.Z,{})]})}constructor(e){super(e),eg(this,"handleWindowResize",()=>{X.Z.isFocusedPidOutOfProcess()?this.forceUpdate():u()(()=>{this.forceUpdate()},500)}),eg(this,"activeKeyEventShapes",[]),eg(this,"lockEventShape",(0,en.d2)(this.props.keybindKeyCodes)),eg(this,"getActiveKeyEventIndex",e=>this.activeKeyEventShapes.findIndex(t=>f()(t,e))),eg(this,"onKeyDownGlobal",e=>{let t=ey(e),n=this.getActiveKeyEventIndex(t)>-1,i=[16,17,18,91].includes(e.keyCode);n||i||this.activeKeyEventShapes.push(t),this.activeKeyEventShapes.length===this.lockEventShape.length&&this.lockEventShape.every(e=>this.activeKeyEventShapes.some(t=>f()(e,t)))&&(e.preventDefault(),e.stopPropagation());let{locked:r,activeRegions:a}=this.props;t.keyCode===l().codes.esc&&r&&a.has(eh.O0n.TEXT_WIDGET)&&g.Z.deactivateAllRegions()}),eg(this,"onKeyUpGlobal",e=>{let t=ey(e),n=this.getActiveKeyEventIndex(t);n>-1&&this.activeKeyEventShapes.splice(n,1)});let t=e.locked&&Q.Z.isPinned(eh.Odu.TEXT);Z.Z.setLayout(t?b.Xq:b.Sr),t&&Z.Z.enable()}}function ek(){let{locked:e,initialized:t,incompatibleApp:n,activeRegions:i,isPreviewingInGame:o}=(0,p.cj)([Q.Z],()=>({locked:Q.Z.isLocked((0,ei.QF)()),initialized:Q.Z.initialized,incompatibleApp:Q.Z.incompatibleApp,activeRegions:Q.Z.getActiveRegions(),isPreviewingInGame:Q.Z.isPreviewingInGame()})),s=(0,p.e7)([J.Z],()=>J.Z.windowSize()),d=(0,p.e7)([F.ZP],()=>F.ZP.getOverlayKeybind()),l=(0,p.e7)([K.Z],()=>K.Z.getVoiceChannelId()),c=(0,p.e7)([W.Z],()=>W.Z.getChannel(l)),u=(0,p.e7)([U.Z],()=>null!=c?U.Z.getGuild(c.guild_id):null),_=(0,p.e7)([T.ZP,H.Z],()=>(0,S.Z)(T.ZP,H.Z)),f=(0,N.Ns)(null==_?void 0:_.id),h=(0,p.e7)([O.Z],()=>null!=O.Z.getLastFeedFetchDate(ev.YN.GAME_PROFILE_FEED)),m=(0,p.e7)([B.Z],()=>(0,w.Z)(B.Z)),x=(0,p.e7)([D.Z],()=>null!=D.Z.getCurrentUserActiveStream()),{analyticsLocations:g}=(0,k.ZP)(I.Z.OVERLAY),{showKeybindIndicators:E,dismissKeybindNotification:C}=(0,es.K)(),b=(0,p.e7)([M.Z],()=>M.Z.fetchedConsents);a.useEffect(()=>{b&&(0,j._)()},[b]);let Z=(0,ea.o4)("ipOverlay").overlayV3UI;return(0,r.jsx)(k.Gt,{value:g,children:(0,r.jsx)(v.vWI,{children:(0,r.jsx)(eI,{locked:e,initialized:t,incompatibleApp:n,activeRegions:i,isPreviewingInGame:o,windowSize:s,keybind:null!=d?(0,en.BB)(d.shortcut,!0):"???",keybindKeyCodes:null!=d?d.shortcut:[],connectedToVoice:null!=l,voiceChannelId:null!=c?c.id:null,voiceGuild:u,game:_,canGoLive:m,isStreaming:x,showKeybindNotification:E,dismissKeybindNotification:C,contentInventoryEntries:f,hasFetchedContentInventory:h,hasOverlayV3UI:Z})})})}},913487:function(e,t,n){"use strict";var i=n(570140),r=n(703656),a=n(981631);__OVERLAY__&&i.Z.subscribe("OVERLAY_OPEN_MESSAGE",function(e){let{guildId:t,channelId:n,messageId:i}=e;(0,r.dL)({pathname:a.Z5c.CHANNEL(t,n,i)})})},906037:function(e,t,n){"use strict";n.d(t,{CR:()=>o,eM:()=>a,m3:()=>s});var i=n(570140),r=n(449224);function a(e){return!e.isPreviewingInGame&&!e.locked||e.pinned}function o(e,t,n){(e.locked!==t.locked||e.pinned!==t.pinned||n(e)!==n(t)||a(e)!==a(t))&&s(t,n(t))}function s(e,t){var n,o;let s=a(e),d=r.Z.getGame();i.Z.dispatch({type:"OVERLAY_WIDGET_CHANGED",gameName:null!==(n=null==d?void 0:d.name)&&void 0!==n?n:null,gameId:null!==(o=null==d?void 0:d.id)&&void 0!==o?o:null,widgetType:e.widget,visible:s&&t,locked:e.locked,pinned:e.pinned})}},107200:function(e,t,n){"use strict";n.d(t,{Z:()=>f}),n(47120);var i=n(200651);n(192379);var r=n(442837),a=n(352527),o=n(183584),s=n(487029),d=n(592125),l=n(944486),c=n(554174),u=n(710111),_=n(221035);function f(){let[e,t]=(0,r.Wu)([a.Z],()=>[a.Z.enabled,a.Z.keepOpen]),n=(0,r.e7)([l.Z],()=>l.Z.getVoiceChannelId()),f=(0,r.e7)([d.Z],()=>d.Z.getChannel(n),[n]),p=null==f?void 0:f.getGuildId();return e&&null!=f?(0,i.jsx)("div",{className:_.widget,children:(0,i.jsx)(s.Z,{width:u.FW.width,height:u.FW.height,guildId:p,channel:f,keepOpen:t,onClose:function(){let e=(0,c.Z)();null!=e&&(0,o.oZ)(e)},analyticsSource:"overlay"})}):null}},983660:function(e,t,n){"use strict";n.d(t,{Z:()=>_}),n(47120);var i=n(200651),r=n(192379),a=n(704215),o=n(481060),s=n(243778),d=n(921944),l=n(388032),c=n(87296),u=n(215916);function _(e){let{locked:t}=e,[n,_]=(0,s.US)(t?[]:[a.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX],void 0,!0);return(r.useEffect(()=>{if(!t&&n===a.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX)return()=>{n===a.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX&&_(d.L.AUTO_DISMISS)}},[t,_,n]),t||n!==a.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX)?null:(0,i.jsx)("div",{className:c.overlayInprocessBackgroundNux,children:(0,i.jsxs)("div",{className:c.mainContainer,children:[(0,i.jsxs)("div",{className:c.mainTitleContainer,children:[(0,i.jsx)(o.X6q,{variant:"heading-xl/medium",color:"header-primary",className:c.mainTitle,children:l.intl.format(l.t.Eg5ybG,{})}),(0,i.jsx)(o.Text,{variant:"text-md/normal",color:"text-muted",className:c.mainTitleBody,children:l.intl.format(l.t.KkM0s7,{})})]}),(0,i.jsxs)("div",{className:c.widgetCalloutContainer,children:[(0,i.jsxs)("div",{className:c.widgetCallout,children:[(0,i.jsx)(o.qjv,{}),(0,i.jsx)(o.Text,{variant:"text-md/medium",color:"interactive-normal",children:l.intl.string(l.t.S6VRyM)})]}),(0,i.jsxs)("div",{className:c.widgetCallout,children:[(0,i.jsx)(o.Dkj,{}),(0,i.jsx)(o.Text,{variant:"text-md/medium",color:"interactive-normal",children:l.intl.string(l.t.xq8CKS)})]}),(0,i.jsxs)("div",{className:c.widgetCallout,children:[(0,i.jsx)(o.Odl,{}),(0,i.jsx)(o.Text,{variant:"text-md/medium",color:"interactive-normal",children:l.intl.string(l.t.GwpRe3)})]}),(0,i.jsxs)("div",{className:c.widgetCallout,children:[(0,i.jsx)(o.KY1,{}),(0,i.jsx)(o.Text,{variant:"text-md/medium",color:"interactive-normal",children:l.intl.string(l.t.VUoC5O)})]})]}),(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:u.Z,alt:l.intl.string(l.t.mdXZh4),className:c.nuxImage})})]})})}},352527:function(e,t,n){"use strict";n.d(t,{Z:()=>u});var i,r,a,o=n(442837),s=n(570140);let d=!1,l=!1;class c extends(a=o.ZP.Store){get keepOpen(){return l}get enabled(){return d}}r="SoundboardOverlayStore",(i="displayName")in c?Object.defineProperty(c,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):c[i]=r;let u=new c(s.Z,{SOUNDBOARD_SET_OVERLAY_ENABLED:function(e){if(d=e.enabled,e.enabled){var t;l=null!==(t=e.keepOpen)&&void 0!==t&&t}}})},129724:function(e,t,n){"use strict";n.d(t,{A:()=>o});var i=n(913527),r=n.n(i),a=n(388032);function o(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.intl.string(a.t["Yl1D8/"]),i=r().duration(e,"seconds");return i.days()>0?a.intl.formatToPlainString(t?a.t.GBLpQ0:a.t.k2UNz8,{days:i.days()}):i.hours()>0?a.intl.formatToPlainString(t?a.t.rhY1Rk:a.t.xCjYxM,{hours:i.hours()}):i.minutes()>0?a.intl.formatToPlainString(t?a.t["XIGt+f"]:a.t.iXLF9f,{minutes:i.minutes()}):e>0?a.intl.formatToPlainString(t?a.t.pyvjRk:a.t.geSp4O,{seconds:i.seconds()}):t?a.intl.string(a.t["Yl1D8/"]):n}},820377:function(e,t,n){"use strict";e.exports={footer:"footer__8e8b5",ctaButton:"ctaButton__8e8b5"}},969396:function(e,t,n){"use strict";e.exports={avatarContainer:"avatarContainer__62821",helpText:"helpText__62821",editButton:"editButton__62821",userRow:"userRow__62821",userInfo:"userInfo__62821",usernameWrapper:"usernameWrapper__62821",username:"username__62821",inviteButtonWrapper:"inviteButtonWrapper__62821",inviteButton:"inviteButton__62821",header:"header__62821",headerLeft:"headerLeft__62821",headerRight:"headerRight__62821",muteButton:"muteButton__62821",muteIcon:"muteIcon__62821",dismissButton:"dismissButton__62821",dismissIcon:"dismissIcon__62821",gameInfo:"gameInfo__62821",editMessageContainer:"editMessageContainer__62821",editMessageButtons:"editMessageButtons__62821",cancelButton:"cancelButton__62821",charCount:"charCount__62821"}},739858:function(e,t,n){"use strict";e.exports={wrapper:"wrapper__88a53",operation:"operation__88a53",handle:"handle__88a53",resizeNorth:"resizeNorth__88a53 handle__88a53",resizeSouth:"resizeSouth__88a53 handle__88a53",resizeNSCursor:"resizeNSCursor__88a53",resizeWest:"resizeWest__88a53 handle__88a53",resizeEast:"resizeEast__88a53 handle__88a53",resizeEWCursor:"resizeEWCursor__88a53",resizeNorthWest:"resizeNorthWest__88a53 handle__88a53",resizeNorthEast:"resizeNorthEast__88a53 handle__88a53",resizeSouthWest:"resizeSouthWest__88a53 handle__88a53",resizeSouthEast:"resizeSouthEast__88a53 handle__88a53",resizeNWSECursor:"resizeNWSECursor__88a53",resizeNESWCursor:"resizeNESWCursor__88a53"}},968623:function(e,t,n){"use strict";e.exports={key:"key__1728a"}},194694:function(e,t,n){"use strict";e.exports={container:"container__350af",clickBlocker:"clickBlocker__350af",content:"content__350af",details:"details__350af",hintText:"hintText__350af",clickable:"clickable__350af",dismissButton:"dismissButton__350af",dismissIcon:"dismissIcon__350af",buttonContainer:"buttonContainer__350af",button:"button__350af",avatar:"avatar__350af",title:"title__350af",body:"body__350af",divider:"divider__350af",keybindMessage:"keybindMessage__350af",keybind:"keybind__350af",hintSubtleText:"hintSubtleText__350af",themePrimary:"themePrimary__350af",innerText:"innerText__350af"}},737290:function(e,t,n){"use strict";e.exports={controls:"controls__0fcb7",unpinned:"unpinned__0fcb7",content:"content__0fcb7",strikethrough:"strikethrough__0fcb7"}},912469:function(e,t,n){"use strict";e.exports={container:"container_db6581",stackTrace:"stackTrace_db6581",stackTraceCode:"stackTraceCode_db6581",code:"code_db6581",notificationIcon:"notificationIcon_db6581"}},230466:function(e,t,n){"use strict";e.exports={base:"base_e3f659",widget:"widget_e3f659"}},829501:function(e,t,n){"use strict";e.exports={wrapper:"wrapper__71152"}},67043:function(e,t,n){"use strict";e.exports={keybindIndicator:"keybindIndicator__1921e",keybindIcon:"keybindIcon__1921e",keybindIndicatorText:"keybindIndicatorText__1921e"}},966635:function(e,t,n){"use strict";e.exports={notificationBody:"notificationBody__3371b",iconContainer:"iconContainer__3371b"}},855134:function(e,t,n){"use strict";n.r(e.exports={container:"container__5c50b",topLeft:"topLeft__5c50b",topRight:"topRight__5c50b",bottomLeft:"bottomLeft__5c50b",bottomRight:"bottomRight__5c50b",notificationGroup:"notificationGroup__5c50b"})},622330:function(e,t,n){"use strict";e.exports={overlay:"overlay_df3f07",overlayBackground:"overlayBackground_df3f07",overlayActive:"overlayActive_df3f07",overlayLocked:"overlayLocked_df3f07",previewMode:"previewMode_df3f07",closeContainer:"closeContainer_df3f07",invalidContainer:"invalidContainer_df3f07",inactiveContainer:"inactiveContainer_df3f07",layoutLocked:"layoutLocked_df3f07",layoutUnlocked:"layoutUnlocked_df3f07 layoutLocked_df3f07",previewingInGameHeader:"previewingInGameHeader_df3f07"}},591679:function(e,t,n){"use strict";e.exports={canvas:"canvas__6c1c8"}},221035:function(e,t,n){"use strict";e.exports={widget:"widget_d0f34c"}},404486:function(e,t,n){"use strict";e.exports={contained:"contained_ee4d7e",header:"header_ee4d7e",headerDefault:"headerDefault_ee4d7e header_ee4d7e",activateContainer:"activateContainer_ee4d7e",activateKeybind:"activateKeybind_ee4d7e",inGame:"inGame_ee4d7e",inGameActive:"inGameActive_ee4d7e",footerContent:"footerContent_ee4d7e footer_ee4d7e",messages:"messages_ee4d7e",widget:"widget_ee4d7e",widgetWrapper:"widgetWrapper_ee4d7e widget_ee4d7e",widgetWrapperPinned:"widgetWrapperPinned_ee4d7e widget_ee4d7e",draggableStartArea:"draggableStartArea_ee4d7e",footer:"footer_ee4d7e",typingWrapper:"typingWrapper_ee4d7e",typing:"typing_ee4d7e",messagesContainer:"messagesContainer_ee4d7e",disableHoverStates:"disableHoverStates_ee4d7e",isDragging:"isDragging_ee4d7e",pinned:"pinned_ee4d7e",locked:"locked_ee4d7e",scroller:"scroller_ee4d7e",resizeIcon:"resizeIcon_ee4d7e"}},588:function(e,t,n){"use strict";var i={headerContainer:"headerContainer__0aebc",opacityHeader:"opacityHeader__0aebc "+n(404486).header,dragIcon:"dragIcon__0aebc"};e.exports=i},788278:function(e,t,n){"use strict";e.exports={container:"container__3f751",title:"title__3f751",sliderContainer:"sliderContainer__3f751"}},114454:function(e,t,n){"use strict";e.exports={icon:"icon__99ff4",voiceIcon:"voiceIcon__99ff4",voiceList:"voiceList__99ff4",dragIcon:"dragIcon__99ff4",draggableStartArea:"draggableStartArea__99ff4",content:"content__99ff4",speakerIcon:"speakerIcon__99ff4",interactive:"interactive__99ff4",username:"username__99ff4",voiceUserWrapper:"voiceUserWrapper__99ff4",locked:"locked__99ff4",lockedContainer:"lockedContainer__99ff4",faded:"faded__99ff4",preview:"preview__99ff4",hidden:"hidden__99ff4",title:"title__99ff4",streamerControls:"streamerControls__99ff4",unpinned:"unpinned__99ff4",streamerContent:"streamerContent__99ff4",streamerInner:"streamerInner__99ff4",gameIcon:"gameIcon__99ff4",streamerInfo:"streamerInfo__99ff4",streaming:"streaming__99ff4",streamerIconWrapper:"streamerIconWrapper__99ff4",streamerIcon:"streamerIcon__99ff4"}},492090:function(e,t,n){"use strict";n.r(e.exports={content:"content__777cc",staticSize:"staticSize__777cc",widget:"widget__777cc",inGame:"inGame__777cc",inGameActive:"inGameActive__777cc",inGameText:"inGameText__777cc",default:"default__777cc",unpinned:"unpinned__777cc",bar:"bar__777cc",body:"body__777cc",pinned:"pinned__777cc",icon:"icon__777cc",toggledIconOn:"toggledIconOn__777cc",tutorialTip:"tutorialTip__777cc"})},852434:function(e,t,n){"use strict";e.exports={guildHeader:"guildHeader_b81b18",guildHeaderInner:"guildHeaderInner_b81b18",channelList:"channelList_b81b18",panels:"panels_b81b18"}},637511:function(e,t,n){"use strict";e.exports={header:"header__647a7",headerTitle:"headerTitle__647a7",headerClose:"headerClose__647a7",tabBarItem:"tabBarItem__647a7",content:"content__647a7"}},757353:function(e,t,n){"use strict";e.exports={privateChannels:"privateChannels_ee924e",searchBar:"searchBar_ee924e",searchBarComponent:"searchBarComponent_ee924e",panels:"panels_ee924e"}},764547:function(e,t,n){"use strict";e.exports={sidebar:"sidebar__9835e",children:"children__9835e",header:"header__9835e",draggableStartArea:"draggableStartArea__9835e",headerTitle:"headerTitle__9835e"}},87296:function(e,t,n){"use strict";e.exports={overlayBackgroundNux:"overlayBackgroundNux__3db18",overlayInprocessBackgroundNux:"overlayInprocessBackgroundNux__3db18",mainContainer:"mainContainer__3db18",mainTitleContainer:"mainTitleContainer__3db18",widgetCalloutContainer:"widgetCalloutContainer__3db18",widgetCallout:"widgetCallout__3db18",nuxImage:"nuxImage__3db18",mainTitleBody:"mainTitleBody__3db18",mainTitle:"mainTitle__3db18"}},215916:function(e,t,n){"use strict";n.d(t,{Z:()=>i});let i="https://cdn.discordapp.com/assets/content/7136b7daeb4f7fbcc26f7492186010ba62df64ce4d1a8274fc05427e2dff956c.png"}}]);
//# sourceMappingURL=69d104a110e27a7a.js.map