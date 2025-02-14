"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["55183"],{566111:function(e,t,n){n.d(t,{Z:()=>c}),n(47120);var r=n(192379),i=n(442837),l=n(365943),s=n(25251),o=n(223143);function c(e){var t;let{isFetching:n,fetchCategoriesError:c,fetchPurchasesError:a,categories:d,purchases:u}=(0,o.ZP)({location:e}),[f,m,p]=(0,i.Wu)([s.Z],()=>[s.Z.isFetching,s.Z.fetchError,s.Z.profileEffects]);return r.useEffect(()=>{(0,l.z)(!0)},[]),{isFetching:n||f,combinedError:null!==(t=null!=c?c:a)&&void 0!==t?t:m,profileEffects:p,categories:d,purchases:u}}},528439:function(e,t,n){n.d(t,{$0:()=>m,Tm:()=>p,ZP:()=>g,oT:()=>h}),n(47120),n(724458),n(653041);var r,i=n(192379),l=n(392711),s=n(399606),o=n(597688),c=n(1870),a=n(884697),d=n(594174),u=n(74538),f=n(388032),m=((r={}).PURCHASE="purchase",r.PREMIUM_PURCHASE="premium_purchase",r.PREVIEW="preview",r);let p={id:"None"},h={id:"Shop"},g=()=>{let e=(0,s.e7)([d.default],()=>d.default.getCurrentUser()),t=u.ZP.canUseCollectibles(e),n=(0,s.e7)([c.Z],()=>c.Z.purchases),[r,m]=(0,s.Wu)([o.Z],()=>[o.Z.categories,o.Z.products]);return(0,i.useMemo)(()=>{let e=(0,l.uniqBy)([...(0,a.aj)(n),...(0,a.XS)(r)],"id").reduce((e,r)=>{let i=n.get(r.skuId);return(0,a.qS)(i)?e.premium_purchase.push(r):null!=i?e.purchase.push(r):!t&&(0,a.G1)(m.get(r.skuId))?e.premium_purchase.push(r):e.preview.push(r),e},{purchase:[],premium_purchase:[],preview:[]});return[{section:"purchase",items:[p,h,...e.purchase],height:12,header:f.intl.string(f.t.JEimX1)},{section:"premium_purchase",items:e.premium_purchase,height:12,header:f.intl.string(f.t.DIJLzM)},{section:"preview",items:e.preview,height:12,header:f.intl.string(f.t.fmIfaG)}].filter(e=>{let{items:t}=e;return t.length>0})},[r,m,n,t])}},191564:function(e,t,n){n.d(t,{default:()=>T}),n(47120);var r=n(200651),i=n(192379),l=n(979554),s=n(442837),o=n(481060),c=n(100527),a=n(906732),d=n(335131),u=n(884697),f=n(449217),m=n(566111),p=n(222062),h=n(269982),g=n(197115),x=n(150039),_=n(594174),v=n(626135),C=n(74538),E=n(934261),I=n(52268),j=n(981631),P=n(474936),N=n(388032),Z=n(754598);function S(e){let{user:t,product:n,purchase:l,onApply:s,onClose:a,disableApplyButton:f,canUseCollectibles:m,selectedProfileEffectId:x,selectedProfileEffectItem:_,analyticsLocations:v}=e,E=i.useCallback(()=>{a(),(0,d.mK)({analyticsLocations:v,analyticsSource:c.Z.EDIT_PROFILE_EFFECT_MODAL,initialProductSkuId:null!=_?_.skuId:void 0})},[a,v,_]),I=(0,p.M)();return(0,r.jsxs)(o.mzw,{className:Z.modalFooter,children:[(0,r.jsxs)("div",{className:Z.buttonsRight,children:[!I&&(0,r.jsx)(o.zxk,{look:o.zxk.Looks.LINK,color:o.zxk.Colors.PRIMARY,onClick:a,children:N.intl.string(N.t["ETE/oK"])}),null!=l&&(!(0,u.qS)(l)||m)||null===x?(0,r.jsx)(o.zxk,{onClick:s,disabled:f,children:N.intl.string(N.t.d6sv6u)}):m||!(0,u.G1)(n)?(0,r.jsx)(o.zxk,{onClick:E,children:N.intl.string(N.t.fYfGgI)}):(0,r.jsx)(g.Z,{subscriptionTier:P.Si.TIER_2,showGradient:I,buttonText:C.ZP.isPremium(t)?N.intl.string(N.t.KXLX7u):I?N.intl.string(N.t.pj0XBA):N.intl.string(N.t.mr4K7O)})]}),I&&(0,u.G1)(n)&&(0,r.jsx)(h.Z,{product:n,onSecondaryClick:a})]})}function b(e){let{user:t,guild:n,categories:l,purchases:s,onClose:c,initialSelectedProfileEffectId:a,currentSavedEffectId:d,analyticsLocations:m}=e,{pendingProfileEffectId:p}=(0,x.bd)(n),[h,g]=i.useMemo(()=>{let e=(0,u.bl)(l,s);return[e.purchased,e.shopPreviews]},[l,s]),[_,v]=i.useState(()=>null!=a?a:void 0!==p?p:null==d?null:null!=d?d:null),[j,P]=i.useMemo(()=>{var e;let t=h.find(e=>(null==e?void 0:e.id)===_),n=null!=t||null===_;return[null!==(e=null!=t?t:g.find(e=>(null==e?void 0:e.id)===_))&&void 0!==e?e:null,n]},[_,h,g]),{product:b,purchase:T}=(0,f.Z)(null==j?void 0:j.skuId),k=i.useRef(null),A=C.ZP.canUseCollectibles(t),B=_===(void 0===p?null!=d?d:null:p),G=i.useCallback(e=>{v(e)},[v]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.xBx,{separator:!1,className:Z.modalHeader,children:[(0,r.jsx)(o.X6q,{variant:"heading-lg/semibold",children:N.intl.string(N.t.t5SVGR)}),(0,r.jsx)(o.olH,{className:Z.modalCloseButton,onClick:c})]}),(0,r.jsxs)(o.hzk,{className:Z.modalContent,children:[(0,r.jsx)(I.Z,{user:t,guild:n,pendingProfileEffect:_,selectedProfileEffectRef:k,onSelect:G,onClose:c}),(0,r.jsx)(E.Z,{user:t,canApplySelectedChange:P,pendingProfileEffectRecord:j,product:b,purchase:T,guild:n})]}),(0,r.jsx)(S,{user:t,onApply:()=>{(0,x.s6)(_,d,null==n?void 0:n.id),c()},onClose:c,product:b,purchase:T,canUseCollectibles:A,selectedProfileEffectId:_,selectedProfileEffectItem:j,disableApplyButton:B,analyticsLocations:m})]})}function T(e){let{transitionState:t,analyticsLocations:n,initialSelectedEffectId:u,guild:f,onClose:p}=e,{isFetching:h,categories:g,purchases:C}=(0,m.Z)("ProfileEffectModal"),E=(0,s.e7)([_.default],()=>_.default.getCurrentUser()),{analyticsLocations:I}=(0,a.ZP)(n,c.Z.EDIT_PROFILE_EFFECT_MODAL),P=(0,x.Kg)(E,f);return i.useEffect(()=>{v.default.track(j.rMx.OPEN_MODAL,{type:j.jXE.PROFILE_EFFECT_CUSTOMIZATION,location_stack:I})},[I]),i.useEffect(()=>()=>{(0,d.K$)({categories:[...g.values()],itemTypes:[l.Z.PROFILE_EFFECT]})},[g]),(0,r.jsx)(a.Gt,{value:I,children:(0,r.jsx)(o.Y0X,{transitionState:t,className:Z.modal,size:h?o.CgR.DYNAMIC:o.CgR.MEDIUM,children:h?(0,r.jsx)(o.$jN,{className:Z.spinner,type:o.$jN.Type.SPINNING_CIRCLE}):(0,r.jsx)(b,{user:E,guild:f,categories:g,purchases:C,initialSelectedProfileEffectId:u,currentSavedEffectId:P,onClose:p,analyticsLocations:I})})})}},934261:function(e,t,n){n.d(t,{Z:()=>T});var r=n(200651);n(192379);var i=n(442837),l=n(481060),s=n(809206),o=n(597688),c=n(884697),a=n(905357),d=n(95422),u=n(18438),f=n(778825),m=n(957730),p=n(222062),h=n(921813),g=n(350327),x=n(687158),_=n(706454),v=n(695346),C=n(265159),E=n(25990),I=n(594174),j=n(55935),P=n(74538),N=n(388032),Z=n(57043);let S=e=>{let{effectIsOwned:t,pendingProfileEffectRecord:n,product:s,purchase:u}=e,f=(0,i.e7)([I.default],()=>I.default.getCurrentUser()),m=(0,i.e7)([o.Z],()=>o.Z.getProduct(null==n?void 0:n.skuId)),h=(0,i.e7)([_.default],()=>_.default.locale),g=P.ZP.canUseCollectibles(f),x=(0,c.qS)(u),v=(0,c.G1)(s),C=!g&&x,E=(null==u?void 0:u.expiresAt)!=null?(0,j.TD)(Date.now(),u.expiresAt):null,S=(0,d.a)(u),T=(0,a.k)(m),k=(0,p.M)(!v||g),A=b(C,v,g,k);return null!=n?(0,r.jsx)("div",{className:t?Z.effectDescriptionNoGradient:Z.effectDescriptionBorderWithGradient,children:(0,r.jsxs)("div",{className:Z.effectDescriptionContainer,children:[(0,r.jsx)(l.Text,{color:"header-primary",variant:"text-sm/semibold",className:Z.effectName,children:null!=S?S:T}),(0,r.jsx)(l.Text,{color:"text-normal",variant:"text-sm/normal",className:Z.effectDescription,children:null!=u?u.summary:A}),null!=E&&(0,r.jsx)(l.Text,{variant:"text-xxs/normal",color:"text-muted",className:Z.effectPurchasedAt,children:N.intl.format(N.t.Io7ozs,{days:E.days.toString()})}),null!=u&&(0,r.jsxs)(l.Text,{variant:"text-xxs/normal",color:"text-muted",className:Z.effectPurchasedAt,children:[N.intl.format(N.t.gW9R4O,{date:u.purchasedAt.toLocaleDateString(h,{month:"long",year:"numeric"})}),null!=u.expiresAt&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),N.intl.format(N.t.eZSTa2,{date:u.expiresAt.toLocaleDateString(h,{minute:"numeric",hour:"numeric",day:"numeric",month:"long",year:"numeric"})})]})]}),x&&(0,r.jsx)(l.Text,{variant:"text-xxs/normal",color:"text-muted",className:Z.effectPurchasedAt,children:N.intl.string(N.t.UewH9P)})]})}):null},b=(e,t,n,r)=>e?N.intl.string(N.t.ZVTtBg):t&&n?N.intl.string(N.t.L5hyz8):t&&!n?r?N.intl.string(N.t.meldu7):N.intl.string(N.t.bGl9t7):N.intl.string(N.t.PXzyvr),T=e=>{var t;let{user:n,pendingProfileEffectRecord:l,canApplySelectedChange:o,product:c,purchase:a,guild:d}=e,{pendingGlobalName:p,pendingNickname:_,pendingPronouns:I,pendingBio:j,pendingBanner:N,pendingAvatar:b,pendingAvatarDecoration:T,pendingThemeColors:k,pendingAccentColor:A}=(0,i.cj)([f.Z,E.Z],()=>({pendingNickname:void 0,pendingGlobalName:void 0,pendingAccentColor:void 0,...null!=d?f.Z.getAllPending():E.Z.getAllPending()})),B=P.ZP.isPremium(n),G=P.ZP.canUsePremiumProfileCustomization(n),y=(0,x.ZP)(n.id),R=!!(null==y?void 0:y.getPreviewBio(j).value),w={user:n,guild:d,pendingGlobalName:p,pendingNickname:_,pendingPronouns:I,pendingBio:v.dN.useSetting()&&null!=j?m.ZP.parse(void 0,j).content:j,pendingBanner:N,useLargeBanner:!0,pendingAvatar:b,pendingAvatarDecoration:T,pendingThemeColors:k,pendingAccentColor:A,pendingProfileEffectId:null!==(t=null==l?void 0:l.id)&&void 0!==t?t:null,hideFakeActivity:R,canUsePremiumCustomization:G,onUpsellClick:C.Z,onAvatarChange:null!=d?u.I5:s.I5,onBannerChange:g.g_};return(0,r.jsxs)("div",{className:Z.previewContainer,children:[(0,r.jsx)(h.Z,{...w,disabledInputs:!0,hideCustomStatus:!0}),!1,(0,r.jsx)(S,{effectIsOwned:o,pendingProfileEffectRecord:l,product:c,purchase:a,userIsPremium:B})]})}},52268:function(e,t,n){n.d(t,{Z:()=>N}),n(627341);var r=n(200651),i=n(192379),l=n(120356),s=n.n(l),o=n(278074),c=n(831209),a=n(399606),d=n(481060),u=n(37234),f=n(597688),m=n(884697),p=n(222062),h=n(74538),g=n(731896),x=n(528439),_=n(981631),v=n(388032),C=n(240667),E=n(223223);let I=()=>80,j=e=>{let{children:t,className:n,isSelected:i=!1,...l}=e;return(0,r.jsx)(d.P3F,{className:s()(C.effectGridItem,n,{[C.selected]:i}),...l,onClick:l.onSelect,children:t})},P=e=>{var t;let{user:n,profileEffect:l,innerRef:s,section:o,isSelected:u,..._}=e,I=(0,g.V)(l.id),P=(0,a.e7)([f.Z],()=>{let e=f.Z.getProduct(l.skuId);return(0,m.G1)(e)}),N=(0,m.Yq)(l.skuId),Z=i.useRef(null),{accessibilityLabel:S,thumbnailPreviewSrc:b,title:T}=null!==(t=null==I?void 0:I.config)&&void 0!==t?t:{},k=h.ZP.canUseCollectibles(n),A=o===x.$0.PREMIUM_PURCHASE&&!k,B=(0,p.M)();return(0,r.jsxs)(j,{className:!A||u||B?void 0:C.decorationGridItemChurned,innerRef:null!=s?s:Z,isSelected:u,..._,children:[(0,r.jsx)("img",{src:E,alt:S,className:C.presetEffectBackground}),(0,r.jsx)("img",{className:C.presetEffectImg,src:b,alt:T}),o===x.$0.PURCHASE||o===x.$0.PREMIUM_PURCHASE&&k?null:N?(0,r.jsx)(d.lBU,{className:C.newBadge,text:(0,r.jsxs)("div",{className:C.newBadgeText,children:[(0,r.jsx)(d.mBM,{size:"xxs",color:"currentColor"}),v.intl.string(v.t.y2b7CA)]})}):(0,r.jsx)(d.G2e,{icon:P?()=>(0,r.jsx)(d.SrA,{size:"custom",color:"currentColor",width:14,height:14}):()=>(0,r.jsx)(d.mBM,{size:"xxs",color:"currentColor"}),color:c.Z.BACKGROUND_ACCENT,className:C.lockBadge})]})},N=e=>{let{user:t,guild:n,pendingProfileEffect:i,selectedProfileEffectRef:l,onSelect:s,onClose:c}=e,a=()=>{c(),(0,u.jN)(_.S9g.COLLECTIBLES_SHOP)},f=(0,x.ZP)(),m=null!=i;return(0,r.jsx)("section",{className:C.section,children:(0,r.jsx)(d.GMG,{fade:!0,itemGutter:12,sectionGutter:16,paddingVertical:0,paddingHorizontal:12,className:C.list,columns:3,sections:f.map(e=>{let{items:t}=e;return t.length}),renderItem:(e,c,u,p)=>{let{section:h,items:g}=f[e];return(0,o.EQ)(g[c]).with(x.Tm,()=>(0,r.jsxs)(j,{style:{...u},isSelected:!m,onSelect:()=>s(null),children:[(0,r.jsx)(d.t6m,{size:"md",color:"currentColor",className:C.notAllowedIcon}),(0,r.jsx)(d.Text,{variant:"text-xs/normal",color:"header-primary",children:null!=n?v.intl.string(v.t.GJ3Fcn):v.intl.string(v.t.PoWNfX)})]},p)).with(x.oT,()=>(0,r.jsxs)(j,{style:u,onSelect:a,children:[(0,r.jsx)(d.EOn,{size:"custom",width:23,height:23,color:"currentColor",className:C.shopIcon}),(0,r.jsx)(d.Text,{variant:"text-xs/normal",color:"header-primary",children:v.intl.string(v.t.pWG4zc)})]},p)).otherwise(e=>{let n=i===e.id;return(0,r.jsx)(P,{user:t,style:{...u},section:h,profileEffect:e,innerRef:n?l:void 0,isSelected:n,onSelect:()=>s(e.id)},p)})},renderSection:(e,t)=>{let{header:n}=f[e];return(0,r.jsx)("div",{style:{...t,height:"".concat(16,"px"),position:"absolute"},children:(0,r.jsx)(d.vwX,{children:n})})},getSectionHeight:()=>16,getItemKey:(e,t)=>{var n,r;return null!==(r=null===(n=f[e].items[t])||void 0===n?void 0:n.id)&&void 0!==r?r:null},getItemHeight:I,removeEdgeItemGutters:!0})})}},265159:function(e,t,n){n.d(t,{Z:()=>s});var r=n(200651);n(192379);var i=n(481060),l=n(981631);function s(){(0,i.ZDy)(async()=>{let{default:e}=await n.e("38047").then(n.bind(n,975863));return t=>(0,r.jsx)(e,{...t,source:{page:l.ZY5.USER_SETTINGS,section:l.jXE.SETTINGS_CUSTOMIZE_PROFILE,object:l.qAy.BUTTON_CTA,type:l.Qqv.BUY}})})}},754598:function(e,t,n){e.exports={modal:"modal__20a09",modalFooter:"modalFooter__20a09",buttonsRight:"buttonsRight__20a09",modalHeader:"modalHeader__20a09",modalCloseButton:"modalCloseButton__20a09",modalContent:"modalContent__20a09",spinner:"spinner__20a09"}},57043:function(e,t,n){e.exports={previewContainer:"previewContainer__92e52",effectDescriptionBorder:"effectDescriptionBorder__92e52",effectDescriptionBorderWithGradient:"effectDescriptionBorderWithGradient__92e52 effectDescriptionBorder__92e52",effectDescriptionNoGradient:"effectDescriptionNoGradient__92e52 effectDescriptionBorder__92e52",effectDescriptionContainer:"effectDescriptionContainer__92e52",effectDescription:"effectDescription__92e52",effectName:"effectName__92e52",effectPurchasedAt:"effectPurchasedAt__92e52"}},240667:function(e,t,n){e.exports={icon:"icon_b4019a",notAllowedIcon:"notAllowedIcon_b4019a icon_b4019a",effectGridItem:"effectGridItem_b4019a",selected:"selected_b4019a",section:"section_b4019a",list:"list_b4019a",shopIcon:"shopIcon_b4019a icon_b4019a",decorationGridItemChurned:"decorationGridItemChurned_b4019a",lockBadge:"lockBadge_b4019a",newBadge:"newBadge_b4019a",newBadgeText:"newBadgeText_b4019a",presetEffectImg:"presetEffectImg_b4019a",presetEffectBackground:"presetEffectBackground_b4019a"}}}]);
//# sourceMappingURL=ccfda2c202f5e410.js.map