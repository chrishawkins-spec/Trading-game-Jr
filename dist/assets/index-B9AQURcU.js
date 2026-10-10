(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function u1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qw={exports:{}},Ch={},Hw={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ml=Symbol.for("react.element"),h1=Symbol.for("react.portal"),d1=Symbol.for("react.fragment"),f1=Symbol.for("react.strict_mode"),p1=Symbol.for("react.profiler"),m1=Symbol.for("react.provider"),g1=Symbol.for("react.context"),y1=Symbol.for("react.forward_ref"),_1=Symbol.for("react.suspense"),v1=Symbol.for("react.memo"),w1=Symbol.for("react.lazy"),P_=Symbol.iterator;function E1(t){return t===null||typeof t!="object"?null:(t=P_&&t[P_]||t["@@iterator"],typeof t=="function"?t:null)}var Gw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kw=Object.assign,Qw={};function Ao(t,e,n){this.props=t,this.context=e,this.refs=Qw,this.updater=n||Gw}Ao.prototype.isReactComponent={};Ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Yw(){}Yw.prototype=Ao.prototype;function am(t,e,n){this.props=t,this.context=e,this.refs=Qw,this.updater=n||Gw}var lm=am.prototype=new Yw;lm.constructor=am;Kw(lm,Ao.prototype);lm.isPureReactComponent=!0;var N_=Array.isArray,Xw=Object.prototype.hasOwnProperty,cm={current:null},Jw={key:!0,ref:!0,__self:!0,__source:!0};function Zw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xw.call(e,r)&&!Jw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ml,type:t,key:s,ref:o,props:i,_owner:cm.current}}function T1(t,e){return{$$typeof:Ml,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function um(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ml}function S1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var b_=/\/+/g;function jd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?S1(""+t.key):e.toString(36)}function Zc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ml:case h1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+jd(o,0):r,N_(i)?(n="",t!=null&&(n=t.replace(b_,"$&/")+"/"),Zc(i,e,n,"",function(u){return u})):i!=null&&(um(i)&&(i=T1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(b_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",N_(t))for(var a=0;a<t.length;a++){s=t[a];var c=r+jd(s,a);o+=Zc(s,e,n,c,i)}else if(c=E1(t),typeof c=="function")for(t=c.call(t),a=0;!(s=t.next()).done;)s=s.value,c=r+jd(s,a++),o+=Zc(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xc(t,e,n){if(t==null)return t;var r=[],i=0;return Zc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function I1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},eu={transition:null},C1={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:eu,ReactCurrentOwner:cm};function eE(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:xc,forEach:function(t,e,n){xc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xc(t,function(){e++}),e},toArray:function(t){return xc(t,function(e){return e})||[]},only:function(t){if(!um(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};fe.Component=Ao;fe.Fragment=d1;fe.Profiler=p1;fe.PureComponent=am;fe.StrictMode=f1;fe.Suspense=_1;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C1;fe.act=eE;fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Kw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=cm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)Xw.call(e,c)&&!Jw.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ml,type:t.type,key:i,ref:s,props:r,_owner:o}};fe.createContext=function(t){return t={$$typeof:g1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:m1,_context:t},t.Consumer=t};fe.createElement=Zw;fe.createFactory=function(t){var e=Zw.bind(null,t);return e.type=t,e};fe.createRef=function(){return{current:null}};fe.forwardRef=function(t){return{$$typeof:y1,render:t}};fe.isValidElement=um;fe.lazy=function(t){return{$$typeof:w1,_payload:{_status:-1,_result:t},_init:I1}};fe.memo=function(t,e){return{$$typeof:v1,type:t,compare:e===void 0?null:e}};fe.startTransition=function(t){var e=eu.transition;eu.transition={};try{t()}finally{eu.transition=e}};fe.unstable_act=eE;fe.useCallback=function(t,e){return Kt.current.useCallback(t,e)};fe.useContext=function(t){return Kt.current.useContext(t)};fe.useDebugValue=function(){};fe.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};fe.useEffect=function(t,e){return Kt.current.useEffect(t,e)};fe.useId=function(){return Kt.current.useId()};fe.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};fe.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};fe.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};fe.useMemo=function(t,e){return Kt.current.useMemo(t,e)};fe.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};fe.useRef=function(t){return Kt.current.useRef(t)};fe.useState=function(t){return Kt.current.useState(t)};fe.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};fe.useTransition=function(){return Kt.current.useTransition()};fe.version="18.3.1";Hw.exports=fe;var j=Hw.exports;const hr=u1(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x1=j,k1=Symbol.for("react.element"),R1=Symbol.for("react.fragment"),A1=Object.prototype.hasOwnProperty,P1=x1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N1={key:!0,ref:!0,__self:!0,__source:!0};function tE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)A1.call(e,r)&&!N1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:k1,type:t,key:s,ref:o,props:i,_owner:P1.current}}Ch.Fragment=R1;Ch.jsx=tE;Ch.jsxs=tE;qw.exports=Ch;var h=qw.exports,Af={},nE={exports:{}},yn={},rE={exports:{}},iE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,B){var X=F.length;F.push(B);e:for(;0<X;){var ge=X-1>>>1,ce=F[ge];if(0<i(ce,B))F[ge]=B,F[X]=ce,X=ge;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var B=F[0],X=F.pop();if(X!==B){F[0]=X;e:for(var ge=0,ce=F.length,we=ce>>>1;ge<we;){var Ie=2*(ge+1)-1,an=F[Ie],Ft=Ie+1,Ut=F[Ft];if(0>i(an,X))Ft<ce&&0>i(Ut,an)?(F[ge]=Ut,F[Ft]=X,ge=Ft):(F[ge]=an,F[Ie]=X,ge=Ie);else if(Ft<ce&&0>i(Ut,X))F[ge]=Ut,F[Ft]=X,ge=Ft;else break e}}return B}function i(F,B){var X=F.sortIndex-B.sortIndex;return X!==0?X:F.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],u=[],f=1,p=null,m=3,v=!1,I=!1,S=!1,b=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(F){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=F)r(u),B.sortIndex=B.expirationTime,e(c,B);else break;B=n(u)}}function P(F){if(S=!1,R(F),!I)if(n(c)!==null)I=!0,W(M);else{var B=n(u);B!==null&&Z(P,B.startTime-F)}}function M(F,B){I=!1,S&&(S=!1,w(_),_=-1),v=!0;var X=m;try{for(R(B),p=n(c);p!==null&&(!(p.expirationTime>B)||F&&!A());){var ge=p.callback;if(typeof ge=="function"){p.callback=null,m=p.priorityLevel;var ce=ge(p.expirationTime<=B);B=t.unstable_now(),typeof ce=="function"?p.callback=ce:p===n(c)&&r(c),R(B)}else r(c);p=n(c)}if(p!==null)var we=!0;else{var Ie=n(u);Ie!==null&&Z(P,Ie.startTime-B),we=!1}return we}finally{p=null,m=X,v=!1}}var D=!1,E=null,_=-1,C=5,k=-1;function A(){return!(t.unstable_now()-k<C)}function N(){if(E!==null){var F=t.unstable_now();k=F;var B=!0;try{B=E(!0,F)}finally{B?x():(D=!1,E=null)}}else D=!1}var x;if(typeof T=="function")x=function(){T(N)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,qe=Be.port2;Be.port1.onmessage=N,x=function(){qe.postMessage(null)}}else x=function(){b(N,0)};function W(F){E=F,D||(D=!0,x())}function Z(F,B){_=b(function(){F(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){I||v||(I=!0,W(M))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(F){switch(m){case 1:case 2:case 3:var B=3;break;default:B=m}var X=m;m=B;try{return F()}finally{m=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,B){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var X=m;m=F;try{return B()}finally{m=X}},t.unstable_scheduleCallback=function(F,B,X){var ge=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ge+X:ge):X=ge,F){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=X+ce,F={id:f++,callback:B,priorityLevel:F,startTime:X,expirationTime:ce,sortIndex:-1},X>ge?(F.sortIndex=X,e(u,F),n(c)===null&&F===n(u)&&(S?(w(_),_=-1):S=!0,Z(P,X-ge))):(F.sortIndex=ce,e(c,F),I||v||(I=!0,W(M))),F},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(F){var B=m;return function(){var X=m;m=B;try{return F.apply(this,arguments)}finally{m=X}}}})(iE);rE.exports=iE;var b1=rE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D1=j,gn=b1;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sE=new Set,el={};function ys(t,e){ho(t,e),ho(t+"Capture",e)}function ho(t,e){for(el[t]=e,t=0;t<e.length;t++)sE.add(e[t])}var Ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pf=Object.prototype.hasOwnProperty,O1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,D_={},O_={};function L1(t){return Pf.call(O_,t)?!0:Pf.call(D_,t)?!1:O1.test(t)?O_[t]=!0:(D_[t]=!0,!1)}function j1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M1(t,e,n,r){if(e===null||typeof e>"u"||j1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xt[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xt[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xt[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xt[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xt[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xt[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xt[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xt[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xt[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var hm=/[\-:]([a-z])/g;function dm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hm,dm);xt[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hm,dm);xt[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hm,dm);xt[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function fm(t,e,n,r){var i=xt.hasOwnProperty(e)?xt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(M1(e,n,i,r)&&(n=null),r||i===null?L1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Or=D1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kc=Symbol.for("react.element"),js=Symbol.for("react.portal"),Ms=Symbol.for("react.fragment"),pm=Symbol.for("react.strict_mode"),Nf=Symbol.for("react.profiler"),oE=Symbol.for("react.provider"),aE=Symbol.for("react.context"),mm=Symbol.for("react.forward_ref"),bf=Symbol.for("react.suspense"),Df=Symbol.for("react.suspense_list"),gm=Symbol.for("react.memo"),Hr=Symbol.for("react.lazy"),lE=Symbol.for("react.offscreen"),L_=Symbol.iterator;function ua(t){return t===null||typeof t!="object"?null:(t=L_&&t[L_]||t["@@iterator"],typeof t=="function"?t:null)}var $e=Object.assign,Md;function Ia(t){if(Md===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Md=e&&e[1]||""}return`
`+Md+t}var Vd=!1;function Fd(t,e){if(!t||Vd)return"";Vd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{Vd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ia(t):""}function V1(t){switch(t.tag){case 5:return Ia(t.type);case 16:return Ia("Lazy");case 13:return Ia("Suspense");case 19:return Ia("SuspenseList");case 0:case 2:case 15:return t=Fd(t.type,!1),t;case 11:return t=Fd(t.type.render,!1),t;case 1:return t=Fd(t.type,!0),t;default:return""}}function Of(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ms:return"Fragment";case js:return"Portal";case Nf:return"Profiler";case pm:return"StrictMode";case bf:return"Suspense";case Df:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case aE:return(t.displayName||"Context")+".Consumer";case oE:return(t._context.displayName||"Context")+".Provider";case mm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gm:return e=t.displayName||null,e!==null?e:Of(t.type)||"Memo";case Hr:e=t._payload,t=t._init;try{return Of(t(e))}catch{}}return null}function F1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Of(e);case 8:return e===pm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function U1(t){var e=cE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Rc(t){t._valueTracker||(t._valueTracker=U1(t))}function uE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=cE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Eu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lf(t,e){var n=e.checked;return $e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function j_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_i(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hE(t,e){e=e.checked,e!=null&&fm(t,"checked",e,!1)}function jf(t,e){hE(t,e);var n=_i(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mf(t,e.type,_i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function M_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mf(t,e,n){(e!=="number"||Eu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ca=Array.isArray;function Js(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_i(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Vf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return $e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function V_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Ca(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_i(n)}}function dE(t,e){var n=_i(e.value),r=_i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function F_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ff(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ac,pE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ac=Ac||document.createElement("div"),Ac.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ac.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function tl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},B1=["Webkit","ms","Moz","O"];Object.keys(Oa).forEach(function(t){B1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Oa[e]=Oa[t]})});function mE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Oa.hasOwnProperty(t)&&Oa[t]?(""+e).trim():e+"px"}function gE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var z1=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uf(t,e){if(e){if(z1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Bf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zf=null;function ym(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wf=null,Zs=null,eo=null;function U_(t){if(t=Ul(t)){if(typeof Wf!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Ph(e),Wf(t.stateNode,t.type,e))}}function yE(t){Zs?eo?eo.push(t):eo=[t]:Zs=t}function _E(){if(Zs){var t=Zs,e=eo;if(eo=Zs=null,U_(t),e)for(t=0;t<e.length;t++)U_(e[t])}}function vE(t,e){return t(e)}function wE(){}var Ud=!1;function EE(t,e,n){if(Ud)return t(e,n);Ud=!0;try{return vE(t,e,n)}finally{Ud=!1,(Zs!==null||eo!==null)&&(wE(),_E())}}function nl(t,e){var n=t.stateNode;if(n===null)return null;var r=Ph(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var $f=!1;if(Ir)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){$f=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{$f=!1}function W1(t,e,n,r,i,s,o,a,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var La=!1,Tu=null,Su=!1,qf=null,$1={onError:function(t){La=!0,Tu=t}};function q1(t,e,n,r,i,s,o,a,c){La=!1,Tu=null,W1.apply($1,arguments)}function H1(t,e,n,r,i,s,o,a,c){if(q1.apply(this,arguments),La){if(La){var u=Tu;La=!1,Tu=null}else throw Error(z(198));Su||(Su=!0,qf=u)}}function _s(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function TE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function B_(t){if(_s(t)!==t)throw Error(z(188))}function G1(t){var e=t.alternate;if(!e){if(e=_s(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return B_(i),t;if(s===r)return B_(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function SE(t){return t=G1(t),t!==null?IE(t):null}function IE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=IE(t);if(e!==null)return e;t=t.sibling}return null}var CE=gn.unstable_scheduleCallback,z_=gn.unstable_cancelCallback,K1=gn.unstable_shouldYield,Q1=gn.unstable_requestPaint,Xe=gn.unstable_now,Y1=gn.unstable_getCurrentPriorityLevel,_m=gn.unstable_ImmediatePriority,xE=gn.unstable_UserBlockingPriority,Iu=gn.unstable_NormalPriority,X1=gn.unstable_LowPriority,kE=gn.unstable_IdlePriority,xh=null,Xn=null;function J1(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(xh,t,void 0,(t.current.flags&128)===128)}catch{}}var Mn=Math.clz32?Math.clz32:tk,Z1=Math.log,ek=Math.LN2;function tk(t){return t>>>=0,t===0?32:31-(Z1(t)/ek|0)|0}var Pc=64,Nc=4194304;function xa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Cu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=xa(a):(s&=o,s!==0&&(r=xa(s)))}else o=n&~i,o!==0?r=xa(o):s!==0&&(r=xa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Mn(e),i=1<<n,r|=t[n],e&=~i;return r}function nk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Mn(s),a=1<<o,c=i[o];c===-1?(!(a&n)||a&r)&&(i[o]=nk(a,e)):c<=e&&(t.expiredLanes|=a),s&=~a}}function Hf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function RE(){var t=Pc;return Pc<<=1,!(Pc&4194240)&&(Pc=64),t}function Bd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Vl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mn(e),t[e]=n}function ik(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Mn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function vm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Mn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Re=0;function AE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var PE,wm,NE,bE,DE,Gf=!1,bc=[],ii=null,si=null,oi=null,rl=new Map,il=new Map,Kr=[],sk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function W_(t,e){switch(t){case"focusin":case"focusout":ii=null;break;case"dragenter":case"dragleave":si=null;break;case"mouseover":case"mouseout":oi=null;break;case"pointerover":case"pointerout":rl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":il.delete(e.pointerId)}}function da(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ul(e),e!==null&&wm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ok(t,e,n,r,i){switch(e){case"focusin":return ii=da(ii,t,e,n,r,i),!0;case"dragenter":return si=da(si,t,e,n,r,i),!0;case"mouseover":return oi=da(oi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return rl.set(s,da(rl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,il.set(s,da(il.get(s)||null,t,e,n,r,i)),!0}return!1}function OE(t){var e=Hi(t.target);if(e!==null){var n=_s(e);if(n!==null){if(e=n.tag,e===13){if(e=TE(n),e!==null){t.blockedOn=e,DE(t.priority,function(){NE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);zf=r,n.target.dispatchEvent(r),zf=null}else return e=Ul(n),e!==null&&wm(e),t.blockedOn=n,!1;e.shift()}return!0}function $_(t,e,n){tu(t)&&n.delete(e)}function ak(){Gf=!1,ii!==null&&tu(ii)&&(ii=null),si!==null&&tu(si)&&(si=null),oi!==null&&tu(oi)&&(oi=null),rl.forEach($_),il.forEach($_)}function fa(t,e){t.blockedOn===e&&(t.blockedOn=null,Gf||(Gf=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,ak)))}function sl(t){function e(i){return fa(i,t)}if(0<bc.length){fa(bc[0],t);for(var n=1;n<bc.length;n++){var r=bc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ii!==null&&fa(ii,t),si!==null&&fa(si,t),oi!==null&&fa(oi,t),rl.forEach(e),il.forEach(e),n=0;n<Kr.length;n++)r=Kr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kr.length&&(n=Kr[0],n.blockedOn===null);)OE(n),n.blockedOn===null&&Kr.shift()}var to=Or.ReactCurrentBatchConfig,xu=!0;function lk(t,e,n,r){var i=Re,s=to.transition;to.transition=null;try{Re=1,Em(t,e,n,r)}finally{Re=i,to.transition=s}}function ck(t,e,n,r){var i=Re,s=to.transition;to.transition=null;try{Re=4,Em(t,e,n,r)}finally{Re=i,to.transition=s}}function Em(t,e,n,r){if(xu){var i=Kf(t,e,n,r);if(i===null)Xd(t,e,r,ku,n),W_(t,r);else if(ok(i,t,e,n,r))r.stopPropagation();else if(W_(t,r),e&4&&-1<sk.indexOf(t)){for(;i!==null;){var s=Ul(i);if(s!==null&&PE(s),s=Kf(t,e,n,r),s===null&&Xd(t,e,r,ku,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Xd(t,e,r,null,n)}}var ku=null;function Kf(t,e,n,r){if(ku=null,t=ym(r),t=Hi(t),t!==null)if(e=_s(t),e===null)t=null;else if(n=e.tag,n===13){if(t=TE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ku=t,null}function LE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y1()){case _m:return 1;case xE:return 4;case Iu:case X1:return 16;case kE:return 536870912;default:return 16}default:return 16}}var ti=null,Tm=null,nu=null;function jE(){if(nu)return nu;var t,e=Tm,n=e.length,r,i="value"in ti?ti.value:ti.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return nu=i.slice(t,1<r?1-r:void 0)}function ru(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Dc(){return!0}function q_(){return!1}function _n(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Dc:q_,this.isPropagationStopped=q_,this}return $e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dc)},persist:function(){},isPersistent:Dc}),e}var Po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sm=_n(Po),Fl=$e({},Po,{view:0,detail:0}),uk=_n(Fl),zd,Wd,pa,kh=$e({},Fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Im,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pa&&(pa&&t.type==="mousemove"?(zd=t.screenX-pa.screenX,Wd=t.screenY-pa.screenY):Wd=zd=0,pa=t),zd)},movementY:function(t){return"movementY"in t?t.movementY:Wd}}),H_=_n(kh),hk=$e({},kh,{dataTransfer:0}),dk=_n(hk),fk=$e({},Fl,{relatedTarget:0}),$d=_n(fk),pk=$e({},Po,{animationName:0,elapsedTime:0,pseudoElement:0}),mk=_n(pk),gk=$e({},Po,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yk=_n(gk),_k=$e({},Po,{data:0}),G_=_n(_k),vk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ek={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ek[t])?!!e[t]:!1}function Im(){return Tk}var Sk=$e({},Fl,{key:function(t){if(t.key){var e=vk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ru(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Im,charCode:function(t){return t.type==="keypress"?ru(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ru(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ik=_n(Sk),Ck=$e({},kh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),K_=_n(Ck),xk=$e({},Fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Im}),kk=_n(xk),Rk=$e({},Po,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ak=_n(Rk),Pk=$e({},kh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Nk=_n(Pk),bk=[9,13,27,32],Cm=Ir&&"CompositionEvent"in window,ja=null;Ir&&"documentMode"in document&&(ja=document.documentMode);var Dk=Ir&&"TextEvent"in window&&!ja,ME=Ir&&(!Cm||ja&&8<ja&&11>=ja),Q_=" ",Y_=!1;function VE(t,e){switch(t){case"keyup":return bk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function FE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vs=!1;function Ok(t,e){switch(t){case"compositionend":return FE(e);case"keypress":return e.which!==32?null:(Y_=!0,Q_);case"textInput":return t=e.data,t===Q_&&Y_?null:t;default:return null}}function Lk(t,e){if(Vs)return t==="compositionend"||!Cm&&VE(t,e)?(t=jE(),nu=Tm=ti=null,Vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ME&&e.locale!=="ko"?null:e.data;default:return null}}var jk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function X_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jk[t.type]:e==="textarea"}function UE(t,e,n,r){yE(r),e=Ru(e,"onChange"),0<e.length&&(n=new Sm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ma=null,ol=null;function Mk(t){XE(t,0)}function Rh(t){var e=Bs(t);if(uE(e))return t}function Vk(t,e){if(t==="change")return e}var BE=!1;if(Ir){var qd;if(Ir){var Hd="oninput"in document;if(!Hd){var J_=document.createElement("div");J_.setAttribute("oninput","return;"),Hd=typeof J_.oninput=="function"}qd=Hd}else qd=!1;BE=qd&&(!document.documentMode||9<document.documentMode)}function Z_(){Ma&&(Ma.detachEvent("onpropertychange",zE),ol=Ma=null)}function zE(t){if(t.propertyName==="value"&&Rh(ol)){var e=[];UE(e,ol,t,ym(t)),EE(Mk,e)}}function Fk(t,e,n){t==="focusin"?(Z_(),Ma=e,ol=n,Ma.attachEvent("onpropertychange",zE)):t==="focusout"&&Z_()}function Uk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rh(ol)}function Bk(t,e){if(t==="click")return Rh(e)}function zk(t,e){if(t==="input"||t==="change")return Rh(e)}function Wk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Un=typeof Object.is=="function"?Object.is:Wk;function al(t,e){if(Un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Pf.call(e,i)||!Un(t[i],e[i]))return!1}return!0}function ev(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tv(t,e){var n=ev(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ev(n)}}function WE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?WE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $E(){for(var t=window,e=Eu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Eu(t.document)}return e}function xm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $k(t){var e=$E(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&WE(n.ownerDocument.documentElement,n)){if(r!==null&&xm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=tv(n,s);var o=tv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qk=Ir&&"documentMode"in document&&11>=document.documentMode,Fs=null,Qf=null,Va=null,Yf=!1;function nv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yf||Fs==null||Fs!==Eu(r)||(r=Fs,"selectionStart"in r&&xm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Va&&al(Va,r)||(Va=r,r=Ru(Qf,"onSelect"),0<r.length&&(e=new Sm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Fs)))}function Oc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Us={animationend:Oc("Animation","AnimationEnd"),animationiteration:Oc("Animation","AnimationIteration"),animationstart:Oc("Animation","AnimationStart"),transitionend:Oc("Transition","TransitionEnd")},Gd={},qE={};Ir&&(qE=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Ah(t){if(Gd[t])return Gd[t];if(!Us[t])return t;var e=Us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qE)return Gd[t]=e[n];return t}var HE=Ah("animationend"),GE=Ah("animationiteration"),KE=Ah("animationstart"),QE=Ah("transitionend"),YE=new Map,rv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ki(t,e){YE.set(t,e),ys(e,[t])}for(var Kd=0;Kd<rv.length;Kd++){var Qd=rv[Kd],Hk=Qd.toLowerCase(),Gk=Qd[0].toUpperCase()+Qd.slice(1);ki(Hk,"on"+Gk)}ki(HE,"onAnimationEnd");ki(GE,"onAnimationIteration");ki(KE,"onAnimationStart");ki("dblclick","onDoubleClick");ki("focusin","onFocus");ki("focusout","onBlur");ki(QE,"onTransitionEnd");ho("onMouseEnter",["mouseout","mouseover"]);ho("onMouseLeave",["mouseout","mouseover"]);ho("onPointerEnter",["pointerout","pointerover"]);ho("onPointerLeave",["pointerout","pointerover"]);ys("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ys("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ys("onBeforeInput",["compositionend","keypress","textInput","paste"]);ys("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kk=new Set("cancel close invalid load scroll toggle".split(" ").concat(ka));function iv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,H1(r,e,void 0,t),t.currentTarget=null}function XE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==s&&i.isPropagationStopped())break e;iv(i,a,u),s=c}else for(o=0;o<r.length;o++){if(a=r[o],c=a.instance,u=a.currentTarget,a=a.listener,c!==s&&i.isPropagationStopped())break e;iv(i,a,u),s=c}}}if(Su)throw t=qf,Su=!1,qf=null,t}function Me(t,e){var n=e[tp];n===void 0&&(n=e[tp]=new Set);var r=t+"__bubble";n.has(r)||(JE(e,t,2,!1),n.add(r))}function Yd(t,e,n){var r=0;e&&(r|=4),JE(n,t,r,e)}var Lc="_reactListening"+Math.random().toString(36).slice(2);function ll(t){if(!t[Lc]){t[Lc]=!0,sE.forEach(function(n){n!=="selectionchange"&&(Kk.has(n)||Yd(n,!1,t),Yd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Lc]||(e[Lc]=!0,Yd("selectionchange",!1,e))}}function JE(t,e,n,r){switch(LE(e)){case 1:var i=lk;break;case 4:i=ck;break;default:i=Em}n=i.bind(null,e,n,t),i=void 0,!$f||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Xd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Hi(a),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}a=a.parentNode}}r=r.return}EE(function(){var u=s,f=ym(n),p=[];e:{var m=YE.get(t);if(m!==void 0){var v=Sm,I=t;switch(t){case"keypress":if(ru(n)===0)break e;case"keydown":case"keyup":v=Ik;break;case"focusin":I="focus",v=$d;break;case"focusout":I="blur",v=$d;break;case"beforeblur":case"afterblur":v=$d;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=H_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=dk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=kk;break;case HE:case GE:case KE:v=mk;break;case QE:v=Ak;break;case"scroll":v=uk;break;case"wheel":v=Nk;break;case"copy":case"cut":case"paste":v=yk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=K_}var S=(e&4)!==0,b=!S&&t==="scroll",w=S?m!==null?m+"Capture":null:m;S=[];for(var T=u,R;T!==null;){R=T;var P=R.stateNode;if(R.tag===5&&P!==null&&(R=P,w!==null&&(P=nl(T,w),P!=null&&S.push(cl(T,P,R)))),b)break;T=T.return}0<S.length&&(m=new v(m,I,null,n,f),p.push({event:m,listeners:S}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==zf&&(I=n.relatedTarget||n.fromElement)&&(Hi(I)||I[Cr]))break e;if((v||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,v?(I=n.relatedTarget||n.toElement,v=u,I=I?Hi(I):null,I!==null&&(b=_s(I),I!==b||I.tag!==5&&I.tag!==6)&&(I=null)):(v=null,I=u),v!==I)){if(S=H_,P="onMouseLeave",w="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(S=K_,P="onPointerLeave",w="onPointerEnter",T="pointer"),b=v==null?m:Bs(v),R=I==null?m:Bs(I),m=new S(P,T+"leave",v,n,f),m.target=b,m.relatedTarget=R,P=null,Hi(f)===u&&(S=new S(w,T+"enter",I,n,f),S.target=R,S.relatedTarget=b,P=S),b=P,v&&I)t:{for(S=v,w=I,T=0,R=S;R;R=Ps(R))T++;for(R=0,P=w;P;P=Ps(P))R++;for(;0<T-R;)S=Ps(S),T--;for(;0<R-T;)w=Ps(w),R--;for(;T--;){if(S===w||w!==null&&S===w.alternate)break t;S=Ps(S),w=Ps(w)}S=null}else S=null;v!==null&&sv(p,m,v,S,!1),I!==null&&b!==null&&sv(p,b,I,S,!0)}}e:{if(m=u?Bs(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var M=Vk;else if(X_(m))if(BE)M=zk;else{M=Uk;var D=Fk}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=Bk);if(M&&(M=M(t,u))){UE(p,M,n,f);break e}D&&D(t,m,u),t==="focusout"&&(D=m._wrapperState)&&D.controlled&&m.type==="number"&&Mf(m,"number",m.value)}switch(D=u?Bs(u):window,t){case"focusin":(X_(D)||D.contentEditable==="true")&&(Fs=D,Qf=u,Va=null);break;case"focusout":Va=Qf=Fs=null;break;case"mousedown":Yf=!0;break;case"contextmenu":case"mouseup":case"dragend":Yf=!1,nv(p,n,f);break;case"selectionchange":if(qk)break;case"keydown":case"keyup":nv(p,n,f)}var E;if(Cm)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Vs?VE(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(ME&&n.locale!=="ko"&&(Vs||_!=="onCompositionStart"?_==="onCompositionEnd"&&Vs&&(E=jE()):(ti=f,Tm="value"in ti?ti.value:ti.textContent,Vs=!0)),D=Ru(u,_),0<D.length&&(_=new G_(_,t,null,n,f),p.push({event:_,listeners:D}),E?_.data=E:(E=FE(n),E!==null&&(_.data=E)))),(E=Dk?Ok(t,n):Lk(t,n))&&(u=Ru(u,"onBeforeInput"),0<u.length&&(f=new G_("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=E))}XE(p,e)})}function cl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ru(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=nl(t,n),s!=null&&r.unshift(cl(t,s,i)),s=nl(t,e),s!=null&&r.push(cl(t,s,i))),t=t.return}return r}function Ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,i?(c=nl(n,s),c!=null&&o.unshift(cl(n,c,a))):i||(c=nl(n,s),c!=null&&o.push(cl(n,c,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Qk=/\r\n?/g,Yk=/\u0000|\uFFFD/g;function ov(t){return(typeof t=="string"?t:""+t).replace(Qk,`
`).replace(Yk,"")}function jc(t,e,n){if(e=ov(e),ov(t)!==e&&n)throw Error(z(425))}function Au(){}var Xf=null,Jf=null;function Zf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ep=typeof setTimeout=="function"?setTimeout:void 0,Xk=typeof clearTimeout=="function"?clearTimeout:void 0,av=typeof Promise=="function"?Promise:void 0,Jk=typeof queueMicrotask=="function"?queueMicrotask:typeof av<"u"?function(t){return av.resolve(null).then(t).catch(Zk)}:ep;function Zk(t){setTimeout(function(){throw t})}function Jd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),sl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);sl(e)}function ai(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var No=Math.random().toString(36).slice(2),Qn="__reactFiber$"+No,ul="__reactProps$"+No,Cr="__reactContainer$"+No,tp="__reactEvents$"+No,eR="__reactListeners$"+No,tR="__reactHandles$"+No;function Hi(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cr]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lv(t);t!==null;){if(n=t[Qn])return n;t=lv(t)}return e}t=n,n=t.parentNode}return null}function Ul(t){return t=t[Qn]||t[Cr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Ph(t){return t[ul]||null}var np=[],zs=-1;function Ri(t){return{current:t}}function Fe(t){0>zs||(t.current=np[zs],np[zs]=null,zs--)}function Le(t,e){zs++,np[zs]=t.current,t.current=e}var vi={},Mt=Ri(vi),tn=Ri(!1),ts=vi;function fo(t,e){var n=t.type.contextTypes;if(!n)return vi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nn(t){return t=t.childContextTypes,t!=null}function Pu(){Fe(tn),Fe(Mt)}function cv(t,e,n){if(Mt.current!==vi)throw Error(z(168));Le(Mt,e),Le(tn,n)}function ZE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,F1(t)||"Unknown",i));return $e({},n,r)}function Nu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vi,ts=Mt.current,Le(Mt,t),Le(tn,tn.current),!0}function uv(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=ZE(t,e,ts),r.__reactInternalMemoizedMergedChildContext=t,Fe(tn),Fe(Mt),Le(Mt,t)):Fe(tn),Le(tn,n)}var pr=null,Nh=!1,Zd=!1;function eT(t){pr===null?pr=[t]:pr.push(t)}function nR(t){Nh=!0,eT(t)}function Ai(){if(!Zd&&pr!==null){Zd=!0;var t=0,e=Re;try{var n=pr;for(Re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}pr=null,Nh=!1}catch(i){throw pr!==null&&(pr=pr.slice(t+1)),CE(_m,Ai),i}finally{Re=e,Zd=!1}}return null}var Ws=[],$s=0,bu=null,Du=0,En=[],Tn=0,ns=null,mr=1,gr="";function zi(t,e){Ws[$s++]=Du,Ws[$s++]=bu,bu=t,Du=e}function tT(t,e,n){En[Tn++]=mr,En[Tn++]=gr,En[Tn++]=ns,ns=t;var r=mr;t=gr;var i=32-Mn(r)-1;r&=~(1<<i),n+=1;var s=32-Mn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mr=1<<32-Mn(e)+i|n<<i|r,gr=s+t}else mr=1<<s|n<<i|r,gr=t}function km(t){t.return!==null&&(zi(t,1),tT(t,1,0))}function Rm(t){for(;t===bu;)bu=Ws[--$s],Ws[$s]=null,Du=Ws[--$s],Ws[$s]=null;for(;t===ns;)ns=En[--Tn],En[Tn]=null,gr=En[--Tn],En[Tn]=null,mr=En[--Tn],En[Tn]=null}var pn=null,dn=null,Ue=!1,Dn=null;function nT(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,dn=ai(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ns!==null?{id:mr,overflow:gr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,dn=null,!0):!1;default:return!1}}function rp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ip(t){if(Ue){var e=dn;if(e){var n=e;if(!hv(t,e)){if(rp(t))throw Error(z(418));e=ai(n.nextSibling);var r=pn;e&&hv(t,e)?nT(r,n):(t.flags=t.flags&-4097|2,Ue=!1,pn=t)}}else{if(rp(t))throw Error(z(418));t.flags=t.flags&-4097|2,Ue=!1,pn=t}}}function dv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function Mc(t){if(t!==pn)return!1;if(!Ue)return dv(t),Ue=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zf(t.type,t.memoizedProps)),e&&(e=dn)){if(rp(t))throw rT(),Error(z(418));for(;e;)nT(t,e),e=ai(e.nextSibling)}if(dv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dn=ai(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dn=null}}else dn=pn?ai(t.stateNode.nextSibling):null;return!0}function rT(){for(var t=dn;t;)t=ai(t.nextSibling)}function po(){dn=pn=null,Ue=!1}function Am(t){Dn===null?Dn=[t]:Dn.push(t)}var rR=Or.ReactCurrentBatchConfig;function ma(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Vc(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fv(t){var e=t._init;return e(t._payload)}function iT(t){function e(w,T){if(t){var R=w.deletions;R===null?(w.deletions=[T],w.flags|=16):R.push(T)}}function n(w,T){if(!t)return null;for(;T!==null;)e(w,T),T=T.sibling;return null}function r(w,T){for(w=new Map;T!==null;)T.key!==null?w.set(T.key,T):w.set(T.index,T),T=T.sibling;return w}function i(w,T){return w=hi(w,T),w.index=0,w.sibling=null,w}function s(w,T,R){return w.index=R,t?(R=w.alternate,R!==null?(R=R.index,R<T?(w.flags|=2,T):R):(w.flags|=2,T)):(w.flags|=1048576,T)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,T,R,P){return T===null||T.tag!==6?(T=af(R,w.mode,P),T.return=w,T):(T=i(T,R),T.return=w,T)}function c(w,T,R,P){var M=R.type;return M===Ms?f(w,T,R.props.children,P,R.key):T!==null&&(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Hr&&fv(M)===T.type)?(P=i(T,R.props),P.ref=ma(w,T,R),P.return=w,P):(P=uu(R.type,R.key,R.props,null,w.mode,P),P.ref=ma(w,T,R),P.return=w,P)}function u(w,T,R,P){return T===null||T.tag!==4||T.stateNode.containerInfo!==R.containerInfo||T.stateNode.implementation!==R.implementation?(T=lf(R,w.mode,P),T.return=w,T):(T=i(T,R.children||[]),T.return=w,T)}function f(w,T,R,P,M){return T===null||T.tag!==7?(T=Zi(R,w.mode,P,M),T.return=w,T):(T=i(T,R),T.return=w,T)}function p(w,T,R){if(typeof T=="string"&&T!==""||typeof T=="number")return T=af(""+T,w.mode,R),T.return=w,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case kc:return R=uu(T.type,T.key,T.props,null,w.mode,R),R.ref=ma(w,null,T),R.return=w,R;case js:return T=lf(T,w.mode,R),T.return=w,T;case Hr:var P=T._init;return p(w,P(T._payload),R)}if(Ca(T)||ua(T))return T=Zi(T,w.mode,R,null),T.return=w,T;Vc(w,T)}return null}function m(w,T,R,P){var M=T!==null?T.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return M!==null?null:a(w,T,""+R,P);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case kc:return R.key===M?c(w,T,R,P):null;case js:return R.key===M?u(w,T,R,P):null;case Hr:return M=R._init,m(w,T,M(R._payload),P)}if(Ca(R)||ua(R))return M!==null?null:f(w,T,R,P,null);Vc(w,R)}return null}function v(w,T,R,P,M){if(typeof P=="string"&&P!==""||typeof P=="number")return w=w.get(R)||null,a(T,w,""+P,M);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case kc:return w=w.get(P.key===null?R:P.key)||null,c(T,w,P,M);case js:return w=w.get(P.key===null?R:P.key)||null,u(T,w,P,M);case Hr:var D=P._init;return v(w,T,R,D(P._payload),M)}if(Ca(P)||ua(P))return w=w.get(R)||null,f(T,w,P,M,null);Vc(T,P)}return null}function I(w,T,R,P){for(var M=null,D=null,E=T,_=T=0,C=null;E!==null&&_<R.length;_++){E.index>_?(C=E,E=null):C=E.sibling;var k=m(w,E,R[_],P);if(k===null){E===null&&(E=C);break}t&&E&&k.alternate===null&&e(w,E),T=s(k,T,_),D===null?M=k:D.sibling=k,D=k,E=C}if(_===R.length)return n(w,E),Ue&&zi(w,_),M;if(E===null){for(;_<R.length;_++)E=p(w,R[_],P),E!==null&&(T=s(E,T,_),D===null?M=E:D.sibling=E,D=E);return Ue&&zi(w,_),M}for(E=r(w,E);_<R.length;_++)C=v(E,w,_,R[_],P),C!==null&&(t&&C.alternate!==null&&E.delete(C.key===null?_:C.key),T=s(C,T,_),D===null?M=C:D.sibling=C,D=C);return t&&E.forEach(function(A){return e(w,A)}),Ue&&zi(w,_),M}function S(w,T,R,P){var M=ua(R);if(typeof M!="function")throw Error(z(150));if(R=M.call(R),R==null)throw Error(z(151));for(var D=M=null,E=T,_=T=0,C=null,k=R.next();E!==null&&!k.done;_++,k=R.next()){E.index>_?(C=E,E=null):C=E.sibling;var A=m(w,E,k.value,P);if(A===null){E===null&&(E=C);break}t&&E&&A.alternate===null&&e(w,E),T=s(A,T,_),D===null?M=A:D.sibling=A,D=A,E=C}if(k.done)return n(w,E),Ue&&zi(w,_),M;if(E===null){for(;!k.done;_++,k=R.next())k=p(w,k.value,P),k!==null&&(T=s(k,T,_),D===null?M=k:D.sibling=k,D=k);return Ue&&zi(w,_),M}for(E=r(w,E);!k.done;_++,k=R.next())k=v(E,w,_,k.value,P),k!==null&&(t&&k.alternate!==null&&E.delete(k.key===null?_:k.key),T=s(k,T,_),D===null?M=k:D.sibling=k,D=k);return t&&E.forEach(function(N){return e(w,N)}),Ue&&zi(w,_),M}function b(w,T,R,P){if(typeof R=="object"&&R!==null&&R.type===Ms&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case kc:e:{for(var M=R.key,D=T;D!==null;){if(D.key===M){if(M=R.type,M===Ms){if(D.tag===7){n(w,D.sibling),T=i(D,R.props.children),T.return=w,w=T;break e}}else if(D.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Hr&&fv(M)===D.type){n(w,D.sibling),T=i(D,R.props),T.ref=ma(w,D,R),T.return=w,w=T;break e}n(w,D);break}else e(w,D);D=D.sibling}R.type===Ms?(T=Zi(R.props.children,w.mode,P,R.key),T.return=w,w=T):(P=uu(R.type,R.key,R.props,null,w.mode,P),P.ref=ma(w,T,R),P.return=w,w=P)}return o(w);case js:e:{for(D=R.key;T!==null;){if(T.key===D)if(T.tag===4&&T.stateNode.containerInfo===R.containerInfo&&T.stateNode.implementation===R.implementation){n(w,T.sibling),T=i(T,R.children||[]),T.return=w,w=T;break e}else{n(w,T);break}else e(w,T);T=T.sibling}T=lf(R,w.mode,P),T.return=w,w=T}return o(w);case Hr:return D=R._init,b(w,T,D(R._payload),P)}if(Ca(R))return I(w,T,R,P);if(ua(R))return S(w,T,R,P);Vc(w,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,T!==null&&T.tag===6?(n(w,T.sibling),T=i(T,R),T.return=w,w=T):(n(w,T),T=af(R,w.mode,P),T.return=w,w=T),o(w)):n(w,T)}return b}var mo=iT(!0),sT=iT(!1),Ou=Ri(null),Lu=null,qs=null,Pm=null;function Nm(){Pm=qs=Lu=null}function bm(t){var e=Ou.current;Fe(Ou),t._currentValue=e}function sp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function no(t,e){Lu=t,Pm=qs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(Pm!==t)if(t={context:t,memoizedValue:e,next:null},qs===null){if(Lu===null)throw Error(z(308));qs=t,Lu.dependencies={lanes:0,firstContext:t}}else qs=qs.next=t;return e}var Gi=null;function Dm(t){Gi===null?Gi=[t]:Gi.push(t)}function oT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Dm(e)):(n.next=i.next,i.next=n),e.interleaved=n,xr(t,r)}function xr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gr=!1;function Om(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function aT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function li(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,_e&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,xr(t,n)}return i=r.interleaved,i===null?(e.next=e,Dm(r)):(e.next=i.next,i.next=e),r.interleaved=e,xr(t,n)}function iu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vm(t,n)}}function pv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ju(t,e,n,r){var i=t.updateQueue;Gr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;o=0,f=u=c=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=t,S=a;switch(m=e,v=n,S.tag){case 1:if(I=S.payload,typeof I=="function"){p=I.call(v,p,m);break e}p=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=S.payload,m=typeof I=="function"?I.call(v,p,m):I,m==null)break e;p=$e({},p,m);break e;case 2:Gr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=v,c=p):f=f.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);is|=o,t.lanes=o,t.memoizedState=p}}function mv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Bl={},Jn=Ri(Bl),hl=Ri(Bl),dl=Ri(Bl);function Ki(t){if(t===Bl)throw Error(z(174));return t}function Lm(t,e){switch(Le(dl,e),Le(hl,t),Le(Jn,Bl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ff(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ff(e,t)}Fe(Jn),Le(Jn,e)}function go(){Fe(Jn),Fe(hl),Fe(dl)}function lT(t){Ki(dl.current);var e=Ki(Jn.current),n=Ff(e,t.type);e!==n&&(Le(hl,t),Le(Jn,n))}function jm(t){hl.current===t&&(Fe(Jn),Fe(hl))}var ze=Ri(0);function Mu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ef=[];function Mm(){for(var t=0;t<ef.length;t++)ef[t]._workInProgressVersionPrimary=null;ef.length=0}var su=Or.ReactCurrentDispatcher,tf=Or.ReactCurrentBatchConfig,rs=0,We=null,at=null,ft=null,Vu=!1,Fa=!1,fl=0,iR=0;function Pt(){throw Error(z(321))}function Vm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Un(t[n],e[n]))return!1;return!0}function Fm(t,e,n,r,i,s){if(rs=s,We=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,su.current=t===null||t.memoizedState===null?lR:cR,t=n(r,i),Fa){s=0;do{if(Fa=!1,fl=0,25<=s)throw Error(z(301));s+=1,ft=at=null,e.updateQueue=null,su.current=uR,t=n(r,i)}while(Fa)}if(su.current=Fu,e=at!==null&&at.next!==null,rs=0,ft=at=We=null,Vu=!1,e)throw Error(z(300));return t}function Um(){var t=fl!==0;return fl=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?We.memoizedState=ft=t:ft=ft.next=t,ft}function xn(){if(at===null){var t=We.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var e=ft===null?We.memoizedState:ft.next;if(e!==null)ft=e,at=t;else{if(t===null)throw Error(z(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},ft===null?We.memoizedState=ft=t:ft=ft.next=t}return ft}function pl(t,e){return typeof e=="function"?e(t):e}function nf(t){var e=xn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=at,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,c=null,u=s;do{var f=u.lane;if((rs&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=p,o=r):c=c.next=p,We.lanes|=f,is|=f}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=a,Un(r,e.memoizedState)||(Jt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,We.lanes|=s,is|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rf(t){var e=xn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Un(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function cT(){}function uT(t,e){var n=We,r=xn(),i=e(),s=!Un(r.memoizedState,i);if(s&&(r.memoizedState=i,Jt=!0),r=r.queue,Bm(fT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ft!==null&&ft.memoizedState.tag&1){if(n.flags|=2048,ml(9,dT.bind(null,n,r,i,e),void 0,null),yt===null)throw Error(z(349));rs&30||hT(n,e,i)}return i}function hT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function dT(t,e,n,r){e.value=n,e.getSnapshot=r,pT(e)&&mT(t)}function fT(t,e,n){return n(function(){pT(e)&&mT(t)})}function pT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Un(t,n)}catch{return!0}}function mT(t){var e=xr(t,1);e!==null&&Vn(e,t,1,-1)}function gv(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:t},e.queue=t,t=t.dispatch=aR.bind(null,We,t),[e.memoizedState,t]}function ml(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function gT(){return xn().memoizedState}function ou(t,e,n,r){var i=Kn();We.flags|=t,i.memoizedState=ml(1|e,n,void 0,r===void 0?null:r)}function bh(t,e,n,r){var i=xn();r=r===void 0?null:r;var s=void 0;if(at!==null){var o=at.memoizedState;if(s=o.destroy,r!==null&&Vm(r,o.deps)){i.memoizedState=ml(e,n,s,r);return}}We.flags|=t,i.memoizedState=ml(1|e,n,s,r)}function yv(t,e){return ou(8390656,8,t,e)}function Bm(t,e){return bh(2048,8,t,e)}function yT(t,e){return bh(4,2,t,e)}function _T(t,e){return bh(4,4,t,e)}function vT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wT(t,e,n){return n=n!=null?n.concat([t]):null,bh(4,4,vT.bind(null,e,t),n)}function zm(){}function ET(t,e){var n=xn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function TT(t,e){var n=xn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ST(t,e,n){return rs&21?(Un(n,e)||(n=RE(),We.lanes|=n,is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function sR(t,e){var n=Re;Re=n!==0&&4>n?n:4,t(!0);var r=tf.transition;tf.transition={};try{t(!1),e()}finally{Re=n,tf.transition=r}}function IT(){return xn().memoizedState}function oR(t,e,n){var r=ui(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},CT(t))xT(e,n);else if(n=oT(t,e,n,r),n!==null){var i=Gt();Vn(n,t,r,i),kT(n,e,r)}}function aR(t,e,n){var r=ui(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(CT(t))xT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Un(a,o)){var c=e.interleaved;c===null?(i.next=i,Dm(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=oT(t,e,i,r),n!==null&&(i=Gt(),Vn(n,t,r,i),kT(n,e,r))}}function CT(t){var e=t.alternate;return t===We||e!==null&&e===We}function xT(t,e){Fa=Vu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vm(t,n)}}var Fu={readContext:Cn,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},lR={readContext:Cn,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:yv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ou(4194308,4,vT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ou(4194308,4,t,e)},useInsertionEffect:function(t,e){return ou(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=oR.bind(null,We,t),[r.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:gv,useDebugValue:zm,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=gv(!1),e=t[0];return t=sR.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=We,i=Kn();if(Ue){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),yt===null)throw Error(z(349));rs&30||hT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,yv(fT.bind(null,r,s,t),[t]),r.flags|=2048,ml(9,dT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=yt.identifierPrefix;if(Ue){var n=gr,r=mr;n=(r&~(1<<32-Mn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=fl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=iR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cR={readContext:Cn,useCallback:ET,useContext:Cn,useEffect:Bm,useImperativeHandle:wT,useInsertionEffect:yT,useLayoutEffect:_T,useMemo:TT,useReducer:nf,useRef:gT,useState:function(){return nf(pl)},useDebugValue:zm,useDeferredValue:function(t){var e=xn();return ST(e,at.memoizedState,t)},useTransition:function(){var t=nf(pl)[0],e=xn().memoizedState;return[t,e]},useMutableSource:cT,useSyncExternalStore:uT,useId:IT,unstable_isNewReconciler:!1},uR={readContext:Cn,useCallback:ET,useContext:Cn,useEffect:Bm,useImperativeHandle:wT,useInsertionEffect:yT,useLayoutEffect:_T,useMemo:TT,useReducer:rf,useRef:gT,useState:function(){return rf(pl)},useDebugValue:zm,useDeferredValue:function(t){var e=xn();return at===null?e.memoizedState=t:ST(e,at.memoizedState,t)},useTransition:function(){var t=rf(pl)[0],e=xn().memoizedState;return[t,e]},useMutableSource:cT,useSyncExternalStore:uT,useId:IT,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=$e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function op(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:$e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dh={isMounted:function(t){return(t=t._reactInternals)?_s(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Gt(),i=ui(t),s=Er(r,i);s.payload=e,n!=null&&(s.callback=n),e=li(t,s,i),e!==null&&(Vn(e,t,i,r),iu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Gt(),i=ui(t),s=Er(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=li(t,s,i),e!==null&&(Vn(e,t,i,r),iu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),r=ui(t),i=Er(n,r);i.tag=2,e!=null&&(i.callback=e),e=li(t,i,r),e!==null&&(Vn(e,t,r,n),iu(e,t,r))}};function _v(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!al(n,r)||!al(i,s):!0}function RT(t,e,n){var r=!1,i=vi,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(i=nn(e)?ts:Mt.current,r=e.contextTypes,s=(r=r!=null)?fo(t,i):vi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function vv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Dh.enqueueReplaceState(e,e.state,null)}function ap(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Om(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Cn(s):(s=nn(e)?ts:Mt.current,i.context=fo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(op(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Dh.enqueueReplaceState(i,i.state,null),ju(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function yo(t,e){try{var n="",r=e;do n+=V1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function sf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hR=typeof WeakMap=="function"?WeakMap:Map;function AT(t,e,n){n=Er(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Bu||(Bu=!0,_p=r),lp(t,e)},n}function PT(t,e,n){n=Er(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){lp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lp(t,e),typeof r!="function"&&(ci===null?ci=new Set([this]):ci.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new hR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=CR.bind(null,t,e,n),e.then(t,t))}function Ev(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Er(-1,1),e.tag=2,li(n,e,1))),n.lanes|=1),t)}var dR=Or.ReactCurrentOwner,Jt=!1;function qt(t,e,n,r){e.child=t===null?sT(e,null,n,r):mo(e,t.child,n,r)}function Sv(t,e,n,r,i){n=n.render;var s=e.ref;return no(e,i),r=Fm(t,e,n,r,s,i),n=Um(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kr(t,e,i)):(Ue&&n&&km(e),e.flags|=1,qt(t,e,r,i),e.child)}function Iv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ym(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,NT(t,e,s,r,i)):(t=uu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:al,n(o,r)&&t.ref===e.ref)return kr(t,e,i)}return e.flags|=1,t=hi(s,r),t.ref=e.ref,t.return=e,e.child=t}function NT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(al(s,r)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,kr(t,e,i)}return cp(t,e,n,r,i)}function bT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(Gs,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Le(Gs,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Le(Gs,hn),hn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Le(Gs,hn),hn|=r;return qt(t,e,i,n),e.child}function DT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cp(t,e,n,r,i){var s=nn(n)?ts:Mt.current;return s=fo(e,s),no(e,i),n=Fm(t,e,n,r,s,i),r=Um(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kr(t,e,i)):(Ue&&r&&km(e),e.flags|=1,qt(t,e,n,i),e.child)}function Cv(t,e,n,r,i){if(nn(n)){var s=!0;Nu(e)}else s=!1;if(no(e,i),e.stateNode===null)au(t,e),RT(e,n,r),ap(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Cn(u):(u=nn(n)?ts:Mt.current,u=fo(e,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||c!==u)&&vv(e,o,r,u),Gr=!1;var m=e.memoizedState;o.state=m,ju(e,r,o,i),c=e.memoizedState,a!==r||m!==c||tn.current||Gr?(typeof f=="function"&&(op(e,n,f,r),c=e.memoizedState),(a=Gr||_v(e,n,a,r,m,c,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,aT(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Nn(e.type,a),o.props=u,p=e.pendingProps,m=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Cn(c):(c=nn(n)?ts:Mt.current,c=fo(e,c));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==c)&&vv(e,o,r,c),Gr=!1,m=e.memoizedState,o.state=m,ju(e,r,o,i);var I=e.memoizedState;a!==p||m!==I||tn.current||Gr?(typeof v=="function"&&(op(e,n,v,r),I=e.memoizedState),(u=Gr||_v(e,n,u,r,m,I,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),o.props=r,o.state=I,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return up(t,e,n,r,s,i)}function up(t,e,n,r,i,s){DT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&uv(e,n,!1),kr(t,e,s);r=e.stateNode,dR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=mo(e,t.child,null,s),e.child=mo(e,null,a,s)):qt(t,e,a,s),e.memoizedState=r.state,i&&uv(e,n,!0),e.child}function OT(t){var e=t.stateNode;e.pendingContext?cv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cv(t,e.context,!1),Lm(t,e.containerInfo)}function xv(t,e,n,r,i){return po(),Am(i),e.flags|=256,qt(t,e,n,r),e.child}var hp={dehydrated:null,treeContext:null,retryLane:0};function dp(t){return{baseLanes:t,cachePool:null,transitions:null}}function LT(t,e,n){var r=e.pendingProps,i=ze.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Le(ze,i&1),t===null)return ip(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=jh(o,r,0,null),t=Zi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=dp(n),e.memoizedState=hp,t):Wm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return fR(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=hi(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=hi(a,s):(s=Zi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?dp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hp,r}return s=t.child,t=s.sibling,r=hi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Wm(t,e){return e=jh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fc(t,e,n,r){return r!==null&&Am(r),mo(e,t.child,null,n),t=Wm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=sf(Error(z(422))),Fc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=jh({mode:"visible",children:r.children},i,0,null),s=Zi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&mo(e,t.child,null,o),e.child.memoizedState=dp(o),e.memoizedState=hp,s);if(!(e.mode&1))return Fc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=sf(s,r,void 0),Fc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Jt||a){if(r=yt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xr(t,i),Vn(r,t,i,-1))}return Qm(),r=sf(Error(z(421))),Fc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=xR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,dn=ai(i.nextSibling),pn=e,Ue=!0,Dn=null,t!==null&&(En[Tn++]=mr,En[Tn++]=gr,En[Tn++]=ns,mr=t.id,gr=t.overflow,ns=e),e=Wm(e,r.children),e.flags|=4096,e)}function kv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),sp(t.return,e,n)}function of(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function jT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(qt(t,e,r.children,n),r=ze.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kv(t,n,e);else if(t.tag===19)kv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Le(ze,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Mu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),of(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Mu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}of(e,!0,n,null,s);break;case"together":of(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function au(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=hi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pR(t,e,n){switch(e.tag){case 3:OT(e),po();break;case 5:lT(e);break;case 1:nn(e.type)&&Nu(e);break;case 4:Lm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Le(Ou,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Le(ze,ze.current&1),e.flags|=128,null):n&e.child.childLanes?LT(t,e,n):(Le(ze,ze.current&1),t=kr(t,e,n),t!==null?t.sibling:null);Le(ze,ze.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return jT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Le(ze,ze.current),r)break;return null;case 22:case 23:return e.lanes=0,bT(t,e,n)}return kr(t,e,n)}var MT,fp,VT,FT;MT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fp=function(){};VT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ki(Jn.current);var s=null;switch(n){case"input":i=Lf(t,i),r=Lf(t,r),s=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),s=[];break;case"textarea":i=Vf(t,i),r=Vf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Au)}Uf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(el.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(el.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Me("scroll",t),s||a===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};FT=function(t,e,n,r){n!==r&&(e.flags|=4)};function ga(t,e){if(!Ue)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function mR(t,e,n){var r=e.pendingProps;switch(Rm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return nn(e.type)&&Pu(),Nt(e),null;case 3:return r=e.stateNode,go(),Fe(tn),Fe(Mt),Mm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Mc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(Ep(Dn),Dn=null))),fp(t,e),Nt(e),null;case 5:jm(e);var i=Ki(dl.current);if(n=e.type,t!==null&&e.stateNode!=null)VT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return Nt(e),null}if(t=Ki(Jn.current),Mc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Qn]=e,r[ul]=s,t=(e.mode&1)!==0,n){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(i=0;i<ka.length;i++)Me(ka[i],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":j_(r,s),Me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Me("invalid",r);break;case"textarea":V_(r,s),Me("invalid",r)}Uf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&jc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&jc(r.textContent,a,t),i=["children",""+a]):el.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Me("scroll",r)}switch(n){case"input":Rc(r),M_(r,s,!0);break;case"textarea":Rc(r),F_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Au)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Qn]=e,t[ul]=r,MT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bf(n,r),n){case"dialog":Me("cancel",t),Me("close",t),i=r;break;case"iframe":case"object":case"embed":Me("load",t),i=r;break;case"video":case"audio":for(i=0;i<ka.length;i++)Me(ka[i],t);i=r;break;case"source":Me("error",t),i=r;break;case"img":case"image":case"link":Me("error",t),Me("load",t),i=r;break;case"details":Me("toggle",t),i=r;break;case"input":j_(t,r),i=Lf(t,r),Me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),Me("invalid",t);break;case"textarea":V_(t,r),i=Vf(t,r),Me("invalid",t);break;default:i=r}Uf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?gE(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&pE(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&tl(t,c):typeof c=="number"&&tl(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(el.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Me("scroll",t):c!=null&&fm(t,s,c,o))}switch(n){case"input":Rc(t),M_(t,r,!1);break;case"textarea":Rc(t),F_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_i(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Js(t,!!r.multiple,s,!1):r.defaultValue!=null&&Js(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Au)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nt(e),null;case 6:if(t&&e.stateNode!=null)FT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Ki(dl.current),Ki(Jn.current),Mc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qn]=e,(s=r.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:jc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&jc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qn]=e,e.stateNode=r}return Nt(e),null;case 13:if(Fe(ze),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ue&&dn!==null&&e.mode&1&&!(e.flags&128))rT(),po(),e.flags|=98560,s=!1;else if(s=Mc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[Qn]=e}else po(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Nt(e),s=!1}else Dn!==null&&(Ep(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ze.current&1?ct===0&&(ct=3):Qm())),e.updateQueue!==null&&(e.flags|=4),Nt(e),null);case 4:return go(),fp(t,e),t===null&&ll(e.stateNode.containerInfo),Nt(e),null;case 10:return bm(e.type._context),Nt(e),null;case 17:return nn(e.type)&&Pu(),Nt(e),null;case 19:if(Fe(ze),s=e.memoizedState,s===null)return Nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ga(s,!1);else{if(ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Mu(t),o!==null){for(e.flags|=128,ga(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Le(ze,ze.current&1|2),e.child}t=t.sibling}s.tail!==null&&Xe()>_o&&(e.flags|=128,r=!0,ga(s,!1),e.lanes=4194304)}else{if(!r)if(t=Mu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ga(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ue)return Nt(e),null}else 2*Xe()-s.renderingStartTime>_o&&n!==1073741824&&(e.flags|=128,r=!0,ga(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Xe(),e.sibling=null,n=ze.current,Le(ze,r?n&1|2:n&1),e):(Nt(e),null);case 22:case 23:return Km(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?hn&1073741824&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function gR(t,e){switch(Rm(e),e.tag){case 1:return nn(e.type)&&Pu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return go(),Fe(tn),Fe(Mt),Mm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jm(e),null;case 13:if(Fe(ze),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));po()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Fe(ze),null;case 4:return go(),null;case 10:return bm(e.type._context),null;case 22:case 23:return Km(),null;case 24:return null;default:return null}}var Uc=!1,Ot=!1,yR=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ge(t,e,r)}else n.current=null}function pp(t,e,n){try{n()}catch(r){Ge(t,e,r)}}var Rv=!1;function _R(t,e){if(Xf=xu,t=$E(),xm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,u=0,f=0,p=t,m=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(c=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===t)break t;if(m===n&&++u===i&&(a=o),m===s&&++f===r&&(c=o),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jf={focusedElem:t,selectionRange:n},xu=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var S=I.memoizedProps,b=I.memoizedState,w=e.stateNode,T=w.getSnapshotBeforeUpdate(e.elementType===e.type?S:Nn(e.type,S),b);w.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(P){Ge(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return I=Rv,Rv=!1,I}function Ua(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&pp(e,n,s)}i=i.next}while(i!==r)}}function Oh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function mp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function UT(t){var e=t.alternate;e!==null&&(t.alternate=null,UT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[ul],delete e[tp],delete e[eR],delete e[tR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function BT(t){return t.tag===5||t.tag===3||t.tag===4}function Av(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||BT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Au));else if(r!==4&&(t=t.child,t!==null))for(gp(t,e,n),t=t.sibling;t!==null;)gp(t,e,n),t=t.sibling}function yp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(yp(t,e,n),t=t.sibling;t!==null;)yp(t,e,n),t=t.sibling}var wt=null,bn=!1;function $r(t,e,n){for(n=n.child;n!==null;)zT(t,e,n),n=n.sibling}function zT(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(xh,n)}catch{}switch(n.tag){case 5:Ot||Hs(n,e);case 6:var r=wt,i=bn;wt=null,$r(t,e,n),wt=r,bn=i,wt!==null&&(bn?(t=wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):wt.removeChild(n.stateNode));break;case 18:wt!==null&&(bn?(t=wt,n=n.stateNode,t.nodeType===8?Jd(t.parentNode,n):t.nodeType===1&&Jd(t,n),sl(t)):Jd(wt,n.stateNode));break;case 4:r=wt,i=bn,wt=n.stateNode.containerInfo,bn=!0,$r(t,e,n),wt=r,bn=i;break;case 0:case 11:case 14:case 15:if(!Ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&pp(n,e,o),i=i.next}while(i!==r)}$r(t,e,n);break;case 1:if(!Ot&&(Hs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ge(n,e,a)}$r(t,e,n);break;case 21:$r(t,e,n);break;case 22:n.mode&1?(Ot=(r=Ot)||n.memoizedState!==null,$r(t,e,n),Ot=r):$r(t,e,n);break;default:$r(t,e,n)}}function Pv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new yR),e.forEach(function(r){var i=kR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:wt=a.stateNode,bn=!1;break e;case 3:wt=a.stateNode.containerInfo,bn=!0;break e;case 4:wt=a.stateNode.containerInfo,bn=!0;break e}a=a.return}if(wt===null)throw Error(z(160));zT(s,o,i),wt=null,bn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ge(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)WT(e,t),e=e.sibling}function WT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),Gn(t),r&4){try{Ua(3,t,t.return),Oh(3,t)}catch(S){Ge(t,t.return,S)}try{Ua(5,t,t.return)}catch(S){Ge(t,t.return,S)}}break;case 1:An(e,t),Gn(t),r&512&&n!==null&&Hs(n,n.return);break;case 5:if(An(e,t),Gn(t),r&512&&n!==null&&Hs(n,n.return),t.flags&32){var i=t.stateNode;try{tl(i,"")}catch(S){Ge(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&hE(i,s),Bf(a,o);var u=Bf(a,s);for(o=0;o<c.length;o+=2){var f=c[o],p=c[o+1];f==="style"?gE(i,p):f==="dangerouslySetInnerHTML"?pE(i,p):f==="children"?tl(i,p):fm(i,f,p,u)}switch(a){case"input":jf(i,s);break;case"textarea":dE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Js(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?Js(i,!!s.multiple,s.defaultValue,!0):Js(i,!!s.multiple,s.multiple?[]:"",!1))}i[ul]=s}catch(S){Ge(t,t.return,S)}}break;case 6:if(An(e,t),Gn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(S){Ge(t,t.return,S)}}break;case 3:if(An(e,t),Gn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sl(e.containerInfo)}catch(S){Ge(t,t.return,S)}break;case 4:An(e,t),Gn(t);break;case 13:An(e,t),Gn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Hm=Xe())),r&4&&Pv(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(u=Ot)||f,An(e,t),Ot=u):An(e,t),Gn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(Y=t,f=t.child;f!==null;){for(p=Y=f;Y!==null;){switch(m=Y,v=m.child,m.tag){case 0:case 11:case 14:case 15:Ua(4,m,m.return);break;case 1:Hs(m,m.return);var I=m.stateNode;if(typeof I.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(S){Ge(r,n,S)}}break;case 5:Hs(m,m.return);break;case 22:if(m.memoizedState!==null){bv(p);continue}}v!==null?(v.return=m,Y=v):bv(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=mE("display",o))}catch(S){Ge(t,t.return,S)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(S){Ge(t,t.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:An(e,t),Gn(t),r&4&&Pv(t);break;case 21:break;default:An(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(BT(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(tl(i,""),r.flags&=-33);var s=Av(t);yp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Av(t);gp(t,a,o);break;default:throw Error(z(161))}}catch(c){Ge(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vR(t,e,n){Y=t,$T(t)}function $T(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var i=Y,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Uc;if(!o){var a=i.alternate,c=a!==null&&a.memoizedState!==null||Ot;a=Uc;var u=Ot;if(Uc=o,(Ot=c)&&!u)for(Y=i;Y!==null;)o=Y,c=o.child,o.tag===22&&o.memoizedState!==null?Dv(i):c!==null?(c.return=o,Y=c):Dv(i);for(;s!==null;)Y=s,$T(s),s=s.sibling;Y=i,Uc=a,Ot=u}Nv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Y=s):Nv(t)}}function Nv(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Oh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&sl(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Ot||e.flags&512&&mp(e)}catch(m){Ge(e,e.return,m)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function bv(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function Dv(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Oh(4,e)}catch(c){Ge(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){Ge(e,i,c)}}var s=e.return;try{mp(e)}catch(c){Ge(e,s,c)}break;case 5:var o=e.return;try{mp(e)}catch(c){Ge(e,o,c)}}}catch(c){Ge(e,e.return,c)}if(e===t){Y=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Y=a;break}Y=e.return}}var wR=Math.ceil,Uu=Or.ReactCurrentDispatcher,$m=Or.ReactCurrentOwner,In=Or.ReactCurrentBatchConfig,_e=0,yt=null,et=null,St=0,hn=0,Gs=Ri(0),ct=0,gl=null,is=0,Lh=0,qm=0,Ba=null,Xt=null,Hm=0,_o=1/0,fr=null,Bu=!1,_p=null,ci=null,Bc=!1,ni=null,zu=0,za=0,vp=null,lu=-1,cu=0;function Gt(){return _e&6?Xe():lu!==-1?lu:lu=Xe()}function ui(t){return t.mode&1?_e&2&&St!==0?St&-St:rR.transition!==null?(cu===0&&(cu=RE()),cu):(t=Re,t!==0||(t=window.event,t=t===void 0?16:LE(t.type)),t):1}function Vn(t,e,n,r){if(50<za)throw za=0,vp=null,Error(z(185));Vl(t,n,r),(!(_e&2)||t!==yt)&&(t===yt&&(!(_e&2)&&(Lh|=n),ct===4&&Qr(t,St)),rn(t,r),n===1&&_e===0&&!(e.mode&1)&&(_o=Xe()+500,Nh&&Ai()))}function rn(t,e){var n=t.callbackNode;rk(t,e);var r=Cu(t,t===yt?St:0);if(r===0)n!==null&&z_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&z_(n),e===1)t.tag===0?nR(Ov.bind(null,t)):eT(Ov.bind(null,t)),Jk(function(){!(_e&6)&&Ai()}),n=null;else{switch(AE(r)){case 1:n=_m;break;case 4:n=xE;break;case 16:n=Iu;break;case 536870912:n=kE;break;default:n=Iu}n=JT(n,qT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qT(t,e){if(lu=-1,cu=0,_e&6)throw Error(z(327));var n=t.callbackNode;if(ro()&&t.callbackNode!==n)return null;var r=Cu(t,t===yt?St:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Wu(t,r);else{e=r;var i=_e;_e|=2;var s=GT();(yt!==t||St!==e)&&(fr=null,_o=Xe()+500,Ji(t,e));do try{SR();break}catch(a){HT(t,a)}while(!0);Nm(),Uu.current=s,_e=i,et!==null?e=0:(yt=null,St=0,e=ct)}if(e!==0){if(e===2&&(i=Hf(t),i!==0&&(r=i,e=wp(t,i))),e===1)throw n=gl,Ji(t,0),Qr(t,r),rn(t,Xe()),n;if(e===6)Qr(t,r);else{if(i=t.current.alternate,!(r&30)&&!ER(i)&&(e=Wu(t,r),e===2&&(s=Hf(t),s!==0&&(r=s,e=wp(t,s))),e===1))throw n=gl,Ji(t,0),Qr(t,r),rn(t,Xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Wi(t,Xt,fr);break;case 3:if(Qr(t,r),(r&130023424)===r&&(e=Hm+500-Xe(),10<e)){if(Cu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ep(Wi.bind(null,t,Xt,fr),e);break}Wi(t,Xt,fr);break;case 4:if(Qr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Mn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wR(r/1960))-r,10<r){t.timeoutHandle=ep(Wi.bind(null,t,Xt,fr),r);break}Wi(t,Xt,fr);break;case 5:Wi(t,Xt,fr);break;default:throw Error(z(329))}}}return rn(t,Xe()),t.callbackNode===n?qT.bind(null,t):null}function wp(t,e){var n=Ba;return t.current.memoizedState.isDehydrated&&(Ji(t,e).flags|=256),t=Wu(t,e),t!==2&&(e=Xt,Xt=n,e!==null&&Ep(e)),t}function Ep(t){Xt===null?Xt=t:Xt.push.apply(Xt,t)}function ER(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Un(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qr(t,e){for(e&=~qm,e&=~Lh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mn(e),r=1<<n;t[n]=-1,e&=~r}}function Ov(t){if(_e&6)throw Error(z(327));ro();var e=Cu(t,0);if(!(e&1))return rn(t,Xe()),null;var n=Wu(t,e);if(t.tag!==0&&n===2){var r=Hf(t);r!==0&&(e=r,n=wp(t,r))}if(n===1)throw n=gl,Ji(t,0),Qr(t,e),rn(t,Xe()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wi(t,Xt,fr),rn(t,Xe()),null}function Gm(t,e){var n=_e;_e|=1;try{return t(e)}finally{_e=n,_e===0&&(_o=Xe()+500,Nh&&Ai())}}function ss(t){ni!==null&&ni.tag===0&&!(_e&6)&&ro();var e=_e;_e|=1;var n=In.transition,r=Re;try{if(In.transition=null,Re=1,t)return t()}finally{Re=r,In.transition=n,_e=e,!(_e&6)&&Ai()}}function Km(){hn=Gs.current,Fe(Gs)}function Ji(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Xk(n)),et!==null)for(n=et.return;n!==null;){var r=n;switch(Rm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pu();break;case 3:go(),Fe(tn),Fe(Mt),Mm();break;case 5:jm(r);break;case 4:go();break;case 13:Fe(ze);break;case 19:Fe(ze);break;case 10:bm(r.type._context);break;case 22:case 23:Km()}n=n.return}if(yt=t,et=t=hi(t.current,null),St=hn=e,ct=0,gl=null,qm=Lh=is=0,Xt=Ba=null,Gi!==null){for(e=0;e<Gi.length;e++)if(n=Gi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Gi=null}return t}function HT(t,e){do{var n=et;try{if(Nm(),su.current=Fu,Vu){for(var r=We.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vu=!1}if(rs=0,ft=at=We=null,Fa=!1,fl=0,$m.current=null,n===null||n.return===null){ct=1,gl=e,et=null;break}e:{var s=t,o=n.return,a=n,c=e;if(e=St,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Ev(o);if(v!==null){v.flags&=-257,Tv(v,o,a,s,e),v.mode&1&&wv(s,u,e),e=v,c=u;var I=e.updateQueue;if(I===null){var S=new Set;S.add(c),e.updateQueue=S}else I.add(c);break e}else{if(!(e&1)){wv(s,u,e),Qm();break e}c=Error(z(426))}}else if(Ue&&a.mode&1){var b=Ev(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Tv(b,o,a,s,e),Am(yo(c,a));break e}}s=c=yo(c,a),ct!==4&&(ct=2),Ba===null?Ba=[s]:Ba.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=AT(s,c,e);pv(s,w);break e;case 1:a=c;var T=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(ci===null||!ci.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var P=PT(s,a,e);pv(s,P);break e}}s=s.return}while(s!==null)}QT(n)}catch(M){e=M,et===n&&n!==null&&(et=n=n.return);continue}break}while(!0)}function GT(){var t=Uu.current;return Uu.current=Fu,t===null?Fu:t}function Qm(){(ct===0||ct===3||ct===2)&&(ct=4),yt===null||!(is&268435455)&&!(Lh&268435455)||Qr(yt,St)}function Wu(t,e){var n=_e;_e|=2;var r=GT();(yt!==t||St!==e)&&(fr=null,Ji(t,e));do try{TR();break}catch(i){HT(t,i)}while(!0);if(Nm(),_e=n,Uu.current=r,et!==null)throw Error(z(261));return yt=null,St=0,ct}function TR(){for(;et!==null;)KT(et)}function SR(){for(;et!==null&&!K1();)KT(et)}function KT(t){var e=XT(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?QT(t):et=e,$m.current=null}function QT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gR(n,e),n!==null){n.flags&=32767,et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ct=6,et=null;return}}else if(n=mR(n,e,hn),n!==null){et=n;return}if(e=e.sibling,e!==null){et=e;return}et=e=t}while(e!==null);ct===0&&(ct=5)}function Wi(t,e,n){var r=Re,i=In.transition;try{In.transition=null,Re=1,IR(t,e,n,r)}finally{In.transition=i,Re=r}return null}function IR(t,e,n,r){do ro();while(ni!==null);if(_e&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ik(t,s),t===yt&&(et=yt=null,St=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bc||(Bc=!0,JT(Iu,function(){return ro(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=Re;Re=1;var a=_e;_e|=4,$m.current=null,_R(t,n),WT(n,t),$k(Jf),xu=!!Xf,Jf=Xf=null,t.current=n,vR(n),Q1(),_e=a,Re=o,In.transition=s}else t.current=n;if(Bc&&(Bc=!1,ni=t,zu=i),s=t.pendingLanes,s===0&&(ci=null),J1(n.stateNode),rn(t,Xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bu)throw Bu=!1,t=_p,_p=null,t;return zu&1&&t.tag!==0&&ro(),s=t.pendingLanes,s&1?t===vp?za++:(za=0,vp=t):za=0,Ai(),null}function ro(){if(ni!==null){var t=AE(zu),e=In.transition,n=Re;try{if(In.transition=null,Re=16>t?16:t,ni===null)var r=!1;else{if(t=ni,ni=null,zu=0,_e&6)throw Error(z(331));var i=_e;for(_e|=4,Y=t.current;Y!==null;){var s=Y,o=s.child;if(Y.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(Y=u;Y!==null;){var f=Y;switch(f.tag){case 0:case 11:case 15:Ua(8,f,s)}var p=f.child;if(p!==null)p.return=f,Y=p;else for(;Y!==null;){f=Y;var m=f.sibling,v=f.return;if(UT(f),f===u){Y=null;break}if(m!==null){m.return=v,Y=m;break}Y=v}}}var I=s.alternate;if(I!==null){var S=I.child;if(S!==null){I.child=null;do{var b=S.sibling;S.sibling=null,S=b}while(S!==null)}}Y=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Y=o;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ua(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,Y=w;break e}Y=s.return}}var T=t.current;for(Y=T;Y!==null;){o=Y;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,Y=R;else e:for(o=T;Y!==null;){if(a=Y,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Oh(9,a)}}catch(M){Ge(a,a.return,M)}if(a===o){Y=null;break e}var P=a.sibling;if(P!==null){P.return=a.return,Y=P;break e}Y=a.return}}if(_e=i,Ai(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(xh,t)}catch{}r=!0}return r}finally{Re=n,In.transition=e}}return!1}function Lv(t,e,n){e=yo(n,e),e=AT(t,e,1),t=li(t,e,1),e=Gt(),t!==null&&(Vl(t,1,e),rn(t,e))}function Ge(t,e,n){if(t.tag===3)Lv(t,t,n);else for(;e!==null;){if(e.tag===3){Lv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ci===null||!ci.has(r))){t=yo(n,t),t=PT(e,t,1),e=li(e,t,1),t=Gt(),e!==null&&(Vl(e,1,t),rn(e,t));break}}e=e.return}}function CR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,yt===t&&(St&n)===n&&(ct===4||ct===3&&(St&130023424)===St&&500>Xe()-Hm?Ji(t,0):qm|=n),rn(t,e)}function YT(t,e){e===0&&(t.mode&1?(e=Nc,Nc<<=1,!(Nc&130023424)&&(Nc=4194304)):e=1);var n=Gt();t=xr(t,e),t!==null&&(Vl(t,e,n),rn(t,n))}function xR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),YT(t,n)}function kR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),YT(t,n)}var XT;XT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,pR(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,Ue&&e.flags&1048576&&tT(e,Du,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;au(t,e),t=e.pendingProps;var i=fo(e,Mt.current);no(e,n),i=Fm(null,e,r,t,i,n);var s=Um();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(r)?(s=!0,Nu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Om(e),i.updater=Dh,e.stateNode=i,i._reactInternals=e,ap(e,r,t,n),e=up(null,e,r,!0,s,n)):(e.tag=0,Ue&&s&&km(e),qt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(au(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=AR(r),t=Nn(r,t),i){case 0:e=cp(null,e,r,t,n);break e;case 1:e=Cv(null,e,r,t,n);break e;case 11:e=Sv(null,e,r,t,n);break e;case 14:e=Iv(null,e,r,Nn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),cp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),Cv(t,e,r,i,n);case 3:e:{if(OT(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,aT(t,e),ju(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=yo(Error(z(423)),e),e=xv(t,e,r,n,i);break e}else if(r!==i){i=yo(Error(z(424)),e),e=xv(t,e,r,n,i);break e}else for(dn=ai(e.stateNode.containerInfo.firstChild),pn=e,Ue=!0,Dn=null,n=sT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(po(),r===i){e=kr(t,e,n);break e}qt(t,e,r,n)}e=e.child}return e;case 5:return lT(e),t===null&&ip(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Zf(r,i)?o=null:s!==null&&Zf(r,s)&&(e.flags|=32),DT(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&ip(e),null;case 13:return LT(t,e,n);case 4:return Lm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=mo(e,null,r,n):qt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),Sv(t,e,r,i,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Le(Ou,r._currentValue),r._currentValue=o,s!==null)if(Un(s.value,o)){if(s.children===i.children&&!tn.current){e=kr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Er(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),sp(s.return,n,e),a.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),sp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,no(e,n),i=Cn(i),r=r(i),e.flags|=1,qt(t,e,r,n),e.child;case 14:return r=e.type,i=Nn(r,e.pendingProps),i=Nn(r.type,i),Iv(t,e,r,i,n);case 15:return NT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),au(t,e),e.tag=1,nn(r)?(t=!0,Nu(e)):t=!1,no(e,n),RT(e,r,i),ap(e,r,i,n),up(null,e,r,!0,t,n);case 19:return jT(t,e,n);case 22:return bT(t,e,n)}throw Error(z(156,e.tag))};function JT(t,e){return CE(t,e)}function RR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,r){return new RR(t,e,n,r)}function Ym(t){return t=t.prototype,!(!t||!t.isReactComponent)}function AR(t){if(typeof t=="function")return Ym(t)?1:0;if(t!=null){if(t=t.$$typeof,t===mm)return 11;if(t===gm)return 14}return 2}function hi(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function uu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ym(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ms:return Zi(n.children,i,s,e);case pm:o=8,i|=8;break;case Nf:return t=Sn(12,n,e,i|2),t.elementType=Nf,t.lanes=s,t;case bf:return t=Sn(13,n,e,i),t.elementType=bf,t.lanes=s,t;case Df:return t=Sn(19,n,e,i),t.elementType=Df,t.lanes=s,t;case lE:return jh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case oE:o=10;break e;case aE:o=9;break e;case mm:o=11;break e;case gm:o=14;break e;case Hr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=Sn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Zi(t,e,n,r){return t=Sn(7,t,r,e),t.lanes=n,t}function jh(t,e,n,r){return t=Sn(22,t,r,e),t.elementType=lE,t.lanes=n,t.stateNode={isHidden:!1},t}function af(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function lf(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function PR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bd(0),this.expirationTimes=Bd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xm(t,e,n,r,i,s,o,a,c){return t=new PR(t,e,n,a,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Om(s),t}function NR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:js,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ZT(t){if(!t)return vi;t=t._reactInternals;e:{if(_s(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(nn(n))return ZE(t,n,e)}return e}function eS(t,e,n,r,i,s,o,a,c){return t=Xm(n,r,!0,t,i,s,o,a,c),t.context=ZT(null),n=t.current,r=Gt(),i=ui(n),s=Er(r,i),s.callback=e??null,li(n,s,i),t.current.lanes=i,Vl(t,i,r),rn(t,r),t}function Mh(t,e,n,r){var i=e.current,s=Gt(),o=ui(i);return n=ZT(n),e.context===null?e.context=n:e.pendingContext=n,e=Er(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=li(i,e,o),t!==null&&(Vn(t,i,o,s),iu(t,i,o)),o}function $u(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jm(t,e){jv(t,e),(t=t.alternate)&&jv(t,e)}function bR(){return null}var tS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zm(t){this._internalRoot=t}Vh.prototype.render=Zm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));Mh(t,e,null,null)};Vh.prototype.unmount=Zm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ss(function(){Mh(null,t,null,null)}),e[Cr]=null}};function Vh(t){this._internalRoot=t}Vh.prototype.unstable_scheduleHydration=function(t){if(t){var e=bE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kr.length&&e!==0&&e<Kr[n].priority;n++);Kr.splice(n,0,t),n===0&&OE(t)}};function eg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mv(){}function DR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=$u(o);s.call(u)}}var o=eS(e,r,t,0,null,!1,!1,"",Mv);return t._reactRootContainer=o,t[Cr]=o.current,ll(t.nodeType===8?t.parentNode:t),ss(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=$u(c);a.call(u)}}var c=Xm(t,0,!1,null,null,!1,!1,"",Mv);return t._reactRootContainer=c,t[Cr]=c.current,ll(t.nodeType===8?t.parentNode:t),ss(function(){Mh(e,c,n,r)}),c}function Uh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var c=$u(o);a.call(c)}}Mh(e,o,t,i)}else o=DR(n,e,t,i,r);return $u(o)}PE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xa(e.pendingLanes);n!==0&&(vm(e,n|1),rn(e,Xe()),!(_e&6)&&(_o=Xe()+500,Ai()))}break;case 13:ss(function(){var r=xr(t,1);if(r!==null){var i=Gt();Vn(r,t,1,i)}}),Jm(t,1)}};wm=function(t){if(t.tag===13){var e=xr(t,134217728);if(e!==null){var n=Gt();Vn(e,t,134217728,n)}Jm(t,134217728)}};NE=function(t){if(t.tag===13){var e=ui(t),n=xr(t,e);if(n!==null){var r=Gt();Vn(n,t,e,r)}Jm(t,e)}};bE=function(){return Re};DE=function(t,e){var n=Re;try{return Re=t,e()}finally{Re=n}};Wf=function(t,e,n){switch(e){case"input":if(jf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ph(r);if(!i)throw Error(z(90));uE(r),jf(r,i)}}}break;case"textarea":dE(t,n);break;case"select":e=n.value,e!=null&&Js(t,!!n.multiple,e,!1)}};vE=Gm;wE=ss;var OR={usingClientEntryPoint:!1,Events:[Ul,Bs,Ph,yE,_E,Gm]},ya={findFiberByHostInstance:Hi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},LR={bundleType:ya.bundleType,version:ya.version,rendererPackageName:ya.rendererPackageName,rendererConfig:ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=SE(t),t===null?null:t.stateNode},findFiberByHostInstance:ya.findFiberByHostInstance||bR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zc.isDisabled&&zc.supportsFiber)try{xh=zc.inject(LR),Xn=zc}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OR;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!eg(e))throw Error(z(200));return NR(t,e,null,n)};yn.createRoot=function(t,e){if(!eg(t))throw Error(z(299));var n=!1,r="",i=tS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Xm(t,1,!1,null,null,n,!1,r,i),t[Cr]=e.current,ll(t.nodeType===8?t.parentNode:t),new Zm(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=SE(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return ss(t)};yn.hydrate=function(t,e,n){if(!Fh(e))throw Error(z(200));return Uh(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!eg(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=tS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=eS(e,null,t,1,n??null,i,!1,s,o),t[Cr]=e.current,ll(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Vh(e)};yn.render=function(t,e,n){if(!Fh(e))throw Error(z(200));return Uh(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!Fh(t))throw Error(z(40));return t._reactRootContainer?(ss(function(){Uh(null,null,t,!1,function(){t._reactRootContainer=null,t[Cr]=null})}),!0):!1};yn.unstable_batchedUpdates=Gm;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Fh(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Uh(t,e,n,!1,r)};yn.version="18.3.1-next-f1338f8080-20240426";function nS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nS)}catch(t){console.error(t)}}nS(),nE.exports=yn;var jR=nE.exports,Vv=jR;Af.createRoot=Vv.createRoot,Af.hydrateRoot=Vv.hydrateRoot;var Fv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(t,e){if(!t)throw bo(e)},bo=function(t){return new Error("Firebase Database ("+rS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},MR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,f=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,v=u&63;c||(v=64,o||(m=64)),r.push(n[f],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(iS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):MR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||p==null)throw new VR;const m=s<<2|a>>4;if(r.push(m),u!==64){const v=a<<4&240|u>>2;if(r.push(v),p!==64){const I=u<<6&192|p;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sS=function(t){const e=iS(t);return tg.encodeByteArray(e,!0)},qu=function(t){return sS(t).replace(/\./g,"")},Hu=function(t){try{return tg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(t){return oS(void 0,t)}function oS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!UR(n)||(t[n]=oS(t[n],e[n]));return t}function UR(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=()=>BR().__FIREBASE_DEFAULTS__,WR=()=>{if(typeof process>"u"||typeof Fv>"u")return;const t=Fv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$R=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hu(t[1]);return e&&JSON.parse(e)},Bh=()=>{try{return zR()||WR()||$R()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},aS=t=>{var e,n;return(n=(e=Bh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lS=t=>{const e=aS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},cS=()=>{var t;return(t=Bh())===null||t===void 0?void 0:t.config},uS=t=>{var e;return(e=Bh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[qu(JSON.stringify(n)),qu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ng(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function qR(){var t;const e=(t=Bh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function GR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KR(){const t=Vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QR(){return rS.NODE_ADMIN===!0}function YR(){return!qR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function XR(){try{return typeof indexedDB=="object"}catch{return!1}}function JR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR="FirebaseError";class Lr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ZR,Object.setPrototypeOf(this,Lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zl.prototype.create)}}class zl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?eA(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Lr(i,a,r)}}function eA(t,e){return t.replace(tA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const tA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t){return JSON.parse(t)}function gt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=yl(Hu(s[0])||""),n=yl(Hu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},nA=function(t){const e=fS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},rA=function(t){const e=fS(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Tp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ku(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Uv(s)&&Uv(o)){if(!Ku(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Uv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ra(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Aa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)r[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const m=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,f;for(let p=0;p<80;p++){p<40?p<20?(u=a^s&(o^a),f=1518500249):(u=s^o^a,f=1859775393):p<60?(u=s&o|a&(s|o),f=2400959708):(u=s^o^a,f=3395469782);const m=(i<<5|i>>>27)+u+c+f+r[p]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function sA(t,e){const n=new oA(t,e);return n.subscribe.bind(n)}class oA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=cf),i.error===void 0&&(i.error=cf),i.complete===void 0&&(i.complete=cf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cf(){}function rg(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,$(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){return t&&t._delegate?t._delegate:t}class wi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hA(e))try{this.getOrInitializeService({instanceIdentifier:$i})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=$i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$i){return this.instances.has(e)}getOptions(e=$i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$i){return this.component?this.component.multipleInstances?e:$i:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uA(t){return t===$i?void 0:t}function hA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const fA={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},pA=pe.INFO,mA={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},gA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=mA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $h{constructor(e){this.name=e,this._logLevel=pA,this._logHandler=gA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const yA=(t,e)=>e.some(n=>t instanceof n);let Bv,zv;function _A(){return Bv||(Bv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vA(){return zv||(zv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pS=new WeakMap,Sp=new WeakMap,mS=new WeakMap,uf=new WeakMap,ig=new WeakMap;function wA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(di(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pS.set(n,t)}).catch(()=>{}),ig.set(e,t),e}function EA(t){if(Sp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sp.set(t,e)}let Ip={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return di(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function TA(t){Ip=t(Ip)}function SA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hf(this),e,...n);return mS.set(r,e.sort?e.sort():[e]),di(r)}:vA().includes(t)?function(...e){return t.apply(hf(this),e),di(pS.get(this))}:function(...e){return di(t.apply(hf(this),e))}}function IA(t){return typeof t=="function"?SA(t):(t instanceof IDBTransaction&&EA(t),yA(t,_A())?new Proxy(t,Ip):t)}function di(t){if(t instanceof IDBRequest)return wA(t);if(uf.has(t))return uf.get(t);const e=IA(t);return e!==t&&(uf.set(t,e),ig.set(e,t)),e}const hf=t=>ig.get(t);function CA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=di(o);return r&&o.addEventListener("upgradeneeded",c=>{r(di(o.result),c.oldVersion,c.newVersion,di(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const xA=["get","getKey","getAll","getAllKeys","count"],kA=["put","add","delete","clear"],df=new Map;function Wv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(df.get(e))return df.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=kA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||xA.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return df.set(e,s),s}TA(t=>({...t,get:(e,n,r)=>Wv(e,n)||t.get(e,n,r),has:(e,n)=>!!Wv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function AA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cp="@firebase/app",$v="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new $h("@firebase/app"),PA="@firebase/app-compat",NA="@firebase/analytics-compat",bA="@firebase/analytics",DA="@firebase/app-check-compat",OA="@firebase/app-check",LA="@firebase/auth",jA="@firebase/auth-compat",MA="@firebase/database",VA="@firebase/data-connect",FA="@firebase/database-compat",UA="@firebase/functions",BA="@firebase/functions-compat",zA="@firebase/installations",WA="@firebase/installations-compat",$A="@firebase/messaging",qA="@firebase/messaging-compat",HA="@firebase/performance",GA="@firebase/performance-compat",KA="@firebase/remote-config",QA="@firebase/remote-config-compat",YA="@firebase/storage",XA="@firebase/storage-compat",JA="@firebase/firestore",ZA="@firebase/vertexai-preview",eP="@firebase/firestore-compat",tP="firebase",nP="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="[DEFAULT]",rP={[Cp]:"fire-core",[PA]:"fire-core-compat",[bA]:"fire-analytics",[NA]:"fire-analytics-compat",[OA]:"fire-app-check",[DA]:"fire-app-check-compat",[LA]:"fire-auth",[jA]:"fire-auth-compat",[MA]:"fire-rtdb",[VA]:"fire-data-connect",[FA]:"fire-rtdb-compat",[UA]:"fire-fn",[BA]:"fire-fn-compat",[zA]:"fire-iid",[WA]:"fire-iid-compat",[$A]:"fire-fcm",[qA]:"fire-fcm-compat",[HA]:"fire-perf",[GA]:"fire-perf-compat",[KA]:"fire-rc",[QA]:"fire-rc-compat",[YA]:"fire-gcs",[XA]:"fire-gcs-compat",[JA]:"fire-fst",[eP]:"fire-fst-compat",[ZA]:"fire-vertex","fire-js":"fire-js",[tP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=new Map,iP=new Map,kp=new Map;function qv(t,e){try{t.container.addComponent(e)}catch(n){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function os(t){const e=t.name;if(kp.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;kp.set(e,t);for(const n of Qu.values())qv(n,t);for(const n of iP.values())qv(n,t);return!0}function qh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Yn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fi=new zl("app","Firebase",sP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=nP;function gS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw fi.create("bad-app-name",{appName:String(i)});if(n||(n=cS()),!n)throw fi.create("no-options");const s=Qu.get(i);if(s){if(Ku(n,s.options)&&Ku(r,s.config))return s;throw fi.create("duplicate-app",{appName:i})}const o=new dA(i);for(const c of kp.values())o.addComponent(c);const a=new oP(n,r,o);return Qu.set(i,a),a}function sg(t=xp){const e=Qu.get(t);if(!e&&t===xp&&cS())return gS();if(!e)throw fi.create("no-app",{appName:t});return e}function Zn(t,e,n){var r;let i=(r=rP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(a.join(" "));return}os(new wi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP="firebase-heartbeat-database",lP=1,_l="firebase-heartbeat-store";let ff=null;function yS(){return ff||(ff=CA(aP,lP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_l)}catch(n){console.warn(n)}}}}).catch(t=>{throw fi.create("idb-open",{originalErrorMessage:t.message})})),ff}async function cP(t){try{const n=(await yS()).transaction(_l),r=await n.objectStore(_l).get(_S(t));return await n.done,r}catch(e){if(e instanceof Lr)Rr.warn(e.message);else{const n=fi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(n.message)}}}async function Hv(t,e){try{const r=(await yS()).transaction(_l,"readwrite");await r.objectStore(_l).put(e,_S(t)),await r.done}catch(n){if(n instanceof Lr)Rr.warn(n.message);else{const r=fi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rr.warn(r.message)}}}function _S(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=1024,hP=30*24*60*60*1e3;class dP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=hP}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gv(),{heartbeatsToSend:r,unsentEntries:i}=fP(this._heartbeatsCache.heartbeats),s=qu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Rr.warn(n),""}}}function Gv(){return new Date().toISOString().substring(0,10)}function fP(t,e=uP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Kv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Kv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XR()?JR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Kv(t){return qu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t){os(new wi("platform-logger",e=>new RA(e),"PRIVATE")),os(new wi("heartbeat",e=>new dP(e),"PRIVATE")),Zn(Cp,$v,t),Zn(Cp,$v,"esm2017"),Zn("fire-js","")}mP("");function og(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function vS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gP=vS,wS=new zl("auth","Firebase",vS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=new $h("@firebase/auth");function yP(t,...e){Yu.logLevel<=pe.WARN&&Yu.warn(`Auth (${vs}): ${t}`,...e)}function hu(t,...e){Yu.logLevel<=pe.ERROR&&Yu.error(`Auth (${vs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,...e){throw ag(t,...e)}function er(t,...e){return ag(t,...e)}function ES(t,e,n){const r=Object.assign(Object.assign({},gP()),{[e]:n});return new zl("auth","Firebase",r).create(e,{appName:t.name})}function Tr(t){return ES(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ag(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wS.create(t,...e)}function ie(t,e,...n){if(!t)throw ag(e,...n)}function yr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hu(e),new Error(e)}function Ar(t,e){t||yr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _P(){return Qv()==="http:"||Qv()==="https:"}function Qv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_P()||GR()||"connection"in navigator)?navigator.onLine:!0}function wP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ar(n>e,"Short delay should be less than long delay!"),this.isMobile=ng()||dS()}get(){return vP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t,e){Ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=new Wl(3e4,6e4);function Pi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ni(t,e,n,r,i={}){return SS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Do(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},s);return HR()||(u.referrerPolicy="no-referrer"),TS.fetch()(IS(t,t.config.apiHost,n,a),u)})}async function SS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},EP),e);try{const i=new IP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Wc(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Wc(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ES(t,f,u);Bn(t,f)}}catch(i){if(i instanceof Lr)throw i;Bn(t,"network-request-failed",{message:String(i)})}}async function $l(t,e,n,r,i={}){const s=await Ni(t,e,n,r,i);return"mfaPendingCredential"in s&&Bn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function IS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?lg(t.config,i):`${t.config.apiScheme}://${i}`}function SP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class IP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(er(this.auth,"network-request-failed")),TP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=er(t,e,r);return i.customData._tokenResponse=n,i}function Yv(t){return t!==void 0&&t.enterprise!==void 0}class CP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return SP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function xP(t,e){return Ni(t,"GET","/v2/recaptchaConfig",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kP(t,e){return Ni(t,"POST","/v1/accounts:delete",e)}async function CS(t,e){return Ni(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RP(t,e=!1){const n=be(t),r=await n.getIdToken(e),i=cg(r);ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Wa(pf(i.auth_time)),issuedAtTime:Wa(pf(i.iat)),expirationTime:Wa(pf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function pf(t){return Number(t)*1e3}function cg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return hu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hu(n);return i?JSON.parse(i):(hu("Failed to decode base64 JWT payload"),null)}catch(i){return hu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Xv(t){const e=cg(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Lr&&AP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function AP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wa(this.lastLoginAt),this.creationTime=Wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await vl(t,CS(n,{idToken:r}));ie(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?xS(s.providerUserInfo):[],a=bP(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),f=c?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ap(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function NP(t){const e=be(t);await Xu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function xS(t){return t.map(e=>{var{providerId:n}=e,r=og(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP(t,e){const n=await SS(t,{},async()=>{const r=Do({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=IS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",TS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function OP(t,e){return Ni(t,"POST","/v2/accounts:revokeToken",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=Xv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await DP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new io;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ie(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ie(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new io,this.toJSON())}_performRefresh(){return yr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _r{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=og(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ap(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await vl(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RP(this,e)}reload(){return NP(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yn(this.auth.app))return Promise.reject(Tr(this.auth));const e=await this.getIdToken();return await vl(this,kP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(u=n.createdAt)!==null&&u!==void 0?u:void 0,T=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:R,emailVerified:P,isAnonymous:M,providerData:D,stsTokenManager:E}=n;ie(R&&E,e,"internal-error");const _=io.fromJSON(this.name,E);ie(typeof R=="string",e,"internal-error"),qr(p,e.name),qr(m,e.name),ie(typeof P=="boolean",e,"internal-error"),ie(typeof M=="boolean",e,"internal-error"),qr(v,e.name),qr(I,e.name),qr(S,e.name),qr(b,e.name),qr(w,e.name),qr(T,e.name);const C=new _r({uid:R,auth:e,email:m,emailVerified:P,displayName:p,isAnonymous:M,photoURL:I,phoneNumber:v,tenantId:S,stsTokenManager:_,createdAt:w,lastLoginAt:T});return D&&Array.isArray(D)&&(C.providerData=D.map(k=>Object.assign({},k))),b&&(C._redirectEventId=b),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new io;i.updateFromServerResponse(n);const s=new _r({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ie(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?xS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new io;a.updateFromIdToken(r);const c=new _r({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ap(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=new Map;function vr(t){Ar(t instanceof Function,"Expected a class definition");let e=Jv.get(t);return e?(Ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kS.type="NONE";const Zv=kS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t,e,n){return`firebase:${t}:${e}:${n}`}class so{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=du(this.userKey,i.apiKey,s),this.fullPersistenceKey=du("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_r._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new so(vr(Zv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||vr(Zv);const o=du(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){const p=_r._fromJSON(e,f);u!==s&&(a=p),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new so(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new so(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(NS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(RS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(DS(e))return"Blackberry";if(OS(e))return"Webos";if(AS(e))return"Safari";if((e.includes("chrome/")||PS(e))&&!e.includes("edge/"))return"Chrome";if(bS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function RS(t=Vt()){return/firefox\//i.test(t)}function AS(t=Vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function PS(t=Vt()){return/crios\//i.test(t)}function NS(t=Vt()){return/iemobile/i.test(t)}function bS(t=Vt()){return/android/i.test(t)}function DS(t=Vt()){return/blackberry/i.test(t)}function OS(t=Vt()){return/webos/i.test(t)}function ug(t=Vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LP(t=Vt()){var e;return ug(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jP(){return KR()&&document.documentMode===10}function LS(t=Vt()){return ug(t)||bS(t)||OS(t)||DS(t)||/windows phone/i.test(t)||NS(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(t,e=[]){let n;switch(t){case"Browser":n=e0(Vt());break;case"Worker":n=`${e0(Vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(t,e={}){return Ni(t,"GET","/v2/passwordPolicy",Pi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP=6;class UP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:FP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new t0(this),this.idTokenSubscription=new t0(this),this.beforeStateQueue=new MP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await so.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await CS(this,{idToken:e}),r=await _r._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Yn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yn(this.app))return Promise.reject(Tr(this));const n=e?be(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yn(this.app)?Promise.reject(Tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yn(this.app)?Promise.reject(Tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VP(this),n=new UP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await OP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vr(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[vr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&yP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ws(t){return be(t)}class t0{constructor(e){this.auth=e,this.observer=null,this.addObserver=sA(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zP(t){Hh=t}function MS(t){return Hh.loadJS(t)}function WP(){return Hh.recaptchaEnterpriseScript}function $P(){return Hh.gapiScript}function qP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const HP="recaptcha-enterprise",GP="NO_RECAPTCHA";class KP{constructor(e){this.type=HP,this.auth=ws(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{xP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new CP(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Yv(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(GP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Yv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=WP();c.length!==0&&(c+=a),MS(c).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function n0(t,e,n,r=!1){const i=new KP(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function r0(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await n0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await n0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t,e){const n=qh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ku(s,e??{}))return i;Bn(i,"already-initialized")}return n.initialize({options:e})}function YP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function XP(t,e,n){const r=ws(t);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=VS(e),{host:o,port:a}=JP(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),ZP()}function VS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JP(t){const e=VS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:i0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:i0(o)}}}function i0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yr("not implemented")}_getIdTokenResponse(e){return yr("not implemented")}_linkToIdToken(e,n){return yr("not implemented")}_getReauthenticationResolver(e){return yr("not implemented")}}async function eN(t,e){return Ni(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN(t,e){return $l(t,"POST","/v1/accounts:signInWithPassword",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nN(t,e){return $l(t,"POST","/v1/accounts:signInWithEmailLink",Pi(t,e))}async function rN(t,e){return $l(t,"POST","/v1/accounts:signInWithEmailLink",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends hg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new wl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new wl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return r0(e,n,"signInWithPassword",tN);case"emailLink":return nN(e,{email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return r0(e,r,"signUpPassword",eN);case"emailLink":return rN(e,{idToken:n,email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t,e){return $l(t,"POST","/v1/accounts:signInWithIdp",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN="http://localhost";class as extends hg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=og(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new as(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return oo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,oo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oo(e,n)}buildRequest(){const e={requestUri:iN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Do(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oN(t){const e=Ra(Aa(t)).link,n=e?Ra(Aa(e)).deep_link_id:null,r=Ra(Aa(t)).deep_link_id;return(r?Ra(Aa(r)).link:null)||r||n||e||t}class dg{constructor(e){var n,r,i,s,o,a;const c=Ra(Aa(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=sN((i=c.mode)!==null&&i!==void 0?i:null);ie(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=oN(e);try{return new dg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.providerId=Oo.PROVIDER_ID}static credential(e,n){return wl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=dg.parseLink(n);return ie(r,"argument-error"),wl._fromEmailAndCode(e,r.code,r.tenantId)}}Oo.PROVIDER_ID="password";Oo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends FS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends ql{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends ql{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return as._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xr.credential(n,r)}catch{return null}}}Xr.GOOGLE_SIGN_IN_METHOD="google.com";Xr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends ql{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.GITHUB_SIGN_IN_METHOD="github.com";Jr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends ql{constructor(){super("twitter.com")}static credential(e,n){return as._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zr.credential(n,r)}catch{return null}}}Zr.TWITTER_SIGN_IN_METHOD="twitter.com";Zr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aN(t,e){return $l(t,"POST","/v1/accounts:signUp",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await _r._fromIdTokenResponse(e,r,i),o=s0(r);return new Ei({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=s0(r);return new Ei({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function s0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function US(t){var e;if(Yn(t.app))return Promise.reject(Tr(t));const n=ws(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ei({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await aN(n,{returnSecureToken:!0}),i=await Ei._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends Lr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ju.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ju(e,n,r,i)}}function BS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ju._fromErrorAndOperation(t,s,e,r):s})}async function lN(t,e,n=!1){const r=await vl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ei._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cN(t,e,n=!1){const{auth:r}=t;if(Yn(r.app))return Promise.reject(Tr(r));const i="reauthenticate";try{const s=await vl(t,BS(r,i,e,t),n);ie(s.idToken,r,"internal-error");const o=cg(s.idToken);ie(o,r,"internal-error");const{sub:a}=o;return ie(t.uid===a,r,"user-mismatch"),Ei._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Bn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(t,e,n=!1){if(Yn(t.app))return Promise.reject(Tr(t));const r="signIn",i=await BS(t,r,e),s=await Ei._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function uN(t,e){return zS(ws(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN(t){const e=ws(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function dN(t,e,n){return Yn(t.app)?Promise.reject(Tr(t)):uN(be(t),Oo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hN(t),r})}function fN(t,e,n,r){return be(t).onIdTokenChanged(e,n,r)}function pN(t,e,n){return be(t).beforeAuthStateChanged(e,n)}function mN(t,e,n,r){return be(t).onAuthStateChanged(e,n,r)}function gN(t){return be(t).signOut()}const Zu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zu,"1"),this.storage.removeItem(Zu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=1e3,_N=10;class $S extends WS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=LS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);jP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_N):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$S.type="LOCAL";const vN=$S;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS extends WS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qS.type="SESSION";const HS=qS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Gh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await wN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=fg("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){return window}function TN(t){tr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(){return typeof tr().WorkerGlobalScope<"u"&&typeof tr().importScripts=="function"}async function SN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CN(){return GS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS="firebaseLocalStorageDb",xN=1,eh="firebaseLocalStorage",QS="fbase_key";class Hl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kh(t,e){return t.transaction([eh],e?"readwrite":"readonly").objectStore(eh)}function kN(){const t=indexedDB.deleteDatabase(KS);return new Hl(t).toPromise()}function Pp(){const t=indexedDB.open(KS,xN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(eh,{keyPath:QS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(eh)?e(r):(r.close(),await kN(),e(await Pp()))})})}async function o0(t,e,n){const r=Kh(t,!0).put({[QS]:e,value:n});return new Hl(r).toPromise()}async function RN(t,e){const n=Kh(t,!1).get(e),r=await new Hl(n).toPromise();return r===void 0?null:r.value}function a0(t,e){const n=Kh(t,!0).delete(e);return new Hl(n).toPromise()}const AN=800,PN=3;class YS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>PN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return GS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gh._getInstance(CN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SN(),!this.activeServiceWorker)return;this.sender=new EN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pp();return await o0(e,Zu,"1"),await a0(e,Zu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>o0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>a0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Kh(i,!1).getAll();return new Hl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}YS.type="LOCAL";const NN=YS;new Wl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t,e){return e?vr(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg extends hg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DN(t){return zS(t.auth,new pg(t),t.bypassAuthState)}function ON(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),cN(n,new pg(t),t.bypassAuthState)}async function LN(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),lN(n,new pg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DN;case"linkViaPopup":case"linkViaRedirect":return LN;case"reauthViaPopup":case"reauthViaRedirect":return ON;default:Bn(this.auth,"internal-error")}}resolve(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN=new Wl(2e3,1e4);class Ks extends XS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ks.currentPopupAction&&Ks.currentPopupAction.cancel(),Ks.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Ar(this.filter.length===1,"Popup operations only handle one event");const e=fg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(er(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(er(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ks.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(er(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jN.get())};e()}}Ks.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN="pendingRedirect",fu=new Map;class VN extends XS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fu.get(this.auth._key());if(!e){try{const r=await FN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fu.set(this.auth._key(),e)}return this.bypassAuthState||fu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FN(t,e){const n=zN(e),r=BN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function UN(t,e){fu.set(t._key(),e)}function BN(t){return vr(t._redirectPersistence)}function zN(t){return du(MN,t.config.apiKey,t.name)}async function WN(t,e,n=!1){if(Yn(t.app))return Promise.reject(Tr(t));const r=ws(t),i=bN(r,e),o=await new VN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N=10*60*1e3;class qN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!JS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(er(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$N&&this.cachedEventUids.clear(),this.cachedEventUids.has(l0(e))}saveEventToCache(e){this.cachedEventUids.add(l0(e)),this.lastProcessedEventTime=Date.now()}}function l0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function JS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return JS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GN(t,e={}){return Ni(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QN=/^https?/;async function YN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GN(t);for(const n of e)try{if(XN(n))return}catch{}Bn(t,"unauthorized-domain")}function XN(t){const e=Rp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!QN.test(n))return!1;if(KN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=new Wl(3e4,6e4);function c0(){const t=tr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZN(t){return new Promise((e,n)=>{var r,i,s;function o(){c0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{c0(),n(er(t,"network-request-failed"))},timeout:JN.get()})}if(!((i=(r=tr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tr().gapi)===null||s===void 0)&&s.load)o();else{const a=qP("iframefcb");return tr()[a]=()=>{gapi.load?o():n(er(t,"network-request-failed"))},MS(`${$P()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw pu=null,e})}let pu=null;function eb(t){return pu=pu||ZN(t),pu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=new Wl(5e3,15e3),nb="__/auth/iframe",rb="emulator/auth/iframe",ib={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ob(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?lg(e,rb):`https://${t.config.authDomain}/${nb}`,r={apiKey:e.apiKey,appName:t.name,v:vs},i=sb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Do(r).slice(1)}`}async function ab(t){const e=await eb(t),n=tr().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:ob(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ib,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=er(t,"network-request-failed"),a=tr().setTimeout(()=>{s(o)},tb.get());function c(){tr().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cb=500,ub=600,hb="_blank",db="http://localhost";class u0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fb(t,e,n,r=cb,i=ub){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},lb),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Vt().toLowerCase();n&&(a=PS(u)?hb:n),RS(u)&&(e=e||db,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[v,I])=>`${m}${v}=${I},`,"");if(LP(u)&&a!=="_self")return pb(e||"",a),new u0(null);const p=window.open(e||"",a,f);ie(p,t,"popup-blocked");try{p.focus()}catch{}return new u0(p)}function pb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb="__/auth/handler",gb="emulator/auth/handler",yb=encodeURIComponent("fac");async function h0(t,e,n,r,i,s){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vs,eventId:i};if(e instanceof FS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Tp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ql){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),u=c?`#${yb}=${encodeURIComponent(c)}`:"";return`${_b(t)}?${Do(a).slice(1)}${u}`}function _b({config:t}){return t.emulator?lg(t,gb):`https://${t.authDomain}/${mb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="webStorageSupport";class vb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=HS,this._completeRedirectFn=WN,this._overrideRedirectResult=UN}async _openPopup(e,n,r,i){var s;Ar((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await h0(e,n,r,Rp(),i);return fb(e,o,fg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await h0(e,n,r,Rp(),i);return TN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ar(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ab(e),r=new qN(e);return n.register("authEvent",i=>(ie(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mf,{type:mf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[mf];o!==void 0&&n(!!o),Bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return LS()||AS()||ug()}}const wb=vb;var d0="@firebase/auth",f0="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sb(t){os(new wi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jS(t)},u=new BP(r,i,s,c);return YP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),os(new wi("auth-internal",e=>{const n=ws(e.getProvider("auth").getImmediate());return(r=>new Eb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(d0,f0,Tb(t)),Zn(d0,f0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=5*60,Cb=uS("authIdTokenMaxAge")||Ib;let p0=null;const xb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Cb)return;const i=n==null?void 0:n.token;p0!==i&&(p0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kb(t=sg()){const e=qh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QP(t,{popupRedirectResolver:wb,persistence:[NN,vN,HS]}),r=uS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=xb(s.toString());pN(n,o,()=>o(n.currentUser)),fN(n,a=>o(a))}}const i=aS("auth");return i&&XP(n,`http://${i}`),n}function Rb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}zP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=er("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Rb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sb("Browser");var Ab="firebase",Pb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn(Ab,Pb,"app");var m0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var es,ZS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function C(){}C.prototype=_.prototype,E.D=_.prototype,E.prototype=new C,E.prototype.constructor=E,E.C=function(k,A,N){for(var x=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)x[Be-2]=arguments[Be];return _.prototype[A].apply(k,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,_,C){C||(C=0);var k=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)k[A]=_.charCodeAt(C++)|_.charCodeAt(C++)<<8|_.charCodeAt(C++)<<16|_.charCodeAt(C++)<<24;else for(A=0;16>A;++A)k[A]=_[C++]|_[C++]<<8|_[C++]<<16|_[C++]<<24;_=E.g[0],C=E.g[1],A=E.g[2];var N=E.g[3],x=_+(N^C&(A^N))+k[0]+3614090360&4294967295;_=C+(x<<7&4294967295|x>>>25),x=N+(A^_&(C^A))+k[1]+3905402710&4294967295,N=_+(x<<12&4294967295|x>>>20),x=A+(C^N&(_^C))+k[2]+606105819&4294967295,A=N+(x<<17&4294967295|x>>>15),x=C+(_^A&(N^_))+k[3]+3250441966&4294967295,C=A+(x<<22&4294967295|x>>>10),x=_+(N^C&(A^N))+k[4]+4118548399&4294967295,_=C+(x<<7&4294967295|x>>>25),x=N+(A^_&(C^A))+k[5]+1200080426&4294967295,N=_+(x<<12&4294967295|x>>>20),x=A+(C^N&(_^C))+k[6]+2821735955&4294967295,A=N+(x<<17&4294967295|x>>>15),x=C+(_^A&(N^_))+k[7]+4249261313&4294967295,C=A+(x<<22&4294967295|x>>>10),x=_+(N^C&(A^N))+k[8]+1770035416&4294967295,_=C+(x<<7&4294967295|x>>>25),x=N+(A^_&(C^A))+k[9]+2336552879&4294967295,N=_+(x<<12&4294967295|x>>>20),x=A+(C^N&(_^C))+k[10]+4294925233&4294967295,A=N+(x<<17&4294967295|x>>>15),x=C+(_^A&(N^_))+k[11]+2304563134&4294967295,C=A+(x<<22&4294967295|x>>>10),x=_+(N^C&(A^N))+k[12]+1804603682&4294967295,_=C+(x<<7&4294967295|x>>>25),x=N+(A^_&(C^A))+k[13]+4254626195&4294967295,N=_+(x<<12&4294967295|x>>>20),x=A+(C^N&(_^C))+k[14]+2792965006&4294967295,A=N+(x<<17&4294967295|x>>>15),x=C+(_^A&(N^_))+k[15]+1236535329&4294967295,C=A+(x<<22&4294967295|x>>>10),x=_+(A^N&(C^A))+k[1]+4129170786&4294967295,_=C+(x<<5&4294967295|x>>>27),x=N+(C^A&(_^C))+k[6]+3225465664&4294967295,N=_+(x<<9&4294967295|x>>>23),x=A+(_^C&(N^_))+k[11]+643717713&4294967295,A=N+(x<<14&4294967295|x>>>18),x=C+(N^_&(A^N))+k[0]+3921069994&4294967295,C=A+(x<<20&4294967295|x>>>12),x=_+(A^N&(C^A))+k[5]+3593408605&4294967295,_=C+(x<<5&4294967295|x>>>27),x=N+(C^A&(_^C))+k[10]+38016083&4294967295,N=_+(x<<9&4294967295|x>>>23),x=A+(_^C&(N^_))+k[15]+3634488961&4294967295,A=N+(x<<14&4294967295|x>>>18),x=C+(N^_&(A^N))+k[4]+3889429448&4294967295,C=A+(x<<20&4294967295|x>>>12),x=_+(A^N&(C^A))+k[9]+568446438&4294967295,_=C+(x<<5&4294967295|x>>>27),x=N+(C^A&(_^C))+k[14]+3275163606&4294967295,N=_+(x<<9&4294967295|x>>>23),x=A+(_^C&(N^_))+k[3]+4107603335&4294967295,A=N+(x<<14&4294967295|x>>>18),x=C+(N^_&(A^N))+k[8]+1163531501&4294967295,C=A+(x<<20&4294967295|x>>>12),x=_+(A^N&(C^A))+k[13]+2850285829&4294967295,_=C+(x<<5&4294967295|x>>>27),x=N+(C^A&(_^C))+k[2]+4243563512&4294967295,N=_+(x<<9&4294967295|x>>>23),x=A+(_^C&(N^_))+k[7]+1735328473&4294967295,A=N+(x<<14&4294967295|x>>>18),x=C+(N^_&(A^N))+k[12]+2368359562&4294967295,C=A+(x<<20&4294967295|x>>>12),x=_+(C^A^N)+k[5]+4294588738&4294967295,_=C+(x<<4&4294967295|x>>>28),x=N+(_^C^A)+k[8]+2272392833&4294967295,N=_+(x<<11&4294967295|x>>>21),x=A+(N^_^C)+k[11]+1839030562&4294967295,A=N+(x<<16&4294967295|x>>>16),x=C+(A^N^_)+k[14]+4259657740&4294967295,C=A+(x<<23&4294967295|x>>>9),x=_+(C^A^N)+k[1]+2763975236&4294967295,_=C+(x<<4&4294967295|x>>>28),x=N+(_^C^A)+k[4]+1272893353&4294967295,N=_+(x<<11&4294967295|x>>>21),x=A+(N^_^C)+k[7]+4139469664&4294967295,A=N+(x<<16&4294967295|x>>>16),x=C+(A^N^_)+k[10]+3200236656&4294967295,C=A+(x<<23&4294967295|x>>>9),x=_+(C^A^N)+k[13]+681279174&4294967295,_=C+(x<<4&4294967295|x>>>28),x=N+(_^C^A)+k[0]+3936430074&4294967295,N=_+(x<<11&4294967295|x>>>21),x=A+(N^_^C)+k[3]+3572445317&4294967295,A=N+(x<<16&4294967295|x>>>16),x=C+(A^N^_)+k[6]+76029189&4294967295,C=A+(x<<23&4294967295|x>>>9),x=_+(C^A^N)+k[9]+3654602809&4294967295,_=C+(x<<4&4294967295|x>>>28),x=N+(_^C^A)+k[12]+3873151461&4294967295,N=_+(x<<11&4294967295|x>>>21),x=A+(N^_^C)+k[15]+530742520&4294967295,A=N+(x<<16&4294967295|x>>>16),x=C+(A^N^_)+k[2]+3299628645&4294967295,C=A+(x<<23&4294967295|x>>>9),x=_+(A^(C|~N))+k[0]+4096336452&4294967295,_=C+(x<<6&4294967295|x>>>26),x=N+(C^(_|~A))+k[7]+1126891415&4294967295,N=_+(x<<10&4294967295|x>>>22),x=A+(_^(N|~C))+k[14]+2878612391&4294967295,A=N+(x<<15&4294967295|x>>>17),x=C+(N^(A|~_))+k[5]+4237533241&4294967295,C=A+(x<<21&4294967295|x>>>11),x=_+(A^(C|~N))+k[12]+1700485571&4294967295,_=C+(x<<6&4294967295|x>>>26),x=N+(C^(_|~A))+k[3]+2399980690&4294967295,N=_+(x<<10&4294967295|x>>>22),x=A+(_^(N|~C))+k[10]+4293915773&4294967295,A=N+(x<<15&4294967295|x>>>17),x=C+(N^(A|~_))+k[1]+2240044497&4294967295,C=A+(x<<21&4294967295|x>>>11),x=_+(A^(C|~N))+k[8]+1873313359&4294967295,_=C+(x<<6&4294967295|x>>>26),x=N+(C^(_|~A))+k[15]+4264355552&4294967295,N=_+(x<<10&4294967295|x>>>22),x=A+(_^(N|~C))+k[6]+2734768916&4294967295,A=N+(x<<15&4294967295|x>>>17),x=C+(N^(A|~_))+k[13]+1309151649&4294967295,C=A+(x<<21&4294967295|x>>>11),x=_+(A^(C|~N))+k[4]+4149444226&4294967295,_=C+(x<<6&4294967295|x>>>26),x=N+(C^(_|~A))+k[11]+3174756917&4294967295,N=_+(x<<10&4294967295|x>>>22),x=A+(_^(N|~C))+k[2]+718787259&4294967295,A=N+(x<<15&4294967295|x>>>17),x=C+(N^(A|~_))+k[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(A+(x<<21&4294967295|x>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+N&4294967295}r.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var C=_-this.blockSize,k=this.B,A=this.h,N=0;N<_;){if(A==0)for(;N<=C;)i(this,E,N),N+=this.blockSize;if(typeof E=="string"){for(;N<_;)if(k[A++]=E.charCodeAt(N++),A==this.blockSize){i(this,k),A=0;break}}else for(;N<_;)if(k[A++]=E[N++],A==this.blockSize){i(this,k),A=0;break}}this.h=A,this.o+=_},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var C=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=C&255,C/=256;for(this.u(E),E=Array(16),_=C=0;4>_;++_)for(var k=0;32>k;k+=8)E[C++]=this.g[_]>>>k&255;return E};function s(E,_){var C=a;return Object.prototype.hasOwnProperty.call(C,E)?C[E]:C[E]=_(E)}function o(E,_){this.h=_;for(var C=[],k=!0,A=E.length-1;0<=A;A--){var N=E[A]|0;k&&N==_||(C[A]=N,k=!1)}this.g=C}var a={};function c(E){return-128<=E&&128>E?s(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return b(u(-E));for(var _=[],C=1,k=0;E>=C;k++)_[k]=E/C|0,C*=4294967296;return new o(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return b(f(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=u(Math.pow(_,8)),k=p,A=0;A<E.length;A+=8){var N=Math.min(8,E.length-A),x=parseInt(E.substring(A,A+N),_);8>N?(N=u(Math.pow(_,N)),k=k.j(N).add(u(x))):(k=k.j(C),k=k.add(u(x)))}return k}var p=c(0),m=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(S(this))return-b(this).m();for(var E=0,_=1,C=0;C<this.g.length;C++){var k=this.i(C);E+=(0<=k?k:4294967296+k)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(I(this))return"0";if(S(this))return"-"+b(this).toString(E);for(var _=u(Math.pow(E,6)),C=this,k="";;){var A=P(C,_).g;C=w(C,A.j(_));var N=((0<C.g.length?C.g[0]:C.h)>>>0).toString(E);if(C=A,I(C))return N+k;for(;6>N.length;)N="0"+N;k=N+k}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function I(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function S(E){return E.h==-1}t.l=function(E){return E=w(this,E),S(E)?-1:I(E)?0:1};function b(E){for(var _=E.g.length,C=[],k=0;k<_;k++)C[k]=~E.g[k];return new o(C,~E.h).add(m)}t.abs=function(){return S(this)?b(this):this},t.add=function(E){for(var _=Math.max(this.g.length,E.g.length),C=[],k=0,A=0;A<=_;A++){var N=k+(this.i(A)&65535)+(E.i(A)&65535),x=(N>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);k=x>>>16,N&=65535,x&=65535,C[A]=x<<16|N}return new o(C,C[C.length-1]&-2147483648?-1:0)};function w(E,_){return E.add(b(_))}t.j=function(E){if(I(this)||I(E))return p;if(S(this))return S(E)?b(this).j(b(E)):b(b(this).j(E));if(S(E))return b(this.j(b(E)));if(0>this.l(v)&&0>E.l(v))return u(this.m()*E.m());for(var _=this.g.length+E.g.length,C=[],k=0;k<2*_;k++)C[k]=0;for(k=0;k<this.g.length;k++)for(var A=0;A<E.g.length;A++){var N=this.i(k)>>>16,x=this.i(k)&65535,Be=E.i(A)>>>16,qe=E.i(A)&65535;C[2*k+2*A]+=x*qe,T(C,2*k+2*A),C[2*k+2*A+1]+=N*qe,T(C,2*k+2*A+1),C[2*k+2*A+1]+=x*Be,T(C,2*k+2*A+1),C[2*k+2*A+2]+=N*Be,T(C,2*k+2*A+2)}for(k=0;k<_;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=_;k<2*_;k++)C[k]=0;return new o(C,0)};function T(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function R(E,_){this.g=E,this.h=_}function P(E,_){if(I(_))throw Error("division by zero");if(I(E))return new R(p,p);if(S(E))return _=P(b(E),_),new R(b(_.g),b(_.h));if(S(_))return _=P(E,b(_)),new R(b(_.g),_.h);if(30<E.g.length){if(S(E)||S(_))throw Error("slowDivide_ only works with positive integers.");for(var C=m,k=_;0>=k.l(E);)C=M(C),k=M(k);var A=D(C,1),N=D(k,1);for(k=D(k,2),C=D(C,2);!I(k);){var x=N.add(k);0>=x.l(E)&&(A=A.add(C),N=x),k=D(k,1),C=D(C,1)}return _=w(E,A.j(_)),new R(A,_)}for(A=p;0<=E.l(_);){for(C=Math.max(1,Math.floor(E.m()/_.m())),k=Math.ceil(Math.log(C)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),N=u(C),x=N.j(_);S(x)||0<x.l(E);)C-=k,N=u(C),x=N.j(_);I(N)&&(N=m),A=A.add(N),E=w(E,x)}return new R(A,E)}t.A=function(E){return P(this,E).h},t.and=function(E){for(var _=Math.max(this.g.length,E.g.length),C=[],k=0;k<_;k++)C[k]=this.i(k)&E.i(k);return new o(C,this.h&E.h)},t.or=function(E){for(var _=Math.max(this.g.length,E.g.length),C=[],k=0;k<_;k++)C[k]=this.i(k)|E.i(k);return new o(C,this.h|E.h)},t.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),C=[],k=0;k<_;k++)C[k]=this.i(k)^E.i(k);return new o(C,this.h^E.h)};function M(E){for(var _=E.g.length+1,C=[],k=0;k<_;k++)C[k]=E.i(k)<<1|E.i(k-1)>>>31;return new o(C,E.h)}function D(E,_){var C=_>>5;_%=32;for(var k=E.g.length-C,A=[],N=0;N<k;N++)A[N]=0<_?E.i(N+C)>>>_|E.i(N+C+1)<<32-_:E.i(N+C);return new o(A,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ZS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,es=o}).apply(typeof m0<"u"?m0:typeof self<"u"?self:typeof window<"u"?window:{});var $c=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eI,Pa,tI,mu,Np,nI,rI,iI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,g){return l==Array.prototype||l==Object.prototype||(l[d]=g.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof $c=="object"&&$c];for(var d=0;d<l.length;++d){var g=l[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var g=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var O=l[y];if(!(O in g))break e;g=g[O]}l=l[l.length-1],y=g[l],d=d(y),d!=y&&d!=null&&e(g,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var g=0,y=!1,O={next:function(){if(!y&&g<l.length){var L=g++;return{value:d(L,l[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function f(l,d,g){return l.call.apply(l.bind,arguments)}function p(l,d,g){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,y),l.apply(d,O)}}return function(){return l.apply(d,arguments)}}function m(l,d,g){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function v(l,d){var g=Array.prototype.slice.call(arguments,1);return function(){var y=g.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function I(l,d){function g(){}g.prototype=d.prototype,l.aa=d.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(y,O,L){for(var q=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)q[Pe-2]=arguments[Pe];return d.prototype[O].apply(y,q)}}function S(l){const d=l.length;if(0<d){const g=Array(d);for(let y=0;y<d;y++)g[y]=l[y];return g}return[]}function b(l,d){for(let g=1;g<arguments.length;g++){const y=arguments[g];if(c(y)){const O=l.length||0,L=y.length||0;l.length=O+L;for(let q=0;q<L;q++)l[O+q]=y[q]}else l.push(y)}}class w{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function T(l){return/^[\s\xa0]*$/.test(l)}function R(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function P(l){return P[" "](l),l}P[" "]=function(){};var M=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function D(l,d,g){for(const y in l)d.call(g,l[y],y,l)}function E(l,d){for(const g in l)d.call(void 0,l[g],g,l)}function _(l){const d={};for(const g in l)d[g]=l[g];return d}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,d){let g,y;for(let O=1;O<arguments.length;O++){y=arguments[O];for(g in y)l[g]=y[g];for(let L=0;L<C.length;L++)g=C[L],Object.prototype.hasOwnProperty.call(y,g)&&(l[g]=y[g])}}function A(l){var d=1;l=l.split(":");const g=[];for(;0<d&&l.length;)g.push(l.shift()),d--;return l.length&&g.push(l.join(":")),g}function N(l){a.setTimeout(()=>{throw l},0)}function x(){var l=B;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Be{constructor(){this.h=this.g=null}add(d,g){const y=qe.get();y.set(d,g),this.h?this.h.next=y:this.g=y,this.h=y}}var qe=new w(()=>new W,l=>l.reset());class W{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,F=!1,B=new Be,X=()=>{const l=a.Promise.resolve(void 0);Z=()=>{l.then(ge)}};var ge=()=>{for(var l;l=x();){try{l.h.call(l.g)}catch(g){N(g)}var d=qe;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}F=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};a.addEventListener("test",g,d),a.removeEventListener("test",g,d)}catch{}return l}();function an(l,d){if(we.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(M){e:{try{P(d.nodeName);var O=!0;break e}catch{}O=!1}O||(d=null)}}else g=="mouseover"?d=l.fromElement:g=="mouseout"&&(d=l.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ft[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&an.aa.h.call(this)}}I(an,we);var Ft={2:"touch",3:"pen",4:"mouse"};an.prototype.h=function(){an.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Ut="closure_listenable_"+(1e6*Math.random()|0),Qo=0;function Yo(l,d,g,y,O){this.listener=l,this.proxy=null,this.src=d,this.type=g,this.capture=!!y,this.ha=O,this.key=++Qo,this.da=this.fa=!1}function $n(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function qn(l){this.src=l,this.g={},this.h=0}qn.prototype.add=function(l,d,g,y,O){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var q=Hn(l,d,y,O);return-1<q?(d=l[q],g||(d.fa=!1)):(d=new Yo(d,this.src,L,!!y,O),d.fa=g,l.push(d)),d};function Vr(l,d){var g=d.type;if(g in l.g){var y=l.g[g],O=Array.prototype.indexOf.call(y,d,void 0),L;(L=0<=O)&&Array.prototype.splice.call(y,O,1),L&&($n(d),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Hn(l,d,g,y){for(var O=0;O<l.length;++O){var L=l[O];if(!L.da&&L.listener==d&&L.capture==!!g&&L.ha==y)return O}return-1}var it="closure_lm_"+(1e6*Math.random()|0),st={};function Qe(l,d,g,y,O){if(Array.isArray(d)){for(var L=0;L<d.length;L++)Qe(l,d[L],g,y,O);return null}return g=ee(g),l&&l[Ut]?l.K(d,g,u(y)?!!y.capture:!1,O):Li(l,d,g,!1,y,O)}function Li(l,d,g,y,O,L){if(!d)throw Error("Invalid event type");var q=u(O)?!!O.capture:!!O,Pe=Bt(l);if(Pe||(l[it]=Pe=new qn(l)),g=Pe.add(d,g,y,q,L),g.proxy)return g;if(y=or(),g.proxy=y,y.src=l,y.listener=g,l.addEventListener)Ie||(O=q),O===void 0&&(O=!1),l.addEventListener(d.toString(),y,O);else if(l.attachEvent)l.attachEvent(ji(d.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return g}function or(){function l(g){return d.call(l.src,l.listener,g)}const d=Xo;return l}function Fr(l,d,g,y,O){if(Array.isArray(d))for(var L=0;L<d.length;L++)Fr(l,d[L],g,y,O);else y=u(y)?!!y.capture:!!y,g=ee(g),l&&l[Ut]?(l=l.i,d=String(d).toString(),d in l.g&&(L=l.g[d],g=Hn(L,g,y,O),-1<g&&($n(L[g]),Array.prototype.splice.call(L,g,1),L.length==0&&(delete l.g[d],l.h--)))):l&&(l=Bt(l))&&(d=l.g[d.toString()],l=-1,d&&(l=Hn(d,g,y,O)),(g=-1<l?d[l]:null)&&Yt(g))}function Yt(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[Ut])Vr(d.i,l);else{var g=l.type,y=l.proxy;d.removeEventListener?d.removeEventListener(g,y,l.capture):d.detachEvent?d.detachEvent(ji(g),y):d.addListener&&d.removeListener&&d.removeListener(y),(g=Bt(d))?(Vr(g,l),g.h==0&&(g.src=null,d[it]=null)):$n(l)}}}function ji(l){return l in st?st[l]:st[l]="on"+l}function Xo(l,d){if(l.da)l=!0;else{d=new an(d,this);var g=l.listener,y=l.ha||l.src;l.fa&&Yt(l),l=g.call(y,d)}return l}function Bt(l){return l=l[it],l instanceof qn?l:null}var ar="__closure_events_fn_"+(1e9*Math.random()>>>0);function ee(l){return typeof l=="function"?l:(l[ar]||(l[ar]=function(d){return l.handleEvent(d)}),l[ar])}function G(){ce.call(this),this.i=new qn(this),this.M=this,this.F=null}I(G,ce),G.prototype[Ut]=!0,G.prototype.removeEventListener=function(l,d,g,y){Fr(this,l,d,g,y)};function oe(l,d){var g,y=l.F;if(y)for(g=[];y;y=y.F)g.push(y);if(l=l.M,y=d.type||d,typeof d=="string")d=new we(d,l);else if(d instanceof we)d.target=d.target||l;else{var O=d;d=new we(y,l),k(d,O)}if(O=!0,g)for(var L=g.length-1;0<=L;L--){var q=d.g=g[L];O=Ce(q,y,!0,d)&&O}if(q=d.g=l,O=Ce(q,y,!0,d)&&O,O=Ce(q,y,!1,d)&&O,g)for(L=0;L<g.length;L++)q=d.g=g[L],O=Ce(q,y,!1,d)&&O}G.prototype.N=function(){if(G.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var g=l.g[d],y=0;y<g.length;y++)$n(g[y]);delete l.g[d],l.h--}}this.F=null},G.prototype.K=function(l,d,g,y){return this.i.add(String(l),d,!1,g,y)},G.prototype.L=function(l,d,g,y){return this.i.add(String(l),d,!0,g,y)};function Ce(l,d,g,y){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var O=!0,L=0;L<d.length;++L){var q=d[L];if(q&&!q.da&&q.capture==g){var Pe=q.listener,vt=q.ha||q.src;q.fa&&Vr(l.i,q),O=Pe.call(vt,y)!==!1&&O}}return O&&!y.defaultPrevented}function zt(l,d,g){if(typeof l=="function")g&&(l=m(l,g));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function Wt(l){l.g=zt(()=>{l.g=null,l.i&&(l.i=!1,Wt(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class ln extends ce{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Wt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Q(l){ce.call(this),this.h=l,this.g={}}I(Q,ce);var H=[];function le(l){D(l.g,function(d,g){this.g.hasOwnProperty(g)&&Yt(d)},l),l.g={}}Q.prototype.N=function(){Q.aa.N.call(this),le(this)},Q.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ke=a.JSON.stringify,Ae=a.JSON.parse,ot=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function cn(){}cn.prototype.h=null;function vn(l){return l.h||(l.h=l.i())}function _t(){}var wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ur(){we.call(this,"d")}I(Ur,we);function Jo(){we.call(this,"c")}I(Jo,we);var lr={},uc=null;function Mi(){return uc=uc||new G}lr.La="serverreachability";function Zo(l){we.call(this,lr.La,l)}I(Zo,we);function Vi(l){const d=Mi();oe(d,new Zo(d))}lr.STAT_EVENT="statevent";function hc(l,d){we.call(this,lr.STAT_EVENT,l),this.stat=d}I(hc,we);function $t(l){const d=Mi();oe(d,new hc(d,l))}lr.Ma="timingevent";function $y(l,d){we.call(this,lr.Ma,l),this.size=d}I($y,we);function ea(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function ta(){this.g=!0}ta.prototype.xa=function(){this.g=!1};function Bx(l,d,g,y,O,L){l.info(function(){if(l.g)if(L)for(var q="",Pe=L.split("&"),vt=0;vt<Pe.length;vt++){var Ee=Pe[vt].split("=");if(1<Ee.length){var Rt=Ee[0];Ee=Ee[1];var At=Rt.split("_");q=2<=At.length&&At[1]=="type"?q+(Rt+"="+Ee+"&"):q+(Rt+"=redacted&")}}else q=null;else q=L;return"XMLHTTP REQ ("+y+") [attempt "+O+"]: "+d+`
`+g+`
`+q})}function zx(l,d,g,y,O,L,q){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+O+"]: "+d+`
`+g+`
`+L+" "+q})}function xs(l,d,g,y){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+$x(l,g)+(y?" "+y:"")})}function Wx(l,d){l.info(function(){return"TIMEOUT: "+d})}ta.prototype.info=function(){};function $x(l,d){if(!l.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var y=g[l];if(!(2>y.length)){var O=y[1];if(Array.isArray(O)&&!(1>O.length)){var L=O[0];if(L!="noop"&&L!="stop"&&L!="close")for(var q=1;q<O.length;q++)O[q]=""}}}}return ke(g)}catch{return d}}var dc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Id;function fc(){}I(fc,cn),fc.prototype.g=function(){return new XMLHttpRequest},fc.prototype.i=function(){return{}},Id=new fc;function Br(l,d,g,y){this.j=l,this.i=d,this.l=g,this.R=y||1,this.U=new Q(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hy}function Hy(){this.i=null,this.g="",this.h=!1}var Gy={},Cd={};function xd(l,d,g){l.L=1,l.v=yc(cr(d)),l.m=g,l.P=!0,Ky(l,null)}function Ky(l,d){l.F=Date.now(),pc(l),l.A=cr(l.v);var g=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),l_(g.i,"t",y),l.C=0,g=l.j.J,l.h=new Hy,l.g=x_(l.j,g?d:null,!l.m),0<l.O&&(l.M=new ln(m(l.Y,l,l.g),l.O)),d=l.U,g=l.g,y=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(H[0]=O.toString()),O=H);for(var L=0;L<O.length;L++){var q=Qe(g,O[L],y||d.handleEvent,!1,d.h||d);if(!q)break;d.g[q.key]=q}d=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Vi(),Bx(l.i,l.u,l.A,l.l,l.R,l.m)}Br.prototype.ca=function(l){l=l.target;const d=this.M;d&&ur(l)==3?d.j():this.Y(l)},Br.prototype.Y=function(l){try{if(l==this.g)e:{const At=ur(this.g);var d=this.g.Ba();const As=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||m_(this.g)))){this.J||At!=4||d==7||(d==8||0>=As?Vi(3):Vi(2)),kd(this);var g=this.g.Z();this.X=g;t:if(Qy(this)){var y=m_(this.g);l="";var O=y.length,L=ur(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fi(this),na(this);var q="";break t}this.h.i=new a.TextDecoder}for(d=0;d<O;d++)this.h.h=!0,l+=this.h.i.decode(y[d],{stream:!(L&&d==O-1)});y.length=0,this.h.g+=l,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=g==200,zx(this.i,this.u,this.A,this.l,this.R,At,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,vt=this.g;if((Pe=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(Pe)){var Ee=Pe;break t}}Ee=null}if(g=Ee)xs(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rd(this,g);else{this.o=!1,this.s=3,$t(12),Fi(this),na(this);break e}}if(this.P){g=!0;let Rn;for(;!this.J&&this.C<q.length;)if(Rn=qx(this,q),Rn==Cd){At==4&&(this.s=4,$t(14),g=!1),xs(this.i,this.l,null,"[Incomplete Response]");break}else if(Rn==Gy){this.s=4,$t(15),xs(this.i,this.l,q,"[Invalid Chunk]"),g=!1;break}else xs(this.i,this.l,Rn,null),Rd(this,Rn);if(Qy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||q.length!=0||this.h.h||(this.s=1,$t(16),g=!1),this.o=this.o&&g,!g)xs(this.i,this.l,q,"[Invalid Chunked Response]"),Fi(this),na(this);else if(0<q.length&&!this.W){this.W=!0;var Rt=this.j;Rt.g==this&&Rt.ba&&!Rt.M&&(Rt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Od(Rt),Rt.M=!0,$t(11))}}else xs(this.i,this.l,q,null),Rd(this,q);At==4&&Fi(this),this.o&&!this.J&&(At==4?T_(this.j,this):(this.o=!1,pc(this)))}else l1(this.g),g==400&&0<q.indexOf("Unknown SID")?(this.s=3,$t(12)):(this.s=0,$t(13)),Fi(this),na(this)}}}catch{}finally{}};function Qy(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function qx(l,d){var g=l.C,y=d.indexOf(`
`,g);return y==-1?Cd:(g=Number(d.substring(g,y)),isNaN(g)?Gy:(y+=1,y+g>d.length?Cd:(d=d.slice(y,y+g),l.C=y+g,d)))}Br.prototype.cancel=function(){this.J=!0,Fi(this)};function pc(l){l.S=Date.now()+l.I,Yy(l,l.I)}function Yy(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ea(m(l.ba,l),d)}function kd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Br.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Wx(this.i,this.A),this.L!=2&&(Vi(),$t(17)),Fi(this),this.s=2,na(this)):Yy(this,this.S-l)};function na(l){l.j.G==0||l.J||T_(l.j,l)}function Fi(l){kd(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,le(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Rd(l,d){try{var g=l.j;if(g.G!=0&&(g.g==l||Ad(g.h,l))){if(!l.K&&Ad(g.h,l)&&g.G==3){try{var y=g.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var O=y;if(O[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Sc(g),Ec(g);else break e;Dd(g),$t(18)}}else g.za=O[1],0<g.za-g.T&&37500>O[2]&&g.F&&g.v==0&&!g.C&&(g.C=ea(m(g.Za,g),6e3));if(1>=Zy(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Bi(g,11)}else if((l.K||g.g==l)&&Sc(g),!T(d))for(O=g.Da.g.parse(d),d=0;d<O.length;d++){let Ee=O[d];if(g.T=Ee[0],Ee=Ee[1],g.G==2)if(Ee[0]=="c"){g.K=Ee[1],g.ia=Ee[2];const Rt=Ee[3];Rt!=null&&(g.la=Rt,g.j.info("VER="+g.la));const At=Ee[4];At!=null&&(g.Aa=At,g.j.info("SVER="+g.Aa));const As=Ee[5];As!=null&&typeof As=="number"&&0<As&&(y=1.5*As,g.L=y,g.j.info("backChannelRequestTimeoutMs_="+y)),y=g;const Rn=l.g;if(Rn){const Cc=Rn.g?Rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cc){var L=y.h;L.g||Cc.indexOf("spdy")==-1&&Cc.indexOf("quic")==-1&&Cc.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Pd(L,L.h),L.h=null))}if(y.D){const Ld=Rn.g?Rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ld&&(y.ya=Ld,je(y.I,y.D,Ld))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),y=g;var q=l;if(y.qa=C_(y,y.J?y.ia:null,y.W),q.K){e_(y.h,q);var Pe=q,vt=y.L;vt&&(Pe.I=vt),Pe.B&&(kd(Pe),pc(Pe)),y.g=q}else w_(y);0<g.i.length&&Tc(g)}else Ee[0]!="stop"&&Ee[0]!="close"||Bi(g,7);else g.G==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?Bi(g,7):bd(g):Ee[0]!="noop"&&g.l&&g.l.ta(Ee),g.v=0)}}Vi(4)}catch{}}var Hx=class{constructor(l,d){this.g=l,this.map=d}};function Xy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Zy(l){return l.h?1:l.g?l.g.size:0}function Ad(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Pd(l,d){l.g?l.g.add(d):l.h=d}function e_(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Xy.prototype.cancel=function(){if(this.i=t_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function t_(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const g of l.g.values())d=d.concat(g.D);return d}return S(l.i)}function Gx(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],g=l.length,y=0;y<g;y++)d.push(l[y]);return d}d=[],g=0;for(y in l)d[g++]=l[y];return d}function Kx(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var g=0;g<l;g++)d.push(g);return d}d=[],g=0;for(const y in l)d[g++]=y;return d}}}function n_(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var g=Kx(l),y=Gx(l),O=y.length,L=0;L<O;L++)d.call(void 0,y[L],g&&g[L],l)}var r_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qx(l,d){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var y=l[g].indexOf("="),O=null;if(0<=y){var L=l[g].substring(0,y);O=l[g].substring(y+1)}else L=l[g];d(L,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Ui(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Ui){this.h=l.h,mc(this,l.j),this.o=l.o,this.g=l.g,gc(this,l.s),this.l=l.l;var d=l.i,g=new sa;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),i_(this,g),this.m=l.m}else l&&(d=String(l).match(r_))?(this.h=!1,mc(this,d[1]||"",!0),this.o=ra(d[2]||""),this.g=ra(d[3]||"",!0),gc(this,d[4]),this.l=ra(d[5]||"",!0),i_(this,d[6]||"",!0),this.m=ra(d[7]||"")):(this.h=!1,this.i=new sa(null,this.h))}Ui.prototype.toString=function(){var l=[],d=this.j;d&&l.push(ia(d,s_,!0),":");var g=this.g;return(g||d=="file")&&(l.push("//"),(d=this.o)&&l.push(ia(d,s_,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(ia(g,g.charAt(0)=="/"?Jx:Xx,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",ia(g,e1)),l.join("")};function cr(l){return new Ui(l)}function mc(l,d,g){l.j=g?ra(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function gc(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function i_(l,d,g){d instanceof sa?(l.i=d,t1(l.i,l.h)):(g||(d=ia(d,Zx)),l.i=new sa(d,l.h))}function je(l,d,g){l.i.set(d,g)}function yc(l){return je(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ra(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ia(l,d,g){return typeof l=="string"?(l=encodeURI(l).replace(d,Yx),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Yx(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var s_=/[#\/\?@]/g,Xx=/[#\?:]/g,Jx=/[#\?]/g,Zx=/[#\?@]/g,e1=/#/g;function sa(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function zr(l){l.g||(l.g=new Map,l.h=0,l.i&&Qx(l.i,function(d,g){l.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=sa.prototype,t.add=function(l,d){zr(this),this.i=null,l=ks(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(d),this.h+=1,this};function o_(l,d){zr(l),d=ks(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function a_(l,d){return zr(l),d=ks(l,d),l.g.has(d)}t.forEach=function(l,d){zr(this),this.g.forEach(function(g,y){g.forEach(function(O){l.call(d,O,y,this)},this)},this)},t.na=function(){zr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let y=0;y<d.length;y++){const O=l[y];for(let L=0;L<O.length;L++)g.push(d[y])}return g},t.V=function(l){zr(this);let d=[];if(typeof l=="string")a_(this,l)&&(d=d.concat(this.g.get(ks(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)d=d.concat(l[g])}return d},t.set=function(l,d){return zr(this),this.i=null,l=ks(this,l),a_(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function l_(l,d,g){o_(l,d),0<g.length&&(l.i=null,l.g.set(ks(l,d),S(g)),l.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var y=d[g];const L=encodeURIComponent(String(y)),q=this.V(y);for(y=0;y<q.length;y++){var O=L;q[y]!==""&&(O+="="+encodeURIComponent(String(q[y]))),l.push(O)}}return this.i=l.join("&")};function ks(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function t1(l,d){d&&!l.j&&(zr(l),l.i=null,l.g.forEach(function(g,y){var O=y.toLowerCase();y!=O&&(o_(this,y),l_(this,O,g))},l)),l.j=d}function n1(l,d){const g=new ta;if(a.Image){const y=new Image;y.onload=v(Wr,g,"TestLoadImage: loaded",!0,d,y),y.onerror=v(Wr,g,"TestLoadImage: error",!1,d,y),y.onabort=v(Wr,g,"TestLoadImage: abort",!1,d,y),y.ontimeout=v(Wr,g,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else d(!1)}function r1(l,d){const g=new ta,y=new AbortController,O=setTimeout(()=>{y.abort(),Wr(g,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:y.signal}).then(L=>{clearTimeout(O),L.ok?Wr(g,"TestPingServer: ok",!0,d):Wr(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),Wr(g,"TestPingServer: error",!1,d)})}function Wr(l,d,g,y,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),y(g)}catch{}}function i1(){this.g=new ot}function s1(l,d,g){const y=g||"";try{n_(l,function(O,L){let q=O;u(O)&&(q=ke(O)),d.push(y+L+"="+encodeURIComponent(q))})}catch(O){throw d.push(y+"type="+encodeURIComponent("_badmap")),O}}function _c(l){this.l=l.Ub||null,this.j=l.eb||!1}I(_c,cn),_c.prototype.g=function(){return new vc(this.l,this.j)},_c.prototype.i=function(l){return function(){return l}}({});function vc(l,d){G.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(vc,G),t=vc.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,aa(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oa(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,aa(this)),this.g&&(this.readyState=3,aa(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;c_(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function c_(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?oa(this):aa(this),this.readyState==3&&c_(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,oa(this))},t.Qa=function(l){this.g&&(this.response=l,oa(this))},t.ga=function(){this.g&&oa(this)};function oa(l){l.readyState=4,l.l=null,l.j=null,l.v=null,aa(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=d.next();return l.join(`\r
`)};function aa(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(vc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function u_(l){let d="";return D(l,function(g,y){d+=y,d+=":",d+=g,d+=`\r
`}),d}function Nd(l,d,g){e:{for(y in g){var y=!1;break e}y=!0}y||(g=u_(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):je(l,d,g))}function He(l){G.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(He,G);var o1=/^https?$/i,a1=["POST","PUT"];t=He.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,g,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Id.g(),this.v=this.o?vn(this.o):vn(Id),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(L){h_(this,L);return}if(l=g||"",g=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var O in y)g.set(O,y[O]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())g.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(a1,d,void 0))||y||O||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,q]of g)this.g.setRequestHeader(L,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{p_(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){h_(this,L)}};function h_(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,d_(l),wc(l)}function d_(l){l.A||(l.A=!0,oe(l,"complete"),oe(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,oe(this,"complete"),oe(this,"abort"),wc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wc(this,!0)),He.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?f_(this):this.bb())},t.bb=function(){f_(this)};function f_(l){if(l.h&&typeof o<"u"&&(!l.v[1]||ur(l)!=4||l.Z()!=2)){if(l.u&&ur(l)==4)zt(l.Ea,0,l);else if(oe(l,"readystatechange"),ur(l)==4){l.h=!1;try{const q=l.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var y;if(y=q===0){var O=String(l.D).match(r_)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),y=!o1.test(O?O.toLowerCase():"")}g=y}if(g)oe(l,"complete"),oe(l,"success");else{l.m=6;try{var L=2<ur(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",d_(l)}}finally{wc(l)}}}}function wc(l,d){if(l.g){p_(l);const g=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||oe(l,"ready");try{g.onreadystatechange=y}catch{}}}function p_(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function ur(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<ur(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),Ae(d)}};function m_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function l1(l){const d={};l=(l.g&&2<=ur(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(T(l[y]))continue;var g=A(l[y]);const O=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=d[O]||[];d[O]=L,L.push(g)}E(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function la(l,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||d}function g_(l){this.Aa=0,this.i=[],this.j=new ta,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=la("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=la("baseRetryDelayMs",5e3,l),this.cb=la("retryDelaySeedMs",1e4,l),this.Wa=la("forwardChannelMaxRetries",2,l),this.wa=la("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Xy(l&&l.concurrentRequestLimit),this.Da=new i1,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=g_.prototype,t.la=8,t.G=1,t.connect=function(l,d,g,y){$t(0),this.W=l,this.H=d||{},g&&y!==void 0&&(this.H.OSID=g,this.H.OAID=y),this.F=this.X,this.I=C_(this,null,this.W),Tc(this)};function bd(l){if(y_(l),l.G==3){var d=l.U++,g=cr(l.I);if(je(g,"SID",l.K),je(g,"RID",d),je(g,"TYPE","terminate"),ca(l,g),d=new Br(l,l.j,d),d.L=2,d.v=yc(cr(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=d.v,g=!0),g||(d.g=x_(d.j,null),d.g.ea(d.v)),d.F=Date.now(),pc(d)}I_(l)}function Ec(l){l.g&&(Od(l),l.g.cancel(),l.g=null)}function y_(l){Ec(l),l.u&&(a.clearTimeout(l.u),l.u=null),Sc(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Tc(l){if(!Jy(l.h)&&!l.s){l.s=!0;var d=l.Ga;Z||X(),F||(Z(),F=!0),B.add(d,l),l.B=0}}function c1(l,d){return Zy(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ea(m(l.Ga,l,d),S_(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new Br(this,this.j,l);let L=this.o;if(this.S&&(L?(L=_(L),k(L,this.S)):L=this.S),this.m!==null||this.O||(O.H=L,L=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var y=this.i[g];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=v_(this,O,d),g=cr(this.I),je(g,"RID",l),je(g,"CVER",22),this.D&&je(g,"X-HTTP-Session-Id",this.D),ca(this,g),L&&(this.O?d="headers="+encodeURIComponent(String(u_(L)))+"&"+d:this.m&&Nd(g,this.m,L)),Pd(this.h,O),this.Ua&&je(g,"TYPE","init"),this.P?(je(g,"$req",d),je(g,"SID","null"),O.T=!0,xd(O,g,null)):xd(O,g,d),this.G=2}}else this.G==3&&(l?__(this,l):this.i.length==0||Jy(this.h)||__(this))};function __(l,d){var g;d?g=d.l:g=l.U++;const y=cr(l.I);je(y,"SID",l.K),je(y,"RID",g),je(y,"AID",l.T),ca(l,y),l.m&&l.o&&Nd(y,l.m,l.o),g=new Br(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),d&&(l.i=d.D.concat(l.i)),d=v_(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Pd(l.h,g),xd(g,y,d)}function ca(l,d){l.H&&D(l.H,function(g,y){je(d,y,g)}),l.l&&n_({},function(g,y){je(d,y,g)})}function v_(l,d,g){g=Math.min(l.i.length,g);var y=l.l?m(l.l.Na,l.l,l):null;e:{var O=l.i;let L=-1;for(;;){const q=["count="+g];L==-1?0<g?(L=O[0].g,q.push("ofs="+L)):L=0:q.push("ofs="+L);let Pe=!0;for(let vt=0;vt<g;vt++){let Ee=O[vt].g;const Rt=O[vt].map;if(Ee-=L,0>Ee)L=Math.max(0,O[vt].g-100),Pe=!1;else try{s1(Rt,q,"req"+Ee+"_")}catch{y&&y(Rt)}}if(Pe){y=q.join("&");break e}}}return l=l.i.splice(0,g),d.D=l,y}function w_(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Z||X(),F||(Z(),F=!0),B.add(d,l),l.v=0}}function Dd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ea(m(l.Fa,l),S_(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,E_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ea(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$t(10),Ec(this),E_(this))};function Od(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function E_(l){l.g=new Br(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=cr(l.qa);je(d,"RID","rpc"),je(d,"SID",l.K),je(d,"AID",l.T),je(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&je(d,"TO",l.ja),je(d,"TYPE","xmlhttp"),ca(l,d),l.m&&l.o&&Nd(d,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=yc(cr(d)),g.m=null,g.P=!0,Ky(g,l)}t.Za=function(){this.C!=null&&(this.C=null,Ec(this),Dd(this),$t(19))};function Sc(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function T_(l,d){var g=null;if(l.g==d){Sc(l),Od(l),l.g=null;var y=2}else if(Ad(l.h,d))g=d.D,e_(l.h,d),y=1;else return;if(l.G!=0){if(d.o)if(y==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var O=l.B;y=Mi(),oe(y,new $y(y,g)),Tc(l)}else w_(l);else if(O=d.s,O==3||O==0&&0<d.X||!(y==1&&c1(l,d)||y==2&&Dd(l)))switch(g&&0<g.length&&(d=l.h,d.i=d.i.concat(g)),O){case 1:Bi(l,5);break;case 4:Bi(l,10);break;case 3:Bi(l,6);break;default:Bi(l,2)}}}function S_(l,d){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*d}function Bi(l,d){if(l.j.info("Error code "+d),d==2){var g=m(l.fb,l),y=l.Xa;const O=!y;y=new Ui(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||mc(y,"https"),yc(y),O?n1(y.toString(),g):r1(y.toString(),g)}else $t(2);l.G=0,l.l&&l.l.sa(d),I_(l),y_(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),$t(2)):(this.j.info("Failed to ping google.com"),$t(1))};function I_(l){if(l.G=0,l.ka=[],l.l){const d=t_(l.h);(d.length!=0||l.i.length!=0)&&(b(l.ka,d),b(l.ka,l.i),l.h.i.length=0,S(l.i),l.i.length=0),l.l.ra()}}function C_(l,d,g){var y=g instanceof Ui?cr(g):new Ui(g);if(y.g!="")d&&(y.g=d+"."+y.g),gc(y,y.s);else{var O=a.location;y=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;var L=new Ui(null);y&&mc(L,y),d&&(L.g=d),O&&gc(L,O),g&&(L.l=g),y=L}return g=l.D,d=l.ya,g&&d&&je(y,g,d),je(y,"VER",l.la),ca(l,y),y}function x_(l,d,g){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new He(new _c({eb:g})):new He(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function k_(){}t=k_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ic(){}Ic.prototype.g=function(l,d){return new un(l,d)};function un(l,d){G.call(this),this.g=new g_(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!T(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!T(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Rs(this)}I(un,G),un.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},un.prototype.close=function(){bd(this.g)},un.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=ke(l),l=g);d.i.push(new Hx(d.Ya++,l)),d.G==3&&Tc(d)},un.prototype.N=function(){this.g.l=null,delete this.j,bd(this.g),delete this.g,un.aa.N.call(this)};function R_(l){Ur.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const g in d){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}I(R_,Ur);function A_(){Jo.call(this),this.status=1}I(A_,Jo);function Rs(l){this.g=l}I(Rs,k_),Rs.prototype.ua=function(){oe(this.g,"a")},Rs.prototype.ta=function(l){oe(this.g,new R_(l))},Rs.prototype.sa=function(l){oe(this.g,new A_)},Rs.prototype.ra=function(){oe(this.g,"b")},Ic.prototype.createWebChannel=Ic.prototype.g,un.prototype.send=un.prototype.o,un.prototype.open=un.prototype.m,un.prototype.close=un.prototype.close,iI=function(){return new Ic},rI=function(){return Mi()},nI=lr,Np={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},dc.NO_ERROR=0,dc.TIMEOUT=8,dc.HTTP_ERROR=6,mu=dc,qy.COMPLETE="complete",tI=qy,_t.EventType=wn,wn.OPEN="a",wn.CLOSE="b",wn.ERROR="c",wn.MESSAGE="d",G.prototype.listen=G.prototype.K,Pa=_t,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,eI=He}).apply(typeof $c<"u"?$c:typeof self<"u"?self:typeof window<"u"?window:{});const g0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Dt.UNAUTHENTICATED=new Dt(null),Dt.GOOGLE_CREDENTIALS=new Dt("google-credentials-uid"),Dt.FIRST_PARTY=new Dt("first-party-uid"),Dt.MOCK_USER=new Dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new $h("@firebase/firestore");function _a(){return ls.logLevel}function J(t,...e){if(ls.logLevel<=pe.DEBUG){const n=e.map(mg);ls.debug(`Firestore (${Lo}): ${t}`,...n)}}function Pr(t,...e){if(ls.logLevel<=pe.ERROR){const n=e.map(mg);ls.error(`Firestore (${Lo}): ${t}`,...n)}}function wo(t,...e){if(ls.logLevel<=pe.WARN){const n=e.map(mg);ls.warn(`Firestore (${Lo}): ${t}`,...n)}}function mg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${Lo}) INTERNAL ASSERTION FAILED: `+t;throw Pr(e),new Error(e)}function ve(t,e){t||ne()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Lr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Dt.UNAUTHENTICATED))}shutdown(){}}class bb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Db{constructor(e){this.t=e,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ve(this.o===void 0);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new nr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new nr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new sI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new Dt(e)}}class Ob{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Lb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ob(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ve(this.o===void 0);const r=s=>{s.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.R=n.token,new jb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Vb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function Eo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ut(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new ut(0,0))}static max(){return new re(new ut(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return El.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof El?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends El{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const Fb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends El{construct(e,n,r){return new Tt(e,n,r)}static isValidIdentifier(e){return Fb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new K(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Ne.fromString(e))}static fromName(e){return new te(Ne.fromString(e).popFirst(5))}static empty(){return new te(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Ne(e.slice()))}}function Ub(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new ut(n+1,0):new ut(n,r));return new Ti(i,te.empty(),e)}function Bb(t){return new Ti(t.readTime,t.key,-1)}class Ti{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ti(re.min(),te.empty(),-1)}static max(){return new Ti(re.max(),te.empty(),-1)}}function zb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $b{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gl(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==Wb)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++a,a===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function qb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Kl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}gg.oe=-1;function Ql(t){return t==null}function th(t){return t===0&&1/t==-1/0}function Hb(t){return typeof t=="number"&&Number.isInteger(t)&&!th(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function aI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rt=class bp{constructor(e,n){this.comparator=e,this.root=n||pi.EMPTY}insert(e,n){return new bp(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pi.BLACK,null,null))}remove(e){return new bp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pi.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qc(this.root,e,this.comparator,!1)}getReverseIterator(){return new qc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qc(this.root,e,this.comparator,!0)}},qc=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},pi=class dr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??dr.RED,this.left=i??dr.EMPTY,this.right=s??dr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new dr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return dr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}};pi.EMPTY=null,pi.RED=!0,pi.BLACK=!1;pi.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,i,s){return this}insert(e,n,r){return new pi(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _0(this.data.getIterator())}getIteratorFrom(e){return new _0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new It(this.comparator);return n.data=e,n}}class _0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new fn([])}unionWith(e){let n=new It(Tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Eo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new lI("Invalid base64 string: "+s):s}}(e);return new kt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const Gb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Si(t){if(ve(!!t),typeof t=="string"){let e=0;const n=Gb.exec(t);if(ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function cs(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _g(t){const e=t.mapValue.fields.__previous_value__;return yg(e)?_g(e):e}function Tl(t){const e=Si(t.mapValue.fields.__local_write_time__.timestampValue);return new ut(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n,r,i,s,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Sl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Sl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Sl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc={mapValue:{}};function us(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?yg(t)?4:Yb(t)?9007199254740991:Qb(t)?10:11:ne()}function ir(t,e){if(t===e)return!0;const n=us(t);if(n!==us(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Tl(t).isEqual(Tl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Si(i.timestampValue),a=Si(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return cs(i.bytesValue).isEqual(cs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ye(i.geoPointValue.latitude)===Ye(s.geoPointValue.latitude)&&Ye(i.geoPointValue.longitude)===Ye(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ye(i.integerValue)===Ye(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ye(i.doubleValue),a=Ye(s.doubleValue);return o===a?th(o)===th(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Eo(t.arrayValue.values||[],e.arrayValue.values||[],ir);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(y0(o)!==y0(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!ir(o[c],a[c])))return!1;return!0}(t,e);default:return ne()}}function Il(t,e){return(t.values||[]).find(n=>ir(n,e))!==void 0}function To(t,e){if(t===e)return 0;const n=us(t),r=us(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ye(s.integerValue||s.doubleValue),c=Ye(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return v0(t.timestampValue,e.timestampValue);case 4:return v0(Tl(t),Tl(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(s,o){const a=cs(s),c=cs(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const f=Te(a[u],c[u]);if(f!==0)return f}return Te(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Te(Ye(s.latitude),Ye(o.latitude));return a!==0?a:Te(Ye(s.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return w0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,c,u,f;const p=s.fields||{},m=o.fields||{},v=(a=p.value)===null||a===void 0?void 0:a.arrayValue,I=(c=m.value)===null||c===void 0?void 0:c.arrayValue,S=Te(((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0,((f=I==null?void 0:I.values)===null||f===void 0?void 0:f.length)||0);return S!==0?S:w0(v,I)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Hc.mapValue&&o===Hc.mapValue)return 0;if(s===Hc.mapValue)return 1;if(o===Hc.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=Te(c[p],f[p]);if(m!==0)return m;const v=To(a[c[p]],u[f[p]]);if(v!==0)return v}return Te(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ne()}}function v0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Si(t),r=Si(e),i=Te(n.seconds,r.seconds);return i!==0?i:Te(n.nanos,r.nanos)}function w0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=To(n[i],r[i]);if(s)return s}return Te(n.length,r.length)}function So(t){return Dp(t)}function Dp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Si(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return cs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Dp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Dp(n.fields[o])}`;return i+"}"}(t.mapValue):ne()}function E0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Op(t){return!!t&&"integerValue"in t}function vg(t){return!!t&&"arrayValue"in t}function T0(t){return!!t&&"nullValue"in t}function S0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gu(t){return!!t&&"mapValue"in t}function Qb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function $a(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$a(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$a(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Yb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!gu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$a(n)}setAll(e){let n=Tt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=$a(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());gu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ir(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];gu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Es(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ht($a(this.value))}}function cI(t){const e=[];return Es(t.fields,(n,r)=>{const i=new Tt([n]);if(gu(r)){const s=cI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new mt(e,0,re.min(),re.min(),re.min(),Ht.empty(),0)}static newFoundDocument(e,n,r,i){return new mt(e,1,n,re.min(),r,i,0)}static newNoDocument(e,n){return new mt(e,2,n,re.min(),re.min(),Ht.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,re.min(),re.min(),Ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n){this.position=e,this.inclusive=n}}function I0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=To(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function C0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ir(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n="asc"){this.field=e,this.dir=n}}function Xb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{}class tt extends uI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Zb(e,n,r):n==="array-contains"?new n2(e,r):n==="in"?new r2(e,r):n==="not-in"?new i2(e,r):n==="array-contains-any"?new s2(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new e2(e,r):new t2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(To(n,this.value)):n!==null&&us(this.value)===us(n)&&this.matchesComparison(To(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zn extends uI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new zn(e,n)}matches(e){return hI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function hI(t){return t.op==="and"}function dI(t){return Jb(t)&&hI(t)}function Jb(t){for(const e of t.filters)if(e instanceof zn)return!1;return!0}function Lp(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+So(t.value);if(dI(t))return t.filters.map(e=>Lp(e)).join(",");{const e=t.filters.map(n=>Lp(n)).join(",");return`${t.op}(${e})`}}function fI(t,e){return t instanceof tt?function(r,i){return i instanceof tt&&r.op===i.op&&r.field.isEqual(i.field)&&ir(r.value,i.value)}(t,e):t instanceof zn?function(r,i){return i instanceof zn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&fI(o,i.filters[a]),!0):!1}(t,e):void ne()}function pI(t){return t instanceof tt?function(n){return`${n.field.canonicalString()} ${n.op} ${So(n.value)}`}(t):t instanceof zn?function(n){return n.op.toString()+" {"+n.getFilters().map(pI).join(" ,")+"}"}(t):"Filter"}class Zb extends tt{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class e2 extends tt{constructor(e,n){super(e,"in",n),this.keys=mI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class t2 extends tt{constructor(e,n){super(e,"not-in",n),this.keys=mI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class n2 extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vg(n)&&Il(n.arrayValue,this.value)}}class r2 extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Il(this.value.arrayValue,n)}}class i2 extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Il(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Il(this.value.arrayValue,n)}}class s2 extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Il(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function x0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new o2(t,e,n,r,i,s,o)}function wg(t){const e=ae(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Lp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ql(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>So(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>So(r)).join(",")),e.ue=n}return e.ue}function Eg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Xb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!C0(t.startAt,e.startAt)&&C0(t.endAt,e.endAt)}function jp(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function a2(t,e,n,r,i,s,o,a){return new jo(t,e,n,r,i,s,o,a)}function Qh(t){return new jo(t)}function k0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gI(t){return t.collectionGroup!==null}function qa(t){const e=ae(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new It(Tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Cl(s,r))}),n.has(Tt.keyField().canonicalString())||e.ce.push(new Cl(Tt.keyField(),r))}return e.ce}function rr(t){const e=ae(t);return e.le||(e.le=l2(e,qa(t))),e.le}function l2(t,e){if(t.limitType==="F")return x0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Cl(i.field,s)});const n=t.endAt?new nh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new nh(t.startAt.position,t.startAt.inclusive):null;return x0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Mp(t,e){const n=t.filters.concat([e]);return new jo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function rh(t,e,n){return new jo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yh(t,e){return Eg(rr(t),rr(e))&&t.limitType===e.limitType}function yI(t){return`${wg(rr(t))}|lt:${t.limitType}`}function Ds(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>pI(i)).join(", ")}]`),Ql(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>So(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>So(i)).join(",")),`Target(${r})`}(rr(t))}; limitType=${t.limitType})`}function Xh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):te.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of qa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=I0(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,qa(r),i)||r.endAt&&!function(o,a,c){const u=I0(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,qa(r),i))}(t,e)}function c2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _I(t){return(e,n)=>{let r=!1;for(const i of qa(t)){const s=u2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function u2(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?To(c,u):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Es(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return aI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h2=new rt(te.comparator);function Nr(){return h2}const vI=new rt(te.comparator);function Na(...t){let e=vI;for(const n of t)e=e.insert(n.key,n);return e}function wI(t){let e=vI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qi(){return Ha()}function EI(){return Ha()}function Ha(){return new Mo(t=>t.toString(),(t,e)=>t.isEqual(e))}const d2=new rt(te.comparator),f2=new It(te.comparator);function me(...t){let e=f2;for(const n of t)e=e.add(n);return e}const p2=new It(Te);function m2(){return p2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:th(e)?"-0":e}}function TI(t){return{integerValue:""+t}}function SI(t,e){return Hb(e)?TI(e):Tg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(){this._=void 0}}function g2(t,e,n){return t instanceof xl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&yg(s)&&(s=_g(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof kl?CI(t,e):t instanceof Rl?xI(t,e):function(i,s){const o=II(i,s),a=R0(o)+R0(i.Pe);return Op(o)&&Op(i.Pe)?TI(a):Tg(i.serializer,a)}(t,e)}function y2(t,e,n){return t instanceof kl?CI(t,e):t instanceof Rl?xI(t,e):n}function II(t,e){return t instanceof Al?function(r){return Op(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class xl extends Jh{}class kl extends Jh{constructor(e){super(),this.elements=e}}function CI(t,e){const n=kI(e);for(const r of t.elements)n.some(i=>ir(i,r))||n.push(r);return{arrayValue:{values:n}}}class Rl extends Jh{constructor(e){super(),this.elements=e}}function xI(t,e){let n=kI(e);for(const r of t.elements)n=n.filter(i=>!ir(i,r));return{arrayValue:{values:n}}}class Al extends Jh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function R0(t){return Ye(t.integerValue||t.doubleValue)}function kI(t){return vg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,n){this.field=e,this.transform=n}}function _2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof kl&&i instanceof kl||r instanceof Rl&&i instanceof Rl?Eo(r.elements,i.elements,ir):r instanceof Al&&i instanceof Al?ir(r.Pe,i.Pe):r instanceof xl&&i instanceof xl}(t.transform,e.transform)}class v2{constructor(e,n){this.version=e,this.transformResults=n}}class nt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nt}static exists(e){return new nt(void 0,e)}static updateTime(e){return new nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Zh{}function AI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xl(t.key,nt.none()):new Yl(t.key,t.data,nt.none());{const n=t.data,r=Ht.empty();let i=new It(Tt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new bi(t.key,r,new fn(i.toArray()),nt.none())}}function w2(t,e,n){t instanceof Yl?function(i,s,o){const a=i.value.clone(),c=P0(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof bi?function(i,s,o){if(!yu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=P0(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(PI(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ga(t,e,n,r){return t instanceof Yl?function(s,o,a,c){if(!yu(s.precondition,o))return a;const u=s.value.clone(),f=N0(s.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof bi?function(s,o,a,c){if(!yu(s.precondition,o))return a;const u=N0(s.fieldTransforms,c,o),f=o.data;return f.setAll(PI(s)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,a){return yu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function E2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=II(r.transform,i||null);s!=null&&(n===null&&(n=Ht.empty()),n.set(r.field,s))}return n||null}function A0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Eo(r,i,(s,o)=>_2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yl extends Zh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class bi extends Zh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function PI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function P0(t,e,n){const r=new Map;ve(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,y2(o,a,n[i]))}return r}function N0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,g2(s,o,e))}return r}class Xl extends Zh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NI extends Zh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&w2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ga(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ga(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=EI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=AI(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&Eo(this.mutations,e.mutations,(n,r)=>A0(n,r))&&Eo(this.baseMutations,e.baseMutations,(n,r)=>A0(n,r))}}class Sg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ve(e.mutations.length===r.length);let i=function(){return d2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Sg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,ye;function bI(t){switch(t){default:return ne();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function DI(t){if(t===void 0)return Pr("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ze.OK:return V.OK;case Ze.CANCELLED:return V.CANCELLED;case Ze.UNKNOWN:return V.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return V.INTERNAL;case Ze.UNAVAILABLE:return V.UNAVAILABLE;case Ze.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ze.NOT_FOUND:return V.NOT_FOUND;case Ze.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ze.ABORTED:return V.ABORTED;case Ze.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ze.DATA_LOSS:return V.DATA_LOSS;default:return ne()}}(ye=Ze||(Ze={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=new es([4294967295,4294967295],0);function b0(t){const e=C2().encode(t),n=new ZS;return n.update(e),new Uint8Array(n.digest())}function D0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new es([n,r],0),new es([i,s],0)]}class Ig{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ba(`Invalid padding: ${n}`);if(r<0)throw new ba(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ba(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ba(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=es.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(es.fromNumber(r)));return i.compare(x2)===1&&(i=new es([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=b0(e),[r,i]=D0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ig(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=b0(e),[r,i]=D0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ba extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Jl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ed(re.min(),i,new rt(Te),Nr(),me())}}class Jl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Jl(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class OI{constructor(e,n){this.targetId=e,this.me=n}}class LI{constructor(e,n,r=kt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class O0{constructor(){this.fe=0,this.ge=j0(),this.pe=kt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=me(),n=me(),r=me();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne()}}),new Jl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=j0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class k2{constructor(e){this.Le=e,this.Be=new Map,this.ke=Nr(),this.qe=L0(),this.Qe=new rt(Te)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(jp(s))if(r===0){const o=new te(s.path);this.Ue(n,o,mt.newNoDocument(o,re.min()))}else ve(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),c=a?this.Xe(a,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=cs(r).toUint8Array()}catch(c){if(c instanceof lI)return wo("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Ig(o,i,s)}catch(c){return wo(c instanceof ba?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&jp(a.target)){const c=new te(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,mt.newNoDocument(c,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=me();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new ed(e,n,this.Qe,this.ke,r);return this.ke=Nr(),this.qe=L0(),this.Qe=new rt(Te),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new O0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new It(Te),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new O0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function L0(){return new rt(te.comparator)}function j0(){return new rt(te.comparator)}const R2={asc:"ASCENDING",desc:"DESCENDING"},A2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},P2={and:"AND",or:"OR"};class N2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vp(t,e){return t.useProto3Json||Ql(e)?e:{value:e}}function ih(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function b2(t,e){return ih(t,e.toTimestamp())}function mn(t){return ve(!!t),re.fromTimestamp(function(n){const r=Si(n);return new ut(r.seconds,r.nanos)}(t))}function Cg(t,e){return Fp(t,e).canonicalString()}function Fp(t,e){const n=function(i){return new Ne(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function MI(t){const e=Ne.fromString(t);return ve(WI(e)),e}function sh(t,e){return Cg(t.databaseId,e.path)}function Ka(t,e){const n=MI(e);if(n.get(1)!==t.databaseId.projectId)throw new K(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(FI(n))}function VI(t,e){return Cg(t.databaseId,e)}function D2(t){const e=MI(t);return e.length===4?Ne.emptyPath():FI(e)}function Up(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function FI(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function M0(t,e,n){return{name:sh(t,e),fields:n.value.mapValue.fields}}function O2(t,e){return"found"in e?function(r,i){ve(!!i.found),i.found.name,i.found.updateTime;const s=Ka(r,i.found.name),o=mn(i.found.updateTime),a=i.found.createTime?mn(i.found.createTime):re.min(),c=new Ht({mapValue:{fields:i.found.fields}});return mt.newFoundDocument(s,o,a,c)}(t,e):"missing"in e?function(r,i){ve(!!i.missing),ve(!!i.readTime);const s=Ka(r,i.missing),o=mn(i.readTime);return mt.newNoDocument(s,o)}(t,e):ne()}function L2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,f){return u.useProto3Json?(ve(f===void 0||typeof f=="string"),kt.fromBase64String(f||"")):(ve(f===void 0||f instanceof Buffer||f instanceof Uint8Array),kt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const f=u.code===void 0?V.UNKNOWN:DI(u.code);return new K(f,u.message||"")}(o);n=new LI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ka(t,r.document.name),s=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):re.min(),a=new Ht({mapValue:{fields:r.document.fields}}),c=mt.newFoundDocument(i,s,o,a),u=r.targetIds||[],f=r.removedTargetIds||[];n=new _u(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ka(t,r.document),s=r.readTime?mn(r.readTime):re.min(),o=mt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new _u([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ka(t,r.document),s=r.removedTargetIds||[];n=new _u([],s,i,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new I2(i,s),a=r.targetId;n=new OI(a,o)}}return n}function UI(t,e){let n;if(e instanceof Yl)n={update:M0(t,e.key,e.value)};else if(e instanceof Xl)n={delete:sh(t,e.key)};else if(e instanceof bi)n={update:M0(t,e.key,e.data),updateMask:$2(e.fieldMask)};else{if(!(e instanceof NI))return ne();n={verify:sh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof xl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof kl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Rl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Al)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:b2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ne()}(t,e.precondition)),n}function j2(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?mn(i.updateTime):mn(s);return o.isEqual(re.min())&&(o=mn(s)),new v2(o,i.transformResults||[])}(n,e))):[]}function M2(t,e){return{documents:[VI(t,e.path)]}}function V2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=VI(t,i);const s=function(u){if(u.length!==0)return zI(zn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:Os(m.field),direction:B2(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Vp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:i}}function F2(t){let e=D2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=BI(p);return m instanceof zn&&dI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(I){return new Cl(Ls(I.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(p){let m;return m=typeof p=="object"?p.value:p,Ql(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,v=p.values||[];return new nh(v,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,v=p.values||[];return new nh(v,m)}(n.endAt)),a2(e,i,o,s,a,"F",c,u)}function U2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function BI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ls(n.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ls(n.unaryFilter.field);return tt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ls(n.unaryFilter.field);return tt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ls(n.unaryFilter.field);return tt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return tt.create(Ls(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return zn.create(n.compositeFilter.filters.map(r=>BI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function B2(t){return R2[t]}function z2(t){return A2[t]}function W2(t){return P2[t]}function Os(t){return{fieldPath:t.canonicalString()}}function Ls(t){return Tt.fromServerFormat(t.fieldPath)}function zI(t){return t instanceof tt?function(n){if(n.op==="=="){if(S0(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NAN"}};if(T0(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(S0(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NOT_NAN"}};if(T0(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Os(n.field),op:z2(n.op),value:n.value}}}(t):t instanceof zn?function(n){const r=n.getFilters().map(i=>zI(i));return r.length===1?r[0]:{compositeFilter:{op:W2(n.op),filters:r}}}(t):ne()}function $2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function WI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,r,i,s=re.min(),o=re.min(),a=kt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new ri(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e){this.ct=e}}function H2(t){const e=F2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(){this.un=new K2}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Ti.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Ti.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class K2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new It(Ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new It(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Io(0)}static kn(){return new Io(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(){this.changes=new Mo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ga(r.mutation,i,fn.empty(),ut.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const i=Qi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Na();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Nr();const o=Ha(),a=function(){return Ha()}();return n.forEach((c,u)=>{const f=r.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof bi)?s=s.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Ga(f.mutation,u,f.mutation.getFieldMask(),ut.now())):o.set(u.key,fn.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return a.set(u,new Y2(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ha();let i=new rt((o,a)=>o-a),s=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||fn.empty();f=a.applyToLocalView(u,f),r.set(c,f);const p=(i.get(a.batchId)||me()).add(c);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,f=c.value,p=EI();f.forEach(m=>{if(!s.has(m)){const v=AI(n.get(m),r.get(m));v!==null&&p.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(Qi());let a=-1,c=s;return o.next(u=>U.forEach(u,(f,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,me())).next(f=>({batchId:a,changes:wI(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let i=Na();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Na();return this.indexManager.getCollectionParents(e,s).next(a=>U.forEach(a,c=>{const u=function(p,m){return new jo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,mt.newInvalidDocument(f)))});let a=Na();return o.forEach((c,u)=>{const f=s.get(c);f!==void 0&&Ga(f.mutation,u,fn.empty(),ut.now()),Xh(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:mn(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:H2(i.bundledQuery),readTime:mn(i.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(){this.overlays=new rt(te.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qi();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=Qi(),s=n.length+1,o=new te(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new rt((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=s.get(u.largestBatchId);f===null&&(f=Qi(),s=s.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const a=Qi(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>a.set(u,f)),!(a.size()>=i)););return U.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new S2(n,r));let s=this.Ir.get(n);s===void 0&&(s=me(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(){this.Tr=new It(dt.Er),this.dr=new It(dt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new dt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new dt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new te(new Ne([])),r=new dt(n,e),i=new dt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new te(new Ne([])),r=new dt(n,e),i=new dt(n,e+1);let s=me();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new dt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class dt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return te.comparator(e.key,n.key)||Te(e.wr,n.wr)}static Ar(e,n){return Te(e.wr,n.wr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new It(dt.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new T2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new dt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new dt(n,0),i=new dt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new It(Te);return n.forEach(i=>{const s=new dt(i,0),o=new dt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;te.isDocumentKey(s)||(s=s.child(""));const o=new dt(new te(s),0);let a=new It(Te);return this.br.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.wr)),!0)},o),U.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,i=>{const s=new dt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new dt(n,0),i=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e){this.Mr=e,this.docs=function(){return new rt(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=Nr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():mt.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Nr();const o=n.path,a=new te(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||zb(Bb(f),r)<=0||(i.has(f.key)||Xh(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ne()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new rD(this)}getSize(e){return U.resolve(this.size)}}class rD extends Q2{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e){this.persistence=e,this.Nr=new Mo(n=>wg(n),Eg),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Lr=0,this.Br=new xg,this.targetCount=0,this.kr=Io.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Io(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,n){this.qr={},this.overlays={},this.Qr=new gg(0),this.Kr=!1,this.Kr=!0,this.$r=new eD,this.referenceDelegate=e(this),this.Ur=new iD(this),this.indexManager=new G2,this.remoteDocumentCache=function(i){return new nD(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new q2(n),this.Gr=new J2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Z2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new tD(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const i=new oD(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class oD extends $b{constructor(e){super(),this.currentSequenceNumber=e}}class kg{constructor(e){this.persistence=e,this.Jr=new xg,this.Yr=null}static Zr(e){return new kg(e)}get Xr(){if(this.Yr)return this.Yr;throw ne()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const i=te.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,re.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=me(),i=me();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Rg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return YR()?8:qb(Vt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new aD;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(_a()<=pe.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Ds(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(_a()<=pe.DEBUG&&J("QueryEngine","Query:",Ds(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(_a()<=pe.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Ds(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rr(n))):U.resolve())}Yi(e,n){if(k0(n))return U.resolve(null);let r=rr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=rh(n,null,"F"),r=rr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=me(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ts(n,a);return this.ns(n,u,o,c.readTime)?this.Yi(e,rh(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,r,i){return k0(n)||i.isEqual(re.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?U.resolve(null):(_a()<=pe.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ds(n)),this.rs(e,o,n,Ub(i,-1)).next(a=>a))})}ts(e,n){let r=new It(_I(e));return n.forEach((i,s)=>{Xh(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return _a()<=pe.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Ds(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ti.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new rt(Te),this._s=new Mo(s=>wg(s),Eg),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new X2(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function uD(t,e,n,r){return new cD(t,e,n,r)}async function $I(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=me();for(const u of i){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of s){a.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function hD(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,f){const p=u.batch,m=p.keys();let v=U.resolve();return m.forEach(I=>{v=v.next(()=>f.getEntry(c,I)).next(S=>{const b=u.docVersions.get(I);ve(b!==null),S.version.compareTo(b)<0&&(p.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),f.addEntry(S)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(c,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=me();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function qI(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function dD(t,e){const n=ae(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(kt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),i=i.insert(p,v),function(S,b,w){return S.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,v,f)&&a.push(n.Ur.updateTargetData(s,v))});let c=Nr(),u=me();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),a.push(fD(s,o,e.documentUpdates).next(f=>{c=f.Ps,u=f.Is})),!r.isEqual(re.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(f)}return U.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.os=i,s))}function fD(t,e,n){let r=me(),i=me();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Nr();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):J("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:i}})}function pD(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function mD(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new ri(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Bp(t,e,n){const r=ae(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Kl(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function V0(t,e,n){const r=ae(t);let i=re.min(),s=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const p=ae(c),m=p._s.get(f);return m!==void 0?U.resolve(p.os.get(m)):p.Ur.getTargetData(u,f)}(r,o,rr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:re.min(),n?s:me())).next(a=>(gD(r,c2(e),a),{documents:a,Ts:s})))}function gD(t,e,n){let r=t.us.get(e)||re.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class F0{constructor(){this.activeTargetIds=m2()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yD{constructor(){this.so=new F0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new F0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gc=null;function gf(){return Gc===null?Gc=function(){return 268435456+Math.round(2147483648*Math.random())}():Gc++,"0x"+Gc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class ED extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=gf(),c=this.xo(n,r.toUriEncodedString());J("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,s,o),this.No(n,c,u,i).then(f=>(J("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw wo("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",c,"request:",i),f})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Lo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=vD[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=gf();return new Promise((o,a)=>{const c=new eI;c.setWithCredentials(!0),c.listenOnce(tI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case mu.NO_ERROR:const f=c.getResponseJson();J(bt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case mu.TIMEOUT:J(bt,`RPC '${e}' ${s} timed out`),a(new K(V.DEADLINE_EXCEEDED,"Request time out"));break;case mu.HTTP_ERROR:const p=c.getStatus();if(J(bt,`RPC '${e}' ${s} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const I=function(b){const w=b.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(w)>=0?w:V.UNKNOWN}(v.status);a(new K(I,v.message))}else a(new K(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new K(V.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{J(bt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);J(bt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}Bo(e,n,r){const i=gf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=iI(),a=rI(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=s.join("");J(bt,`Creating RPC '${e}' stream ${i}: ${f}`,c);const p=o.createWebChannel(f,c);let m=!1,v=!1;const I=new wD({Io:b=>{v?J(bt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(J(bt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),J(bt,`RPC '${e}' stream ${i} sending:`,b),p.send(b))},To:()=>p.close()}),S=(b,w,T)=>{b.listen(w,R=>{try{T(R)}catch(P){setTimeout(()=>{throw P},0)}})};return S(p,Pa.EventType.OPEN,()=>{v||(J(bt,`RPC '${e}' stream ${i} transport opened.`),I.yo())}),S(p,Pa.EventType.CLOSE,()=>{v||(v=!0,J(bt,`RPC '${e}' stream ${i} transport closed`),I.So())}),S(p,Pa.EventType.ERROR,b=>{v||(v=!0,wo(bt,`RPC '${e}' stream ${i} transport errored:`,b),I.So(new K(V.UNAVAILABLE,"The operation could not be completed")))}),S(p,Pa.EventType.MESSAGE,b=>{var w;if(!v){const T=b.data[0];ve(!!T);const R=T,P=R.error||((w=R[0])===null||w===void 0?void 0:w.error);if(P){J(bt,`RPC '${e}' stream ${i} received error:`,P);const M=P.status;let D=function(C){const k=Ze[C];if(k!==void 0)return DI(k)}(M),E=P.message;D===void 0&&(D=V.INTERNAL,E="Unknown error status: "+M+" with message "+P.message),v=!0,I.So(new K(D,E)),p.close()}else J(bt,`RPC '${e}' stream ${i} received:`,T),I.bo(T)}}),S(a,nI.STAT_EVENT,b=>{b.stat===Np.PROXY?J(bt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Np.NOPROXY&&J(bt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function yf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t){return new N2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&J("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n,r,i,s,o,a,c){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ag(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Pr(n.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new K(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TD extends HI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=L2(this.serializer,e),r=function(s){if(!("targetChange"in s))return re.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?mn(o.readTime):re.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Up(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=jp(c)?{documents:M2(s,c)}:{query:V2(s,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=jI(s,o.resumeToken);const u=Vp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(re.min())>0){a.readTime=ih(s,o.snapshotVersion.toTimestamp());const u=Vp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=U2(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Up(this.serializer),n.removeTarget=e,this.a_(n)}}class SD extends HI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ve(!!e.streamToken),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=j2(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Up(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>UI(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new K(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Fp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Fp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class CD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Pr(n),this.D_=!1):J("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ts(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ae(c);u.L_.add(4),await Zl(u),u.q_.set("Unknown"),u.L_.delete(4),await nd(u)}(this))})}),this.q_=new CD(r,i)}}async function nd(t){if(Ts(t))for(const e of t.B_)await e(!0)}async function Zl(t){for(const e of t.B_)await e(!1)}function GI(t,e){const n=ae(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Dg(n)?bg(n):Vo(n).r_()&&Ng(n,e))}function Pg(t,e){const n=ae(t),r=Vo(n);n.N_.delete(e),r.r_()&&KI(n,e),n.N_.size===0&&(r.r_()?r.o_():Ts(n)&&n.q_.set("Unknown"))}function Ng(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vo(t).A_(e)}function KI(t,e){t.Q_.xe(e),Vo(t).R_(e)}function bg(t){t.Q_=new k2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Vo(t).start(),t.q_.v_()}function Dg(t){return Ts(t)&&!Vo(t).n_()&&t.N_.size>0}function Ts(t){return ae(t).L_.size===0}function QI(t){t.Q_=void 0}async function kD(t){t.q_.set("Online")}async function RD(t){t.N_.forEach((e,n)=>{Ng(t,e)})}async function AD(t,e){QI(t),Dg(t)?(t.q_.M_(e),bg(t)):t.q_.set("Unknown")}async function PD(t,e,n){if(t.q_.set("Online"),e instanceof LI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oh(t,r)}else if(e instanceof _u?t.Q_.Ke(e):e instanceof OI?t.Q_.He(e):t.Q_.We(e),!n.isEqual(re.min()))try{const r=await qI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.N_.get(u);f&&s.N_.set(u,f.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const f=s.N_.get(c);if(!f)return;s.N_.set(c,f.withResumeToken(kt.EMPTY_BYTE_STRING,f.snapshotVersion)),KI(s,c);const p=new ri(f.target,c,u,f.sequenceNumber);Ng(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await oh(t,r)}}async function oh(t,e,n){if(!Kl(e))throw e;t.L_.add(1),await Zl(t),t.q_.set("Offline"),n||(n=()=>qI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await nd(t)})}function YI(t,e){return e().catch(n=>oh(t,n,e))}async function rd(t){const e=ae(t),n=Ii(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;ND(e);)try{const i=await pD(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,bD(e,i)}catch(i){await oh(e,i)}XI(e)&&JI(e)}function ND(t){return Ts(t)&&t.O_.length<10}function bD(t,e){t.O_.push(e);const n=Ii(t);n.r_()&&n.V_&&n.m_(e.mutations)}function XI(t){return Ts(t)&&!Ii(t).n_()&&t.O_.length>0}function JI(t){Ii(t).start()}async function DD(t){Ii(t).p_()}async function OD(t){const e=Ii(t);for(const n of t.O_)e.m_(n.mutations)}async function LD(t,e,n){const r=t.O_.shift(),i=Sg.from(r,e,n);await YI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await rd(t)}async function jD(t,e){e&&Ii(t).V_&&await async function(r,i){if(function(o){return bI(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();Ii(r).s_(),await YI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await rd(r)}}(t,e),XI(t)&&JI(t)}async function B0(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=Ts(n);n.L_.add(3),await Zl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await nd(n)}async function MD(t,e){const n=ae(t);e?(n.L_.delete(2),await nd(n)):e||(n.L_.add(2),await Zl(n),n.q_.set("Unknown"))}function Vo(t){return t.K_||(t.K_=function(n,r,i){const s=ae(n);return s.w_(),new TD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:kD.bind(null,t),Ro:RD.bind(null,t),mo:AD.bind(null,t),d_:PD.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Dg(t)?bg(t):t.q_.set("Unknown")):(await t.K_.stop(),QI(t))})),t.K_}function Ii(t){return t.U_||(t.U_=function(n,r,i){const s=ae(n);return s.w_(),new SD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:DD.bind(null,t),mo:jD.bind(null,t),f_:OD.bind(null,t),g_:LD.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await rd(t)):(await t.U_.stop(),t.O_.length>0&&(J("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Og(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lg(t,e){if(Pr("AsyncQueue",`${e}: ${t}`),Kl(t))return new K(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=Na(),this.sortedSet=new rt(this.comparator)}static emptySet(e){return new ao(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ao)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ao;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(){this.W_=new rt(te.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ne():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Co{constructor(e,n,r,i,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Co(e,n,ao.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class FD{constructor(){this.queries=W0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ae(n),s=i.queries;i.queries=W0(),s.forEach((o,a)=>{for(const c of a.j_)c.onError(r)})})(this,new K(V.ABORTED,"Firestore shutting down"))}}function W0(){return new Mo(t=>yI(t),Yh)}async function jg(t,e){const n=ae(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new VD,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Lg(o,`Initialization of query '${Ds(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Vg(n)}async function Mg(t,e){const n=ae(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function UD(t,e){const n=ae(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Vg(n)}function BD(t,e,n){const r=ae(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Vg(t){t.Y_.forEach(e=>{e.next()})}var zp,$0;($0=zp||(zp={})).ea="default",$0.Cache="cache";class Fg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Co(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Co.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==zp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.key=e}}class eC{constructor(e){this.key=e}}class zD{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=me(),this.mutatedKeys=me(),this.Aa=_I(e),this.Ra=new ao(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new z0,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),v=Xh(this.query,p)?p:null,I=!!m&&this.mutatedKeys.has(m.key),S=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let b=!1;m&&v?m.data.isEqual(v.data)?I!==S&&(r.track({type:3,doc:v}),b=!0):this.ga(m,v)||(r.track({type:2,doc:v}),b=!0,(c&&this.Aa(v,c)>0||u&&this.Aa(v,u)<0)&&(a=!0)):!m&&v?(r.track({type:0,doc:v}),b=!0):m&&!v&&(r.track({type:1,doc:m}),b=!0,(c||u)&&(a=!0)),b&&(v?(o=o.add(v),s=S?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(v,I){const S=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return S(v)-S(I)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new Co(this.query,e.Ra,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new z0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=me(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new eC(r))}),this.da.forEach(r=>{e.has(r)||n.push(new ZI(r))}),n}ba(e){this.Ta=e.Ts,this.da=me();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Co.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class WD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $D{constructor(e){this.key=e,this.va=!1}}class qD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Mo(a=>yI(a),Yh),this.Ma=new Map,this.xa=new Set,this.Oa=new rt(te.comparator),this.Na=new Map,this.La=new xg,this.Ba={},this.ka=new Map,this.qa=Io.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function HD(t,e,n=!0){const r=oC(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await tC(r,e,n,!0),i}async function GD(t,e){const n=oC(t);await tC(n,e,!0,!1)}async function tC(t,e,n,r){const i=await mD(t.localStore,rr(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await KD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&GI(t.remoteStore,i),a}async function KD(t,e,n,r,i){t.Ka=(p,m,v)=>async function(S,b,w,T){let R=b.view.ma(w);R.ns&&(R=await V0(S.localStore,b.query,!1).then(({documents:E})=>b.view.ma(E,R)));const P=T&&T.targetChanges.get(b.targetId),M=T&&T.targetMismatches.get(b.targetId)!=null,D=b.view.applyChanges(R,S.isPrimaryClient,P,M);return H0(S,b.targetId,D.wa),D.snapshot}(t,p,m,v);const s=await V0(t.localStore,e,!0),o=new zD(e,s.Ts),a=o.ma(s.documents),c=Jl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);H0(t,n,u.wa);const f=new WD(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function QD(t,e,n){const r=ae(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Yh(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Bp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Pg(r.remoteStore,i.targetId),Wp(r,i.targetId)}).catch(Gl)):(Wp(r,i.targetId),await Bp(r.localStore,i.targetId,!0))}async function YD(t,e){const n=ae(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Pg(n.remoteStore,r.targetId))}async function XD(t,e,n){const r=iO(t);try{const i=await function(o,a){const c=ae(o),u=ut.now(),f=a.reduce((v,I)=>v.add(I.key),me());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let I=Nr(),S=me();return c.cs.getEntries(v,f).next(b=>{I=b,I.forEach((w,T)=>{T.isValidDocument()||(S=S.add(w))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,I)).next(b=>{p=b;const w=[];for(const T of a){const R=E2(T,p.get(T.key).overlayedDocument);R!=null&&w.push(new bi(T.key,R,cI(R.value.mapValue),nt.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,w,a)}).next(b=>{m=b;const w=b.applyToLocalDocumentSet(p,S);return c.documentOverlayCache.saveOverlays(v,b.batchId,w)})}).then(()=>({batchId:m.batchId,changes:wI(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new rt(Te)),u=u.insert(a,c),o.Ba[o.currentUser.toKey()]=u}(r,i.batchId,n),await ec(r,i.changes),await rd(r.remoteStore)}catch(i){const s=Lg(i,"Failed to persist write");n.reject(s)}}async function nC(t,e){const n=ae(t);try{const r=await dD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ve(o.va):i.removedDocuments.size>0&&(ve(o.va),o.va=!1))}),await ec(n,r,e)}catch(r){await Gl(r)}}function q0(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=ae(o);c.onlineState=a;let u=!1;c.queries.forEach((f,p)=>{for(const m of p.j_)m.Z_(a)&&(u=!0)}),u&&Vg(c)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JD(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new rt(te.comparator);o=o.insert(s,mt.newNoDocument(s,re.min()));const a=me().add(s),c=new ed(re.min(),new Map,new rt(Te),o,a);await nC(r,c),r.Oa=r.Oa.remove(s),r.Na.delete(e),Ug(r)}else await Bp(r.localStore,e,!1).then(()=>Wp(r,e,n)).catch(Gl)}async function ZD(t,e){const n=ae(t),r=e.batch.batchId;try{const i=await hD(n.localStore,e);iC(n,r,null),rC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ec(n,i)}catch(i){await Gl(i)}}async function eO(t,e,n){const r=ae(t);try{const i=await function(o,a){const c=ae(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,a).next(p=>(ve(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);iC(r,e,n),rC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ec(r,i)}catch(i){await Gl(i)}}function rC(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function iC(t,e,n){const r=ae(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Wp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||sC(t,r)})}function sC(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Pg(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Ug(t))}function H0(t,e,n){for(const r of n)r instanceof ZI?(t.La.addReference(r.key,e),tO(t,r)):r instanceof eC?(J("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||sC(t,r.key)):ne()}function tO(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(J("SyncEngine","New document in limbo: "+n),t.xa.add(r),Ug(t))}function Ug(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new te(Ne.fromString(e)),r=t.qa.next();t.Na.set(r,new $D(n)),t.Oa=t.Oa.insert(n,r),GI(t.remoteStore,new ri(rr(Qh(n.path)),r,"TargetPurposeLimboResolution",gg.oe))}}async function ec(t,e,n){const r=ae(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,c)=>{o.push(r.Ka(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){i.push(u);const p=Rg.Wi(c.targetId,u);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(c,u){const f=ae(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(u,m=>U.forEach(m.$i,v=>f.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>U.forEach(m.Ui,v=>f.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!Kl(p))throw p;J("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const v=f.os.get(m),I=v.snapshotVersion,S=v.withLastLimboFreeSnapshotVersion(I);f.os=f.os.insert(m,S)}}}(r.localStore,s))}async function nO(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await $I(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(c=>{c.reject(new K(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ec(n,r.hs)}}function rO(t,e){const n=ae(t),r=n.Na.get(e);if(r&&r.va)return me().add(r.key);{let i=me();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function oC(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=nC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JD.bind(null,e),e.Ca.d_=UD.bind(null,e.eventManager),e.Ca.$a=BD.bind(null,e.eventManager),e}function iO(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eO.bind(null,e),e}class ah{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=td(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return uD(this.persistence,new lD,e.initialUser,this.serializer)}Ga(e){return new sD(kg.Zr,this.serializer)}Wa(e){return new yD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ah.provider={build:()=>new ah};class $p{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>q0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nO.bind(null,this.syncEngine),await MD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FD}()}createDatastore(e){const n=td(e.databaseInfo.databaseId),r=function(s){return new ED(s)}(e.databaseInfo);return function(s,o,a,c){return new ID(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new xD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>q0(this.syncEngine,n,0),function(){return U0.D()?new U0:new _D}())}createSyncEngine(e,n){return function(i,s,o,a,c,u,f){const p=new qD(i,s,o,a,c,u);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ae(i);J("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Zl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}$p.provider={build:()=>new $p};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Pr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new K(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=ae(i),a={documents:s.map(p=>sh(o.serializer,p))},c=await o.Lo("BatchGetDocuments",o.serializer.databaseId,Ne.emptyPath(),a,s.length),u=new Map;c.forEach(p=>{const m=O2(o.serializer,p);u.set(m.key.toString(),m)});const f=[];return s.forEach(p=>{const m=u.get(p.toString());ve(!!m),f.push(m)}),f}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Xl(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=te.fromPath(r);this.mutations.push(new NI(i,this.precondition(i)))}),await async function(r,i){const s=ae(r),o={writes:i.map(a=>UI(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,Ne.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw ne();n=re.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new K(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(re.min())?nt.exists(!1):nt.updateTime(n):nt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(re.min()))throw new K(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return nt.updateTime(n)}return nt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new Ag(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new sO(this.datastore),n=this.cu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const n=this.updateFunction(e);return!Ql(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!bI(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Dt.UNAUTHENTICATED,this.clientId=oI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{J("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(J("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Lg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function _f(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await $I(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function G0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lO(t);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>B0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>B0(e.remoteStore,i)),t._onlineComponents=e}async function lO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await _f(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;wo("Error using user provided cache. Falling back to memory cache: "+n),await _f(t,new ah)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await _f(t,new ah);return t._offlineComponents}async function zg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await G0(t,t._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await G0(t,new $p))),t._onlineComponents}function cO(t){return zg(t).then(e=>e.syncEngine)}function uO(t){return zg(t).then(e=>e.datastore)}async function lh(t){const e=await zg(t),n=e.eventManager;return n.onListen=HD.bind(null,e.syncEngine),n.onUnlisten=QD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=GD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=YD.bind(null,e.syncEngine),n}function hO(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const f=new Bg({next:m=>{f.Za(),o.enqueueAndForget(()=>Mg(s,p));const v=m.docs.has(a);!v&&m.fromCache?u.reject(new K(V.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&c&&c.source==="server"?u.reject(new K(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Fg(Qh(a.path),f,{includeMetadataChanges:!0,_a:!0});return jg(s,p)}(await lh(t),t.asyncQueue,e,n,r)),r.promise}function dO(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const f=new Bg({next:m=>{f.Za(),o.enqueueAndForget(()=>Mg(s,p)),m.fromCache&&c.source==="server"?u.reject(new K(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Fg(a,f,{includeMetadataChanges:!0,_a:!0});return jg(s,p)}(await lh(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t,e,n){if(!n)throw new K(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fO(t,e,n,r){if(e===!0&&r===!0)throw new K(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Q0(t){if(!te.isDocumentKey(t))throw new K(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Y0(t){if(te.isDocumentKey(t))throw new K(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function id(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=id(t);throw new K(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new X0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new X0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Nb;switch(r.type){case"firstParty":return new Lb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=K0.get(n);r&&(J("ComponentProvider","Removing Datastore"),K0.delete(n),r.terminate())}(this),Promise.resolve()}}function pO(t,e,n,r={}){var i;const s=(t=jt(t,sd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Dt.MOCK_USER;else{a=hS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new K(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Dt(u)}t._authCredentials=new bb(new sI(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mr(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class mi extends Mr{constructor(e,n,r){super(e,n,Qh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new te(e))}withConverter(e){return new mi(this.firestore,e,this._path)}}function sr(t,e,...n){if(t=be(t),lC("collection","path",e),t instanceof sd){const r=Ne.fromString(e,...n);return Y0(r),new mi(t,null,r)}{if(!(t instanceof Ct||t instanceof mi))throw new K(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return Y0(r),new mi(t.firestore,null,r)}}function Je(t,e,...n){if(t=be(t),arguments.length===1&&(e=oI.newId()),lC("doc","path",e),t instanceof sd){const r=Ne.fromString(e,...n);return Q0(r),new Ct(t,null,new te(r))}{if(!(t instanceof Ct||t instanceof mi))throw new K(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return Q0(r),new Ct(t.firestore,t instanceof mi?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ag(this,"async_queue_retry"),this.Vu=()=>{const r=yf();r&&J("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=yf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=yf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new nr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Kl(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Pr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Og.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ne()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Z0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Wn extends sd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new J0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new J0(e),this._firestoreClient=void 0,await e}}}function mO(t,e){const n=typeof t=="object"?t:sg(),r=typeof t=="string"?t:"(default)",i=qh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=lS("firestore");s&&pO(i,...s)}return i}function Fo(t){if(t._terminated)throw new K(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||gO(t),t._firestoreClient}function gO(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,u,f){return new Kb(a,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,aC(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new aO(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hs(kt.fromBase64String(e))}catch(n){throw new K(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hs(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO=/^__.*__$/;class _O{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new bi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yl(e,this.data,n,this.fieldTransforms)}}class cC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new bi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class qg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new qg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ch(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(uC(this.Cu)&&yO.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class vO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||td(e)}Qu(e,n,r,i=!1){return new qg({Cu:e,methodName:n,qu:r,path:Tt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bo(t){const e=t._freezeSettings(),n=td(t._databaseId);return new vO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function od(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Yg("Data must be an object, but it was:",o,r);const a=hC(r,o);let c,u;if(s.merge)c=new fn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=qp(e,p,n);if(!o.contains(m))throw new K(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);fC(f,m)||f.push(m)}c=new fn(f),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new _O(new Ht(a),c,u)}class ad extends tc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ad}}class Hg extends tc{_toFieldTransform(e){return new RI(e.path,new xl)}isEqual(e){return e instanceof Hg}}class Gg extends tc{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new Al(e.serializer,SI(e.serializer,this.$u));return new RI(e.path,n)}isEqual(e){return e instanceof Gg&&this.$u===e.$u}}function Kg(t,e,n,r){const i=t.Qu(1,e,n);Yg("Data must be an object, but it was:",i,r);const s=[],o=Ht.empty();Es(r,(c,u)=>{const f=Xg(e,c,n);u=be(u);const p=i.Nu(f);if(u instanceof ad)s.push(f);else{const m=nc(u,p);m!=null&&(s.push(f),o.set(f,m))}});const a=new fn(s);return new cC(o,a,i.fieldTransforms)}function Qg(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[qp(e,r,n)],c=[i];if(s.length%2!=0)throw new K(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(qp(e,s[m])),c.push(s[m+1]);const u=[],f=Ht.empty();for(let m=a.length-1;m>=0;--m)if(!fC(u,a[m])){const v=a[m];let I=c[m];I=be(I);const S=o.Nu(v);if(I instanceof ad)u.push(v);else{const b=nc(I,S);b!=null&&(u.push(v),f.set(v,b))}}const p=new fn(u);return new cC(f,p,o.fieldTransforms)}function wO(t,e,n,r=!1){return nc(n,t.Qu(r?4:3,e))}function nc(t,e){if(dC(t=be(t)))return Yg("Unsupported field value:",e,t),hC(t,e);if(t instanceof tc)return function(r,i){if(!uC(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=nc(a,i.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return SI(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ut.fromDate(r);return{timestampValue:ih(i.serializer,s)}}if(r instanceof ut){const s=new ut(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ih(i.serializer,s)}}if(r instanceof Wg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hs)return{bytesValue:jI(i.serializer,r._byteString)};if(r instanceof Ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Cg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof $g)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Bu("VectorValues must only contain numeric values.");return Tg(a.serializer,c)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${id(r)}`)}(t,e)}function hC(t,e){const n={};return aI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Es(t,(r,i)=>{const s=nc(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function dC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ut||t instanceof Wg||t instanceof hs||t instanceof Ct||t instanceof tc||t instanceof $g)}function Yg(t,e,n){if(!dC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=id(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function qp(t,e,n){if((e=be(e))instanceof Uo)return e._internalPath;if(typeof e=="string")return Xg(t,e);throw ch("Field path arguments must be of type string or ",t,!1,void 0,n)}const EO=new RegExp("[~\\*/\\[\\]]");function Xg(t,e,n){if(e.search(EO)>=0)throw ch(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Uo(...e.split("."))._internalPath}catch{throw ch(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ch(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new K(V.INVALID_ARGUMENT,a+t+c)}function fC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ld("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TO extends uh{data(){return super.data()}}function ld(t,e){return typeof e=="string"?Xg(t,e):e instanceof Uo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jg{}class Zg extends Jg{}function cd(t,e,...n){let r=[];e instanceof Jg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof ey).length,a=s.filter(c=>c instanceof ud).length;if(o>1||o>0&&a>0)throw new K(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ud extends Zg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ud(e,n,r)}_apply(e){const n=this._parse(e);return mC(e._query,n),new Mr(e.firestore,e.converter,Mp(e._query,n))}_parse(e){const n=Bo(e.firestore);return function(s,o,a,c,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new K(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){tw(p,f);const v=[];for(const I of p)v.push(ew(c,s,I));m={arrayValue:{values:v}}}else m=ew(c,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||tw(p,f),m=wO(a,o,p,f==="in"||f==="not-in");return tt.create(u,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Pl(t,e,n){const r=e,i=ld("where",t);return ud._create(i,r,n)}class ey extends Jg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ey(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:zn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)mC(o,c),o=Mp(o,c)}(e._query,n),new Mr(e.firestore,e.converter,Mp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ty extends Zg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ty(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new K(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new K(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Cl(s,o)}(e._query,this._field,this._direction);return new Mr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new jo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function ny(t,e="asc"){const n=e,r=ld("orderBy",t);return ty._create(r,n)}class ry extends Zg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new ry(e,n,r)}_apply(e){return new Mr(e.firestore,e.converter,rh(e._query,this._limit,this._limitType))}}function SO(t){return ry._create("limit",t,"F")}function ew(t,e,n){if(typeof(n=be(n))=="string"){if(n==="")throw new K(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gI(e)&&n.indexOf("/")!==-1)throw new K(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!te.isDocumentKey(r))throw new K(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return E0(t,new te(r))}if(n instanceof Ct)return E0(t,n._key);throw new K(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${id(n)}.`)}function tw(t,e){if(!Array.isArray(t)||t.length===0)throw new K(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function mC(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class gC{convertValue(e,n="none"){switch(us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Es(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ye(o.doubleValue));return new $g(s)}convertGeoPoint(e){return new Wg(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_g(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Tl(e));default:return null}}convertTimestamp(e){const n=Si(e);return new ut(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);ve(WI(r));const i=new Sl(r.get(1),r.get(3)),s=new te(r.popFirst(5));return i.isEqual(n)||Pr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class IO extends gC{constructor(e){super(),this.firestore=e}convertBytes(e){return new hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class iy extends uh{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ld("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class vu extends iy{data(e={}){return super.data(e)}}class yC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Qs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new vu(this._firestore,this._userDataWriter,r.key,r,new Qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new vu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Qs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new vu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Qs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,f=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:CO(a.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function CO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t){t=jt(t,Ct);const e=jt(t.firestore,Wn);return hO(Fo(e),t._key).then(n=>_C(e,t,n))}class dd extends gC{constructor(e){super(),this.firestore=e}convertBytes(e){return new hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function zo(t){t=jt(t,Mr);const e=jt(t.firestore,Wn),n=Fo(e),r=new dd(e);return pC(t._query),dO(n,t._query).then(i=>new yC(e,r,t,i))}function oy(t,e,n){t=jt(t,Ct);const r=jt(t.firestore,Wn),i=hd(t.converter,e,n);return rc(r,[od(Bo(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,nt.none())])}function Wo(t,e,n,...r){t=jt(t,Ct);const i=jt(t.firestore,Wn),s=Bo(i);let o;return o=typeof(e=be(e))=="string"||e instanceof Uo?Qg(s,"updateDoc",t._key,e,n,r):Kg(s,"updateDoc",t._key,e),rc(i,[o.toMutation(t._key,nt.exists(!0))])}function xO(t){return rc(jt(t.firestore,Wn),[new Xl(t._key,nt.none())])}function kO(t,e){const n=jt(t.firestore,Wn),r=Je(t),i=hd(t.converter,e);return rc(n,[od(Bo(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,nt.exists(!1))]).then(()=>r)}function ay(t,...e){var n,r,i;t=be(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Z0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Z0(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let c,u,f;if(t instanceof Ct)u=jt(t.firestore,Wn),f=Qh(t._key.path),c={next:p=>{e[o]&&e[o](_C(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=jt(t,Mr);u=jt(p.firestore,Wn),f=p._query;const m=new dd(u);c={next:v=>{e[o]&&e[o](new yC(u,m,p,v))},error:e[o+1],complete:e[o+2]},pC(t._query)}return function(m,v,I,S){const b=new Bg(S),w=new Fg(v,b,I);return m.asyncQueue.enqueueAndForget(async()=>jg(await lh(m),w)),()=>{b.Za(),m.asyncQueue.enqueueAndForget(async()=>Mg(await lh(m),w))}}(Fo(u),f,a,c)}function rc(t,e){return function(r,i){const s=new nr;return r.asyncQueue.enqueueAndForget(async()=>XD(await cO(r),i,s)),s.promise}(Fo(t),e)}function _C(t,e,n){const r=n.docs.get(e._key),i=new dd(t);return new iy(t,i,e._key,r,new Qs(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Bo(e)}set(e,n,r){this._verifyNotCommitted();const i=ei(e,this._firestore),s=hd(i.converter,n,r),o=od(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,nt.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=ei(e,this._firestore);let o;return o=typeof(n=be(n))=="string"||n instanceof Uo?Qg(this._dataReader,"WriteBatch.update",s._key,n,r,i):Kg(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,nt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=ei(e,this._firestore);return this._mutations=this._mutations.concat(new Xl(n._key,nt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new K(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ei(t,e){if((t=be(t)).firestore!==e)throw new K(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Bo(n)}get(n){const r=ei(n,this._firestore),i=new IO(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return ne();const o=s[0];if(o.isFoundDocument())return new uh(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new uh(this._firestore,i,r._key,null,r.converter);throw ne()})}set(n,r,i){const s=ei(n,this._firestore),o=hd(s.converter,r,i),a=od(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=ei(n,this._firestore);let a;return a=typeof(r=be(r))=="string"||r instanceof Uo?Qg(this._dataReader,"Transaction.update",o._key,r,i,s):Kg(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=ei(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=ei(e,this._firestore),r=new dd(this._firestore);return super.get(e).then(i=>new iy(this._firestore,r,n._key,i._document,new Qs(!1,!1),n.converter))}}function vC(t,e,n){t=jt(t,Wn);const r=Object.assign(Object.assign({},RO),n);return function(s){if(s.maxAttempts<1)throw new K(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const c=new nr;return s.asyncQueue.enqueueAndForget(async()=>{const u=await uO(s);new oO(s.asyncQueue,u,a,o,c).au()}),c.promise}(Fo(t),i=>e(new PO(t,i)),r)}function $o(){return new Hg("serverTimestamp")}function Hp(t){return new Gg("increment",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t){return Fo(t=jt(t,Wn)),new AO(t,e=>rc(t,e))}(function(e,n=!0){(function(i){Lo=i})(vs),os(new wi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Wn(new Db(r.getProvider("auth-internal")),new Mb(r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new K(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sl(u.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Zn(g0,"4.7.3",e),Zn(g0,"4.7.3","esm2017")})();var nw={};const rw="@firebase/database",iw="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EC="";function NO(t){EC=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),gt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:yl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return jr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new bO(e)}}catch{}return new DO},Yi=TC("localStorage"),OO=TC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new $h("@firebase/database"),LO=function(){let t=1;return function(){return t++}}(),SC=function(t){const e=lA(t),n=new iA;n.update(e);const r=n.digest();return tg.encodeByteArray(r)},ic=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ic.apply(null,r):typeof r=="object"?e+=gt(r):e+=r,e+=" "}return e};let Qa=null,sw=!0;const jO=function(t,e){$(!0,"Can't turn on custom loggers persistently."),lo.logLevel=pe.VERBOSE,Qa=lo.log.bind(lo)},Lt=function(...t){if(sw===!0&&(sw=!1,Qa===null&&OO.get("logging_enabled")===!0&&jO()),Qa){const e=ic.apply(null,t);Qa(e)}},sc=function(t){return function(...e){Lt(t,...e)}},Gp=function(...t){const e="FIREBASE INTERNAL ERROR: "+ic(...t);lo.error(e)},br=function(...t){const e=`FIREBASE FATAL ERROR: ${ic(...t)}`;throw lo.error(e),new Error(e)},sn=function(...t){const e="FIREBASE WARNING: "+ic(...t);lo.warn(e)},MO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&sn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},IC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},VO=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xo="[MIN_NAME]",ds="[MAX_NAME]",qo=function(t,e){if(t===e)return 0;if(t===xo||e===ds)return-1;if(e===xo||t===ds)return 1;{const n=ow(t),r=ow(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},FO=function(t,e){return t===e?0:t<e?-1:1},va=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+gt(e))},ly=function(t){if(typeof t!="object"||t===null)return gt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=gt(e[r]),n+=":",n+=ly(t[e[r]]);return n+="}",n},CC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function on(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const xC=function(t){$(!IC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,c;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const f=u.join("");let p="";for(c=0;c<64;c+=8){let m=parseInt(f.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),p=p+m}return p.toLowerCase()},UO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},BO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function zO(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const WO=new RegExp("^-?(0*)\\d{1,10}$"),$O=-2147483648,qO=2147483647,ow=function(t){if(WO.test(t)){const e=Number(t);if(e>=$O&&e<=qO)return e}return null},Ho=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw sn("Exception was thrown by user callback.",n),e},Math.floor(0))}},HO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ya=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){sn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',sn(e)}}class wu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}wu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="5",kC="v",RC="s",AC="r",PC="f",NC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bC="ls",DC="p",Kp="ac",OC="websocket",LC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,n,r,i,s=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function QO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function MC(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let r;if(e===OC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===LC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);QO(t)&&(n.ns=t.namespace);const i=[];return on(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(){this.counters_={}}incrementCounter(e,n=1){jr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return FR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf={},wf={};function uy(t){const e=t.toString();return vf[e]||(vf[e]=new YO),vf[e]}function XO(t,e){const n=t.toString();return wf[n]||(wf[n]=e()),wf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ho(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="start",ZO="close",eL="pLPCommand",tL="pRTLPCB",VC="id",FC="pw",UC="ser",nL="cb",rL="seg",iL="ts",sL="d",oL="dframe",BC=1870,zC=30,aL=BC-zC,lL=25e3,cL=3e4;class Ys{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=sc(e),this.stats_=uy(n),this.urlFn=c=>(this.appCheckToken&&(c[Kp]=this.appCheckToken),MC(n,LC,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new JO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(cL)),VO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hy((...s)=>{const[o,a,c,u,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===aw)this.id=a,this.password=c;else if(o===ZO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[aw]="t",r[UC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[nL]=this.scriptTagHolder.uniqueCallbackIdentifier),r[kC]=cy,this.transportSessionId&&(r[RC]=this.transportSessionId),this.lastSessionId&&(r[bC]=this.lastSessionId),this.applicationId&&(r[DC]=this.applicationId),this.appCheckToken&&(r[Kp]=this.appCheckToken),typeof location<"u"&&location.hostname&&NC.test(location.hostname)&&(r[AC]=PC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ys.forceAllow_=!0}static forceDisallow(){Ys.forceDisallow_=!0}static isAvailable(){return Ys.forceAllow_?!0:!Ys.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!UO()&&!BO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=gt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=sS(n),i=CC(r,aL);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[oL]="t",r[VC]=e,r[FC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=gt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class hy{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=LO(),window[eL+this.uniqueCallbackIdentifier]=e,window[tL+this.uniqueCallbackIdentifier]=n,this.myIFrame=hy.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Lt("frame writing exception"),a.stack&&Lt(a.stack),Lt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Lt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[VC]=this.myID,e[FC]=this.myPW,e[UC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zC+r.length<=BC;){const o=this.pendingSegs.shift();r=r+"&"+rL+i+"="+o.seg+"&"+iL+i+"="+o.ts+"&"+sL+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(lL)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uL=16384,hL=45e3;let hh=null;typeof MozWebSocket<"u"?hh=MozWebSocket:typeof WebSocket<"u"&&(hh=WebSocket);class On{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=sc(this.connId),this.stats_=uy(n),this.connURL=On.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[kC]=cy,typeof location<"u"&&location.hostname&&NC.test(location.hostname)&&(o[AC]=PC),n&&(o[RC]=n),r&&(o[bC]=r),i&&(o[Kp]=i),s&&(o[DC]=s),MC(e,OC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yi.set("previous_websocket_failure",!0);try{let r;QR(),this.mySock=new hh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){On.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&hh!==null&&!On.forceDisallow_}static previouslyFailed(){return Yi.isInMemoryStorage||Yi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=yl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=gt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=CC(n,uL);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(hL))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}On.responsesRequiredToBeHealthy=2;On.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ys,On]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=On&&On.isAvailable();let r=n&&!On.previouslyFailed();if(e.webSocketOnly&&(n||sn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[On];else{const i=this.transports_=[];for(const s of Nl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Nl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Nl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dL=6e4,fL=5e3,pL=10*1024,mL=100*1024,Ef="t",lw="d",gL="s",cw="r",yL="e",uw="o",hw="a",dw="n",fw="p",_L="h";class vL{constructor(e,n,r,i,s,o,a,c,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=sc("c:"+this.id+":"),this.transportManager_=new Nl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ya(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>mL?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>pL?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ef in e){const n=e[Ef];n===hw?this.upgradeIfSecondaryHealthy_():n===cw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===uw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=va("t",e),r=va("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:fw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:dw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=va("t",e),r=va("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=va(Ef,e);if(lw in e){const r=e[lw];if(n===_L){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===dw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===gL?this.onConnectionShutdown_(r):n===cw?this.onReset_(r):n===yL?Gp("Server Error: "+r):n===uw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),cy!==r&&sn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ya(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(dL))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ya(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(fL))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:fw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh extends $C{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ng()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new dh}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=32,mw=768;class De{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function xe(){return new De("")}function ue(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ci(t){return t.pieces_.length-t.pieceNum_}function Oe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new De(t.pieces_,e)}function qC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function wL(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function HC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function GC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new De(e,0)}function lt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof De)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new De(n,0)}function de(t){return t.pieceNum_>=t.pieces_.length}function Zt(t,e){const n=ue(t),r=ue(e);if(n===null)return e;if(n===r)return Zt(Oe(t),Oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function dy(t,e){if(Ci(t)!==Ci(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ln(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ci(t)>Ci(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class EL{constructor(e,n){this.errorPrefix_=n,this.parts_=HC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Wh(this.parts_[r]);KC(this)}}function TL(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Wh(e),KC(t)}function SL(t){const e=t.parts_.pop();t.byteLength_-=Wh(e),t.parts_.length>0&&(t.byteLength_-=1)}function KC(t){if(t.byteLength_>mw)throw new Error(t.errorPrefix_+"has a key path longer than "+mw+" bytes ("+t.byteLength_+").");if(t.parts_.length>pw)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pw+") or object contains a cycle "+qi(t))}function qi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy extends $C{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new fy}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=1e3,IL=60*5*1e3,gw=30*1e3,CL=1.3,xL=3e4,kL="server_kill",yw=3;class Sr extends WC{constructor(e,n,r,i,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Sr.nextPersistentConnectionId_++,this.log_=sc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wa,this.maxReconnectDelay_=IL,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&dh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(gt(s)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new zh,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,u=a.s;Sr.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&jr(e,"w")){const r=vo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();sn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||rA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=gw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=nA(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+gt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Gp("Unrecognized action received from server: "+gt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wa,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wa,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>xL&&(this.reconnectDelay_=wa),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*CL)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Sr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},u=function(p){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(p)};this.realtime_={close:c,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,m]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Lt("getToken() completed but was canceled"):(Lt("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=m&&m.token,a=new vL(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{sn(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(kL)},s))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&sn(p),c())}}}interrupt(e){Lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Tp(this.interruptReasons_)&&(this.reconnectDelay_=wa,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>ly(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new De(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Lt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=yw&&(this.reconnectDelay_=gw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Lt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=yw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+EC.replace(/\./g,"-")]=1,ng()?e["framework.cordova"]=1:dS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=dh.getInstance().currentlyOnline();return Tp(this.interruptReasons_)&&e}}Sr.nextPersistentConnectionId_=0;Sr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new he(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new he(xo,e),i=new he(xo,n);return this.compare(r,i)!==0}minPost(){return he.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kc;class QC extends fd{static get __EMPTY_NODE(){return Kc}static set __EMPTY_NODE(e){Kc=e}compare(e,n){return qo(e.name,n.name)}isDefinedOn(e){throw bo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return he.MIN}maxPost(){return new he(ds,Kc)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new he(e,Kc)}toString(){return".key"}}const co=new QC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class pt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pt.RED,this.left=i??en.EMPTY_NODE,this.right=s??en.EMPTY_NODE}copy(e,n,r,i,s){return new pt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return en.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return en.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}pt.RED=!0;pt.BLACK=!1;class RL{copy(e,n,r,i,s){return this}insert(e,n,r){return new pt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class en{constructor(e,n=en.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new en(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,pt.BLACK,null,null))}remove(e){return new en(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,pt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Qc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Qc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Qc(this.root_,null,this.comparator_,!0,e)}}en.EMPTY_NODE=new RL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AL(t,e){return qo(t.name,e.name)}function py(t,e){return qo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qp;function PL(t){Qp=t}const YC=function(t){return typeof t=="number"?"number:"+xC(t):"string:"+t},XC=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&jr(e,".sv"),"Priority must be a string or number.")}else $(t===Qp||t.isEmpty(),"priority of unexpected type.");$(t===Qp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _w;class ht{constructor(e,n=ht.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),XC(this.priorityNode_)}static set __childrenNodeConstructor(e){_w=e}static get __childrenNodeConstructor(){return _w}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ht(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ht.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return de(e)?this:ue(e)===".priority"?this.priorityNode_:ht.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ht.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ue(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:($(r!==".priority"||Ci(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ht.__childrenNodeConstructor.EMPTY_NODE.updateChild(Oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+YC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=xC(this.value_):e+=this.value_,this.lazyHash_=SC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ht.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ht.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ht.VALUE_TYPE_ORDER.indexOf(n),s=ht.VALUE_TYPE_ORDER.indexOf(r);return $(i>=0,"Unknown leaf type: "+n),$(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ht.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let JC,ZC;function NL(t){JC=t}function bL(t){ZC=t}class DL extends fd{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?qo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return he.MIN}maxPost(){return new he(ds,new ht("[PRIORITY-POST]",ZC))}makePost(e,n){const r=JC(e);return new he(n,new ht("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ke=new DL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OL=Math.log(2);class LL{constructor(e){const n=s=>parseInt(Math.log(s)/OL,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fh=function(t,e,n,r){t.sort(e);const i=function(c,u){const f=u-c;let p,m;if(f===0)return null;if(f===1)return p=t[c],m=n?n(p):p,new pt(m,p.node,pt.BLACK,null,null);{const v=parseInt(f/2,10)+c,I=i(c,v),S=i(v+1,u);return p=t[v],m=n?n(p):p,new pt(m,p.node,pt.BLACK,I,S)}},s=function(c){let u=null,f=null,p=t.length;const m=function(I,S){const b=p-I,w=p;p-=I;const T=i(b+1,w),R=t[b],P=n?n(R):R;v(new pt(P,R.node,S,null,T))},v=function(I){u?(u.left=I,u=I):(f=I,u=I)};for(let I=0;I<c.count;++I){const S=c.nextBitIsOne(),b=Math.pow(2,c.count-(I+1));S?m(b,pt.BLACK):(m(b,pt.BLACK),m(b,pt.RED))}return f},o=new LL(t.length),a=s(o);return new en(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tf;const Ns={};class wr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return $(Ns&&Ke,"ChildrenNode.ts has not been loaded"),Tf=Tf||new wr({".priority":Ns},{".priority":Ke}),Tf}get(e){const n=vo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof en?n:null}hasIndex(e){return jr(this.indexSet_,e.toString())}addIndex(e,n){$(e!==co,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(he.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=fh(r,e.getCompare()):a=Ns;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const f=Object.assign({},this.indexes_);return f[c]=a,new wr(f,u)}addToIndexes(e,n){const r=Gu(this.indexes_,(i,s)=>{const o=vo(this.indexSet_,s);if($(o,"Missing index implementation for "+s),i===Ns)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(he.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),fh(a,o.getCompare())}else return Ns;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new he(e.name,a))),c.insert(e,e.node)}});return new wr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Gu(this.indexes_,i=>{if(i===Ns)return i;{const s=n.get(e.name);return s?i.remove(new he(e.name,s)):i}});return new wr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea;class se{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&XC(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ea||(Ea=new se(new en(py),null,wr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ea}updatePriority(e){return this.children_.isEmpty()?this:new se(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ea:n}}getChild(e){const n=ue(e);return n===null?this:this.getImmediateChild(n).getChild(Oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new he(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ea:this.priorityNode_;return new se(i,o,s)}}updateChild(e,n){const r=ue(e);if(r===null)return n;{$(ue(e)!==".priority"||Ci(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Oe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ke,(o,a)=>{n[o]=a.val(e),r++,s&&se.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+YC(this.getPriority().val())+":"),this.forEachChild(Ke,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":SC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new he(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new he(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new he(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,he.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,he.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===oc?-1:0}withIndex(e){if(e===co||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new se(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===co||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ke),i=n.getIterator(Ke);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===co?null:this.indexMap_.get(e.toString())}}se.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class jL extends se{constructor(){super(new en(py),se.EMPTY_NODE,wr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return se.EMPTY_NODE}isEmpty(){return!1}}const oc=new jL;Object.defineProperties(he,{MIN:{value:new he(xo,se.EMPTY_NODE)},MAX:{value:new he(ds,oc)}});QC.__EMPTY_NODE=se.EMPTY_NODE;ht.__childrenNodeConstructor=se;PL(oc);bL(oc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ML=!0;function Et(t,e=null){if(t===null)return se.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ht(n,Et(e))}if(!(t instanceof Array)&&ML){const n=[];let r=!1;if(on(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Et(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new he(o,c)))}}),n.length===0)return se.EMPTY_NODE;const s=fh(n,AL,o=>o.name,py);if(r){const o=fh(n,Ke.getCompare());return new se(s,Et(e),new wr({".priority":o},{".priority":Ke}))}else return new se(s,Et(e),wr.Default)}else{let n=se.EMPTY_NODE;return on(t,(r,i)=>{if(jr(t,r)&&r.substring(0,1)!=="."){const s=Et(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Et(e))}}NL(Et);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL extends fd{constructor(e){super(),this.indexPath_=e,$(!de(e)&&ue(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?qo(e.name,n.name):s}makePost(e,n){const r=Et(e),i=se.EMPTY_NODE.updateChild(this.indexPath_,r);return new he(n,i)}maxPost(){const e=se.EMPTY_NODE.updateChild(this.indexPath_,oc);return new he(ds,e)}toString(){return HC(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL extends fd{compare(e,n){const r=e.node.compareTo(n.node);return r===0?qo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return he.MIN}maxPost(){return he.MAX}makePost(e,n){const r=Et(e);return new he(n,r)}toString(){return".value"}}const UL=new FL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(t){return{type:"value",snapshotNode:t}}function ko(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function bl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Dl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function BL(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){$(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(bl(n,a)):$(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ko(n,r)):o.trackChildChange(Dl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ke,(i,s)=>{n.hasChild(i)||r.trackChildChange(bl(i,s))}),n.isLeafNode()||n.forEachChild(Ke,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Dl(i,s,o))}else r.trackChildChange(ko(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?se.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this.indexedFilter_=new my(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ol.getStartPost_(e),this.endPost_=Ol.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new he(n,r))||(r=se.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=se.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(se.EMPTY_NODE);const s=this;return n.forEachChild(Ke,(o,a)=>{s.matches(new he(o,a))||(i=i.updateImmediateChild(o,se.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ol(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new he(n,r))||(r=se.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=se.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=se.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(se.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,se.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const p=this.index_.getCompare();o=(m,v)=>p(v,m)}else o=this.index_.getCompare();const a=e;$(a.numChildren()===this.limit_,"");const c=new he(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(c);if(a.hasChild(n)){const p=a.getImmediateChild(n);let m=i.getChildAfterChild(this.index_,u,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const v=m==null?1:o(m,c);if(f&&!r.isEmpty()&&v>=0)return s!=null&&s.trackChildChange(Dl(n,r,p)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(bl(n,p));const S=a.updateImmediateChild(n,se.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(ko(m.name,m.node)),S.updateImmediateChild(m.name,m.node)):S}}else return r.isEmpty()?e:f&&o(u,c)>=0?(s!=null&&(s.trackChildChange(bl(u.name,u.node)),s.trackChildChange(ko(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,se.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ke}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xo}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ds}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ke}copy(){const e=new gy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function WL(t){return t.loadsAllData()?new my(t.getIndex()):t.hasLimit()?new zL(t):new Ol(t)}function vw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ke?n="$priority":t.index_===UL?n="$value":t.index_===co?n="$key":($(t.index_ instanceof VL,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=gt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=gt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+gt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=gt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+gt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ww(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ke&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph extends WC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=sc("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ph.getListenId_(e,r),a={};this.listens_[o]=a;const c=vw(e._queryParams);this.restRequest_(s+".json",c,(u,f)=>{let p=f;if(u===404&&(p=null,u=null),u===null&&this.onDataUpdate_(s,p,!1,r),vo(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",i(m,null)}})}unlisten(e,n){const r=ph.getListenId_(e,n);delete this.listens_[r]}get(e){const n=vw(e._queryParams),r=e._path.toString(),i=new zh;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Do(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=yl(a.responseText)}catch{sn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&sn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(){this.rootNode_=se.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(){return{value:null,children:new Map}}function tx(t,e,n){if(de(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ue(e);t.children.has(r)||t.children.set(r,mh());const i=t.children.get(r);e=Oe(e),tx(i,e,n)}}function Yp(t,e,n){t.value!==null?n(e,t.value):qL(t,(r,i)=>{const s=new De(e.toString()+"/"+r);Yp(i,s,n)})}function qL(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&on(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=10*1e3,GL=30*1e3,KL=5*60*1e3;class QL{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new HL(e);const r=Ew+(GL-Ew)*Math.random();Ya(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;on(e,(i,s)=>{s>0&&jr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ya(this.reportStats_.bind(this),Math.floor(Math.random()*2*KL))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(jn||(jn={}));function nx(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function yy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function _y(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=jn.ACK_USER_WRITE,this.source=nx()}operationForChild(e){if(de(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new De(e));return new gh(xe(),n,this.revert)}}else return $(ue(this.path)===e,"operationForChild called for unrelated child."),new gh(Oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n){this.source=e,this.path=n,this.type=jn.LISTEN_COMPLETE}operationForChild(e){return de(this.path)?new Ll(this.source,xe()):new Ll(this.source,Oe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=jn.OVERWRITE}operationForChild(e){return de(this.path)?new fs(this.source,xe(),this.snap.getImmediateChild(e)):new fs(this.source,Oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=jn.MERGE}operationForChild(e){if(de(this.path)){const n=this.children.subtree(new De(e));return n.isEmpty()?null:n.value?new fs(this.source,xe(),n.value):new jl(this.source,xe(),n)}else return $(ue(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new jl(this.source,Oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(de(e))return this.isFullyInitialized()&&!this.filtered_;const n=ue(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function XL(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(BL(o.childName,o.snapshotNode))}),Ta(t,i,"child_removed",e,r,n),Ta(t,i,"child_added",e,r,n),Ta(t,i,"child_moved",s,r,n),Ta(t,i,"child_changed",e,r,n),Ta(t,i,"value",e,r,n),i}function Ta(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,c)=>ZL(t,a,c)),o.forEach(a=>{const c=JL(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function JL(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ZL(t,e,n){if(e.childName==null||n.childName==null)throw bo("Should only compare child_ events.");const r=new he(e.childName,e.snapshotNode),i=new he(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(t,e){return{eventCache:t,serverCache:e}}function Xa(t,e,n,r){return pd(new ps(e,n,r),t.serverCache)}function rx(t,e,n,r){return pd(t.eventCache,new ps(e,n,r))}function Xp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ms(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sf;const ej=()=>(Sf||(Sf=new en(FO)),Sf);class Ve{constructor(e,n=ej()){this.value=e,this.children=n}static fromObject(e){let n=new Ve(null);return on(e,(r,i)=>{n=n.set(new De(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:xe(),value:this.value};if(de(e))return null;{const r=ue(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Oe(e),n);return s!=null?{path:lt(new De(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(de(e))return this;{const n=ue(e),r=this.children.get(n);return r!==null?r.subtree(Oe(e)):new Ve(null)}}set(e,n){if(de(e))return new Ve(n,this.children);{const r=ue(e),s=(this.children.get(r)||new Ve(null)).set(Oe(e),n),o=this.children.insert(r,s);return new Ve(this.value,o)}}remove(e){if(de(e))return this.children.isEmpty()?new Ve(null):new Ve(null,this.children);{const n=ue(e),r=this.children.get(n);if(r){const i=r.remove(Oe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ve(null):new Ve(this.value,s)}else return this}}get(e){if(de(e))return this.value;{const n=ue(e),r=this.children.get(n);return r?r.get(Oe(e)):null}}setTree(e,n){if(de(e))return n;{const r=ue(e),s=(this.children.get(r)||new Ve(null)).setTree(Oe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ve(this.value,o)}}fold(e){return this.fold_(xe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(lt(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,xe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(de(e))return null;{const s=ue(e),o=this.children.get(s);return o?o.findOnPath_(Oe(e),lt(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,xe(),n)}foreachOnPath_(e,n,r){if(de(e))return this;{this.value&&r(n,this.value);const i=ue(e),s=this.children.get(i);return s?s.foreachOnPath_(Oe(e),lt(n,i),r):new Ve(null)}}foreach(e){this.foreach_(xe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(lt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.writeTree_=e}static empty(){return new Fn(new Ve(null))}}function Ja(t,e,n){if(de(e))return new Fn(new Ve(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Zt(i,e);return s=s.updateChild(o,n),new Fn(t.writeTree_.set(i,s))}else{const i=new Ve(n),s=t.writeTree_.setTree(e,i);return new Fn(s)}}}function Tw(t,e,n){let r=t;return on(n,(i,s)=>{r=Ja(r,lt(e,i),s)}),r}function Sw(t,e){if(de(e))return Fn.empty();{const n=t.writeTree_.setTree(e,new Ve(null));return new Fn(n)}}function Jp(t,e){return Ss(t,e)!=null}function Ss(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Zt(n.path,e)):null}function Iw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ke,(r,i)=>{e.push(new he(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new he(r,i.value))}),e}function gi(t,e){if(de(e))return t;{const n=Ss(t,e);return n!=null?new Fn(new Ve(n)):new Fn(t.writeTree_.subtree(e))}}function Zp(t){return t.writeTree_.isEmpty()}function Ro(t,e){return ix(xe(),t.writeTree_,e)}function ix(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?($(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=ix(lt(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(lt(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(t,e){return lx(e,t)}function tj(t,e,n,r,i){$(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ja(t.visibleWrites,e,n)),t.lastWriteId=r}function nj(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function rj(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&ij(a,r.path)?i=!1:Ln(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return sj(t),!0;if(r.snap)t.visibleWrites=Sw(t.visibleWrites,r.path);else{const a=r.children;on(a,c=>{t.visibleWrites=Sw(t.visibleWrites,lt(r.path,c))})}return!0}else return!1}function ij(t,e){if(t.snap)return Ln(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ln(lt(t.path,n),e))return!0;return!1}function sj(t){t.visibleWrites=sx(t.allWrites,oj,xe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function oj(t){return t.visible}function sx(t,e,n){let r=Fn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Ln(n,o)?(a=Zt(n,o),r=Ja(r,a,s.snap)):Ln(o,n)&&(a=Zt(o,n),r=Ja(r,xe(),s.snap.getChild(a)));else if(s.children){if(Ln(n,o))a=Zt(n,o),r=Tw(r,a,s.children);else if(Ln(o,n))if(a=Zt(o,n),de(a))r=Tw(r,xe(),s.children);else{const c=vo(s.children,ue(a));if(c){const u=c.getChild(Oe(a));r=Ja(r,xe(),u)}}}else throw bo("WriteRecord should have .snap or .children")}}return r}function ox(t,e,n,r,i){if(!r&&!i){const s=Ss(t.visibleWrites,e);if(s!=null)return s;{const o=gi(t.visibleWrites,e);if(Zp(o))return n;if(n==null&&!Jp(o,xe()))return null;{const a=n||se.EMPTY_NODE;return Ro(o,a)}}}else{const s=gi(t.visibleWrites,e);if(!i&&Zp(s))return n;if(!i&&n==null&&!Jp(s,xe()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Ln(u.path,e)||Ln(e,u.path))},a=sx(t.allWrites,o,e),c=n||se.EMPTY_NODE;return Ro(a,c)}}}function aj(t,e,n){let r=se.EMPTY_NODE;const i=Ss(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ke,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=gi(t.visibleWrites,e);return n.forEachChild(Ke,(o,a)=>{const c=Ro(gi(s,new De(o)),a);r=r.updateImmediateChild(o,c)}),Iw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=gi(t.visibleWrites,e);return Iw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function lj(t,e,n,r,i){$(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=lt(e,n);if(Jp(t.visibleWrites,s))return null;{const o=gi(t.visibleWrites,s);return Zp(o)?i.getChild(n):Ro(o,i.getChild(n))}}function cj(t,e,n,r){const i=lt(e,n),s=Ss(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=gi(t.visibleWrites,i);return Ro(o,r.getNode().getImmediateChild(n))}else return null}function uj(t,e){return Ss(t.visibleWrites,e)}function hj(t,e,n,r,i,s,o){let a;const c=gi(t.visibleWrites,e),u=Ss(c,xe());if(u!=null)a=u;else if(n!=null)a=Ro(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],p=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=m.getNext();for(;v&&f.length<i;)p(v,r)!==0&&f.push(v),v=m.getNext();return f}else return[]}function dj(){return{visibleWrites:Fn.empty(),allWrites:[],lastWriteId:-1}}function yh(t,e,n,r){return ox(t.writeTree,t.treePath,e,n,r)}function wy(t,e){return aj(t.writeTree,t.treePath,e)}function Cw(t,e,n,r){return lj(t.writeTree,t.treePath,e,n,r)}function _h(t,e){return uj(t.writeTree,lt(t.treePath,e))}function fj(t,e,n,r,i,s){return hj(t.writeTree,t.treePath,e,n,r,i,s)}function Ey(t,e,n){return cj(t.writeTree,t.treePath,e,n)}function ax(t,e){return lx(lt(t.treePath,e),t.writeTree)}function lx(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pj{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Dl(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,bl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ko(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Dl(r,e.snapshotNode,i.oldSnap));else throw bo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mj{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const cx=new mj;class Ty{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ps(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ey(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ms(this.viewCache_),s=fj(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gj(t){return{filter:t}}function yj(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function _j(t,e,n,r,i){const s=new pj;let o,a;if(n.type===jn.OVERWRITE){const u=n;u.source.fromUser?o=em(t,e,u.path,u.snap,r,i,s):($(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!de(u.path),o=vh(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===jn.MERGE){const u=n;u.source.fromUser?o=wj(t,e,u.path,u.children,r,i,s):($(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=tm(t,e,u.path,u.children,r,i,a,s))}else if(n.type===jn.ACK_USER_WRITE){const u=n;u.revert?o=Sj(t,e,u.path,r,i,s):o=Ej(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===jn.LISTEN_COMPLETE)o=Tj(t,e,n.path,r,s);else throw bo("Unknown operation type: "+n.type);const c=s.getChanges();return vj(e,o,c),{viewCache:o,changes:c}}function vj(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Xp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(ex(Xp(e)))}}function ux(t,e,n,r,i,s){const o=e.eventCache;if(_h(r,n)!=null)return e;{let a,c;if(de(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ms(e),f=u instanceof se?u:se.EMPTY_NODE,p=wy(r,f);a=t.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const u=yh(r,ms(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=ue(n);if(u===".priority"){$(Ci(n)===1,"Can't have a priority with additional path components");const f=o.getNode();c=e.serverCache.getNode();const p=Cw(r,n,f,c);p!=null?a=t.filter.updatePriority(f,p):a=o.getNode()}else{const f=Oe(n);let p;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const m=Cw(r,n,o.getNode(),c);m!=null?p=o.getNode().getImmediateChild(u).updateChild(f,m):p=o.getNode().getImmediateChild(u)}else p=Ey(r,u,e.serverCache);p!=null?a=t.filter.updateChild(o.getNode(),u,p,f,i,s):a=o.getNode()}}return Xa(e,a,o.isFullyInitialized()||de(n),t.filter.filtersNodes())}}function vh(t,e,n,r,i,s,o,a){const c=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if(de(n))u=f.updateFullNode(c.getNode(),r,null);else if(f.filtersNodes()&&!c.isFiltered()){const v=c.getNode().updateChild(n,r);u=f.updateFullNode(c.getNode(),v,null)}else{const v=ue(n);if(!c.isCompleteForPath(n)&&Ci(n)>1)return e;const I=Oe(n),b=c.getNode().getImmediateChild(v).updateChild(I,r);v===".priority"?u=f.updatePriority(c.getNode(),b):u=f.updateChild(c.getNode(),v,b,I,cx,null)}const p=rx(e,u,c.isFullyInitialized()||de(n),f.filtersNodes()),m=new Ty(i,p,s);return ux(t,p,n,i,m,a)}function em(t,e,n,r,i,s,o){const a=e.eventCache;let c,u;const f=new Ty(i,e,s);if(de(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=Xa(e,u,!0,t.filter.filtersNodes());else{const p=ue(n);if(p===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),c=Xa(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=Oe(n),v=a.getNode().getImmediateChild(p);let I;if(de(m))I=r;else{const S=f.getCompleteChild(p);S!=null?qC(m)===".priority"&&S.getChild(GC(m)).isEmpty()?I=S:I=S.updateChild(m,r):I=se.EMPTY_NODE}if(v.equals(I))c=e;else{const S=t.filter.updateChild(a.getNode(),p,I,m,f,o);c=Xa(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function xw(t,e){return t.eventCache.isCompleteForChild(e)}function wj(t,e,n,r,i,s,o){let a=e;return r.foreach((c,u)=>{const f=lt(n,c);xw(e,ue(f))&&(a=em(t,a,f,u,i,s,o))}),r.foreach((c,u)=>{const f=lt(n,c);xw(e,ue(f))||(a=em(t,a,f,u,i,s,o))}),a}function kw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function tm(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;de(n)?u=r:u=new Ve(null).setTree(n,r);const f=e.serverCache.getNode();return u.children.inorderTraversal((p,m)=>{if(f.hasChild(p)){const v=e.serverCache.getNode().getImmediateChild(p),I=kw(t,v,m);c=vh(t,c,new De(p),I,i,s,o,a)}}),u.children.inorderTraversal((p,m)=>{const v=!e.serverCache.isCompleteForChild(p)&&m.value===null;if(!f.hasChild(p)&&!v){const I=e.serverCache.getNode().getImmediateChild(p),S=kw(t,I,m);c=vh(t,c,new De(p),S,i,s,o,a)}}),c}function Ej(t,e,n,r,i,s,o){if(_h(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(de(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return vh(t,e,n,c.getNode().getChild(n),i,s,a,o);if(de(n)){let u=new Ve(null);return c.getNode().forEachChild(co,(f,p)=>{u=u.set(new De(f),p)}),tm(t,e,n,u,i,s,a,o)}else return e}else{let u=new Ve(null);return r.foreach((f,p)=>{const m=lt(n,f);c.isCompleteForPath(m)&&(u=u.set(f,c.getNode().getChild(m)))}),tm(t,e,n,u,i,s,a,o)}}function Tj(t,e,n,r,i){const s=e.serverCache,o=rx(e,s.getNode(),s.isFullyInitialized()||de(n),s.isFiltered());return ux(t,o,n,r,cx,i)}function Sj(t,e,n,r,i,s){let o;if(_h(r,n)!=null)return e;{const a=new Ty(r,e,i),c=e.eventCache.getNode();let u;if(de(n)||ue(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=yh(r,ms(e));else{const p=e.serverCache.getNode();$(p instanceof se,"serverChildren would be complete if leaf node"),f=wy(r,p)}f=f,u=t.filter.updateFullNode(c,f,s)}else{const f=ue(n);let p=Ey(r,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=c.getImmediateChild(f)),p!=null?u=t.filter.updateChild(c,f,p,Oe(n),a,s):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(c,f,se.EMPTY_NODE,Oe(n),a,s):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=yh(r,ms(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||_h(r,xe())!=null,Xa(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ij{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new my(r.getIndex()),s=WL(r);this.processor_=gj(s);const o=n.serverCache,a=n.eventCache,c=i.updateFullNode(se.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(se.EMPTY_NODE,a.getNode(),null),f=new ps(c,o.isFullyInitialized(),i.filtersNodes()),p=new ps(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=pd(p,f),this.eventGenerator_=new YL(this.query_)}get query(){return this.query_}}function Cj(t){return t.viewCache_.serverCache.getNode()}function xj(t,e){const n=ms(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!de(e)&&!n.getImmediateChild(ue(e)).isEmpty())?n.getChild(e):null}function Rw(t){return t.eventRegistrations_.length===0}function kj(t,e){t.eventRegistrations_.push(e)}function Aw(t,e,n){const r=[];if(n){$(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Pw(t,e,n,r){e.type===jn.MERGE&&e.source.queryId!==null&&($(ms(t.viewCache_),"We should always have a full cache before handling merges"),$(Xp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=_j(t.processor_,i,e,n,r);return yj(t.processor_,s.viewCache),$(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,hx(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Rj(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ke,(s,o)=>{r.push(ko(s,o))}),n.isFullyInitialized()&&r.push(ex(n.getNode())),hx(t,r,n.getNode(),e)}function hx(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return XL(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wh;class Aj{constructor(){this.views=new Map}}function Pj(t){$(!wh,"__referenceConstructor has already been defined"),wh=t}function Nj(){return $(wh,"Reference.ts has not been loaded"),wh}function bj(t){return t.views.size===0}function Sy(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return $(s!=null,"SyncTree gave us an op for an invalid query."),Pw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Pw(o,e,n,r));return s}}function Dj(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=yh(n,i?r:null),c=!1;a?c=!0:r instanceof se?(a=wy(n,r),c=!1):(a=se.EMPTY_NODE,c=!1);const u=pd(new ps(a,c,!1),new ps(r,i,!1));return new Ij(e,u)}return o}function Oj(t,e,n,r,i,s){const o=Dj(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),kj(o,n),Rj(o,n)}function Lj(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=xi(t);if(i==="default")for(const[c,u]of t.views.entries())o=o.concat(Aw(u,n,r)),Rw(u)&&(t.views.delete(c),u.query._queryParams.loadsAllData()||s.push(u.query));else{const c=t.views.get(i);c&&(o=o.concat(Aw(c,n,r)),Rw(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||s.push(c.query)))}return a&&!xi(t)&&s.push(new(Nj())(e._repo,e._path)),{removed:s,events:o}}function dx(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function uo(t,e){let n=null;for(const r of t.views.values())n=n||xj(r,e);return n}function fx(t,e){if(e._queryParams.loadsAllData())return md(t);{const r=e._queryIdentifier;return t.views.get(r)}}function px(t,e){return fx(t,e)!=null}function xi(t){return md(t)!=null}function md(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eh;function jj(t){$(!Eh,"__referenceConstructor has already been defined"),Eh=t}function Mj(){return $(Eh,"Reference.ts has not been loaded"),Eh}let Vj=1;class Nw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ve(null),this.pendingWriteTree_=dj(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function mx(t,e,n,r,i){return tj(t.pendingWriteTree_,e,n,r,i),i?ac(t,new fs(nx(),e,n)):[]}function Xi(t,e,n=!1){const r=nj(t.pendingWriteTree_,e);if(rj(t.pendingWriteTree_,e)){let s=new Ve(null);return r.snap!=null?s=s.set(xe(),!0):on(r.children,o=>{s=s.set(new De(o),!0)}),ac(t,new gh(r.path,s,n))}else return[]}function gd(t,e,n){return ac(t,new fs(yy(),e,n))}function Fj(t,e,n){const r=Ve.fromObject(n);return ac(t,new jl(yy(),e,r))}function Uj(t,e){return ac(t,new Ll(yy(),e))}function Bj(t,e,n){const r=Cy(t,n);if(r){const i=xy(r),s=i.path,o=i.queryId,a=Zt(s,e),c=new Ll(_y(o),a);return ky(t,s,c)}else return[]}function nm(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||px(o,e))){const c=Lj(o,e,n,r);bj(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=c.removed;if(a=c.events,!i){const f=u.findIndex(m=>m._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(s,(m,v)=>xi(v));if(f&&!p){const m=t.syncPointTree_.subtree(s);if(!m.isEmpty()){const v=$j(m);for(let I=0;I<v.length;++I){const S=v[I],b=S.query,w=_x(t,S);t.listenProvider_.startListening(Za(b),Th(t,b),w.hashFn,w.onComplete)}}}!p&&u.length>0&&!r&&(f?t.listenProvider_.stopListening(Za(e),null):u.forEach(m=>{const v=t.queryToTagMap.get(yd(m));t.listenProvider_.stopListening(Za(m),v)}))}qj(t,u)}return a}function zj(t,e,n,r){const i=Cy(t,r);if(i!=null){const s=xy(i),o=s.path,a=s.queryId,c=Zt(o,e),u=new fs(_y(a),c,n);return ky(t,o,u)}else return[]}function Wj(t,e,n,r){const i=Cy(t,r);if(i){const s=xy(i),o=s.path,a=s.queryId,c=Zt(o,e),u=Ve.fromObject(n),f=new jl(_y(a),c,u);return ky(t,o,f)}else return[]}function bw(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(m,v)=>{const I=Zt(m,i);s=s||uo(v,I),o=o||xi(v)});let a=t.syncPointTree_.get(i);a?(o=o||xi(a),s=s||uo(a,xe())):(a=new Aj,t.syncPointTree_=t.syncPointTree_.set(i,a));let c;s!=null?c=!0:(c=!1,s=se.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((v,I)=>{const S=uo(I,xe());S&&(s=s.updateImmediateChild(v,S))}));const u=px(a,e);if(!u&&!e._queryParams.loadsAllData()){const m=yd(e);$(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const v=Hj();t.queryToTagMap.set(m,v),t.tagToQueryMap.set(v,m)}const f=vy(t.pendingWriteTree_,i);let p=Oj(a,e,n,f,s,c);if(!u&&!o&&!r){const m=fx(a,e);p=p.concat(Gj(t,e,m))}return p}function Iy(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Zt(o,e),u=uo(a,c);if(u)return u});return ox(i,e,s,n,!0)}function ac(t,e){return gx(e,t.syncPointTree_,null,vy(t.pendingWriteTree_,xe()))}function gx(t,e,n,r){if(de(t.path))return yx(t,e,n,r);{const i=e.get(xe());n==null&&i!=null&&(n=uo(i,xe()));let s=[];const o=ue(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,f=ax(r,o);s=s.concat(gx(a,c,u,f))}return i&&(s=s.concat(Sy(i,t,r,n))),s}}function yx(t,e,n,r){const i=e.get(xe());n==null&&i!=null&&(n=uo(i,xe()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=ax(r,o),f=t.operationForChild(o);f&&(s=s.concat(yx(f,a,c,u)))}),i&&(s=s.concat(Sy(i,t,r,n))),s}function _x(t,e){const n=e.query,r=Th(t,n);return{hashFn:()=>(Cj(e)||se.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Bj(t,n._path,r):Uj(t,n._path);{const s=zO(i,n);return nm(t,n,null,s)}}}}function Th(t,e){const n=yd(e);return t.queryToTagMap.get(n)}function yd(t){return t._path.toString()+"$"+t._queryIdentifier}function Cy(t,e){return t.tagToQueryMap.get(e)}function xy(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new De(t.substr(0,e))}}function ky(t,e,n){const r=t.syncPointTree_.get(e);$(r,"Missing sync point for query tag that we're tracking");const i=vy(t.pendingWriteTree_,e);return Sy(r,n,i,null)}function $j(t){return t.fold((e,n,r)=>{if(n&&xi(n))return[md(n)];{let i=[];return n&&(i=dx(n)),on(r,(s,o)=>{i=i.concat(o)}),i}})}function Za(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Mj())(t._repo,t._path):t}function qj(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=yd(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Hj(){return Vj++}function Gj(t,e,n){const r=e._path,i=Th(t,e),s=_x(t,n),o=t.listenProvider_.startListening(Za(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)$(!xi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((u,f,p)=>{if(!de(u)&&f&&xi(f))return[md(f).query];{let m=[];return f&&(m=m.concat(dx(f).map(v=>v.query))),on(p,(v,I)=>{m=m.concat(I)}),m}});for(let u=0;u<c.length;++u){const f=c[u];t.listenProvider_.stopListening(Za(f),Th(t,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ry(n)}node(){return this.node_}}class Ay{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=lt(this.path_,e);return new Ay(this.syncTree_,n)}node(){return Iy(this.syncTree_,this.path_)}}const Kj=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Dw=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Qj(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Yj(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Qj=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},Yj=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&$(!1,"Unexpected increment value: "+r);const i=e.node();if($(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Xj=function(t,e,n,r){return Py(e,new Ay(n,t),r)},vx=function(t,e,n){return Py(t,new Ry(e),n)};function Py(t,e,n){const r=t.getPriority().val(),i=Dw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Dw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ht(a,Et(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ht(i))),o.forEachChild(Ke,(a,c)=>{const u=Py(c,e.getImmediateChild(a),n);u!==c&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function by(t,e){let n=e instanceof De?e:new De(e),r=t,i=ue(n);for(;i!==null;){const s=vo(r.node.children,i)||{children:{},childCount:0};r=new Ny(i,r,s),n=Oe(n),i=ue(n)}return r}function Go(t){return t.node.value}function wx(t,e){t.node.value=e,rm(t)}function Ex(t){return t.node.childCount>0}function Jj(t){return Go(t)===void 0&&!Ex(t)}function _d(t,e){on(t.node.children,(n,r)=>{e(new Ny(n,t,r))})}function Tx(t,e,n,r){n&&e(t),_d(t,i=>{Tx(i,e,!0)})}function Zj(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function lc(t){return new De(t.parent===null?t.name:lc(t.parent)+"/"+t.name)}function rm(t){t.parent!==null&&eM(t.parent,t.name,t)}function eM(t,e,n){const r=Jj(n),i=jr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,rm(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,rm(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM=/[\[\].#$\/\u0000-\u001F\u007F]/,nM=/[\[\].#$\u0000-\u001F\u007F]/,If=10*1024*1024,Sx=function(t){return typeof t=="string"&&t.length!==0&&!tM.test(t)},Ix=function(t){return typeof t=="string"&&t.length!==0&&!nM.test(t)},rM=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ix(t)},iM=function(t,e,n,r){Dy(rg(t,"value"),e,n)},Dy=function(t,e,n){const r=n instanceof De?new EL(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+qi(r));if(typeof e=="function")throw new Error(t+"contains a function "+qi(r)+" with contents = "+e.toString());if(IC(e))throw new Error(t+"contains "+e.toString()+" "+qi(r));if(typeof e=="string"&&e.length>If/3&&Wh(e)>If)throw new Error(t+"contains a string greater than "+If+" utf8 bytes "+qi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(on(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Sx(o)))throw new Error(t+" contains an invalid key ("+o+") "+qi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);TL(r,o),Dy(t,a,r),SL(r)}),i&&s)throw new Error(t+' contains ".value" child '+qi(r)+" in addition to actual children.")}},Cx=function(t,e,n,r){if(!Ix(n))throw new Error(rg(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sM=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Cx(t,e,n)},oM=function(t,e){if(ue(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},aM=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Sx(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!rM(n))throw new Error(rg(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Oy(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!dy(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function xx(t,e,n){Oy(t,n),kx(t,r=>dy(r,e))}function Dr(t,e,n){Oy(t,n),kx(t,r=>Ln(r,e)||Ln(e,r))}function kx(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(cM(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function cM(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Qa&&Lt("event: "+n.toString()),Ho(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uM="repo_interrupt",hM=25;class dM{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=mh(),this.transactionQueueTree_=new Ny,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fM(t,e,n){if(t.stats_=uy(t.repoInfo_),t.forceRestClient_||HO())t.server_=new ph(t.repoInfo_,(r,i,s,o)=>{Ow(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Lw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{gt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Sr(t.repoInfo_,e,(r,i,s,o)=>{Ow(t,r,i,s,o)},r=>{Lw(t,r)},r=>{mM(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=XO(t.repoInfo_,()=>new QL(t.stats_,t.server_)),t.infoData_=new $L,t.infoSyncTree_=new Nw({startListening:(r,i,s,o)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=gd(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),jy(t,"connected",!1),t.serverSyncTree_=new Nw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,c)=>{const u=o(a,c);Dr(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function pM(t){const n=t.infoData_.getNode(new De(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ly(t){return Kj({timestamp:pM(t)})}function Ow(t,e,n,r,i){t.dataUpdateCount++;const s=new De(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const c=Gu(n,u=>Et(u));o=Wj(t.serverSyncTree_,s,c,i)}else{const c=Et(n);o=zj(t.serverSyncTree_,s,c,i)}else if(r){const c=Gu(n,u=>Et(u));o=Fj(t.serverSyncTree_,s,c)}else{const c=Et(n);o=gd(t.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=vd(t,s)),Dr(t.eventQueue_,a,o)}function Lw(t,e){jy(t,"connected",e),e===!1&&yM(t)}function mM(t,e){on(e,(n,r)=>{jy(t,n,r)})}function jy(t,e,n){const r=new De("/.info/"+e),i=Et(n);t.infoData_.updateSnapshot(r,i);const s=gd(t.infoSyncTree_,r,i);Dr(t.eventQueue_,r,s)}function Rx(t){return t.nextWriteId_++}function gM(t,e,n,r,i){My(t,"set",{path:e.toString(),value:n,priority:r});const s=Ly(t),o=Et(n,r),a=Iy(t.serverSyncTree_,e),c=vx(o,a,s),u=Rx(t),f=mx(t.serverSyncTree_,e,c,u,!0);Oy(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(m,v)=>{const I=m==="ok";I||sn("set at "+e+" failed: "+m);const S=Xi(t.serverSyncTree_,u,!I);Dr(t.eventQueue_,e,S),wM(t,i,m,v)});const p=Ox(t,e);vd(t,p),Dr(t.eventQueue_,p,[])}function yM(t){My(t,"onDisconnectEvents");const e=Ly(t),n=mh();Yp(t.onDisconnect_,xe(),(i,s)=>{const o=Xj(i,s,t.serverSyncTree_,e);tx(n,i,o)});let r=[];Yp(n,xe(),(i,s)=>{r=r.concat(gd(t.serverSyncTree_,i,s));const o=Ox(t,i);vd(t,o)}),t.onDisconnect_=mh(),Dr(t.eventQueue_,xe(),r)}function _M(t,e,n){let r;ue(e._path)===".info"?r=bw(t.infoSyncTree_,e,n):r=bw(t.serverSyncTree_,e,n),xx(t.eventQueue_,e._path,r)}function Ax(t,e,n){let r;ue(e._path)===".info"?r=nm(t.infoSyncTree_,e,n):r=nm(t.serverSyncTree_,e,n),xx(t.eventQueue_,e._path,r)}function vM(t){t.persistentConnection_&&t.persistentConnection_.interrupt(uM)}function My(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Lt(n,...e)}function wM(t,e,n,r){e&&Ho(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Px(t,e,n){return Iy(t.serverSyncTree_,e,n)||se.EMPTY_NODE}function Vy(t,e=t.transactionQueueTree_){if(e||wd(t,e),Go(e)){const n=bx(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&EM(t,lc(e),n)}else Ex(e)&&_d(e,n=>{Vy(t,n)})}function EM(t,e,n){const r=n.map(u=>u.currentWriteId),i=Px(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const f=n[u];$(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=Zt(e,f.path);s=s.updateChild(p,f.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;t.server_.put(c.toString(),a,u=>{My(t,"transaction put response",{path:c.toString(),status:u});let f=[];if(u==="ok"){const p=[];for(let m=0;m<n.length;m++)n[m].status=2,f=f.concat(Xi(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&p.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();wd(t,by(t.transactionQueueTree_,e)),Vy(t,t.transactionQueueTree_),Dr(t.eventQueue_,e,f);for(let m=0;m<p.length;m++)Ho(p[m])}else{if(u==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{sn("transaction at "+c.toString()+" failed: "+u);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=u}vd(t,e)}},o)}function vd(t,e){const n=Nx(t,e),r=lc(n),i=bx(t,n);return TM(t,i,r),r}function TM(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=Zt(n,c.path);let f=!1,p;if($(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,p=c.abortReason,i=i.concat(Xi(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=hM)f=!0,p="maxretry",i=i.concat(Xi(t.serverSyncTree_,c.currentWriteId,!0));else{const m=Px(t,c.path,o);c.currentInputSnapshot=m;const v=e[a].update(m.val());if(v!==void 0){Dy("transaction failed: Data returned ",v,c.path);let I=Et(v);typeof v=="object"&&v!=null&&jr(v,".priority")||(I=I.updatePriority(m.getPriority()));const b=c.currentWriteId,w=Ly(t),T=vx(I,m,w);c.currentOutputSnapshotRaw=I,c.currentOutputSnapshotResolved=T,c.currentWriteId=Rx(t),o.splice(o.indexOf(b),1),i=i.concat(mx(t.serverSyncTree_,c.path,T,c.currentWriteId,c.applyLocally)),i=i.concat(Xi(t.serverSyncTree_,b,!0))}else f=!0,p="nodata",i=i.concat(Xi(t.serverSyncTree_,c.currentWriteId,!0))}Dr(t.eventQueue_,n,i),i=[],f&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(p==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(p),!1,null))))}wd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ho(r[a]);Vy(t,t.transactionQueueTree_)}function Nx(t,e){let n,r=t.transactionQueueTree_;for(n=ue(e);n!==null&&Go(r)===void 0;)r=by(r,n),e=Oe(e),n=ue(e);return r}function bx(t,e){const n=[];return Dx(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Dx(t,e,n){const r=Go(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);_d(e,i=>{Dx(t,i,n)})}function wd(t,e){const n=Go(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,wx(e,n.length>0?n:void 0)}_d(e,r=>{wd(t,r)})}function Ox(t,e){const n=lc(Nx(t,e)),r=by(t.transactionQueueTree_,e);return Zj(r,i=>{Cf(t,i)}),Cf(t,r),Tx(r,i=>{Cf(t,i)}),n}function Cf(t,e){const n=Go(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Xi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?wx(e,void 0):n.length=s+1,Dr(t.eventQueue_,lc(e),i);for(let o=0;o<r.length;o++)Ho(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function IM(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):sn(`Invalid query segment '${n}' in query '${t}'`)}return e}const jw=function(t,e){const n=CM(t),r=n.namespace;n.domain==="firebase.com"&&br(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&br("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||MO();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new jC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new De(n.pathString)}},CM=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(f,p)),f<p&&(i=SM(t.substring(f,p)));const m=IM(t.substring(Math.min(t.length,p)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const v=e.slice(0,u);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const I=e.indexOf(".");r=e.substring(0,I).toLowerCase(),n=e.substring(I+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+gt(this.snapshot.exportVal())}}class kM{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return $(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return de(this._path)?null:qC(this._path)}get ref(){return new Di(this._repo,this._path)}get _queryIdentifier(){const e=ww(this._queryParams),n=ly(e);return n==="{}"?"default":n}get _queryObject(){return ww(this._queryParams)}isEqual(e){if(e=be(e),!(e instanceof Fy))return!1;const n=this._repo===e._repo,r=dy(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+wL(this._path)}}class Di extends Fy{constructor(e,n){super(e,n,new gy,!1)}get parent(){const e=GC(this._path);return e===null?null:new Di(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Sh{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new De(e),r=im(this.ref,e);return new Sh(this._node.getChild(n),r,Ke)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Sh(i,im(this.ref,r),Ke)))}hasChild(e){const n=new De(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Is(t,e){return t=be(t),t._checkNotDeleted("ref"),e!==void 0?im(t._root,e):t._root}function im(t,e){return t=be(t),ue(t._path)===null?sM("child","path",e):Cx("child","path",e),new Di(t._repo,lt(t._path,e))}function Ko(t,e){t=be(t),oM("set",t._path),iM("set",e,t._path);const n=new zh;return gM(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Uy{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new xM("value",this,new Sh(e.snapshotNode,new Di(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new kM(this,e,n):null}matches(e){return e instanceof Uy?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function AM(t,e,n,r,i){const s=new RM(n,void 0),o=new Uy(s);return _M(t._repo,t,o),()=>Ax(t._repo,t,o)}function PM(t,e,n,r){return AM(t,"value",e)}function NM(t,e,n){Ax(t._repo,t,null)}Pj(Di);jj(Di);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bM="FIREBASE_DATABASE_EMULATOR_HOST",sm={};let DM=!1;function OM(t,e,n,r){t.repoInfo_=new jC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function LM(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||br("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Lt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=jw(s,i),a=o.repoInfo,c;typeof process<"u"&&nw&&(c=nw[bM]),c?(s=`http://${c}?ns=${a.namespace}`,o=jw(s,i),a=o.repoInfo):o.repoInfo.secure;const u=new KO(t.name,t.options,e);aM("Invalid Firebase Database URL",o),de(o.path)||br("Database URL must point to the root of a Firebase Database (not including a child path).");const f=MM(a,t,u,new GO(t.name,n));return new VM(f,t)}function jM(t,e){const n=sm[e];(!n||n[t.key]!==t)&&br(`Database ${e}(${t.repoInfo_}) has already been deleted.`),vM(t),delete n[t.key]}function MM(t,e,n,r){let i=sm[e.name];i||(i={},sm[e.name]=i);let s=i[t.toURLString()];return s&&br("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new dM(t,DM,n,r),i[t.toURLString()]=s,s}class VM{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Di(this._repo,xe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(jM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&br("Cannot call "+e+" on a deleted database.")}}function FM(t=sg(),e){const n=qh(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=lS("database");r&&UM(n,...r)}return n}function UM(t,e,n,r={}){t=be(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&br("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&br('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new wu(wu.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:hS(r.mockUserToken,t.app.options.projectId);s=new wu(o)}OM(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BM(t){NO(vs),os(new wi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return LM(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Zn(rw,iw,t),Zn(rw,iw,"esm2017")}Sr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Sr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};BM();const zM={apiKey:"AIzaSyDUVffH8JPY6cOwBCXjNyHtKIbEGpbbE38",authDomain:"trading-game-junior.firebaseapp.com",databaseURL:"https://trading-game-junior-default-rtdb.europe-west1.firebasedatabase.app",projectId:"trading-game-junior",storageBucket:"trading-game-junior.firebasestorage.app",messagingSenderId:"72761372406",appId:"1:72761372406:web:d588fdcebe4aac51a786d7"},By=gS(zM),Se=mO(By),Cs=FM(By),Da=kb(By);async function WM(t,e){const n=t.id?Je(Se,"gameConfigs",t.id):Je(sr(Se,"gameConfigs"));return await oy(n,{...t,id:n.id,updatedAt:$o(),createdBy:e},{merge:!0}),n.id}async function zy(t){const e=cd(sr(Se,"gameConfigs"),Pl("createdBy","==",t),ny("updatedAt","desc"));return(await zo(e)).docs.map(r=>r.data())}async function Lx(t){const e=await sy(Je(Se,"gameConfigs",t));return e.exists()?e.data():null}async function $M(t){await xO(Je(Se,"gameConfigs",t))}async function qM(t,e){const n=Je(Se,"gameCodes",t.code);return await oy(n,{...t,playsUsed:0,activeUsers:0,status:"active",createdAt:$o(),createdBy:e}),t.code}async function Ih(t){const e=await sy(Je(Se,"gameCodes",t));return e.exists()?e.data():null}async function Ed(t){const e=cd(sr(Se,"gameCodes"),Pl("createdBy","==",t),ny("createdAt","desc"));return(await zo(e)).docs.map(r=>r.data())}async function HM(t,e){await Wo(Je(Se,"gameCodes",t),e)}async function GM(t){await Wo(Je(Se,"gameCodes",t),{status:"disabled"})}async function KM(t){const e=cd(sr(Se,"admins"),Pl("role","==","teacher"),Pl("createdBy","==",t));return(await zo(e)).docs.map(r=>({uid:r.id,...r.data()}))}async function QM(t,e,n){const r=Je(sr(Se,"sessions"));return await oy(r,{id:r.id,gameCode:t,gameConfigId:e.id,gameConfig:e,status:"lobby",currentSegmentIndex:-1,currentPrices:{},priceHistory:[],startedAt:null,endedAt:null,adminUid:n,createdAt:$o()}),r.id}async function bs(t,e){await Wo(Je(Se,"sessions",t),e)}function YM(t,e){return ay(Je(Se,"sessions",t),n=>{e(n.exists()?n.data():null)})}async function XM(t,e,n,r,i){const s=Je(Se,"gameCodes",i),o=Je(Se,"sessions",t,"players",e);await vC(Se,async a=>{const c=await a.get(s);if(!c.exists())throw new Error("Game code not found");const u=c.data();if((u.activeUsers??0)>=u.maxUsers)throw new Error("Session is full");a.update(s,{activeUsers:Hp(1)}),a.set(o,{id:e,nickname:n,cash:r,holdings:{},portfolioHistory:[],joinedAt:$o(),completedAt:null,gameCode:i})})}async function JM(t,e,n){await vC(Se,async r=>{const i=Je(Se,"gameCodes",n),s=Je(Se,"sessions",t,"players",e);r.update(i,{playsUsed:Hp(1),activeUsers:Hp(-1)}),r.update(s,{completedAt:$o()})})}async function Mw(t,e,n){await Wo(Je(Se,"sessions",t,"players",e),n)}async function ZM(t,e){const n=await zo(sr(Se,"sessions",t,"players")),r=wC(Se);for(const i of n.docs)r.update(i.ref,{cash:e,holdings:{},portfolioHistory:[]});await r.commit()}function eV(t,e,n){return ay(Je(Se,"sessions",t,"players",e),r=>{n(r.exists()?r.data():null)})}function jx(t,e){return ay(sr(Se,"sessions",t,"players"),n=>{e(n.docs.map(r=>r.data()))})}async function Vw(t,e,n){const r=sr(Se,"sessions",t,"players",e,"trades");await kO(r,{...n,timestamp:$o()})}async function Fw(t,e,n,r){const i=await zo(sr(Se,"sessions",t,"players")),s=wC(Se);for(const o of i.docs){const a=o.data(),c={};let u=a.cash??0;for(const[p,m]of Object.entries(a.holdings??{})){const v=(r[p]??0)*m;c[p]=Math.round(v),u+=v}const f={segmentIndex:e,label:n,cash:Math.round(a.cash??0),holdings:{...a.holdings??{}},assetValues:c,totalValue:Math.round(u)};s.update(o.ref,{[`segmentSnapshots.${e}`]:f})}await s.commit()}async function tV(t,e,n){await Wo(Je(Se,"sessions",t,"players",e),{readyForSegment:n})}async function nV(t){const e=await sy(Je(Se,"admins",t));return e.exists()?e.data():null}const Mx=j.createContext(null);function rV({children:t}){const[e,n]=j.useState(void 0),[r,i]=j.useState(null),[s,o]=j.useState(!1);j.useEffect(()=>mN(Da,async I=>{if(n(I),I&&!I.isAnonymous){o(!0);try{const S=await nV(I.uid);i(S)}catch{i(null)}finally{o(!1)}}else i(null),o(!1)}),[]);const a=(r==null?void 0:r.role)==="superadmin",c=(r==null?void 0:r.role)==="teacher",u=a||c,f=(v,I)=>dN(Da,v,I),p=()=>US(Da),m=()=>gN(Da);return h.jsx(Mx.Provider,{value:{user:e,roleData:r,roleLoading:s,isSuperadmin:a,isTeacher:c,isStaff:u,adminRole:(r==null?void 0:r.role)??null,loginAdmin:f,loginAnonymous:p,logout:m},children:t})}function Oi(){return j.useContext(Mx)}const kn=[{id:"netshop",name:"Netshop",sector:"Internet retailer",startPrice:20,minTick:50},{id:"peach",name:"Peach",sector:"Technology company",startPrice:40,minTick:10},{id:"elliecar",name:"Elliecar",sector:"Electric car co",startPrice:50,minTick:50},{id:"oilco",name:"Oilco",sector:"Oil & gas driller",startPrice:25,minTick:100},{id:"cryptcoin",name:"Cryptcoin",sector:"Electronic currency",startPrice:1e3,minTick:1},{id:"goldvault",name:"GoldVault",sector:"Precious metals ETF",startPrice:150,minTick:10}];function Wy(t,e){const n=Math.max(.01,e);return t==="cryptcoin"?Math.round(n):Math.round(n*10)/10}const yi={rally:{label:"🚀 Rally",drift:.55,shape:null},sharp_up:{label:"▲▲ Sharp Up",drift:.3,shape:null},up:{label:"▲ Up",drift:.12,shape:null},slight_up:{label:"↗ Slight Up",drift:.05,shape:null},flat:{label:"→ Flat",drift:0,shape:null},slight_down:{label:"↘ Slight Down",drift:-.05,shape:null},down:{label:"▼ Down",drift:-.12,shape:null},sharp_down:{label:"▼▼ Sharp Down",drift:-.3,shape:null},crash:{label:"💥 Crash",drift:-.55,shape:null},recovery:{label:"📈 Recovery",drift:.2,shape:t=>t*t},reversal_up:{label:"↩▲ Reversal Up",drift:.15,shape:t=>t<.3?-1:2},reversal_down:{label:"↩▼ Reversal Down",drift:-.15,shape:t=>t<.3?1:-2},pump_dump:{label:"🎢 Pump & Dump",drift:0,shape:t=>t<.5?3:-3},dead_cat:{label:"🐱 Dead Cat Bounce",drift:-.2,shape:t=>t<.3?-2:t<.6?2:-2}},gs={low_volatility:{label:"😴 Low Volatility",vol:.04},normal:{label:"〰 Normal",vol:.12},high_volatility:{label:"⚡ High Volatility",vol:.28},volatile_up:{label:"⚡▲ Volatile Up",vol:.22},volatile_down:{label:"⚡▼ Volatile Down",vol:.22},extreme:{label:"🌪 Extreme",vol:.45}},Td="flat",Sd="normal";function iV(t,e,n=10){var s,o;const r=[];let i={...t};for(let a=0;a<n;a++){const c=a/n,u={},f={};for(const p of kn){const m=((s=e.directions)==null?void 0:s[p.id])??Td,v=((o=e.volatilities)==null?void 0:o[p.id])??Sd,I=yi[m]??yi.flat,S=gs[v]??gs.normal,b=1/n,w=I.shape?I.shape(c):1,T=I.drift*w,R=Vx(),P=T*b+S.vol*Math.sqrt(b)*R,M=i[p.id]*(1+P);u[p.id]=Math.max(.01,M),f[p.id]=Wy(p.id,M)}i=u,r.push({step:a+1,prices:f})}return r}function sV(t,e,n){const r={...t};for(const i of kn){const s=e==null?void 0:e[i.id],o=n==null?void 0:n[i.id];if(!s||s==="flat")continue;const a=yi[s]??yi.flat,c=gs[o??"normal"]??gs.normal,u=Vx(),f=a.drift*.3+c.vol*.15*u;r[i.id]=Wy(i.id,r[i.id]*(1+f))}return r}function Vx(){let t=0,e=0;for(;t===0;)t=Math.random();for(;e===0;)e=Math.random();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}function oV(){return Object.fromEntries(kn.map(t=>[t.id,Wy(t.id,t.startPrice)]))}function aV(t,e,n){let r=e;for(const[i,s]of Object.entries(t))r+=(n[i]??0)*s;return Math.round(r*100)/100}function lV(t,e){return Math.round((t-e)*100)/100}const cV={startingCash:2e4,segments:[{id:"seg1",label:"Phase 1 — Practice",practice:!0,steps:10,msPerTick:8e3,directions:{netshop:"flat",peach:"flat",elliecar:"flat",oilco:"flat",cryptcoin:"slight_up",goldvault:"slight_up"},volatilities:{netshop:"normal",peach:"normal",elliecar:"normal",oilco:"normal",cryptcoin:"high_volatility",goldvault:"low_volatility"},news:{headline:"🎯 Practice round complete!",body:"Nice work getting the hang of the platform. Your positions and P&L are about to reset — the real game starts now. Good luck!",assetHints:{}}},{id:"seg2",label:"Phase 2 — ULEZ",steps:10,msPerTick:8e3,directions:{netshop:"down",peach:"flat",elliecar:"sharp_up",oilco:"down",cryptcoin:"flat",goldvault:"flat"},volatilities:{netshop:"normal",peach:"normal",elliecar:"normal",oilco:"normal",cryptcoin:"normal",goldvault:"low_volatility"},news:{headline:"ULEZ Extended and Tightened",body:"The government has extended the Ultra Low Emission Zone across the country. Electric vehicle demand is surging.",assetHints:{elliecar:"positive",oilco:"negative"}}},{id:"seg3",label:"Phase 3 — Netshop Scandal",steps:10,msPerTick:8e3,directions:{netshop:"reversal_up",peach:"flat",elliecar:"slight_up",oilco:"flat",cryptcoin:"slight_up",goldvault:"sharp_up"},volatilities:{netshop:"volatile_down",peach:"normal",elliecar:"normal",oilco:"normal",cryptcoin:"normal",goldvault:"low_volatility"},news:{headline:"Bad Press: Employee Treatment at Netshop",body:"Investigative journalists have uncovered evidence of poor working conditions at Netshop warehouses. Calls for a boycott are spreading on social media. But is the sell-off overdone?",assetHints:{netshop:"negative",goldvault:"positive"}}},{id:"seg4",label:"Phase 4 — Peace Talks",steps:10,msPerTick:8e3,directions:{netshop:"up",peach:"sharp_up",elliecar:"up",oilco:"up",cryptcoin:"rally",goldvault:"down"},volatilities:{netshop:"normal",peach:"normal",elliecar:"normal",oilco:"normal",cryptcoin:"extreme",goldvault:"normal"},news:{headline:"Peace Talks Succeed — Truce Declared",body:"A surprise ceasefire in a major oil-producing region has eased global tensions. Investor confidence returns broadly — risk assets surge as safe havens sell off.",assetHints:{oilco:"positive",netshop:"positive",peach:"positive",cryptcoin:"positive",goldvault:"negative"}}},{id:"seg5",label:"Phase 5 — Crypto Ban",steps:10,msPerTick:8e3,directions:{netshop:"flat",peach:"flat",elliecar:"flat",oilco:"flat",cryptcoin:"crash",goldvault:"sharp_up"},volatilities:{netshop:"normal",peach:"normal",elliecar:"normal",oilco:"normal",cryptcoin:"extreme",goldvault:"normal"},news:{headline:"China Bans Cryptocurrency Trading",body:"The Chinese government has announced an immediate and total ban on cryptocurrency trading and mining. Cryptcoin prices are in freefall. Investors flee to safe havens.",assetHints:{cryptcoin:"negative",goldvault:"positive"}}}]},uV=Object.entries(gs).map(([t,e])=>({value:t,label:e.label})),hV=[{value:"",label:"No hint"},{value:"positive",label:"📈 Positive"},{value:"negative",label:"📉 Negative"}],dV=[{label:"⚡ Professional (0.25s)",ms:250},{label:"🏃 Fast (0.5s)",ms:500},{label:"🚶 Normal (1s)",ms:1e3},{label:"🐢 Slow (2s)",ms:2e3},{label:"🐌 Very Slow (4s)",ms:4e3}],Uw=t=>({rally:"#15803d",sharp_up:"#16a34a",up:"#22c55e",slight_up:"#86efac",flat:"#9ca3af",slight_down:"#fca5a5",down:"#ef4444",sharp_down:"#dc2626",crash:"#7f1d1d",recovery:"#0ea5e9",reversal_up:"#6366f1",reversal_down:"#a855f7",pump_dump:"#f59e0b",dead_cat:"#78716c"})[t]??"#6b7280",Yc=(t,e)=>Math.max(2,Math.round(t*1e3/e)),fV=()=>({id:`seg_${Date.now()}`,label:"New Phase",segmentSeconds:60,msPerTick:1e3,directions:Object.fromEntries(kn.map(t=>[t.id,Td])),volatilities:Object.fromEntries(kn.map(t=>[t.id,Sd])),news:{headline:"",body:"",assetHints:{}}}),pV=t=>({...t,segmentSeconds:t.segmentSeconds??(t.steps?t.steps*((t.msPerTick??8e3)/1e3):60),msPerTick:t.msPerTick??1e3,directions:t.directions??Object.fromEntries(kn.map(e=>{var n;return[e.id,((n=t.effects)==null?void 0:n[e.id])??Td]})),volatilities:t.volatilities??Object.fromEntries(kn.map(e=>[e.id,Sd]))});function mV({existing:t,onSaved:e,onCancel:n}){var Be,qe;const{user:r}=Oi(),i=t??{...cV,id:null,name:"My Game"},[s,o]=j.useState(i.name),[a,c]=j.useState(i.startingCash),[u,f]=j.useState(i.segments.map(pV)),[p,m]=j.useState(0),[v,I]=j.useState(!1),[S,b]=j.useState(""),w=u[p],T=(W,Z)=>f(F=>F.map((B,X)=>X===p?{...B,[W]:Z}:B)),R=(W,Z)=>f(F=>F.map((B,X)=>X===p?{...B,directions:{...B.directions,[W]:Z}}:B)),P=(W,Z)=>f(F=>F.map((B,X)=>X===p?{...B,volatilities:{...B.volatilities,[W]:Z}}:B)),M=(W,Z)=>f(F=>F.map((B,X)=>X===p?{...B,news:{...B.news,[W]:Z}}:B)),D=(W,Z)=>f(F=>F.map((B,X)=>X===p?{...B,news:{...B.news,assetHints:{...B.news.assetHints,[W]:Z}}}:B)),E=()=>{f(W=>[...W,fV()]),m(u.length)},_=W=>{u.length<=1||(f(Z=>Z.filter((F,B)=>B!==W)),m(Math.min(W,u.length-2)))},C=(W,Z)=>{const F=[...u],B=W+Z;B<0||B>=F.length||([F[W],F[B]]=[F[B],F[W]],f(F),m(B))},k=W=>W.map(Z=>({...Z,steps:Yc(Z.segmentSeconds,Z.msPerTick)})),A=async()=>{if(!s.trim()){b("Please give this game a name.");return}I(!0),b("");try{const W=await WM({id:i.id,name:s.trim(),startingCash:Number(a),segments:k(u)},r.uid);e(W)}catch(W){b("Failed to save: "+W.message)}finally{I(!1)}},N=u.reduce((W,Z)=>W+Z.segmentSeconds*1e3,0),x=W=>{const Z=Math.round(W/1e3);return Z>=60?`${Math.floor(Z/60)}m ${Z%60}s`:`${Z}s`};return h.jsxs("div",{style:{display:"flex",gap:20,alignItems:"flex-start",flexWrap:"wrap"},children:[h.jsxs("div",{style:{width:240,flexShrink:0},children:[h.jsx("div",{className:"card",style:{marginBottom:12},children:h.jsxs("div",{className:"card-body",style:{padding:16},children:[h.jsxs("div",{className:"form-group",style:{marginBottom:10},children:[h.jsx("label",{className:"form-label",children:"Game Name"}),h.jsx("input",{className:"form-input",value:s,onChange:W=>o(W.target.value)})]}),h.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[h.jsx("label",{className:"form-label",children:"Starting Cash (£)"}),h.jsx("input",{className:"form-input",type:"number",value:a,min:1e3,step:500,onChange:W=>c(W.target.value)})]})]})}),h.jsxs("div",{className:"card",style:{marginBottom:12},children:[h.jsxs("div",{className:"card-header",style:{padding:"10px 14px"},children:[h.jsxs("span",{style:{fontWeight:600,fontSize:"0.85rem"},children:["Segments (",u.length,")"]}),h.jsx("button",{className:"btn btn-sm btn-primary",onClick:E,children:"+ Add"})]}),h.jsx("div",{style:{padding:6},children:u.map((W,Z)=>{const F=Yc(W.segmentSeconds,W.msPerTick);return h.jsxs("div",{onClick:()=>m(Z),style:{padding:"8px 10px",borderRadius:6,cursor:"pointer",marginBottom:3,background:Z===p?"var(--navy)":"transparent",color:Z===p?"white":"var(--text)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[h.jsxs("div",{style:{flex:1,overflow:"hidden"},children:[h.jsxs("div",{style:{fontWeight:500,fontSize:"0.82rem",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[Z+1,". ",W.label||"Unnamed"]}),h.jsxs("div",{style:{fontSize:"0.7rem",opacity:.65},children:[W.segmentSeconds,"s · ",F," ticks"]})]}),h.jsx("div",{style:{display:"flex",gap:1,flexShrink:0},children:["↑","↓","×"].map((B,X)=>h.jsx("button",{onClick:ge=>{ge.stopPropagation(),X===0?C(Z,-1):X===1?C(Z,1):_(Z)},style:{background:"none",border:"none",cursor:"pointer",opacity:.5,padding:"0 3px",color:"inherit",fontSize:"0.8rem"},children:B},B))})]},W.id)})}),h.jsxs("div",{style:{padding:"8px 14px",borderTop:"1px solid var(--border)",fontSize:"0.75rem",color:"var(--text-muted)"},children:["Total: ",h.jsx("strong",{children:x(N)})]})]})]}),h.jsxs("div",{style:{flex:1,minWidth:300},children:[w&&h.jsxs("div",{className:"card",children:[h.jsxs("div",{className:"card-header",children:[h.jsxs("h3",{style:{fontSize:"1rem"},children:["Segment ",p+1,": ",w.label||"Unnamed"]}),h.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:[Yc(w.segmentSeconds,w.msPerTick)," price ticks"]})]}),h.jsxs("div",{className:"card-body",children:[h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,marginBottom:24},children:[h.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[h.jsx("label",{className:"form-label",children:"Label"}),h.jsx("input",{className:"form-input",value:w.label,onChange:W=>T("label",W.target.value)})]}),h.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[h.jsx("label",{className:"form-label",children:"Segment length (seconds)"}),h.jsx("input",{className:"form-input",type:"number",min:10,max:600,step:5,value:w.segmentSeconds,onChange:W=>T("segmentSeconds",Number(W.target.value))}),h.jsx("span",{className:"form-hint",children:"How long trading lasts"})]}),h.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[h.jsx("label",{className:"form-label",children:"Tick speed"}),h.jsx("select",{className:"form-select",value:w.msPerTick,onChange:W=>T("msPerTick",Number(W.target.value)),children:dV.map(W=>h.jsx("option",{value:W.ms,children:W.label},W.ms))}),h.jsxs("span",{className:"form-hint",children:["→ ",Yc(w.segmentSeconds,w.msPerTick)," price updates"]})]})]}),h.jsx("h4",{style:{fontSize:"0.88rem",fontWeight:600,color:"var(--navy)",marginBottom:10},children:"Price Behaviour — Direction × Volatility"}),h.jsx("div",{style:{overflowX:"auto",marginBottom:24},children:h.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[h.jsx("thead",{children:h.jsx("tr",{children:["Asset","Direction / Pattern","Volatility","Summary"].map(W=>h.jsx("th",{style:{textAlign:"left",padding:"8px 12px",background:"var(--navy)",color:"white",fontSize:"0.78rem"},children:W},W))})}),h.jsx("tbody",{children:kn.map((W,Z)=>{var X,ge,ce,we;const F=((X=w.directions)==null?void 0:X[W.id])??Td,B=((ge=w.volatilities)==null?void 0:ge[W.id])??Sd;return h.jsxs("tr",{style:{background:Z%2===0?"white":"var(--surface)"},children:[h.jsxs("td",{style:{padding:"10px 12px",borderBottom:"1px solid var(--border)"},children:[h.jsx("div",{style:{fontWeight:600,fontSize:"0.88rem"},children:W.name}),h.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:W.sector})]}),h.jsx("td",{style:{padding:"8px 12px",borderBottom:"1px solid var(--border)"},children:h.jsxs("select",{className:"form-select",style:{fontSize:"0.82rem",padding:"6px 10px",color:Uw(F),fontWeight:600},value:F,onChange:Ie=>R(W.id,Ie.target.value),children:[h.jsx("optgroup",{label:"── Trending ──",children:["rally","sharp_up","up","slight_up","flat","slight_down","down","sharp_down","crash"].map(Ie=>h.jsx("option",{value:Ie,children:yi[Ie].label},Ie))}),h.jsx("optgroup",{label:"── Pattern-based ──",children:["recovery","reversal_up","reversal_down","pump_dump","dead_cat"].map(Ie=>h.jsx("option",{value:Ie,children:yi[Ie].label},Ie))})]})}),h.jsx("td",{style:{padding:"8px 12px",borderBottom:"1px solid var(--border)"},children:h.jsx("select",{className:"form-select",style:{fontSize:"0.82rem",padding:"6px 10px"},value:B,onChange:Ie=>P(W.id,Ie.target.value),children:uV.map(Ie=>h.jsx("option",{value:Ie.value,children:Ie.label},Ie.value))})}),h.jsxs("td",{style:{padding:"8px 12px",borderBottom:"1px solid var(--border)"},children:[h.jsx("span",{style:{color:Uw(F),fontWeight:600,fontSize:"0.78rem"},children:(ce=yi[F])==null?void 0:ce.label}),h.jsxs("span",{style:{color:"var(--text-muted)",fontSize:"0.78rem"},children:[" / ",(we=gs[B])==null?void 0:we.label]})]})]},W.id)})})]})}),h.jsx("h4",{style:{fontSize:"0.88rem",fontWeight:600,color:"var(--navy)",marginBottom:10},children:"News Story (shown at start of this segment)"}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12},children:[h.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[h.jsx("label",{className:"form-label",children:"Headline"}),h.jsx("input",{className:"form-input",value:((Be=w.news)==null?void 0:Be.headline)??"",placeholder:"e.g. ULEZ Extended Nationwide",onChange:W=>M("headline",W.target.value)})]}),h.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[h.jsx("label",{className:"form-label",children:"Story body"}),h.jsx("textarea",{className:"form-textarea",rows:2,value:((qe=w.news)==null?void 0:qe.body)??"",placeholder:"Describe the news event…",onChange:W=>M("body",W.target.value)})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"form-label",style:{display:"block",marginBottom:8},children:"Asset hints (optional)"}),h.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:kn.map(W=>{var Z,F;return h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[h.jsx("span",{style:{fontSize:"0.82rem",fontWeight:500,minWidth:68},children:W.name}),h.jsx("select",{className:"form-select",style:{fontSize:"0.78rem",padding:"5px 8px"},value:((F=(Z=w.news)==null?void 0:Z.assetHints)==null?void 0:F[W.id])??"",onChange:B=>D(W.id,B.target.value),children:hV.map(B=>h.jsx("option",{value:B.value,children:B.label},B.value))})]},W.id)})})]})]})]}),S&&h.jsx("div",{className:"alert alert-error",style:{marginTop:16},children:S}),h.jsxs("div",{style:{display:"flex",gap:12,marginTop:20,justifyContent:"flex-end"},children:[h.jsx("button",{className:"btn btn-outline",onClick:n,children:"Cancel"}),h.jsx("button",{className:"btn btn-primary btn-lg",onClick:A,disabled:v,children:v?"Saving…":"✓ Save Game Config"})]})]})]})}function gV(){const t="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="TENENT-";for(let n=0;n<4;n++)e+=t[Math.floor(Math.random()*t.length)];return e}function om(t){return t?typeof t.toMillis=="function"?t.toMillis():t instanceof Date?t.getTime():typeof t=="number"?t:t.seconds?t.seconds*1e3:null:null}function yV(t){if(!t)return!1;const e=Date.now(),n=om(t.startDate)??0,r=om(t.endDate)??1/0;return e>=n&&e<=r}function _V(t){if(!t)return!1;const e=t.playsUsed??0,n=t.maxPlays??0;return e<n}function vV(t){if(!t)return!1;const e=t.activeUsers??0,n=t.maxUsers??0;return e<n}function wV(t){const e=[];return t?(yV(t)||e.push("This game code has expired or is not yet active."),_V(t)||e.push("This school has used all available plays. Please contact Tenent Financial Education."),vV(t)||e.push("The maximum number of players for this session has been reached."),t.status==="disabled"&&e.push("This game code has been disabled."),e.length===0?{allowed:!0}:{allowed:!1,reason:e[0]}):{allowed:!1,reason:"Game code not found."}}function Xs(t){if(!t)return"—";const e=om(t);return e?new Date(e).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):t.toDate?t.toDate().toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"—"}const EV=[{id:"trading_jr",name:"Trading Game Jr"},{id:"shopping_challenge",name:"Shopping Challenge"},{id:"budgeting_jr",name:"Budgeting Jr"},{id:"uk_economy",name:"The UK Economy"}];function TV(){const{user:t}=Oi(),[e,n]=j.useState([]),[r,i]=j.useState([]),[s,o]=j.useState(!0),[a,c]=j.useState(!1),[u,f]=j.useState(!1),[p,m]=j.useState(""),[v,I]=j.useState(""),[S,b]=j.useState({gameName:"Trading Game Jr",schoolName:"",contactEmail:"",teacherEmail:"",gameConfigId:"",startDate:"",endDate:"",maxUsers:35,maxPlays:100});j.useEffect(()=>{w()},[t]);const w=async()=>{o(!0);try{const[D,E]=await Promise.all([Ed(t.uid),zy(t.uid)]);n(D),i(E)}finally{o(!1)}},T=async D=>{if(D.preventDefault(),!S.gameConfigId){m("Please select a game configuration.");return}f(!0),m("");try{const E=gV();await qM({code:E,gameName:S.gameName,schoolName:S.schoolName.trim(),contactEmail:S.contactEmail.trim(),teacherEmail:S.teacherEmail.trim().toLowerCase(),gameConfigId:S.gameConfigId,startDate:new Date(S.startDate),endDate:new Date(S.endDate+"T23:59:59"),maxUsers:Number(S.maxUsers),maxPlays:Number(S.maxPlays)},t.uid),I(`Game code created: ${E}`),c(!1),b({gameName:"Trading Game Jr",schoolName:"",contactEmail:"",teacherEmail:"",gameConfigId:"",startDate:"",endDate:"",maxUsers:35,maxPlays:100}),w()}catch(E){m("Failed to create code: "+E.message)}finally{f(!1)}},R=async D=>{confirm(`Disable game code ${D}? Students will no longer be able to join.`)&&(await GM(D),w())},P=async D=>{await HM(D,{status:"active"}),w()},M=new Date().toISOString().split("T")[0];return s?h.jsx("div",{className:"loading-page",children:h.jsx("div",{className:"spinner"})}):h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24},children:[h.jsxs("div",{children:[h.jsx("h2",{style:{marginBottom:4},children:"Game Codes"}),h.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem"},children:"Create codes for schools. Each code controls how many students can play and how many total plays are permitted."})]}),h.jsx("button",{className:"btn btn-primary",onClick:()=>c(!0),children:"+ New Code"})]}),v&&h.jsxs("div",{className:"alert alert-success",style:{marginBottom:16},children:["✓ ",v]}),p&&h.jsx("div",{className:"alert alert-error",style:{marginBottom:16},children:p}),a&&h.jsxs("div",{className:"card",style:{marginBottom:24,borderColor:"var(--orange)",borderWidth:2},children:[h.jsxs("div",{className:"card-header",children:[h.jsx("h3",{style:{fontSize:"1rem"},children:"Create New Game Code"}),h.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>c(!1),children:"Cancel"})]}),h.jsx("div",{className:"card-body",children:h.jsxs("form",{onSubmit:T,children:[h.jsxs("div",{className:"form-group",style:{marginBottom:16},children:[h.jsx("label",{className:"form-label",children:"Game *"}),h.jsx("select",{className:"form-select",required:!0,value:S.gameName,onChange:D=>b(E=>({...E,gameName:D.target.value})),children:EV.map(D=>h.jsx("option",{value:D.name,children:D.name},D.id))})]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"School Name *"}),h.jsx("input",{className:"form-input",required:!0,value:S.schoolName,onChange:D=>b(E=>({...E,schoolName:D.target.value})),placeholder:"Oakwood Academy"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"Contact Email *"}),h.jsx("input",{className:"form-input",type:"email",required:!0,value:S.contactEmail,onChange:D=>b(E=>({...E,contactEmail:D.target.value})),placeholder:"admin@school.ac.uk"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"Teacher Email"}),h.jsx("input",{className:"form-input",type:"email",value:S.teacherEmail,onChange:D=>b(E=>({...E,teacherEmail:D.target.value})),placeholder:"teacher@school.ac.uk"}),h.jsx("span",{className:"form-hint",children:"The teacher who will run this game — they log in with this email + the game code"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"Game Configuration *"}),h.jsxs("select",{className:"form-select",required:!0,value:S.gameConfigId,onChange:D=>b(E=>({...E,gameConfigId:D.target.value})),children:[h.jsx("option",{value:"",children:"— Select a game config —"}),r.map(D=>h.jsx("option",{value:D.id,children:D.name},D.id))]}),r.length===0&&h.jsx("span",{className:"form-hint",style:{color:"var(--red)"},children:"No game configs yet — create one in the Game Configs tab first."})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"Start Date *"}),h.jsx("input",{className:"form-input",type:"date",required:!0,min:M,value:S.startDate,onChange:D=>b(E=>({...E,startDate:D.target.value}))})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"End Date *"}),h.jsx("input",{className:"form-input",type:"date",required:!0,min:S.startDate||M,value:S.endDate,onChange:D=>b(E=>({...E,endDate:D.target.value}))})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"Max Concurrent Players"}),h.jsx("input",{className:"form-input",type:"number",min:1,max:200,value:S.maxUsers,onChange:D=>b(E=>({...E,maxUsers:D.target.value}))}),h.jsx("span",{className:"form-hint",children:"How many students can be in one session at once"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"Max Total Plays (Licence)"}),h.jsx("input",{className:"form-input",type:"number",min:1,value:S.maxPlays,onChange:D=>b(E=>({...E,maxPlays:D.target.value}))}),h.jsx("span",{className:"form-hint",children:"Each student completing a game = 1 play"})]})]}),h.jsxs("div",{style:{display:"flex",gap:10,marginTop:8},children:[h.jsx("button",{type:"submit",className:"btn btn-primary",disabled:u,children:u?"Creating…":"Create Code"}),h.jsx("button",{type:"button",className:"btn btn-outline",onClick:()=>c(!1),children:"Cancel"})]})]})})]}),h.jsx("div",{className:"card",children:h.jsx("div",{className:"table-wrap",children:h.jsxs("table",{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Code"}),h.jsx("th",{children:"Game"}),h.jsx("th",{children:"School"}),h.jsx("th",{children:"Teacher"}),h.jsx("th",{children:"Active"}),h.jsx("th",{children:"Plays Used"}),h.jsx("th",{children:"Users Now"}),h.jsx("th",{children:"Status"}),h.jsx("th",{children:"Actions"})]})}),h.jsxs("tbody",{children:[e.length===0&&h.jsx("tr",{children:h.jsx("td",{colSpan:9,style:{textAlign:"center",color:"var(--text-muted)",padding:32},children:"No game codes yet. Create one above."})}),e.map(D=>{var x,Be,qe,W;const E=Date.now(),_=((Be=(x=D.startDate)==null?void 0:x.toMillis)==null?void 0:Be.call(x))??0,C=((W=(qe=D.endDate)==null?void 0:qe.toMillis)==null?void 0:W.call(qe))??1/0,k=E>=_&&E<=C&&D.status==="active",A=D.maxPlays-(D.playsUsed??0),N=A<=0;return h.jsxs("tr",{children:[h.jsx("td",{children:h.jsx("code",{style:{fontFamily:"monospace",fontWeight:700,fontSize:"0.95rem",letterSpacing:"0.04em",color:"var(--navy)"},children:D.code.replace(/^TENENT-/,"")})}),h.jsx("td",{children:h.jsx("span",{style:{fontSize:"0.8rem",fontWeight:600,background:"rgba(31,29,76,0.08)",borderRadius:4,padding:"2px 7px",color:"var(--navy)",whiteSpace:"nowrap"},children:D.gameName??"Trading Game Jr"})}),h.jsxs("td",{children:[h.jsx("div",{style:{fontWeight:500},children:D.schoolName}),h.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:D.contactEmail}),h.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:[Xs(D.startDate)," – ",Xs(D.endDate)]})]}),h.jsx("td",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:D.teacherEmail||h.jsx("span",{style:{fontStyle:"italic"},children:"Not set"})}),h.jsxs("td",{style:{fontSize:"0.85rem"},children:[Xs(D.startDate),h.jsx("br",{}),h.jsx("span",{style:{color:"var(--text-muted)"},children:"to"}),h.jsx("br",{}),Xs(D.endDate)]}),h.jsxs("td",{children:[h.jsxs("div",{style:{fontWeight:600},children:[D.playsUsed??0," / ",D.maxPlays]}),h.jsx("div",{style:{fontSize:"0.78rem",color:N?"var(--red)":"var(--green)"},children:N?"⚠ Exhausted":`${A} remaining`})]}),h.jsxs("td",{style:{fontWeight:600},children:[D.activeUsers??0," / ",D.maxUsers]}),h.jsx("td",{children:D.status==="disabled"?h.jsx("span",{className:"badge badge-red",children:"Disabled"}):k?h.jsx("span",{className:"badge badge-green",children:"Active"}):h.jsx("span",{className:"badge badge-gray",children:"Inactive"})}),h.jsx("td",{children:D.status==="active"?h.jsx("button",{className:"btn btn-sm btn-danger",onClick:()=>R(D.code),children:"Disable"}):h.jsx("button",{className:"btn btn-sm btn-success",onClick:()=>P(D.code),children:"Re-enable"})})]},D.code)})]})]})})})]})}const xf=(t,e)=>Ko(Is(Cs,`live/${t}/prices`),e),Pn=(t,e)=>Ko(Is(Cs,`live/${t}/status`),e),Sa=(t,e)=>Ko(Is(Cs,`live/${t}/countdown`),e),SV=(t,e)=>Ko(Is(Cs,`live/${t}/ticker`),e.slice(-60));function Bw(t,e,n){return Ko(Is(Cs,`live/${t}/segment`),{index:e,news:n??null,updatedAt:Date.now()})}const cc=(t,e)=>{const n=Is(Cs,t);return PM(n,r=>e(r.val())),()=>NM(n)},IV=(t,e)=>cc(`live/${t}/prices`,e),CV=(t,e)=>cc(`live/${t}/status`,e),Fx=(t,e)=>cc(`live/${t}/segment`,e),xV=(t,e)=>cc(`live/${t}/ticker`,e),kV=(t,e)=>cc(`live/${t}/countdown`,e),zw=t=>Ko(Is(Cs,`live/${t}`),null);function Ux({gameCode:t,gameConfigId:e,onClose:n,adminUid:r}){var ar;const{user:i}=Oi(),s=r??(i==null?void 0:i.uid)??"teacher",[o,a]=j.useState(null),[c,u]=j.useState(null),[f,p]=j.useState([]),[m,v]=j.useState(null),[I,S]=j.useState({}),[b,w]=j.useState({}),[T,R]=j.useState({}),[P,M]=j.useState(0),[D,E]=j.useState(!1),[_,C]=j.useState(!1),[k,A]=j.useState(!1),[N,x]=j.useState(""),[Be,qe]=j.useState(-1),W=j.useRef(null),Z=j.useRef(null),F=j.useRef(!1),B=j.useRef({}),X=j.useRef(0),ge=j.useRef([]),ce=j.useRef(0),we=j.useRef([]);j.useEffect(()=>{if(!o)return;const ee=G=>(G.preventDefault(),G.returnValue="Refreshing will restart the game session. Are you sure?",G.returnValue);return window.addEventListener("beforeunload",ee),()=>window.removeEventListener("beforeunload",ee)},[o]),j.useEffect(()=>{(async()=>{x(""),console.log("[SC] Init start — gameCode:",t,"gameConfigId:",e,"adminUid:",s),console.log("[SC] Loading config...");const G=await Lx(e);if(!G)throw new Error("Game config not found: "+e);console.log("[SC] Config loaded:",G.name),v(G);const oe=oV();S(oe),R(oe),B.current=oe,console.log("[SC] Creating session...");const Ce=await QM(t,G,s);console.log("[SC] Session created:",Ce),a(Ce),console.log("[SC] Broadcasting initial state..."),await xf(Ce,oe),await Pn(Ce,"lobby"),await Sa(Ce,null),console.log("[SC] Init complete.")})().catch(G=>{console.error("[SC] Init error:",G),x(G.code?G.code+": "+G.message:G.message)})},[]),j.useEffect(()=>{if(!o)return;const ee=YM(o,u),G=jx(o,p),oe=Fx(o,Ce=>{(Ce==null?void 0:Ce.index)!=null&&qe(Ce.index)});return()=>{ee(),G(),oe()}},[o]);const Ie=()=>{clearInterval(W.current),clearInterval(Z.current)},an=j.useCallback(async(ee,G)=>{if(!m||!o)return;const oe=m.segments[ee],Ce=oe.steps??Math.max(2,Math.round(oe.segmentSeconds*1e3/oe.msPerTick)),zt=oe.msPerTick??1e3,Wt=oe.segmentSeconds??Ce*zt/1e3;await Pn(o,"countdown");for(let H=3;H>=1;H--)await Sa(o,H),await new Promise(le=>setTimeout(le,1e3));await Sa(o,0),await new Promise(H=>setTimeout(H,600)),await Sa(o,null);const ln=sV(G,oe.directions??{},oe.volatilities??{}),Q=iV(ln,oe,Ce);B.current=ln,ge.current=Q,X.current=0,ce.current=Wt,S(ln),w(G),E(!0),C(!1),F.current=!1,M(Wt),await bs(o,{status:"trading",currentPrices:ln}),await xf(o,ln),await Pn(o,"trading"),Z.current=setInterval(async()=>{if(F.current)return;const H=X.current;if(H>=ge.current.length){clearInterval(Z.current);return}const le=ge.current[H].prices;w(B.current),B.current=le,S(le),await xf(o,le),we.current.push({step:we.current.length+1,prices:le}),await SV(o,we.current),X.current+=1},zt),W.current=setInterval(()=>{F.current||(ce.current-=1,M(ce.current),ce.current<=0&&(clearInterval(W.current),clearInterval(Z.current),E(!1)))},1e3)},[m,o]),Ft=j.useCallback(async ee=>{if(!m||!o)return;const G=m.segments[ee],oe=ee>0?m.segments[ee-1]:null,Ce=ee-1,zt=(oe==null?void 0:oe.practice)===!0;if(Ie(),E(!1),C(!1),F.current=!1,oe&&await Fw(o,Ce,oe.label??`Phase ${Ce+1}`,B.current).catch(console.error),zt){const Wt=m.startingCash??2e4;await ZM(o,Wt),we.current=[]}await bs(o,{status:"news",currentSegmentIndex:ee}),await Pn(o,"news"),await Bw(o,ee,{...G.news??{},practiceEnd:zt})},[m,o]),Ut=async()=>{if(!o)return;const ee=((c==null?void 0:c.currentSegmentIndex)??-1)<0?0:c.currentSegmentIndex;await bs(o,{status:"pre_market",currentSegmentIndex:ee}),await Pn(o,"pre_market")},Qo=async()=>{if(!c||!m)return;const ee=c.currentSegmentIndex??0,G={...B.current};await an(ee,G)};j.useEffect(()=>{if(!D&&(c==null?void 0:c.status)==="trading"&&o&&m){const G=(c.currentSegmentIndex??0)+1;G<m.segments.length?Ft(G):qn()}},[D]);const Yo=async()=>{F.current=!0,C(!0),await bs(o,{status:"paused"}),await Pn(o,"paused")},$n=async()=>{F.current=!1,C(!1),await bs(o,{status:"trading"}),await Pn(o,"trading")},qn=async()=>{var oe;Ie(),E(!1),C(!1),A(!1);const ee=(c==null?void 0:c.currentSegmentIndex)??0,G=(oe=m==null?void 0:m.segments)==null?void 0:oe[ee];G&&await Fw(o,ee,G.label??`Phase ${ee+1}`,B.current).catch(console.error),await bs(o,{status:"ended",endedAt:new Date}),await Pn(o,"ended"),await Bw(o,-1,null),await Sa(o,null),setTimeout(()=>zw(o),3e3)},Vr=async()=>{o&&await Pn(o,"leaderboard")},Hn=async()=>{Ie(),o&&await zw(o),n()};if(N&&!o)return h.jsx("div",{className:"loading-page",children:h.jsxs("div",{style:{textAlign:"center",maxWidth:480},children:[h.jsx("div",{style:{fontSize:"2.5rem",marginBottom:16},children:"⚠️"}),h.jsx("h3",{style:{color:"var(--red)",marginBottom:12},children:"Failed to set up session"}),h.jsx("div",{style:{background:"#fef2f2",border:"1px solid #fecaca",borderRadius:8,padding:"12px 16px",marginBottom:20,fontFamily:"monospace",fontSize:"0.85rem",color:"#991b1b",textAlign:"left"},children:N}),h.jsx("button",{className:"btn btn-outline",onClick:n,children:"← Go back"})]})});if(!o||!m)return h.jsxs("div",{className:"loading-page",children:[h.jsx("div",{className:"spinner"}),h.jsx("span",{children:"Setting up session…"})]});const it=(c==null?void 0:c.status)??"lobby",st=(c==null?void 0:c.currentSegmentIndex)??-1,Qe=st>=0?m.segments[st]:null,Li=st>=m.segments.length-1,or=D&&!_,Fr=f.filter(ee=>ee.readyForSegment===Be).length,Yt=f.length,ji=[...f].sort((ee,G)=>kf(G,I)-kf(ee,I)),Xo=P<=10?"var(--red)":P<=20?"var(--orange)":"var(--navy)",Bt=m.startingCash??2e4;return h.jsxs("div",{style:{padding:24,position:"relative"},children:[k&&h.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(20,19,48,0.75)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:24},children:h.jsxs("div",{style:{background:"white",borderRadius:16,padding:36,maxWidth:440,width:"100%",boxShadow:"0 20px 60px rgba(0,0,0,0.35)",textAlign:"center"},children:[h.jsx("div",{style:{fontSize:"3rem",marginBottom:12},children:"⏹"}),h.jsx("h2",{style:{marginBottom:12},children:"Close the markets early?"}),h.jsxs("p",{style:{color:"var(--text-muted)",marginBottom:28,lineHeight:1.6},children:["This will end trading immediately for all ",f.length," player",f.length!==1?"s":""," and move to the results screen. This cannot be undone."]}),h.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center"},children:[h.jsx("button",{className:"btn btn-outline btn-lg",onClick:()=>A(!1),children:"Cancel — keep trading"}),h.jsx("button",{className:"btn btn-danger btn-lg",onClick:qn,children:"Yes, close markets"})]})]})}),h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:24,gap:16,flexWrap:"wrap"},children:[h.jsxs("div",{children:[h.jsxs("h2",{style:{marginBottom:4},children:["Live Session — ",h.jsx("code",{style:{fontFamily:"monospace",color:"var(--orange)",fontSize:"1rem"},children:t.replace(/^TENENT-/,"")})]}),h.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"},children:[h.jsx(AV,{status:it}),Qe&&h.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.88rem"},children:Qe.label}),(D||_)&&P>0&&h.jsxs("span",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.4rem",color:_?"var(--orange)":Xo},children:[P,"s",_?" (paused)":""]})]})]}),h.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap",alignItems:"center"},children:[it==="lobby"&&h.jsx("button",{className:"btn btn-primary btn-lg",onClick:Ut,children:"📋 Open Pre-Market"}),it==="pre_market"&&!D&&h.jsx("button",{className:"btn btn-primary btn-lg",onClick:Qo,children:"▶ Open Markets"}),it==="news"&&h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[h.jsx(Ww,{ready:Fr,total:Yt}),h.jsx("button",{className:"btn btn-primary btn-lg",onClick:Ut,children:"📋 Open Pre-Market →"})]}),or&&h.jsx("button",{className:"btn btn-lg",style:{background:"var(--orange)",color:"white"},onClick:Yo,children:"⏸ Pause"}),_&&h.jsx("button",{className:"btn btn-primary btn-lg",onClick:$n,children:"▶ Resume"}),(or||_)&&Li&&h.jsx("button",{className:"btn btn-danger btn-lg",onClick:()=>A(!0),disabled:or,children:"Close Markets ⏹"}),it==="ended"&&h.jsx("button",{className:"btn btn-lg",style:{background:"#fbbf24",color:"#1c1a10",fontWeight:700},onClick:Vr,children:"🏆 Show Leaderboard"}),it==="leaderboard"&&h.jsx("span",{className:"badge badge-yellow",style:{fontSize:"1rem",padding:"8px 16px"},children:"Leaderboard Live"}),h.jsx("button",{className:"btn btn-outline btn-sm",onClick:Hn,children:"✕ Close"})]})]}),N&&h.jsx("div",{className:"alert alert-error",style:{marginBottom:16},children:N}),_&&h.jsxs("div",{style:{background:"#fffbeb",border:"2px solid var(--orange)",borderRadius:10,padding:"14px 20px",marginBottom:20,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[h.jsx("span",{style:{fontWeight:600,color:"#92400e"},children:"⏸ Trading is paused"}),h.jsx("button",{className:"btn btn-primary",onClick:$n,children:"▶ Resume trading"})]}),it==="ended"&&h.jsxs("div",{style:{background:"#fef3c7",border:"2px solid #fbbf24",borderRadius:10,padding:"14px 20px",marginBottom:20,display:"flex",alignItems:"center",justifyContent:"space-between",gap:16},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:700,color:"#92400e",marginBottom:2},children:"⏳ Waiting for students to confirm…"}),h.jsxs("div",{style:{fontSize:"0.82rem",color:"#78350f"},children:[f.filter(ee=>ee.confirmedEnd).length," / ",f.length," confirmed. The leaderboard will appear automatically once all confirm, or you can force it now."]})]}),h.jsx("button",{className:"btn btn-lg",style:{background:"#fbbf24",color:"#1c1a10",fontWeight:700,whiteSpace:"nowrap",flexShrink:0},onClick:Vr,children:"🏆 Show Leaderboard Now"})]}),(it==="news"||it==="pre_market")&&((ar=Qe==null?void 0:Qe.news)==null?void 0:ar.headline)&&h.jsxs("div",{style:{background:"linear-gradient(135deg, var(--navy-dark), var(--navy))",borderRadius:12,padding:"24px 28px",marginBottom:24,color:"white"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14,flexWrap:"wrap"},children:[h.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:8,background:"var(--orange)",borderRadius:6,padding:"4px 12px",fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.06em"},children:"📰 BREAKING NEWS"}),it==="pre_market"&&h.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:8,background:"#1e3a5f",border:"1px solid rgba(255,255,255,0.2)",borderRadius:6,padding:"4px 12px",fontSize:"0.72rem",fontWeight:700},children:"🕐 PRE-MARKET OPEN — students adjusting portfolios"})]}),h.jsx("h2",{style:{color:"white",fontSize:"1.4rem",marginBottom:10},children:Qe.news.headline}),Qe.news.body&&h.jsx("p",{style:{opacity:.8,lineHeight:1.7,maxWidth:680},children:Qe.news.body}),it==="news"&&h.jsxs("div",{style:{marginTop:16,display:"flex",alignItems:"center",gap:16},children:[h.jsx(Ww,{ready:Fr,total:Yt}),h.jsx("span",{style:{opacity:.55,fontSize:"0.82rem"},children:"Students click Ready on their screen when done reading"})]}),it==="pre_market"&&h.jsx("div",{style:{marginTop:16},children:h.jsxs("span",{style:{opacity:.65,fontSize:"0.82rem"},children:["Prices are frozen. Students can buy and sell. Click ",h.jsx("strong",{children:"Open Markets"})," when ready."]})})]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,marginBottom:24},children:[h.jsxs("div",{className:"card",children:[h.jsx("div",{className:"card-header",children:h.jsx("h3",{style:{fontSize:"1rem"},children:"Current Prices"})}),h.jsx("div",{style:{padding:0},children:h.jsxs("table",{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Asset"}),h.jsx("th",{children:"Price"}),h.jsx("th",{children:"P&L"}),h.jsx("th",{children:"Direction"}),h.jsx("th",{children:"Volatility"})]})}),h.jsx("tbody",{children:kn.map(ee=>{var ke,Ae,ot,cn;const G=I[ee.id]??ee.startPrice,oe=b[ee.id]??G,Ce=T[ee.id]??ee.startPrice,zt=(ke=Qe==null?void 0:Qe.directions)==null?void 0:ke[ee.id],Wt=(Ae=Qe==null?void 0:Qe.volatilities)==null?void 0:Ae[ee.id],ln=G-oe,Q=ln>0?"up":ln<0?"down":"flat",H=Ce>0?(G-Ce)/Ce*100:0,le=H>0?"var(--green)":H<0?"var(--red)":"var(--text-muted)";return h.jsxs("tr",{children:[h.jsxs("td",{children:[h.jsx("div",{style:{fontWeight:600},children:ee.name}),h.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:ee.sector})]}),h.jsxs("td",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.05rem",color:Q==="up"?"var(--green)":Q==="down"?"var(--red)":"var(--navy)"},children:["£",G.toFixed(2)," ",h.jsx("span",{style:{fontSize:"0.7rem"},children:Q==="up"?"▲":Q==="down"?"▼":""})]}),h.jsxs("td",{style:{fontWeight:600,fontSize:"0.82rem",color:le},children:[H>=0?"+":"",H.toFixed(1),"%"]}),h.jsx("td",{style:{fontSize:"0.78rem",fontWeight:600,color:RV(zt)},children:((ot=yi[zt])==null?void 0:ot.label)??"—"}),h.jsx("td",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:((cn=gs[Wt])==null?void 0:cn.label)??"—"})]},ee.id)})})]})})]}),h.jsxs("div",{className:"card",children:[h.jsxs("div",{className:"card-header",children:[h.jsx("h3",{style:{fontSize:"1rem"},children:"Leaderboard"}),h.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:[f.length," players"]})]}),h.jsx("div",{style:{padding:0},children:h.jsxs("table",{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"#"}),h.jsx("th",{children:"Trader"}),h.jsx("th",{children:"Portfolio"}),h.jsx("th",{children:"P&L"}),h.jsx("th",{children:"Ready?"})]})}),h.jsxs("tbody",{children:[ji.length===0&&h.jsx("tr",{children:h.jsx("td",{colSpan:5,style:{textAlign:"center",color:"var(--text-muted)",padding:24},children:"Waiting for students to join…"})}),ji.map((ee,G)=>{const oe=kf(ee,I),Ce=oe-Bt,zt=ee.readyForSegment===Be;return h.jsxs("tr",{children:[h.jsx("td",{style:{fontWeight:700},children:G===0?"🥇":G===1?"🥈":G===2?"🥉":G+1}),h.jsx("td",{style:{fontWeight:500},children:ee.nickname}),h.jsxs("td",{style:{fontWeight:600,fontFamily:"var(--font-display)"},children:["£",oe.toLocaleString("en-GB",{maximumFractionDigits:0})]}),h.jsxs("td",{style:{fontWeight:600,color:Ce>=0?"var(--green)":"var(--red)"},children:[Ce>=0?"+":"","£",Ce.toLocaleString("en-GB",{maximumFractionDigits:0})]}),h.jsx("td",{style:{textAlign:"center"},children:it==="news"?h.jsx("span",{style:{fontSize:"1rem"},children:zt?"✅":"⏳"}):h.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.78rem"},children:"—"})})]},ee.id)})]})]})})]})]}),h.jsxs("div",{className:"card",children:[h.jsx("div",{className:"card-header",children:h.jsx("h3",{style:{fontSize:"1rem"},children:"Game Progress"})}),h.jsx("div",{className:"card-body",children:h.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:m.segments.map((ee,G)=>h.jsxs("div",{style:{padding:"8px 16px",borderRadius:8,background:G<st?"#dcfce7":G===st?"var(--navy)":"var(--surface-2)",color:G<st?"#15803d":G===st?"white":"var(--text-muted)",fontWeight:G===st?700:400,fontSize:"0.85rem",border:"1px solid",borderColor:G<st?"#bbf7d0":G===st?"var(--navy)":"var(--border)"},children:[G<st?"✓ ":"",ee.label,ee.practice&&h.jsx("span",{style:{marginLeft:6,fontSize:"0.7rem",opacity:.65},children:"(practice)"}),G===st&&(D||_)&&h.jsxs("span",{style:{marginLeft:8,opacity:.75},children:["(",P,"s)"]})]},ee.id))})})]})]})}function kf(t,e){if(!t)return 0;let n=t.cash??0;for(const[r,i]of Object.entries(t.holdings??{}))n+=(e[r]??0)*i;return Math.round(n)}function RV(t){return{rally:"#15803d",sharp_up:"#16a34a",up:"#22c55e",slight_up:"#86efac",flat:"#9ca3af",slight_down:"#fca5a5",down:"#ef4444",sharp_down:"#dc2626",crash:"#7f1d1d",recovery:"#0ea5e9",reversal_up:"#6366f1",reversal_down:"#a855f7",pump_dump:"#f59e0b",dead_cat:"#78716c"}[t]??"#6b7280"}function AV({status:t}){const e={lobby:"navy",pre_market:"navy",trading:"green",news:"orange",paused:"yellow",countdown:"orange",ended:"red",leaderboard:"yellow"},n={lobby:"Lobby",pre_market:"Pre-Market Open",trading:"Trading",news:"News Break",paused:"Paused",countdown:"Starting…",ended:"Game Over",leaderboard:"Leaderboard"};return h.jsx("span",{className:`badge badge-${e[t]??"navy"}`,children:n[t]??t})}function Ww({ready:t,total:e}){const n=e>0?Math.round(t/e*100):0,r=n===100?"#15803d":n>=50?"#92400e":"#991b1b",i=n===100?"#dcfce7":n>=50?"#fef3c7":"#fee2e2";return h.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,background:i,borderRadius:99,padding:"6px 14px"},children:[h.jsxs("span",{style:{fontWeight:700,color:r,fontSize:"0.88rem"},children:[t," / ",e," ready"]}),h.jsx("div",{style:{width:60,height:6,background:"rgba(0,0,0,0.1)",borderRadius:3,overflow:"hidden"},children:h.jsx("div",{style:{height:"100%",width:`${n}%`,background:r,borderRadius:3,transition:"width 0.3s"}})})]})}function PV(){const{user:t,logout:e}=Oi(),[n,r]=j.useState("codes"),[i,s]=j.useState([]),[o,a]=j.useState([]),[c,u]=j.useState(null),[f,p]=j.useState(null),[m,v]=j.useState(!0),I=async()=>{v(!0);try{const[S,b]=await Promise.all([zy(t.uid),Ed(t.uid)]);s(S),a(b)}finally{v(!1)}};return j.useEffect(()=>{I()},[]),f?h.jsx(Ux,{gameCode:f.gameCode,gameConfigId:f.gameConfigId,onClose:()=>{p(null),I()}}):c!==null?h.jsxs("div",{style:{padding:24},children:[h.jsxs("div",{style:{marginBottom:20},children:[h.jsx("button",{className:"btn btn-ghost",onClick:()=>u(null),children:"← Back to dashboard"}),h.jsx("h2",{style:{marginTop:12},children:c==="new"?"New Game Configuration":`Edit: ${c.name}`})]}),h.jsx(mV,{existing:c==="new"?null:c,onSaved:()=>{u(null),I()},onCancel:()=>u(null)})]}):h.jsxs("div",{style:{minHeight:"100vh",background:"var(--surface)"},children:[h.jsxs("div",{style:{background:"var(--navy-dark)",color:"white",padding:"0 28px",height:60,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[h.jsx("div",{style:{background:"var(--orange)",borderRadius:8,width:34,height:34,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1rem"},children:"T"}),h.jsxs("div",{children:[h.jsx("span",{style:{fontFamily:"var(--font-display)",fontWeight:700},children:"TENENT"}),h.jsx("span",{style:{marginLeft:10,fontSize:"0.75rem",background:"rgba(255,113,27,0.25)",border:"1px solid rgba(255,113,27,0.4)",borderRadius:4,padding:"2px 8px",color:"var(--orange-light)"},children:"🔑 Superadmin"})]})]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[h.jsx("span",{style:{opacity:.65,fontSize:"0.85rem"},children:t.email}),h.jsx("button",{className:"btn btn-ghost btn-sm",style:{color:"rgba(255,255,255,0.6)"},onClick:e,children:"Sign out"})]})]}),h.jsxs("div",{style:{padding:"28px 28px 0"},children:[h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:16,marginBottom:28},children:[h.jsx(Xc,{label:"Game Configs",value:i.length,icon:"⚙️"}),h.jsx(Xc,{label:"Active Codes",value:o.filter(S=>S.status==="active").length,icon:"🎟️"}),h.jsx(Xc,{label:"Total Plays Used",value:o.reduce((S,b)=>S+(b.playsUsed??0),0),icon:"🎮"}),h.jsx(Xc,{label:"Active Users Now",value:o.reduce((S,b)=>S+(b.activeUsers??0),0),icon:"👥"})]}),h.jsx("div",{className:"tabs",children:[["codes","🎟️ Game Codes"],["configs","⚙️ Game Configs"],["teachers","🎓 Teachers"],["launch","🚀 Launch Session"]].map(([S,b])=>h.jsx("div",{className:`tab${n===S?" active":""}`,onClick:()=>r(S),children:b},S))}),n==="codes"&&h.jsx(TV,{}),n==="configs"&&h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[h.jsxs("div",{children:[h.jsx("h2",{style:{marginBottom:4},children:"Game Configurations"}),h.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem"},children:"Design the segments, news stories and price effects for each game."})]}),h.jsx("button",{className:"btn btn-primary",onClick:()=>u("new"),children:"+ New Config"})]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:16},children:[m&&h.jsx("div",{className:"loading-page",children:h.jsx("div",{className:"spinner"})}),!m&&i.length===0&&h.jsx("div",{className:"card",children:h.jsxs("div",{className:"card-body",style:{textAlign:"center",padding:40},children:[h.jsx("div",{style:{fontSize:40,marginBottom:12},children:"⚙️"}),h.jsx("p",{style:{color:"var(--text-muted)",marginBottom:16},children:"No game configs yet."}),h.jsx("button",{className:"btn btn-primary",onClick:()=>u("new"),children:"Create your first game"})]})}),i.map(S=>{var b;return h.jsx("div",{className:"card",children:h.jsxs("div",{className:"card-body",children:[h.jsx("h3",{style:{fontSize:"1rem",marginBottom:6},children:S.name}),h.jsxs("div",{style:{color:"var(--text-muted)",fontSize:"0.85rem",marginBottom:12},children:[((b=S.segments)==null?void 0:b.length)??0," segments · £",(S.startingCash??0).toLocaleString()," starting cash"]}),h.jsxs("div",{style:{display:"flex",gap:8},children:[h.jsx("button",{className:"btn btn-outline btn-sm",onClick:()=>u(S),children:"Edit"}),h.jsx("button",{className:"btn btn-ghost btn-sm",style:{color:"var(--red)"},onClick:async()=>{confirm(`Delete "${S.name}"?`)&&(await $M(S.id),I())},children:"Delete"})]})]})},S.id)})]})]}),n==="teachers"&&h.jsx(NV,{}),n==="launch"&&h.jsx(bV,{onLaunch:p})]})]})}function NV(){const{user:t}=Oi(),[e,n]=hr.useState([]),[r,i]=hr.useState([]),[s,o]=hr.useState(!0),[a,c]=hr.useState(!1),[u,f]=hr.useState({email:"",gameCode:""}),[p,m]=hr.useState(!1),[v,I]=hr.useState("");hr.useEffect(()=>{S()},[]);const S=async()=>{o(!0);try{const[w,T]=await Promise.all([KM(t.uid),Ed(t.uid)]);n(w),i(T)}finally{o(!1)}},b=async w=>{w.preventDefault(),m(!0),I("");try{I(`To complete: go to Firebase Console → Authentication → Add user with email "${u.email}", then copy their UID and add a Firestore document at admins/{UID} with: role="teacher", email="${u.email}", gameCode="${u.gameCode}", createdBy="${t.uid}"`),c(!1)}finally{m(!1)}};return s?h.jsx("div",{className:"loading-page",children:h.jsx("div",{className:"spinner"})}):h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24},children:[h.jsxs("div",{children:[h.jsx("h2",{style:{marginBottom:4},children:"Teacher Accounts"}),h.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem"},children:"Teachers can run live sessions for their assigned game code. They cannot create or edit configurations."})]}),h.jsx("button",{className:"btn btn-primary",onClick:()=>c(w=>!w),children:"+ Add Teacher"})]}),v&&h.jsxs("div",{className:"alert alert-info",style:{marginBottom:20},children:[h.jsx("div",{style:{fontWeight:600,marginBottom:8},children:"How to create a teacher account:"}),h.jsxs("ol",{style:{paddingLeft:20,lineHeight:2,fontSize:"0.88rem"},children:[h.jsxs("li",{children:["Go to ",h.jsx("strong",{children:"Firebase Console → Authentication → Users → Add user"})]}),h.jsx("li",{children:"Enter the teacher's email and a temporary password"}),h.jsxs("li",{children:["Copy the ",h.jsx("strong",{children:"User UID"})," shown in the users table"]}),h.jsxs("li",{children:["Go to ",h.jsx("strong",{children:"Firestore → admins → Add document"})]}),h.jsxs("li",{children:["Set Document ID to the UID, then add fields:",h.jsx("br",{}),h.jsx("code",{style:{background:"#e0e7ff",padding:"2px 6px",borderRadius:4},children:'role = "teacher"'})," ",h.jsxs("code",{style:{background:"#e0e7ff",padding:"2px 6px",borderRadius:4},children:['email = "',u.email,'"']})," ",h.jsxs("code",{style:{background:"#e0e7ff",padding:"2px 6px",borderRadius:4},children:['gameCode = "',u.gameCode,'"']})," ",h.jsxs("code",{style:{background:"#e0e7ff",padding:"2px 6px",borderRadius:4},children:['createdBy = "',t.uid,'"']})]})]})]}),a&&h.jsxs("div",{className:"card",style:{marginBottom:24,borderColor:"var(--orange)",borderWidth:2},children:[h.jsxs("div",{className:"card-header",children:[h.jsx("h3",{style:{fontSize:"1rem"},children:"New Teacher Account"}),h.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>c(!1),children:"Cancel"})]}),h.jsx("div",{className:"card-body",children:h.jsxs("form",{onSubmit:b,children:[h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"Teacher Email *"}),h.jsx("input",{className:"form-input",type:"email",required:!0,value:u.email,onChange:w=>f(T=>({...T,email:w.target.value})),placeholder:"teacher@school.ac.uk"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"Assign Game Code *"}),h.jsxs("select",{className:"form-select",required:!0,value:u.gameCode,onChange:w=>f(T=>({...T,gameCode:w.target.value})),children:[h.jsx("option",{value:"",children:"— Select code —"}),r.filter(w=>w.status==="active").map(w=>h.jsxs("option",{value:w.code,children:[w.code," — ",w.schoolName]},w.code))]})]})]}),h.jsx("button",{type:"submit",className:"btn btn-primary",disabled:p,children:"Show Setup Instructions"})]})})]}),h.jsxs("div",{className:"card",children:[h.jsxs("div",{style:{padding:"16px 20px",borderBottom:"1px solid var(--border)",background:"#fffbeb"},children:[h.jsx("div",{style:{fontWeight:600,fontSize:"0.85rem",color:"#92400e"},children:"🔒 Role separation — what teachers see vs admins"}),h.jsx("div",{style:{fontSize:"0.82rem",color:"#92400e",marginTop:4,lineHeight:1.6},children:"Teachers log in to the same URL but see only their assigned session. They can start, pause, and end trading — but cannot create codes, edit game configs, or view other schools' data."})]}),h.jsx("div",{className:"table-wrap",children:h.jsxs("table",{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Email"}),h.jsx("th",{children:"Game Code"}),h.jsx("th",{children:"School"})]})}),h.jsxs("tbody",{children:[e.length===0&&h.jsx("tr",{children:h.jsx("td",{colSpan:3,style:{textAlign:"center",color:"var(--text-muted)",padding:32},children:"No teacher accounts yet."})}),e.map(w=>{const T=r.find(R=>R.code===w.gameCode);return h.jsxs("tr",{children:[h.jsx("td",{style:{fontWeight:500},children:w.email}),h.jsx("td",{children:h.jsx("code",{style:{fontFamily:"monospace",fontWeight:700,color:"var(--navy)"},children:w.gameCode})}),h.jsx("td",{style:{color:"var(--text-muted)"},children:(T==null?void 0:T.schoolName)??"—"})]},w.uid)})]})]})})]})]})}function bV({onLaunch:t}){var b;const{user:e}=Oi(),[n,r]=j.useState(""),[i,s]=j.useState(""),[o,a]=j.useState([]),[c,u]=j.useState([]),[f,p]=j.useState(!0);j.useEffect(()=>{(async()=>{p(!0);try{const[T,R]=await Promise.all([Ed(e.uid),zy(e.uid)]);a(T),u(R)}finally{p(!1)}})()},[e]);const m=o.find(w=>w.code===n),v=m?c.find(w=>w.id===m.gameConfigId):null,I=()=>{if(!m){s("Please select a game code.");return}if(!v){s("The game config for this code was not found.");return}if(m.status!=="active"){s("This code is disabled.");return}t({gameCode:m.code,gameConfigId:m.gameConfigId})},S=o.filter(w=>w.status==="active");return f?h.jsx("div",{className:"loading-page",children:h.jsx("div",{className:"spinner"})}):h.jsxs("div",{style:{maxWidth:560},children:[h.jsx("h2",{style:{marginBottom:8},children:"Launch a Live Session"}),h.jsx("p",{style:{color:"var(--text-muted)",marginBottom:24,fontSize:"0.9rem"},children:"Select a game code to open the session controller. Students join using the code."}),i&&h.jsx("div",{className:"alert alert-error",style:{marginBottom:16},children:i}),h.jsx("div",{className:"card",children:h.jsxs("div",{className:"card-body",children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"Select Game Code"}),h.jsxs("select",{className:"form-select",value:n,onChange:w=>{r(w.target.value),s("")},children:[h.jsx("option",{value:"",children:"— Choose a code —"}),S.map(w=>h.jsxs("option",{value:w.code,children:[w.code," — ",w.schoolName," (",w.playsUsed,"/",w.maxPlays," plays)"]},w.code))]})]}),m&&v&&h.jsxs("div",{style:{background:"var(--surface)",borderRadius:8,padding:16,marginBottom:16},children:[h.jsx("div",{style:{fontWeight:600,marginBottom:8},children:v.name}),h.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--text-muted)",display:"grid",gap:4},children:[h.jsxs("div",{children:["📚 ",(b=v.segments)==null?void 0:b.length," segments"]}),h.jsxs("div",{children:["💷 £",(v.startingCash??0).toLocaleString()," starting cash"]}),h.jsxs("div",{children:["🏫 ",m.schoolName]}),h.jsxs("div",{children:["🎮 ",m.playsUsed,"/",m.maxPlays," plays used · ",m.maxUsers," max users"]}),h.jsxs("div",{children:["📅 Valid ",Xs(m.startDate)," – ",Xs(m.endDate)]})]})]}),h.jsx("button",{className:"btn btn-primary btn-lg btn-full",onClick:I,disabled:!n,children:"🚀 Launch Session"}),h.jsxs("p",{style:{fontSize:"0.78rem",color:"var(--text-muted)",marginTop:10,textAlign:"center"},children:["Share the code ",h.jsx("strong",{children:n||"…"})," with your teacher to distribute to students."]})]})})]})}function Xc({label:t,value:e,icon:n}){return h.jsx("div",{className:"card",children:h.jsxs("div",{className:"card-body",style:{display:"flex",alignItems:"center",gap:16,padding:"18px 20px"},children:[h.jsx("div",{style:{fontSize:"1.8rem"},children:n}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"1.6rem",fontFamily:"var(--font-display)",fontWeight:700,lineHeight:1},children:e}),h.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)",marginTop:3},children:t})]})]})})}function $w(t){return t?t&&typeof t=="object"&&typeof t.toDate=="function"?t.toDate().toLocaleDateString("en-GB"):t instanceof Date?t.toLocaleDateString("en-GB"):String(t):null}function DV({teacherEmail:t,gameCode:e,gameConfigId:n,adminUid:r,onLogout:i}){const[s,o]=j.useState(null),[a,c]=j.useState(!0),[u,f]=j.useState(""),[p,m]=j.useState(!1);if(j.useEffect(()=>{(async()=>{try{const P=await Ih(e);P?o(P):f(`Game code "${e}" not found in database.`)}catch(P){console.error("[TeacherDashboard] Failed to load game code:",P),f(P.message||"Failed to load game code.")}finally{c(!1)}})()},[e]),p)return h.jsx(Ux,{gameCode:e,gameConfigId:n||(s==null?void 0:s.gameConfigId),adminUid:r,onClose:()=>m(!1)});if(a)return h.jsxs("div",{className:"loading-page",children:[h.jsx("div",{className:"spinner"}),h.jsx("span",{children:"Loading dashboard…"})]});if(u)return h.jsx("div",{className:"loading-page",children:h.jsxs("div",{style:{textAlign:"center",maxWidth:480},children:[h.jsx("div",{style:{fontSize:"2.5rem",marginBottom:16},children:"⚠️"}),h.jsx("h3",{style:{color:"var(--red)",marginBottom:12},children:"Could not load dashboard"}),h.jsx("div",{style:{background:"#fef2f2",border:"1px solid #fecaca",borderRadius:8,padding:"12px 16px",fontFamily:"monospace",fontSize:"0.85rem",color:"#991b1b",textAlign:"left"},children:u})]})});const v=s.maxPlays??null,I=s.playsUsed??0,S=v!==null?v-I:null,b=v!==null&&I>=v,w=$w(s.startDate),T=$w(s.endDate);return h.jsx("div",{style:{minHeight:"100vh",background:"var(--bg)",padding:"2rem"},children:h.jsxs("div",{style:{maxWidth:640,margin:"0 auto"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"2rem"},children:[h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"0.25rem"},children:[h.jsx("span",{style:{fontSize:"1.5rem"},children:"🎓"}),h.jsx("h1",{style:{margin:0,fontSize:"1.6rem"},children:"Teacher Dashboard"})]}),h.jsx("p",{style:{color:"var(--muted)",margin:0},children:t})]}),i&&h.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.85rem"},onClick:i,children:"Sign out"})]}),h.jsxs("div",{className:"card",style:{marginBottom:"1.5rem"},children:[h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1.5rem"},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"0.75rem",color:"var(--muted)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:4},children:"Game Code"}),h.jsx("div",{style:{fontSize:"1.8rem",fontWeight:700,letterSpacing:"0.12em",color:"var(--primary)"},children:e})]}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"0.75rem",color:"var(--muted)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:4},children:"School"}),h.jsx("div",{style:{fontSize:"1.1rem",fontWeight:600},children:s.school||"—"})]}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"0.75rem",color:"var(--muted)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:4},children:"Plays remaining"}),h.jsx("div",{style:{fontSize:"1.1rem",fontWeight:600},children:v!==null?`${S} of ${v}`:"—"})]})]}),(w||T)&&h.jsxs("div",{style:{marginTop:"1rem",paddingTop:"1rem",borderTop:"1px solid var(--border)",fontSize:"0.85rem",color:"var(--muted)"},children:["Valid: ",w??"—"," → ",T??"—"]})]}),h.jsx("button",{className:"btn btn-primary",style:{width:"100%",fontSize:"1.1rem",padding:"0.9rem"},onClick:()=>m(!0),disabled:b,children:"🚀 Launch Session"}),b&&h.jsx("p",{style:{textAlign:"center",color:"var(--red)",marginTop:"0.75rem",fontSize:"0.9rem"},children:"All plays have been used for this code. Contact your Tenent administrator."})]})})}function OV({onBack:t}){const{loginAdmin:e}=Oi(),[n,r]=j.useState(""),[i,s]=j.useState(""),[o,a]=j.useState(""),[c,u]=j.useState(!1),f=async p=>{p.preventDefault(),u(!0),a("");try{await e(n,i)}catch{a("Invalid email or password. Please try again.")}finally{u(!1)}};return h.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)",padding:24},children:h.jsxs("div",{style:{width:"100%",maxWidth:420},children:[h.jsxs("div",{style:{textAlign:"center",marginBottom:36},children:[h.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:12,color:"white",textDecoration:"none"},children:[h.jsx("div",{style:{background:"var(--orange)",borderRadius:10,width:48,height:48,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.4rem",color:"white"},children:"T"}),h.jsxs("div",{children:[h.jsx("div",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.4rem"},children:"TENENT"}),h.jsx("div",{style:{fontSize:"0.78rem",opacity:.7,letterSpacing:"0.05em"},children:"FINANCIAL EDUCATION"})]})]}),h.jsx("div",{style:{color:"rgba(255,255,255,0.6)",marginTop:8,fontSize:"0.9rem"},children:"Superadmin Portal"})]}),h.jsx("div",{className:"card",children:h.jsxs("div",{className:"card-body",children:[h.jsx("h2",{style:{marginBottom:20,fontSize:"1.2rem"},children:"Sign in"}),o&&h.jsx("div",{className:"alert alert-error",style:{marginBottom:16},children:o}),h.jsxs("form",{onSubmit:f,children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"Email address"}),h.jsx("input",{className:"form-input",type:"email",value:n,onChange:p=>r(p.target.value),required:!0,autoFocus:!0,placeholder:"admin@school.edu"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"Password"}),h.jsx("input",{className:"form-input",type:"password",value:i,onChange:p=>s(p.target.value),required:!0})]}),h.jsx("button",{type:"submit",className:"btn btn-primary btn-full btn-lg",disabled:c,children:c?"Signing in…":"Sign in"})]})]})}),h.jsx("div",{style:{textAlign:"center",marginTop:20},children:h.jsx("button",{className:"btn btn-ghost",style:{color:"rgba(255,255,255,0.6)"},onClick:t,children:"← Back"})})]})})}function LV({onVerified:t,onBack:e}){const[n,r]=j.useState(""),[i,s]=j.useState(""),[o,a]=j.useState(""),[c,u]=j.useState(!1),[f,p]=j.useState(null),m=async I=>{I.preventDefault(),a(""),u(!0);try{await US(Da);const b=`TENENT-${i.trim().toUpperCase().replace(/^TENENT-/,"")}`,w=n.trim().toLowerCase(),T=await Ih(b);if(!T){a("Game code not found. Please check with your administrator."),u(!1);return}if(!T.teacherEmail){a("No teacher email configured for this code. Please ask your Tenent administrator to set one."),u(!1);return}if(T.teacherEmail.trim().toLowerCase()!==w){a("Email address does not match this game code."),u(!1);return}if(T.disabled){a("This game code has been disabled."),u(!1);return}const R=new Date;if(T.startDate&&R<new Date(T.startDate)){a("This game code is not yet active."),u(!1);return}if(T.endDate&&R>new Date(T.endDate)){a("This game code has expired."),u(!1);return}t({email:w,gameCode:b,gameConfigId:T.gameConfigId,gameName:T.gameName??null})}catch(S){console.error("[TeacherLogin] error:",S),a(S.message||"Something went wrong. Please try again."),u(!1)}},v=async I=>{const S=I.toUpperCase().replace(/^TENENT-/,"").replace(/[^A-Z0-9]/g,"").slice(0,4);if(s(S),S.length===4)try{const b=await Ih(`TENENT-${S}`);p((b==null?void 0:b.gameName)??null)}catch{p(null)}else p(null)};return h.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",background:"linear-gradient(160deg, var(--navy-dark) 0%, var(--navy) 55%, #2d2a6e 100%)"},children:[h.jsxs("div",{style:{padding:"24px 32px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,color:"white"},children:[h.jsx("div",{style:{background:"var(--orange)",borderRadius:8,width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.2rem",color:"white"},children:"T"}),h.jsxs("div",{children:[h.jsx("div",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.1rem"},children:"TENENT"}),h.jsx("div",{style:{fontSize:"0.72rem",opacity:.65,letterSpacing:"0.04em"},children:"FINANCIAL EDUCATION"})]})]}),e&&h.jsx("button",{onClick:e,style:{background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:6,padding:"6px 14px",color:"rgba(255,255,255,0.75)",cursor:"pointer",fontSize:"0.8rem"},children:"← Back"})]}),h.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:h.jsxs("div",{style:{width:"100%",maxWidth:440},children:[h.jsxs("div",{style:{textAlign:"center",marginBottom:32,color:"white"},children:[f&&h.jsx("div",{style:{display:"inline-block",background:"rgba(255,113,27,0.18)",border:"1px solid rgba(255,113,27,0.4)",borderRadius:6,padding:"4px 14px",fontSize:"0.78rem",fontWeight:600,letterSpacing:"0.05em",color:"var(--orange-light, #ffb07a)",marginBottom:14,textTransform:"uppercase"},children:f}),h.jsx("h1",{style:{fontFamily:"var(--font-display)",fontSize:"2rem",color:"white",marginBottom:8},children:"Teacher Login"}),h.jsx("p",{style:{opacity:.75,fontSize:"1rem"},children:"Enter your email and 4-letter game code"})]}),h.jsx("div",{className:"card",children:h.jsxs("div",{className:"card-body",children:[o&&h.jsx("div",{className:"alert alert-error",style:{marginBottom:16},children:o}),h.jsxs("form",{onSubmit:m,children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"Email address"}),h.jsx("input",{className:"form-input",type:"email",value:n,onChange:I=>r(I.target.value),placeholder:"you@school.ac.uk",autoFocus:!0,required:!0,autoComplete:"email"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"Game Code"}),h.jsx("input",{className:"form-input",type:"text",value:i,onChange:I=>v(I.target.value),placeholder:"XXXX",maxLength:4,required:!0,style:{textTransform:"uppercase",letterSpacing:"0.15em",fontSize:"1.4rem",textAlign:"center"}}),h.jsx("span",{className:"form-hint",children:"4-letter code from your Tenent administrator"})]}),h.jsx("button",{type:"submit",className:"btn btn-primary btn-full btn-lg",disabled:c,style:{marginTop:4},children:c?"Verifying…":"Access Teacher Dashboard →"})]})]})})]})})]})}function jV({onJoined:t,onTeacherLogin:e,onAdminLogin:n}){var T;const[r,i]=j.useState(""),[s,o]=j.useState(""),[a,c]=j.useState("code"),[u,f]=j.useState(null),[p,m]=j.useState(""),[v,I]=j.useState(!1),S=async R=>{R.preventDefault(),I(!0),m("");const M=`TENENT-${r.trim().toUpperCase().replace(/^TENENT-/,"")}`;try{const D=await Ih(M);if(!D){m("Game code not found. Please check and try again.");return}const{allowed:E,reason:_}=wV(D);if(!E){m(_);return}f(D),c("nickname")}catch(D){m("Could not verify code: "+D.message)}finally{I(!1)}},b=async R=>{R.preventDefault();const P=s.trim();if(!P){m("Please enter a nickname.");return}if(P.length<2){m("Nickname must be at least 2 characters.");return}if(P.length>20){m("Nickname must be 20 characters or fewer.");return}if(/[\/\\.#$\[\]]/.test(P)){m("Nickname cannot contain / \\ . # $ [ ]");return}t(u,P)},w=(u==null?void 0:u.gameName)??null;return h.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",background:"linear-gradient(160deg, var(--navy-dark) 0%, var(--navy) 55%, #2d2a6e 100%)"},children:[h.jsxs("div",{style:{padding:"24px 32px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,color:"white"},children:[h.jsx("div",{style:{background:"var(--orange)",borderRadius:8,width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.2rem",color:"white"},children:"T"}),h.jsxs("div",{children:[h.jsx("div",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.1rem"},children:"TENENT"}),h.jsx("div",{style:{fontSize:"0.72rem",opacity:.65,letterSpacing:"0.04em"},children:"FINANCIAL EDUCATION"})]})]}),h.jsxs("div",{style:{display:"flex",gap:8},children:[h.jsx("button",{onClick:e,style:{background:"rgba(124,58,237,0.3)",border:"1px solid rgba(124,58,237,0.5)",borderRadius:6,padding:"6px 14px",color:"rgba(255,255,255,0.75)",cursor:"pointer",fontSize:"0.8rem"},children:"🎓 Teacher"}),h.jsx("button",{onClick:n,style:{background:"rgba(255,113,27,0.2)",border:"1px solid rgba(255,113,27,0.4)",borderRadius:6,padding:"6px 14px",color:"rgba(255,255,255,0.75)",cursor:"pointer",fontSize:"0.8rem"},children:"🔑 Admin"})]})]}),h.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:h.jsxs("div",{style:{width:"100%",maxWidth:440},children:[a==="code"&&h.jsxs(h.Fragment,{children:[h.jsxs("div",{style:{textAlign:"center",marginBottom:32,color:"white"},children:[h.jsx("h1",{style:{fontFamily:"var(--font-display)",fontSize:"2rem",color:"white",marginBottom:8},children:"Trading Challenge"}),h.jsx("p",{style:{opacity:.75,fontSize:"1rem"},children:"Enter your game code to join the session"})]}),h.jsx("div",{className:"card",children:h.jsxs("div",{className:"card-body",children:[p&&h.jsx("div",{className:"alert alert-error",style:{marginBottom:16},children:p}),h.jsxs("form",{onSubmit:S,children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"Game Code"}),h.jsx("input",{className:"form-input",style:{textTransform:"uppercase",fontSize:"1.4rem",letterSpacing:"0.15em",textAlign:"center"},type:"text",value:r,onChange:R=>{const P=R.target.value.toUpperCase().replace(/^TENENT-/,"").replace(/[^A-Z0-9]/g,"");i(P.slice(0,4))},placeholder:"XXXX",maxLength:4,autoFocus:!0,required:!0}),h.jsx("span",{className:"form-hint",children:"4-letter code from your teacher"})]}),h.jsx("button",{type:"submit",className:"btn btn-primary btn-full btn-lg",disabled:v,children:v?"Checking…":"Join Game →"})]})]})})]}),a==="nickname"&&h.jsxs(h.Fragment,{children:[h.jsxs("div",{style:{textAlign:"center",marginBottom:32,color:"white"},children:[w&&h.jsx("div",{style:{display:"inline-block",background:"rgba(255,113,27,0.18)",border:"1px solid rgba(255,113,27,0.4)",borderRadius:6,padding:"4px 14px",fontSize:"0.78rem",fontWeight:600,letterSpacing:"0.05em",color:"var(--orange-light, #ffb07a)",marginBottom:14,textTransform:"uppercase"},children:w}),h.jsx("div",{style:{display:"inline-block",background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:8,padding:"6px 16px",fontFamily:"var(--font-display)",fontWeight:600,fontSize:"1rem",letterSpacing:"0.08em",marginBottom:16},children:(T=u==null?void 0:u.code)==null?void 0:T.replace(/^TENENT-/,"")}),h.jsx("h1",{style:{fontFamily:"var(--font-display)",fontSize:"1.8rem",color:"white",marginBottom:8},children:"Choose your trader name"}),h.jsx("p",{style:{opacity:.7},children:"This is how you'll appear on the leaderboard"})]}),h.jsx("div",{className:"card",children:h.jsxs("div",{className:"card-body",children:[p&&h.jsx("div",{className:"alert alert-error",style:{marginBottom:16},children:p}),h.jsxs("form",{onSubmit:b,children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"Your Nickname"}),h.jsx("input",{className:"form-input",style:{fontSize:"1.1rem",textAlign:"center"},type:"text",value:s,onChange:R=>o(R.target.value),placeholder:"e.g. TradingTiger",maxLength:20,autoFocus:!0,required:!0}),h.jsx("span",{className:"form-hint",children:"2–20 characters"})]}),h.jsx("button",{type:"submit",className:"btn btn-primary btn-full btn-lg",children:"Let's Trade! 🚀"})]}),h.jsx("button",{className:"btn btn-ghost btn-full",style:{marginTop:10,color:"var(--text-muted)"},onClick:()=>{c("code"),m("")},children:"← Change code"})]})})]})]})})]})}function MV({data:t=[],width:e=80,height:n=32}){if(t.length<2)return h.jsx("svg",{width:e,height:n,viewBox:`0 0 200 ${n}`});const i=Math.min(...t),o=Math.max(...t)-i||1,a=t.map((m,v)=>{const I=v/(t.length-1)*200,S=n-(m-i)/o*(n-4)-2;return`${I},${S}`}).join(" "),c=t[t.length-1]>=t[0]?"#4ade80":"#f87171",u=t.map((m,v)=>({x:v/(t.length-1)*200,y:n-(m-i)/o*(n-4)-2})),f=[`M ${u[0].x} ${n}`,...u.map(m=>`L ${m.x} ${m.y}`),`L ${u[u.length-1].x} ${n}`,"Z"].join(" "),p=t[t.length-1]>=t[0]?"rgba(74,222,128,0.12)":"rgba(248,113,113,0.12)";return h.jsxs("svg",{width:e,height:n,viewBox:`0 0 200 ${n}`,preserveAspectRatio:"none",style:{display:"block",overflow:"visible"},children:[h.jsx("path",{d:f,fill:p}),h.jsx("polyline",{points:a,fill:"none",stroke:c,strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round"}),h.jsx("circle",{cx:u[u.length-1].x,cy:u[u.length-1].y,r:"3",fill:c})]})}function VV({story:t,onDismiss:e,onReady:n,alreadyReady:r}){return t!=null&&t.headline?h.jsx("div",{className:"news-overlay",children:h.jsxs("div",{className:"news-card",style:{maxWidth:640},children:[h.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:8,background:"var(--orange)",color:"white",borderRadius:6,padding:"4px 12px",fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.06em",marginBottom:16},children:"📰 BREAKING NEWS"}),h.jsx("h2",{children:t.headline}),t.body&&h.jsx("p",{className:"news-body",style:{marginTop:12},children:t.body}),h.jsxs("div",{style:{marginTop:28,display:"flex",alignItems:"center",gap:14,flexWrap:"wrap"},children:[n&&h.jsx("button",{className:"btn btn-primary btn-lg",onClick:n,disabled:r,style:r?{opacity:.6,cursor:"not-allowed"}:{},children:r?"✅ Ready!":"✅ Mark as ready"}),h.jsx("button",{className:"btn btn-outline btn-lg",onClick:e,children:"View portfolio →"}),h.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.82rem"},children:r?"Waiting for teacher to open pre-market…":"Read the news, then mark ready"})]})]})}):null}function FV({players:t,prices:e,startingCash:n}){const r=[...t].sort((i,s)=>Jc(s,e)-Jc(i,e));return h.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(160deg, var(--navy-dark) 0%, var(--navy) 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24},children:h.jsxs("div",{style:{width:"100%",maxWidth:600},children:[h.jsxs("div",{style:{textAlign:"center",marginBottom:32,color:"white"},children:[h.jsx("div",{style:{fontSize:"3rem",marginBottom:8},children:"🏆"}),h.jsx("h1",{style:{fontFamily:"var(--font-display)",fontSize:"2.2rem",color:"white",marginBottom:8},children:"Final Results"}),h.jsx("p",{style:{opacity:.7},children:"The trading session has ended"})]}),r.length>=3&&h.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"flex-end",gap:12,marginBottom:28},children:[1,0,2].map(i=>{const s=r[i];if(!s)return null;const o=Jc(s,e),a=[110,140,90],c=["#C0C0C0","#FFD700","#CD7F32"],u=["🥈","🥇","🥉"];return h.jsxs("div",{style:{textAlign:"center",flex:1},children:[h.jsx("div",{style:{fontSize:"1.5rem",marginBottom:6},children:u[i===0?1:i===1?0:2]}),h.jsx("div",{style:{color:"white",fontWeight:700,fontSize:"0.95rem",marginBottom:4},children:s.nickname}),h.jsxs("div",{style:{color:"white",fontFamily:"var(--font-display)",fontWeight:700},children:["£",o.toLocaleString("en-GB",{maximumFractionDigits:0})]}),h.jsx("div",{style:{height:a[i===0?1:i===1?0:2],background:c[i===0?1:i===1?0:2],borderRadius:"8px 8px 0 0",marginTop:8,display:"flex",alignItems:"center",justifyContent:"center",color:"#333",fontWeight:700,fontSize:"1.2rem"},children:i===0?2:i===1?1:3})]},s.id)})}),h.jsx("div",{className:"card",children:h.jsx("div",{className:"table-wrap",children:h.jsxs("table",{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"#"}),h.jsx("th",{children:"Trader"}),h.jsx("th",{children:"Portfolio Value"}),h.jsx("th",{children:"Profit / Loss"})]})}),h.jsx("tbody",{children:r.map((i,s)=>{const o=Jc(i,e),a=o-n;return h.jsxs("tr",{style:{background:s===0?"#fffbeb":void 0},children:[h.jsx("td",{style:{fontWeight:700},children:s===0?"🥇":s===1?"🥈":s===2?"🥉":s+1}),h.jsx("td",{style:{fontWeight:s<3?700:400},children:i.nickname}),h.jsxs("td",{style:{fontFamily:"var(--font-display)",fontWeight:600,fontSize:"1rem"},children:["£",o.toLocaleString("en-GB",{maximumFractionDigits:0})]}),h.jsxs("td",{className:a>=0?"price-up":"price-down",style:{fontWeight:600},children:[a>=0?"+":"","£",a.toLocaleString("en-GB",{maximumFractionDigits:0}),h.jsxs("span",{style:{fontSize:"0.78rem",marginLeft:6,opacity:.7},children:["(",a>=0?"+":"",(a/n*100).toFixed(1),"%)"]})]})]},i.id)})})]})})})]})})}function Jc(t,e){let n=t.cash??0;for(const[r,i]of Object.entries(t.holdings??{}))n+=(e[r]??0)*i;return Math.round(n)}function UV({gameCodeData:t,nickname:e,playerId:n}){var ln;const[r,i]=j.useState(null),[s,o]=j.useState([]),[a,c]=j.useState({}),[u,f]=j.useState({}),[p,m]=j.useState("lobby"),[v,I]=j.useState({}),[S,b]=j.useState(null),[w,T]=j.useState(null),[R,P]=j.useState(!1),[M,D]=j.useState(null),[E,_]=j.useState(-1),[C,k]=j.useState(!1),[A,N]=j.useState(null),[x,Be]=j.useState({}),[qe,W]=j.useState({text:"",ok:!0}),[Z,F]=j.useState(!1),[B,X]=j.useState(!1),[ge,ce]=j.useState(""),[we,Ie]=j.useState([]),[an,Ft]=j.useState(!1),[Ut,Qo]=j.useState(!1),[Yo,$n]=j.useState(null),[qn,Vr]=j.useState(!1),[Hn,it]=j.useState("leaderboard"),st=j.useRef(-1),Qe=j.useRef(!1),Li=j.useRef({}),or=j.useRef(null),Fr=j.useRef({}),Yt=Q=>{console.log("[GameScreen]",Q),Ie(H=>[...H,Q])};j.useEffect(()=>{if(!n){Yt("ERROR: No playerId");return}(async()=>{try{Yt(`Init: player=${n}, code=${t.code}`);const H=cd(sr(Se,"sessions"),Pl("gameCode","==",t.code),ny("createdAt","desc"),SO(1)),le=await zo(H);if(Yt(`Sessions found: ${le.size}`),le.empty){ce("No active session found. Ask your teacher to launch the session first.");return}const ke=le.docs[0].data();if(Yt(`Session: ${ke.id}, status=${ke.status}`),ke.status==="ended"){ce("This session has already ended.");return}const Ae=await Lx(ke.gameConfigId);if(!Ae){ce("Game configuration not found.");return}Yt(`Config: ${Ae.name}`),T(Ae),b(ke.id),await XM(ke.id,n,e,Ae.startingCash,t.code),Yt("Joined!"),F(!0)}catch(H){Yt(`ERROR: ${H.code} - ${H.message}`),H.code==="already-exists"?F(!0):ce(`${H.code}: ${H.message}`)}})()},[n]),j.useEffect(()=>{if(!(!S||!Z||!n))return eV(S,n,Q=>{Q&&i(Q)})},[S,Z,n]),j.useEffect(()=>{if(!(!S||!Z))return jx(S,Q=>o(Q??[]))},[S,Z]),j.useEffect(()=>{if(!S)return;const Q=[IV(S,H=>{H&&(f(Li.current),Li.current=H,c(H))}),CV(S,H=>{H&&(m(H),H==="trading"&&(Fr.current={...Li.current},Qe.current=!1))}),Fx(S,H=>{var le,ke;H&&(_(H.index??-1),((le=H.news)==null?void 0:le.practiceEnd)===!0&&(Qe.current=!0),H.index!==st.current&&((ke=H.news)!=null&&ke.headline)&&(D(H.news),P(!0),k(!1),st.current=H.index))}),xV(S,H=>{if(!H)return;const le={},ke=Array.isArray(H)?H:Object.values(H);for(const Ae of ke)for(const[ot,cn]of Object.entries(Ae.prices??{}))le[ot]||(le[ot]=[]),le[ot].push(cn);I(le)}),kV(S,H=>{N(H),H!=null&&P(!1)})];return()=>Q.forEach(H=>H())},[S]),j.useEffect(()=>{p==="pre_market"&&P(!1)},[p]),j.useEffect(()=>{p==="ended"&&Ft(!0)},[p]),j.useEffect(()=>{if(p==="leaderboard"){Ft(!1);const Q=s.length||1,H=Math.min(10,Math.max(3,Q));$n(H);let le=H;return or.current=setInterval(()=>{le-=1,$n(le),le<=0&&(clearInterval(or.current),Vr(!0))},1e3),()=>clearInterval(or.current)}},[p]),j.useEffect(()=>{p==="ended"&&!B&&Z&&S&&(X(!0),JM(S,n,t.code).catch(console.error))},[p,B,Z]);const ji=async()=>{!S||!n||(k(!0),await tV(S,n,E))},Xo=async()=>{if(!(!S||!n)){Ft(!1),Qo(!0);try{await Wo(Je(Se,"sessions",S,"players",n),{confirmedEnd:!0})}catch(Q){console.error("[GameScreen] confirmedEnd write failed:",Q)}}};j.useEffect(()=>{if(p!=="ended"||!S||s.length===0)return;const Q=s.filter(le=>le.confirmedEnd).length,H=s.length;Q===H&&Ut&&Pn(S,"leaderboard").catch(console.error)},[s,p,Ut]),j.useEffect(()=>{if(p!=="ended"||!S)return;const Q=setTimeout(()=>{Pn(S,"leaderboard").catch(console.error)},3e4);return()=>clearTimeout(Q)},[p,S]);const Bt=(Q,H=!0)=>{W({text:Q,ok:H}),setTimeout(()=>W({text:"",ok:!0}),3e3)},ar=async(Q,H)=>{var cn,vn;if(!r||!S)return;if(p!=="trading"&&p!=="pre_market"){Bt(p==="lobby"?"Wait for your teacher to open the pre-market.":"Trading is paused — wait for the next segment to open.",!1);return}const le=kn.find(_t=>_t.id===Q),ke=x[Q]??le.minTick,Ae=Math.floor(Number(ke));if(!Ae||Ae<=0||isNaN(Ae)){Bt("Enter a valid quantity.",!1);return}if(Ae<le.minTick){Bt(`Minimum trade size is ${le.minTick} units.`,!1);return}if(Ae%le.minTick!==0){Bt(`Must trade in multiples of ${le.minTick}.`,!1);return}const ot=a[Q]??0;if(H==="buy"){const _t=ot*Ae;if(_t>r.cash){Bt(`Not enough cash. Need £${_t.toFixed(2)}, have £${r.cash.toFixed(2)}`,!1);return}await Mw(S,n,{cash:Math.round((r.cash-_t)*100)/100,[`holdings.${Q}`]:(((cn=r.holdings)==null?void 0:cn[Q])??0)+Ae}),await Vw(S,n,{assetId:Q,type:"buy",qty:Ae,price:ot,cost:_t}),Bt(`✓ Bought ${Ae} × ${le.name} @ £${ot.toFixed(2)}`)}else{const _t=((vn=r.holdings)==null?void 0:vn[Q])??0;if(Ae>_t){Bt(`You only hold ${_t} shares of ${le.name}.`,!1);return}const wn=Math.round(ot*Ae*100)/100;await Mw(S,n,{cash:Math.round((r.cash+wn)*100)/100,[`holdings.${Q}`]:_t-Ae}),await Vw(S,n,{assetId:Q,type:"sell",qty:Ae,price:ot,proceeds:wn}),Bt(`✓ Sold ${Ae} × ${le.name} @ £${ot.toFixed(2)}`)}};if(ge)return h.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg,var(--navy-dark),var(--navy))",display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:h.jsxs("div",{style:{textAlign:"center",color:"white",maxWidth:480},children:[h.jsx("div",{style:{fontSize:"3rem",marginBottom:16},children:"⚠️"}),h.jsx("h2",{style:{color:"white",marginBottom:12},children:"Cannot join session"}),h.jsx("p",{style:{opacity:.8,lineHeight:1.6},children:ge}),h.jsx("button",{className:"btn btn-primary",style:{marginTop:24},onClick:()=>window.location.reload(),children:"Try again"})]})});if(!Z||!w)return h.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg,var(--navy-dark),var(--navy))",display:"flex",alignItems:"center",justifyContent:"center"},children:h.jsxs("div",{style:{textAlign:"center",color:"white"},children:[h.jsx("div",{className:"spinner",style:{margin:"0 auto 16px",borderTopColor:"var(--orange)"}}),h.jsx("p",{style:{opacity:.7},children:"Joining session…"}),we.length>0&&h.jsx("div",{style:{marginTop:16,background:"rgba(255,255,255,0.05)",borderRadius:8,padding:12,maxWidth:400,textAlign:"left"},children:we.map((Q,H)=>h.jsxs("div",{style:{fontFamily:"monospace",fontSize:"0.7rem",color:"#a5b4fc",marginBottom:3},children:[H+1,". ",Q]},H))})]})});if(p==="lobby")return h.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg,var(--navy-dark),var(--navy))",display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:[h.jsxs("div",{style:{textAlign:"center",color:"white",maxWidth:440},children:[h.jsx("div",{style:{fontSize:"3.5rem",marginBottom:20},children:"⏳"}),h.jsx("h1",{style:{color:"white",fontFamily:"var(--font-display)",marginBottom:12},children:"Waiting for your teacher…"}),h.jsx("p",{style:{opacity:.65,lineHeight:1.7,marginBottom:28},children:"Your teacher will open the pre-market shortly so you can set up your portfolio before trading begins."}),h.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:10,background:"rgba(255,255,255,0.08)",borderRadius:99,padding:"10px 22px"},children:[h.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:"var(--orange)",animation:"pulse 1.4s infinite"}}),h.jsxs("span",{style:{fontSize:"0.9rem",opacity:.8},children:["Joined as ",h.jsx("strong",{style:{color:"white"},children:e})]})]})]}),h.jsx("style",{children:"@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }"})]});if(p==="leaderboard"&&!qn)return h.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg,var(--navy-dark),var(--navy))",display:"flex",alignItems:"center",justifyContent:"center"},children:h.jsxs("div",{style:{textAlign:"center",color:"white"},children:[h.jsx("div",{style:{fontSize:"1.1rem",letterSpacing:"0.12em",opacity:.6,fontFamily:"var(--font-display)",marginBottom:16},children:"REVEALING RESULTS IN"}),h.jsx("div",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"12rem",color:"white",lineHeight:1,textShadow:"0 0 80px rgba(255,113,27,0.6)"},children:Yo})]})});if(p==="leaderboard"&&qn){const Q=s.length>0?s:r?[r]:[];return h.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg,var(--navy-dark),var(--navy))",display:"flex",flexDirection:"column"},children:[h.jsx("div",{style:{display:"flex",background:"rgba(255,255,255,0.06)",borderBottom:"1px solid rgba(255,255,255,0.1)",flexShrink:0},children:[{id:"leaderboard",label:"🏆 Leaderboard"},{id:"breakdown",label:"📊 My P&L Breakdown"}].map(H=>h.jsx("button",{onClick:()=>it(H.id),style:{flex:1,padding:"14px 0",border:"none",cursor:"pointer",fontWeight:700,fontSize:"0.9rem",letterSpacing:"0.03em",transition:"all 0.15s",background:Hn===H.id?"rgba(255,113,27,0.18)":"transparent",color:Hn===H.id?"var(--orange)":"rgba(255,255,255,0.45)",borderBottom:Hn===H.id?"2px solid var(--orange)":"2px solid transparent"},children:H.label},H.id))}),Hn==="leaderboard"?h.jsx(FV,{players:Q,prices:a,startingCash:w.startingCash}):h.jsx(zV,{player:r,gameConfig:w})]})}if(p==="countdown"&&A!==null&&A!==void 0&&A>0){const Q=Qe.current;return h.jsxs("div",{style:{minHeight:"100vh",background:Q?"linear-gradient(135deg, #1c1a10, #2d2a00)":"linear-gradient(135deg, var(--navy-dark), var(--navy))",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:0},children:[Q&&h.jsxs("div",{style:{textAlign:"center",marginBottom:32},children:[h.jsx("div",{style:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"2.4rem",color:"#fbbf24",lineHeight:1.15,textShadow:"0 0 40px rgba(251,191,36,0.5)",marginBottom:10},children:"Now it's for real!"}),h.jsx("div",{style:{color:"rgba(255,255,255,0.5)",fontSize:"1rem",letterSpacing:"0.02em"},children:"Positions reset — every trade counts from here"})]}),h.jsxs("div",{style:{textAlign:"center"},children:[h.jsx("div",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"18rem",color:Q?"#fbbf24":"white",lineHeight:1,textShadow:Q?"0 0 80px rgba(251,191,36,0.7)":"0 0 80px rgba(255,113,27,0.7)",animation:"countPop 0.9s ease"},children:A}),h.jsx("div",{style:{color:Q?"rgba(251,191,36,0.6)":"rgba(255,255,255,0.6)",fontSize:"1.4rem",marginTop:8,letterSpacing:"0.12em",fontFamily:"var(--font-display)"},children:Q?"REAL MARKETS OPENING":"MARKETS OPENING"})]}),h.jsx("style",{children:"@keyframes countPop { 0%{transform:scale(1.8);opacity:0} 25%{transform:scale(1);opacity:1} 80%{transform:scale(1);opacity:1} 100%{transform:scale(0.7);opacity:0} }"})]})}if(p==="countdown"&&A===0)return h.jsxs("div",{style:{minHeight:"100vh",background:"#16a34a",display:"flex",alignItems:"center",justifyContent:"center"},children:[h.jsx("div",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"10rem",color:"white",textShadow:"0 0 60px rgba(0,0,0,0.3)",animation:"goFlash 0.5s ease"},children:"GO!"}),h.jsx("style",{children:"@keyframes goFlash { 0%{transform:scale(0.5);opacity:0} 50%{transform:scale(1.1);opacity:1} 100%{transform:scale(1);opacity:1} }"})]});const ee=r?aV(r.holdings??{},r.cash??0,a):0,G=r?lV(ee,w.startingCash):0,oe=(G/w.startingCash*100).toFixed(1),Ce=(r==null?void 0:r.cash)??0,zt=p==="pre_market",Wt=p==="trading"||p==="pre_market";return h.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column",background:"var(--navy-dark)",overflow:"hidden"},children:[h.jsxs("div",{style:{flexShrink:0,background:"var(--navy)",borderBottom:"1px solid rgba(255,255,255,0.07)",padding:"8px 12px",display:"flex",alignItems:"center",gap:10},children:[h.jsx("div",{style:{fontWeight:800,fontSize:"0.9rem",letterSpacing:"0.03em",color:"var(--orange)",whiteSpace:"nowrap",marginRight:4},children:"TENENT"}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},children:[h.jsx("div",{style:{background:"var(--orange)",borderRadius:6,width:26,height:26,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-display)",fontWeight:700,fontSize:"0.85rem",color:"white",flexShrink:0},children:((ln=e==null?void 0:e[0])==null?void 0:ln.toUpperCase())??"T"}),h.jsx("span",{style:{fontFamily:"var(--font-display)",fontWeight:700,color:"white",fontSize:"0.9rem",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e})]}),h.jsx(WV,{status:p})]}),h.jsxs("div",{style:{flexShrink:0,display:"flex",alignItems:"stretch",gap:1,background:"rgba(255,255,255,0.07)"},children:[h.jsx(Rf,{label:"Portfolio",value:`£${ee.toLocaleString("en-GB",{maximumFractionDigits:0})}`}),h.jsx(Rf,{label:"P / L",value:`${G>=0?"+":""}£${Math.abs(G).toLocaleString("en-GB",{maximumFractionDigits:0})}`,sub:`${G>=0?"+":""}${oe}%`,valueClass:G>0?"up":G<0?"down":"neutral"}),h.jsx(Rf,{label:"Cash",value:`£${Ce.toLocaleString("en-GB",{maximumFractionDigits:0})}`})]}),zt&&h.jsx("div",{style:{flexShrink:0,background:"rgba(255,200,0,0.1)",borderBottom:"1px solid rgba(255,200,0,0.2)",padding:"5px 12px",fontSize:"0.72rem",color:"#ffd040",textAlign:"center",letterSpacing:"0.04em"},children:"🕐 PRE-MARKET OPEN — prices frozen. Buy and sell to set up your portfolio."}),p==="paused"&&h.jsx("div",{style:{flexShrink:0,background:"rgba(146,64,14,0.3)",borderBottom:"1px solid rgba(255,113,27,0.3)",padding:"5px 12px",fontSize:"0.72rem",color:"#fef3c7",textAlign:"center",letterSpacing:"0.04em"},children:"⏸ Trading is paused — your teacher will resume shortly"}),h.jsx("div",{className:"gs-cards",children:kn.map(Q=>{var Zo;const H=a[Q.id]??Q.startPrice,le=u[Q.id]??H,ke=((Zo=r==null?void 0:r.holdings)==null?void 0:Zo[Q.id])??0,Ae=Math.round(ke*H),ot=H-le,cn=le>0?ot/le*100:0,vn=ot>0?"up":ot<0?"down":"flat";let _t=v[Q.id]??[];_t.length<2&&(_t=[Q.startPrice,H]);const wn=Fr.current[Q.id]??Q.startPrice,Ur=wn>0?(H-wn)/wn*100:0,Jo=vn==="up"?"#4ade80":vn==="down"?"#f87171":"rgba(232,230,255,0.9)",lr=vn==="up"?"#4ade80":vn==="down"?"#f87171":"rgba(255,255,255,0.4)",uc=Ur>0?"#4ade80":Ur<0?"#f87171":"rgba(255,255,255,0.35)",Mi=Q.id==="goldvault";return h.jsxs("div",{className:`gs-card${ke>0?" gs-card--holding":""}${Mi?" gs-card--gold":""}`,children:[h.jsx("div",{className:"gs-card-left",children:h.jsxs("div",{children:[Mi&&h.jsx("div",{style:{fontSize:"0.55rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#fbbf24",marginBottom:2,opacity:.85},children:"⬡ Safe Haven"}),h.jsx("div",{className:"gs-stock-name",children:Q.name}),h.jsxs("div",{className:"gs-stock-price",style:{color:Jo},children:["£",H.toFixed(2)]}),h.jsx("div",{style:{marginTop:2},children:h.jsxs("span",{className:"gs-stock-tick",style:{color:lr},children:[vn==="up"?"▲":vn==="down"?"▼":"→"," ",Math.abs(cn).toFixed(1),"%"]})}),h.jsxs("div",{style:{marginTop:3},children:[h.jsx("span",{style:{fontSize:"0.55rem",fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginRight:4},children:"Cumulative"}),h.jsxs("span",{className:"gs-stock-seg",style:{color:uc},children:[Ur>=0?"+":"",Ur.toFixed(1),"%"]})]})]})}),h.jsx("div",{className:"gs-card-chart",children:h.jsx(MV,{data:_t,width:"100%",height:44})}),h.jsxs("div",{className:"gs-card-right",children:[h.jsxs("div",{className:"gs-holding-info",children:[h.jsx("div",{style:{fontSize:"0.6rem",color:"rgba(255,255,255,0.35)",textTransform:"uppercase",letterSpacing:"0.04em"},children:"Holding"}),h.jsx("div",{className:"gs-holding-qty",style:{color:ke>0?"#fbbf24":"rgba(255,255,255,0.2)"},children:ke>0?ke.toLocaleString():"—"}),ke>0&&h.jsxs("div",{style:{fontSize:"0.62rem",color:"rgba(255,255,255,0.4)",fontVariantNumeric:"tabular-nums"},children:["£",Ae.toLocaleString("en-GB")]})]}),h.jsxs("div",{className:"gs-trade-controls",children:[h.jsx("input",{type:"number",min:1,step:Q.minTick,defaultValue:Q.minTick,className:"gs-qty-input",style:{borderColor:Wt?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.07)"},onChange:Vi=>Be(hc=>({...hc,[Q.id]:Vi.target.value}))}),h.jsx("button",{onClick:()=>ar(Q.id,"buy"),disabled:!Wt,className:`gs-btn-trade gs-btn-buy${Wt?"":" gs-btn-dis"}`,children:"BUY"}),h.jsx("button",{onClick:()=>ar(Q.id,"sell"),disabled:!Wt||ke===0,className:`gs-btn-trade gs-btn-sell${!Wt||ke===0?" gs-btn-dis":""}`,children:"SELL"})]})]})]},Q.id)})}),qe.text&&h.jsx("div",{style:{position:"fixed",top:16,left:"50%",transform:"translateX(-50%)",zIndex:999,background:qe.ok?"#166534":"#7f1d1d",color:qe.ok?"#86efac":"#fca5a5",padding:"10px 28px",borderRadius:99,fontWeight:600,fontSize:"0.9rem",boxShadow:"0 4px 24px rgba(0,0,0,0.35)",whiteSpace:"nowrap",animation:"toastIn 0.2s ease",pointerEvents:"none"},children:qe.text}),R&&M&&h.jsx(VV,{story:M,onDismiss:()=>P(!1),onReady:ji,alreadyReady:C}),an&&r&&w&&h.jsx(BV,{player:r,prices:a,startingCash:w.startingCash,onOK:Xo}),h.jsx("style",{children:`
        .gs-pstat { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:8px 6px; background:#252350; gap:1px; }
        .gs-pstat-label { font-size:0.6rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#ffd040; }
        .gs-pstat-value { font-family:var(--font-display,system-ui); font-size:1.45rem; font-weight:900; font-variant-numeric:tabular-nums; line-height:1.1; letter-spacing:-0.01em; color:#e8e6ff; }
        .gs-pstat-value.up   { color:#4ade80; }
        .gs-pstat-value.down { color:#f87171; }
        .gs-pstat-sub { font-size:0.65rem; color:inherit; opacity:0.75; font-variant-numeric:tabular-nums; }

        .gs-cards { flex:1; display:flex; flex-direction:column; gap:1px; background:rgba(255,255,255,0.07); overflow:hidden; min-height:0; }
        .gs-card { flex:1; background:#1a1840; display:flex; align-items:stretch; min-height:0; transition:background 0.2s; }
        .gs-card--holding { background:#1a2a1a; border-left:3px solid rgba(74,222,128,0.35); }
        .gs-card--gold { background:#1c1a10; border-left:3px solid rgba(251,191,36,0.45); }
        .gs-card--gold.gs-card--holding { background:#1c2210; border-left:3px solid rgba(251,191,36,0.65); }

        .gs-card-left { flex-shrink:0; width:126px; padding:8px 10px; display:flex; flex-direction:column; justify-content:center; border-right:1px solid rgba(255,255,255,0.07); }
        .gs-stock-name  { font-size:1rem; font-weight:800; color:#ffd040; line-height:1.2; margin-bottom:2px; }
        .gs-stock-price { font-size:1.25rem; font-weight:800; font-variant-numeric:tabular-nums; line-height:1.1; }
        .gs-stock-tick  { font-size:0.68rem; font-weight:600; font-variant-numeric:tabular-nums; }
        .gs-stock-seg   { font-size:0.62rem; font-variant-numeric:tabular-nums; }

        .gs-card-chart { flex:1; min-width:0; overflow:hidden; padding:6px 8px; display:flex; align-items:center; }
        .gs-card-chart > svg, .gs-card-chart > * > svg { width:100% !important; height:44px; display:block; }

        .gs-card-right { flex-shrink:0; width:110px; padding:8px 10px; display:flex; flex-direction:column; justify-content:space-between; border-left:1px solid rgba(255,255,255,0.07); }
        .gs-holding-qty { font-size:1rem; font-weight:700; font-variant-numeric:tabular-nums; margin:2px 0; }
        .gs-trade-controls { display:flex; flex-direction:column; gap:4px; }
        .gs-qty-input { width:100%; padding:4px 6px; border:1px solid rgba(255,255,255,0.15); border-radius:5px; font-size:0.8rem; text-align:center; background:rgba(255,255,255,0.07); color:white; }
        .gs-qty-input:focus { outline:none; border-color:rgba(255,113,27,0.6); }
        .gs-btn-trade { font-size:0.72rem; font-weight:700; letter-spacing:0.04em; border:none; border-radius:5px; padding:6px 0; text-align:center; cursor:pointer; width:100%; }
        .gs-btn-buy  { background:rgba(74,222,128,0.22); color:#4ade80; }
        .gs-btn-sell { background:rgba(248,113,113,0.18); color:#f87171; }
        .gs-btn-dis  { background:rgba(255,255,255,0.04); color:rgba(255,255,255,0.25); cursor:not-allowed; }
        .gs-btn-buy:not(.gs-btn-dis):hover  { background:rgba(74,222,128,0.35); }
        .gs-btn-sell:not(.gs-btn-dis):hover { background:rgba(248,113,113,0.3); }

        @media (min-width:700px) and (orientation:landscape), (min-width:900px) {
          .gs-pstat-value { font-size:1.9rem; }
          .gs-pstat-label { font-size:0.65rem; }
          .gs-pstat       { padding:10px 8px; }
          .gs-cards { display:grid; grid-template-columns:repeat(3,1fr); grid-template-rows:1fr 1fr; }
          .gs-card-left  { width:130px; padding:10px 14px; }
          .gs-card-right { width:130px; padding:10px 14px; }
          .gs-stock-name  { font-size:1.2rem; }
          .gs-stock-price { font-size:1.55rem; }
          .gs-stock-tick  { font-size:0.78rem; }
          .gs-stock-seg   { font-size:0.7rem; }
          .gs-holding-qty { font-size:1.15rem; }
          .gs-btn-trade   { font-size:0.82rem; padding:8px 0; }
          .gs-card-chart > svg, .gs-card-chart > * > svg { height:64px !important; }
        }
        @media (min-width:1300px) {
          .gs-cards { grid-template-columns:repeat(3,1fr); grid-template-rows:1fr 1fr; }
        }

        @keyframes pulse   { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes toastIn { from{opacity:0;transform:translateX(-50%) translateY(-8px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }
        @keyframes countPop { 0%{transform:scale(1.8);opacity:0} 25%{transform:scale(1);opacity:1} 80%{transform:scale(1);opacity:1} 100%{transform:scale(0.7);opacity:0} }
      `})]})}function BV({player:t,prices:e,startingCash:n,onOK:r}){const i=t.holdings??{};let o=t.cash??0;for(const[f,p]of Object.entries(i))o+=(e[f]??0)*p;o=Math.round(o);const a=o-n,c=(a/n*100).toFixed(1),u=a>=0;return h.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(20,19,48,0.88)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:24},children:h.jsxs("div",{style:{background:"linear-gradient(160deg,#1e1c4a 0%,#141330 100%)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:20,padding:"36px 40px",maxWidth:420,width:"100%",textAlign:"center",boxShadow:"0 24px 80px rgba(0,0,0,0.5)"},children:[h.jsx("div",{style:{fontSize:"3.5rem",marginBottom:16},children:u?"📈":"📉"}),h.jsx("div",{style:{fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.12em",color:"rgba(255,255,255,0.45)",marginBottom:6},children:"TRADING DAY ENDED"}),h.jsx("h2",{style:{color:"white",fontFamily:"var(--font-display)",fontSize:"1.6rem",marginBottom:24,lineHeight:1.2},children:"The markets have closed"}),h.jsxs("div",{style:{background:"rgba(255,255,255,0.06)",borderRadius:12,padding:"20px 24px",marginBottom:16},children:[h.jsx("div",{style:{fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.08em",color:"#ffd040",marginBottom:6},children:"YOUR FINAL PORTFOLIO"}),h.jsxs("div",{style:{fontFamily:"var(--font-display)",fontWeight:900,fontSize:"2.6rem",color:"white",lineHeight:1},children:["£",o.toLocaleString("en-GB")]})]}),h.jsxs("div",{style:{background:u?"rgba(74,222,128,0.1)":"rgba(248,113,113,0.1)",borderRadius:12,padding:"16px 24px",marginBottom:28},children:[h.jsx("div",{style:{fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.08em",color:"rgba(255,255,255,0.4)",marginBottom:6},children:"PROFIT / LOSS"}),h.jsxs("div",{style:{fontFamily:"var(--font-display)",fontWeight:900,fontSize:"2rem",color:u?"#4ade80":"#f87171",lineHeight:1},children:[u?"+":"","£",Math.abs(a).toLocaleString("en-GB")]}),h.jsxs("div",{style:{fontSize:"0.9rem",color:u?"#4ade80":"#f87171",opacity:.75,marginTop:4},children:[u?"+":"",c,"% vs starting cash"]})]}),h.jsx("button",{onClick:r,style:{width:"100%",background:"var(--orange)",color:"white",border:"none",borderRadius:10,padding:"14px 0",fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1rem",cursor:"pointer",letterSpacing:"0.04em"},children:"See final leaderboard →"})]})})}function Rf({label:t,value:e,sub:n,valueClass:r="neutral"}){return h.jsxs("div",{className:"gs-pstat",children:[h.jsx("div",{className:"gs-pstat-label",children:t}),h.jsx("div",{className:`gs-pstat-value ${r}`,children:e}),n&&h.jsx("div",{className:"gs-pstat-sub",children:n})]})}function zV({player:t,gameConfig:e}){if(!t||!e)return null;const n=t.segmentSnapshots??{},r=e.segments??[],i=e.startingCash??2e4,s=r.map((P,M)=>({...P,idx:M})).filter(P=>!P.practice),o=s.map(P=>n[String(P.idx)]??null),a=[...new Set(o.flatMap(P=>P?Object.keys(P.assetValues):[]))],c=P=>{const M=(e.assetNames??{})[P];return M||({uk_equity:"UK Equity",us_equity:"US Equity",bonds:"Bonds",crypto:"Crypto",commodities:"Commodities",goldvault:"GoldVault"}[P]??P)},u=(P,M)=>{const D=o[P];if(!D)return null;const E=D.assetValues[M]??0;if(P===0)return E;const _=o[P-1];if(!_)return E;const C=_.assetValues[M]??0;return E-C},f=s.map((P,M)=>{const D=o[M];if(!D)return null;if(M===0)return D.totalValue-i;const E=o[M-1];return E?D.totalValue-E.totalValue:null}),p=P=>s.reduce((M,D,E)=>M+(u(E,P)??0),0),m=o[o.length-1],v=m?m.totalValue-i:null,I=P=>{if(P==null)return h.jsx("span",{style:{color:"rgba(255,255,255,0.2)"},children:"—"});const M=P>=0;return h.jsxs("span",{style:{color:M?"#4ade80":"#f87171",fontWeight:600},children:[M?"+":"","£",Math.abs(Math.round(P)).toLocaleString("en-GB")]})},S={padding:"8px 10px",fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.05em",textTransform:"uppercase",color:"rgba(255,255,255,0.45)",whiteSpace:"nowrap",background:"rgba(255,255,255,0.04)",borderBottom:"1px solid rgba(255,255,255,0.1)"},b={padding:"7px 10px",fontSize:"0.82rem",textAlign:"right",borderBottom:"1px solid rgba(255,255,255,0.06)",fontVariantNumeric:"tabular-nums"},w={...b,textAlign:"left",fontWeight:600,color:"white",whiteSpace:"nowrap"},T={...b,background:"rgba(255,255,255,0.06)",fontWeight:700},R={...T,background:"rgba(255,113,27,0.15)",fontSize:"0.95rem"};return s.length===0||o.every(P=>!P)?h.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(255,255,255,0.4)",padding:32,textAlign:"center"},children:h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"2.5rem",marginBottom:12},children:"📊"}),h.jsx("div",{children:"Breakdown data not yet available."}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:8,opacity:.6},children:"This appears in sessions run with the updated game software."})]})}):h.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",padding:"16px 12px",overflow:"hidden"},children:h.jsxs("div",{style:{maxWidth:860,margin:"0 auto",width:"100%",display:"flex",flexDirection:"column",height:"100%"},children:[h.jsx("h2",{style:{color:"white",fontFamily:"var(--font-display)",marginBottom:2,fontSize:"1.1rem"},children:"Where did you make your money?"}),h.jsx("p",{style:{color:"rgba(255,255,255,0.45)",fontSize:"0.78rem",marginBottom:12},children:"P&L per asset, per phase."}),h.jsx("div",{style:{borderRadius:10,border:"1px solid rgba(255,255,255,0.1)",flex:1},children:h.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",tableLayout:"fixed"},children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{style:{...S,textAlign:"left",width:"28%"},children:"Asset"}),s.map((P,M)=>{var D;return h.jsxs("th",{style:{...S,textAlign:"right"},children:[h.jsxs("div",{style:{color:"white",fontSize:"0.75rem",marginBottom:1},children:["Phase ",M+1]}),h.jsx("div",{style:{fontWeight:400,fontSize:"0.62rem",color:"rgba(255,255,255,0.32)",textTransform:"none",letterSpacing:0,whiteSpace:"normal",lineHeight:1.2},children:((D=P.news)==null?void 0:D.headline)??P.label??""})]},M)}),h.jsx("th",{style:{...S,textAlign:"right",background:"rgba(255,255,255,0.08)",color:"white"},children:"Total"})]})}),h.jsxs("tbody",{children:[a.map(P=>h.jsxs("tr",{style:{transition:"background 0.1s"},children:[h.jsx("td",{style:w,children:c(P)}),s.map((M,D)=>h.jsx("td",{style:b,children:I(u(D,P))},D)),h.jsx("td",{style:T,children:I(p(P))})]},P)),h.jsxs("tr",{style:{background:"rgba(255,255,255,0.04)"},children:[h.jsx("td",{style:{...w,fontSize:"0.78rem",color:"rgba(255,255,255,0.55)",fontWeight:700},children:"PHASE TOTAL"}),f.map((P,M)=>h.jsx("td",{style:{...T},children:I(P)},M)),h.jsx("td",{style:R,children:I(v)})]})]})]})}),v!==null&&h.jsxs("div",{style:{marginTop:10,padding:"10px 16px",background:"rgba(255,255,255,0.05)",borderRadius:8,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsx("span",{style:{color:"rgba(255,255,255,0.5)",fontSize:"0.78rem"},children:"Total P&L"}),h.jsxs("span",{style:{fontFamily:"var(--font-display)",fontWeight:900,fontSize:"1.25rem",color:v>=0?"#4ade80":"#f87171"},children:[v>=0?"+":"","£",Math.abs(Math.round(v)).toLocaleString("en-GB")]})]})]})})}function WV({status:t}){const e={lobby:{bg:"rgba(136,132,170,0.2)",color:"#8884aa",label:"LOBBY"},pre_market:{bg:"rgba(255,200,0,0.15)",color:"#ffd040",label:"PRE-MARKET"},trading:{bg:"rgba(74,222,128,0.18)",color:"#4ade80",label:"LIVE",dot:!0},news:{bg:"rgba(255,113,27,0.18)",color:"#FF711B",label:"NEWS"},paused:{bg:"rgba(136,132,170,0.15)",color:"#8884aa",label:"PAUSED"},countdown:{bg:"rgba(255,113,27,0.18)",color:"#FF711B",label:"STARTING…"},ended:{bg:"rgba(248,113,113,0.15)",color:"#f87171",label:"ENDED"},leaderboard:{bg:"rgba(255,200,0,0.18)",color:"#ffd040",label:"RESULTS"}},n=e[t]??e.lobby;return h.jsxs("div",{style:{background:n.bg,color:n.color,borderRadius:20,padding:"3px 9px",fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.07em",display:"flex",alignItems:"center",gap:5,whiteSpace:"nowrap",flexShrink:0},children:[n.dot&&h.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"#4ade80",display:"inline-block",animation:"pulse 1.2s infinite"}}),n.label]})}function $V(){const{user:t,roleLoading:e,isSuperadmin:n,loginAnonymous:r}=Oi(),[i,s]=j.useState("home"),[o,a]=j.useState(null),[c,u]=j.useState(null);if(t===void 0||e)return h.jsxs("div",{className:"loading-page",children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:24},children:[h.jsx("div",{style:{background:"var(--orange)",borderRadius:8,width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.2rem",color:"white"},children:"T"}),h.jsx("span",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.3rem",color:"var(--navy)"},children:"TENENT"})]}),h.jsx("div",{className:"spinner"})]});if(t&&!t.isAnonymous&&n)return h.jsx(PV,{});if(i==="adminLogin")return h.jsx(OV,{onBack:()=>s("home")});if(i==="teacherLogin")return h.jsx(LV,{onBack:()=>s("home"),onVerified:async p=>{a(p),s("home")}});if(o)return h.jsx(DV,{teacherEmail:o.email,gameCode:o.gameCode,gameConfigId:o.gameConfigId,adminUid:t==null?void 0:t.uid,onLogout:()=>a(null)});if(c&&t)return h.jsx(UV,{gameCodeData:c.gameCodeData,nickname:c.nickname,playerId:t.uid});const f=async(p,m)=>{try{(!t||!t.isAnonymous)&&await r(),u({gameCodeData:p,nickname:m})}catch(v){alert("Failed to start game: "+v.message)}};return h.jsx(jV,{onJoined:f,onTeacherLogin:()=>s("teacherLogin"),onAdminLogin:()=>s("adminLogin")})}function qV(){return h.jsx(rV,{children:h.jsx($V,{})})}Af.createRoot(document.getElementById("root")).render(h.jsx(hr.StrictMode,{children:h.jsx(qV,{})}));
