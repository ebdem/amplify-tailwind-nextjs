_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),i=n("rePB"),a=n("nKUr"),c=n("HaE+"),s=(n("zPlV"),{aws_project_region:"us-east-2",aws_appsync_graphqlEndpoint:"https://pnsuwvussbaoxciqnurhvkc5pa.appsync-api.us-east-2.amazonaws.com/graphql",aws_appsync_region:"us-east-2",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-ijnqq7bcurajpdunqsx5l73tpm",aws_cognito_identity_pool_id:"us-east-2:86731b76-e955-4fd9-a7fa-a708b68c17a8",aws_cognito_region:"us-east-2",aws_user_pools_id:"us-east-2_QLfkSWCjs",aws_user_pools_web_client_id:"1pq7rn2q8rhdprlqbn3b649ln0",oauth:{},aws_user_files_s3_bucket:"amplifynextdce5f9b939914d8fbbe06ae08ee60999164049-dev",aws_user_files_s3_bucket_region:"us-east-2"});n("AL3R").default.configure(s);var _=n("YFqc"),u=n.n(_),l=n("q1tI"),f=n("Qycn"),p=n("v4IS");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps,r=Object(l.useState)(!1),i=r[0],s=r[1];function _(){return(_=Object(c.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.a.listen("auth",(function(e){switch(e.payload.event){case"signIn":return s(!0);case"signOut":return s(!1)}})),e.prev=1,e.next=4,p.a.currentAuthenticatedUser();case 4:s(!0),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(l.useEffect)((function(){!function(){_.apply(this,arguments)}()})),Object(a.jsxs)("div",{children:[Object(a.jsxs)("nav",{className:"p-6 border-b border-gray-300",children:[Object(a.jsx)(u.a,{href:"/",children:Object(a.jsx)("span",{className:"mr-6 cursor-pointer",children:"Home"})}),Object(a.jsx)(u.a,{href:"/create-post",children:Object(a.jsx)("span",{className:"mr-6 cursor-pointer",children:"Create Post"})}),Object(a.jsx)(u.a,{href:"/profile",children:Object(a.jsx)("span",{className:"mr-6 cursor-pointer",children:"Profile"})}),i&&Object(a.jsx)(u.a,{href:"/my-posts",children:Object(a.jsx)("span",{className:"mr-6 cursor-pointer",children:"My Posts"})})]}),Object(a.jsx)("div",{className:"py-8 px-16",children:Object(a.jsx)(t,g({},n))})]})}},AL3R:function(e,t,n){"use strict";var r=n("fQM2"),o=n("UFnQ"),i=n("v4IS"),a=n("gr/K");n("l1VB"),n("vYnt");r.a.Auth=i.a,r.a.Cache=a.a,r.a.ServiceWorker=o.a,t.default=r.a},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},UFnQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("Nt7R"),o=n("HzrR"),i=n("fQM2"),a=function(){function e(){this._logger=new r.a("ServiceWorker")}return Object.defineProperty(e.prototype,"serviceWorker",{get:function(){return this._serviceWorker},enumerable:!0,configurable:!0}),e.prototype.register=function(e,t){var n=this;return void 0===e&&(e="/service-worker.js"),void 0===t&&(t="/"),this._logger.debug("registering "+e),this._logger.debug("registering service worker with scope "+t),new Promise((function(r,o){if(!navigator||!("serviceWorker"in navigator))return o(new Error("Service Worker not available"));navigator.serviceWorker.register(e,{scope:t}).then((function(e){return e.installing?n._serviceWorker=e.installing:e.waiting?n._serviceWorker=e.waiting:e.active&&(n._serviceWorker=e.active),n._registration=e,n._setupListeners(),n._logger.debug("Service Worker Registration Success: "+e),r(e)})).catch((function(e){return n._logger.debug("Service Worker Registration Failed "+e),o(e)}))}))},e.prototype.enablePush=function(e){var t=this;if(!this._registration)throw new Error("Service Worker not registered");return this._publicKey=e,new Promise((function(n,r){if(!Object(o.b)().isBrowser)return r(new Error("Service Worker not available"));t._registration.pushManager.getSubscription().then((function(r){if(!r)return t._logger.debug("User is NOT subscribed to push"),t._registration.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t._urlB64ToUint8Array(e)}).then((function(e){t._subscription=e,t._logger.debug("User subscribed: "+JSON.stringify(e)),n(e)})).catch((function(e){t._logger.error(e)}));t._subscription=r,t._logger.debug("User is subscribed to push: "+JSON.stringify(r)),n(r)}))}))},e.prototype._urlB64ToUint8Array=function(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=window.atob(t),r=new Uint8Array(n.length),o=0;o<n.length;++o)r[o]=n.charCodeAt(o);return r},e.prototype.send=function(e){this._serviceWorker&&this._serviceWorker.postMessage("object"===typeof e?JSON.stringify(e):e)},e.prototype._setupListeners=function(){var e=this;this._serviceWorker.addEventListener("statechange",(function(t){var n=e._serviceWorker.state;e._logger.debug("ServiceWorker statechange: "+n),i.a.Analytics&&"function"===typeof i.a.Analytics.record&&i.a.Analytics.record({name:"ServiceWorker",attributes:{state:n}})})),this._serviceWorker.addEventListener("message",(function(t){e._logger.debug("ServiceWorker message event: "+t)}))},e}()},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var i=o(n("q1tI")),a=n("elyg"),c=n("nOHt"),s=n("vNVm"),_={};function u(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;_[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",l=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):c||i}}),[o,e.href,e.as]),f=l.href,p=l.as,d=e.children,g=e.replace,v=e.shallow,b=e.scroll,h=e.locale;"string"===typeof d&&(d=i.default.createElement("a",null,d));var y=i.Children.only(d),m=y&&"object"===typeof y&&y.ref,S=(0,s.useIntersection)({rootMargin:"200px"}),w=r(S,2),O=w[0],j=w[1],k=i.default.useCallback((function(e){O(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,O]);(0,i.useEffect)((function(){var e=j&&t&&(0,a.isLocalURL)(f),r="undefined"!==typeof h?h:n&&n.locale,o=_[f+"%"+p+(r?"%"+r:"")];e&&!o&&u(n,f,p,{locale:r})}),[p,f,j,h,t,n]);var x={ref:k,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,f,p,g,v,b,h)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(n,f,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var I="undefined"!==typeof h?h:n&&n.locale,P=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(p,I,n&&n.locales,n&&n.domainLocales);x.href=P||(0,a.addBasePath)((0,a.addLocale)(p,I,n&&n.defaultLocale))}return i.default.cloneElement(y,x)};t.default=l},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,o.useRef)(),_=(0,o.useState)(!1),u=r(_,2),l=u[0],f=u[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||l||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,l]);return(0,o.useEffect)((function(){if(!a&&!l){var e=(0,i.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[l]),[p,l]};var o=n("q1tI"),i=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var c=new Map},vYnt:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(1)),r(n(2)),r(n(3)),r(n(4)),r(n(5)),r(n(6)),r(n(7)),r(n(8)),r(n(9)),r(n(10)),r(n(11)),r(n(12)),r(n(13))},function(e,t,n){e.exports={a:"Anchor__a___1_Iz8"}},function(e,t,n){e.exports={button:"Button__button___vS7Mv",signInButton:"Button__signInButton___3bUH-",googleSignInButton:"Button__googleSignInButton___1YiCu",signInButtonIcon:"Button__signInButtonIcon___ihN75",auth0SignInButton:"Button__auth0SignInButton___znnCj",facebookSignInButton:"Button__facebookSignInButton___34Txh",amazonSignInButton:"Button__amazonSignInButton___2EMtl",oAuthSignInButton:"Button__oAuthSignInButton___3UGOl",signInButtonContent:"Button__signInButtonContent___xqTXJ"}},function(e,t,n){e.exports={formContainer:"Form__formContainer___1GA3x",formSection:"Form__formSection___1PPvW",formField:"Form__formField___38Ikl",formRow:"Form__formRow___2mwRs"}},function(e,t,n){e.exports={hint:"Hint__hint___2XngB"}},function(e,t,n){e.exports={input:"Input__input___3e_bf",inputLabel:"Input__inputLabel___3VF0S",label:"Input__label___23sO8",radio:"Input__radio___2hllK"}},function(e,t,n){e.exports={navBar:"Nav__navBar___xtCFA",navRight:"Nav__navRight___1QG2J",nav:"Nav__nav___2Dx2Y",navItem:"Nav__navItem___1LtFQ"}},function(e,t,n){e.exports={photoPickerButton:"PhotoPicker__photoPickerButton___2XdVn",photoPlaceholder:"PhotoPicker__photoPlaceholder___2JXO4",photoPlaceholderIcon:"PhotoPicker__photoPlaceholderIcon___3Et71"}},function(e,t,n){e.exports={container:"Section__container___3YYTG",actionRow:"Section__actionRow___2LWSU",sectionHeader:"Section__sectionHeader___2djyg",sectionHeaderHint:"Section__sectionHeaderHint___3Wxdc",sectionBody:"Section__sectionBody___ihqqd",sectionHeaderContent:"Section__sectionHeaderContent___1UCqa",sectionFooter:"Section__sectionFooter___1T54C",sectionFooterPrimaryContent:"Section__sectionFooterPrimaryContent___2r9ZX",sectionFooterSecondaryContent:"Section__sectionFooterSecondaryContent___Nj41Q"}},function(e,t,n){e.exports={selectInput:"SelectInput__selectInput___3efO4"}},function(e,t,n){e.exports={strike:"Strike__strike___1XV1b",strikeContent:"Strike__strikeContent___10gLb"}},function(e,t,n){e.exports={toast:"Toast__toast___XXr3v",toastClose:"Toast__toastClose___18lU4"}},function(e,t,n){e.exports={totpQrcode:"Totp__totpQrcode___1crLx"}},function(e,t,n){e.exports={sumerianSceneContainer:"XR__sumerianSceneContainer___3nVMt",sumerianScene:"XR__sumerianScene___2Tt7-",loadingOverlay:"XR__loadingOverlay___IbqcI",loadingContainer:"XR__loadingContainer___2Itxb",loadingLogo:"XR__loadingLogo___Ub7xQ",loadingSceneName:"XR__loadingSceneName___3__ne",loadingBar:"XR__loadingBar___2vcke",loadingBarFill:"XR__loadingBarFill___3M-D9",sceneErrorText:"XR__sceneErrorText___2y0tp",sceneBar:"XR__sceneBar___2ShrP",sceneName:"XR__sceneName___1ApHr",sceneActions:"XR__sceneActions___7plGs",actionButton:"XR__actionButton___2poIM",tooltip:"XR__tooltip___UYyhn",actionIcon:"XR__actionIcon___2qnd2",autoShowTooltip:"XR__autoShowTooltip___V1QH7"}}])},zPlV:function(e,t,n){}},[[0,1,3,2,4,0,5,6,7,8]]]);