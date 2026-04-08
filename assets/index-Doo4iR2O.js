import{r as Wm,a as Fm,b as C,B as $m,R as Im,c as Pm}from"./react-vendor-B3XqJI0m.js";(function(){const z=document.createElement("link").relList;if(z&&z.supports&&z.supports("modulepreload"))return;for(const T of document.querySelectorAll('link[rel="modulepreload"]'))f(T);new MutationObserver(T=>{for(const M of T)if(M.type==="childList")for(const D of M.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&f(D)}).observe(document,{childList:!0,subtree:!0});function A(T){const M={};return T.integrity&&(M.integrity=T.integrity),T.referrerPolicy&&(M.referrerPolicy=T.referrerPolicy),T.crossOrigin==="use-credentials"?M.credentials="include":T.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function f(T){if(T.ep)return;T.ep=!0;const M=A(T);fetch(T.href,M)}})();var co={exports:{}},vn={};var pd;function th(){if(pd)return vn;pd=1;var p=Symbol.for("react.transitional.element"),z=Symbol.for("react.fragment");function A(f,T,M){var D=null;if(M!==void 0&&(D=""+M),T.key!==void 0&&(D=""+T.key),"key"in T){M={};for(var L in T)L!=="key"&&(M[L]=T[L])}else M=T;return T=M.ref,{$$typeof:p,type:f,key:D,ref:T!==void 0?T:null,props:M}}return vn.Fragment=z,vn.jsx=A,vn.jsxs=A,vn}var vd;function eh(){return vd||(vd=1,co.exports=th()),co.exports}var u=eh(),uo={exports:{}},yn={},oo={exports:{}},ro={};var yd;function ah(){return yd||(yd=1,(function(p){function z(y,j){var w=y.length;y.push(j);t:for(;0<w;){var $=w-1>>>1,tt=y[$];if(0<T(tt,j))y[$]=j,y[w]=tt,w=$;else break t}}function A(y){return y.length===0?null:y[0]}function f(y){if(y.length===0)return null;var j=y[0],w=y.pop();if(w!==j){y[0]=w;t:for(var $=0,tt=y.length,Ut=tt>>>1;$<Ut;){var st=2*($+1)-1,F=y[st],xt=st+1,ye=y[xt];if(0>T(F,w))xt<tt&&0>T(ye,F)?(y[$]=ye,y[xt]=w,$=xt):(y[$]=F,y[st]=w,$=st);else if(xt<tt&&0>T(ye,w))y[$]=ye,y[xt]=w,$=xt;else break t}}return j}function T(y,j){var w=y.sortIndex-j.sortIndex;return w!==0?w:y.id-j.id}if(p.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var M=performance;p.unstable_now=function(){return M.now()}}else{var D=Date,L=D.now();p.unstable_now=function(){return D.now()-L}}var U=[],G=[],ct=1,B=null,nt=3,Ht=!1,Ot=!1,Nt=!1,de=!1,me=typeof setTimeout=="function"?setTimeout:null,ze=typeof clearTimeout=="function"?clearTimeout:null,wt=typeof setImmediate<"u"?setImmediate:null;function ve(y){for(var j=A(G);j!==null;){if(j.callback===null)f(G);else if(j.startTime<=y)f(G),j.sortIndex=j.expirationTime,z(U,j);else break;j=A(G)}}function Ae(y){if(Nt=!1,ve(y),!Ot)if(A(U)!==null)Ot=!0,Zt||(Zt=!0,Dt());else{var j=A(G);j!==null&&R(Ae,j.startTime-y)}}var Zt=!1,_t=-1,Rt=5,Me=-1;function ya(){return de?!0:!(p.unstable_now()-Me<Rt)}function Te(){if(de=!1,Zt){var y=p.unstable_now();Me=y;var j=!0;try{t:{Ot=!1,Nt&&(Nt=!1,ze(_t),_t=-1),Ht=!0;var w=nt;try{e:{for(ve(y),B=A(U);B!==null&&!(B.expirationTime>y&&ya());){var $=B.callback;if(typeof $=="function"){B.callback=null,nt=B.priorityLevel;var tt=$(B.expirationTime<=y);if(y=p.unstable_now(),typeof tt=="function"){B.callback=tt,ve(y),j=!0;break e}B===A(U)&&f(U),ve(y)}else f(U);B=A(U)}if(B!==null)j=!0;else{var Ut=A(G);Ut!==null&&R(Ae,Ut.startTime-y),j=!1}}break t}finally{B=null,nt=w,Ht=!1}j=void 0}}finally{j?Dt():Zt=!1}}}var Dt;if(typeof wt=="function")Dt=function(){wt(Te)};else if(typeof MessageChannel<"u"){var La=new MessageChannel,Ct=La.port2;La.port1.onmessage=Te,Dt=function(){Ct.postMessage(null)}}else Dt=function(){me(Te,0)};function R(y,j){_t=me(function(){y(p.unstable_now())},j)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(y){y.callback=null},p.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rt=0<y?Math.floor(1e3/y):5},p.unstable_getCurrentPriorityLevel=function(){return nt},p.unstable_next=function(y){switch(nt){case 1:case 2:case 3:var j=3;break;default:j=nt}var w=nt;nt=j;try{return y()}finally{nt=w}},p.unstable_requestPaint=function(){de=!0},p.unstable_runWithPriority=function(y,j){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var w=nt;nt=y;try{return j()}finally{nt=w}},p.unstable_scheduleCallback=function(y,j,w){var $=p.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?$+w:$):w=$,y){case 1:var tt=-1;break;case 2:tt=250;break;case 5:tt=1073741823;break;case 4:tt=1e4;break;default:tt=5e3}return tt=w+tt,y={id:ct++,callback:j,priorityLevel:y,startTime:w,expirationTime:tt,sortIndex:-1},w>$?(y.sortIndex=w,z(G,y),A(U)===null&&y===A(G)&&(Nt?(ze(_t),_t=-1):Nt=!0,R(Ae,w-$))):(y.sortIndex=tt,z(U,y),Ot||Ht||(Ot=!0,Zt||(Zt=!0,Dt()))),y},p.unstable_shouldYield=ya,p.unstable_wrapCallback=function(y){var j=nt;return function(){var w=nt;nt=j;try{return y.apply(this,arguments)}finally{nt=w}}}})(ro)),ro}var bd;function lh(){return bd||(bd=1,oo.exports=ah()),oo.exports}var xd;function nh(){if(xd)return yn;xd=1;var p=lh(),z=Wm(),A=Fm();function f(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function T(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function M(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function D(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function L(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function U(t){if(M(t)!==t)throw Error(f(188))}function G(t){var e=t.alternate;if(!e){if(e=M(t),e===null)throw Error(f(188));return e!==t?null:t}for(var a=t,l=e;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return U(n),t;if(i===l)return U(n),e;i=i.sibling}throw Error(f(188))}if(a.return!==l.return)a=n,l=i;else{for(var c=!1,o=n.child;o;){if(o===a){c=!0,a=n,l=i;break}if(o===l){c=!0,l=n,a=i;break}o=o.sibling}if(!c){for(o=i.child;o;){if(o===a){c=!0,a=i,l=n;break}if(o===l){c=!0,l=i,a=n;break}o=o.sibling}if(!c)throw Error(f(189))}}if(a.alternate!==l)throw Error(f(190))}if(a.tag!==3)throw Error(f(188));return a.stateNode.current===a?t:e}function ct(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=ct(t),e!==null)return e;t=t.sibling}return null}var B=Object.assign,nt=Symbol.for("react.element"),Ht=Symbol.for("react.transitional.element"),Ot=Symbol.for("react.portal"),Nt=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),me=Symbol.for("react.profiler"),ze=Symbol.for("react.consumer"),wt=Symbol.for("react.context"),ve=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),Zt=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),Me=Symbol.for("react.activity"),ya=Symbol.for("react.memo_cache_sentinel"),Te=Symbol.iterator;function Dt(t){return t===null||typeof t!="object"?null:(t=Te&&t[Te]||t["@@iterator"],typeof t=="function"?t:null)}var La=Symbol.for("react.client.reference");function Ct(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===La?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Nt:return"Fragment";case me:return"Profiler";case de:return"StrictMode";case Ae:return"Suspense";case Zt:return"SuspenseList";case Me:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Ot:return"Portal";case wt:return t.displayName||"Context";case ze:return(t._context.displayName||"Context")+".Consumer";case ve:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _t:return e=t.displayName||null,e!==null?e:Ct(t.type)||"Memo";case Rt:e=t._payload,t=t._init;try{return Ct(t(e))}catch{}}return null}var R=Array.isArray,y=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w={pending:!1,data:null,method:null,action:null},$=[],tt=-1;function Ut(t){return{current:t}}function st(t){0>tt||(t.current=$[tt],$[tt]=null,tt--)}function F(t,e){tt++,$[tt]=t.current,t.current=e}var xt=Ut(null),ye=Ut(null),ke=Ut(null),Sn=Ut(null);function jn(t,e){switch(F(ke,e),F(ye,t),F(xt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Yf(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Yf(e),t=qf(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}st(xt),F(xt,t)}function Ya(){st(xt),st(ye),st(ke)}function Gi(t){t.memoizedState!==null&&F(Sn,t);var e=xt.current,a=qf(e,t.type);e!==a&&(F(ye,t),F(xt,a))}function zn(t){ye.current===t&&(st(xt),st(ye)),Sn.current===t&&(st(Sn),mn._currentValue=w)}var Xi,ho;function ba(t){if(Xi===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Xi=e&&e[1]||"",ho=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xi+t+ho}var Qi=!1;function Vi(t,e){if(!t||Qi)return"";Qi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(v){var g=v}Reflect.construct(t,[],S)}else{try{S.call()}catch(v){g=v}t.call(S.prototype)}}else{try{throw Error()}catch(v){g=v}(S=t())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(v){if(v&&g&&typeof v.stack=="string")return[v.stack,g.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],o=i[1];if(c&&o){var r=c.split(`
`),h=o.split(`
`);for(n=l=0;l<r.length&&!r[l].includes("DetermineComponentFrameRoot");)l++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(l===r.length||n===h.length)for(l=r.length-1,n=h.length-1;1<=l&&0<=n&&r[l]!==h[n];)n--;for(;1<=l&&0<=n;l--,n--)if(r[l]!==h[n]){if(l!==1||n!==1)do if(l--,n--,0>n||r[l]!==h[n]){var b=`
`+r[l].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=l&&0<=n);break}}}finally{Qi=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ba(a):""}function Td(t,e){switch(t.tag){case 26:case 27:case 5:return ba(t.type);case 16:return ba("Lazy");case 13:return t.child!==e&&e!==null?ba("Suspense Fallback"):ba("Suspense");case 19:return ba("SuspenseList");case 0:case 15:return Vi(t.type,!1);case 11:return Vi(t.type.render,!1);case 1:return Vi(t.type,!0);case 31:return ba("Activity");default:return""}}function go(t){try{var e="",a=null;do e+=Td(t,a),a=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Zi=Object.prototype.hasOwnProperty,ki=p.unstable_scheduleCallback,Ki=p.unstable_cancelCallback,Ed=p.unstable_shouldYield,Nd=p.unstable_requestPaint,kt=p.unstable_now,Dd=p.unstable_getCurrentPriorityLevel,po=p.unstable_ImmediatePriority,vo=p.unstable_UserBlockingPriority,An=p.unstable_NormalPriority,Cd=p.unstable_LowPriority,yo=p.unstable_IdlePriority,Od=p.log,wd=p.unstable_setDisableYieldValue,Al=null,Kt=null;function Ke(t){if(typeof Od=="function"&&wd(t),Kt&&typeof Kt.setStrictMode=="function")try{Kt.setStrictMode(Al,t)}catch{}}var Jt=Math.clz32?Math.clz32:Hd,Ud=Math.log,Bd=Math.LN2;function Hd(t){return t>>>=0,t===0?32:31-(Ud(t)/Bd|0)|0}var Mn=256,Tn=262144,En=4194304;function xa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Nn(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,c=t.pingedLanes;t=t.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?n=xa(l):(c&=o,c!==0?n=xa(c):a||(a=o&~t,a!==0&&(n=xa(a))))):(o=l&~i,o!==0?n=xa(o):c!==0?n=xa(c):a||(a=l&~t,a!==0&&(n=xa(a)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:n}function Ml(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function _d(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bo(){var t=En;return En<<=1,(En&62914560)===0&&(En=4194304),t}function Ji(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Tl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Rd(t,e,a,l,n,i){var c=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var o=t.entanglements,r=t.expirationTimes,h=t.hiddenUpdates;for(a=c&~a;0<a;){var b=31-Jt(a),S=1<<b;o[b]=0,r[b]=-1;var g=h[b];if(g!==null)for(h[b]=null,b=0;b<g.length;b++){var v=g[b];v!==null&&(v.lane&=-536870913)}a&=~S}l!==0&&xo(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(c&~e))}function xo(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-Jt(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function So(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-Jt(a),n=1<<l;n&e|t[l]&e&&(t[l]|=e),a&=~n}}function jo(t,e){var a=e&-e;return a=(a&42)!==0?1:Wi(a),(a&(t.suspendedLanes|e))!==0?0:a}function Wi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Fi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function zo(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:rd(t.type))}function Ao(t,e){var a=j.p;try{return j.p=t,e()}finally{j.p=a}}var Je=Math.random().toString(36).slice(2),zt="__reactFiber$"+Je,Lt="__reactProps$"+Je,qa="__reactContainer$"+Je,$i="__reactEvents$"+Je,Ld="__reactListeners$"+Je,Yd="__reactHandles$"+Je,Mo="__reactResources$"+Je,El="__reactMarker$"+Je;function Ii(t){delete t[zt],delete t[Lt],delete t[$i],delete t[Ld],delete t[Yd]}function Ga(t){var e=t[zt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[qa]||a[zt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Kf(t);t!==null;){if(a=t[zt])return a;t=Kf(t)}return e}t=a,a=t.parentNode}return null}function Xa(t){if(t=t[zt]||t[qa]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Nl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(f(33))}function Qa(t){var e=t[Mo];return e||(e=t[Mo]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function St(t){t[El]=!0}var To=new Set,Eo={};function Sa(t,e){Va(t,e),Va(t+"Capture",e)}function Va(t,e){for(Eo[t]=e,t=0;t<e.length;t++)To.add(e[t])}var qd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),No={},Do={};function Gd(t){return Zi.call(Do,t)?!0:Zi.call(No,t)?!1:qd.test(t)?Do[t]=!0:(No[t]=!0,!1)}function Dn(t,e,a){if(Gd(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Cn(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Ee(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}function ae(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Co(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Xd(t,e,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pi(t){if(!t._valueTracker){var e=Co(t)?"checked":"value";t._valueTracker=Xd(t,e,""+t[e])}}function Oo(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=Co(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function On(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Qd=/[\n"\\]/g;function le(t){return t.replace(Qd,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function tc(t,e,a,l,n,i,c,o){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),e!=null?c==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ae(e)):t.value!==""+ae(e)&&(t.value=""+ae(e)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),e!=null?ec(t,c,ae(e)):a!=null?ec(t,c,ae(a)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+ae(o):t.removeAttribute("name")}function wo(t,e,a,l,n,i,c,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){Pi(t);return}a=a!=null?""+ae(a):"",e=e!=null?""+ae(e):a,o||e===t.value||(t.value=e),t.defaultValue=e}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=o?t.checked:!!l,t.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c),Pi(t)}function ec(t,e,a){e==="number"&&On(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Za(t,e,a,l){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&l&&(t[a].defaultSelected=!0)}else{for(a=""+ae(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Uo(t,e,a){if(e!=null&&(e=""+ae(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+ae(a):""}function Bo(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(f(92));if(R(l)){if(1<l.length)throw Error(f(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=ae(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),Pi(t)}function ka(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Vd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ho(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||Vd.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function _o(t,e,a){if(e!=null&&typeof e!="object")throw Error(f(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var n in e)l=e[n],e.hasOwnProperty(n)&&a[n]!==l&&Ho(t,n,l)}else for(var i in e)e.hasOwnProperty(i)&&Ho(t,i,e[i])}function ac(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wn(t){return kd.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ne(){}var lc=null;function nc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ka=null,Ja=null;function Ro(t){var e=Xa(t);if(e&&(t=e.stateNode)){var a=t[Lt]||null;t:switch(t=e.stateNode,e.type){case"input":if(tc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+le(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var n=l[Lt]||null;if(!n)throw Error(f(90));tc(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&Oo(l)}break t;case"textarea":Uo(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Za(t,!!a.multiple,e,!1)}}}var ic=!1;function Lo(t,e,a){if(ic)return t(e,a);ic=!0;try{var l=t(e);return l}finally{if(ic=!1,(Ka!==null||Ja!==null)&&(bi(),Ka&&(e=Ka,t=Ja,Ja=Ka=null,Ro(e),t)))for(e=0;e<t.length;e++)Ro(t[e])}}function Dl(t,e){var a=t.stateNode;if(a===null)return null;var l=a[Lt]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(f(231,e,typeof a));return a}var De=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cc=!1;if(De)try{var Cl={};Object.defineProperty(Cl,"passive",{get:function(){cc=!0}}),window.addEventListener("test",Cl,Cl),window.removeEventListener("test",Cl,Cl)}catch{cc=!1}var We=null,uc=null,Un=null;function Yo(){if(Un)return Un;var t,e=uc,a=e.length,l,n="value"in We?We.value:We.textContent,i=n.length;for(t=0;t<a&&e[t]===n[t];t++);var c=a-t;for(l=1;l<=c&&e[a-l]===n[i-l];l++);return Un=n.slice(t,1<l?1-l:void 0)}function Bn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Hn(){return!0}function qo(){return!1}function Yt(t){function e(a,l,n,i,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(a=t[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Hn:qo,this.isPropagationStopped=qo,this}return B(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),e}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_n=Yt(ja),Ol=B({},ja,{view:0,detail:0}),Kd=Yt(Ol),oc,rc,wl,Rn=B({},Ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wl&&(wl&&t.type==="mousemove"?(oc=t.screenX-wl.screenX,rc=t.screenY-wl.screenY):rc=oc=0,wl=t),oc)},movementY:function(t){return"movementY"in t?t.movementY:rc}}),Go=Yt(Rn),Jd=B({},Rn,{dataTransfer:0}),Wd=Yt(Jd),Fd=B({},Ol,{relatedTarget:0}),sc=Yt(Fd),$d=B({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Id=Yt($d),Pd=B({},ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),t0=Yt(Pd),e0=B({},ja,{data:0}),Xo=Yt(e0),a0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=n0[t])?!!e[t]:!1}function fc(){return i0}var c0=B({},Ol,{key:function(t){if(t.key){var e=a0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?l0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(t){return t.type==="keypress"?Bn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),u0=Yt(c0),o0=B({},Rn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qo=Yt(o0),r0=B({},Ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),s0=Yt(r0),f0=B({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),d0=Yt(f0),m0=B({},Rn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),h0=Yt(m0),g0=B({},ja,{newState:0,oldState:0}),p0=Yt(g0),v0=[9,13,27,32],dc=De&&"CompositionEvent"in window,Ul=null;De&&"documentMode"in document&&(Ul=document.documentMode);var y0=De&&"TextEvent"in window&&!Ul,Vo=De&&(!dc||Ul&&8<Ul&&11>=Ul),Zo=" ",ko=!1;function Ko(t,e){switch(t){case"keyup":return v0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jo(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wa=!1;function b0(t,e){switch(t){case"compositionend":return Jo(e);case"keypress":return e.which!==32?null:(ko=!0,Zo);case"textInput":return t=e.data,t===Zo&&ko?null:t;default:return null}}function x0(t,e){if(Wa)return t==="compositionend"||!dc&&Ko(t,e)?(t=Yo(),Un=uc=We=null,Wa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vo&&e.locale!=="ko"?null:e.data;default:return null}}var S0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!S0[t.type]:e==="textarea"}function Fo(t,e,a,l){Ka?Ja?Ja.push(l):Ja=[l]:Ka=l,e=Ti(e,"onChange"),0<e.length&&(a=new _n("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var Bl=null,Hl=null;function j0(t){Uf(t,0)}function Ln(t){var e=Nl(t);if(Oo(e))return t}function $o(t,e){if(t==="change")return e}var Io=!1;if(De){var mc;if(De){var hc="oninput"in document;if(!hc){var Po=document.createElement("div");Po.setAttribute("oninput","return;"),hc=typeof Po.oninput=="function"}mc=hc}else mc=!1;Io=mc&&(!document.documentMode||9<document.documentMode)}function tr(){Bl&&(Bl.detachEvent("onpropertychange",er),Hl=Bl=null)}function er(t){if(t.propertyName==="value"&&Ln(Hl)){var e=[];Fo(e,Hl,t,nc(t)),Lo(j0,e)}}function z0(t,e,a){t==="focusin"?(tr(),Bl=e,Hl=a,Bl.attachEvent("onpropertychange",er)):t==="focusout"&&tr()}function A0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ln(Hl)}function M0(t,e){if(t==="click")return Ln(e)}function T0(t,e){if(t==="input"||t==="change")return Ln(e)}function E0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wt=typeof Object.is=="function"?Object.is:E0;function _l(t,e){if(Wt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Zi.call(e,n)||!Wt(t[n],e[n]))return!1}return!0}function ar(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lr(t,e){var a=ar(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ar(a)}}function nr(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?nr(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ir(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=On(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=On(t.document)}return e}function gc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var N0=De&&"documentMode"in document&&11>=document.documentMode,Fa=null,pc=null,Rl=null,vc=!1;function cr(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vc||Fa==null||Fa!==On(l)||(l=Fa,"selectionStart"in l&&gc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Rl&&_l(Rl,l)||(Rl=l,l=Ti(pc,"onSelect"),0<l.length&&(e=new _n("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=Fa)))}function za(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var $a={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},yc={},ur={};De&&(ur=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function Aa(t){if(yc[t])return yc[t];if(!$a[t])return t;var e=$a[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in ur)return yc[t]=e[a];return t}var or=Aa("animationend"),rr=Aa("animationiteration"),sr=Aa("animationstart"),D0=Aa("transitionrun"),C0=Aa("transitionstart"),O0=Aa("transitioncancel"),fr=Aa("transitionend"),dr=new Map,bc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bc.push("scrollEnd");function he(t,e){dr.set(t,e),Sa(e,[t])}var Yn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ne=[],Ia=0,xc=0;function qn(){for(var t=Ia,e=xc=Ia=0;e<t;){var a=ne[e];ne[e++]=null;var l=ne[e];ne[e++]=null;var n=ne[e];ne[e++]=null;var i=ne[e];if(ne[e++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&mr(a,n,i)}}function Gn(t,e,a,l){ne[Ia++]=t,ne[Ia++]=e,ne[Ia++]=a,ne[Ia++]=l,xc|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Sc(t,e,a,l){return Gn(t,e,a,l),Xn(t)}function Ma(t,e){return Gn(t,null,null,e),Xn(t)}function mr(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-Jt(a),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[e]:l.push(e),e.lane=a|536870912),i):null}function Xn(t){if(50<cn)throw cn=0,Cu=null,Error(f(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Pa={};function w0(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,a,l){return new w0(t,e,a,l)}function jc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ce(t,e){var a=t.alternate;return a===null?(a=Ft(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function hr(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Qn(t,e,a,l,n,i){var c=0;if(l=t,typeof t=="function")jc(t)&&(c=1);else if(typeof t=="string")c=Rm(t,a,xt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Me:return t=Ft(31,a,e,n),t.elementType=Me,t.lanes=i,t;case Nt:return Ta(a.children,n,i,e);case de:c=8,n|=24;break;case me:return t=Ft(12,a,e,n|2),t.elementType=me,t.lanes=i,t;case Ae:return t=Ft(13,a,e,n),t.elementType=Ae,t.lanes=i,t;case Zt:return t=Ft(19,a,e,n),t.elementType=Zt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wt:c=10;break t;case ze:c=9;break t;case ve:c=11;break t;case _t:c=14;break t;case Rt:c=16,l=null;break t}c=29,a=Error(f(130,t===null?"null":typeof t,"")),l=null}return e=Ft(c,a,e,n),e.elementType=t,e.type=l,e.lanes=i,e}function Ta(t,e,a,l){return t=Ft(7,t,l,e),t.lanes=a,t}function zc(t,e,a){return t=Ft(6,t,null,e),t.lanes=a,t}function gr(t){var e=Ft(18,null,null,0);return e.stateNode=t,e}function Ac(t,e,a){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var pr=new WeakMap;function ie(t,e){if(typeof t=="object"&&t!==null){var a=pr.get(t);return a!==void 0?a:(e={value:t,source:e,stack:go(e)},pr.set(t,e),e)}return{value:t,source:e,stack:go(e)}}var tl=[],el=0,Vn=null,Ll=0,ce=[],ue=0,Fe=null,be=1,xe="";function Oe(t,e){tl[el++]=Ll,tl[el++]=Vn,Vn=t,Ll=e}function vr(t,e,a){ce[ue++]=be,ce[ue++]=xe,ce[ue++]=Fe,Fe=t;var l=be;t=xe;var n=32-Jt(l)-1;l&=~(1<<n),a+=1;var i=32-Jt(e)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,be=1<<32-Jt(e)+n|a<<n|l,xe=i+t}else be=1<<i|a<<n|l,xe=t}function Mc(t){t.return!==null&&(Oe(t,1),vr(t,1,0))}function Tc(t){for(;t===Vn;)Vn=tl[--el],tl[el]=null,Ll=tl[--el],tl[el]=null;for(;t===Fe;)Fe=ce[--ue],ce[ue]=null,xe=ce[--ue],ce[ue]=null,be=ce[--ue],ce[ue]=null}function yr(t,e){ce[ue++]=be,ce[ue++]=xe,ce[ue++]=Fe,be=e.id,xe=e.overflow,Fe=t}var At=null,ut=null,k=!1,$e=null,oe=!1,Ec=Error(f(519));function Ie(t){var e=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yl(ie(e,t)),Ec}function br(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[zt]=t,e[Lt]=l,a){case"dialog":Q("cancel",e),Q("close",e);break;case"iframe":case"object":case"embed":Q("load",e);break;case"video":case"audio":for(a=0;a<on.length;a++)Q(on[a],e);break;case"source":Q("error",e);break;case"img":case"image":case"link":Q("error",e),Q("load",e);break;case"details":Q("toggle",e);break;case"input":Q("invalid",e),wo(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Q("invalid",e);break;case"textarea":Q("invalid",e),Bo(e,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||Rf(e.textContent,a)?(l.popover!=null&&(Q("beforetoggle",e),Q("toggle",e)),l.onScroll!=null&&Q("scroll",e),l.onScrollEnd!=null&&Q("scrollend",e),l.onClick!=null&&(e.onclick=Ne),e=!0):e=!1,e||Ie(t,!0)}function xr(t){for(At=t.return;At;)switch(At.tag){case 5:case 31:case 13:oe=!1;return;case 27:case 3:oe=!0;return;default:At=At.return}}function al(t){if(t!==At)return!1;if(!k)return xr(t),k=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Zu(t.type,t.memoizedProps)),a=!a),a&&ut&&Ie(t),xr(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));ut=kf(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));ut=kf(t)}else e===27?(e=ut,da(t.type)?(t=Fu,Fu=null,ut=t):ut=e):ut=At?se(t.stateNode.nextSibling):null;return!0}function Ea(){ut=At=null,k=!1}function Nc(){var t=$e;return t!==null&&(Qt===null?Qt=t:Qt.push.apply(Qt,t),$e=null),t}function Yl(t){$e===null?$e=[t]:$e.push(t)}var Dc=Ut(null),Na=null,we=null;function Pe(t,e,a){F(Dc,e._currentValue),e._currentValue=a}function Ue(t){t._currentValue=Dc.current,st(Dc)}function Cc(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function Oc(t,e,a,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;t:for(;i!==null;){var o=i;i=n;for(var r=0;r<e.length;r++)if(o.context===e[r]){i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),Cc(i.return,a,t),l||(c=null);break t}i=o.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(f(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),Cc(c,a,t),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===t){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function ll(t,e,a,l){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(f(387));if(c=c.memoizedProps,c!==null){var o=n.type;Wt(n.pendingProps.value,c.value)||(t!==null?t.push(o):t=[o])}}else if(n===Sn.current){if(c=n.alternate,c===null)throw Error(f(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(mn):t=[mn])}n=n.return}t!==null&&Oc(e,t,a,l),e.flags|=262144}function Zn(t){for(t=t.firstContext;t!==null;){if(!Wt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Da(t){Na=t,we=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mt(t){return Sr(Na,t)}function kn(t,e){return Na===null&&Da(t),Sr(t,e)}function Sr(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},we===null){if(t===null)throw Error(f(308));we=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else we=we.next=e;return a}var U0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},B0=p.unstable_scheduleCallback,H0=p.unstable_NormalPriority,gt={$$typeof:wt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wc(){return{controller:new U0,data:new Map,refCount:0}}function ql(t){t.refCount--,t.refCount===0&&B0(H0,function(){t.controller.abort()})}var Gl=null,Uc=0,nl=0,il=null;function _0(t,e){if(Gl===null){var a=Gl=[];Uc=0,nl=_u(),il={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Uc++,e.then(jr,jr),e}function jr(){if(--Uc===0&&Gl!==null){il!==null&&(il.status="fulfilled");var t=Gl;Gl=null,nl=0,il=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function R0(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var zr=y.S;y.S=function(t,e){uf=kt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&_0(t,e),zr!==null&&zr(t,e)};var Ca=Ut(null);function Bc(){var t=Ca.current;return t!==null?t:it.pooledCache}function Kn(t,e){e===null?F(Ca,Ca.current):F(Ca,e.pool)}function Ar(){var t=Bc();return t===null?null:{parent:gt._currentValue,pool:t}}var cl=Error(f(460)),Hc=Error(f(474)),Jn=Error(f(542)),Wn={then:function(){}};function Mr(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Tr(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Ne,Ne),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Nr(t),t;default:if(typeof e.status=="string")e.then(Ne,Ne);else{if(t=it,t!==null&&100<t.shellSuspendCounter)throw Error(f(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=l}},function(l){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Nr(t),t}throw wa=e,cl}}function Oa(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(wa=a,cl):a}}var wa=null;function Er(){if(wa===null)throw Error(f(459));var t=wa;return wa=null,t}function Nr(t){if(t===cl||t===Jn)throw Error(f(483))}var ul=null,Xl=0;function Fn(t){var e=Xl;return Xl+=1,ul===null&&(ul=[]),Tr(ul,t,e)}function Ql(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function $n(t,e){throw e.$$typeof===nt?Error(f(525)):(t=Object.prototype.toString.call(e),Error(f(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Dr(t){function e(d,s){if(t){var m=d.deletions;m===null?(d.deletions=[s],d.flags|=16):m.push(s)}}function a(d,s){if(!t)return null;for(;s!==null;)e(d,s),s=s.sibling;return null}function l(d){for(var s=new Map;d!==null;)d.key!==null?s.set(d.key,d):s.set(d.index,d),d=d.sibling;return s}function n(d,s){return d=Ce(d,s),d.index=0,d.sibling=null,d}function i(d,s,m){return d.index=m,t?(m=d.alternate,m!==null?(m=m.index,m<s?(d.flags|=67108866,s):m):(d.flags|=67108866,s)):(d.flags|=1048576,s)}function c(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function o(d,s,m,x){return s===null||s.tag!==6?(s=zc(m,d.mode,x),s.return=d,s):(s=n(s,m),s.return=d,s)}function r(d,s,m,x){var O=m.type;return O===Nt?b(d,s,m.props.children,x,m.key):s!==null&&(s.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Rt&&Oa(O)===s.type)?(s=n(s,m.props),Ql(s,m),s.return=d,s):(s=Qn(m.type,m.key,m.props,null,d.mode,x),Ql(s,m),s.return=d,s)}function h(d,s,m,x){return s===null||s.tag!==4||s.stateNode.containerInfo!==m.containerInfo||s.stateNode.implementation!==m.implementation?(s=Ac(m,d.mode,x),s.return=d,s):(s=n(s,m.children||[]),s.return=d,s)}function b(d,s,m,x,O){return s===null||s.tag!==7?(s=Ta(m,d.mode,x,O),s.return=d,s):(s=n(s,m),s.return=d,s)}function S(d,s,m){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=zc(""+s,d.mode,m),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Ht:return m=Qn(s.type,s.key,s.props,null,d.mode,m),Ql(m,s),m.return=d,m;case Ot:return s=Ac(s,d.mode,m),s.return=d,s;case Rt:return s=Oa(s),S(d,s,m)}if(R(s)||Dt(s))return s=Ta(s,d.mode,m,null),s.return=d,s;if(typeof s.then=="function")return S(d,Fn(s),m);if(s.$$typeof===wt)return S(d,kn(d,s),m);$n(d,s)}return null}function g(d,s,m,x){var O=s!==null?s.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return O!==null?null:o(d,s,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ht:return m.key===O?r(d,s,m,x):null;case Ot:return m.key===O?h(d,s,m,x):null;case Rt:return m=Oa(m),g(d,s,m,x)}if(R(m)||Dt(m))return O!==null?null:b(d,s,m,x,null);if(typeof m.then=="function")return g(d,s,Fn(m),x);if(m.$$typeof===wt)return g(d,s,kn(d,m),x);$n(d,m)}return null}function v(d,s,m,x,O){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return d=d.get(m)||null,o(s,d,""+x,O);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ht:return d=d.get(x.key===null?m:x.key)||null,r(s,d,x,O);case Ot:return d=d.get(x.key===null?m:x.key)||null,h(s,d,x,O);case Rt:return x=Oa(x),v(d,s,m,x,O)}if(R(x)||Dt(x))return d=d.get(m)||null,b(s,d,x,O,null);if(typeof x.then=="function")return v(d,s,m,Fn(x),O);if(x.$$typeof===wt)return v(d,s,m,kn(s,x),O);$n(s,x)}return null}function E(d,s,m,x){for(var O=null,K=null,N=s,q=s=0,Z=null;N!==null&&q<m.length;q++){N.index>q?(Z=N,N=null):Z=N.sibling;var J=g(d,N,m[q],x);if(J===null){N===null&&(N=Z);break}t&&N&&J.alternate===null&&e(d,N),s=i(J,s,q),K===null?O=J:K.sibling=J,K=J,N=Z}if(q===m.length)return a(d,N),k&&Oe(d,q),O;if(N===null){for(;q<m.length;q++)N=S(d,m[q],x),N!==null&&(s=i(N,s,q),K===null?O=N:K.sibling=N,K=N);return k&&Oe(d,q),O}for(N=l(N);q<m.length;q++)Z=v(N,d,q,m[q],x),Z!==null&&(t&&Z.alternate!==null&&N.delete(Z.key===null?q:Z.key),s=i(Z,s,q),K===null?O=Z:K.sibling=Z,K=Z);return t&&N.forEach(function(va){return e(d,va)}),k&&Oe(d,q),O}function H(d,s,m,x){if(m==null)throw Error(f(151));for(var O=null,K=null,N=s,q=s=0,Z=null,J=m.next();N!==null&&!J.done;q++,J=m.next()){N.index>q?(Z=N,N=null):Z=N.sibling;var va=g(d,N,J.value,x);if(va===null){N===null&&(N=Z);break}t&&N&&va.alternate===null&&e(d,N),s=i(va,s,q),K===null?O=va:K.sibling=va,K=va,N=Z}if(J.done)return a(d,N),k&&Oe(d,q),O;if(N===null){for(;!J.done;q++,J=m.next())J=S(d,J.value,x),J!==null&&(s=i(J,s,q),K===null?O=J:K.sibling=J,K=J);return k&&Oe(d,q),O}for(N=l(N);!J.done;q++,J=m.next())J=v(N,d,q,J.value,x),J!==null&&(t&&J.alternate!==null&&N.delete(J.key===null?q:J.key),s=i(J,s,q),K===null?O=J:K.sibling=J,K=J);return t&&N.forEach(function(Jm){return e(d,Jm)}),k&&Oe(d,q),O}function lt(d,s,m,x){if(typeof m=="object"&&m!==null&&m.type===Nt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ht:t:{for(var O=m.key;s!==null;){if(s.key===O){if(O=m.type,O===Nt){if(s.tag===7){a(d,s.sibling),x=n(s,m.props.children),x.return=d,d=x;break t}}else if(s.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Rt&&Oa(O)===s.type){a(d,s.sibling),x=n(s,m.props),Ql(x,m),x.return=d,d=x;break t}a(d,s);break}else e(d,s);s=s.sibling}m.type===Nt?(x=Ta(m.props.children,d.mode,x,m.key),x.return=d,d=x):(x=Qn(m.type,m.key,m.props,null,d.mode,x),Ql(x,m),x.return=d,d=x)}return c(d);case Ot:t:{for(O=m.key;s!==null;){if(s.key===O)if(s.tag===4&&s.stateNode.containerInfo===m.containerInfo&&s.stateNode.implementation===m.implementation){a(d,s.sibling),x=n(s,m.children||[]),x.return=d,d=x;break t}else{a(d,s);break}else e(d,s);s=s.sibling}x=Ac(m,d.mode,x),x.return=d,d=x}return c(d);case Rt:return m=Oa(m),lt(d,s,m,x)}if(R(m))return E(d,s,m,x);if(Dt(m)){if(O=Dt(m),typeof O!="function")throw Error(f(150));return m=O.call(m),H(d,s,m,x)}if(typeof m.then=="function")return lt(d,s,Fn(m),x);if(m.$$typeof===wt)return lt(d,s,kn(d,m),x);$n(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,s!==null&&s.tag===6?(a(d,s.sibling),x=n(s,m),x.return=d,d=x):(a(d,s),x=zc(m,d.mode,x),x.return=d,d=x),c(d)):a(d,s)}return function(d,s,m,x){try{Xl=0;var O=lt(d,s,m,x);return ul=null,O}catch(N){if(N===cl||N===Jn)throw N;var K=Ft(29,N,null,d.mode);return K.lanes=x,K.return=d,K}}}var Ua=Dr(!0),Cr=Dr(!1),ta=!1;function _c(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ea(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function aa(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(W&2)!==0){var n=l.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),l.pending=e,e=Xn(t),mr(t,null,a),e}return Gn(t,l,e,a),Xn(t)}function Vl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,So(t,a)}}function Lc(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?n=i=e:i=i.next=e}else n=i=e;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Yc=!1;function Zl(){if(Yc){var t=il;if(t!==null)throw t}}function kl(t,e,a,l){Yc=!1;var n=t.updateQueue;ta=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var r=o,h=r.next;r.next=null,c===null?i=h:c.next=h,c=r;var b=t.alternate;b!==null&&(b=b.updateQueue,o=b.lastBaseUpdate,o!==c&&(o===null?b.firstBaseUpdate=h:o.next=h,b.lastBaseUpdate=r))}if(i!==null){var S=n.baseState;c=0,b=h=r=null,o=i;do{var g=o.lane&-536870913,v=g!==o.lane;if(v?(V&g)===g:(l&g)===g){g!==0&&g===nl&&(Yc=!0),b!==null&&(b=b.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var E=t,H=o;g=e;var lt=a;switch(H.tag){case 1:if(E=H.payload,typeof E=="function"){S=E.call(lt,S,g);break t}S=E;break t;case 3:E.flags=E.flags&-65537|128;case 0:if(E=H.payload,g=typeof E=="function"?E.call(lt,S,g):E,g==null)break t;S=B({},S,g);break t;case 2:ta=!0}}g=o.callback,g!==null&&(t.flags|=64,v&&(t.flags|=8192),v=n.callbacks,v===null?n.callbacks=[g]:v.push(g))}else v={lane:g,tag:o.tag,payload:o.payload,callback:o.callback,next:null},b===null?(h=b=v,r=S):b=b.next=v,c|=g;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;v=o,o=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);b===null&&(r=S),n.baseState=r,n.firstBaseUpdate=h,n.lastBaseUpdate=b,i===null&&(n.shared.lanes=0),ua|=c,t.lanes=c,t.memoizedState=S}}function Or(t,e){if(typeof t!="function")throw Error(f(191,t));t.call(e)}function wr(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Or(a[t],e)}var ol=Ut(null),In=Ut(0);function Ur(t,e){t=Xe,F(In,t),F(ol,e),Xe=t|e.baseLanes}function qc(){F(In,Xe),F(ol,ol.current)}function Gc(){Xe=In.current,st(ol),st(In)}var $t=Ut(null),re=null;function la(t){var e=t.alternate;F(mt,mt.current&1),F($t,t),re===null&&(e===null||ol.current!==null||e.memoizedState!==null)&&(re=t)}function Xc(t){F(mt,mt.current),F($t,t),re===null&&(re=t)}function Br(t){t.tag===22?(F(mt,mt.current),F($t,t),re===null&&(re=t)):na()}function na(){F(mt,mt.current),F($t,$t.current)}function It(t){st($t),re===t&&(re=null),st(mt)}var mt=Ut(0);function Pn(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ju(a)||Wu(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Be=0,Y=null,et=null,pt=null,ti=!1,rl=!1,Ba=!1,ei=0,Kl=0,sl=null,L0=0;function ft(){throw Error(f(321))}function Qc(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Wt(t[a],e[a]))return!1;return!0}function Vc(t,e,a,l,n,i){return Be=i,Y=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,y.H=t===null||t.memoizedState===null?vs:iu,Ba=!1,i=a(l,n),Ba=!1,rl&&(i=_r(e,a,l,n)),Hr(t),i}function Hr(t){y.H=Fl;var e=et!==null&&et.next!==null;if(Be=0,pt=et=Y=null,ti=!1,Kl=0,sl=null,e)throw Error(f(300));t===null||vt||(t=t.dependencies,t!==null&&Zn(t)&&(vt=!0))}function _r(t,e,a,l){Y=t;var n=0;do{if(rl&&(sl=null),Kl=0,rl=!1,25<=n)throw Error(f(301));if(n+=1,pt=et=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}y.H=ys,i=e(a,l)}while(rl);return i}function Y0(){var t=y.H,e=t.useState()[0];return e=typeof e.then=="function"?Jl(e):e,t=t.useState()[0],(et!==null?et.memoizedState:null)!==t&&(Y.flags|=1024),e}function Zc(){var t=ei!==0;return ei=0,t}function kc(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Kc(t){if(ti){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ti=!1}Be=0,pt=et=Y=null,rl=!1,Kl=ei=0,sl=null}function Bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Y.memoizedState=pt=t:pt=pt.next=t,pt}function ht(){if(et===null){var t=Y.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var e=pt===null?Y.memoizedState:pt.next;if(e!==null)pt=e,et=t;else{if(t===null)throw Y.alternate===null?Error(f(467)):Error(f(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},pt===null?Y.memoizedState=pt=t:pt=pt.next=t}return pt}function ai(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jl(t){var e=Kl;return Kl+=1,sl===null&&(sl=[]),t=Tr(sl,t,e),e=Y,(pt===null?e.memoizedState:pt.next)===null&&(e=e.alternate,y.H=e===null||e.memoizedState===null?vs:iu),t}function li(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Jl(t);if(t.$$typeof===wt)return Mt(t)}throw Error(f(438,String(t)))}function Jc(t){var e=null,a=Y.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=Y.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=ai(),Y.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=ya;return e.index++,a}function He(t,e){return typeof e=="function"?e(t):e}function ni(t){var e=ht();return Wc(e,et,t)}function Wc(t,e,a){var l=t.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=a;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}e.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var o=c=null,r=null,h=e,b=!1;do{var S=h.lane&-536870913;if(S!==h.lane?(V&S)===S:(Be&S)===S){var g=h.revertLane;if(g===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),S===nl&&(b=!0);else if((Be&g)===g){h=h.next,g===nl&&(b=!0);continue}else S={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},r===null?(o=r=S,c=i):r=r.next=S,Y.lanes|=g,ua|=g;S=h.action,Ba&&a(i,S),i=h.hasEagerState?h.eagerState:a(i,S)}else g={lane:S,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},r===null?(o=r=g,c=i):r=r.next=g,Y.lanes|=S,ua|=S;h=h.next}while(h!==null&&h!==e);if(r===null?c=i:r.next=o,!Wt(i,t.memoizedState)&&(vt=!0,b&&(a=il,a!==null)))throw a;t.memoizedState=i,t.baseState=c,t.baseQueue=r,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Fc(t){var e=ht(),a=e.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=t;var l=a.dispatch,n=a.pending,i=e.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do i=t(i,c.action),c=c.next;while(c!==n);Wt(i,e.memoizedState)||(vt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,l]}function Rr(t,e,a){var l=Y,n=ht(),i=k;if(i){if(a===void 0)throw Error(f(407));a=a()}else a=e();var c=!Wt((et||n).memoizedState,a);if(c&&(n.memoizedState=a,vt=!0),n=n.queue,Pc(qr.bind(null,l,n,t),[t]),n.getSnapshot!==e||c||pt!==null&&pt.memoizedState.tag&1){if(l.flags|=2048,fl(9,{destroy:void 0},Yr.bind(null,l,n,a,e),null),it===null)throw Error(f(349));i||(Be&127)!==0||Lr(l,e,a)}return a}function Lr(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=Y.updateQueue,e===null?(e=ai(),Y.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Yr(t,e,a,l){e.value=a,e.getSnapshot=l,Gr(e)&&Xr(t)}function qr(t,e,a){return a(function(){Gr(e)&&Xr(t)})}function Gr(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Wt(t,a)}catch{return!0}}function Xr(t){var e=Ma(t,2);e!==null&&Vt(e,t,2)}function $c(t){var e=Bt();if(typeof t=="function"){var a=t;if(t=a(),Ba){Ke(!0);try{a()}finally{Ke(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:He,lastRenderedState:t},e}function Qr(t,e,a,l){return t.baseState=a,Wc(t,et,typeof l=="function"?l:He)}function q0(t,e,a,l,n){if(ui(t))throw Error(f(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};y.T!==null?a(!0):i.isTransition=!1,l(i),a=e.pending,a===null?(i.next=e.pending=i,Vr(e,i)):(i.next=a.next,e.pending=a.next=i)}}function Vr(t,e){var a=e.action,l=e.payload,n=t.state;if(e.isTransition){var i=y.T,c={};y.T=c;try{var o=a(n,l),r=y.S;r!==null&&r(c,o),Zr(t,e,o)}catch(h){Ic(t,e,h)}finally{i!==null&&c.types!==null&&(i.types=c.types),y.T=i}}else try{i=a(n,l),Zr(t,e,i)}catch(h){Ic(t,e,h)}}function Zr(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){kr(t,e,l)},function(l){return Ic(t,e,l)}):kr(t,e,a)}function kr(t,e,a){e.status="fulfilled",e.value=a,Kr(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Vr(t,a)))}function Ic(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,Kr(e),e=e.next;while(e!==l)}t.action=null}function Kr(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Jr(t,e){return e}function Wr(t,e){if(k){var a=it.formState;if(a!==null){t:{var l=Y;if(k){if(ut){e:{for(var n=ut,i=oe;n.nodeType!==8;){if(!i){n=null;break e}if(n=se(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ut=se(n.nextSibling),l=n.data==="F!";break t}}Ie(l)}l=!1}l&&(e=a[0])}}return a=Bt(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:e},a.queue=l,a=hs.bind(null,Y,l),l.dispatch=a,l=$c(!1),i=nu.bind(null,Y,!1,l.queue),l=Bt(),n={state:e,dispatch:null,action:t,pending:null},l.queue=n,a=q0.bind(null,Y,n,i,a),n.dispatch=a,l.memoizedState=t,[e,a,!1]}function Fr(t){var e=ht();return $r(e,et,t)}function $r(t,e,a){if(e=Wc(t,e,Jr)[0],t=ni(He)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Jl(e)}catch(c){throw c===cl?Jn:c}else l=e;e=ht();var n=e.queue,i=n.dispatch;return a!==e.memoizedState&&(Y.flags|=2048,fl(9,{destroy:void 0},G0.bind(null,n,a),null)),[l,i,t]}function G0(t,e){t.action=e}function Ir(t){var e=ht(),a=et;if(a!==null)return $r(e,a,t);ht(),e=e.memoizedState,a=ht();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function fl(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=Y.updateQueue,e===null&&(e=ai(),Y.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function Pr(){return ht().memoizedState}function ii(t,e,a,l){var n=Bt();Y.flags|=t,n.memoizedState=fl(1|e,{destroy:void 0},a,l===void 0?null:l)}function ci(t,e,a,l){var n=ht();l=l===void 0?null:l;var i=n.memoizedState.inst;et!==null&&l!==null&&Qc(l,et.memoizedState.deps)?n.memoizedState=fl(e,i,a,l):(Y.flags|=t,n.memoizedState=fl(1|e,i,a,l))}function ts(t,e){ii(8390656,8,t,e)}function Pc(t,e){ci(2048,8,t,e)}function X0(t){Y.flags|=4;var e=Y.updateQueue;if(e===null)e=ai(),Y.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function es(t){var e=ht().memoizedState;return X0({ref:e,nextImpl:t}),function(){if((W&2)!==0)throw Error(f(440));return e.impl.apply(void 0,arguments)}}function as(t,e){return ci(4,2,t,e)}function ls(t,e){return ci(4,4,t,e)}function ns(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function is(t,e,a){a=a!=null?a.concat([t]):null,ci(4,4,ns.bind(null,e,t),a)}function tu(){}function cs(t,e){var a=ht();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&Qc(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function us(t,e){var a=ht();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&Qc(e,l[1]))return l[0];if(l=t(),Ba){Ke(!0);try{t()}finally{Ke(!1)}}return a.memoizedState=[l,e],l}function eu(t,e,a){return a===void 0||(Be&1073741824)!==0&&(V&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=rf(),Y.lanes|=t,ua|=t,a)}function os(t,e,a,l){return Wt(a,e)?a:ol.current!==null?(t=eu(t,a,l),Wt(t,e)||(vt=!0),t):(Be&42)===0||(Be&1073741824)!==0&&(V&261930)===0?(vt=!0,t.memoizedState=a):(t=rf(),Y.lanes|=t,ua|=t,e)}function rs(t,e,a,l,n){var i=j.p;j.p=i!==0&&8>i?i:8;var c=y.T,o={};y.T=o,nu(t,!1,e,a);try{var r=n(),h=y.S;if(h!==null&&h(o,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var b=R0(r,l);Wl(t,e,b,ee(t))}else Wl(t,e,l,ee(t))}catch(S){Wl(t,e,{then:function(){},status:"rejected",reason:S},ee())}finally{j.p=i,c!==null&&o.types!==null&&(c.types=o.types),y.T=c}}function Q0(){}function au(t,e,a,l){if(t.tag!==5)throw Error(f(476));var n=ss(t).queue;rs(t,n,e,w,a===null?Q0:function(){return fs(t),a(l)})}function ss(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:w,baseState:w,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:He,lastRenderedState:w},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:He,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function fs(t){var e=ss(t);e.next===null&&(e=t.alternate.memoizedState),Wl(t,e.next.queue,{},ee())}function lu(){return Mt(mn)}function ds(){return ht().memoizedState}function ms(){return ht().memoizedState}function V0(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=ee();t=ea(a);var l=aa(e,t,a);l!==null&&(Vt(l,e,a),Vl(l,e,a)),e={cache:wc()},t.payload=e;return}e=e.return}}function Z0(t,e,a){var l=ee();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ui(t)?gs(e,a):(a=Sc(t,e,a,l),a!==null&&(Vt(a,t,l),ps(a,e,l)))}function hs(t,e,a){var l=ee();Wl(t,e,a,l)}function Wl(t,e,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ui(t))gs(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var c=e.lastRenderedState,o=i(c,a);if(n.hasEagerState=!0,n.eagerState=o,Wt(o,c))return Gn(t,e,n,0),it===null&&qn(),!1}catch{}if(a=Sc(t,e,n,l),a!==null)return Vt(a,t,l),ps(a,e,l),!0}return!1}function nu(t,e,a,l){if(l={lane:2,revertLane:_u(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ui(t)){if(e)throw Error(f(479))}else e=Sc(t,a,l,2),e!==null&&Vt(e,t,2)}function ui(t){var e=t.alternate;return t===Y||e!==null&&e===Y}function gs(t,e){rl=ti=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function ps(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,So(t,a)}}var Fl={readContext:Mt,use:li,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useLayoutEffect:ft,useInsertionEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useSyncExternalStore:ft,useId:ft,useHostTransitionStatus:ft,useFormState:ft,useActionState:ft,useOptimistic:ft,useMemoCache:ft,useCacheRefresh:ft};Fl.useEffectEvent=ft;var vs={readContext:Mt,use:li,useCallback:function(t,e){return Bt().memoizedState=[t,e===void 0?null:e],t},useContext:Mt,useEffect:ts,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,ii(4194308,4,ns.bind(null,e,t),a)},useLayoutEffect:function(t,e){return ii(4194308,4,t,e)},useInsertionEffect:function(t,e){ii(4,2,t,e)},useMemo:function(t,e){var a=Bt();e=e===void 0?null:e;var l=t();if(Ba){Ke(!0);try{t()}finally{Ke(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=Bt();if(a!==void 0){var n=a(e);if(Ba){Ke(!0);try{a(e)}finally{Ke(!1)}}}else n=e;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=Z0.bind(null,Y,t),[l.memoizedState,t]},useRef:function(t){var e=Bt();return t={current:t},e.memoizedState=t},useState:function(t){t=$c(t);var e=t.queue,a=hs.bind(null,Y,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:tu,useDeferredValue:function(t,e){var a=Bt();return eu(a,t,e)},useTransition:function(){var t=$c(!1);return t=rs.bind(null,Y,t.queue,!0,!1),Bt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=Y,n=Bt();if(k){if(a===void 0)throw Error(f(407));a=a()}else{if(a=e(),it===null)throw Error(f(349));(V&127)!==0||Lr(l,e,a)}n.memoizedState=a;var i={value:a,getSnapshot:e};return n.queue=i,ts(qr.bind(null,l,i,t),[t]),l.flags|=2048,fl(9,{destroy:void 0},Yr.bind(null,l,i,a,e),null),a},useId:function(){var t=Bt(),e=it.identifierPrefix;if(k){var a=xe,l=be;a=(l&~(1<<32-Jt(l)-1)).toString(32)+a,e="_"+e+"R_"+a,a=ei++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=L0++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:lu,useFormState:Wr,useActionState:Wr,useOptimistic:function(t){var e=Bt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=nu.bind(null,Y,!0,a),a.dispatch=e,[t,e]},useMemoCache:Jc,useCacheRefresh:function(){return Bt().memoizedState=V0.bind(null,Y)},useEffectEvent:function(t){var e=Bt(),a={impl:t};return e.memoizedState=a,function(){if((W&2)!==0)throw Error(f(440));return a.impl.apply(void 0,arguments)}}},iu={readContext:Mt,use:li,useCallback:cs,useContext:Mt,useEffect:Pc,useImperativeHandle:is,useInsertionEffect:as,useLayoutEffect:ls,useMemo:us,useReducer:ni,useRef:Pr,useState:function(){return ni(He)},useDebugValue:tu,useDeferredValue:function(t,e){var a=ht();return os(a,et.memoizedState,t,e)},useTransition:function(){var t=ni(He)[0],e=ht().memoizedState;return[typeof t=="boolean"?t:Jl(t),e]},useSyncExternalStore:Rr,useId:ds,useHostTransitionStatus:lu,useFormState:Fr,useActionState:Fr,useOptimistic:function(t,e){var a=ht();return Qr(a,et,t,e)},useMemoCache:Jc,useCacheRefresh:ms};iu.useEffectEvent=es;var ys={readContext:Mt,use:li,useCallback:cs,useContext:Mt,useEffect:Pc,useImperativeHandle:is,useInsertionEffect:as,useLayoutEffect:ls,useMemo:us,useReducer:Fc,useRef:Pr,useState:function(){return Fc(He)},useDebugValue:tu,useDeferredValue:function(t,e){var a=ht();return et===null?eu(a,t,e):os(a,et.memoizedState,t,e)},useTransition:function(){var t=Fc(He)[0],e=ht().memoizedState;return[typeof t=="boolean"?t:Jl(t),e]},useSyncExternalStore:Rr,useId:ds,useHostTransitionStatus:lu,useFormState:Ir,useActionState:Ir,useOptimistic:function(t,e){var a=ht();return et!==null?Qr(a,et,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Jc,useCacheRefresh:ms};ys.useEffectEvent=es;function cu(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:B({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var uu={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=ee(),n=ea(l);n.payload=e,a!=null&&(n.callback=a),e=aa(t,n,l),e!==null&&(Vt(e,t,l),Vl(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=ee(),n=ea(l);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=aa(t,n,l),e!==null&&(Vt(e,t,l),Vl(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=ee(),l=ea(a);l.tag=2,e!=null&&(l.callback=e),e=aa(t,l,a),e!==null&&(Vt(e,t,a),Vl(e,t,a))}};function bs(t,e,a,l,n,i,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,c):e.prototype&&e.prototype.isPureReactComponent?!_l(a,l)||!_l(n,i):!0}function xs(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&uu.enqueueReplaceState(e,e.state,null)}function Ha(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=B({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function Ss(t){Yn(t)}function js(t){console.error(t)}function zs(t){Yn(t)}function oi(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function As(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function ou(t,e,a){return a=ea(a),a.tag=3,a.payload={element:null},a.callback=function(){oi(t,e)},a}function Ms(t){return t=ea(t),t.tag=3,t}function Ts(t,e,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){As(e,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){As(e,a,l),typeof n!="function"&&(oa===null?oa=new Set([this]):oa.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function k0(t,e,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&ll(e,a,n,!0),a=$t.current,a!==null){switch(a.tag){case 31:case 13:return re===null?xi():a.alternate===null&&dt===0&&(dt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Wn?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),Uu(t,l,n)),!1;case 22:return a.flags|=65536,l===Wn?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),Uu(t,l,n)),!1}throw Error(f(435,a.tag))}return Uu(t,l,n),xi(),!1}if(k)return e=$t.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,l!==Ec&&(t=Error(f(422),{cause:l}),Yl(ie(t,a)))):(l!==Ec&&(e=Error(f(423),{cause:l}),Yl(ie(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=ie(l,a),n=ou(t.stateNode,l,n),Lc(t,n),dt!==4&&(dt=2)),!1;var i=Error(f(520),{cause:l});if(i=ie(i,a),nn===null?nn=[i]:nn.push(i),dt!==4&&(dt=2),e===null)return!0;l=ie(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=ou(a.stateNode,l,t),Lc(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(oa===null||!oa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Ms(n),Ts(n,t,a,l),Lc(a,n),!1}a=a.return}while(a!==null);return!1}var ru=Error(f(461)),vt=!1;function Tt(t,e,a,l){e.child=t===null?Cr(e,null,a,l):Ua(e,t.child,a,l)}function Es(t,e,a,l,n){a=a.render;var i=e.ref;if("ref"in l){var c={};for(var o in l)o!=="ref"&&(c[o]=l[o])}else c=l;return Da(e),l=Vc(t,e,a,c,i,n),o=Zc(),t!==null&&!vt?(kc(t,e,n),_e(t,e,n)):(k&&o&&Mc(e),e.flags|=1,Tt(t,e,l,n),e.child)}function Ns(t,e,a,l,n){if(t===null){var i=a.type;return typeof i=="function"&&!jc(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,Ds(t,e,i,l,n)):(t=Qn(a.type,null,l,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!vu(t,n)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:_l,a(c,l)&&t.ref===e.ref)return _e(t,e,n)}return e.flags|=1,t=Ce(i,l),t.ref=e.ref,t.return=e,e.child=t}function Ds(t,e,a,l,n){if(t!==null){var i=t.memoizedProps;if(_l(i,l)&&t.ref===e.ref)if(vt=!1,e.pendingProps=l=i,vu(t,n))(t.flags&131072)!==0&&(vt=!0);else return e.lanes=t.lanes,_e(t,e,n)}return su(t,e,a,l,n)}function Cs(t,e,a,l){var n=l.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,t!==null){for(l=e.child=t.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,e.child=null;return Os(t,e,i,a,l)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Kn(e,i!==null?i.cachePool:null),i!==null?Ur(e,i):qc(),Br(e);else return l=e.lanes=536870912,Os(t,e,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Kn(e,i.cachePool),Ur(e,i),na(),e.memoizedState=null):(t!==null&&Kn(e,null),qc(),na());return Tt(t,e,n,a),e.child}function $l(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Os(t,e,a,l,n){var i=Bc();return i=i===null?null:{parent:gt._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&Kn(e,null),qc(),Br(e),t!==null&&ll(t,e,l,!0),e.childLanes=n,null}function ri(t,e){return e=fi({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function ws(t,e,a){return Ua(e,t.child,null,a),t=ri(e,e.pendingProps),t.flags|=2,It(e),e.memoizedState=null,t}function K0(t,e,a){var l=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(k){if(l.mode==="hidden")return t=ri(e,l),e.lanes=536870912,$l(null,t);if(Xc(e),(t=ut)?(t=Zf(t,oe),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Fe!==null?{id:be,overflow:xe}:null,retryLane:536870912,hydrationErrors:null},a=gr(t),a.return=e,e.child=a,At=e,ut=null)):t=null,t===null)throw Ie(e);return e.lanes=536870912,null}return ri(e,l)}var i=t.memoizedState;if(i!==null){var c=i.dehydrated;if(Xc(e),n)if(e.flags&256)e.flags&=-257,e=ws(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(f(558));else if(vt||ll(t,e,a,!1),n=(a&t.childLanes)!==0,vt||n){if(l=it,l!==null&&(c=jo(l,a),c!==0&&c!==i.retryLane))throw i.retryLane=c,Ma(t,c),Vt(l,t,c),ru;xi(),e=ws(t,e,a)}else t=i.treeContext,ut=se(c.nextSibling),At=e,k=!0,$e=null,oe=!1,t!==null&&yr(e,t),e=ri(e,l),e.flags|=4096;return e}return t=Ce(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function si(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(f(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function su(t,e,a,l,n){return Da(e),a=Vc(t,e,a,l,void 0,n),l=Zc(),t!==null&&!vt?(kc(t,e,n),_e(t,e,n)):(k&&l&&Mc(e),e.flags|=1,Tt(t,e,a,n),e.child)}function Us(t,e,a,l,n,i){return Da(e),e.updateQueue=null,a=_r(e,l,a,n),Hr(t),l=Zc(),t!==null&&!vt?(kc(t,e,i),_e(t,e,i)):(k&&l&&Mc(e),e.flags|=1,Tt(t,e,a,i),e.child)}function Bs(t,e,a,l,n){if(Da(e),e.stateNode===null){var i=Pa,c=a.contextType;typeof c=="object"&&c!==null&&(i=Mt(c)),i=new a(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=uu,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},_c(e),c=a.contextType,i.context=typeof c=="object"&&c!==null?Mt(c):Pa,i.state=e.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(cu(e,a,c,l),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&uu.enqueueReplaceState(i,i.state,null),kl(e,l,i,n),Zl(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var o=e.memoizedProps,r=Ha(a,o);i.props=r;var h=i.context,b=a.contextType;c=Pa,typeof b=="object"&&b!==null&&(c=Mt(b));var S=a.getDerivedStateFromProps;b=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||h!==c)&&xs(e,i,l,c),ta=!1;var g=e.memoizedState;i.state=g,kl(e,l,i,n),Zl(),h=e.memoizedState,o||g!==h||ta?(typeof S=="function"&&(cu(e,a,S,l),h=e.memoizedState),(r=ta||bs(e,a,r,l,g,h,c))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=h),i.props=l,i.state=h,i.context=c,l=r):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,Rc(t,e),c=e.memoizedProps,b=Ha(a,c),i.props=b,S=e.pendingProps,g=i.context,h=a.contextType,r=Pa,typeof h=="object"&&h!==null&&(r=Mt(h)),o=a.getDerivedStateFromProps,(h=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==S||g!==r)&&xs(e,i,l,r),ta=!1,g=e.memoizedState,i.state=g,kl(e,l,i,n),Zl();var v=e.memoizedState;c!==S||g!==v||ta||t!==null&&t.dependencies!==null&&Zn(t.dependencies)?(typeof o=="function"&&(cu(e,a,o,l),v=e.memoizedState),(b=ta||bs(e,a,b,l,g,v,r)||t!==null&&t.dependencies!==null&&Zn(t.dependencies))?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,v,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,v,r)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=v),i.props=l,i.state=v,i.context=r,l=b):(typeof i.componentDidUpdate!="function"||c===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,si(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=Ua(e,t.child,null,n),e.child=Ua(e,null,a,n)):Tt(t,e,a,n),e.memoizedState=i.state,t=e.child):t=_e(t,e,n),t}function Hs(t,e,a,l){return Ea(),e.flags|=256,Tt(t,e,a,l),e.child}var fu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function du(t){return{baseLanes:t,cachePool:Ar()}}function mu(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=te),t}function _s(t,e,a){var l=e.pendingProps,n=!1,i=(e.flags&128)!==0,c;if((c=i)||(c=t!==null&&t.memoizedState===null?!1:(mt.current&2)!==0),c&&(n=!0,e.flags&=-129),c=(e.flags&32)!==0,e.flags&=-33,t===null){if(k){if(n?la(e):na(),(t=ut)?(t=Zf(t,oe),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Fe!==null?{id:be,overflow:xe}:null,retryLane:536870912,hydrationErrors:null},a=gr(t),a.return=e,e.child=a,At=e,ut=null)):t=null,t===null)throw Ie(e);return Wu(t)?e.lanes=32:e.lanes=536870912,null}var o=l.children;return l=l.fallback,n?(na(),n=e.mode,o=fi({mode:"hidden",children:o},n),l=Ta(l,n,a,null),o.return=e,l.return=e,o.sibling=l,e.child=o,l=e.child,l.memoizedState=du(a),l.childLanes=mu(t,c,a),e.memoizedState=fu,$l(null,l)):(la(e),hu(e,o))}var r=t.memoizedState;if(r!==null&&(o=r.dehydrated,o!==null)){if(i)e.flags&256?(la(e),e.flags&=-257,e=gu(t,e,a)):e.memoizedState!==null?(na(),e.child=t.child,e.flags|=128,e=null):(na(),o=l.fallback,n=e.mode,l=fi({mode:"visible",children:l.children},n),o=Ta(o,n,a,null),o.flags|=2,l.return=e,o.return=e,l.sibling=o,e.child=l,Ua(e,t.child,null,a),l=e.child,l.memoizedState=du(a),l.childLanes=mu(t,c,a),e.memoizedState=fu,e=$l(null,l));else if(la(e),Wu(o)){if(c=o.nextSibling&&o.nextSibling.dataset,c)var h=c.dgst;c=h,l=Error(f(419)),l.stack="",l.digest=c,Yl({value:l,source:null,stack:null}),e=gu(t,e,a)}else if(vt||ll(t,e,a,!1),c=(a&t.childLanes)!==0,vt||c){if(c=it,c!==null&&(l=jo(c,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,Ma(t,l),Vt(c,t,l),ru;Ju(o)||xi(),e=gu(t,e,a)}else Ju(o)?(e.flags|=192,e.child=t.child,e=null):(t=r.treeContext,ut=se(o.nextSibling),At=e,k=!0,$e=null,oe=!1,t!==null&&yr(e,t),e=hu(e,l.children),e.flags|=4096);return e}return n?(na(),o=l.fallback,n=e.mode,r=t.child,h=r.sibling,l=Ce(r,{mode:"hidden",children:l.children}),l.subtreeFlags=r.subtreeFlags&65011712,h!==null?o=Ce(h,o):(o=Ta(o,n,a,null),o.flags|=2),o.return=e,l.return=e,l.sibling=o,e.child=l,$l(null,l),l=e.child,o=t.child.memoizedState,o===null?o=du(a):(n=o.cachePool,n!==null?(r=gt._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=Ar(),o={baseLanes:o.baseLanes|a,cachePool:n}),l.memoizedState=o,l.childLanes=mu(t,c,a),e.memoizedState=fu,$l(t.child,l)):(la(e),a=t.child,t=a.sibling,a=Ce(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(c=e.deletions,c===null?(e.deletions=[t],e.flags|=16):c.push(t)),e.child=a,e.memoizedState=null,a)}function hu(t,e){return e=fi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function fi(t,e){return t=Ft(22,t,null,e),t.lanes=0,t}function gu(t,e,a){return Ua(e,t.child,null,a),t=hu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Rs(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Cc(t.return,e,a)}function pu(t,e,a,l,n,i){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=n,c.treeForkCount=i)}function Ls(t,e,a){var l=e.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var c=mt.current,o=(c&2)!==0;if(o?(c=c&1|2,e.flags|=128):c&=1,F(mt,c),Tt(t,e,l,a),l=k?Ll:0,!o&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rs(t,a,e);else if(t.tag===19)Rs(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&Pn(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),pu(e,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&Pn(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}pu(e,!0,a,null,i,l);break;case"together":pu(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function _e(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),ua|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(ll(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(f(153));if(e.child!==null){for(t=e.child,a=Ce(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Ce(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function vu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Zn(t)))}function J0(t,e,a){switch(e.tag){case 3:jn(e,e.stateNode.containerInfo),Pe(e,gt,t.memoizedState.cache),Ea();break;case 27:case 5:Gi(e);break;case 4:jn(e,e.stateNode.containerInfo);break;case 10:Pe(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Xc(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(la(e),e.flags|=128,null):(a&e.child.childLanes)!==0?_s(t,e,a):(la(e),t=_e(t,e,a),t!==null?t.sibling:null);la(e);break;case 19:var n=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(ll(t,e,a,!1),l=(a&e.childLanes)!==0),n){if(l)return Ls(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),F(mt,mt.current),l)break;return null;case 22:return e.lanes=0,Cs(t,e,a,e.pendingProps);case 24:Pe(e,gt,t.memoizedState.cache)}return _e(t,e,a)}function Ys(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)vt=!0;else{if(!vu(t,a)&&(e.flags&128)===0)return vt=!1,J0(t,e,a);vt=(t.flags&131072)!==0}else vt=!1,k&&(e.flags&1048576)!==0&&vr(e,Ll,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=Oa(e.elementType),e.type=t,typeof t=="function")jc(t)?(l=Ha(t,l),e.tag=1,e=Bs(null,e,t,l,a)):(e.tag=0,e=su(null,e,t,l,a));else{if(t!=null){var n=t.$$typeof;if(n===ve){e.tag=11,e=Es(null,e,t,l,a);break t}else if(n===_t){e.tag=14,e=Ns(null,e,t,l,a);break t}}throw e=Ct(t)||t,Error(f(306,e,""))}}return e;case 0:return su(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,n=Ha(l,e.pendingProps),Bs(t,e,l,n,a);case 3:t:{if(jn(e,e.stateNode.containerInfo),t===null)throw Error(f(387));l=e.pendingProps;var i=e.memoizedState;n=i.element,Rc(t,e),kl(e,l,null,a);var c=e.memoizedState;if(l=c.cache,Pe(e,gt,l),l!==i.cache&&Oc(e,[gt],a,!0),Zl(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Hs(t,e,l,a);break t}else if(l!==n){n=ie(Error(f(424)),e),Yl(n),e=Hs(t,e,l,a);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,ut=se(t.firstChild),At=e,k=!0,$e=null,oe=!0,a=Cr(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ea(),l===n){e=_e(t,e,a);break t}Tt(t,e,l,a)}e=e.child}return e;case 26:return si(t,e),t===null?(a=$f(e.type,null,e.pendingProps,null))?e.memoizedState=a:k||(a=e.type,t=e.pendingProps,l=Ei(ke.current).createElement(a),l[zt]=e,l[Lt]=t,Et(l,a,t),St(l),e.stateNode=l):e.memoizedState=$f(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Gi(e),t===null&&k&&(l=e.stateNode=Jf(e.type,e.pendingProps,ke.current),At=e,oe=!0,n=ut,da(e.type)?(Fu=n,ut=se(l.firstChild)):ut=n),Tt(t,e,e.pendingProps.children,a),si(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&k&&((n=l=ut)&&(l=Am(l,e.type,e.pendingProps,oe),l!==null?(e.stateNode=l,At=e,ut=se(l.firstChild),oe=!1,n=!0):n=!1),n||Ie(e)),Gi(e),n=e.type,i=e.pendingProps,c=t!==null?t.memoizedProps:null,l=i.children,Zu(n,i)?l=null:c!==null&&Zu(n,c)&&(e.flags|=32),e.memoizedState!==null&&(n=Vc(t,e,Y0,null,null,a),mn._currentValue=n),si(t,e),Tt(t,e,l,a),e.child;case 6:return t===null&&k&&((t=a=ut)&&(a=Mm(a,e.pendingProps,oe),a!==null?(e.stateNode=a,At=e,ut=null,t=!0):t=!1),t||Ie(e)),null;case 13:return _s(t,e,a);case 4:return jn(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Ua(e,null,l,a):Tt(t,e,l,a),e.child;case 11:return Es(t,e,e.type,e.pendingProps,a);case 7:return Tt(t,e,e.pendingProps,a),e.child;case 8:return Tt(t,e,e.pendingProps.children,a),e.child;case 12:return Tt(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,Pe(e,e.type,l.value),Tt(t,e,l.children,a),e.child;case 9:return n=e.type._context,l=e.pendingProps.children,Da(e),n=Mt(n),l=l(n),e.flags|=1,Tt(t,e,l,a),e.child;case 14:return Ns(t,e,e.type,e.pendingProps,a);case 15:return Ds(t,e,e.type,e.pendingProps,a);case 19:return Ls(t,e,a);case 31:return K0(t,e,a);case 22:return Cs(t,e,a,e.pendingProps);case 24:return Da(e),l=Mt(gt),t===null?(n=Bc(),n===null&&(n=it,i=wc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),e.memoizedState={parent:l,cache:n},_c(e),Pe(e,gt,n)):((t.lanes&a)!==0&&(Rc(t,e),kl(e,null,null,a),Zl()),n=t.memoizedState,i=e.memoizedState,n.parent!==l?(n={parent:l,cache:l},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Pe(e,gt,l)):(l=i.cache,Pe(e,gt,l),l!==n.cache&&Oc(e,[gt],a,!0))),Tt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(f(156,e.tag))}function Re(t){t.flags|=4}function yu(t,e,a,l,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(mf())t.flags|=8192;else throw wa=Wn,Hc}else t.flags&=-16777217}function qs(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ad(e))if(mf())t.flags|=8192;else throw wa=Wn,Hc}function di(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?bo():536870912,t.lanes|=e,gl|=e)}function Il(t,e){if(!k)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function W0(t,e,a){var l=e.pendingProps;switch(Tc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return ot(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ue(gt),Ya(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(al(e)?Re(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Nc())),ot(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(Re(e),i!==null?(ot(e),qs(e,i)):(ot(e),yu(e,n,null,l,a))):i?i!==t.memoizedState?(Re(e),ot(e),qs(e,i)):(ot(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&Re(e),ot(e),yu(e,n,t,l,a)),null;case 27:if(zn(e),a=ke.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Re(e);else{if(!l){if(e.stateNode===null)throw Error(f(166));return ot(e),null}t=xt.current,al(e)?br(e):(t=Jf(n,l,a),e.stateNode=t,Re(e))}return ot(e),null;case 5:if(zn(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Re(e);else{if(!l){if(e.stateNode===null)throw Error(f(166));return ot(e),null}if(i=xt.current,al(e))br(e);else{var c=Ei(ke.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}i[zt]=e,i[Lt]=l;t:for(c=e.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break t;for(;c.sibling===null;){if(c.return===null||c.return===e)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}e.stateNode=i;t:switch(Et(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Re(e)}}return ot(e),yu(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Re(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(f(166));if(t=ke.current,al(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,n=At,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[zt]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Rf(t.nodeValue,a)),t||Ie(e,!0)}else t=Ei(t).createTextNode(l),t[zt]=e,e.stateNode=t}return ot(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(l=al(e),a!==null){if(t===null){if(!l)throw Error(f(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(557));t[zt]=e}else Ea(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ot(e),t=!1}else a=Nc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(It(e),e):(It(e),null);if((e.flags&128)!==0)throw Error(f(558))}return ot(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=al(e),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(f(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));n[zt]=e}else Ea(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ot(e),n=!1}else n=Nc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(It(e),e):(It(e),null)}return It(e),(e.flags&128)!==0?(e.lanes=a,e):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=e.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),di(e,e.updateQueue),ot(e),null);case 4:return Ya(),t===null&&qu(e.stateNode.containerInfo),ot(e),null;case 10:return Ue(e.type),ot(e),null;case 19:if(st(mt),l=e.memoizedState,l===null)return ot(e),null;if(n=(e.flags&128)!==0,i=l.rendering,i===null)if(n)Il(l,!1);else{if(dt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=Pn(t),i!==null){for(e.flags|=128,Il(l,!1),t=i.updateQueue,e.updateQueue=t,di(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)hr(a,t),a=a.sibling;return F(mt,mt.current&1|2),k&&Oe(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&kt()>vi&&(e.flags|=128,n=!0,Il(l,!1),e.lanes=4194304)}else{if(!n)if(t=Pn(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,di(e,t),Il(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!k)return ot(e),null}else 2*kt()-l.renderingStartTime>vi&&a!==536870912&&(e.flags|=128,n=!0,Il(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=kt(),t.sibling=null,a=mt.current,F(mt,n?a&1|2:a&1),k&&Oe(e,l.treeForkCount),t):(ot(e),null);case 22:case 23:return It(e),Gc(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),a=e.updateQueue,a!==null&&di(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&st(Ca),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ue(gt),ot(e),null;case 25:return null;case 30:return null}throw Error(f(156,e.tag))}function F0(t,e){switch(Tc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ue(gt),Ya(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return zn(e),null;case 31:if(e.memoizedState!==null){if(It(e),e.alternate===null)throw Error(f(340));Ea()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(It(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(f(340));Ea()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(mt),null;case 4:return Ya(),null;case 10:return Ue(e.type),null;case 22:case 23:return It(e),Gc(),t!==null&&st(Ca),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ue(gt),null;case 25:return null;default:return null}}function Gs(t,e){switch(Tc(e),e.tag){case 3:Ue(gt),Ya();break;case 26:case 27:case 5:zn(e);break;case 4:Ya();break;case 31:e.memoizedState!==null&&It(e);break;case 13:It(e);break;case 19:st(mt);break;case 10:Ue(e.type);break;case 22:case 23:It(e),Gc(),t!==null&&st(Ca);break;case 24:Ue(gt)}}function Pl(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&t)===t){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==n)}}catch(o){P(e,e.return,o)}}function ia(t,e,a){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var c=l.inst,o=c.destroy;if(o!==void 0){c.destroy=void 0,n=e;var r=a,h=o;try{h()}catch(b){P(n,r,b)}}}l=l.next}while(l!==i)}}catch(b){P(e,e.return,b)}}function Xs(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{wr(e,a)}catch(l){P(t,t.return,l)}}}function Qs(t,e,a){a.props=Ha(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){P(t,e,l)}}function tn(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(n){P(t,e,n)}}function Se(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){P(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){P(t,e,n)}else a.current=null}function Vs(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){P(t,t.return,n)}}function bu(t,e,a){try{var l=t.stateNode;ym(l,t.type,a,e),l[Lt]=e}catch(n){P(t,t.return,n)}}function Zs(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&da(t.type)||t.tag===4}function xu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Zs(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&da(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Su(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Ne));else if(l!==4&&(l===27&&da(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Su(t,e,a),t=t.sibling;t!==null;)Su(t,e,a),t=t.sibling}function mi(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&da(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(mi(t,e,a),t=t.sibling;t!==null;)mi(t,e,a),t=t.sibling}function ks(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Et(e,l,a),e[zt]=t,e[Lt]=a}catch(i){P(t,t.return,i)}}var Le=!1,yt=!1,ju=!1,Ks=typeof WeakSet=="function"?WeakSet:Set,jt=null;function $0(t,e){if(t=t.containerInfo,Qu=Bi,t=ir(t),gc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var c=0,o=-1,r=-1,h=0,b=0,S=t,g=null;e:for(;;){for(var v;S!==a||n!==0&&S.nodeType!==3||(o=c+n),S!==i||l!==0&&S.nodeType!==3||(r=c+l),S.nodeType===3&&(c+=S.nodeValue.length),(v=S.firstChild)!==null;)g=S,S=v;for(;;){if(S===t)break e;if(g===a&&++h===n&&(o=c),g===i&&++b===l&&(r=c),(v=S.nextSibling)!==null)break;S=g,g=S.parentNode}S=v}a=o===-1||r===-1?null:{start:o,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vu={focusedElem:t,selectionRange:a},Bi=!1,jt=e;jt!==null;)if(e=jt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,jt=t;else for(;jt!==null;){switch(e=jt,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,a=e,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var E=Ha(a.type,n);t=l.getSnapshotBeforeUpdate(E,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(H){P(a,a.return,H)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Ku(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ku(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(f(163))}if(t=e.sibling,t!==null){t.return=e.return,jt=t;break}jt=e.return}}function Js(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:qe(t,a),l&4&&Pl(5,a);break;case 1:if(qe(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(c){P(a,a.return,c)}else{var n=Ha(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(c){P(a,a.return,c)}}l&64&&Xs(a),l&512&&tn(a,a.return);break;case 3:if(qe(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{wr(t,e)}catch(c){P(a,a.return,c)}}break;case 27:e===null&&l&4&&ks(a);case 26:case 5:qe(t,a),e===null&&l&4&&Vs(a),l&512&&tn(a,a.return);break;case 12:qe(t,a);break;case 31:qe(t,a),l&4&&$s(t,a);break;case 13:qe(t,a),l&4&&Is(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=cm.bind(null,a),Tm(t,a))));break;case 22:if(l=a.memoizedState!==null||Le,!l){e=e!==null&&e.memoizedState!==null||yt,n=Le;var i=yt;Le=l,(yt=e)&&!i?Ge(t,a,(a.subtreeFlags&8772)!==0):qe(t,a),Le=n,yt=i}break;case 30:break;default:qe(t,a)}}function Ws(t){var e=t.alternate;e!==null&&(t.alternate=null,Ws(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ii(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rt=null,qt=!1;function Ye(t,e,a){for(a=a.child;a!==null;)Fs(t,e,a),a=a.sibling}function Fs(t,e,a){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(Al,a)}catch{}switch(a.tag){case 26:yt||Se(a,e),Ye(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:yt||Se(a,e);var l=rt,n=qt;da(a.type)&&(rt=a.stateNode,qt=!1),Ye(t,e,a),sn(a.stateNode),rt=l,qt=n;break;case 5:yt||Se(a,e);case 6:if(l=rt,n=qt,rt=null,Ye(t,e,a),rt=l,qt=n,rt!==null)if(qt)try{(rt.nodeType===9?rt.body:rt.nodeName==="HTML"?rt.ownerDocument.body:rt).removeChild(a.stateNode)}catch(i){P(a,e,i)}else try{rt.removeChild(a.stateNode)}catch(i){P(a,e,i)}break;case 18:rt!==null&&(qt?(t=rt,Qf(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),zl(t)):Qf(rt,a.stateNode));break;case 4:l=rt,n=qt,rt=a.stateNode.containerInfo,qt=!0,Ye(t,e,a),rt=l,qt=n;break;case 0:case 11:case 14:case 15:ia(2,a,e),yt||ia(4,a,e),Ye(t,e,a);break;case 1:yt||(Se(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Qs(a,e,l)),Ye(t,e,a);break;case 21:Ye(t,e,a);break;case 22:yt=(l=yt)||a.memoizedState!==null,Ye(t,e,a),yt=l;break;default:Ye(t,e,a)}}function $s(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{zl(t)}catch(a){P(e,e.return,a)}}}function Is(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{zl(t)}catch(a){P(e,e.return,a)}}function I0(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Ks),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Ks),e;default:throw Error(f(435,t.tag))}}function hi(t,e){var a=I0(t);e.forEach(function(l){if(!a.has(l)){a.add(l);var n=um.bind(null,t,l);l.then(n,n)}})}function Gt(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=t,c=e,o=c;t:for(;o!==null;){switch(o.tag){case 27:if(da(o.type)){rt=o.stateNode,qt=!1;break t}break;case 5:rt=o.stateNode,qt=!1;break t;case 3:case 4:rt=o.stateNode.containerInfo,qt=!0;break t}o=o.return}if(rt===null)throw Error(f(160));Fs(i,c,n),rt=null,qt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Ps(e,t),e=e.sibling}var ge=null;function Ps(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gt(e,t),Xt(t),l&4&&(ia(3,t,t.return),Pl(3,t),ia(5,t,t.return));break;case 1:Gt(e,t),Xt(t),l&512&&(yt||a===null||Se(a,a.return)),l&64&&Le&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=ge;if(Gt(e,t),Xt(t),l&512&&(yt||a===null||Se(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[El]||i[zt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Et(i,l,a),i[zt]=t,St(i),l=i;break t;case"link":var c=td("link","href",n).get(l+(a.href||""));if(c){for(var o=0;o<c.length;o++)if(i=c[o],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(o,1);break e}}i=n.createElement(l),Et(i,l,a),n.head.appendChild(i);break;case"meta":if(c=td("meta","content",n).get(l+(a.content||""))){for(o=0;o<c.length;o++)if(i=c[o],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(o,1);break e}}i=n.createElement(l),Et(i,l,a),n.head.appendChild(i);break;default:throw Error(f(468,l))}i[zt]=t,St(i),l=i}t.stateNode=l}else ed(n,t.type,t.stateNode);else t.stateNode=Pf(n,l,t.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?ed(n,t.type,t.stateNode):Pf(n,l,t.memoizedProps)):l===null&&t.stateNode!==null&&bu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Gt(e,t),Xt(t),l&512&&(yt||a===null||Se(a,a.return)),a!==null&&l&4&&bu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Gt(e,t),Xt(t),l&512&&(yt||a===null||Se(a,a.return)),t.flags&32){n=t.stateNode;try{ka(n,"")}catch(E){P(t,t.return,E)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,bu(t,n,a!==null?a.memoizedProps:n)),l&1024&&(ju=!0);break;case 6:if(Gt(e,t),Xt(t),l&4){if(t.stateNode===null)throw Error(f(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(E){P(t,t.return,E)}}break;case 3:if(Ci=null,n=ge,ge=Ni(e.containerInfo),Gt(e,t),ge=n,Xt(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{zl(e.containerInfo)}catch(E){P(t,t.return,E)}ju&&(ju=!1,tf(t));break;case 4:l=ge,ge=Ni(t.stateNode.containerInfo),Gt(e,t),Xt(t),ge=l;break;case 12:Gt(e,t),Xt(t);break;case 31:Gt(e,t),Xt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,hi(t,l)));break;case 13:Gt(e,t),Xt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(pi=kt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,hi(t,l)));break;case 22:n=t.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,h=Le,b=yt;if(Le=h||n,yt=b||r,Gt(e,t),yt=b,Le=h,Xt(t),l&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||r||Le||yt||_a(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){r=a=e;try{if(i=r.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{o=r.stateNode;var S=r.memoizedProps.style,g=S!=null&&S.hasOwnProperty("display")?S.display:null;o.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(E){P(r,r.return,E)}}}else if(e.tag===6){if(a===null){r=e;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(E){P(r,r.return,E)}}}else if(e.tag===18){if(a===null){r=e;try{var v=r.stateNode;n?Vf(v,!0):Vf(r.stateNode,!1)}catch(E){P(r,r.return,E)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,hi(t,a))));break;case 19:Gt(e,t),Xt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,hi(t,l)));break;case 30:break;case 21:break;default:Gt(e,t),Xt(t)}}function Xt(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(Zs(l)){a=l;break}l=l.return}if(a==null)throw Error(f(160));switch(a.tag){case 27:var n=a.stateNode,i=xu(t);mi(t,i,n);break;case 5:var c=a.stateNode;a.flags&32&&(ka(c,""),a.flags&=-33);var o=xu(t);mi(t,o,c);break;case 3:case 4:var r=a.stateNode.containerInfo,h=xu(t);Su(t,h,r);break;default:throw Error(f(161))}}catch(b){P(t,t.return,b)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tf(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;tf(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function qe(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Js(t,e.alternate,e),e=e.sibling}function _a(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ia(4,e,e.return),_a(e);break;case 1:Se(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Qs(e,e.return,a),_a(e);break;case 27:sn(e.stateNode);case 26:case 5:Se(e,e.return),_a(e);break;case 22:e.memoizedState===null&&_a(e);break;case 30:_a(e);break;default:_a(e)}t=t.sibling}}function Ge(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,n=t,i=e,c=i.flags;switch(i.tag){case 0:case 11:case 15:Ge(n,i,a),Pl(4,i);break;case 1:if(Ge(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){P(l,l.return,h)}if(l=i,n=l.updateQueue,n!==null){var o=l.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)Or(r[n],o)}catch(h){P(l,l.return,h)}}a&&c&64&&Xs(i),tn(i,i.return);break;case 27:ks(i);case 26:case 5:Ge(n,i,a),a&&l===null&&c&4&&Vs(i),tn(i,i.return);break;case 12:Ge(n,i,a);break;case 31:Ge(n,i,a),a&&c&4&&$s(n,i);break;case 13:Ge(n,i,a),a&&c&4&&Is(n,i);break;case 22:i.memoizedState===null&&Ge(n,i,a),tn(i,i.return);break;case 30:break;default:Ge(n,i,a)}e=e.sibling}}function zu(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ql(a))}function Au(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ql(t))}function pe(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ef(t,e,a,l),e=e.sibling}function ef(t,e,a,l){var n=e.flags;switch(e.tag){case 0:case 11:case 15:pe(t,e,a,l),n&2048&&Pl(9,e);break;case 1:pe(t,e,a,l);break;case 3:pe(t,e,a,l),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ql(t)));break;case 12:if(n&2048){pe(t,e,a,l),t=e.stateNode;try{var i=e.memoizedProps,c=i.id,o=i.onPostCommit;typeof o=="function"&&o(c,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(r){P(e,e.return,r)}}else pe(t,e,a,l);break;case 31:pe(t,e,a,l);break;case 13:pe(t,e,a,l);break;case 23:break;case 22:i=e.stateNode,c=e.alternate,e.memoizedState!==null?i._visibility&2?pe(t,e,a,l):en(t,e):i._visibility&2?pe(t,e,a,l):(i._visibility|=2,dl(t,e,a,l,(e.subtreeFlags&10256)!==0||!1)),n&2048&&zu(c,e);break;case 24:pe(t,e,a,l),n&2048&&Au(e.alternate,e);break;default:pe(t,e,a,l)}}function dl(t,e,a,l,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,c=e,o=a,r=l,h=c.flags;switch(c.tag){case 0:case 11:case 15:dl(i,c,o,r,n),Pl(8,c);break;case 23:break;case 22:var b=c.stateNode;c.memoizedState!==null?b._visibility&2?dl(i,c,o,r,n):en(i,c):(b._visibility|=2,dl(i,c,o,r,n)),n&&h&2048&&zu(c.alternate,c);break;case 24:dl(i,c,o,r,n),n&&h&2048&&Au(c.alternate,c);break;default:dl(i,c,o,r,n)}e=e.sibling}}function en(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,n=l.flags;switch(l.tag){case 22:en(a,l),n&2048&&zu(l.alternate,l);break;case 24:en(a,l),n&2048&&Au(l.alternate,l);break;default:en(a,l)}e=e.sibling}}var an=8192;function ml(t,e,a){if(t.subtreeFlags&an)for(t=t.child;t!==null;)af(t,e,a),t=t.sibling}function af(t,e,a){switch(t.tag){case 26:ml(t,e,a),t.flags&an&&t.memoizedState!==null&&Lm(a,ge,t.memoizedState,t.memoizedProps);break;case 5:ml(t,e,a);break;case 3:case 4:var l=ge;ge=Ni(t.stateNode.containerInfo),ml(t,e,a),ge=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=an,an=16777216,ml(t,e,a),an=l):ml(t,e,a));break;default:ml(t,e,a)}}function lf(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ln(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];jt=l,cf(l,t)}lf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)nf(t),t=t.sibling}function nf(t){switch(t.tag){case 0:case 11:case 15:ln(t),t.flags&2048&&ia(9,t,t.return);break;case 3:ln(t);break;case 12:ln(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,gi(t)):ln(t);break;default:ln(t)}}function gi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];jt=l,cf(l,t)}lf(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ia(8,e,e.return),gi(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,gi(e));break;default:gi(e)}t=t.sibling}}function cf(t,e){for(;jt!==null;){var a=jt;switch(a.tag){case 0:case 11:case 15:ia(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ql(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,jt=l;else t:for(a=t;jt!==null;){l=jt;var n=l.sibling,i=l.return;if(Ws(l),l===a){jt=null;break t}if(n!==null){n.return=i,jt=n;break t}jt=i}}}var P0={getCacheForType:function(t){var e=Mt(gt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Mt(gt).controller.signal}},tm=typeof WeakMap=="function"?WeakMap:Map,W=0,it=null,X=null,V=0,I=0,Pt=null,ca=!1,hl=!1,Mu=!1,Xe=0,dt=0,ua=0,Ra=0,Tu=0,te=0,gl=0,nn=null,Qt=null,Eu=!1,pi=0,uf=0,vi=1/0,yi=null,oa=null,bt=0,ra=null,pl=null,Qe=0,Nu=0,Du=null,of=null,cn=0,Cu=null;function ee(){return(W&2)!==0&&V!==0?V&-V:y.T!==null?_u():zo()}function rf(){if(te===0)if((V&536870912)===0||k){var t=Tn;Tn<<=1,(Tn&3932160)===0&&(Tn=262144),te=t}else te=536870912;return t=$t.current,t!==null&&(t.flags|=32),te}function Vt(t,e,a){(t===it&&(I===2||I===9)||t.cancelPendingCommit!==null)&&(vl(t,0),sa(t,V,te,!1)),Tl(t,a),((W&2)===0||t!==it)&&(t===it&&((W&2)===0&&(Ra|=a),dt===4&&sa(t,V,te,!1)),je(t))}function sf(t,e,a){if((W&6)!==0)throw Error(f(327));var l=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Ml(t,e),n=l?lm(t,e):wu(t,e,!0),i=l;do{if(n===0){hl&&!l&&sa(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!em(a)){n=wu(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var c=0;else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){e=c;t:{var o=t;n=nn;var r=o.current.memoizedState.isDehydrated;if(r&&(vl(o,c).flags|=256),c=wu(o,c,!1),c!==2){if(Mu&&!r){o.errorRecoveryDisabledLanes|=i,Ra|=i,n=4;break t}i=Qt,Qt=n,i!==null&&(Qt===null?Qt=i:Qt.push.apply(Qt,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){vl(t,0),sa(t,e,0,!0);break}t:{switch(l=t,i=n,i){case 0:case 1:throw Error(f(345));case 4:if((e&4194048)!==e)break;case 6:sa(l,e,te,!ca);break t;case 2:Qt=null;break;case 3:case 5:break;default:throw Error(f(329))}if((e&62914560)===e&&(n=pi+300-kt(),10<n)){if(sa(l,e,te,!ca),Nn(l,0,!0)!==0)break t;Qe=e,l.timeoutHandle=Gf(ff.bind(null,l,a,Qt,yi,Eu,e,te,Ra,gl,ca,i,"Throttled",-0,0),n);break t}ff(l,a,Qt,yi,Eu,e,te,Ra,gl,ca,i,null,-0,0)}}break}while(!0);je(t)}function ff(t,e,a,l,n,i,c,o,r,h,b,S,g,v){if(t.timeoutHandle=-1,S=e.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ne},af(e,i,S);var E=(i&62914560)===i?pi-kt():(i&4194048)===i?uf-kt():0;if(E=Ym(S,E),E!==null){Qe=i,t.cancelPendingCommit=E(bf.bind(null,t,e,i,a,l,n,c,o,r,b,S,null,g,v)),sa(t,i,c,!h);return}}bf(t,e,i,a,l,n,c,o,r)}function em(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Wt(i(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sa(t,e,a,l){e&=~Tu,e&=~Ra,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var n=e;0<n;){var i=31-Jt(n),c=1<<i;l[i]=-1,n&=~c}a!==0&&xo(t,a,e)}function bi(){return(W&6)===0?(un(0),!1):!0}function Ou(){if(X!==null){if(I===0)var t=X.return;else t=X,we=Na=null,Kc(t),ul=null,Xl=0,t=X;for(;t!==null;)Gs(t.alternate,t),t=t.return;X=null}}function vl(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Sm(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Qe=0,Ou(),it=t,X=a=Ce(t.current,null),V=e,I=0,Pt=null,ca=!1,hl=Ml(t,e),Mu=!1,gl=te=Tu=Ra=ua=dt=0,Qt=nn=null,Eu=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var n=31-Jt(l),i=1<<n;e|=t[n],l&=~i}return Xe=e,qn(),a}function df(t,e){Y=null,y.H=Fl,e===cl||e===Jn?(e=Er(),I=3):e===Hc?(e=Er(),I=4):I=e===ru?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Pt=e,X===null&&(dt=1,oi(t,ie(e,t.current)))}function mf(){var t=$t.current;return t===null?!0:(V&4194048)===V?re===null:(V&62914560)===V||(V&536870912)!==0?t===re:!1}function hf(){var t=y.H;return y.H=Fl,t===null?Fl:t}function gf(){var t=y.A;return y.A=P0,t}function xi(){dt=4,ca||(V&4194048)!==V&&$t.current!==null||(hl=!0),(ua&134217727)===0&&(Ra&134217727)===0||it===null||sa(it,V,te,!1)}function wu(t,e,a){var l=W;W|=2;var n=hf(),i=gf();(it!==t||V!==e)&&(yi=null,vl(t,e)),e=!1;var c=dt;t:do try{if(I!==0&&X!==null){var o=X,r=Pt;switch(I){case 8:Ou(),c=6;break t;case 3:case 2:case 9:case 6:$t.current===null&&(e=!0);var h=I;if(I=0,Pt=null,yl(t,o,r,h),a&&hl){c=0;break t}break;default:h=I,I=0,Pt=null,yl(t,o,r,h)}}am(),c=dt;break}catch(b){df(t,b)}while(!0);return e&&t.shellSuspendCounter++,we=Na=null,W=l,y.H=n,y.A=i,X===null&&(it=null,V=0,qn()),c}function am(){for(;X!==null;)pf(X)}function lm(t,e){var a=W;W|=2;var l=hf(),n=gf();it!==t||V!==e?(yi=null,vi=kt()+500,vl(t,e)):hl=Ml(t,e);t:do try{if(I!==0&&X!==null){e=X;var i=Pt;e:switch(I){case 1:I=0,Pt=null,yl(t,e,i,1);break;case 2:case 9:if(Mr(i)){I=0,Pt=null,vf(e);break}e=function(){I!==2&&I!==9||it!==t||(I=7),je(t)},i.then(e,e);break t;case 3:I=7;break t;case 4:I=5;break t;case 7:Mr(i)?(I=0,Pt=null,vf(e)):(I=0,Pt=null,yl(t,e,i,7));break;case 5:var c=null;switch(X.tag){case 26:c=X.memoizedState;case 5:case 27:var o=X;if(c?ad(c):o.stateNode.complete){I=0,Pt=null;var r=o.sibling;if(r!==null)X=r;else{var h=o.return;h!==null?(X=h,Si(h)):X=null}break e}}I=0,Pt=null,yl(t,e,i,5);break;case 6:I=0,Pt=null,yl(t,e,i,6);break;case 8:Ou(),dt=6;break t;default:throw Error(f(462))}}nm();break}catch(b){df(t,b)}while(!0);return we=Na=null,y.H=l,y.A=n,W=a,X!==null?0:(it=null,V=0,qn(),dt)}function nm(){for(;X!==null&&!Ed();)pf(X)}function pf(t){var e=Ys(t.alternate,t,Xe);t.memoizedProps=t.pendingProps,e===null?Si(t):X=e}function vf(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Us(a,e,e.pendingProps,e.type,void 0,V);break;case 11:e=Us(a,e,e.pendingProps,e.type.render,e.ref,V);break;case 5:Kc(e);default:Gs(a,e),e=X=hr(e,Xe),e=Ys(a,e,Xe)}t.memoizedProps=t.pendingProps,e===null?Si(t):X=e}function yl(t,e,a,l){we=Na=null,Kc(e),ul=null,Xl=0;var n=e.return;try{if(k0(t,n,e,a,V)){dt=1,oi(t,ie(a,t.current)),X=null;return}}catch(i){if(n!==null)throw X=n,i;dt=1,oi(t,ie(a,t.current)),X=null;return}e.flags&32768?(k||l===1?t=!0:hl||(V&536870912)!==0?t=!1:(ca=t=!0,(l===2||l===9||l===3||l===6)&&(l=$t.current,l!==null&&l.tag===13&&(l.flags|=16384))),yf(e,t)):Si(e)}function Si(t){var e=t;do{if((e.flags&32768)!==0){yf(e,ca);return}t=e.return;var a=W0(e.alternate,e,Xe);if(a!==null){X=a;return}if(e=e.sibling,e!==null){X=e;return}X=e=t}while(e!==null);dt===0&&(dt=5)}function yf(t,e){do{var a=F0(t.alternate,t);if(a!==null){a.flags&=32767,X=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){X=t;return}X=t=a}while(t!==null);dt=6,X=null}function bf(t,e,a,l,n,i,c,o,r){t.cancelPendingCommit=null;do ji();while(bt!==0);if((W&6)!==0)throw Error(f(327));if(e!==null){if(e===t.current)throw Error(f(177));if(i=e.lanes|e.childLanes,i|=xc,Rd(t,a,i,c,o,r),t===it&&(X=it=null,V=0),pl=e,ra=t,Qe=a,Nu=i,Du=n,of=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,om(An,function(){return Af(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=y.T,y.T=null,n=j.p,j.p=2,c=W,W|=4;try{$0(t,e,a)}finally{W=c,j.p=n,y.T=l}}bt=1,xf(),Sf(),jf()}}function xf(){if(bt===1){bt=0;var t=ra,e=pl,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=y.T,y.T=null;var l=j.p;j.p=2;var n=W;W|=4;try{Ps(e,t);var i=Vu,c=ir(t.containerInfo),o=i.focusedElem,r=i.selectionRange;if(c!==o&&o&&o.ownerDocument&&nr(o.ownerDocument.documentElement,o)){if(r!==null&&gc(o)){var h=r.start,b=r.end;if(b===void 0&&(b=h),"selectionStart"in o)o.selectionStart=h,o.selectionEnd=Math.min(b,o.value.length);else{var S=o.ownerDocument||document,g=S&&S.defaultView||window;if(g.getSelection){var v=g.getSelection(),E=o.textContent.length,H=Math.min(r.start,E),lt=r.end===void 0?H:Math.min(r.end,E);!v.extend&&H>lt&&(c=lt,lt=H,H=c);var d=lr(o,H),s=lr(o,lt);if(d&&s&&(v.rangeCount!==1||v.anchorNode!==d.node||v.anchorOffset!==d.offset||v.focusNode!==s.node||v.focusOffset!==s.offset)){var m=S.createRange();m.setStart(d.node,d.offset),v.removeAllRanges(),H>lt?(v.addRange(m),v.extend(s.node,s.offset)):(m.setEnd(s.node,s.offset),v.addRange(m))}}}}for(S=[],v=o;v=v.parentNode;)v.nodeType===1&&S.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<S.length;o++){var x=S[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Bi=!!Qu,Vu=Qu=null}finally{W=n,j.p=l,y.T=a}}t.current=e,bt=2}}function Sf(){if(bt===2){bt=0;var t=ra,e=pl,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=y.T,y.T=null;var l=j.p;j.p=2;var n=W;W|=4;try{Js(t,e.alternate,e)}finally{W=n,j.p=l,y.T=a}}bt=3}}function jf(){if(bt===4||bt===3){bt=0,Nd();var t=ra,e=pl,a=Qe,l=of;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?bt=5:(bt=0,pl=ra=null,zf(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(oa=null),Fi(a),e=e.stateNode,Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(Al,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=y.T,n=j.p,j.p=2,y.T=null;try{for(var i=t.onRecoverableError,c=0;c<l.length;c++){var o=l[c];i(o.value,{componentStack:o.stack})}}finally{y.T=e,j.p=n}}(Qe&3)!==0&&ji(),je(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===Cu?cn++:(cn=0,Cu=t):cn=0,un(0)}}function zf(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ql(e)))}function ji(){return xf(),Sf(),jf(),Af()}function Af(){if(bt!==5)return!1;var t=ra,e=Nu;Nu=0;var a=Fi(Qe),l=y.T,n=j.p;try{j.p=32>a?32:a,y.T=null,a=Du,Du=null;var i=ra,c=Qe;if(bt=0,pl=ra=null,Qe=0,(W&6)!==0)throw Error(f(331));var o=W;if(W|=4,nf(i.current),ef(i,i.current,c,a),W=o,un(0,!1),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(Al,i)}catch{}return!0}finally{j.p=n,y.T=l,zf(t,e)}}function Mf(t,e,a){e=ie(a,e),e=ou(t.stateNode,e,2),t=aa(t,e,2),t!==null&&(Tl(t,2),je(t))}function P(t,e,a){if(t.tag===3)Mf(t,t,a);else for(;e!==null;){if(e.tag===3){Mf(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(oa===null||!oa.has(l))){t=ie(a,t),a=Ms(2),l=aa(e,a,2),l!==null&&(Ts(a,l,e,t),Tl(l,2),je(l));break}}e=e.return}}function Uu(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new tm;var n=new Set;l.set(e,n)}else n=l.get(e),n===void 0&&(n=new Set,l.set(e,n));n.has(a)||(Mu=!0,n.add(a),t=im.bind(null,t,e,a),e.then(t,t))}function im(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,it===t&&(V&a)===a&&(dt===4||dt===3&&(V&62914560)===V&&300>kt()-pi?(W&2)===0&&vl(t,0):Tu|=a,gl===V&&(gl=0)),je(t)}function Tf(t,e){e===0&&(e=bo()),t=Ma(t,e),t!==null&&(Tl(t,e),je(t))}function cm(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Tf(t,a)}function um(t,e){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(f(314))}l!==null&&l.delete(e),Tf(t,a)}function om(t,e){return ki(t,e)}var zi=null,bl=null,Bu=!1,Ai=!1,Hu=!1,fa=0;function je(t){t!==bl&&t.next===null&&(bl===null?zi=bl=t:bl=bl.next=t),Ai=!0,Bu||(Bu=!0,sm())}function un(t,e){if(!Hu&&Ai){Hu=!0;do for(var a=!1,l=zi;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-Jt(42|t)+1)-1,i&=n&~(c&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Cf(l,i))}else i=V,i=Nn(l,l===it?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Ml(l,i)||(a=!0,Cf(l,i));l=l.next}while(a);Hu=!1}}function rm(){Ef()}function Ef(){Ai=Bu=!1;var t=0;fa!==0&&xm()&&(t=fa);for(var e=kt(),a=null,l=zi;l!==null;){var n=l.next,i=Nf(l,e);i===0?(l.next=null,a===null?zi=n:a.next=n,n===null&&(bl=a)):(a=l,(t!==0||(i&3)!==0)&&(Ai=!0)),l=n}bt!==0&&bt!==5||un(t),fa!==0&&(fa=0)}function Nf(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var c=31-Jt(i),o=1<<c,r=n[c];r===-1?((o&a)===0||(o&l)!==0)&&(n[c]=_d(o,e)):r<=e&&(t.expiredLanes|=o),i&=~o}if(e=it,a=V,a=Nn(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(I===2||I===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ki(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ml(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&Ki(l),Fi(a)){case 2:case 8:a=vo;break;case 32:a=An;break;case 268435456:a=yo;break;default:a=An}return l=Df.bind(null,t),a=ki(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&Ki(l),t.callbackPriority=2,t.callbackNode=null,2}function Df(t,e){if(bt!==0&&bt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ji()&&t.callbackNode!==a)return null;var l=V;return l=Nn(t,t===it?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(sf(t,l,e),Nf(t,kt()),t.callbackNode!=null&&t.callbackNode===a?Df.bind(null,t):null)}function Cf(t,e){if(ji())return null;sf(t,e,!0)}function sm(){jm(function(){(W&6)!==0?ki(po,rm):Ef()})}function _u(){if(fa===0){var t=nl;t===0&&(t=Mn,Mn<<=1,(Mn&261888)===0&&(Mn=256)),fa=t}return fa}function Of(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wn(""+t)}function wf(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function fm(t,e,a,l,n){if(e==="submit"&&a&&a.stateNode===n){var i=Of((n[Lt]||null).action),c=l.submitter;c&&(e=(e=c[Lt]||null)?Of(e.formAction):c.getAttribute("formAction"),e!==null&&(i=e,c=null));var o=new _n("action","action",null,l,n);t.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(fa!==0){var r=c?wf(n,c):new FormData(n);au(a,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(o.preventDefault(),r=c?wf(n,c):new FormData(n),au(a,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var Ru=0;Ru<bc.length;Ru++){var Lu=bc[Ru],dm=Lu.toLowerCase(),mm=Lu[0].toUpperCase()+Lu.slice(1);he(dm,"on"+mm)}he(or,"onAnimationEnd"),he(rr,"onAnimationIteration"),he(sr,"onAnimationStart"),he("dblclick","onDoubleClick"),he("focusin","onFocus"),he("focusout","onBlur"),he(D0,"onTransitionRun"),he(C0,"onTransitionStart"),he(O0,"onTransitionCancel"),he(fr,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),Sa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Sa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Sa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Sa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Sa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Sa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var on="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(on));function Uf(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],n=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var c=l.length-1;0<=c;c--){var o=l[c],r=o.instance,h=o.currentTarget;if(o=o.listener,r!==i&&n.isPropagationStopped())break t;i=o,n.currentTarget=h;try{i(n)}catch(b){Yn(b)}n.currentTarget=null,i=r}else for(c=0;c<l.length;c++){if(o=l[c],r=o.instance,h=o.currentTarget,o=o.listener,r!==i&&n.isPropagationStopped())break t;i=o,n.currentTarget=h;try{i(n)}catch(b){Yn(b)}n.currentTarget=null,i=r}}}}function Q(t,e){var a=e[$i];a===void 0&&(a=e[$i]=new Set);var l=t+"__bubble";a.has(l)||(Bf(e,t,2,!1),a.add(l))}function Yu(t,e,a){var l=0;e&&(l|=4),Bf(a,t,l,e)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function qu(t){if(!t[Mi]){t[Mi]=!0,To.forEach(function(a){a!=="selectionchange"&&(hm.has(a)||Yu(a,!1,t),Yu(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mi]||(e[Mi]=!0,Yu("selectionchange",!1,e))}}function Bf(t,e,a,l){switch(rd(e)){case 2:var n=Xm;break;case 8:n=Qm;break;default:n=eo}a=n.bind(null,e,a,t),n=void 0,!cc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function Gu(t,e,a,l,n){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var o=l.stateNode.containerInfo;if(o===n)break;if(c===4)for(c=l.return;c!==null;){var r=c.tag;if((r===3||r===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;o!==null;){if(c=Ga(o),c===null)return;if(r=c.tag,r===5||r===6||r===26||r===27){l=i=c;continue t}o=o.parentNode}}l=l.return}Lo(function(){var h=i,b=nc(a),S=[];t:{var g=dr.get(t);if(g!==void 0){var v=_n,E=t;switch(t){case"keypress":if(Bn(a)===0)break t;case"keydown":case"keyup":v=u0;break;case"focusin":E="focus",v=sc;break;case"focusout":E="blur",v=sc;break;case"beforeblur":case"afterblur":v=sc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Go;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Wd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=s0;break;case or:case rr:case sr:v=Id;break;case fr:v=d0;break;case"scroll":case"scrollend":v=Kd;break;case"wheel":v=h0;break;case"copy":case"cut":case"paste":v=t0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Qo;break;case"toggle":case"beforetoggle":v=p0}var H=(e&4)!==0,lt=!H&&(t==="scroll"||t==="scrollend"),d=H?g!==null?g+"Capture":null:g;H=[];for(var s=h,m;s!==null;){var x=s;if(m=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||m===null||d===null||(x=Dl(s,d),x!=null&&H.push(rn(s,x,m))),lt)break;s=s.return}0<H.length&&(g=new v(g,E,null,a,b),S.push({event:g,listeners:H}))}}if((e&7)===0){t:{if(g=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",g&&a!==lc&&(E=a.relatedTarget||a.fromElement)&&(Ga(E)||E[qa]))break t;if((v||g)&&(g=b.window===b?b:(g=b.ownerDocument)?g.defaultView||g.parentWindow:window,v?(E=a.relatedTarget||a.toElement,v=h,E=E?Ga(E):null,E!==null&&(lt=M(E),H=E.tag,E!==lt||H!==5&&H!==27&&H!==6)&&(E=null)):(v=null,E=h),v!==E)){if(H=Go,x="onMouseLeave",d="onMouseEnter",s="mouse",(t==="pointerout"||t==="pointerover")&&(H=Qo,x="onPointerLeave",d="onPointerEnter",s="pointer"),lt=v==null?g:Nl(v),m=E==null?g:Nl(E),g=new H(x,s+"leave",v,a,b),g.target=lt,g.relatedTarget=m,x=null,Ga(b)===h&&(H=new H(d,s+"enter",E,a,b),H.target=m,H.relatedTarget=lt,x=H),lt=x,v&&E)e:{for(H=gm,d=v,s=E,m=0,x=d;x;x=H(x))m++;x=0;for(var O=s;O;O=H(O))x++;for(;0<m-x;)d=H(d),m--;for(;0<x-m;)s=H(s),x--;for(;m--;){if(d===s||s!==null&&d===s.alternate){H=d;break e}d=H(d),s=H(s)}H=null}else H=null;v!==null&&Hf(S,g,v,H,!1),E!==null&&lt!==null&&Hf(S,lt,E,H,!0)}}t:{if(g=h?Nl(h):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var K=$o;else if(Wo(g))if(Io)K=T0;else{K=A0;var N=z0}else v=g.nodeName,!v||v.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?h&&ac(h.elementType)&&(K=$o):K=M0;if(K&&(K=K(t,h))){Fo(S,K,a,b);break t}N&&N(t,g,h),t==="focusout"&&h&&g.type==="number"&&h.memoizedProps.value!=null&&ec(g,"number",g.value)}switch(N=h?Nl(h):window,t){case"focusin":(Wo(N)||N.contentEditable==="true")&&(Fa=N,pc=h,Rl=null);break;case"focusout":Rl=pc=Fa=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,cr(S,a,b);break;case"selectionchange":if(N0)break;case"keydown":case"keyup":cr(S,a,b)}var q;if(dc)t:{switch(t){case"compositionstart":var Z="onCompositionStart";break t;case"compositionend":Z="onCompositionEnd";break t;case"compositionupdate":Z="onCompositionUpdate";break t}Z=void 0}else Wa?Ko(t,a)&&(Z="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Z="onCompositionStart");Z&&(Vo&&a.locale!=="ko"&&(Wa||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&Wa&&(q=Yo()):(We=b,uc="value"in We?We.value:We.textContent,Wa=!0)),N=Ti(h,Z),0<N.length&&(Z=new Xo(Z,t,null,a,b),S.push({event:Z,listeners:N}),q?Z.data=q:(q=Jo(a),q!==null&&(Z.data=q)))),(q=y0?b0(t,a):x0(t,a))&&(Z=Ti(h,"onBeforeInput"),0<Z.length&&(N=new Xo("onBeforeInput","beforeinput",null,a,b),S.push({event:N,listeners:Z}),N.data=q)),fm(S,t,h,a,b)}Uf(S,e)})}function rn(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Ti(t,e){for(var a=e+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Dl(t,a),n!=null&&l.unshift(rn(t,n,i)),n=Dl(t,e),n!=null&&l.push(rn(t,n,i))),t.tag===3)return l;t=t.return}return[]}function gm(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Hf(t,e,a,l,n){for(var i=e._reactName,c=[];a!==null&&a!==l;){var o=a,r=o.alternate,h=o.stateNode;if(o=o.tag,r!==null&&r===l)break;o!==5&&o!==26&&o!==27||h===null||(r=h,n?(h=Dl(a,i),h!=null&&c.unshift(rn(a,h,r))):n||(h=Dl(a,i),h!=null&&c.push(rn(a,h,r)))),a=a.return}c.length!==0&&t.push({event:e,listeners:c})}var pm=/\r\n?/g,vm=/\u0000|\uFFFD/g;function _f(t){return(typeof t=="string"?t:""+t).replace(pm,`
`).replace(vm,"")}function Rf(t,e){return e=_f(e),_f(t)===e}function at(t,e,a,l,n,i){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||ka(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&ka(t,""+l);break;case"className":Cn(t,"class",l);break;case"tabIndex":Cn(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Cn(t,a,l);break;case"style":_o(t,l,i);break;case"data":if(e!=="object"){Cn(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=wn(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&at(t,e,"name",n.name,n,null),at(t,e,"formEncType",n.formEncType,n,null),at(t,e,"formMethod",n.formMethod,n,null),at(t,e,"formTarget",n.formTarget,n,null)):(at(t,e,"encType",n.encType,n,null),at(t,e,"method",n.method,n,null),at(t,e,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=wn(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Ne);break;case"onScroll":l!=null&&Q("scroll",t);break;case"onScrollEnd":l!=null&&Q("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(f(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=wn(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Q("beforetoggle",t),Q("toggle",t),Dn(t,"popover",l);break;case"xlinkActuate":Ee(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ee(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ee(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ee(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ee(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ee(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Dn(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zd.get(a)||a,Dn(t,a,l))}}function Xu(t,e,a,l,n,i){switch(a){case"style":_o(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(f(60));t.innerHTML=a}}break;case"children":typeof l=="string"?ka(t,l):(typeof l=="number"||typeof l=="bigint")&&ka(t,""+l);break;case"onScroll":l!=null&&Q("scroll",t);break;case"onScrollEnd":l!=null&&Q("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Ne);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Eo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),i=t[Lt]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,n);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Dn(t,a,l)}}}function Et(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Q("error",t),Q("load",t);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:at(t,e,i,c,a,null)}}n&&at(t,e,"srcSet",a.srcSet,a,null),l&&at(t,e,"src",a.src,a,null);return;case"input":Q("invalid",t);var o=i=c=n=null,r=null,h=null;for(l in a)if(a.hasOwnProperty(l)){var b=a[l];if(b!=null)switch(l){case"name":n=b;break;case"type":c=b;break;case"checked":r=b;break;case"defaultChecked":h=b;break;case"value":i=b;break;case"defaultValue":o=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(f(137,e));break;default:at(t,e,l,b,a,null)}}wo(t,i,o,r,h,c,n,!1);return;case"select":Q("invalid",t),l=c=i=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":c=o;break;case"multiple":l=o;default:at(t,e,n,o,a,null)}e=i,a=c,t.multiple=!!l,e!=null?Za(t,!!l,e,!1):a!=null&&Za(t,!!l,a,!0);return;case"textarea":Q("invalid",t),i=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(o=a[c],o!=null))switch(c){case"value":l=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(f(91));break;default:at(t,e,c,o,a,null)}Bo(t,l,n,i);return;case"option":for(r in a)a.hasOwnProperty(r)&&(l=a[r],l!=null)&&(r==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":at(t,e,r,l,a,null));return;case"dialog":Q("beforetoggle",t),Q("toggle",t),Q("cancel",t),Q("close",t);break;case"iframe":case"object":Q("load",t);break;case"video":case"audio":for(l=0;l<on.length;l++)Q(on[l],t);break;case"image":Q("error",t),Q("load",t);break;case"details":Q("toggle",t);break;case"embed":case"source":case"link":Q("error",t),Q("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in a)if(a.hasOwnProperty(h)&&(l=a[h],l!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:at(t,e,h,l,a,null)}return;default:if(ac(e)){for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!==void 0&&Xu(t,e,b,l,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null&&at(t,e,o,l,a,null))}function ym(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,o=null,r=null,h=null,b=null;for(v in a){var S=a[v];if(a.hasOwnProperty(v)&&S!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":r=S;default:l.hasOwnProperty(v)||at(t,e,v,null,l,S)}}for(var g in l){var v=l[g];if(S=a[g],l.hasOwnProperty(g)&&(v!=null||S!=null))switch(g){case"type":i=v;break;case"name":n=v;break;case"checked":h=v;break;case"defaultChecked":b=v;break;case"value":c=v;break;case"defaultValue":o=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(f(137,e));break;default:v!==S&&at(t,e,g,v,l,S)}}tc(t,c,o,r,h,b,i,n);return;case"select":v=c=o=g=null;for(i in a)if(r=a[i],a.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":v=r;default:l.hasOwnProperty(i)||at(t,e,i,null,l,r)}for(n in l)if(i=l[n],r=a[n],l.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":g=i;break;case"defaultValue":o=i;break;case"multiple":c=i;default:i!==r&&at(t,e,n,i,l,r)}e=o,a=c,l=v,g!=null?Za(t,!!a,g,!1):!!l!=!!a&&(e!=null?Za(t,!!a,e,!0):Za(t,!!a,a?[]:"",!1));return;case"textarea":v=g=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:at(t,e,o,null,l,n)}for(c in l)if(n=l[c],i=a[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":g=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(f(91));break;default:n!==i&&at(t,e,c,n,l,i)}Uo(t,g,v);return;case"option":for(var E in a)g=a[E],a.hasOwnProperty(E)&&g!=null&&!l.hasOwnProperty(E)&&(E==="selected"?t.selected=!1:at(t,e,E,null,l,g));for(r in l)g=l[r],v=a[r],l.hasOwnProperty(r)&&g!==v&&(g!=null||v!=null)&&(r==="selected"?t.selected=g&&typeof g!="function"&&typeof g!="symbol":at(t,e,r,g,l,v));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var H in a)g=a[H],a.hasOwnProperty(H)&&g!=null&&!l.hasOwnProperty(H)&&at(t,e,H,null,l,g);for(h in l)if(g=l[h],v=a[h],l.hasOwnProperty(h)&&g!==v&&(g!=null||v!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(f(137,e));break;default:at(t,e,h,g,l,v)}return;default:if(ac(e)){for(var lt in a)g=a[lt],a.hasOwnProperty(lt)&&g!==void 0&&!l.hasOwnProperty(lt)&&Xu(t,e,lt,void 0,l,g);for(b in l)g=l[b],v=a[b],!l.hasOwnProperty(b)||g===v||g===void 0&&v===void 0||Xu(t,e,b,g,l,v);return}}for(var d in a)g=a[d],a.hasOwnProperty(d)&&g!=null&&!l.hasOwnProperty(d)&&at(t,e,d,null,l,g);for(S in l)g=l[S],v=a[S],!l.hasOwnProperty(S)||g===v||g==null&&v==null||at(t,e,S,g,l,v)}function Lf(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bm(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,c=n.initiatorType,o=n.duration;if(i&&o&&Lf(c)){for(c=0,o=n.responseEnd,l+=1;l<a.length;l++){var r=a[l],h=r.startTime;if(h>o)break;var b=r.transferSize,S=r.initiatorType;b&&Lf(S)&&(r=r.responseEnd,c+=b*(r<o?1:(o-h)/(r-h)))}if(--l,e+=8*(i+c)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Qu=null,Vu=null;function Ei(t){return t.nodeType===9?t:t.ownerDocument}function Yf(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qf(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Zu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ku=null;function xm(){var t=window.event;return t&&t.type==="popstate"?t===ku?!1:(ku=t,!0):(ku=null,!1)}var Gf=typeof setTimeout=="function"?setTimeout:void 0,Sm=typeof clearTimeout=="function"?clearTimeout:void 0,Xf=typeof Promise=="function"?Promise:void 0,jm=typeof queueMicrotask=="function"?queueMicrotask:typeof Xf<"u"?function(t){return Xf.resolve(null).then(t).catch(zm)}:Gf;function zm(t){setTimeout(function(){throw t})}function da(t){return t==="head"}function Qf(t,e){var a=e,l=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(n),zl(e);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")sn(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,sn(a);for(var i=a.firstChild;i;){var c=i.nextSibling,o=i.nodeName;i[El]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}else a==="body"&&sn(t.ownerDocument.body);a=n}while(a);zl(e)}function Vf(t,e){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function Ku(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ku(a),Ii(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Am(t,e,a,l){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[El])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=se(t.nextSibling),t===null)break}return null}function Mm(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=se(t.nextSibling),t===null))return null;return t}function Zf(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=se(t.nextSibling),t===null))return null;return t}function Ju(t){return t.data==="$?"||t.data==="$~"}function Wu(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Tm(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function se(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Fu=null;function kf(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return se(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Kf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Jf(t,e,a){switch(e=Ei(a),t){case"html":if(t=e.documentElement,!t)throw Error(f(452));return t;case"head":if(t=e.head,!t)throw Error(f(453));return t;case"body":if(t=e.body,!t)throw Error(f(454));return t;default:throw Error(f(451))}}function sn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ii(t)}var fe=new Map,Wf=new Set;function Ni(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ve=j.d;j.d={f:Em,r:Nm,D:Dm,C:Cm,L:Om,m:wm,X:Bm,S:Um,M:Hm};function Em(){var t=Ve.f(),e=bi();return t||e}function Nm(t){var e=Xa(t);e!==null&&e.tag===5&&e.type==="form"?fs(e):Ve.r(t)}var xl=typeof document>"u"?null:document;function Ff(t,e,a){var l=xl;if(l&&typeof e=="string"&&e){var n=le(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Wf.has(n)||(Wf.add(n),t={rel:t,crossOrigin:a,href:e},l.querySelector(n)===null&&(e=l.createElement("link"),Et(e,"link",t),St(e),l.head.appendChild(e)))}}function Dm(t){Ve.D(t),Ff("dns-prefetch",t,null)}function Cm(t,e){Ve.C(t,e),Ff("preconnect",t,e)}function Om(t,e,a){Ve.L(t,e,a);var l=xl;if(l&&t&&e){var n='link[rel="preload"][as="'+le(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+le(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+le(a.imageSizes)+'"]')):n+='[href="'+le(t)+'"]';var i=n;switch(e){case"style":i=Sl(t);break;case"script":i=jl(t)}fe.has(i)||(t=B({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),fe.set(i,t),l.querySelector(n)!==null||e==="style"&&l.querySelector(fn(i))||e==="script"&&l.querySelector(dn(i))||(e=l.createElement("link"),Et(e,"link",t),St(e),l.head.appendChild(e)))}}function wm(t,e){Ve.m(t,e);var a=xl;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+le(l)+'"][href="'+le(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=jl(t)}if(!fe.has(i)&&(t=B({rel:"modulepreload",href:t},e),fe.set(i,t),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(dn(i)))return}l=a.createElement("link"),Et(l,"link",t),St(l),a.head.appendChild(l)}}}function Um(t,e,a){Ve.S(t,e,a);var l=xl;if(l&&t){var n=Qa(l).hoistableStyles,i=Sl(t);e=e||"default";var c=n.get(i);if(!c){var o={loading:0,preload:null};if(c=l.querySelector(fn(i)))o.loading=5;else{t=B({rel:"stylesheet",href:t,"data-precedence":e},a),(a=fe.get(i))&&$u(t,a);var r=c=l.createElement("link");St(r),Et(r,"link",t),r._p=new Promise(function(h,b){r.onload=h,r.onerror=b}),r.addEventListener("load",function(){o.loading|=1}),r.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Di(c,e,l)}c={type:"stylesheet",instance:c,count:1,state:o},n.set(i,c)}}}function Bm(t,e){Ve.X(t,e);var a=xl;if(a&&t){var l=Qa(a).hoistableScripts,n=jl(t),i=l.get(n);i||(i=a.querySelector(dn(n)),i||(t=B({src:t,async:!0},e),(e=fe.get(n))&&Iu(t,e),i=a.createElement("script"),St(i),Et(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Hm(t,e){Ve.M(t,e);var a=xl;if(a&&t){var l=Qa(a).hoistableScripts,n=jl(t),i=l.get(n);i||(i=a.querySelector(dn(n)),i||(t=B({src:t,async:!0,type:"module"},e),(e=fe.get(n))&&Iu(t,e),i=a.createElement("script"),St(i),Et(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function $f(t,e,a,l){var n=(n=ke.current)?Ni(n):null;if(!n)throw Error(f(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Sl(a.href),a=Qa(n).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Sl(a.href);var i=Qa(n).hoistableStyles,c=i.get(t);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,c),(i=n.querySelector(fn(t)))&&!i._p&&(c.instance=i,c.state.loading=5),fe.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fe.set(t,a),i||_m(n,t,a,c.state))),e&&l===null)throw Error(f(528,""));return c}if(e&&l!==null)throw Error(f(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=jl(a),a=Qa(n).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,t))}}function Sl(t){return'href="'+le(t)+'"'}function fn(t){return'link[rel="stylesheet"]['+t+"]"}function If(t){return B({},t,{"data-precedence":t.precedence,precedence:null})}function _m(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Et(e,"link",a),St(e),t.head.appendChild(e))}function jl(t){return'[src="'+le(t)+'"]'}function dn(t){return"script[async]"+t}function Pf(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+le(a.href)+'"]');if(l)return e.instance=l,St(l),l;var n=B({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),St(l),Et(l,"style",n),Di(l,a.precedence,t),e.instance=l;case"stylesheet":n=Sl(a.href);var i=t.querySelector(fn(n));if(i)return e.state.loading|=4,e.instance=i,St(i),i;l=If(a),(n=fe.get(n))&&$u(l,n),i=(t.ownerDocument||t).createElement("link"),St(i);var c=i;return c._p=new Promise(function(o,r){c.onload=o,c.onerror=r}),Et(i,"link",l),e.state.loading|=4,Di(i,a.precedence,t),e.instance=i;case"script":return i=jl(a.src),(n=t.querySelector(dn(i)))?(e.instance=n,St(n),n):(l=a,(n=fe.get(i))&&(l=B({},a),Iu(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),St(n),Et(n,"link",l),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(f(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Di(l,a.precedence,t));return e.instance}function Di(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var o=l[c];if(o.dataset.precedence===e)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function $u(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Iu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ci=null;function td(t,e,a){if(Ci===null){var l=new Map,n=Ci=new Map;n.set(a,l)}else n=Ci,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[El]||i[zt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(e)||"";c=t+c;var o=l.get(c);o?o.push(i):l.set(c,[i])}}return l}function ed(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Rm(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ad(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Lm(t,e,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Sl(l.href),i=e.querySelector(fn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Oi.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=i,St(i);return}i=e.ownerDocument||e,l=If(l),(n=fe.get(n))&&$u(l,n),i=i.createElement("link"),St(i);var c=i;c._p=new Promise(function(o,r){c.onload=o,c.onerror=r}),Et(i,"link",l),a.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Oi.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Pu=0;function Ym(t,e){return t.stylesheets&&t.count===0&&Ui(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&Ui(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&Pu===0&&(Pu=62500*bm());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ui(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Pu?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Oi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ui(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var wi=null;function Ui(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,wi=new Map,e.forEach(qm,t),wi=null,Oi.call(t))}function qm(t,e){if(!(e.state.loading&4)){var a=wi.get(t);if(a)var l=a.get(null);else{a=new Map,wi.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=e.instance,c=n.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,n),a.set(c,n),this.count++,l=Oi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var mn={$$typeof:wt,Provider:null,Consumer:null,_currentValue:w,_currentValue2:w,_threadCount:0};function Gm(t,e,a,l,n,i,c,o,r){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ji(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ji(0),this.hiddenUpdates=Ji(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function ld(t,e,a,l,n,i,c,o,r,h,b,S){return t=new Gm(t,e,a,c,r,h,b,S,o),e=1,i===!0&&(e|=24),i=Ft(3,null,null,e),t.current=i,i.stateNode=t,e=wc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:e},_c(i),t}function nd(t){return t?(t=Pa,t):Pa}function id(t,e,a,l,n,i){n=nd(n),l.context===null?l.context=n:l.pendingContext=n,l=ea(e),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=aa(t,l,e),a!==null&&(Vt(a,t,e),Vl(a,t,e))}function cd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function to(t,e){cd(t,e),(t=t.alternate)&&cd(t,e)}function ud(t){if(t.tag===13||t.tag===31){var e=Ma(t,67108864);e!==null&&Vt(e,t,67108864),to(t,67108864)}}function od(t){if(t.tag===13||t.tag===31){var e=ee();e=Wi(e);var a=Ma(t,e);a!==null&&Vt(a,t,e),to(t,e)}}var Bi=!0;function Xm(t,e,a,l){var n=y.T;y.T=null;var i=j.p;try{j.p=2,eo(t,e,a,l)}finally{j.p=i,y.T=n}}function Qm(t,e,a,l){var n=y.T;y.T=null;var i=j.p;try{j.p=8,eo(t,e,a,l)}finally{j.p=i,y.T=n}}function eo(t,e,a,l){if(Bi){var n=ao(l);if(n===null)Gu(t,e,l,Hi,a),sd(t,l);else if(Zm(n,t,e,a,l))l.stopPropagation();else if(sd(t,l),e&4&&-1<Vm.indexOf(t)){for(;n!==null;){var i=Xa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=xa(i.pendingLanes);if(c!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;c;){var r=1<<31-Jt(c);o.entanglements[1]|=r,c&=~r}je(i),(W&6)===0&&(vi=kt()+500,un(0))}}break;case 31:case 13:o=Ma(i,2),o!==null&&Vt(o,i,2),bi(),to(i,2)}if(i=ao(l),i===null&&Gu(t,e,l,Hi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Gu(t,e,l,null,a)}}function ao(t){return t=nc(t),lo(t)}var Hi=null;function lo(t){if(Hi=null,t=Ga(t),t!==null){var e=M(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=D(e),t!==null)return t;t=null}else if(a===31){if(t=L(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Hi=t,null}function rd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dd()){case po:return 2;case vo:return 8;case An:case Cd:return 32;case yo:return 268435456;default:return 32}default:return 32}}var no=!1,ma=null,ha=null,ga=null,hn=new Map,gn=new Map,pa=[],Vm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sd(t,e){switch(t){case"focusin":case"focusout":ma=null;break;case"dragenter":case"dragleave":ha=null;break;case"mouseover":case"mouseout":ga=null;break;case"pointerover":case"pointerout":hn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":gn.delete(e.pointerId)}}function pn(t,e,a,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Xa(e),e!==null&&ud(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Zm(t,e,a,l,n){switch(e){case"focusin":return ma=pn(ma,t,e,a,l,n),!0;case"dragenter":return ha=pn(ha,t,e,a,l,n),!0;case"mouseover":return ga=pn(ga,t,e,a,l,n),!0;case"pointerover":var i=n.pointerId;return hn.set(i,pn(hn.get(i)||null,t,e,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,gn.set(i,pn(gn.get(i)||null,t,e,a,l,n)),!0}return!1}function fd(t){var e=Ga(t.target);if(e!==null){var a=M(e);if(a!==null){if(e=a.tag,e===13){if(e=D(a),e!==null){t.blockedOn=e,Ao(t.priority,function(){od(a)});return}}else if(e===31){if(e=L(a),e!==null){t.blockedOn=e,Ao(t.priority,function(){od(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _i(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=ao(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);lc=l,a.target.dispatchEvent(l),lc=null}else return e=Xa(a),e!==null&&ud(e),t.blockedOn=a,!1;e.shift()}return!0}function dd(t,e,a){_i(t)&&a.delete(e)}function km(){no=!1,ma!==null&&_i(ma)&&(ma=null),ha!==null&&_i(ha)&&(ha=null),ga!==null&&_i(ga)&&(ga=null),hn.forEach(dd),gn.forEach(dd)}function Ri(t,e){t.blockedOn===e&&(t.blockedOn=null,no||(no=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,km)))}var Li=null;function md(t){Li!==t&&(Li=t,p.unstable_scheduleCallback(p.unstable_NormalPriority,function(){Li===t&&(Li=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],n=t[e+2];if(typeof l!="function"){if(lo(l||a)===null)continue;break}var i=Xa(a);i!==null&&(t.splice(e,3),e-=3,au(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function zl(t){function e(r){return Ri(r,t)}ma!==null&&Ri(ma,t),ha!==null&&Ri(ha,t),ga!==null&&Ri(ga,t),hn.forEach(e),gn.forEach(e);for(var a=0;a<pa.length;a++){var l=pa[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<pa.length&&(a=pa[0],a.blockedOn===null);)fd(a),a.blockedOn===null&&pa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],c=n[Lt]||null;if(typeof i=="function")c||md(a);else if(c){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[Lt]||null)o=c.formAction;else if(lo(n)!==null)continue}else o=c.action;typeof o=="function"?a[l+1]=o:(a.splice(l,3),l-=3),md(a)}}}function hd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function io(t){this._internalRoot=t}Yi.prototype.render=io.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(f(409));var a=e.current,l=ee();id(a,l,t,e,null,null)},Yi.prototype.unmount=io.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;id(t.current,2,null,t,null,null),bi(),e[qa]=null}};function Yi(t){this._internalRoot=t}Yi.prototype.unstable_scheduleHydration=function(t){if(t){var e=zo();t={blockedOn:null,target:t,priority:e};for(var a=0;a<pa.length&&e!==0&&e<pa[a].priority;a++);pa.splice(a,0,t),a===0&&fd(t)}};var gd=z.version;if(gd!=="19.2.3")throw Error(f(527,gd,"19.2.3"));j.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(f(188)):(t=Object.keys(t).join(","),Error(f(268,t)));return t=G(e),t=t!==null?ct(t):null,t=t===null?null:t.stateNode,t};var Km={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qi.isDisabled&&qi.supportsFiber)try{Al=qi.inject(Km),Kt=qi}catch{}}return yn.createRoot=function(t,e){if(!T(t))throw Error(f(299));var a=!1,l="",n=Ss,i=js,c=zs;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError)),e=ld(t,1,!1,null,null,a,l,null,n,i,c,hd),t[qa]=e.current,qu(t),new io(e)},yn.hydrateRoot=function(t,e,a){if(!T(t))throw Error(f(299));var l=!1,n="",i=Ss,c=js,o=zs,r=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),e=ld(t,1,!0,e,a??null,l,n,r,i,c,o,hd),e.context=nd(null),a=e.current,l=ee(),l=Wi(l),n=ea(l),n.callback=null,aa(a,n,l),a=l,e.current.lanes=a,Tl(e,a),je(e),t[qa]=e.current,qu(t),new Yi(e)},yn.version="19.2.3",yn}var Sd;function ih(){if(Sd)return uo.exports;Sd=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(z){console.error(z)}}return p(),uo.exports=nh(),uo.exports}var ch=ih();class uh extends C.Component{constructor(z){super(z),this.state={hasError:!1}}static getDerivedStateFromError(z){return{hasError:!0,error:z}}render(){return this.state.hasError?u.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#0a0a0f",color:"#ffffff",fontFamily:"Outfit, sans-serif",gap:"16px",padding:"24px",textAlign:"center"},children:[u.jsx("h1",{style:{fontSize:"2rem",fontWeight:400,margin:0},children:"Something went wrong"}),u.jsx("p",{style:{color:"rgba(255,255,255,0.5)",margin:0},children:"Please refresh the page to continue."}),u.jsx("button",{onClick:()=>window.location.reload(),style:{marginTop:"8px",padding:"12px 32px",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.2)",background:"rgba(255,255,255,0.06)",color:"#ffffff",cursor:"pointer",fontSize:"14px",letterSpacing:"1px"},children:"Refresh"})]}):this.props.children}}const so=[{color:"#ffffff",weight:30},{color:"#fff8f0",weight:25},{color:"#fffaf5",weight:20},{color:"#ffeedd",weight:10},{color:"#ffddbb",weight:5},{color:"#ffcc99",weight:3},{color:"#ffaa77",weight:2},{color:"#aaccff",weight:3},{color:"#99bbff",weight:2}],oh=()=>{const p=so.reduce((A,f)=>A+f.weight,0);let z=Math.random()*p;for(const A of so)if(z-=A.weight,z<=0)return A.color;return so[0].color},fo=(p,z,A)=>Array.from({length:p},()=>{const f=Math.pow(Math.random(),2),T=z[0]+f*(z[1]-z[0]),M=oh(),D=A[0]+Math.random()*(A[1]-A[0]),L=3+Math.random()*6;return{size:T,color:M,top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,baseOpacity:D,peakOpacity:Math.min(1,D+.2+Math.random()*.3),twinkleDuration:L,twinkleDelay:Math.random()*L,isBright:T>z[1]*.7,isBrilliant:T>z[1]*.9&&Math.random()>.5}}),rh=p=>Array.from({length:p},()=>({top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,driftX:(Math.random()-.5)*100,driftY:-50-Math.random()*150,duration:20+Math.random()*40,opacity:.2+Math.random()*.3,delay:Math.random()*30})),sh=({size:p,color:z,top:A,left:f,baseOpacity:T,peakOpacity:M,twinkleDuration:D,twinkleDelay:L,isBright:U,isBrilliant:G})=>u.jsxs("div",{className:"star",style:{position:"absolute",width:p,height:p,top:A,left:f,background:z,borderRadius:"50%",boxShadow:`0 0 ${p*2}px ${p*.5}px ${z}`,animation:`twinkle ${D}s ease-in-out infinite`,animationDelay:`${L}s`,"--base-opacity":T,"--peak-opacity":M,"--star-color":z},children:[U&&u.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"300%",height:"300%",background:`radial-gradient(circle, ${z} 0%, transparent 70%)`,opacity:.4,borderRadius:"50%"}}),G&&u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:1,height:20,background:`linear-gradient(to bottom, transparent, ${z}, transparent)`,opacity:.6}}),u.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:20,height:1,background:`linear-gradient(to right, transparent, ${z}, transparent)`,opacity:.6}})]})]}),fh=({top:p,left:z,driftX:A,driftY:f,duration:T,opacity:M,delay:D})=>u.jsx("div",{className:"dust",style:{position:"absolute",width:1,height:1,top:p,left:z,background:"rgba(255,255,255,0.3)",borderRadius:"50%",animation:`floatDust ${T}s linear infinite`,animationDelay:`${D}s`,"--dust-x":`${A}px`,"--dust-y":`${f}px`,"--dust-opacity":M}}),mo=({stars:p,animationDuration:z})=>u.jsx("div",{style:{position:"absolute",width:"100%",height:"200%",top:0,left:0,animation:`verticalDrift ${z}s linear infinite`},children:p.map((A,f)=>u.jsx(sh,{...A},f))}),dh=({className:p="",style:z={}})=>{const A=C.useMemo(()=>fo(10,[.5,1],[.2,.5]),[]),f=C.useMemo(()=>fo(10,[1,1.5],[.4,.7]),[]),T=C.useMemo(()=>fo(10,[1.5,2],[.6,.9]),[]),M=C.useMemo(()=>rh(30),[]);return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        @keyframes twinkle {
          0%, 100% { 
            opacity: var(--base-opacity); 
            filter: brightness(1);
          }
          50% { 
            opacity: var(--peak-opacity); 
            filter: brightness(1.3);
          }
        }

        @keyframes verticalDrift {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        @keyframes shoot {
          0% {
            opacity: 0;
            transform: translate(0, 0);
          }
          2% { opacity: 1; }
          15% { opacity: 0.8; }
          30% {
            opacity: 0;
            transform: translate(var(--shoot-x), var(--shoot-y));
          }
          100% {
            opacity: 0;
            transform: translate(var(--shoot-x), var(--shoot-y));
          }
        }

        @keyframes floatDust {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% { opacity: var(--dust-opacity); }
          90% { opacity: var(--dust-opacity); }
          100% {
            transform: translate(var(--dust-x), var(--dust-y));
            opacity: 0;
          }
        }

        @keyframes nebulaPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
      `}),u.jsxs("div",{className:p,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",background:"transparent",zIndex:0,pointerEvents:"none",...z},children:[u.jsx("div",{style:{position:"absolute",width:"100%",height:"100%"}}),[{width:600,height:400,top:"10%",left:"60%",color:"rgba(100, 50, 120, 0.15)",delay:0},{width:500,height:300,top:"50%",left:"10%",color:"rgba(30, 60, 100, 0.12)",delay:7},{width:400,height:500,top:"60%",right:"20%",color:"rgba(80, 40, 80, 0.1)",delay:14}].map((D,L)=>u.jsx("div",{style:{position:"absolute",width:D.width,height:D.height,top:D.top,left:D.left,right:D.right,borderRadius:"50%",filter:"blur(80px)",background:`radial-gradient(ellipse, ${D.color} 0%, transparent 70%)`,animation:"nebulaPulse 20s ease-in-out infinite",animationDelay:`${D.delay}s`}},L)),u.jsx(mo,{stars:A,animationDuration:120}),u.jsx(mo,{stars:f,animationDuration:80}),u.jsx(mo,{stars:T,animationDuration:50}),M.map((D,L)=>u.jsx(fh,{...D},L))]})]})},mh="/Strabso/assets/logo-CaQ3yAJ2.png",hh=({activeTab:p,onTabClick:z})=>{const A=[{name:"Home"},{name:"Projects"},{name:"About"}];return u.jsx("nav",{className:"glass-navbar",children:u.jsx("div",{className:"navbar-wrapper",children:u.jsxs("div",{className:"navbar-container",children:[u.jsx("a",{href:"/",className:"navbar-logo",children:u.jsx("div",{className:"logo-icon",children:u.jsx("img",{src:mh,alt:"Company Logo"})})}),u.jsx("ul",{className:"nav-links",children:A.map(f=>u.jsx("li",{className:"nav-item",children:u.jsxs("button",{onClick:()=>z(f.name),className:`nav-link ${p===f.name?"active":""}`,"aria-current":p===f.name?"page":void 0,children:[f.name,p===f.name&&u.jsx("div",{className:"nav-link-pulse"})]})},f.name))})]})})})},gh="/Strabso/assets/coca_cola-BljjUpwk.webp",ph="/Strabso/assets/lankasoy-BJQDjWpB.png",vh="/Strabso/assets/hemas-NRwrWOvZ.png",yh="/Strabso/assets/fems-DxxjrCp1.jpg",bh="/Strabso/assets/vivya-p3JKc2hI.jpeg",xh="/Strabso/assets/uswaththe-CBafDdyi.png",Sh="/Strabso/assets/zesta.jpg-Gkr9D_TE.webp",jh="/Strabso/assets/vibe-BjwuLHQj.jpeg",zh="/Strabso/assets/hnb-BUw6tVsM.png",Ah="/Strabso/assets/maliban-glbHtWj_.png",Mh="/Strabso/assets/watawala-Cmu5B7fW.jpg",xn=[{id:1,image:gh,name:"Coca-Cola",category:"Beverages",description:"On-ground brand activations and sampling campaigns driving nationwide consumer engagement.",color:"#EF4444"},{id:2,image:vh,name:"Hemas",category:"Healthcare & FMCG",description:"Promoter deployment and retail activation programs across all 9 provinces of Sri Lanka.",color:"#3B82F6"},{id:3,image:Ah,name:"Maliban",category:"Biscuits & FMCG",description:"Nationwide sampling and selling operations delivering measurable sales uplift.",color:"#F97316"},{id:4,image:Sh,name:"Zesta",category:"Tea & Beverages",description:"Mall activations and roadshows bringing the Zesta brand to communities island-wide.",color:"#10B981"},{id:5,image:Mh,name:"Watawala",category:"Tea & Beverages",description:"Strategic brand activation campaigns building consumer loyalty across key markets.",color:"#22C55E"},{id:6,image:zh,name:"HNB",category:"Banking & Finance",description:"Corporate event management and institutional activation projects across Sri Lanka.",color:"#DC2626"},{id:7,image:ph,name:"Lankasoy",category:"FMCG",description:"Product sampling and community engagement driving trial and brand awareness.",color:"#84CC16"},{id:8,image:jh,name:"Vibe",category:"Lifestyle",description:"High-energy brand activations and experiential events connecting with youth audiences.",color:"#06B6D4"},{id:9,image:yh,name:"Fems",category:"Consumer Goods",description:"Targeted sampling campaigns and in-store promoter deployment for maximum reach.",color:"#EC4899"},{id:10,image:bh,name:"Vivya",category:"Lifestyle & Beauty",description:"Mall and SMMT activations creating memorable brand touchpoints with consumers.",color:"#8B5CF6"},{id:11,image:xh,name:"Uswaththe",category:"Natural Products",description:"Grassroots roadshow campaigns building authentic brand connections across communities.",color:"#F59E0B"}],Ze=xn.length,bn=360/Ze,Th=.04,Eh=.08,Nh=.13,Dh=.9,jd=({onClick:p,color:z,label:A,children:f})=>{const[T,M]=C.useState(!1);return u.jsx("button",{onClick:p,onMouseDown:D=>D.stopPropagation(),onMouseEnter:()=>M(!0),onMouseLeave:()=>M(!1),"aria-label":A,style:{width:48,height:48,borderRadius:"50%",border:`1px solid ${T&&z?`${z}55`:"rgba(255,255,255,0.14)"}`,background:T&&z?`${z}20`:"rgba(255,255,255,0.05)",color:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(12px)",transition:"border-color 0.3s ease, background 0.3s ease",flexShrink:0},children:f})},Ch=()=>{const[p,z]=C.useState(!1),[A,f]=C.useState(!1),[T,M]=C.useState(0),[D,L]=C.useState(!1),U=C.useRef(0),G=C.useRef(0),ct=C.useRef(null),B=C.useRef(!1),nt=C.useRef(!1),Ht=C.useRef(0),Ot=C.useRef(0),Nt=C.useRef(0),de=C.useRef(0),me=C.useRef(null),ze=C.useRef(null),wt=C.useRef(null),ve=p?260:A?360:440,Ae=p?140:A?180:210,Zt=p?155:A?200:230;C.useEffect(()=>{const R=()=>{z(window.innerWidth<=767),f(window.innerWidth>767&&window.innerWidth<=1024)};return R(),window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[]),C.useEffect(()=>{const R=wt.current;if(!R)return;const y=j=>{B.current&&(j.preventDefault(),Te(j.touches[0].clientX))};return R.addEventListener("touchmove",y,{passive:!1}),()=>R.removeEventListener("touchmove",y)},[]),C.useEffect(()=>{const R=()=>{const j=(U.current%360+360)%360;let w=Math.round(j/bn)*bn-j;w>180&&(w-=360),w<-180&&(w+=360),ct.current=U.current+w,G.current=0},y=()=>{if(!B.current)if(ct.current!==null){const tt=ct.current-U.current;Math.abs(tt)<Eh?(U.current=ct.current,ct.current=null):U.current+=tt*Nh}else Math.abs(G.current)>.05?(G.current*=Dh,U.current+=G.current,Math.abs(G.current)<=.05&&R()):nt.current||(U.current-=Th);ze.current&&(ze.current.style.transform=`rotateY(${U.current}deg)`);const j=(U.current%360+360)%360,w=Math.round(j/bn)%Ze,$=(Ze-w)%Ze;$!==de.current&&(de.current=$,M($)),me.current=requestAnimationFrame(y)};return me.current=requestAnimationFrame(y),()=>{me.current&&cancelAnimationFrame(me.current)}},[]);const _t=R=>{const y=(U.current%360+360)%360;let j=(Ze-R)*bn-y;j>180&&(j-=360),j<-180&&(j+=360),ct.current=U.current+j,G.current=0},Rt=()=>_t((de.current+1)%Ze),Me=()=>_t((de.current-1+Ze)%Ze),ya=R=>{B.current=!0,Ht.current=R,Ot.current=Date.now(),Nt.current=0,G.current=0,ct.current=null,L(!0)},Te=R=>{if(!B.current)return;const y=R-Ht.current,j=Math.max(Date.now()-Ot.current,1);G.current=y/j*12,U.current+=y*.28,Nt.current+=Math.abs(y),Ht.current=R,Ot.current=Date.now()},Dt=()=>{B.current&&(B.current=!1,L(!1))},La=R=>{Nt.current<5&&_t(R)},Ct=xn[T];return u.jsxs("div",{style:{position:"relative",width:"100%",padding:p?"40px 16px 60px":"60px 40px 80px",display:"flex",flexDirection:"column",alignItems:"center",gap:p?"32px":"44px",userSelect:"none",overflow:"hidden",fontFamily:"'Outfit', -apple-system, sans-serif"},onKeyDown:R=>{R.key==="ArrowRight"&&Rt(),R.key==="ArrowLeft"&&Me()},tabIndex:0,"aria-label":"Brand partners carousel",children:[u.jsx("div",{style:{position:"absolute",top:"25%",left:"50%",width:p?"420px":"760px",height:p?"320px":"560px",transform:"translate(-50%, -50%)",background:`radial-gradient(ellipse, ${Ct?.color}22 0%, transparent 65%)`,filter:"blur(80px)",pointerEvents:"none",transition:"background 0.9s ease",zIndex:0}}),u.jsx("div",{ref:wt,style:{position:"relative",width:"100%",height:Zt+40,display:"flex",alignItems:"center",justifyContent:"center",perspective:p?"900px":A?"1400px":"1900px",zIndex:5,cursor:D?"grabbing":"grab"},onMouseEnter:()=>{nt.current=!0},onMouseLeave:()=>{nt.current=!1,Dt()},onMouseDown:R=>ya(R.clientX),onMouseMove:R=>Te(R.clientX),onMouseUp:Dt,onTouchStart:R=>{nt.current=!0,ya(R.touches[0].clientX)},onTouchEnd:()=>{Dt(),nt.current=!1},children:u.jsx("div",{ref:ze,style:{position:"relative",width:Ae,height:Zt,transformStyle:"preserve-3d"},children:xn.map((R,y)=>{const j=y===T;return u.jsxs("div",{style:{position:"absolute",inset:0,transform:`rotateY(${y*bn}deg) translateZ(${ve}px)`,backfaceVisibility:"hidden",borderRadius:18,overflow:"hidden",cursor:"pointer",transition:"opacity 0.5s ease, filter 0.5s ease, box-shadow 0.5s ease",opacity:j?1:.4,filter:j?"none":"brightness(0.4) saturate(0.5)",boxShadow:j?`0 0 50px ${R.color}45, 0 24px 60px rgba(0,0,0,0.65), inset 0 0 0 1.5px ${R.color}35`:"0 8px 24px rgba(0,0,0,0.5)",background:`radial-gradient(ellipse at 50% 35%, ${R.color}18 0%, rgba(10,10,18,0.97) 65%)`},onClick:()=>La(y),children:[u.jsx("div",{style:{width:"100%",height:"100%",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",padding:36},children:u.jsx("img",{src:R.image,alt:R.name,draggable:!1,style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",filter:"drop-shadow(0 2px 10px rgba(0,0,0,0.55))"}})}),j&&u.jsx("div",{style:{position:"absolute",inset:0,borderRadius:18,border:`1.5px solid ${R.color}60`,pointerEvents:"none"}})]},R.id)})})}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:14,maxWidth:480,width:"100%",zIndex:10,textAlign:"center"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,fontSize:11,letterSpacing:"3px",color:"rgba(255,255,255,0.3)"},children:[u.jsx("span",{style:{color:Ct?.color,fontWeight:700,fontSize:13},children:String(T+1).padStart(2,"0")}),u.jsx("span",{style:{display:"inline-block",width:28,height:1,background:"rgba(255,255,255,0.15)"}}),u.jsx("span",{children:String(Ze).padStart(2,"0")})]}),u.jsx("span",{style:{fontSize:10,letterSpacing:"4px",textTransform:"uppercase",color:Ct?.color,fontWeight:600,transition:"color 0.5s ease"},children:Ct?.category}),u.jsx("span",{style:{display:"block",fontSize:p?38:52,fontFamily:"'Playfair Display', Georgia, serif",fontWeight:400,color:"#ffffff",lineHeight:1.1,letterSpacing:"-0.5px",transition:"all 0.4s ease"},children:Ct?.name}),u.jsx("div",{style:{width:36,height:2,borderRadius:2,background:Ct?.color??"#ffffff",transition:"background 0.5s ease"}}),u.jsx("p",{style:{fontSize:p?13:14,color:"rgba(255,255,255,0.45)",lineHeight:1.85,margin:0,transition:"all 0.4s ease",minHeight:p?0:52},children:Ct?.description}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:p?14:18,marginTop:8},children:[u.jsx(jd,{onClick:Me,color:Ct?.color,label:"Previous brand",children:u.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"15 18 9 12 15 6"})})}),u.jsx("div",{style:{display:"flex",alignItems:"center",gap:6},children:xn.map((R,y)=>u.jsx("button",{onClick:()=>_t(y),onMouseDown:j=>j.stopPropagation(),"aria-label":`Go to ${xn[y].name}`,style:{width:y===T?22:6,height:6,borderRadius:3,border:"none",padding:0,cursor:"pointer",transition:"width 0.35s cubic-bezier(0.4,0,0.2,1), background 0.4s ease",background:y===T?Ct?.color??"#ffffff":"rgba(255,255,255,0.18)"}},y))}),u.jsx(jd,{onClick:Rt,color:Ct?.color,label:"Next brand",children:u.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"9 18 15 12 9 6"})})})]})]}),u.jsx("style",{children:`
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `})]})},Oh="/Strabso/assets/welcome-DghvDHQu.png",wh=(p=.1)=>{const z=C.useRef(null),[A,f]=C.useState(!1);return C.useEffect(()=>{const T=new IntersectionObserver(([M])=>{M.isIntersecting&&f(!0)},{threshold:p});return z.current&&T.observe(z.current),()=>T.disconnect()},[p]),{ref:z,isInView:A}},Uh=()=>u.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[u.jsx("circle",{cx:"24",cy:"24",r:"16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),u.jsx("circle",{cx:"24",cy:"24",r:"8",stroke:"currentColor",strokeWidth:"2",fill:"none"}),u.jsx("circle",{cx:"24",cy:"24",r:"3",fill:"currentColor"}),u.jsx("path",{d:"M24 4V8M24 40V44M4 24H8M40 24H44",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),u.jsx("path",{d:"M38 10L35 13M13 35L10 38M38 38L35 35M13 13L10 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),Bh=()=>u.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[u.jsx("rect",{x:"6",y:"16",width:"36",height:"28",rx:"2",stroke:"currentColor",strokeWidth:"2",fill:"none"}),u.jsx("path",{d:"M6 16L24 4L42 16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u.jsx("rect",{x:"14",y:"28",width:"8",height:"16",rx:"1",stroke:"currentColor",strokeWidth:"2",fill:"none"}),u.jsx("rect",{x:"26",y:"24",width:"10",height:"8",rx:"1",stroke:"currentColor",strokeWidth:"2",fill:"none"}),u.jsx("path",{d:"M16 24H20M28 36H34",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),Hh=()=>u.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[u.jsx("rect",{x:"6",y:"18",width:"28",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"2",fill:"none"}),u.jsx("path",{d:"M34 24H42V32C42 33.1046 41.1046 34 40 34H34V24Z",stroke:"currentColor",strokeWidth:"2",fill:"none"}),u.jsx("circle",{cx:"14",cy:"36",r:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"}),u.jsx("circle",{cx:"30",cy:"36",r:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"}),u.jsx("path",{d:"M12 18V12L20 8L28 12V18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),_h=()=>u.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[u.jsx("path",{d:"M12 8H36C38.2091 8 40 9.79086 40 12V20L24 28L8 20V12C8 9.79086 9.79086 8 12 8Z",stroke:"currentColor",strokeWidth:"2",fill:"none"}),u.jsx("path",{d:"M8 20V36C8 38.2091 9.79086 40 12 40H36C38.2091 40 40 38.2091 40 36V20",stroke:"currentColor",strokeWidth:"2",fill:"none"}),u.jsx("circle",{cx:"24",cy:"28",r:"4",fill:"currentColor"}),u.jsx("path",{d:"M16 16H32",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),Rh=()=>u.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[u.jsx("rect",{x:"4",y:"28",width:"12",height:"16",rx:"1",stroke:"currentColor",strokeWidth:"2",fill:"none"}),u.jsx("rect",{x:"18",y:"20",width:"12",height:"24",rx:"1",stroke:"currentColor",strokeWidth:"2",fill:"none"}),u.jsx("rect",{x:"32",y:"12",width:"12",height:"32",rx:"1",stroke:"currentColor",strokeWidth:"2",fill:"none"}),u.jsx("path",{d:"M10 4L24 10L38 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),u.jsx("circle",{cx:"38",cy:"8",r:"3",fill:"currentColor"})]}),Lh=()=>u.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[u.jsx("rect",{x:"6",y:"12",width:"36",height:"30",rx:"3",stroke:"currentColor",strokeWidth:"2",fill:"none"}),u.jsx("path",{d:"M6 20H42",stroke:"currentColor",strokeWidth:"2"}),u.jsx("path",{d:"M14 6V14M34 6V14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),u.jsx("circle",{cx:"16",cy:"28",r:"2",fill:"currentColor"}),u.jsx("circle",{cx:"24",cy:"28",r:"2",fill:"currentColor"}),u.jsx("circle",{cx:"32",cy:"28",r:"2",fill:"currentColor"}),u.jsx("circle",{cx:"16",cy:"36",r:"2",fill:"currentColor"}),u.jsx("circle",{cx:"24",cy:"36",r:"2",fill:"currentColor"})]}),Yh=()=>u.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[u.jsx("path",{d:"M6 20L24 8L42 20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u.jsx("rect",{x:"6",y:"20",width:"36",height:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"}),u.jsx("rect",{x:"10",y:"24",width:"6",height:"16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),u.jsx("rect",{x:"21",y:"24",width:"6",height:"16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),u.jsx("rect",{x:"32",y:"24",width:"6",height:"16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),u.jsx("rect",{x:"6",y:"40",width:"36",height:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"})]}),qh=()=>u.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[u.jsx("circle",{cx:"24",cy:"14",r:"8",stroke:"currentColor",strokeWidth:"2",fill:"none"}),u.jsx("path",{d:"M12 44V38C12 33.5817 15.5817 30 20 30H28C32.4183 30 36 33.5817 36 38V44",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),u.jsx("path",{d:"M36 14L44 10M36 18L44 22",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),u.jsx("circle",{cx:"44",cy:"16",r:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"})]}),Gh=({service:p,onClose:z})=>(C.useEffect(()=>{const A=f=>{f.key==="Escape"&&z()};return document.addEventListener("keydown",A),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",A),document.body.style.overflow=""}},[z]),u.jsx("div",{className:"modal-backdrop",onClick:z,role:"dialog","aria-modal":"true",children:u.jsxs("div",{className:"modal-panel",style:{"--accent":p.accent},onClick:A=>A.stopPropagation(),children:[u.jsx("div",{className:"modal-glow"}),u.jsx("button",{className:"modal-close",onClick:z,"aria-label":"Close",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",width:"20",height:"20",children:u.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),u.jsxs("div",{className:"modal-header-row",children:[u.jsxs("div",{className:"modal-icon-wrapper",children:[u.jsx("div",{className:"modal-icon-ring"}),p.icon]}),u.jsxs("div",{children:[u.jsx("h2",{className:"modal-title",children:p.title}),u.jsx("div",{className:"modal-divider"})]})]}),u.jsx("p",{className:"modal-description",children:p.description}),u.jsx("div",{className:"modal-stats",children:p.stats.map((A,f)=>u.jsxs("div",{className:"modal-stat",children:[u.jsx("span",{className:"modal-stat-value",children:A.value}),u.jsx("span",{className:"modal-stat-label",children:A.label})]},f))}),u.jsxs("div",{className:"modal-highlights",children:[u.jsx("p",{className:"modal-highlights-title",children:"What's included"}),u.jsx("ul",{className:"modal-highlights-list",children:p.highlights.map((A,f)=>u.jsxs("li",{className:"modal-highlight-item",children:[u.jsx("span",{className:"modal-highlight-dot"}),A]},f))})]}),u.jsx("button",{className:"modal-cta",onClick:z,children:"Got it"})]})})),Xh=({service:p,index:z,isInView:A,onExplore:f})=>{const[T,M]=C.useState(!1);return u.jsx("div",{className:"service-card",style:{"--delay":`${z*.1}s`,"--accent":p.accent},onMouseEnter:()=>M(!0),onMouseLeave:()=>M(!1),children:u.jsxs("div",{className:`card-inner ${A?"animate-in":""}`,children:[u.jsx("div",{className:"card-bg"}),u.jsx("div",{className:"card-glow"}),u.jsx("div",{className:"particles",children:[...Array(5)].map((D,L)=>u.jsx("span",{className:"particle",style:{"--i":L}},L))}),u.jsxs("div",{className:"card-content",children:[u.jsxs("div",{className:`icon-wrapper ${T?"hovered":""}`,children:[u.jsx("div",{className:"icon-ring"}),u.jsx("div",{className:"icon-ring icon-ring-2"}),p.icon]}),u.jsx("h3",{className:"card-title",children:p.title}),u.jsx("p",{className:"card-description",children:p.description}),u.jsx("div",{className:"card-footer",children:u.jsxs("button",{className:"learn-more",onClick:()=>f(p),children:["Explore",u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",className:"arrow-icon",children:u.jsx("path",{d:"M5 12H19M19 12L12 5M19 12L12 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]}),u.jsx("div",{className:"corner-accent"})]})})},Qh=()=>{const{ref:p,isInView:z}=wh(.1),[A,f]=C.useState(null),T=[{id:1,icon:u.jsx(Uh,{}),title:"Brand Activations",description:"We bring your brand to life through engaging, on-ground experiences that capture attention, create emotional impact, and inspire meaningful connections with your target audience.",accent:"#4294f7",highlights:["Tailored on-ground activation strategies","Trained brand ambassador teams","Real-time performance tracking","Post-activation analytics & reporting"],stats:[{value:"200+",label:"Activations Done"},{value:"9",label:"Provinces Covered"},{value:"98%",label:"Client Satisfaction"}]},{id:2,icon:u.jsx(Bh,{}),title:"Mall Activations",description:"Strategic mall activations that maximize footfall and engagement, creating memorable brand experiences in high-traffic retail environments across Sri Lanka.",accent:"#8B5CF6",highlights:["Premium mall locations island-wide","Interactive consumer engagement zones","Footfall & conversion measurement","Fully managed setup and teardown"],stats:[{value:"50+",label:"Mall Venues"},{value:"1M+",label:"Consumers Reached"},{value:"3x",label:"Avg. Footfall Boost"}]},{id:3,icon:u.jsx(Hh,{}),title:"Roadshows & SMMT Activations",description:"Mobile marketing excellence with nationwide roadshows and SMMT activations, taking your brand directly to communities across all 9 provinces.",accent:"#EC4899",highlights:["Full nationwide route planning","Custom branded vehicles & structures","Community engagement at grassroots level","Live reporting from each location"],stats:[{value:"9",label:"Provinces Reached"},{value:"300+",label:"Locations Visited"},{value:"500K+",label:"People Engaged"}]},{id:4,icon:u.jsx(_h,{}),title:"Sampling Campaigns",description:"Product sampling campaigns that put your offerings directly in the hands of consumers, driving trial, awareness, and conversion effectively.",accent:"#F59E0B",highlights:["Targeted demographic profiling","High-volume sample distribution","Consumer feedback collection","Conversion rate optimisation"],stats:[{value:"2M+",label:"Samples Distributed"},{value:"40%",label:"Avg. Trial-to-Purchase"},{value:"100+",label:"Brands Supported"}]},{id:5,icon:u.jsx(Rh,{}),title:"Selling Operations",description:"End-to-end selling operations with trained teams that drive sales, manage distribution, and deliver measurable results for your brand.",accent:"#10B981",highlights:["Dedicated trained sales teams","Territory-based coverage planning","Daily sales reporting & KPIs","Flexible short & long-term deployment"],stats:[{value:"150+",label:"Sales Specialists"},{value:"25%",label:"Avg. Sales Uplift"},{value:"60+",label:"Active Clients"}]},{id:6,icon:u.jsx(Lh,{}),title:"Corporate & Public Events",description:"From corporate gatherings to large-scale public events, we plan, manage, and execute seamless experiences that leave lasting impressions.",accent:"#06B6D4",highlights:["End-to-end event planning & logistics","Venue sourcing and setup","AV, staging & production management","Guest experience & crowd management"],stats:[{value:"120+",label:"Events Executed"},{value:"50K+",label:"Max Event Attendance"},{value:"100%",label:"On-time Delivery"}]},{id:7,icon:u.jsx(Yh,{}),title:"Government & Institutional Activations",description:"Specialized activations for government and institutional clients, leveraging our strong relationships and expertise in public sector engagement.",accent:"#EF4444",highlights:["Deep public sector expertise","Compliance-ready execution frameworks","Multi-stakeholder coordination","Nationwide institutional reach"],stats:[{value:"30+",label:"Govt. Projects"},{value:"25",label:"Districts Covered"},{value:"10+",label:"Ministries Served"}]},{id:8,icon:u.jsx(qh,{}),title:"Promoter Deployment Projects",description:"Long-term promoter deployment solutions with trained brand ambassadors who represent your brand professionally across retail and field locations.",accent:"#14B8A6",highlights:["Rigorous promoter screening & training","Ongoing performance monitoring","Retail & field deployment flexibility","Dedicated account management"],stats:[{value:"500+",label:"Active Promoters"},{value:"1000+",label:"Retail Outlets Covered"},{value:"95%",label:"Retention Rate"}]}];return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`

        .services-section {
          --bg-primary: transparent;
          --bg-secondary: transparent;
          --text-primary: #f8fafc;
          --text-secondary: #fbfbfb;
          --border-color: rgba(148, 163, 184, 0.15);
          
          font-family: 'Outfit', sans-serif;
          background: transparent;
          min-height: 100vh;
          padding: 6rem 2rem;
          position: relative;
          overflow: hidden;
        }

        /* Animated background mesh - disabled for transparent mode */
        .bg-mesh {
          display: none;
        }

        @keyframes meshMove {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        /* Grid pattern overlay - disabled for transparent mode */
        .grid-pattern {
          display: none;
        }

        .services-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 1.25rem;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #f20000;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.6s ease forwards;
        }

        .section-label::before {
          content: '';
          width: 8px;
          height: 8px;
          background: #ff0505;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 0.8s ease 0.2s forwards;
        }

        .section-title span {
          background: linear-gradient(135deg, #f53d00, #60fa4b, #f3ff06);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: white !important;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 0.8s ease 0.4s forwards;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }

        /* Service Card */
        .service-card {
          position: relative;
          perspective: 1000px;
        }

        .card-inner {
          position: relative;
          padding: 2.5rem;
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.8),
            rgba(15, 23, 42, 0.4)
          );
          border: 1px solid var(--border-color);
          border-radius: 24px;
          overflow: hidden;
          transform: translateY(60px);
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          min-height: 350px;
          display: flex;
          flex-direction: column;
        }

        .card-inner.animate-in {
          transform: translateY(0);
          opacity: 1;
          transition-delay: var(--delay);
        }

        .card-inner:hover {
          transform: translateY(-8px);
          border-color: var(--accent);
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 0 1px var(--accent),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .card-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            transparent 0%,
            rgba(59, 130, 246, 0.05) 50%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .card-inner:hover .card-bg {
          opacity: 1;
        }

        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle at center,
            var(--accent),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .card-inner:hover .card-glow {
          opacity: 0.1;
          animation: glowRotate 8s linear infinite;
        }

        @keyframes glowRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Particles */
        .particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--accent);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .card-inner:hover .particle {
          opacity: 0.6;
          animation: float 3s ease-in-out infinite;
          animation-delay: calc(var(--i) * 0.2s);
        }

        .particle:nth-child(1) { top: 20%; left: 10%; }
        .particle:nth-child(2) { top: 60%; left: 85%; }
        .particle:nth-child(3) { top: 80%; left: 30%; }
        .particle:nth-child(4) { top: 40%; left: 70%; }
        .particle:nth-child(5) { top: 10%; left: 60%; }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.5); }
        }

        /* Card Content */
        .card-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .icon-wrapper {
          position: relative;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: var(--accent);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .icon-wrapper.hovered {
          transform: scale(1.1) rotate(5deg);
        }

        .icon-ring {
          position: absolute;
          inset: 0;
          border: 2px solid var(--accent);
          border-radius: 20px;
          opacity: 0.3;
          transition: all 0.4s ease;
        }

        .icon-ring-2 {
          inset: -8px;
          border-radius: 24px;
          opacity: 0.15;
        }

        .icon-wrapper.hovered .icon-ring {
          transform: rotate(45deg);
          opacity: 0.6;
        }

        .icon-wrapper.hovered .icon-ring-2 {
          transform: rotate(-45deg) scale(1.1);
          opacity: 0.3;
        }

        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
          transition: color 0.3s ease;
        }

        .card-inner:hover .card-title {
          color: var(--accent);
        }

        .card-description {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .card-footer {
          display: flex;
          align-items: center;
          margin-top: auto;
        }

        .learn-more {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .arrow-icon {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .learn-more:hover .arrow-icon {
          transform: translateX(6px);
        }

        .corner-accent {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100px;
          height: 100px;
          background: linear-gradient(
            135deg,
            transparent 50%,
            var(--accent) 50%
          );
          opacity: 0.1;
          transition: all 0.4s ease;
        }

        .card-inner:hover .corner-accent {
          opacity: 0.2;
          width: 120px;
          height: 120px;
        }

        /* Decorative Elements - disabled for transparent mode */
        .floating-shapes {
          display: none;
        }

        .shape {
          display: none;
        }

        /* ========== LARGE DESKTOP (1200px - 1400px) ========== */
        @media screen and (max-width: 1400px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.25rem;
          }

          .card-inner {
            padding: 1.75rem;
            min-height: 300px;
          }
        }

        /* ========== TABLET LANDSCAPE (1024px - 1200px) ========== */
        @media screen and (max-width: 1200px) {
          .services-section {
            padding: 5rem 1.5rem;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .card-inner {
            padding: 2rem;
            min-height: 320px;
          }

          .section-header {
            margin-bottom: 4rem;
          }
        }

        /* ========== TABLET PORTRAIT (768px - 1024px) ========== */
        @media screen and (max-width: 1024px) {
          .services-section {
            padding: 4rem 1.5rem;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .card-inner {
            padding: 1.75rem;
            min-height: 300px;
            border-radius: 20px;
          }

          .icon-wrapper {
            width: 70px;
            height: 70px;
            margin-bottom: 1.25rem;
          }

          .icon-wrapper svg {
            width: 40px;
            height: 40px;
          }

          .card-title {
            font-size: 1.35rem;
            margin-bottom: 0.875rem;
          }

          .card-description {
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 1.25rem;
          }

          .section-header {
            margin-bottom: 3.5rem;
          }

          .section-subtitle {
            font-size: 1rem;
            max-width: 500px;
          }

          .corner-accent {
            width: 80px;
            height: 80px;
          }

          .card-inner:hover .corner-accent {
            width: 100px;
            height: 100px;
          }
        }

        /* ========== MOBILE LANDSCAPE / LARGE MOBILE (576px - 767px) ========== */
        @media screen and (max-width: 767px) {
          .services-section {
            padding: 3.5rem 1.25rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            max-width: 500px;
            margin: 0 auto;
          }

          .card-inner {
            padding: 1.75rem;
            min-height: auto;
            border-radius: 18px;
          }

          /* Disable hover effects on mobile - use active state instead */
          .card-inner:hover {
            transform: none;
          }

          .card-inner:active {
            transform: scale(0.98);
            border-color: var(--accent);
          }

          .icon-wrapper {
            width: 65px;
            height: 65px;
            margin-bottom: 1rem;
          }

          .icon-wrapper svg {
            width: 36px;
            height: 36px;
          }

          .icon-ring-2 {
            inset: -6px;
          }

          .card-title {
            font-size: 1.25rem;
            margin-bottom: 0.75rem;
          }

          .card-description {
            font-size: 0.9rem;
            line-height: 1.6;
            margin-bottom: 1rem;
          }

          .section-header {
            margin-bottom: 3rem;
          }

          .section-label {
            font-size: 0.75rem;
            padding: 0.4rem 1rem;
            gap: 0.5rem;
          }

          .section-label::before {
            width: 6px;
            height: 6px;
          }

          .section-title {
            margin-bottom: 1.25rem;
          }

          .section-subtitle {
            font-size: 0.95rem;
            line-height: 1.6;
            padding: 0 0.5rem;
          }

          .learn-more {
            font-size: 0.8rem;
          }

          .arrow-icon {
            width: 18px;
            height: 18px;
          }

          .corner-accent {
            width: 70px;
            height: 70px;
          }

          /* Reduce particle effects on mobile for performance */
          .particle {
            width: 3px;
            height: 3px;
          }

          /* Disable glow rotation animation on mobile */
          .card-inner:hover .card-glow {
            animation: none;
          }
        }

        /* ========== SMALL MOBILE (up to 480px) ========== */
        @media screen and (max-width: 480px) {
          .services-section {
            padding: 3rem 1rem;
          }

          .services-grid {
            gap: 1rem;
          }

          .card-inner {
            padding: 1.5rem;
            border-radius: 16px;
          }

          .icon-wrapper {
            width: 60px;
            height: 60px;
            margin-bottom: 1rem;
          }

          .icon-wrapper svg {
            width: 32px;
            height: 32px;
          }

          .icon-ring {
            border-width: 1.5px;
            border-radius: 16px;
          }

          .icon-ring-2 {
            inset: -5px;
            border-radius: 18px;
          }

          .card-title {
            font-size: 1.15rem;
            margin-bottom: 0.625rem;
          }

          .card-description {
            font-size: 0.875rem;
            line-height: 1.55;
            margin-bottom: 0.875rem;
          }

          .section-header {
            margin-bottom: 2.5rem;
          }

          .section-label {
            font-size: 0.7rem;
            padding: 0.35rem 0.875rem;
            margin-bottom: 1rem;
          }

          .section-subtitle {
            font-size: 0.9rem;
            line-height: 1.55;
          }

          .learn-more {
            font-size: 0.75rem;
            gap: 0.375rem;
          }

          .arrow-icon {
            width: 16px;
            height: 16px;
          }

          .corner-accent {
            width: 60px;
            height: 60px;
          }

          /* Hide particles on very small screens for performance */
          .particles {
            display: none;
          }

          /* Simplify card background effects */
          .card-glow {
            display: none;
          }
        }

        /* ========== EXTRA SMALL MOBILE (up to 360px) ========== */
        @media screen and (max-width: 360px) {
          .services-section {
            padding: 2.5rem 0.75rem;
          }

          .card-inner {
            padding: 1.25rem;
            border-radius: 14px;
          }

          .icon-wrapper {
            width: 55px;
            height: 55px;
          }

          .icon-wrapper svg {
            width: 28px;
            height: 28px;
          }

          .card-title {
            font-size: 1.1rem;
          }

          .card-description {
            font-size: 0.85rem;
          }

          .section-label {
            font-size: 0.65rem;
          }

          .section-subtitle {
            font-size: 0.85rem;
          }
        }

        /* ========== MODAL ========== */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: backdropIn 0.25s ease;
        }

        @keyframes backdropIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-panel {
          position: relative;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.85));
          border: 1px solid var(--accent);
          border-radius: 28px;
          padding: 3rem 2.5rem 2.5rem;
          max-width: 520px;
          width: 100%;
          overflow: hidden;
          animation: modalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.85) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .modal-glow {
          position: absolute;
          top: -60%;
          left: -40%;
          width: 180%;
          height: 180%;
          background: radial-gradient(circle, var(--accent), transparent 55%);
          opacity: 0.08;
          pointer-events: none;
        }

        .modal-close {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.6);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-close:hover {
          background: rgba(255,255,255,0.14);
          color: white;
        }

        .modal-icon-wrapper {
          position: relative;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          margin-bottom: 1.5rem;
        }

        .modal-icon-ring {
          position: absolute;
          inset: 0;
          border: 2px solid var(--accent);
          border-radius: 20px;
          opacity: 0.35;
        }

        .modal-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 1rem;
        }

        .modal-divider {
          width: 48px;
          height: 3px;
          background: var(--accent);
          border-radius: 2px;
          margin-bottom: 1.25rem;
          opacity: 0.8;
        }

        .modal-description {
          font-size: 1.05rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.72);
          margin-bottom: 2rem;
        }

        .modal-header-row {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          margin-bottom: 1rem;
        }

        .modal-stats {
          display: flex;
          gap: 0;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          overflow: hidden;
        }

        .modal-stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 0.5rem;
          border-right: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
        }

        .modal-stat:last-child {
          border-right: none;
        }

        .modal-stat-value {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent);
          line-height: 1;
          margin-bottom: 0.35rem;
        }

        .modal-stat-label {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.5);
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .modal-highlights {
          margin-bottom: 2rem;
        }

        .modal-highlights-title {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.4);
          margin-bottom: 0.75rem;
        }

        .modal-highlights-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .modal-highlight-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.4;
        }

        .modal-highlight-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
          opacity: 0.85;
        }

        .modal-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 2rem;
          background: var(--accent);
          color: white;
          font-size: 0.95rem;
          font-weight: 600;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.25s ease;
          letter-spacing: 0.02em;
        }

        .modal-cta:hover {
          opacity: 0.88;
          transform: translateY(-2px);
        }

        .learn-more {
          background: none;
          border: none;
          padding: 0;
        }

        /* ========== REDUCED MOTION (Accessibility) ========== */
        @media (prefers-reduced-motion: reduce) {
          .card-inner {
            transition: none;
          }

          .card-inner.animate-in {
            transform: none;
            opacity: 1;
            transition-delay: 0s;
          }

          .section-label,
          .section-title,
          .section-subtitle {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .icon-wrapper {
            transition: none;
          }

          .card-glow,
          .particle,
          .corner-accent {
            animation: none;
          }

          .section-label::before {
            animation: none;
          }
        }

        /* ========== TOUCH DEVICE OPTIMIZATIONS ========== */
        @media (hover: none) and (pointer: coarse) {
          .card-inner:hover {
            transform: none;
            border-color: var(--border-color);
            box-shadow: none;
          }

          .card-inner:hover .card-title {
            color: var(--text-primary);
          }

          .card-inner:hover .card-bg,
          .card-inner:hover .card-glow {
            opacity: 0;
          }

          .card-inner:hover .particle {
            opacity: 0;
          }

          .card-inner:hover .corner-accent {
            width: 100px;
            height: 100px;
            opacity: 0.1;
          }

          .icon-wrapper.hovered {
            transform: none;
          }

          .icon-wrapper.hovered .icon-ring,
          .icon-wrapper.hovered .icon-ring-2 {
            transform: none;
            opacity: 0.3;
          }

          /* Active state for touch */
          .card-inner:active {
            transform: scale(0.98);
            border-color: var(--accent);
            transition: transform 0.1s ease;
          }
        }

        /* ========== LANDSCAPE ORIENTATION ON MOBILE ========== */
        @media screen and (max-height: 500px) and (orientation: landscape) {
          .services-section {
            padding: 2rem 1.5rem;
          }

          .section-header {
            margin-bottom: 2rem;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .card-inner {
            min-height: auto;
            padding: 1.25rem;
          }

          .icon-wrapper {
            width: 50px;
            height: 50px;
            margin-bottom: 0.75rem;
          }

          .icon-wrapper svg {
            width: 28px;
            height: 28px;
          }

          .card-title {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }

          .card-description {
            font-size: 0.8rem;
            line-height: 1.4;
            margin-bottom: 0.75rem;
          }
        }
      `}),u.jsxs("section",{className:"services-section",ref:p,children:[u.jsx("div",{className:"bg-mesh"}),u.jsx("div",{className:"grid-pattern"}),u.jsxs("div",{className:"floating-shapes",children:[u.jsx("div",{className:"shape shape-1"}),u.jsx("div",{className:"shape shape-2"}),u.jsx("div",{className:"shape shape-3"})]}),u.jsxs("div",{className:"services-container",children:[u.jsxs("header",{className:"section-header",children:[u.jsx("span",{className:"section-label",children:"What We Do"}),u.jsxs("h2",{className:"section-title",children:["Your ",u.jsx("span",{children:"360°"})," Brand Partner"]}),u.jsx("p",{className:"section-subtitle",children:"From concept to execution, we deliver end-to-end brand activation and experiential marketing solutions across all 9 provinces of Sri Lanka."})]}),u.jsx("div",{className:"services-grid",children:T.map((M,D)=>u.jsx(Xh,{service:M,index:D,isInView:z,onExplore:f},M.id))})]})]}),A&&u.jsx(Gh,{service:A,onClose:()=>f(null)})]})},Vh=()=>{const[p,z]=C.useState(""),[A,f]=C.useState(0),[T,M]=C.useState(!1),D="Welcome to Strabso",L=100;C.useEffect(()=>{if(A<D.length){const ct=setTimeout(()=>{z(B=>B+D[A]),f(B=>B+1)},L);return()=>clearTimeout(ct)}else M(!0)},[A,D]);const U=C.useCallback(()=>{const ct=document.querySelector(".services-section");ct&&ct.scrollIntoView({behavior:"smooth"})},[]),G=C.useCallback(()=>{const ct=document.querySelector('[data-section="About"]');ct&&ct.scrollIntoView({behavior:"smooth"})},[]);return u.jsxs("div",{className:"home-wrapper home-fade-in",role:"main","aria-label":"Home page",children:[u.jsxs("div",{className:"home-container",children:[u.jsx("div",{className:"home-content",children:u.jsxs("header",{className:"home-header",children:[u.jsxs("h1",{className:"typing-text","aria-label":D,children:[u.jsx("span",{"aria-hidden":"true",children:p}),u.jsx("span",{className:`cursor ${T?"cursor-idle":""}`,"aria-hidden":"true",children:"|"})]}),u.jsxs("p",{className:"subtitle home-subtitle-in",children:["Your gateway to stunning visuals and seamless navigation.",u.jsx("br",{}),"We create unforgettable experiential events."]}),u.jsxs("div",{className:"cta-buttons home-cta-in",children:[u.jsx("button",{className:"primary-btn",onClick:U,"aria-label":"Explore our services",children:"Explore Services"}),u.jsx("button",{className:"secondary-btn",onClick:G,"aria-label":"Contact us",children:"Contact Us"})]})]})}),u.jsx("div",{className:"home-image home-image-in",children:u.jsxs("div",{className:"image-container",children:[u.jsx("img",{src:Oh,alt:"Strabso - Creative event experiences illustration",className:"hero-image",loading:"eager"}),u.jsx("div",{className:"image-glow","aria-hidden":"true"})]})})]}),u.jsx("div",{className:"services-section",children:u.jsx(Qh,{})}),u.jsx("div",{className:"carousel-section",children:u.jsx(Ch,{})})]})},Zh="/Strabso/";function _(p,z){return`${Zh}gallery/${encodeURIComponent(p)}/${encodeURIComponent(z)}`}const zd=[{id:1,title:"Coca Cola Annual Business Con 2025",category:"Business Conference",location:"Colombo",year:"2025",coverImage:_("Coca Cola Annual Business Con 2025","cover.jpg"),photos:[_("Coca Cola Annual Business Con 2025","cover.jpg"),_("Coca Cola Annual Business Con 2025","coca1.jpg"),_("Coca Cola Annual Business Con 2025","coco2.jpg"),_("Coca Cola Annual Business Con 2025","coca3.jpg"),_("Coca Cola Annual Business Con 2025","coca4.jpg")]},{id:2,title:"Elephant House – Vibe Activations",category:"Brand Activation",location:"Island-wide",year:"2024–2025",coverImage:_("Elephant House – Vibe SMMT Activation","cover.jpg"),photos:[_("Elephant House – Vibe SMMT Activation","cover.jpg"),_("Elephant House – Vibe SMMT Activation","eh.jpg"),_("Elephant House – Vibe SMMT Activation","eh2.jpg"),_("Elephant House – Vibe SMMT Activation","movie_cover.jpg"),_("Elephant House – Vibe SMMT Activation","movie_eh.jpg")]},{id:3,title:"Roza Pasta – Christmas Mall Activation",category:"Mall Activation",location:"Colombo",year:"2024",coverImage:_("Roza Pasta – Christmas Mall Activation","cover.jpg"),photos:[_("Roza Pasta – Christmas Mall Activation","cover.jpg"),_("Roza Pasta – Christmas Mall Activation","ro1.jpg"),_("Roza Pasta – Christmas Mall Activation","ro2.png")]},{id:4,title:"Uswatta – Jo-Pet Big Match Selling Operation",category:"Selling Operation",location:"Island-wide",year:"2024",coverImage:_("Uswatta – Jo-Pet Big Match- Selling Operation ","cover.jpg"),photos:[_("Uswatta – Jo-Pet Big Match- Selling Operation ","cover.jpg"),_("Uswatta – Jo-Pet Big Match- Selling Operation ","us1.jpg")]},{id:5,title:"Vivya – MT Activation",category:"Modern Trade Activation",location:"Island-wide",year:"2024",coverImage:_("Vivya – MT Activation ","cover.jpg"),photos:[_("Vivya – MT Activation ","cover.jpg"),_("Vivya – MT Activation ","vv1.jpg"),_("Vivya – MT Activation ","vv2.jpg")]},{id:6,title:"Xtra – SL & AFG Cricket Tournament 2024",category:"Sports Activation",location:"Colombo",year:"2024",coverImage:_("Xtra – SL AFG One Day Cricket Tournament 2024","cover.jpg"),photos:[_("Xtra – SL AFG One Day Cricket Tournament 2024","cover.jpg"),_("Xtra – SL AFG One Day Cricket Tournament 2024","ext1.jpg"),_("Xtra – SL AFG One Day Cricket Tournament 2024","ext2.jpg"),_("Xtra – SL AFG One Day Cricket Tournament 2024","ext3.png")]},{id:7,title:"Maliban – Non Fat Mall Activation",category:"Mall Activation",location:"Colombo",year:"2025",coverImage:_("Maliban - Non Fat Mall Activation","cover.jpg"),photos:[_("Maliban - Non Fat Mall Activation","cover.jpg"),_("Maliban - Non Fat Mall Activation","mal.jpg"),_("Maliban - Non Fat Mall Activation","mal1.jpg")]},{id:8,title:"Anchor – Nallur Festival Door to Door",category:"Door to Door Activation",location:"Jaffna",year:"2025",coverImage:_("Anchor - Nallur Festival - Door to Door Activation","cover.jpg"),photos:[_("Anchor - Nallur Festival - Door to Door Activation","cover.jpg"),_("Anchor - Nallur Festival - Door to Door Activation","ac.jpg")]},{id:9,title:"Kesha – Office Activation",category:"Office Activation",location:"Colombo",year:"2025",coverImage:_("Kesha - Office Activation","cover.jpg"),photos:[_("Kesha - Office Activation","cover.jpg"),_("Kesha - Office Activation","ks1.jpg")]},{id:10,title:"Lanka Soy – Town Activation",category:"Town Activation",location:"Island-wide",year:"2025",coverImage:_("Lanka Soy Town Activation","cover.jpg"),photos:[_("Lanka Soy Town Activation","cover.jpg"),_("Lanka Soy Town Activation","ls.jpg"),_("Lanka Soy Town Activation","ls1.jpg")]},{id:11,title:"Sting – Holy Activation",category:"Brand Activation",location:"Island-wide",year:"2025",coverImage:_("Sting - Holy Activation","cover.jpg"),photos:[_("Sting - Holy Activation","cover.jpg"),_("Sting - Holy Activation","stng.jpg")]},{id:12,title:"HNB – SOLO Merchant Activation",category:"Merchant Activation",location:"Island-wide",year:"2025",coverImage:_("HNB - SOLO Merchant Activation","cover.jpg"),photos:[_("HNB - SOLO Merchant Activation","cover.jpg"),_("HNB - SOLO Merchant Activation","hnb.jpg"),_("HNB - SOLO Merchant Activation","hnb1.jpg")]}],kh=[{number:"100+",label:"Activations"},{number:"25+",label:"Brand Partners"},{number:"9",label:"Provinces"}],Kh=({src:p,className:z})=>{const A=C.useRef(null),[f,T]=C.useState(!1);return C.useEffect(()=>{const M=A.current;if(!M)return;const D=new IntersectionObserver(([L])=>{L.isIntersecting&&(T(!0),D.disconnect())},{rootMargin:"300px"});return D.observe(M),()=>D.disconnect()},[]),u.jsx("div",{ref:A,className:z,style:{backgroundImage:f?`url('${p}')`:"none",backgroundColor:f?void 0:"rgba(255,255,255,0.04)",backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",transition:"background-image 0.3s ease"}})},Jh=({project:p,startIndex:z,onClose:A})=>{const[f,T]=C.useState(z),M=C.useRef(null),D=C.useCallback(()=>T(U=>(U-1+p.photos.length)%p.photos.length),[p.photos.length]),L=C.useCallback(()=>T(U=>(U+1)%p.photos.length),[p.photos.length]);return C.useEffect(()=>{const U=G=>{G.key==="Escape"&&A(),G.key==="ArrowRight"&&L(),G.key==="ArrowLeft"&&D()};return window.addEventListener("keydown",U),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",U),document.body.style.overflow=""}},[A,L,D]),u.jsx("div",{className:"lb-overlay",onClick:A,onTouchStart:U=>{M.current=U.touches[0].clientX},onTouchEnd:U=>{if(M.current===null)return;const G=M.current-U.changedTouches[0].clientX;Math.abs(G)>50&&(G>0?L():D()),M.current=null},children:u.jsxs("div",{className:"lb-box",onClick:U=>U.stopPropagation(),children:[u.jsxs("div",{className:"lb-header",children:[u.jsx("span",{className:"lb-title",children:p.title}),u.jsxs("div",{className:"lb-header-right",children:[u.jsxs("span",{className:"lb-counter",children:[f+1," / ",p.photos.length]}),u.jsx("button",{className:"lb-close",onClick:A,"aria-label":"Close",children:u.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:u.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]})]}),u.jsxs("div",{className:"lb-img-wrap",children:[u.jsx("button",{className:"lb-nav lb-nav-prev",onClick:D,"aria-label":"Previous",children:u.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M15 18L9 12l6-6"})})}),u.jsx("img",{src:p.photos[f],alt:`${p.title} ${f+1}`,className:"lb-img",decoding:"async"},f),u.jsx("button",{className:"lb-nav lb-nav-next",onClick:L,"aria-label":"Next",children:u.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M9 18l6-6-6-6"})})})]}),p.photos.length>1&&u.jsx("div",{className:"lb-thumbs",children:p.photos.map((U,G)=>u.jsx("button",{className:`lb-thumb${G===f?" lb-thumb-active":""}`,onClick:()=>T(G),"aria-label":`Photo ${G+1}`,children:u.jsx("img",{src:U,alt:"",loading:"lazy",decoding:"async"})},G))}),u.jsx("p",{className:"lb-swipe-hint",children:"Swipe to navigate"})]})})},Wh=({project:p,index:z,onOpen:A})=>u.jsxs("article",{className:"pc-card",style:{animationDelay:`${z%4*.08}s`},onClick:()=>A(p.id),role:"button",tabIndex:0,"aria-label":`View ${p.title} gallery`,onKeyDown:f=>f.key==="Enter"&&A(p.id),children:[u.jsxs("div",{className:"pc-img-wrap",children:[u.jsx(Kh,{src:p.coverImage,className:"pc-img"}),u.jsx("div",{className:"pc-overlay"}),u.jsxs("div",{className:"pc-badge",children:[u.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),u.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5",fill:"currentColor"}),u.jsx("path",{d:"M21 15L16 10 5 21",strokeLinecap:"round",strokeLinejoin:"round"})]}),p.photos.length]}),u.jsxs("div",{className:"pc-cta",children:[u.jsx("span",{children:"View Gallery"}),u.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M7 17L17 7M17 7H7M17 7v10"})})]})]}),u.jsxs("div",{className:"pc-info",children:[u.jsx("span",{className:"pc-category",children:p.category}),u.jsx("h3",{className:"pc-title",children:p.title}),u.jsxs("div",{className:"pc-meta",children:[u.jsx("span",{children:p.location}),u.jsx("span",{className:"pc-dot",children:"·"}),u.jsx("span",{children:p.year})]})]})]}),Fh=()=>{const[p,z]=C.useState(null),A=p!=null?zd.find(f=>f.id===p)??null:null;return u.jsxs("div",{className:"proj-page",children:[u.jsx("style",{children:`
        /* ── Page ── */
        .proj-page {
          min-height: 100vh;
          color: #fff;
          font-family: 'Outfit', sans-serif;
          padding: 110px 40px 80px;
        }
        .proj-inner { max-width: 1400px; margin: 0 auto; }

        /* ── Header ── */
        .proj-header { margin-bottom: 56px; }
        .proj-eyebrow {
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #d4af37;
          margin-bottom: 16px;
        }
        .proj-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 500;
          line-height: 1.05;
          margin: 0 0 20px;
          color: #fff;
        }
        .proj-heading em {
          font-style: italic;
          color: #e87f2a;
        }
        .proj-rule {
          width: 60px; height: 2px;
          background: rgba(255,255,255,0.25);
          border: none; margin: 0;
        }

        /* ── Stats strip ── */
        .proj-stats {
          display: flex;
          gap: 0;
          margin-bottom: 64px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          overflow: hidden;
        }
        .proj-stat {
          flex: 1;
          padding: 24px 28px;
          border-right: 1px solid rgba(255,255,255,0.1);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .proj-stat:last-child { border-right: none; }
        .proj-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 500;
          color: #e87f2a;
          line-height: 1;
        }
        .proj-stat-label {
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }

        /* ── Grid ── */
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }

        /* ── Card ── */
        .pc-card {
          cursor: pointer;
          animation: pcFadeUp 0.5s ease both;
          border-radius: 10px;
          overflow: hidden;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .pc-card:hover {
          border-color: rgba(232,127,42,0.4);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        .pc-card:focus-visible {
          outline: 2px solid #e87f2a;
          outline-offset: 2px;
        }
        @keyframes pcFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Card image ── */
        .pc-img-wrap {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
        }
        .pc-img {
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .pc-card:hover .pc-img {
          transform: scale(1.05);
        }
        .pc-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.75) 100%);
        }
        .pc-badge {
          position: absolute;
          top: 12px; right: 12px;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 20px;
          padding: 5px 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 5px;
          color: rgba(255,255,255,0.85);
        }
        .pc-cta {
          position: absolute;
          bottom: 16px; left: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #fff;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .pc-card:hover .pc-cta {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Card info ── */
        .pc-info { padding: 14px 16px 16px; }
        .pc-category {
          display: inline-block;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #e87f2a;
          margin-bottom: 6px;
        }
        .pc-title {
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.9);
          margin: 0 0 8px;
          line-height: 1.4;
        }
        .pc-meta {
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .pc-dot { opacity: 0.4; }

        /* ── Lightbox ── */
        .lb-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.97);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: lbFadeIn 0.25s ease;
        }
        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .lb-box {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 16px 20px 16px;
          box-sizing: border-box;
        }
        .lb-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          flex-shrink: 0;
        }
        .lb-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(16px, 2.5vw, 22px);
          color: rgba(255,255,255,0.9);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 70%;
        }
        .lb-header-right {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }
        .lb-counter {
          font-size: 13px;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.45);
        }
        .lb-close {
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.07);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
          flex-shrink: 0;
        }
        .lb-close:hover { background: rgba(255,255,255,0.18); }
        .lb-img-wrap {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          min-height: 0;
        }
        .lb-img {
          max-width: 92%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 6px;
          animation: lbImgIn 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        @keyframes lbImgIn {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1); }
        }
        .lb-nav {
          position: absolute;
          top: 50%; transform: translateY(-50%);
          width: 52px; height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
          z-index: 2;
        }
        .lb-nav:hover { background: rgba(255,255,255,0.2); }
        .lb-nav-prev { left: 16px; }
        .lb-nav-next { right: 16px; }
        .lb-thumbs {
          display: flex;
          justify-content: center;
          gap: 8px;
          padding: 14px 0 4px;
          overflow-x: auto;
          flex-shrink: 0;
          scrollbar-width: none;
        }
        .lb-thumbs::-webkit-scrollbar { display: none; }
        .lb-thumb {
          width: 56px; height: 42px;
          border-radius: 5px;
          overflow: hidden;
          border: 2px solid transparent;
          cursor: pointer;
          flex-shrink: 0;
          padding: 0;
          background: none;
          opacity: 0.45;
          transition: opacity 0.2s, border-color 0.2s;
        }
        .lb-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .lb-thumb-active { opacity: 1; border-color: #e87f2a; }
        .lb-thumb:hover { opacity: 0.85; }
        .lb-swipe-hint {
          text-align: center;
          font-size: 11px;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.25);
          margin: 6px 0 0;
          flex-shrink: 0;
          display: none;
        }

        /* ── Responsive ── */
        @media (max-width: 1200px) {
          .proj-page { padding: 100px 28px 60px; }
          .proj-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }
        @media (max-width: 900px) {
          .proj-page { padding: 90px 20px 60px; }
          .proj-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .proj-stats { margin-bottom: 40px; }
          .proj-stat { padding: 18px 16px; }
          .proj-header { margin-bottom: 36px; }
        }
        @media (max-width: 600px) {
          .proj-page { padding: 80px 12px 48px; }
          .proj-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .proj-stats { margin-bottom: 28px; border-radius: 10px; }
          .proj-stat { padding: 14px 12px; gap: 2px; }
          .proj-stat-num { font-size: 26px; }
          .proj-stat-label { font-size: 9px; letter-spacing: 1px; }
          .proj-heading { font-size: clamp(32px, 9vw, 44px); }
          .proj-header { margin-bottom: 24px; }
          .pc-img-wrap { aspect-ratio: 1/1; }
          .pc-info { padding: 10px 12px 12px; }
          .pc-title { font-size: 12px; margin-bottom: 4px; }
          .pc-category { font-size: 9px; margin-bottom: 4px; }
          .pc-meta { font-size: 10px; }
          .pc-cta { display: none; }
          .lb-nav { width: 40px; height: 40px; }
          .lb-nav-prev { left: 6px; }
          .lb-nav-next { right: 6px; }
          .lb-swipe-hint { display: block; }
          .lb-nav { display: none; }
          .lb-box { padding: 12px 14px 12px; }
          .lb-thumb { width: 48px; height: 36px; }
        }
        @media (max-width: 380px) {
          .proj-grid { grid-template-columns: 1fr; gap: 14px; }
          .pc-img-wrap { aspect-ratio: 16/9; }
        }
        @media (hover: none) and (pointer: coarse) {
          .pc-card:hover { transform: none; }
          .pc-cta { opacity: 1; transform: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pc-card { animation: none; opacity: 1; }
          .lb-overlay, .lb-img { animation: none; }
        }
      `}),u.jsxs("div",{className:"proj-inner",children:[u.jsxs("header",{className:"proj-header",children:[u.jsx("p",{className:"proj-eyebrow",children:"Our Work"}),u.jsxs("h1",{className:"proj-heading",children:["Successful ",u.jsx("em",{children:"Projects"})]}),u.jsx("hr",{className:"proj-rule"})]}),u.jsx("div",{className:"proj-stats",role:"list",children:kh.map(f=>u.jsxs("div",{className:"proj-stat",role:"listitem",children:[u.jsx("span",{className:"proj-stat-num",children:f.number}),u.jsx("span",{className:"proj-stat-label",children:f.label})]},f.label))}),u.jsx("div",{className:"proj-grid",children:zd.map((f,T)=>u.jsx(Wh,{project:f,index:T,onOpen:M=>z(M)},f.id))})]}),A&&u.jsx(Jh,{project:A,startIndex:0,onClose:()=>z(null)})]})},$h=()=>{const p=[{icon:u.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),u.jsx("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]}),label:"PHONE",value:"0777 188 485",href:"tel:+94777188485"},{icon:u.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),u.jsx("polyline",{points:"22,6 12,13 2,6"})]}),label:"EMAIL",value:"info@strabso.lk",href:"mailto:info@strabso.lk"},{icon:u.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),u.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),label:"LOCATION",value:"Colombo, Sri Lanka",href:"https://maps.google.com/?q=Colombo,Sri+Lanka"}],z={wrapper:{background:"transparent",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",position:"relative",overflow:"hidden",fontFamily:"'Outfit', sans-serif"},container:{maxWidth:"1000px",width:"100%",textAlign:"center",position:"relative",zIndex:1},headerSection:{marginBottom:"60px"},title:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(36px, 6vw, 56px)",fontWeight:500,color:"#ffffff",margin:"0 0 8px 0",letterSpacing:"-1px",opacity:0},subtitle:{fontFamily:"'Outfit', sans-serif",fontSize:"16px",fontWeight:300,color:"rgba(255, 255, 255, 0.6)",maxWidth:"500px",margin:"0 auto",lineHeight:1.7,opacity:0},contactGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"30px",padding:"0 20px"},contactCard:{textDecoration:"none",display:"flex",flexDirection:"column",alignItems:"center",padding:"40px 30px",background:"transparent",borderRadius:"2px",cursor:"pointer",opacity:0},iconContainer:{width:"80px",height:"80px",borderRadius:"50%",border:"1px solid rgba(255, 255, 255, 0.2)",background:"transparent",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"24px",color:"rgba(255, 255, 255, 0.7)"},contactLabel:{fontFamily:"'Outfit', sans-serif",fontSize:"11px",fontWeight:400,letterSpacing:"3px",color:"rgba(255, 255, 255, 0.5)",marginBottom:"12px",margin:"0 0 12px 0"},contactValue:{fontFamily:"'Cormorant Garamond', serif",fontSize:"18px",fontWeight:400,color:"rgba(255, 255, 255, 0.85)",margin:0}};return u.jsxs("div",{style:z.wrapper,className:"contact-wrapper",children:[u.jsx("style",{children:`
        .contact-item {
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .contact-item:hover {
          transform: translateY(-8px);
        }
        
        .contact-item:hover .icon-container {
          border-color: rgba(232, 127, 42, 0.5);
        }
        
        .contact-item:hover .icon-container svg {
          color: #e87f2a;
        }
        
        .contact-item:hover .contact-value {
          color: #e87f2a;
        }
        
        .icon-container {
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .icon-container svg {
          transition: color 0.4s ease;
        }
        
        .contact-value {
          transition: color 0.3s ease;
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .animate-in {
          animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }
        .delay-6 { animation-delay: 0.6s; }

        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .contact-wrapper { padding: 60px 24px !important; }
          .contact-grid { gap: 20px !important; padding: 0 !important; }
        }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          .contact-wrapper { padding: 48px 16px !important; }
          .contact-header  { margin-bottom: 36px !important; }
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            padding: 0 !important;
          }
          .contact-card { padding: 28px 20px !important; }
          .contact-item:hover { transform: none; }
        }

        /* ── Touch devices ── */
        @media (hover: none) and (pointer: coarse) {
          .contact-item:hover { transform: none; }
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .animate-in { animation: none; opacity: 1; }
        }
      `}),u.jsxs("div",{style:z.container,children:[u.jsxs("div",{style:z.headerSection,className:"contact-header",children:[u.jsx("h1",{className:"animate-in delay-1",style:z.title,children:"Let's Connect"}),u.jsx("p",{className:"animate-in delay-2",style:z.subtitle,children:"Ready to activate your brand across Sri Lanka? Get in touch with us to discuss your next activation, campaign, or event. We're here to bring your vision to life."})]}),u.jsx("div",{style:z.contactGrid,className:"contact-grid",children:p.map((A,f)=>u.jsxs("a",{href:A.href,className:`contact-item contact-card animate-in delay-${f+3}`,style:z.contactCard,children:[u.jsx("div",{className:"icon-container",style:z.iconContainer,children:A.icon}),u.jsx("h3",{style:z.contactLabel,children:A.label}),u.jsx("p",{className:"contact-value",style:z.contactValue,children:A.value})]},f))})]})]})},Ih=()=>{const p=C.useRef(null),[z,A]=C.useState(!1);C.useEffect(()=>{const M=()=>{A(window.innerWidth<=767)};return M(),window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)},[]),C.useEffect(()=>{const M=new IntersectionObserver(L=>{L.forEach(U=>{U.isIntersecting&&U.target.classList.add("animate-in")})},{threshold:.1});return document.querySelectorAll(".fade-up").forEach(L=>M.observe(L)),()=>M.disconnect()},[]);const f=[{icon:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"value-svg-icon",children:u.jsx("path",{d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",strokeLinecap:"round",strokeLinejoin:"round"})}),title:"Innovation",description:"Innovative event and activation concepts that set your brand apart from the competition."},{icon:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"value-svg-icon",children:u.jsx("path",{d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",strokeLinecap:"round",strokeLinejoin:"round"})}),title:"Brand-First",description:"Deep brand-first strategic thinking — not just BTL execution, but complete brand elevation."},{icon:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"value-svg-icon",children:u.jsx("path",{d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",strokeLinecap:"round",strokeLinejoin:"round"})}),title:"Regional Reach",description:"Strong North & East regional resource network with island-wide coverage across Sri Lanka."},{icon:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"value-svg-icon",children:u.jsx("path",{d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",strokeLinecap:"round",strokeLinejoin:"round"})}),title:"Government Relations",description:"Government sector approvals, involvement & collaborations for seamless execution."}],T=[{year:"2020",event:"Strabso Founded",description:"Started with a vision to transform brand activations in Sri Lanka"},{year:"2021",event:"Major Brand Partnerships",description:"Partnered with Coca-Cola, HNB, and leading FMCG brands"},{year:"2022",event:"North & East Expansion",description:"Established strong presence in Northern and Eastern regions"},{year:"2023",event:"Corporate Events",description:"Executed Coca-Cola Annual Sales Conference and Award Ceremonies"},{year:"2024",event:"360° Solutions",description:"Launched complete end-to-end brand activation services"},{year:"2025",event:"Industry Leader",description:"Targeting top 5 agency position with 360° client solutions"}];return u.jsxs("div",{className:"about-us-page",children:[u.jsx("style",{children:`

        .about-us-page {
          --color-bg: transparent;
          --color-bg-secondary: rgba(18, 18, 26, 0.85);
          --color-text: #ffffff;
          --color-text-muted: #a0a0b0;
          --color-accent: #00ff84;
          --color-accent-hover: #fb923c;
          --color-border: rgba(255, 255, 255, 0.1);
          --font-display: 'Playfair Display', Georgia, serif;
          --font-body: 'Outfit', sans-serif;

          background-color: transparent;
          color: var(--color-text);
          font-family: var(--font-body);
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Value SVG Icon Styling */
        .value-svg-icon {
          width: 32px;
          height: 32px;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 2rem;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, transparent 50%),
                      linear-gradient(225deg, rgba(139, 92, 246, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 900px;
          padding: 2rem;
        }

        .hero-label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.25rem;
          background: rgba(249, 115, 22, 0.15);
          border: 1px solid rgba(249, 115, 22, 0.3);
          border-radius: 100px;
          font-size: 0.875rem;
          color: var(--color-accent);
          margin-bottom: 2rem;
          animation: fadeInDown 0.8s ease-out;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 8vw, 6rem);
          font-weight: 500;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .hero-title .accent {
          font-style: italic;
          color: var(--color-accent);
        }

        .hero-description {
          font-size: clamp(1rem, 3vw, 1.25rem);
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto 3rem;
          line-height: 1.8;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-muted);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          animation: fadeIn 1s ease-out 1s both;
        }

        .scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, var(--color-accent), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        /* Story Section */
        .story-section {
          padding: 6rem 1.5rem;
          position: relative;
        }

        .story-container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
        }

        .story-heading {
          text-align: center;
        }

        .story-heading h2 {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 500;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .story-heading h2 .accent {
          font-style: italic;
          color: var(--color-accent);
        }

        .story-heading-line {
          width: 60px;
          height: 2px;
          background: var(--color-accent);
          margin: 0 auto;
          opacity: 0.6;
        }

        .vision-mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          width: 100%;
        }

        .vm-card {
          padding: 2.5rem;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }

        .vm-card:hover {
          border-color: rgba(255,255,255,0.18);
          transform: translateY(-4px);
        }

        .vm-card-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(255,255,255,0.06);
          color: var(--color-accent);
          flex-shrink: 0;
        }

        .vm-card-label {
          font-size: 0.75rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--color-accent);
          font-weight: 500;
        }

        .vm-card-text {
          color: var(--color-text-muted);
          font-size: clamp(0.95rem, 1.8vw, 1.05rem);
          line-height: 1.9;
        }

        .founder-quote {
          width: 100%;
          padding: 2rem 2.5rem;
          background: var(--color-bg-secondary);
          border-left: 3px solid var(--color-accent);
          border-radius: 0 16px 16px 0;
        }

        .founder-quote blockquote {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .founder-quote cite {
          color: var(--color-accent);
          font-style: normal;
          font-size: 0.9rem;
        }

        /* Values Section */
        .values-section {
          padding: 6rem 1.5rem;
          background: var(--color-bg-secondary);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .values-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--color-border), transparent);
        }

        .section-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 4rem;
          padding: 0 1rem;
        }

        .section-header h2 {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 2.75rem);
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .section-header h2 .accent {
          font-style: italic;
          color: var(--color-accent);
        }

        .section-header p {
          color: var(--color-text-muted);
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          line-height: 1.7;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .value-card {
          padding: 2rem;
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          text-align: center;
          transition: all 0.4s ease;
        }

        .value-card:hover {
          border-color: var(--color-accent);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(249, 115, 22, 0.1);
        }

        .value-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(249, 115, 22, 0.05));
          border-radius: 50%;
          color: var(--color-accent);
          margin-bottom: 1.5rem;
        }

        .value-card h3 {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 500;
          margin-bottom: 0.75rem;
        }

        .value-card p {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          line-height: 1.7;
        }

        /* Timeline Section */
        .timeline-section {
          padding: 6rem 1.5rem;
          position: relative;
        }

        .timeline-container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--color-accent), var(--color-border));
          transform: translateX(-50%);
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .timeline-item {
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-content {
          flex: 1;
          padding: 1.5rem;
          background: var(--color-bg-secondary);
          border-radius: 16px;
          border: 1px solid var(--color-border);
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          border-color: var(--color-accent);
        }

        .timeline-year {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 600;
          color: var(--color-accent);
          margin-bottom: 0.5rem;
        }

        .timeline-event {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .timeline-description {
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }

        .timeline-dot {
          width: 16px;
          height: 16px;
          background: var(--color-accent);
          border-radius: 50%;
          flex-shrink: 0;
          position: relative;
          z-index: 10;
          box-shadow: 0 0 20px rgba(249, 115, 22, 0.5);
        }

        /* Stats Banner */
        .stats-banner {
          padding: 5rem 1.5rem;
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.08) 0%, rgba(10, 10, 15, 0.6) 100%);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .stat-item h3 {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 600;
          color: var(--color-accent);
          margin-bottom: 0.5rem;
        }

        .stat-item p {
          color: var(--color-text-muted);
          font-size: clamp(0.8rem, 2vw, 1rem);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* CTA Section */
        .cta-section {
          padding: 6rem 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(249, 115, 22, 0.15), transparent 70%);
        }

        .cta-content {
          position: relative;
          z-index: 10;
          max-width: 700px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .cta-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 500;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .cta-title .accent {
          font-style: italic;
          color: var(--color-accent);
        }

        .cta-description {
          color: var(--color-text-muted);
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: var(--color-accent);
          color: var(--color-bg);
          font-weight: 500;
          font-size: 1rem;
          border: none;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: var(--color-accent-hover);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(249, 115, 22, 0.3);
        }

        .cta-button svg {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .cta-button:hover svg {
          transform: translateX(4px);
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          50% { opacity: 0.5; transform: scaleY(0.8); }
        }

        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease-out;
        }

        .fade-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* ========== TABLET STYLES (768px - 1024px) ========== */
        @media (max-width: 1024px) {
          .hero-section {
            min-height: 80vh;
          }

          .hero-content {
            padding: 1.5rem;
          }

          .story-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .values-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }

          .value-card {
            padding: 1.75rem;
          }

          .value-icon {
            width: 56px;
            height: 56px;
            margin-bottom: 1.25rem;
          }

          .value-svg-icon {
            width: 28px;
            height: 28px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .timeline-line {
            left: 24px;
          }

          .timeline-item,
          .timeline-item:nth-child(even) {
            flex-direction: row;
            gap: 1.5rem;
            padding-left: 0;
          }

          .timeline-dot {
            order: -1;
            margin-left: 16px;
          }

          .timeline-content {
            flex: 1;
          }

          .timeline-item > div:last-child {
            display: none;
          }

        }

        /* ========== MOBILE STYLES (up to 767px) ========== */
        @media (max-width: 767px) {
          .hero-section {
            min-height: 85vh;
            padding: 1rem;
          }

          .hero-content {
            padding: 1rem;
          }

          .hero-label {
            padding: 0.4rem 1rem;
            font-size: 0.75rem;
            margin-bottom: 1.5rem;
          }

          .hero-title {
            margin-bottom: 1.25rem;
          }

          .hero-description {
            margin-bottom: 2rem;
            line-height: 1.7;
          }

          .scroll-indicator {
            bottom: 1.5rem;
          }

          .scroll-line {
            height: 40px;
          }

          .story-section {
            padding: 4rem 1rem;
          }

          .story-container {
            gap: 2rem;
          }

          .vision-mission-grid {
            grid-template-columns: 1fr;
          }

          .vm-card {
            padding: 1.75rem;
          }

          .founder-quote {
            padding: 1.25rem 1.5rem;
          }

          .values-section {
            padding: 4rem 1rem;
          }

          .section-header {
            margin-bottom: 3rem;
          }

          .values-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .value-card {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .value-card:hover {
            transform: none;
          }

          .value-card:active {
            transform: scale(0.98);
          }

          .value-icon {
            width: 52px;
            height: 52px;
            margin-bottom: 1rem;
          }

          .value-svg-icon {
            width: 24px;
            height: 24px;
          }

          .value-card h3 {
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
          }

          .value-card p {
            font-size: 0.85rem;
          }

          .timeline-section {
            padding: 4rem 1rem;
          }

          .timeline-line {
            left: 12px;
          }

          .timeline-items {
            gap: 2rem;
          }

          .timeline-item,
          .timeline-item:nth-child(even) {
            gap: 1rem;
          }

          .timeline-dot {
            width: 12px;
            height: 12px;
            margin-left: 6px;
          }

          .timeline-content {
            padding: 1.25rem;
          }

          .timeline-year {
            margin-bottom: 0.25rem;
          }

          .timeline-event {
            margin-bottom: 0.25rem;
          }

          .timeline-description {
            font-size: 0.85rem;
          }

          .stats-banner {
            padding: 3.5rem 1rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .stat-item h3 {
            margin-bottom: 0.25rem;
          }

          .cta-section {
            padding: 4rem 1rem;
          }

          .cta-description {
            margin-bottom: 1.5rem;
          }

          .cta-button {
            padding: 0.875rem 1.75rem;
            font-size: 0.95rem;
          }
        }

        /* ========== SMALL MOBILE STYLES (up to 480px) ========== */
        @media (max-width: 480px) {
          .hero-section {
            min-height: 80vh;
          }

          .hero-label {
            padding: 0.35rem 0.875rem;
            font-size: 0.7rem;
            margin-bottom: 1.25rem;
          }

          .story-section {
            padding: 3rem 1rem;
          }

          .founder-quote {
            padding: 1rem;
          }

          .values-section {
            padding: 3rem 1rem;
          }

          .section-header {
            margin-bottom: 2.5rem;
          }

          .value-card {
            padding: 1.25rem;
          }

          .timeline-section {
            padding: 3rem 1rem;
          }

          .timeline-content {
            padding: 1rem;
          }

          .stats-banner {
            padding: 3rem 1rem;
          }

          .stats-grid {
            gap: 1.25rem;
          }

          .cta-section {
            padding: 3rem 1rem;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }

        /* ========== EXTRA SMALL MOBILE (up to 360px) ========== */
        @media (max-width: 360px) {
          .hero-content {
            padding: 0.75rem;
          }

          .timeline-line {
            left: 8px;
          }

          .timeline-dot {
            width: 10px;
            height: 10px;
            margin-left: 3px;
          }

          .timeline-item,
          .timeline-item:nth-child(even) {
            gap: 0.75rem;
          }
        }

        /* ========== TOUCH DEVICE OPTIMIZATIONS ========== */
        @media (hover: none) and (pointer: coarse) {
          .value-card:hover {
            transform: none;
            border-color: var(--color-border);
            box-shadow: none;
          }

          .value-card:active {
            transform: scale(0.98);
            border-color: var(--color-accent);
          }

          .timeline-content:hover {
            border-color: var(--color-border);
          }

          .timeline-content:active {
            border-color: var(--color-accent);
          }

          .cta-button:hover {
            transform: none;
            box-shadow: none;
          }

          .cta-button:active {
            transform: scale(0.98);
          }
        }

        /* ========== REDUCED MOTION ========== */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

          .fade-up {
            opacity: 1;
            transform: none;
          }

          .scroll-line {
            animation: none;
          }
        }

        /* ========== LANDSCAPE MOBILE ========== */
        @media screen and (max-height: 500px) and (orientation: landscape) {
          .hero-section {
            min-height: 100vh;
            padding: 1rem 2rem;
          }

          .hero-content {
            padding: 1rem;
          }

          .hero-label {
            margin-bottom: 1rem;
          }

          .hero-description {
            margin-bottom: 1.5rem;
          }

          .scroll-indicator {
            display: none;
          }

          .story-container {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .values-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .value-card {
            padding: 1rem;
          }

          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* ========== HIGH DPI SCREENS ========== */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .hero-bg::before {
            background-size: 40px 40px;
          }
        }
      `}),u.jsxs("section",{className:"hero-section",children:[u.jsx("div",{className:"hero-bg"}),u.jsxs("div",{className:"hero-content",children:[u.jsxs("span",{className:"hero-label",children:[u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",style:{width:"16px",height:"16px"},children:u.jsx("path",{d:"M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"})}),"Who We Are"]}),u.jsxs("h1",{className:"hero-title",children:["Your ",u.jsx("span",{className:"accent",children:"360°"})," Brand Partner"]}),u.jsx("p",{className:"hero-description",children:"Strabso is a full-service activation and events agency delivering end-to-end brand solutions with a strong presence across Sri Lanka, including the North and East regions."})]}),!z&&u.jsxs("div",{className:"scroll-indicator",children:[u.jsx("span",{children:"Scroll to explore"}),u.jsx("div",{className:"scroll-line"})]})]}),u.jsx("section",{className:"story-section",children:u.jsxs("div",{className:"story-container",children:[u.jsxs("div",{className:"story-heading fade-up",children:[u.jsxs("h2",{children:["Our ",u.jsx("span",{className:"accent",children:"Vision"})," & Mission"]}),u.jsx("div",{className:"story-heading-line"})]}),u.jsxs("div",{className:"vision-mission-grid fade-up",children:[u.jsxs("div",{className:"vm-card",children:[u.jsx("div",{className:"vm-card-icon",children:u.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"5"}),u.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"22"}),u.jsx("line",{x1:"2",y1:"12",x2:"5",y2:"12"}),u.jsx("line",{x1:"19",y1:"12",x2:"22",y2:"12"})]})}),u.jsx("span",{className:"vm-card-label",children:"Vision"}),u.jsx("p",{className:"vm-card-text",children:"To identify ourselves as one of the top 5 agencies in the industry by 2025, while being the only agency providing a complete 360° solution to its clients."})]}),u.jsxs("div",{className:"vm-card",children:[u.jsx("div",{className:"vm-card-icon",children:u.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})})}),u.jsx("span",{className:"vm-card-label",children:"Mission"}),u.jsx("p",{className:"vm-card-text",children:"To provide clients with a 360° business solution, reducing operational hassle, building long-term trust, and delivering high-quality execution at every touchpoint."})]})]}),u.jsxs("div",{className:"founder-quote fade-up",children:[u.jsx("blockquote",{children:'"We look forward to the opportunity to prove how we can elevate your brand to new heights."'}),u.jsx("cite",{children:"— Rumesh Chandrakumar, Founder"})]})]})}),u.jsxs("section",{className:"values-section",children:[u.jsxs("div",{className:"section-header fade-up",children:[u.jsxs("h2",{children:["Our Key ",u.jsx("span",{className:"accent",children:"Strengths"})]}),u.jsx("p",{children:"What sets Strabso apart — our unique capabilities that deliver results for your brand."})]}),u.jsx("div",{className:"values-grid",children:f.map((M,D)=>u.jsxs("div",{className:"value-card fade-up",style:{transitionDelay:`${D*.1}s`},children:[u.jsx("div",{className:"value-icon",children:M.icon}),u.jsx("h3",{children:M.title}),u.jsx("p",{children:M.description})]},D))})]}),u.jsx("section",{className:"stats-banner",ref:p,children:u.jsxs("div",{className:"stats-grid",children:[u.jsxs("div",{className:"stat-item fade-up",children:[u.jsx("h3",{children:"100+"}),u.jsx("p",{children:"Activations Delivered"})]}),u.jsxs("div",{className:"stat-item fade-up",style:{transitionDelay:"0.1s"},children:[u.jsx("h3",{children:"25+"}),u.jsx("p",{children:"Major Brands"})]}),u.jsxs("div",{className:"stat-item fade-up",style:{transitionDelay:"0.2s"},children:[u.jsx("h3",{children:"9"}),u.jsx("p",{children:"Provinces Covered"})]}),u.jsxs("div",{className:"stat-item fade-up",style:{transitionDelay:"0.3s"},children:[u.jsx("h3",{children:"360°"}),u.jsx("p",{children:"Complete Solutions"})]})]})}),u.jsxs("section",{className:"timeline-section",children:[u.jsxs("div",{className:"section-header fade-up",children:[u.jsxs("h2",{children:["Our ",u.jsx("span",{className:"accent",children:"Journey"})]}),u.jsx("p",{children:"From humble beginnings to industry leadership, here's how we've grown."})]}),u.jsxs("div",{className:"timeline-container",children:[u.jsx("div",{className:"timeline-line"}),u.jsx("div",{className:"timeline-items",children:T.map((M,D)=>u.jsxs("div",{className:"timeline-item fade-up",children:[u.jsxs("div",{className:"timeline-content",children:[u.jsx("div",{className:"timeline-year",children:M.year}),u.jsx("div",{className:"timeline-event",children:M.event}),u.jsx("div",{className:"timeline-description",children:M.description})]}),u.jsx("div",{className:"timeline-dot"}),u.jsx("div",{style:{flex:1}})]},D))})]})]}),u.jsx("section",{className:"cta-section",children:u.jsxs("div",{className:"cta-content fade-up",children:[u.jsxs("h2",{className:"cta-title",children:["Ready to Create Something ",u.jsx("span",{className:"accent",children:"Unforgettable"}),"?"]}),u.jsx("p",{className:"cta-description",children:"Let's collaborate to bring your next event to life. Whether you have a clear vision or just the spark of an idea, we're here to make it extraordinary."})]})}),u.jsx("div",{children:u.jsx($h,{})})]})},Ad=80,Md=20,Ph=()=>{const[p,z]=C.useState("Home"),A=C.useRef(null),f=C.useRef(null),T=C.useRef(null),M=C.useMemo(()=>({Home:A,Projects:f,About:T}),[]),D=L=>{const U=M[L];if(U&&U.current){const ct=U.current.getBoundingClientRect().top+window.pageYOffset-Ad-Md;window.scrollTo({top:ct,behavior:"smooth"})}};return C.useEffect(()=>{const L=()=>{const U=window.scrollY+Ad+Md+100,G=Object.entries(M);for(let ct=G.length-1;ct>=0;ct--){const[B,nt]=G[ct];if(nt.current){const Ht=nt.current.offsetTop;if(U>=Ht){z(B);break}}}};return window.addEventListener("scroll",L),L(),()=>window.removeEventListener("scroll",L)},[M]),u.jsxs(u.Fragment,{children:[u.jsx(hh,{activeTab:p,onTabClick:D}),u.jsxs("main",{className:"sections-container",children:[u.jsx("section",{ref:A,"data-section":"Home",className:"full-section",children:u.jsx(Vh,{})}),u.jsx("section",{ref:f,"data-section":"Projects",className:"full-section",children:u.jsx(Fh,{})}),u.jsx("section",{ref:T,"data-section":"About",className:"full-section",children:u.jsx(Ih,{})})]})]})};function tg(){return u.jsx(uh,{children:u.jsx($m,{basename:"/Strabso",children:u.jsxs("div",{className:"App",children:[u.jsx(dh,{}),u.jsx(Im,{children:u.jsx(Pm,{path:"/",element:u.jsx(Ph,{})})})]})})})}ch.createRoot(document.getElementById("root")).render(u.jsx(C.StrictMode,{children:u.jsx(tg,{})}));
