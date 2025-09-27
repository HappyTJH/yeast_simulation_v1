function jy(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Sv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ev={exports:{}},Mc={},Mv={exports:{}},et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),Xy=Symbol.for("react.portal"),Yy=Symbol.for("react.fragment"),$y=Symbol.for("react.strict_mode"),qy=Symbol.for("react.profiler"),Ky=Symbol.for("react.provider"),Zy=Symbol.for("react.context"),Qy=Symbol.for("react.forward_ref"),Jy=Symbol.for("react.suspense"),eS=Symbol.for("react.memo"),tS=Symbol.for("react.lazy"),cp=Symbol.iterator;function nS(t){return t===null||typeof t!="object"?null:(t=cp&&t[cp]||t["@@iterator"],typeof t=="function"?t:null)}var wv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tv=Object.assign,Av={};function us(t,e,n){this.props=t,this.context=e,this.refs=Av,this.updater=n||wv}us.prototype.isReactComponent={};us.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};us.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bv(){}bv.prototype=us.prototype;function If(t,e,n){this.props=t,this.context=e,this.refs=Av,this.updater=n||wv}var Uf=If.prototype=new bv;Uf.constructor=If;Tv(Uf,us.prototype);Uf.isPureReactComponent=!0;var up=Array.isArray,Cv=Object.prototype.hasOwnProperty,Of={current:null},Rv={key:!0,ref:!0,__self:!0,__source:!0};function Pv(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Cv.call(e,i)&&!Rv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Sa,type:t,key:o,ref:s,props:r,_owner:Of.current}}function iS(t,e){return{$$typeof:Sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ff(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sa}function rS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dp=/\/+/g;function iu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rS(""+t.key):e.toString(36)}function wl(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Sa:case Xy:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+iu(s,0):i,up(r)?(n="",t!=null&&(n=t.replace(dp,"$&/")+"/"),wl(r,e,n,"",function(c){return c})):r!=null&&(Ff(r)&&(r=iS(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(dp,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",up(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+iu(o,a);s+=wl(o,e,n,l,r)}else if(l=nS(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+iu(o,a++),s+=wl(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Da(t,e,n){if(t==null)return t;var i=[],r=0;return wl(t,i,"","",function(o){return e.call(n,o,r++)}),i}function oS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tn={current:null},Tl={transition:null},sS={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:Of};function Lv(){throw Error("act(...) is not supported in production builds of React.")}et.Children={map:Da,forEach:function(t,e,n){Da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Da(t,function(){e++}),e},toArray:function(t){return Da(t,function(e){return e})||[]},only:function(t){if(!Ff(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};et.Component=us;et.Fragment=Yy;et.Profiler=qy;et.PureComponent=If;et.StrictMode=$y;et.Suspense=Jy;et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sS;et.act=Lv;et.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Tv({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Of.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Cv.call(e,l)&&!Rv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Sa,type:t.type,key:r,ref:o,props:i,_owner:s}};et.createContext=function(t){return t={$$typeof:Zy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ky,_context:t},t.Consumer=t};et.createElement=Pv;et.createFactory=function(t){var e=Pv.bind(null,t);return e.type=t,e};et.createRef=function(){return{current:null}};et.forwardRef=function(t){return{$$typeof:Qy,render:t}};et.isValidElement=Ff;et.lazy=function(t){return{$$typeof:tS,_payload:{_status:-1,_result:t},_init:oS}};et.memo=function(t,e){return{$$typeof:eS,type:t,compare:e===void 0?null:e}};et.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};et.unstable_act=Lv;et.useCallback=function(t,e){return tn.current.useCallback(t,e)};et.useContext=function(t){return tn.current.useContext(t)};et.useDebugValue=function(){};et.useDeferredValue=function(t){return tn.current.useDeferredValue(t)};et.useEffect=function(t,e){return tn.current.useEffect(t,e)};et.useId=function(){return tn.current.useId()};et.useImperativeHandle=function(t,e,n){return tn.current.useImperativeHandle(t,e,n)};et.useInsertionEffect=function(t,e){return tn.current.useInsertionEffect(t,e)};et.useLayoutEffect=function(t,e){return tn.current.useLayoutEffect(t,e)};et.useMemo=function(t,e){return tn.current.useMemo(t,e)};et.useReducer=function(t,e,n){return tn.current.useReducer(t,e,n)};et.useRef=function(t){return tn.current.useRef(t)};et.useState=function(t){return tn.current.useState(t)};et.useSyncExternalStore=function(t,e,n){return tn.current.useSyncExternalStore(t,e,n)};et.useTransition=function(){return tn.current.useTransition()};et.version="18.3.1";Mv.exports=et;var R=Mv.exports;const Si=Sv(R),Dv=jy({__proto__:null,default:Si},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aS=R,lS=Symbol.for("react.element"),cS=Symbol.for("react.fragment"),uS=Object.prototype.hasOwnProperty,dS=aS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fS={key:!0,ref:!0,__self:!0,__source:!0};function Nv(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)uS.call(e,i)&&!fS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:lS,type:t,key:o,ref:s,props:r,_owner:dS.current}}Mc.Fragment=cS;Mc.jsx=Nv;Mc.jsxs=Nv;Ev.exports=Mc;var I=Ev.exports,_d={},Iv={exports:{}},Mn={},Uv={exports:{}},Ov={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,z){var W=U.length;U.push(z);e:for(;0<W;){var le=W-1>>>1,fe=U[le];if(0<r(fe,z))U[le]=z,U[W]=fe,W=le;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var z=U[0],W=U.pop();if(W!==z){U[0]=W;e:for(var le=0,fe=U.length,ee=fe>>>1;le<ee;){var k=2*(le+1)-1,ce=U[k],ie=k+1,ne=U[ie];if(0>r(ce,W))ie<fe&&0>r(ne,ce)?(U[le]=ne,U[ie]=W,le=ie):(U[le]=ce,U[k]=W,le=k);else if(ie<fe&&0>r(ne,W))U[le]=ne,U[ie]=W,le=ie;else break e}}return z}function r(U,z){var W=U.sortIndex-z.sortIndex;return W!==0?W:U.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,f=null,h=3,g=!1,x=!1,m=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(U){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=U)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function y(U){if(m=!1,_(U),!x)if(n(l)!==null)x=!0,Y(S);else{var z=n(c);z!==null&&j(y,z.startTime-U)}}function S(U,z){x=!1,m&&(m=!1,u(N),N=-1),g=!0;var W=h;try{for(_(z),f=n(l);f!==null&&(!(f.expirationTime>z)||U&&!V());){var le=f.callback;if(typeof le=="function"){f.callback=null,h=f.priorityLevel;var fe=le(f.expirationTime<=z);z=t.unstable_now(),typeof fe=="function"?f.callback=fe:f===n(l)&&i(l),_(z)}else i(l);f=n(l)}if(f!==null)var ee=!0;else{var k=n(c);k!==null&&j(y,k.startTime-z),ee=!1}return ee}finally{f=null,h=W,g=!1}}var A=!1,w=null,N=-1,E=5,b=-1;function V(){return!(t.unstable_now()-b<E)}function H(){if(w!==null){var U=t.unstable_now();b=U;var z=!0;try{z=w(!0,U)}finally{z?Z():(A=!1,w=null)}}else A=!1}var Z;if(typeof v=="function")Z=function(){v(H)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,G=P.port2;P.port1.onmessage=H,Z=function(){G.postMessage(null)}}else Z=function(){p(H,0)};function Y(U){w=U,A||(A=!0,Z())}function j(U,z){N=p(function(){U(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,Y(S))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var W=h;h=z;try{return U()}finally{h=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var W=h;h=U;try{return z()}finally{h=W}},t.unstable_scheduleCallback=function(U,z,W){var le=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?le+W:le):W=le,U){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=W+fe,U={id:d++,callback:z,priorityLevel:U,startTime:W,expirationTime:fe,sortIndex:-1},W>le?(U.sortIndex=W,e(c,U),n(l)===null&&U===n(c)&&(m?(u(N),N=-1):m=!0,j(y,W-le))):(U.sortIndex=fe,e(l,U),x||g||(x=!0,Y(S))),U},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(U){var z=h;return function(){var W=h;h=z;try{return U.apply(this,arguments)}finally{h=W}}}})(Ov);Uv.exports=Ov;var hS=Uv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pS=R,En=hS;function xe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fv=new Set,Js={};function eo(t,e){Zo(t,e),Zo(t+"Capture",e)}function Zo(t,e){for(Js[t]=e,t=0;t<e.length;t++)Fv.add(e[t])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xd=Object.prototype.hasOwnProperty,mS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fp={},hp={};function gS(t){return xd.call(hp,t)?!0:xd.call(fp,t)?!1:mS.test(t)?hp[t]=!0:(fp[t]=!0,!1)}function vS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _S(t,e,n,i){if(e===null||typeof e>"u"||vS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var kf=/[\-:]([a-z])/g;function zf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kf,zf);kt[e]=new nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kf,zf);kt[e]=new nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kf,zf);kt[e]=new nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new nn(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bf(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_S(e,n,r,i)&&(n=null),i||r===null?gS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Fi=pS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Na=Symbol.for("react.element"),bo=Symbol.for("react.portal"),Co=Symbol.for("react.fragment"),Hf=Symbol.for("react.strict_mode"),yd=Symbol.for("react.profiler"),kv=Symbol.for("react.provider"),zv=Symbol.for("react.context"),Vf=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),Ed=Symbol.for("react.suspense_list"),Gf=Symbol.for("react.memo"),Yi=Symbol.for("react.lazy"),Bv=Symbol.for("react.offscreen"),pp=Symbol.iterator;function Ss(t){return t===null||typeof t!="object"?null:(t=pp&&t[pp]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,ru;function Fs(t){if(ru===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ru=e&&e[1]||""}return`
`+ru+t}var ou=!1;function su(t,e){if(!t||ou)return"";ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{ou=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fs(t):""}function xS(t){switch(t.tag){case 5:return Fs(t.type);case 16:return Fs("Lazy");case 13:return Fs("Suspense");case 19:return Fs("SuspenseList");case 0:case 2:case 15:return t=su(t.type,!1),t;case 11:return t=su(t.type.render,!1),t;case 1:return t=su(t.type,!0),t;default:return""}}function Md(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Co:return"Fragment";case bo:return"Portal";case yd:return"Profiler";case Hf:return"StrictMode";case Sd:return"Suspense";case Ed:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zv:return(t.displayName||"Context")+".Consumer";case kv:return(t._context.displayName||"Context")+".Provider";case Vf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gf:return e=t.displayName||null,e!==null?e:Md(t.type)||"Memo";case Yi:e=t._payload,t=t._init;try{return Md(t(e))}catch{}}return null}function yS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Md(e);case 8:return e===Hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function SS(t){var e=Hv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ia(t){t._valueTracker||(t._valueTracker=SS(t))}function Vv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Hv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wd(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gv(t,e){e=e.checked,e!=null&&Bf(t,"checked",e,!1)}function Td(t,e){Gv(t,e);var n=hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ad(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ad(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ad(t,e,n){(e!=="number"||Hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ks=Array.isArray;function Bo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function bd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(xe(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(xe(92));if(ks(n)){if(1<n.length)throw Error(xe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function Wv(t,e){var n=hr(e.value),i=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function _p(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ua,Xv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ua=Ua||document.createElement("div"),Ua.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ua.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ES=["Webkit","ms","Moz","O"];Object.keys(Gs).forEach(function(t){ES.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gs[e]=Gs[t]})});function Yv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gs.hasOwnProperty(t)&&Gs[t]?(""+e).trim():e+"px"}function $v(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Yv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var MS=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rd(t,e){if(e){if(MS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(xe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(xe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(xe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(xe(62))}}function Pd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ld=null;function Wf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dd=null,Ho=null,Vo=null;function xp(t){if(t=wa(t)){if(typeof Dd!="function")throw Error(xe(280));var e=t.stateNode;e&&(e=Cc(e),Dd(t.stateNode,t.type,e))}}function qv(t){Ho?Vo?Vo.push(t):Vo=[t]:Ho=t}function Kv(){if(Ho){var t=Ho,e=Vo;if(Vo=Ho=null,xp(t),e)for(t=0;t<e.length;t++)xp(e[t])}}function Zv(t,e){return t(e)}function Qv(){}var au=!1;function Jv(t,e,n){if(au)return t(e,n);au=!0;try{return Zv(t,e,n)}finally{au=!1,(Ho!==null||Vo!==null)&&(Qv(),Kv())}}function ta(t,e){var n=t.stateNode;if(n===null)return null;var i=Cc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(xe(231,e,typeof n));return n}var Nd=!1;if(Ri)try{var Es={};Object.defineProperty(Es,"passive",{get:function(){Nd=!0}}),window.addEventListener("test",Es,Es),window.removeEventListener("test",Es,Es)}catch{Nd=!1}function wS(t,e,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ws=!1,Vl=null,Gl=!1,Id=null,TS={onError:function(t){Ws=!0,Vl=t}};function AS(t,e,n,i,r,o,s,a,l){Ws=!1,Vl=null,wS.apply(TS,arguments)}function bS(t,e,n,i,r,o,s,a,l){if(AS.apply(this,arguments),Ws){if(Ws){var c=Vl;Ws=!1,Vl=null}else throw Error(xe(198));Gl||(Gl=!0,Id=c)}}function to(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function e_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yp(t){if(to(t)!==t)throw Error(xe(188))}function CS(t){var e=t.alternate;if(!e){if(e=to(t),e===null)throw Error(xe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return yp(r),t;if(o===i)return yp(r),e;o=o.sibling}throw Error(xe(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(xe(189))}}if(n.alternate!==i)throw Error(xe(190))}if(n.tag!==3)throw Error(xe(188));return n.stateNode.current===n?t:e}function t_(t){return t=CS(t),t!==null?n_(t):null}function n_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=n_(t);if(e!==null)return e;t=t.sibling}return null}var i_=En.unstable_scheduleCallback,Sp=En.unstable_cancelCallback,RS=En.unstable_shouldYield,PS=En.unstable_requestPaint,yt=En.unstable_now,LS=En.unstable_getCurrentPriorityLevel,jf=En.unstable_ImmediatePriority,r_=En.unstable_UserBlockingPriority,Wl=En.unstable_NormalPriority,DS=En.unstable_LowPriority,o_=En.unstable_IdlePriority,wc=null,si=null;function NS(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(wc,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:OS,IS=Math.log,US=Math.LN2;function OS(t){return t>>>=0,t===0?32:31-(IS(t)/US|0)|0}var Oa=64,Fa=4194304;function zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=zs(a):(o&=s,o!==0&&(i=zs(o)))}else s=n&~r,s!==0?i=zs(s):o!==0&&(i=zs(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$n(e),r=1<<n,i|=t[n],e&=~r;return i}function FS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-$n(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=FS(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Ud(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function s_(){var t=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),t}function lu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function zS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$n(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Xf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$n(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function a_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var l_,Yf,c_,u_,d_,Od=!1,ka=[],nr=null,ir=null,rr=null,na=new Map,ia=new Map,Ki=[],BS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ep(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":na.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(e.pointerId)}}function Ms(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=wa(e),e!==null&&Yf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function HS(t,e,n,i,r){switch(e){case"focusin":return nr=Ms(nr,t,e,n,i,r),!0;case"dragenter":return ir=Ms(ir,t,e,n,i,r),!0;case"mouseover":return rr=Ms(rr,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return na.set(o,Ms(na.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,ia.set(o,Ms(ia.get(o)||null,t,e,n,i,r)),!0}return!1}function f_(t){var e=Ur(t.target);if(e!==null){var n=to(e);if(n!==null){if(e=n.tag,e===13){if(e=e_(n),e!==null){t.blockedOn=e,d_(t.priority,function(){c_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ld=i,n.target.dispatchEvent(i),Ld=null}else return e=wa(n),e!==null&&Yf(e),t.blockedOn=n,!1;e.shift()}return!0}function Mp(t,e,n){Al(t)&&n.delete(e)}function VS(){Od=!1,nr!==null&&Al(nr)&&(nr=null),ir!==null&&Al(ir)&&(ir=null),rr!==null&&Al(rr)&&(rr=null),na.forEach(Mp),ia.forEach(Mp)}function ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Od||(Od=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,VS)))}function ra(t){function e(r){return ws(r,t)}if(0<ka.length){ws(ka[0],t);for(var n=1;n<ka.length;n++){var i=ka[n];i.blockedOn===t&&(i.blockedOn=null)}}for(nr!==null&&ws(nr,t),ir!==null&&ws(ir,t),rr!==null&&ws(rr,t),na.forEach(e),ia.forEach(e),n=0;n<Ki.length;n++)i=Ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ki.length&&(n=Ki[0],n.blockedOn===null);)f_(n),n.blockedOn===null&&Ki.shift()}var Go=Fi.ReactCurrentBatchConfig,Xl=!0;function GS(t,e,n,i){var r=nt,o=Go.transition;Go.transition=null;try{nt=1,$f(t,e,n,i)}finally{nt=r,Go.transition=o}}function WS(t,e,n,i){var r=nt,o=Go.transition;Go.transition=null;try{nt=4,$f(t,e,n,i)}finally{nt=r,Go.transition=o}}function $f(t,e,n,i){if(Xl){var r=Fd(t,e,n,i);if(r===null)_u(t,e,i,Yl,n),Ep(t,i);else if(HS(r,t,e,n,i))i.stopPropagation();else if(Ep(t,i),e&4&&-1<BS.indexOf(t)){for(;r!==null;){var o=wa(r);if(o!==null&&l_(o),o=Fd(t,e,n,i),o===null&&_u(t,e,i,Yl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else _u(t,e,i,null,n)}}var Yl=null;function Fd(t,e,n,i){if(Yl=null,t=Wf(i),t=Ur(t),t!==null)if(e=to(t),e===null)t=null;else if(n=e.tag,n===13){if(t=e_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yl=t,null}function h_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LS()){case jf:return 1;case r_:return 4;case Wl:case DS:return 16;case o_:return 536870912;default:return 16}default:return 16}}var Qi=null,qf=null,bl=null;function p_(){if(bl)return bl;var t,e=qf,n=e.length,i,r="value"in Qi?Qi.value:Qi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return bl=r.slice(t,1<i?1-i:void 0)}function Cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function za(){return!0}function wp(){return!1}function wn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?za:wp,this.isPropagationStopped=wp,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),e}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kf=wn(ds),Ma=gt({},ds,{view:0,detail:0}),jS=wn(Ma),cu,uu,Ts,Tc=gt({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ts&&(Ts&&t.type==="mousemove"?(cu=t.screenX-Ts.screenX,uu=t.screenY-Ts.screenY):uu=cu=0,Ts=t),cu)},movementY:function(t){return"movementY"in t?t.movementY:uu}}),Tp=wn(Tc),XS=gt({},Tc,{dataTransfer:0}),YS=wn(XS),$S=gt({},Ma,{relatedTarget:0}),du=wn($S),qS=gt({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),KS=wn(qS),ZS=gt({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),QS=wn(ZS),JS=gt({},ds,{data:0}),Ap=wn(JS),eE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nE[t])?!!e[t]:!1}function Zf(){return iE}var rE=gt({},Ma,{key:function(t){if(t.key){var e=eE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zf,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),oE=wn(rE),sE=gt({},Tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=wn(sE),aE=gt({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zf}),lE=wn(aE),cE=gt({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),uE=wn(cE),dE=gt({},Tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fE=wn(dE),hE=[9,13,27,32],Qf=Ri&&"CompositionEvent"in window,js=null;Ri&&"documentMode"in document&&(js=document.documentMode);var pE=Ri&&"TextEvent"in window&&!js,m_=Ri&&(!Qf||js&&8<js&&11>=js),Cp=" ",Rp=!1;function g_(t,e){switch(t){case"keyup":return hE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function v_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ro=!1;function mE(t,e){switch(t){case"compositionend":return v_(e);case"keypress":return e.which!==32?null:(Rp=!0,Cp);case"textInput":return t=e.data,t===Cp&&Rp?null:t;default:return null}}function gE(t,e){if(Ro)return t==="compositionend"||!Qf&&g_(t,e)?(t=p_(),bl=qf=Qi=null,Ro=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return m_&&e.locale!=="ko"?null:e.data;default:return null}}var vE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vE[t.type]:e==="textarea"}function __(t,e,n,i){qv(i),e=$l(e,"onChange"),0<e.length&&(n=new Kf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Xs=null,oa=null;function _E(t){R_(t,0)}function Ac(t){var e=Do(t);if(Vv(e))return t}function xE(t,e){if(t==="change")return e}var x_=!1;if(Ri){var fu;if(Ri){var hu="oninput"in document;if(!hu){var Lp=document.createElement("div");Lp.setAttribute("oninput","return;"),hu=typeof Lp.oninput=="function"}fu=hu}else fu=!1;x_=fu&&(!document.documentMode||9<document.documentMode)}function Dp(){Xs&&(Xs.detachEvent("onpropertychange",y_),oa=Xs=null)}function y_(t){if(t.propertyName==="value"&&Ac(oa)){var e=[];__(e,oa,t,Wf(t)),Jv(_E,e)}}function yE(t,e,n){t==="focusin"?(Dp(),Xs=e,oa=n,Xs.attachEvent("onpropertychange",y_)):t==="focusout"&&Dp()}function SE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ac(oa)}function EE(t,e){if(t==="click")return Ac(e)}function ME(t,e){if(t==="input"||t==="change")return Ac(e)}function wE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:wE;function sa(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!xd.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function Np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ip(t,e){var n=Np(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Np(n)}}function S_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?S_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function E_(){for(var t=window,e=Hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hl(t.document)}return e}function Jf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function TE(t){var e=E_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&S_(n.ownerDocument.documentElement,n)){if(i!==null&&Jf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Ip(n,o);var s=Ip(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var AE=Ri&&"documentMode"in document&&11>=document.documentMode,Po=null,kd=null,Ys=null,zd=!1;function Up(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zd||Po==null||Po!==Hl(i)||(i=Po,"selectionStart"in i&&Jf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ys&&sa(Ys,i)||(Ys=i,i=$l(kd,"onSelect"),0<i.length&&(e=new Kf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Po)))}function Ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Lo={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionend:Ba("Transition","TransitionEnd")},pu={},M_={};Ri&&(M_=document.createElement("div").style,"AnimationEvent"in window||(delete Lo.animationend.animation,delete Lo.animationiteration.animation,delete Lo.animationstart.animation),"TransitionEvent"in window||delete Lo.transitionend.transition);function bc(t){if(pu[t])return pu[t];if(!Lo[t])return t;var e=Lo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in M_)return pu[t]=e[n];return t}var w_=bc("animationend"),T_=bc("animationiteration"),A_=bc("animationstart"),b_=bc("transitionend"),C_=new Map,Op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){C_.set(t,e),eo(e,[t])}for(var mu=0;mu<Op.length;mu++){var gu=Op[mu],bE=gu.toLowerCase(),CE=gu[0].toUpperCase()+gu.slice(1);_r(bE,"on"+CE)}_r(w_,"onAnimationEnd");_r(T_,"onAnimationIteration");_r(A_,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(b_,"onTransitionEnd");Zo("onMouseEnter",["mouseout","mouseover"]);Zo("onMouseLeave",["mouseout","mouseover"]);Zo("onPointerEnter",["pointerout","pointerover"]);Zo("onPointerLeave",["pointerout","pointerover"]);eo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));eo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));eo("onBeforeInput",["compositionend","keypress","textInput","paste"]);eo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));eo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));eo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bs));function Fp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,bS(i,e,void 0,t),t.currentTarget=null}function R_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Fp(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Fp(r,a,c),o=l}}}if(Gl)throw t=Id,Gl=!1,Id=null,t}function at(t,e){var n=e[Wd];n===void 0&&(n=e[Wd]=new Set);var i=t+"__bubble";n.has(i)||(P_(e,t,2,!1),n.add(i))}function vu(t,e,n){var i=0;e&&(i|=4),P_(n,t,i,e)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function aa(t){if(!t[Ha]){t[Ha]=!0,Fv.forEach(function(n){n!=="selectionchange"&&(RE.has(n)||vu(n,!1,t),vu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ha]||(e[Ha]=!0,vu("selectionchange",!1,e))}}function P_(t,e,n,i){switch(h_(e)){case 1:var r=GS;break;case 4:r=WS;break;default:r=$f}n=r.bind(null,e,n,t),r=void 0,!Nd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function _u(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Ur(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}Jv(function(){var c=o,d=Wf(n),f=[];e:{var h=C_.get(t);if(h!==void 0){var g=Kf,x=t;switch(t){case"keypress":if(Cl(n)===0)break e;case"keydown":case"keyup":g=oE;break;case"focusin":x="focus",g=du;break;case"focusout":x="blur",g=du;break;case"beforeblur":case"afterblur":g=du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=YS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=lE;break;case w_:case T_:case A_:g=KS;break;case b_:g=uE;break;case"scroll":g=jS;break;case"wheel":g=fE;break;case"copy":case"cut":case"paste":g=QS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=bp}var m=(e&4)!==0,p=!m&&t==="scroll",u=m?h!==null?h+"Capture":null:h;m=[];for(var v=c,_;v!==null;){_=v;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,u!==null&&(y=ta(v,u),y!=null&&m.push(la(v,y,_)))),p)break;v=v.return}0<m.length&&(h=new g(h,x,null,n,d),f.push({event:h,listeners:m}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Ld&&(x=n.relatedTarget||n.fromElement)&&(Ur(x)||x[Pi]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=c,x=x?Ur(x):null,x!==null&&(p=to(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=c),g!==x)){if(m=Tp,y="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(m=bp,y="onPointerLeave",u="onPointerEnter",v="pointer"),p=g==null?h:Do(g),_=x==null?h:Do(x),h=new m(y,v+"leave",g,n,d),h.target=p,h.relatedTarget=_,y=null,Ur(d)===c&&(m=new m(u,v+"enter",x,n,d),m.target=_,m.relatedTarget=p,y=m),p=y,g&&x)t:{for(m=g,u=x,v=0,_=m;_;_=ro(_))v++;for(_=0,y=u;y;y=ro(y))_++;for(;0<v-_;)m=ro(m),v--;for(;0<_-v;)u=ro(u),_--;for(;v--;){if(m===u||u!==null&&m===u.alternate)break t;m=ro(m),u=ro(u)}m=null}else m=null;g!==null&&kp(f,h,g,m,!1),x!==null&&p!==null&&kp(f,p,x,m,!0)}}e:{if(h=c?Do(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var S=xE;else if(Pp(h))if(x_)S=ME;else{S=SE;var A=yE}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=EE);if(S&&(S=S(t,c))){__(f,S,n,d);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Ad(h,"number",h.value)}switch(A=c?Do(c):window,t){case"focusin":(Pp(A)||A.contentEditable==="true")&&(Po=A,kd=c,Ys=null);break;case"focusout":Ys=kd=Po=null;break;case"mousedown":zd=!0;break;case"contextmenu":case"mouseup":case"dragend":zd=!1,Up(f,n,d);break;case"selectionchange":if(AE)break;case"keydown":case"keyup":Up(f,n,d)}var w;if(Qf)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Ro?g_(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(m_&&n.locale!=="ko"&&(Ro||N!=="onCompositionStart"?N==="onCompositionEnd"&&Ro&&(w=p_()):(Qi=d,qf="value"in Qi?Qi.value:Qi.textContent,Ro=!0)),A=$l(c,N),0<A.length&&(N=new Ap(N,t,null,n,d),f.push({event:N,listeners:A}),w?N.data=w:(w=v_(n),w!==null&&(N.data=w)))),(w=pE?mE(t,n):gE(t,n))&&(c=$l(c,"onBeforeInput"),0<c.length&&(d=new Ap("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=w))}R_(f,e)})}function la(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $l(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=ta(t,n),o!=null&&i.unshift(la(t,o,r)),o=ta(t,e),o!=null&&i.push(la(t,o,r))),t=t.return}return i}function ro(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kp(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ta(n,o),l!=null&&s.unshift(la(n,l,a))):r||(l=ta(n,o),l!=null&&s.push(la(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var PE=/\r\n?/g,LE=/\u0000|\uFFFD/g;function zp(t){return(typeof t=="string"?t:""+t).replace(PE,`
`).replace(LE,"")}function Va(t,e,n){if(e=zp(e),zp(t)!==e&&n)throw Error(xe(425))}function ql(){}var Bd=null,Hd=null;function Vd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gd=typeof setTimeout=="function"?setTimeout:void 0,DE=typeof clearTimeout=="function"?clearTimeout:void 0,Bp=typeof Promise=="function"?Promise:void 0,NE=typeof queueMicrotask=="function"?queueMicrotask:typeof Bp<"u"?function(t){return Bp.resolve(null).then(t).catch(IE)}:Gd;function IE(t){setTimeout(function(){throw t})}function xu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ra(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ra(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),ni="__reactFiber$"+fs,ca="__reactProps$"+fs,Pi="__reactContainer$"+fs,Wd="__reactEvents$"+fs,UE="__reactListeners$"+fs,OE="__reactHandles$"+fs;function Ur(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pi]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hp(t);t!==null;){if(n=t[ni])return n;t=Hp(t)}return e}t=n,n=t.parentNode}return null}function wa(t){return t=t[ni]||t[Pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Do(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(xe(33))}function Cc(t){return t[ca]||null}var jd=[],No=-1;function xr(t){return{current:t}}function ct(t){0>No||(t.current=jd[No],jd[No]=null,No--)}function ot(t,e){No++,jd[No]=t.current,t.current=e}var pr={},$t=xr(pr),an=xr(!1),Gr=pr;function Qo(t,e){var n=t.type.contextTypes;if(!n)return pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ln(t){return t=t.childContextTypes,t!=null}function Kl(){ct(an),ct($t)}function Vp(t,e,n){if($t.current!==pr)throw Error(xe(168));ot($t,e),ot(an,n)}function L_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(xe(108,yS(t)||"Unknown",r));return gt({},n,i)}function Zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Gr=$t.current,ot($t,t),ot(an,an.current),!0}function Gp(t,e,n){var i=t.stateNode;if(!i)throw Error(xe(169));n?(t=L_(t,e,Gr),i.__reactInternalMemoizedMergedChildContext=t,ct(an),ct($t),ot($t,t)):ct(an),ot(an,n)}var Mi=null,Rc=!1,yu=!1;function D_(t){Mi===null?Mi=[t]:Mi.push(t)}function FE(t){Rc=!0,D_(t)}function yr(){if(!yu&&Mi!==null){yu=!0;var t=0,e=nt;try{var n=Mi;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,Rc=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),i_(jf,yr),r}finally{nt=e,yu=!1}}return null}var Io=[],Uo=0,Ql=null,Jl=0,Cn=[],Rn=0,Wr=null,wi=1,Ti="";function Pr(t,e){Io[Uo++]=Jl,Io[Uo++]=Ql,Ql=t,Jl=e}function N_(t,e,n){Cn[Rn++]=wi,Cn[Rn++]=Ti,Cn[Rn++]=Wr,Wr=t;var i=wi;t=Ti;var r=32-$n(i)-1;i&=~(1<<r),n+=1;var o=32-$n(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,wi=1<<32-$n(e)+r|n<<r|i,Ti=o+t}else wi=1<<o|n<<r|i,Ti=t}function eh(t){t.return!==null&&(Pr(t,1),N_(t,1,0))}function th(t){for(;t===Ql;)Ql=Io[--Uo],Io[Uo]=null,Jl=Io[--Uo],Io[Uo]=null;for(;t===Wr;)Wr=Cn[--Rn],Cn[Rn]=null,Ti=Cn[--Rn],Cn[Rn]=null,wi=Cn[--Rn],Cn[Rn]=null}var xn=null,vn=null,ut=!1,Wn=null;function I_(t,e){var n=Dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,vn=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:wi,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,vn=null,!0):!1;default:return!1}}function Xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yd(t){if(ut){var e=vn;if(e){var n=e;if(!Wp(t,e)){if(Xd(t))throw Error(xe(418));e=or(n.nextSibling);var i=xn;e&&Wp(t,e)?I_(i,n):(t.flags=t.flags&-4097|2,ut=!1,xn=t)}}else{if(Xd(t))throw Error(xe(418));t.flags=t.flags&-4097|2,ut=!1,xn=t}}}function jp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function Ga(t){if(t!==xn)return!1;if(!ut)return jp(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vd(t.type,t.memoizedProps)),e&&(e=vn)){if(Xd(t))throw U_(),Error(xe(418));for(;e;)I_(t,e),e=or(e.nextSibling)}if(jp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(xe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vn=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vn=null}}else vn=xn?or(t.stateNode.nextSibling):null;return!0}function U_(){for(var t=vn;t;)t=or(t.nextSibling)}function Jo(){vn=xn=null,ut=!1}function nh(t){Wn===null?Wn=[t]:Wn.push(t)}var kE=Fi.ReactCurrentBatchConfig;function As(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(xe(309));var i=n.stateNode}if(!i)throw Error(xe(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(xe(284));if(!n._owner)throw Error(xe(290,t))}return t}function Wa(t,e){throw t=Object.prototype.toString.call(e),Error(xe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xp(t){var e=t._init;return e(t._payload)}function O_(t){function e(u,v){if(t){var _=u.deletions;_===null?(u.deletions=[v],u.flags|=16):_.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=cr(u,v),u.index=0,u.sibling=null,u}function o(u,v,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<v?(u.flags|=2,v):_):(u.flags|=2,v)):(u.flags|=1048576,v)}function s(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,_,y){return v===null||v.tag!==6?(v=bu(_,u.mode,y),v.return=u,v):(v=r(v,_),v.return=u,v)}function l(u,v,_,y){var S=_.type;return S===Co?d(u,v,_.props.children,y,_.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Yi&&Xp(S)===v.type)?(y=r(v,_.props),y.ref=As(u,v,_),y.return=u,y):(y=Ul(_.type,_.key,_.props,null,u.mode,y),y.ref=As(u,v,_),y.return=u,y)}function c(u,v,_,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Cu(_,u.mode,y),v.return=u,v):(v=r(v,_.children||[]),v.return=u,v)}function d(u,v,_,y,S){return v===null||v.tag!==7?(v=zr(_,u.mode,y,S),v.return=u,v):(v=r(v,_),v.return=u,v)}function f(u,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=bu(""+v,u.mode,_),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Na:return _=Ul(v.type,v.key,v.props,null,u.mode,_),_.ref=As(u,null,v),_.return=u,_;case bo:return v=Cu(v,u.mode,_),v.return=u,v;case Yi:var y=v._init;return f(u,y(v._payload),_)}if(ks(v)||Ss(v))return v=zr(v,u.mode,_,null),v.return=u,v;Wa(u,v)}return null}function h(u,v,_,y){var S=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return S!==null?null:a(u,v,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Na:return _.key===S?l(u,v,_,y):null;case bo:return _.key===S?c(u,v,_,y):null;case Yi:return S=_._init,h(u,v,S(_._payload),y)}if(ks(_)||Ss(_))return S!==null?null:d(u,v,_,y,null);Wa(u,_)}return null}function g(u,v,_,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(_)||null,a(v,u,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Na:return u=u.get(y.key===null?_:y.key)||null,l(v,u,y,S);case bo:return u=u.get(y.key===null?_:y.key)||null,c(v,u,y,S);case Yi:var A=y._init;return g(u,v,_,A(y._payload),S)}if(ks(y)||Ss(y))return u=u.get(_)||null,d(v,u,y,S,null);Wa(v,y)}return null}function x(u,v,_,y){for(var S=null,A=null,w=v,N=v=0,E=null;w!==null&&N<_.length;N++){w.index>N?(E=w,w=null):E=w.sibling;var b=h(u,w,_[N],y);if(b===null){w===null&&(w=E);break}t&&w&&b.alternate===null&&e(u,w),v=o(b,v,N),A===null?S=b:A.sibling=b,A=b,w=E}if(N===_.length)return n(u,w),ut&&Pr(u,N),S;if(w===null){for(;N<_.length;N++)w=f(u,_[N],y),w!==null&&(v=o(w,v,N),A===null?S=w:A.sibling=w,A=w);return ut&&Pr(u,N),S}for(w=i(u,w);N<_.length;N++)E=g(w,u,N,_[N],y),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?N:E.key),v=o(E,v,N),A===null?S=E:A.sibling=E,A=E);return t&&w.forEach(function(V){return e(u,V)}),ut&&Pr(u,N),S}function m(u,v,_,y){var S=Ss(_);if(typeof S!="function")throw Error(xe(150));if(_=S.call(_),_==null)throw Error(xe(151));for(var A=S=null,w=v,N=v=0,E=null,b=_.next();w!==null&&!b.done;N++,b=_.next()){w.index>N?(E=w,w=null):E=w.sibling;var V=h(u,w,b.value,y);if(V===null){w===null&&(w=E);break}t&&w&&V.alternate===null&&e(u,w),v=o(V,v,N),A===null?S=V:A.sibling=V,A=V,w=E}if(b.done)return n(u,w),ut&&Pr(u,N),S;if(w===null){for(;!b.done;N++,b=_.next())b=f(u,b.value,y),b!==null&&(v=o(b,v,N),A===null?S=b:A.sibling=b,A=b);return ut&&Pr(u,N),S}for(w=i(u,w);!b.done;N++,b=_.next())b=g(w,u,N,b.value,y),b!==null&&(t&&b.alternate!==null&&w.delete(b.key===null?N:b.key),v=o(b,v,N),A===null?S=b:A.sibling=b,A=b);return t&&w.forEach(function(H){return e(u,H)}),ut&&Pr(u,N),S}function p(u,v,_,y){if(typeof _=="object"&&_!==null&&_.type===Co&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Na:e:{for(var S=_.key,A=v;A!==null;){if(A.key===S){if(S=_.type,S===Co){if(A.tag===7){n(u,A.sibling),v=r(A,_.props.children),v.return=u,u=v;break e}}else if(A.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Yi&&Xp(S)===A.type){n(u,A.sibling),v=r(A,_.props),v.ref=As(u,A,_),v.return=u,u=v;break e}n(u,A);break}else e(u,A);A=A.sibling}_.type===Co?(v=zr(_.props.children,u.mode,y,_.key),v.return=u,u=v):(y=Ul(_.type,_.key,_.props,null,u.mode,y),y.ref=As(u,v,_),y.return=u,u=y)}return s(u);case bo:e:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(u,v.sibling),v=r(v,_.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Cu(_,u.mode,y),v.return=u,u=v}return s(u);case Yi:return A=_._init,p(u,v,A(_._payload),y)}if(ks(_))return x(u,v,_,y);if(Ss(_))return m(u,v,_,y);Wa(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,_),v.return=u,u=v):(n(u,v),v=bu(_,u.mode,y),v.return=u,u=v),s(u)):n(u,v)}return p}var es=O_(!0),F_=O_(!1),ec=xr(null),tc=null,Oo=null,ih=null;function rh(){ih=Oo=tc=null}function oh(t){var e=ec.current;ct(ec),t._currentValue=e}function $d(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Wo(t,e){tc=t,ih=Oo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(ih!==t)if(t={context:t,memoizedValue:e,next:null},Oo===null){if(tc===null)throw Error(xe(308));Oo=t,tc.dependencies={lanes:0,firstContext:t}}else Oo=Oo.next=t;return e}var Or=null;function sh(t){Or===null?Or=[t]:Or.push(t)}function k_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,sh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Li(t,i)}function Li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $i=!1;function ah(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Li(t,n)}return r=i.interleaved,r===null?(e.next=e,sh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Li(t,n)}function Rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Xf(t,n)}}function Yp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nc(t,e,n,i){var r=t.updateQueue;$i=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;s=0,d=c=l=null,a=o;do{var h=a.lane,g=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,m=a;switch(h=e,g=n,m.tag){case 1:if(x=m.payload,typeof x=="function"){f=x.call(g,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=m.payload,h=typeof x=="function"?x.call(g,f,h):x,h==null)break e;f=gt({},f,h);break e;case 2:$i=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Xr|=s,t.lanes=s,t.memoizedState=f}}function $p(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(xe(191,r));r.call(i)}}}var Ta={},ai=xr(Ta),ua=xr(Ta),da=xr(Ta);function Fr(t){if(t===Ta)throw Error(xe(174));return t}function lh(t,e){switch(ot(da,e),ot(ua,t),ot(ai,Ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cd(e,t)}ct(ai),ot(ai,e)}function ts(){ct(ai),ct(ua),ct(da)}function B_(t){Fr(da.current);var e=Fr(ai.current),n=Cd(e,t.type);e!==n&&(ot(ua,t),ot(ai,n))}function ch(t){ua.current===t&&(ct(ai),ct(ua))}var pt=xr(0);function ic(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Su=[];function uh(){for(var t=0;t<Su.length;t++)Su[t]._workInProgressVersionPrimary=null;Su.length=0}var Pl=Fi.ReactCurrentDispatcher,Eu=Fi.ReactCurrentBatchConfig,jr=0,mt=null,At=null,Dt=null,rc=!1,$s=!1,fa=0,zE=0;function Gt(){throw Error(xe(321))}function dh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function fh(t,e,n,i,r,o){if(jr=o,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pl.current=t===null||t.memoizedState===null?GE:WE,t=n(i,r),$s){o=0;do{if($s=!1,fa=0,25<=o)throw Error(xe(301));o+=1,Dt=At=null,e.updateQueue=null,Pl.current=jE,t=n(i,r)}while($s)}if(Pl.current=oc,e=At!==null&&At.next!==null,jr=0,Dt=At=mt=null,rc=!1,e)throw Error(xe(300));return t}function hh(){var t=fa!==0;return fa=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?mt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function On(){if(At===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Dt===null?mt.memoizedState:Dt.next;if(e!==null)Dt=e,At=t;else{if(t===null)throw Error(xe(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Dt===null?mt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function ha(t,e){return typeof e=="function"?e(t):e}function Mu(t){var e=On(),n=e.queue;if(n===null)throw Error(xe(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var d=c.lane;if((jr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=i):l=l.next=f,mt.lanes|=d,Xr|=d}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,Kn(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,mt.lanes|=o,Xr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wu(t){var e=On(),n=e.queue;if(n===null)throw Error(xe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Kn(o,e.memoizedState)||(sn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function H_(){}function V_(t,e){var n=mt,i=On(),r=e(),o=!Kn(i.memoizedState,r);if(o&&(i.memoizedState=r,sn=!0),i=i.queue,ph(j_.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,pa(9,W_.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(xe(349));jr&30||G_(n,e,r)}return r}function G_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function W_(t,e,n,i){e.value=n,e.getSnapshot=i,X_(e)&&Y_(t)}function j_(t,e,n){return n(function(){X_(e)&&Y_(t)})}function X_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function Y_(t){var e=Li(t,1);e!==null&&qn(e,t,1,-1)}function qp(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},e.queue=t,t=t.dispatch=VE.bind(null,mt,t),[e.memoizedState,t]}function pa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function $_(){return On().memoizedState}function Ll(t,e,n,i){var r=ei();mt.flags|=t,r.memoizedState=pa(1|e,n,void 0,i===void 0?null:i)}function Pc(t,e,n,i){var r=On();i=i===void 0?null:i;var o=void 0;if(At!==null){var s=At.memoizedState;if(o=s.destroy,i!==null&&dh(i,s.deps)){r.memoizedState=pa(e,n,o,i);return}}mt.flags|=t,r.memoizedState=pa(1|e,n,o,i)}function Kp(t,e){return Ll(8390656,8,t,e)}function ph(t,e){return Pc(2048,8,t,e)}function q_(t,e){return Pc(4,2,t,e)}function K_(t,e){return Pc(4,4,t,e)}function Z_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Q_(t,e,n){return n=n!=null?n.concat([t]):null,Pc(4,4,Z_.bind(null,e,t),n)}function mh(){}function J_(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&dh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function e0(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&dh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function t0(t,e,n){return jr&21?(Kn(n,e)||(n=s_(),mt.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function BE(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=Eu.transition;Eu.transition={};try{t(!1),e()}finally{nt=n,Eu.transition=i}}function n0(){return On().memoizedState}function HE(t,e,n){var i=lr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},i0(t))r0(e,n);else if(n=k_(t,e,n,i),n!==null){var r=en();qn(n,t,i,r),o0(n,e,i)}}function VE(t,e,n){var i=lr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(i0(t))r0(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Kn(a,s)){var l=e.interleaved;l===null?(r.next=r,sh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=k_(t,e,r,i),n!==null&&(r=en(),qn(n,t,i,r),o0(n,e,i))}}function i0(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function r0(t,e){$s=rc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function o0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Xf(t,n)}}var oc={readContext:Un,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},GE={readContext:Un,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:Kp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4194308,4,Z_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ll(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=HE.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:qp,useDebugValue:mh,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=qp(!1),e=t[0];return t=BE.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=ei();if(ut){if(n===void 0)throw Error(xe(407));n=n()}else{if(n=e(),Nt===null)throw Error(xe(349));jr&30||G_(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Kp(j_.bind(null,i,o,t),[t]),i.flags|=2048,pa(9,W_.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ei(),e=Nt.identifierPrefix;if(ut){var n=Ti,i=wi;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},WE={readContext:Un,useCallback:J_,useContext:Un,useEffect:ph,useImperativeHandle:Q_,useInsertionEffect:q_,useLayoutEffect:K_,useMemo:e0,useReducer:Mu,useRef:$_,useState:function(){return Mu(ha)},useDebugValue:mh,useDeferredValue:function(t){var e=On();return t0(e,At.memoizedState,t)},useTransition:function(){var t=Mu(ha)[0],e=On().memoizedState;return[t,e]},useMutableSource:H_,useSyncExternalStore:V_,useId:n0,unstable_isNewReconciler:!1},jE={readContext:Un,useCallback:J_,useContext:Un,useEffect:ph,useImperativeHandle:Q_,useInsertionEffect:q_,useLayoutEffect:K_,useMemo:e0,useReducer:wu,useRef:$_,useState:function(){return wu(ha)},useDebugValue:mh,useDeferredValue:function(t){var e=On();return At===null?e.memoizedState=t:t0(e,At.memoizedState,t)},useTransition:function(){var t=wu(ha)[0],e=On().memoizedState;return[t,e]},useMutableSource:H_,useSyncExternalStore:V_,useId:n0,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lc={isMounted:function(t){return(t=t._reactInternals)?to(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),r=lr(t),o=Ci(i,r);o.payload=e,n!=null&&(o.callback=n),e=sr(t,o,r),e!==null&&(qn(e,t,r,i),Rl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),r=lr(t),o=Ci(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=sr(t,o,r),e!==null&&(qn(e,t,r,i),Rl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=lr(t),r=Ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=sr(t,r,i),e!==null&&(qn(e,t,i,n),Rl(e,t,i))}};function Zp(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!sa(n,i)||!sa(r,o):!0}function s0(t,e,n){var i=!1,r=pr,o=e.contextType;return typeof o=="object"&&o!==null?o=Un(o):(r=ln(e)?Gr:$t.current,i=e.contextTypes,o=(i=i!=null)?Qo(t,r):pr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Qp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Lc.enqueueReplaceState(e,e.state,null)}function Kd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ah(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Un(o):(o=ln(e)?Gr:$t.current,r.context=Qo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(qd(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Lc.enqueueReplaceState(r,r.state,null),nc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ns(t,e){try{var n="",i=e;do n+=xS(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Tu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var XE=typeof WeakMap=="function"?WeakMap:Map;function a0(t,e,n){n=Ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ac||(ac=!0,lf=i),Zd(t,e)},n}function l0(t,e,n){n=Ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Zd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Zd(t,e),typeof i!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Jp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new XE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=sM.bind(null,t,e,n),e.then(t,t))}function em(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ci(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t)}var YE=Fi.ReactCurrentOwner,sn=!1;function Kt(t,e,n,i){e.child=t===null?F_(e,null,n,i):es(e,t.child,n,i)}function nm(t,e,n,i,r){n=n.render;var o=e.ref;return Wo(e,r),i=fh(t,e,n,i,o,r),n=hh(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(ut&&n&&eh(e),e.flags|=1,Kt(t,e,i,r),e.child)}function im(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Mh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,c0(t,e,o,i,r)):(t=Ul(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(s,i)&&t.ref===e.ref)return Di(t,e,r)}return e.flags|=1,t=cr(o,i),t.ref=e.ref,t.return=e,e.child=t}function c0(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(sa(o,i)&&t.ref===e.ref)if(sn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,Di(t,e,r)}return Qd(t,e,n,i,r)}function u0(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(ko,mn),mn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(ko,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,ot(ko,mn),mn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,ot(ko,mn),mn|=i;return Kt(t,e,r,n),e.child}function d0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qd(t,e,n,i,r){var o=ln(n)?Gr:$t.current;return o=Qo(e,o),Wo(e,r),n=fh(t,e,n,i,o,r),i=hh(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(ut&&i&&eh(e),e.flags|=1,Kt(t,e,n,r),e.child)}function rm(t,e,n,i,r){if(ln(n)){var o=!0;Zl(e)}else o=!1;if(Wo(e,r),e.stateNode===null)Dl(t,e),s0(e,n,i),Kd(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=ln(n)?Gr:$t.current,c=Qo(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Qp(e,s,i,c),$i=!1;var h=e.memoizedState;s.state=h,nc(e,i,s,r),l=e.memoizedState,a!==i||h!==l||an.current||$i?(typeof d=="function"&&(qd(e,n,d,i),l=e.memoizedState),(a=$i||Zp(e,n,a,i,h,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,z_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Vn(e.type,a),s.props=c,f=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=ln(n)?Gr:$t.current,l=Qo(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Qp(e,s,i,l),$i=!1,h=e.memoizedState,s.state=h,nc(e,i,s,r);var x=e.memoizedState;a!==f||h!==x||an.current||$i?(typeof g=="function"&&(qd(e,n,g,i),x=e.memoizedState),(c=$i||Zp(e,n,c,i,h,x,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,x,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),s.props=i,s.state=x,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Jd(t,e,n,i,o,r)}function Jd(t,e,n,i,r,o){d0(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Gp(e,n,!1),Di(t,e,o);i=e.stateNode,YE.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=es(e,t.child,null,o),e.child=es(e,null,a,o)):Kt(t,e,a,o),e.memoizedState=i.state,r&&Gp(e,n,!0),e.child}function f0(t){var e=t.stateNode;e.pendingContext?Vp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vp(t,e.context,!1),lh(t,e.containerInfo)}function om(t,e,n,i,r){return Jo(),nh(r),e.flags|=256,Kt(t,e,n,i),e.child}var ef={dehydrated:null,treeContext:null,retryLane:0};function tf(t){return{baseLanes:t,cachePool:null,transitions:null}}function h0(t,e,n){var i=e.pendingProps,r=pt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(pt,r&1),t===null)return Yd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ic(s,i,0,null),t=zr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=tf(n),e.memoizedState=ef,t):gh(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return $E(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=cr(a,o):(o=zr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?tf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=ef,i}return o=t.child,t=o.sibling,i=cr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function gh(t,e){return e=Ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ja(t,e,n,i){return i!==null&&nh(i),es(e,t.child,null,n),t=gh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $E(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Tu(Error(xe(422))),ja(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Ic({mode:"visible",children:i.children},r,0,null),o=zr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&es(e,t.child,null,s),e.child.memoizedState=tf(s),e.memoizedState=ef,o);if(!(e.mode&1))return ja(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(xe(419)),i=Tu(o,i,void 0),ja(t,e,s,i)}if(a=(s&t.childLanes)!==0,sn||a){if(i=Nt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Li(t,r),qn(i,t,r,-1))}return Eh(),i=Tu(Error(xe(421))),ja(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=aM.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,vn=or(r.nextSibling),xn=e,ut=!0,Wn=null,t!==null&&(Cn[Rn++]=wi,Cn[Rn++]=Ti,Cn[Rn++]=Wr,wi=t.id,Ti=t.overflow,Wr=e),e=gh(e,i.children),e.flags|=4096,e)}function sm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),$d(t.return,e,n)}function Au(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function p0(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Kt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sm(t,n,e);else if(t.tag===19)sm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ic(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Au(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ic(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Au(e,!0,n,null,o);break;case"together":Au(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Dl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(xe(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qE(t,e,n){switch(e.tag){case 3:f0(e),Jo();break;case 5:B_(e);break;case 1:ln(e.type)&&Zl(e);break;case 4:lh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(ec,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?h0(t,e,n):(ot(pt,pt.current&1),t=Di(t,e,n),t!==null?t.sibling:null);ot(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return p0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,u0(t,e,n)}return Di(t,e,n)}var m0,nf,g0,v0;m0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nf=function(){};g0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Fr(ai.current);var o=null;switch(n){case"input":r=wd(t,r),i=wd(t,i),o=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),o=[];break;case"textarea":r=bd(t,r),i=bd(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ql)}Rd(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Js.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Js.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};v0=function(t,e,n,i){n!==i&&(e.flags|=4)};function bs(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function KE(t,e,n){var i=e.pendingProps;switch(th(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return ln(e.type)&&Kl(),Wt(e),null;case 3:return i=e.stateNode,ts(),ct(an),ct($t),uh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ga(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(df(Wn),Wn=null))),nf(t,e),Wt(e),null;case 5:ch(e);var r=Fr(da.current);if(n=e.type,t!==null&&e.stateNode!=null)g0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(xe(166));return Wt(e),null}if(t=Fr(ai.current),Ga(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ni]=e,i[ca]=o,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<Bs.length;r++)at(Bs[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":mp(i,o),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},at("invalid",i);break;case"textarea":vp(i,o),at("invalid",i)}Rd(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Va(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Va(i.textContent,a,t),r=["children",""+a]):Js.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&at("scroll",i)}switch(n){case"input":Ia(i),gp(i,o,!0);break;case"textarea":Ia(i),_p(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=ql)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[ni]=e,t[ca]=i,m0(t,e,!1,!1),e.stateNode=t;e:{switch(s=Pd(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<Bs.length;r++)at(Bs[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":mp(t,i),r=wd(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),at("invalid",t);break;case"textarea":vp(t,i),r=bd(t,i),at("invalid",t);break;default:r=i}Rd(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?$v(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xv(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ea(t,l):typeof l=="number"&&ea(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Js.hasOwnProperty(o)?l!=null&&o==="onScroll"&&at("scroll",t):l!=null&&Bf(t,o,l,s))}switch(n){case"input":Ia(t),gp(t,i,!1);break;case"textarea":Ia(t),_p(t);break;case"option":i.value!=null&&t.setAttribute("value",""+hr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Bo(t,!!i.multiple,o,!1):i.defaultValue!=null&&Bo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ql)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)v0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(xe(166));if(n=Fr(da.current),Fr(ai.current),Ga(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(o=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:Va(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Va(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return Wt(e),null;case 13:if(ct(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&vn!==null&&e.mode&1&&!(e.flags&128))U_(),Jo(),e.flags|=98560,o=!1;else if(o=Ga(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(xe(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(xe(317));o[ni]=e}else Jo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),o=!1}else Wn!==null&&(df(Wn),Wn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?bt===0&&(bt=3):Eh())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return ts(),nf(t,e),t===null&&aa(e.stateNode.containerInfo),Wt(e),null;case 10:return oh(e.type._context),Wt(e),null;case 17:return ln(e.type)&&Kl(),Wt(e),null;case 19:if(ct(pt),o=e.memoizedState,o===null)return Wt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)bs(o,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=ic(t),s!==null){for(e.flags|=128,bs(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(pt,pt.current&1|2),e.child}t=t.sibling}o.tail!==null&&yt()>is&&(e.flags|=128,i=!0,bs(o,!1),e.lanes=4194304)}else{if(!i)if(t=ic(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ut)return Wt(e),null}else 2*yt()-o.renderingStartTime>is&&n!==1073741824&&(e.flags|=128,i=!0,bs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=yt(),e.sibling=null,n=pt.current,ot(pt,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return Sh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(xe(156,e.tag))}function ZE(t,e){switch(th(e),e.tag){case 1:return ln(e.type)&&Kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ts(),ct(an),ct($t),uh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ch(e),null;case 13:if(ct(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(xe(340));Jo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(pt),null;case 4:return ts(),null;case 10:return oh(e.type._context),null;case 22:case 23:return Sh(),null;case 24:return null;default:return null}}var Xa=!1,Yt=!1,QE=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Fo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function rf(t,e,n){try{n()}catch(i){_t(t,e,i)}}var am=!1;function JE(t,e){if(Bd=Xl,t=E_(),Jf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(a=s+r),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=s),h===o&&++d===i&&(l=s),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hd={focusedElem:t,selectionRange:n},Xl=!1,Ie=e;Ie!==null;)if(e=Ie,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ie=t;else for(;Ie!==null;){e=Ie;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var m=x.memoizedProps,p=x.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?m:Vn(e.type,m),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(xe(163))}}catch(y){_t(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ie=t;break}Ie=e.return}return x=am,am=!1,x}function qs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&rf(e,n,o)}r=r.next}while(r!==i)}}function Dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function of(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _0(t){var e=t.alternate;e!==null&&(t.alternate=null,_0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[ca],delete e[Wd],delete e[UE],delete e[OE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function x0(t){return t.tag===5||t.tag===3||t.tag===4}function lm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||x0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ql));else if(i!==4&&(t=t.child,t!==null))for(sf(t,e,n),t=t.sibling;t!==null;)sf(t,e,n),t=t.sibling}function af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(af(t,e,n),t=t.sibling;t!==null;)af(t,e,n),t=t.sibling}var Ut=null,Gn=!1;function ki(t,e,n){for(n=n.child;n!==null;)y0(t,e,n),n=n.sibling}function y0(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(wc,n)}catch{}switch(n.tag){case 5:Yt||Fo(n,e);case 6:var i=Ut,r=Gn;Ut=null,ki(t,e,n),Ut=i,Gn=r,Ut!==null&&(Gn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Gn?(t=Ut,n=n.stateNode,t.nodeType===8?xu(t.parentNode,n):t.nodeType===1&&xu(t,n),ra(t)):xu(Ut,n.stateNode));break;case 4:i=Ut,r=Gn,Ut=n.stateNode.containerInfo,Gn=!0,ki(t,e,n),Ut=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&rf(n,e,s),r=r.next}while(r!==i)}ki(t,e,n);break;case 1:if(!Yt&&(Fo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){_t(n,e,a)}ki(t,e,n);break;case 21:ki(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,ki(t,e,n),Yt=i):ki(t,e,n);break;default:ki(t,e,n)}}function cm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new QE),e.forEach(function(i){var r=lM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,Gn=!1;break e;case 3:Ut=a.stateNode.containerInfo,Gn=!0;break e;case 4:Ut=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(Ut===null)throw Error(xe(160));y0(o,s,r),Ut=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){_t(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)S0(e,t),e=e.sibling}function S0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Jn(t),i&4){try{qs(3,t,t.return),Dc(3,t)}catch(m){_t(t,t.return,m)}try{qs(5,t,t.return)}catch(m){_t(t,t.return,m)}}break;case 1:Fn(e,t),Jn(t),i&512&&n!==null&&Fo(n,n.return);break;case 5:if(Fn(e,t),Jn(t),i&512&&n!==null&&Fo(n,n.return),t.flags&32){var r=t.stateNode;try{ea(r,"")}catch(m){_t(t,t.return,m)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Gv(r,o),Pd(a,s);var c=Pd(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?$v(r,f):d==="dangerouslySetInnerHTML"?Xv(r,f):d==="children"?ea(r,f):Bf(r,d,f,c)}switch(a){case"input":Td(r,o);break;case"textarea":Wv(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Bo(r,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?Bo(r,!!o.multiple,o.defaultValue,!0):Bo(r,!!o.multiple,o.multiple?[]:"",!1))}r[ca]=o}catch(m){_t(t,t.return,m)}}break;case 6:if(Fn(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(xe(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(m){_t(t,t.return,m)}}break;case 3:if(Fn(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ra(e.containerInfo)}catch(m){_t(t,t.return,m)}break;case 4:Fn(e,t),Jn(t);break;case 13:Fn(e,t),Jn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(xh=yt())),i&4&&cm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(c=Yt)||d,Fn(e,t),Yt=c):Fn(e,t),Jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Ie=t,d=t.child;d!==null;){for(f=Ie=d;Ie!==null;){switch(h=Ie,g=h.child,h.tag){case 0:case 11:case 14:case 15:qs(4,h,h.return);break;case 1:Fo(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(m){_t(i,n,m)}}break;case 5:Fo(h,h.return);break;case 22:if(h.memoizedState!==null){dm(f);continue}}g!==null?(g.return=h,Ie=g):dm(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Yv("display",s))}catch(m){_t(t,t.return,m)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(m){_t(t,t.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fn(e,t),Jn(t),i&4&&cm(t);break;case 21:break;default:Fn(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(x0(n)){var i=n;break e}n=n.return}throw Error(xe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ea(r,""),i.flags&=-33);var o=lm(t);af(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=lm(t);sf(t,a,s);break;default:throw Error(xe(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function eM(t,e,n){Ie=t,E0(t)}function E0(t,e,n){for(var i=(t.mode&1)!==0;Ie!==null;){var r=Ie,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Xa;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Yt;a=Xa;var c=Yt;if(Xa=s,(Yt=l)&&!c)for(Ie=r;Ie!==null;)s=Ie,l=s.child,s.tag===22&&s.memoizedState!==null?fm(r):l!==null?(l.return=s,Ie=l):fm(r);for(;o!==null;)Ie=o,E0(o),o=o.sibling;Ie=r,Xa=a,Yt=c}um(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Ie=o):um(t)}}function um(t){for(;Ie!==null;){var e=Ie;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||Dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&$p(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$p(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ra(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(xe(163))}Yt||e.flags&512&&of(e)}catch(h){_t(e,e.return,h)}}if(e===t){Ie=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ie=n;break}Ie=e.return}}function dm(t){for(;Ie!==null;){var e=Ie;if(e===t){Ie=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ie=n;break}Ie=e.return}}function fm(t){for(;Ie!==null;){var e=Ie;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dc(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var o=e.return;try{of(e)}catch(l){_t(e,o,l)}break;case 5:var s=e.return;try{of(e)}catch(l){_t(e,s,l)}}}catch(l){_t(e,e.return,l)}if(e===t){Ie=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ie=a;break}Ie=e.return}}var tM=Math.ceil,sc=Fi.ReactCurrentDispatcher,vh=Fi.ReactCurrentOwner,In=Fi.ReactCurrentBatchConfig,tt=0,Nt=null,Tt=null,Ft=0,mn=0,ko=xr(0),bt=0,ma=null,Xr=0,Nc=0,_h=0,Ks=null,on=null,xh=0,is=1/0,Ei=null,ac=!1,lf=null,ar=null,Ya=!1,Ji=null,lc=0,Zs=0,cf=null,Nl=-1,Il=0;function en(){return tt&6?yt():Nl!==-1?Nl:Nl=yt()}function lr(t){return t.mode&1?tt&2&&Ft!==0?Ft&-Ft:kE.transition!==null?(Il===0&&(Il=s_()),Il):(t=nt,t!==0||(t=window.event,t=t===void 0?16:h_(t.type)),t):1}function qn(t,e,n,i){if(50<Zs)throw Zs=0,cf=null,Error(xe(185));Ea(t,n,i),(!(tt&2)||t!==Nt)&&(t===Nt&&(!(tt&2)&&(Nc|=n),bt===4&&Zi(t,Ft)),cn(t,i),n===1&&tt===0&&!(e.mode&1)&&(is=yt()+500,Rc&&yr()))}function cn(t,e){var n=t.callbackNode;kS(t,e);var i=jl(t,t===Nt?Ft:0);if(i===0)n!==null&&Sp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Sp(n),e===1)t.tag===0?FE(hm.bind(null,t)):D_(hm.bind(null,t)),NE(function(){!(tt&6)&&yr()}),n=null;else{switch(a_(i)){case 1:n=jf;break;case 4:n=r_;break;case 16:n=Wl;break;case 536870912:n=o_;break;default:n=Wl}n=P0(n,M0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function M0(t,e){if(Nl=-1,Il=0,tt&6)throw Error(xe(327));var n=t.callbackNode;if(jo()&&t.callbackNode!==n)return null;var i=jl(t,t===Nt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=cc(t,i);else{e=i;var r=tt;tt|=2;var o=T0();(Nt!==t||Ft!==e)&&(Ei=null,is=yt()+500,kr(t,e));do try{rM();break}catch(a){w0(t,a)}while(!0);rh(),sc.current=o,tt=r,Tt!==null?e=0:(Nt=null,Ft=0,e=bt)}if(e!==0){if(e===2&&(r=Ud(t),r!==0&&(i=r,e=uf(t,r))),e===1)throw n=ma,kr(t,0),Zi(t,i),cn(t,yt()),n;if(e===6)Zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!nM(r)&&(e=cc(t,i),e===2&&(o=Ud(t),o!==0&&(i=o,e=uf(t,o))),e===1))throw n=ma,kr(t,0),Zi(t,i),cn(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(xe(345));case 2:Lr(t,on,Ei);break;case 3:if(Zi(t,i),(i&130023424)===i&&(e=xh+500-yt(),10<e)){if(jl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Gd(Lr.bind(null,t,on,Ei),e);break}Lr(t,on,Ei);break;case 4:if(Zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-$n(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*tM(i/1960))-i,10<i){t.timeoutHandle=Gd(Lr.bind(null,t,on,Ei),i);break}Lr(t,on,Ei);break;case 5:Lr(t,on,Ei);break;default:throw Error(xe(329))}}}return cn(t,yt()),t.callbackNode===n?M0.bind(null,t):null}function uf(t,e){var n=Ks;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=cc(t,e),t!==2&&(e=on,on=n,e!==null&&df(e)),t}function df(t){on===null?on=t:on.push.apply(on,t)}function nM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Kn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zi(t,e){for(e&=~_h,e&=~Nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),i=1<<n;t[n]=-1,e&=~i}}function hm(t){if(tt&6)throw Error(xe(327));jo();var e=jl(t,0);if(!(e&1))return cn(t,yt()),null;var n=cc(t,e);if(t.tag!==0&&n===2){var i=Ud(t);i!==0&&(e=i,n=uf(t,i))}if(n===1)throw n=ma,kr(t,0),Zi(t,e),cn(t,yt()),n;if(n===6)throw Error(xe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,on,Ei),cn(t,yt()),null}function yh(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(is=yt()+500,Rc&&yr())}}function Yr(t){Ji!==null&&Ji.tag===0&&!(tt&6)&&jo();var e=tt;tt|=1;var n=In.transition,i=nt;try{if(In.transition=null,nt=1,t)return t()}finally{nt=i,In.transition=n,tt=e,!(tt&6)&&yr()}}function Sh(){mn=ko.current,ct(ko)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,DE(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(th(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Kl();break;case 3:ts(),ct(an),ct($t),uh();break;case 5:ch(i);break;case 4:ts();break;case 13:ct(pt);break;case 19:ct(pt);break;case 10:oh(i.type._context);break;case 22:case 23:Sh()}n=n.return}if(Nt=t,Tt=t=cr(t.current,null),Ft=mn=e,bt=0,ma=null,_h=Nc=Xr=0,on=Ks=null,Or!==null){for(e=0;e<Or.length;e++)if(n=Or[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Or=null}return t}function w0(t,e){do{var n=Tt;try{if(rh(),Pl.current=oc,rc){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}rc=!1}if(jr=0,Dt=At=mt=null,$s=!1,fa=0,vh.current=null,n===null||n.return===null){bt=1,ma=e,Tt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=em(s);if(g!==null){g.flags&=-257,tm(g,s,a,o,e),g.mode&1&&Jp(o,c,e),e=g,l=c;var x=e.updateQueue;if(x===null){var m=new Set;m.add(l),e.updateQueue=m}else x.add(l);break e}else{if(!(e&1)){Jp(o,c,e),Eh();break e}l=Error(xe(426))}}else if(ut&&a.mode&1){var p=em(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),tm(p,s,a,o,e),nh(ns(l,a));break e}}o=l=ns(l,a),bt!==4&&(bt=2),Ks===null?Ks=[o]:Ks.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var u=a0(o,l,e);Yp(o,u);break e;case 1:a=l;var v=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ar===null||!ar.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=l0(o,a,e);Yp(o,y);break e}}o=o.return}while(o!==null)}b0(n)}catch(S){e=S,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function T0(){var t=sc.current;return sc.current=oc,t===null?oc:t}function Eh(){(bt===0||bt===3||bt===2)&&(bt=4),Nt===null||!(Xr&268435455)&&!(Nc&268435455)||Zi(Nt,Ft)}function cc(t,e){var n=tt;tt|=2;var i=T0();(Nt!==t||Ft!==e)&&(Ei=null,kr(t,e));do try{iM();break}catch(r){w0(t,r)}while(!0);if(rh(),tt=n,sc.current=i,Tt!==null)throw Error(xe(261));return Nt=null,Ft=0,bt}function iM(){for(;Tt!==null;)A0(Tt)}function rM(){for(;Tt!==null&&!RS();)A0(Tt)}function A0(t){var e=R0(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?b0(t):Tt=e,vh.current=null}function b0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ZE(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,Tt=null;return}}else if(n=KE(n,e,mn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);bt===0&&(bt=5)}function Lr(t,e,n){var i=nt,r=In.transition;try{In.transition=null,nt=1,oM(t,e,n,i)}finally{In.transition=r,nt=i}return null}function oM(t,e,n,i){do jo();while(Ji!==null);if(tt&6)throw Error(xe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(xe(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(zS(t,o),t===Nt&&(Tt=Nt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ya||(Ya=!0,P0(Wl,function(){return jo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=In.transition,In.transition=null;var s=nt;nt=1;var a=tt;tt|=4,vh.current=null,JE(t,n),S0(n,t),TE(Hd),Xl=!!Bd,Hd=Bd=null,t.current=n,eM(n),PS(),tt=a,nt=s,In.transition=o}else t.current=n;if(Ya&&(Ya=!1,Ji=t,lc=r),o=t.pendingLanes,o===0&&(ar=null),NS(n.stateNode),cn(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ac)throw ac=!1,t=lf,lf=null,t;return lc&1&&t.tag!==0&&jo(),o=t.pendingLanes,o&1?t===cf?Zs++:(Zs=0,cf=t):Zs=0,yr(),null}function jo(){if(Ji!==null){var t=a_(lc),e=In.transition,n=nt;try{if(In.transition=null,nt=16>t?16:t,Ji===null)var i=!1;else{if(t=Ji,Ji=null,lc=0,tt&6)throw Error(xe(331));var r=tt;for(tt|=4,Ie=t.current;Ie!==null;){var o=Ie,s=o.child;if(Ie.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ie=c;Ie!==null;){var d=Ie;switch(d.tag){case 0:case 11:case 15:qs(8,d,o)}var f=d.child;if(f!==null)f.return=d,Ie=f;else for(;Ie!==null;){d=Ie;var h=d.sibling,g=d.return;if(_0(d),d===c){Ie=null;break}if(h!==null){h.return=g,Ie=h;break}Ie=g}}}var x=o.alternate;if(x!==null){var m=x.child;if(m!==null){x.child=null;do{var p=m.sibling;m.sibling=null,m=p}while(m!==null)}}Ie=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Ie=s;else e:for(;Ie!==null;){if(o=Ie,o.flags&2048)switch(o.tag){case 0:case 11:case 15:qs(9,o,o.return)}var u=o.sibling;if(u!==null){u.return=o.return,Ie=u;break e}Ie=o.return}}var v=t.current;for(Ie=v;Ie!==null;){s=Ie;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,Ie=_;else e:for(s=v;Ie!==null;){if(a=Ie,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Dc(9,a)}}catch(S){_t(a,a.return,S)}if(a===s){Ie=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ie=y;break e}Ie=a.return}}if(tt=r,yr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(wc,t)}catch{}i=!0}return i}finally{nt=n,In.transition=e}}return!1}function pm(t,e,n){e=ns(n,e),e=a0(t,e,1),t=sr(t,e,1),e=en(),t!==null&&(Ea(t,1,e),cn(t,e))}function _t(t,e,n){if(t.tag===3)pm(t,t,n);else for(;e!==null;){if(e.tag===3){pm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ar===null||!ar.has(i))){t=ns(n,t),t=l0(e,t,1),e=sr(e,t,1),t=en(),e!==null&&(Ea(e,1,t),cn(e,t));break}}e=e.return}}function sM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Ft&n)===n&&(bt===4||bt===3&&(Ft&130023424)===Ft&&500>yt()-xh?kr(t,0):_h|=n),cn(t,e)}function C0(t,e){e===0&&(t.mode&1?(e=Fa,Fa<<=1,!(Fa&130023424)&&(Fa=4194304)):e=1);var n=en();t=Li(t,e),t!==null&&(Ea(t,e,n),cn(t,n))}function aM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),C0(t,n)}function lM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(xe(314))}i!==null&&i.delete(e),C0(t,n)}var R0;R0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,qE(t,e,n);sn=!!(t.flags&131072)}else sn=!1,ut&&e.flags&1048576&&N_(e,Jl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Dl(t,e),t=e.pendingProps;var r=Qo(e,$t.current);Wo(e,n),r=fh(null,e,i,t,r,n);var o=hh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(i)?(o=!0,Zl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ah(e),r.updater=Lc,e.stateNode=r,r._reactInternals=e,Kd(e,i,t,n),e=Jd(null,e,i,!0,o,n)):(e.tag=0,ut&&o&&eh(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Dl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=uM(i),t=Vn(i,t),r){case 0:e=Qd(null,e,i,t,n);break e;case 1:e=rm(null,e,i,t,n);break e;case 11:e=nm(null,e,i,t,n);break e;case 14:e=im(null,e,i,Vn(i.type,t),n);break e}throw Error(xe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Qd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),rm(t,e,i,r,n);case 3:e:{if(f0(e),t===null)throw Error(xe(387));i=e.pendingProps,o=e.memoizedState,r=o.element,z_(t,e),nc(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=ns(Error(xe(423)),e),e=om(t,e,i,n,r);break e}else if(i!==r){r=ns(Error(xe(424)),e),e=om(t,e,i,n,r);break e}else for(vn=or(e.stateNode.containerInfo.firstChild),xn=e,ut=!0,Wn=null,n=F_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jo(),i===r){e=Di(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return B_(e),t===null&&Yd(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Vd(i,r)?s=null:o!==null&&Vd(i,o)&&(e.flags|=32),d0(t,e),Kt(t,e,s,n),e.child;case 6:return t===null&&Yd(e),null;case 13:return h0(t,e,n);case 4:return lh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=es(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),nm(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,ot(ec,i._currentValue),i._currentValue=s,o!==null)if(Kn(o.value,s)){if(o.children===r.children&&!an.current){e=Di(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Ci(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$d(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(xe(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),$d(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Wo(e,n),r=Un(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=Vn(i,e.pendingProps),r=Vn(i.type,r),im(t,e,i,r,n);case 15:return c0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Dl(t,e),e.tag=1,ln(i)?(t=!0,Zl(e)):t=!1,Wo(e,n),s0(e,i,r),Kd(e,i,r,n),Jd(null,e,i,!0,t,n);case 19:return p0(t,e,n);case 22:return u0(t,e,n)}throw Error(xe(156,e.tag))};function P0(t,e){return i_(t,e)}function cM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,e,n,i){return new cM(t,e,n,i)}function Mh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uM(t){if(typeof t=="function")return Mh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vf)return 11;if(t===Gf)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ul(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Mh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Co:return zr(n.children,r,o,e);case Hf:s=8,r|=8;break;case yd:return t=Dn(12,n,e,r|2),t.elementType=yd,t.lanes=o,t;case Sd:return t=Dn(13,n,e,r),t.elementType=Sd,t.lanes=o,t;case Ed:return t=Dn(19,n,e,r),t.elementType=Ed,t.lanes=o,t;case Bv:return Ic(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case kv:s=10;break e;case zv:s=9;break e;case Vf:s=11;break e;case Gf:s=14;break e;case Yi:s=16,i=null;break e}throw Error(xe(130,t==null?t:typeof t,""))}return e=Dn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function zr(t,e,n,i){return t=Dn(7,t,i,e),t.lanes=n,t}function Ic(t,e,n,i){return t=Dn(22,t,i,e),t.elementType=Bv,t.lanes=n,t.stateNode={isHidden:!1},t}function bu(t,e,n){return t=Dn(6,t,null,e),t.lanes=n,t}function Cu(t,e,n){return e=Dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lu(0),this.expirationTimes=lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function wh(t,e,n,i,r,o,s,a,l){return t=new dM(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Dn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ah(o),t}function fM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function L0(t){if(!t)return pr;t=t._reactInternals;e:{if(to(t)!==t||t.tag!==1)throw Error(xe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(xe(171))}if(t.tag===1){var n=t.type;if(ln(n))return L_(t,n,e)}return e}function D0(t,e,n,i,r,o,s,a,l){return t=wh(n,i,!0,t,r,o,s,a,l),t.context=L0(null),n=t.current,i=en(),r=lr(n),o=Ci(i,r),o.callback=e??null,sr(n,o,r),t.current.lanes=r,Ea(t,r,i),cn(t,i),t}function Uc(t,e,n,i){var r=e.current,o=en(),s=lr(r);return n=L0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ci(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=sr(r,e,s),t!==null&&(qn(t,r,s,o),Rl(t,r,s)),s}function uc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Th(t,e){mm(t,e),(t=t.alternate)&&mm(t,e)}function hM(){return null}var N0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ah(t){this._internalRoot=t}Oc.prototype.render=Ah.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(xe(409));Uc(t,e,null,null)};Oc.prototype.unmount=Ah.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){Uc(null,t,null,null)}),e[Pi]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=u_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ki.length&&e!==0&&e<Ki[n].priority;n++);Ki.splice(n,0,t),n===0&&f_(t)}};function bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gm(){}function pM(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=uc(s);o.call(c)}}var s=D0(e,i,t,0,null,!1,!1,"",gm);return t._reactRootContainer=s,t[Pi]=s.current,aa(t.nodeType===8?t.parentNode:t),Yr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=uc(l);a.call(c)}}var l=wh(t,0,!1,null,null,!1,!1,"",gm);return t._reactRootContainer=l,t[Pi]=l.current,aa(t.nodeType===8?t.parentNode:t),Yr(function(){Uc(e,l,n,i)}),l}function kc(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=uc(s);a.call(l)}}Uc(e,s,t,r)}else s=pM(n,e,t,r,i);return uc(s)}l_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zs(e.pendingLanes);n!==0&&(Xf(e,n|1),cn(e,yt()),!(tt&6)&&(is=yt()+500,yr()))}break;case 13:Yr(function(){var i=Li(t,1);if(i!==null){var r=en();qn(i,t,1,r)}}),Th(t,1)}};Yf=function(t){if(t.tag===13){var e=Li(t,134217728);if(e!==null){var n=en();qn(e,t,134217728,n)}Th(t,134217728)}};c_=function(t){if(t.tag===13){var e=lr(t),n=Li(t,e);if(n!==null){var i=en();qn(n,t,e,i)}Th(t,e)}};u_=function(){return nt};d_=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};Dd=function(t,e,n){switch(e){case"input":if(Td(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Cc(i);if(!r)throw Error(xe(90));Vv(i),Td(i,r)}}}break;case"textarea":Wv(t,n);break;case"select":e=n.value,e!=null&&Bo(t,!!n.multiple,e,!1)}};Zv=yh;Qv=Yr;var mM={usingClientEntryPoint:!1,Events:[wa,Do,Cc,qv,Kv,yh]},Cs={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gM={bundleType:Cs.bundleType,version:Cs.version,rendererPackageName:Cs.rendererPackageName,rendererConfig:Cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=t_(t),t===null?null:t.stateNode},findFiberByHostInstance:Cs.findFiberByHostInstance||hM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{wc=$a.inject(gM),si=$a}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mM;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bh(e))throw Error(xe(200));return fM(t,e,null,n)};Mn.createRoot=function(t,e){if(!bh(t))throw Error(xe(299));var n=!1,i="",r=N0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=wh(t,1,!1,null,null,n,!1,i,r),t[Pi]=e.current,aa(t.nodeType===8?t.parentNode:t),new Ah(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(xe(188)):(t=Object.keys(t).join(","),Error(xe(268,t)));return t=t_(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return Yr(t)};Mn.hydrate=function(t,e,n){if(!Fc(e))throw Error(xe(200));return kc(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!bh(t))throw Error(xe(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=N0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=D0(e,null,t,1,n??null,r,!1,o,s),t[Pi]=e.current,aa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Oc(e)};Mn.render=function(t,e,n){if(!Fc(e))throw Error(xe(200));return kc(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!Fc(t))throw Error(xe(40));return t._reactRootContainer?(Yr(function(){kc(null,null,t,!1,function(){t._reactRootContainer=null,t[Pi]=null})}),!0):!1};Mn.unstable_batchedUpdates=yh;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Fc(n))throw Error(xe(200));if(t==null||t._reactInternals===void 0)throw Error(xe(38));return kc(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function I0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I0)}catch(t){console.error(t)}}I0(),Iv.exports=Mn;var hs=Iv.exports;const vM=Sv(hs);var vm=hs;_d.createRoot=vm.createRoot,_d.hydrateRoot=vm.hydrateRoot;const Ch=R.forwardRef(({className:t,...e},n)=>I.jsx("div",{ref:n,className:`rounded-lg border bg-card text-card-foreground shadow-sm ${t}`,...e}));Ch.displayName="Card";const Rh=R.forwardRef(({className:t,...e},n)=>I.jsx("div",{ref:n,className:`flex flex-col space-y-1.5 p-6 ${t}`,...e}));Rh.displayName="CardHeader";const Ph=R.forwardRef(({className:t,...e},n)=>I.jsx("h3",{ref:n,className:`text-2xl font-semibold leading-none tracking-tight ${t}`,...e}));Ph.displayName="CardTitle";const Lh=R.forwardRef(({className:t,...e},n)=>I.jsx("div",{ref:n,className:`p-6 pt-0 ${t}`,...e}));Lh.displayName="CardContent";function _m(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function U0(...t){return e=>{let n=!1;const i=t.map(r=>{const o=_m(r,e);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let r=0;r<i.length;r++){const o=i[r];typeof o=="function"?o():_m(t[r],null)}}}}function zt(...t){return R.useCallback(U0(...t),t)}function ga(t){const e=xM(t),n=R.forwardRef((i,r)=>{const{children:o,...s}=i,a=R.Children.toArray(o),l=a.find(SM);if(l){const c=l.props.children,d=a.map(f=>f===l?R.Children.count(c)>1?R.Children.only(null):R.isValidElement(c)?c.props.children:null:f);return I.jsx(e,{...s,ref:r,children:R.isValidElement(c)?R.cloneElement(c,void 0,d):null})}return I.jsx(e,{...s,ref:r,children:o})});return n.displayName=`${t}.Slot`,n}var _M=ga("Slot");function xM(t){const e=R.forwardRef((n,i)=>{const{children:r,...o}=n;if(R.isValidElement(r)){const s=MM(r),a=EM(o,r.props);return r.type!==R.Fragment&&(a.ref=i?U0(i,s):s),R.cloneElement(r,a)}return R.Children.count(r)>1?R.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var yM=Symbol("radix.slottable");function SM(t){return R.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===yM}function EM(t,e){const n={...e};for(const i in e){const r=t[i],o=e[i];/^on[A-Z]/.test(i)?r&&o?n[i]=(...a)=>{const l=o(...a);return r(...a),l}:r&&(n[i]=r):i==="style"?n[i]={...r,...o}:i==="className"&&(n[i]=[r,o].filter(Boolean).join(" "))}return{...t,...n}}function MM(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function O0(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=O0(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function F0(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=O0(t))&&(i&&(i+=" "),i+=e);return i}const xm=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,ym=F0,wM=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return ym(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:o}=e,s=Object.keys(r).map(c=>{const d=n==null?void 0:n[c],f=o==null?void 0:o[c];if(d===null)return null;const h=xm(d)||xm(f);return r[c][h]}),a=n&&Object.entries(n).reduce((c,d)=>{let[f,h]=d;return h===void 0||(c[f]=h),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,d)=>{let{class:f,className:h,...g}=d;return Object.entries(g).every(x=>{let[m,p]=x;return Array.isArray(p)?p.includes({...o,...a}[m]):{...o,...a}[m]===p})?[...c,f,h]:c},[]);return ym(t,s,l,n==null?void 0:n.class,n==null?void 0:n.className)},Dh="-",TM=t=>{const e=bM(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:s=>{const a=s.split(Dh);return a[0]===""&&a.length!==1&&a.shift(),k0(a,e)||AM(s)},getConflictingClassGroupIds:(s,a)=>{const l=n[s]||[];return a&&i[s]?[...l,...i[s]]:l}}},k0=(t,e)=>{var s;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?k0(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const o=t.join(Dh);return(s=e.validators.find(({validator:a})=>a(o)))==null?void 0:s.classGroupId},Sm=/^\[(.+)\]$/,AM=t=>{if(Sm.test(t)){const e=Sm.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},bM=t=>{const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return RM(Object.entries(t.classGroups),n).forEach(([o,s])=>{ff(s,i,o,e)}),i},ff=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const o=r===""?e:Em(e,r);o.classGroupId=n;return}if(typeof r=="function"){if(CM(r)){ff(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([o,s])=>{ff(s,Em(e,o),n,i)})})},Em=(t,e)=>{let n=t;return e.split(Dh).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},CM=t=>t.isThemeGetter,RM=(t,e)=>e?t.map(([n,i])=>{const r=i.map(o=>typeof o=="string"?e+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,a])=>[e+s,a])):o);return[n,r]}):t,PM=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(o,s)=>{n.set(o,s),e++,e>t&&(e=0,i=n,n=new Map)};return{get(o){let s=n.get(o);if(s!==void 0)return s;if((s=i.get(o))!==void 0)return r(o,s),s},set(o,s){n.has(o)?n.set(o,s):r(o,s)}}},z0="!",LM=t=>{const{separator:e,experimentalParseClassName:n}=t,i=e.length===1,r=e[0],o=e.length,s=a=>{const l=[];let c=0,d=0,f;for(let p=0;p<a.length;p++){let u=a[p];if(c===0){if(u===r&&(i||a.slice(p,p+o)===e)){l.push(a.slice(d,p)),d=p+o;continue}if(u==="/"){f=p;continue}}u==="["?c++:u==="]"&&c--}const h=l.length===0?a:a.substring(d),g=h.startsWith(z0),x=g?h.substring(1):h,m=f&&f>d?f-d:void 0;return{modifiers:l,hasImportantModifier:g,baseClassName:x,maybePostfixModifierPosition:m}};return n?a=>n({className:a,parseClassName:s}):s},DM=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e},NM=t=>({cache:PM(t.cacheSize),parseClassName:LM(t),...TM(t)}),IM=/\s+/,UM=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,o=[],s=t.trim().split(IM);let a="";for(let l=s.length-1;l>=0;l-=1){const c=s[l],{modifiers:d,hasImportantModifier:f,baseClassName:h,maybePostfixModifierPosition:g}=n(c);let x=!!g,m=i(x?h.substring(0,g):h);if(!m){if(!x){a=c+(a.length>0?" "+a:a);continue}if(m=i(h),!m){a=c+(a.length>0?" "+a:a);continue}x=!1}const p=DM(d).join(":"),u=f?p+z0:p,v=u+m;if(o.includes(v))continue;o.push(v);const _=r(m,x);for(let y=0;y<_.length;++y){const S=_[y];o.push(u+S)}a=c+(a.length>0?" "+a:a)}return a};function OM(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=B0(e))&&(i&&(i+=" "),i+=n);return i}const B0=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=B0(t[i]))&&(n&&(n+=" "),n+=e);return n};function FM(t,...e){let n,i,r,o=s;function s(l){const c=e.reduce((d,f)=>f(d),t());return n=NM(c),i=n.cache.get,r=n.cache.set,o=a,a(l)}function a(l){const c=i(l);if(c)return c;const d=UM(l,n);return r(l,d),d}return function(){return o(OM.apply(null,arguments))}}const st=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},H0=/^\[(?:([a-z-]+):)?(.+)\]$/i,kM=/^\d+\/\d+$/,zM=new Set(["px","full","screen"]),BM=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,HM=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,VM=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,GM=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,WM=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,pi=t=>Xo(t)||zM.has(t)||kM.test(t),zi=t=>ps(t,"length",QM),Xo=t=>!!t&&!Number.isNaN(Number(t)),Ru=t=>ps(t,"number",Xo),Rs=t=>!!t&&Number.isInteger(Number(t)),jM=t=>t.endsWith("%")&&Xo(t.slice(0,-1)),je=t=>H0.test(t),Bi=t=>BM.test(t),XM=new Set(["length","size","percentage"]),YM=t=>ps(t,XM,V0),$M=t=>ps(t,"position",V0),qM=new Set(["image","url"]),KM=t=>ps(t,qM,ew),ZM=t=>ps(t,"",JM),Ps=()=>!0,ps=(t,e,n)=>{const i=H0.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1},QM=t=>HM.test(t)&&!VM.test(t),V0=()=>!1,JM=t=>GM.test(t),ew=t=>WM.test(t),tw=()=>{const t=st("colors"),e=st("spacing"),n=st("blur"),i=st("brightness"),r=st("borderColor"),o=st("borderRadius"),s=st("borderSpacing"),a=st("borderWidth"),l=st("contrast"),c=st("grayscale"),d=st("hueRotate"),f=st("invert"),h=st("gap"),g=st("gradientColorStops"),x=st("gradientColorStopPositions"),m=st("inset"),p=st("margin"),u=st("opacity"),v=st("padding"),_=st("saturate"),y=st("scale"),S=st("sepia"),A=st("skew"),w=st("space"),N=st("translate"),E=()=>["auto","contain","none"],b=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto",je,e],H=()=>[je,e],Z=()=>["",pi,zi],P=()=>["auto",Xo,je],G=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Y=()=>["solid","dashed","dotted","double","none"],j=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],U=()=>["start","end","center","between","around","evenly","stretch"],z=()=>["","0",je],W=()=>["auto","avoid","all","avoid-page","page","left","right","column"],le=()=>[Xo,je];return{cacheSize:500,separator:":",theme:{colors:[Ps],spacing:[pi,zi],blur:["none","",Bi,je],brightness:le(),borderColor:[t],borderRadius:["none","","full",Bi,je],borderSpacing:H(),borderWidth:Z(),contrast:le(),grayscale:z(),hueRotate:le(),invert:z(),gap:H(),gradientColorStops:[t],gradientColorStopPositions:[jM,zi],inset:V(),margin:V(),opacity:le(),padding:H(),saturate:le(),scale:le(),sepia:z(),skew:le(),space:H(),translate:H()},classGroups:{aspect:[{aspect:["auto","square","video",je]}],container:["container"],columns:[{columns:[Bi]}],"break-after":[{"break-after":W()}],"break-before":[{"break-before":W()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...G(),je]}],overflow:[{overflow:b()}],"overflow-x":[{"overflow-x":b()}],"overflow-y":[{"overflow-y":b()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Rs,je]}],basis:[{basis:V()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",je]}],grow:[{grow:z()}],shrink:[{shrink:z()}],order:[{order:["first","last","none",Rs,je]}],"grid-cols":[{"grid-cols":[Ps]}],"col-start-end":[{col:["auto",{span:["full",Rs,je]},je]}],"col-start":[{"col-start":P()}],"col-end":[{"col-end":P()}],"grid-rows":[{"grid-rows":[Ps]}],"row-start-end":[{row:["auto",{span:[Rs,je]},je]}],"row-start":[{"row-start":P()}],"row-end":[{"row-end":P()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",je]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",je]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...U()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...U(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...U(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[w]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[w]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",je,e]}],"min-w":[{"min-w":[je,e,"min","max","fit"]}],"max-w":[{"max-w":[je,e,"none","full","min","max","fit","prose",{screen:[Bi]},Bi]}],h:[{h:[je,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[je,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[je,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[je,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Bi,zi]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ru]}],"font-family":[{font:[Ps]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",je]}],"line-clamp":[{"line-clamp":["none",Xo,Ru]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",pi,je]}],"list-image":[{"list-image":["none",je]}],"list-style-type":[{list:["none","disc","decimal",je]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[u]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[u]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Y(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",pi,zi]}],"underline-offset":[{"underline-offset":["auto",pi,je]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:H()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",je]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",je]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[u]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...G(),$M]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",YM]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},KM]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[g]}],"gradient-via":[{via:[g]}],"gradient-to":[{to:[g]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[u]}],"border-style":[{border:[...Y(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[u]}],"divide-style":[{divide:Y()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...Y()]}],"outline-offset":[{"outline-offset":[pi,je]}],"outline-w":[{outline:[pi,zi]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:Z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[u]}],"ring-offset-w":[{"ring-offset":[pi,zi]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",Bi,ZM]}],"shadow-color":[{shadow:[Ps]}],opacity:[{opacity:[u]}],"mix-blend":[{"mix-blend":[...j(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":j()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Bi,je]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[f]}],saturate:[{saturate:[_]}],sepia:[{sepia:[S]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[u]}],"backdrop-saturate":[{"backdrop-saturate":[_]}],"backdrop-sepia":[{"backdrop-sepia":[S]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",je]}],duration:[{duration:le()}],ease:[{ease:["linear","in","out","in-out",je]}],delay:[{delay:le()}],animate:[{animate:["none","spin","ping","pulse","bounce",je]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[y]}],"scale-x":[{"scale-x":[y]}],"scale-y":[{"scale-y":[y]}],rotate:[{rotate:[Rs,je]}],"translate-x":[{"translate-x":[N]}],"translate-y":[{"translate-y":[N]}],"skew-x":[{"skew-x":[A]}],"skew-y":[{"skew-y":[A]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",je]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",je]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":H()}],"scroll-mx":[{"scroll-mx":H()}],"scroll-my":[{"scroll-my":H()}],"scroll-ms":[{"scroll-ms":H()}],"scroll-me":[{"scroll-me":H()}],"scroll-mt":[{"scroll-mt":H()}],"scroll-mr":[{"scroll-mr":H()}],"scroll-mb":[{"scroll-mb":H()}],"scroll-ml":[{"scroll-ml":H()}],"scroll-p":[{"scroll-p":H()}],"scroll-px":[{"scroll-px":H()}],"scroll-py":[{"scroll-py":H()}],"scroll-ps":[{"scroll-ps":H()}],"scroll-pe":[{"scroll-pe":H()}],"scroll-pt":[{"scroll-pt":H()}],"scroll-pr":[{"scroll-pr":H()}],"scroll-pb":[{"scroll-pb":H()}],"scroll-pl":[{"scroll-pl":H()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",je]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[pi,zi,Ru]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},nw=FM(tw);function $r(...t){return nw(F0(t))}const iw=wM("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Ai=R.forwardRef(({className:t,variant:e,size:n,asChild:i=!1,...r},o)=>{const s=i?_M:"button";return I.jsx(s,{className:$r(iw({variant:e,size:n,className:t})),ref:o,...r})});Ai.displayName="Button";function Mm(t,[e,n]){return Math.min(n,Math.max(e,t))}function wt(t,e,{checkForDefaultPrevented:n=!0}={}){return function(r){if(t==null||t(r),n===!1||!r.defaultPrevented)return e==null?void 0:e(r)}}function Nh(t,e=[]){let n=[];function i(o,s){const a=R.createContext(s),l=n.length;n=[...n,s];const c=f=>{var u;const{scope:h,children:g,...x}=f,m=((u=h==null?void 0:h[t])==null?void 0:u[l])||a,p=R.useMemo(()=>x,Object.values(x));return I.jsx(m.Provider,{value:p,children:g})};c.displayName=o+"Provider";function d(f,h){var m;const g=((m=h==null?void 0:h[t])==null?void 0:m[l])||a,x=R.useContext(g);if(x)return x;if(s!==void 0)return s;throw new Error(`\`${f}\` must be used within \`${o}\``)}return[c,d]}const r=()=>{const o=n.map(s=>R.createContext(s));return function(a){const l=(a==null?void 0:a[t])||o;return R.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,rw(r,...e)]}function rw(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(o){const s=i.reduce((a,{useScope:l,scopeName:c})=>{const f=l(o)[`__scope${c}`];return{...a,...f}},{});return R.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return n.scopeName=e.scopeName,n}function ow(t){const e=t+"CollectionProvider",[n,i]=Nh(e),[r,o]=n(e,{collectionRef:{current:null},itemMap:new Map}),s=m=>{const{scope:p,children:u}=m,v=Si.useRef(null),_=Si.useRef(new Map).current;return I.jsx(r,{scope:p,itemMap:_,collectionRef:v,children:u})};s.displayName=e;const a=t+"CollectionSlot",l=ga(a),c=Si.forwardRef((m,p)=>{const{scope:u,children:v}=m,_=o(a,u),y=zt(p,_.collectionRef);return I.jsx(l,{ref:y,children:v})});c.displayName=a;const d=t+"CollectionItemSlot",f="data-radix-collection-item",h=ga(d),g=Si.forwardRef((m,p)=>{const{scope:u,children:v,..._}=m,y=Si.useRef(null),S=zt(p,y),A=o(d,u);return Si.useEffect(()=>(A.itemMap.set(y,{ref:y,..._}),()=>void A.itemMap.delete(y))),I.jsx(h,{[f]:"",ref:S,children:v})});g.displayName=d;function x(m){const p=o(t+"CollectionConsumer",m);return Si.useCallback(()=>{const v=p.collectionRef.current;if(!v)return[];const _=Array.from(v.querySelectorAll(`[${f}]`));return Array.from(p.itemMap.values()).sort((A,w)=>_.indexOf(A.ref.current)-_.indexOf(w.ref.current))},[p.collectionRef,p.itemMap])}return[{Provider:s,Slot:c,ItemSlot:g},x,i]}var sw=R.createContext(void 0);function aw(t){const e=R.useContext(sw);return t||e||"ltr"}var lw=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],St=lw.reduce((t,e)=>{const n=ga(`Primitive.${e}`),i=R.forwardRef((r,o)=>{const{asChild:s,...a}=r,l=s?n:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),I.jsx(l,{...a,ref:o})});return i.displayName=`Primitive.${e}`,{...t,[e]:i}},{});function cw(t,e){t&&hs.flushSync(()=>t.dispatchEvent(e))}function qr(t){const e=R.useRef(t);return R.useEffect(()=>{e.current=t}),R.useMemo(()=>(...n)=>{var i;return(i=e.current)==null?void 0:i.call(e,...n)},[])}function uw(t,e=globalThis==null?void 0:globalThis.document){const n=qr(t);R.useEffect(()=>{const i=r=>{r.key==="Escape"&&n(r)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[n,e])}var dw="DismissableLayer",hf="dismissableLayer.update",fw="dismissableLayer.pointerDownOutside",hw="dismissableLayer.focusOutside",wm,G0=R.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),W0=R.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:o,onInteractOutside:s,onDismiss:a,...l}=t,c=R.useContext(G0),[d,f]=R.useState(null),h=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,g]=R.useState({}),x=zt(e,w=>f(w)),m=Array.from(c.layers),[p]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),u=m.indexOf(p),v=d?m.indexOf(d):-1,_=c.layersWithOutsidePointerEventsDisabled.size>0,y=v>=u,S=gw(w=>{const N=w.target,E=[...c.branches].some(b=>b.contains(N));!y||E||(r==null||r(w),s==null||s(w),w.defaultPrevented||a==null||a())},h),A=vw(w=>{const N=w.target;[...c.branches].some(b=>b.contains(N))||(o==null||o(w),s==null||s(w),w.defaultPrevented||a==null||a())},h);return uw(w=>{v===c.layers.size-1&&(i==null||i(w),!w.defaultPrevented&&a&&(w.preventDefault(),a()))},h),R.useEffect(()=>{if(d)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(wm=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(d)),c.layers.add(d),Tm(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=wm)}},[d,h,n,c]),R.useEffect(()=>()=>{d&&(c.layers.delete(d),c.layersWithOutsidePointerEventsDisabled.delete(d),Tm())},[d,c]),R.useEffect(()=>{const w=()=>g({});return document.addEventListener(hf,w),()=>document.removeEventListener(hf,w)},[]),I.jsx(St.div,{...l,ref:x,style:{pointerEvents:_?y?"auto":"none":void 0,...t.style},onFocusCapture:wt(t.onFocusCapture,A.onFocusCapture),onBlurCapture:wt(t.onBlurCapture,A.onBlurCapture),onPointerDownCapture:wt(t.onPointerDownCapture,S.onPointerDownCapture)})});W0.displayName=dw;var pw="DismissableLayerBranch",mw=R.forwardRef((t,e)=>{const n=R.useContext(G0),i=R.useRef(null),r=zt(e,i);return R.useEffect(()=>{const o=i.current;if(o)return n.branches.add(o),()=>{n.branches.delete(o)}},[n.branches]),I.jsx(St.div,{...t,ref:r})});mw.displayName=pw;function gw(t,e=globalThis==null?void 0:globalThis.document){const n=qr(t),i=R.useRef(!1),r=R.useRef(()=>{});return R.useEffect(()=>{const o=a=>{if(a.target&&!i.current){let l=function(){j0(fw,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=l,e.addEventListener("click",r.current,{once:!0})):l()}else e.removeEventListener("click",r.current);i.current=!1},s=window.setTimeout(()=>{e.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),e.removeEventListener("pointerdown",o),e.removeEventListener("click",r.current)}},[e,n]),{onPointerDownCapture:()=>i.current=!0}}function vw(t,e=globalThis==null?void 0:globalThis.document){const n=qr(t),i=R.useRef(!1);return R.useEffect(()=>{const r=o=>{o.target&&!i.current&&j0(hw,n,{originalEvent:o},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function Tm(){const t=new CustomEvent(hf);document.dispatchEvent(t)}function j0(t,e,n,{discrete:i}){const r=n.originalEvent.target,o=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?cw(r,o):r.dispatchEvent(o)}var Pu=0;function _w(){R.useEffect(()=>{const t=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",t[0]??Am()),document.body.insertAdjacentElement("beforeend",t[1]??Am()),Pu++,()=>{Pu===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),Pu--}},[])}function Am(){const t=document.createElement("span");return t.setAttribute("data-radix-focus-guard",""),t.tabIndex=0,t.style.outline="none",t.style.opacity="0",t.style.position="fixed",t.style.pointerEvents="none",t}var Lu="focusScope.autoFocusOnMount",Du="focusScope.autoFocusOnUnmount",bm={bubbles:!1,cancelable:!0},xw="FocusScope",X0=R.forwardRef((t,e)=>{const{loop:n=!1,trapped:i=!1,onMountAutoFocus:r,onUnmountAutoFocus:o,...s}=t,[a,l]=R.useState(null),c=qr(r),d=qr(o),f=R.useRef(null),h=zt(e,m=>l(m)),g=R.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;R.useEffect(()=>{if(i){let m=function(_){if(g.paused||!a)return;const y=_.target;a.contains(y)?f.current=y:Xi(f.current,{select:!0})},p=function(_){if(g.paused||!a)return;const y=_.relatedTarget;y!==null&&(a.contains(y)||Xi(f.current,{select:!0}))},u=function(_){if(document.activeElement===document.body)for(const S of _)S.removedNodes.length>0&&Xi(a)};document.addEventListener("focusin",m),document.addEventListener("focusout",p);const v=new MutationObserver(u);return a&&v.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",m),document.removeEventListener("focusout",p),v.disconnect()}}},[i,a,g.paused]),R.useEffect(()=>{if(a){Rm.add(g);const m=document.activeElement;if(!a.contains(m)){const u=new CustomEvent(Lu,bm);a.addEventListener(Lu,c),a.dispatchEvent(u),u.defaultPrevented||(yw(Tw(Y0(a)),{select:!0}),document.activeElement===m&&Xi(a))}return()=>{a.removeEventListener(Lu,c),setTimeout(()=>{const u=new CustomEvent(Du,bm);a.addEventListener(Du,d),a.dispatchEvent(u),u.defaultPrevented||Xi(m??document.body,{select:!0}),a.removeEventListener(Du,d),Rm.remove(g)},0)}}},[a,c,d,g]);const x=R.useCallback(m=>{if(!n&&!i||g.paused)return;const p=m.key==="Tab"&&!m.altKey&&!m.ctrlKey&&!m.metaKey,u=document.activeElement;if(p&&u){const v=m.currentTarget,[_,y]=Sw(v);_&&y?!m.shiftKey&&u===y?(m.preventDefault(),n&&Xi(_,{select:!0})):m.shiftKey&&u===_&&(m.preventDefault(),n&&Xi(y,{select:!0})):u===v&&m.preventDefault()}},[n,i,g.paused]);return I.jsx(St.div,{tabIndex:-1,...s,ref:h,onKeyDown:x})});X0.displayName=xw;function yw(t,{select:e=!1}={}){const n=document.activeElement;for(const i of t)if(Xi(i,{select:e}),document.activeElement!==n)return}function Sw(t){const e=Y0(t),n=Cm(e,t),i=Cm(e.reverse(),t);return[n,i]}function Y0(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function Cm(t,e){for(const n of t)if(!Ew(n,{upTo:e}))return n}function Ew(t,{upTo:e}){if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(e!==void 0&&t===e)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}function Mw(t){return t instanceof HTMLInputElement&&"select"in t}function Xi(t,{select:e=!1}={}){if(t&&t.focus){const n=document.activeElement;t.focus({preventScroll:!0}),t!==n&&Mw(t)&&e&&t.select()}}var Rm=ww();function ww(){let t=[];return{add(e){const n=t[0];e!==n&&(n==null||n.pause()),t=Pm(t,e),t.unshift(e)},remove(e){var n;t=Pm(t,e),(n=t[0])==null||n.resume()}}}function Pm(t,e){const n=[...t],i=n.indexOf(e);return i!==-1&&n.splice(i,1),n}function Tw(t){return t.filter(e=>e.tagName!=="A")}var dn=globalThis!=null&&globalThis.document?R.useLayoutEffect:()=>{},Aw=Dv[" useId ".trim().toString()]||(()=>{}),bw=0;function Ih(t){const[e,n]=R.useState(Aw());return dn(()=>{n(i=>i??String(bw++))},[t]),e?`radix-${e}`:""}const Cw=["top","right","bottom","left"],mr=Math.min,gn=Math.max,dc=Math.round,qa=Math.floor,li=t=>({x:t,y:t}),Rw={left:"right",right:"left",bottom:"top",top:"bottom"},Pw={start:"end",end:"start"};function pf(t,e,n){return gn(t,mr(e,n))}function Ni(t,e){return typeof t=="function"?t(e):t}function Ii(t){return t.split("-")[0]}function ms(t){return t.split("-")[1]}function Uh(t){return t==="x"?"y":"x"}function Oh(t){return t==="y"?"height":"width"}const Lw=new Set(["top","bottom"]);function oi(t){return Lw.has(Ii(t))?"y":"x"}function Fh(t){return Uh(oi(t))}function Dw(t,e,n){n===void 0&&(n=!1);const i=ms(t),r=Fh(t),o=Oh(r);let s=r==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(s=fc(s)),[s,fc(s)]}function Nw(t){const e=fc(t);return[mf(t),e,mf(e)]}function mf(t){return t.replace(/start|end/g,e=>Pw[e])}const Lm=["left","right"],Dm=["right","left"],Iw=["top","bottom"],Uw=["bottom","top"];function Ow(t,e,n){switch(t){case"top":case"bottom":return n?e?Dm:Lm:e?Lm:Dm;case"left":case"right":return e?Iw:Uw;default:return[]}}function Fw(t,e,n,i){const r=ms(t);let o=Ow(Ii(t),n==="start",i);return r&&(o=o.map(s=>s+"-"+r),e&&(o=o.concat(o.map(mf)))),o}function fc(t){return t.replace(/left|right|bottom|top/g,e=>Rw[e])}function kw(t){return{top:0,right:0,bottom:0,left:0,...t}}function $0(t){return typeof t!="number"?kw(t):{top:t,right:t,bottom:t,left:t}}function hc(t){const{x:e,y:n,width:i,height:r}=t;return{width:i,height:r,top:n,left:e,right:e+i,bottom:n+r,x:e,y:n}}function Nm(t,e,n){let{reference:i,floating:r}=t;const o=oi(e),s=Fh(e),a=Oh(s),l=Ii(e),c=o==="y",d=i.x+i.width/2-r.width/2,f=i.y+i.height/2-r.height/2,h=i[a]/2-r[a]/2;let g;switch(l){case"top":g={x:d,y:i.y-r.height};break;case"bottom":g={x:d,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:f};break;case"left":g={x:i.x-r.width,y:f};break;default:g={x:i.x,y:i.y}}switch(ms(e)){case"start":g[s]-=h*(n&&c?-1:1);break;case"end":g[s]+=h*(n&&c?-1:1);break}return g}const zw=async(t,e,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:s}=n,a=o.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:f}=Nm(c,i,l),h=i,g={},x=0;for(let m=0;m<a.length;m++){const{name:p,fn:u}=a[m],{x:v,y:_,data:y,reset:S}=await u({x:d,y:f,initialPlacement:i,placement:h,strategy:r,middlewareData:g,rects:c,platform:s,elements:{reference:t,floating:e}});d=v??d,f=_??f,g={...g,[p]:{...g[p],...y}},S&&x<=50&&(x++,typeof S=="object"&&(S.placement&&(h=S.placement),S.rects&&(c=S.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):S.rects),{x:d,y:f}=Nm(c,h,l)),m=-1)}return{x:d,y:f,placement:h,strategy:r,middlewareData:g}};async function va(t,e){var n;e===void 0&&(e={});const{x:i,y:r,platform:o,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:h=!1,padding:g=0}=Ni(e,t),x=$0(g),p=a[h?f==="floating"?"reference":"floating":f],u=hc(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(p)))==null||n?p:p.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),v=f==="floating"?{x:i,y:r,width:s.floating.width,height:s.floating.height}:s.reference,_=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),y=await(o.isElement==null?void 0:o.isElement(_))?await(o.getScale==null?void 0:o.getScale(_))||{x:1,y:1}:{x:1,y:1},S=hc(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:_,strategy:l}):v);return{top:(u.top-S.top+x.top)/y.y,bottom:(S.bottom-u.bottom+x.bottom)/y.y,left:(u.left-S.left+x.left)/y.x,right:(S.right-u.right+x.right)/y.x}}const Bw=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:o,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:d=0}=Ni(t,e)||{};if(c==null)return{};const f=$0(d),h={x:n,y:i},g=Fh(r),x=Oh(g),m=await s.getDimensions(c),p=g==="y",u=p?"top":"left",v=p?"bottom":"right",_=p?"clientHeight":"clientWidth",y=o.reference[x]+o.reference[g]-h[g]-o.floating[x],S=h[g]-o.reference[g],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let w=A?A[_]:0;(!w||!await(s.isElement==null?void 0:s.isElement(A)))&&(w=a.floating[_]||o.floating[x]);const N=y/2-S/2,E=w/2-m[x]/2-1,b=mr(f[u],E),V=mr(f[v],E),H=b,Z=w-m[x]-V,P=w/2-m[x]/2+N,G=pf(H,P,Z),Y=!l.arrow&&ms(r)!=null&&P!==G&&o.reference[x]/2-(P<H?b:V)-m[x]/2<0,j=Y?P<H?P-H:P-Z:0;return{[g]:h[g]+j,data:{[g]:G,centerOffset:P-G-j,...Y&&{alignmentOffset:j}},reset:Y}}}),Hw=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,i;const{placement:r,middlewareData:o,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:h,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:m=!0,...p}=Ni(t,e);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const u=Ii(r),v=oi(a),_=Ii(a)===a,y=await(l.isRTL==null?void 0:l.isRTL(c.floating)),S=h||(_||!m?[fc(a)]:Nw(a)),A=x!=="none";!h&&A&&S.push(...Fw(a,m,x,y));const w=[a,...S],N=await va(e,p),E=[];let b=((i=o.flip)==null?void 0:i.overflows)||[];if(d&&E.push(N[u]),f){const P=Dw(r,s,y);E.push(N[P[0]],N[P[1]])}if(b=[...b,{placement:r,overflows:E}],!E.every(P=>P<=0)){var V,H;const P=(((V=o.flip)==null?void 0:V.index)||0)+1,G=w[P];if(G&&(!(f==="alignment"?v!==oi(G):!1)||b.every(U=>U.overflows[0]>0&&oi(U.placement)===v)))return{data:{index:P,overflows:b},reset:{placement:G}};let Y=(H=b.filter(j=>j.overflows[0]<=0).sort((j,U)=>j.overflows[1]-U.overflows[1])[0])==null?void 0:H.placement;if(!Y)switch(g){case"bestFit":{var Z;const j=(Z=b.filter(U=>{if(A){const z=oi(U.placement);return z===v||z==="y"}return!0}).map(U=>[U.placement,U.overflows.filter(z=>z>0).reduce((z,W)=>z+W,0)]).sort((U,z)=>U[1]-z[1])[0])==null?void 0:Z[0];j&&(Y=j);break}case"initialPlacement":Y=a;break}if(r!==Y)return{reset:{placement:Y}}}return{}}}};function Im(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Um(t){return Cw.some(e=>t[e]>=0)}const Vw=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:i="referenceHidden",...r}=Ni(t,e);switch(i){case"referenceHidden":{const o=await va(e,{...r,elementContext:"reference"}),s=Im(o,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Um(s)}}}case"escaped":{const o=await va(e,{...r,altBoundary:!0}),s=Im(o,n.floating);return{data:{escapedOffsets:s,escaped:Um(s)}}}default:return{}}}}},q0=new Set(["left","top"]);async function Gw(t,e){const{placement:n,platform:i,elements:r}=t,o=await(i.isRTL==null?void 0:i.isRTL(r.floating)),s=Ii(n),a=ms(n),l=oi(n)==="y",c=q0.has(s)?-1:1,d=o&&l?-1:1,f=Ni(e,t);let{mainAxis:h,crossAxis:g,alignmentAxis:x}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return a&&typeof x=="number"&&(g=a==="end"?x*-1:x),l?{x:g*d,y:h*c}:{x:h*c,y:g*d}}const Ww=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:r,y:o,placement:s,middlewareData:a}=e,l=await Gw(e,t);return s===((n=a.offset)==null?void 0:n.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:o+l.y,data:{...l,placement:s}}}}},jw=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:r}=e,{mainAxis:o=!0,crossAxis:s=!1,limiter:a={fn:p=>{let{x:u,y:v}=p;return{x:u,y:v}}},...l}=Ni(t,e),c={x:n,y:i},d=await va(e,l),f=oi(Ii(r)),h=Uh(f);let g=c[h],x=c[f];if(o){const p=h==="y"?"top":"left",u=h==="y"?"bottom":"right",v=g+d[p],_=g-d[u];g=pf(v,g,_)}if(s){const p=f==="y"?"top":"left",u=f==="y"?"bottom":"right",v=x+d[p],_=x-d[u];x=pf(v,x,_)}const m=a.fn({...e,[h]:g,[f]:x});return{...m,data:{x:m.x-n,y:m.y-i,enabled:{[h]:o,[f]:s}}}}}},Xw=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:i,placement:r,rects:o,middlewareData:s}=e,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=Ni(t,e),d={x:n,y:i},f=oi(r),h=Uh(f);let g=d[h],x=d[f];const m=Ni(a,e),p=typeof m=="number"?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(l){const _=h==="y"?"height":"width",y=o.reference[h]-o.floating[_]+p.mainAxis,S=o.reference[h]+o.reference[_]-p.mainAxis;g<y?g=y:g>S&&(g=S)}if(c){var u,v;const _=h==="y"?"width":"height",y=q0.has(Ii(r)),S=o.reference[f]-o.floating[_]+(y&&((u=s.offset)==null?void 0:u[f])||0)+(y?0:p.crossAxis),A=o.reference[f]+o.reference[_]+(y?0:((v=s.offset)==null?void 0:v[f])||0)-(y?p.crossAxis:0);x<S?x=S:x>A&&(x=A)}return{[h]:g,[f]:x}}}},Yw=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,i;const{placement:r,rects:o,platform:s,elements:a}=e,{apply:l=()=>{},...c}=Ni(t,e),d=await va(e,c),f=Ii(r),h=ms(r),g=oi(r)==="y",{width:x,height:m}=o.floating;let p,u;f==="top"||f==="bottom"?(p=f,u=h===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(u=f,p=h==="end"?"top":"bottom");const v=m-d.top-d.bottom,_=x-d.left-d.right,y=mr(m-d[p],v),S=mr(x-d[u],_),A=!e.middlewareData.shift;let w=y,N=S;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(N=_),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(w=v),A&&!h){const b=gn(d.left,0),V=gn(d.right,0),H=gn(d.top,0),Z=gn(d.bottom,0);g?N=x-2*(b!==0||V!==0?b+V:gn(d.left,d.right)):w=m-2*(H!==0||Z!==0?H+Z:gn(d.top,d.bottom))}await l({...e,availableWidth:N,availableHeight:w});const E=await s.getDimensions(a.floating);return x!==E.width||m!==E.height?{reset:{rects:!0}}:{}}}};function zc(){return typeof window<"u"}function gs(t){return K0(t)?(t.nodeName||"").toLowerCase():"#document"}function yn(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function fi(t){var e;return(e=(K0(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function K0(t){return zc()?t instanceof Node||t instanceof yn(t).Node:!1}function Zn(t){return zc()?t instanceof Element||t instanceof yn(t).Element:!1}function di(t){return zc()?t instanceof HTMLElement||t instanceof yn(t).HTMLElement:!1}function Om(t){return!zc()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof yn(t).ShadowRoot}const $w=new Set(["inline","contents"]);function Aa(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=Qn(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!$w.has(r)}const qw=new Set(["table","td","th"]);function Kw(t){return qw.has(gs(t))}const Zw=[":popover-open",":modal"];function Bc(t){return Zw.some(e=>{try{return t.matches(e)}catch{return!1}})}const Qw=["transform","translate","scale","rotate","perspective"],Jw=["transform","translate","scale","rotate","perspective","filter"],eT=["paint","layout","strict","content"];function kh(t){const e=zh(),n=Zn(t)?Qn(t):t;return Qw.some(i=>n[i]?n[i]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||Jw.some(i=>(n.willChange||"").includes(i))||eT.some(i=>(n.contain||"").includes(i))}function tT(t){let e=gr(t);for(;di(e)&&!rs(e);){if(kh(e))return e;if(Bc(e))return null;e=gr(e)}return null}function zh(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const nT=new Set(["html","body","#document"]);function rs(t){return nT.has(gs(t))}function Qn(t){return yn(t).getComputedStyle(t)}function Hc(t){return Zn(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function gr(t){if(gs(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Om(t)&&t.host||fi(t);return Om(e)?e.host:e}function Z0(t){const e=gr(t);return rs(e)?t.ownerDocument?t.ownerDocument.body:t.body:di(e)&&Aa(e)?e:Z0(e)}function _a(t,e,n){var i;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=Z0(t),o=r===((i=t.ownerDocument)==null?void 0:i.body),s=yn(r);if(o){const a=gf(s);return e.concat(s,s.visualViewport||[],Aa(r)?r:[],a&&n?_a(a):[])}return e.concat(r,_a(r,[],n))}function gf(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Q0(t){const e=Qn(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=di(t),o=r?t.offsetWidth:n,s=r?t.offsetHeight:i,a=dc(n)!==o||dc(i)!==s;return a&&(n=o,i=s),{width:n,height:i,$:a}}function Bh(t){return Zn(t)?t:t.contextElement}function Yo(t){const e=Bh(t);if(!di(e))return li(1);const n=e.getBoundingClientRect(),{width:i,height:r,$:o}=Q0(e);let s=(o?dc(n.width):n.width)/i,a=(o?dc(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const iT=li(0);function J0(t){const e=yn(t);return!zh()||!e.visualViewport?iT:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function rT(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==yn(t)?!1:e}function Kr(t,e,n,i){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),o=Bh(t);let s=li(1);e&&(i?Zn(i)&&(s=Yo(i)):s=Yo(t));const a=rT(o,n,i)?J0(o):li(0);let l=(r.left+a.x)/s.x,c=(r.top+a.y)/s.y,d=r.width/s.x,f=r.height/s.y;if(o){const h=yn(o),g=i&&Zn(i)?yn(i):i;let x=h,m=gf(x);for(;m&&i&&g!==x;){const p=Yo(m),u=m.getBoundingClientRect(),v=Qn(m),_=u.left+(m.clientLeft+parseFloat(v.paddingLeft))*p.x,y=u.top+(m.clientTop+parseFloat(v.paddingTop))*p.y;l*=p.x,c*=p.y,d*=p.x,f*=p.y,l+=_,c+=y,x=yn(m),m=gf(x)}}return hc({width:d,height:f,x:l,y:c})}function Hh(t,e){const n=Hc(t).scrollLeft;return e?e.left+n:Kr(fi(t)).left+n}function ex(t,e,n){n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=i.left+e.scrollLeft-(n?0:Hh(t,i)),o=i.top+e.scrollTop;return{x:r,y:o}}function oT(t){let{elements:e,rect:n,offsetParent:i,strategy:r}=t;const o=r==="fixed",s=fi(i),a=e?Bc(e.floating):!1;if(i===s||a&&o)return n;let l={scrollLeft:0,scrollTop:0},c=li(1);const d=li(0),f=di(i);if((f||!f&&!o)&&((gs(i)!=="body"||Aa(s))&&(l=Hc(i)),di(i))){const g=Kr(i);c=Yo(i),d.x=g.x+i.clientLeft,d.y=g.y+i.clientTop}const h=s&&!f&&!o?ex(s,l,!0):li(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+d.x+h.x,y:n.y*c.y-l.scrollTop*c.y+d.y+h.y}}function sT(t){return Array.from(t.getClientRects())}function aT(t){const e=fi(t),n=Hc(t),i=t.ownerDocument.body,r=gn(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),o=gn(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-n.scrollLeft+Hh(t);const a=-n.scrollTop;return Qn(i).direction==="rtl"&&(s+=gn(e.clientWidth,i.clientWidth)-r),{width:r,height:o,x:s,y:a}}function lT(t,e){const n=yn(t),i=fi(t),r=n.visualViewport;let o=i.clientWidth,s=i.clientHeight,a=0,l=0;if(r){o=r.width,s=r.height;const c=zh();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:o,height:s,x:a,y:l}}const cT=new Set(["absolute","fixed"]);function uT(t,e){const n=Kr(t,!0,e==="fixed"),i=n.top+t.clientTop,r=n.left+t.clientLeft,o=di(t)?Yo(t):li(1),s=t.clientWidth*o.x,a=t.clientHeight*o.y,l=r*o.x,c=i*o.y;return{width:s,height:a,x:l,y:c}}function Fm(t,e,n){let i;if(e==="viewport")i=lT(t,n);else if(e==="document")i=aT(fi(t));else if(Zn(e))i=uT(e,n);else{const r=J0(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return hc(i)}function tx(t,e){const n=gr(t);return n===e||!Zn(n)||rs(n)?!1:Qn(n).position==="fixed"||tx(n,e)}function dT(t,e){const n=e.get(t);if(n)return n;let i=_a(t,[],!1).filter(a=>Zn(a)&&gs(a)!=="body"),r=null;const o=Qn(t).position==="fixed";let s=o?gr(t):t;for(;Zn(s)&&!rs(s);){const a=Qn(s),l=kh(s);!l&&a.position==="fixed"&&(r=null),(o?!l&&!r:!l&&a.position==="static"&&!!r&&cT.has(r.position)||Aa(s)&&!l&&tx(t,s))?i=i.filter(d=>d!==s):r=a,s=gr(s)}return e.set(t,i),i}function fT(t){let{element:e,boundary:n,rootBoundary:i,strategy:r}=t;const s=[...n==="clippingAncestors"?Bc(e)?[]:dT(e,this._c):[].concat(n),i],a=s[0],l=s.reduce((c,d)=>{const f=Fm(e,d,r);return c.top=gn(f.top,c.top),c.right=mr(f.right,c.right),c.bottom=mr(f.bottom,c.bottom),c.left=gn(f.left,c.left),c},Fm(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function hT(t){const{width:e,height:n}=Q0(t);return{width:e,height:n}}function pT(t,e,n){const i=di(e),r=fi(e),o=n==="fixed",s=Kr(t,!0,o,e);let a={scrollLeft:0,scrollTop:0};const l=li(0);function c(){l.x=Hh(r)}if(i||!i&&!o)if((gs(e)!=="body"||Aa(r))&&(a=Hc(e)),i){const g=Kr(e,!0,o,e);l.x=g.x+e.clientLeft,l.y=g.y+e.clientTop}else r&&c();o&&!i&&r&&c();const d=r&&!i&&!o?ex(r,a):li(0),f=s.left+a.scrollLeft-l.x-d.x,h=s.top+a.scrollTop-l.y-d.y;return{x:f,y:h,width:s.width,height:s.height}}function Nu(t){return Qn(t).position==="static"}function km(t,e){if(!di(t)||Qn(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return fi(t)===n&&(n=n.ownerDocument.body),n}function nx(t,e){const n=yn(t);if(Bc(t))return n;if(!di(t)){let r=gr(t);for(;r&&!rs(r);){if(Zn(r)&&!Nu(r))return r;r=gr(r)}return n}let i=km(t,e);for(;i&&Kw(i)&&Nu(i);)i=km(i,e);return i&&rs(i)&&Nu(i)&&!kh(i)?n:i||tT(t)||n}const mT=async function(t){const e=this.getOffsetParent||nx,n=this.getDimensions,i=await n(t.floating);return{reference:pT(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function gT(t){return Qn(t).direction==="rtl"}const vT={convertOffsetParentRelativeRectToViewportRelativeRect:oT,getDocumentElement:fi,getClippingRect:fT,getOffsetParent:nx,getElementRects:mT,getClientRects:sT,getDimensions:hT,getScale:Yo,isElement:Zn,isRTL:gT};function ix(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function _T(t,e){let n=null,i;const r=fi(t);function o(){var a;clearTimeout(i),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const c=t.getBoundingClientRect(),{left:d,top:f,width:h,height:g}=c;if(a||e(),!h||!g)return;const x=qa(f),m=qa(r.clientWidth-(d+h)),p=qa(r.clientHeight-(f+g)),u=qa(d),_={rootMargin:-x+"px "+-m+"px "+-p+"px "+-u+"px",threshold:gn(0,mr(1,l))||1};let y=!0;function S(A){const w=A[0].intersectionRatio;if(w!==l){if(!y)return s();w?s(!1,w):i=setTimeout(()=>{s(!1,1e-7)},1e3)}w===1&&!ix(c,t.getBoundingClientRect())&&s(),y=!1}try{n=new IntersectionObserver(S,{..._,root:r.ownerDocument})}catch{n=new IntersectionObserver(S,_)}n.observe(t)}return s(!0),o}function xT(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=Bh(t),d=r||o?[...c?_a(c):[],..._a(e)]:[];d.forEach(u=>{r&&u.addEventListener("scroll",n,{passive:!0}),o&&u.addEventListener("resize",n)});const f=c&&a?_T(c,n):null;let h=-1,g=null;s&&(g=new ResizeObserver(u=>{let[v]=u;v&&v.target===c&&g&&(g.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var _;(_=g)==null||_.observe(e)})),n()}),c&&!l&&g.observe(c),g.observe(e));let x,m=l?Kr(t):null;l&&p();function p(){const u=Kr(t);m&&!ix(m,u)&&n(),m=u,x=requestAnimationFrame(p)}return n(),()=>{var u;d.forEach(v=>{r&&v.removeEventListener("scroll",n),o&&v.removeEventListener("resize",n)}),f==null||f(),(u=g)==null||u.disconnect(),g=null,l&&cancelAnimationFrame(x)}}const yT=Ww,ST=jw,ET=Hw,MT=Yw,wT=Vw,zm=Bw,TT=Xw,AT=(t,e,n)=>{const i=new Map,r={platform:vT,...n},o={...r.platform,_c:i};return zw(t,e,{...r,platform:o})};var bT=typeof document<"u",CT=function(){},Ol=bT?R.useLayoutEffect:CT;function pc(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,i,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;i--!==0;)if(!pc(t[i],e[i]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(i=n;i--!==0;)if(!{}.hasOwnProperty.call(e,r[i]))return!1;for(i=n;i--!==0;){const o=r[i];if(!(o==="_owner"&&t.$$typeof)&&!pc(t[o],e[o]))return!1}return!0}return t!==t&&e!==e}function rx(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Bm(t,e){const n=rx(t);return Math.round(e*n)/n}function Iu(t){const e=R.useRef(t);return Ol(()=>{e.current=t}),e}function RT(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:i=[],platform:r,elements:{reference:o,floating:s}={},transform:a=!0,whileElementsMounted:l,open:c}=t,[d,f]=R.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[h,g]=R.useState(i);pc(h,i)||g(i);const[x,m]=R.useState(null),[p,u]=R.useState(null),v=R.useCallback(U=>{U!==A.current&&(A.current=U,m(U))},[]),_=R.useCallback(U=>{U!==w.current&&(w.current=U,u(U))},[]),y=o||x,S=s||p,A=R.useRef(null),w=R.useRef(null),N=R.useRef(d),E=l!=null,b=Iu(l),V=Iu(r),H=Iu(c),Z=R.useCallback(()=>{if(!A.current||!w.current)return;const U={placement:e,strategy:n,middleware:h};V.current&&(U.platform=V.current),AT(A.current,w.current,U).then(z=>{const W={...z,isPositioned:H.current!==!1};P.current&&!pc(N.current,W)&&(N.current=W,hs.flushSync(()=>{f(W)}))})},[h,e,n,V,H]);Ol(()=>{c===!1&&N.current.isPositioned&&(N.current.isPositioned=!1,f(U=>({...U,isPositioned:!1})))},[c]);const P=R.useRef(!1);Ol(()=>(P.current=!0,()=>{P.current=!1}),[]),Ol(()=>{if(y&&(A.current=y),S&&(w.current=S),y&&S){if(b.current)return b.current(y,S,Z);Z()}},[y,S,Z,b,E]);const G=R.useMemo(()=>({reference:A,floating:w,setReference:v,setFloating:_}),[v,_]),Y=R.useMemo(()=>({reference:y,floating:S}),[y,S]),j=R.useMemo(()=>{const U={position:n,left:0,top:0};if(!Y.floating)return U;const z=Bm(Y.floating,d.x),W=Bm(Y.floating,d.y);return a?{...U,transform:"translate("+z+"px, "+W+"px)",...rx(Y.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:z,top:W}},[n,a,Y.floating,d.x,d.y]);return R.useMemo(()=>({...d,update:Z,refs:G,elements:Y,floatingStyles:j}),[d,Z,G,Y,j])}const PT=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:i,padding:r}=typeof t=="function"?t(n):t;return i&&e(i)?i.current!=null?zm({element:i.current,padding:r}).fn(n):{}:i?zm({element:i,padding:r}).fn(n):{}}}},LT=(t,e)=>({...yT(t),options:[t,e]}),DT=(t,e)=>({...ST(t),options:[t,e]}),NT=(t,e)=>({...TT(t),options:[t,e]}),IT=(t,e)=>({...ET(t),options:[t,e]}),UT=(t,e)=>({...MT(t),options:[t,e]}),OT=(t,e)=>({...wT(t),options:[t,e]}),FT=(t,e)=>({...PT(t),options:[t,e]});var kT="Arrow",ox=R.forwardRef((t,e)=>{const{children:n,width:i=10,height:r=5,...o}=t;return I.jsx(St.svg,{...o,ref:e,width:i,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:I.jsx("polygon",{points:"0,0 30,0 15,10"})})});ox.displayName=kT;var zT=ox;function BT(t){const[e,n]=R.useState(void 0);return dn(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const i=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const o=r[0];let s,a;if("borderBoxSize"in o){const l=o.borderBoxSize,c=Array.isArray(l)?l[0]:l;s=c.inlineSize,a=c.blockSize}else s=t.offsetWidth,a=t.offsetHeight;n({width:s,height:a})});return i.observe(t,{box:"border-box"}),()=>i.unobserve(t)}else n(void 0)},[t]),e}var Vh="Popper",[sx,ax]=Nh(Vh),[HT,lx]=sx(Vh),cx=t=>{const{__scopePopper:e,children:n}=t,[i,r]=R.useState(null);return I.jsx(HT,{scope:e,anchor:i,onAnchorChange:r,children:n})};cx.displayName=Vh;var ux="PopperAnchor",dx=R.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:i,...r}=t,o=lx(ux,n),s=R.useRef(null),a=zt(e,s);return R.useEffect(()=>{o.onAnchorChange((i==null?void 0:i.current)||s.current)}),i?null:I.jsx(St.div,{...r,ref:a})});dx.displayName=ux;var Gh="PopperContent",[VT,GT]=sx(Gh),fx=R.forwardRef((t,e)=>{var ne,pe,Se,_e,Ee,F;const{__scopePopper:n,side:i="bottom",sideOffset:r=0,align:o="center",alignOffset:s=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:f="partial",hideWhenDetached:h=!1,updatePositionStrategy:g="optimized",onPlaced:x,...m}=t,p=lx(Gh,n),[u,v]=R.useState(null),_=zt(e,Ye=>v(Ye)),[y,S]=R.useState(null),A=BT(y),w=(A==null?void 0:A.width)??0,N=(A==null?void 0:A.height)??0,E=i+(o!=="center"?"-"+o:""),b=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},V=Array.isArray(c)?c:[c],H=V.length>0,Z={padding:b,boundary:V.filter(jT),altBoundary:H},{refs:P,floatingStyles:G,placement:Y,isPositioned:j,middlewareData:U}=RT({strategy:"fixed",placement:E,whileElementsMounted:(...Ye)=>xT(...Ye,{animationFrame:g==="always"}),elements:{reference:p.anchor},middleware:[LT({mainAxis:r+N,alignmentAxis:s}),l&&DT({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?NT():void 0,...Z}),l&&IT({...Z}),UT({...Z,apply:({elements:Ye,rects:Ce,availableWidth:K,availableHeight:te})=>{const{width:$,height:re}=Ce.reference,we=Ye.floating.style;we.setProperty("--radix-popper-available-width",`${K}px`),we.setProperty("--radix-popper-available-height",`${te}px`),we.setProperty("--radix-popper-anchor-width",`${$}px`),we.setProperty("--radix-popper-anchor-height",`${re}px`)}}),y&&FT({element:y,padding:a}),XT({arrowWidth:w,arrowHeight:N}),h&&OT({strategy:"referenceHidden",...Z})]}),[z,W]=mx(Y),le=qr(x);dn(()=>{j&&(le==null||le())},[j,le]);const fe=(ne=U.arrow)==null?void 0:ne.x,ee=(pe=U.arrow)==null?void 0:pe.y,k=((Se=U.arrow)==null?void 0:Se.centerOffset)!==0,[ce,ie]=R.useState();return dn(()=>{u&&ie(window.getComputedStyle(u).zIndex)},[u]),I.jsx("div",{ref:P.setFloating,"data-radix-popper-content-wrapper":"",style:{...G,transform:j?G.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ce,"--radix-popper-transform-origin":[(_e=U.transformOrigin)==null?void 0:_e.x,(Ee=U.transformOrigin)==null?void 0:Ee.y].join(" "),...((F=U.hide)==null?void 0:F.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:I.jsx(VT,{scope:n,placedSide:z,onArrowChange:S,arrowX:fe,arrowY:ee,shouldHideArrow:k,children:I.jsx(St.div,{"data-side":z,"data-align":W,...m,ref:_,style:{...m.style,animation:j?void 0:"none"}})})})});fx.displayName=Gh;var hx="PopperArrow",WT={top:"bottom",right:"left",bottom:"top",left:"right"},px=R.forwardRef(function(e,n){const{__scopePopper:i,...r}=e,o=GT(hx,i),s=WT[o.placedSide];return I.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:I.jsx(zT,{...r,ref:n,style:{...r.style,display:"block"}})})});px.displayName=hx;function jT(t){return t!==null}var XT=t=>({name:"transformOrigin",options:t,fn(e){var p,u,v;const{placement:n,rects:i,middlewareData:r}=e,s=((p=r.arrow)==null?void 0:p.centerOffset)!==0,a=s?0:t.arrowWidth,l=s?0:t.arrowHeight,[c,d]=mx(n),f={start:"0%",center:"50%",end:"100%"}[d],h=(((u=r.arrow)==null?void 0:u.x)??0)+a/2,g=(((v=r.arrow)==null?void 0:v.y)??0)+l/2;let x="",m="";return c==="bottom"?(x=s?f:`${h}px`,m=`${-l}px`):c==="top"?(x=s?f:`${h}px`,m=`${i.floating.height+l}px`):c==="right"?(x=`${-l}px`,m=s?f:`${g}px`):c==="left"&&(x=`${i.floating.width+l}px`,m=s?f:`${g}px`),{data:{x,y:m}}}});function mx(t){const[e,n="center"]=t.split("-");return[e,n]}var YT=cx,$T=dx,qT=fx,KT=px,ZT="Portal",gx=R.forwardRef((t,e)=>{var a;const{container:n,...i}=t,[r,o]=R.useState(!1);dn(()=>o(!0),[]);const s=n||r&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return s?vM.createPortal(I.jsx(St.div,{...i,ref:e}),s):null});gx.displayName=ZT;var QT=Dv[" useInsertionEffect ".trim().toString()]||dn;function Hm({prop:t,defaultProp:e,onChange:n=()=>{},caller:i}){const[r,o,s]=JT({defaultProp:e,onChange:n}),a=t!==void 0,l=a?t:r;{const d=R.useRef(t!==void 0);R.useEffect(()=>{const f=d.current;f!==a&&console.warn(`${i} is changing from ${f?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=a},[a,i])}const c=R.useCallback(d=>{var f;if(a){const h=e1(d)?d(t):d;h!==t&&((f=s.current)==null||f.call(s,h))}else o(d)},[a,t,o,s]);return[l,c]}function JT({defaultProp:t,onChange:e}){const[n,i]=R.useState(t),r=R.useRef(n),o=R.useRef(e);return QT(()=>{o.current=e},[e]),R.useEffect(()=>{var s;r.current!==n&&((s=o.current)==null||s.call(o,n),r.current=n)},[n,r]),[n,i,o]}function e1(t){return typeof t=="function"}function t1(t){const e=R.useRef({value:t,previous:t});return R.useMemo(()=>(e.current.value!==t&&(e.current.previous=e.current.value,e.current.value=t),e.current.previous),[t])}var vx=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),n1="VisuallyHidden",i1=R.forwardRef((t,e)=>I.jsx(St.span,{...t,ref:e,style:{...vx,...t.style}}));i1.displayName=n1;var r1=function(t){if(typeof document>"u")return null;var e=Array.isArray(t)?t[0]:t;return e.ownerDocument.body},oo=new WeakMap,Ka=new WeakMap,Za={},Uu=0,_x=function(t){return t&&(t.host||_x(t.parentNode))},o1=function(t,e){return e.map(function(n){if(t.contains(n))return n;var i=_x(n);return i&&t.contains(i)?i:(console.error("aria-hidden",n,"in not contained inside",t,". Doing nothing"),null)}).filter(function(n){return!!n})},s1=function(t,e,n,i){var r=o1(e,Array.isArray(t)?t:[t]);Za[n]||(Za[n]=new WeakMap);var o=Za[n],s=[],a=new Set,l=new Set(r),c=function(f){!f||a.has(f)||(a.add(f),c(f.parentNode))};r.forEach(c);var d=function(f){!f||l.has(f)||Array.prototype.forEach.call(f.children,function(h){if(a.has(h))d(h);else try{var g=h.getAttribute(i),x=g!==null&&g!=="false",m=(oo.get(h)||0)+1,p=(o.get(h)||0)+1;oo.set(h,m),o.set(h,p),s.push(h),m===1&&x&&Ka.set(h,!0),p===1&&h.setAttribute(n,"true"),x||h.setAttribute(i,"true")}catch(u){console.error("aria-hidden: cannot operate on ",h,u)}})};return d(e),a.clear(),Uu++,function(){s.forEach(function(f){var h=oo.get(f)-1,g=o.get(f)-1;oo.set(f,h),o.set(f,g),h||(Ka.has(f)||f.removeAttribute(i),Ka.delete(f)),g||f.removeAttribute(n)}),Uu--,Uu||(oo=new WeakMap,oo=new WeakMap,Ka=new WeakMap,Za={})}},a1=function(t,e,n){n===void 0&&(n="data-aria-hidden");var i=Array.from(Array.isArray(t)?t:[t]),r=r1(t);return r?(i.push.apply(i,Array.from(r.querySelectorAll("[aria-live], script"))),s1(i,r,n,"aria-hidden")):function(){return null}},ii=function(){return ii=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ii.apply(this,arguments)};function xx(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function l1(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,o;i<r;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return t.concat(o||Array.prototype.slice.call(e))}var Fl="right-scroll-bar-position",kl="width-before-scroll-bar",c1="with-scroll-bars-hidden",u1="--removed-body-scroll-bar-size";function Ou(t,e){return typeof t=="function"?t(e):t&&(t.current=e),t}function d1(t,e){var n=R.useState(function(){return{value:t,callback:e,facade:{get current(){return n.value},set current(i){var r=n.value;r!==i&&(n.value=i,n.callback(i,r))}}}})[0];return n.callback=e,n.facade}var f1=typeof window<"u"?R.useLayoutEffect:R.useEffect,Vm=new WeakMap;function h1(t,e){var n=d1(null,function(i){return t.forEach(function(r){return Ou(r,i)})});return f1(function(){var i=Vm.get(n);if(i){var r=new Set(i),o=new Set(t),s=n.current;r.forEach(function(a){o.has(a)||Ou(a,null)}),o.forEach(function(a){r.has(a)||Ou(a,s)})}Vm.set(n,t)},[t]),n}function p1(t){return t}function m1(t,e){e===void 0&&(e=p1);var n=[],i=!1,r={read:function(){if(i)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:t},useMedium:function(o){var s=e(o,i);return n.push(s),function(){n=n.filter(function(a){return a!==s})}},assignSyncMedium:function(o){for(i=!0;n.length;){var s=n;n=[],s.forEach(o)}n={push:function(a){return o(a)},filter:function(){return n}}},assignMedium:function(o){i=!0;var s=[];if(n.length){var a=n;n=[],a.forEach(o),s=n}var l=function(){var d=s;s=[],d.forEach(o)},c=function(){return Promise.resolve().then(l)};c(),n={push:function(d){s.push(d),c()},filter:function(d){return s=s.filter(d),n}}}};return r}function g1(t){t===void 0&&(t={});var e=m1(null);return e.options=ii({async:!0,ssr:!1},t),e}var yx=function(t){var e=t.sideCar,n=xx(t,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var i=e.read();if(!i)throw new Error("Sidecar medium not found");return R.createElement(i,ii({},n))};yx.isSideCarExport=!0;function v1(t,e){return t.useMedium(e),yx}var Sx=g1(),Fu=function(){},Vc=R.forwardRef(function(t,e){var n=R.useRef(null),i=R.useState({onScrollCapture:Fu,onWheelCapture:Fu,onTouchMoveCapture:Fu}),r=i[0],o=i[1],s=t.forwardProps,a=t.children,l=t.className,c=t.removeScrollBar,d=t.enabled,f=t.shards,h=t.sideCar,g=t.noRelative,x=t.noIsolation,m=t.inert,p=t.allowPinchZoom,u=t.as,v=u===void 0?"div":u,_=t.gapMode,y=xx(t,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=h,A=h1([n,e]),w=ii(ii({},y),r);return R.createElement(R.Fragment,null,d&&R.createElement(S,{sideCar:Sx,removeScrollBar:c,shards:f,noRelative:g,noIsolation:x,inert:m,setCallbacks:o,allowPinchZoom:!!p,lockRef:n,gapMode:_}),s?R.cloneElement(R.Children.only(a),ii(ii({},w),{ref:A})):R.createElement(v,ii({},w,{className:l,ref:A}),a))});Vc.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Vc.classNames={fullWidth:kl,zeroRight:Fl};var _1=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function x1(){if(!document)return null;var t=document.createElement("style");t.type="text/css";var e=_1();return e&&t.setAttribute("nonce",e),t}function y1(t,e){t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}function S1(t){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(t)}var E1=function(){var t=0,e=null;return{add:function(n){t==0&&(e=x1())&&(y1(e,n),S1(e)),t++},remove:function(){t--,!t&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},M1=function(){var t=E1();return function(e,n){R.useEffect(function(){return t.add(e),function(){t.remove()}},[e&&n])}},Ex=function(){var t=M1(),e=function(n){var i=n.styles,r=n.dynamic;return t(i,r),null};return e},w1={left:0,top:0,right:0,gap:0},ku=function(t){return parseInt(t||"",10)||0},T1=function(t){var e=window.getComputedStyle(document.body),n=e[t==="padding"?"paddingLeft":"marginLeft"],i=e[t==="padding"?"paddingTop":"marginTop"],r=e[t==="padding"?"paddingRight":"marginRight"];return[ku(n),ku(i),ku(r)]},A1=function(t){if(t===void 0&&(t="margin"),typeof window>"u")return w1;var e=T1(t),n=document.documentElement.clientWidth,i=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,i-n+e[2]-e[0])}},b1=Ex(),$o="data-scroll-locked",C1=function(t,e,n,i){var r=t.left,o=t.top,s=t.right,a=t.gap;return n===void 0&&(n="margin"),`
  .`.concat(c1,` {
   overflow: hidden `).concat(i,`;
   padding-right: `).concat(a,"px ").concat(i,`;
  }
  body[`).concat($o,`] {
    overflow: hidden `).concat(i,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(i,";"),n==="margin"&&`
    padding-left: `.concat(r,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(i,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(i,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Fl,` {
    right: `).concat(a,"px ").concat(i,`;
  }
  
  .`).concat(kl,` {
    margin-right: `).concat(a,"px ").concat(i,`;
  }
  
  .`).concat(Fl," .").concat(Fl,` {
    right: 0 `).concat(i,`;
  }
  
  .`).concat(kl," .").concat(kl,` {
    margin-right: 0 `).concat(i,`;
  }
  
  body[`).concat($o,`] {
    `).concat(u1,": ").concat(a,`px;
  }
`)},Gm=function(){var t=parseInt(document.body.getAttribute($o)||"0",10);return isFinite(t)?t:0},R1=function(){R.useEffect(function(){return document.body.setAttribute($o,(Gm()+1).toString()),function(){var t=Gm()-1;t<=0?document.body.removeAttribute($o):document.body.setAttribute($o,t.toString())}},[])},P1=function(t){var e=t.noRelative,n=t.noImportant,i=t.gapMode,r=i===void 0?"margin":i;R1();var o=R.useMemo(function(){return A1(r)},[r]);return R.createElement(b1,{styles:C1(o,!e,r,n?"":"!important")})},vf=!1;if(typeof window<"u")try{var Qa=Object.defineProperty({},"passive",{get:function(){return vf=!0,!0}});window.addEventListener("test",Qa,Qa),window.removeEventListener("test",Qa,Qa)}catch{vf=!1}var so=vf?{passive:!1}:!1,L1=function(t){return t.tagName==="TEXTAREA"},Mx=function(t,e){if(!(t instanceof Element))return!1;var n=window.getComputedStyle(t);return n[e]!=="hidden"&&!(n.overflowY===n.overflowX&&!L1(t)&&n[e]==="visible")},D1=function(t){return Mx(t,"overflowY")},N1=function(t){return Mx(t,"overflowX")},Wm=function(t,e){var n=e.ownerDocument,i=e;do{typeof ShadowRoot<"u"&&i instanceof ShadowRoot&&(i=i.host);var r=wx(t,i);if(r){var o=Tx(t,i),s=o[1],a=o[2];if(s>a)return!0}i=i.parentNode}while(i&&i!==n.body);return!1},I1=function(t){var e=t.scrollTop,n=t.scrollHeight,i=t.clientHeight;return[e,n,i]},U1=function(t){var e=t.scrollLeft,n=t.scrollWidth,i=t.clientWidth;return[e,n,i]},wx=function(t,e){return t==="v"?D1(e):N1(e)},Tx=function(t,e){return t==="v"?I1(e):U1(e)},O1=function(t,e){return t==="h"&&e==="rtl"?-1:1},F1=function(t,e,n,i,r){var o=O1(t,window.getComputedStyle(e).direction),s=o*i,a=n.target,l=e.contains(a),c=!1,d=s>0,f=0,h=0;do{if(!a)break;var g=Tx(t,a),x=g[0],m=g[1],p=g[2],u=m-p-o*x;(x||u)&&wx(t,a)&&(f+=u,h+=x);var v=a.parentNode;a=v&&v.nodeType===Node.DOCUMENT_FRAGMENT_NODE?v.host:v}while(!l&&a!==document.body||l&&(e.contains(a)||e===a));return(d&&Math.abs(f)<1||!d&&Math.abs(h)<1)&&(c=!0),c},Ja=function(t){return"changedTouches"in t?[t.changedTouches[0].clientX,t.changedTouches[0].clientY]:[0,0]},jm=function(t){return[t.deltaX,t.deltaY]},Xm=function(t){return t&&"current"in t?t.current:t},k1=function(t,e){return t[0]===e[0]&&t[1]===e[1]},z1=function(t){return`
  .block-interactivity-`.concat(t,` {pointer-events: none;}
  .allow-interactivity-`).concat(t,` {pointer-events: all;}
`)},B1=0,ao=[];function H1(t){var e=R.useRef([]),n=R.useRef([0,0]),i=R.useRef(),r=R.useState(B1++)[0],o=R.useState(Ex)[0],s=R.useRef(t);R.useEffect(function(){s.current=t},[t]),R.useEffect(function(){if(t.inert){document.body.classList.add("block-interactivity-".concat(r));var m=l1([t.lockRef.current],(t.shards||[]).map(Xm),!0).filter(Boolean);return m.forEach(function(p){return p.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),m.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(r))})}}},[t.inert,t.lockRef.current,t.shards]);var a=R.useCallback(function(m,p){if("touches"in m&&m.touches.length===2||m.type==="wheel"&&m.ctrlKey)return!s.current.allowPinchZoom;var u=Ja(m),v=n.current,_="deltaX"in m?m.deltaX:v[0]-u[0],y="deltaY"in m?m.deltaY:v[1]-u[1],S,A=m.target,w=Math.abs(_)>Math.abs(y)?"h":"v";if("touches"in m&&w==="h"&&A.type==="range")return!1;var N=Wm(w,A);if(!N)return!0;if(N?S=w:(S=w==="v"?"h":"v",N=Wm(w,A)),!N)return!1;if(!i.current&&"changedTouches"in m&&(_||y)&&(i.current=S),!S)return!0;var E=i.current||S;return F1(E,p,m,E==="h"?_:y)},[]),l=R.useCallback(function(m){var p=m;if(!(!ao.length||ao[ao.length-1]!==o)){var u="deltaY"in p?jm(p):Ja(p),v=e.current.filter(function(S){return S.name===p.type&&(S.target===p.target||p.target===S.shadowParent)&&k1(S.delta,u)})[0];if(v&&v.should){p.cancelable&&p.preventDefault();return}if(!v){var _=(s.current.shards||[]).map(Xm).filter(Boolean).filter(function(S){return S.contains(p.target)}),y=_.length>0?a(p,_[0]):!s.current.noIsolation;y&&p.cancelable&&p.preventDefault()}}},[]),c=R.useCallback(function(m,p,u,v){var _={name:m,delta:p,target:u,should:v,shadowParent:V1(u)};e.current.push(_),setTimeout(function(){e.current=e.current.filter(function(y){return y!==_})},1)},[]),d=R.useCallback(function(m){n.current=Ja(m),i.current=void 0},[]),f=R.useCallback(function(m){c(m.type,jm(m),m.target,a(m,t.lockRef.current))},[]),h=R.useCallback(function(m){c(m.type,Ja(m),m.target,a(m,t.lockRef.current))},[]);R.useEffect(function(){return ao.push(o),t.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:h}),document.addEventListener("wheel",l,so),document.addEventListener("touchmove",l,so),document.addEventListener("touchstart",d,so),function(){ao=ao.filter(function(m){return m!==o}),document.removeEventListener("wheel",l,so),document.removeEventListener("touchmove",l,so),document.removeEventListener("touchstart",d,so)}},[]);var g=t.removeScrollBar,x=t.inert;return R.createElement(R.Fragment,null,x?R.createElement(o,{styles:z1(r)}):null,g?R.createElement(P1,{noRelative:t.noRelative,gapMode:t.gapMode}):null)}function V1(t){for(var e=null;t!==null;)t instanceof ShadowRoot&&(e=t.host,t=t.host),t=t.parentNode;return e}const G1=v1(Sx,H1);var Ax=R.forwardRef(function(t,e){return R.createElement(Vc,ii({},t,{ref:e,sideCar:G1}))});Ax.classNames=Vc.classNames;var W1=[" ","Enter","ArrowUp","ArrowDown"],j1=[" ","Enter"],Zr="Select",[Gc,Wc,X1]=ow(Zr),[vs,V2]=Nh(Zr,[X1,ax]),jc=ax(),[Y1,Sr]=vs(Zr),[$1,q1]=vs(Zr),bx=t=>{const{__scopeSelect:e,children:n,open:i,defaultOpen:r,onOpenChange:o,value:s,defaultValue:a,onValueChange:l,dir:c,name:d,autoComplete:f,disabled:h,required:g,form:x}=t,m=jc(e),[p,u]=R.useState(null),[v,_]=R.useState(null),[y,S]=R.useState(!1),A=aw(c),[w,N]=Hm({prop:i,defaultProp:r??!1,onChange:o,caller:Zr}),[E,b]=Hm({prop:s,defaultProp:a,onChange:l,caller:Zr}),V=R.useRef(null),H=p?x||!!p.closest("form"):!0,[Z,P]=R.useState(new Set),G=Array.from(Z).map(Y=>Y.props.value).join(";");return I.jsx(YT,{...m,children:I.jsxs(Y1,{required:g,scope:e,trigger:p,onTriggerChange:u,valueNode:v,onValueNodeChange:_,valueNodeHasChildren:y,onValueNodeHasChildrenChange:S,contentId:Ih(),value:E,onValueChange:b,open:w,onOpenChange:N,dir:A,triggerPointerDownPosRef:V,disabled:h,children:[I.jsx(Gc.Provider,{scope:e,children:I.jsx($1,{scope:t.__scopeSelect,onNativeOptionAdd:R.useCallback(Y=>{P(j=>new Set(j).add(Y))},[]),onNativeOptionRemove:R.useCallback(Y=>{P(j=>{const U=new Set(j);return U.delete(Y),U})},[]),children:n})}),H?I.jsxs(qx,{"aria-hidden":!0,required:g,tabIndex:-1,name:d,autoComplete:f,value:E,onChange:Y=>b(Y.target.value),disabled:h,form:x,children:[E===void 0?I.jsx("option",{value:""}):null,Array.from(Z)]},G):null]})})};bx.displayName=Zr;var Cx="SelectTrigger",Rx=R.forwardRef((t,e)=>{const{__scopeSelect:n,disabled:i=!1,...r}=t,o=jc(n),s=Sr(Cx,n),a=s.disabled||i,l=zt(e,s.onTriggerChange),c=Wc(n),d=R.useRef("touch"),[f,h,g]=Zx(m=>{const p=c().filter(_=>!_.disabled),u=p.find(_=>_.value===s.value),v=Qx(p,m,u);v!==void 0&&s.onValueChange(v.value)}),x=m=>{a||(s.onOpenChange(!0),g()),m&&(s.triggerPointerDownPosRef.current={x:Math.round(m.pageX),y:Math.round(m.pageY)})};return I.jsx($T,{asChild:!0,...o,children:I.jsx(St.button,{type:"button",role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:a,"data-disabled":a?"":void 0,"data-placeholder":Kx(s.value)?"":void 0,...r,ref:l,onClick:wt(r.onClick,m=>{m.currentTarget.focus(),d.current!=="mouse"&&x(m)}),onPointerDown:wt(r.onPointerDown,m=>{d.current=m.pointerType;const p=m.target;p.hasPointerCapture(m.pointerId)&&p.releasePointerCapture(m.pointerId),m.button===0&&m.ctrlKey===!1&&m.pointerType==="mouse"&&(x(m),m.preventDefault())}),onKeyDown:wt(r.onKeyDown,m=>{const p=f.current!=="";!(m.ctrlKey||m.altKey||m.metaKey)&&m.key.length===1&&h(m.key),!(p&&m.key===" ")&&W1.includes(m.key)&&(x(),m.preventDefault())})})})});Rx.displayName=Cx;var Px="SelectValue",Lx=R.forwardRef((t,e)=>{const{__scopeSelect:n,className:i,style:r,children:o,placeholder:s="",...a}=t,l=Sr(Px,n),{onValueNodeHasChildrenChange:c}=l,d=o!==void 0,f=zt(e,l.onValueNodeChange);return dn(()=>{c(d)},[c,d]),I.jsx(St.span,{...a,ref:f,style:{pointerEvents:"none"},children:Kx(l.value)?I.jsx(I.Fragment,{children:s}):o})});Lx.displayName=Px;var K1="SelectIcon",Dx=R.forwardRef((t,e)=>{const{__scopeSelect:n,children:i,...r}=t;return I.jsx(St.span,{"aria-hidden":!0,...r,ref:e,children:i||"▼"})});Dx.displayName=K1;var Z1="SelectPortal",Nx=t=>I.jsx(gx,{asChild:!0,...t});Nx.displayName=Z1;var Qr="SelectContent",Ix=R.forwardRef((t,e)=>{const n=Sr(Qr,t.__scopeSelect),[i,r]=R.useState();if(dn(()=>{r(new DocumentFragment)},[]),!n.open){const o=i;return o?hs.createPortal(I.jsx(Ux,{scope:t.__scopeSelect,children:I.jsx(Gc.Slot,{scope:t.__scopeSelect,children:I.jsx("div",{children:t.children})})}),o):null}return I.jsx(Ox,{...t,ref:e})});Ix.displayName=Qr;var Hn=10,[Ux,Er]=vs(Qr),Q1="SelectContentImpl",J1=ga("SelectContent.RemoveScroll"),Ox=R.forwardRef((t,e)=>{const{__scopeSelect:n,position:i="item-aligned",onCloseAutoFocus:r,onEscapeKeyDown:o,onPointerDownOutside:s,side:a,sideOffset:l,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:h,collisionPadding:g,sticky:x,hideWhenDetached:m,avoidCollisions:p,...u}=t,v=Sr(Qr,n),[_,y]=R.useState(null),[S,A]=R.useState(null),w=zt(e,ne=>y(ne)),[N,E]=R.useState(null),[b,V]=R.useState(null),H=Wc(n),[Z,P]=R.useState(!1),G=R.useRef(!1);R.useEffect(()=>{if(_)return a1(_)},[_]),_w();const Y=R.useCallback(ne=>{const[pe,...Se]=H().map(F=>F.ref.current),[_e]=Se.slice(-1),Ee=document.activeElement;for(const F of ne)if(F===Ee||(F==null||F.scrollIntoView({block:"nearest"}),F===pe&&S&&(S.scrollTop=0),F===_e&&S&&(S.scrollTop=S.scrollHeight),F==null||F.focus(),document.activeElement!==Ee))return},[H,S]),j=R.useCallback(()=>Y([N,_]),[Y,N,_]);R.useEffect(()=>{Z&&j()},[Z,j]);const{onOpenChange:U,triggerPointerDownPosRef:z}=v;R.useEffect(()=>{if(_){let ne={x:0,y:0};const pe=_e=>{var Ee,F;ne={x:Math.abs(Math.round(_e.pageX)-(((Ee=z.current)==null?void 0:Ee.x)??0)),y:Math.abs(Math.round(_e.pageY)-(((F=z.current)==null?void 0:F.y)??0))}},Se=_e=>{ne.x<=10&&ne.y<=10?_e.preventDefault():_.contains(_e.target)||U(!1),document.removeEventListener("pointermove",pe),z.current=null};return z.current!==null&&(document.addEventListener("pointermove",pe),document.addEventListener("pointerup",Se,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",pe),document.removeEventListener("pointerup",Se,{capture:!0})}}},[_,U,z]),R.useEffect(()=>{const ne=()=>U(!1);return window.addEventListener("blur",ne),window.addEventListener("resize",ne),()=>{window.removeEventListener("blur",ne),window.removeEventListener("resize",ne)}},[U]);const[W,le]=Zx(ne=>{const pe=H().filter(Ee=>!Ee.disabled),Se=pe.find(Ee=>Ee.ref.current===document.activeElement),_e=Qx(pe,ne,Se);_e&&setTimeout(()=>_e.ref.current.focus())}),fe=R.useCallback((ne,pe,Se)=>{const _e=!G.current&&!Se;(v.value!==void 0&&v.value===pe||_e)&&(E(ne),_e&&(G.current=!0))},[v.value]),ee=R.useCallback(()=>_==null?void 0:_.focus(),[_]),k=R.useCallback((ne,pe,Se)=>{const _e=!G.current&&!Se;(v.value!==void 0&&v.value===pe||_e)&&V(ne)},[v.value]),ce=i==="popper"?_f:Fx,ie=ce===_f?{side:a,sideOffset:l,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:h,collisionPadding:g,sticky:x,hideWhenDetached:m,avoidCollisions:p}:{};return I.jsx(Ux,{scope:n,content:_,viewport:S,onViewportChange:A,itemRefCallback:fe,selectedItem:N,onItemLeave:ee,itemTextRefCallback:k,focusSelectedItem:j,selectedItemText:b,position:i,isPositioned:Z,searchRef:W,children:I.jsx(Ax,{as:J1,allowPinchZoom:!0,children:I.jsx(X0,{asChild:!0,trapped:v.open,onMountAutoFocus:ne=>{ne.preventDefault()},onUnmountAutoFocus:wt(r,ne=>{var pe;(pe=v.trigger)==null||pe.focus({preventScroll:!0}),ne.preventDefault()}),children:I.jsx(W0,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:ne=>ne.preventDefault(),onDismiss:()=>v.onOpenChange(!1),children:I.jsx(ce,{role:"listbox",id:v.contentId,"data-state":v.open?"open":"closed",dir:v.dir,onContextMenu:ne=>ne.preventDefault(),...u,...ie,onPlaced:()=>P(!0),ref:w,style:{display:"flex",flexDirection:"column",outline:"none",...u.style},onKeyDown:wt(u.onKeyDown,ne=>{const pe=ne.ctrlKey||ne.altKey||ne.metaKey;if(ne.key==="Tab"&&ne.preventDefault(),!pe&&ne.key.length===1&&le(ne.key),["ArrowUp","ArrowDown","Home","End"].includes(ne.key)){let _e=H().filter(Ee=>!Ee.disabled).map(Ee=>Ee.ref.current);if(["ArrowUp","End"].includes(ne.key)&&(_e=_e.slice().reverse()),["ArrowUp","ArrowDown"].includes(ne.key)){const Ee=ne.target,F=_e.indexOf(Ee);_e=_e.slice(F+1)}setTimeout(()=>Y(_e)),ne.preventDefault()}})})})})})})});Ox.displayName=Q1;var eA="SelectItemAlignedPosition",Fx=R.forwardRef((t,e)=>{const{__scopeSelect:n,onPlaced:i,...r}=t,o=Sr(Qr,n),s=Er(Qr,n),[a,l]=R.useState(null),[c,d]=R.useState(null),f=zt(e,w=>d(w)),h=Wc(n),g=R.useRef(!1),x=R.useRef(!0),{viewport:m,selectedItem:p,selectedItemText:u,focusSelectedItem:v}=s,_=R.useCallback(()=>{if(o.trigger&&o.valueNode&&a&&c&&m&&p&&u){const w=o.trigger.getBoundingClientRect(),N=c.getBoundingClientRect(),E=o.valueNode.getBoundingClientRect(),b=u.getBoundingClientRect();if(o.dir!=="rtl"){const Ee=b.left-N.left,F=E.left-Ee,Ye=w.left-F,Ce=w.width+Ye,K=Math.max(Ce,N.width),te=window.innerWidth-Hn,$=Mm(F,[Hn,Math.max(Hn,te-K)]);a.style.minWidth=Ce+"px",a.style.left=$+"px"}else{const Ee=N.right-b.right,F=window.innerWidth-E.right-Ee,Ye=window.innerWidth-w.right-F,Ce=w.width+Ye,K=Math.max(Ce,N.width),te=window.innerWidth-Hn,$=Mm(F,[Hn,Math.max(Hn,te-K)]);a.style.minWidth=Ce+"px",a.style.right=$+"px"}const V=h(),H=window.innerHeight-Hn*2,Z=m.scrollHeight,P=window.getComputedStyle(c),G=parseInt(P.borderTopWidth,10),Y=parseInt(P.paddingTop,10),j=parseInt(P.borderBottomWidth,10),U=parseInt(P.paddingBottom,10),z=G+Y+Z+U+j,W=Math.min(p.offsetHeight*5,z),le=window.getComputedStyle(m),fe=parseInt(le.paddingTop,10),ee=parseInt(le.paddingBottom,10),k=w.top+w.height/2-Hn,ce=H-k,ie=p.offsetHeight/2,ne=p.offsetTop+ie,pe=G+Y+ne,Se=z-pe;if(pe<=k){const Ee=V.length>0&&p===V[V.length-1].ref.current;a.style.bottom="0px";const F=c.clientHeight-m.offsetTop-m.offsetHeight,Ye=Math.max(ce,ie+(Ee?ee:0)+F+j),Ce=pe+Ye;a.style.height=Ce+"px"}else{const Ee=V.length>0&&p===V[0].ref.current;a.style.top="0px";const Ye=Math.max(k,G+m.offsetTop+(Ee?fe:0)+ie)+Se;a.style.height=Ye+"px",m.scrollTop=pe-k+m.offsetTop}a.style.margin=`${Hn}px 0`,a.style.minHeight=W+"px",a.style.maxHeight=H+"px",i==null||i(),requestAnimationFrame(()=>g.current=!0)}},[h,o.trigger,o.valueNode,a,c,m,p,u,o.dir,i]);dn(()=>_(),[_]);const[y,S]=R.useState();dn(()=>{c&&S(window.getComputedStyle(c).zIndex)},[c]);const A=R.useCallback(w=>{w&&x.current===!0&&(_(),v==null||v(),x.current=!1)},[_,v]);return I.jsx(nA,{scope:n,contentWrapper:a,shouldExpandOnScrollRef:g,onScrollButtonChange:A,children:I.jsx("div",{ref:l,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:y},children:I.jsx(St.div,{...r,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...r.style}})})})});Fx.displayName=eA;var tA="SelectPopperPosition",_f=R.forwardRef((t,e)=>{const{__scopeSelect:n,align:i="start",collisionPadding:r=Hn,...o}=t,s=jc(n);return I.jsx(qT,{...s,...o,ref:e,align:i,collisionPadding:r,style:{boxSizing:"border-box",...o.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});_f.displayName=tA;var[nA,Wh]=vs(Qr,{}),xf="SelectViewport",kx=R.forwardRef((t,e)=>{const{__scopeSelect:n,nonce:i,...r}=t,o=Er(xf,n),s=Wh(xf,n),a=zt(e,o.onViewportChange),l=R.useRef(0);return I.jsxs(I.Fragment,{children:[I.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:i}),I.jsx(Gc.Slot,{scope:n,children:I.jsx(St.div,{"data-radix-select-viewport":"",role:"presentation",...r,ref:a,style:{position:"relative",flex:1,overflow:"hidden auto",...r.style},onScroll:wt(r.onScroll,c=>{const d=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:h}=s;if(h!=null&&h.current&&f){const g=Math.abs(l.current-d.scrollTop);if(g>0){const x=window.innerHeight-Hn*2,m=parseFloat(f.style.minHeight),p=parseFloat(f.style.height),u=Math.max(m,p);if(u<x){const v=u+g,_=Math.min(x,v),y=v-_;f.style.height=_+"px",f.style.bottom==="0px"&&(d.scrollTop=y>0?y:0,f.style.justifyContent="flex-end")}}}l.current=d.scrollTop})})})]})});kx.displayName=xf;var zx="SelectGroup",[iA,rA]=vs(zx),oA=R.forwardRef((t,e)=>{const{__scopeSelect:n,...i}=t,r=Ih();return I.jsx(iA,{scope:n,id:r,children:I.jsx(St.div,{role:"group","aria-labelledby":r,...i,ref:e})})});oA.displayName=zx;var Bx="SelectLabel",Hx=R.forwardRef((t,e)=>{const{__scopeSelect:n,...i}=t,r=rA(Bx,n);return I.jsx(St.div,{id:r.id,...i,ref:e})});Hx.displayName=Bx;var mc="SelectItem",[sA,Vx]=vs(mc),Gx=R.forwardRef((t,e)=>{const{__scopeSelect:n,value:i,disabled:r=!1,textValue:o,...s}=t,a=Sr(mc,n),l=Er(mc,n),c=a.value===i,[d,f]=R.useState(o??""),[h,g]=R.useState(!1),x=zt(e,v=>{var _;return(_=l.itemRefCallback)==null?void 0:_.call(l,v,i,r)}),m=Ih(),p=R.useRef("touch"),u=()=>{r||(a.onValueChange(i),a.onOpenChange(!1))};if(i==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return I.jsx(sA,{scope:n,value:i,disabled:r,textId:m,isSelected:c,onItemTextChange:R.useCallback(v=>{f(_=>_||((v==null?void 0:v.textContent)??"").trim())},[]),children:I.jsx(Gc.ItemSlot,{scope:n,value:i,disabled:r,textValue:d,children:I.jsx(St.div,{role:"option","aria-labelledby":m,"data-highlighted":h?"":void 0,"aria-selected":c&&h,"data-state":c?"checked":"unchecked","aria-disabled":r||void 0,"data-disabled":r?"":void 0,tabIndex:r?void 0:-1,...s,ref:x,onFocus:wt(s.onFocus,()=>g(!0)),onBlur:wt(s.onBlur,()=>g(!1)),onClick:wt(s.onClick,()=>{p.current!=="mouse"&&u()}),onPointerUp:wt(s.onPointerUp,()=>{p.current==="mouse"&&u()}),onPointerDown:wt(s.onPointerDown,v=>{p.current=v.pointerType}),onPointerMove:wt(s.onPointerMove,v=>{var _;p.current=v.pointerType,r?(_=l.onItemLeave)==null||_.call(l):p.current==="mouse"&&v.currentTarget.focus({preventScroll:!0})}),onPointerLeave:wt(s.onPointerLeave,v=>{var _;v.currentTarget===document.activeElement&&((_=l.onItemLeave)==null||_.call(l))}),onKeyDown:wt(s.onKeyDown,v=>{var y;((y=l.searchRef)==null?void 0:y.current)!==""&&v.key===" "||(j1.includes(v.key)&&u(),v.key===" "&&v.preventDefault())})})})})});Gx.displayName=mc;var Hs="SelectItemText",Wx=R.forwardRef((t,e)=>{const{__scopeSelect:n,className:i,style:r,...o}=t,s=Sr(Hs,n),a=Er(Hs,n),l=Vx(Hs,n),c=q1(Hs,n),[d,f]=R.useState(null),h=zt(e,u=>f(u),l.onItemTextChange,u=>{var v;return(v=a.itemTextRefCallback)==null?void 0:v.call(a,u,l.value,l.disabled)}),g=d==null?void 0:d.textContent,x=R.useMemo(()=>I.jsx("option",{value:l.value,disabled:l.disabled,children:g},l.value),[l.disabled,l.value,g]),{onNativeOptionAdd:m,onNativeOptionRemove:p}=c;return dn(()=>(m(x),()=>p(x)),[m,p,x]),I.jsxs(I.Fragment,{children:[I.jsx(St.span,{id:l.textId,...o,ref:h}),l.isSelected&&s.valueNode&&!s.valueNodeHasChildren?hs.createPortal(o.children,s.valueNode):null]})});Wx.displayName=Hs;var jx="SelectItemIndicator",Xx=R.forwardRef((t,e)=>{const{__scopeSelect:n,...i}=t;return Vx(jx,n).isSelected?I.jsx(St.span,{"aria-hidden":!0,...i,ref:e}):null});Xx.displayName=jx;var yf="SelectScrollUpButton",aA=R.forwardRef((t,e)=>{const n=Er(yf,t.__scopeSelect),i=Wh(yf,t.__scopeSelect),[r,o]=R.useState(!1),s=zt(e,i.onScrollButtonChange);return dn(()=>{if(n.viewport&&n.isPositioned){let a=function(){const c=l.scrollTop>0;o(c)};const l=n.viewport;return a(),l.addEventListener("scroll",a),()=>l.removeEventListener("scroll",a)}},[n.viewport,n.isPositioned]),r?I.jsx(Yx,{...t,ref:s,onAutoScroll:()=>{const{viewport:a,selectedItem:l}=n;a&&l&&(a.scrollTop=a.scrollTop-l.offsetHeight)}}):null});aA.displayName=yf;var Sf="SelectScrollDownButton",lA=R.forwardRef((t,e)=>{const n=Er(Sf,t.__scopeSelect),i=Wh(Sf,t.__scopeSelect),[r,o]=R.useState(!1),s=zt(e,i.onScrollButtonChange);return dn(()=>{if(n.viewport&&n.isPositioned){let a=function(){const c=l.scrollHeight-l.clientHeight,d=Math.ceil(l.scrollTop)<c;o(d)};const l=n.viewport;return a(),l.addEventListener("scroll",a),()=>l.removeEventListener("scroll",a)}},[n.viewport,n.isPositioned]),r?I.jsx(Yx,{...t,ref:s,onAutoScroll:()=>{const{viewport:a,selectedItem:l}=n;a&&l&&(a.scrollTop=a.scrollTop+l.offsetHeight)}}):null});lA.displayName=Sf;var Yx=R.forwardRef((t,e)=>{const{__scopeSelect:n,onAutoScroll:i,...r}=t,o=Er("SelectScrollButton",n),s=R.useRef(null),a=Wc(n),l=R.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return R.useEffect(()=>()=>l(),[l]),dn(()=>{var d;const c=a().find(f=>f.ref.current===document.activeElement);(d=c==null?void 0:c.ref.current)==null||d.scrollIntoView({block:"nearest"})},[a]),I.jsx(St.div,{"aria-hidden":!0,...r,ref:e,style:{flexShrink:0,...r.style},onPointerDown:wt(r.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(i,50))}),onPointerMove:wt(r.onPointerMove,()=>{var c;(c=o.onItemLeave)==null||c.call(o),s.current===null&&(s.current=window.setInterval(i,50))}),onPointerLeave:wt(r.onPointerLeave,()=>{l()})})}),cA="SelectSeparator",$x=R.forwardRef((t,e)=>{const{__scopeSelect:n,...i}=t;return I.jsx(St.div,{"aria-hidden":!0,...i,ref:e})});$x.displayName=cA;var Ef="SelectArrow",uA=R.forwardRef((t,e)=>{const{__scopeSelect:n,...i}=t,r=jc(n),o=Sr(Ef,n),s=Er(Ef,n);return o.open&&s.position==="popper"?I.jsx(KT,{...r,...i,ref:e}):null});uA.displayName=Ef;var dA="SelectBubbleInput",qx=R.forwardRef(({__scopeSelect:t,value:e,...n},i)=>{const r=R.useRef(null),o=zt(i,r),s=t1(e);return R.useEffect(()=>{const a=r.current;if(!a)return;const l=window.HTMLSelectElement.prototype,d=Object.getOwnPropertyDescriptor(l,"value").set;if(s!==e&&d){const f=new Event("change",{bubbles:!0});d.call(a,e),a.dispatchEvent(f)}},[s,e]),I.jsx(St.select,{...n,style:{...vx,...n.style},ref:o,defaultValue:e})});qx.displayName=dA;function Kx(t){return t===""||t===void 0}function Zx(t){const e=qr(t),n=R.useRef(""),i=R.useRef(0),r=R.useCallback(s=>{const a=n.current+s;e(a),function l(c){n.current=c,window.clearTimeout(i.current),c!==""&&(i.current=window.setTimeout(()=>l(""),1e3))}(a)},[e]),o=R.useCallback(()=>{n.current="",window.clearTimeout(i.current)},[]);return R.useEffect(()=>()=>window.clearTimeout(i.current),[]),[n,r,o]}function Qx(t,e,n){const r=e.length>1&&Array.from(e).every(c=>c===e[0])?e[0]:e,o=n?t.indexOf(n):-1;let s=fA(t,Math.max(o,0));r.length===1&&(s=s.filter(c=>c!==n));const l=s.find(c=>c.textValue.toLowerCase().startsWith(r.toLowerCase()));return l!==n?l:void 0}function fA(t,e){return t.map((n,i)=>t[(e+i)%t.length])}var hA=bx,Jx=Rx,pA=Lx,mA=Dx,gA=Nx,ey=Ix,vA=kx,ty=Hx,ny=Gx,_A=Wx,xA=Xx,iy=$x;/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ry=(t,e)=>{const n=R.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:a="",children:l,...c},d)=>R.createElement("svg",{ref:d,...yA,width:r,height:r,stroke:i,strokeWidth:s?Number(o)*24/Number(r):o,className:["lucide",`lucide-${SA(t)}`,a].join(" "),...c},[...e.map(([f,h])=>R.createElement(f,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=ry("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=ry("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),wA=hA,TA=pA,oy=R.forwardRef(({className:t,children:e,...n},i)=>I.jsxs(Jx,{ref:i,className:$r("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),...n,children:[e,I.jsx(mA,{asChild:!0,children:I.jsx(MA,{className:"h-4 w-4 opacity-50"})})]}));oy.displayName=Jx.displayName;const sy=R.forwardRef(({className:t,children:e,position:n="popper",...i},r)=>I.jsx(gA,{children:I.jsx(ey,{ref:r,className:$r("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",n==="popper"&&"translate-y-1",t),position:n,...i,children:I.jsx(vA,{className:$r("p-1",n==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:e})})}));sy.displayName=ey.displayName;const AA=R.forwardRef(({className:t,...e},n)=>I.jsx(ty,{ref:n,className:$r("py-1.5 pl-8 pr-2 text-sm font-semibold",t),...e}));AA.displayName=ty.displayName;const Mf=R.forwardRef(({className:t,children:e,...n},i)=>I.jsxs(ny,{ref:i,className:$r("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...n,children:[I.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:I.jsx(xA,{children:I.jsx(EA,{className:"h-4 w-4"})})}),I.jsx(_A,{children:e})]}));Mf.displayName=ny.displayName;const bA=R.forwardRef(({className:t,...e},n)=>I.jsx(iy,{ref:n,className:$r("-mx-1 my-1 h-px bg-muted",t),...e}));bA.displayName=iy.displayName;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jh="159",lo={ROTATE:0,DOLLY:1,PAN:2},co={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},CA=0,Ym=1,RA=2,ay=1,Xh=2,yi=3,vr=0,un=1,ri=2,ur=0,qo=1,$m=2,qm=3,Km=4,PA=5,Nr=100,LA=101,DA=102,Zm=103,Qm=104,NA=200,IA=201,UA=202,OA=203,wf=204,Tf=205,FA=206,kA=207,zA=208,BA=209,HA=210,VA=211,GA=212,WA=213,jA=214,XA=0,YA=1,$A=2,gc=3,qA=4,KA=5,ZA=6,QA=7,Yh=0,JA=1,eb=2,dr=0,tb=1,nb=2,ib=3,rb=4,ob=5,ly=300,os=301,ss=302,Af=303,bf=304,Xc=306,Cf=1e3,Xn=1001,Rf=1002,Zt=1003,Jm=1004,zu=1005,Pn=1006,sb=1007,xa=1008,fr=1009,ab=1010,lb=1011,$h=1012,cy=1013,er=1014,tr=1015,ya=1016,uy=1017,dy=1018,Br=1020,cb=1021,Yn=1023,ub=1024,db=1025,Hr=1026,as=1027,fb=1028,fy=1029,hb=1030,hy=1031,py=1033,Bu=33776,Hu=33777,Vu=33778,Gu=33779,eg=35840,tg=35841,ng=35842,ig=35843,my=36196,rg=37492,og=37496,sg=37808,ag=37809,lg=37810,cg=37811,ug=37812,dg=37813,fg=37814,hg=37815,pg=37816,mg=37817,gg=37818,vg=37819,_g=37820,xg=37821,Wu=36492,yg=36494,Sg=36495,pb=36283,Eg=36284,Mg=36285,wg=36286,gy=3e3,Vr=3001,mb=3200,gb=3201,vy=0,vb=1,Ln="",Ot="srgb",Ui="srgb-linear",qh="display-p3",Yc="display-p3-linear",vc="linear",lt="srgb",_c="rec709",xc="p3",uo=7680,Tg=519,_b=512,xb=513,yb=514,_y=515,Sb=516,Eb=517,Mb=518,wb=519,Ag=35044,bg="300 es",Pf=1035,bi=2e3,yc=2001;class no{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zl=Math.PI/180,Sc=180/Math.PI;function ba(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function Tb(t,e){return(t%e+e)%e}function ju(t,e,n){return(1-n)*t+n*e}function Cg(t){return(t&t-1)===0&&t!==0}function Lf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ls(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Ab={DEG2RAD:zl};class Ve{constructor(e=0,n=0){Ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,n,i,r,o,s,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c)}set(e,n,i,r,o,s,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=o,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],g=i[5],x=i[8],m=r[0],p=r[3],u=r[6],v=r[1],_=r[4],y=r[7],S=r[2],A=r[5],w=r[8];return o[0]=s*m+a*v+l*S,o[3]=s*p+a*_+l*A,o[6]=s*u+a*y+l*w,o[1]=c*m+d*v+f*S,o[4]=c*p+d*_+f*A,o[7]=c*u+d*y+f*w,o[2]=h*m+g*v+x*S,o[5]=h*p+g*_+x*A,o[8]=h*u+g*y+x*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*s*d-n*a*c-i*o*d+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*s-a*c,h=a*l-d*o,g=c*o-s*l,x=n*f+i*h+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/x;return e[0]=f*m,e[1]=(r*c-d*i)*m,e[2]=(a*i-r*s)*m,e[3]=h*m,e[4]=(d*n-r*l)*m,e[5]=(r*o-a*n)*m,e[6]=g*m,e[7]=(i*l-c*n)*m,e[8]=(s*n-i*o)*m,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Xu.makeScale(e,n)),this}rotate(e){return this.premultiply(Xu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Xu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xu=new Je;function xy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ec(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function bb(){const t=Ec("canvas");return t.style.display="block",t}const Rg={};function Qs(t){t in Rg||(Rg[t]=!0,console.warn(t))}const Pg=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lg=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),el={[Ui]:{transfer:vc,primaries:_c,toReference:t=>t,fromReference:t=>t},[Ot]:{transfer:lt,primaries:_c,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Yc]:{transfer:vc,primaries:xc,toReference:t=>t.applyMatrix3(Lg),fromReference:t=>t.applyMatrix3(Pg)},[qh]:{transfer:lt,primaries:xc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Lg),fromReference:t=>t.applyMatrix3(Pg).convertLinearToSRGB()}},Cb=new Set([Ui,Yc]),rt={enabled:!0,_workingColorSpace:Ui,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Cb.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=el[e].toReference,r=el[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return el[t].primaries},getTransfer:function(t){return t===Ln?vc:el[t].transfer}};function Ko(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Yu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let fo;class yy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fo===void 0&&(fo=Ec("canvas")),fo.width=e.width,fo.height=e.height;const i=fo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ec("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ko(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ko(n[i]/255)*255):n[i]=Ko(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rb=0;class Sy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=ba(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push($u(r[s].image)):o.push($u(r[s]))}else o=$u(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function $u(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?yy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pb=0;class Sn extends no{constructor(e=Sn.DEFAULT_IMAGE,n=Sn.DEFAULT_MAPPING,i=Xn,r=Xn,o=Pn,s=xa,a=Yn,l=fr,c=Sn.DEFAULT_ANISOTROPY,d=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=ba(),this.name="",this.source=new Sy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Vr?Ot:Ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ly)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cf:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Rf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cf:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Rf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?Vr:gy}set encoding(e){Qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vr?Ot:Ln}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=ly;Sn.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,n=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],g=l[5],x=l[9],m=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-m)<.01&&Math.abs(x-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+m)<.1&&Math.abs(x+p)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(g+1)/2,S=(u+1)/2,A=(d+h)/4,w=(f+m)/4,N=(x+p)/4;return _>y&&_>S?_<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(_),r=A/i,o=w/i):y>S?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=A/r,o=N/r):S<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(S),i=w/o,r=N/o),this.set(i,r,o,n),this}let v=Math.sqrt((p-x)*(p-x)+(f-m)*(f-m)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(f-m)/v,this.z=(h-d)/v,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lb extends no{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new dt(0,0,e,n),this.scissorTest=!1,this.viewport=new dt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Qs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Vr?Ot:Ln),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Sy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends Lb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ey extends Sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Db extends Sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=o[s+0],g=o[s+1],x=o[s+2],m=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=x,e[n+3]=m;return}if(f!==m||l!==h||c!==g||d!==x){let p=1-a;const u=l*h+c*g+d*x+f*m,v=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const S=Math.sqrt(_),A=Math.atan2(S,u*v);p=Math.sin(p*A)/S,a=Math.sin(a*A)/S}const y=a*v;if(l=l*p+h*y,c=c*p+g*y,d=d*p+x*y,f=f*p+m*y,p===1-a){const S=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=S,c*=S,d*=S,f*=S}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=o[s],h=o[s+1],g=o[s+2],x=o[s+3];return e[n]=a*x+d*f+l*g-c*h,e[n+1]=l*x+d*h+c*f-a*g,e[n+2]=c*x+d*g+a*h-l*f,e[n+3]=d*x-a*f-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(o/2),h=l(i/2),g=l(r/2),x=l(o/2);switch(s){case"XYZ":this._x=h*d*f+c*g*x,this._y=c*g*f-h*d*x,this._z=c*d*x+h*g*f,this._w=c*d*f-h*g*x;break;case"YXZ":this._x=h*d*f+c*g*x,this._y=c*g*f-h*d*x,this._z=c*d*x-h*g*f,this._w=c*d*f+h*g*x;break;case"ZXY":this._x=h*d*f-c*g*x,this._y=c*g*f+h*d*x,this._z=c*d*x+h*g*f,this._w=c*d*f-h*g*x;break;case"ZYX":this._x=h*d*f-c*g*x,this._y=c*g*f+h*d*x,this._z=c*d*x-h*g*f,this._w=c*d*f+h*g*x;break;case"YZX":this._x=h*d*f+c*g*x,this._y=c*g*f+h*d*x,this._z=c*d*x-h*g*f,this._w=c*d*f-h*g*x;break;case"XZY":this._x=h*d*f-c*g*x,this._y=c*g*f-h*d*x,this._z=c*d*x+h*g*f,this._w=c*d*f+h*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(d-l)*g,this._y=(o-c)*g,this._z=(s-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+s)/g,this._z=(o+c)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(o-c)/g,this._x=(r+s)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(s-r)/g,this._x=(o+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+s*a+r*c-o*l,this._y=r*d+s*l+o*a-i*c,this._z=o*d+s*c+i*l-r*a,this._w=s*d-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*s+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=s*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=o*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Dg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Dg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*i),d=2*(a*n-o*r),f=2*(o*i-s*n);return this.x=n+l*c+s*f-a*d,this.y=i+l*d+a*c-o*f,this.z=r+l*f+o*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qu.copy(this).projectOnVector(e),this.sub(qu)}reflect(e){return this.sub(qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qu=new D,Dg=new _n;class Ca{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,kn):kn.fromBufferAttribute(o,s),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tl.copy(i.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),nl.subVectors(this.max,Ds),ho.subVectors(e.a,Ds),po.subVectors(e.b,Ds),mo.subVectors(e.c,Ds),Hi.subVectors(po,ho),Vi.subVectors(mo,po),Ar.subVectors(ho,mo);let n=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-Ar.z,Ar.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,Ar.z,0,-Ar.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-Ar.y,Ar.x,0];return!Ku(n,ho,po,mo,nl)||(n=[1,0,0,0,1,0,0,0,1],!Ku(n,ho,po,mo,nl))?!1:(il.crossVectors(Hi,Vi),n=[il.x,il.y,il.z],Ku(n,ho,po,mo,nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new D,new D,new D,new D,new D,new D,new D,new D],kn=new D,tl=new Ca,ho=new D,po=new D,mo=new D,Hi=new D,Vi=new D,Ar=new D,Ds=new D,nl=new D,il=new D,br=new D;function Ku(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){br.fromArray(t,o);const a=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),l=e.dot(br),c=n.dot(br),d=i.dot(br);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Nb=new Ca,Ns=new D,Zu=new D;class Kh{constructor(e=new D,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Nb.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const n=Ns.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ns,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(Zu)),this.expandByPoint(Ns.copy(e.center).sub(Zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new D,Qu=new D,rl=new D,Gi=new D,Ju=new D,ol=new D,ed=new D;class Zh{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,n),gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Qu.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(Qu);const o=e.distanceTo(n)*.5,s=-this.direction.dot(rl),a=Gi.dot(this.direction),l=-Gi.dot(rl),c=Gi.lengthSq(),d=Math.abs(1-s*s);let f,h,g,x;if(d>0)if(f=s*l-a,h=s*a-l,x=o*d,f>=0)if(h>=-x)if(h<=x){const m=1/d;f*=m,h*=m,g=f*(f+s*h+2*a)+h*(s*f+h+2*l)+c}else h=o,f=Math.max(0,-(s*h+a)),g=-f*f+h*(h+2*l)+c;else h=-o,f=Math.max(0,-(s*h+a)),g=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-s*o+a)),h=f>0?-o:Math.min(Math.max(-o,-l),o),g=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-o,-l),o),g=h*(h+2*l)+c):(f=Math.max(0,-(s*o+a)),h=f>0?o:Math.min(Math.max(-o,-l),o),g=-f*f+h*(h+2*l)+c);else h=s>0?-o:o,f=Math.max(0,-(s*h+a)),g=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Qu).addScaledVector(rl,h),g}intersectSphere(e,n){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(o=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(o=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,n,i,r,o){Ju.subVectors(n,e),ol.subVectors(i,e),ed.crossVectors(Ju,ol);let s=this.direction.dot(ed),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Gi.subVectors(this.origin,e);const l=a*this.direction.dot(ol.crossVectors(Gi,ol));if(l<0)return null;const c=a*this.direction.dot(Ju.cross(Gi));if(c<0||l+c>s)return null;const d=-a*Gi.dot(ed);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,n,i,r,o,s,a,l,c,d,f,h,g,x,m,p){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c,d,f,h,g,x,m,p)}set(e,n,i,r,o,s,a,l,c,d,f,h,g,x,m,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=o,u[5]=s,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=g,u[7]=x,u[11]=m,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/go.setFromMatrixColumn(e,0).length(),o=1/go.setFromMatrixColumn(e,1).length(),s=1/go.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const h=s*d,g=s*f,x=a*d,m=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=g+x*c,n[5]=h-m*c,n[9]=-a*l,n[2]=m-h*c,n[6]=x+g*c,n[10]=s*l}else if(e.order==="YXZ"){const h=l*d,g=l*f,x=c*d,m=c*f;n[0]=h+m*a,n[4]=x*a-g,n[8]=s*c,n[1]=s*f,n[5]=s*d,n[9]=-a,n[2]=g*a-x,n[6]=m+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*d,g=l*f,x=c*d,m=c*f;n[0]=h-m*a,n[4]=-s*f,n[8]=x+g*a,n[1]=g+x*a,n[5]=s*d,n[9]=m-h*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*d,g=s*f,x=a*d,m=a*f;n[0]=l*d,n[4]=x*c-g,n[8]=h*c+m,n[1]=l*f,n[5]=m*c+h,n[9]=g*c-x,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,g=s*c,x=a*l,m=a*c;n[0]=l*d,n[4]=m-h*f,n[8]=x*f+g,n[1]=f,n[5]=s*d,n[9]=-a*d,n[2]=-c*d,n[6]=g*f+x,n[10]=h-m*f}else if(e.order==="XZY"){const h=s*l,g=s*c,x=a*l,m=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+m,n[5]=s*d,n[9]=g*f-x,n[2]=x*f-g,n[6]=a*d,n[10]=m*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ib,e,Ub)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Wi.crossVectors(i,hn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Wi.crossVectors(i,hn)),Wi.normalize(),sl.crossVectors(hn,Wi),r[0]=Wi.x,r[4]=sl.x,r[8]=hn.x,r[1]=Wi.y,r[5]=sl.y,r[9]=hn.y,r[2]=Wi.z,r[6]=sl.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],g=i[13],x=i[2],m=i[6],p=i[10],u=i[14],v=i[3],_=i[7],y=i[11],S=i[15],A=r[0],w=r[4],N=r[8],E=r[12],b=r[1],V=r[5],H=r[9],Z=r[13],P=r[2],G=r[6],Y=r[10],j=r[14],U=r[3],z=r[7],W=r[11],le=r[15];return o[0]=s*A+a*b+l*P+c*U,o[4]=s*w+a*V+l*G+c*z,o[8]=s*N+a*H+l*Y+c*W,o[12]=s*E+a*Z+l*j+c*le,o[1]=d*A+f*b+h*P+g*U,o[5]=d*w+f*V+h*G+g*z,o[9]=d*N+f*H+h*Y+g*W,o[13]=d*E+f*Z+h*j+g*le,o[2]=x*A+m*b+p*P+u*U,o[6]=x*w+m*V+p*G+u*z,o[10]=x*N+m*H+p*Y+u*W,o[14]=x*E+m*Z+p*j+u*le,o[3]=v*A+_*b+y*P+S*U,o[7]=v*w+_*V+y*G+S*z,o[11]=v*N+_*H+y*Y+S*W,o[15]=v*E+_*Z+y*j+S*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],g=e[14],x=e[3],m=e[7],p=e[11],u=e[15];return x*(+o*l*f-r*c*f-o*a*h+i*c*h+r*a*g-i*l*g)+m*(+n*l*g-n*c*h+o*s*h-r*s*g+r*c*d-o*l*d)+p*(+n*c*f-n*a*g-o*s*f+i*s*g+o*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*s*f-i*s*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],g=e[11],x=e[12],m=e[13],p=e[14],u=e[15],v=f*p*c-m*h*c+m*l*g-a*p*g-f*l*u+a*h*u,_=x*h*c-d*p*c-x*l*g+s*p*g+d*l*u-s*h*u,y=d*m*c-x*f*c+x*a*g-s*m*g-d*a*u+s*f*u,S=x*f*l-d*m*l-x*a*h+s*m*h+d*a*p-s*f*p,A=n*v+i*_+r*y+o*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=v*w,e[1]=(m*h*o-f*p*o-m*r*g+i*p*g+f*r*u-i*h*u)*w,e[2]=(a*p*o-m*l*o+m*r*c-i*p*c-a*r*u+i*l*u)*w,e[3]=(f*l*o-a*h*o-f*r*c+i*h*c+a*r*g-i*l*g)*w,e[4]=_*w,e[5]=(d*p*o-x*h*o+x*r*g-n*p*g-d*r*u+n*h*u)*w,e[6]=(x*l*o-s*p*o-x*r*c+n*p*c+s*r*u-n*l*u)*w,e[7]=(s*h*o-d*l*o+d*r*c-n*h*c-s*r*g+n*l*g)*w,e[8]=y*w,e[9]=(x*f*o-d*m*o-x*i*g+n*m*g+d*i*u-n*f*u)*w,e[10]=(s*m*o-x*a*o+x*i*c-n*m*c-s*i*u+n*a*u)*w,e[11]=(d*a*o-s*f*o-d*i*c+n*f*c+s*i*g-n*a*g)*w,e[12]=S*w,e[13]=(d*m*r-x*f*r+x*i*h-n*m*h-d*i*p+n*f*p)*w,e[14]=(x*a*r-s*m*r-x*i*l+n*m*l+s*i*p-n*a*p)*w,e[15]=(s*f*r-d*a*r+d*i*l-n*f*l-s*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,d=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*s,0,c*l-r*a,d*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,d=s+s,f=a+a,h=o*c,g=o*d,x=o*f,m=s*d,p=s*f,u=a*f,v=l*c,_=l*d,y=l*f,S=i.x,A=i.y,w=i.z;return r[0]=(1-(m+u))*S,r[1]=(g+y)*S,r[2]=(x-_)*S,r[3]=0,r[4]=(g-y)*A,r[5]=(1-(h+u))*A,r[6]=(p+v)*A,r[7]=0,r[8]=(x+_)*w,r[9]=(p-v)*w,r[10]=(1-(h+m))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=go.set(r[0],r[1],r[2]).length();const s=go.set(r[4],r[5],r[6]).length(),a=go.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const c=1/o,d=1/s,f=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=d,zn.elements[5]*=d,zn.elements[6]*=d,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,n.setFromRotationMatrix(zn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=bi){const l=this.elements,c=2*o/(n-e),d=2*o/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let g,x;if(a===bi)g=-(s+o)/(s-o),x=-2*s*o/(s-o);else if(a===yc)g=-s/(s-o),x=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=bi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(s-o),h=(n+e)*c,g=(i+r)*d;let x,m;if(a===bi)x=(s+o)*f,m=-2*f;else if(a===yc)x=o*f,m=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=m,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const go=new D,zn=new ft,Ib=new D(0,0,0),Ub=new D(1,1,1),Wi=new D,sl=new D,hn=new D,Ng=new ft,Ig=new _n;class $c{constructor(e=0,n=0,i=0,r=$c.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Qt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ng.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ng,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ig.setFromEuler(this),this.setFromQuaternion(Ig,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$c.DEFAULT_ORDER="XYZ";class Qh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ob=0;const Ug=new D,vo=new _n,vi=new ft,al=new D,Is=new D,Fb=new D,kb=new _n,Og=new D(1,0,0),Fg=new D(0,1,0),kg=new D(0,0,1),zb={type:"added"},Bb={type:"removed"};class It extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new D,n=new $c,i=new _n,r=new D(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Je}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vo.setFromAxisAngle(e,n),this.quaternion.multiply(vo),this}rotateOnWorldAxis(e,n){return vo.setFromAxisAngle(e,n),this.quaternion.premultiply(vo),this}rotateX(e){return this.rotateOnAxis(Og,e)}rotateY(e){return this.rotateOnAxis(Fg,e)}rotateZ(e){return this.rotateOnAxis(kg,e)}translateOnAxis(e,n){return Ug.copy(e).applyQuaternion(this.quaternion),this.position.add(Ug.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Og,e)}translateY(e){return this.translateOnAxis(Fg,e)}translateZ(e){return this.translateOnAxis(kg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?al.copy(e):al.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Is,al,this.up):vi.lookAt(al,Is,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),vo.setFromRotationMatrix(vi),this.quaternion.premultiply(vo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Bb)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,Fb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,kb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),f=s(e.shapes),h=s(e.skeletons),g=s(e.animations),x=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function s(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}It.DEFAULT_UP=new D(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new D,_i=new D,td=new D,xi=new D,_o=new D,xo=new D,zg=new D,nd=new D,id=new D,rd=new D;let ll=!1;class jn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Bn.subVectors(r,n),_i.subVectors(i,n),td.subVectors(e,n);const s=Bn.dot(Bn),a=Bn.dot(_i),l=Bn.dot(td),c=_i.dot(_i),d=_i.dot(td),f=s*c-a*a;if(f===0)return o.set(-2,-1,-1);const h=1/f,g=(c*l-a*d)*h,x=(s*d-a*l)*h;return o.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,xi),xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getUV(e,n,i,r,o,s,a,l){return ll===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ll=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,xi),l.setScalar(0),l.addScaledVector(o,xi.x),l.addScaledVector(s,xi.y),l.addScaledVector(a,xi.z),l}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),_i.subVectors(e,n),Bn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Bn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return ll===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ll=!0),jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;_o.subVectors(r,i),xo.subVectors(o,i),nd.subVectors(e,i);const l=_o.dot(nd),c=xo.dot(nd);if(l<=0&&c<=0)return n.copy(i);id.subVectors(e,r);const d=_o.dot(id),f=xo.dot(id);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(_o,s);rd.subVectors(e,o);const g=_o.dot(rd),x=xo.dot(rd);if(x>=0&&g<=x)return n.copy(o);const m=g*c-l*x;if(m<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(xo,a);const p=d*x-g*f;if(p<=0&&f-d>=0&&g-x>=0)return zg.subVectors(o,r),a=(f-d)/(f-d+(g-x)),n.copy(r).addScaledVector(zg,a);const u=1/(p+m+h);return s=m*u,a=h*u,n.copy(i).addScaledVector(_o,s).addScaledVector(xo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const My={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},cl={h:0,s:0,l:0};function od(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=Tb(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=od(s,o,e+1/3),this.g=od(s,o,e),this.b=od(s,o,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,n=Ot){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ot){const i=My[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ko(e.r),this.g=Ko(e.g),this.b=Ko(e.b),this}copyLinearToSRGB(e){return this.r=Yu(e.r),this.g=Yu(e.g),this.b=Yu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return rt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Qt(Xt.r*255,0,255))*65536+Math.round(Qt(Xt.g*255,0,255))*256+Math.round(Qt(Xt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,o=Xt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const d=(a+s)/2;if(a===s)l=0,c=0;else{const f=s-a;switch(c=d<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=rt.workingColorSpace){return rt.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ot){rt.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==Ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(cl);const i=ju(ji.h,cl.h,n),r=ju(ji.s,cl.s,n),o=ju(ji.l,cl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Xe;Xe.NAMES=My;let Hb=0;class Ra extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=ba(),this.name="",this.type="Material",this.blending=qo,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wf,this.blendDst=Tf,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=gc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qo&&(i.blending=this.blending),this.side!==vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wf&&(i.blendSrc=this.blendSrc),this.blendDst!==Tf&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==uo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==uo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==uo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jh extends Ra{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new D,ul=new Ve;class ci{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ag,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ls(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ls(n,this.array)),n}setX(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ls(n,this.array)),n}setY(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ls(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ls(n,this.array)),n}setW(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array),o=rn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ag&&(e.usage=this.usage),e}}class wy extends ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ty extends ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ui extends ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Vb=0;const bn=new ft,sd=new It,yo=new D,pn=new Ca,Us=new Ca,Lt=new D;class Mr extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=ba(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xy(e)?Ty:wy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Je().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return sd.lookAt(e),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new ui(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ca);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];pn.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(pn.min,Us.min),pn.expandByPoint(Lt),Lt.addVectors(pn.max,Us.max),pn.expandByPoint(Lt)):(pn.expandByPoint(Us.min),pn.expandByPoint(Us.max))}pn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Lt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Lt.fromBufferAttribute(a,c),l&&(yo.fromBufferAttribute(e,c),Lt.add(yo)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let b=0;b<a;b++)c[b]=new D,d[b]=new D;const f=new D,h=new D,g=new D,x=new Ve,m=new Ve,p=new Ve,u=new D,v=new D;function _(b,V,H){f.fromArray(r,b*3),h.fromArray(r,V*3),g.fromArray(r,H*3),x.fromArray(s,b*2),m.fromArray(s,V*2),p.fromArray(s,H*2),h.sub(f),g.sub(f),m.sub(x),p.sub(x);const Z=1/(m.x*p.y-p.x*m.y);isFinite(Z)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(g,-m.y).multiplyScalar(Z),v.copy(g).multiplyScalar(m.x).addScaledVector(h,-p.x).multiplyScalar(Z),c[b].add(u),c[V].add(u),c[H].add(u),d[b].add(v),d[V].add(v),d[H].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let b=0,V=y.length;b<V;++b){const H=y[b],Z=H.start,P=H.count;for(let G=Z,Y=Z+P;G<Y;G+=3)_(i[G+0],i[G+1],i[G+2])}const S=new D,A=new D,w=new D,N=new D;function E(b){w.fromArray(o,b*3),N.copy(w);const V=c[b];S.copy(V),S.sub(w.multiplyScalar(w.dot(V))).normalize(),A.crossVectors(N,V);const Z=A.dot(d[b])<0?-1:1;l[b*4]=S.x,l[b*4+1]=S.y,l[b*4+2]=S.z,l[b*4+3]=Z}for(let b=0,V=y.length;b<V;++b){const H=y[b],Z=H.start,P=H.count;for(let G=Z,Y=Z+P;G<Y;G+=3)E(i[G+0]),E(i[G+1]),E(i[G+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new D,o=new D,s=new D,a=new D,l=new D,c=new D,d=new D,f=new D;if(e)for(let h=0,g=e.count;h<g;h+=3){const x=e.getX(h+0),m=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),s.fromBufferAttribute(n,p),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let g=0,x=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?g=l[m]*a.data.stride+a.offset:g=l[m]*d;for(let u=0;u<d;u++)h[x++]=c[g++]}return new ci(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const g=c[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const o=e.morphAttributes;for(const c in o){const d=[],f=o[c];for(let h=0,g=f.length;h<g;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bg=new ft,Cr=new Zh,dl=new Kh,Hg=new D,So=new D,Eo=new D,Mo=new D,ad=new D,fl=new D,hl=new Ve,pl=new Ve,ml=new Ve,Vg=new D,Gg=new D,Wg=new D,gl=new D,vl=new D;class Nn extends It{constructor(e=new Mr,n=new Jh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){fl.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const d=a[l],f=o[l];d!==0&&(ad.fromBufferAttribute(f,e),s?fl.addScaledVector(ad,d):fl.addScaledVector(ad.sub(n),d))}n.add(fl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dl.copy(i.boundingSphere),dl.applyMatrix4(o),Cr.copy(e.ray).recast(e.near),!(dl.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(dl,Hg)===null||Cr.origin.distanceToSquared(Hg)>(e.far-e.near)**2))&&(Bg.copy(o).invert(),Cr.copy(e.ray).applyMatrix4(Bg),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Cr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,d=o.attributes.uv1,f=o.attributes.normal,h=o.groups,g=o.drawRange;if(a!==null)if(Array.isArray(s))for(let x=0,m=h.length;x<m;x++){const p=h[x],u=s[p.materialIndex],v=Math.max(p.start,g.start),_=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let y=v,S=_;y<S;y+=3){const A=a.getX(y),w=a.getX(y+1),N=a.getX(y+2);r=_l(this,u,e,i,c,d,f,A,w,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),m=Math.min(a.count,g.start+g.count);for(let p=x,u=m;p<u;p+=3){const v=a.getX(p),_=a.getX(p+1),y=a.getX(p+2);r=_l(this,s,e,i,c,d,f,v,_,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,m=h.length;x<m;x++){const p=h[x],u=s[p.materialIndex],v=Math.max(p.start,g.start),_=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let y=v,S=_;y<S;y+=3){const A=y,w=y+1,N=y+2;r=_l(this,u,e,i,c,d,f,A,w,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),m=Math.min(l.count,g.start+g.count);for(let p=x,u=m;p<u;p+=3){const v=p,_=p+1,y=p+2;r=_l(this,s,e,i,c,d,f,v,_,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function Gb(t,e,n,i,r,o,s,a){let l;if(e.side===un?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===vr,a),l===null)return null;vl.copy(a),vl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(vl);return c<n.near||c>n.far?null:{distance:c,point:vl.clone(),object:t}}function _l(t,e,n,i,r,o,s,a,l,c){t.getVertexPosition(a,So),t.getVertexPosition(l,Eo),t.getVertexPosition(c,Mo);const d=Gb(t,e,n,i,So,Eo,Mo,gl);if(d){r&&(hl.fromBufferAttribute(r,a),pl.fromBufferAttribute(r,l),ml.fromBufferAttribute(r,c),d.uv=jn.getInterpolation(gl,So,Eo,Mo,hl,pl,ml,new Ve)),o&&(hl.fromBufferAttribute(o,a),pl.fromBufferAttribute(o,l),ml.fromBufferAttribute(o,c),d.uv1=jn.getInterpolation(gl,So,Eo,Mo,hl,pl,ml,new Ve),d.uv2=d.uv1),s&&(Vg.fromBufferAttribute(s,a),Gg.fromBufferAttribute(s,l),Wg.fromBufferAttribute(s,c),d.normal=jn.getInterpolation(gl,So,Eo,Mo,Vg,Gg,Wg,new D),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};jn.getNormal(So,Eo,Mo,f.normal),d.face=f}return d}class Pa extends Mr{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],d=[],f=[];let h=0,g=0;x("z","y","x",-1,-1,i,n,e,s,o,0),x("z","y","x",1,-1,i,n,-e,s,o,1),x("x","z","y",1,1,e,i,n,r,s,2),x("x","z","y",1,-1,e,i,-n,r,s,3),x("x","y","z",1,-1,e,n,i,r,o,4),x("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new ui(c,3)),this.setAttribute("normal",new ui(d,3)),this.setAttribute("uv",new ui(f,2));function x(m,p,u,v,_,y,S,A,w,N,E){const b=y/w,V=S/N,H=y/2,Z=S/2,P=A/2,G=w+1,Y=N+1;let j=0,U=0;const z=new D;for(let W=0;W<Y;W++){const le=W*V-Z;for(let fe=0;fe<G;fe++){const ee=fe*b-H;z[m]=ee*v,z[p]=le*_,z[u]=P,c.push(z.x,z.y,z.z),z[m]=0,z[p]=0,z[u]=A>0?1:-1,d.push(z.x,z.y,z.z),f.push(fe/w),f.push(1-W/N),j+=1}}for(let W=0;W<N;W++)for(let le=0;le<w;le++){const fe=h+le+G*W,ee=h+le+G*(W+1),k=h+(le+1)+G*(W+1),ce=h+(le+1)+G*W;l.push(fe,ee,ce),l.push(ee,k,ce),U+=6}a.addGroup(g,U,E),g+=U,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ls(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=ls(t[n]);for(const r in i)e[r]=i[r]}return e}function Wb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ay(t){return t.getRenderTarget()===null?t.outputColorSpace:rt.workingColorSpace}const jb={clone:ls,merge:qt};var Xb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Ra{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xb,this.fragmentShader=Yb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=Wb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class by extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Jt extends by{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Sc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sc*2*Math.atan(Math.tan(zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const wo=-90,To=1;class $b extends It{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(wo,To,e,n);r.layers=this.layers,this.add(r);const o=new Jt(wo,To,e,n);o.layers=this.layers,this.add(o);const s=new Jt(wo,To,e,n);s.layers=this.layers,this.add(s);const a=new Jt(wo,To,e,n);a.layers=this.layers,this.add(a);const l=new Jt(wo,To,e,n);l.layers=this.layers,this.add(l);const c=new Jt(wo,To,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Cy extends Sn{constructor(e,n,i,r,o,s,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:os,super(e,n,i,r,o,s,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qb extends Jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Qs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vr?Ot:Ln),this.texture=new Cy(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Pa(5,5,5),o=new Oi({name:"CubemapFromEquirect",uniforms:ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:ur});o.uniforms.tEquirect.value=n;const s=new Nn(r,o),a=n.minFilter;return n.minFilter===xa&&(n.minFilter=Pn),new $b(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const ld=new D,Kb=new D,Zb=new Je;class qi{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ld.subVectors(i,n).cross(Kb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ld),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Zb.getNormalMatrix(e),r=this.coplanarPoint(ld).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new Kh,xl=new D;class ep{constructor(e=new qi,n=new qi,i=new qi,r=new qi,o=new qi,s=new qi){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=bi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],g=r[8],x=r[9],m=r[10],p=r[11],u=r[12],v=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-o,h-c,p-g,y-u).normalize(),i[1].setComponents(l+o,h+c,p+g,y+u).normalize(),i[2].setComponents(l+s,h+d,p+x,y+v).normalize(),i[3].setComponents(l-s,h-d,p-x,y-v).normalize(),i[4].setComponents(l-a,h-f,p-m,y-_).normalize(),n===bi)i[5].setComponents(l+a,h+f,p+m,y+_).normalize();else if(n===yc)i[5].setComponents(a,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(xl.x=r.normal.x>0?e.max.x:e.min.x,xl.y=r.normal.y>0?e.max.y:e.min.y,xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ry(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function Qb(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,g=f.byteLength,x=t.createBuffer();t.bindBuffer(d,x),t.bufferData(d,f,h),c.onUploadCallback();let m;if(f instanceof Float32Array)m=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)m=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)m=t.SHORT;else if(f instanceof Uint32Array)m=t.UNSIGNED_INT;else if(f instanceof Int32Array)m=t.INT;else if(f instanceof Int8Array)m=t.BYTE;else if(f instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function o(c,d,f){const h=d.array,g=d._updateRange,x=d.updateRanges;if(t.bindBuffer(f,c),g.count===-1&&x.length===0&&t.bufferSubData(f,0,h),x.length!==0){for(let m=0,p=x.length;m<p;m++){const u=x[m];n?t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(f,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):t.bufferSubData(f,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(f.buffer,c,d),f.version=c.version}}return{get:s,remove:a,update:l}}class tp extends Mr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,g=[],x=[],m=[],p=[];for(let u=0;u<d;u++){const v=u*h-s;for(let _=0;_<c;_++){const y=_*f-o;x.push(y,-v,0),m.push(0,0,1),p.push(_/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const _=v+c*u,y=v+c*(u+1),S=v+1+c*(u+1),A=v+1+c*u;g.push(_,y,A),g.push(y,S,A)}this.setIndex(g),this.setAttribute("position",new ui(x,3)),this.setAttribute("normal",new ui(m,3)),this.setAttribute("uv",new ui(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tp(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iC=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aC=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,mC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_C=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,SC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,EC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,MC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RC="gl_FragColor = linearToOutputTexel( gl_FragColor );",PC=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,LC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,OC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,HC=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,VC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,XC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,YC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$C=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fR=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,pR=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,mR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_R=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ER=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,CR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,UR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,VR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$R=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_P=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,MP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,PP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:Jb,alphahash_pars_fragment:eC,alphamap_fragment:tC,alphamap_pars_fragment:nC,alphatest_fragment:iC,alphatest_pars_fragment:rC,aomap_fragment:oC,aomap_pars_fragment:sC,batching_pars_vertex:aC,batching_vertex:lC,begin_vertex:cC,beginnormal_vertex:uC,bsdfs:dC,iridescence_fragment:fC,bumpmap_pars_fragment:hC,clipping_planes_fragment:pC,clipping_planes_pars_fragment:mC,clipping_planes_pars_vertex:gC,clipping_planes_vertex:vC,color_fragment:_C,color_pars_fragment:xC,color_pars_vertex:yC,color_vertex:SC,common:EC,cube_uv_reflection_fragment:MC,defaultnormal_vertex:wC,displacementmap_pars_vertex:TC,displacementmap_vertex:AC,emissivemap_fragment:bC,emissivemap_pars_fragment:CC,colorspace_fragment:RC,colorspace_pars_fragment:PC,envmap_fragment:LC,envmap_common_pars_fragment:DC,envmap_pars_fragment:NC,envmap_pars_vertex:IC,envmap_physical_pars_fragment:XC,envmap_vertex:UC,fog_vertex:OC,fog_pars_vertex:FC,fog_fragment:kC,fog_pars_fragment:zC,gradientmap_pars_fragment:BC,lightmap_fragment:HC,lightmap_pars_fragment:VC,lights_lambert_fragment:GC,lights_lambert_pars_fragment:WC,lights_pars_begin:jC,lights_toon_fragment:YC,lights_toon_pars_fragment:$C,lights_phong_fragment:qC,lights_phong_pars_fragment:KC,lights_physical_fragment:ZC,lights_physical_pars_fragment:QC,lights_fragment_begin:JC,lights_fragment_maps:eR,lights_fragment_end:tR,logdepthbuf_fragment:nR,logdepthbuf_pars_fragment:iR,logdepthbuf_pars_vertex:rR,logdepthbuf_vertex:oR,map_fragment:sR,map_pars_fragment:aR,map_particle_fragment:lR,map_particle_pars_fragment:cR,metalnessmap_fragment:uR,metalnessmap_pars_fragment:dR,morphcolor_vertex:fR,morphnormal_vertex:hR,morphtarget_pars_vertex:pR,morphtarget_vertex:mR,normal_fragment_begin:gR,normal_fragment_maps:vR,normal_pars_fragment:_R,normal_pars_vertex:xR,normal_vertex:yR,normalmap_pars_fragment:SR,clearcoat_normal_fragment_begin:ER,clearcoat_normal_fragment_maps:MR,clearcoat_pars_fragment:wR,iridescence_pars_fragment:TR,opaque_fragment:AR,packing:bR,premultiplied_alpha_fragment:CR,project_vertex:RR,dithering_fragment:PR,dithering_pars_fragment:LR,roughnessmap_fragment:DR,roughnessmap_pars_fragment:NR,shadowmap_pars_fragment:IR,shadowmap_pars_vertex:UR,shadowmap_vertex:OR,shadowmask_pars_fragment:FR,skinbase_vertex:kR,skinning_pars_vertex:zR,skinning_vertex:BR,skinnormal_vertex:HR,specularmap_fragment:VR,specularmap_pars_fragment:GR,tonemapping_fragment:WR,tonemapping_pars_fragment:jR,transmission_fragment:XR,transmission_pars_fragment:YR,uv_pars_fragment:$R,uv_pars_vertex:qR,uv_vertex:KR,worldpos_vertex:ZR,background_vert:QR,background_frag:JR,backgroundCube_vert:eP,backgroundCube_frag:tP,cube_vert:nP,cube_frag:iP,depth_vert:rP,depth_frag:oP,distanceRGBA_vert:sP,distanceRGBA_frag:aP,equirect_vert:lP,equirect_frag:cP,linedashed_vert:uP,linedashed_frag:dP,meshbasic_vert:fP,meshbasic_frag:hP,meshlambert_vert:pP,meshlambert_frag:mP,meshmatcap_vert:gP,meshmatcap_frag:vP,meshnormal_vert:_P,meshnormal_frag:xP,meshphong_vert:yP,meshphong_frag:SP,meshphysical_vert:EP,meshphysical_frag:MP,meshtoon_vert:wP,meshtoon_frag:TP,points_vert:AP,points_frag:bP,shadow_vert:CP,shadow_frag:RP,sprite_vert:PP,sprite_frag:LP},be={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ti={basic:{uniforms:qt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:qt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Xe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:qt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:qt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:qt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Xe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:qt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:qt([be.points,be.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:qt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:qt([be.common,be.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:qt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:qt([be.sprite,be.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:qt([be.common,be.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:qt([be.lights,be.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};ti.physical={uniforms:qt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const yl={r:0,b:0,g:0};function DP(t,e,n,i,r,o,s){const a=new Xe(0);let l=o===!0?0:1,c,d,f=null,h=0,g=null;function x(p,u){let v=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?n:e).get(_)),_===null?m(a,l):_&&_.isColor&&(m(_,1),v=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Xc)?(d===void 0&&(d=new Nn(new Pa(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:ls(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(S,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=rt.getTransfer(_.colorSpace)!==lt,(f!==_||h!==_.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,f=_,h=_.version,g=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Nn(new tp(2,2),new Oi({name:"BackgroundMaterial",uniforms:ls(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=rt.getTransfer(_.colorSpace)!==lt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,u){p.getRGB(yl,Ay(t)),i.buffers.color.setClear(yl.r,yl.g,yl.b,u,s)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(a,l)},render:x}}function NP(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=p(null);let c=l,d=!1;function f(P,G,Y,j,U){let z=!1;if(s){const W=m(j,Y,G);c!==W&&(c=W,g(c.object)),z=u(P,j,Y,U),z&&v(P,j,Y,U)}else{const W=G.wireframe===!0;(c.geometry!==j.id||c.program!==Y.id||c.wireframe!==W)&&(c.geometry=j.id,c.program=Y.id,c.wireframe=W,z=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(z||d)&&(d=!1,N(P,G,Y,j),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function h(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function g(P){return i.isWebGL2?t.bindVertexArray(P):o.bindVertexArrayOES(P)}function x(P){return i.isWebGL2?t.deleteVertexArray(P):o.deleteVertexArrayOES(P)}function m(P,G,Y){const j=Y.wireframe===!0;let U=a[P.id];U===void 0&&(U={},a[P.id]=U);let z=U[G.id];z===void 0&&(z={},U[G.id]=z);let W=z[j];return W===void 0&&(W=p(h()),z[j]=W),W}function p(P){const G=[],Y=[],j=[];for(let U=0;U<r;U++)G[U]=0,Y[U]=0,j[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:j,object:P,attributes:{},index:null}}function u(P,G,Y,j){const U=c.attributes,z=G.attributes;let W=0;const le=Y.getAttributes();for(const fe in le)if(le[fe].location>=0){const k=U[fe];let ce=z[fe];if(ce===void 0&&(fe==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),fe==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),k===void 0||k.attribute!==ce||ce&&k.data!==ce.data)return!0;W++}return c.attributesNum!==W||c.index!==j}function v(P,G,Y,j){const U={},z=G.attributes;let W=0;const le=Y.getAttributes();for(const fe in le)if(le[fe].location>=0){let k=z[fe];k===void 0&&(fe==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),fe==="instanceColor"&&P.instanceColor&&(k=P.instanceColor));const ce={};ce.attribute=k,k&&k.data&&(ce.data=k.data),U[fe]=ce,W++}c.attributes=U,c.attributesNum=W,c.index=j}function _(){const P=c.newAttributes;for(let G=0,Y=P.length;G<Y;G++)P[G]=0}function y(P){S(P,0)}function S(P,G){const Y=c.newAttributes,j=c.enabledAttributes,U=c.attributeDivisors;Y[P]=1,j[P]===0&&(t.enableVertexAttribArray(P),j[P]=1),U[P]!==G&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,G),U[P]=G)}function A(){const P=c.newAttributes,G=c.enabledAttributes;for(let Y=0,j=G.length;Y<j;Y++)G[Y]!==P[Y]&&(t.disableVertexAttribArray(Y),G[Y]=0)}function w(P,G,Y,j,U,z,W){W===!0?t.vertexAttribIPointer(P,G,Y,U,z):t.vertexAttribPointer(P,G,Y,j,U,z)}function N(P,G,Y,j){if(i.isWebGL2===!1&&(P.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const U=j.attributes,z=Y.getAttributes(),W=G.defaultAttributeValues;for(const le in z){const fe=z[le];if(fe.location>=0){let ee=U[le];if(ee===void 0&&(le==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),le==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor)),ee!==void 0){const k=ee.normalized,ce=ee.itemSize,ie=n.get(ee);if(ie===void 0)continue;const ne=ie.buffer,pe=ie.type,Se=ie.bytesPerElement,_e=i.isWebGL2===!0&&(pe===t.INT||pe===t.UNSIGNED_INT||ee.gpuType===cy);if(ee.isInterleavedBufferAttribute){const Ee=ee.data,F=Ee.stride,Ye=ee.offset;if(Ee.isInstancedInterleavedBuffer){for(let Ce=0;Ce<fe.locationSize;Ce++)S(fe.location+Ce,Ee.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ce=0;Ce<fe.locationSize;Ce++)y(fe.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,ne);for(let Ce=0;Ce<fe.locationSize;Ce++)w(fe.location+Ce,ce/fe.locationSize,pe,k,F*Se,(Ye+ce/fe.locationSize*Ce)*Se,_e)}else{if(ee.isInstancedBufferAttribute){for(let Ee=0;Ee<fe.locationSize;Ee++)S(fe.location+Ee,ee.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ee=0;Ee<fe.locationSize;Ee++)y(fe.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,ne);for(let Ee=0;Ee<fe.locationSize;Ee++)w(fe.location+Ee,ce/fe.locationSize,pe,k,ce*Se,ce/fe.locationSize*Ee*Se,_e)}}else if(W!==void 0){const k=W[le];if(k!==void 0)switch(k.length){case 2:t.vertexAttrib2fv(fe.location,k);break;case 3:t.vertexAttrib3fv(fe.location,k);break;case 4:t.vertexAttrib4fv(fe.location,k);break;default:t.vertexAttrib1fv(fe.location,k)}}}}A()}function E(){H();for(const P in a){const G=a[P];for(const Y in G){const j=G[Y];for(const U in j)x(j[U].object),delete j[U];delete G[Y]}delete a[P]}}function b(P){if(a[P.id]===void 0)return;const G=a[P.id];for(const Y in G){const j=G[Y];for(const U in j)x(j[U].object),delete j[U];delete G[Y]}delete a[P.id]}function V(P){for(const G in a){const Y=a[G];if(Y[P.id]===void 0)continue;const j=Y[P.id];for(const U in j)x(j[U].object),delete j[U];delete Y[P.id]}}function H(){Z(),d=!0,c!==l&&(c=l,g(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:H,resetDefaultState:Z,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:V,initAttributes:_,enableAttribute:y,disableUnusedAttributes:A}}function IP(t,e,n,i){const r=i.isWebGL2;let o;function s(d){o=d}function a(d,f){t.drawArrays(o,d,f),n.update(f,o,1)}function l(d,f,h){if(h===0)return;let g,x;if(r)g=t,x="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[x](o,d,f,h),n.update(f,o,h)}function c(d,f,h){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<h;x++)this.render(d[x],f[x]);else{g.multiDrawArraysWEBGL(o,d,0,f,0,h);let x=0;for(let m=0;m<h;m++)x+=f[m];n.update(x,o,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function UP(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,y=s||e.has("OES_texture_float"),S=_&&y,A=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:A}}function OP(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new qi,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const g=f.length!==0||h||i!==0||r;return r=h,i=f.length,g},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,g){const x=f.clippingPlanes,m=f.clipIntersection,p=f.clipShadows,u=t.get(f);if(!r||x===null||x.length===0||o&&!p)o?d(null):c();else{const v=o?0:i,_=v*4;let y=u.clippingState||null;l.value=y,y=d(x,h,_,g);for(let S=0;S!==_;++S)y[S]=n[S];u.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,g,x){const m=f!==null?f.length:0;let p=null;if(m!==0){if(p=l.value,x!==!0||p===null){const u=g+m*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let _=0,y=g;_!==m;++_,y+=4)s.copy(f[_]).applyMatrix4(v,a),s.normal.toArray(p,y),p[y+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function FP(t){let e=new WeakMap;function n(s,a){return a===Af?s.mapping=os:a===bf&&(s.mapping=ss),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Af||a===bf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new qb(l.height/2);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Py extends by{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const zo=4,jg=[.125,.215,.35,.446,.526,.582],Ir=20,cd=new Py,Xg=new Xe;let ud=null,dd=0,fd=0;const Dr=(1+Math.sqrt(5))/2,Ao=1/Dr,Yg=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Dr,Ao),new D(0,Dr,-Ao),new D(Ao,0,Dr),new D(-Ao,0,Dr),new D(Dr,Ao,0),new D(-Dr,Ao,0)];class $g{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ud=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ud,dd,fd),e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===os||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ud=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:ya,format:Yn,colorSpace:Ui,depthBuffer:!1},r=qg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qg(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kP(o)),this._blurMaterial=zP(o,e,n)}return r}_compileMaterial(e){const n=new Nn(this._lodPlanes[0],e);this._renderer.compile(n,cd)}_sceneToCubeUV(e,n,i,r){const a=new Jt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Xg),d.toneMapping=dr,d.autoClear=!1;const g=new Jh({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),x=new Nn(new Pa,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Xg),m=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const _=this._cubeSize;Sl(r,v*_,u>2?_:0,_,_),d.setRenderTarget(r),m&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===os||e.mapping===ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kg());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Nn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Sl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,cd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Yg[(r-1)%Yg.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Nn(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(o)?Math.PI/(2*g):2*Math.PI/(2*Ir-1),m=o/x,p=isFinite(o)?1+Math.floor(d*m):Ir;p>Ir&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ir}`);const u=[];let v=0;for(let w=0;w<Ir;++w){const N=w/m,E=Math.exp(-N*N/2);u.push(E),w===0?v+=E:w<p&&(v+=2*E)}for(let w=0;w<u.length;w++)u[w]=u[w]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=x,h.mipInt.value=_-i;const y=this._sizeLods[r],S=3*y*(r>_-zo?r-_+zo:0),A=4*(this._cubeSize-y);Sl(n,S,A,3*y,2*y),l.setRenderTarget(n),l.render(f,cd)}}function kP(t){const e=[],n=[],i=[];let r=t;const o=t-zo+1+jg.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-zo?l=jg[s-t+zo-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,x=6,m=3,p=2,u=1,v=new Float32Array(m*x*g),_=new Float32Array(p*x*g),y=new Float32Array(u*x*g);for(let A=0;A<g;A++){const w=A%3*2/3-1,N=A>2?0:-1,E=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];v.set(E,m*x*A),_.set(h,p*x*A);const b=[A,A,A,A,A,A];y.set(b,u*x*A)}const S=new Mr;S.setAttribute("position",new ci(v,m)),S.setAttribute("uv",new ci(_,p)),S.setAttribute("faceIndex",new ci(y,u)),e.push(S),r>zo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function qg(t,e,n){const i=new Jr(t,e,n);return i.texture.mapping=Xc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function zP(t,e,n){const i=new Float32Array(Ir),r=new D(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Kg(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Zg(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function np(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function BP(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Af||l===bf,d=l===os||l===ss;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new $g(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new $g(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function HP(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function VP(t,e,n,i){const r={},o=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const m=h.morphAttributes[x];for(let p=0,u=m.length;p<u;p++)e.remove(m[p])}h.removeEventListener("dispose",s),delete r[h.id];const g=o.get(h);g&&(e.remove(g),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const x in g){const m=g[x];for(let p=0,u=m.length;p<u;p++)e.update(m[p],t.ARRAY_BUFFER)}}function c(f){const h=[],g=f.index,x=f.attributes.position;let m=0;if(g!==null){const v=g.array;m=g.version;for(let _=0,y=v.length;_<y;_+=3){const S=v[_+0],A=v[_+1],w=v[_+2];h.push(S,A,A,w,w,S)}}else if(x!==void 0){const v=x.array;m=x.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const S=_+0,A=_+1,w=_+2;h.push(S,A,A,w,w,S)}}else return;const p=new(xy(h)?Ty:wy)(h,1);p.version=m;const u=o.get(f);u&&e.remove(u),o.set(f,p)}function d(f){const h=o.get(f);if(h){const g=f.index;g!==null&&h.version<g.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function GP(t,e,n,i){const r=i.isWebGL2;let o;function s(g){o=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function d(g,x){t.drawElements(o,x,a,g*l),n.update(x,o,1)}function f(g,x,m){if(m===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](o,x,a,g*l,m),n.update(x,o,m)}function h(g,x,m){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<m;u++)this.render(g[u]/l,x[u]);else{p.multiDrawElementsWEBGL(o,x,0,a,g,0,m);let u=0;for(let v=0;v<m;v++)u+=x[v];n.update(u,o,1)}}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function WP(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function jP(t,e){return t[0]-e[0]}function XP(t,e){return Math.abs(e[1])-Math.abs(t[1])}function YP(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new dt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=x!==void 0?x.length:0;let p=o.get(d);if(p===void 0||p.count!==m){let G=function(){Z.dispose(),o.delete(d),d.removeEventListener("dispose",G)};var g=G;p!==void 0&&p.texture.dispose();const _=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let E=0;_===!0&&(E=1),y===!0&&(E=2),S===!0&&(E=3);let b=d.attributes.position.count*E,V=1;b>e.maxTextureSize&&(V=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const H=new Float32Array(b*V*4*m),Z=new Ey(H,b,V,m);Z.type=tr,Z.needsUpdate=!0;const P=E*4;for(let Y=0;Y<m;Y++){const j=A[Y],U=w[Y],z=N[Y],W=b*V*4*Y;for(let le=0;le<j.count;le++){const fe=le*P;_===!0&&(s.fromBufferAttribute(j,le),H[W+fe+0]=s.x,H[W+fe+1]=s.y,H[W+fe+2]=s.z,H[W+fe+3]=0),y===!0&&(s.fromBufferAttribute(U,le),H[W+fe+4]=s.x,H[W+fe+5]=s.y,H[W+fe+6]=s.z,H[W+fe+7]=0),S===!0&&(s.fromBufferAttribute(z,le),H[W+fe+8]=s.x,H[W+fe+9]=s.y,H[W+fe+10]=s.z,H[W+fe+11]=z.itemSize===4?s.w:1)}}p={count:m,texture:Z,size:new Ve(b,V)},o.set(d,p),d.addEventListener("dispose",G)}let u=0;for(let _=0;_<h.length;_++)u+=h[_];const v=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=h===void 0?0:h.length;let m=i[d.id];if(m===void 0||m.length!==x){m=[];for(let y=0;y<x;y++)m[y]=[y,0];i[d.id]=m}for(let y=0;y<x;y++){const S=m[y];S[0]=y,S[1]=h[y]}m.sort(XP);for(let y=0;y<8;y++)y<x&&m[y][1]?(a[y][0]=m[y][0],a[y][1]=m[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(jP);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const S=a[y],A=S[0],w=S[1];A!==Number.MAX_SAFE_INTEGER&&w?(p&&d.getAttribute("morphTarget"+y)!==p[A]&&d.setAttribute("morphTarget"+y,p[A]),u&&d.getAttribute("morphNormal"+y)!==u[A]&&d.setAttribute("morphNormal"+y,u[A]),r[y]=w,v+=w):(p&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),u&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),r[y]=0)}const _=d.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function $P(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}class Ly extends Sn{constructor(e,n,i,r,o,s,a,l,c,d){if(d=d!==void 0?d:Hr,d!==Hr&&d!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Hr&&(i=er),i===void 0&&d===as&&(i=Br),super(null,r,o,s,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Dy=new Sn,Ny=new Ly(1,1);Ny.compareFunction=_y;const Iy=new Ey,Uy=new Db,Oy=new Cy,Qg=[],Jg=[],ev=new Float32Array(16),tv=new Float32Array(9),nv=new Float32Array(4);function _s(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Qg[r];if(o===void 0&&(o=new Float32Array(r),Qg[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function qc(t,e){let n=Jg[e];n===void 0&&(n=new Int32Array(e),Jg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function KP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function ZP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function QP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function JP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;nv.set(i),t.uniformMatrix2fv(this.addr,!1,nv),Rt(n,i)}}function eL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;tv.set(i),t.uniformMatrix3fv(this.addr,!1,tv),Rt(n,i)}}function tL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;ev.set(i),t.uniformMatrix4fv(this.addr,!1,ev),Rt(n,i)}}function nL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function iL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function rL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function oL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function sL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function aL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function lL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function cL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function uL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?Ny:Dy;n.setTexture2D(e||o,r)}function dL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Uy,r)}function fL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Oy,r)}function hL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Iy,r)}function pL(t){switch(t){case 5126:return qP;case 35664:return KP;case 35665:return ZP;case 35666:return QP;case 35674:return JP;case 35675:return eL;case 35676:return tL;case 5124:case 35670:return nL;case 35667:case 35671:return iL;case 35668:case 35672:return rL;case 35669:case 35673:return oL;case 5125:return sL;case 36294:return aL;case 36295:return lL;case 36296:return cL;case 35678:case 36198:case 36298:case 36306:case 35682:return uL;case 35679:case 36299:case 36307:return dL;case 35680:case 36300:case 36308:case 36293:return fL;case 36289:case 36303:case 36311:case 36292:return hL}}function mL(t,e){t.uniform1fv(this.addr,e)}function gL(t,e){const n=_s(e,this.size,2);t.uniform2fv(this.addr,n)}function vL(t,e){const n=_s(e,this.size,3);t.uniform3fv(this.addr,n)}function _L(t,e){const n=_s(e,this.size,4);t.uniform4fv(this.addr,n)}function xL(t,e){const n=_s(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function yL(t,e){const n=_s(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function SL(t,e){const n=_s(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function EL(t,e){t.uniform1iv(this.addr,e)}function ML(t,e){t.uniform2iv(this.addr,e)}function wL(t,e){t.uniform3iv(this.addr,e)}function TL(t,e){t.uniform4iv(this.addr,e)}function AL(t,e){t.uniform1uiv(this.addr,e)}function bL(t,e){t.uniform2uiv(this.addr,e)}function CL(t,e){t.uniform3uiv(this.addr,e)}function RL(t,e){t.uniform4uiv(this.addr,e)}function PL(t,e,n){const i=this.cache,r=e.length,o=qc(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),Rt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||Dy,o[s])}function LL(t,e,n){const i=this.cache,r=e.length,o=qc(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),Rt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||Uy,o[s])}function DL(t,e,n){const i=this.cache,r=e.length,o=qc(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),Rt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||Oy,o[s])}function NL(t,e,n){const i=this.cache,r=e.length,o=qc(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),Rt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||Iy,o[s])}function IL(t){switch(t){case 5126:return mL;case 35664:return gL;case 35665:return vL;case 35666:return _L;case 35674:return xL;case 35675:return yL;case 35676:return SL;case 5124:case 35670:return EL;case 35667:case 35671:return ML;case 35668:case 35672:return wL;case 35669:case 35673:return TL;case 5125:return AL;case 36294:return bL;case 36295:return CL;case 36296:return RL;case 35678:case 36198:case 36298:case 36306:case 35682:return PL;case 35679:case 36299:case 36307:return LL;case 35680:case 36300:case 36308:case 36293:return DL;case 36289:case 36303:case 36311:case 36292:return NL}}class UL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=pL(n.type)}}class OL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=IL(n.type)}}class FL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function iv(t,e){t.seq.push(e),t.map[e.id]=e}function kL(t,e,n){const i=t.name,r=i.length;for(hd.lastIndex=0;;){const o=hd.exec(i),s=hd.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){iv(n,c===void 0?new UL(a,t,e):new OL(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new FL(a),iv(n,f)),n=f}}}class Bl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);kL(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function rv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const zL=37297;let BL=0;function HL(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function VL(t){const e=rt.getPrimaries(rt.workingColorSpace),n=rt.getPrimaries(t);let i;switch(e===n?i="":e===xc&&n===_c?i="LinearDisplayP3ToLinearSRGB":e===_c&&n===xc&&(i="LinearSRGBToLinearDisplayP3"),t){case Ui:case Yc:return[i,"LinearTransferOETF"];case Ot:case qh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function ov(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+HL(t.getShaderSource(e),s)}else return r}function GL(t,e){const n=VL(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function WL(t,e){let n;switch(e){case tb:n="Linear";break;case nb:n="Reinhard";break;case ib:n="OptimizedCineon";break;case rb:n="ACESFilmic";break;case ob:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function jL(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vs).join(`
`)}function XL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function YL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Vs(t){return t!==""}function sv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function av(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $L=/^[ \t]*#include +<([\w\d./]+)>/gm;function Df(t){return t.replace($L,KL)}const qL=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function KL(t,e){let n=qe[e];if(n===void 0){const i=qL.get(e);if(i!==void 0)n=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Df(n)}const ZL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lv(t){return t.replace(ZL,QL)}function QL(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function cv(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function JL(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ay?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Xh?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function e2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case os:case ss:e="ENVMAP_TYPE_CUBE";break;case Xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function t2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ss:e="ENVMAP_MODE_REFRACTION";break}return e}function n2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Yh:e="ENVMAP_BLENDING_MULTIPLY";break;case JA:e="ENVMAP_BLENDING_MIX";break;case eb:e="ENVMAP_BLENDING_ADD";break}return e}function i2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function r2(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=JL(n),c=e2(n),d=t2(n),f=n2(n),h=i2(n),g=n.isWebGL2?"":jL(n),x=XL(o),m=r.createProgram();let p,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Vs).join(`
`),p.length>0&&(p+=`
`),u=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Vs).join(`
`),u.length>0&&(u+=`
`)):(p=[cv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),u=[g,cv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==dr?"#define TONE_MAPPING":"",n.toneMapping!==dr?qe.tonemapping_pars_fragment:"",n.toneMapping!==dr?WL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,GL("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vs).join(`
`)),s=Df(s),s=sv(s,n),s=av(s,n),a=Df(a),a=sv(a,n),a=av(a,n),s=lv(s),a=lv(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===bg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=v+p+s,y=v+u+a,S=rv(r,r.VERTEX_SHADER,_),A=rv(r,r.FRAGMENT_SHADER,y);r.attachShader(m,S),r.attachShader(m,A),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function w(V){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(m).trim(),Z=r.getShaderInfoLog(S).trim(),P=r.getShaderInfoLog(A).trim();let G=!0,Y=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,S,A);else{const j=ov(r,S,"vertex"),U=ov(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+H+`
`+j+`
`+U)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(Z===""||P==="")&&(Y=!1);Y&&(V.diagnostics={runnable:G,programLog:H,vertexShader:{log:Z,prefix:p},fragmentShader:{log:P,prefix:u}})}r.deleteShader(S),r.deleteShader(A),N=new Bl(r,m),E=YL(r,m)}let N;this.getUniforms=function(){return N===void 0&&w(this),N};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(m,zL)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=BL++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=A,this}let o2=0;class s2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new a2(e),n.set(e,i)),i}}class a2{constructor(e){this.id=o2++,this.code=e,this.usedTimes=0}}function l2(t,e,n,i,r,o,s){const a=new Qh,l=new s2,c=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(E){return E===0?"uv":`uv${E}`}function p(E,b,V,H,Z){const P=H.fog,G=Z.geometry,Y=E.isMeshStandardMaterial?H.environment:null,j=(E.isMeshStandardMaterial?n:e).get(E.envMap||Y),U=j&&j.mapping===Xc?j.image.height:null,z=x[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const W=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,le=W!==void 0?W.length:0;let fe=0;G.morphAttributes.position!==void 0&&(fe=1),G.morphAttributes.normal!==void 0&&(fe=2),G.morphAttributes.color!==void 0&&(fe=3);let ee,k,ce,ie;if(z){const Bt=ti[z];ee=Bt.vertexShader,k=Bt.fragmentShader}else ee=E.vertexShader,k=E.fragmentShader,l.update(E),ce=l.getVertexShaderID(E),ie=l.getFragmentShaderID(E);const ne=t.getRenderTarget(),pe=Z.isInstancedMesh===!0,Se=Z.isBatchedMesh===!0,_e=!!E.map,Ee=!!E.matcap,F=!!j,Ye=!!E.aoMap,Ce=!!E.lightMap,K=!!E.bumpMap,te=!!E.normalMap,$=!!E.displacementMap,re=!!E.emissiveMap,we=!!E.metalnessMap,Te=!!E.roughnessMap,Pe=E.anisotropy>0,Be=E.clearcoat>0,T=E.iridescence>0,M=E.sheen>0,B=E.transmission>0,ae=Pe&&!!E.anisotropyMap,q=Be&&!!E.clearcoatMap,ue=Be&&!!E.clearcoatNormalMap,ge=Be&&!!E.clearcoatRoughnessMap,he=T&&!!E.iridescenceMap,ye=T&&!!E.iridescenceThicknessMap,L=M&&!!E.sheenColorMap,ve=M&&!!E.sheenRoughnessMap,se=!!E.specularMap,De=!!E.specularColorMap,Re=!!E.specularIntensityMap,Oe=B&&!!E.transmissionMap,Ue=B&&!!E.thicknessMap,Ne=!!E.gradientMap,$e=!!E.alphaMap,O=E.alphaTest>0,Ae=!!E.alphaHash,me=!!E.extensions,de=!!G.attributes.uv1,Me=!!G.attributes.uv2,Fe=!!G.attributes.uv3;let Ke=dr;return E.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ke=t.toneMapping),{isWebGL2:d,shaderID:z,shaderType:E.type,shaderName:E.name,vertexShader:ee,fragmentShader:k,defines:E.defines,customVertexShaderID:ce,customFragmentShaderID:ie,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Se,instancing:pe,instancingColor:pe&&Z.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ui,map:_e,matcap:Ee,envMap:F,envMapMode:F&&j.mapping,envMapCubeUVHeight:U,aoMap:Ye,lightMap:Ce,bumpMap:K,normalMap:te,displacementMap:h&&$,emissiveMap:re,normalMapObjectSpace:te&&E.normalMapType===vb,normalMapTangentSpace:te&&E.normalMapType===vy,metalnessMap:we,roughnessMap:Te,anisotropy:Pe,anisotropyMap:ae,clearcoat:Be,clearcoatMap:q,clearcoatNormalMap:ue,clearcoatRoughnessMap:ge,iridescence:T,iridescenceMap:he,iridescenceThicknessMap:ye,sheen:M,sheenColorMap:L,sheenRoughnessMap:ve,specularMap:se,specularColorMap:De,specularIntensityMap:Re,transmission:B,transmissionMap:Oe,thicknessMap:Ue,gradientMap:Ne,opaque:E.transparent===!1&&E.blending===qo,alphaMap:$e,alphaTest:O,alphaHash:Ae,combine:E.combine,mapUv:_e&&m(E.map.channel),aoMapUv:Ye&&m(E.aoMap.channel),lightMapUv:Ce&&m(E.lightMap.channel),bumpMapUv:K&&m(E.bumpMap.channel),normalMapUv:te&&m(E.normalMap.channel),displacementMapUv:$&&m(E.displacementMap.channel),emissiveMapUv:re&&m(E.emissiveMap.channel),metalnessMapUv:we&&m(E.metalnessMap.channel),roughnessMapUv:Te&&m(E.roughnessMap.channel),anisotropyMapUv:ae&&m(E.anisotropyMap.channel),clearcoatMapUv:q&&m(E.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(E.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&m(E.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&m(E.iridescenceThicknessMap.channel),sheenColorMapUv:L&&m(E.sheenColorMap.channel),sheenRoughnessMapUv:ve&&m(E.sheenRoughnessMap.channel),specularMapUv:se&&m(E.specularMap.channel),specularColorMapUv:De&&m(E.specularColorMap.channel),specularIntensityMapUv:Re&&m(E.specularIntensityMap.channel),transmissionMapUv:Oe&&m(E.transmissionMap.channel),thicknessMapUv:Ue&&m(E.thicknessMap.channel),alphaMapUv:$e&&m(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(te||Pe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:de,vertexUv2s:Me,vertexUv3s:Fe,pointsUvs:Z.isPoints===!0&&!!G.attributes.uv&&(_e||$e),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:fe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ke,useLegacyLights:t._useLegacyLights,decodeVideoTexture:_e&&E.map.isVideoTexture===!0&&rt.getTransfer(E.map.colorSpace)===lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ri,flipSided:E.side===un,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:me&&E.extensions.derivatives===!0,extensionFragDepth:me&&E.extensions.fragDepth===!0,extensionDrawBuffers:me&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)b.push(V),b.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(v(b,E),_(b,E),b.push(t.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function v(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function _(E,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function y(E){const b=x[E.type];let V;if(b){const H=ti[b];V=jb.clone(H.uniforms)}else V=E.uniforms;return V}function S(E,b){let V;for(let H=0,Z=c.length;H<Z;H++){const P=c[H];if(P.cacheKey===b){V=P,++V.usedTimes;break}}return V===void 0&&(V=new r2(t,b,E,o),c.push(V)),V}function A(E){if(--E.usedTimes===0){const b=c.indexOf(E);c[b]=c[c.length-1],c.pop(),E.destroy()}}function w(E){l.remove(E)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:S,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:N}}function c2(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function u2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function uv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dv(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f,h,g,x,m,p){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:g,groupOrder:x,renderOrder:f.renderOrder,z:m,group:p},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=g,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=m,u.group=p),e++,u}function a(f,h,g,x,m,p){const u=s(f,h,g,x,m,p);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(f,h,g,x,m,p){const u=s(f,h,g,x,m,p);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||u2),i.length>1&&i.sort(h||uv),r.length>1&&r.sort(h||uv)}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:d,sort:c}}function d2(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new dv,t.set(i,[s])):r>=o.length?(s=new dv,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function f2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new Xe};break;case"SpotLight":n={position:new D,direction:new D,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function h2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let p2=0;function m2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function g2(t,e){const n=new f2,i=h2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new D);const o=new D,s=new ft,a=new ft;function l(d,f){let h=0,g=0,x=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let m=0,p=0,u=0,v=0,_=0,y=0,S=0,A=0,w=0,N=0,E=0;d.sort(m2);const b=f===!0?Math.PI:1;for(let H=0,Z=d.length;H<Z;H++){const P=d[H],G=P.color,Y=P.intensity,j=P.distance,U=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=G.r*Y*b,g+=G.g*Y*b,x+=G.b*Y*b;else if(P.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(P.sh.coefficients[z],Y);E++}else if(P.isDirectionalLight){const z=n.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){const W=P.shadow,le=i.get(P);le.shadowBias=W.bias,le.shadowNormalBias=W.normalBias,le.shadowRadius=W.radius,le.shadowMapSize=W.mapSize,r.directionalShadow[m]=le,r.directionalShadowMap[m]=U,r.directionalShadowMatrix[m]=P.shadow.matrix,y++}r.directional[m]=z,m++}else if(P.isSpotLight){const z=n.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(G).multiplyScalar(Y*b),z.distance=j,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,r.spot[u]=z;const W=P.shadow;if(P.map&&(r.spotLightMap[w]=P.map,w++,W.updateMatrices(P),P.castShadow&&N++),r.spotLightMatrix[u]=W.matrix,P.castShadow){const le=i.get(P);le.shadowBias=W.bias,le.shadowNormalBias=W.normalBias,le.shadowRadius=W.radius,le.shadowMapSize=W.mapSize,r.spotShadow[u]=le,r.spotShadowMap[u]=U,A++}u++}else if(P.isRectAreaLight){const z=n.get(P);z.color.copy(G).multiplyScalar(Y),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),r.rectArea[v]=z,v++}else if(P.isPointLight){const z=n.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*b),z.distance=P.distance,z.decay=P.decay,P.castShadow){const W=P.shadow,le=i.get(P);le.shadowBias=W.bias,le.shadowNormalBias=W.normalBias,le.shadowRadius=W.radius,le.shadowMapSize=W.mapSize,le.shadowCameraNear=W.camera.near,le.shadowCameraFar=W.camera.far,r.pointShadow[p]=le,r.pointShadowMap[p]=U,r.pointShadowMatrix[p]=P.shadow.matrix,S++}r.point[p]=z,p++}else if(P.isHemisphereLight){const z=n.get(P);z.skyColor.copy(P.color).multiplyScalar(Y*b),z.groundColor.copy(P.groundColor).multiplyScalar(Y*b),r.hemi[_]=z,_++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=x;const V=r.hash;(V.directionalLength!==m||V.pointLength!==p||V.spotLength!==u||V.rectAreaLength!==v||V.hemiLength!==_||V.numDirectionalShadows!==y||V.numPointShadows!==S||V.numSpotShadows!==A||V.numSpotMaps!==w||V.numLightProbes!==E)&&(r.directional.length=m,r.spot.length=u,r.rectArea.length=v,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=A+w-N,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=E,V.directionalLength=m,V.pointLength=p,V.spotLength=u,V.rectAreaLength=v,V.hemiLength=_,V.numDirectionalShadows=y,V.numPointShadows=S,V.numSpotShadows=A,V.numSpotMaps=w,V.numLightProbes=E,r.version=p2++)}function c(d,f){let h=0,g=0,x=0,m=0,p=0;const u=f.matrixWorldInverse;for(let v=0,_=d.length;v<_;v++){const y=d[v];if(y.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(u),h++}else if(y.isSpotLight){const S=r.spot[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(u),S.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(u),x++}else if(y.isRectAreaLight){const S=r.rectArea[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(u),a.identity(),s.copy(y.matrixWorld),s.premultiply(u),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const S=r.point[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(u),g++}else if(y.isHemisphereLight){const S=r.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function fv(t,e){const n=new g2(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function v2(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new fv(t,e),n.set(o,[l])):s>=a.length?(l=new fv(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class _2 extends Ra{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class x2 extends Ra{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const y2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function E2(t,e,n){let i=new ep;const r=new Ve,o=new Ve,s=new dt,a=new _2({depthPacking:gb}),l=new x2,c={},d=n.maxTextureSize,f={[vr]:un,[un]:vr,[ri]:ri},h=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:y2,fragmentShader:S2}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const x=new Mr;x.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Nn(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ay;let u=this.type;this.render=function(S,A,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const N=t.getRenderTarget(),E=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),V=t.state;V.setBlending(ur),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const H=u!==yi&&this.type===yi,Z=u===yi&&this.type!==yi;for(let P=0,G=S.length;P<G;P++){const Y=S[P],j=Y.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const U=j.getFrameExtents();if(r.multiply(U),o.copy(j.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/U.x),r.x=o.x*U.x,j.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/U.y),r.y=o.y*U.y,j.mapSize.y=o.y)),j.map===null||H===!0||Z===!0){const W=this.type!==yi?{minFilter:Zt,magFilter:Zt}:{};j.map!==null&&j.map.dispose(),j.map=new Jr(r.x,r.y,W),j.map.texture.name=Y.name+".shadowMap",j.camera.updateProjectionMatrix()}t.setRenderTarget(j.map),t.clear();const z=j.getViewportCount();for(let W=0;W<z;W++){const le=j.getViewport(W);s.set(o.x*le.x,o.y*le.y,o.x*le.z,o.y*le.w),V.viewport(s),j.updateMatrices(Y,W),i=j.getFrustum(),y(A,w,j.camera,Y,this.type)}j.isPointLightShadow!==!0&&this.type===yi&&v(j,w),j.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(N,E,b)};function v(S,A){const w=e.update(m);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,g.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Jr(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(A,null,w,h,m,null),g.uniforms.shadow_pass.value=S.mapPass.texture,g.uniforms.resolution.value=S.mapSize,g.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(A,null,w,g,m,null)}function _(S,A,w,N){let E=null;const b=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(b!==void 0)E=b;else if(E=w.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=E.uuid,H=A.uuid;let Z=c[V];Z===void 0&&(Z={},c[V]=Z);let P=Z[H];P===void 0&&(P=E.clone(),Z[H]=P),E=P}if(E.visible=A.visible,E.wireframe=A.wireframe,N===yi?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:f[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,w.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const V=t.properties.get(E);V.light=w}return E}function y(S,A,w,N,E){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===yi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);const H=e.update(S),Z=S.material;if(Array.isArray(Z)){const P=H.groups;for(let G=0,Y=P.length;G<Y;G++){const j=P[G],U=Z[j.materialIndex];if(U&&U.visible){const z=_(S,U,N,E);S.onBeforeShadow(t,S,A,w,H,z,j),t.renderBufferDirect(w,null,H,z,S,j),S.onAfterShadow(t,S,A,w,H,z,j)}}}else if(Z.visible){const P=_(S,Z,N,E);S.onBeforeShadow(t,S,A,w,H,P,null),t.renderBufferDirect(w,null,H,P,S,null),S.onAfterShadow(t,S,A,w,H,P,null)}}const V=S.children;for(let H=0,Z=V.length;H<Z;H++)y(V[H],A,w,N,E)}}function M2(t,e,n){const i=n.isWebGL2;function r(){let O=!1;const Ae=new dt;let me=null;const de=new dt(0,0,0,0);return{setMask:function(Me){me!==Me&&!O&&(t.colorMask(Me,Me,Me,Me),me=Me)},setLocked:function(Me){O=Me},setClear:function(Me,Fe,Ke,Et,Bt){Bt===!0&&(Me*=Et,Fe*=Et,Ke*=Et),Ae.set(Me,Fe,Ke,Et),de.equals(Ae)===!1&&(t.clearColor(Me,Fe,Ke,Et),de.copy(Ae))},reset:function(){O=!1,me=null,de.set(-1,0,0,0)}}}function o(){let O=!1,Ae=null,me=null,de=null;return{setTest:function(Me){Me?Se(t.DEPTH_TEST):_e(t.DEPTH_TEST)},setMask:function(Me){Ae!==Me&&!O&&(t.depthMask(Me),Ae=Me)},setFunc:function(Me){if(me!==Me){switch(Me){case XA:t.depthFunc(t.NEVER);break;case YA:t.depthFunc(t.ALWAYS);break;case $A:t.depthFunc(t.LESS);break;case gc:t.depthFunc(t.LEQUAL);break;case qA:t.depthFunc(t.EQUAL);break;case KA:t.depthFunc(t.GEQUAL);break;case ZA:t.depthFunc(t.GREATER);break;case QA:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=Me}},setLocked:function(Me){O=Me},setClear:function(Me){de!==Me&&(t.clearDepth(Me),de=Me)},reset:function(){O=!1,Ae=null,me=null,de=null}}}function s(){let O=!1,Ae=null,me=null,de=null,Me=null,Fe=null,Ke=null,Et=null,Bt=null;return{setTest:function(it){O||(it?Se(t.STENCIL_TEST):_e(t.STENCIL_TEST))},setMask:function(it){Ae!==it&&!O&&(t.stencilMask(it),Ae=it)},setFunc:function(it,Ht,Tn){(me!==it||de!==Ht||Me!==Tn)&&(t.stencilFunc(it,Ht,Tn),me=it,de=Ht,Me=Tn)},setOp:function(it,Ht,Tn){(Fe!==it||Ke!==Ht||Et!==Tn)&&(t.stencilOp(it,Ht,Tn),Fe=it,Ke=Ht,Et=Tn)},setLocked:function(it){O=it},setClear:function(it){Bt!==it&&(t.clearStencil(it),Bt=it)},reset:function(){O=!1,Ae=null,me=null,de=null,Me=null,Fe=null,Ke=null,Et=null,Bt=null}}}const a=new r,l=new o,c=new s,d=new WeakMap,f=new WeakMap;let h={},g={},x=new WeakMap,m=[],p=null,u=!1,v=null,_=null,y=null,S=null,A=null,w=null,N=null,E=new Xe(0,0,0),b=0,V=!1,H=null,Z=null,P=null,G=null,Y=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,z=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(W)[1]),U=z>=1):W.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),U=z>=2);let le=null,fe={};const ee=t.getParameter(t.SCISSOR_BOX),k=t.getParameter(t.VIEWPORT),ce=new dt().fromArray(ee),ie=new dt().fromArray(k);function ne(O,Ae,me,de){const Me=new Uint8Array(4),Fe=t.createTexture();t.bindTexture(O,Fe),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<me;Ke++)i&&(O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY)?t.texImage3D(Ae,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(Ae+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return Fe}const pe={};pe[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),pe[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(pe[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),pe[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(t.DEPTH_TEST),l.setFunc(gc),re(!1),we(Ym),Se(t.CULL_FACE),te(ur);function Se(O){h[O]!==!0&&(t.enable(O),h[O]=!0)}function _e(O){h[O]!==!1&&(t.disable(O),h[O]=!1)}function Ee(O,Ae){return g[O]!==Ae?(t.bindFramebuffer(O,Ae),g[O]=Ae,i&&(O===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=Ae),O===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=Ae)),!0):!1}function F(O,Ae){let me=m,de=!1;if(O)if(me=x.get(Ae),me===void 0&&(me=[],x.set(Ae,me)),O.isWebGLMultipleRenderTargets){const Me=O.texture;if(me.length!==Me.length||me[0]!==t.COLOR_ATTACHMENT0){for(let Fe=0,Ke=Me.length;Fe<Ke;Fe++)me[Fe]=t.COLOR_ATTACHMENT0+Fe;me.length=Me.length,de=!0}}else me[0]!==t.COLOR_ATTACHMENT0&&(me[0]=t.COLOR_ATTACHMENT0,de=!0);else me[0]!==t.BACK&&(me[0]=t.BACK,de=!0);de&&(n.isWebGL2?t.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Ye(O){return p!==O?(t.useProgram(O),p=O,!0):!1}const Ce={[Nr]:t.FUNC_ADD,[LA]:t.FUNC_SUBTRACT,[DA]:t.FUNC_REVERSE_SUBTRACT};if(i)Ce[Zm]=t.MIN,Ce[Qm]=t.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(Ce[Zm]=O.MIN_EXT,Ce[Qm]=O.MAX_EXT)}const K={[NA]:t.ZERO,[IA]:t.ONE,[UA]:t.SRC_COLOR,[wf]:t.SRC_ALPHA,[HA]:t.SRC_ALPHA_SATURATE,[zA]:t.DST_COLOR,[FA]:t.DST_ALPHA,[OA]:t.ONE_MINUS_SRC_COLOR,[Tf]:t.ONE_MINUS_SRC_ALPHA,[BA]:t.ONE_MINUS_DST_COLOR,[kA]:t.ONE_MINUS_DST_ALPHA,[VA]:t.CONSTANT_COLOR,[GA]:t.ONE_MINUS_CONSTANT_COLOR,[WA]:t.CONSTANT_ALPHA,[jA]:t.ONE_MINUS_CONSTANT_ALPHA};function te(O,Ae,me,de,Me,Fe,Ke,Et,Bt,it){if(O===ur){u===!0&&(_e(t.BLEND),u=!1);return}if(u===!1&&(Se(t.BLEND),u=!0),O!==PA){if(O!==v||it!==V){if((_!==Nr||A!==Nr)&&(t.blendEquation(t.FUNC_ADD),_=Nr,A=Nr),it)switch(O){case qo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $m:t.blendFunc(t.ONE,t.ONE);break;case qm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Km:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case qo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $m:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case qm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Km:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,S=null,w=null,N=null,E.set(0,0,0),b=0,v=O,V=it}return}Me=Me||Ae,Fe=Fe||me,Ke=Ke||de,(Ae!==_||Me!==A)&&(t.blendEquationSeparate(Ce[Ae],Ce[Me]),_=Ae,A=Me),(me!==y||de!==S||Fe!==w||Ke!==N)&&(t.blendFuncSeparate(K[me],K[de],K[Fe],K[Ke]),y=me,S=de,w=Fe,N=Ke),(Et.equals(E)===!1||Bt!==b)&&(t.blendColor(Et.r,Et.g,Et.b,Bt),E.copy(Et),b=Bt),v=O,V=!1}function $(O,Ae){O.side===ri?_e(t.CULL_FACE):Se(t.CULL_FACE);let me=O.side===un;Ae&&(me=!me),re(me),O.blending===qo&&O.transparent===!1?te(ur):te(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const de=O.stencilWrite;c.setTest(de),de&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Pe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Se(t.SAMPLE_ALPHA_TO_COVERAGE):_e(t.SAMPLE_ALPHA_TO_COVERAGE)}function re(O){H!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),H=O)}function we(O){O!==CA?(Se(t.CULL_FACE),O!==Z&&(O===Ym?t.cullFace(t.BACK):O===RA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):_e(t.CULL_FACE),Z=O}function Te(O){O!==P&&(U&&t.lineWidth(O),P=O)}function Pe(O,Ae,me){O?(Se(t.POLYGON_OFFSET_FILL),(G!==Ae||Y!==me)&&(t.polygonOffset(Ae,me),G=Ae,Y=me)):_e(t.POLYGON_OFFSET_FILL)}function Be(O){O?Se(t.SCISSOR_TEST):_e(t.SCISSOR_TEST)}function T(O){O===void 0&&(O=t.TEXTURE0+j-1),le!==O&&(t.activeTexture(O),le=O)}function M(O,Ae,me){me===void 0&&(le===null?me=t.TEXTURE0+j-1:me=le);let de=fe[me];de===void 0&&(de={type:void 0,texture:void 0},fe[me]=de),(de.type!==O||de.texture!==Ae)&&(le!==me&&(t.activeTexture(me),le=me),t.bindTexture(O,Ae||pe[O]),de.type=O,de.texture=Ae)}function B(){const O=fe[le];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ae(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(O){ce.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),ce.copy(O))}function Oe(O){ie.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),ie.copy(O))}function Ue(O,Ae){let me=f.get(Ae);me===void 0&&(me=new WeakMap,f.set(Ae,me));let de=me.get(O);de===void 0&&(de=t.getUniformBlockIndex(Ae,O.name),me.set(O,de))}function Ne(O,Ae){const de=f.get(Ae).get(O);d.get(Ae)!==de&&(t.uniformBlockBinding(Ae,de,O.__bindingPointIndex),d.set(Ae,de))}function $e(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},le=null,fe={},g={},x=new WeakMap,m=[],p=null,u=!1,v=null,_=null,y=null,S=null,A=null,w=null,N=null,E=new Xe(0,0,0),b=0,V=!1,H=null,Z=null,P=null,G=null,Y=null,ce.set(0,0,t.canvas.width,t.canvas.height),ie.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Se,disable:_e,bindFramebuffer:Ee,drawBuffers:F,useProgram:Ye,setBlending:te,setMaterial:$,setFlipSided:re,setCullFace:we,setLineWidth:Te,setPolygonOffset:Pe,setScissorTest:Be,activeTexture:T,bindTexture:M,unbindTexture:B,compressedTexImage2D:ae,compressedTexImage3D:q,texImage2D:se,texImage3D:De,updateUBOMapping:Ue,uniformBlockBinding:Ne,texStorage2D:L,texStorage3D:ve,texSubImage2D:ue,texSubImage3D:ge,compressedTexSubImage2D:he,compressedTexSubImage3D:ye,scissor:Re,viewport:Oe,reset:$e}}function w2(t,e,n,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,d=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let m;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,M){return u?new OffscreenCanvas(T,M):Ec("canvas")}function _(T,M,B,ae){let q=1;if((T.width>ae||T.height>ae)&&(q=ae/Math.max(T.width,T.height)),q<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ue=M?Lf:Math.floor,ge=ue(q*T.width),he=ue(q*T.height);m===void 0&&(m=v(ge,he));const ye=B?v(ge,he):m;return ye.width=ge,ye.height=he,ye.getContext("2d").drawImage(T,0,0,ge,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ge+"x"+he+")."),ye}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return Cg(T.width)&&Cg(T.height)}function S(T){return a?!1:T.wrapS!==Xn||T.wrapT!==Xn||T.minFilter!==Zt&&T.minFilter!==Pn}function A(T,M){return T.generateMipmaps&&M&&T.minFilter!==Zt&&T.minFilter!==Pn}function w(T){t.generateMipmap(T)}function N(T,M,B,ae,q=!1){if(a===!1)return M;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ue=M;if(M===t.RED&&(B===t.FLOAT&&(ue=t.R32F),B===t.HALF_FLOAT&&(ue=t.R16F),B===t.UNSIGNED_BYTE&&(ue=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(ue=t.R8UI),B===t.UNSIGNED_SHORT&&(ue=t.R16UI),B===t.UNSIGNED_INT&&(ue=t.R32UI),B===t.BYTE&&(ue=t.R8I),B===t.SHORT&&(ue=t.R16I),B===t.INT&&(ue=t.R32I)),M===t.RG&&(B===t.FLOAT&&(ue=t.RG32F),B===t.HALF_FLOAT&&(ue=t.RG16F),B===t.UNSIGNED_BYTE&&(ue=t.RG8)),M===t.RGBA){const ge=q?vc:rt.getTransfer(ae);B===t.FLOAT&&(ue=t.RGBA32F),B===t.HALF_FLOAT&&(ue=t.RGBA16F),B===t.UNSIGNED_BYTE&&(ue=ge===lt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(ue=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(ue=t.RGB5_A1)}return(ue===t.R16F||ue===t.R32F||ue===t.RG16F||ue===t.RG32F||ue===t.RGBA16F||ue===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function E(T,M,B){return A(T,B)===!0||T.isFramebufferTexture&&T.minFilter!==Zt&&T.minFilter!==Pn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function b(T){return T===Zt||T===Jm||T===zu?t.NEAREST:t.LINEAR}function V(T){const M=T.target;M.removeEventListener("dispose",V),Z(M),M.isVideoTexture&&x.delete(M)}function H(T){const M=T.target;M.removeEventListener("dispose",H),G(M)}function Z(T){const M=i.get(T);if(M.__webglInit===void 0)return;const B=T.source,ae=p.get(B);if(ae){const q=ae[M.__cacheKey];q.usedTimes--,q.usedTimes===0&&P(T),Object.keys(ae).length===0&&p.delete(B)}i.remove(T)}function P(T){const M=i.get(T);t.deleteTexture(M.__webglTexture);const B=T.source,ae=p.get(B);delete ae[M.__cacheKey],s.memory.textures--}function G(T){const M=T.texture,B=i.get(T),ae=i.get(M);if(ae.__webglTexture!==void 0&&(t.deleteTexture(ae.__webglTexture),s.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(B.__webglFramebuffer[q]))for(let ue=0;ue<B.__webglFramebuffer[q].length;ue++)t.deleteFramebuffer(B.__webglFramebuffer[q][ue]);else t.deleteFramebuffer(B.__webglFramebuffer[q]);B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[q])}else{if(Array.isArray(B.__webglFramebuffer))for(let q=0;q<B.__webglFramebuffer.length;q++)t.deleteFramebuffer(B.__webglFramebuffer[q]);else t.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let q=0;q<B.__webglColorRenderbuffer.length;q++)B.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[q]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let q=0,ue=M.length;q<ue;q++){const ge=i.get(M[q]);ge.__webglTexture&&(t.deleteTexture(ge.__webglTexture),s.memory.textures--),i.remove(M[q])}i.remove(M),i.remove(T)}let Y=0;function j(){Y=0}function U(){const T=Y;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),Y+=1,T}function z(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function W(T,M){const B=i.get(T);if(T.isVideoTexture&&Pe(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const ae=T.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(B,T,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function le(T,M){const B=i.get(T);if(T.version>0&&B.__version!==T.version){Se(B,T,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function fe(T,M){const B=i.get(T);if(T.version>0&&B.__version!==T.version){Se(B,T,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function ee(T,M){const B=i.get(T);if(T.version>0&&B.__version!==T.version){_e(B,T,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const k={[Cf]:t.REPEAT,[Xn]:t.CLAMP_TO_EDGE,[Rf]:t.MIRRORED_REPEAT},ce={[Zt]:t.NEAREST,[Jm]:t.NEAREST_MIPMAP_NEAREST,[zu]:t.NEAREST_MIPMAP_LINEAR,[Pn]:t.LINEAR,[sb]:t.LINEAR_MIPMAP_NEAREST,[xa]:t.LINEAR_MIPMAP_LINEAR},ie={[_b]:t.NEVER,[wb]:t.ALWAYS,[xb]:t.LESS,[_y]:t.LEQUAL,[yb]:t.EQUAL,[Mb]:t.GEQUAL,[Sb]:t.GREATER,[Eb]:t.NOTEQUAL};function ne(T,M,B){if(B?(t.texParameteri(T,t.TEXTURE_WRAP_S,k[M.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,k[M.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,k[M.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,ce[M.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,ce[M.minFilter])):(t.texParameteri(T,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(T,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Xn||M.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,t.TEXTURE_MAG_FILTER,b(M.magFilter)),t.texParameteri(T,t.TEXTURE_MIN_FILTER,b(M.minFilter)),M.minFilter!==Zt&&M.minFilter!==Pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Zt||M.minFilter!==zu&&M.minFilter!==xa||M.type===tr&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ya&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(T,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function pe(T,M){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",V));const ae=M.source;let q=p.get(ae);q===void 0&&(q={},p.set(ae,q));const ue=z(M);if(ue!==T.__cacheKey){q[ue]===void 0&&(q[ue]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,B=!0),q[ue].usedTimes++;const ge=q[T.__cacheKey];ge!==void 0&&(q[T.__cacheKey].usedTimes--,ge.usedTimes===0&&P(M)),T.__cacheKey=ue,T.__webglTexture=q[ue].texture}return B}function Se(T,M,B){let ae=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ae=t.TEXTURE_3D);const q=pe(T,M),ue=M.source;n.bindTexture(ae,T.__webglTexture,t.TEXTURE0+B);const ge=i.get(ue);if(ue.version!==ge.__version||q===!0){n.activeTexture(t.TEXTURE0+B);const he=rt.getPrimaries(rt.workingColorSpace),ye=M.colorSpace===Ln?null:rt.getPrimaries(M.colorSpace),L=M.colorSpace===Ln||he===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,L);const ve=S(M)&&y(M.image)===!1;let se=_(M.image,ve,!1,d);se=Be(M,se);const De=y(se)||a,Re=o.convert(M.format,M.colorSpace);let Oe=o.convert(M.type),Ue=N(M.internalFormat,Re,Oe,M.colorSpace,M.isVideoTexture);ne(ae,M,De);let Ne;const $e=M.mipmaps,O=a&&M.isVideoTexture!==!0&&Ue!==my,Ae=ge.__version===void 0||q===!0,me=E(M,se,De);if(M.isDepthTexture)Ue=t.DEPTH_COMPONENT,a?M.type===tr?Ue=t.DEPTH_COMPONENT32F:M.type===er?Ue=t.DEPTH_COMPONENT24:M.type===Br?Ue=t.DEPTH24_STENCIL8:Ue=t.DEPTH_COMPONENT16:M.type===tr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Hr&&Ue===t.DEPTH_COMPONENT&&M.type!==$h&&M.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=er,Oe=o.convert(M.type)),M.format===as&&Ue===t.DEPTH_COMPONENT&&(Ue=t.DEPTH_STENCIL,M.type!==Br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Br,Oe=o.convert(M.type))),Ae&&(O?n.texStorage2D(t.TEXTURE_2D,1,Ue,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Ue,se.width,se.height,0,Re,Oe,null));else if(M.isDataTexture)if($e.length>0&&De){O&&Ae&&n.texStorage2D(t.TEXTURE_2D,me,Ue,$e[0].width,$e[0].height);for(let de=0,Me=$e.length;de<Me;de++)Ne=$e[de],O?n.texSubImage2D(t.TEXTURE_2D,de,0,0,Ne.width,Ne.height,Re,Oe,Ne.data):n.texImage2D(t.TEXTURE_2D,de,Ue,Ne.width,Ne.height,0,Re,Oe,Ne.data);M.generateMipmaps=!1}else O?(Ae&&n.texStorage2D(t.TEXTURE_2D,me,Ue,se.width,se.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,Re,Oe,se.data)):n.texImage2D(t.TEXTURE_2D,0,Ue,se.width,se.height,0,Re,Oe,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){O&&Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Ue,$e[0].width,$e[0].height,se.depth);for(let de=0,Me=$e.length;de<Me;de++)Ne=$e[de],M.format!==Yn?Re!==null?O?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,Ne.width,Ne.height,se.depth,Re,Ne.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,de,Ue,Ne.width,Ne.height,se.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?n.texSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,Ne.width,Ne.height,se.depth,Re,Oe,Ne.data):n.texImage3D(t.TEXTURE_2D_ARRAY,de,Ue,Ne.width,Ne.height,se.depth,0,Re,Oe,Ne.data)}else{O&&Ae&&n.texStorage2D(t.TEXTURE_2D,me,Ue,$e[0].width,$e[0].height);for(let de=0,Me=$e.length;de<Me;de++)Ne=$e[de],M.format!==Yn?Re!==null?O?n.compressedTexSubImage2D(t.TEXTURE_2D,de,0,0,Ne.width,Ne.height,Re,Ne.data):n.compressedTexImage2D(t.TEXTURE_2D,de,Ue,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?n.texSubImage2D(t.TEXTURE_2D,de,0,0,Ne.width,Ne.height,Re,Oe,Ne.data):n.texImage2D(t.TEXTURE_2D,de,Ue,Ne.width,Ne.height,0,Re,Oe,Ne.data)}else if(M.isDataArrayTexture)O?(Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Ue,se.width,se.height,se.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Re,Oe,se.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,se.width,se.height,se.depth,0,Re,Oe,se.data);else if(M.isData3DTexture)O?(Ae&&n.texStorage3D(t.TEXTURE_3D,me,Ue,se.width,se.height,se.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Re,Oe,se.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,se.width,se.height,se.depth,0,Re,Oe,se.data);else if(M.isFramebufferTexture){if(Ae)if(O)n.texStorage2D(t.TEXTURE_2D,me,Ue,se.width,se.height);else{let de=se.width,Me=se.height;for(let Fe=0;Fe<me;Fe++)n.texImage2D(t.TEXTURE_2D,Fe,Ue,de,Me,0,Re,Oe,null),de>>=1,Me>>=1}}else if($e.length>0&&De){O&&Ae&&n.texStorage2D(t.TEXTURE_2D,me,Ue,$e[0].width,$e[0].height);for(let de=0,Me=$e.length;de<Me;de++)Ne=$e[de],O?n.texSubImage2D(t.TEXTURE_2D,de,0,0,Re,Oe,Ne):n.texImage2D(t.TEXTURE_2D,de,Ue,Re,Oe,Ne);M.generateMipmaps=!1}else O?(Ae&&n.texStorage2D(t.TEXTURE_2D,me,Ue,se.width,se.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,Oe,se)):n.texImage2D(t.TEXTURE_2D,0,Ue,Re,Oe,se);A(M,De)&&w(ae),ge.__version=ue.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function _e(T,M,B){if(M.image.length!==6)return;const ae=pe(T,M),q=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+B);const ue=i.get(q);if(q.version!==ue.__version||ae===!0){n.activeTexture(t.TEXTURE0+B);const ge=rt.getPrimaries(rt.workingColorSpace),he=M.colorSpace===Ln?null:rt.getPrimaries(M.colorSpace),ye=M.colorSpace===Ln||ge===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const L=M.isCompressedTexture||M.image[0].isCompressedTexture,ve=M.image[0]&&M.image[0].isDataTexture,se=[];for(let de=0;de<6;de++)!L&&!ve?se[de]=_(M.image[de],!1,!0,c):se[de]=ve?M.image[de].image:M.image[de],se[de]=Be(M,se[de]);const De=se[0],Re=y(De)||a,Oe=o.convert(M.format,M.colorSpace),Ue=o.convert(M.type),Ne=N(M.internalFormat,Oe,Ue,M.colorSpace),$e=a&&M.isVideoTexture!==!0,O=ue.__version===void 0||ae===!0;let Ae=E(M,De,Re);ne(t.TEXTURE_CUBE_MAP,M,Re);let me;if(L){$e&&O&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ae,Ne,De.width,De.height);for(let de=0;de<6;de++){me=se[de].mipmaps;for(let Me=0;Me<me.length;Me++){const Fe=me[Me];M.format!==Yn?Oe!==null?$e?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me,0,0,Fe.width,Fe.height,Oe,Fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me,Ne,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me,0,0,Fe.width,Fe.height,Oe,Ue,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me,Ne,Fe.width,Fe.height,0,Oe,Ue,Fe.data)}}}else{me=M.mipmaps,$e&&O&&(me.length>0&&Ae++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ae,Ne,se[0].width,se[0].height));for(let de=0;de<6;de++)if(ve){$e?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,se[de].width,se[de].height,Oe,Ue,se[de].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ne,se[de].width,se[de].height,0,Oe,Ue,se[de].data);for(let Me=0;Me<me.length;Me++){const Ke=me[Me].image[de].image;$e?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me+1,0,0,Ke.width,Ke.height,Oe,Ue,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me+1,Ne,Ke.width,Ke.height,0,Oe,Ue,Ke.data)}}else{$e?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Oe,Ue,se[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ne,Oe,Ue,se[de]);for(let Me=0;Me<me.length;Me++){const Fe=me[Me];$e?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me+1,0,0,Oe,Ue,Fe.image[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me+1,Ne,Oe,Ue,Fe.image[de])}}}A(M,Re)&&w(t.TEXTURE_CUBE_MAP),ue.__version=q.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Ee(T,M,B,ae,q,ue){const ge=o.convert(B.format,B.colorSpace),he=o.convert(B.type),ye=N(B.internalFormat,ge,he,B.colorSpace);if(!i.get(M).__hasExternalTextures){const ve=Math.max(1,M.width>>ue),se=Math.max(1,M.height>>ue);q===t.TEXTURE_3D||q===t.TEXTURE_2D_ARRAY?n.texImage3D(q,ue,ye,ve,se,M.depth,0,ge,he,null):n.texImage2D(q,ue,ye,ve,se,0,ge,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),Te(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,q,i.get(B).__webglTexture,0,we(M)):(q===t.TEXTURE_2D||q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,q,i.get(B).__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function F(T,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let ae=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(B||Te(M)){const q=M.depthTexture;q&&q.isDepthTexture&&(q.type===tr?ae=t.DEPTH_COMPONENT32F:q.type===er&&(ae=t.DEPTH_COMPONENT24));const ue=we(M);Te(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,ae,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,ae,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,ae,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){const ae=we(M);B&&Te(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,M.width,M.height):Te(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,T)}else{const ae=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let q=0;q<ae.length;q++){const ue=ae[q],ge=o.convert(ue.format,ue.colorSpace),he=o.convert(ue.type),ye=N(ue.internalFormat,ge,he,ue.colorSpace),L=we(M);B&&Te(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,L,ye,M.width,M.height):Te(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L,ye,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ye,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ye(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const ae=i.get(M.depthTexture).__webglTexture,q=we(M);if(M.depthTexture.format===Hr)Te(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(M.depthTexture.format===as)Te(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ce(T){const M=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ye(M.__webglFramebuffer,T)}else if(B){M.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ae]),M.__webglDepthbuffer[ae]=t.createRenderbuffer(),F(M.__webglDepthbuffer[ae],T,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),F(M.__webglDepthbuffer,T,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function K(T,M,B){const ae=i.get(T);M!==void 0&&Ee(ae.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Ce(T)}function te(T){const M=T.texture,B=i.get(T),ae=i.get(M);T.addEventListener("dispose",H),T.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=M.version,s.memory.textures++);const q=T.isWebGLCubeRenderTarget===!0,ue=T.isWebGLMultipleRenderTargets===!0,ge=y(T)||a;if(q){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let ye=0;ye<M.mipmaps.length;ye++)B.__webglFramebuffer[he][ye]=t.createFramebuffer()}else B.__webglFramebuffer[he]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)B.__webglFramebuffer[he]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ue)if(r.drawBuffers){const he=T.texture;for(let ye=0,L=he.length;ye<L;ye++){const ve=i.get(he[ye]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Te(T)===!1){const he=ue?M:[M];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ye=0;ye<he.length;ye++){const L=he[ye];B.__webglColorRenderbuffer[ye]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ye]);const ve=o.convert(L.format,L.colorSpace),se=o.convert(L.type),De=N(L.internalFormat,ve,se,L.colorSpace,T.isXRRenderTarget===!0),Re=we(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,De,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,B.__webglColorRenderbuffer[ye])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),F(B.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),ne(t.TEXTURE_CUBE_MAP,M,ge);for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)Ee(B.__webglFramebuffer[he][ye],T,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,ye);else Ee(B.__webglFramebuffer[he],T,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);A(M,ge)&&w(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){const he=T.texture;for(let ye=0,L=he.length;ye<L;ye++){const ve=he[ye],se=i.get(ve);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),ne(t.TEXTURE_2D,ve,ge),Ee(B.__webglFramebuffer,T,ve,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,0),A(ve,ge)&&w(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?he=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(he,ae.__webglTexture),ne(he,M,ge),a&&M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)Ee(B.__webglFramebuffer[ye],T,M,t.COLOR_ATTACHMENT0,he,ye);else Ee(B.__webglFramebuffer,T,M,t.COLOR_ATTACHMENT0,he,0);A(M,ge)&&w(he),n.unbindTexture()}T.depthBuffer&&Ce(T)}function $(T){const M=y(T)||a,B=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ae=0,q=B.length;ae<q;ae++){const ue=B[ae];if(A(ue,M)){const ge=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(ue).__webglTexture;n.bindTexture(ge,he),w(ge),n.unbindTexture()}}}function re(T){if(a&&T.samples>0&&Te(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],B=T.width,ae=T.height;let q=t.COLOR_BUFFER_BIT;const ue=[],ge=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(T),ye=T.isWebGLMultipleRenderTargets===!0;if(ye)for(let L=0;L<M.length;L++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+L,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+L,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let L=0;L<M.length;L++){ue.push(t.COLOR_ATTACHMENT0+L),T.depthBuffer&&ue.push(ge);const ve=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(ve===!1&&(T.depthBuffer&&(q|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&(q|=t.STENCIL_BUFFER_BIT)),ye&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[L]),ve===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ge]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ge])),ye){const se=i.get(M[L]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,B,ae,0,0,B,ae,q,t.NEAREST),g&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ue)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ye)for(let L=0;L<M.length;L++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+L,t.RENDERBUFFER,he.__webglColorRenderbuffer[L]);const ve=i.get(M[L]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+L,t.TEXTURE_2D,ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function we(T){return Math.min(f,T.samples)}function Te(T){const M=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Pe(T){const M=s.render.frame;x.get(T)!==M&&(x.set(T,M),T.update())}function Be(T,M){const B=T.colorSpace,ae=T.format,q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Pf||B!==Ui&&B!==Ln&&(rt.getTransfer(B)===lt?a===!1?e.has("EXT_sRGB")===!0&&ae===Yn?(T.format=Pf,T.minFilter=Pn,T.generateMipmaps=!1):M=yy.sRGBToLinear(M):(ae!==Yn||q!==fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}this.allocateTextureUnit=U,this.resetTextureUnits=j,this.setTexture2D=W,this.setTexture2DArray=le,this.setTexture3D=fe,this.setTextureCube=ee,this.rebindTextures=K,this.setupRenderTarget=te,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Te}function T2(t,e,n){const i=n.isWebGL2;function r(o,s=Ln){let a;const l=rt.getTransfer(s);if(o===fr)return t.UNSIGNED_BYTE;if(o===uy)return t.UNSIGNED_SHORT_4_4_4_4;if(o===dy)return t.UNSIGNED_SHORT_5_5_5_1;if(o===ab)return t.BYTE;if(o===lb)return t.SHORT;if(o===$h)return t.UNSIGNED_SHORT;if(o===cy)return t.INT;if(o===er)return t.UNSIGNED_INT;if(o===tr)return t.FLOAT;if(o===ya)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===cb)return t.ALPHA;if(o===Yn)return t.RGBA;if(o===ub)return t.LUMINANCE;if(o===db)return t.LUMINANCE_ALPHA;if(o===Hr)return t.DEPTH_COMPONENT;if(o===as)return t.DEPTH_STENCIL;if(o===Pf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===fb)return t.RED;if(o===fy)return t.RED_INTEGER;if(o===hb)return t.RG;if(o===hy)return t.RG_INTEGER;if(o===py)return t.RGBA_INTEGER;if(o===Bu||o===Hu||o===Vu||o===Gu)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Bu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Bu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Hu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Vu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Gu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===eg||o===tg||o===ng||o===ig)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===eg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===tg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===ng)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===ig)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===my)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===rg||o===og)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===rg)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===og)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===sg||o===ag||o===lg||o===cg||o===ug||o===dg||o===fg||o===hg||o===pg||o===mg||o===gg||o===vg||o===_g||o===xg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===sg)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===ag)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===lg)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===cg)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===ug)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===dg)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===fg)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===hg)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===pg)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===mg)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===gg)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===vg)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===_g)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===xg)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Wu||o===yg||o===Sg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Wu)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===yg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Sg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===pb||o===Eg||o===Mg||o===wg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Wu)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Eg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Mg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===wg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Br?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class A2 extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class El extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b2={type:"move"};class pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const m of e.hand.values()){const p=n.getJointPose(m,i),u=this._getHandJoint(c,m);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),g=.02,x=.005;c.inputState.pinching&&h>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(b2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new El;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class C2 extends no{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,g=null,x=null;const m=n.getContextAttributes();let p=null,u=null;const v=[],_=[],y=new Ve;let S=null;const A=new Jt;A.layers.enable(1),A.viewport=new dt;const w=new Jt;w.layers.enable(2),w.viewport=new dt;const N=[A,w],E=new A2;E.layers.enable(1),E.layers.enable(2);let b=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let k=v[ee];return k===void 0&&(k=new pd,v[ee]=k),k.getTargetRaySpace()},this.getControllerGrip=function(ee){let k=v[ee];return k===void 0&&(k=new pd,v[ee]=k),k.getGripSpace()},this.getHand=function(ee){let k=v[ee];return k===void 0&&(k=new pd,v[ee]=k),k.getHandSpace()};function H(ee){const k=_.indexOf(ee.inputSource);if(k===-1)return;const ce=v[k];ce!==void 0&&(ce.update(ee.inputSource,ee.frame,c||s),ce.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Z(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",P);for(let ee=0;ee<v.length;ee++){const k=_[ee];k!==null&&(_[ee]=null,v[ee].disconnect(k))}b=null,V=null,e.setRenderTarget(p),g=null,h=null,f=null,r=null,u=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){o=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",P),m.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(r,n,k),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new Jr(g.framebufferWidth,g.framebufferHeight,{format:Yn,type:fr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let k=null,ce=null,ie=null;m.depth&&(ie=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,k=m.stencil?as:Hr,ce=m.stencil?Br:er);const ne={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:o};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(ne),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new Jr(h.textureWidth,h.textureHeight,{format:Yn,type:fr,depthTexture:new Ly(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const pe=e.properties.get(u);pe.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),fe.setContext(r),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(ee){for(let k=0;k<ee.removed.length;k++){const ce=ee.removed[k],ie=_.indexOf(ce);ie>=0&&(_[ie]=null,v[ie].disconnect(ce))}for(let k=0;k<ee.added.length;k++){const ce=ee.added[k];let ie=_.indexOf(ce);if(ie===-1){for(let pe=0;pe<v.length;pe++)if(pe>=_.length){_.push(ce),ie=pe;break}else if(_[pe]===null){_[pe]=ce,ie=pe;break}if(ie===-1)break}const ne=v[ie];ne&&ne.connect(ce)}}const G=new D,Y=new D;function j(ee,k,ce){G.setFromMatrixPosition(k.matrixWorld),Y.setFromMatrixPosition(ce.matrixWorld);const ie=G.distanceTo(Y),ne=k.projectionMatrix.elements,pe=ce.projectionMatrix.elements,Se=ne[14]/(ne[10]-1),_e=ne[14]/(ne[10]+1),Ee=(ne[9]+1)/ne[5],F=(ne[9]-1)/ne[5],Ye=(ne[8]-1)/ne[0],Ce=(pe[8]+1)/pe[0],K=Se*Ye,te=Se*Ce,$=ie/(-Ye+Ce),re=$*-Ye;k.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(re),ee.translateZ($),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const we=Se+$,Te=_e+$,Pe=K-re,Be=te+(ie-re),T=Ee*_e/Te*we,M=F*_e/Te*we;ee.projectionMatrix.makePerspective(Pe,Be,T,M,we,Te),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function U(ee,k){k===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(k.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;E.near=w.near=A.near=ee.near,E.far=w.far=A.far=ee.far,(b!==E.near||V!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),b=E.near,V=E.far);const k=ee.parent,ce=E.cameras;U(E,k);for(let ie=0;ie<ce.length;ie++)U(ce[ie],k);ce.length===2?j(E,A,w):E.projectionMatrix.copy(A.projectionMatrix),z(ee,E,k)};function z(ee,k,ce){ce===null?ee.matrix.copy(k.matrixWorld):(ee.matrix.copy(ce.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(k.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(k.projectionMatrix),ee.projectionMatrixInverse.copy(k.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Sc*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ee)};let W=null;function le(ee,k){if(d=k.getViewerPose(c||s),x=k,d!==null){const ce=d.views;g!==null&&(e.setRenderTargetFramebuffer(u,g.framebuffer),e.setRenderTarget(u));let ie=!1;ce.length!==E.cameras.length&&(E.cameras.length=0,ie=!0);for(let ne=0;ne<ce.length;ne++){const pe=ce[ne];let Se=null;if(g!==null)Se=g.getViewport(pe);else{const Ee=f.getViewSubImage(h,pe);Se=Ee.viewport,ne===0&&(e.setRenderTargetTextures(u,Ee.colorTexture,h.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(u))}let _e=N[ne];_e===void 0&&(_e=new Jt,_e.layers.enable(ne),_e.viewport=new dt,N[ne]=_e),_e.matrix.fromArray(pe.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(pe.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Se.x,Se.y,Se.width,Se.height),ne===0&&(E.matrix.copy(_e.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ie===!0&&E.cameras.push(_e)}}for(let ce=0;ce<v.length;ce++){const ie=_[ce],ne=v[ce];ie!==null&&ne!==void 0&&ne.update(ie,k,c||s)}W&&W(ee,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),x=null}const fe=new Ry;fe.setAnimationLoop(le),this.setAnimationLoop=function(ee){W=ee},this.dispose=function(){}}}function R2(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Ay(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,_,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(p,u):u.isMeshToonMaterial?(o(p,u),f(p,u)):u.isMeshPhongMaterial?(o(p,u),d(p,u)):u.isMeshStandardMaterial?(o(p,u),h(p,u),u.isMeshPhysicalMaterial&&g(p,u,y)):u.isMeshMatcapMaterial?(o(p,u),x(p,u)):u.isMeshDepthMaterial?o(p,u):u.isMeshDistanceMaterial?(o(p,u),m(p,u)):u.isMeshNormalMaterial?o(p,u):u.isLineBasicMaterial?(s(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,v,_):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===un&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===un&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const _=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*_,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function s(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,_){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=_*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===un&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function m(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function P2(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,_){const y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=r[v.id];y===void 0&&(x(v),y=d(v),r[v.id]=y,v.addEventListener("dispose",p));const S=_.program;i.updateUBOMapping(v,S);const A=e.render.frame;o[v.id]!==A&&(h(v),o[v.id]=A)}function d(v){const _=f();v.__bindingPointIndex=_;const y=t.createBuffer(),S=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,S,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function f(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],y=v.uniforms,S=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,w=y.length;A<w;A++){const N=y[A];if(g(N,A,S)===!0){const E=N.__offset,b=Array.isArray(N.value)?N.value:[N.value];let V=0;for(let H=0;H<b.length;H++){const Z=b[H],P=m(Z);typeof Z=="number"?(N.__data[0]=Z,t.bufferSubData(t.UNIFORM_BUFFER,E+V,N.__data)):Z.isMatrix3?(N.__data[0]=Z.elements[0],N.__data[1]=Z.elements[1],N.__data[2]=Z.elements[2],N.__data[3]=Z.elements[0],N.__data[4]=Z.elements[3],N.__data[5]=Z.elements[4],N.__data[6]=Z.elements[5],N.__data[7]=Z.elements[0],N.__data[8]=Z.elements[6],N.__data[9]=Z.elements[7],N.__data[10]=Z.elements[8],N.__data[11]=Z.elements[0]):(Z.toArray(N.__data,V),V+=P.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,E,N.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,_,y){const S=v.value;if(y[_]===void 0){if(typeof S=="number")y[_]=S;else{const A=Array.isArray(S)?S:[S],w=[];for(let N=0;N<A.length;N++)w.push(A[N].clone());y[_]=w}return!0}else if(typeof S=="number"){if(y[_]!==S)return y[_]=S,!0}else{const A=Array.isArray(y[_])?y[_]:[y[_]],w=Array.isArray(S)?S:[S];for(let N=0;N<A.length;N++){const E=A[N];if(E.equals(w[N])===!1)return E.copy(w[N]),!0}}return!1}function x(v){const _=v.uniforms;let y=0;const S=16;let A=0;for(let w=0,N=_.length;w<N;w++){const E=_[w],b={boundary:0,storage:0},V=Array.isArray(E.value)?E.value:[E.value];for(let H=0,Z=V.length;H<Z;H++){const P=V[H],G=m(P);b.boundary+=G.boundary,b.storage+=G.storage}if(E.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,w>0){A=y%S;const H=S-A;A!==0&&H-b.boundary<0&&(y+=S-A,E.__offset=y)}y+=b.storage}return A=y%S,A>0&&(y+=S-A),v.__size=y,v.__cache={},this}function m(v){const _={boundary:0,storage:0};return typeof v=="number"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){const _=v.target;_.removeEventListener("dispose",p);const y=s.indexOf(_.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete o[_.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:c,dispose:u}}class ip{constructor(e={}){const{canvas:n=bb(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=dr,this.toneMappingExposure=1;const _=this;let y=!1,S=0,A=0,w=null,N=-1,E=null;const b=new dt,V=new dt;let H=null;const Z=new Xe(0);let P=0,G=n.width,Y=n.height,j=1,U=null,z=null;const W=new dt(0,0,G,Y),le=new dt(0,0,G,Y);let fe=!1;const ee=new ep;let k=!1,ce=!1,ie=null;const ne=new ft,pe=new Ve,Se=new D,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return w===null?j:1}let F=i;function Ye(C,X){for(let J=0;J<C.length;J++){const oe=C[J],Q=n.getContext(oe,X);if(Q!==null)return Q}return null}try{const C={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jh}`),n.addEventListener("webglcontextlost",$e,!1),n.addEventListener("webglcontextrestored",O,!1),n.addEventListener("webglcontextcreationerror",Ae,!1),F===null){const X=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&X.shift(),F=Ye(X,C),F===null)throw Ye(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ce,K,te,$,re,we,Te,Pe,Be,T,M,B,ae,q,ue,ge,he,ye,L,ve,se,De,Re,Oe;function Ue(){Ce=new HP(F),K=new UP(F,Ce,e),Ce.init(K),De=new T2(F,Ce,K),te=new M2(F,Ce,K),$=new WP(F),re=new c2,we=new w2(F,Ce,te,re,K,De,$),Te=new FP(_),Pe=new BP(_),Be=new Qb(F,K),Re=new NP(F,Ce,Be,K),T=new VP(F,Be,$,Re),M=new $P(F,T,Be,$),L=new YP(F,K,we),ge=new OP(re),B=new l2(_,Te,Pe,Ce,K,Re,ge),ae=new R2(_,re),q=new d2,ue=new v2(Ce,K),ye=new DP(_,Te,Pe,te,M,h,l),he=new E2(_,M,K),Oe=new P2(F,$,K,te),ve=new IP(F,Ce,$,K),se=new GP(F,Ce,$,K),$.programs=B.programs,_.capabilities=K,_.extensions=Ce,_.properties=re,_.renderLists=q,_.shadowMap=he,_.state=te,_.info=$}Ue();const Ne=new C2(_,F);this.xr=Ne,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=Ce.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ce.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(C){C!==void 0&&(j=C,this.setSize(G,Y,!1))},this.getSize=function(C){return C.set(G,Y)},this.setSize=function(C,X,J=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,Y=X,n.width=Math.floor(C*j),n.height=Math.floor(X*j),J===!0&&(n.style.width=C+"px",n.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(G*j,Y*j).floor()},this.setDrawingBufferSize=function(C,X,J){G=C,Y=X,j=J,n.width=Math.floor(C*J),n.height=Math.floor(X*J),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(W)},this.setViewport=function(C,X,J,oe){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,X,J,oe),te.viewport(b.copy(W).multiplyScalar(j).floor())},this.getScissor=function(C){return C.copy(le)},this.setScissor=function(C,X,J,oe){C.isVector4?le.set(C.x,C.y,C.z,C.w):le.set(C,X,J,oe),te.scissor(V.copy(le).multiplyScalar(j).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(C){te.setScissorTest(fe=C)},this.setOpaqueSort=function(C){U=C},this.setTransparentSort=function(C){z=C},this.getClearColor=function(C){return C.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(C=!0,X=!0,J=!0){let oe=0;if(C){let Q=!1;if(w!==null){const Le=w.texture.format;Q=Le===py||Le===hy||Le===fy}if(Q){const Le=w.texture.type,ke=Le===fr||Le===er||Le===$h||Le===Br||Le===uy||Le===dy,ze=ye.getClearColor(),He=ye.getClearAlpha(),Ze=ze.r,Ge=ze.g,We=ze.b;ke?(g[0]=Ze,g[1]=Ge,g[2]=We,g[3]=He,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=Ze,x[1]=Ge,x[2]=We,x[3]=He,F.clearBufferiv(F.COLOR,0,x))}else oe|=F.COLOR_BUFFER_BIT}X&&(oe|=F.DEPTH_BUFFER_BIT),J&&(oe|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",$e,!1),n.removeEventListener("webglcontextrestored",O,!1),n.removeEventListener("webglcontextcreationerror",Ae,!1),q.dispose(),ue.dispose(),re.dispose(),Te.dispose(),Pe.dispose(),M.dispose(),Re.dispose(),Oe.dispose(),B.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Bt),Ne.removeEventListener("sessionend",it),ie&&(ie.dispose(),ie=null),Ht.stop()};function $e(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=$.autoReset,X=he.enabled,J=he.autoUpdate,oe=he.needsUpdate,Q=he.type;Ue(),$.autoReset=C,he.enabled=X,he.autoUpdate=J,he.needsUpdate=oe,he.type=Q}function Ae(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function me(C){const X=C.target;X.removeEventListener("dispose",me),de(X)}function de(C){Me(C),re.remove(C)}function Me(C){const X=re.get(C).programs;X!==void 0&&(X.forEach(function(J){B.releaseProgram(J)}),C.isShaderMaterial&&B.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,J,oe,Q,Le){X===null&&(X=_e);const ke=Q.isMesh&&Q.matrixWorld.determinant()<0,ze=Hy(C,X,J,oe,Q);te.setMaterial(oe,ke);let He=J.index,Ze=1;if(oe.wireframe===!0){if(He=T.getWireframeAttribute(J),He===void 0)return;Ze=2}const Ge=J.drawRange,We=J.attributes.position;let xt=Ge.start*Ze,fn=(Ge.start+Ge.count)*Ze;Le!==null&&(xt=Math.max(xt,Le.start*Ze),fn=Math.min(fn,(Le.start+Le.count)*Ze)),He!==null?(xt=Math.max(xt,0),fn=Math.min(fn,He.count)):We!=null&&(xt=Math.max(xt,0),fn=Math.min(fn,We.count));const Pt=fn-xt;if(Pt<0||Pt===1/0)return;Re.setup(Q,oe,ze,J,He);let hi,ht=ve;if(He!==null&&(hi=Be.get(He),ht=se,ht.setIndex(hi)),Q.isMesh)oe.wireframe===!0?(te.setLineWidth(oe.wireframeLinewidth*Ee()),ht.setMode(F.LINES)):ht.setMode(F.TRIANGLES);else if(Q.isLine){let Qe=oe.linewidth;Qe===void 0&&(Qe=1),te.setLineWidth(Qe*Ee()),Q.isLineSegments?ht.setMode(F.LINES):Q.isLineLoop?ht.setMode(F.LINE_LOOP):ht.setMode(F.LINE_STRIP)}else Q.isPoints?ht.setMode(F.POINTS):Q.isSprite&&ht.setMode(F.TRIANGLES);if(Q.isBatchedMesh)ht.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)ht.renderInstances(xt,Pt,Q.count);else if(J.isInstancedBufferGeometry){const Qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Jc=Math.min(J.instanceCount,Qe);ht.renderInstances(xt,Pt,Jc)}else ht.render(xt,Pt)};function Fe(C,X,J){C.transparent===!0&&C.side===ri&&C.forceSinglePass===!1?(C.side=un,C.needsUpdate=!0,io(C,X,J),C.side=vr,C.needsUpdate=!0,io(C,X,J),C.side=ri):io(C,X,J)}this.compile=function(C,X,J=null){J===null&&(J=C),p=ue.get(J),p.init(),v.push(p),J.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),C!==J&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),p.setupLights(_._useLegacyLights);const oe=new Set;return C.traverse(function(Q){const Le=Q.material;if(Le)if(Array.isArray(Le))for(let ke=0;ke<Le.length;ke++){const ze=Le[ke];Fe(ze,J,Q),oe.add(ze)}else Fe(Le,J,Q),oe.add(Le)}),v.pop(),p=null,oe},this.compileAsync=function(C,X,J=null){const oe=this.compile(C,X,J);return new Promise(Q=>{function Le(){if(oe.forEach(function(ke){re.get(ke).currentProgram.isReady()&&oe.delete(ke)}),oe.size===0){Q(C);return}setTimeout(Le,10)}Ce.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Ke=null;function Et(C){Ke&&Ke(C)}function Bt(){Ht.stop()}function it(){Ht.start()}const Ht=new Ry;Ht.setAnimationLoop(Et),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(C){Ke=C,Ne.setAnimationLoop(C),C===null?Ht.stop():Ht.start()},Ne.addEventListener("sessionstart",Bt),Ne.addEventListener("sessionend",it),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(X),X=Ne.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,X,w),p=ue.get(C,v.length),p.init(),v.push(p),ne.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ee.setFromProjectionMatrix(ne),ce=this.localClippingEnabled,k=ge.init(this.clippingPlanes,ce),m=q.get(C,u.length),m.init(),u.push(m),Tn(C,X,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(U,z),this.info.render.frame++,k===!0&&ge.beginShadows();const J=p.state.shadowsArray;if(he.render(J,C,X),k===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),ye.render(m,C),p.setupLights(_._useLegacyLights),X.isArrayCamera){const oe=X.cameras;for(let Q=0,Le=oe.length;Q<Le;Q++){const ke=oe[Q];Zc(m,C,ke,ke.viewport)}}else Zc(m,C,X);w!==null&&(we.updateMultisampleRenderTarget(w),we.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(_,C,X),Re.resetDefaultState(),N=-1,E=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,u.pop(),u.length>0?m=u[u.length-1]:m=null};function Tn(C,X,J,oe){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ee.intersectsSprite(C)){oe&&Se.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ne);const ke=M.update(C),ze=C.material;ze.visible&&m.push(C,ke,ze,J,Se.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ee.intersectsObject(C))){const ke=M.update(C),ze=C.material;if(oe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Se.copy(C.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Se.copy(ke.boundingSphere.center)),Se.applyMatrix4(C.matrixWorld).applyMatrix4(ne)),Array.isArray(ze)){const He=ke.groups;for(let Ze=0,Ge=He.length;Ze<Ge;Ze++){const We=He[Ze],xt=ze[We.materialIndex];xt&&xt.visible&&m.push(C,ke,xt,J,Se.z,We)}}else ze.visible&&m.push(C,ke,ze,J,Se.z,null)}}const Le=C.children;for(let ke=0,ze=Le.length;ke<ze;ke++)Tn(Le[ke],X,J,oe)}function Zc(C,X,J,oe){const Q=C.opaque,Le=C.transmissive,ke=C.transparent;p.setupLightsView(J),k===!0&&ge.setGlobalState(_.clippingPlanes,J),Le.length>0&&Qc(Q,Le,X,J),oe&&te.viewport(b.copy(oe)),Q.length>0&&xs(Q,X,J),Le.length>0&&xs(Le,X,J),ke.length>0&&xs(ke,X,J),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Qc(C,X,J,oe){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const Le=K.isWebGL2;ie===null&&(ie=new Jr(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?ya:fr,minFilter:xa,samples:Le?4:0})),_.getDrawingBufferSize(pe),Le?ie.setSize(pe.x,pe.y):ie.setSize(Lf(pe.x),Lf(pe.y));const ke=_.getRenderTarget();_.setRenderTarget(ie),_.getClearColor(Z),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();const ze=_.toneMapping;_.toneMapping=dr,xs(C,J,oe),we.updateMultisampleRenderTarget(ie),we.updateRenderTargetMipmap(ie);let He=!1;for(let Ze=0,Ge=X.length;Ze<Ge;Ze++){const We=X[Ze],xt=We.object,fn=We.geometry,Pt=We.material,hi=We.group;if(Pt.side===ri&&xt.layers.test(oe.layers)){const ht=Pt.side;Pt.side=un,Pt.needsUpdate=!0,La(xt,J,oe,fn,Pt,hi),Pt.side=ht,Pt.needsUpdate=!0,He=!0}}He===!0&&(we.updateMultisampleRenderTarget(ie),we.updateRenderTargetMipmap(ie)),_.setRenderTarget(ke),_.setClearColor(Z,P),_.toneMapping=ze}function xs(C,X,J){const oe=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,Le=C.length;Q<Le;Q++){const ke=C[Q],ze=ke.object,He=ke.geometry,Ze=oe===null?ke.material:oe,Ge=ke.group;ze.layers.test(J.layers)&&La(ze,X,J,He,Ze,Ge)}}function La(C,X,J,oe,Q,Le){C.onBeforeRender(_,X,J,oe,Q,Le),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(_,X,J,oe,C,Le),Q.transparent===!0&&Q.side===ri&&Q.forceSinglePass===!1?(Q.side=un,Q.needsUpdate=!0,_.renderBufferDirect(J,X,oe,Q,C,Le),Q.side=vr,Q.needsUpdate=!0,_.renderBufferDirect(J,X,oe,Q,C,Le),Q.side=ri):_.renderBufferDirect(J,X,oe,Q,C,Le),C.onAfterRender(_,X,J,oe,Q,Le)}function io(C,X,J){X.isScene!==!0&&(X=_e);const oe=re.get(C),Q=p.state.lights,Le=p.state.shadowsArray,ke=Q.state.version,ze=B.getParameters(C,Q.state,Le,X,J),He=B.getProgramCacheKey(ze);let Ze=oe.programs;oe.environment=C.isMeshStandardMaterial?X.environment:null,oe.fog=X.fog,oe.envMap=(C.isMeshStandardMaterial?Pe:Te).get(C.envMap||oe.environment),Ze===void 0&&(C.addEventListener("dispose",me),Ze=new Map,oe.programs=Ze);let Ge=Ze.get(He);if(Ge!==void 0){if(oe.currentProgram===Ge&&oe.lightsStateVersion===ke)return sp(C,ze),Ge}else ze.uniforms=B.getUniforms(C),C.onBuild(J,ze,_),C.onBeforeCompile(ze,_),Ge=B.acquireProgram(ze,He),Ze.set(He,Ge),oe.uniforms=ze.uniforms;const We=oe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=ge.uniform),sp(C,ze),oe.needsLights=Gy(C),oe.lightsStateVersion=ke,oe.needsLights&&(We.ambientLightColor.value=Q.state.ambient,We.lightProbe.value=Q.state.probe,We.directionalLights.value=Q.state.directional,We.directionalLightShadows.value=Q.state.directionalShadow,We.spotLights.value=Q.state.spot,We.spotLightShadows.value=Q.state.spotShadow,We.rectAreaLights.value=Q.state.rectArea,We.ltc_1.value=Q.state.rectAreaLTC1,We.ltc_2.value=Q.state.rectAreaLTC2,We.pointLights.value=Q.state.point,We.pointLightShadows.value=Q.state.pointShadow,We.hemisphereLights.value=Q.state.hemi,We.directionalShadowMap.value=Q.state.directionalShadowMap,We.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,We.spotShadowMap.value=Q.state.spotShadowMap,We.spotLightMatrix.value=Q.state.spotLightMatrix,We.spotLightMap.value=Q.state.spotLightMap,We.pointShadowMap.value=Q.state.pointShadowMap,We.pointShadowMatrix.value=Q.state.pointShadowMatrix),oe.currentProgram=Ge,oe.uniformsList=null,Ge}function op(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Bl.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function sp(C,X){const J=re.get(C);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function Hy(C,X,J,oe,Q){X.isScene!==!0&&(X=_e),we.resetTextureUnits();const Le=X.fog,ke=oe.isMeshStandardMaterial?X.environment:null,ze=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ui,He=(oe.isMeshStandardMaterial?Pe:Te).get(oe.envMap||ke),Ze=oe.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ge=!!J.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),We=!!J.morphAttributes.position,xt=!!J.morphAttributes.normal,fn=!!J.morphAttributes.color;let Pt=dr;oe.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Pt=_.toneMapping);const hi=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ht=hi!==void 0?hi.length:0,Qe=re.get(oe),Jc=p.state.lights;if(k===!0&&(ce===!0||C!==E)){const An=C===E&&oe.id===N;ge.setState(oe,C,An)}let vt=!1;oe.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Jc.state.version||Qe.outputColorSpace!==ze||Q.isBatchedMesh&&Qe.batching===!1||!Q.isBatchedMesh&&Qe.batching===!0||Q.isInstancedMesh&&Qe.instancing===!1||!Q.isInstancedMesh&&Qe.instancing===!0||Q.isSkinnedMesh&&Qe.skinning===!1||!Q.isSkinnedMesh&&Qe.skinning===!0||Q.isInstancedMesh&&Qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qe.instancingColor===!1&&Q.instanceColor!==null||Qe.envMap!==He||oe.fog===!0&&Qe.fog!==Le||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ge.numPlanes||Qe.numIntersection!==ge.numIntersection)||Qe.vertexAlphas!==Ze||Qe.vertexTangents!==Ge||Qe.morphTargets!==We||Qe.morphNormals!==xt||Qe.morphColors!==fn||Qe.toneMapping!==Pt||K.isWebGL2===!0&&Qe.morphTargetsCount!==ht)&&(vt=!0):(vt=!0,Qe.__version=oe.version);let wr=Qe.currentProgram;vt===!0&&(wr=io(oe,X,Q));let ap=!1,ys=!1,eu=!1;const Vt=wr.getUniforms(),Tr=Qe.uniforms;if(te.useProgram(wr.program)&&(ap=!0,ys=!0,eu=!0),oe.id!==N&&(N=oe.id,ys=!0),ap||E!==C){Vt.setValue(F,"projectionMatrix",C.projectionMatrix),Vt.setValue(F,"viewMatrix",C.matrixWorldInverse);const An=Vt.map.cameraPosition;An!==void 0&&An.setValue(F,Se.setFromMatrixPosition(C.matrixWorld)),K.logarithmicDepthBuffer&&Vt.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Vt.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,ys=!0,eu=!0)}if(Q.isSkinnedMesh){Vt.setOptional(F,Q,"bindMatrix"),Vt.setOptional(F,Q,"bindMatrixInverse");const An=Q.skeleton;An&&(K.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Vt.setValue(F,"boneTexture",An.boneTexture,we)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(Vt.setOptional(F,Q,"batchingTexture"),Vt.setValue(F,"batchingTexture",Q._matricesTexture,we));const tu=J.morphAttributes;if((tu.position!==void 0||tu.normal!==void 0||tu.color!==void 0&&K.isWebGL2===!0)&&L.update(Q,J,wr),(ys||Qe.receiveShadow!==Q.receiveShadow)&&(Qe.receiveShadow=Q.receiveShadow,Vt.setValue(F,"receiveShadow",Q.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Tr.envMap.value=He,Tr.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ys&&(Vt.setValue(F,"toneMappingExposure",_.toneMappingExposure),Qe.needsLights&&Vy(Tr,eu),Le&&oe.fog===!0&&ae.refreshFogUniforms(Tr,Le),ae.refreshMaterialUniforms(Tr,oe,j,Y,ie),Bl.upload(F,op(Qe),Tr,we)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Bl.upload(F,op(Qe),Tr,we),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Vt.setValue(F,"center",Q.center),Vt.setValue(F,"modelViewMatrix",Q.modelViewMatrix),Vt.setValue(F,"normalMatrix",Q.normalMatrix),Vt.setValue(F,"modelMatrix",Q.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const An=oe.uniformsGroups;for(let nu=0,Wy=An.length;nu<Wy;nu++)if(K.isWebGL2){const lp=An[nu];Oe.update(lp,wr),Oe.bind(lp,wr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wr}function Vy(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Gy(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,X,J){re.get(C.texture).__webglTexture=X,re.get(C.depthTexture).__webglTexture=J;const oe=re.get(C);oe.__hasExternalTextures=!0,oe.__hasExternalTextures&&(oe.__autoAllocateDepthBuffer=J===void 0,oe.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,X){const J=re.get(C);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,J=0){w=C,S=X,A=J;let oe=!0,Q=null,Le=!1,ke=!1;if(C){const He=re.get(C);He.__useDefaultFramebuffer!==void 0?(te.bindFramebuffer(F.FRAMEBUFFER,null),oe=!1):He.__webglFramebuffer===void 0?we.setupRenderTarget(C):He.__hasExternalTextures&&we.rebindTextures(C,re.get(C.texture).__webglTexture,re.get(C.depthTexture).__webglTexture);const Ze=C.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(ke=!0);const Ge=re.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ge[X])?Q=Ge[X][J]:Q=Ge[X],Le=!0):K.isWebGL2&&C.samples>0&&we.useMultisampledRTT(C)===!1?Q=re.get(C).__webglMultisampledFramebuffer:Array.isArray(Ge)?Q=Ge[J]:Q=Ge,b.copy(C.viewport),V.copy(C.scissor),H=C.scissorTest}else b.copy(W).multiplyScalar(j).floor(),V.copy(le).multiplyScalar(j).floor(),H=fe;if(te.bindFramebuffer(F.FRAMEBUFFER,Q)&&K.drawBuffers&&oe&&te.drawBuffers(C,Q),te.viewport(b),te.scissor(V),te.setScissorTest(H),Le){const He=re.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,He.__webglTexture,J)}else if(ke){const He=re.get(C.texture),Ze=X||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,He.__webglTexture,J||0,Ze)}N=-1},this.readRenderTargetPixels=function(C,X,J,oe,Q,Le,ke){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=re.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(ze=ze[ke]),ze){te.bindFramebuffer(F.FRAMEBUFFER,ze);try{const He=C.texture,Ze=He.format,Ge=He.type;if(Ze!==Yn&&De.convert(Ze)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ge===ya&&(Ce.has("EXT_color_buffer_half_float")||K.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Ge!==fr&&De.convert(Ge)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===tr&&(K.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-oe&&J>=0&&J<=C.height-Q&&F.readPixels(X,J,oe,Q,De.convert(Ze),De.convert(Ge),Le)}finally{const He=w!==null?re.get(w).__webglFramebuffer:null;te.bindFramebuffer(F.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(C,X,J=0){const oe=Math.pow(2,-J),Q=Math.floor(X.image.width*oe),Le=Math.floor(X.image.height*oe);we.setTexture2D(X,0),F.copyTexSubImage2D(F.TEXTURE_2D,J,0,0,C.x,C.y,Q,Le),te.unbindTexture()},this.copyTextureToTexture=function(C,X,J,oe=0){const Q=X.image.width,Le=X.image.height,ke=De.convert(J.format),ze=De.convert(J.type);we.setTexture2D(J,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,J.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,J.unpackAlignment),X.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,oe,C.x,C.y,Q,Le,ke,ze,X.image.data):X.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,oe,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,ke,X.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,oe,C.x,C.y,ke,ze,X.image),oe===0&&J.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),te.unbindTexture()},this.copyTextureToTexture3D=function(C,X,J,oe,Q=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=C.max.x-C.min.x+1,ke=C.max.y-C.min.y+1,ze=C.max.z-C.min.z+1,He=De.convert(oe.format),Ze=De.convert(oe.type);let Ge;if(oe.isData3DTexture)we.setTexture3D(oe,0),Ge=F.TEXTURE_3D;else if(oe.isDataArrayTexture)we.setTexture2DArray(oe,0),Ge=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,oe.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,oe.unpackAlignment);const We=F.getParameter(F.UNPACK_ROW_LENGTH),xt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),fn=F.getParameter(F.UNPACK_SKIP_PIXELS),Pt=F.getParameter(F.UNPACK_SKIP_ROWS),hi=F.getParameter(F.UNPACK_SKIP_IMAGES),ht=J.isCompressedTexture?J.mipmaps[0]:J.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ht.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ht.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,C.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,C.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,C.min.z),J.isDataTexture||J.isData3DTexture?F.texSubImage3D(Ge,Q,X.x,X.y,X.z,Le,ke,ze,He,Ze,ht.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ge,Q,X.x,X.y,X.z,Le,ke,ze,He,ht.data)):F.texSubImage3D(Ge,Q,X.x,X.y,X.z,Le,ke,ze,He,Ze,ht),F.pixelStorei(F.UNPACK_ROW_LENGTH,We),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,fn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,hi),Q===0&&oe.generateMipmaps&&F.generateMipmap(Ge),te.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?we.setTextureCube(C,0):C.isData3DTexture?we.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?we.setTexture2DArray(C,0):we.setTexture2D(C,0),te.unbindTexture()},this.resetState=function(){S=0,A=0,w=null,te.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===qh?"display-p3":"srgb",n.unpackColorSpace=rt.workingColorSpace===Yc?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?Vr:gy}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vr?Ot:Ui}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class L2 extends ip{}L2.prototype.isWebGL1Renderer=!0;class Fy extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class cs extends Mr{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+a,Math.PI);let c=0;const d=[],f=new D,h=new D,g=[],x=[],m=[],p=[];for(let u=0;u<=i;u++){const v=[],_=u/i;let y=0;u===0&&s===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let S=0;S<=n;S++){const A=S/n;f.x=-e*Math.cos(r+A*o)*Math.sin(s+_*a),f.y=e*Math.cos(s+_*a),f.z=e*Math.sin(r+A*o)*Math.sin(s+_*a),x.push(f.x,f.y,f.z),h.copy(f).normalize(),m.push(h.x,h.y,h.z),p.push(A+y,1-_),v.push(c++)}d.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const _=d[u][v+1],y=d[u][v],S=d[u+1][v],A=d[u+1][v+1];(u!==0||s>0)&&g.push(_,y,A),(u!==i-1||l<Math.PI)&&g.push(y,S,A)}this.setIndex(g),this.setAttribute("position",new ui(x,3)),this.setAttribute("normal",new ui(m,3)),this.setAttribute("uv",new ui(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class D2 extends Ra{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xe(16777215),this.specular=new Xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vy,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kc extends It{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const md=new ft,hv=new D,pv=new D;class rp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ep,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;hv.setFromMatrixPosition(e.matrixWorld),n.position.copy(hv),pv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(pv),n.updateMatrixWorld(),md.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(md),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class N2 extends rp{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=Sc*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||n.far;(i!==n.fov||r!==n.aspect||o!==n.far)&&(n.fov=i,n.aspect=r,n.far=o,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class I2 extends Kc{constructor(e,n,i=0,r=Math.PI/3,o=0,s=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=i,this.angle=r,this.penumbra=o,this.decay=s,this.map=null,this.shadow=new N2}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const mv=new ft,Os=new D,gd=new D;class U2 extends rp{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Os.setFromMatrixPosition(e.matrixWorld),i.position.copy(Os),gd.copy(i.position),gd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(gd),i.updateMatrixWorld(),r.makeTranslation(-Os.x,-Os.y,-Os.z),mv.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mv)}}class O2 extends Kc{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new U2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class F2 extends rp{constructor(){super(new Py(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class k2 extends Kc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new F2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ky extends Kc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class zy{constructor(e,n,i=0,r=1/0){this.ray=new Zh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Qh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Nf(e,this,i,n),i.sort(gv),i}intersectObjects(e,n=!0,i=[]){for(let r=0,o=e.length;r<o;r++)Nf(e[r],this,i,n);return i.sort(gv),i}}function gv(t,e){return t.distance-e.distance}function Nf(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let o=0,s=r.length;o<s;o++)Nf(r[o],e,n,!0)}}class vv{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Qt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jh);const _v={type:"change"},vd={type:"start"},xv={type:"end"},Ml=new Zh,yv=new qi,z2=Math.cos(70*Ab.DEG2RAD);class By extends no{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:lo.ROTATE,MIDDLE:lo.DOLLY,RIGHT:lo.PAN},this.touches={ONE:co.ROTATE,TWO:co.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",M),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",M),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(_v),i.update(),o=r.NONE},this.update=function(){const L=new D,ve=new _n().setFromUnitVectors(e.up,new D(0,1,0)),se=ve.clone().invert(),De=new D,Re=new _n,Oe=new D,Ue=2*Math.PI;return function($e=null){const O=i.object.position;L.copy(O).sub(i.target),L.applyQuaternion(ve),a.setFromVector3(L),i.autoRotate&&o===r.NONE&&V(E($e)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ae=i.minAzimuthAngle,me=i.maxAzimuthAngle;isFinite(Ae)&&isFinite(me)&&(Ae<-Math.PI?Ae+=Ue:Ae>Math.PI&&(Ae-=Ue),me<-Math.PI?me+=Ue:me>Math.PI&&(me-=Ue),Ae<=me?a.theta=Math.max(Ae,Math.min(me,a.theta)):a.theta=a.theta>(Ae+me)/2?Math.max(Ae,a.theta):Math.min(me,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&A||i.object.isOrthographicCamera?a.radius=z(a.radius):a.radius=z(a.radius*c),L.setFromSpherical(a),L.applyQuaternion(se),O.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let de=!1;if(i.zoomToCursor&&A){let Me=null;if(i.object.isPerspectiveCamera){const Fe=L.length();Me=z(Fe*c);const Ke=Fe-Me;i.object.position.addScaledVector(y,Ke),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Fe=new D(S.x,S.y,0);Fe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),de=!0;const Ke=new D(S.x,S.y,0);Ke.unproject(i.object),i.object.position.sub(Ke).add(Fe),i.object.updateMatrixWorld(),Me=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Me!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Me).add(i.object.position):(Ml.origin.copy(i.object.position),Ml.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ml.direction))<z2?e.lookAt(i.target):(yv.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ml.intersectPlane(yv,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),de=!0);return c=1,A=!1,de||De.distanceToSquared(i.object.position)>s||8*(1-Re.dot(i.object.quaternion))>s||Oe.distanceToSquared(i.target)>0?(i.dispatchEvent(_v),De.copy(i.object.position),Re.copy(i.object.quaternion),Oe.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",q),i.domElement.removeEventListener("pointerdown",re),i.domElement.removeEventListener("pointercancel",Te),i.domElement.removeEventListener("wheel",T),i.domElement.removeEventListener("pointermove",we),i.domElement.removeEventListener("pointerup",Te),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",M),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new vv,l=new vv;let c=1;const d=new D,f=new Ve,h=new Ve,g=new Ve,x=new Ve,m=new Ve,p=new Ve,u=new Ve,v=new Ve,_=new Ve,y=new D,S=new Ve;let A=!1;const w=[],N={};function E(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function b(){return Math.pow(.95,i.zoomSpeed)}function V(L){l.theta-=L}function H(L){l.phi-=L}const Z=function(){const L=new D;return function(se,De){L.setFromMatrixColumn(De,0),L.multiplyScalar(-se),d.add(L)}}(),P=function(){const L=new D;return function(se,De){i.screenSpacePanning===!0?L.setFromMatrixColumn(De,1):(L.setFromMatrixColumn(De,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(se),d.add(L)}}(),G=function(){const L=new D;return function(se,De){const Re=i.domElement;if(i.object.isPerspectiveCamera){const Oe=i.object.position;L.copy(Oe).sub(i.target);let Ue=L.length();Ue*=Math.tan(i.object.fov/2*Math.PI/180),Z(2*se*Ue/Re.clientHeight,i.object.matrix),P(2*De*Ue/Re.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Z(se*(i.object.right-i.object.left)/i.object.zoom/Re.clientWidth,i.object.matrix),P(De*(i.object.top-i.object.bottom)/i.object.zoom/Re.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Y(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function U(L){if(!i.zoomToCursor)return;A=!0;const ve=i.domElement.getBoundingClientRect(),se=L.clientX-ve.left,De=L.clientY-ve.top,Re=ve.width,Oe=ve.height;S.x=se/Re*2-1,S.y=-(De/Oe)*2+1,y.set(S.x,S.y,1).unproject(i.object).sub(i.object.position).normalize()}function z(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function W(L){f.set(L.clientX,L.clientY)}function le(L){U(L),u.set(L.clientX,L.clientY)}function fe(L){x.set(L.clientX,L.clientY)}function ee(L){h.set(L.clientX,L.clientY),g.subVectors(h,f).multiplyScalar(i.rotateSpeed);const ve=i.domElement;V(2*Math.PI*g.x/ve.clientHeight),H(2*Math.PI*g.y/ve.clientHeight),f.copy(h),i.update()}function k(L){v.set(L.clientX,L.clientY),_.subVectors(v,u),_.y>0?Y(b()):_.y<0&&j(b()),u.copy(v),i.update()}function ce(L){m.set(L.clientX,L.clientY),p.subVectors(m,x).multiplyScalar(i.panSpeed),G(p.x,p.y),x.copy(m),i.update()}function ie(L){U(L),L.deltaY<0?j(b()):L.deltaY>0&&Y(b()),i.update()}function ne(L){let ve=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?H(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),ve=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?H(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),ve=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),ve=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),ve=!0;break}ve&&(L.preventDefault(),i.update())}function pe(){if(w.length===1)f.set(w[0].pageX,w[0].pageY);else{const L=.5*(w[0].pageX+w[1].pageX),ve=.5*(w[0].pageY+w[1].pageY);f.set(L,ve)}}function Se(){if(w.length===1)x.set(w[0].pageX,w[0].pageY);else{const L=.5*(w[0].pageX+w[1].pageX),ve=.5*(w[0].pageY+w[1].pageY);x.set(L,ve)}}function _e(){const L=w[0].pageX-w[1].pageX,ve=w[0].pageY-w[1].pageY,se=Math.sqrt(L*L+ve*ve);u.set(0,se)}function Ee(){i.enableZoom&&_e(),i.enablePan&&Se()}function F(){i.enableZoom&&_e(),i.enableRotate&&pe()}function Ye(L){if(w.length==1)h.set(L.pageX,L.pageY);else{const se=ye(L),De=.5*(L.pageX+se.x),Re=.5*(L.pageY+se.y);h.set(De,Re)}g.subVectors(h,f).multiplyScalar(i.rotateSpeed);const ve=i.domElement;V(2*Math.PI*g.x/ve.clientHeight),H(2*Math.PI*g.y/ve.clientHeight),f.copy(h)}function Ce(L){if(w.length===1)m.set(L.pageX,L.pageY);else{const ve=ye(L),se=.5*(L.pageX+ve.x),De=.5*(L.pageY+ve.y);m.set(se,De)}p.subVectors(m,x).multiplyScalar(i.panSpeed),G(p.x,p.y),x.copy(m)}function K(L){const ve=ye(L),se=L.pageX-ve.x,De=L.pageY-ve.y,Re=Math.sqrt(se*se+De*De);v.set(0,Re),_.set(0,Math.pow(v.y/u.y,i.zoomSpeed)),Y(_.y),u.copy(v)}function te(L){i.enableZoom&&K(L),i.enablePan&&Ce(L)}function $(L){i.enableZoom&&K(L),i.enableRotate&&Ye(L)}function re(L){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",we),i.domElement.addEventListener("pointerup",Te)),ue(L),L.pointerType==="touch"?B(L):Pe(L))}function we(L){i.enabled!==!1&&(L.pointerType==="touch"?ae(L):Be(L))}function Te(L){ge(L),w.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",we),i.domElement.removeEventListener("pointerup",Te)),i.dispatchEvent(xv),o=r.NONE}function Pe(L){let ve;switch(L.button){case 0:ve=i.mouseButtons.LEFT;break;case 1:ve=i.mouseButtons.MIDDLE;break;case 2:ve=i.mouseButtons.RIGHT;break;default:ve=-1}switch(ve){case lo.DOLLY:if(i.enableZoom===!1)return;le(L),o=r.DOLLY;break;case lo.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;fe(L),o=r.PAN}else{if(i.enableRotate===!1)return;W(L),o=r.ROTATE}break;case lo.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;W(L),o=r.ROTATE}else{if(i.enablePan===!1)return;fe(L),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(vd)}function Be(L){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;ee(L);break;case r.DOLLY:if(i.enableZoom===!1)return;k(L);break;case r.PAN:if(i.enablePan===!1)return;ce(L);break}}function T(L){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(L.preventDefault(),i.dispatchEvent(vd),ie(L),i.dispatchEvent(xv))}function M(L){i.enabled===!1||i.enablePan===!1||ne(L)}function B(L){switch(he(L),w.length){case 1:switch(i.touches.ONE){case co.ROTATE:if(i.enableRotate===!1)return;pe(),o=r.TOUCH_ROTATE;break;case co.PAN:if(i.enablePan===!1)return;Se(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case co.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ee(),o=r.TOUCH_DOLLY_PAN;break;case co.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;F(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(vd)}function ae(L){switch(he(L),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ye(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ce(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;te(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;$(L),i.update();break;default:o=r.NONE}}function q(L){i.enabled!==!1&&L.preventDefault()}function ue(L){w.push(L)}function ge(L){delete N[L.pointerId];for(let ve=0;ve<w.length;ve++)if(w[ve].pointerId==L.pointerId){w.splice(ve,1);return}}function he(L){let ve=N[L.pointerId];ve===void 0&&(ve=new Ve,N[L.pointerId]=ve),ve.set(L.pageX,L.pageY)}function ye(L){const ve=L.pointerId===w[0].pointerId?w[1]:w[0];return N[ve.pointerId]}i.domElement.addEventListener("contextmenu",q),i.domElement.addEventListener("pointerdown",re),i.domElement.addEventListener("pointercancel",Te),i.domElement.addEventListener("wheel",T,{passive:!1}),this.update()}}const B2=({onExit:t})=>{const[e,n]=R.useState(!0),[i,r]=R.useState(0),[o,s]=R.useState(1),[a,l]=R.useState({Tcc_min:87,dt_min:1,pulse_width_min:15,pulse_amp:1,pulse_start_offset:57,k_dm:Math.log(2)/10,tau_B_min:4*60,tau_I_min:8*60,tau_R_min:18*60,t12_R_hours:30,inherit_frac_C:1,temperature_celsius:30,medium_ph:6.25,v0:2,growth_rate:0,division_volume_ratio:2,crowding_threshold:50,crowding_strength:.2}),[c,d]=R.useState({totalCells:1,visibleCells:0,avgLength:0,growthRate:0,avgRValue:0,maxRValue:0,cellsWithTimer:0}),[f,h]=R.useState(null),[g,x]=R.useState(!1),[m,p]=R.useState(0),u=(K,te)=>{const{pulse_width_min:$,pulse_amp:re,pulse_start_offset:we,Tcc_min:Te}=te,Pe=K%Te,Be=we,T=Be+$;return T<=Te?Be<=Pe&&Pe<T?re:0:Pe>=Be||Pe<T-Te?re:0},v=(K,te)=>{const $=K%te;if($<30)return{k_tx:.2,k_tl:.2};if($>=30&&$<40){const re=($-30)/10,we=.2+re*(.8-.2),Te=.2+re*(.8-.2);return{k_tx:we,k_tl:Te}}else if($>=40&&$<55){const re=($-40)/15,we=.8+re*(1.2-.8),Te=.8+re*(1.2-.8);return{k_tx:we,k_tl:Te}}else return $>=55&&$<72?{k_tx:1.2,k_tl:1.2}:{k_tx:.1,k_tl:.1}},_=(K,te,$)=>K<=te?1:1/(1+$*(K-te)),y=K=>({k_B:1/Math.max(K.tau_B_min,1e-9),k_I:1/Math.max(K.tau_I_min,1e-9),k_R:1/Math.max(K.tau_R_min,1e-9),k_DR:Math.log(2)/(K.t12_R_hours*60)}),S=(K,te)=>te/(K+te+1e-12),A=K=>{const te=1-K;return{r:K,g:.2,b:te}},w=(K,te,$)=>{K.userData.timerState||(K.userData.timerState={mRNA:0,C:K.userData.inheritedC||0,B:0,I:0,R:0,volume:$.v0,t_since_division:0,r_value:0});const re=K.userData.timerState,{Tcc_min:we}=$;(re.t_since_division>=we||re.volume>=$.v0*$.division_volume_ratio)&&(re.mRNA=re.mRNA/2,re.C=re.C/2,re.B=re.B/2,re.I=re.I/2,re.R=re.R/2,re.volume=$.v0,re.t_since_division=0);const Te=(B,ae)=>{const[q,ue,ge,he,ye,L]=ae,ve=u(B,$),{k_tx:se,k_tl:De}=v(B,we),{k_B:Re,k_I:Oe,k_R:Ue,k_DR:Ne}=y($),$e=q+ue+ge+he+ye,O=_($e,$.crowding_threshold,$.crowding_strength),Ae=se*O,me=De*O,de=Re*O,Me=Oe*O,Fe=Ue*O,Et=(Ae*ve-$.k_dm*q)/L-q/L*($.growth_rate*L),it=(me*q-de*ue)/L-ue/L*($.growth_rate*L),Tn=(de*ue-Me*ge)/L-ge/L*($.growth_rate*L),Qc=(Me*ge-Fe*he)/L-he/L*($.growth_rate*L),La=(Fe*he-Ne*ye)/L-ye/L*($.growth_rate*L),io=$.growth_rate*L;return[Et,it,Tn,Qc,La,io]},Pe=(B,ae,q)=>{const ue=Te(B,ae),ge=ae.map((De,Re)=>De+.5*q*ue[Re]),he=Te(B+.5*q,ge),ye=ae.map((De,Re)=>De+.5*q*he[Re]),L=Te(B+.5*q,ye),ve=ae.map((De,Re)=>De+q*L[Re]),se=Te(B+q,ve);return ae.map((De,Re)=>De+q/6*(ue[Re]+2*he[Re]+2*L[Re]+se[Re]))},Be=[re.mRNA,re.C,re.B,re.I,re.R,re.volume],T=Pe(re.t_since_division,Be,te);re.mRNA=Math.max(0,T[0]),re.C=Math.max(0,T[1]),re.B=Math.max(0,T[2]),re.I=Math.max(0,T[3]),re.R=Math.max(0,T[4]),re.volume=Math.max($.v0,T[5]),re.t_since_division+=te,re.r_value=S(re.B,re.R);const M=A(re.r_value);return K.material&&K.material.uniforms&&K.material.uniforms.color&&K.material.uniforms.color.value.setRGB(M.r,M.g,M.b),re},N={oxygen:10},E=R.useRef(null),b=R.useRef(null),V=R.useRef(null),H=R.useRef(null),Z=R.useRef(null),P=R.useRef([]),G=R.useRef(1),Y=R.useRef(new zy),j=R.useRef(new Ve),U=R.useRef(1),z=R.useRef(0),W=2100,le=999999999,fe=1.8,ee=K=>{const re=1*Math.max(.5,1-K/100*.5)*fe;return Math.min(re,fe)},k=K=>{const te=b.current.getBoundingClientRect();j.current.x=(K.clientX-te.left)/te.width*2-1,j.current.y=-((K.clientY-te.top)/te.height)*2+1,Y.current.setFromCamera(j.current,Z.current);const $=Y.current.intersectObjects(P.current);if($.length>0){const re=$[0].object;h({id:re.userData.id,generation:re.userData.generation,timerState:re.userData.timerState,clickPosition:{x:K.clientX-te.left,y:K.clientY-te.top}})}else h(null)};R.useEffect(()=>{if(!b.current)return;const K=new Fy;K.background=new Xe(15790320),V.current=K;const te=new Jt(75,800/500,.1,1e3);te.position.set(0,10,15),Z.current=te;const $=new ip({canvas:b.current,antialias:!0});$.setSize(800,500),$.shadowMap.enabled=!0,$.shadowMap.type=Xh,H.current=$;const re=()=>{Z.current&&H.current&&(Z.current.aspect=800/500,Z.current.updateProjectionMatrix(),H.current.setSize(800,500))},we=b.current;we.addEventListener("click",k);let Te=!1,Pe={x:0,y:0};const Be=ge=>{ge.button===2&&(Te=!0,Pe={x:ge.clientX,y:ge.clientY},ge.preventDefault())},T=ge=>{if(Te&&E.current){const he=ge.clientX-Pe.x,ye=ge.clientY-Pe.y,L=E.current.target;L.x+=he*.01,L.y-=ye*.01,Pe={x:ge.clientX,y:ge.clientY}}},M=ge=>{ge.button===2&&(Te=!1)};we.addEventListener("mousedown",Be),we.addEventListener("mousemove",T),we.addEventListener("mouseup",M),we.addEventListener("contextmenu",ge=>ge.preventDefault());const B=new ky(4210752,.6);K.add(B);const ae=new k2(16777215,.8);ae.position.set(10,10,5),ae.castShadow=!0,ae.shadow.mapSize.width=2048,ae.shadow.mapSize.height=2048,K.add(ae);const q=new By(te,$.domElement);q.enableDamping=!0,q.dampingFactor=.05,q.enableZoom=!0,q.enableRotate=!0,q.enablePan=!0,E.current=q,ie();const ue=()=>{requestAnimationFrame(ue),E.current&&E.current.update(),updateOpioidVisualization(),H.current&&V.current&&Z.current&&H.current.render(V.current,Z.current)};return ue(),()=>{we&&(we.removeEventListener("click",k),we.removeEventListener("mousedown",Be),we.removeEventListener("mousemove",T),we.removeEventListener("mouseup",M)),window.removeEventListener("resize",re),H.current&&H.current.dispose(),E.current&&E.current.dispose()}},[]);const ce=(K,te,$=null,re=0)=>{var ge;const we=ee(te),Te=new cs(.5,16,12);Te.scale(1,1,we);const Pe=new Xe(.9,.95,1),Be=new Oi({uniforms:{color:{value:Pe},glowColor:{value:new Xe(.3,.6,1)},glowIntensity:{value:.3},r:{value:0}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 color;
        uniform vec3 glowColor;
        uniform float glowIntensity;
        uniform float r;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          // Timer功能启用时使用r值渐变，否则使用原有颜色
          vec3 finalColor = color;
          if (r > 0.001) {
            // 基于r值的颜色渐变：蓝色(r=0) → 红色(r=1)
            vec3 blueColor = vec3(0.0, 0.0, 1.0);
            vec3 redColor = vec3(1.0, 0.0, 0.0);
            finalColor = mix(blueColor, redColor, r);
          }
          
          float intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
          vec3 glow = glowColor * intensity * glowIntensity;
          gl_FragColor = vec4(finalColor + glow, 1.0);
        }
      `,transparent:!0}),T=new Nn(Te,Be);T.position.copy(K),T.castShadow=!0,T.receiveShadow=!0;const M=new cs(.15,8,6),B=new Xe(.2,.3,.8),ae=new Jh({color:B,transparent:!0,opacity:.7}),q=new Nn(M,ae);q.position.set(0,0,0),T.add(q);const ue=U.current++;return T.userData={id:ue,generation:$&&((ge=P.current.find(he=>he.userData.id===$))==null?void 0:ge.userData.generation)+1||1,parentId:$,birthTime:z.current,growthStage:0,divisionState:0,growthRateModifier:1,length:we,isAlive:!0,hasResistancePlasmid:$!==null,resistanceLevel:0,mutationLevel:0,opioidConcentration:0,geneExpression:0,inheritedC:re,timerState:null},T},ie=()=>{if(!V.current)return;const K=new D(0,0,0),te=ce(K,N.oxygen);te.userData.hasResistancePlasmid=!0,te.userData.resistanceLevel=1,te.material.color=new Xe(1,1,1),V.current.add(te),P.current.push(te),G.current=1,Se()},ne=()=>{if(P.current.length<=W)return;const te=[...P.current].sort(($,re)=>$.userData.birthTime-re.userData.birthTime).slice(0,P.current.length-W);te.forEach($=>{V.current&&$.parent===V.current&&(V.current.remove($),$.geometry&&$.geometry.dispose(),$.material&&(Array.isArray($.material)?$.material.forEach(re=>re.dispose()):$.material.dispose()))}),P.current=P.current.filter($=>!te.includes($))},pe=K=>{if(!V.current||G.current>=le)return;const te=K.position.clone(),$=K.userData;K.userData.dividing=!0;let re=!1;yeastType==="snowflake"?re=Math.random()<.8:re=Math.random()<.5;let we=0;g&&K.userData.timerState&&(we=K.userData.timerState.C*a.inherit_frac_C);const Te=ce(te,N.oxygen,$.id,we);let Pe=null;if(re){let se=0;g&&K.userData.timerState&&(se=K.userData.timerState.C*a.inherit_frac_C),Pe=ce(te,N.oxygen,$.id,se)}Te.userData.generation=$.generation+1,Te.userData.parentId=$.id,Te.userData.birthTime=z.current,Te.userData.growthStage=0,Te.userData.divisionState=0,Te.userData.growthRateModifier=1,re&&Pe&&(Pe.userData.generation=$.generation+1,Pe.userData.parentId=$.id,Pe.userData.birthTime=z.current,Pe.userData.growthStage=0,Pe.userData.divisionState=0,Pe.userData.growthRateModifier=1);const Be=.05;Te.userData.hasResistancePlasmid=$.hasResistancePlasmid&&Math.random()>Be,re&&Pe&&(Pe.userData.hasResistancePlasmid=$.hasResistancePlasmid&&Math.random()>Be);const T=.02;Te.userData.mutationLevel=Math.random()<T?$.mutationLevel+1:$.mutationLevel,Te.userData.resistanceLevel=Te.userData.hasResistancePlasmid?Math.max(1,Te.userData.mutationLevel):0,re&&Pe&&(Pe.userData.mutationLevel=Math.random()<T?$.mutationLevel+1:$.mutationLevel,Pe.userData.resistanceLevel=Pe.userData.hasResistancePlasmid?Math.max(1,Pe.userData.mutationLevel):0),V.current.add(Te),P.current.push(Te),re&&Pe&&(V.current.add(Pe),P.current.push(Pe)),G.current+=re?1:0;let M,B;new D(1,0,0);const ae=1.2;let q=0;if($.generation===1)if(yeastType==="snowflake"){const se=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(.707,.707,0),new D(-.707,-.707,0)],De=$.divisionCount||0;M=se[De%se.length],re&&(B=se[(De+4)%se.length])}else M=new D(1,0,0),re&&(B=new D(-1,0,0));else{const se=Math.random()*Math.PI*2;M=new D(Math.cos(se),0,Math.sin(se)),re&&(B=new D(Math.cos(se+Math.PI),0,Math.sin(se+Math.PI)))}const ue=new ft,ge=new D(0,1,0),he=new D().crossVectors(M,ge).normalize(),ye=new D().crossVectors(he,M).normalize();ue.makeBasis(M,ye,he);const L=new _n;if(L.setFromRotationMatrix(ue),Te.setRotationFromQuaternion(L),re&&Pe){const se=new ft,De=new D().crossVectors(B,ge).normalize(),Re=new D().crossVectors(De,B).normalize();se.makeBasis(B,Re,De);const Oe=new _n;Oe.setFromRotationMatrix(se),Pe.setRotationFromQuaternion(Oe)}V.current.remove(K),P.current=P.current.filter(se=>se!==K),K.geometry&&K.geometry.dispose(),K.material&&(Array.isArray(K.material)?K.material.forEach(se=>se.dispose()):K.material.dispose());const ve=()=>{if(q>=1){Te.userData.dividing=!1,re&&Pe&&(Pe.userData.dividing=!1),Se();return}q+=.015;const se=Te.userData.separationFactor||1,De=ae*1.18*se;if(Te.position.copy(te).addScaledVector(M,De*q),re&&Pe){const Re=Pe.userData.separationFactor||1,Oe=ae*1.18*Re;Pe.position.copy(te).addScaledVector(B,Oe*q)}requestAnimationFrame(ve)};ve(),ne()},Se=()=>{const K=G.current,te=P.current.length,$=P.current.reduce((Be,T)=>Be+T.userData.length,0)/te||0,re=_e();let we=0,Te=0,Pe=0;if(g){const Be=P.current.filter(T=>T.userData.timerState);if(Pe=Be.length,Pe>0){const T=Be.map(M=>M.userData.timerState.r_value);we=T.reduce((M,B)=>M+B,0)/Pe,Te=Math.max(...T)}}d({totalCells:K,visibleCells:te,avgLength:$.toFixed(2),growthRate:re.toFixed(1),avgRValue:we.toFixed(3),maxRValue:Te.toFixed(3),cellsWithTimer:Pe})},_e=()=>P.current.length>0?P.current.length/100*10:0;R.useEffect(()=>{if(e)return;const K=setInterval(()=>{r($=>{const re=$+o;return z.current=re,re});const te=P.current.filter($=>!$.userData.isAlive&&$.userData.deathTime&&z.current-$.userData.deathTime>50);te.forEach($=>{V.current&&V.current.remove($)}),P.current=P.current.filter($=>!te.includes($)),P.current.forEach($=>{if($.userData.isAlive){if(g&&$.userData.isAlive){const re=o*a.dt_min;w($,re,a)}if(!$.userData.dividing){const Be=.15*(1+Math.min(z.current/200,3))*.8*1*o*($.userData.growthRateModifier||1)/2e3;$.userData.growthStage+=Be,$.userData.growthStage>=1+($.userData.divisionDelay||0)&&pe($)}}}),P.current.forEach($=>{const re=ee(N.oxygen);Math.abs($.userData.length-re)>.01&&($.userData.length=re,$.scale.z=re)}),Se()},100);return()=>clearInterval(K)},[e,o,g,a]);const Ee=()=>{P.current.forEach(K=>{V.current&&V.current.remove(K),K.geometry&&K.geometry.dispose(),K.material&&(Array.isArray(K.material)?K.material.forEach(te=>te.dispose()):K.material.dispose())}),P.current=[],G.current=0,U.current=1,r(0),z.current=0,h(null),p(0),ie()},F=()=>{Z.current&&E.current&&(Z.current.position.set(0,10,15),E.current.target.set(0,0,0),E.current.update())},Ye=Math.floor(i/10),Ce=(i%10*6).toFixed(0);return I.jsxs(Ch,{className:"w-full max-w-5xl mx-auto",children:[I.jsx(Rh,{children:I.jsx(Ph,{children:"3D耐药梯度模型 - Timer功能演示"})}),I.jsx(Lh,{children:I.jsx("div",{className:"flex flex-col gap-4",style:{width:"800px",margin:"0 auto"},children:I.jsxs("div",{className:"flex gap-4 mb-4",children:[I.jsx(Ai,{onClick:()=>n(!e),className:"w-24",children:e?"开始":"暂停"}),I.jsx(Ai,{onClick:Ee,className:"w-24",children:"重置"}),I.jsx(Ai,{onClick:F,className:"w-24",children:"重置视角"}),I.jsxs("div",{className:"mb-4",children:[I.jsxs("label",{className:"block text-sm font-medium mb-2",children:["速度倍数: ",o,"x"]}),I.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:o,onChange:K=>s(parseFloat(K.target.value)),className:"w-full"})]}),I.jsxs("div",{className:"mb-4 p-4 border rounded-lg bg-gray-50",children:[I.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[I.jsxs("label",{className:"flex items-center gap-2",children:[I.jsx("input",{type:"checkbox",checked:g,onChange:K=>x(K.target.checked)}),I.jsx("span",{className:"font-medium",children:"启用Timer功能"})]}),g&&I.jsx("span",{className:"text-sm text-gray-600",children:"(细胞颜色：蓝色→红色渐变表示荧光蛋白成熟度)"})]}),g&&I.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[I.jsxs("div",{children:[I.jsxs("label",{className:"block text-sm font-medium mb-1",children:["细胞周期 (分钟): ",a.Tcc_min]}),I.jsx("input",{type:"range",min:"60",max:"120",step:"5",value:a.Tcc_min,onChange:K=>l(te=>({...te,Tcc_min:parseFloat(K.target.value)})),className:"w-full"})]}),I.jsxs("div",{children:[I.jsxs("label",{className:"block text-sm font-medium mb-1",children:["ASH1脉冲宽度 (分钟): ",a.pulse_width_min]}),I.jsx("input",{type:"range",min:"5",max:"30",step:"1",value:a.pulse_width_min,onChange:K=>l(te=>({...te,pulse_width_min:parseFloat(K.target.value)})),className:"w-full"})]}),I.jsxs("div",{children:[I.jsxs("label",{className:"block text-sm font-medium mb-1",children:["B成熟时间 (分钟): ",a.tau_B_min]}),I.jsx("input",{type:"range",min:"10",max:"60",step:"2",value:a.tau_B_min,onChange:K=>l(te=>({...te,tau_B_min:parseFloat(K.target.value)})),className:"w-full"})]}),I.jsxs("div",{children:[I.jsxs("label",{className:"block text-sm font-medium mb-1",children:["R成熟时间 (分钟): ",a.tau_R_min]}),I.jsx("input",{type:"range",min:"20",max:"100",step:"5",value:a.tau_R_min,onChange:K=>l(te=>({...te,tau_R_min:parseFloat(K.target.value)})),className:"w-full"})]}),I.jsxs("div",{children:[I.jsxs("label",{className:"block text-sm font-medium mb-1",children:["继承比例: ",(a.inherit_frac_C*100).toFixed(0),"%"]}),I.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:a.inherit_frac_C,onChange:K=>l(te=>({...te,inherit_frac_C:parseFloat(K.target.value)})),className:"w-full"})]}),I.jsxs("div",{children:[I.jsxs("label",{className:"block text-sm font-medium mb-1",children:["脉冲强度: ",a.pulse_amp]}),I.jsx("input",{type:"range",min:"0.5",max:"5",step:"0.1",value:a.pulse_amp,onChange:K=>l(te=>({...te,pulse_amp:parseFloat(K.target.value)})),className:"w-full"})]})]})]}),I.jsxs("div",{className:"flex justify-center items-center bg-gray-100 rounded-lg mb-4",style:{width:"800px",height:"500px",position:"relative"},children:[I.jsx("canvas",{ref:b,className:"rounded-lg",style:{width:"800px",height:"500px"}}),I.jsxs("div",{className:"absolute bg-blue-600 bg-opacity-80 text-white px-3 py-2 rounded-md text-sm font-semibold",style:{top:"10px",right:"10px",zIndex:15},children:["Timer: ",g?"启用":"禁用"]}),f&&I.jsxs("div",{className:"absolute bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-sm",style:{left:`${f.clickPosition?f.clickPosition.x:400}px`,top:`${f.clickPosition?f.clickPosition.y:250}px`,transform:"translate(-50%, -50%)",zIndex:10},children:[I.jsxs("div",{children:["第",f.id,"代"]}),f.timerState&&I.jsxs("div",{children:["r值: ",f.timerState.r.toFixed(3)]})]})]}),I.jsx("div",{className:"p-4 bg-white rounded-lg shadow",style:{width:"800px"},children:I.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[I.jsxs("div",{className:"text-sm space-y-2",children:[I.jsx("div",{className:"font-bold mb-2",children:"实时统计"}),I.jsxs("div",{children:["总细胞数: ",c.totalCells.toLocaleString()]}),I.jsxs("div",{children:["可见细胞数: ",c.visibleCells]}),I.jsxs("div",{children:["平均细胞长度: ",c.avgLength]}),I.jsxs("div",{children:["生长速率: ",c.growthRate,"%"]}),I.jsxs("div",{children:["模拟时间: ",Ye,"分",Ce,"秒"]})]}),I.jsxs("div",{className:"text-sm space-y-2",children:[I.jsx("div",{className:"font-bold mb-2",children:"Timer状态"}),I.jsxs("div",{children:["Timer功能: ",g?"启用":"禁用"]}),I.jsxs("div",{children:["具有Timer的细胞: ",c.cellsWithTimer]}),I.jsxs("div",{children:["平均r值: ",c.avgRValue]}),I.jsxs("div",{children:["最大r值: ",c.maxRValue]}),I.jsxs("div",{children:["氧气浓度: ",N.oxygen,"%"]})]})]})}),I.jsxs("div",{className:"p-4 bg-gray-100 rounded-lg shadow",style:{width:"800px"},children:[I.jsx("div",{className:"font-bold mb-2",children:"Timer功能说明"}),I.jsxs("div",{className:"text-sm space-y-2",children:[I.jsxs("div",{children:[I.jsx("strong",{children:"1. Timer原理："}),"基于ASH1启动子的荧光蛋白成熟链 C→B→I→R"]}),I.jsxs("div",{children:[I.jsx("strong",{children:"2. 颜色编码："}),"蓝色(r=0, 未成熟) → 红色(r=1, 完全成熟)"]}),I.jsxs("div",{children:[I.jsx("strong",{children:"3. 细胞周期："}),"ASH1在细胞周期末期脉冲表达，触发蛋白合成"]}),I.jsxs("div",{children:[I.jsx("strong",{children:"4. 谱系追踪："}),"母细胞分裂时，C状态蛋白按比例继承给子细胞"]}),I.jsxs("div",{children:[I.jsx("strong",{children:"5. 参数调节："}),"可调节细胞周期、脉冲宽度、成熟时间等参数"]}),I.jsxs("div",{children:[I.jsx("strong",{children:"6. 实时可视化："}),"观察细胞群体中荧光蛋白成熟度的动态变化"]})]})]}),I.jsx(Ai,{onClick:t,children:"返回酵母生长模拟"})]})})})]})};function H2(){const[t,e]=R.useState(!1),[n,i]=R.useState(!0),[r,o]=R.useState(0),[s,a]=R.useState(1),[l,c]=R.useState("snowflake"),[d,f]=R.useState({totalCells:1,visibleCells:0,avgLength:0,growthRate:0}),[h,g]=R.useState(null),x={oxygen:10},m=R.useRef(null),p=R.useRef(null),u=R.useRef(null),v=R.useRef(null),_=R.useRef(null),y=R.useRef([]),S=R.useRef(1),A=R.useRef(new zy),w=R.useRef(new Ve),N=R.useRef(1),E=2300,b=999999999,V=1.8,H=k=>{if(l==="normal")return 1;{const ce=(20-k)/20*(V-1);return Math.min(1+ce,V)}},Z=k=>{const ce=p.current.getBoundingClientRect();w.current.x=(k.clientX-ce.left)/ce.width*2-1,w.current.y=-((k.clientY-ce.top)/ce.height)*2+1,A.current.setFromCamera(w.current,_.current);const ie=A.current.intersectObjects(y.current);if(ie.length>0){const ne=ie[0].object;g({id:ne.userData.cellId,position:ne.position.clone(),clickPosition:{x:k.clientX-ce.left,y:k.clientY-ce.top}})}else g(null)};R.useEffect(()=>{if(t)return;const k=new Fy;u.current=k,k.background=null;const ce=new Jt(75,window.innerWidth/window.innerHeight,.1,1e3);if(_.current=ce,ce.position.set(0,0,30),ce.lookAt(k.position),!p.current){console.error("Canvas元素不存在");return}const ie=new ip({canvas:p.current,antialias:!0,alpha:!0});v.current=ie,ie.setPixelRatio(window.devicePixelRatio),ie.shadowMap.enabled=!0,ie.shadowMap.type=Xh;const ne=p.current.clientWidth,pe=p.current.clientHeight;ie.setSize(ne,pe);const Se=()=>{if(!p.current)return;const T=p.current.clientWidth,M=p.current.clientHeight;_.current.aspect=T/M,_.current.updateProjectionMatrix(),v.current.setSize(T,M)};window.addEventListener("resize",Se),p.current.addEventListener("click",Z),Se();const _e=new By(ce,ie.domElement);m.current=_e,_e.enableDamping=!0,_e.dampingFactor=.05,_e.minDistance=3,_e.maxDistance=40,_e.enablePan=!0,_e.panSpeed=1,_e.screenSpacePanning=!0;let Ee=!1,F={x:0,y:0};const Ye=T=>{T.preventDefault()},Ce=T=>{T.button===2&&(Ee=!0,F={x:T.clientX,y:T.clientY})},K=T=>{if(Ee){const M=T.clientX-F.x,B=T.clientY-F.y,q=ce.position.distanceTo(_e.target)/500,ue=new D,ge=new D;ce.getWorldDirection(ge).cross(ce.up).normalize().multiplyScalar(-M*q),ce.up.clone().normalize().multiplyScalar(-B*q).add(ge,ue),_e.target.add(ue),F={x:T.clientX,y:T.clientY}}},te=T=>{T.button===2&&(Ee=!1)},$=()=>{Ee=!1};ie.domElement.addEventListener("contextmenu",Ye),ie.domElement.addEventListener("mousedown",Ce),ie.domElement.addEventListener("mousemove",K),ie.domElement.addEventListener("mouseup",te),ie.domElement.addEventListener("mouseleave",$);const re=new ky(16777215,.2);k.add(re);const we=new O2(16777215,3);we.position.set(10,10,10),we.castShadow=!0,k.add(we);const Te=new I2(16777215,2);Te.position.set(15,40,35),Te.castShadow=!0,k.add(Te),G();let Pe;const Be=()=>{Pe=requestAnimationFrame(Be),n||(y.current.forEach(T=>{T.userData.dividing||(T.userData.growthStage+=z()/2e3,T.userData.growthStage>=1+T.userData.divisionDelay&&j(T))}),y.current.forEach(T=>{const M=H(x.oxygen);T.scale.x+=(M-T.scale.x)*.1}),U()),m.current&&m.current.update(),ie.render(k,ce)};return Be(),()=>{Pe&&cancelAnimationFrame(Pe),window.removeEventListener("resize",Se),p.current&&p.current.removeEventListener("click",Z),ie.domElement&&(ie.domElement.removeEventListener("contextmenu",Ye),ie.domElement.removeEventListener("mousedown",Ce),ie.domElement.removeEventListener("mousemove",K),ie.domElement.removeEventListener("mouseup",te),ie.domElement.removeEventListener("mouseleave",$)),k&&k.clear(),ie&&ie.dispose(),m.current&&m.current.dispose(),u.current=null,v.current=null,_.current=null,m.current=null,y.current=[]}},[t]);const P=(k,ce,ie=null)=>{const ne=H(ce),pe=new cs(1,32,32);pe.scale(ne,1,1);const Se=l==="normal"?new Xe(9498256):new Xe(65535),_e=l==="normal"?new Xe(10025880):new Xe(4251856),Ee=new Oi({uniforms:{color:{value:Se},glowColor:{value:_e}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 color;
        uniform vec3 glowColor;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          float rim = pow(1.0 - abs(dot(vNormal, vec3(0, 0, 1.0))), 1.8);
          float edge = smoothstep(0.2, 1.0, abs(vPosition.x));
          float centerDim = smoothstep(0.0, 0.5, abs(vPosition.x));
          vec3 finalColor = mix(color, glowColor, rim + edge * 0.4);
          float alpha = 0.15 + rim * 0.2 + edge * 0.15 - centerDim * 0.05;
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,transparent:!0,side:ri});var F=new Nn(pe,Ee);F.castShadow=!0,F.receiveShadow=!0;const Ye=new cs(.3,16,16),Ce=16753920,K=new D2({color:Ce,emissive:Ce,emissiveIntensity:.3,specular:16777215,shininess:100}),te=new Nn(Ye,K);return te.position.set(0,0,0),F.add(te),k?F.position.copy(k):F.position.set((Math.random()-.5)*30,(Math.random()-.5)*30,(Math.random()-.5)*10),F.userData={growthStage:0,dividing:!1,createdAtOxygen:ce,divisionCount:0,growthRateModifier:.6+Math.random()*.8,divisionDelay:Math.random()*.3,canDivide:!0,isInitialCell:!1,isChildOfDividedCell:!!ie,cellId:ie?ie+1:N.current},F},G=()=>{N.current=1;const k=P(new D(0,0,0),x.oxygen);k.userData.divisionCount=0,k.userData.isInitialCell=!0,k.userData.cellId=1,l==="snowflake"?(k.userData.divisionDelay=.1,k.userData.directionDelays=[.1,.3,.5,.7,.2,.4,.6,.8,.15,.25]):(k.userData.divisionDelay=.05,k.userData.directionDelays=[.05,.15,.25,.35,.45,.55,.65,.75]),u.current.add(k),y.current=[k],S.current=1,U()},Y=()=>{const k=u.current;for(;y.current.length>E;){const ce=y.current.map((ne,pe)=>{const Se=ne.position.length(),_e=ne.userData.isInitialCell||Se<5;return{cell:ne,index:pe,distanceToCenter:Se,isImportantCell:_e}}),ie=ce.filter(ne=>!ne.isImportantCell).sort((ne,pe)=>pe.distanceToCenter-ne.distanceToCenter);if(ie.length>0){const ne=ie[0];k.remove(ne.cell),y.current.splice(ne.index,1)}else{ce.sort((pe,Se)=>Se.distanceToCenter-pe.distanceToCenter);const ne=ce[0];k.remove(ne.cell),y.current.splice(ne.index,1)}}},j=k=>{if(k.userData.dividing)return;const ce=k.position.x===0&&k.position.y===0&&k.position.z===0;if(l==="snowflake"){if(ce&&k.userData.divisionCount>=10||!ce&&k.userData.divisionCount>=1)return}else if(ce&&k.userData.divisionCount>=8||!ce&&k.userData.divisionCount>=1)return;k.userData.dividing=!0,k.userData.divisionCount++;let ie;const ne=k.userData.isChildOfDividedCell;ne?ie=!ce&&Math.random()<.3:ie=!ce&&Math.random()<.6;const pe=P(null,x.oxygen,k.userData.cellId);ie&&(pe.userData.isChildOfDividedCell=!0);let Se=null;ie&&(Se=P(null,x.oxygen,k.userData.cellId),Se.userData.isChildOfDividedCell=!0),u.current.add(pe),y.current.push(pe),ie&&Se&&(u.current.add(Se),y.current.push(Se)),y.current.length>E&&Y(),z()/100;const _e=ie?2:1;S.current=Math.min(S.current+_e,b);const Ee=new D(1,0,0).applyQuaternion(k.quaternion),F=new D;F.copy(k.position),F.length();const Ce=k.scale.x*2.3;let K=0,te,$;if(ce)if(l==="snowflake"){const M=(5+Math.random()*10)*(Math.PI/180),B=new D((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3).normalize(),ae=[new D(1,1,1),new D(1,1,-1),new D(1,-1,1),new D(1,-1,-1),new D(-1,1,1),new D(-1,1,-1),new D(-1,-1,1),new D(-1,-1,-1),new D(1,0,0),new D(-1,0,0)];ae.forEach(ve=>ve.normalize());let q;const ue=k.userData.divisionCount-1;ue<ae.length?q=ae[ue]:q=new D(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),k.userData.directionDelays&&ue<k.userData.directionDelays.length?pe.userData.divisionDelay=k.userData.directionDelays[ue]+Math.random()*.1:pe.userData.divisionDelay=.1+ue*.1+Math.random()*.1;const ge=new D().crossVectors(q,B).normalize(),he=new _n().setFromAxisAngle(ge,M);te=q.clone().applyQuaternion(he);const ye=ue<8,L=ue>=8&&ue<10;ye?pe.userData.separationFactor=.8:L?pe.userData.separationFactor=1:pe.userData.separationFactor=.9}else{const M=k.userData.divisionCount-1,B=[new D(1,1,1),new D(1,1,-1),new D(1,-1,1),new D(1,-1,-1),new D(-1,1,1),new D(-1,1,-1),new D(-1,-1,1),new D(-1,-1,-1)];B.forEach(ye=>ye.normalize());let ae;M<B.length?ae=B[M]:ae=new D(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize();const q=(15+Math.random()*15)*(Math.PI/180),ue=new D((Math.random()-.5)*.5,(Math.random()-.5)*.5,(Math.random()-.5)*.5).normalize(),ge=new D().crossVectors(ae,ue).normalize(),he=new _n().setFromAxisAngle(ge,q);te=ae.clone().applyQuaternion(he),pe.userData.separationFactor=1.2,pe.userData.divisionDelay=.05+M*.05+Math.random()*.05}else if(l==="snowflake"){const M=15*(Math.PI/180),B=Math.acos(Math.pow(Math.random(),1/3))*M,ae=Math.random()*Math.PI*2,q=new D(0,1,0);Math.abs(Ee.dot(q))>.99&&q.set(0,0,1);const ue=new D().crossVectors(Ee,q).normalize(),ge=new D().crossVectors(Ee,ue).normalize();if(te=new D().copy(Ee),te.addScaledVector(ue,Math.sin(B)*Math.cos(ae)),te.addScaledVector(ge,Math.sin(B)*Math.sin(ae)),te.normalize(),ie){const he=Math.acos(Math.pow(Math.random(),.3333333333333333))*M,ye=ae+Math.PI+(Math.random()-.5)*Math.PI*.2;$=new D().copy(Ee),$.addScaledVector(ue,Math.sin(he)*Math.cos(ye)),$.addScaledVector(ge,Math.sin(he)*Math.sin(ye)),$.normalize()}}else{const M=60*(Math.PI/180),B=Math.acos(Math.pow(Math.random(),1/3))*M,ae=Math.random()*Math.PI*2,q=new D(0,1,0);Math.abs(Ee.dot(q))>.99&&q.set(0,0,1);const ue=new D().crossVectors(Ee,q).normalize(),ge=new D().crossVectors(Ee,ue).normalize();if(te=new D().copy(Ee),te.addScaledVector(ue,Math.sin(B)*Math.cos(ae)),te.addScaledVector(ge,Math.sin(B)*Math.sin(ae)),te.normalize(),ie){const he=Math.acos(Math.pow(Math.random(),.3333333333333333))*M,ye=ae+Math.PI+(Math.random()-.5)*Math.PI*.1;$=new D().copy(Ee),$.addScaledVector(ue,Math.sin(he)*Math.cos(ye)),$.addScaledVector(ge,Math.sin(he)*Math.sin(ye)),$.normalize()}pe.userData.separationFactor=1.2,ie&&Se&&(Se.userData.separationFactor=1.2)}const re=new ft,we=new D(0,1,0),Te=new D().crossVectors(te,we).normalize(),Pe=new D().crossVectors(Te,te).normalize();re.makeBasis(te,Pe,Te);const Be=new _n;if(Be.setFromRotationMatrix(re),pe.setRotationFromQuaternion(Be),ie&&Se){const M=new ft,B=new D().crossVectors($,we).normalize(),ae=new D().crossVectors(B,$).normalize();M.makeBasis($,ae,B);const q=new _n;q.setFromRotationMatrix(M),Se.setRotationFromQuaternion(q)}(S.current>=b||y.current.length>=E)&&i(!0);const T=()=>{if(K>=1){k.userData.dividing=!1,k.userData.growthStage=0,U();return}K+=.015;const M=pe.userData.separationFactor||1,B=Ce*1.18*M;if(pe.position.copy(k.position).addScaledVector(te,B*K),ie&&Se){const ae=Se.userData.separationFactor||1,q=Ce*1.18*ae;Se.position.copy(k.position).addScaledVector($,q*K)}requestAnimationFrame(T)};T(),Y()},U=()=>{const k=y.current.length,ce=y.current.reduce((ie,ne)=>ie+ne.scale.x,0)/k;f({totalCells:S.current,visibleCells:k,avgLength:ce.toFixed(2),growthRate:z()})},z=()=>(.15*(1+Math.min(r/200,3))*.8*1*s*100).toFixed(2);R.useEffect(()=>{let k;if(!n){const ce=Math.max(10,Math.floor(50/s));k=setInterval(()=>{o(ie=>ie+1),y.current.forEach(ie=>{if(!ie.userData.dividing){const ne=z()/2e3*ie.userData.growthRateModifier;ie.userData.growthStage+=ne;const pe=H(x.oxygen);ie.scale.x+=(pe-ie.scale.x)*.1,ie.userData.growthStage>=1+ie.userData.divisionDelay&&j(ie)}}),U()},ce)}return()=>clearInterval(k)},[n,s]);const W=()=>{y.current.forEach(k=>{u.current.remove(k)}),y.current=[],S.current=1,N.current=1,g(null),G(),o(0),i(!0)},le=()=>{_.current&&m.current&&(_.current.position.set(0,0,30),m.current.target.set(0,0,0),m.current.update())},fe=Math.floor(r/10),ee=(r%10*6).toFixed(0);return t?I.jsx(B2,{onExit:()=>e(!1)}):I.jsxs(Ch,{className:"w-full max-w-5xl mx-auto",children:[I.jsx(Rh,{children:I.jsx(Ph,{children:"3D酵母生长模拟"})}),I.jsx(Lh,{children:I.jsxs("div",{className:"flex flex-col gap-4",style:{width:"800px",margin:"0 auto"},children:[I.jsxs("div",{className:"flex gap-4 mb-4",children:[I.jsx(Ai,{onClick:()=>i(!n),className:"w-24",children:n?"开始":"暂停"}),I.jsx(Ai,{onClick:W,className:"w-24",children:"重置"}),I.jsx(Ai,{onClick:le,className:"w-24",children:"重置视角"}),I.jsxs(wA,{value:l,onValueChange:k=>c(k),children:[I.jsx(oy,{className:"w-32",children:I.jsx(TA,{placeholder:"选择酵母类型"})}),I.jsxs(sy,{children:[I.jsx(Mf,{value:"snowflake",children:"葡萄酵母"}),I.jsx(Mf,{value:"normal",children:"普通酵母"})]})]})]}),I.jsxs("div",{className:"mb-4",children:[I.jsxs("div",{className:"mb-2",children:["模拟速度: ",s,"x"]}),I.jsx("input",{type:"range",value:s,onChange:k=>a(parseFloat(k.target.value)),min:.5,max:3,step:.5,className:"w-full"}),I.jsxs("div",{className:"flex justify-between text-xs text-gray-500",children:[I.jsx("span",{children:"0.5x"}),I.jsx("span",{children:"1x"}),I.jsx("span",{children:"1.5x"}),I.jsx("span",{children:"2x"}),I.jsx("span",{children:"2.5x"}),I.jsx("span",{children:"3x"})]})]}),I.jsxs("div",{className:"flex justify-center items-center bg-gray-100 rounded-lg mb-4",style:{width:"800px",height:"500px",position:"relative"},children:[I.jsx("canvas",{ref:p,className:"rounded-lg",style:{width:"800px",height:"500px"}}),h&&I.jsxs("div",{className:"absolute bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-sm",style:{left:`${h.clickPosition?h.clickPosition.x:400}px`,top:`${h.clickPosition?h.clickPosition.y:250}px`,transform:"translate(-50%, -50%)",zIndex:10},children:["第",h.id,"代"]})]}),I.jsx("div",{className:"p-4 bg-white rounded-lg shadow",style:{width:"800px"},children:I.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[I.jsxs("div",{className:"text-sm space-y-2",children:[I.jsx("div",{className:"font-bold mb-2",children:"实时统计数据:"}),I.jsxs("div",{children:["当前酵母类型: ",I.jsx("span",{className:l==="snowflake"?"text-cyan-600":"text-amber-600",children:l==="snowflake"?"葡萄酵母":"普通酵母"})]}),I.jsxs("div",{children:["实际总细胞数: ",d.totalCells.toLocaleString()]}),I.jsxs("div",{children:["可见细胞数: ",d.visibleCells]}),I.jsxs("div",{children:["生长速率: ",d.growthRate,"%"]}),I.jsxs("div",{children:["时间: ",fe," 分钟 ",ee," 秒"]}),I.jsxs("div",{children:["模拟速度: ",s,"x"]}),I.jsx("div",{className:"text-blue-600",children:l==="snowflake"?"厌氧条件: 新生成的细胞呈现伸长状态":"需氧条件: 新生成的细胞呈现正常状态"}),I.jsx("div",{children:"温度: 30℃ (最适生长温度)"}),I.jsx("div",{className:l==="snowflake"?"text-cyan-600":"text-amber-600",children:l==="snowflake"?"葡萄酵母: 沿六个固定方向分裂，形成烟花状结构":"普通酵母: 多次分裂，形成自然的酵母菌落"})]}),I.jsxs("div",{className:"text-gray-600 text-sm text-left",children:[I.jsxs("p",{children:["本 Software 模拟了 ",I.jsx("strong",{children:"酵母菌的三维生长过程"}),"，其核心可以提炼为一个生物数学建模框架， Model描述了 ",I.jsx("strong",{children:"细胞形态、生长速率、分裂机制"})," 与环境条件（如氧气浓度、温度）之间的相互关系。"]}),I.jsx("p",{className:"mt-2",children:"这个框架可以进一步推广，模拟更复杂的细胞生长行为或引入其他环境变量（如营养浓度、竞争等）。"}),I.jsx("p",{className:"mt-3 text-green-600",children:"鼠标左键拖动为视角旋转，滚轮为缩放，右键为视野平移。"})]})]})}),I.jsx(Ai,{onClick:()=>e(!0),children:"切换到3D耐药梯度模型"})]})})]})}_d.createRoot(document.getElementById("root")).render(I.jsx(Si.StrictMode,{children:I.jsx("div",{className:"min-h-screen bg-gray-100 w-full",children:I.jsx(H2,{})})}));
