"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["35401"],{704903:function(e,t,i){i.d(t,{Z:()=>v}),i(47120);var n,s=i(200651),a=i(192379),l=i(120356),o=i.n(l),r=i(772848),h=i(846519),d=i(481060),c=i(981631),m=i(388032),u=i(597484),g=i(179683),p=i(483938);function f(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class C extends(n=a.PureComponent){async componentDidMount(){let[e,{default:t}]=await Promise.all([i.e("27526").then(i.t.bind(i,555589,19)),Promise.resolve().then(i.t.bind(i,500923,23))]);null!=this._lottieRef&&(this._animItem=t.loadAnimation({container:this._lottieRef,renderer:"svg",loop:!0,autoplay:!0,animationData:e}))}componentWillUnmount(){this._timeout.stop(),null!=this._animItem&&(this._animItem.destroy(),this._animItem=void 0)}renderInputs(){let{emailError:e,passwordError:t,submitting:i}=this.props,{email:n,password:a}=this.state;return(0,s.jsxs)("div",{className:u.container,children:[(0,s.jsx)(d.xJW,{title:m.intl.string(m.t.dI4d4e),className:p.marginBottom20,children:(0,s.jsx)(d.oil,{value:n,error:e,onChange:this.handleEmailChange,onKeyPress:this.handleKeyPress,autoFocus:!0})}),(0,s.jsx)(d.xJW,{title:m.intl.string(m.t["CIGa+/"]),className:p.marginBottom40,children:(0,s.jsx)(d.oil,{type:"password",value:a,error:t,onChange:this.handlePasswordChange,onKeyPress:this.handleKeyPress})}),(0,s.jsx)(d.zxk,{fullWidth:!0,size:d.zxk.Sizes.LARGE,onClick:this.handleVerify,submitting:i,disabled:0===n.length||0===a.length,children:m.intl.string(m.t.v740sr)})]})}renderActions(){let{canChange:e}=this.props;return(0,s.jsxs)("div",{className:u.container,children:[(0,s.jsx)(d.zxk,{className:p.marginTop20,fullWidth:!0,size:d.zxk.Sizes.LARGE,color:d.Ttl.PRIMARY,onClick:this.handleResendEmail,children:m.intl.string(m.t.LdUkOz)}),e&&(0,s.jsx)(d.zxk,{className:p.marginTop20,fullWidth:!0,size:d.zxk.Sizes.MEDIUM,look:d.iLD.LINK,color:d.Ttl.LINK,onClick:this.handleChangeEmailClick,children:m.intl.string(m.t.oP5zGB)})]})}render(){let e;let{resent:t}=this.state,{email:i,canResend:n,transitionState:a}=this.props;return e=t&&null!=i?m.intl.format(m.t.JqLgQE,{email:i}):n?m.intl.string(m.t.tSXg8P):m.intl.string(m.t.KW5DEh),(0,s.jsxs)(d.Y0X,{transitionState:a,"aria-labelledby":this._headerId,className:o()(u.emailVerificationModal,g.vertical,g.alignCenter,g.justifyCenter,p.marginTop60),children:[(0,s.jsx)("div",{className:u.animationContainer,ref:this.setLottieRef}),(0,s.jsx)("div",{id:this._headerId,className:o()(u.title,p.marginBottom8),children:m.intl.string(m.t["1MPz29"])}),(0,s.jsx)("div",{className:o()(u.body,p.marginBottom20),children:e}),n?this.renderActions():this.renderInputs()]})}constructor(...e){super(...e),f(this,"_lottieRef",void 0),f(this,"_animItem",null),f(this,"_timeout",new h.V7),f(this,"_headerId",(0,r.Z)()),f(this,"state",{resent:!1,shouldClose:!1,email:"",password:""}),f(this,"setLottieRef",e=>{this._lottieRef=e}),f(this,"handleVerify",()=>{let{onVerify:e}=this.props;e(this.state.email,this.state.password)}),f(this,"handleResendEmail",()=>{let{onResend:e,onClose:t}=this.props;e(),this.state.resent||(this.setState({resent:!0,shouldClose:!0}),this._timeout.start(3e3,()=>{this.state.shouldClose&&t()}))}),f(this,"handleChangeEmailClick",()=>{let{onChangeEmailClick:e}=this.props;this.setState({resent:!1,shouldClose:!1}),e()}),f(this,"handleEmailChange",e=>{this.setState({email:e})}),f(this,"handlePasswordChange",e=>{this.setState({password:e})}),f(this,"handleKeyPress",e=>{let{email:t,password:i}=this.state;13===e.which&&t.length>0&&i.length>0&&(e.preventDefault(),this.handleVerify())})}}f(C,"defaultProps",{canResend:!1,canChange:!0,onChangeEmailClick:c.dG4,onVerify:(e,t)=>{},onResend:c.dG4,onClose:c.dG4});let v=C},284549:function(e,t,i){i.d(t,{default:()=>C}),i(47120);var n=i(200651),s=i(192379),a=i(442837),l=i(481060),o=i(893776),r=i(809206),h=i(704903),d=i(155433),c=i(23434),m=i(25990),u=i(594174),g=i(1964),p=i(981631),f=i(388032);let C=e=>{let{transitionState:t,onClose:i}=e,C=(0,a.e7)([m.Z],()=>m.Z.getErrors()),v=(0,a.e7)([m.Z],()=>m.Z.getFormState()),x=(0,a.e7)([u.default],()=>u.default.getCurrentUser()),y=(0,a.e7)([c.Z],()=>c.Z.getAction()),R=!g.Z.isEmailReverification(y),[_,k]=s.useState(!0),I=v===p.QZA.SUBMITTING;function E(e){var t,i;return null!==(i=null==C?void 0:null===(t=C[e])||void 0===t?void 0:t[0])&&void 0!==i?i:""}let b=E("email"),P=E("password");return(0,n.jsx)(h.Z,{transitionState:t,email:null==x?void 0:x.email,emailError:b,passwordError:P,submitting:I,canResend:_&&!I&&(null==x?void 0:x.email)!=null&&0===b.length&&0===P.length,canChange:R,onChangeEmailClick:function(){k(!1)},onVerify:function(e,t){(0,r.Mn)({email:e,password:t}).then(e=>{if(!(null==e?void 0:e.ok)){var t;(null==e?void 0:null===(t=e.body)||void 0===t?void 0:t.username)!=null?(0,d.P)():0===P.length&&0===b.length&&(0,l.showToast)((0,l.createToast)(f.intl.string(f.t.R0RpRU),l.ToastType.FAILURE))}}),k(!0)},onResend:function(){o.Z.verifyResend()},onClose:i})}},597484:function(e,t,i){e.exports={emailVerificationModal:"emailVerificationModal_a2241a",animationContainer:"animationContainer_a2241a",title:"title_a2241a",body:"body_a2241a",container:"container_a2241a"}}}]);
//# sourceMappingURL=6e2dca6ae3a550b0.js.map