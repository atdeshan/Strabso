import{r as Ey,a as zy,b as Y,g as Ny,R as te,B as Ay,c as _y,d as Ty}from"./react-vendor-D5DiMwbd.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const f of s)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function o(s){const f={};return s.integrity&&(f.integrity=s.integrity),s.referrerPolicy&&(f.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?f.credentials="include":s.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(s){if(s.ep)return;s.ep=!0;const f=o(s);fetch(s.href,f)}})();var Ks={exports:{}},Ll={};var wp;function Cy(){if(wp)return Ll;wp=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(r,s,f){var h=null;if(f!==void 0&&(h=""+f),s.key!==void 0&&(h=""+s.key),"key"in s){f={};for(var p in s)p!=="key"&&(f[p]=s[p])}else f=s;return s=f.ref,{$$typeof:a,type:r,key:h,ref:s!==void 0?s:null,props:f}}return Ll.Fragment=l,Ll.jsx=o,Ll.jsxs=o,Ll}var jp;function Oy(){return jp||(jp=1,Ks.exports=Cy()),Ks.exports}var d=Oy(),Js={exports:{}},Ul={},Ws={exports:{}},$s={};var Mp;function Dy(){return Mp||(Mp=1,(function(a){function l(j,T){var X=j.length;j.push(T);t:for(;0<X;){var J=X-1>>>1,F=j[J];if(0<s(F,T))j[J]=T,j[X]=F,X=J;else break t}}function o(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var T=j[0],X=j.pop();if(X!==T){j[0]=X;t:for(var J=0,F=j.length,ot=F>>>1;J<ot;){var lt=2*(J+1)-1,rt=j[lt],pt=lt+1,zt=j[pt];if(0>s(rt,X))pt<F&&0>s(zt,rt)?(j[J]=zt,j[pt]=X,J=pt):(j[J]=rt,j[lt]=X,J=lt);else if(pt<F&&0>s(zt,X))j[J]=zt,j[pt]=X,J=pt;else break t}}return T}function s(j,T){var X=j.sortIndex-T.sortIndex;return X!==0?X:j.id-T.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var h=Date,p=h.now();a.unstable_now=function(){return h.now()-p}}var v=[],y=[],g=1,x=null,S=3,w=!1,N=!1,L=!1,H=!1,R=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(j){for(var T=o(y);T!==null;){if(T.callback===null)r(y);else if(T.startTime<=j)r(y),T.sortIndex=T.expirationTime,l(v,T);else break;T=o(y)}}function Q(j){if(L=!1,U(j),!N)if(o(v)!==null)N=!0,K||(K=!0,ht());else{var T=o(y);T!==null&&z(Q,T.startTime-j)}}var K=!1,W=-1,I=5,it=-1;function dt(){return H?!0:!(a.unstable_now()-it<I)}function et(){if(H=!1,K){var j=a.unstable_now();it=j;var T=!0;try{t:{N=!1,L&&(L=!1,Z(W),W=-1),w=!0;var X=S;try{e:{for(U(j),x=o(v);x!==null&&!(x.expirationTime>j&&dt());){var J=x.callback;if(typeof J=="function"){x.callback=null,S=x.priorityLevel;var F=J(x.expirationTime<=j);if(j=a.unstable_now(),typeof F=="function"){x.callback=F,U(j),T=!0;break e}x===o(v)&&r(v),U(j)}else r(v);x=o(v)}if(x!==null)T=!0;else{var ot=o(y);ot!==null&&z(Q,ot.startTime-j),T=!1}}break t}finally{x=null,S=X,w=!1}T=void 0}}finally{T?ht():K=!1}}}var ht;if(typeof D=="function")ht=function(){D(et)};else if(typeof MessageChannel<"u"){var Et=new MessageChannel,_=Et.port2;Et.port1.onmessage=et,ht=function(){_.postMessage(null)}}else ht=function(){R(et,0)};function z(j,T){W=R(function(){j(a.unstable_now())},T)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(j){j.callback=null},a.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<j?Math.floor(1e3/j):5},a.unstable_getCurrentPriorityLevel=function(){return S},a.unstable_next=function(j){switch(S){case 1:case 2:case 3:var T=3;break;default:T=S}var X=S;S=T;try{return j()}finally{S=X}},a.unstable_requestPaint=function(){H=!0},a.unstable_runWithPriority=function(j,T){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var X=S;S=j;try{return T()}finally{S=X}},a.unstable_scheduleCallback=function(j,T,X){var J=a.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?J+X:J):X=J,j){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=X+F,j={id:g++,callback:T,priorityLevel:j,startTime:X,expirationTime:F,sortIndex:-1},X>J?(j.sortIndex=X,l(y,j),o(v)===null&&j===o(y)&&(L?(Z(W),W=-1):L=!0,z(Q,X-J))):(j.sortIndex=F,l(v,j),N||w||(N=!0,K||(K=!0,ht()))),j},a.unstable_shouldYield=dt,a.unstable_wrapCallback=function(j){var T=S;return function(){var X=S;S=T;try{return j.apply(this,arguments)}finally{S=X}}}})($s)),$s}var Ep;function ky(){return Ep||(Ep=1,Ws.exports=Dy()),Ws.exports}var zp;function Ry(){if(zp)return Ul;zp=1;var a=ky(),l=Ey(),o=zy();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function h(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function p(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function v(t){if(f(t)!==t)throw Error(r(188))}function y(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(r(188));return e!==t?null:t}for(var n=t,i=e;;){var c=n.return;if(c===null)break;var u=c.alternate;if(u===null){if(i=c.return,i!==null){n=i;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===n)return v(c),t;if(u===i)return v(c),e;u=u.sibling}throw Error(r(188))}if(n.return!==i.return)n=c,i=u;else{for(var m=!1,b=c.child;b;){if(b===n){m=!0,n=c,i=u;break}if(b===i){m=!0,i=c,n=u;break}b=b.sibling}if(!m){for(b=u.child;b;){if(b===n){m=!0,n=u,i=c;break}if(b===i){m=!0,i=u,n=c;break}b=b.sibling}if(!m)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?t:e}function g(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=g(t),e!==null)return e;t=t.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),it=Symbol.for("react.activity"),dt=Symbol.for("react.memo_cache_sentinel"),et=Symbol.iterator;function ht(t){return t===null||typeof t!="object"?null:(t=et&&t[et]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Symbol.for("react.client.reference");function _(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Et?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case L:return"Fragment";case R:return"Profiler";case H:return"StrictMode";case Q:return"Suspense";case K:return"SuspenseList";case it:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case N:return"Portal";case D:return t.displayName||"Context";case Z:return(t._context.displayName||"Context")+".Consumer";case U:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case W:return e=t.displayName||null,e!==null?e:_(t.type)||"Memo";case I:e=t._payload,t=t._init;try{return _(t(e))}catch{}}return null}var z=Array.isArray,j=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},J=[],F=-1;function ot(t){return{current:t}}function lt(t){0>F||(t.current=J[F],J[F]=null,F--)}function rt(t,e){F++,J[F]=t.current,t.current=e}var pt=ot(null),zt=ot(null),Xt=ot(null),ne=ot(null);function re(t,e){switch(rt(Xt,e),rt(zt,t),rt(pt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Zm(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Zm(e),t=Qm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}lt(pt),rt(pt,t)}function Ot(){lt(pt),lt(zt),lt(Xt)}function Ve(t){t.memoizedState!==null&&rt(ne,t);var e=pt.current,n=Qm(e,t.type);e!==n&&(rt(zt,t),rt(pt,n))}function fn(t){zt.current===t&&(lt(pt),lt(zt)),ne.current===t&&(lt(ne),Dl._currentValue=X)}var Ka,Vi;function wa(t){if(Ka===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ka=e&&e[1]||"",Vi=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ka+t+Vi}var Tc=!1;function Cc(t,e){if(!t||Tc)return"";Tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(B){var k=B}Reflect.construct(t,[],V)}else{try{V.call()}catch(B){k=B}t.call(V.prototype)}}else{try{throw Error()}catch(B){k=B}(V=t())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(B){if(B&&k&&typeof B.stack=="string")return[B.stack,k.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),m=u[0],b=u[1];if(m&&b){var M=m.split(`
`),O=b.split(`
`);for(c=i=0;i<M.length&&!M[i].includes("DetermineComponentFrameRoot");)i++;for(;c<O.length&&!O[c].includes("DetermineComponentFrameRoot");)c++;if(i===M.length||c===O.length)for(i=M.length-1,c=O.length-1;1<=i&&0<=c&&M[i]!==O[c];)c--;for(;1<=i&&0<=c;i--,c--)if(M[i]!==O[c]){if(i!==1||c!==1)do if(i--,c--,0>c||M[i]!==O[c]){var q=`
`+M[i].replace(" at new "," at ");return t.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",t.displayName)),q}while(1<=i&&0<=c);break}}}finally{Tc=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?wa(n):""}function nv(t,e){switch(t.tag){case 26:case 27:case 5:return wa(t.type);case 16:return wa("Lazy");case 13:return t.child!==e&&e!==null?wa("Suspense Fallback"):wa("Suspense");case 19:return wa("SuspenseList");case 0:case 15:return Cc(t.type,!1);case 11:return Cc(t.type.render,!1);case 1:return Cc(t.type,!0);case 31:return wa("Activity");default:return""}}function wd(t){try{var e="",n=null;do e+=nv(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Oc=Object.prototype.hasOwnProperty,Dc=a.unstable_scheduleCallback,kc=a.unstable_cancelCallback,av=a.unstable_shouldYield,iv=a.unstable_requestPaint,Ce=a.unstable_now,lv=a.unstable_getCurrentPriorityLevel,jd=a.unstable_ImmediatePriority,Md=a.unstable_UserBlockingPriority,vr=a.unstable_NormalPriority,rv=a.unstable_LowPriority,Ed=a.unstable_IdlePriority,ov=a.log,cv=a.unstable_setDisableYieldValue,Zi=null,Oe=null;function Wn(t){if(typeof ov=="function"&&cv(t),Oe&&typeof Oe.setStrictMode=="function")try{Oe.setStrictMode(Zi,t)}catch{}}var De=Math.clz32?Math.clz32:fv,uv=Math.log,sv=Math.LN2;function fv(t){return t>>>=0,t===0?32:31-(uv(t)/sv|0)|0}var yr=256,xr=262144,br=4194304;function ja(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Sr(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var c=0,u=t.suspendedLanes,m=t.pingedLanes;t=t.warmLanes;var b=i&134217727;return b!==0?(i=b&~u,i!==0?c=ja(i):(m&=b,m!==0?c=ja(m):n||(n=b&~t,n!==0&&(c=ja(n))))):(b=i&~u,b!==0?c=ja(b):m!==0?c=ja(m):n||(n=i&~t,n!==0&&(c=ja(n)))),c===0?0:e!==0&&e!==c&&(e&u)===0&&(u=c&-c,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:c}function Qi(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function dv(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zd(){var t=br;return br<<=1,(br&62914560)===0&&(br=4194304),t}function Rc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ki(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function hv(t,e,n,i,c,u){var m=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var b=t.entanglements,M=t.expirationTimes,O=t.hiddenUpdates;for(n=m&~n;0<n;){var q=31-De(n),V=1<<q;b[q]=0,M[q]=-1;var k=O[q];if(k!==null)for(O[q]=null,q=0;q<k.length;q++){var B=k[q];B!==null&&(B.lane&=-536870913)}n&=~V}i!==0&&Nd(t,i,0),u!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=u&~(m&~e))}function Nd(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-De(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function Ad(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-De(n),c=1<<i;c&e|t[i]&e&&(t[i]|=e),n&=~c}}function _d(t,e){var n=e&-e;return n=(n&42)!==0?1:Bc(n),(n&(t.suspendedLanes|e))!==0?0:n}function Bc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Lc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Td(){var t=T.p;return t!==0?t:(t=window.event,t===void 0?32:pp(t.type))}function Cd(t,e){var n=T.p;try{return T.p=t,e()}finally{T.p=n}}var $n=Math.random().toString(36).slice(2),oe="__reactFiber$"+$n,Se="__reactProps$"+$n,Ja="__reactContainer$"+$n,Uc="__reactEvents$"+$n,mv="__reactListeners$"+$n,pv="__reactHandles$"+$n,Od="__reactResources$"+$n,Ji="__reactMarker$"+$n;function Hc(t){delete t[oe],delete t[Se],delete t[Uc],delete t[mv],delete t[pv]}function Wa(t){var e=t[oe];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ja]||n[oe]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Pm(t);t!==null;){if(n=t[oe])return n;t=Pm(t)}return e}t=n,n=t.parentNode}return null}function $a(t){if(t=t[oe]||t[Ja]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Wi(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function Fa(t){var e=t[Od];return e||(e=t[Od]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ae(t){t[Ji]=!0}var Dd=new Set,kd={};function Ma(t,e){Ia(t,e),Ia(t+"Capture",e)}function Ia(t,e){for(kd[t]=e,t=0;t<e.length;t++)Dd.add(e[t])}var gv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rd={},Bd={};function vv(t){return Oc.call(Bd,t)?!0:Oc.call(Rd,t)?!1:gv.test(t)?Bd[t]=!0:(Rd[t]=!0,!1)}function wr(t,e,n){if(vv(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function jr(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Mn(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function Ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ld(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yv(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,u=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return c.call(this)},set:function(m){n=""+m,u.call(this,m)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qc(t){if(!t._valueTracker){var e=Ld(t)?"checked":"value";t._valueTracker=yv(t,e,""+t[e])}}function Ud(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ld(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Mr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var xv=/[\n"\\]/g;function Qe(t){return t.replace(xv,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Yc(t,e,n,i,c,u,m,b){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),e!=null?m==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ze(e)):t.value!==""+Ze(e)&&(t.value=""+Ze(e)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),e!=null?Gc(t,m,Ze(e)):n!=null?Gc(t,m,Ze(n)):i!=null&&t.removeAttribute("value"),c==null&&u!=null&&(t.defaultChecked=!!u),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Ze(b):t.removeAttribute("name")}function Hd(t,e,n,i,c,u,m,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){qc(t);return}n=n!=null?""+Ze(n):"",e=e!=null?""+Ze(e):n,b||e===t.value||(t.value=e),t.defaultValue=e}i=i??c,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=b?t.checked:!!i,t.defaultChecked=!!i,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m),qc(t)}function Gc(t,e,n){e==="number"&&Mr(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Pa(t,e,n,i){if(t=t.options,e){e={};for(var c=0;c<n.length;c++)e["$"+n[c]]=!0;for(n=0;n<t.length;n++)c=e.hasOwnProperty("$"+t[n].value),t[n].selected!==c&&(t[n].selected=c),c&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ze(n),e=null,c=0;c<t.length;c++){if(t[c].value===n){t[c].selected=!0,i&&(t[c].defaultSelected=!0);return}e!==null||t[c].disabled||(e=t[c])}e!==null&&(e.selected=!0)}}function qd(t,e,n){if(e!=null&&(e=""+Ze(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Ze(n):""}function Yd(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(r(92));if(z(i)){if(1<i.length)throw Error(r(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=Ze(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),qc(t)}function ti(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gd(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||bv.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Xd(t,e,n){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var c in e)i=e[c],e.hasOwnProperty(c)&&n[c]!==i&&Gd(t,c,i)}else for(var u in e)e.hasOwnProperty(u)&&Gd(t,u,e[u])}function Xc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Er(t){return wv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function En(){}var Vc=null;function Zc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ei=null,ni=null;function Vd(t){var e=$a(t);if(e&&(t=e.stateNode)){var n=t[Se]||null;t:switch(t=e.stateNode,e.type){case"input":if(Yc(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Qe(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var c=i[Se]||null;if(!c)throw Error(r(90));Yc(i,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&Ud(i)}break t;case"textarea":qd(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Pa(t,!!n.multiple,e,!1)}}}var Qc=!1;function Zd(t,e,n){if(Qc)return t(e,n);Qc=!0;try{var i=t(e);return i}finally{if(Qc=!1,(ei!==null||ni!==null)&&(ho(),ei&&(e=ei,t=ni,ni=ei=null,Vd(e),t)))for(e=0;e<t.length;e++)Vd(t[e])}}function $i(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Se]||null;if(i===null)return null;n=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(r(231,e,typeof n));return n}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(zn)try{var Fi={};Object.defineProperty(Fi,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Fi,Fi),window.removeEventListener("test",Fi,Fi)}catch{Kc=!1}var Fn=null,Jc=null,zr=null;function Qd(){if(zr)return zr;var t,e=Jc,n=e.length,i,c="value"in Fn?Fn.value:Fn.textContent,u=c.length;for(t=0;t<n&&e[t]===c[t];t++);var m=n-t;for(i=1;i<=m&&e[n-i]===c[u-i];i++);return zr=c.slice(t,1<i?1-i:void 0)}function Nr(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ar(){return!0}function Kd(){return!1}function we(t){function e(n,i,c,u,m){this._reactName=n,this._targetInst=c,this.type=i,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(n=t[b],this[b]=n?n(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ar:Kd,this.isPropagationStopped=Kd,this}return x(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ar)},persist:function(){},isPersistent:Ar}),e}var Ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_r=we(Ea),Ii=x({},Ea,{view:0,detail:0}),jv=we(Ii),Wc,$c,Pi,Tr=x({},Ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pi&&(Pi&&t.type==="mousemove"?(Wc=t.screenX-Pi.screenX,$c=t.screenY-Pi.screenY):$c=Wc=0,Pi=t),Wc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),Jd=we(Tr),Mv=x({},Tr,{dataTransfer:0}),Ev=we(Mv),zv=x({},Ii,{relatedTarget:0}),Fc=we(zv),Nv=x({},Ea,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=we(Nv),_v=x({},Ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tv=we(_v),Cv=x({},Ea,{data:0}),Wd=we(Cv),Ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kv[t])?!!e[t]:!1}function Ic(){return Rv}var Bv=x({},Ii,{key:function(t){if(t.key){var e=Ov[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Nr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(t){return t.type==="keypress"?Nr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lv=we(Bv),Uv=x({},Tr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=we(Uv),Hv=x({},Ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),qv=we(Hv),Yv=x({},Ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gv=we(Yv),Xv=x({},Tr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vv=we(Xv),Zv=x({},Ea,{newState:0,oldState:0}),Qv=we(Zv),Kv=[9,13,27,32],Pc=zn&&"CompositionEvent"in window,tl=null;zn&&"documentMode"in document&&(tl=document.documentMode);var Jv=zn&&"TextEvent"in window&&!tl,Fd=zn&&(!Pc||tl&&8<tl&&11>=tl),Id=" ",Pd=!1;function t0(t,e){switch(t){case"keyup":return Kv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ai=!1;function Wv(t,e){switch(t){case"compositionend":return e0(e);case"keypress":return e.which!==32?null:(Pd=!0,Id);case"textInput":return t=e.data,t===Id&&Pd?null:t;default:return null}}function $v(t,e){if(ai)return t==="compositionend"||!Pc&&t0(t,e)?(t=Qd(),zr=Jc=Fn=null,ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fd&&e.locale!=="ko"?null:e.data;default:return null}}var Fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function n0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Fv[t.type]:e==="textarea"}function a0(t,e,n,i){ei?ni?ni.push(i):ni=[i]:ei=i,e=bo(e,"onChange"),0<e.length&&(n=new _r("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var el=null,nl=null;function Iv(t){Hm(t,0)}function Cr(t){var e=Wi(t);if(Ud(e))return t}function i0(t,e){if(t==="change")return e}var l0=!1;if(zn){var tu;if(zn){var eu="oninput"in document;if(!eu){var r0=document.createElement("div");r0.setAttribute("oninput","return;"),eu=typeof r0.oninput=="function"}tu=eu}else tu=!1;l0=tu&&(!document.documentMode||9<document.documentMode)}function o0(){el&&(el.detachEvent("onpropertychange",c0),nl=el=null)}function c0(t){if(t.propertyName==="value"&&Cr(nl)){var e=[];a0(e,nl,t,Zc(t)),Zd(Iv,e)}}function Pv(t,e,n){t==="focusin"?(o0(),el=e,nl=n,el.attachEvent("onpropertychange",c0)):t==="focusout"&&o0()}function t2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cr(nl)}function e2(t,e){if(t==="click")return Cr(e)}function n2(t,e){if(t==="input"||t==="change")return Cr(e)}function a2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ke=typeof Object.is=="function"?Object.is:a2;function al(t,e){if(ke(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var c=n[i];if(!Oc.call(e,c)||!ke(t[c],e[c]))return!1}return!0}function u0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function s0(t,e){var n=u0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=u0(n)}}function f0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?f0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function d0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Mr(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Mr(t.document)}return e}function nu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var i2=zn&&"documentMode"in document&&11>=document.documentMode,ii=null,au=null,il=null,iu=!1;function h0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;iu||ii==null||ii!==Mr(i)||(i=ii,"selectionStart"in i&&nu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),il&&al(il,i)||(il=i,i=bo(au,"onSelect"),0<i.length&&(e=new _r("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ii)))}function za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var li={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},lu={},m0={};zn&&(m0=document.createElement("div").style,"AnimationEvent"in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),"TransitionEvent"in window||delete li.transitionend.transition);function Na(t){if(lu[t])return lu[t];if(!li[t])return t;var e=li[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in m0)return lu[t]=e[n];return t}var p0=Na("animationend"),g0=Na("animationiteration"),v0=Na("animationstart"),l2=Na("transitionrun"),r2=Na("transitionstart"),o2=Na("transitioncancel"),y0=Na("transitionend"),x0=new Map,ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ru.push("scrollEnd");function ln(t,e){x0.set(t,e),Ma(e,[t])}var Or=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ke=[],ri=0,ou=0;function Dr(){for(var t=ri,e=ou=ri=0;e<t;){var n=Ke[e];Ke[e++]=null;var i=Ke[e];Ke[e++]=null;var c=Ke[e];Ke[e++]=null;var u=Ke[e];if(Ke[e++]=null,i!==null&&c!==null){var m=i.pending;m===null?c.next=c:(c.next=m.next,m.next=c),i.pending=c}u!==0&&b0(n,c,u)}}function kr(t,e,n,i){Ke[ri++]=t,Ke[ri++]=e,Ke[ri++]=n,Ke[ri++]=i,ou|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function cu(t,e,n,i){return kr(t,e,n,i),Rr(t)}function Aa(t,e){return kr(t,null,null,e),Rr(t)}function b0(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var c=!1,u=t.return;u!==null;)u.childLanes|=n,i=u.alternate,i!==null&&(i.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(c=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,c&&e!==null&&(c=31-De(n),t=u.hiddenUpdates,i=t[c],i===null?t[c]=[e]:i.push(e),e.lane=n|536870912),u):null}function Rr(t){if(50<zl)throw zl=0,vs=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var oi={};function c2(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(t,e,n,i){return new c2(t,e,n,i)}function uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Nn(t,e){var n=t.alternate;return n===null?(n=Re(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function S0(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Br(t,e,n,i,c,u){var m=0;if(i=t,typeof t=="function")uu(t)&&(m=1);else if(typeof t=="string")m=hy(t,n,pt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case it:return t=Re(31,n,e,c),t.elementType=it,t.lanes=u,t;case L:return _a(n.children,c,u,e);case H:m=8,c|=24;break;case R:return t=Re(12,n,e,c|2),t.elementType=R,t.lanes=u,t;case Q:return t=Re(13,n,e,c),t.elementType=Q,t.lanes=u,t;case K:return t=Re(19,n,e,c),t.elementType=K,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:m=10;break t;case Z:m=9;break t;case U:m=11;break t;case W:m=14;break t;case I:m=16,i=null;break t}m=29,n=Error(r(130,t===null?"null":typeof t,"")),i=null}return e=Re(m,n,e,c),e.elementType=t,e.type=i,e.lanes=u,e}function _a(t,e,n,i){return t=Re(7,t,i,e),t.lanes=n,t}function su(t,e,n){return t=Re(6,t,null,e),t.lanes=n,t}function w0(t){var e=Re(18,null,null,0);return e.stateNode=t,e}function fu(t,e,n){return e=Re(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var j0=new WeakMap;function Je(t,e){if(typeof t=="object"&&t!==null){var n=j0.get(t);return n!==void 0?n:(e={value:t,source:e,stack:wd(e)},j0.set(t,e),e)}return{value:t,source:e,stack:wd(e)}}var ci=[],ui=0,Lr=null,ll=0,We=[],$e=0,In=null,dn=1,hn="";function An(t,e){ci[ui++]=ll,ci[ui++]=Lr,Lr=t,ll=e}function M0(t,e,n){We[$e++]=dn,We[$e++]=hn,We[$e++]=In,In=t;var i=dn;t=hn;var c=32-De(i)-1;i&=~(1<<c),n+=1;var u=32-De(e)+c;if(30<u){var m=c-c%5;u=(i&(1<<m)-1).toString(32),i>>=m,c-=m,dn=1<<32-De(e)+c|n<<c|i,hn=u+t}else dn=1<<u|n<<c|i,hn=t}function du(t){t.return!==null&&(An(t,1),M0(t,1,0))}function hu(t){for(;t===Lr;)Lr=ci[--ui],ci[ui]=null,ll=ci[--ui],ci[ui]=null;for(;t===In;)In=We[--$e],We[$e]=null,hn=We[--$e],We[$e]=null,dn=We[--$e],We[$e]=null}function E0(t,e){We[$e++]=dn,We[$e++]=hn,We[$e++]=In,dn=e.id,hn=e.overflow,In=t}var ce=null,Ut=null,jt=!1,Pn=null,Fe=!1,mu=Error(r(519));function ta(t){var e=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rl(Je(e,t)),mu}function z0(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[oe]=t,e[Se]=i,n){case"dialog":bt("cancel",e),bt("close",e);break;case"iframe":case"object":case"embed":bt("load",e);break;case"video":case"audio":for(n=0;n<Al.length;n++)bt(Al[n],e);break;case"source":bt("error",e);break;case"img":case"image":case"link":bt("error",e),bt("load",e);break;case"details":bt("toggle",e);break;case"input":bt("invalid",e),Hd(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":bt("invalid",e);break;case"textarea":bt("invalid",e),Yd(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||Xm(e.textContent,n)?(i.popover!=null&&(bt("beforetoggle",e),bt("toggle",e)),i.onScroll!=null&&bt("scroll",e),i.onScrollEnd!=null&&bt("scrollend",e),i.onClick!=null&&(e.onclick=En),e=!0):e=!1,e||ta(t,!0)}function N0(t){for(ce=t.return;ce;)switch(ce.tag){case 5:case 31:case 13:Fe=!1;return;case 27:case 3:Fe=!0;return;default:ce=ce.return}}function si(t){if(t!==ce)return!1;if(!jt)return N0(t),jt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Os(t.type,t.memoizedProps)),n=!n),n&&Ut&&ta(t),N0(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ut=Im(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ut=Im(t)}else e===27?(e=Ut,ma(t.type)?(t=Ls,Ls=null,Ut=t):Ut=e):Ut=ce?Pe(t.stateNode.nextSibling):null;return!0}function Ta(){Ut=ce=null,jt=!1}function pu(){var t=Pn;return t!==null&&(ze===null?ze=t:ze.push.apply(ze,t),Pn=null),t}function rl(t){Pn===null?Pn=[t]:Pn.push(t)}var gu=ot(null),Ca=null,_n=null;function ea(t,e,n){rt(gu,e._currentValue),e._currentValue=n}function Tn(t){t._currentValue=gu.current,lt(gu)}function vu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function yu(t,e,n,i){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var u=c.dependencies;if(u!==null){var m=c.child;u=u.firstContext;t:for(;u!==null;){var b=u;u=c;for(var M=0;M<e.length;M++)if(b.context===e[M]){u.lanes|=n,b=u.alternate,b!==null&&(b.lanes|=n),vu(u.return,n,t),i||(m=null);break t}u=b.next}}else if(c.tag===18){if(m=c.return,m===null)throw Error(r(341));m.lanes|=n,u=m.alternate,u!==null&&(u.lanes|=n),vu(m,n,t),m=null}else m=c.child;if(m!==null)m.return=c;else for(m=c;m!==null;){if(m===t){m=null;break}if(c=m.sibling,c!==null){c.return=m.return,m=c;break}m=m.return}c=m}}function fi(t,e,n,i){t=null;for(var c=e,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var m=c.alternate;if(m===null)throw Error(r(387));if(m=m.memoizedProps,m!==null){var b=c.type;ke(c.pendingProps.value,m.value)||(t!==null?t.push(b):t=[b])}}else if(c===ne.current){if(m=c.alternate,m===null)throw Error(r(387));m.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Dl):t=[Dl])}c=c.return}t!==null&&yu(e,t,n,i),e.flags|=262144}function Ur(t){for(t=t.firstContext;t!==null;){if(!ke(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Oa(t){Ca=t,_n=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ue(t){return A0(Ca,t)}function Hr(t,e){return Ca===null&&Oa(t),A0(t,e)}function A0(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},_n===null){if(t===null)throw Error(r(308));_n=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else _n=_n.next=e;return n}var u2=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},s2=a.unstable_scheduleCallback,f2=a.unstable_NormalPriority,$t={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xu(){return{controller:new u2,data:new Map,refCount:0}}function ol(t){t.refCount--,t.refCount===0&&s2(f2,function(){t.controller.abort()})}var cl=null,bu=0,di=0,hi=null;function d2(t,e){if(cl===null){var n=cl=[];bu=0,di=js(),hi={status:"pending",value:void 0,then:function(i){n.push(i)}}}return bu++,e.then(_0,_0),e}function _0(){if(--bu===0&&cl!==null){hi!==null&&(hi.status="fulfilled");var t=cl;cl=null,di=0,hi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function h2(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var c=0;c<n.length;c++)(0,n[c])(e)},function(c){for(i.status="rejected",i.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),i}var T0=j.S;j.S=function(t,e){hm=Ce(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&d2(t,e),T0!==null&&T0(t,e)};var Da=ot(null);function Su(){var t=Da.current;return t!==null?t:Bt.pooledCache}function qr(t,e){e===null?rt(Da,Da.current):rt(Da,e.pool)}function C0(){var t=Su();return t===null?null:{parent:$t._currentValue,pool:t}}var mi=Error(r(460)),wu=Error(r(474)),Yr=Error(r(542)),Gr={then:function(){}};function O0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function D0(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(En,En),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,R0(t),t;default:if(typeof e.status=="string")e.then(En,En);else{if(t=Bt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var c=e;c.status="fulfilled",c.value=i}},function(i){if(e.status==="pending"){var c=e;c.status="rejected",c.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,R0(t),t}throw Ra=e,mi}}function ka(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ra=n,mi):n}}var Ra=null;function k0(){if(Ra===null)throw Error(r(459));var t=Ra;return Ra=null,t}function R0(t){if(t===mi||t===Yr)throw Error(r(483))}var pi=null,ul=0;function Xr(t){var e=ul;return ul+=1,pi===null&&(pi=[]),D0(pi,t,e)}function sl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Vr(t,e){throw e.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function B0(t){function e(A,E){if(t){var C=A.deletions;C===null?(A.deletions=[E],A.flags|=16):C.push(E)}}function n(A,E){if(!t)return null;for(;E!==null;)e(A,E),E=E.sibling;return null}function i(A){for(var E=new Map;A!==null;)A.key!==null?E.set(A.key,A):E.set(A.index,A),A=A.sibling;return E}function c(A,E){return A=Nn(A,E),A.index=0,A.sibling=null,A}function u(A,E,C){return A.index=C,t?(C=A.alternate,C!==null?(C=C.index,C<E?(A.flags|=67108866,E):C):(A.flags|=67108866,E)):(A.flags|=1048576,E)}function m(A){return t&&A.alternate===null&&(A.flags|=67108866),A}function b(A,E,C,G){return E===null||E.tag!==6?(E=su(C,A.mode,G),E.return=A,E):(E=c(E,C),E.return=A,E)}function M(A,E,C,G){var ct=C.type;return ct===L?q(A,E,C.props.children,G,C.key):E!==null&&(E.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===I&&ka(ct)===E.type)?(E=c(E,C.props),sl(E,C),E.return=A,E):(E=Br(C.type,C.key,C.props,null,A.mode,G),sl(E,C),E.return=A,E)}function O(A,E,C,G){return E===null||E.tag!==4||E.stateNode.containerInfo!==C.containerInfo||E.stateNode.implementation!==C.implementation?(E=fu(C,A.mode,G),E.return=A,E):(E=c(E,C.children||[]),E.return=A,E)}function q(A,E,C,G,ct){return E===null||E.tag!==7?(E=_a(C,A.mode,G,ct),E.return=A,E):(E=c(E,C),E.return=A,E)}function V(A,E,C){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=su(""+E,A.mode,C),E.return=A,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case w:return C=Br(E.type,E.key,E.props,null,A.mode,C),sl(C,E),C.return=A,C;case N:return E=fu(E,A.mode,C),E.return=A,E;case I:return E=ka(E),V(A,E,C)}if(z(E)||ht(E))return E=_a(E,A.mode,C,null),E.return=A,E;if(typeof E.then=="function")return V(A,Xr(E),C);if(E.$$typeof===D)return V(A,Hr(A,E),C);Vr(A,E)}return null}function k(A,E,C,G){var ct=E!==null?E.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return ct!==null?null:b(A,E,""+C,G);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case w:return C.key===ct?M(A,E,C,G):null;case N:return C.key===ct?O(A,E,C,G):null;case I:return C=ka(C),k(A,E,C,G)}if(z(C)||ht(C))return ct!==null?null:q(A,E,C,G,null);if(typeof C.then=="function")return k(A,E,Xr(C),G);if(C.$$typeof===D)return k(A,E,Hr(A,C),G);Vr(A,C)}return null}function B(A,E,C,G,ct){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return A=A.get(C)||null,b(E,A,""+G,ct);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case w:return A=A.get(G.key===null?C:G.key)||null,M(E,A,G,ct);case N:return A=A.get(G.key===null?C:G.key)||null,O(E,A,G,ct);case I:return G=ka(G),B(A,E,C,G,ct)}if(z(G)||ht(G))return A=A.get(C)||null,q(E,A,G,ct,null);if(typeof G.then=="function")return B(A,E,C,Xr(G),ct);if(G.$$typeof===D)return B(A,E,C,Hr(E,G),ct);Vr(E,G)}return null}function tt(A,E,C,G){for(var ct=null,Nt=null,nt=E,vt=E=0,wt=null;nt!==null&&vt<C.length;vt++){nt.index>vt?(wt=nt,nt=null):wt=nt.sibling;var At=k(A,nt,C[vt],G);if(At===null){nt===null&&(nt=wt);break}t&&nt&&At.alternate===null&&e(A,nt),E=u(At,E,vt),Nt===null?ct=At:Nt.sibling=At,Nt=At,nt=wt}if(vt===C.length)return n(A,nt),jt&&An(A,vt),ct;if(nt===null){for(;vt<C.length;vt++)nt=V(A,C[vt],G),nt!==null&&(E=u(nt,E,vt),Nt===null?ct=nt:Nt.sibling=nt,Nt=nt);return jt&&An(A,vt),ct}for(nt=i(nt);vt<C.length;vt++)wt=B(nt,A,vt,C[vt],G),wt!==null&&(t&&wt.alternate!==null&&nt.delete(wt.key===null?vt:wt.key),E=u(wt,E,vt),Nt===null?ct=wt:Nt.sibling=wt,Nt=wt);return t&&nt.forEach(function(xa){return e(A,xa)}),jt&&An(A,vt),ct}function ft(A,E,C,G){if(C==null)throw Error(r(151));for(var ct=null,Nt=null,nt=E,vt=E=0,wt=null,At=C.next();nt!==null&&!At.done;vt++,At=C.next()){nt.index>vt?(wt=nt,nt=null):wt=nt.sibling;var xa=k(A,nt,At.value,G);if(xa===null){nt===null&&(nt=wt);break}t&&nt&&xa.alternate===null&&e(A,nt),E=u(xa,E,vt),Nt===null?ct=xa:Nt.sibling=xa,Nt=xa,nt=wt}if(At.done)return n(A,nt),jt&&An(A,vt),ct;if(nt===null){for(;!At.done;vt++,At=C.next())At=V(A,At.value,G),At!==null&&(E=u(At,E,vt),Nt===null?ct=At:Nt.sibling=At,Nt=At);return jt&&An(A,vt),ct}for(nt=i(nt);!At.done;vt++,At=C.next())At=B(nt,A,vt,At.value,G),At!==null&&(t&&At.alternate!==null&&nt.delete(At.key===null?vt:At.key),E=u(At,E,vt),Nt===null?ct=At:Nt.sibling=At,Nt=At);return t&&nt.forEach(function(My){return e(A,My)}),jt&&An(A,vt),ct}function Rt(A,E,C,G){if(typeof C=="object"&&C!==null&&C.type===L&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case w:t:{for(var ct=C.key;E!==null;){if(E.key===ct){if(ct=C.type,ct===L){if(E.tag===7){n(A,E.sibling),G=c(E,C.props.children),G.return=A,A=G;break t}}else if(E.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===I&&ka(ct)===E.type){n(A,E.sibling),G=c(E,C.props),sl(G,C),G.return=A,A=G;break t}n(A,E);break}else e(A,E);E=E.sibling}C.type===L?(G=_a(C.props.children,A.mode,G,C.key),G.return=A,A=G):(G=Br(C.type,C.key,C.props,null,A.mode,G),sl(G,C),G.return=A,A=G)}return m(A);case N:t:{for(ct=C.key;E!==null;){if(E.key===ct)if(E.tag===4&&E.stateNode.containerInfo===C.containerInfo&&E.stateNode.implementation===C.implementation){n(A,E.sibling),G=c(E,C.children||[]),G.return=A,A=G;break t}else{n(A,E);break}else e(A,E);E=E.sibling}G=fu(C,A.mode,G),G.return=A,A=G}return m(A);case I:return C=ka(C),Rt(A,E,C,G)}if(z(C))return tt(A,E,C,G);if(ht(C)){if(ct=ht(C),typeof ct!="function")throw Error(r(150));return C=ct.call(C),ft(A,E,C,G)}if(typeof C.then=="function")return Rt(A,E,Xr(C),G);if(C.$$typeof===D)return Rt(A,E,Hr(A,C),G);Vr(A,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,E!==null&&E.tag===6?(n(A,E.sibling),G=c(E,C),G.return=A,A=G):(n(A,E),G=su(C,A.mode,G),G.return=A,A=G),m(A)):n(A,E)}return function(A,E,C,G){try{ul=0;var ct=Rt(A,E,C,G);return pi=null,ct}catch(nt){if(nt===mi||nt===Yr)throw nt;var Nt=Re(29,nt,null,A.mode);return Nt.lanes=G,Nt.return=A,Nt}}}var Ba=B0(!0),L0=B0(!1),na=!1;function ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function aa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ia(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(_t&2)!==0){var c=i.pending;return c===null?e.next=e:(e.next=c.next,c.next=e),i.pending=e,e=Rr(t),b0(t,null,n),e}return kr(t,i,e,n),Rr(t)}function fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ad(t,n)}}function Eu(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var c=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?c=u=m:u=u.next=m,n=n.next}while(n!==null);u===null?c=u=e:u=u.next=e}else c=u=e;n={baseState:i.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var zu=!1;function dl(){if(zu){var t=hi;if(t!==null)throw t}}function hl(t,e,n,i){zu=!1;var c=t.updateQueue;na=!1;var u=c.firstBaseUpdate,m=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var M=b,O=M.next;M.next=null,m===null?u=O:m.next=O,m=M;var q=t.alternate;q!==null&&(q=q.updateQueue,b=q.lastBaseUpdate,b!==m&&(b===null?q.firstBaseUpdate=O:b.next=O,q.lastBaseUpdate=M))}if(u!==null){var V=c.baseState;m=0,q=O=M=null,b=u;do{var k=b.lane&-536870913,B=k!==b.lane;if(B?(St&k)===k:(i&k)===k){k!==0&&k===di&&(zu=!0),q!==null&&(q=q.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var tt=t,ft=b;k=e;var Rt=n;switch(ft.tag){case 1:if(tt=ft.payload,typeof tt=="function"){V=tt.call(Rt,V,k);break t}V=tt;break t;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=ft.payload,k=typeof tt=="function"?tt.call(Rt,V,k):tt,k==null)break t;V=x({},V,k);break t;case 2:na=!0}}k=b.callback,k!==null&&(t.flags|=64,B&&(t.flags|=8192),B=c.callbacks,B===null?c.callbacks=[k]:B.push(k))}else B={lane:k,tag:b.tag,payload:b.payload,callback:b.callback,next:null},q===null?(O=q=B,M=V):q=q.next=B,m|=k;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;B=b,b=B.next,B.next=null,c.lastBaseUpdate=B,c.shared.pending=null}}while(!0);q===null&&(M=V),c.baseState=M,c.firstBaseUpdate=O,c.lastBaseUpdate=q,u===null&&(c.shared.lanes=0),ua|=m,t.lanes=m,t.memoizedState=V}}function U0(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function H0(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)U0(n[t],e)}var gi=ot(null),Zr=ot(0);function q0(t,e){t=Hn,rt(Zr,t),rt(gi,e),Hn=t|e.baseLanes}function Nu(){rt(Zr,Hn),rt(gi,gi.current)}function Au(){Hn=Zr.current,lt(gi),lt(Zr)}var Be=ot(null),Ie=null;function la(t){var e=t.alternate;rt(Jt,Jt.current&1),rt(Be,t),Ie===null&&(e===null||gi.current!==null||e.memoizedState!==null)&&(Ie=t)}function _u(t){rt(Jt,Jt.current),rt(Be,t),Ie===null&&(Ie=t)}function Y0(t){t.tag===22?(rt(Jt,Jt.current),rt(Be,t),Ie===null&&(Ie=t)):ra()}function ra(){rt(Jt,Jt.current),rt(Be,Be.current)}function Le(t){lt(Be),Ie===t&&(Ie=null),lt(Jt)}var Jt=ot(0);function Qr(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Rs(n)||Bs(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cn=0,gt=null,Dt=null,Ft=null,Kr=!1,vi=!1,La=!1,Jr=0,ml=0,yi=null,m2=0;function Vt(){throw Error(r(321))}function Tu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ke(t[n],e[n]))return!1;return!0}function Cu(t,e,n,i,c,u){return Cn=u,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,j.H=t===null||t.memoizedState===null?Mh:Qu,La=!1,u=n(i,c),La=!1,vi&&(u=X0(e,n,i,c)),G0(t),u}function G0(t){j.H=vl;var e=Dt!==null&&Dt.next!==null;if(Cn=0,Ft=Dt=gt=null,Kr=!1,ml=0,yi=null,e)throw Error(r(300));t===null||It||(t=t.dependencies,t!==null&&Ur(t)&&(It=!0))}function X0(t,e,n,i){gt=t;var c=0;do{if(vi&&(yi=null),ml=0,vi=!1,25<=c)throw Error(r(301));if(c+=1,Ft=Dt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}j.H=Eh,u=e(n,i)}while(vi);return u}function p2(){var t=j.H,e=t.useState()[0];return e=typeof e.then=="function"?pl(e):e,t=t.useState()[0],(Dt!==null?Dt.memoizedState:null)!==t&&(gt.flags|=1024),e}function Ou(){var t=Jr!==0;return Jr=0,t}function Du(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function ku(t){if(Kr){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Kr=!1}Cn=0,Ft=Dt=gt=null,vi=!1,ml=Jr=0,yi=null}function me(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?gt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Wt(){if(Dt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Ft===null?gt.memoizedState:Ft.next;if(e!==null)Ft=e,Dt=t;else{if(t===null)throw gt.alternate===null?Error(r(467)):Error(r(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Ft===null?gt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function Wr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pl(t){var e=ml;return ml+=1,yi===null&&(yi=[]),t=D0(yi,t,e),e=gt,(Ft===null?e.memoizedState:Ft.next)===null&&(e=e.alternate,j.H=e===null||e.memoizedState===null?Mh:Qu),t}function $r(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return pl(t);if(t.$$typeof===D)return ue(t)}throw Error(r(438,String(t)))}function Ru(t){var e=null,n=gt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=gt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(c){return c.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Wr(),gt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=dt;return e.index++,n}function On(t,e){return typeof e=="function"?e(t):e}function Fr(t){var e=Wt();return Bu(e,Dt,t)}function Bu(t,e,n){var i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=n;var c=t.baseQueue,u=i.pending;if(u!==null){if(c!==null){var m=c.next;c.next=u.next,u.next=m}e.baseQueue=c=u,i.pending=null}if(u=t.baseState,c===null)t.memoizedState=u;else{e=c.next;var b=m=null,M=null,O=e,q=!1;do{var V=O.lane&-536870913;if(V!==O.lane?(St&V)===V:(Cn&V)===V){var k=O.revertLane;if(k===0)M!==null&&(M=M.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),V===di&&(q=!0);else if((Cn&k)===k){O=O.next,k===di&&(q=!0);continue}else V={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},M===null?(b=M=V,m=u):M=M.next=V,gt.lanes|=k,ua|=k;V=O.action,La&&n(u,V),u=O.hasEagerState?O.eagerState:n(u,V)}else k={lane:V,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},M===null?(b=M=k,m=u):M=M.next=k,gt.lanes|=V,ua|=V;O=O.next}while(O!==null&&O!==e);if(M===null?m=u:M.next=b,!ke(u,t.memoizedState)&&(It=!0,q&&(n=hi,n!==null)))throw n;t.memoizedState=u,t.baseState=m,t.baseQueue=M,i.lastRenderedState=u}return c===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Lu(t){var e=Wt(),n=e.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=t;var i=n.dispatch,c=n.pending,u=e.memoizedState;if(c!==null){n.pending=null;var m=c=c.next;do u=t(u,m.action),m=m.next;while(m!==c);ke(u,e.memoizedState)||(It=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,i]}function V0(t,e,n){var i=gt,c=Wt(),u=jt;if(u){if(n===void 0)throw Error(r(407));n=n()}else n=e();var m=!ke((Dt||c).memoizedState,n);if(m&&(c.memoizedState=n,It=!0),c=c.queue,qu(K0.bind(null,i,c,t),[t]),c.getSnapshot!==e||m||Ft!==null&&Ft.memoizedState.tag&1){if(i.flags|=2048,xi(9,{destroy:void 0},Q0.bind(null,i,c,n,e),null),Bt===null)throw Error(r(349));u||(Cn&127)!==0||Z0(i,e,n)}return n}function Z0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e=Wr(),gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Q0(t,e,n,i){e.value=n,e.getSnapshot=i,J0(e)&&W0(t)}function K0(t,e,n){return n(function(){J0(e)&&W0(t)})}function J0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ke(t,n)}catch{return!0}}function W0(t){var e=Aa(t,2);e!==null&&Ne(e,t,2)}function Uu(t){var e=me();if(typeof t=="function"){var n=t;if(t=n(),La){Wn(!0);try{n()}finally{Wn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:t},e}function $0(t,e,n,i){return t.baseState=n,Bu(t,Dt,typeof i=="function"?i:On)}function g2(t,e,n,i,c){if(to(t))throw Error(r(485));if(t=e.action,t!==null){var u={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};j.T!==null?n(!0):u.isTransition=!1,i(u),n=e.pending,n===null?(u.next=e.pending=u,F0(e,u)):(u.next=n.next,e.pending=n.next=u)}}function F0(t,e){var n=e.action,i=e.payload,c=t.state;if(e.isTransition){var u=j.T,m={};j.T=m;try{var b=n(c,i),M=j.S;M!==null&&M(m,b),I0(t,e,b)}catch(O){Hu(t,e,O)}finally{u!==null&&m.types!==null&&(u.types=m.types),j.T=u}}else try{u=n(c,i),I0(t,e,u)}catch(O){Hu(t,e,O)}}function I0(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){P0(t,e,i)},function(i){return Hu(t,e,i)}):P0(t,e,n)}function P0(t,e,n){e.status="fulfilled",e.value=n,th(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,F0(t,n)))}function Hu(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,th(e),e=e.next;while(e!==i)}t.action=null}function th(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function eh(t,e){return e}function nh(t,e){if(jt){var n=Bt.formState;if(n!==null){t:{var i=gt;if(jt){if(Ut){e:{for(var c=Ut,u=Fe;c.nodeType!==8;){if(!u){c=null;break e}if(c=Pe(c.nextSibling),c===null){c=null;break e}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){Ut=Pe(c.nextSibling),i=c.data==="F!";break t}}ta(i)}i=!1}i&&(e=n[0])}}return n=me(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eh,lastRenderedState:e},n.queue=i,n=Sh.bind(null,gt,i),i.dispatch=n,i=Uu(!1),u=Zu.bind(null,gt,!1,i.queue),i=me(),c={state:e,dispatch:null,action:t,pending:null},i.queue=c,n=g2.bind(null,gt,c,u,n),c.dispatch=n,i.memoizedState=t,[e,n,!1]}function ah(t){var e=Wt();return ih(e,Dt,t)}function ih(t,e,n){if(e=Bu(t,e,eh)[0],t=Fr(On)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=pl(e)}catch(m){throw m===mi?Yr:m}else i=e;e=Wt();var c=e.queue,u=c.dispatch;return n!==e.memoizedState&&(gt.flags|=2048,xi(9,{destroy:void 0},v2.bind(null,c,n),null)),[i,u,t]}function v2(t,e){t.action=e}function lh(t){var e=Wt(),n=Dt;if(n!==null)return ih(e,n,t);Wt(),e=e.memoizedState,n=Wt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function xi(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=gt.updateQueue,e===null&&(e=Wr(),gt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function rh(){return Wt().memoizedState}function Ir(t,e,n,i){var c=me();gt.flags|=t,c.memoizedState=xi(1|e,{destroy:void 0},n,i===void 0?null:i)}function Pr(t,e,n,i){var c=Wt();i=i===void 0?null:i;var u=c.memoizedState.inst;Dt!==null&&i!==null&&Tu(i,Dt.memoizedState.deps)?c.memoizedState=xi(e,u,n,i):(gt.flags|=t,c.memoizedState=xi(1|e,u,n,i))}function oh(t,e){Ir(8390656,8,t,e)}function qu(t,e){Pr(2048,8,t,e)}function y2(t){gt.flags|=4;var e=gt.updateQueue;if(e===null)e=Wr(),gt.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function ch(t){var e=Wt().memoizedState;return y2({ref:e,nextImpl:t}),function(){if((_t&2)!==0)throw Error(r(440));return e.impl.apply(void 0,arguments)}}function uh(t,e){return Pr(4,2,t,e)}function sh(t,e){return Pr(4,4,t,e)}function fh(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dh(t,e,n){n=n!=null?n.concat([t]):null,Pr(4,4,fh.bind(null,e,t),n)}function Yu(){}function hh(t,e){var n=Wt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Tu(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function mh(t,e){var n=Wt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Tu(e,i[1]))return i[0];if(i=t(),La){Wn(!0);try{t()}finally{Wn(!1)}}return n.memoizedState=[i,e],i}function Gu(t,e,n){return n===void 0||(Cn&1073741824)!==0&&(St&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=pm(),gt.lanes|=t,ua|=t,n)}function ph(t,e,n,i){return ke(n,e)?n:gi.current!==null?(t=Gu(t,n,i),ke(t,e)||(It=!0),t):(Cn&42)===0||(Cn&1073741824)!==0&&(St&261930)===0?(It=!0,t.memoizedState=n):(t=pm(),gt.lanes|=t,ua|=t,e)}function gh(t,e,n,i,c){var u=T.p;T.p=u!==0&&8>u?u:8;var m=j.T,b={};j.T=b,Zu(t,!1,e,n);try{var M=c(),O=j.S;if(O!==null&&O(b,M),M!==null&&typeof M=="object"&&typeof M.then=="function"){var q=h2(M,i);gl(t,e,q,qe(t))}else gl(t,e,i,qe(t))}catch(V){gl(t,e,{then:function(){},status:"rejected",reason:V},qe())}finally{T.p=u,m!==null&&b.types!==null&&(m.types=b.types),j.T=m}}function x2(){}function Xu(t,e,n,i){if(t.tag!==5)throw Error(r(476));var c=vh(t).queue;gh(t,c,e,X,n===null?x2:function(){return yh(t),n(i)})}function vh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:X},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function yh(t){var e=vh(t);e.next===null&&(e=t.alternate.memoizedState),gl(t,e.next.queue,{},qe())}function Vu(){return ue(Dl)}function xh(){return Wt().memoizedState}function bh(){return Wt().memoizedState}function b2(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=qe();t=aa(n);var i=ia(e,t,n);i!==null&&(Ne(i,e,n),fl(i,e,n)),e={cache:xu()},t.payload=e;return}e=e.return}}function S2(t,e,n){var i=qe();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},to(t)?wh(e,n):(n=cu(t,e,n,i),n!==null&&(Ne(n,t,i),jh(n,e,i)))}function Sh(t,e,n){var i=qe();gl(t,e,n,i)}function gl(t,e,n,i){var c={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(to(t))wh(e,c);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var m=e.lastRenderedState,b=u(m,n);if(c.hasEagerState=!0,c.eagerState=b,ke(b,m))return kr(t,e,c,0),Bt===null&&Dr(),!1}catch{}if(n=cu(t,e,c,i),n!==null)return Ne(n,t,i),jh(n,e,i),!0}return!1}function Zu(t,e,n,i){if(i={lane:2,revertLane:js(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},to(t)){if(e)throw Error(r(479))}else e=cu(t,n,i,2),e!==null&&Ne(e,t,2)}function to(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function wh(t,e){vi=Kr=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jh(t,e,n){if((n&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ad(t,n)}}var vl={readContext:ue,use:$r,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useLayoutEffect:Vt,useInsertionEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useSyncExternalStore:Vt,useId:Vt,useHostTransitionStatus:Vt,useFormState:Vt,useActionState:Vt,useOptimistic:Vt,useMemoCache:Vt,useCacheRefresh:Vt};vl.useEffectEvent=Vt;var Mh={readContext:ue,use:$r,useCallback:function(t,e){return me().memoizedState=[t,e===void 0?null:e],t},useContext:ue,useEffect:oh,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Ir(4194308,4,fh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ir(4194308,4,t,e)},useInsertionEffect:function(t,e){Ir(4,2,t,e)},useMemo:function(t,e){var n=me();e=e===void 0?null:e;var i=t();if(La){Wn(!0);try{t()}finally{Wn(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=me();if(n!==void 0){var c=n(e);if(La){Wn(!0);try{n(e)}finally{Wn(!1)}}}else c=e;return i.memoizedState=i.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},i.queue=t,t=t.dispatch=S2.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=me();return t={current:t},e.memoizedState=t},useState:function(t){t=Uu(t);var e=t.queue,n=Sh.bind(null,gt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Yu,useDeferredValue:function(t,e){var n=me();return Gu(n,t,e)},useTransition:function(){var t=Uu(!1);return t=gh.bind(null,gt,t.queue,!0,!1),me().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=gt,c=me();if(jt){if(n===void 0)throw Error(r(407));n=n()}else{if(n=e(),Bt===null)throw Error(r(349));(St&127)!==0||Z0(i,e,n)}c.memoizedState=n;var u={value:n,getSnapshot:e};return c.queue=u,oh(K0.bind(null,i,u,t),[t]),i.flags|=2048,xi(9,{destroy:void 0},Q0.bind(null,i,u,n,e),null),n},useId:function(){var t=me(),e=Bt.identifierPrefix;if(jt){var n=hn,i=dn;n=(i&~(1<<32-De(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Jr++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=m2++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Vu,useFormState:nh,useActionState:nh,useOptimistic:function(t){var e=me();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Zu.bind(null,gt,!0,n),n.dispatch=e,[t,e]},useMemoCache:Ru,useCacheRefresh:function(){return me().memoizedState=b2.bind(null,gt)},useEffectEvent:function(t){var e=me(),n={impl:t};return e.memoizedState=n,function(){if((_t&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}},Qu={readContext:ue,use:$r,useCallback:hh,useContext:ue,useEffect:qu,useImperativeHandle:dh,useInsertionEffect:uh,useLayoutEffect:sh,useMemo:mh,useReducer:Fr,useRef:rh,useState:function(){return Fr(On)},useDebugValue:Yu,useDeferredValue:function(t,e){var n=Wt();return ph(n,Dt.memoizedState,t,e)},useTransition:function(){var t=Fr(On)[0],e=Wt().memoizedState;return[typeof t=="boolean"?t:pl(t),e]},useSyncExternalStore:V0,useId:xh,useHostTransitionStatus:Vu,useFormState:ah,useActionState:ah,useOptimistic:function(t,e){var n=Wt();return $0(n,Dt,t,e)},useMemoCache:Ru,useCacheRefresh:bh};Qu.useEffectEvent=ch;var Eh={readContext:ue,use:$r,useCallback:hh,useContext:ue,useEffect:qu,useImperativeHandle:dh,useInsertionEffect:uh,useLayoutEffect:sh,useMemo:mh,useReducer:Lu,useRef:rh,useState:function(){return Lu(On)},useDebugValue:Yu,useDeferredValue:function(t,e){var n=Wt();return Dt===null?Gu(n,t,e):ph(n,Dt.memoizedState,t,e)},useTransition:function(){var t=Lu(On)[0],e=Wt().memoizedState;return[typeof t=="boolean"?t:pl(t),e]},useSyncExternalStore:V0,useId:xh,useHostTransitionStatus:Vu,useFormState:lh,useActionState:lh,useOptimistic:function(t,e){var n=Wt();return Dt!==null?$0(n,Dt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Ru,useCacheRefresh:bh};Eh.useEffectEvent=ch;function Ku(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:x({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ju={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qe(),c=aa(i);c.payload=e,n!=null&&(c.callback=n),e=ia(t,c,i),e!==null&&(Ne(e,t,i),fl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qe(),c=aa(i);c.tag=1,c.payload=e,n!=null&&(c.callback=n),e=ia(t,c,i),e!==null&&(Ne(e,t,i),fl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qe(),i=aa(n);i.tag=2,e!=null&&(i.callback=e),e=ia(t,i,n),e!==null&&(Ne(e,t,n),fl(e,t,n))}};function zh(t,e,n,i,c,u,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,u,m):e.prototype&&e.prototype.isPureReactComponent?!al(n,i)||!al(c,u):!0}function Nh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ju.enqueueReplaceState(e,e.state,null)}function Ua(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=x({},n));for(var c in t)n[c]===void 0&&(n[c]=t[c])}return n}function Ah(t){Or(t)}function _h(t){console.error(t)}function Th(t){Or(t)}function eo(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Ch(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Wu(t,e,n){return n=aa(n),n.tag=3,n.payload={element:null},n.callback=function(){eo(t,e)},n}function Oh(t){return t=aa(t),t.tag=3,t}function Dh(t,e,n,i){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var u=i.value;t.payload=function(){return c(u)},t.callback=function(){Ch(e,n,i)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){Ch(e,n,i),typeof c!="function"&&(sa===null?sa=new Set([this]):sa.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function w2(t,e,n,i,c){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&fi(e,n,c,!0),n=Be.current,n!==null){switch(n.tag){case 31:case 13:return Ie===null?mo():n.alternate===null&&Zt===0&&(Zt=3),n.flags&=-257,n.flags|=65536,n.lanes=c,i===Gr?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),bs(t,i,c)),!1;case 22:return n.flags|=65536,i===Gr?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),bs(t,i,c)),!1}throw Error(r(435,n.tag))}return bs(t,i,c),mo(),!1}if(jt)return e=Be.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=c,i!==mu&&(t=Error(r(422),{cause:i}),rl(Je(t,n)))):(i!==mu&&(e=Error(r(423),{cause:i}),rl(Je(e,n))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,i=Je(i,n),c=Wu(t.stateNode,i,c),Eu(t,c),Zt!==4&&(Zt=2)),!1;var u=Error(r(520),{cause:i});if(u=Je(u,n),El===null?El=[u]:El.push(u),Zt!==4&&(Zt=2),e===null)return!0;i=Je(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=c&-c,n.lanes|=t,t=Wu(n.stateNode,i,t),Eu(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(sa===null||!sa.has(u))))return n.flags|=65536,c&=-c,n.lanes|=c,c=Oh(c),Dh(c,t,n,i),Eu(n,c),!1}n=n.return}while(n!==null);return!1}var $u=Error(r(461)),It=!1;function se(t,e,n,i){e.child=t===null?L0(e,null,n,i):Ba(e,t.child,n,i)}function kh(t,e,n,i,c){n=n.render;var u=e.ref;if("ref"in i){var m={};for(var b in i)b!=="ref"&&(m[b]=i[b])}else m=i;return Oa(e),i=Cu(t,e,n,m,u,c),b=Ou(),t!==null&&!It?(Du(t,e,c),Dn(t,e,c)):(jt&&b&&du(e),e.flags|=1,se(t,e,i,c),e.child)}function Rh(t,e,n,i,c){if(t===null){var u=n.type;return typeof u=="function"&&!uu(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,Bh(t,e,u,i,c)):(t=Br(n.type,null,i,e,e.mode,c),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!is(t,c)){var m=u.memoizedProps;if(n=n.compare,n=n!==null?n:al,n(m,i)&&t.ref===e.ref)return Dn(t,e,c)}return e.flags|=1,t=Nn(u,i),t.ref=e.ref,t.return=e,e.child=t}function Bh(t,e,n,i,c){if(t!==null){var u=t.memoizedProps;if(al(u,i)&&t.ref===e.ref)if(It=!1,e.pendingProps=i=u,is(t,c))(t.flags&131072)!==0&&(It=!0);else return e.lanes=t.lanes,Dn(t,e,c)}return Fu(t,e,n,i,c)}function Lh(t,e,n,i){var c=i.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,t!==null){for(i=e.child=t.child,c=0;i!==null;)c=c|i.lanes|i.childLanes,i=i.sibling;i=c&~u}else i=0,e.child=null;return Uh(t,e,u,n,i)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&qr(e,u!==null?u.cachePool:null),u!==null?q0(e,u):Nu(),Y0(e);else return i=e.lanes=536870912,Uh(t,e,u!==null?u.baseLanes|n:n,n,i)}else u!==null?(qr(e,u.cachePool),q0(e,u),ra(),e.memoizedState=null):(t!==null&&qr(e,null),Nu(),ra());return se(t,e,c,n),e.child}function yl(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Uh(t,e,n,i,c){var u=Su();return u=u===null?null:{parent:$t._currentValue,pool:u},e.memoizedState={baseLanes:n,cachePool:u},t!==null&&qr(e,null),Nu(),Y0(e),t!==null&&fi(t,e,i,!0),e.childLanes=c,null}function no(t,e){return e=io({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Hh(t,e,n){return Ba(e,t.child,null,n),t=no(e,e.pendingProps),t.flags|=2,Le(e),e.memoizedState=null,t}function j2(t,e,n){var i=e.pendingProps,c=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(jt){if(i.mode==="hidden")return t=no(e,i),e.lanes=536870912,yl(null,t);if(_u(e),(t=Ut)?(t=Fm(t,Fe),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:In!==null?{id:dn,overflow:hn}:null,retryLane:536870912,hydrationErrors:null},n=w0(t),n.return=e,e.child=n,ce=e,Ut=null)):t=null,t===null)throw ta(e);return e.lanes=536870912,null}return no(e,i)}var u=t.memoizedState;if(u!==null){var m=u.dehydrated;if(_u(e),c)if(e.flags&256)e.flags&=-257,e=Hh(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(r(558));else if(It||fi(t,e,n,!1),c=(n&t.childLanes)!==0,It||c){if(i=Bt,i!==null&&(m=_d(i,n),m!==0&&m!==u.retryLane))throw u.retryLane=m,Aa(t,m),Ne(i,t,m),$u;mo(),e=Hh(t,e,n)}else t=u.treeContext,Ut=Pe(m.nextSibling),ce=e,jt=!0,Pn=null,Fe=!1,t!==null&&E0(e,t),e=no(e,i),e.flags|=4096;return e}return t=Nn(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function ao(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(r(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Fu(t,e,n,i,c){return Oa(e),n=Cu(t,e,n,i,void 0,c),i=Ou(),t!==null&&!It?(Du(t,e,c),Dn(t,e,c)):(jt&&i&&du(e),e.flags|=1,se(t,e,n,c),e.child)}function qh(t,e,n,i,c,u){return Oa(e),e.updateQueue=null,n=X0(e,i,n,c),G0(t),i=Ou(),t!==null&&!It?(Du(t,e,u),Dn(t,e,u)):(jt&&i&&du(e),e.flags|=1,se(t,e,n,u),e.child)}function Yh(t,e,n,i,c){if(Oa(e),e.stateNode===null){var u=oi,m=n.contextType;typeof m=="object"&&m!==null&&(u=ue(m)),u=new n(i,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Ju,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=i,u.state=e.memoizedState,u.refs={},ju(e),m=n.contextType,u.context=typeof m=="object"&&m!==null?ue(m):oi,u.state=e.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(Ku(e,n,m,i),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&Ju.enqueueReplaceState(u,u.state,null),hl(e,i,u,c),dl(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){u=e.stateNode;var b=e.memoizedProps,M=Ua(n,b);u.props=M;var O=u.context,q=n.contextType;m=oi,typeof q=="object"&&q!==null&&(m=ue(q));var V=n.getDerivedStateFromProps;q=typeof V=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=e.pendingProps!==b,q||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||O!==m)&&Nh(e,u,i,m),na=!1;var k=e.memoizedState;u.state=k,hl(e,i,u,c),dl(),O=e.memoizedState,b||k!==O||na?(typeof V=="function"&&(Ku(e,n,V,i),O=e.memoizedState),(M=na||zh(e,n,M,i,k,O,m))?(q||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=O),u.props=i,u.state=O,u.context=m,i=M):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{u=e.stateNode,Mu(t,e),m=e.memoizedProps,q=Ua(n,m),u.props=q,V=e.pendingProps,k=u.context,O=n.contextType,M=oi,typeof O=="object"&&O!==null&&(M=ue(O)),b=n.getDerivedStateFromProps,(O=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==V||k!==M)&&Nh(e,u,i,M),na=!1,k=e.memoizedState,u.state=k,hl(e,i,u,c),dl();var B=e.memoizedState;m!==V||k!==B||na||t!==null&&t.dependencies!==null&&Ur(t.dependencies)?(typeof b=="function"&&(Ku(e,n,b,i),B=e.memoizedState),(q=na||zh(e,n,q,i,k,B,M)||t!==null&&t.dependencies!==null&&Ur(t.dependencies))?(O||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,B,M),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,B,M)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===t.memoizedProps&&k===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&k===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=B),u.props=i,u.state=B,u.context=M,i=q):(typeof u.componentDidUpdate!="function"||m===t.memoizedProps&&k===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&k===t.memoizedState||(e.flags|=1024),i=!1)}return u=i,ao(t,e),i=(e.flags&128)!==0,u||i?(u=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&i?(e.child=Ba(e,t.child,null,c),e.child=Ba(e,null,n,c)):se(t,e,n,c),e.memoizedState=u.state,t=e.child):t=Dn(t,e,c),t}function Gh(t,e,n,i){return Ta(),e.flags|=256,se(t,e,n,i),e.child}var Iu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pu(t){return{baseLanes:t,cachePool:C0()}}function ts(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=He),t}function Xh(t,e,n){var i=e.pendingProps,c=!1,u=(e.flags&128)!==0,m;if((m=u)||(m=t!==null&&t.memoizedState===null?!1:(Jt.current&2)!==0),m&&(c=!0,e.flags&=-129),m=(e.flags&32)!==0,e.flags&=-33,t===null){if(jt){if(c?la(e):ra(),(t=Ut)?(t=Fm(t,Fe),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:In!==null?{id:dn,overflow:hn}:null,retryLane:536870912,hydrationErrors:null},n=w0(t),n.return=e,e.child=n,ce=e,Ut=null)):t=null,t===null)throw ta(e);return Bs(t)?e.lanes=32:e.lanes=536870912,null}var b=i.children;return i=i.fallback,c?(ra(),c=e.mode,b=io({mode:"hidden",children:b},c),i=_a(i,c,n,null),b.return=e,i.return=e,b.sibling=i,e.child=b,i=e.child,i.memoizedState=Pu(n),i.childLanes=ts(t,m,n),e.memoizedState=Iu,yl(null,i)):(la(e),es(e,b))}var M=t.memoizedState;if(M!==null&&(b=M.dehydrated,b!==null)){if(u)e.flags&256?(la(e),e.flags&=-257,e=ns(t,e,n)):e.memoizedState!==null?(ra(),e.child=t.child,e.flags|=128,e=null):(ra(),b=i.fallback,c=e.mode,i=io({mode:"visible",children:i.children},c),b=_a(b,c,n,null),b.flags|=2,i.return=e,b.return=e,i.sibling=b,e.child=i,Ba(e,t.child,null,n),i=e.child,i.memoizedState=Pu(n),i.childLanes=ts(t,m,n),e.memoizedState=Iu,e=yl(null,i));else if(la(e),Bs(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var O=m.dgst;m=O,i=Error(r(419)),i.stack="",i.digest=m,rl({value:i,source:null,stack:null}),e=ns(t,e,n)}else if(It||fi(t,e,n,!1),m=(n&t.childLanes)!==0,It||m){if(m=Bt,m!==null&&(i=_d(m,n),i!==0&&i!==M.retryLane))throw M.retryLane=i,Aa(t,i),Ne(m,t,i),$u;Rs(b)||mo(),e=ns(t,e,n)}else Rs(b)?(e.flags|=192,e.child=t.child,e=null):(t=M.treeContext,Ut=Pe(b.nextSibling),ce=e,jt=!0,Pn=null,Fe=!1,t!==null&&E0(e,t),e=es(e,i.children),e.flags|=4096);return e}return c?(ra(),b=i.fallback,c=e.mode,M=t.child,O=M.sibling,i=Nn(M,{mode:"hidden",children:i.children}),i.subtreeFlags=M.subtreeFlags&65011712,O!==null?b=Nn(O,b):(b=_a(b,c,n,null),b.flags|=2),b.return=e,i.return=e,i.sibling=b,e.child=i,yl(null,i),i=e.child,b=t.child.memoizedState,b===null?b=Pu(n):(c=b.cachePool,c!==null?(M=$t._currentValue,c=c.parent!==M?{parent:M,pool:M}:c):c=C0(),b={baseLanes:b.baseLanes|n,cachePool:c}),i.memoizedState=b,i.childLanes=ts(t,m,n),e.memoizedState=Iu,yl(t.child,i)):(la(e),n=t.child,t=n.sibling,n=Nn(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(m=e.deletions,m===null?(e.deletions=[t],e.flags|=16):m.push(t)),e.child=n,e.memoizedState=null,n)}function es(t,e){return e=io({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function io(t,e){return t=Re(22,t,null,e),t.lanes=0,t}function ns(t,e,n){return Ba(e,t.child,null,n),t=es(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Vh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),vu(t.return,e,n)}function as(t,e,n,i,c,u){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:c,treeForkCount:u}:(m.isBackwards=e,m.rendering=null,m.renderingStartTime=0,m.last=i,m.tail=n,m.tailMode=c,m.treeForkCount=u)}function Zh(t,e,n){var i=e.pendingProps,c=i.revealOrder,u=i.tail;i=i.children;var m=Jt.current,b=(m&2)!==0;if(b?(m=m&1|2,e.flags|=128):m&=1,rt(Jt,m),se(t,e,i,n),i=jt?ll:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vh(t,n,e);else if(t.tag===19)Vh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(n=e.child,c=null;n!==null;)t=n.alternate,t!==null&&Qr(t)===null&&(c=n),n=n.sibling;n=c,n===null?(c=e.child,e.child=null):(c=n.sibling,n.sibling=null),as(e,!1,c,n,u,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,c=e.child,e.child=null;c!==null;){if(t=c.alternate,t!==null&&Qr(t)===null){e.child=c;break}t=c.sibling,c.sibling=n,n=c,c=t}as(e,!0,n,null,u,i);break;case"together":as(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function Dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ua|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(fi(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,n=Nn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function is(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Ur(t)))}function M2(t,e,n){switch(e.tag){case 3:re(e,e.stateNode.containerInfo),ea(e,$t,t.memoizedState.cache),Ta();break;case 27:case 5:Ve(e);break;case 4:re(e,e.stateNode.containerInfo);break;case 10:ea(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,_u(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(la(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Xh(t,e,n):(la(e),t=Dn(t,e,n),t!==null?t.sibling:null);la(e);break;case 19:var c=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(fi(t,e,n,!1),i=(n&e.childLanes)!==0),c){if(i)return Zh(t,e,n);e.flags|=128}if(c=e.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),rt(Jt,Jt.current),i)break;return null;case 22:return e.lanes=0,Lh(t,e,n,e.pendingProps);case 24:ea(e,$t,t.memoizedState.cache)}return Dn(t,e,n)}function Qh(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)It=!0;else{if(!is(t,n)&&(e.flags&128)===0)return It=!1,M2(t,e,n);It=(t.flags&131072)!==0}else It=!1,jt&&(e.flags&1048576)!==0&&M0(e,ll,e.index);switch(e.lanes=0,e.tag){case 16:t:{var i=e.pendingProps;if(t=ka(e.elementType),e.type=t,typeof t=="function")uu(t)?(i=Ua(t,i),e.tag=1,e=Yh(null,e,t,i,n)):(e.tag=0,e=Fu(null,e,t,i,n));else{if(t!=null){var c=t.$$typeof;if(c===U){e.tag=11,e=kh(null,e,t,i,n);break t}else if(c===W){e.tag=14,e=Rh(null,e,t,i,n);break t}}throw e=_(t)||t,Error(r(306,e,""))}}return e;case 0:return Fu(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,c=Ua(i,e.pendingProps),Yh(t,e,i,c,n);case 3:t:{if(re(e,e.stateNode.containerInfo),t===null)throw Error(r(387));i=e.pendingProps;var u=e.memoizedState;c=u.element,Mu(t,e),hl(e,i,null,n);var m=e.memoizedState;if(i=m.cache,ea(e,$t,i),i!==u.cache&&yu(e,[$t],n,!0),dl(),i=m.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:m.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Gh(t,e,i,n);break t}else if(i!==c){c=Je(Error(r(424)),e),rl(c),e=Gh(t,e,i,n);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ut=Pe(t.firstChild),ce=e,jt=!0,Pn=null,Fe=!0,n=L0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ta(),i===c){e=Dn(t,e,n);break t}se(t,e,i,n)}e=e.child}return e;case 26:return ao(t,e),t===null?(n=ap(e.type,null,e.pendingProps,null))?e.memoizedState=n:jt||(n=e.type,t=e.pendingProps,i=So(Xt.current).createElement(n),i[oe]=e,i[Se]=t,fe(i,n,t),ae(i),e.stateNode=i):e.memoizedState=ap(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ve(e),t===null&&jt&&(i=e.stateNode=tp(e.type,e.pendingProps,Xt.current),ce=e,Fe=!0,c=Ut,ma(e.type)?(Ls=c,Ut=Pe(i.firstChild)):Ut=c),se(t,e,e.pendingProps.children,n),ao(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&jt&&((c=i=Ut)&&(i=ty(i,e.type,e.pendingProps,Fe),i!==null?(e.stateNode=i,ce=e,Ut=Pe(i.firstChild),Fe=!1,c=!0):c=!1),c||ta(e)),Ve(e),c=e.type,u=e.pendingProps,m=t!==null?t.memoizedProps:null,i=u.children,Os(c,u)?i=null:m!==null&&Os(c,m)&&(e.flags|=32),e.memoizedState!==null&&(c=Cu(t,e,p2,null,null,n),Dl._currentValue=c),ao(t,e),se(t,e,i,n),e.child;case 6:return t===null&&jt&&((t=n=Ut)&&(n=ey(n,e.pendingProps,Fe),n!==null?(e.stateNode=n,ce=e,Ut=null,t=!0):t=!1),t||ta(e)),null;case 13:return Xh(t,e,n);case 4:return re(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ba(e,null,i,n):se(t,e,i,n),e.child;case 11:return kh(t,e,e.type,e.pendingProps,n);case 7:return se(t,e,e.pendingProps,n),e.child;case 8:return se(t,e,e.pendingProps.children,n),e.child;case 12:return se(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,ea(e,e.type,i.value),se(t,e,i.children,n),e.child;case 9:return c=e.type._context,i=e.pendingProps.children,Oa(e),c=ue(c),i=i(c),e.flags|=1,se(t,e,i,n),e.child;case 14:return Rh(t,e,e.type,e.pendingProps,n);case 15:return Bh(t,e,e.type,e.pendingProps,n);case 19:return Zh(t,e,n);case 31:return j2(t,e,n);case 22:return Lh(t,e,n,e.pendingProps);case 24:return Oa(e),i=ue($t),t===null?(c=Su(),c===null&&(c=Bt,u=xu(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=n),c=u),e.memoizedState={parent:i,cache:c},ju(e),ea(e,$t,c)):((t.lanes&n)!==0&&(Mu(t,e),hl(e,null,null,n),dl()),c=t.memoizedState,u=e.memoizedState,c.parent!==i?(c={parent:i,cache:i},e.memoizedState=c,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=c),ea(e,$t,i)):(i=u.cache,ea(e,$t,i),i!==c.cache&&yu(e,[$t],n,!0))),se(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function kn(t){t.flags|=4}function ls(t,e,n,i,c){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(xm())t.flags|=8192;else throw Ra=Gr,wu}else t.flags&=-16777217}function Kh(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!cp(e))if(xm())t.flags|=8192;else throw Ra=Gr,wu}function lo(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?zd():536870912,t.lanes|=e,ji|=e)}function xl(t,e){if(!jt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var c=t.child;c!==null;)n|=c.lanes|c.childLanes,i|=c.subtreeFlags&65011712,i|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)n|=c.lanes|c.childLanes,i|=c.subtreeFlags,i|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function E2(t,e,n){var i=e.pendingProps;switch(hu(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return Ht(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Tn($t),Ot(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(si(e)?kn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,pu())),Ht(e),null;case 26:var c=e.type,u=e.memoizedState;return t===null?(kn(e),u!==null?(Ht(e),Kh(e,u)):(Ht(e),ls(e,c,null,i,n))):u?u!==t.memoizedState?(kn(e),Ht(e),Kh(e,u)):(Ht(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&kn(e),Ht(e),ls(e,c,t,i,n)),null;case 27:if(fn(e),n=Xt.current,c=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&kn(e);else{if(!i){if(e.stateNode===null)throw Error(r(166));return Ht(e),null}t=pt.current,si(e)?z0(e):(t=tp(c,i,n),e.stateNode=t,kn(e))}return Ht(e),null;case 5:if(fn(e),c=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&kn(e);else{if(!i){if(e.stateNode===null)throw Error(r(166));return Ht(e),null}if(u=pt.current,si(e))z0(e);else{var m=So(Xt.current);switch(u){case 1:u=m.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=m.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=m.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=m.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=m.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof i.is=="string"?m.createElement("select",{is:i.is}):m.createElement("select"),i.multiple?u.multiple=!0:i.size&&(u.size=i.size);break;default:u=typeof i.is=="string"?m.createElement(c,{is:i.is}):m.createElement(c)}}u[oe]=e,u[Se]=i;t:for(m=e.child;m!==null;){if(m.tag===5||m.tag===6)u.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break t;for(;m.sibling===null;){if(m.return===null||m.return===e)break t;m=m.return}m.sibling.return=m.return,m=m.sibling}e.stateNode=u;t:switch(fe(u,c,i),c){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&kn(e)}}return Ht(e),ls(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&kn(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(r(166));if(t=Xt.current,si(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,c=ce,c!==null)switch(c.tag){case 27:case 5:i=c.memoizedProps}t[oe]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Xm(t.nodeValue,n)),t||ta(e,!0)}else t=So(t).createTextNode(i),t[oe]=e,e.stateNode=t}return Ht(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=si(e),n!==null){if(t===null){if(!i)throw Error(r(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[oe]=e}else Ta(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ht(e),t=!1}else n=pu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Le(e),e):(Le(e),null);if((e.flags&128)!==0)throw Error(r(558))}return Ht(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=si(e),i!==null&&i.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=e.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[oe]=e}else Ta(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ht(e),c=!1}else c=pu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return e.flags&256?(Le(e),e):(Le(e),null)}return Le(e),(e.flags&128)!==0?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,c=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(c=i.alternate.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==c&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),lo(e,e.updateQueue),Ht(e),null);case 4:return Ot(),t===null&&Ns(e.stateNode.containerInfo),Ht(e),null;case 10:return Tn(e.type),Ht(e),null;case 19:if(lt(Jt),i=e.memoizedState,i===null)return Ht(e),null;if(c=(e.flags&128)!==0,u=i.rendering,u===null)if(c)xl(i,!1);else{if(Zt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Qr(t),u!==null){for(e.flags|=128,xl(i,!1),t=u.updateQueue,e.updateQueue=t,lo(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)S0(n,t),n=n.sibling;return rt(Jt,Jt.current&1|2),jt&&An(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&Ce()>so&&(e.flags|=128,c=!0,xl(i,!1),e.lanes=4194304)}else{if(!c)if(t=Qr(u),t!==null){if(e.flags|=128,c=!0,t=t.updateQueue,e.updateQueue=t,lo(e,t),xl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!jt)return Ht(e),null}else 2*Ce()-i.renderingStartTime>so&&n!==536870912&&(e.flags|=128,c=!0,xl(i,!1),e.lanes=4194304);i.isBackwards?(u.sibling=e.child,e.child=u):(t=i.last,t!==null?t.sibling=u:e.child=u,i.last=u)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ce(),t.sibling=null,n=Jt.current,rt(Jt,c?n&1|2:n&1),jt&&An(e,i.treeForkCount),t):(Ht(e),null);case 22:case 23:return Le(e),Au(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(n&536870912)!==0&&(e.flags&128)===0&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),n=e.updateQueue,n!==null&&lo(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&lt(Da),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Tn($t),Ht(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function z2(t,e){switch(hu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Tn($t),Ot(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return fn(e),null;case 31:if(e.memoizedState!==null){if(Le(e),e.alternate===null)throw Error(r(340));Ta()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Le(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));Ta()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(Jt),null;case 4:return Ot(),null;case 10:return Tn(e.type),null;case 22:case 23:return Le(e),Au(),t!==null&&lt(Da),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Tn($t),null;case 25:return null;default:return null}}function Jh(t,e){switch(hu(e),e.tag){case 3:Tn($t),Ot();break;case 26:case 27:case 5:fn(e);break;case 4:Ot();break;case 31:e.memoizedState!==null&&Le(e);break;case 13:Le(e);break;case 19:lt(Jt);break;case 10:Tn(e.type);break;case 22:case 23:Le(e),Au(),t!==null&&lt(Da);break;case 24:Tn($t)}}function bl(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var c=i.next;n=c;do{if((n.tag&t)===t){i=void 0;var u=n.create,m=n.inst;i=u(),m.destroy=i}n=n.next}while(n!==c)}}catch(b){Ct(e,e.return,b)}}function oa(t,e,n){try{var i=e.updateQueue,c=i!==null?i.lastEffect:null;if(c!==null){var u=c.next;i=u;do{if((i.tag&t)===t){var m=i.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,c=e;var M=n,O=b;try{O()}catch(q){Ct(c,M,q)}}}i=i.next}while(i!==u)}}catch(q){Ct(e,e.return,q)}}function Wh(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{H0(e,n)}catch(i){Ct(t,t.return,i)}}}function $h(t,e,n){n.props=Ua(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){Ct(t,e,i)}}function Sl(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(c){Ct(t,e,c)}}function mn(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(c){Ct(t,e,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){Ct(t,e,c)}else n.current=null}function Fh(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(c){Ct(t,t.return,c)}}function rs(t,e,n){try{var i=t.stateNode;J2(i,t.type,n,e),i[Se]=e}catch(c){Ct(t,t.return,c)}}function Ih(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ma(t.type)||t.tag===4}function os(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ih(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ma(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cs(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=En));else if(i!==4&&(i===27&&ma(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(cs(t,e,n),t=t.sibling;t!==null;)cs(t,e,n),t=t.sibling}function ro(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&ma(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(ro(t,e,n),t=t.sibling;t!==null;)ro(t,e,n),t=t.sibling}function Ph(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,c=e.attributes;c.length;)e.removeAttributeNode(c[0]);fe(e,i,n),e[oe]=t,e[Se]=n}catch(u){Ct(t,t.return,u)}}var Rn=!1,Pt=!1,us=!1,tm=typeof WeakSet=="function"?WeakSet:Set,ie=null;function N2(t,e){if(t=t.containerInfo,Ts=Ao,t=d0(t),nu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var c=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var m=0,b=-1,M=-1,O=0,q=0,V=t,k=null;e:for(;;){for(var B;V!==n||c!==0&&V.nodeType!==3||(b=m+c),V!==u||i!==0&&V.nodeType!==3||(M=m+i),V.nodeType===3&&(m+=V.nodeValue.length),(B=V.firstChild)!==null;)k=V,V=B;for(;;){if(V===t)break e;if(k===n&&++O===c&&(b=m),k===u&&++q===i&&(M=m),(B=V.nextSibling)!==null)break;V=k,k=V.parentNode}V=B}n=b===-1||M===-1?null:{start:b,end:M}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cs={focusedElem:t,selectionRange:n},Ao=!1,ie=e;ie!==null;)if(e=ie,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ie=t;else for(;ie!==null;){switch(e=ie,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)c=t[n],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,c=u.memoizedProps,u=u.memoizedState,i=n.stateNode;try{var tt=Ua(n.type,c);t=i.getSnapshotBeforeUpdate(tt,u),i.__reactInternalSnapshotBeforeUpdate=t}catch(ft){Ct(n,n.return,ft)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)ks(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ks(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,ie=t;break}ie=e.return}}function em(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Ln(t,n),i&4&&bl(5,n);break;case 1:if(Ln(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(m){Ct(n,n.return,m)}else{var c=Ua(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(c,e,t.__reactInternalSnapshotBeforeUpdate)}catch(m){Ct(n,n.return,m)}}i&64&&Wh(n),i&512&&Sl(n,n.return);break;case 3:if(Ln(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{H0(t,e)}catch(m){Ct(n,n.return,m)}}break;case 27:e===null&&i&4&&Ph(n);case 26:case 5:Ln(t,n),e===null&&i&4&&Fh(n),i&512&&Sl(n,n.return);break;case 12:Ln(t,n);break;case 31:Ln(t,n),i&4&&im(t,n);break;case 13:Ln(t,n),i&4&&lm(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=B2.bind(null,n),ny(t,n))));break;case 22:if(i=n.memoizedState!==null||Rn,!i){e=e!==null&&e.memoizedState!==null||Pt,c=Rn;var u=Pt;Rn=i,(Pt=e)&&!u?Un(t,n,(n.subtreeFlags&8772)!==0):Ln(t,n),Rn=c,Pt=u}break;case 30:break;default:Ln(t,n)}}function nm(t){var e=t.alternate;e!==null&&(t.alternate=null,nm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Hc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qt=null,je=!1;function Bn(t,e,n){for(n=n.child;n!==null;)am(t,e,n),n=n.sibling}function am(t,e,n){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(Zi,n)}catch{}switch(n.tag){case 26:Pt||mn(n,e),Bn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Pt||mn(n,e);var i=qt,c=je;ma(n.type)&&(qt=n.stateNode,je=!1),Bn(t,e,n),Tl(n.stateNode),qt=i,je=c;break;case 5:Pt||mn(n,e);case 6:if(i=qt,c=je,qt=null,Bn(t,e,n),qt=i,je=c,qt!==null)if(je)try{(qt.nodeType===9?qt.body:qt.nodeName==="HTML"?qt.ownerDocument.body:qt).removeChild(n.stateNode)}catch(u){Ct(n,e,u)}else try{qt.removeChild(n.stateNode)}catch(u){Ct(n,e,u)}break;case 18:qt!==null&&(je?(t=qt,Wm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Ci(t)):Wm(qt,n.stateNode));break;case 4:i=qt,c=je,qt=n.stateNode.containerInfo,je=!0,Bn(t,e,n),qt=i,je=c;break;case 0:case 11:case 14:case 15:oa(2,n,e),Pt||oa(4,n,e),Bn(t,e,n);break;case 1:Pt||(mn(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&$h(n,e,i)),Bn(t,e,n);break;case 21:Bn(t,e,n);break;case 22:Pt=(i=Pt)||n.memoizedState!==null,Bn(t,e,n),Pt=i;break;default:Bn(t,e,n)}}function im(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ci(t)}catch(n){Ct(e,e.return,n)}}}function lm(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ci(t)}catch(n){Ct(e,e.return,n)}}function A2(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new tm),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new tm),e;default:throw Error(r(435,t.tag))}}function oo(t,e){var n=A2(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var c=L2.bind(null,t,i);i.then(c,c)}})}function Me(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var c=n[i],u=t,m=e,b=m;t:for(;b!==null;){switch(b.tag){case 27:if(ma(b.type)){qt=b.stateNode,je=!1;break t}break;case 5:qt=b.stateNode,je=!1;break t;case 3:case 4:qt=b.stateNode.containerInfo,je=!0;break t}b=b.return}if(qt===null)throw Error(r(160));am(u,m,c),qt=null,je=!1,u=c.alternate,u!==null&&(u.return=null),c.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)rm(e,t),e=e.sibling}var rn=null;function rm(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Me(e,t),Ee(t),i&4&&(oa(3,t,t.return),bl(3,t),oa(5,t,t.return));break;case 1:Me(e,t),Ee(t),i&512&&(Pt||n===null||mn(n,n.return)),i&64&&Rn&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var c=rn;if(Me(e,t),Ee(t),i&512&&(Pt||n===null||mn(n,n.return)),i&4){var u=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){t:{i=t.type,n=t.memoizedProps,c=c.ownerDocument||c;e:switch(i){case"title":u=c.getElementsByTagName("title")[0],(!u||u[Ji]||u[oe]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=c.createElement(i),c.head.insertBefore(u,c.querySelector("head > title"))),fe(u,i,n),u[oe]=t,ae(u),i=u;break t;case"link":var m=rp("link","href",c).get(i+(n.href||""));if(m){for(var b=0;b<m.length;b++)if(u=m[b],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(b,1);break e}}u=c.createElement(i),fe(u,i,n),c.head.appendChild(u);break;case"meta":if(m=rp("meta","content",c).get(i+(n.content||""))){for(b=0;b<m.length;b++)if(u=m[b],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(b,1);break e}}u=c.createElement(i),fe(u,i,n),c.head.appendChild(u);break;default:throw Error(r(468,i))}u[oe]=t,ae(u),i=u}t.stateNode=i}else op(c,t.type,t.stateNode);else t.stateNode=lp(c,i,t.memoizedProps);else u!==i?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,i===null?op(c,t.type,t.stateNode):lp(c,i,t.memoizedProps)):i===null&&t.stateNode!==null&&rs(t,t.memoizedProps,n.memoizedProps)}break;case 27:Me(e,t),Ee(t),i&512&&(Pt||n===null||mn(n,n.return)),n!==null&&i&4&&rs(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Me(e,t),Ee(t),i&512&&(Pt||n===null||mn(n,n.return)),t.flags&32){c=t.stateNode;try{ti(c,"")}catch(tt){Ct(t,t.return,tt)}}i&4&&t.stateNode!=null&&(c=t.memoizedProps,rs(t,c,n!==null?n.memoizedProps:c)),i&1024&&(us=!0);break;case 6:if(Me(e,t),Ee(t),i&4){if(t.stateNode===null)throw Error(r(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(tt){Ct(t,t.return,tt)}}break;case 3:if(Mo=null,c=rn,rn=wo(e.containerInfo),Me(e,t),rn=c,Ee(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ci(e.containerInfo)}catch(tt){Ct(t,t.return,tt)}us&&(us=!1,om(t));break;case 4:i=rn,rn=wo(t.stateNode.containerInfo),Me(e,t),Ee(t),rn=i;break;case 12:Me(e,t),Ee(t);break;case 31:Me(e,t),Ee(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,oo(t,i)));break;case 13:Me(e,t),Ee(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(uo=Ce()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,oo(t,i)));break;case 22:c=t.memoizedState!==null;var M=n!==null&&n.memoizedState!==null,O=Rn,q=Pt;if(Rn=O||c,Pt=q||M,Me(e,t),Pt=q,Rn=O,Ee(t),i&8192)t:for(e=t.stateNode,e._visibility=c?e._visibility&-2:e._visibility|1,c&&(n===null||M||Rn||Pt||Ha(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){M=n=e;try{if(u=M.stateNode,c)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=M.stateNode;var V=M.memoizedProps.style,k=V!=null&&V.hasOwnProperty("display")?V.display:null;b.style.display=k==null||typeof k=="boolean"?"":(""+k).trim()}}catch(tt){Ct(M,M.return,tt)}}}else if(e.tag===6){if(n===null){M=e;try{M.stateNode.nodeValue=c?"":M.memoizedProps}catch(tt){Ct(M,M.return,tt)}}}else if(e.tag===18){if(n===null){M=e;try{var B=M.stateNode;c?$m(B,!0):$m(M.stateNode,!1)}catch(tt){Ct(M,M.return,tt)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,oo(t,n))));break;case 19:Me(e,t),Ee(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,oo(t,i)));break;case 30:break;case 21:break;default:Me(e,t),Ee(t)}}function Ee(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(Ih(i)){n=i;break}i=i.return}if(n==null)throw Error(r(160));switch(n.tag){case 27:var c=n.stateNode,u=os(t);ro(t,u,c);break;case 5:var m=n.stateNode;n.flags&32&&(ti(m,""),n.flags&=-33);var b=os(t);ro(t,b,m);break;case 3:case 4:var M=n.stateNode.containerInfo,O=os(t);cs(t,O,M);break;default:throw Error(r(161))}}catch(q){Ct(t,t.return,q)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function om(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;om(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ln(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)em(t,e.alternate,e),e=e.sibling}function Ha(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:oa(4,e,e.return),Ha(e);break;case 1:mn(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&$h(e,e.return,n),Ha(e);break;case 27:Tl(e.stateNode);case 26:case 5:mn(e,e.return),Ha(e);break;case 22:e.memoizedState===null&&Ha(e);break;case 30:Ha(e);break;default:Ha(e)}t=t.sibling}}function Un(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,c=t,u=e,m=u.flags;switch(u.tag){case 0:case 11:case 15:Un(c,u,n),bl(4,u);break;case 1:if(Un(c,u,n),i=u,c=i.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(O){Ct(i,i.return,O)}if(i=u,c=i.updateQueue,c!==null){var b=i.stateNode;try{var M=c.shared.hiddenCallbacks;if(M!==null)for(c.shared.hiddenCallbacks=null,c=0;c<M.length;c++)U0(M[c],b)}catch(O){Ct(i,i.return,O)}}n&&m&64&&Wh(u),Sl(u,u.return);break;case 27:Ph(u);case 26:case 5:Un(c,u,n),n&&i===null&&m&4&&Fh(u),Sl(u,u.return);break;case 12:Un(c,u,n);break;case 31:Un(c,u,n),n&&m&4&&im(c,u);break;case 13:Un(c,u,n),n&&m&4&&lm(c,u);break;case 22:u.memoizedState===null&&Un(c,u,n),Sl(u,u.return);break;case 30:break;default:Un(c,u,n)}e=e.sibling}}function ss(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&ol(n))}function fs(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ol(t))}function on(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cm(t,e,n,i),e=e.sibling}function cm(t,e,n,i){var c=e.flags;switch(e.tag){case 0:case 11:case 15:on(t,e,n,i),c&2048&&bl(9,e);break;case 1:on(t,e,n,i);break;case 3:on(t,e,n,i),c&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ol(t)));break;case 12:if(c&2048){on(t,e,n,i),t=e.stateNode;try{var u=e.memoizedProps,m=u.id,b=u.onPostCommit;typeof b=="function"&&b(m,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(M){Ct(e,e.return,M)}}else on(t,e,n,i);break;case 31:on(t,e,n,i);break;case 13:on(t,e,n,i);break;case 23:break;case 22:u=e.stateNode,m=e.alternate,e.memoizedState!==null?u._visibility&2?on(t,e,n,i):wl(t,e):u._visibility&2?on(t,e,n,i):(u._visibility|=2,bi(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),c&2048&&ss(m,e);break;case 24:on(t,e,n,i),c&2048&&fs(e.alternate,e);break;default:on(t,e,n,i)}}function bi(t,e,n,i,c){for(c=c&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,m=e,b=n,M=i,O=m.flags;switch(m.tag){case 0:case 11:case 15:bi(u,m,b,M,c),bl(8,m);break;case 23:break;case 22:var q=m.stateNode;m.memoizedState!==null?q._visibility&2?bi(u,m,b,M,c):wl(u,m):(q._visibility|=2,bi(u,m,b,M,c)),c&&O&2048&&ss(m.alternate,m);break;case 24:bi(u,m,b,M,c),c&&O&2048&&fs(m.alternate,m);break;default:bi(u,m,b,M,c)}e=e.sibling}}function wl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,c=i.flags;switch(i.tag){case 22:wl(n,i),c&2048&&ss(i.alternate,i);break;case 24:wl(n,i),c&2048&&fs(i.alternate,i);break;default:wl(n,i)}e=e.sibling}}var jl=8192;function Si(t,e,n){if(t.subtreeFlags&jl)for(t=t.child;t!==null;)um(t,e,n),t=t.sibling}function um(t,e,n){switch(t.tag){case 26:Si(t,e,n),t.flags&jl&&t.memoizedState!==null&&my(n,rn,t.memoizedState,t.memoizedProps);break;case 5:Si(t,e,n);break;case 3:case 4:var i=rn;rn=wo(t.stateNode.containerInfo),Si(t,e,n),rn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=jl,jl=16777216,Si(t,e,n),jl=i):Si(t,e,n));break;default:Si(t,e,n)}}function sm(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ml(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];ie=i,dm(i,t)}sm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fm(t),t=t.sibling}function fm(t){switch(t.tag){case 0:case 11:case 15:Ml(t),t.flags&2048&&oa(9,t,t.return);break;case 3:Ml(t);break;case 12:Ml(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,co(t)):Ml(t);break;default:Ml(t)}}function co(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];ie=i,dm(i,t)}sm(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:oa(8,e,e.return),co(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,co(e));break;default:co(e)}t=t.sibling}}function dm(t,e){for(;ie!==null;){var n=ie;switch(n.tag){case 0:case 11:case 15:oa(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ol(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ie=i;else t:for(n=t;ie!==null;){i=ie;var c=i.sibling,u=i.return;if(nm(i),i===n){ie=null;break t}if(c!==null){c.return=u,ie=c;break t}ie=u}}}var _2={getCacheForType:function(t){var e=ue($t),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return ue($t).controller.signal}},T2=typeof WeakMap=="function"?WeakMap:Map,_t=0,Bt=null,xt=null,St=0,Tt=0,Ue=null,ca=!1,wi=!1,ds=!1,Hn=0,Zt=0,ua=0,qa=0,hs=0,He=0,ji=0,El=null,ze=null,ms=!1,uo=0,hm=0,so=1/0,fo=null,sa=null,ee=0,fa=null,Mi=null,qn=0,ps=0,gs=null,mm=null,zl=0,vs=null;function qe(){return(_t&2)!==0&&St!==0?St&-St:j.T!==null?js():Td()}function pm(){if(He===0)if((St&536870912)===0||jt){var t=xr;xr<<=1,(xr&3932160)===0&&(xr=262144),He=t}else He=536870912;return t=Be.current,t!==null&&(t.flags|=32),He}function Ne(t,e,n){(t===Bt&&(Tt===2||Tt===9)||t.cancelPendingCommit!==null)&&(Ei(t,0),da(t,St,He,!1)),Ki(t,n),((_t&2)===0||t!==Bt)&&(t===Bt&&((_t&2)===0&&(qa|=n),Zt===4&&da(t,St,He,!1)),pn(t))}function gm(t,e,n){if((_t&6)!==0)throw Error(r(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Qi(t,e),c=i?D2(t,e):xs(t,e,!0),u=i;do{if(c===0){wi&&!i&&da(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!C2(n)){c=xs(t,e,!1),u=!1;continue}if(c===2){if(u=e,t.errorRecoveryDisabledLanes&u)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){e=m;t:{var b=t;c=El;var M=b.current.memoizedState.isDehydrated;if(M&&(Ei(b,m).flags|=256),m=xs(b,m,!1),m!==2){if(ds&&!M){b.errorRecoveryDisabledLanes|=u,qa|=u,c=4;break t}u=ze,ze=c,u!==null&&(ze===null?ze=u:ze.push.apply(ze,u))}c=m}if(u=!1,c!==2)continue}}if(c===1){Ei(t,0),da(t,e,0,!0);break}t:{switch(i=t,u=c,u){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:da(i,e,He,!ca);break t;case 2:ze=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(c=uo+300-Ce(),10<c)){if(da(i,e,He,!ca),Sr(i,0,!0)!==0)break t;qn=e,i.timeoutHandle=Km(vm.bind(null,i,n,ze,fo,ms,e,He,qa,ji,ca,u,"Throttled",-0,0),c);break t}vm(i,n,ze,fo,ms,e,He,qa,ji,ca,u,null,-0,0)}}break}while(!0);pn(t)}function vm(t,e,n,i,c,u,m,b,M,O,q,V,k,B){if(t.timeoutHandle=-1,V=e.subtreeFlags,V&8192||(V&16785408)===16785408){V={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:En},um(e,u,V);var tt=(u&62914560)===u?uo-Ce():(u&4194048)===u?hm-Ce():0;if(tt=py(V,tt),tt!==null){qn=u,t.cancelPendingCommit=tt(Em.bind(null,t,e,u,n,i,c,m,b,M,q,V,null,k,B)),da(t,u,m,!O);return}}Em(t,e,u,n,i,c,m,b,M)}function C2(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var c=n[i],u=c.getSnapshot;c=c.value;try{if(!ke(u(),c))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function da(t,e,n,i){e&=~hs,e&=~qa,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var c=e;0<c;){var u=31-De(c),m=1<<u;i[u]=-1,c&=~m}n!==0&&Nd(t,n,e)}function ho(){return(_t&6)===0?(Nl(0),!1):!0}function ys(){if(xt!==null){if(Tt===0)var t=xt.return;else t=xt,_n=Ca=null,ku(t),pi=null,ul=0,t=xt;for(;t!==null;)Jh(t.alternate,t),t=t.return;xt=null}}function Ei(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,F2(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),qn=0,ys(),Bt=t,xt=n=Nn(t.current,null),St=e,Tt=0,Ue=null,ca=!1,wi=Qi(t,e),ds=!1,ji=He=hs=qa=ua=Zt=0,ze=El=null,ms=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var c=31-De(i),u=1<<c;e|=t[c],i&=~u}return Hn=e,Dr(),n}function ym(t,e){gt=null,j.H=vl,e===mi||e===Yr?(e=k0(),Tt=3):e===wu?(e=k0(),Tt=4):Tt=e===$u?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ue=e,xt===null&&(Zt=1,eo(t,Je(e,t.current)))}function xm(){var t=Be.current;return t===null?!0:(St&4194048)===St?Ie===null:(St&62914560)===St||(St&536870912)!==0?t===Ie:!1}function bm(){var t=j.H;return j.H=vl,t===null?vl:t}function Sm(){var t=j.A;return j.A=_2,t}function mo(){Zt=4,ca||(St&4194048)!==St&&Be.current!==null||(wi=!0),(ua&134217727)===0&&(qa&134217727)===0||Bt===null||da(Bt,St,He,!1)}function xs(t,e,n){var i=_t;_t|=2;var c=bm(),u=Sm();(Bt!==t||St!==e)&&(fo=null,Ei(t,e)),e=!1;var m=Zt;t:do try{if(Tt!==0&&xt!==null){var b=xt,M=Ue;switch(Tt){case 8:ys(),m=6;break t;case 3:case 2:case 9:case 6:Be.current===null&&(e=!0);var O=Tt;if(Tt=0,Ue=null,zi(t,b,M,O),n&&wi){m=0;break t}break;default:O=Tt,Tt=0,Ue=null,zi(t,b,M,O)}}O2(),m=Zt;break}catch(q){ym(t,q)}while(!0);return e&&t.shellSuspendCounter++,_n=Ca=null,_t=i,j.H=c,j.A=u,xt===null&&(Bt=null,St=0,Dr()),m}function O2(){for(;xt!==null;)wm(xt)}function D2(t,e){var n=_t;_t|=2;var i=bm(),c=Sm();Bt!==t||St!==e?(fo=null,so=Ce()+500,Ei(t,e)):wi=Qi(t,e);t:do try{if(Tt!==0&&xt!==null){e=xt;var u=Ue;e:switch(Tt){case 1:Tt=0,Ue=null,zi(t,e,u,1);break;case 2:case 9:if(O0(u)){Tt=0,Ue=null,jm(e);break}e=function(){Tt!==2&&Tt!==9||Bt!==t||(Tt=7),pn(t)},u.then(e,e);break t;case 3:Tt=7;break t;case 4:Tt=5;break t;case 7:O0(u)?(Tt=0,Ue=null,jm(e)):(Tt=0,Ue=null,zi(t,e,u,7));break;case 5:var m=null;switch(xt.tag){case 26:m=xt.memoizedState;case 5:case 27:var b=xt;if(m?cp(m):b.stateNode.complete){Tt=0,Ue=null;var M=b.sibling;if(M!==null)xt=M;else{var O=b.return;O!==null?(xt=O,po(O)):xt=null}break e}}Tt=0,Ue=null,zi(t,e,u,5);break;case 6:Tt=0,Ue=null,zi(t,e,u,6);break;case 8:ys(),Zt=6;break t;default:throw Error(r(462))}}k2();break}catch(q){ym(t,q)}while(!0);return _n=Ca=null,j.H=i,j.A=c,_t=n,xt!==null?0:(Bt=null,St=0,Dr(),Zt)}function k2(){for(;xt!==null&&!av();)wm(xt)}function wm(t){var e=Qh(t.alternate,t,Hn);t.memoizedProps=t.pendingProps,e===null?po(t):xt=e}function jm(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=qh(n,e,e.pendingProps,e.type,void 0,St);break;case 11:e=qh(n,e,e.pendingProps,e.type.render,e.ref,St);break;case 5:ku(e);default:Jh(n,e),e=xt=S0(e,Hn),e=Qh(n,e,Hn)}t.memoizedProps=t.pendingProps,e===null?po(t):xt=e}function zi(t,e,n,i){_n=Ca=null,ku(e),pi=null,ul=0;var c=e.return;try{if(w2(t,c,e,n,St)){Zt=1,eo(t,Je(n,t.current)),xt=null;return}}catch(u){if(c!==null)throw xt=c,u;Zt=1,eo(t,Je(n,t.current)),xt=null;return}e.flags&32768?(jt||i===1?t=!0:wi||(St&536870912)!==0?t=!1:(ca=t=!0,(i===2||i===9||i===3||i===6)&&(i=Be.current,i!==null&&i.tag===13&&(i.flags|=16384))),Mm(e,t)):po(e)}function po(t){var e=t;do{if((e.flags&32768)!==0){Mm(e,ca);return}t=e.return;var n=E2(e.alternate,e,Hn);if(n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);Zt===0&&(Zt=5)}function Mm(t,e){do{var n=z2(t.alternate,t);if(n!==null){n.flags&=32767,xt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){xt=t;return}xt=t=n}while(t!==null);Zt=6,xt=null}function Em(t,e,n,i,c,u,m,b,M){t.cancelPendingCommit=null;do go();while(ee!==0);if((_t&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(u=e.lanes|e.childLanes,u|=ou,hv(t,n,u,m,b,M),t===Bt&&(xt=Bt=null,St=0),Mi=e,fa=t,qn=n,ps=u,gs=c,mm=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,U2(vr,function(){return Tm(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=j.T,j.T=null,c=T.p,T.p=2,m=_t,_t|=4;try{N2(t,e,n)}finally{_t=m,T.p=c,j.T=i}}ee=1,zm(),Nm(),Am()}}function zm(){if(ee===1){ee=0;var t=fa,e=Mi,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=j.T,j.T=null;var i=T.p;T.p=2;var c=_t;_t|=4;try{rm(e,t);var u=Cs,m=d0(t.containerInfo),b=u.focusedElem,M=u.selectionRange;if(m!==b&&b&&b.ownerDocument&&f0(b.ownerDocument.documentElement,b)){if(M!==null&&nu(b)){var O=M.start,q=M.end;if(q===void 0&&(q=O),"selectionStart"in b)b.selectionStart=O,b.selectionEnd=Math.min(q,b.value.length);else{var V=b.ownerDocument||document,k=V&&V.defaultView||window;if(k.getSelection){var B=k.getSelection(),tt=b.textContent.length,ft=Math.min(M.start,tt),Rt=M.end===void 0?ft:Math.min(M.end,tt);!B.extend&&ft>Rt&&(m=Rt,Rt=ft,ft=m);var A=s0(b,ft),E=s0(b,Rt);if(A&&E&&(B.rangeCount!==1||B.anchorNode!==A.node||B.anchorOffset!==A.offset||B.focusNode!==E.node||B.focusOffset!==E.offset)){var C=V.createRange();C.setStart(A.node,A.offset),B.removeAllRanges(),ft>Rt?(B.addRange(C),B.extend(E.node,E.offset)):(C.setEnd(E.node,E.offset),B.addRange(C))}}}}for(V=[],B=b;B=B.parentNode;)B.nodeType===1&&V.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<V.length;b++){var G=V[b];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}Ao=!!Ts,Cs=Ts=null}finally{_t=c,T.p=i,j.T=n}}t.current=e,ee=2}}function Nm(){if(ee===2){ee=0;var t=fa,e=Mi,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=j.T,j.T=null;var i=T.p;T.p=2;var c=_t;_t|=4;try{em(t,e.alternate,e)}finally{_t=c,T.p=i,j.T=n}}ee=3}}function Am(){if(ee===4||ee===3){ee=0,iv();var t=fa,e=Mi,n=qn,i=mm;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ee=5:(ee=0,Mi=fa=null,_m(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(sa=null),Lc(n),e=e.stateNode,Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(Zi,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=j.T,c=T.p,T.p=2,j.T=null;try{for(var u=t.onRecoverableError,m=0;m<i.length;m++){var b=i[m];u(b.value,{componentStack:b.stack})}}finally{j.T=e,T.p=c}}(qn&3)!==0&&go(),pn(t),c=t.pendingLanes,(n&261930)!==0&&(c&42)!==0?t===vs?zl++:(zl=0,vs=t):zl=0,Nl(0)}}function _m(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ol(e)))}function go(){return zm(),Nm(),Am(),Tm()}function Tm(){if(ee!==5)return!1;var t=fa,e=ps;ps=0;var n=Lc(qn),i=j.T,c=T.p;try{T.p=32>n?32:n,j.T=null,n=gs,gs=null;var u=fa,m=qn;if(ee=0,Mi=fa=null,qn=0,(_t&6)!==0)throw Error(r(331));var b=_t;if(_t|=4,fm(u.current),cm(u,u.current,m,n),_t=b,Nl(0,!1),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(Zi,u)}catch{}return!0}finally{T.p=c,j.T=i,_m(t,e)}}function Cm(t,e,n){e=Je(n,e),e=Wu(t.stateNode,e,2),t=ia(t,e,2),t!==null&&(Ki(t,2),pn(t))}function Ct(t,e,n){if(t.tag===3)Cm(t,t,n);else for(;e!==null;){if(e.tag===3){Cm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(sa===null||!sa.has(i))){t=Je(n,t),n=Oh(2),i=ia(e,n,2),i!==null&&(Dh(n,i,e,t),Ki(i,2),pn(i));break}}e=e.return}}function bs(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new T2;var c=new Set;i.set(e,c)}else c=i.get(e),c===void 0&&(c=new Set,i.set(e,c));c.has(n)||(ds=!0,c.add(n),t=R2.bind(null,t,e,n),e.then(t,t))}function R2(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Bt===t&&(St&n)===n&&(Zt===4||Zt===3&&(St&62914560)===St&&300>Ce()-uo?(_t&2)===0&&Ei(t,0):hs|=n,ji===St&&(ji=0)),pn(t)}function Om(t,e){e===0&&(e=zd()),t=Aa(t,e),t!==null&&(Ki(t,e),pn(t))}function B2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Om(t,n)}function L2(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,c=t.memoizedState;c!==null&&(n=c.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(r(314))}i!==null&&i.delete(e),Om(t,n)}function U2(t,e){return Dc(t,e)}var vo=null,Ni=null,Ss=!1,yo=!1,ws=!1,ha=0;function pn(t){t!==Ni&&t.next===null&&(Ni===null?vo=Ni=t:Ni=Ni.next=t),yo=!0,Ss||(Ss=!0,q2())}function Nl(t,e){if(!ws&&yo){ws=!0;do for(var n=!1,i=vo;i!==null;){if(t!==0){var c=i.pendingLanes;if(c===0)var u=0;else{var m=i.suspendedLanes,b=i.pingedLanes;u=(1<<31-De(42|t)+1)-1,u&=c&~(m&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Bm(i,u))}else u=St,u=Sr(i,i===Bt?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||Qi(i,u)||(n=!0,Bm(i,u));i=i.next}while(n);ws=!1}}function H2(){Dm()}function Dm(){yo=Ss=!1;var t=0;ha!==0&&$2()&&(t=ha);for(var e=Ce(),n=null,i=vo;i!==null;){var c=i.next,u=km(i,e);u===0?(i.next=null,n===null?vo=c:n.next=c,c===null&&(Ni=n)):(n=i,(t!==0||(u&3)!==0)&&(yo=!0)),i=c}ee!==0&&ee!==5||Nl(t),ha!==0&&(ha=0)}function km(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,c=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var m=31-De(u),b=1<<m,M=c[m];M===-1?((b&n)===0||(b&i)!==0)&&(c[m]=dv(b,e)):M<=e&&(t.expiredLanes|=b),u&=~b}if(e=Bt,n=St,n=Sr(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(Tt===2||Tt===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&kc(i),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Qi(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&kc(i),Lc(n)){case 2:case 8:n=Md;break;case 32:n=vr;break;case 268435456:n=Ed;break;default:n=vr}return i=Rm.bind(null,t),n=Dc(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&kc(i),t.callbackPriority=2,t.callbackNode=null,2}function Rm(t,e){if(ee!==0&&ee!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(go()&&t.callbackNode!==n)return null;var i=St;return i=Sr(t,t===Bt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(gm(t,i,e),km(t,Ce()),t.callbackNode!=null&&t.callbackNode===n?Rm.bind(null,t):null)}function Bm(t,e){if(go())return null;gm(t,e,!0)}function q2(){I2(function(){(_t&6)!==0?Dc(jd,H2):Dm()})}function js(){if(ha===0){var t=di;t===0&&(t=yr,yr<<=1,(yr&261888)===0&&(yr=256)),ha=t}return ha}function Lm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Er(""+t)}function Um(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function Y2(t,e,n,i,c){if(e==="submit"&&n&&n.stateNode===c){var u=Lm((c[Se]||null).action),m=i.submitter;m&&(e=(e=m[Se]||null)?Lm(e.formAction):m.getAttribute("formAction"),e!==null&&(u=e,m=null));var b=new _r("action","action",null,i,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ha!==0){var M=m?Um(c,m):new FormData(c);Xu(n,{pending:!0,data:M,method:c.method,action:u},null,M)}}else typeof u=="function"&&(b.preventDefault(),M=m?Um(c,m):new FormData(c),Xu(n,{pending:!0,data:M,method:c.method,action:u},u,M))},currentTarget:c}]})}}for(var Ms=0;Ms<ru.length;Ms++){var Es=ru[Ms],G2=Es.toLowerCase(),X2=Es[0].toUpperCase()+Es.slice(1);ln(G2,"on"+X2)}ln(p0,"onAnimationEnd"),ln(g0,"onAnimationIteration"),ln(v0,"onAnimationStart"),ln("dblclick","onDoubleClick"),ln("focusin","onFocus"),ln("focusout","onBlur"),ln(l2,"onTransitionRun"),ln(r2,"onTransitionStart"),ln(o2,"onTransitionCancel"),ln(y0,"onTransitionEnd"),Ia("onMouseEnter",["mouseout","mouseover"]),Ia("onMouseLeave",["mouseout","mouseover"]),Ia("onPointerEnter",["pointerout","pointerover"]),Ia("onPointerLeave",["pointerout","pointerover"]),Ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Al));function Hm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],c=i.event;i=i.listeners;t:{var u=void 0;if(e)for(var m=i.length-1;0<=m;m--){var b=i[m],M=b.instance,O=b.currentTarget;if(b=b.listener,M!==u&&c.isPropagationStopped())break t;u=b,c.currentTarget=O;try{u(c)}catch(q){Or(q)}c.currentTarget=null,u=M}else for(m=0;m<i.length;m++){if(b=i[m],M=b.instance,O=b.currentTarget,b=b.listener,M!==u&&c.isPropagationStopped())break t;u=b,c.currentTarget=O;try{u(c)}catch(q){Or(q)}c.currentTarget=null,u=M}}}}function bt(t,e){var n=e[Uc];n===void 0&&(n=e[Uc]=new Set);var i=t+"__bubble";n.has(i)||(qm(e,t,2,!1),n.add(i))}function zs(t,e,n){var i=0;e&&(i|=4),qm(n,t,i,e)}var xo="_reactListening"+Math.random().toString(36).slice(2);function Ns(t){if(!t[xo]){t[xo]=!0,Dd.forEach(function(n){n!=="selectionchange"&&(V2.has(n)||zs(n,!1,t),zs(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xo]||(e[xo]=!0,zs("selectionchange",!1,e))}}function qm(t,e,n,i){switch(pp(e)){case 2:var c=yy;break;case 8:c=xy;break;default:c=Gs}n=c.bind(null,e,n,t),c=void 0,!Kc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(c=!0),i?c!==void 0?t.addEventListener(e,n,{capture:!0,passive:c}):t.addEventListener(e,n,!0):c!==void 0?t.addEventListener(e,n,{passive:c}):t.addEventListener(e,n,!1)}function As(t,e,n,i,c){var u=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var m=i.tag;if(m===3||m===4){var b=i.stateNode.containerInfo;if(b===c)break;if(m===4)for(m=i.return;m!==null;){var M=m.tag;if((M===3||M===4)&&m.stateNode.containerInfo===c)return;m=m.return}for(;b!==null;){if(m=Wa(b),m===null)return;if(M=m.tag,M===5||M===6||M===26||M===27){i=u=m;continue t}b=b.parentNode}}i=i.return}Zd(function(){var O=u,q=Zc(n),V=[];t:{var k=x0.get(t);if(k!==void 0){var B=_r,tt=t;switch(t){case"keypress":if(Nr(n)===0)break t;case"keydown":case"keyup":B=Lv;break;case"focusin":tt="focus",B=Fc;break;case"focusout":tt="blur",B=Fc;break;case"beforeblur":case"afterblur":B=Fc;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=qv;break;case p0:case g0:case v0:B=Av;break;case y0:B=Gv;break;case"scroll":case"scrollend":B=jv;break;case"wheel":B=Vv;break;case"copy":case"cut":case"paste":B=Tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=$d;break;case"toggle":case"beforetoggle":B=Qv}var ft=(e&4)!==0,Rt=!ft&&(t==="scroll"||t==="scrollend"),A=ft?k!==null?k+"Capture":null:k;ft=[];for(var E=O,C;E!==null;){var G=E;if(C=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||C===null||A===null||(G=$i(E,A),G!=null&&ft.push(_l(E,G,C))),Rt)break;E=E.return}0<ft.length&&(k=new B(k,tt,null,n,q),V.push({event:k,listeners:ft}))}}if((e&7)===0){t:{if(k=t==="mouseover"||t==="pointerover",B=t==="mouseout"||t==="pointerout",k&&n!==Vc&&(tt=n.relatedTarget||n.fromElement)&&(Wa(tt)||tt[Ja]))break t;if((B||k)&&(k=q.window===q?q:(k=q.ownerDocument)?k.defaultView||k.parentWindow:window,B?(tt=n.relatedTarget||n.toElement,B=O,tt=tt?Wa(tt):null,tt!==null&&(Rt=f(tt),ft=tt.tag,tt!==Rt||ft!==5&&ft!==27&&ft!==6)&&(tt=null)):(B=null,tt=O),B!==tt)){if(ft=Jd,G="onMouseLeave",A="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(ft=$d,G="onPointerLeave",A="onPointerEnter",E="pointer"),Rt=B==null?k:Wi(B),C=tt==null?k:Wi(tt),k=new ft(G,E+"leave",B,n,q),k.target=Rt,k.relatedTarget=C,G=null,Wa(q)===O&&(ft=new ft(A,E+"enter",tt,n,q),ft.target=C,ft.relatedTarget=Rt,G=ft),Rt=G,B&&tt)e:{for(ft=Z2,A=B,E=tt,C=0,G=A;G;G=ft(G))C++;G=0;for(var ct=E;ct;ct=ft(ct))G++;for(;0<C-G;)A=ft(A),C--;for(;0<G-C;)E=ft(E),G--;for(;C--;){if(A===E||E!==null&&A===E.alternate){ft=A;break e}A=ft(A),E=ft(E)}ft=null}else ft=null;B!==null&&Ym(V,k,B,ft,!1),tt!==null&&Rt!==null&&Ym(V,Rt,tt,ft,!0)}}t:{if(k=O?Wi(O):window,B=k.nodeName&&k.nodeName.toLowerCase(),B==="select"||B==="input"&&k.type==="file")var Nt=i0;else if(n0(k))if(l0)Nt=n2;else{Nt=t2;var nt=Pv}else B=k.nodeName,!B||B.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?O&&Xc(O.elementType)&&(Nt=i0):Nt=e2;if(Nt&&(Nt=Nt(t,O))){a0(V,Nt,n,q);break t}nt&&nt(t,k,O),t==="focusout"&&O&&k.type==="number"&&O.memoizedProps.value!=null&&Gc(k,"number",k.value)}switch(nt=O?Wi(O):window,t){case"focusin":(n0(nt)||nt.contentEditable==="true")&&(ii=nt,au=O,il=null);break;case"focusout":il=au=ii=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,h0(V,n,q);break;case"selectionchange":if(i2)break;case"keydown":case"keyup":h0(V,n,q)}var vt;if(Pc)t:{switch(t){case"compositionstart":var wt="onCompositionStart";break t;case"compositionend":wt="onCompositionEnd";break t;case"compositionupdate":wt="onCompositionUpdate";break t}wt=void 0}else ai?t0(t,n)&&(wt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(wt="onCompositionStart");wt&&(Fd&&n.locale!=="ko"&&(ai||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&ai&&(vt=Qd()):(Fn=q,Jc="value"in Fn?Fn.value:Fn.textContent,ai=!0)),nt=bo(O,wt),0<nt.length&&(wt=new Wd(wt,t,null,n,q),V.push({event:wt,listeners:nt}),vt?wt.data=vt:(vt=e0(n),vt!==null&&(wt.data=vt)))),(vt=Jv?Wv(t,n):$v(t,n))&&(wt=bo(O,"onBeforeInput"),0<wt.length&&(nt=new Wd("onBeforeInput","beforeinput",null,n,q),V.push({event:nt,listeners:wt}),nt.data=vt)),Y2(V,t,O,n,q)}Hm(V,e)})}function _l(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bo(t,e){for(var n=e+"Capture",i=[];t!==null;){var c=t,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=$i(t,n),c!=null&&i.unshift(_l(t,c,u)),c=$i(t,e),c!=null&&i.push(_l(t,c,u))),t.tag===3)return i;t=t.return}return[]}function Z2(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ym(t,e,n,i,c){for(var u=e._reactName,m=[];n!==null&&n!==i;){var b=n,M=b.alternate,O=b.stateNode;if(b=b.tag,M!==null&&M===i)break;b!==5&&b!==26&&b!==27||O===null||(M=O,c?(O=$i(n,u),O!=null&&m.unshift(_l(n,O,M))):c||(O=$i(n,u),O!=null&&m.push(_l(n,O,M)))),n=n.return}m.length!==0&&t.push({event:e,listeners:m})}var Q2=/\r\n?/g,K2=/\u0000|\uFFFD/g;function Gm(t){return(typeof t=="string"?t:""+t).replace(Q2,`
`).replace(K2,"")}function Xm(t,e){return e=Gm(e),Gm(t)===e}function kt(t,e,n,i,c,u){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||ti(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&ti(t,""+i);break;case"className":jr(t,"class",i);break;case"tabIndex":jr(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":jr(t,n,i);break;case"style":Xd(t,i,u);break;case"data":if(e!=="object"){jr(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Er(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&kt(t,e,"name",c.name,c,null),kt(t,e,"formEncType",c.formEncType,c,null),kt(t,e,"formMethod",c.formMethod,c,null),kt(t,e,"formTarget",c.formTarget,c,null)):(kt(t,e,"encType",c.encType,c,null),kt(t,e,"method",c.method,c,null),kt(t,e,"target",c.target,c,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Er(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=En);break;case"onScroll":i!=null&&bt("scroll",t);break;case"onScrollEnd":i!=null&&bt("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(r(61));if(n=i.__html,n!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Er(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":bt("beforetoggle",t),bt("toggle",t),wr(t,"popover",i);break;case"xlinkActuate":Mn(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Mn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Mn(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Mn(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Mn(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Mn(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":wr(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Sv.get(n)||n,wr(t,n,i))}}function _s(t,e,n,i,c,u){switch(n){case"style":Xd(t,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(r(61));if(n=i.__html,n!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=n}}break;case"children":typeof i=="string"?ti(t,i):(typeof i=="number"||typeof i=="bigint")&&ti(t,""+i);break;case"onScroll":i!=null&&bt("scroll",t);break;case"onScrollEnd":i!=null&&bt("scrollend",t);break;case"onClick":i!=null&&(t.onclick=En);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kd.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),e=n.slice(2,c?n.length-7:void 0),u=t[Se]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,c),typeof i=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,c);break t}n in t?t[n]=i:i===!0?t.setAttribute(n,""):wr(t,n,i)}}}function fe(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",t),bt("load",t);var i=!1,c=!1,u;for(u in n)if(n.hasOwnProperty(u)){var m=n[u];if(m!=null)switch(u){case"src":i=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:kt(t,e,u,m,n,null)}}c&&kt(t,e,"srcSet",n.srcSet,n,null),i&&kt(t,e,"src",n.src,n,null);return;case"input":bt("invalid",t);var b=u=m=c=null,M=null,O=null;for(i in n)if(n.hasOwnProperty(i)){var q=n[i];if(q!=null)switch(i){case"name":c=q;break;case"type":m=q;break;case"checked":M=q;break;case"defaultChecked":O=q;break;case"value":u=q;break;case"defaultValue":b=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,e));break;default:kt(t,e,i,q,n,null)}}Hd(t,u,b,M,O,m,c,!1);return;case"select":bt("invalid",t),i=m=u=null;for(c in n)if(n.hasOwnProperty(c)&&(b=n[c],b!=null))switch(c){case"value":u=b;break;case"defaultValue":m=b;break;case"multiple":i=b;default:kt(t,e,c,b,n,null)}e=u,n=m,t.multiple=!!i,e!=null?Pa(t,!!i,e,!1):n!=null&&Pa(t,!!i,n,!0);return;case"textarea":bt("invalid",t),u=c=i=null;for(m in n)if(n.hasOwnProperty(m)&&(b=n[m],b!=null))switch(m){case"value":i=b;break;case"defaultValue":c=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:kt(t,e,m,b,n,null)}Yd(t,i,c,u);return;case"option":for(M in n)n.hasOwnProperty(M)&&(i=n[M],i!=null)&&(M==="selected"?t.selected=i&&typeof i!="function"&&typeof i!="symbol":kt(t,e,M,i,n,null));return;case"dialog":bt("beforetoggle",t),bt("toggle",t),bt("cancel",t),bt("close",t);break;case"iframe":case"object":bt("load",t);break;case"video":case"audio":for(i=0;i<Al.length;i++)bt(Al[i],t);break;case"image":bt("error",t),bt("load",t);break;case"details":bt("toggle",t);break;case"embed":case"source":case"link":bt("error",t),bt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(i=n[O],i!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:kt(t,e,O,i,n,null)}return;default:if(Xc(e)){for(q in n)n.hasOwnProperty(q)&&(i=n[q],i!==void 0&&_s(t,e,q,i,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(i=n[b],i!=null&&kt(t,e,b,i,n,null))}function J2(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,m=null,b=null,M=null,O=null,q=null;for(B in n){var V=n[B];if(n.hasOwnProperty(B)&&V!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":M=V;default:i.hasOwnProperty(B)||kt(t,e,B,null,i,V)}}for(var k in i){var B=i[k];if(V=n[k],i.hasOwnProperty(k)&&(B!=null||V!=null))switch(k){case"type":u=B;break;case"name":c=B;break;case"checked":O=B;break;case"defaultChecked":q=B;break;case"value":m=B;break;case"defaultValue":b=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(r(137,e));break;default:B!==V&&kt(t,e,k,B,i,V)}}Yc(t,m,b,M,O,q,u,c);return;case"select":B=m=b=k=null;for(u in n)if(M=n[u],n.hasOwnProperty(u)&&M!=null)switch(u){case"value":break;case"multiple":B=M;default:i.hasOwnProperty(u)||kt(t,e,u,null,i,M)}for(c in i)if(u=i[c],M=n[c],i.hasOwnProperty(c)&&(u!=null||M!=null))switch(c){case"value":k=u;break;case"defaultValue":b=u;break;case"multiple":m=u;default:u!==M&&kt(t,e,c,u,i,M)}e=b,n=m,i=B,k!=null?Pa(t,!!n,k,!1):!!i!=!!n&&(e!=null?Pa(t,!!n,e,!0):Pa(t,!!n,n?[]:"",!1));return;case"textarea":B=k=null;for(b in n)if(c=n[b],n.hasOwnProperty(b)&&c!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:kt(t,e,b,null,i,c)}for(m in i)if(c=i[m],u=n[m],i.hasOwnProperty(m)&&(c!=null||u!=null))switch(m){case"value":k=c;break;case"defaultValue":B=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==u&&kt(t,e,m,c,i,u)}qd(t,k,B);return;case"option":for(var tt in n)k=n[tt],n.hasOwnProperty(tt)&&k!=null&&!i.hasOwnProperty(tt)&&(tt==="selected"?t.selected=!1:kt(t,e,tt,null,i,k));for(M in i)k=i[M],B=n[M],i.hasOwnProperty(M)&&k!==B&&(k!=null||B!=null)&&(M==="selected"?t.selected=k&&typeof k!="function"&&typeof k!="symbol":kt(t,e,M,k,i,B));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ft in n)k=n[ft],n.hasOwnProperty(ft)&&k!=null&&!i.hasOwnProperty(ft)&&kt(t,e,ft,null,i,k);for(O in i)if(k=i[O],B=n[O],i.hasOwnProperty(O)&&k!==B&&(k!=null||B!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(r(137,e));break;default:kt(t,e,O,k,i,B)}return;default:if(Xc(e)){for(var Rt in n)k=n[Rt],n.hasOwnProperty(Rt)&&k!==void 0&&!i.hasOwnProperty(Rt)&&_s(t,e,Rt,void 0,i,k);for(q in i)k=i[q],B=n[q],!i.hasOwnProperty(q)||k===B||k===void 0&&B===void 0||_s(t,e,q,k,i,B);return}}for(var A in n)k=n[A],n.hasOwnProperty(A)&&k!=null&&!i.hasOwnProperty(A)&&kt(t,e,A,null,i,k);for(V in i)k=i[V],B=n[V],!i.hasOwnProperty(V)||k===B||k==null&&B==null||kt(t,e,V,k,i,B)}function Vm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function W2(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var c=n[i],u=c.transferSize,m=c.initiatorType,b=c.duration;if(u&&b&&Vm(m)){for(m=0,b=c.responseEnd,i+=1;i<n.length;i++){var M=n[i],O=M.startTime;if(O>b)break;var q=M.transferSize,V=M.initiatorType;q&&Vm(V)&&(M=M.responseEnd,m+=q*(M<b?1:(b-O)/(M-O)))}if(--i,e+=8*(u+m)/(c.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ts=null,Cs=null;function So(t){return t.nodeType===9?t:t.ownerDocument}function Zm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Os(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ds=null;function $2(){var t=window.event;return t&&t.type==="popstate"?t===Ds?!1:(Ds=t,!0):(Ds=null,!1)}var Km=typeof setTimeout=="function"?setTimeout:void 0,F2=typeof clearTimeout=="function"?clearTimeout:void 0,Jm=typeof Promise=="function"?Promise:void 0,I2=typeof queueMicrotask=="function"?queueMicrotask:typeof Jm<"u"?function(t){return Jm.resolve(null).then(t).catch(P2)}:Km;function P2(t){setTimeout(function(){throw t})}function ma(t){return t==="head"}function Wm(t,e){var n=e,i=0;do{var c=n.nextSibling;if(t.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(c),Ci(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Tl(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Tl(n);for(var u=n.firstChild;u;){var m=u.nextSibling,b=u.nodeName;u[Ji]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=m}}else n==="body"&&Tl(t.ownerDocument.body);n=c}while(n);Ci(e)}function $m(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function ks(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ks(n),Hc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function ty(t,e,n,i){for(;t.nodeType===1;){var c=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Ji])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Pe(t.nextSibling),t===null)break}return null}function ey(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Pe(t.nextSibling),t===null))return null;return t}function Fm(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Pe(t.nextSibling),t===null))return null;return t}function Rs(t){return t.data==="$?"||t.data==="$~"}function Bs(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ny(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Pe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Ls=null;function Im(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Pe(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Pm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function tp(t,e,n){switch(e=So(n),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Tl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Hc(t)}var tn=new Map,ep=new Set;function wo(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Yn=T.d;T.d={f:ay,r:iy,D:ly,C:ry,L:oy,m:cy,X:sy,S:uy,M:fy};function ay(){var t=Yn.f(),e=ho();return t||e}function iy(t){var e=$a(t);e!==null&&e.tag===5&&e.type==="form"?yh(e):Yn.r(t)}var Ai=typeof document>"u"?null:document;function np(t,e,n){var i=Ai;if(i&&typeof e=="string"&&e){var c=Qe(e);c='link[rel="'+t+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),ep.has(c)||(ep.add(c),t={rel:t,crossOrigin:n,href:e},i.querySelector(c)===null&&(e=i.createElement("link"),fe(e,"link",t),ae(e),i.head.appendChild(e)))}}function ly(t){Yn.D(t),np("dns-prefetch",t,null)}function ry(t,e){Yn.C(t,e),np("preconnect",t,e)}function oy(t,e,n){Yn.L(t,e,n);var i=Ai;if(i&&t&&e){var c='link[rel="preload"][as="'+Qe(e)+'"]';e==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+Qe(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+Qe(n.imageSizes)+'"]')):c+='[href="'+Qe(t)+'"]';var u=c;switch(e){case"style":u=_i(t);break;case"script":u=Ti(t)}tn.has(u)||(t=x({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),tn.set(u,t),i.querySelector(c)!==null||e==="style"&&i.querySelector(Cl(u))||e==="script"&&i.querySelector(Ol(u))||(e=i.createElement("link"),fe(e,"link",t),ae(e),i.head.appendChild(e)))}}function cy(t,e){Yn.m(t,e);var n=Ai;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",c='link[rel="modulepreload"][as="'+Qe(i)+'"][href="'+Qe(t)+'"]',u=c;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ti(t)}if(!tn.has(u)&&(t=x({rel:"modulepreload",href:t},e),tn.set(u,t),n.querySelector(c)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ol(u)))return}i=n.createElement("link"),fe(i,"link",t),ae(i),n.head.appendChild(i)}}}function uy(t,e,n){Yn.S(t,e,n);var i=Ai;if(i&&t){var c=Fa(i).hoistableStyles,u=_i(t);e=e||"default";var m=c.get(u);if(!m){var b={loading:0,preload:null};if(m=i.querySelector(Cl(u)))b.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":e},n),(n=tn.get(u))&&Us(t,n);var M=m=i.createElement("link");ae(M),fe(M,"link",t),M._p=new Promise(function(O,q){M.onload=O,M.onerror=q}),M.addEventListener("load",function(){b.loading|=1}),M.addEventListener("error",function(){b.loading|=2}),b.loading|=4,jo(m,e,i)}m={type:"stylesheet",instance:m,count:1,state:b},c.set(u,m)}}}function sy(t,e){Yn.X(t,e);var n=Ai;if(n&&t){var i=Fa(n).hoistableScripts,c=Ti(t),u=i.get(c);u||(u=n.querySelector(Ol(c)),u||(t=x({src:t,async:!0},e),(e=tn.get(c))&&Hs(t,e),u=n.createElement("script"),ae(u),fe(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(c,u))}}function fy(t,e){Yn.M(t,e);var n=Ai;if(n&&t){var i=Fa(n).hoistableScripts,c=Ti(t),u=i.get(c);u||(u=n.querySelector(Ol(c)),u||(t=x({src:t,async:!0,type:"module"},e),(e=tn.get(c))&&Hs(t,e),u=n.createElement("script"),ae(u),fe(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(c,u))}}function ap(t,e,n,i){var c=(c=Xt.current)?wo(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=_i(n.href),n=Fa(c).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=_i(n.href);var u=Fa(c).hoistableStyles,m=u.get(t);if(m||(c=c.ownerDocument||c,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,m),(u=c.querySelector(Cl(t)))&&!u._p&&(m.instance=u,m.state.loading=5),tn.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},tn.set(t,n),u||dy(c,t,n,m.state))),e&&i===null)throw Error(r(528,""));return m}if(e&&i!==null)throw Error(r(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ti(n),n=Fa(c).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function _i(t){return'href="'+Qe(t)+'"'}function Cl(t){return'link[rel="stylesheet"]['+t+"]"}function ip(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function dy(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),fe(e,"link",n),ae(e),t.head.appendChild(e))}function Ti(t){return'[src="'+Qe(t)+'"]'}function Ol(t){return"script[async]"+t}function lp(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Qe(n.href)+'"]');if(i)return e.instance=i,ae(i),i;var c=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),ae(i),fe(i,"style",c),jo(i,n.precedence,t),e.instance=i;case"stylesheet":c=_i(n.href);var u=t.querySelector(Cl(c));if(u)return e.state.loading|=4,e.instance=u,ae(u),u;i=ip(n),(c=tn.get(c))&&Us(i,c),u=(t.ownerDocument||t).createElement("link"),ae(u);var m=u;return m._p=new Promise(function(b,M){m.onload=b,m.onerror=M}),fe(u,"link",i),e.state.loading|=4,jo(u,n.precedence,t),e.instance=u;case"script":return u=Ti(n.src),(c=t.querySelector(Ol(u)))?(e.instance=c,ae(c),c):(i=n,(c=tn.get(u))&&(i=x({},n),Hs(i,c)),t=t.ownerDocument||t,c=t.createElement("script"),ae(c),fe(c,"link",i),t.head.appendChild(c),e.instance=c);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,jo(i,n.precedence,t));return e.instance}function jo(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=i.length?i[i.length-1]:null,u=c,m=0;m<i.length;m++){var b=i[m];if(b.dataset.precedence===e)u=b;else if(u!==c)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Us(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Hs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Mo=null;function rp(t,e,n){if(Mo===null){var i=new Map,c=Mo=new Map;c.set(n,i)}else c=Mo,i=c.get(n),i||(i=new Map,c.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),c=0;c<n.length;c++){var u=n[c];if(!(u[Ji]||u[oe]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(e)||"";m=t+m;var b=i.get(m);b?b.push(u):i.set(m,[u])}}return i}function op(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function hy(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function cp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function my(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=_i(i.href),u=e.querySelector(Cl(c));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Eo.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=u,ae(u);return}u=e.ownerDocument||e,i=ip(i),(c=tn.get(c))&&Us(i,c),u=u.createElement("link"),ae(u);var m=u;m._p=new Promise(function(b,M){m.onload=b,m.onerror=M}),fe(u,"link",i),n.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Eo.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var qs=0;function py(t,e){return t.stylesheets&&t.count===0&&No(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&No(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&qs===0&&(qs=62500*W2());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&No(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>qs?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(c)}}:null}function Eo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)No(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zo=null;function No(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zo=new Map,e.forEach(gy,t),zo=null,Eo.call(t))}function gy(t,e){if(!(e.state.loading&4)){var n=zo.get(t);if(n)var i=n.get(null);else{n=new Map,zo.set(t,n);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var m=c[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),i=m)}i&&n.set(null,i)}c=e.instance,m=c.getAttribute("data-precedence"),u=n.get(m)||i,u===i&&n.set(null,c),n.set(m,c),this.count++,i=Eo.bind(this),c.addEventListener("load",i),c.addEventListener("error",i),u?u.parentNode.insertBefore(c,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),e.state.loading|=4}}var Dl={$$typeof:D,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function vy(t,e,n,i,c,u,m,b,M){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rc(0),this.hiddenUpdates=Rc(null),this.identifierPrefix=i,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.incompleteTransitions=new Map}function up(t,e,n,i,c,u,m,b,M,O,q,V){return t=new vy(t,e,n,m,M,O,q,V,b),e=1,u===!0&&(e|=24),u=Re(3,null,null,e),t.current=u,u.stateNode=t,e=xu(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:i,isDehydrated:n,cache:e},ju(u),t}function sp(t){return t?(t=oi,t):oi}function fp(t,e,n,i,c,u){c=sp(c),i.context===null?i.context=c:i.pendingContext=c,i=aa(e),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=ia(t,i,e),n!==null&&(Ne(n,t,e),fl(n,t,e))}function dp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ys(t,e){dp(t,e),(t=t.alternate)&&dp(t,e)}function hp(t){if(t.tag===13||t.tag===31){var e=Aa(t,67108864);e!==null&&Ne(e,t,67108864),Ys(t,67108864)}}function mp(t){if(t.tag===13||t.tag===31){var e=qe();e=Bc(e);var n=Aa(t,e);n!==null&&Ne(n,t,e),Ys(t,e)}}var Ao=!0;function yy(t,e,n,i){var c=j.T;j.T=null;var u=T.p;try{T.p=2,Gs(t,e,n,i)}finally{T.p=u,j.T=c}}function xy(t,e,n,i){var c=j.T;j.T=null;var u=T.p;try{T.p=8,Gs(t,e,n,i)}finally{T.p=u,j.T=c}}function Gs(t,e,n,i){if(Ao){var c=Xs(i);if(c===null)As(t,e,i,_o,n),gp(t,i);else if(Sy(c,t,e,n,i))i.stopPropagation();else if(gp(t,i),e&4&&-1<by.indexOf(t)){for(;c!==null;){var u=$a(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=ja(u.pendingLanes);if(m!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var M=1<<31-De(m);b.entanglements[1]|=M,m&=~M}pn(u),(_t&6)===0&&(so=Ce()+500,Nl(0))}}break;case 31:case 13:b=Aa(u,2),b!==null&&Ne(b,u,2),ho(),Ys(u,2)}if(u=Xs(i),u===null&&As(t,e,i,_o,n),u===c)break;c=u}c!==null&&i.stopPropagation()}else As(t,e,i,null,n)}}function Xs(t){return t=Zc(t),Vs(t)}var _o=null;function Vs(t){if(_o=null,t=Wa(t),t!==null){var e=f(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=h(e),t!==null)return t;t=null}else if(n===31){if(t=p(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return _o=t,null}function pp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(lv()){case jd:return 2;case Md:return 8;case vr:case rv:return 32;case Ed:return 268435456;default:return 32}default:return 32}}var Zs=!1,pa=null,ga=null,va=null,kl=new Map,Rl=new Map,ya=[],by="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gp(t,e){switch(t){case"focusin":case"focusout":pa=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":kl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rl.delete(e.pointerId)}}function Bl(t,e,n,i,c,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:u,targetContainers:[c]},e!==null&&(e=$a(e),e!==null&&hp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,c!==null&&e.indexOf(c)===-1&&e.push(c),t)}function Sy(t,e,n,i,c){switch(e){case"focusin":return pa=Bl(pa,t,e,n,i,c),!0;case"dragenter":return ga=Bl(ga,t,e,n,i,c),!0;case"mouseover":return va=Bl(va,t,e,n,i,c),!0;case"pointerover":var u=c.pointerId;return kl.set(u,Bl(kl.get(u)||null,t,e,n,i,c)),!0;case"gotpointercapture":return u=c.pointerId,Rl.set(u,Bl(Rl.get(u)||null,t,e,n,i,c)),!0}return!1}function vp(t){var e=Wa(t.target);if(e!==null){var n=f(e);if(n!==null){if(e=n.tag,e===13){if(e=h(n),e!==null){t.blockedOn=e,Cd(t.priority,function(){mp(n)});return}}else if(e===31){if(e=p(n),e!==null){t.blockedOn=e,Cd(t.priority,function(){mp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function To(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xs(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Vc=i,n.target.dispatchEvent(i),Vc=null}else return e=$a(n),e!==null&&hp(e),t.blockedOn=n,!1;e.shift()}return!0}function yp(t,e,n){To(t)&&n.delete(e)}function wy(){Zs=!1,pa!==null&&To(pa)&&(pa=null),ga!==null&&To(ga)&&(ga=null),va!==null&&To(va)&&(va=null),kl.forEach(yp),Rl.forEach(yp)}function Co(t,e){t.blockedOn===e&&(t.blockedOn=null,Zs||(Zs=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,wy)))}var Oo=null;function xp(t){Oo!==t&&(Oo=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Oo===t&&(Oo=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],c=t[e+2];if(typeof i!="function"){if(Vs(i||n)===null)continue;break}var u=$a(n);u!==null&&(t.splice(e,3),e-=3,Xu(u,{pending:!0,data:c,method:n.method,action:i},i,c))}}))}function Ci(t){function e(M){return Co(M,t)}pa!==null&&Co(pa,t),ga!==null&&Co(ga,t),va!==null&&Co(va,t),kl.forEach(e),Rl.forEach(e);for(var n=0;n<ya.length;n++){var i=ya[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<ya.length&&(n=ya[0],n.blockedOn===null);)vp(n),n.blockedOn===null&&ya.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var c=n[i],u=n[i+1],m=c[Se]||null;if(typeof u=="function")m||xp(n);else if(m){var b=null;if(u&&u.hasAttribute("formAction")){if(c=u,m=u[Se]||null)b=m.formAction;else if(Vs(c)!==null)continue}else b=m.action;typeof b=="function"?n[i+1]=b:(n.splice(i,3),i-=3),xp(n)}}}function bp(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(m){return c=m})},focusReset:"manual",scroll:"manual"})}function e(){c!==null&&(c(),c=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),c!==null&&(c(),c=null)}}}function Qs(t){this._internalRoot=t}Do.prototype.render=Qs.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var n=e.current,i=qe();fp(n,i,t,e,null,null)},Do.prototype.unmount=Qs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fp(t.current,2,null,t,null,null),ho(),e[Ja]=null}};function Do(t){this._internalRoot=t}Do.prototype.unstable_scheduleHydration=function(t){if(t){var e=Td();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ya.length&&e!==0&&e<ya[n].priority;n++);ya.splice(n,0,t),n===0&&vp(t)}};var Sp=l.version;if(Sp!=="19.2.3")throw Error(r(527,Sp,"19.2.3"));T.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=y(e),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var jy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{Zi=ko.inject(jy),Oe=ko}catch{}}return Ul.createRoot=function(t,e){if(!s(t))throw Error(r(299));var n=!1,i="",c=Ah,u=_h,m=Th;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(c=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(m=e.onRecoverableError)),e=up(t,1,!1,null,null,n,i,null,c,u,m,bp),t[Ja]=e.current,Ns(t),new Qs(e)},Ul.hydrateRoot=function(t,e,n){if(!s(t))throw Error(r(299));var i=!1,c="",u=Ah,m=_h,b=Th,M=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.formState!==void 0&&(M=n.formState)),e=up(t,1,!0,e,n??null,i,c,M,u,m,b,bp),e.context=sp(null),n=e.current,i=qe(),i=Bc(i),c=aa(i),c.callback=null,ia(n,c,i),n=i,e.current.lanes=n,Ki(e,n),pn(e),t[Ja]=e.current,Ns(t),new Do(e)},Ul.version="19.2.3",Ul}var Np;function By(){if(Np)return Js.exports;Np=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Js.exports=Ry(),Js.exports}var Ly=By();class Uy extends Y.Component{constructor(l){super(l),this.state={hasError:!1}}static getDerivedStateFromError(l){return{hasError:!0,error:l}}render(){return this.state.hasError?d.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#0a0a0f",color:"#ffffff",fontFamily:"Outfit, sans-serif",gap:"16px",padding:"24px",textAlign:"center"},children:[d.jsx("h1",{style:{fontSize:"2rem",fontWeight:400,margin:0},children:"Something went wrong"}),d.jsx("p",{style:{color:"rgba(255,255,255,0.5)",margin:0},children:"Please refresh the page to continue."}),d.jsx("button",{onClick:()=>window.location.reload(),style:{marginTop:"8px",padding:"12px 32px",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.2)",background:"rgba(255,255,255,0.06)",color:"#ffffff",cursor:"pointer",fontSize:"14px",letterSpacing:"1px"},children:"Refresh"})]}):this.props.children}}const kg="/Strabso/assets/logo-CaQ3yAJ2.png",Hy=({activeTab:a,onTabClick:l})=>{const o=[{name:"Home"},{name:"Projects"},{name:"About"},{name:"Contact"}];return d.jsx("nav",{className:"glass-navbar",children:d.jsx("div",{className:"navbar-wrapper",children:d.jsxs("div",{className:"navbar-container",children:[d.jsx("a",{href:"/",className:"navbar-logo",children:d.jsx("div",{className:"logo-icon",children:d.jsx("img",{src:kg,alt:"Company Logo"})})}),d.jsx("ul",{className:"nav-links",children:o.map(r=>d.jsx("li",{className:"nav-item",children:d.jsxs("button",{onClick:()=>l(r.name),className:`nav-link ${a===r.name?"active":""}`,"aria-current":a===r.name?"page":void 0,children:[r.name,a===r.name&&d.jsx("div",{className:"nav-link-pulse"})]})},r.name))})]})})})},Rg="/Strabso/assets/coca_cola-BljjUpwk.webp",qy="/Strabso/assets/lankasoy-BJQDjWpB.png",Yy="/Strabso/assets/hemas-NRwrWOvZ.png",Gy="/Strabso/assets/fems-DxxjrCp1.jpg",Xy="/Strabso/assets/vivya-p3JKc2hI.jpeg",Vy="/Strabso/assets/uswaththe-CBafDdyi.png",Zy="/Strabso/assets/zesta.jpg-Gkr9D_TE.webp",Qy="/Strabso/assets/vibe-BjwuLHQj.jpeg",Bg="/Strabso/assets/hnb-BUw6tVsM.png",Lg="/Strabso/assets/maliban-glbHtWj_.png",Ky="/Strabso/assets/watawala-Cmu5B7fW.jpg",Gl=[{id:1,image:Rg,name:"Coca-Cola",category:"Beverages",description:"On-ground brand activations and sampling campaigns driving nationwide consumer engagement.",color:"#EF4444"},{id:2,image:Yy,name:"Hemas",category:"Healthcare & FMCG",description:"Promoter deployment and retail activation programs across all 9 provinces of Sri Lanka.",color:"#3B82F6"},{id:3,image:Lg,name:"Maliban",category:"Biscuits & FMCG",description:"Nationwide sampling and selling operations delivering measurable sales uplift.",color:"#F97316"},{id:4,image:Zy,name:"Zesta",category:"Tea & Beverages",description:"Mall activations and roadshows bringing the Zesta brand to communities island-wide.",color:"#10B981"},{id:5,image:Ky,name:"Watawala",category:"Tea & Beverages",description:"Strategic brand activation campaigns building consumer loyalty across key markets.",color:"#22C55E"},{id:6,image:Bg,name:"HNB",category:"Banking & Finance",description:"Corporate event management and institutional activation projects across Sri Lanka.",color:"#DC2626"},{id:7,image:qy,name:"Lankasoy",category:"FMCG",description:"Product sampling and community engagement driving trial and brand awareness.",color:"#84CC16"},{id:8,image:Qy,name:"Vibe",category:"Lifestyle",description:"High-energy brand activations and experiential events connecting with youth audiences.",color:"#06B6D4"},{id:9,image:Gy,name:"Fems",category:"Consumer Goods",description:"Targeted sampling campaigns and in-store promoter deployment for maximum reach.",color:"#EC4899"},{id:10,image:Xy,name:"Vivya",category:"Lifestyle & Beauty",description:"Mall and SMMT activations creating memorable brand touchpoints with consumers.",color:"#8B5CF6"},{id:11,image:Vy,name:"Uswaththe",category:"Natural Products",description:"Grassroots roadshow campaigns building authentic brand connections across communities.",color:"#F59E0B"}],Gn=Gl.length,Hl=360/Gn,Jy=.04,Wy=.08,$y=.13,Fy=.9,Ap=({onClick:a,color:l,label:o,children:r})=>{const[s,f]=Y.useState(!1);return d.jsx("button",{onClick:a,onMouseDown:h=>h.stopPropagation(),onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),"aria-label":o,style:{width:48,height:48,borderRadius:"50%",border:`1px solid ${s&&l?`${l}55`:"rgba(0,0,0,0.12)"}`,background:s&&l?`${l}15`:"rgba(0,0,0,0.04)",color:"#111",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(12px)",transition:"border-color 0.3s ease, background 0.3s ease",flexShrink:0},children:r})},Iy=()=>{const[a,l]=Y.useState(!1),[o,r]=Y.useState(!1),[s,f]=Y.useState(0),[h,p]=Y.useState(!1),v=Y.useRef(0),y=Y.useRef(0),g=Y.useRef(null),x=Y.useRef(!1),S=Y.useRef(!1),w=Y.useRef(0),N=Y.useRef(0),L=Y.useRef(0),H=Y.useRef(0),R=Y.useRef(null),Z=Y.useRef(null),D=Y.useRef(null),U=a?260:o?360:440,Q=a?140:o?180:210,K=a?155:o?200:230;Y.useEffect(()=>{const z=()=>{l(window.innerWidth<=767),r(window.innerWidth>767&&window.innerWidth<=1024)};return z(),window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)},[]),Y.useEffect(()=>{const z=D.current;if(!z)return;const j=T=>{x.current&&(T.preventDefault(),et(T.touches[0].clientX))};return z.addEventListener("touchmove",j,{passive:!1}),()=>z.removeEventListener("touchmove",j)},[]),Y.useEffect(()=>{const z=()=>{const T=(v.current%360+360)%360;let X=Math.round(T/Hl)*Hl-T;X>180&&(X-=360),X<-180&&(X+=360),g.current=v.current+X,y.current=0},j=()=>{if(!x.current)if(g.current!==null){const F=g.current-v.current;Math.abs(F)<Wy?(v.current=g.current,g.current=null):v.current+=F*$y}else Math.abs(y.current)>.05?(y.current*=Fy,v.current+=y.current,Math.abs(y.current)<=.05&&z()):S.current||(v.current-=Jy);Z.current&&(Z.current.style.transform=`rotateY(${v.current}deg)`);const T=(v.current%360+360)%360,X=Math.round(T/Hl)%Gn,J=(Gn-X)%Gn;J!==H.current&&(H.current=J,f(J)),R.current=requestAnimationFrame(j)};return R.current=requestAnimationFrame(j),()=>{R.current&&cancelAnimationFrame(R.current)}},[]);const W=z=>{const j=(v.current%360+360)%360;let T=(Gn-z)*Hl-j;T>180&&(T-=360),T<-180&&(T+=360),g.current=v.current+T,y.current=0},I=()=>W((H.current+1)%Gn),it=()=>W((H.current-1+Gn)%Gn),dt=z=>{x.current=!0,w.current=z,N.current=Date.now(),L.current=0,y.current=0,g.current=null,p(!0)},et=z=>{if(!x.current)return;const j=z-w.current,T=Math.max(Date.now()-N.current,1);y.current=j/T*12,v.current+=j*.28,L.current+=Math.abs(j),w.current=z,N.current=Date.now()},ht=()=>{x.current&&(x.current=!1,p(!1))},Et=z=>{L.current<5&&W(z)},_=Gl[s];return d.jsxs("div",{style:{position:"relative",width:"100%",padding:a?"40px 16px 60px":"60px 40px 80px",display:"flex",flexDirection:"column",alignItems:"center",gap:a?"32px":"44px",userSelect:"none",overflow:"hidden",fontFamily:"'Outfit', -apple-system, sans-serif"},onKeyDown:z=>{z.key==="ArrowRight"&&I(),z.key==="ArrowLeft"&&it()},tabIndex:0,"aria-label":"Brand partners carousel",children:[d.jsx("div",{style:{position:"absolute",top:"25%",left:"50%",width:a?"420px":"760px",height:a?"320px":"560px",transform:"translate(-50%, -50%)",background:`radial-gradient(ellipse, ${_?.color}22 0%, transparent 65%)`,filter:"blur(80px)",pointerEvents:"none",transition:"background 0.9s ease",zIndex:0}}),d.jsx("div",{ref:D,style:{position:"relative",width:"100%",height:K+40,display:"flex",alignItems:"center",justifyContent:"center",perspective:a?"900px":o?"1400px":"1900px",zIndex:5,cursor:h?"grabbing":"grab"},onMouseEnter:()=>{S.current=!0},onMouseLeave:()=>{S.current=!1,ht()},onMouseDown:z=>dt(z.clientX),onMouseMove:z=>et(z.clientX),onMouseUp:ht,onTouchStart:z=>{S.current=!0,dt(z.touches[0].clientX)},onTouchEnd:()=>{ht(),S.current=!1},children:d.jsx("div",{ref:Z,style:{position:"relative",width:Q,height:K,transformStyle:"preserve-3d"},children:Gl.map((z,j)=>{const T=j===s;return d.jsxs("div",{style:{position:"absolute",inset:0,transform:`rotateY(${j*Hl}deg) translateZ(${U}px)`,backfaceVisibility:"hidden",borderRadius:18,overflow:"hidden",cursor:"pointer",transition:"opacity 0.5s ease, filter 0.5s ease, box-shadow 0.5s ease",opacity:T?1:.45,filter:T?"none":"brightness(0.85) saturate(0.55)",boxShadow:T?`0 0 30px ${z.color}28, 0 8px 32px rgba(0,0,0,0.1), inset 0 0 0 1.5px ${z.color}35`:"0 4px 16px rgba(0,0,0,0.07)",background:`radial-gradient(ellipse at 50% 35%, ${z.color}14 0%, #f8f7f4 68%)`},onClick:()=>Et(j),children:[d.jsx("div",{style:{width:"100%",height:"100%",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",padding:36},children:d.jsx("img",{src:z.image,alt:z.name,draggable:!1,style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",filter:"drop-shadow(0 2px 8px rgba(0,0,0,0.12))"}})}),T&&d.jsx("div",{style:{position:"absolute",inset:0,borderRadius:18,border:`1.5px solid ${z.color}60`,pointerEvents:"none"}})]},z.id)})})}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:14,maxWidth:480,width:"100%",zIndex:10,textAlign:"center"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,fontSize:11,letterSpacing:"3px",color:"rgba(0,0,0,0.3)"},children:[d.jsx("span",{style:{color:_?.color,fontWeight:700,fontSize:13},children:String(s+1).padStart(2,"0")}),d.jsx("span",{style:{display:"inline-block",width:28,height:1,background:"rgba(0,0,0,0.1)"}}),d.jsx("span",{children:String(Gn).padStart(2,"0")})]}),d.jsx("span",{style:{fontSize:10,letterSpacing:"4px",textTransform:"uppercase",color:_?.color,fontWeight:600,transition:"color 0.5s ease"},children:_?.category}),d.jsx("span",{style:{display:"block",fontSize:a?38:52,fontFamily:"'Playfair Display', Georgia, serif",fontWeight:400,color:"#0a0a12",lineHeight:1.1,letterSpacing:"-0.5px",transition:"all 0.4s ease"},children:_?.name}),d.jsx("div",{style:{width:36,height:2,borderRadius:2,background:_?.color??"#111111",transition:"background 0.5s ease"}}),d.jsx("p",{style:{fontSize:a?13:14,color:"rgba(0,0,0,0.55)",lineHeight:1.85,margin:0,transition:"all 0.4s ease",minHeight:a?0:52},children:_?.description}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:a?14:18,marginTop:8},children:[d.jsx(Ap,{onClick:it,color:_?.color,label:"Previous brand",children:d.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("polyline",{points:"15 18 9 12 15 6"})})}),d.jsx("div",{style:{display:"flex",alignItems:"center",gap:6},children:Gl.map((z,j)=>d.jsx("button",{onClick:()=>W(j),onMouseDown:T=>T.stopPropagation(),"aria-label":`Go to ${Gl[j].name}`,style:{width:j===s?22:6,height:6,borderRadius:3,border:"none",padding:0,cursor:"pointer",transition:"width 0.35s cubic-bezier(0.4,0,0.2,1), background 0.4s ease",background:j===s?_?.color??"#111111":"rgba(0,0,0,0.12)"}},j))}),d.jsx(Ap,{onClick:I,color:_?.color,label:"Next brand",children:d.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("polyline",{points:"9 18 15 12 9 6"})})})]})]}),d.jsx("style",{children:`
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `})]})},Py=(a=.1)=>{const l=Y.useRef(null),[o,r]=Y.useState(!1);return Y.useEffect(()=>{const s=new IntersectionObserver(([f])=>{f.isIntersecting&&r(!0)},{threshold:a});return l.current&&s.observe(l.current),()=>s.disconnect()},[a]),{ref:l,isInView:o}},tx=()=>d.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[d.jsx("circle",{cx:"24",cy:"24",r:"16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),d.jsx("circle",{cx:"24",cy:"24",r:"8",stroke:"currentColor",strokeWidth:"2",fill:"none"}),d.jsx("circle",{cx:"24",cy:"24",r:"3",fill:"currentColor"}),d.jsx("path",{d:"M24 4V8M24 40V44M4 24H8M40 24H44",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),d.jsx("path",{d:"M38 10L35 13M13 35L10 38M38 38L35 35M13 13L10 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),ex=()=>d.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[d.jsx("rect",{x:"6",y:"16",width:"36",height:"28",rx:"2",stroke:"currentColor",strokeWidth:"2",fill:"none"}),d.jsx("path",{d:"M6 16L24 4L42 16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("rect",{x:"14",y:"28",width:"8",height:"16",rx:"1",stroke:"currentColor",strokeWidth:"2",fill:"none"}),d.jsx("rect",{x:"26",y:"24",width:"10",height:"8",rx:"1",stroke:"currentColor",strokeWidth:"2",fill:"none"}),d.jsx("path",{d:"M16 24H20M28 36H34",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),nx=()=>d.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[d.jsx("rect",{x:"6",y:"18",width:"28",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"2",fill:"none"}),d.jsx("path",{d:"M34 24H42V32C42 33.1046 41.1046 34 40 34H34V24Z",stroke:"currentColor",strokeWidth:"2",fill:"none"}),d.jsx("circle",{cx:"14",cy:"36",r:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"}),d.jsx("circle",{cx:"30",cy:"36",r:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"}),d.jsx("path",{d:"M12 18V12L20 8L28 12V18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),ax=()=>d.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[d.jsx("path",{d:"M12 8H36C38.2091 8 40 9.79086 40 12V20L24 28L8 20V12C8 9.79086 9.79086 8 12 8Z",stroke:"currentColor",strokeWidth:"2",fill:"none"}),d.jsx("path",{d:"M8 20V36C8 38.2091 9.79086 40 12 40H36C38.2091 40 40 38.2091 40 36V20",stroke:"currentColor",strokeWidth:"2",fill:"none"}),d.jsx("circle",{cx:"24",cy:"28",r:"4",fill:"currentColor"}),d.jsx("path",{d:"M16 16H32",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),ix=()=>d.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[d.jsx("rect",{x:"4",y:"28",width:"12",height:"16",rx:"1",stroke:"currentColor",strokeWidth:"2",fill:"none"}),d.jsx("rect",{x:"18",y:"20",width:"12",height:"24",rx:"1",stroke:"currentColor",strokeWidth:"2",fill:"none"}),d.jsx("rect",{x:"32",y:"12",width:"12",height:"32",rx:"1",stroke:"currentColor",strokeWidth:"2",fill:"none"}),d.jsx("path",{d:"M10 4L24 10L38 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),d.jsx("circle",{cx:"38",cy:"8",r:"3",fill:"currentColor"})]}),lx=()=>d.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[d.jsx("rect",{x:"6",y:"12",width:"36",height:"30",rx:"3",stroke:"currentColor",strokeWidth:"2",fill:"none"}),d.jsx("path",{d:"M6 20H42",stroke:"currentColor",strokeWidth:"2"}),d.jsx("path",{d:"M14 6V14M34 6V14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),d.jsx("circle",{cx:"16",cy:"28",r:"2",fill:"currentColor"}),d.jsx("circle",{cx:"24",cy:"28",r:"2",fill:"currentColor"}),d.jsx("circle",{cx:"32",cy:"28",r:"2",fill:"currentColor"}),d.jsx("circle",{cx:"16",cy:"36",r:"2",fill:"currentColor"}),d.jsx("circle",{cx:"24",cy:"36",r:"2",fill:"currentColor"})]}),rx=()=>d.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[d.jsx("path",{d:"M6 20L24 8L42 20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("rect",{x:"6",y:"20",width:"36",height:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"}),d.jsx("rect",{x:"10",y:"24",width:"6",height:"16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),d.jsx("rect",{x:"21",y:"24",width:"6",height:"16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),d.jsx("rect",{x:"32",y:"24",width:"6",height:"16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),d.jsx("rect",{x:"6",y:"40",width:"36",height:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"})]}),ox=()=>d.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[d.jsx("circle",{cx:"24",cy:"14",r:"8",stroke:"currentColor",strokeWidth:"2",fill:"none"}),d.jsx("path",{d:"M12 44V38C12 33.5817 15.5817 30 20 30H28C32.4183 30 36 33.5817 36 38V44",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),d.jsx("path",{d:"M36 14L44 10M36 18L44 22",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),d.jsx("circle",{cx:"44",cy:"16",r:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"})]}),cx=({service:a,onClose:l})=>(Y.useEffect(()=>{const o=r=>{r.key==="Escape"&&l()};return document.addEventListener("keydown",o),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",o),document.body.style.overflow=""}},[l]),d.jsx("div",{className:"modal-backdrop",onClick:l,role:"dialog","aria-modal":"true",children:d.jsxs("div",{className:"modal-panel",style:{"--accent":a.accent},onClick:o=>o.stopPropagation(),children:[d.jsx("div",{className:"modal-glow"}),d.jsx("button",{className:"modal-close",onClick:l,"aria-label":"Close",children:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",width:"20",height:"20",children:d.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),d.jsxs("div",{className:"modal-header-row",children:[d.jsxs("div",{className:"modal-icon-wrapper",children:[d.jsx("div",{className:"modal-icon-ring"}),a.icon]}),d.jsxs("div",{children:[d.jsx("h2",{className:"modal-title",children:a.title}),d.jsx("div",{className:"modal-divider"})]})]}),d.jsx("p",{className:"modal-description",children:a.description}),d.jsx("div",{className:"modal-stats",children:a.stats.map((o,r)=>d.jsxs("div",{className:"modal-stat",children:[d.jsx("span",{className:"modal-stat-value",children:o.value}),d.jsx("span",{className:"modal-stat-label",children:o.label})]},r))}),d.jsxs("div",{className:"modal-highlights",children:[d.jsx("p",{className:"modal-highlights-title",children:"What's included"}),d.jsx("ul",{className:"modal-highlights-list",children:a.highlights.map((o,r)=>d.jsxs("li",{className:"modal-highlight-item",children:[d.jsx("span",{className:"modal-highlight-dot"}),o]},r))})]}),d.jsx("button",{className:"modal-cta",onClick:l,children:"Got it"})]})})),ux=({service:a,index:l,isInView:o,onExplore:r})=>{const[s,f]=Y.useState(!1);return d.jsx("div",{className:"service-card",style:{"--delay":`${l*.1}s`,"--accent":a.accent},onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:d.jsxs("div",{className:`card-inner ${o?"animate-in":""}`,children:[d.jsx("div",{className:"card-bg"}),d.jsx("div",{className:"card-glow"}),d.jsx("div",{className:"particles",children:[...Array(5)].map((h,p)=>d.jsx("span",{className:"particle",style:{"--i":p}},p))}),d.jsxs("div",{className:"card-content",children:[d.jsxs("div",{className:`icon-wrapper ${s?"hovered":""}`,children:[d.jsx("div",{className:"icon-ring"}),d.jsx("div",{className:"icon-ring icon-ring-2"}),a.icon]}),d.jsx("h3",{className:"card-title",children:a.title}),d.jsx("p",{className:"card-description",children:a.description}),d.jsx("div",{className:"card-footer",children:d.jsxs("button",{className:"learn-more",onClick:()=>r(a),children:["Explore",d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",className:"arrow-icon",children:d.jsx("path",{d:"M5 12H19M19 12L12 5M19 12L12 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]}),d.jsx("div",{className:"corner-accent"})]})})},sx=()=>{const{ref:a,isInView:l}=Py(.1),[o,r]=Y.useState(null),s=[{id:1,icon:d.jsx(tx,{}),title:"Brand Activations",description:"We bring your brand to life through engaging, on-ground experiences that capture attention, create emotional impact, and inspire meaningful connections with your target audience.",accent:"#4294f7",highlights:["Tailored on-ground activation strategies","Trained brand ambassador teams","Real-time performance tracking","Post-activation analytics & reporting"],stats:[{value:"200+",label:"Activations Done"},{value:"9",label:"Provinces Covered"},{value:"98%",label:"Client Satisfaction"}]},{id:2,icon:d.jsx(ex,{}),title:"Mall Activations",description:"Strategic mall activations that maximize footfall and engagement, creating memorable brand experiences in high-traffic retail environments across Sri Lanka.",accent:"#8B5CF6",highlights:["Premium mall locations island-wide","Interactive consumer engagement zones","Footfall & conversion measurement","Fully managed setup and teardown"],stats:[{value:"50+",label:"Mall Venues"},{value:"1M+",label:"Consumers Reached"},{value:"3x",label:"Avg. Footfall Boost"}]},{id:3,icon:d.jsx(nx,{}),title:"Roadshows & SMMT Activations",description:"Mobile marketing excellence with nationwide roadshows and SMMT activations, taking your brand directly to communities across all 9 provinces.",accent:"#EC4899",highlights:["Full nationwide route planning","Custom branded vehicles & structures","Community engagement at grassroots level","Live reporting from each location"],stats:[{value:"9",label:"Provinces Reached"},{value:"300+",label:"Locations Visited"},{value:"500K+",label:"People Engaged"}]},{id:4,icon:d.jsx(ax,{}),title:"Sampling Campaigns",description:"Product sampling campaigns that put your offerings directly in the hands of consumers, driving trial, awareness, and conversion effectively.",accent:"#F59E0B",highlights:["Targeted demographic profiling","High-volume sample distribution","Consumer feedback collection","Conversion rate optimisation"],stats:[{value:"2M+",label:"Samples Distributed"},{value:"40%",label:"Avg. Trial-to-Purchase"},{value:"100+",label:"Brands Supported"}]},{id:5,icon:d.jsx(ix,{}),title:"Selling Operations",description:"End-to-end selling operations with trained teams that drive sales, manage distribution, and deliver measurable results for your brand.",accent:"#10B981",highlights:["Dedicated trained sales teams","Territory-based coverage planning","Daily sales reporting & KPIs","Flexible short & long-term deployment"],stats:[{value:"150+",label:"Sales Specialists"},{value:"25%",label:"Avg. Sales Uplift"},{value:"60+",label:"Active Clients"}]},{id:6,icon:d.jsx(lx,{}),title:"Corporate & Public Events",description:"From corporate gatherings to large-scale public events, we plan, manage, and execute seamless experiences that leave lasting impressions.",accent:"#06B6D4",highlights:["End-to-end event planning & logistics","Venue sourcing and setup","AV, staging & production management","Guest experience & crowd management"],stats:[{value:"120+",label:"Events Executed"},{value:"50K+",label:"Max Event Attendance"},{value:"100%",label:"On-time Delivery"}]},{id:7,icon:d.jsx(rx,{}),title:"Government & Institutional Activations",description:"Specialized activations for government and institutional clients, leveraging our strong relationships and expertise in public sector engagement.",accent:"#EF4444",highlights:["Deep public sector expertise","Compliance-ready execution frameworks","Multi-stakeholder coordination","Nationwide institutional reach"],stats:[{value:"30+",label:"Govt. Projects"},{value:"25",label:"Districts Covered"},{value:"10+",label:"Ministries Served"}]},{id:8,icon:d.jsx(ox,{}),title:"Promoter Deployment Projects",description:"Long-term promoter deployment solutions with trained brand ambassadors who represent your brand professionally across retail and field locations.",accent:"#14B8A6",highlights:["Rigorous promoter screening & training","Ongoing performance monitoring","Retail & field deployment flexibility","Dedicated account management"],stats:[{value:"500+",label:"Active Promoters"},{value:"1000+",label:"Retail Outlets Covered"},{value:"95%",label:"Retention Rate"}]}];return d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`

        .services-section {
          --bg-primary: transparent;
          --bg-secondary: transparent;
          --text-primary: #0f172a;
          --text-secondary: #475569;
          --border-color: rgba(0, 0, 0, 0.08);
          
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
          background: rgba(232, 127, 42, 0.1);
          border: 1px solid rgba(232, 127, 42, 0.25);
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #c0522a;
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
          background: #e87f2a;
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
          background: linear-gradient(135deg, #c0522a, #e87f2a, #d4860a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary) !important;
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
          background: #ffffff;
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
            0 16px 40px -8px rgba(0, 0, 0, 0.12),
            0 0 0 1px var(--accent);
        }

        .card-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            transparent 0%,
            rgba(0, 0, 0, 0.03) 50%,
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
      `}),d.jsxs("section",{className:"services-section",ref:a,children:[d.jsx("div",{className:"bg-mesh"}),d.jsx("div",{className:"grid-pattern"}),d.jsxs("div",{className:"floating-shapes",children:[d.jsx("div",{className:"shape shape-1"}),d.jsx("div",{className:"shape shape-2"}),d.jsx("div",{className:"shape shape-3"})]}),d.jsxs("div",{className:"services-container",children:[d.jsxs("header",{className:"section-header",children:[d.jsx("span",{className:"section-label",children:"What We Do"}),d.jsxs("h2",{className:"section-title",children:["Your ",d.jsx("span",{children:"360°"})," Brand Partner"]}),d.jsx("p",{className:"section-subtitle",children:"From concept to execution, we deliver end-to-end brand activation and experiential marketing solutions across all 9 provinces of Sri Lanka."})]}),d.jsx("div",{className:"services-grid",children:s.map((f,h)=>d.jsx(ux,{service:f,index:h,isInView:l,onExplore:r},f.id))})]})]}),o&&d.jsx(cx,{service:o,onClose:()=>r(null)})]})},fx=[{to:200,suffix:"+",label:`Activations
Executed`},{to:9,suffix:"",label:`Provinces
Covered`},{to:1,suffix:"M+",label:`Consumers
Reached`},{to:500,suffix:"+",label:`Active
Promoters`}];function dx(a,l,o,r){const[s,f]=Y.useState(0);return Y.useEffect(()=>{if(!o)return;let h;const p=performance.now()+r,v=y=>{if(y<p){h=requestAnimationFrame(v);return}const g=Math.min((y-p)/l,1),x=1-Math.pow(1-g,3);f(Math.floor(x*a)),g<1?h=requestAnimationFrame(v):f(a)};return h=requestAnimationFrame(v),()=>cancelAnimationFrame(h)},[o,a,l,r]),s}const hx=({stat:a,active:l,index:o})=>{const r=dx(a.to,1800,l,o*180);return d.jsxs("div",{className:"stat-item",children:[d.jsxs("div",{className:"stat-number",children:[r,a.suffix]}),d.jsx("div",{className:"stat-label",children:a.label.replace("\\n",`
`)})]})},mx=()=>{const a=Y.useRef(null),[l,o]=Y.useState(!1);return Y.useEffect(()=>{const r=a.current;if(!r)return;const s=new IntersectionObserver(([f])=>{f.isIntersecting&&(o(!0),s.disconnect())},{threshold:.35});return s.observe(r),()=>s.disconnect()},[]),d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        .stats-band {
          background: #09090f;
          padding: 64px 48px;
          position: relative;
          overflow: hidden;
        }

        .stats-band::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent);
        }
        .stats-band::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent);
        }

        .stats-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          position: relative;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 24px;
          position: relative;
        }

        .stat-item + .stat-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10%;
          height: 80%;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(201,169,110,0.25), transparent);
        }

        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(48px, 5vw, 72px);
          font-weight: 300;
          line-height: 1;
          background: linear-gradient(135deg, #c9a96e 0%, #e87f2a 50%, #f5c878 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 14px;
          filter: drop-shadow(0 0 18px rgba(232,127,42,0.25));
        }

        .stat-label {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.38);
          line-height: 1.8;
          white-space: pre-line;
        }

        @media (max-width: 768px) {
          .stats-band { padding: 48px 24px; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); gap: 40px 0; }
          .stat-item:nth-child(3)::before { display: none; }
        }

        @media (max-width: 420px) {
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .stat-number { font-size: 40px; }
        }
      `}),d.jsx("div",{className:"stats-band",ref:a,children:d.jsx("div",{className:"stats-inner",children:fx.map((r,s)=>d.jsx(hx,{stat:r,active:l,index:s},s))})})]})},px=[{num:"01",title:"Brief",desc:"We listen first. Your brand story, target audience, goals, and budget shape everything that follows.",icon:d.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"32",height:"32",children:[d.jsx("rect",{x:"6",y:"8",width:"28",height:"24",rx:"3",stroke:"currentColor",strokeWidth:"1.5"}),d.jsx("path",{d:"M12 15h16M12 20h12M12 25h8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{num:"02",title:"Strategy",desc:"We design a bespoke activation plan — channels, routes, timelines, and KPIs tailored to your market.",icon:d.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"32",height:"32",children:[d.jsx("circle",{cx:"20",cy:"20",r:"13",stroke:"currentColor",strokeWidth:"1.5"}),d.jsx("path",{d:"M20 7v4M20 29v4M7 20h4M29 20h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),d.jsx("circle",{cx:"20",cy:"20",r:"4",fill:"currentColor",opacity:"0.7"})]})},{num:"03",title:"Execution",desc:"Our trained field teams bring the plan to life — on-ground, across all 9 provinces, on schedule.",icon:d.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"32",height:"32",children:[d.jsx("path",{d:"M8 20l8 8 16-16",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("circle",{cx:"20",cy:"20",r:"13",stroke:"currentColor",strokeWidth:"1.5"})]})},{num:"04",title:"Report",desc:"You receive a full performance report — reach, conversions, consumer feedback, and lessons learned.",icon:d.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"32",height:"32",children:[d.jsx("rect",{x:"6",y:"6",width:"12",height:"28",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),d.jsx("rect",{x:"22",y:"14",width:"12",height:"20",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),d.jsx("path",{d:"M9 28h6M25 22h6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),d.jsx("path",{d:"M14 10l8-4 10 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}],gx=()=>{const a=Y.useRef(null),[l,o]=Y.useState(!1);return Y.useEffect(()=>{const r=a.current;if(!r)return;const s=new IntersectionObserver(([f])=>{f.isIntersecting&&(o(!0),s.disconnect())},{threshold:.15});return s.observe(r),()=>s.disconnect()},[]),d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        .hww-section {
          background: #faf9f6;
          padding: 100px 48px;
          position: relative;
          overflow: hidden;
        }

        .hww-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .hww-header {
          text-align: center;
          margin-bottom: 72px;
        }

        .hww-eyebrow {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #e87f2a;
          margin: 0 0 16px;
        }

        .hww-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 400;
          color: #0a0a12;
          margin: 0 0 14px;
          line-height: 1.15;
        }

        .hww-subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          color: rgba(0,0,0,0.45);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .hww-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          position: relative;
          gap: 0;
        }

        /* Connecting line */
        .hww-steps::before {
          content: '';
          position: absolute;
          top: 44px;
          left: calc(12.5% + 24px);
          right: calc(12.5% + 24px);
          height: 1px;
          background: linear-gradient(90deg, rgba(232,127,42,0.3), rgba(201,169,110,0.5), rgba(232,127,42,0.3));
        }

        .hww-step {
          padding: 0 28px;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .hww-step.in {
          opacity: 1;
          transform: translateY(0);
        }
        .hww-step:nth-child(1) { transition-delay: 0.05s; }
        .hww-step:nth-child(2) { transition-delay: 0.15s; }
        .hww-step:nth-child(3) { transition-delay: 0.25s; }
        .hww-step:nth-child(4) { transition-delay: 0.35s; }

        .step-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid rgba(232,127,42,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
          color: #e87f2a;
          position: relative;
          z-index: 1;
          box-shadow: 0 2px 16px rgba(232,127,42,0.1);
        }

        .step-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          color: rgba(232,127,42,0.7);
          margin-bottom: 10px;
          display: block;
        }

        .step-title {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0a0a12;
          margin: 0 0 12px;
        }

        .step-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          color: rgba(0,0,0,0.5);
          line-height: 1.75;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .hww-section { padding: 80px 32px; }
          .hww-steps::before { display: none; }
          .hww-steps { grid-template-columns: repeat(2, 1fr); gap: 48px; }
          .hww-step { padding: 0; }
        }

        @media (max-width: 600px) {
          .hww-section { padding: 64px 20px; }
          .hww-steps { grid-template-columns: 1fr; gap: 40px; }
          .hww-header { margin-bottom: 48px; }
        }
      `}),d.jsx("section",{className:"hww-section",children:d.jsxs("div",{className:"hww-inner",ref:a,children:[d.jsxs("header",{className:"hww-header",children:[d.jsx("p",{className:"hww-eyebrow",children:"Our Process"}),d.jsx("h2",{className:"hww-title",children:"How We Work"}),d.jsx("p",{className:"hww-subtitle",children:"Every activation follows the same disciplined framework — from the first brief to the final report."})]}),d.jsx("div",{className:"hww-steps",children:px.map((r,s)=>d.jsxs("div",{className:`hww-step${l?" in":""}`,children:[d.jsx("div",{className:"step-icon-wrap",children:r.icon}),d.jsx("span",{className:"step-num",children:r.num}),d.jsx("h3",{className:"step-title",children:r.title}),d.jsx("p",{className:"step-desc",children:r.desc})]},s))})]})})]})},vx=[{logo:Rg,brand:"Coca-Cola",category:"Brand & Sampling Activation",headline:"Taking the world's #1 beverage directly to Sri Lankan consumers.",result1:{value:"500K+",label:"Samples Distributed"},result2:{value:"7",label:"Provinces"},result3:{value:"60",label:"Days"},accent:"#EF4444",bg:"linear-gradient(135deg, rgba(239,68,68,0.06) 0%, rgba(255,255,255,0) 60%)"},{logo:Bg,brand:"HNB Bank",category:"Corporate Event Management",headline:"Delivering premium corporate experiences for Sri Lanka's leading bank.",result1:{value:"12+",label:"Events Delivered"},result2:{value:"8K+",label:"Attendees"},result3:{value:"100%",label:"On-Time"},accent:"#1D4ED8",bg:"linear-gradient(135deg, rgba(29,78,216,0.06) 0%, rgba(255,255,255,0) 60%)"},{logo:Lg,brand:"Maliban",category:"Roadshow & SMMT Activation",headline:"Nationwide grassroots campaign bringing Maliban to every community.",result1:{value:"300+",label:"Locations"},result2:{value:"9",label:"Provinces"},result3:{value:"1M+",label:"Impressions"},accent:"#e87f2a",bg:"linear-gradient(135deg, rgba(232,127,42,0.07) 0%, rgba(255,255,255,0) 60%)"}],yx=()=>{const a=Y.useRef(null),[l,o]=Y.useState(!1);return Y.useEffect(()=>{const r=a.current;if(!r)return;const s=new IntersectionObserver(([f])=>{f.isIntersecting&&(o(!0),s.disconnect())},{threshold:.1});return s.observe(r),()=>s.disconnect()},[]),d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        .cs-section {
          background: #ffffff;
          padding: 100px 48px;
        }

        .cs-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .cs-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .cs-eyebrow {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #e87f2a;
          margin: 0 0 16px;
        }

        .cs-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 400;
          color: #0a0a12;
          margin: 0 0 14px;
          line-height: 1.15;
        }

        .cs-subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          color: rgba(0,0,0,0.45);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .cs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .cs-card {
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 20px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.3s ease;
        }
        .cs-card.in {
          opacity: 1;
          transform: translateY(0);
        }
        .cs-card:nth-child(1) { transition-delay: 0.05s; }
        .cs-card:nth-child(2) { transition-delay: 0.15s; }
        .cs-card:nth-child(3) { transition-delay: 0.25s; }
        .cs-card:hover {
          box-shadow: 0 16px 48px rgba(0,0,0,0.1);
          transform: translateY(-4px);
        }

        .cs-card-top {
          padding: 32px 32px 24px;
        }

        .cs-logo-wrap {
          width: 80px;
          height: 48px;
          display: flex;
          align-items: center;
          margin-bottom: 24px;
        }

        .cs-logo-wrap img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .cs-category {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin: 0 0 10px;
        }

        .cs-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 500;
          color: #0a0a12;
          line-height: 1.45;
          margin: 0;
        }

        .cs-accent-bar {
          height: 3px;
          margin: 24px 32px 0;
          border-radius: 2px;
        }

        .cs-results {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: 24px 32px 32px;
          gap: 0;
          background: rgba(0,0,0,0.018);
        }

        .cs-result {
          text-align: center;
          padding: 0 8px;
          position: relative;
        }

        .cs-result + .cs-result::before {
          content: '';
          position: absolute;
          left: 0;
          top: 15%;
          height: 70%;
          width: 1px;
          background: rgba(0,0,0,0.08);
        }

        .cs-result-value {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #0a0a12;
          display: block;
          line-height: 1;
          margin-bottom: 6px;
        }

        .cs-result-label {
          font-family: 'Outfit', sans-serif;
          font-size: 9.5px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(0,0,0,0.38);
        }

        @media (max-width: 1024px) {
          .cs-grid { grid-template-columns: 1fr; gap: 24px; max-width: 540px; margin: 0 auto; }
        }

        @media (max-width: 600px) {
          .cs-section { padding: 64px 20px; }
          .cs-card-top { padding: 24px 24px 18px; }
          .cs-accent-bar { margin: 18px 24px 0; }
          .cs-results { padding: 20px 24px 24px; }
        }
      `}),d.jsx("section",{className:"cs-section",children:d.jsxs("div",{className:"cs-inner",ref:a,children:[d.jsxs("header",{className:"cs-header",children:[d.jsx("p",{className:"cs-eyebrow",children:"Case Studies"}),d.jsx("h2",{className:"cs-title",children:"Campaigns That Delivered"}),d.jsx("p",{className:"cs-subtitle",children:"Real results for real brands — a snapshot of activations that moved the needle."})]}),d.jsx("div",{className:"cs-grid",children:vx.map((r,s)=>d.jsxs("div",{className:`cs-card${l?" in":""}`,children:[d.jsxs("div",{className:"cs-card-top",style:{background:r.bg},children:[d.jsx("div",{className:"cs-logo-wrap",children:d.jsx("img",{src:r.logo,alt:r.brand})}),d.jsx("p",{className:"cs-category",style:{color:r.accent},children:r.category}),d.jsx("p",{className:"cs-headline",children:r.headline})]}),d.jsx("div",{className:"cs-accent-bar",style:{background:r.accent}}),d.jsx("div",{className:"cs-results",children:[r.result1,r.result2,r.result3].map((f,h)=>d.jsxs("div",{className:"cs-result",children:[d.jsx("span",{className:"cs-result-value",style:{color:r.accent},children:f.value}),d.jsx("span",{className:"cs-result-label",children:f.label})]},h))})]},s))})]})})]})},xx=[{name:"FMCG",desc:"Sampling, roadshows & shelf-push campaigns for fast-moving brands.",icon:d.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"36",height:"36",children:[d.jsx("path",{d:"M8 32V16l12-8 12 8v16H8z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),d.jsx("rect",{x:"15",y:"22",width:"10",height:"10",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),d.jsx("path",{d:"M20 8v6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Banking & Finance",desc:"Corporate events, product launches & customer acquisition drives.",icon:d.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"36",height:"36",children:[d.jsx("path",{d:"M6 18L20 8l14 10H6z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),d.jsx("rect",{x:"6",y:"18",width:"28",height:"3",stroke:"currentColor",strokeWidth:"1.5"}),d.jsx("rect",{x:"6",y:"32",width:"28",height:"3",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),d.jsx("path",{d:"M10 21v11M18 21v11M26 21v11M34 21v11",stroke:"currentColor",strokeWidth:"1.5"})]})},{name:"Telecom",desc:"Subscriber acquisition, SIM distribution & awareness activations.",icon:d.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"36",height:"36",children:[d.jsx("path",{d:"M20 8C13.373 8 8 13.373 8 20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),d.jsx("path",{d:"M20 14c-3.314 0-6 2.686-6 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),d.jsx("circle",{cx:"20",cy:"20",r:"3",fill:"currentColor",opacity:"0.8"}),d.jsx("path",{d:"M20 26v6M17 32h6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),d.jsx("path",{d:"M32 8C25.373 8 20 13.373 20 20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Government",desc:"Public awareness campaigns, institutional events & community outreach.",icon:d.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"36",height:"36",children:[d.jsx("path",{d:"M6 18L20 9l14 9H6z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),d.jsx("rect",{x:"6",y:"18",width:"28",height:"3",fill:"currentColor",opacity:"0.2",stroke:"currentColor",strokeWidth:"1.5"}),d.jsx("path",{d:"M10 21v10M18 21v10M26 21v10M34 21v10",stroke:"currentColor",strokeWidth:"1.5"}),d.jsx("rect",{x:"6",y:"31",width:"28",height:"3",rx:"1",stroke:"currentColor",strokeWidth:"1.5"})]})},{name:"Healthcare",desc:"Patient education drives, product sampling & healthcare professional outreach.",icon:d.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"36",height:"36",children:[d.jsx("rect",{x:"8",y:"8",width:"24",height:"24",rx:"4",stroke:"currentColor",strokeWidth:"1.5"}),d.jsx("path",{d:"M20 14v12M14 20h12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})},{name:"Retail",desc:"In-store promotions, footfall drives & experiential retail activations.",icon:d.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"36",height:"36",children:[d.jsx("path",{d:"M7 10h26l-3 14H10L7 10z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),d.jsx("path",{d:"M10 24l-2 8h24l-2-8",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),d.jsx("circle",{cx:"16",cy:"36",r:"2",stroke:"currentColor",strokeWidth:"1.5"}),d.jsx("circle",{cx:"26",cy:"36",r:"2",stroke:"currentColor",strokeWidth:"1.5"}),d.jsx("path",{d:"M14 10l2-4h8l2 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]})},{name:"Consumer Goods",desc:"Trial campaigns, loyalty programs & multi-city brand activation.",icon:d.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"36",height:"36",children:[d.jsx("rect",{x:"10",y:"8",width:"20",height:"26",rx:"3",stroke:"currentColor",strokeWidth:"1.5"}),d.jsx("path",{d:"M15 14h10M15 19h10M15 24h6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),d.jsx("circle",{cx:"28",cy:"28",r:"6",fill:"#f5f4f0",stroke:"currentColor",strokeWidth:"1.5"}),d.jsx("path",{d:"M26 28l2 2 4-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})},{name:"Lifestyle & Beauty",desc:"Mall activations, influencer events & premium brand experiences.",icon:d.jsx("svg",{viewBox:"0 0 40 40",fill:"none",width:"36",height:"36",children:d.jsx("path",{d:"M20 6l3.09 9.26L32 18l-7.5 5.5L27 33l-7-5.5L13 33l2.5-9.5L8 18l8.91-2.74L20 6z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})})}],bx=()=>{const a=Y.useRef(null),[l,o]=Y.useState(!1);return Y.useEffect(()=>{const r=a.current;if(!r)return;const s=new IntersectionObserver(([f])=>{f.isIntersecting&&(o(!0),s.disconnect())},{threshold:.1});return s.observe(r),()=>s.disconnect()},[]),d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        .ind-section {
          background: #faf9f6;
          padding: 100px 48px;
        }

        .ind-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .ind-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .ind-eyebrow {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #e87f2a;
          margin: 0 0 16px;
        }

        .ind-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 400;
          color: #0a0a12;
          margin: 0 0 14px;
          line-height: 1.15;
        }

        .ind-subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          color: rgba(0,0,0,0.45);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .ind-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .ind-card {
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 16px;
          padding: 28px 24px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1),
                      border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .ind-card.in {
          opacity: 1;
          transform: translateY(0);
        }
        .ind-card:nth-child(1)  { transition-delay: 0.03s; }
        .ind-card:nth-child(2)  { transition-delay: 0.08s; }
        .ind-card:nth-child(3)  { transition-delay: 0.13s; }
        .ind-card:nth-child(4)  { transition-delay: 0.18s; }
        .ind-card:nth-child(5)  { transition-delay: 0.23s; }
        .ind-card:nth-child(6)  { transition-delay: 0.28s; }
        .ind-card:nth-child(7)  { transition-delay: 0.33s; }
        .ind-card:nth-child(8)  { transition-delay: 0.38s; }

        .ind-card:hover {
          border-color: rgba(232,127,42,0.3);
          box-shadow: 0 8px 32px rgba(232,127,42,0.08);
        }
        .ind-card:hover .ind-icon { color: #e87f2a; }

        .ind-icon {
          color: rgba(0,0,0,0.35);
          margin-bottom: 16px;
          transition: color 0.3s ease;
          display: block;
        }

        .ind-name {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #0a0a12;
          margin: 0 0 8px;
        }

        .ind-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          color: rgba(0,0,0,0.45);
          line-height: 1.65;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .ind-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .ind-section { padding: 64px 20px; }
          .ind-grid { grid-template-columns: 1fr; }
        }
      `}),d.jsx("section",{className:"ind-section",children:d.jsxs("div",{className:"ind-inner",ref:a,children:[d.jsxs("header",{className:"ind-header",children:[d.jsx("p",{className:"ind-eyebrow",children:"Industries"}),d.jsx("h2",{className:"ind-title",children:"Industries We Serve"}),d.jsx("p",{className:"ind-subtitle",children:"From multinational FMCG giants to government institutions — we activate across every major sector in Sri Lanka."})]}),d.jsx("div",{className:"ind-grid",children:xx.map((r,s)=>d.jsxs("div",{className:`ind-card${l?" in":""}`,children:[d.jsx("span",{className:"ind-icon",children:r.icon}),d.jsx("h3",{className:"ind-name",children:r.name}),d.jsx("p",{className:"ind-desc",children:r.desc})]},s))})]})})]})},_p=["ACTIVATE","INSPIRE","ELEVATE","CONNECT"],Tp=["S","T","R","A","B","S","O"],Sx=["Brand Activations","Mall Activations","Roadshows & SMMT","Sampling Campaigns","Selling Operations","Corporate Events","Government Activations","Promoter Deployment","Brand Activations","Mall Activations","Roadshows & SMMT","Sampling Campaigns","Selling Operations","Corporate Events","Government Activations","Promoter Deployment"],wx=()=>{const[a,l]=Y.useState(!1),[o,r]=Y.useState(!1),[s,f]=Y.useState(Array(7).fill(!1)),[h,p]=Y.useState(!1),[v,y]=Y.useState(!1),[g,x]=Y.useState(!1),[S,w]=Y.useState(!1),[N,L]=Y.useState(!1),[H,R]=Y.useState(0),[Z,D]=Y.useState("idle"),U=Y.useRef(null),Q=Y.useCallback(()=>{document.querySelector('[data-section="Projects"]')?.scrollIntoView({behavior:"smooth"})},[]);return Y.useEffect(()=>{const K=[],W=(I,it)=>{K.push(setTimeout(it,I))};return W(200,()=>{l(!0),r(!0)}),Tp.forEach((I,it)=>{W(900+it*95,()=>{f(dt=>{const et=[...dt];return et[it]=!0,et})})}),W(1680,()=>p(!0)),W(1820,()=>{y(!0),x(!0)}),W(2250,()=>w(!0)),W(2680,()=>L(!0)),W(2750,()=>{U.current=setInterval(()=>{D("exiting"),setTimeout(()=>{R(I=>(I+1)%_p.length),D("entering")},380),setTimeout(()=>D("idle"),980)},2900)}),()=>{K.forEach(clearTimeout),U.current&&clearInterval(U.current)}},[]),d.jsxs("div",{className:"home-wrapper",role:"main",children:[d.jsxs("section",{className:"hero-cinema",children:[d.jsx("div",{className:"cinema-ambient","aria-hidden":"true"}),d.jsx("div",{className:"cinema-scanlines","aria-hidden":"true"}),d.jsx("span",{className:"c-corner c-corner--tl","aria-hidden":"true"}),d.jsx("span",{className:"c-corner c-corner--tr","aria-hidden":"true"}),d.jsx("span",{className:"c-corner c-corner--bl","aria-hidden":"true"}),d.jsx("span",{className:"c-corner c-corner--br","aria-hidden":"true"}),d.jsxs("div",{className:"cinema-stage",children:[d.jsxs("p",{className:`cinema-eyebrow${a?" in":""}`,"aria-hidden":"true",children:[d.jsx("span",{className:"eyebrow-dot",children:"◆"}),"Brand Activation Agency · Sri Lanka · Est. 2020",d.jsx("span",{className:"eyebrow-dot",children:"◆"})]}),d.jsx("div",{className:`cinema-sweep${o?" in":""}`,"aria-hidden":"true"}),d.jsxs("h1",{className:"cinema-brand","aria-label":"Strabso",children:[Tp.map((K,W)=>d.jsx("span",{className:"lw","aria-hidden":"true",children:d.jsx("span",{className:`lc${s[W]?" in":""}`,children:K})},W)),h&&d.jsx("span",{className:"brand-shimmer","aria-hidden":"true"})]}),d.jsx("div",{className:`cinema-gold${v?" in":""}`,"aria-hidden":"true"}),d.jsx("p",{className:`cinema-tagline${g?" in":""}`,children:"Sri Lanka's premier on-ground marketing partner"}),d.jsx("div",{className:`cinema-cycle-wrap${S?" in":""}`,"aria-live":"polite",children:d.jsx("span",{className:`cinema-word phase-${Z}`,children:_p[H]})}),d.jsx("div",{className:`cinema-cta${N?" in":""}`,children:d.jsxs("button",{className:"cinema-btn",onClick:Q,children:[d.jsx("span",{children:"See Our Work"}),d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:d.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})})]}),d.jsx("div",{className:"cinema-ticker","aria-hidden":"true",children:d.jsx("div",{className:"cinema-ticker-track",children:Sx.map((K,W)=>d.jsxs("span",{className:"cinema-ticker-item",children:[K,d.jsx("span",{className:"cinema-ticker-sep",children:"·"})]},W))})})]}),d.jsx(mx,{}),d.jsx("div",{className:"services-section",children:d.jsx(sx,{})}),d.jsx(gx,{}),d.jsx(bx,{}),d.jsx("div",{className:"carousel-section",children:d.jsx(Iy,{})}),d.jsx(yx,{})]})},jx="/Strabso/";function mt(a,l){return`${jx}gallery/${encodeURIComponent(a)}/${encodeURIComponent(l)}`}const Cp=[{id:1,title:"Coca Cola Annual Business Con 2025",category:"Business Conference",location:"Colombo",year:"2025",coverImage:mt("Coca Cola Annual Business Con 2025","cover.jpg"),photos:[mt("Coca Cola Annual Business Con 2025","cover.jpg"),mt("Coca Cola Annual Business Con 2025","coca1.jpg"),mt("Coca Cola Annual Business Con 2025","coco2.jpg"),mt("Coca Cola Annual Business Con 2025","coca3.jpg"),mt("Coca Cola Annual Business Con 2025","coca4.jpg")]},{id:2,title:"Elephant House – Vibe Activations",category:"Brand Activation",location:"Island-wide",year:"2024–2025",coverImage:mt("Elephant House – Vibe SMMT Activation","cover.jpg"),photos:[mt("Elephant House – Vibe SMMT Activation","cover.jpg"),mt("Elephant House – Vibe SMMT Activation","eh.jpg"),mt("Elephant House – Vibe SMMT Activation","eh2.jpg"),mt("Elephant House – Vibe SMMT Activation","movie_cover.jpg"),mt("Elephant House – Vibe SMMT Activation","movie_eh.jpg")]},{id:3,title:"Roza Pasta – Christmas Mall Activation",category:"Mall Activation",location:"Colombo",year:"2024",coverImage:mt("Roza Pasta – Christmas Mall Activation","cover.jpg"),photos:[mt("Roza Pasta – Christmas Mall Activation","cover.jpg"),mt("Roza Pasta – Christmas Mall Activation","ro1.jpg"),mt("Roza Pasta – Christmas Mall Activation","ro2.png")]},{id:4,title:"Uswatta – Jo-Pet Big Match Selling Operation",category:"Selling Operation",location:"Island-wide",year:"2024",coverImage:mt("Uswatta – Jo-Pet Big Match- Selling Operation ","cover.jpg"),photos:[mt("Uswatta – Jo-Pet Big Match- Selling Operation ","cover.jpg"),mt("Uswatta – Jo-Pet Big Match- Selling Operation ","us1.jpg")]},{id:5,title:"Vivya – MT Activation",category:"Modern Trade Activation",location:"Island-wide",year:"2024",coverImage:mt("Vivya – MT Activation ","cover.jpg"),photos:[mt("Vivya – MT Activation ","cover.jpg"),mt("Vivya – MT Activation ","vv1.jpg"),mt("Vivya – MT Activation ","vv2.jpg")]},{id:6,title:"Xtra – SL & AFG Cricket Tournament 2024",category:"Sports Activation",location:"Colombo",year:"2024",coverImage:mt("Xtra – SL AFG One Day Cricket Tournament 2024","cover.jpg"),photos:[mt("Xtra – SL AFG One Day Cricket Tournament 2024","cover.jpg"),mt("Xtra – SL AFG One Day Cricket Tournament 2024","ext1.jpg"),mt("Xtra – SL AFG One Day Cricket Tournament 2024","ext2.jpg"),mt("Xtra – SL AFG One Day Cricket Tournament 2024","ext3.png")]},{id:7,title:"Maliban – Non Fat Mall Activation",category:"Mall Activation",location:"Colombo",year:"2025",coverImage:mt("Maliban - Non Fat Mall Activation","cover.jpg"),photos:[mt("Maliban - Non Fat Mall Activation","cover.jpg"),mt("Maliban - Non Fat Mall Activation","mal.jpg"),mt("Maliban - Non Fat Mall Activation","mal1.jpg")]},{id:8,title:"Anchor – Nallur Festival Door to Door",category:"Door to Door Activation",location:"Jaffna",year:"2025",coverImage:mt("Anchor - Nallur Festival - Door to Door Activation","cover.jpg"),photos:[mt("Anchor - Nallur Festival - Door to Door Activation","cover.jpg"),mt("Anchor - Nallur Festival - Door to Door Activation","ac.jpg")]},{id:9,title:"Kesha – Office Activation",category:"Office Activation",location:"Colombo",year:"2025",coverImage:mt("Kesha - Office Activation","cover.jpg"),photos:[mt("Kesha - Office Activation","cover.jpg"),mt("Kesha - Office Activation","ks1.jpg")]},{id:10,title:"Lanka Soy – Town Activation",category:"Town Activation",location:"Island-wide",year:"2025",coverImage:mt("Lanka Soy Town Activation","cover.jpg"),photos:[mt("Lanka Soy Town Activation","cover.jpg"),mt("Lanka Soy Town Activation","ls.jpg"),mt("Lanka Soy Town Activation","ls1.jpg")]},{id:11,title:"Sting – Holy Activation",category:"Brand Activation",location:"Island-wide",year:"2025",coverImage:mt("Sting - Holy Activation","cover.jpg"),photos:[mt("Sting - Holy Activation","cover.jpg"),mt("Sting - Holy Activation","stng.jpg")]},{id:12,title:"HNB – SOLO Merchant Activation",category:"Merchant Activation",location:"Island-wide",year:"2025",coverImage:mt("HNB - SOLO Merchant Activation","cover.jpg"),photos:[mt("HNB - SOLO Merchant Activation","cover.jpg"),mt("HNB - SOLO Merchant Activation","hnb.jpg"),mt("HNB - SOLO Merchant Activation","hnb1.jpg")]}],Mx=[{number:"100+",label:"Activations"},{number:"25+",label:"Brand Partners"},{number:"9",label:"Provinces"}],Ex=({src:a,className:l})=>{const o=Y.useRef(null),[r,s]=Y.useState(!1);return Y.useEffect(()=>{const f=o.current;if(!f)return;const h=new IntersectionObserver(([p])=>{p.isIntersecting&&(s(!0),h.disconnect())},{rootMargin:"300px"});return h.observe(f),()=>h.disconnect()},[]),d.jsx("div",{ref:o,className:l,style:{backgroundImage:r?`url('${a}')`:"none",backgroundColor:r?void 0:"rgba(255,255,255,0.04)",backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",transition:"background-image 0.3s ease"}})},zx=({project:a,startIndex:l,onClose:o})=>{const[r,s]=Y.useState(l),f=Y.useRef(null),h=Y.useCallback(()=>s(v=>(v-1+a.photos.length)%a.photos.length),[a.photos.length]),p=Y.useCallback(()=>s(v=>(v+1)%a.photos.length),[a.photos.length]);return Y.useEffect(()=>{const v=y=>{y.key==="Escape"&&o(),y.key==="ArrowRight"&&p(),y.key==="ArrowLeft"&&h()};return window.addEventListener("keydown",v),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",v),document.body.style.overflow=""}},[o,p,h]),d.jsx("div",{className:"lb-overlay",onClick:o,onTouchStart:v=>{f.current=v.touches[0].clientX},onTouchEnd:v=>{if(f.current===null)return;const y=f.current-v.changedTouches[0].clientX;Math.abs(y)>50&&(y>0?p():h()),f.current=null},children:d.jsxs("div",{className:"lb-box",onClick:v=>v.stopPropagation(),children:[d.jsxs("div",{className:"lb-header",children:[d.jsx("span",{className:"lb-title",children:a.title}),d.jsxs("div",{className:"lb-header-right",children:[d.jsxs("span",{className:"lb-counter",children:[r+1," / ",a.photos.length]}),d.jsx("button",{className:"lb-close",onClick:o,"aria-label":"Close",children:d.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:d.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]})]}),d.jsxs("div",{className:"lb-img-wrap",children:[d.jsx("button",{className:"lb-nav lb-nav-prev",onClick:h,"aria-label":"Previous",children:d.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M15 18L9 12l6-6"})})}),d.jsx("img",{src:a.photos[r],alt:`${a.title} ${r+1}`,className:"lb-img",decoding:"async"},r),d.jsx("button",{className:"lb-nav lb-nav-next",onClick:p,"aria-label":"Next",children:d.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M9 18l6-6-6-6"})})})]}),a.photos.length>1&&d.jsx("div",{className:"lb-thumbs",children:a.photos.map((v,y)=>d.jsx("button",{className:`lb-thumb${y===r?" lb-thumb-active":""}`,onClick:()=>s(y),"aria-label":`Photo ${y+1}`,children:d.jsx("img",{src:v,alt:"",loading:"lazy",decoding:"async"})},y))}),d.jsx("p",{className:"lb-swipe-hint",children:"Swipe to navigate"})]})})},Nx=({project:a,index:l,onOpen:o})=>d.jsxs("article",{className:"pc-card",style:{animationDelay:`${l%4*.08}s`},onClick:()=>o(a.id),role:"button",tabIndex:0,"aria-label":`View ${a.title} gallery`,onKeyDown:r=>r.key==="Enter"&&o(a.id),children:[d.jsxs("div",{className:"pc-img-wrap",children:[d.jsx(Ex,{src:a.coverImage,className:"pc-img"}),d.jsx("div",{className:"pc-overlay"}),d.jsxs("div",{className:"pc-badge",children:[d.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),d.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5",fill:"currentColor"}),d.jsx("path",{d:"M21 15L16 10 5 21",strokeLinecap:"round",strokeLinejoin:"round"})]}),a.photos.length]}),d.jsxs("div",{className:"pc-cta",children:[d.jsx("span",{children:"View Gallery"}),d.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M7 17L17 7M17 7H7M17 7v10"})})]})]}),d.jsxs("div",{className:"pc-info",children:[d.jsx("span",{className:"pc-category",children:a.category}),d.jsx("h3",{className:"pc-title",children:a.title}),d.jsxs("div",{className:"pc-meta",children:[d.jsx("span",{children:a.location}),d.jsx("span",{className:"pc-dot",children:"·"}),d.jsx("span",{children:a.year})]})]})]}),Ax=()=>{const[a,l]=Y.useState(null),o=a!=null?Cp.find(r=>r.id===a)??null:null;return d.jsxs("div",{className:"proj-page",children:[d.jsx("style",{children:`
        /* ── Page ── */
        .proj-page {
          min-height: 100vh;
          background: #07070f;
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
      `}),d.jsxs("div",{className:"proj-inner",children:[d.jsxs("header",{className:"proj-header",children:[d.jsx("p",{className:"proj-eyebrow",children:"Our Work"}),d.jsx("h1",{className:"proj-heading",children:"Projects"}),d.jsx("hr",{className:"proj-rule"})]}),d.jsx("div",{className:"proj-stats",role:"list",children:Mx.map(r=>d.jsxs("div",{className:"proj-stat",role:"listitem",children:[d.jsx("span",{className:"proj-stat-num",children:r.number}),d.jsx("span",{className:"proj-stat-label",children:r.label})]},r.label))}),d.jsx("div",{className:"proj-grid",children:Cp.map((r,s)=>d.jsx(Nx,{project:r,index:s,onOpen:f=>l(f)},r.id))})]}),o&&d.jsx(zx,{project:o,startIndex:0,onClose:()=>l(null)})]})},_x=()=>{const a=Y.useRef(null),[l,o]=Y.useState(!1);Y.useEffect(()=>{const f=()=>{o(window.innerWidth<=767)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]),Y.useEffect(()=>{const f=new IntersectionObserver(p=>{p.forEach(v=>{v.isIntersecting&&v.target.classList.add("animate-in")})},{threshold:.1});return document.querySelectorAll(".fade-up").forEach(p=>f.observe(p)),()=>f.disconnect()},[]);const r=[{icon:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"value-svg-icon",children:d.jsx("path",{d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",strokeLinecap:"round",strokeLinejoin:"round"})}),title:"Innovation",description:"Innovative event and activation concepts that set your brand apart from the competition."},{icon:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"value-svg-icon",children:d.jsx("path",{d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",strokeLinecap:"round",strokeLinejoin:"round"})}),title:"Brand-First",description:"Deep brand-first strategic thinking — not just BTL execution, but complete brand elevation."},{icon:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"value-svg-icon",children:d.jsx("path",{d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",strokeLinecap:"round",strokeLinejoin:"round"})}),title:"Regional Reach",description:"Strong North & East regional resource network with island-wide coverage across Sri Lanka."},{icon:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"value-svg-icon",children:d.jsx("path",{d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",strokeLinecap:"round",strokeLinejoin:"round"})}),title:"Government Relations",description:"Government sector approvals, involvement & collaborations for seamless execution."}],s=[{year:"2020",event:"Strabso Founded",description:"Started with a vision to transform brand activations in Sri Lanka"},{year:"2021",event:"Major Brand Partnerships",description:"Partnered with Coca-Cola, HNB, and leading FMCG brands"},{year:"2022",event:"North & East Expansion",description:"Established strong presence in Northern and Eastern regions"},{year:"2023",event:"Corporate Events",description:"Executed Coca-Cola Annual Sales Conference and Award Ceremonies"},{year:"2024",event:"360° Solutions",description:"Launched complete end-to-end brand activation services"},{year:"2025",event:"Industry Leader",description:"Targeting top 5 agency position with 360° client solutions"}];return d.jsxs("div",{className:"about-us-page",children:[d.jsx("style",{children:`

        .about-us-page {
          --color-bg: #ffffff;
          --color-bg-secondary: rgba(0, 0, 0, 0.03);
          --color-text: #111111;
          --color-text-muted: #666666;
          --color-accent: #e87f2a;
          --color-accent-hover: #c0522a;
          --color-border: rgba(0, 0, 0, 0.1);
          --font-display: 'Playfair Display', Georgia, serif;
          --font-body: 'Outfit', sans-serif;

          background-color: var(--color-bg);
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
          background-image: radial-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px);
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
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 16px;
          background: rgba(0,0,0,0.02);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }

        .vm-card:hover {
          border-color: rgba(0,0,0,0.14);
          transform: translateY(-4px);
        }

        .vm-card-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(0,0,0,0.05);
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
          background: linear-gradient(135deg, rgba(232, 127, 42, 0.07) 0%, rgba(245, 244, 240, 0.8) 100%);
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
          background: linear-gradient(160deg, #fff8f2 0%, #fdebd4 45%, #fad9b0 100%);
        }

        .cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 60% 40%, rgba(232, 127, 42, 0.18), transparent 65%);
          pointer-events: none;
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
      `}),d.jsxs("section",{className:"hero-section",children:[d.jsx("div",{className:"hero-bg"}),d.jsxs("div",{className:"hero-content",children:[d.jsxs("span",{className:"hero-label",children:[d.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",style:{width:"16px",height:"16px"},children:d.jsx("path",{d:"M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"})}),"Who We Are"]}),d.jsxs("h1",{className:"hero-title",children:["Your ",d.jsx("span",{className:"accent",children:"360°"})," Brand Partner"]}),d.jsx("p",{className:"hero-description",children:"Strabso is a full-service activation and events agency delivering end-to-end brand solutions with a strong presence across Sri Lanka, including the North and East regions."})]}),!l&&d.jsxs("div",{className:"scroll-indicator",children:[d.jsx("span",{children:"Scroll to explore"}),d.jsx("div",{className:"scroll-line"})]})]}),d.jsx("section",{className:"story-section",children:d.jsxs("div",{className:"story-container",children:[d.jsxs("div",{className:"story-heading fade-up",children:[d.jsxs("h2",{children:["Our ",d.jsx("span",{className:"accent",children:"Vision"})," & Mission"]}),d.jsx("div",{className:"story-heading-line"})]}),d.jsxs("div",{className:"vision-mission-grid fade-up",children:[d.jsxs("div",{className:"vm-card",children:[d.jsx("div",{className:"vm-card-icon",children:d.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("circle",{cx:"12",cy:"12",r:"3"}),d.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"5"}),d.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"22"}),d.jsx("line",{x1:"2",y1:"12",x2:"5",y2:"12"}),d.jsx("line",{x1:"19",y1:"12",x2:"22",y2:"12"})]})}),d.jsx("span",{className:"vm-card-label",children:"Vision"}),d.jsx("p",{className:"vm-card-text",children:"To identify ourselves as one of the top 5 agencies in the industry by 2025, while being the only agency providing a complete 360° solution to its clients."})]}),d.jsxs("div",{className:"vm-card",children:[d.jsx("div",{className:"vm-card-icon",children:d.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})})}),d.jsx("span",{className:"vm-card-label",children:"Mission"}),d.jsx("p",{className:"vm-card-text",children:"To provide clients with a 360° business solution, reducing operational hassle, building long-term trust, and delivering high-quality execution at every touchpoint."})]})]}),d.jsxs("div",{className:"founder-quote fade-up",children:[d.jsx("blockquote",{children:'"At Strabo pvt ltd, we are driven to partnering with you to shape powerful brands and elevate them to new heights through bold events and impactful brand activations."'}),d.jsx("cite",{children:"— Rumesh Chandrakumar, Founder"})]})]})}),d.jsxs("section",{className:"values-section",children:[d.jsxs("div",{className:"section-header fade-up",children:[d.jsxs("h2",{children:["Our Key ",d.jsx("span",{className:"accent",children:"Strengths"})]}),d.jsx("p",{children:"What sets Strabso apart — our unique capabilities that deliver results for your brand."})]}),d.jsx("div",{className:"values-grid",children:r.map((f,h)=>d.jsxs("div",{className:"value-card fade-up",style:{transitionDelay:`${h*.1}s`},children:[d.jsx("div",{className:"value-icon",children:f.icon}),d.jsx("h3",{children:f.title}),d.jsx("p",{children:f.description})]},h))})]}),d.jsx("section",{className:"stats-banner",ref:a,children:d.jsxs("div",{className:"stats-grid",children:[d.jsxs("div",{className:"stat-item fade-up",children:[d.jsx("h3",{children:"100+"}),d.jsx("p",{children:"Activations Delivered"})]}),d.jsxs("div",{className:"stat-item fade-up",style:{transitionDelay:"0.1s"},children:[d.jsx("h3",{children:"25+"}),d.jsx("p",{children:"Major Brands"})]}),d.jsxs("div",{className:"stat-item fade-up",style:{transitionDelay:"0.2s"},children:[d.jsx("h3",{children:"9"}),d.jsx("p",{children:"Provinces Covered"})]}),d.jsxs("div",{className:"stat-item fade-up",style:{transitionDelay:"0.3s"},children:[d.jsx("h3",{children:"360°"}),d.jsx("p",{children:"Complete Solutions"})]})]})}),d.jsxs("section",{className:"timeline-section",children:[d.jsxs("div",{className:"section-header fade-up",children:[d.jsxs("h2",{children:["Our ",d.jsx("span",{className:"accent",children:"Journey"})]}),d.jsx("p",{children:"From humble beginnings to industry leadership, here's how we've grown."})]}),d.jsxs("div",{className:"timeline-container",children:[d.jsx("div",{className:"timeline-line"}),d.jsx("div",{className:"timeline-items",children:s.map((f,h)=>d.jsxs("div",{className:"timeline-item fade-up",children:[d.jsxs("div",{className:"timeline-content",children:[d.jsx("div",{className:"timeline-year",children:f.year}),d.jsx("div",{className:"timeline-event",children:f.event}),d.jsx("div",{className:"timeline-description",children:f.description})]}),d.jsx("div",{className:"timeline-dot"}),d.jsx("div",{style:{flex:1}})]},h))})]})]}),d.jsx("section",{className:"cta-section",children:d.jsxs("div",{className:"cta-content fade-up",children:[d.jsxs("h2",{className:"cta-title",children:["Ready to Create Something ",d.jsx("span",{className:"accent",children:"Unforgettable"}),"?"]}),d.jsx("p",{className:"cta-description",children:"Let's collaborate to bring your next event to life. Whether you have a clear vision or just the spark of an idea, we're here to make it extraordinary."})]})})]})},Tx=()=>{const a=[{icon:d.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),d.jsx("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]}),label:"PHONE",value:"0777 188 485",href:"tel:+94777188485"},{icon:d.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),d.jsx("polyline",{points:"22,6 12,13 2,6"})]}),label:"EMAIL",value:"info@strabso.lk",href:"mailto:info@strabso.lk"},{icon:d.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),d.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),label:"LOCATION",value:"Colombo, Sri Lanka",href:"https://maps.google.com/?q=Colombo,Sri+Lanka"}],l={wrapper:{background:"transparent",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",position:"relative",overflow:"hidden",fontFamily:"'Outfit', sans-serif"},container:{maxWidth:"1000px",width:"100%",textAlign:"center",position:"relative",zIndex:1},headerSection:{marginBottom:"60px"},title:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(36px, 6vw, 56px)",fontWeight:500,color:"#111111",margin:"0 0 8px 0",letterSpacing:"-1px",opacity:0},subtitle:{fontFamily:"'Outfit', sans-serif",fontSize:"16px",fontWeight:300,color:"rgba(0, 0, 0, 0.5)",maxWidth:"500px",margin:"0 auto",lineHeight:1.7,opacity:0},contactGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"30px",padding:"0 20px"},contactCard:{textDecoration:"none",display:"flex",flexDirection:"column",alignItems:"center",padding:"40px 30px",background:"transparent",borderRadius:"2px",cursor:"pointer",opacity:0},iconContainer:{width:"80px",height:"80px",borderRadius:"50%",border:"1px solid rgba(0, 0, 0, 0.12)",background:"transparent",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"24px",color:"rgba(0, 0, 0, 0.45)"},contactLabel:{fontFamily:"'Outfit', sans-serif",fontSize:"11px",fontWeight:400,letterSpacing:"3px",color:"rgba(0, 0, 0, 0.38)",marginBottom:"12px",margin:"0 0 12px 0"},contactValue:{fontFamily:"'Cormorant Garamond', serif",fontSize:"18px",fontWeight:400,color:"rgba(0, 0, 0, 0.72)",margin:0}};return d.jsxs("div",{style:l.wrapper,className:"contact-wrapper",children:[d.jsx("style",{children:`
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
      `}),d.jsxs("div",{style:l.container,children:[d.jsxs("div",{style:l.headerSection,className:"contact-header",children:[d.jsx("h1",{className:"animate-in delay-1",style:l.title,children:"Let's Connect"}),d.jsx("p",{className:"animate-in delay-2",style:l.subtitle,children:"Ready to activate your brand across Sri Lanka? Get in touch with us to discuss your next activation, campaign, or event. We're here to bring your vision to life."})]}),d.jsx("div",{style:l.contactGrid,className:"contact-grid",children:a.map((o,r)=>d.jsxs("a",{href:o.href,className:`contact-item contact-card animate-in delay-${r+3}`,style:l.contactCard,children:[d.jsx("div",{className:"icon-container",style:l.iconContainer,children:o.icon}),d.jsx("h3",{style:l.contactLabel,children:o.label}),d.jsx("p",{className:"contact-value",style:l.contactValue,children:o.value})]},r))})]})]})};var Fs={exports:{}},Is,Op;function Cx(){if(Op)return Is;Op=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Is=a,Is}var Ps,Dp;function Ox(){if(Dp)return Ps;Dp=1;var a=Cx();function l(){}function o(){}return o.resetWarningCache=l,Ps=function(){function r(h,p,v,y,g,x){if(x!==a){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}r.isRequired=r;function s(){return r}var f={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:s,element:r,elementType:r,instanceOf:s,node:r,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:o,resetWarningCache:l};return f.PropTypes=f,f},Ps}var kp;function Dx(){return kp||(kp=1,Fs.exports=Ox()()),Fs.exports}var kx=Dx();const $=Ny(kx);class he{constructor(){this._partials=new Float64Array(32),this._n=0}add(l){const o=this._partials;let r=0;for(let s=0;s<this._n&&s<32;s++){const f=o[s],h=l+f,p=Math.abs(l)<Math.abs(f)?l-(h-f):f-(h-l);p&&(o[r++]=p),l=h}return o[r]=l,this._n=r+1,this}valueOf(){const l=this._partials;let o=this._n,r,s,f,h=0;if(o>0){for(h=l[--o];o>0&&(r=h,s=l[--o],h=r+s,f=s-(h-r),!f););o>0&&(f<0&&l[o-1]<0||f>0&&l[o-1]>0)&&(s=f*2,r=h+s,s==r-h&&(h=r))}return h}}function*Rx(a){for(const l of a)yield*l}function Ug(a){return Array.from(Rx(a))}function Di(a,l,o){a=+a,l=+l,o=(s=arguments.length)<2?(l=a,a=0,1):s<3?1:+o;for(var r=-1,s=Math.max(0,Math.ceil((l-a)/o))|0,f=new Array(s);++r<s;)f[r]=a+r*o;return f}var ut=1e-6,nr=1e-12,yt=Math.PI,Kt=yt/2,Fo=yt/4,ye=yt*2,Lt=180/yt,st=yt/180,Mt=Math.abs,Xi=Math.atan,xe=Math.atan2,at=Math.cos,Ro=Math.ceil,Hg=Math.exp,ff=Math.hypot,Io=Math.log,tf=Math.pow,P=Math.sin,nn=Math.sign||function(a){return a>0?1:a<0?-1:0},le=Math.sqrt,Vf=Math.tan;function qg(a){return a>1?0:a<-1?yt:Math.acos(a)}function be(a){return a>1?Kt:a<-1?-Kt:Math.asin(a)}function Rp(a){return(a=P(a/2))*a}function Gt(){}function Po(a,l){a&&Lp.hasOwnProperty(a.type)&&Lp[a.type](a,l)}var Bp={Feature:function(a,l){Po(a.geometry,l)},FeatureCollection:function(a,l){for(var o=a.features,r=-1,s=o.length;++r<s;)Po(o[r].geometry,l)}},Lp={Sphere:function(a,l){l.sphere()},Point:function(a,l){a=a.coordinates,l.point(a[0],a[1],a[2])},MultiPoint:function(a,l){for(var o=a.coordinates,r=-1,s=o.length;++r<s;)a=o[r],l.point(a[0],a[1],a[2])},LineString:function(a,l){df(a.coordinates,l,0)},MultiLineString:function(a,l){for(var o=a.coordinates,r=-1,s=o.length;++r<s;)df(o[r],l,0)},Polygon:function(a,l){Up(a.coordinates,l)},MultiPolygon:function(a,l){for(var o=a.coordinates,r=-1,s=o.length;++r<s;)Up(o[r],l)},GeometryCollection:function(a,l){for(var o=a.geometries,r=-1,s=o.length;++r<s;)Po(o[r],l)}};function df(a,l,o){var r=-1,s=a.length-o,f;for(l.lineStart();++r<s;)f=a[r],l.point(f[0],f[1],f[2]);l.lineEnd()}function Up(a,l){var o=-1,r=a.length;for(l.polygonStart();++o<r;)df(a[o],l,1);l.polygonEnd()}function cn(a,l){a&&Bp.hasOwnProperty(a.type)?Bp[a.type](a,l):Po(a,l)}var tc=new he,ec=new he,Yg,Gg,hf,mf,pf,bn={point:Gt,lineStart:Gt,lineEnd:Gt,polygonStart:function(){tc=new he,bn.lineStart=Bx,bn.lineEnd=Lx},polygonEnd:function(){var a=+tc;ec.add(a<0?ye+a:a),this.lineStart=this.lineEnd=this.point=Gt},sphere:function(){ec.add(ye)}};function Bx(){bn.point=Ux}function Lx(){Xg(Yg,Gg)}function Ux(a,l){bn.point=Xg,Yg=a,Gg=l,a*=st,l*=st,hf=a,mf=at(l=l/2+Fo),pf=P(l)}function Xg(a,l){a*=st,l*=st,l=l/2+Fo;var o=a-hf,r=o>=0?1:-1,s=r*o,f=at(l),h=P(l),p=pf*h,v=mf*f+p*at(s),y=p*r*P(s);tc.add(xe(y,v)),hf=a,mf=f,pf=h}function Hx(a){return ec=new he,cn(a,bn),ec*2}function nc(a){return[xe(a[1],a[0]),be(a[2])]}function Va(a){var l=a[0],o=a[1],r=at(o);return[r*at(l),r*P(l),P(o)]}function Bo(a,l){return a[0]*l[0]+a[1]*l[1]+a[2]*l[2]}function Ui(a,l){return[a[1]*l[2]-a[2]*l[1],a[2]*l[0]-a[0]*l[2],a[0]*l[1]-a[1]*l[0]]}function ef(a,l){a[0]+=l[0],a[1]+=l[1],a[2]+=l[2]}function Lo(a,l){return[a[0]*l,a[1]*l,a[2]*l]}function ac(a){var l=le(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);a[0]/=l,a[1]/=l,a[2]/=l}var Yt,Ae,Qt,Ge,Xa,Vg,Zg,Bi,Fl,ba,Kn,Xn={point:gf,lineStart:Hp,lineEnd:qp,polygonStart:function(){Xn.point=Kg,Xn.lineStart=qx,Xn.lineEnd=Yx,Fl=new he,bn.polygonStart()},polygonEnd:function(){bn.polygonEnd(),Xn.point=gf,Xn.lineStart=Hp,Xn.lineEnd=qp,tc<0?(Yt=-(Qt=180),Ae=-(Ge=90)):Fl>ut?Ge=90:Fl<-ut&&(Ae=-90),Kn[0]=Yt,Kn[1]=Qt},sphere:function(){Yt=-(Qt=180),Ae=-(Ge=90)}};function gf(a,l){ba.push(Kn=[Yt=a,Qt=a]),l<Ae&&(Ae=l),l>Ge&&(Ge=l)}function Qg(a,l){var o=Va([a*st,l*st]);if(Bi){var r=Ui(Bi,o),s=[r[1],-r[0],0],f=Ui(s,r);ac(f),f=nc(f);var h=a-Xa,p=h>0?1:-1,v=f[0]*Lt*p,y,g=Mt(h)>180;g^(p*Xa<v&&v<p*a)?(y=f[1]*Lt,y>Ge&&(Ge=y)):(v=(v+360)%360-180,g^(p*Xa<v&&v<p*a)?(y=-f[1]*Lt,y<Ae&&(Ae=y)):(l<Ae&&(Ae=l),l>Ge&&(Ge=l))),g?a<Xa?Ye(Yt,a)>Ye(Yt,Qt)&&(Qt=a):Ye(a,Qt)>Ye(Yt,Qt)&&(Yt=a):Qt>=Yt?(a<Yt&&(Yt=a),a>Qt&&(Qt=a)):a>Xa?Ye(Yt,a)>Ye(Yt,Qt)&&(Qt=a):Ye(a,Qt)>Ye(Yt,Qt)&&(Yt=a)}else ba.push(Kn=[Yt=a,Qt=a]);l<Ae&&(Ae=l),l>Ge&&(Ge=l),Bi=o,Xa=a}function Hp(){Xn.point=Qg}function qp(){Kn[0]=Yt,Kn[1]=Qt,Xn.point=gf,Bi=null}function Kg(a,l){if(Bi){var o=a-Xa;Fl.add(Mt(o)>180?o+(o>0?360:-360):o)}else Vg=a,Zg=l;bn.point(a,l),Qg(a,l)}function qx(){bn.lineStart()}function Yx(){Kg(Vg,Zg),bn.lineEnd(),Mt(Fl)>ut&&(Yt=-(Qt=180)),Kn[0]=Yt,Kn[1]=Qt,Bi=null}function Ye(a,l){return(l-=a)<0?l+360:l}function Gx(a,l){return a[0]-l[0]}function Yp(a,l){return a[0]<=a[1]?a[0]<=l&&l<=a[1]:l<a[0]||a[1]<l}function Xx(a){var l,o,r,s,f,h,p;if(Ge=Qt=-(Yt=Ae=1/0),ba=[],cn(a,Xn),o=ba.length){for(ba.sort(Gx),l=1,r=ba[0],f=[r];l<o;++l)s=ba[l],Yp(r,s[0])||Yp(r,s[1])?(Ye(r[0],s[1])>Ye(r[0],r[1])&&(r[1]=s[1]),Ye(s[0],r[1])>Ye(r[0],r[1])&&(r[0]=s[0])):f.push(r=s);for(h=-1/0,o=f.length-1,l=0,r=f[o];l<=o;r=s,++l)s=f[l],(p=Ye(r[1],s[0]))>h&&(h=p,Yt=s[0],Qt=r[1])}return ba=Kn=null,Yt===1/0||Ae===1/0?[[NaN,NaN],[NaN,NaN]]:[[Yt,Ae],[Qt,Ge]]}var Xl,ic,lc,rc,oc,cc,uc,sc,vf,yf,xf,Jg,Wg,pe,ge,ve,un={sphere:Gt,point:Zf,lineStart:Gp,lineEnd:Xp,polygonStart:function(){un.lineStart=Qx,un.lineEnd=Kx},polygonEnd:function(){un.lineStart=Gp,un.lineEnd=Xp}};function Zf(a,l){a*=st,l*=st;var o=at(l);fr(o*at(a),o*P(a),P(l))}function fr(a,l,o){++Xl,lc+=(a-lc)/Xl,rc+=(l-rc)/Xl,oc+=(o-oc)/Xl}function Gp(){un.point=Vx}function Vx(a,l){a*=st,l*=st;var o=at(l);pe=o*at(a),ge=o*P(a),ve=P(l),un.point=Zx,fr(pe,ge,ve)}function Zx(a,l){a*=st,l*=st;var o=at(l),r=o*at(a),s=o*P(a),f=P(l),h=xe(le((h=ge*f-ve*s)*h+(h=ve*r-pe*f)*h+(h=pe*s-ge*r)*h),pe*r+ge*s+ve*f);ic+=h,cc+=h*(pe+(pe=r)),uc+=h*(ge+(ge=s)),sc+=h*(ve+(ve=f)),fr(pe,ge,ve)}function Xp(){un.point=Zf}function Qx(){un.point=Jx}function Kx(){$g(Jg,Wg),un.point=Zf}function Jx(a,l){Jg=a,Wg=l,a*=st,l*=st,un.point=$g;var o=at(l);pe=o*at(a),ge=o*P(a),ve=P(l),fr(pe,ge,ve)}function $g(a,l){a*=st,l*=st;var o=at(l),r=o*at(a),s=o*P(a),f=P(l),h=ge*f-ve*s,p=ve*r-pe*f,v=pe*s-ge*r,y=ff(h,p,v),g=be(y),x=y&&-g/y;vf.add(x*h),yf.add(x*p),xf.add(x*v),ic+=g,cc+=g*(pe+(pe=r)),uc+=g*(ge+(ge=s)),sc+=g*(ve+(ve=f)),fr(pe,ge,ve)}function Wx(a){Xl=ic=lc=rc=oc=cc=uc=sc=0,vf=new he,yf=new he,xf=new he,cn(a,un);var l=+vf,o=+yf,r=+xf,s=ff(l,o,r);return s<nr&&(l=cc,o=uc,r=sc,ic<ut&&(l=lc,o=rc,r=oc),s=ff(l,o,r),s<nr)?[NaN,NaN]:[xe(o,l)*Lt,be(r/s)*Lt]}function Oi(a){return function(){return a}}function bf(a,l){function o(r,s){return r=a(r,s),l(r[0],r[1])}return a.invert&&l.invert&&(o.invert=function(r,s){return r=l.invert(r,s),r&&a.invert(r[0],r[1])}),o}function Sf(a,l){return[Mt(a)>yt?a+Math.round(-a/ye)*ye:a,l]}Sf.invert=Sf;function Qf(a,l,o){return(a%=ye)?l||o?bf(Zp(a),Qp(l,o)):Zp(a):l||o?Qp(l,o):Sf}function Vp(a){return function(l,o){return l+=a,[l>yt?l-ye:l<-yt?l+ye:l,o]}}function Zp(a){var l=Vp(a);return l.invert=Vp(-a),l}function Qp(a,l){var o=at(a),r=P(a),s=at(l),f=P(l);function h(p,v){var y=at(v),g=at(p)*y,x=P(p)*y,S=P(v),w=S*o+g*r;return[xe(x*s-w*f,g*o-S*r),be(w*s+x*f)]}return h.invert=function(p,v){var y=at(v),g=at(p)*y,x=P(p)*y,S=P(v),w=S*s-x*f;return[xe(x*s+S*f,g*o+w*r),be(w*o-g*r)]},h}function Fg(a){a=Qf(a[0]*st,a[1]*st,a.length>2?a[2]*st:0);function l(o){return o=a(o[0]*st,o[1]*st),o[0]*=Lt,o[1]*=Lt,o}return l.invert=function(o){return o=a.invert(o[0]*st,o[1]*st),o[0]*=Lt,o[1]*=Lt,o},l}function Ig(a,l,o,r,s,f){if(o){var h=at(l),p=P(l),v=r*o;s==null?(s=l+r*ye,f=l-v/2):(s=Kp(h,s),f=Kp(h,f),(r>0?s<f:s>f)&&(s+=r*ye));for(var y,g=s;r>0?g>f:g<f;g-=v)y=nc([h,-p*at(g),-p*P(g)]),a.point(y[0],y[1])}}function Kp(a,l){l=Va(l),l[0]-=a,ac(l);var o=qg(-l[1]);return((-l[2]<0?-o:o)+ye-ut)%ye}function $x(){var a=Oi([0,0]),l=Oi(90),o=Oi(6),r,s,f={point:h};function h(v,y){r.push(v=s(v,y)),v[0]*=Lt,v[1]*=Lt}function p(){var v=a.apply(this,arguments),y=l.apply(this,arguments)*st,g=o.apply(this,arguments)*st;return r=[],s=Qf(-v[0]*st,-v[1]*st,0).invert,Ig(f,y,g,1),v={type:"Polygon",coordinates:[r]},r=s=null,v}return p.center=function(v){return arguments.length?(a=typeof v=="function"?v:Oi([+v[0],+v[1]]),p):a},p.radius=function(v){return arguments.length?(l=typeof v=="function"?v:Oi(+v),p):l},p.precision=function(v){return arguments.length?(o=typeof v=="function"?v:Oi(+v),p):o},p}function Pg(){var a=[],l;return{point:function(o,r,s){l.push([o,r,s])},lineStart:function(){a.push(l=[])},lineEnd:Gt,rejoin:function(){a.length>1&&a.push(a.pop().concat(a.shift()))},result:function(){var o=a;return a=[],l=null,o}}}function Vo(a,l){return Mt(a[0]-l[0])<ut&&Mt(a[1]-l[1])<ut}function Uo(a,l,o,r){this.x=a,this.z=l,this.o=o,this.e=r,this.v=!1,this.n=this.p=null}function t1(a,l,o,r,s){var f=[],h=[],p,v;if(a.forEach(function(N){if(!((L=N.length-1)<=0)){var L,H=N[0],R=N[L],Z;if(Vo(H,R)){if(!H[2]&&!R[2]){for(s.lineStart(),p=0;p<L;++p)s.point((H=N[p])[0],H[1]);s.lineEnd();return}R[0]+=2*ut}f.push(Z=new Uo(H,N,null,!0)),h.push(Z.o=new Uo(H,null,Z,!1)),f.push(Z=new Uo(R,N,null,!1)),h.push(Z.o=new Uo(R,null,Z,!0))}}),!!f.length){for(h.sort(l),Jp(f),Jp(h),p=0,v=h.length;p<v;++p)h[p].e=o=!o;for(var y=f[0],g,x;;){for(var S=y,w=!0;S.v;)if((S=S.n)===y)return;g=S.z,s.lineStart();do{if(S.v=S.o.v=!0,S.e){if(w)for(p=0,v=g.length;p<v;++p)s.point((x=g[p])[0],x[1]);else r(S.x,S.n.x,1,s);S=S.n}else{if(w)for(g=S.p.z,p=g.length-1;p>=0;--p)s.point((x=g[p])[0],x[1]);else r(S.x,S.p.x,-1,s);S=S.p}S=S.o,g=S.z,w=!w}while(!S.v);s.lineEnd()}}}function Jp(a){if(l=a.length){for(var l,o=0,r=a[0],s;++o<l;)r.n=s=a[o],s.p=r,r=s;r.n=s=a[0],s.p=r}}function nf(a){return Mt(a[0])<=yt?a[0]:nn(a[0])*((Mt(a[0])+yt)%ye-yt)}function e1(a,l){var o=nf(l),r=l[1],s=P(r),f=[P(o),-at(o),0],h=0,p=0,v=new he;s===1?r=Kt+ut:s===-1&&(r=-Kt-ut);for(var y=0,g=a.length;y<g;++y)if(S=(x=a[y]).length)for(var x,S,w=x[S-1],N=nf(w),L=w[1]/2+Fo,H=P(L),R=at(L),Z=0;Z<S;++Z,N=U,H=K,R=W,w=D){var D=x[Z],U=nf(D),Q=D[1]/2+Fo,K=P(Q),W=at(Q),I=U-N,it=I>=0?1:-1,dt=it*I,et=dt>yt,ht=H*K;if(v.add(xe(ht*it*P(dt),R*W+ht*at(dt))),h+=et?I+it*ye:I,et^N>=o^U>=o){var Et=Ui(Va(w),Va(D));ac(Et);var _=Ui(f,Et);ac(_);var z=(et^I>=0?-1:1)*be(_[2]);(r>z||r===z&&(Et[0]||Et[1]))&&(p+=et^I>=0?1:-1)}}return(h<-ut||h<ut&&v<-nr)^p&1}function n1(a,l,o,r){return function(s){var f=l(s),h=Pg(),p=l(h),v=!1,y,g,x,S={point:w,lineStart:L,lineEnd:H,polygonStart:function(){S.point=R,S.lineStart=Z,S.lineEnd=D,g=[],y=[]},polygonEnd:function(){S.point=w,S.lineStart=L,S.lineEnd=H,g=Ug(g);var U=e1(y,r);g.length?(v||(s.polygonStart(),v=!0),t1(g,Ix,U,o,s)):U&&(v||(s.polygonStart(),v=!0),s.lineStart(),o(null,null,1,s),s.lineEnd()),v&&(s.polygonEnd(),v=!1),g=y=null},sphere:function(){s.polygonStart(),s.lineStart(),o(null,null,1,s),s.lineEnd(),s.polygonEnd()}};function w(U,Q){a(U,Q)&&s.point(U,Q)}function N(U,Q){f.point(U,Q)}function L(){S.point=N,f.lineStart()}function H(){S.point=w,f.lineEnd()}function R(U,Q){x.push([U,Q]),p.point(U,Q)}function Z(){p.lineStart(),x=[]}function D(){R(x[0][0],x[0][1]),p.lineEnd();var U=p.clean(),Q=h.result(),K,W=Q.length,I,it,dt;if(x.pop(),y.push(x),x=null,!!W){if(U&1){if(it=Q[0],(I=it.length-1)>0){for(v||(s.polygonStart(),v=!0),s.lineStart(),K=0;K<I;++K)s.point((dt=it[K])[0],dt[1]);s.lineEnd()}return}W>1&&U&2&&Q.push(Q.pop().concat(Q.shift())),g.push(Q.filter(Fx))}}return S}}function Fx(a){return a.length>1}function Ix(a,l){return((a=a.x)[0]<0?a[1]-Kt-ut:Kt-a[1])-((l=l.x)[0]<0?l[1]-Kt-ut:Kt-l[1])}const wf=n1(function(){return!0},Px,eb,[-yt,-Kt]);function Px(a){var l=NaN,o=NaN,r=NaN,s;return{lineStart:function(){a.lineStart(),s=1},point:function(f,h){var p=f>0?yt:-yt,v=Mt(f-l);Mt(v-yt)<ut?(a.point(l,o=(o+h)/2>0?Kt:-Kt),a.point(r,o),a.lineEnd(),a.lineStart(),a.point(p,o),a.point(f,o),s=0):r!==p&&v>=yt&&(Mt(l-r)<ut&&(l-=r*ut),Mt(f-p)<ut&&(f-=p*ut),o=tb(l,o,f,h),a.point(r,o),a.lineEnd(),a.lineStart(),a.point(p,o),s=0),a.point(l=f,o=h),r=p},lineEnd:function(){a.lineEnd(),l=o=NaN},clean:function(){return 2-s}}}function tb(a,l,o,r){var s,f,h=P(a-o);return Mt(h)>ut?Xi((P(l)*(f=at(r))*P(o)-P(r)*(s=at(l))*P(a))/(s*f*h)):(l+r)/2}function eb(a,l,o,r){var s;if(a==null)s=o*Kt,r.point(-yt,s),r.point(0,s),r.point(yt,s),r.point(yt,0),r.point(yt,-s),r.point(0,-s),r.point(-yt,-s),r.point(-yt,0),r.point(-yt,s);else if(Mt(a[0]-l[0])>ut){var f=a[0]<l[0]?yt:-yt;s=o*f/2,r.point(-f,s),r.point(0,s),r.point(f,s)}else r.point(l[0],l[1])}function a1(a){var l=at(a),o=6*st,r=l>0,s=Mt(l)>ut;function f(g,x,S,w){Ig(w,a,o,S,g,x)}function h(g,x){return at(g)*at(x)>l}function p(g){var x,S,w,N,L;return{lineStart:function(){N=w=!1,L=1},point:function(H,R){var Z=[H,R],D,U=h(H,R),Q=r?U?0:y(H,R):U?y(H+(H<0?yt:-yt),R):0;if(!x&&(N=w=U)&&g.lineStart(),U!==w&&(D=v(x,Z),(!D||Vo(x,D)||Vo(Z,D))&&(Z[2]=1)),U!==w)L=0,U?(g.lineStart(),D=v(Z,x),g.point(D[0],D[1])):(D=v(x,Z),g.point(D[0],D[1],2),g.lineEnd()),x=D;else if(s&&x&&r^U){var K;!(Q&S)&&(K=v(Z,x,!0))&&(L=0,r?(g.lineStart(),g.point(K[0][0],K[0][1]),g.point(K[1][0],K[1][1]),g.lineEnd()):(g.point(K[1][0],K[1][1]),g.lineEnd(),g.lineStart(),g.point(K[0][0],K[0][1],3)))}U&&(!x||!Vo(x,Z))&&g.point(Z[0],Z[1]),x=Z,w=U,S=Q},lineEnd:function(){w&&g.lineEnd(),x=null},clean:function(){return L|(N&&w)<<1}}}function v(g,x,S){var w=Va(g),N=Va(x),L=[1,0,0],H=Ui(w,N),R=Bo(H,H),Z=H[0],D=R-Z*Z;if(!D)return!S&&g;var U=l*R/D,Q=-l*Z/D,K=Ui(L,H),W=Lo(L,U),I=Lo(H,Q);ef(W,I);var it=K,dt=Bo(W,it),et=Bo(it,it),ht=dt*dt-et*(Bo(W,W)-1);if(!(ht<0)){var Et=le(ht),_=Lo(it,(-dt-Et)/et);if(ef(_,W),_=nc(_),!S)return _;var z=g[0],j=x[0],T=g[1],X=x[1],J;j<z&&(J=z,z=j,j=J);var F=j-z,ot=Mt(F-yt)<ut,lt=ot||F<ut;if(!ot&&X<T&&(J=T,T=X,X=J),lt?ot?T+X>0^_[1]<(Mt(_[0]-z)<ut?T:X):T<=_[1]&&_[1]<=X:F>yt^(z<=_[0]&&_[0]<=j)){var rt=Lo(it,(-dt+Et)/et);return ef(rt,W),[_,nc(rt)]}}}function y(g,x){var S=r?a:yt-a,w=0;return g<-S?w|=1:g>S&&(w|=2),x<-S?w|=4:x>S&&(w|=8),w}return n1(h,p,f,r?[0,-a]:[-yt,a-yt])}function nb(a,l,o,r,s,f){var h=a[0],p=a[1],v=l[0],y=l[1],g=0,x=1,S=v-h,w=y-p,N;if(N=o-h,!(!S&&N>0)){if(N/=S,S<0){if(N<g)return;N<x&&(x=N)}else if(S>0){if(N>x)return;N>g&&(g=N)}if(N=s-h,!(!S&&N<0)){if(N/=S,S<0){if(N>x)return;N>g&&(g=N)}else if(S>0){if(N<g)return;N<x&&(x=N)}if(N=r-p,!(!w&&N>0)){if(N/=w,w<0){if(N<g)return;N<x&&(x=N)}else if(w>0){if(N>x)return;N>g&&(g=N)}if(N=f-p,!(!w&&N<0)){if(N/=w,w<0){if(N>x)return;N>g&&(g=N)}else if(w>0){if(N<g)return;N<x&&(x=N)}return g>0&&(a[0]=h+g*S,a[1]=p+g*w),x<1&&(l[0]=h+x*S,l[1]=p+x*w),!0}}}}}var Vl=1e9,Ho=-Vl;function Ec(a,l,o,r){function s(y,g){return a<=y&&y<=o&&l<=g&&g<=r}function f(y,g,x,S){var w=0,N=0;if(y==null||(w=h(y,x))!==(N=h(g,x))||v(y,g)<0^x>0)do S.point(w===0||w===3?a:o,w>1?r:l);while((w=(w+x+4)%4)!==N);else S.point(g[0],g[1])}function h(y,g){return Mt(y[0]-a)<ut?g>0?0:3:Mt(y[0]-o)<ut?g>0?2:1:Mt(y[1]-l)<ut?g>0?1:0:g>0?3:2}function p(y,g){return v(y.x,g.x)}function v(y,g){var x=h(y,1),S=h(g,1);return x!==S?x-S:x===0?g[1]-y[1]:x===1?y[0]-g[0]:x===2?y[1]-g[1]:g[0]-y[0]}return function(y){var g=y,x=Pg(),S,w,N,L,H,R,Z,D,U,Q,K,W={point:I,lineStart:ht,lineEnd:Et,polygonStart:dt,polygonEnd:et};function I(z,j){s(z,j)&&g.point(z,j)}function it(){for(var z=0,j=0,T=w.length;j<T;++j)for(var X=w[j],J=1,F=X.length,ot=X[0],lt,rt,pt=ot[0],zt=ot[1];J<F;++J)lt=pt,rt=zt,ot=X[J],pt=ot[0],zt=ot[1],rt<=r?zt>r&&(pt-lt)*(r-rt)>(zt-rt)*(a-lt)&&++z:zt<=r&&(pt-lt)*(r-rt)<(zt-rt)*(a-lt)&&--z;return z}function dt(){g=x,S=[],w=[],K=!0}function et(){var z=it(),j=K&&z,T=(S=Ug(S)).length;(j||T)&&(y.polygonStart(),j&&(y.lineStart(),f(null,null,1,y),y.lineEnd()),T&&t1(S,p,z,f,y),y.polygonEnd()),g=y,S=w=N=null}function ht(){W.point=_,w&&w.push(N=[]),Q=!0,U=!1,Z=D=NaN}function Et(){S&&(_(L,H),R&&U&&x.rejoin(),S.push(x.result())),W.point=I,U&&g.lineEnd()}function _(z,j){var T=s(z,j);if(w&&N.push([z,j]),Q)L=z,H=j,R=T,Q=!1,T&&(g.lineStart(),g.point(z,j));else if(T&&U)g.point(z,j);else{var X=[Z=Math.max(Ho,Math.min(Vl,Z)),D=Math.max(Ho,Math.min(Vl,D))],J=[z=Math.max(Ho,Math.min(Vl,z)),j=Math.max(Ho,Math.min(Vl,j))];nb(X,J,a,l,o,r)?(U||(g.lineStart(),g.point(X[0],X[1])),g.point(J[0],J[1]),T||g.lineEnd(),K=!1):T&&(g.lineStart(),g.point(z,j),K=!1)}Z=z,D=j,U=T}return W}}function ab(){var a=0,l=0,o=960,r=500,s,f,h;return h={stream:function(p){return s&&f===p?s:s=Ec(a,l,o,r)(f=p)},extent:function(p){return arguments.length?(a=+p[0][0],l=+p[0][1],o=+p[1][0],r=+p[1][1],s=f=null,h):[[a,l],[o,r]]}}}var jf,Mf,Zo,Qo,Hi={sphere:Gt,point:Gt,lineStart:ib,lineEnd:Gt,polygonStart:Gt,polygonEnd:Gt};function ib(){Hi.point=rb,Hi.lineEnd=lb}function lb(){Hi.point=Hi.lineEnd=Gt}function rb(a,l){a*=st,l*=st,Mf=a,Zo=P(l),Qo=at(l),Hi.point=ob}function ob(a,l){a*=st,l*=st;var o=P(l),r=at(l),s=Mt(a-Mf),f=at(s),h=P(s),p=r*h,v=Qo*o-Zo*r*f,y=Zo*o+Qo*r*f;jf.add(xe(le(p*p+v*v),y)),Mf=a,Zo=o,Qo=r}function i1(a){return jf=new he,cn(a,Hi),+jf}var Ef=[null,null],cb={type:"LineString",coordinates:Ef};function fc(a,l){return Ef[0]=a,Ef[1]=l,i1(cb)}var Wp={Feature:function(a,l){return dc(a.geometry,l)},FeatureCollection:function(a,l){for(var o=a.features,r=-1,s=o.length;++r<s;)if(dc(o[r].geometry,l))return!0;return!1}},$p={Sphere:function(){return!0},Point:function(a,l){return Fp(a.coordinates,l)},MultiPoint:function(a,l){for(var o=a.coordinates,r=-1,s=o.length;++r<s;)if(Fp(o[r],l))return!0;return!1},LineString:function(a,l){return Ip(a.coordinates,l)},MultiLineString:function(a,l){for(var o=a.coordinates,r=-1,s=o.length;++r<s;)if(Ip(o[r],l))return!0;return!1},Polygon:function(a,l){return Pp(a.coordinates,l)},MultiPolygon:function(a,l){for(var o=a.coordinates,r=-1,s=o.length;++r<s;)if(Pp(o[r],l))return!0;return!1},GeometryCollection:function(a,l){for(var o=a.geometries,r=-1,s=o.length;++r<s;)if(dc(o[r],l))return!0;return!1}};function dc(a,l){return a&&$p.hasOwnProperty(a.type)?$p[a.type](a,l):!1}function Fp(a,l){return fc(a,l)===0}function Ip(a,l){for(var o,r,s,f=0,h=a.length;f<h;f++){if(r=fc(a[f],l),r===0||f>0&&(s=fc(a[f],a[f-1]),s>0&&o<=s&&r<=s&&(o+r-s)*(1-Math.pow((o-r)/s,2))<nr*s))return!0;o=r}return!1}function Pp(a,l){return!!e1(a.map(ub),l1(l))}function ub(a){return a=a.map(l1),a.pop(),a}function l1(a){return[a[0]*st,a[1]*st]}function sb(a,l){return(a&&Wp.hasOwnProperty(a.type)?Wp[a.type]:dc)(a,l)}function tg(a,l,o){var r=Di(a,l-ut,o).concat(l);return function(s){return r.map(function(f){return[s,f]})}}function eg(a,l,o){var r=Di(a,l-ut,o).concat(l);return function(s){return r.map(function(f){return[f,s]})}}function Kf(){var a,l,o,r,s,f,h,p,v=10,y=v,g=90,x=360,S,w,N,L,H=2.5;function R(){return{type:"MultiLineString",coordinates:Z()}}function Z(){return Di(Ro(r/g)*g,o,g).map(N).concat(Di(Ro(p/x)*x,h,x).map(L)).concat(Di(Ro(l/v)*v,a,v).filter(function(D){return Mt(D%g)>ut}).map(S)).concat(Di(Ro(f/y)*y,s,y).filter(function(D){return Mt(D%x)>ut}).map(w))}return R.lines=function(){return Z().map(function(D){return{type:"LineString",coordinates:D}})},R.outline=function(){return{type:"Polygon",coordinates:[N(r).concat(L(h).slice(1),N(o).reverse().slice(1),L(p).reverse().slice(1))]}},R.extent=function(D){return arguments.length?R.extentMajor(D).extentMinor(D):R.extentMinor()},R.extentMajor=function(D){return arguments.length?(r=+D[0][0],o=+D[1][0],p=+D[0][1],h=+D[1][1],r>o&&(D=r,r=o,o=D),p>h&&(D=p,p=h,h=D),R.precision(H)):[[r,p],[o,h]]},R.extentMinor=function(D){return arguments.length?(l=+D[0][0],a=+D[1][0],f=+D[0][1],s=+D[1][1],l>a&&(D=l,l=a,a=D),f>s&&(D=f,f=s,s=D),R.precision(H)):[[l,f],[a,s]]},R.step=function(D){return arguments.length?R.stepMajor(D).stepMinor(D):R.stepMinor()},R.stepMajor=function(D){return arguments.length?(g=+D[0],x=+D[1],R):[g,x]},R.stepMinor=function(D){return arguments.length?(v=+D[0],y=+D[1],R):[v,y]},R.precision=function(D){return arguments.length?(H=+D,S=tg(f,s,90),w=eg(l,a,H),N=tg(p,h,90),L=eg(r,o,H),R):H},R.extentMajor([[-180,-90+ut],[180,90-ut]]).extentMinor([[-180,-80-ut],[180,80+ut]])}function fb(){return Kf()()}function db(a,l){var o=a[0]*st,r=a[1]*st,s=l[0]*st,f=l[1]*st,h=at(r),p=P(r),v=at(f),y=P(f),g=h*at(o),x=h*P(o),S=v*at(s),w=v*P(s),N=2*be(le(Rp(f-r)+h*v*Rp(s-o))),L=P(N),H=N?function(R){var Z=P(R*=N)/L,D=P(N-R)/L,U=D*g+Z*S,Q=D*x+Z*w,K=D*p+Z*y;return[xe(Q,U)*Lt,xe(K,le(U*U+Q*Q))*Lt]}:function(){return[o*Lt,r*Lt]};return H.distance=N,H}const ar=a=>a;var af=new he,zf=new he,r1,o1,Nf,Af,Vn={point:Gt,lineStart:Gt,lineEnd:Gt,polygonStart:function(){Vn.lineStart=hb,Vn.lineEnd=pb},polygonEnd:function(){Vn.lineStart=Vn.lineEnd=Vn.point=Gt,af.add(Mt(zf)),zf=new he},result:function(){var a=af/2;return af=new he,a}};function hb(){Vn.point=mb}function mb(a,l){Vn.point=c1,r1=Nf=a,o1=Af=l}function c1(a,l){zf.add(Af*a-Nf*l),Nf=a,Af=l}function pb(){c1(r1,o1)}var qi=1/0,hc=qi,ir=-qi,mc=ir,pc={point:gb,lineStart:Gt,lineEnd:Gt,polygonStart:Gt,polygonEnd:Gt,result:function(){var a=[[qi,hc],[ir,mc]];return ir=mc=-(hc=qi=1/0),a}};function gb(a,l){a<qi&&(qi=a),a>ir&&(ir=a),l<hc&&(hc=l),l>mc&&(mc=l)}var _f=0,Tf=0,Zl=0,gc=0,vc=0,ki=0,Cf=0,Of=0,Ql=0,u1,s1,gn,vn,en={point:Za,lineStart:ng,lineEnd:ag,polygonStart:function(){en.lineStart=xb,en.lineEnd=bb},polygonEnd:function(){en.point=Za,en.lineStart=ng,en.lineEnd=ag},result:function(){var a=Ql?[Cf/Ql,Of/Ql]:ki?[gc/ki,vc/ki]:Zl?[_f/Zl,Tf/Zl]:[NaN,NaN];return _f=Tf=Zl=gc=vc=ki=Cf=Of=Ql=0,a}};function Za(a,l){_f+=a,Tf+=l,++Zl}function ng(){en.point=vb}function vb(a,l){en.point=yb,Za(gn=a,vn=l)}function yb(a,l){var o=a-gn,r=l-vn,s=le(o*o+r*r);gc+=s*(gn+a)/2,vc+=s*(vn+l)/2,ki+=s,Za(gn=a,vn=l)}function ag(){en.point=Za}function xb(){en.point=Sb}function bb(){f1(u1,s1)}function Sb(a,l){en.point=f1,Za(u1=gn=a,s1=vn=l)}function f1(a,l){var o=a-gn,r=l-vn,s=le(o*o+r*r);gc+=s*(gn+a)/2,vc+=s*(vn+l)/2,ki+=s,s=vn*a-gn*l,Cf+=s*(gn+a),Of+=s*(vn+l),Ql+=s*3,Za(gn=a,vn=l)}function d1(a){this._context=a}d1.prototype={_radius:4.5,pointRadius:function(a){return this._radius=a,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(a,l){switch(this._point){case 0:{this._context.moveTo(a,l),this._point=1;break}case 1:{this._context.lineTo(a,l);break}default:{this._context.moveTo(a+this._radius,l),this._context.arc(a,l,this._radius,0,ye);break}}},result:Gt};var Df=new he,lf,h1,m1,Kl,Jl,lr={point:Gt,lineStart:function(){lr.point=wb},lineEnd:function(){lf&&p1(h1,m1),lr.point=Gt},polygonStart:function(){lf=!0},polygonEnd:function(){lf=null},result:function(){var a=+Df;return Df=new he,a}};function wb(a,l){lr.point=p1,h1=Kl=a,m1=Jl=l}function p1(a,l){Kl-=a,Jl-=l,Df.add(le(Kl*Kl+Jl*Jl)),Kl=a,Jl=l}function g1(){this._string=[]}g1.prototype={_radius:4.5,_circle:ig(4.5),pointRadius:function(a){return(a=+a)!==this._radius&&(this._radius=a,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._string.push("Z"),this._point=NaN},point:function(a,l){switch(this._point){case 0:{this._string.push("M",a,",",l),this._point=1;break}case 1:{this._string.push("L",a,",",l);break}default:{this._circle==null&&(this._circle=ig(this._radius)),this._string.push("M",a,",",l,this._circle);break}}},result:function(){if(this._string.length){var a=this._string.join("");return this._string=[],a}else return null}};function ig(a){return"m0,"+a+"a"+a+","+a+" 0 1,1 0,"+-2*a+"a"+a+","+a+" 0 1,1 0,"+2*a+"z"}function v1(a,l){var o=4.5,r,s;function f(h){return h&&(typeof o=="function"&&s.pointRadius(+o.apply(this,arguments)),cn(h,r(s))),s.result()}return f.area=function(h){return cn(h,r(Vn)),Vn.result()},f.measure=function(h){return cn(h,r(lr)),lr.result()},f.bounds=function(h){return cn(h,r(pc)),pc.result()},f.centroid=function(h){return cn(h,r(en)),en.result()},f.projection=function(h){return arguments.length?(r=h==null?(a=null,ar):(a=h).stream,f):a},f.context=function(h){return arguments.length?(s=h==null?(l=null,new g1):new d1(l=h),typeof o!="function"&&s.pointRadius(o),f):l},f.pointRadius=function(h){return arguments.length?(o=typeof h=="function"?h:(s.pointRadius(+h),+h),f):o},f.projection(a).context(l)}function jb(a){return{stream:dr(a)}}function dr(a){return function(l){var o=new kf;for(var r in a)o[r]=a[r];return o.stream=l,o}}function kf(){}kf.prototype={constructor:kf,point:function(a,l){this.stream.point(a,l)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Jf(a,l,o){var r=a.clipExtent&&a.clipExtent();return a.scale(150).translate([0,0]),r!=null&&a.clipExtent(null),cn(o,a.stream(pc)),l(pc.result()),r!=null&&a.clipExtent(r),a}function zc(a,l,o){return Jf(a,function(r){var s=l[1][0]-l[0][0],f=l[1][1]-l[0][1],h=Math.min(s/(r[1][0]-r[0][0]),f/(r[1][1]-r[0][1])),p=+l[0][0]+(s-h*(r[1][0]+r[0][0]))/2,v=+l[0][1]+(f-h*(r[1][1]+r[0][1]))/2;a.scale(150*h).translate([p,v])},o)}function Wf(a,l,o){return zc(a,[[0,0],l],o)}function $f(a,l,o){return Jf(a,function(r){var s=+l,f=s/(r[1][0]-r[0][0]),h=(s-f*(r[1][0]+r[0][0]))/2,p=-f*r[0][1];a.scale(150*f).translate([h,p])},o)}function Ff(a,l,o){return Jf(a,function(r){var s=+l,f=s/(r[1][1]-r[0][1]),h=-f*r[0][0],p=(s-f*(r[1][1]+r[0][1]))/2;a.scale(150*f).translate([h,p])},o)}var lg=16,Mb=at(30*st);function rg(a,l){return+l?zb(a,l):Eb(a)}function Eb(a){return dr({point:function(l,o){l=a(l,o),this.stream.point(l[0],l[1])}})}function zb(a,l){function o(r,s,f,h,p,v,y,g,x,S,w,N,L,H){var R=y-r,Z=g-s,D=R*R+Z*Z;if(D>4*l&&L--){var U=h+S,Q=p+w,K=v+N,W=le(U*U+Q*Q+K*K),I=be(K/=W),it=Mt(Mt(K)-1)<ut||Mt(f-x)<ut?(f+x)/2:xe(Q,U),dt=a(it,I),et=dt[0],ht=dt[1],Et=et-r,_=ht-s,z=Z*Et-R*_;(z*z/D>l||Mt((R*Et+Z*_)/D-.5)>.3||h*S+p*w+v*N<Mb)&&(o(r,s,f,h,p,v,et,ht,it,U/=W,Q/=W,K,L,H),H.point(et,ht),o(et,ht,it,U,Q,K,y,g,x,S,w,N,L,H))}}return function(r){var s,f,h,p,v,y,g,x,S,w,N,L,H={point:R,lineStart:Z,lineEnd:U,polygonStart:function(){r.polygonStart(),H.lineStart=Q},polygonEnd:function(){r.polygonEnd(),H.lineStart=Z}};function R(I,it){I=a(I,it),r.point(I[0],I[1])}function Z(){x=NaN,H.point=D,r.lineStart()}function D(I,it){var dt=Va([I,it]),et=a(I,it);o(x,S,g,w,N,L,x=et[0],S=et[1],g=I,w=dt[0],N=dt[1],L=dt[2],lg,r),r.point(x,S)}function U(){H.point=R,r.lineEnd()}function Q(){Z(),H.point=K,H.lineEnd=W}function K(I,it){D(s=I,it),f=x,h=S,p=w,v=N,y=L,H.point=D}function W(){o(x,S,g,w,N,L,f,h,s,p,v,y,lg,r),H.lineEnd=U,U()}return H}}var Nb=dr({point:function(a,l){this.stream.point(a*st,l*st)}});function Ab(a){return dr({point:function(l,o){var r=a(l,o);return this.stream.point(r[0],r[1])}})}function _b(a,l,o,r,s){function f(h,p){return h*=r,p*=s,[l+a*h,o-a*p]}return f.invert=function(h,p){return[(h-l)/a*r,(o-p)/a*s]},f}function og(a,l,o,r,s,f){if(!f)return _b(a,l,o,r,s);var h=at(f),p=P(f),v=h*a,y=p*a,g=h/a,x=p/a,S=(p*o-h*l)/a,w=(p*l+h*o)/a;function N(L,H){return L*=r,H*=s,[v*L-y*H+l,o-y*L-v*H]}return N.invert=function(L,H){return[r*(g*L-x*H+S),s*(w-x*L-g*H)]},N}function Sn(a){return If(function(){return a})()}function If(a){var l,o=150,r=480,s=250,f=0,h=0,p=0,v=0,y=0,g,x=0,S=1,w=1,N=null,L=wf,H=null,R,Z,D,U=ar,Q=.5,K,W,I,it,dt;function et(z){return I(z[0]*st,z[1]*st)}function ht(z){return z=I.invert(z[0],z[1]),z&&[z[0]*Lt,z[1]*Lt]}et.stream=function(z){return it&&dt===z?it:it=Nb(Ab(g)(L(K(U(dt=z)))))},et.preclip=function(z){return arguments.length?(L=z,N=void 0,_()):L},et.postclip=function(z){return arguments.length?(U=z,H=R=Z=D=null,_()):U},et.clipAngle=function(z){return arguments.length?(L=+z?a1(N=z*st):(N=null,wf),_()):N*Lt},et.clipExtent=function(z){return arguments.length?(U=z==null?(H=R=Z=D=null,ar):Ec(H=+z[0][0],R=+z[0][1],Z=+z[1][0],D=+z[1][1]),_()):H==null?null:[[H,R],[Z,D]]},et.scale=function(z){return arguments.length?(o=+z,Et()):o},et.translate=function(z){return arguments.length?(r=+z[0],s=+z[1],Et()):[r,s]},et.center=function(z){return arguments.length?(f=z[0]%360*st,h=z[1]%360*st,Et()):[f*Lt,h*Lt]},et.rotate=function(z){return arguments.length?(p=z[0]%360*st,v=z[1]%360*st,y=z.length>2?z[2]%360*st:0,Et()):[p*Lt,v*Lt,y*Lt]},et.angle=function(z){return arguments.length?(x=z%360*st,Et()):x*Lt},et.reflectX=function(z){return arguments.length?(S=z?-1:1,Et()):S<0},et.reflectY=function(z){return arguments.length?(w=z?-1:1,Et()):w<0},et.precision=function(z){return arguments.length?(K=rg(W,Q=z*z),_()):le(Q)},et.fitExtent=function(z,j){return zc(et,z,j)},et.fitSize=function(z,j){return Wf(et,z,j)},et.fitWidth=function(z,j){return $f(et,z,j)},et.fitHeight=function(z,j){return Ff(et,z,j)};function Et(){var z=og(o,0,0,S,w,x).apply(null,l(f,h)),j=og(o,r-z[0],s-z[1],S,w,x);return g=Qf(p,v,y),W=bf(l,j),I=bf(g,W),K=rg(W,Q),_()}function _(){return it=dt=null,et}return function(){return l=a.apply(this,arguments),et.invert=l.invert&&ht,Et()}}function Pf(a){var l=0,o=yt/3,r=If(a),s=r(l,o);return s.parallels=function(f){return arguments.length?r(l=f[0]*st,o=f[1]*st):[l*Lt,o*Lt]},s}function Tb(a){var l=at(a);function o(r,s){return[r*l,P(s)/l]}return o.invert=function(r,s){return[r/l,be(s*l)]},o}function y1(a,l){var o=P(a),r=(o+P(l))/2;if(Mt(r)<ut)return Tb(a);var s=1+o*(2*r-o),f=le(s)/r;function h(p,v){var y=le(s-2*r*P(v))/r;return[y*P(p*=r),f-y*at(p)]}return h.invert=function(p,v){var y=f-v,g=xe(p,Mt(y))*nn(y);return y*r<0&&(g-=yt*nn(p)*nn(y)),[g/r,be((s-(p*p+y*y)*r*r)/(2*r))]},h}function yc(){return Pf(y1).scale(155.424).center([0,33.6442])}function x1(){return yc().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function Cb(a){var l=a.length;return{point:function(o,r){for(var s=-1;++s<l;)a[s].point(o,r)},sphere:function(){for(var o=-1;++o<l;)a[o].sphere()},lineStart:function(){for(var o=-1;++o<l;)a[o].lineStart()},lineEnd:function(){for(var o=-1;++o<l;)a[o].lineEnd()},polygonStart:function(){for(var o=-1;++o<l;)a[o].polygonStart()},polygonEnd:function(){for(var o=-1;++o<l;)a[o].polygonEnd()}}}function Ob(){var a,l,o=x1(),r,s=yc().rotate([154,0]).center([-2,58.5]).parallels([55,65]),f,h=yc().rotate([157,0]).center([-3,19.9]).parallels([8,18]),p,v,y={point:function(S,w){v=[S,w]}};function g(S){var w=S[0],N=S[1];return v=null,r.point(w,N),v||(f.point(w,N),v)||(p.point(w,N),v)}g.invert=function(S){var w=o.scale(),N=o.translate(),L=(S[0]-N[0])/w,H=(S[1]-N[1])/w;return(H>=.12&&H<.234&&L>=-.425&&L<-.214?s:H>=.166&&H<.234&&L>=-.214&&L<-.115?h:o).invert(S)},g.stream=function(S){return a&&l===S?a:a=Cb([o.stream(l=S),s.stream(S),h.stream(S)])},g.precision=function(S){return arguments.length?(o.precision(S),s.precision(S),h.precision(S),x()):o.precision()},g.scale=function(S){return arguments.length?(o.scale(S),s.scale(S*.35),h.scale(S),g.translate(o.translate())):o.scale()},g.translate=function(S){if(!arguments.length)return o.translate();var w=o.scale(),N=+S[0],L=+S[1];return r=o.translate(S).clipExtent([[N-.455*w,L-.238*w],[N+.455*w,L+.238*w]]).stream(y),f=s.translate([N-.307*w,L+.201*w]).clipExtent([[N-.425*w+ut,L+.12*w+ut],[N-.214*w-ut,L+.234*w-ut]]).stream(y),p=h.translate([N-.205*w,L+.212*w]).clipExtent([[N-.214*w+ut,L+.166*w+ut],[N-.115*w-ut,L+.234*w-ut]]).stream(y),x()},g.fitExtent=function(S,w){return zc(g,S,w)},g.fitSize=function(S,w){return Wf(g,S,w)},g.fitWidth=function(S,w){return $f(g,S,w)},g.fitHeight=function(S,w){return Ff(g,S,w)};function x(){return a=l=null,g}return g.scale(1070)}function b1(a){return function(l,o){var r=at(l),s=at(o),f=a(r*s);return f===1/0?[2,0]:[f*s*P(l),f*P(o)]}}function hr(a){return function(l,o){var r=le(l*l+o*o),s=a(r),f=P(s),h=at(s);return[xe(l*f,r*h),be(r&&o*f/r)]}}var td=b1(function(a){return le(2/(1+a))});td.invert=hr(function(a){return 2*be(a/2)});function Db(){return Sn(td).scale(124.75).clipAngle(180-.001)}var ed=b1(function(a){return(a=qg(a))&&a/P(a)});ed.invert=hr(function(a){return a});function kb(){return Sn(ed).scale(79.4188).clipAngle(180-.001)}function mr(a,l){return[a,Io(Vf((Kt+l)/2))]}mr.invert=function(a,l){return[a,2*Xi(Hg(l))-Kt]};function Rb(){return S1(mr).scale(961/ye)}function S1(a){var l=Sn(a),o=l.center,r=l.scale,s=l.translate,f=l.clipExtent,h=null,p,v,y;l.scale=function(x){return arguments.length?(r(x),g()):r()},l.translate=function(x){return arguments.length?(s(x),g()):s()},l.center=function(x){return arguments.length?(o(x),g()):o()},l.clipExtent=function(x){return arguments.length?(x==null?h=p=v=y=null:(h=+x[0][0],p=+x[0][1],v=+x[1][0],y=+x[1][1]),g()):h==null?null:[[h,p],[v,y]]};function g(){var x=yt*r(),S=l(Fg(l.rotate()).invert([0,0]));return f(h==null?[[S[0]-x,S[1]-x],[S[0]+x,S[1]+x]]:a===mr?[[Math.max(S[0]-x,h),p],[Math.min(S[0]+x,v),y]]:[[h,Math.max(S[1]-x,p)],[v,Math.min(S[1]+x,y)]])}return g()}function qo(a){return Vf((Kt+a)/2)}function w1(a,l){var o=at(a),r=a===l?P(a):Io(o/at(l))/Io(qo(l)/qo(a)),s=o*tf(qo(a),r)/r;if(!r)return mr;function f(h,p){s>0?p<-Kt+ut&&(p=-Kt+ut):p>Kt-ut&&(p=Kt-ut);var v=s/tf(qo(p),r);return[v*P(r*h),s-v*at(r*h)]}return f.invert=function(h,p){var v=s-p,y=nn(r)*le(h*h+v*v),g=xe(h,Mt(v))*nn(v);return v*r<0&&(g-=yt*nn(h)*nn(v)),[g/r,2*Xi(tf(s/y,1/r))-Kt]},f}function Bb(){return Pf(w1).scale(109.5).parallels([30,30])}function rr(a,l){return[a,l]}rr.invert=rr;function Lb(){return Sn(rr).scale(152.63)}function j1(a,l){var o=at(a),r=a===l?P(a):(o-at(l))/(l-a),s=o/r+a;if(Mt(r)<ut)return rr;function f(h,p){var v=s-p,y=r*h;return[v*P(y),s-v*at(y)]}return f.invert=function(h,p){var v=s-p,y=xe(h,Mt(v))*nn(v);return v*r<0&&(y-=yt*nn(h)*nn(v)),[y/r,s-nn(r)*le(h*h+v*v)]},f}function Ub(){return Pf(j1).scale(131.154).center([0,13.9389])}var Il=1.340264,Pl=-.081106,tr=893e-6,er=.003796,xc=le(3)/2,Hb=12;function nd(a,l){var o=be(xc*P(l)),r=o*o,s=r*r*r;return[a*at(o)/(xc*(Il+3*Pl*r+s*(7*tr+9*er*r))),o*(Il+Pl*r+s*(tr+er*r))]}nd.invert=function(a,l){for(var o=l,r=o*o,s=r*r*r,f=0,h,p,v;f<Hb&&(p=o*(Il+Pl*r+s*(tr+er*r))-l,v=Il+3*Pl*r+s*(7*tr+9*er*r),o-=h=p/v,r=o*o,s=r*r*r,!(Mt(h)<nr));++f);return[xc*a*(Il+3*Pl*r+s*(7*tr+9*er*r))/at(o),be(P(o)/xc)]};function qb(){return Sn(nd).scale(177.158)}function ad(a,l){var o=at(l),r=at(a)*o;return[o*P(a)/r,P(l)/r]}ad.invert=hr(Xi);function Yb(){return Sn(ad).scale(144.049).clipAngle(60)}function Gb(){var a=1,l=0,o=0,r=1,s=1,f=0,h,p,v=null,y,g,x,S=1,w=1,N=dr({point:function(U,Q){var K=D([U,Q]);this.stream.point(K[0],K[1])}}),L=ar,H,R;function Z(){return S=a*r,w=a*s,H=R=null,D}function D(U){var Q=U[0]*S,K=U[1]*w;if(f){var W=K*h-Q*p;Q=Q*h+K*p,K=W}return[Q+l,K+o]}return D.invert=function(U){var Q=U[0]-l,K=U[1]-o;if(f){var W=K*h+Q*p;Q=Q*h-K*p,K=W}return[Q/S,K/w]},D.stream=function(U){return H&&R===U?H:H=N(L(R=U))},D.postclip=function(U){return arguments.length?(L=U,v=y=g=x=null,Z()):L},D.clipExtent=function(U){return arguments.length?(L=U==null?(v=y=g=x=null,ar):Ec(v=+U[0][0],y=+U[0][1],g=+U[1][0],x=+U[1][1]),Z()):v==null?null:[[v,y],[g,x]]},D.scale=function(U){return arguments.length?(a=+U,Z()):a},D.translate=function(U){return arguments.length?(l=+U[0],o=+U[1],Z()):[l,o]},D.angle=function(U){return arguments.length?(f=U%360*st,p=P(f),h=at(f),Z()):f*Lt},D.reflectX=function(U){return arguments.length?(r=U?-1:1,Z()):r<0},D.reflectY=function(U){return arguments.length?(s=U?-1:1,Z()):s<0},D.fitExtent=function(U,Q){return zc(D,U,Q)},D.fitSize=function(U,Q){return Wf(D,U,Q)},D.fitWidth=function(U,Q){return $f(D,U,Q)},D.fitHeight=function(U,Q){return Ff(D,U,Q)},D}function id(a,l){var o=l*l,r=o*o;return[a*(.8707-.131979*o+r*(-.013791+r*(.003971*o-.001529*r))),l*(1.007226+o*(.015085+r*(-.044475+.028874*o-.005916*r)))]}id.invert=function(a,l){var o=l,r=25,s;do{var f=o*o,h=f*f;o-=s=(o*(1.007226+f*(.015085+h*(-.044475+.028874*f-.005916*h)))-l)/(1.007226+f*(.015085*3+h*(-.044475*7+.028874*9*f-.005916*11*h)))}while(Mt(s)>ut&&--r>0);return[a/(.8707+(f=o*o)*(-.131979+f*(-.013791+f*f*f*(.003971-.001529*f)))),o]};function Xb(){return Sn(id).scale(175.295)}function ld(a,l){return[at(l)*P(a),P(l)]}ld.invert=hr(be);function Vb(){return Sn(ld).scale(249.5).clipAngle(90+ut)}function rd(a,l){var o=at(l),r=1+at(a)*o;return[o*P(a)/r,P(l)/r]}rd.invert=hr(function(a){return 2*Xi(a)});function Zb(){return Sn(rd).scale(250).clipAngle(142)}function od(a,l){return[Io(Vf((Kt+l)/2)),-a]}od.invert=function(a,l){return[-l,2*Xi(Hg(a))-Kt]};function Qb(){var a=S1(od),l=a.center,o=a.rotate;return a.center=function(r){return arguments.length?l([-r[1],r[0]]):(r=l(),[r[1],-r[0]])},a.rotate=function(r){return arguments.length?o([r[0],r[1],r.length>2?r[2]+90:90]):(r=o(),[r[0],r[1],r[2]-90])},o([0,0,90]).scale(159.155)}const Kb=Object.freeze(Object.defineProperty({__proto__:null,geoAlbers:x1,geoAlbersUsa:Ob,geoArea:Hx,geoAzimuthalEqualArea:Db,geoAzimuthalEqualAreaRaw:td,geoAzimuthalEquidistant:kb,geoAzimuthalEquidistantRaw:ed,geoBounds:Xx,geoCentroid:Wx,geoCircle:$x,geoClipAntimeridian:wf,geoClipCircle:a1,geoClipExtent:ab,geoClipRectangle:Ec,geoConicConformal:Bb,geoConicConformalRaw:w1,geoConicEqualArea:yc,geoConicEqualAreaRaw:y1,geoConicEquidistant:Ub,geoConicEquidistantRaw:j1,geoContains:sb,geoDistance:fc,geoEqualEarth:qb,geoEqualEarthRaw:nd,geoEquirectangular:Lb,geoEquirectangularRaw:rr,geoGnomonic:Yb,geoGnomonicRaw:ad,geoGraticule:Kf,geoGraticule10:fb,geoIdentity:Gb,geoInterpolate:db,geoLength:i1,geoMercator:Rb,geoMercatorRaw:mr,geoNaturalEarth1:Xb,geoNaturalEarth1Raw:id,geoOrthographic:Vb,geoOrthographicRaw:ld,geoPath:v1,geoProjection:Sn,geoProjectionMutator:If,geoRotation:Fg,geoStereographic:Zb,geoStereographicRaw:rd,geoStream:cn,geoTransform:jb,geoTransverseMercator:Qb,geoTransverseMercatorRaw:od},Symbol.toStringTag,{value:"Module"}));function Jb(a){return a}function Wb(a){if(a==null)return Jb;var l,o,r=a.scale[0],s=a.scale[1],f=a.translate[0],h=a.translate[1];return function(p,v){v||(l=o=0);var y=2,g=p.length,x=new Array(g);for(x[0]=(l+=p[0])*r+f,x[1]=(o+=p[1])*s+h;y<g;)x[y]=p[y],++y;return x}}function $b(a,l){for(var o,r=a.length,s=r-l;s<--r;)o=a[s],a[s++]=a[r],a[r]=o}function Fb(a,l){return typeof l=="string"&&(l=a.objects[l]),l.type==="GeometryCollection"?{type:"FeatureCollection",features:l.geometries.map(function(o){return cg(a,o)})}:cg(a,l)}function cg(a,l){var o=l.id,r=l.bbox,s=l.properties==null?{}:l.properties,f=M1(a,l);return o==null&&r==null?{type:"Feature",properties:s,geometry:f}:r==null?{type:"Feature",id:o,properties:s,geometry:f}:{type:"Feature",id:o,bbox:r,properties:s,geometry:f}}function M1(a,l){var o=Wb(a.transform),r=a.arcs;function s(g,x){x.length&&x.pop();for(var S=r[g<0?~g:g],w=0,N=S.length;w<N;++w)x.push(o(S[w],w));g<0&&$b(x,N)}function f(g){return o(g)}function h(g){for(var x=[],S=0,w=g.length;S<w;++S)s(g[S],x);return x.length<2&&x.push(x[0]),x}function p(g){for(var x=h(g);x.length<4;)x.push(x[0]);return x}function v(g){return g.map(p)}function y(g){var x=g.type,S;switch(x){case"GeometryCollection":return{type:x,geometries:g.geometries.map(y)};case"Point":S=f(g.coordinates);break;case"MultiPoint":S=g.coordinates.map(f);break;case"LineString":S=h(g.arcs);break;case"MultiLineString":S=g.arcs.map(h);break;case"Polygon":S=v(g.arcs);break;case"MultiPolygon":S=g.arcs.map(v);break;default:return null}return{type:x,coordinates:S}}return y(l)}function Ib(a,l){var o={},r={},s={},f=[],h=-1;l.forEach(function(y,g){var x=a.arcs[y<0?~y:y],S;x.length<3&&!x[1][0]&&!x[1][1]&&(S=l[++h],l[h]=y,l[g]=S)}),l.forEach(function(y){var g=p(y),x=g[0],S=g[1],w,N;if(w=s[x])if(delete s[w.end],w.push(y),w.end=S,N=r[S]){delete r[N.start];var L=N===w?w:w.concat(N);r[L.start=w.start]=s[L.end=N.end]=L}else r[w.start]=s[w.end]=w;else if(w=r[S])if(delete r[w.start],w.unshift(y),w.start=x,N=s[x]){delete s[N.end];var H=N===w?w:N.concat(w);r[H.start=N.start]=s[H.end=w.end]=H}else r[w.start]=s[w.end]=w;else w=[y],r[w.start=x]=s[w.end=S]=w});function p(y){var g=a.arcs[y<0?~y:y],x=g[0],S;return a.transform?(S=[0,0],g.forEach(function(w){S[0]+=w[0],S[1]+=w[1]})):S=g[g.length-1],y<0?[S,x]:[x,S]}function v(y,g){for(var x in y){var S=y[x];delete g[S.start],delete S.start,delete S.end,S.forEach(function(w){o[w<0?~w:w]=1}),f.push(S)}}return v(s,r),v(r,s),l.forEach(function(y){o[y<0?~y:y]||f.push([y])}),f}function ug(a){return M1(a,Pb.apply(this,arguments))}function Pb(a,l,o){var r,s,f;if(arguments.length>1)r=t5(a,l,o);else for(s=0,r=new Array(f=a.arcs.length);s<f;++s)r[s]=s;return{type:"MultiLineString",arcs:Ib(a,r)}}function t5(a,l,o){var r=[],s=[],f;function h(x){var S=x<0?~x:x;(s[S]||(s[S]=[])).push({i:x,g:f})}function p(x){x.forEach(h)}function v(x){x.forEach(p)}function y(x){x.forEach(v)}function g(x){switch(f=x,x.type){case"GeometryCollection":x.geometries.forEach(g);break;case"LineString":p(x.arcs);break;case"MultiLineString":case"Polygon":v(x.arcs);break;case"MultiPolygon":y(x.arcs);break}}return g(l),s.forEach(o==null?function(x){r.push(x[0].i)}:function(x){o(x[0].g,x[x.length-1].g)&&r.push(x[0].i)}),r}var e5={value:()=>{}};function cd(){for(var a=0,l=arguments.length,o={},r;a<l;++a){if(!(r=arguments[a]+"")||r in o||/[\s.]/.test(r))throw new Error("illegal type: "+r);o[r]=[]}return new Ko(o)}function Ko(a){this._=a}function n5(a,l){return a.trim().split(/^|\s+/).map(function(o){var r="",s=o.indexOf(".");if(s>=0&&(r=o.slice(s+1),o=o.slice(0,s)),o&&!l.hasOwnProperty(o))throw new Error("unknown type: "+o);return{type:o,name:r}})}Ko.prototype=cd.prototype={constructor:Ko,on:function(a,l){var o=this._,r=n5(a+"",o),s,f=-1,h=r.length;if(arguments.length<2){for(;++f<h;)if((s=(a=r[f]).type)&&(s=a5(o[s],a.name)))return s;return}if(l!=null&&typeof l!="function")throw new Error("invalid callback: "+l);for(;++f<h;)if(s=(a=r[f]).type)o[s]=sg(o[s],a.name,l);else if(l==null)for(s in o)o[s]=sg(o[s],a.name,null);return this},copy:function(){var a={},l=this._;for(var o in l)a[o]=l[o].slice();return new Ko(a)},call:function(a,l){if((s=arguments.length-2)>0)for(var o=new Array(s),r=0,s,f;r<s;++r)o[r]=arguments[r+2];if(!this._.hasOwnProperty(a))throw new Error("unknown type: "+a);for(f=this._[a],r=0,s=f.length;r<s;++r)f[r].value.apply(l,o)},apply:function(a,l,o){if(!this._.hasOwnProperty(a))throw new Error("unknown type: "+a);for(var r=this._[a],s=0,f=r.length;s<f;++s)r[s].value.apply(l,o)}};function a5(a,l){for(var o=0,r=a.length,s;o<r;++o)if((s=a[o]).name===l)return s.value}function sg(a,l,o){for(var r=0,s=a.length;r<s;++r)if(a[r].name===l){a[r]=e5,a=a.slice(0,r).concat(a.slice(r+1));break}return o!=null&&a.push({name:l,value:o}),a}var Rf="http://www.w3.org/1999/xhtml";const fg={svg:"http://www.w3.org/2000/svg",xhtml:Rf,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Nc(a){var l=a+="",o=l.indexOf(":");return o>=0&&(l=a.slice(0,o))!=="xmlns"&&(a=a.slice(o+1)),fg.hasOwnProperty(l)?{space:fg[l],local:a}:a}function i5(a){return function(){var l=this.ownerDocument,o=this.namespaceURI;return o===Rf&&l.documentElement.namespaceURI===Rf?l.createElement(a):l.createElementNS(o,a)}}function l5(a){return function(){return this.ownerDocument.createElementNS(a.space,a.local)}}function E1(a){var l=Nc(a);return(l.local?l5:i5)(l)}function r5(){}function ud(a){return a==null?r5:function(){return this.querySelector(a)}}function o5(a){typeof a!="function"&&(a=ud(a));for(var l=this._groups,o=l.length,r=new Array(o),s=0;s<o;++s)for(var f=l[s],h=f.length,p=r[s]=new Array(h),v,y,g=0;g<h;++g)(v=f[g])&&(y=a.call(v,v.__data__,g,f))&&("__data__"in v&&(y.__data__=v.__data__),p[g]=y);return new _e(r,this._parents)}function z1(a){return typeof a=="object"&&"length"in a?a:Array.from(a)}function c5(){return[]}function N1(a){return a==null?c5:function(){return this.querySelectorAll(a)}}function u5(a){return function(){var l=a.apply(this,arguments);return l==null?[]:z1(l)}}function s5(a){typeof a=="function"?a=u5(a):a=N1(a);for(var l=this._groups,o=l.length,r=[],s=[],f=0;f<o;++f)for(var h=l[f],p=h.length,v,y=0;y<p;++y)(v=h[y])&&(r.push(a.call(v,v.__data__,y,h)),s.push(v));return new _e(r,s)}function A1(a){return function(){return this.matches(a)}}function _1(a){return function(l){return l.matches(a)}}var f5=Array.prototype.find;function d5(a){return function(){return f5.call(this.children,a)}}function h5(){return this.firstElementChild}function m5(a){return this.select(a==null?h5:d5(typeof a=="function"?a:_1(a)))}var p5=Array.prototype.filter;function g5(){return this.children}function v5(a){return function(){return p5.call(this.children,a)}}function y5(a){return this.selectAll(a==null?g5:v5(typeof a=="function"?a:_1(a)))}function x5(a){typeof a!="function"&&(a=A1(a));for(var l=this._groups,o=l.length,r=new Array(o),s=0;s<o;++s)for(var f=l[s],h=f.length,p=r[s]=[],v,y=0;y<h;++y)(v=f[y])&&a.call(v,v.__data__,y,f)&&p.push(v);return new _e(r,this._parents)}function T1(a){return new Array(a.length)}function b5(){return new _e(this._enter||this._groups.map(T1),this._parents)}function bc(a,l){this.ownerDocument=a.ownerDocument,this.namespaceURI=a.namespaceURI,this._next=null,this._parent=a,this.__data__=l}bc.prototype={constructor:bc,appendChild:function(a){return this._parent.insertBefore(a,this._next)},insertBefore:function(a,l){return this._parent.insertBefore(a,l)},querySelector:function(a){return this._parent.querySelector(a)},querySelectorAll:function(a){return this._parent.querySelectorAll(a)}};function S5(a){return function(){return a}}function w5(a,l,o,r,s,f){for(var h=0,p,v=l.length,y=f.length;h<y;++h)(p=l[h])?(p.__data__=f[h],r[h]=p):o[h]=new bc(a,f[h]);for(;h<v;++h)(p=l[h])&&(s[h]=p)}function j5(a,l,o,r,s,f,h){var p,v,y=new Map,g=l.length,x=f.length,S=new Array(g),w;for(p=0;p<g;++p)(v=l[p])&&(S[p]=w=h.call(v,v.__data__,p,l)+"",y.has(w)?s[p]=v:y.set(w,v));for(p=0;p<x;++p)w=h.call(a,f[p],p,f)+"",(v=y.get(w))?(r[p]=v,v.__data__=f[p],y.delete(w)):o[p]=new bc(a,f[p]);for(p=0;p<g;++p)(v=l[p])&&y.get(S[p])===v&&(s[p]=v)}function M5(a){return a.__data__}function E5(a,l){if(!arguments.length)return Array.from(this,M5);var o=l?j5:w5,r=this._parents,s=this._groups;typeof a!="function"&&(a=S5(a));for(var f=s.length,h=new Array(f),p=new Array(f),v=new Array(f),y=0;y<f;++y){var g=r[y],x=s[y],S=x.length,w=z1(a.call(g,g&&g.__data__,y,r)),N=w.length,L=p[y]=new Array(N),H=h[y]=new Array(N),R=v[y]=new Array(S);o(g,x,L,H,R,w,l);for(var Z=0,D=0,U,Q;Z<N;++Z)if(U=L[Z]){for(Z>=D&&(D=Z+1);!(Q=H[D])&&++D<N;);U._next=Q||null}}return h=new _e(h,r),h._enter=p,h._exit=v,h}function z5(){return new _e(this._exit||this._groups.map(T1),this._parents)}function N5(a,l,o){var r=this.enter(),s=this,f=this.exit();return r=typeof a=="function"?a(r):r.append(a+""),l!=null&&(s=l(s)),o==null?f.remove():o(f),r&&s?r.merge(s).order():s}function A5(a){if(!(a instanceof _e))throw new Error("invalid merge");for(var l=this._groups,o=a._groups,r=l.length,s=o.length,f=Math.min(r,s),h=new Array(r),p=0;p<f;++p)for(var v=l[p],y=o[p],g=v.length,x=h[p]=new Array(g),S,w=0;w<g;++w)(S=v[w]||y[w])&&(x[w]=S);for(;p<r;++p)h[p]=l[p];return new _e(h,this._parents)}function _5(){for(var a=this._groups,l=-1,o=a.length;++l<o;)for(var r=a[l],s=r.length-1,f=r[s],h;--s>=0;)(h=r[s])&&(f&&h.compareDocumentPosition(f)^4&&f.parentNode.insertBefore(h,f),f=h);return this}function T5(a){a||(a=C5);function l(x,S){return x&&S?a(x.__data__,S.__data__):!x-!S}for(var o=this._groups,r=o.length,s=new Array(r),f=0;f<r;++f){for(var h=o[f],p=h.length,v=s[f]=new Array(p),y,g=0;g<p;++g)(y=h[g])&&(v[g]=y);v.sort(l)}return new _e(s,this._parents).order()}function C5(a,l){return a<l?-1:a>l?1:a>=l?0:NaN}function O5(){var a=arguments[0];return arguments[0]=this,a.apply(null,arguments),this}function D5(){return Array.from(this)}function k5(){for(var a=this._groups,l=0,o=a.length;l<o;++l)for(var r=a[l],s=0,f=r.length;s<f;++s){var h=r[s];if(h)return h}return null}function R5(){let a=0;for(const l of this)++a;return a}function B5(){return!this.node()}function L5(a){for(var l=this._groups,o=0,r=l.length;o<r;++o)for(var s=l[o],f=0,h=s.length,p;f<h;++f)(p=s[f])&&a.call(p,p.__data__,f,s);return this}function U5(a){return function(){this.removeAttribute(a)}}function H5(a){return function(){this.removeAttributeNS(a.space,a.local)}}function q5(a,l){return function(){this.setAttribute(a,l)}}function Y5(a,l){return function(){this.setAttributeNS(a.space,a.local,l)}}function G5(a,l){return function(){var o=l.apply(this,arguments);o==null?this.removeAttribute(a):this.setAttribute(a,o)}}function X5(a,l){return function(){var o=l.apply(this,arguments);o==null?this.removeAttributeNS(a.space,a.local):this.setAttributeNS(a.space,a.local,o)}}function V5(a,l){var o=Nc(a);if(arguments.length<2){var r=this.node();return o.local?r.getAttributeNS(o.space,o.local):r.getAttribute(o)}return this.each((l==null?o.local?H5:U5:typeof l=="function"?o.local?X5:G5:o.local?Y5:q5)(o,l))}function C1(a){return a.ownerDocument&&a.ownerDocument.defaultView||a.document&&a||a.defaultView}function Z5(a){return function(){this.style.removeProperty(a)}}function Q5(a,l,o){return function(){this.style.setProperty(a,l,o)}}function K5(a,l,o){return function(){var r=l.apply(this,arguments);r==null?this.style.removeProperty(a):this.style.setProperty(a,r,o)}}function J5(a,l,o){return arguments.length>1?this.each((l==null?Z5:typeof l=="function"?K5:Q5)(a,l,o??"")):Yi(this.node(),a)}function Yi(a,l){return a.style.getPropertyValue(l)||C1(a).getComputedStyle(a,null).getPropertyValue(l)}function W5(a){return function(){delete this[a]}}function $5(a,l){return function(){this[a]=l}}function F5(a,l){return function(){var o=l.apply(this,arguments);o==null?delete this[a]:this[a]=o}}function I5(a,l){return arguments.length>1?this.each((l==null?W5:typeof l=="function"?F5:$5)(a,l)):this.node()[a]}function O1(a){return a.trim().split(/^|\s+/)}function sd(a){return a.classList||new D1(a)}function D1(a){this._node=a,this._names=O1(a.getAttribute("class")||"")}D1.prototype={add:function(a){var l=this._names.indexOf(a);l<0&&(this._names.push(a),this._node.setAttribute("class",this._names.join(" ")))},remove:function(a){var l=this._names.indexOf(a);l>=0&&(this._names.splice(l,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(a){return this._names.indexOf(a)>=0}};function k1(a,l){for(var o=sd(a),r=-1,s=l.length;++r<s;)o.add(l[r])}function R1(a,l){for(var o=sd(a),r=-1,s=l.length;++r<s;)o.remove(l[r])}function P5(a){return function(){k1(this,a)}}function t4(a){return function(){R1(this,a)}}function e4(a,l){return function(){(l.apply(this,arguments)?k1:R1)(this,a)}}function n4(a,l){var o=O1(a+"");if(arguments.length<2){for(var r=sd(this.node()),s=-1,f=o.length;++s<f;)if(!r.contains(o[s]))return!1;return!0}return this.each((typeof l=="function"?e4:l?P5:t4)(o,l))}function a4(){this.textContent=""}function i4(a){return function(){this.textContent=a}}function l4(a){return function(){var l=a.apply(this,arguments);this.textContent=l??""}}function r4(a){return arguments.length?this.each(a==null?a4:(typeof a=="function"?l4:i4)(a)):this.node().textContent}function o4(){this.innerHTML=""}function c4(a){return function(){this.innerHTML=a}}function u4(a){return function(){var l=a.apply(this,arguments);this.innerHTML=l??""}}function s4(a){return arguments.length?this.each(a==null?o4:(typeof a=="function"?u4:c4)(a)):this.node().innerHTML}function f4(){this.nextSibling&&this.parentNode.appendChild(this)}function d4(){return this.each(f4)}function h4(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function m4(){return this.each(h4)}function p4(a){var l=typeof a=="function"?a:E1(a);return this.select(function(){return this.appendChild(l.apply(this,arguments))})}function g4(){return null}function v4(a,l){var o=typeof a=="function"?a:E1(a),r=l==null?g4:typeof l=="function"?l:ud(l);return this.select(function(){return this.insertBefore(o.apply(this,arguments),r.apply(this,arguments)||null)})}function y4(){var a=this.parentNode;a&&a.removeChild(this)}function x4(){return this.each(y4)}function b4(){var a=this.cloneNode(!1),l=this.parentNode;return l?l.insertBefore(a,this.nextSibling):a}function S4(){var a=this.cloneNode(!0),l=this.parentNode;return l?l.insertBefore(a,this.nextSibling):a}function w4(a){return this.select(a?S4:b4)}function j4(a){return arguments.length?this.property("__data__",a):this.node().__data__}function M4(a){return function(l){a.call(this,l,this.__data__)}}function E4(a){return a.trim().split(/^|\s+/).map(function(l){var o="",r=l.indexOf(".");return r>=0&&(o=l.slice(r+1),l=l.slice(0,r)),{type:l,name:o}})}function z4(a){return function(){var l=this.__on;if(l){for(var o=0,r=-1,s=l.length,f;o<s;++o)f=l[o],(!a.type||f.type===a.type)&&f.name===a.name?this.removeEventListener(f.type,f.listener,f.options):l[++r]=f;++r?l.length=r:delete this.__on}}}function N4(a,l,o){return function(){var r=this.__on,s,f=M4(l);if(r){for(var h=0,p=r.length;h<p;++h)if((s=r[h]).type===a.type&&s.name===a.name){this.removeEventListener(s.type,s.listener,s.options),this.addEventListener(s.type,s.listener=f,s.options=o),s.value=l;return}}this.addEventListener(a.type,f,o),s={type:a.type,name:a.name,value:l,listener:f,options:o},r?r.push(s):this.__on=[s]}}function A4(a,l,o){var r=E4(a+""),s,f=r.length,h;if(arguments.length<2){var p=this.node().__on;if(p){for(var v=0,y=p.length,g;v<y;++v)for(s=0,g=p[v];s<f;++s)if((h=r[s]).type===g.type&&h.name===g.name)return g.value}return}for(p=l?N4:z4,s=0;s<f;++s)this.each(p(r[s],l,o));return this}function B1(a,l,o){var r=C1(a),s=r.CustomEvent;typeof s=="function"?s=new s(l,o):(s=r.document.createEvent("Event"),o?(s.initEvent(l,o.bubbles,o.cancelable),s.detail=o.detail):s.initEvent(l,!1,!1)),a.dispatchEvent(s)}function _4(a,l){return function(){return B1(this,a,l)}}function T4(a,l){return function(){return B1(this,a,l.apply(this,arguments))}}function C4(a,l){return this.each((typeof l=="function"?T4:_4)(a,l))}function*O4(){for(var a=this._groups,l=0,o=a.length;l<o;++l)for(var r=a[l],s=0,f=r.length,h;s<f;++s)(h=r[s])&&(yield h)}var L1=[null];function _e(a,l){this._groups=a,this._parents=l}function pr(){return new _e([[document.documentElement]],L1)}function D4(){return this}_e.prototype=pr.prototype={constructor:_e,select:o5,selectAll:s5,selectChild:m5,selectChildren:y5,filter:x5,data:E5,enter:b5,exit:z5,join:N5,merge:A5,selection:D4,order:_5,sort:T5,call:O5,nodes:D5,node:k5,size:R5,empty:B5,each:L5,attr:V5,style:J5,property:I5,classed:n4,text:r4,html:s4,raise:d4,lower:m4,append:p4,insert:v4,remove:x4,clone:w4,datum:j4,on:A4,dispatch:C4,[Symbol.iterator]:O4};function Zn(a){return typeof a=="string"?new _e([[document.querySelector(a)]],[document.documentElement]):new _e([[a]],L1)}function k4(a){let l;for(;l=a.sourceEvent;)a=l;return a}function Ya(a,l){if(a=k4(a),l===void 0&&(l=a.currentTarget),l){var o=l.ownerSVGElement||l;if(o.createSVGPoint){var r=o.createSVGPoint();return r.x=a.clientX,r.y=a.clientY,r=r.matrixTransform(l.getScreenCTM().inverse()),[r.x,r.y]}if(l.getBoundingClientRect){var s=l.getBoundingClientRect();return[a.clientX-s.left-l.clientLeft,a.clientY-s.top-l.clientTop]}}return[a.pageX,a.pageY]}function Bf(a){a.preventDefault(),a.stopImmediatePropagation()}function R4(a){var l=a.document.documentElement,o=Zn(a).on("dragstart.drag",Bf,!0);"onselectstart"in l?o.on("selectstart.drag",Bf,!0):(l.__noselect=l.style.MozUserSelect,l.style.MozUserSelect="none")}function B4(a,l){var o=a.document.documentElement,r=Zn(a).on("dragstart.drag",null);l&&(r.on("click.drag",Bf,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in o?r.on("selectstart.drag",null):(o.style.MozUserSelect=o.__noselect,delete o.__noselect)}function fd(a,l,o){a.prototype=l.prototype=o,o.constructor=a}function U1(a,l){var o=Object.create(a.prototype);for(var r in l)o[r]=l[r];return o}function gr(){}var or=.7,Sc=1/or,Li="\\s*([+-]?\\d+)\\s*",cr="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",xn="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",L4=/^#([0-9a-f]{3,8})$/,U4=new RegExp("^rgb\\("+[Li,Li,Li]+"\\)$"),H4=new RegExp("^rgb\\("+[xn,xn,xn]+"\\)$"),q4=new RegExp("^rgba\\("+[Li,Li,Li,cr]+"\\)$"),Y4=new RegExp("^rgba\\("+[xn,xn,xn,cr]+"\\)$"),G4=new RegExp("^hsl\\("+[cr,xn,xn]+"\\)$"),X4=new RegExp("^hsla\\("+[cr,xn,xn,cr]+"\\)$"),dg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};fd(gr,ur,{copy:function(a){return Object.assign(new this.constructor,this,a)},displayable:function(){return this.rgb().displayable()},hex:hg,formatHex:hg,formatHsl:V4,formatRgb:mg,toString:mg});function hg(){return this.rgb().formatHex()}function V4(){return H1(this).formatHsl()}function mg(){return this.rgb().formatRgb()}function ur(a){var l,o;return a=(a+"").trim().toLowerCase(),(l=L4.exec(a))?(o=l[1].length,l=parseInt(l[1],16),o===6?pg(l):o===3?new Xe(l>>8&15|l>>4&240,l>>4&15|l&240,(l&15)<<4|l&15,1):o===8?Yo(l>>24&255,l>>16&255,l>>8&255,(l&255)/255):o===4?Yo(l>>12&15|l>>8&240,l>>8&15|l>>4&240,l>>4&15|l&240,((l&15)<<4|l&15)/255):null):(l=U4.exec(a))?new Xe(l[1],l[2],l[3],1):(l=H4.exec(a))?new Xe(l[1]*255/100,l[2]*255/100,l[3]*255/100,1):(l=q4.exec(a))?Yo(l[1],l[2],l[3],l[4]):(l=Y4.exec(a))?Yo(l[1]*255/100,l[2]*255/100,l[3]*255/100,l[4]):(l=G4.exec(a))?yg(l[1],l[2]/100,l[3]/100,1):(l=X4.exec(a))?yg(l[1],l[2]/100,l[3]/100,l[4]):dg.hasOwnProperty(a)?pg(dg[a]):a==="transparent"?new Xe(NaN,NaN,NaN,0):null}function pg(a){return new Xe(a>>16&255,a>>8&255,a&255,1)}function Yo(a,l,o,r){return r<=0&&(a=l=o=NaN),new Xe(a,l,o,r)}function Z4(a){return a instanceof gr||(a=ur(a)),a?(a=a.rgb(),new Xe(a.r,a.g,a.b,a.opacity)):new Xe}function Lf(a,l,o,r){return arguments.length===1?Z4(a):new Xe(a,l,o,r??1)}function Xe(a,l,o,r){this.r=+a,this.g=+l,this.b=+o,this.opacity=+r}fd(Xe,Lf,U1(gr,{brighter:function(a){return a=a==null?Sc:Math.pow(Sc,a),new Xe(this.r*a,this.g*a,this.b*a,this.opacity)},darker:function(a){return a=a==null?or:Math.pow(or,a),new Xe(this.r*a,this.g*a,this.b*a,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:gg,formatHex:gg,formatRgb:vg,toString:vg}));function gg(){return"#"+rf(this.r)+rf(this.g)+rf(this.b)}function vg(){var a=this.opacity;return a=isNaN(a)?1:Math.max(0,Math.min(1,a)),(a===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(a===1?")":", "+a+")")}function rf(a){return a=Math.max(0,Math.min(255,Math.round(a)||0)),(a<16?"0":"")+a.toString(16)}function yg(a,l,o,r){return r<=0?a=l=o=NaN:o<=0||o>=1?a=l=NaN:l<=0&&(a=NaN),new yn(a,l,o,r)}function H1(a){if(a instanceof yn)return new yn(a.h,a.s,a.l,a.opacity);if(a instanceof gr||(a=ur(a)),!a)return new yn;if(a instanceof yn)return a;a=a.rgb();var l=a.r/255,o=a.g/255,r=a.b/255,s=Math.min(l,o,r),f=Math.max(l,o,r),h=NaN,p=f-s,v=(f+s)/2;return p?(l===f?h=(o-r)/p+(o<r)*6:o===f?h=(r-l)/p+2:h=(l-o)/p+4,p/=v<.5?f+s:2-f-s,h*=60):p=v>0&&v<1?0:h,new yn(h,p,v,a.opacity)}function Q4(a,l,o,r){return arguments.length===1?H1(a):new yn(a,l,o,r??1)}function yn(a,l,o,r){this.h=+a,this.s=+l,this.l=+o,this.opacity=+r}fd(yn,Q4,U1(gr,{brighter:function(a){return a=a==null?Sc:Math.pow(Sc,a),new yn(this.h,this.s,this.l*a,this.opacity)},darker:function(a){return a=a==null?or:Math.pow(or,a),new yn(this.h,this.s,this.l*a,this.opacity)},rgb:function(){var a=this.h%360+(this.h<0)*360,l=isNaN(a)||isNaN(this.s)?0:this.s,o=this.l,r=o+(o<.5?o:1-o)*l,s=2*o-r;return new Xe(of(a>=240?a-240:a+120,s,r),of(a,s,r),of(a<120?a+240:a-120,s,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var a=this.opacity;return a=isNaN(a)?1:Math.max(0,Math.min(1,a)),(a===1?"hsl(":"hsla(")+(this.h||0)+", "+(this.s||0)*100+"%, "+(this.l||0)*100+"%"+(a===1?")":", "+a+")")}}));function of(a,l,o){return(a<60?l+(o-l)*a/60:a<180?o:a<240?l+(o-l)*(240-a)/60:l)*255}const q1=a=>()=>a;function K4(a,l){return function(o){return a+o*l}}function J4(a,l,o){return a=Math.pow(a,o),l=Math.pow(l,o)-a,o=1/o,function(r){return Math.pow(a+r*l,o)}}function W4(a){return(a=+a)==1?Y1:function(l,o){return o-l?J4(l,o,a):q1(isNaN(l)?o:l)}}function Y1(a,l){var o=l-a;return o?K4(a,o):q1(isNaN(a)?l:a)}const xg=(function a(l){var o=W4(l);function r(s,f){var h=o((s=Lf(s)).r,(f=Lf(f)).r),p=o(s.g,f.g),v=o(s.b,f.b),y=Y1(s.opacity,f.opacity);return function(g){return s.r=h(g),s.g=p(g),s.b=v(g),s.opacity=y(g),s+""}}return r.gamma=a,r})(1);function Sa(a,l){return a=+a,l=+l,function(o){return a*(1-o)+l*o}}var Uf=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,cf=new RegExp(Uf.source,"g");function $4(a){return function(){return a}}function F4(a){return function(l){return a(l)+""}}function I4(a,l){var o=Uf.lastIndex=cf.lastIndex=0,r,s,f,h=-1,p=[],v=[];for(a=a+"",l=l+"";(r=Uf.exec(a))&&(s=cf.exec(l));)(f=s.index)>o&&(f=l.slice(o,f),p[h]?p[h]+=f:p[++h]=f),(r=r[0])===(s=s[0])?p[h]?p[h]+=s:p[++h]=s:(p[++h]=null,v.push({i:h,x:Sa(r,s)})),o=cf.lastIndex;return o<l.length&&(f=l.slice(o),p[h]?p[h]+=f:p[++h]=f),p.length<2?v[0]?F4(v[0].x):$4(l):(l=v.length,function(y){for(var g=0,x;g<l;++g)p[(x=v[g]).i]=x.x(y);return p.join("")})}var bg=180/Math.PI,Hf={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function G1(a,l,o,r,s,f){var h,p,v;return(h=Math.sqrt(a*a+l*l))&&(a/=h,l/=h),(v=a*o+l*r)&&(o-=a*v,r-=l*v),(p=Math.sqrt(o*o+r*r))&&(o/=p,r/=p,v/=p),a*r<l*o&&(a=-a,l=-l,v=-v,h=-h),{translateX:s,translateY:f,rotate:Math.atan2(l,a)*bg,skewX:Math.atan(v)*bg,scaleX:h,scaleY:p}}var Go;function P4(a){const l=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(a+"");return l.isIdentity?Hf:G1(l.a,l.b,l.c,l.d,l.e,l.f)}function t3(a){return a==null||(Go||(Go=document.createElementNS("http://www.w3.org/2000/svg","g")),Go.setAttribute("transform",a),!(a=Go.transform.baseVal.consolidate()))?Hf:(a=a.matrix,G1(a.a,a.b,a.c,a.d,a.e,a.f))}function X1(a,l,o,r){function s(y){return y.length?y.pop()+" ":""}function f(y,g,x,S,w,N){if(y!==x||g!==S){var L=w.push("translate(",null,l,null,o);N.push({i:L-4,x:Sa(y,x)},{i:L-2,x:Sa(g,S)})}else(x||S)&&w.push("translate("+x+l+S+o)}function h(y,g,x,S){y!==g?(y-g>180?g+=360:g-y>180&&(y+=360),S.push({i:x.push(s(x)+"rotate(",null,r)-2,x:Sa(y,g)})):g&&x.push(s(x)+"rotate("+g+r)}function p(y,g,x,S){y!==g?S.push({i:x.push(s(x)+"skewX(",null,r)-2,x:Sa(y,g)}):g&&x.push(s(x)+"skewX("+g+r)}function v(y,g,x,S,w,N){if(y!==x||g!==S){var L=w.push(s(w)+"scale(",null,",",null,")");N.push({i:L-4,x:Sa(y,x)},{i:L-2,x:Sa(g,S)})}else(x!==1||S!==1)&&w.push(s(w)+"scale("+x+","+S+")")}return function(y,g){var x=[],S=[];return y=a(y),g=a(g),f(y.translateX,y.translateY,g.translateX,g.translateY,x,S),h(y.rotate,g.rotate,x,S),p(y.skewX,g.skewX,x,S),v(y.scaleX,y.scaleY,g.scaleX,g.scaleY,x,S),y=g=null,function(w){for(var N=-1,L=S.length,H;++N<L;)x[(H=S[N]).i]=H.x(w);return x.join("")}}}var e3=X1(P4,"px, ","px)","deg)"),n3=X1(t3,", ",")",")"),a3=1e-12;function Sg(a){return((a=Math.exp(a))+1/a)/2}function i3(a){return((a=Math.exp(a))-1/a)/2}function l3(a){return((a=Math.exp(2*a))-1)/(a+1)}const r3=(function a(l,o,r){function s(f,h){var p=f[0],v=f[1],y=f[2],g=h[0],x=h[1],S=h[2],w=g-p,N=x-v,L=w*w+N*N,H,R;if(L<a3)R=Math.log(S/y)/l,H=function(W){return[p+W*w,v+W*N,y*Math.exp(l*W*R)]};else{var Z=Math.sqrt(L),D=(S*S-y*y+r*L)/(2*y*o*Z),U=(S*S-y*y-r*L)/(2*S*o*Z),Q=Math.log(Math.sqrt(D*D+1)-D),K=Math.log(Math.sqrt(U*U+1)-U);R=(K-Q)/l,H=function(W){var I=W*R,it=Sg(Q),dt=y/(o*Z)*(it*l3(l*I+Q)-i3(Q));return[p+dt*w,v+dt*N,y*it/Sg(l*I+Q)]}}return H.duration=R*1e3*l/Math.SQRT2,H}return s.rho=function(f){var h=Math.max(.001,+f),p=h*h,v=p*p;return a(h,p,v)},s})(Math.SQRT2,2,4);var Gi=0,Wl=0,ql=0,V1=1e3,wc,$l,jc=0,Qa=0,Ac=0,sr=typeof performance=="object"&&performance.now?performance:Date,Z1=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(a){setTimeout(a,17)};function dd(){return Qa||(Z1(o3),Qa=sr.now()+Ac)}function o3(){Qa=0}function Mc(){this._call=this._time=this._next=null}Mc.prototype=Q1.prototype={constructor:Mc,restart:function(a,l,o){if(typeof a!="function")throw new TypeError("callback is not a function");o=(o==null?dd():+o)+(l==null?0:+l),!this._next&&$l!==this&&($l?$l._next=this:wc=this,$l=this),this._call=a,this._time=o,qf()},stop:function(){this._call&&(this._call=null,this._time=1/0,qf())}};function Q1(a,l,o){var r=new Mc;return r.restart(a,l,o),r}function c3(){dd(),++Gi;for(var a=wc,l;a;)(l=Qa-a._time)>=0&&a._call.call(null,l),a=a._next;--Gi}function wg(){Qa=(jc=sr.now())+Ac,Gi=Wl=0;try{c3()}finally{Gi=0,s3(),Qa=0}}function u3(){var a=sr.now(),l=a-jc;l>V1&&(Ac-=l,jc=a)}function s3(){for(var a,l=wc,o,r=1/0;l;)l._call?(r>l._time&&(r=l._time),a=l,l=l._next):(o=l._next,l._next=null,l=a?a._next=o:wc=o);$l=a,qf(r)}function qf(a){if(!Gi){Wl&&(Wl=clearTimeout(Wl));var l=a-Qa;l>24?(a<1/0&&(Wl=setTimeout(wg,a-sr.now()-Ac)),ql&&(ql=clearInterval(ql))):(ql||(jc=sr.now(),ql=setInterval(u3,V1)),Gi=1,Z1(wg))}}function jg(a,l,o){var r=new Mc;return l=l==null?0:+l,r.restart(s=>{r.stop(),a(s+l)},l,o),r}var f3=cd("start","end","cancel","interrupt"),d3=[],K1=0,Mg=1,Yf=2,Jo=3,Eg=4,Gf=5,Wo=6;function _c(a,l,o,r,s,f){var h=a.__transition;if(!h)a.__transition={};else if(o in h)return;h3(a,o,{name:l,index:r,group:s,on:f3,tween:d3,time:f.time,delay:f.delay,duration:f.duration,ease:f.ease,timer:null,state:K1})}function hd(a,l){var o=sn(a,l);if(o.state>K1)throw new Error("too late; already scheduled");return o}function wn(a,l){var o=sn(a,l);if(o.state>Jo)throw new Error("too late; already running");return o}function sn(a,l){var o=a.__transition;if(!o||!(o=o[l]))throw new Error("transition not found");return o}function h3(a,l,o){var r=a.__transition,s;r[l]=o,o.timer=Q1(f,0,o.time);function f(y){o.state=Mg,o.timer.restart(h,o.delay,o.time),o.delay<=y&&h(y-o.delay)}function h(y){var g,x,S,w;if(o.state!==Mg)return v();for(g in r)if(w=r[g],w.name===o.name){if(w.state===Jo)return jg(h);w.state===Eg?(w.state=Wo,w.timer.stop(),w.on.call("interrupt",a,a.__data__,w.index,w.group),delete r[g]):+g<l&&(w.state=Wo,w.timer.stop(),w.on.call("cancel",a,a.__data__,w.index,w.group),delete r[g])}if(jg(function(){o.state===Jo&&(o.state=Eg,o.timer.restart(p,o.delay,o.time),p(y))}),o.state=Yf,o.on.call("start",a,a.__data__,o.index,o.group),o.state===Yf){for(o.state=Jo,s=new Array(S=o.tween.length),g=0,x=-1;g<S;++g)(w=o.tween[g].value.call(a,a.__data__,o.index,o.group))&&(s[++x]=w);s.length=x+1}}function p(y){for(var g=y<o.duration?o.ease.call(null,y/o.duration):(o.timer.restart(v),o.state=Gf,1),x=-1,S=s.length;++x<S;)s[x].call(a,g);o.state===Gf&&(o.on.call("end",a,a.__data__,o.index,o.group),v())}function v(){o.state=Wo,o.timer.stop(),delete r[l];for(var y in r)return;delete a.__transition}}function $o(a,l){var o=a.__transition,r,s,f=!0,h;if(o){l=l==null?null:l+"";for(h in o){if((r=o[h]).name!==l){f=!1;continue}s=r.state>Yf&&r.state<Gf,r.state=Wo,r.timer.stop(),r.on.call(s?"interrupt":"cancel",a,a.__data__,r.index,r.group),delete o[h]}f&&delete a.__transition}}function m3(a){return this.each(function(){$o(this,a)})}function p3(a,l){var o,r;return function(){var s=wn(this,a),f=s.tween;if(f!==o){r=o=f;for(var h=0,p=r.length;h<p;++h)if(r[h].name===l){r=r.slice(),r.splice(h,1);break}}s.tween=r}}function g3(a,l,o){var r,s;if(typeof o!="function")throw new Error;return function(){var f=wn(this,a),h=f.tween;if(h!==r){s=(r=h).slice();for(var p={name:l,value:o},v=0,y=s.length;v<y;++v)if(s[v].name===l){s[v]=p;break}v===y&&s.push(p)}f.tween=s}}function v3(a,l){var o=this._id;if(a+="",arguments.length<2){for(var r=sn(this.node(),o).tween,s=0,f=r.length,h;s<f;++s)if((h=r[s]).name===a)return h.value;return null}return this.each((l==null?p3:g3)(o,a,l))}function md(a,l,o){var r=a._id;return a.each(function(){var s=wn(this,r);(s.value||(s.value={}))[l]=o.apply(this,arguments)}),function(s){return sn(s,r).value[l]}}function J1(a,l){var o;return(typeof l=="number"?Sa:l instanceof ur?xg:(o=ur(l))?(l=o,xg):I4)(a,l)}function y3(a){return function(){this.removeAttribute(a)}}function x3(a){return function(){this.removeAttributeNS(a.space,a.local)}}function b3(a,l,o){var r,s=o+"",f;return function(){var h=this.getAttribute(a);return h===s?null:h===r?f:f=l(r=h,o)}}function S3(a,l,o){var r,s=o+"",f;return function(){var h=this.getAttributeNS(a.space,a.local);return h===s?null:h===r?f:f=l(r=h,o)}}function w3(a,l,o){var r,s,f;return function(){var h,p=o(this),v;return p==null?void this.removeAttribute(a):(h=this.getAttribute(a),v=p+"",h===v?null:h===r&&v===s?f:(s=v,f=l(r=h,p)))}}function j3(a,l,o){var r,s,f;return function(){var h,p=o(this),v;return p==null?void this.removeAttributeNS(a.space,a.local):(h=this.getAttributeNS(a.space,a.local),v=p+"",h===v?null:h===r&&v===s?f:(s=v,f=l(r=h,p)))}}function M3(a,l){var o=Nc(a),r=o==="transform"?n3:J1;return this.attrTween(a,typeof l=="function"?(o.local?j3:w3)(o,r,md(this,"attr."+a,l)):l==null?(o.local?x3:y3)(o):(o.local?S3:b3)(o,r,l))}function E3(a,l){return function(o){this.setAttribute(a,l.call(this,o))}}function z3(a,l){return function(o){this.setAttributeNS(a.space,a.local,l.call(this,o))}}function N3(a,l){var o,r;function s(){var f=l.apply(this,arguments);return f!==r&&(o=(r=f)&&z3(a,f)),o}return s._value=l,s}function A3(a,l){var o,r;function s(){var f=l.apply(this,arguments);return f!==r&&(o=(r=f)&&E3(a,f)),o}return s._value=l,s}function _3(a,l){var o="attr."+a;if(arguments.length<2)return(o=this.tween(o))&&o._value;if(l==null)return this.tween(o,null);if(typeof l!="function")throw new Error;var r=Nc(a);return this.tween(o,(r.local?N3:A3)(r,l))}function T3(a,l){return function(){hd(this,a).delay=+l.apply(this,arguments)}}function C3(a,l){return l=+l,function(){hd(this,a).delay=l}}function O3(a){var l=this._id;return arguments.length?this.each((typeof a=="function"?T3:C3)(l,a)):sn(this.node(),l).delay}function D3(a,l){return function(){wn(this,a).duration=+l.apply(this,arguments)}}function k3(a,l){return l=+l,function(){wn(this,a).duration=l}}function R3(a){var l=this._id;return arguments.length?this.each((typeof a=="function"?D3:k3)(l,a)):sn(this.node(),l).duration}function B3(a,l){if(typeof l!="function")throw new Error;return function(){wn(this,a).ease=l}}function L3(a){var l=this._id;return arguments.length?this.each(B3(l,a)):sn(this.node(),l).ease}function U3(a,l){return function(){var o=l.apply(this,arguments);if(typeof o!="function")throw new Error;wn(this,a).ease=o}}function H3(a){if(typeof a!="function")throw new Error;return this.each(U3(this._id,a))}function q3(a){typeof a!="function"&&(a=A1(a));for(var l=this._groups,o=l.length,r=new Array(o),s=0;s<o;++s)for(var f=l[s],h=f.length,p=r[s]=[],v,y=0;y<h;++y)(v=f[y])&&a.call(v,v.__data__,y,f)&&p.push(v);return new Jn(r,this._parents,this._name,this._id)}function Y3(a){if(a._id!==this._id)throw new Error;for(var l=this._groups,o=a._groups,r=l.length,s=o.length,f=Math.min(r,s),h=new Array(r),p=0;p<f;++p)for(var v=l[p],y=o[p],g=v.length,x=h[p]=new Array(g),S,w=0;w<g;++w)(S=v[w]||y[w])&&(x[w]=S);for(;p<r;++p)h[p]=l[p];return new Jn(h,this._parents,this._name,this._id)}function G3(a){return(a+"").trim().split(/^|\s+/).every(function(l){var o=l.indexOf(".");return o>=0&&(l=l.slice(0,o)),!l||l==="start"})}function X3(a,l,o){var r,s,f=G3(l)?hd:wn;return function(){var h=f(this,a),p=h.on;p!==r&&(s=(r=p).copy()).on(l,o),h.on=s}}function V3(a,l){var o=this._id;return arguments.length<2?sn(this.node(),o).on.on(a):this.each(X3(o,a,l))}function Z3(a){return function(){var l=this.parentNode;for(var o in this.__transition)if(+o!==a)return;l&&l.removeChild(this)}}function Q3(){return this.on("end.remove",Z3(this._id))}function K3(a){var l=this._name,o=this._id;typeof a!="function"&&(a=ud(a));for(var r=this._groups,s=r.length,f=new Array(s),h=0;h<s;++h)for(var p=r[h],v=p.length,y=f[h]=new Array(v),g,x,S=0;S<v;++S)(g=p[S])&&(x=a.call(g,g.__data__,S,p))&&("__data__"in g&&(x.__data__=g.__data__),y[S]=x,_c(y[S],l,o,S,y,sn(g,o)));return new Jn(f,this._parents,l,o)}function J3(a){var l=this._name,o=this._id;typeof a!="function"&&(a=N1(a));for(var r=this._groups,s=r.length,f=[],h=[],p=0;p<s;++p)for(var v=r[p],y=v.length,g,x=0;x<y;++x)if(g=v[x]){for(var S=a.call(g,g.__data__,x,v),w,N=sn(g,o),L=0,H=S.length;L<H;++L)(w=S[L])&&_c(w,l,o,L,S,N);f.push(S),h.push(g)}return new Jn(f,h,l,o)}var W3=pr.prototype.constructor;function $3(){return new W3(this._groups,this._parents)}function F3(a,l){var o,r,s;return function(){var f=Yi(this,a),h=(this.style.removeProperty(a),Yi(this,a));return f===h?null:f===o&&h===r?s:s=l(o=f,r=h)}}function W1(a){return function(){this.style.removeProperty(a)}}function I3(a,l,o){var r,s=o+"",f;return function(){var h=Yi(this,a);return h===s?null:h===r?f:f=l(r=h,o)}}function P3(a,l,o){var r,s,f;return function(){var h=Yi(this,a),p=o(this),v=p+"";return p==null&&(v=p=(this.style.removeProperty(a),Yi(this,a))),h===v?null:h===r&&v===s?f:(s=v,f=l(r=h,p))}}function tS(a,l){var o,r,s,f="style."+l,h="end."+f,p;return function(){var v=wn(this,a),y=v.on,g=v.value[f]==null?p||(p=W1(l)):void 0;(y!==o||s!==g)&&(r=(o=y).copy()).on(h,s=g),v.on=r}}function eS(a,l,o){var r=(a+="")=="transform"?e3:J1;return l==null?this.styleTween(a,F3(a,r)).on("end.style."+a,W1(a)):typeof l=="function"?this.styleTween(a,P3(a,r,md(this,"style."+a,l))).each(tS(this._id,a)):this.styleTween(a,I3(a,r,l),o).on("end.style."+a,null)}function nS(a,l,o){return function(r){this.style.setProperty(a,l.call(this,r),o)}}function aS(a,l,o){var r,s;function f(){var h=l.apply(this,arguments);return h!==s&&(r=(s=h)&&nS(a,h,o)),r}return f._value=l,f}function iS(a,l,o){var r="style."+(a+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(l==null)return this.tween(r,null);if(typeof l!="function")throw new Error;return this.tween(r,aS(a,l,o??""))}function lS(a){return function(){this.textContent=a}}function rS(a){return function(){var l=a(this);this.textContent=l??""}}function oS(a){return this.tween("text",typeof a=="function"?rS(md(this,"text",a)):lS(a==null?"":a+""))}function cS(a){return function(l){this.textContent=a.call(this,l)}}function uS(a){var l,o;function r(){var s=a.apply(this,arguments);return s!==o&&(l=(o=s)&&cS(s)),l}return r._value=a,r}function sS(a){var l="text";if(arguments.length<1)return(l=this.tween(l))&&l._value;if(a==null)return this.tween(l,null);if(typeof a!="function")throw new Error;return this.tween(l,uS(a))}function fS(){for(var a=this._name,l=this._id,o=$1(),r=this._groups,s=r.length,f=0;f<s;++f)for(var h=r[f],p=h.length,v,y=0;y<p;++y)if(v=h[y]){var g=sn(v,l);_c(v,a,o,y,h,{time:g.time+g.delay+g.duration,delay:0,duration:g.duration,ease:g.ease})}return new Jn(r,this._parents,a,o)}function dS(){var a,l,o=this,r=o._id,s=o.size();return new Promise(function(f,h){var p={value:h},v={value:function(){--s===0&&f()}};o.each(function(){var y=wn(this,r),g=y.on;g!==a&&(l=(a=g).copy(),l._.cancel.push(p),l._.interrupt.push(p),l._.end.push(v)),y.on=l}),s===0&&f()})}var hS=0;function Jn(a,l,o,r){this._groups=a,this._parents=l,this._name=o,this._id=r}function $1(){return++hS}var Ga=pr.prototype;Jn.prototype={constructor:Jn,select:K3,selectAll:J3,filter:q3,merge:Y3,selection:$3,transition:fS,call:Ga.call,nodes:Ga.nodes,node:Ga.node,size:Ga.size,empty:Ga.empty,each:Ga.each,on:V3,attr:M3,attrTween:_3,style:eS,styleTween:iS,text:oS,textTween:sS,remove:Q3,tween:v3,delay:O3,duration:R3,ease:L3,easeVarying:H3,end:dS,[Symbol.iterator]:Ga[Symbol.iterator]};function mS(a){return((a*=2)<=1?a*a*a:(a-=2)*a*a+2)/2}var pS={time:null,delay:0,duration:250,ease:mS};function gS(a,l){for(var o;!(o=a.__transition)||!(o=o[l]);)if(!(a=a.parentNode))throw new Error(`transition ${l} not found`);return o}function vS(a){var l,o;a instanceof Jn?(l=a._id,a=a._name):(l=$1(),(o=pS).time=dd(),a=a==null?null:a+"");for(var r=this._groups,s=r.length,f=0;f<s;++f)for(var h=r[f],p=h.length,v,y=0;y<p;++y)(v=h[y])&&_c(v,a,l,y,h,o||gS(v,l));return new Jn(r,this._parents,a,l)}pr.prototype.interrupt=m3;pr.prototype.transition=vS;const Xo=a=>()=>a;function yS(a,{sourceEvent:l,target:o,transform:r,dispatch:s}){Object.defineProperties(this,{type:{value:a,enumerable:!0,configurable:!0},sourceEvent:{value:l,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:s}})}function Qn(a,l,o){this.k=a,this.x=l,this.y=o}Qn.prototype={constructor:Qn,scale:function(a){return a===1?this:new Qn(this.k*a,this.x,this.y)},translate:function(a,l){return a===0&l===0?this:new Qn(this.k,this.x+this.k*a,this.y+this.k*l)},apply:function(a){return[a[0]*this.k+this.x,a[1]*this.k+this.y]},applyX:function(a){return a*this.k+this.x},applyY:function(a){return a*this.k+this.y},invert:function(a){return[(a[0]-this.x)/this.k,(a[1]-this.y)/this.k]},invertX:function(a){return(a-this.x)/this.k},invertY:function(a){return(a-this.y)/this.k},rescaleX:function(a){return a.copy().domain(a.range().map(this.invertX,this).map(a.invert,a))},rescaleY:function(a){return a.copy().domain(a.range().map(this.invertY,this).map(a.invert,a))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var pd=new Qn(1,0,0);Qn.prototype;function uf(a){a.stopImmediatePropagation()}function Yl(a){a.preventDefault(),a.stopImmediatePropagation()}function xS(a){return(!a.ctrlKey||a.type==="wheel")&&!a.button}function bS(){var a=this;return a instanceof SVGElement?(a=a.ownerSVGElement||a,a.hasAttribute("viewBox")?(a=a.viewBox.baseVal,[[a.x,a.y],[a.x+a.width,a.y+a.height]]):[[0,0],[a.width.baseVal.value,a.height.baseVal.value]]):[[0,0],[a.clientWidth,a.clientHeight]]}function zg(){return this.__zoom||pd}function SS(a){return-a.deltaY*(a.deltaMode===1?.05:a.deltaMode?1:.002)*(a.ctrlKey?10:1)}function wS(){return navigator.maxTouchPoints||"ontouchstart"in this}function jS(a,l,o){var r=a.invertX(l[0][0])-o[0][0],s=a.invertX(l[1][0])-o[1][0],f=a.invertY(l[0][1])-o[0][1],h=a.invertY(l[1][1])-o[1][1];return a.translate(s>r?(r+s)/2:Math.min(0,r)||Math.max(0,s),h>f?(f+h)/2:Math.min(0,f)||Math.max(0,h))}function MS(){var a=xS,l=bS,o=jS,r=SS,s=wS,f=[0,1/0],h=[[-1/0,-1/0],[1/0,1/0]],p=250,v=r3,y=cd("start","zoom","end"),g,x,S,w=500,N=150,L=0,H=10;function R(_){_.property("__zoom",zg).on("wheel.zoom",I).on("mousedown.zoom",it).on("dblclick.zoom",dt).filter(s).on("touchstart.zoom",et).on("touchmove.zoom",ht).on("touchend.zoom touchcancel.zoom",Et).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}R.transform=function(_,z,j,T){var X=_.selection?_.selection():_;X.property("__zoom",zg),_!==X?Q(_,z,j,T):X.interrupt().each(function(){K(this,arguments).event(T).start().zoom(null,typeof z=="function"?z.apply(this,arguments):z).end()})},R.scaleBy=function(_,z,j,T){R.scaleTo(_,function(){var X=this.__zoom.k,J=typeof z=="function"?z.apply(this,arguments):z;return X*J},j,T)},R.scaleTo=function(_,z,j,T){R.transform(_,function(){var X=l.apply(this,arguments),J=this.__zoom,F=j==null?U(X):typeof j=="function"?j.apply(this,arguments):j,ot=J.invert(F),lt=typeof z=="function"?z.apply(this,arguments):z;return o(D(Z(J,lt),F,ot),X,h)},j,T)},R.translateBy=function(_,z,j,T){R.transform(_,function(){return o(this.__zoom.translate(typeof z=="function"?z.apply(this,arguments):z,typeof j=="function"?j.apply(this,arguments):j),l.apply(this,arguments),h)},null,T)},R.translateTo=function(_,z,j,T,X){R.transform(_,function(){var J=l.apply(this,arguments),F=this.__zoom,ot=T==null?U(J):typeof T=="function"?T.apply(this,arguments):T;return o(pd.translate(ot[0],ot[1]).scale(F.k).translate(typeof z=="function"?-z.apply(this,arguments):-z,typeof j=="function"?-j.apply(this,arguments):-j),J,h)},T,X)};function Z(_,z){return z=Math.max(f[0],Math.min(f[1],z)),z===_.k?_:new Qn(z,_.x,_.y)}function D(_,z,j){var T=z[0]-j[0]*_.k,X=z[1]-j[1]*_.k;return T===_.x&&X===_.y?_:new Qn(_.k,T,X)}function U(_){return[(+_[0][0]+ +_[1][0])/2,(+_[0][1]+ +_[1][1])/2]}function Q(_,z,j,T){_.on("start.zoom",function(){K(this,arguments).event(T).start()}).on("interrupt.zoom end.zoom",function(){K(this,arguments).event(T).end()}).tween("zoom",function(){var X=this,J=arguments,F=K(X,J).event(T),ot=l.apply(X,J),lt=j==null?U(ot):typeof j=="function"?j.apply(X,J):j,rt=Math.max(ot[1][0]-ot[0][0],ot[1][1]-ot[0][1]),pt=X.__zoom,zt=typeof z=="function"?z.apply(X,J):z,Xt=v(pt.invert(lt).concat(rt/pt.k),zt.invert(lt).concat(rt/zt.k));return function(ne){if(ne===1)ne=zt;else{var re=Xt(ne),Ot=rt/re[2];ne=new Qn(Ot,lt[0]-re[0]*Ot,lt[1]-re[1]*Ot)}F.zoom(null,ne)}})}function K(_,z,j){return!j&&_.__zooming||new W(_,z)}function W(_,z){this.that=_,this.args=z,this.active=0,this.sourceEvent=null,this.extent=l.apply(_,z),this.taps=0}W.prototype={event:function(_){return _&&(this.sourceEvent=_),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(_,z){return this.mouse&&_!=="mouse"&&(this.mouse[1]=z.invert(this.mouse[0])),this.touch0&&_!=="touch"&&(this.touch0[1]=z.invert(this.touch0[0])),this.touch1&&_!=="touch"&&(this.touch1[1]=z.invert(this.touch1[0])),this.that.__zoom=z,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(_){var z=Zn(this.that).datum();y.call(_,this.that,new yS(_,{sourceEvent:this.sourceEvent,target:R,transform:this.that.__zoom,dispatch:y}),z)}};function I(_,...z){if(!a.apply(this,arguments))return;var j=K(this,z).event(_),T=this.__zoom,X=Math.max(f[0],Math.min(f[1],T.k*Math.pow(2,r.apply(this,arguments)))),J=Ya(_);if(j.wheel)(j.mouse[0][0]!==J[0]||j.mouse[0][1]!==J[1])&&(j.mouse[1]=T.invert(j.mouse[0]=J)),clearTimeout(j.wheel);else{if(T.k===X)return;j.mouse=[J,T.invert(J)],$o(this),j.start()}Yl(_),j.wheel=setTimeout(F,N),j.zoom("mouse",o(D(Z(T,X),j.mouse[0],j.mouse[1]),j.extent,h));function F(){j.wheel=null,j.end()}}function it(_,...z){if(S||!a.apply(this,arguments))return;var j=K(this,z,!0).event(_),T=Zn(_.view).on("mousemove.zoom",lt,!0).on("mouseup.zoom",rt,!0),X=Ya(_,J),J=_.currentTarget,F=_.clientX,ot=_.clientY;R4(_.view),uf(_),j.mouse=[X,this.__zoom.invert(X)],$o(this),j.start();function lt(pt){if(Yl(pt),!j.moved){var zt=pt.clientX-F,Xt=pt.clientY-ot;j.moved=zt*zt+Xt*Xt>L}j.event(pt).zoom("mouse",o(D(j.that.__zoom,j.mouse[0]=Ya(pt,J),j.mouse[1]),j.extent,h))}function rt(pt){T.on("mousemove.zoom mouseup.zoom",null),B4(pt.view,j.moved),Yl(pt),j.event(pt).end()}}function dt(_,...z){if(a.apply(this,arguments)){var j=this.__zoom,T=Ya(_.changedTouches?_.changedTouches[0]:_,this),X=j.invert(T),J=j.k*(_.shiftKey?.5:2),F=o(D(Z(j,J),T,X),l.apply(this,z),h);Yl(_),p>0?Zn(this).transition().duration(p).call(Q,F,T,_):Zn(this).call(R.transform,F,T,_)}}function et(_,...z){if(a.apply(this,arguments)){var j=_.touches,T=j.length,X=K(this,z,_.changedTouches.length===T).event(_),J,F,ot,lt;for(uf(_),F=0;F<T;++F)ot=j[F],lt=Ya(ot,this),lt=[lt,this.__zoom.invert(lt),ot.identifier],X.touch0?!X.touch1&&X.touch0[2]!==lt[2]&&(X.touch1=lt,X.taps=0):(X.touch0=lt,J=!0,X.taps=1+!!g);g&&(g=clearTimeout(g)),J&&(X.taps<2&&(x=lt[0],g=setTimeout(function(){g=null},w)),$o(this),X.start())}}function ht(_,...z){if(this.__zooming){var j=K(this,z).event(_),T=_.changedTouches,X=T.length,J,F,ot,lt;for(Yl(_),J=0;J<X;++J)F=T[J],ot=Ya(F,this),j.touch0&&j.touch0[2]===F.identifier?j.touch0[0]=ot:j.touch1&&j.touch1[2]===F.identifier&&(j.touch1[0]=ot);if(F=j.that.__zoom,j.touch1){var rt=j.touch0[0],pt=j.touch0[1],zt=j.touch1[0],Xt=j.touch1[1],ne=(ne=zt[0]-rt[0])*ne+(ne=zt[1]-rt[1])*ne,re=(re=Xt[0]-pt[0])*re+(re=Xt[1]-pt[1])*re;F=Z(F,Math.sqrt(ne/re)),ot=[(rt[0]+zt[0])/2,(rt[1]+zt[1])/2],lt=[(pt[0]+Xt[0])/2,(pt[1]+Xt[1])/2]}else if(j.touch0)ot=j.touch0[0],lt=j.touch0[1];else return;j.zoom("touch",o(D(F,ot,lt),j.extent,h))}}function Et(_,...z){if(this.__zooming){var j=K(this,z).event(_),T=_.changedTouches,X=T.length,J,F;for(uf(_),S&&clearTimeout(S),S=setTimeout(function(){S=null},w),J=0;J<X;++J)F=T[J],j.touch0&&j.touch0[2]===F.identifier?delete j.touch0:j.touch1&&j.touch1[2]===F.identifier&&delete j.touch1;if(j.touch1&&!j.touch0&&(j.touch0=j.touch1,delete j.touch1),j.touch0)j.touch0[1]=this.__zoom.invert(j.touch0[0]);else if(j.end(),j.taps===2&&(F=Ya(F,this),Math.hypot(x[0]-F[0],x[1]-F[1])<H)){var ot=Zn(this).on("dblclick.zoom");ot&&ot.apply(this,arguments)}}}return R.wheelDelta=function(_){return arguments.length?(r=typeof _=="function"?_:Xo(+_),R):r},R.filter=function(_){return arguments.length?(a=typeof _=="function"?_:Xo(!!_),R):a},R.touchable=function(_){return arguments.length?(s=typeof _=="function"?_:Xo(!!_),R):s},R.extent=function(_){return arguments.length?(l=typeof _=="function"?_:Xo([[+_[0][0],+_[0][1]],[+_[1][0],+_[1][1]]]),R):l},R.scaleExtent=function(_){return arguments.length?(f[0]=+_[0],f[1]=+_[1],R):[f[0],f[1]]},R.translateExtent=function(_){return arguments.length?(h[0][0]=+_[0][0],h[1][0]=+_[1][0],h[0][1]=+_[0][1],h[1][1]=+_[1][1],R):[[h[0][0],h[0][1]],[h[1][0],h[1][1]]]},R.constrain=function(_){return arguments.length?(o=_,R):o},R.duration=function(_){return arguments.length?(p=+_,R):p},R.interpolate=function(_){return arguments.length?(v=_,R):v},R.on=function(){var _=y.on.apply(y,arguments);return _===y?R:_},R.clickDistance=function(_){return arguments.length?(L=(_=+_)*_,R):Math.sqrt(L)},R.tapDistance=function(_){return arguments.length?(H=+_,R):H},R}function Ng(a,l){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);l&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable})),o.push.apply(o,r)}return o}function Ri(a){for(var l=1;l<arguments.length;l++){var o=arguments[l]!=null?arguments[l]:{};l%2?Ng(Object(o),!0).forEach(function(r){ES(a,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):Ng(Object(o)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(o,r))})}return a}function Xf(a){"@babel/helpers - typeof";return Xf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},Xf(a)}function ES(a,l,o){return l in a?Object.defineProperty(a,l,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[l]=o,a}function Te(){return Te=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(a[r]=o[r])}return a},Te.apply(this,arguments)}function zS(a,l){if(a==null)return{};var o={},r=Object.keys(a),s,f;for(f=0;f<r.length;f++)s=r[f],!(l.indexOf(s)>=0)&&(o[s]=a[s]);return o}function an(a,l){if(a==null)return{};var o=zS(a,l),r,s;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(s=0;s<f.length;s++)r=f[s],!(l.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(a,r)&&(o[r]=a[r])}return o}function de(a,l){return NS(a)||AS(a,l)||_S(a,l)||TS()}function NS(a){if(Array.isArray(a))return a}function AS(a,l){var o=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(o!=null){var r=[],s=!0,f=!1,h,p;try{for(o=o.call(a);!(s=(h=o.next()).done)&&(r.push(h.value),!(l&&r.length===l));s=!0);}catch(v){f=!0,p=v}finally{try{!s&&o.return!=null&&o.return()}finally{if(f)throw p}}return r}}function _S(a,l){if(a){if(typeof a=="string")return Ag(a,l);var o=Object.prototype.toString.call(a).slice(8,-1);if(o==="Object"&&a.constructor&&(o=a.constructor.name),o==="Map"||o==="Set")return Array.from(a);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Ag(a,l)}}function Ag(a,l){(l==null||l>a.length)&&(l=a.length);for(var o=0,r=new Array(l);o<l;o++)r[o]=a[o];return r}function TS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var CS=["width","height","projection","projectionConfig"],OS=v1,DS=an(Kb,["geoPath"]),jn=Y.createContext(),kS=function(l){var o=l.projectionConfig,r=o===void 0?{}:o,s=l.projection,f=s===void 0?"geoEqualEarth":s,h=l.width,p=h===void 0?800:h,v=l.height,y=v===void 0?600:v,g=typeof f=="function";if(g)return f;var x=DS[f]().translate([p/2,y/2]),S=[x.center?"center":null,x.rotate?"rotate":null,x.scale?"scale":null,x.parallels?"parallels":null];return S.forEach(function(w){w&&(x=x[w](r[w]||x[w]()))}),x},F1=function(l){var o=l.width,r=l.height,s=l.projection,f=l.projectionConfig,h=an(l,CS),p=f.center||[],v=de(p,2),y=v[0],g=v[1],x=f.rotate||[],S=de(x,3),w=S[0],N=S[1],L=S[2],H=f.parallels||[],R=de(H,2),Z=R[0],D=R[1],U=f.scale||null,Q=Y.useMemo(function(){return kS({projectionConfig:{center:y||y===0||g||g===0?[y,g]:null,rotate:w||w===0||N||N===0?[w,N,L]:null,parallels:Z||Z===0||D||D===0?[Z,D]:null,scale:U},projection:s,width:o,height:r})},[o,r,s,y,g,w,N,L,Z,D,U]),K=Y.useCallback(Q,[Q]),W=Y.useMemo(function(){return{width:o,height:r,projection:K,path:OS().projection(K)}},[o,r,K]);return te.createElement(jn.Provider,Te({value:W},h))};F1.propTypes={width:$.number,height:$.number,projection:$.oneOfType([$.string,$.func]),projectionConfig:$.object};var RS=["width","height","projection","projectionConfig","className"],gd=Y.forwardRef(function(a,l){var o=a.width,r=o===void 0?800:o,s=a.height,f=s===void 0?600:s,h=a.projection,p=h===void 0?"geoEqualEarth":h,v=a.projectionConfig,y=v===void 0?{}:v,g=a.className,x=g===void 0?"":g,S=an(a,RS);return te.createElement(F1,{width:r,height:f,projection:p,projectionConfig:y},te.createElement("svg",Te({ref:l,viewBox:"0 0 ".concat(r," ").concat(f),className:"rsm-svg ".concat(x)},S)))});gd.displayName="ComposableMap";gd.propTypes={width:$.number,height:$.number,projection:$.oneOfType([$.string,$.func]),projectionConfig:$.object,className:$.string};function _g(a,l,o){var r=(a*o.k-a)/2,s=(l*o.k-l)/2;return[a/2-(r+o.x)/o.k,l/2-(s+o.y)/o.k]}function BS(a){return fetch(a).then(function(l){if(!l.ok)throw Error(l.statusText);return l.json()}).catch(function(l){console.log("There was a problem when fetching the data: ",l)})}function Tg(a,l){var o=a.type==="Topology";if(!o)return l?l(a.features||a):a.features||a;var r=Fb(a,a.objects[Object.keys(a.objects)[0]]).features;return l?l(r):r}function Cg(a){var l=a.type==="Topology";if(!l)return null;var o=ug(a,a.objects[Object.keys(a.objects)[0]],function(s,f){return s===f}),r=ug(a,a.objects[Object.keys(a.objects)[0]],function(s,f){return s!==f});return{outline:o,borders:r}}function LS(a,l,o){return a&&l?{outline:Ri(Ri({},a),{},{rsmKey:"outline",svgPath:o(a)}),borders:Ri(Ri({},l),{},{rsmKey:"borders",svgPath:o(l)})}:{}}function US(a,l){return a?a.map(function(o,r){return Ri(Ri({},o),{},{rsmKey:"geo-".concat(r),svgPath:l(o)})}):[]}function HS(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:30,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:30,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.5,r=Array.isArray(o)?o:[o,o],s=a/2*r[0],f=l/2*r[1];return"M".concat(0,",",0," Q",-a/2-s,",").concat(-l/2+f," ").concat(-a,",").concat(-l)}function qS(a){return typeof a=="string"}function YS(a){var l=a.geography,o=a.parseGeographies,r=Y.useContext(jn),s=r.path,f=Y.useState({}),h=de(f,2),p=h[0],v=h[1];Y.useEffect(function(){(typeof window>"u"?"undefined":Xf(window))!=="undefined"&&l&&(qS(l)?BS(l).then(function(w){w&&v({geographies:Tg(w,o),mesh:Cg(w)})}):v({geographies:Tg(l,o),mesh:Cg(l)}))},[l,o]);var y=Y.useMemo(function(){var w=p.mesh||{},N=LS(w.outline,w.borders,s);return{geographies:US(p.geographies,s),outline:N.outline,borders:N.borders}},[p,s]),g=y.geographies,x=y.outline,S=y.borders;return{geographies:g,outline:x,borders:S}}var GS=["geography","children","parseGeographies","className"],vd=Y.forwardRef(function(a,l){var o=a.geography,r=a.children,s=a.parseGeographies,f=a.className,h=f===void 0?"":f,p=an(a,GS),v=Y.useContext(jn),y=v.path,g=v.projection,x=YS({geography:o,parseGeographies:s}),S=x.geographies,w=x.outline,N=x.borders;return te.createElement("g",Te({ref:l,className:"rsm-geographies ".concat(h)},p),S&&S.length>0&&r({geographies:S,outline:w,borders:N,path:y,projection:g}))});vd.displayName="Geographies";vd.propTypes={geography:$.oneOfType([$.string,$.object,$.array]),children:$.func,parseGeographies:$.func,className:$.string};var XS=["geography","onMouseEnter","onMouseLeave","onMouseDown","onMouseUp","onFocus","onBlur","style","className"],yd=Y.forwardRef(function(a,l){var o=a.geography,r=a.onMouseEnter,s=a.onMouseLeave,f=a.onMouseDown,h=a.onMouseUp,p=a.onFocus,v=a.onBlur,y=a.style,g=y===void 0?{}:y,x=a.className,S=x===void 0?"":x,w=an(a,XS),N=Y.useState(!1),L=de(N,2),H=L[0],R=L[1],Z=Y.useState(!1),D=de(Z,2),U=D[0],Q=D[1];function K(ht){Q(!0),r&&r(ht)}function W(ht){Q(!1),H&&R(!1),s&&s(ht)}function I(ht){Q(!0),p&&p(ht)}function it(ht){Q(!1),H&&R(!1),v&&v(ht)}function dt(ht){R(!0),f&&f(ht)}function et(ht){R(!1),h&&h(ht)}return te.createElement("path",Te({ref:l,tabIndex:"0",className:"rsm-geography ".concat(S),d:o.svgPath,onMouseEnter:K,onMouseLeave:W,onFocus:I,onBlur:it,onMouseDown:dt,onMouseUp:et,style:g[H||U?H?"pressed":"hover":"default"]},w))});yd.displayName="Geography";yd.propTypes={geography:$.object,onMouseEnter:$.func,onMouseLeave:$.func,onMouseDown:$.func,onMouseUp:$.func,onFocus:$.func,onBlur:$.func,style:$.object,className:$.string};var VS=Y.memo(yd),ZS=["fill","stroke","step","className"],xd=Y.forwardRef(function(a,l){var o=a.fill,r=o===void 0?"transparent":o,s=a.stroke,f=s===void 0?"currentcolor":s,h=a.step,p=h===void 0?[10,10]:h,v=a.className,y=v===void 0?"":v,g=an(a,ZS),x=Y.useContext(jn),S=x.path;return te.createElement("path",Te({ref:l,d:S(Kf().step(p)()),fill:r,stroke:f,className:"rsm-graticule ".concat(y)},g))});xd.displayName="Graticule";xd.propTypes={fill:$.string,stroke:$.string,step:$.array,className:$.string};Y.memo(xd);var QS=["value"],KS=Y.createContext(),JS={x:0,y:0,k:1,transformString:"translate(0 0) scale(1)"},I1=function(l){var o=l.value,r=o===void 0?JS:o,s=an(l,QS);return te.createElement(KS.Provider,Te({value:r},s))};I1.propTypes={x:$.number,y:$.number,k:$.number,transformString:$.string};function WS(a){var l=a.center,o=a.filterZoomEvent,r=a.onMoveStart,s=a.onMoveEnd,f=a.onMove,h=a.translateExtent,p=h===void 0?[[-1/0,-1/0],[1/0,1/0]]:h,v=a.scaleExtent,y=v===void 0?[1,8]:v,g=a.zoom,x=g===void 0?1:g,S=Y.useContext(jn),w=S.width,N=S.height,L=S.projection,H=de(l,2),R=H[0],Z=H[1],D=Y.useState({x:0,y:0,k:1}),U=de(D,2),Q=U[0],K=U[1],W=Y.useRef({x:0,y:0,k:1}),I=Y.useRef(),it=Y.useRef(),dt=Y.useRef(!1),et=de(p,2),ht=et[0],Et=et[1],_=de(ht,2),z=_[0],j=_[1],T=de(Et,2),X=T[0],J=T[1],F=de(y,2),ot=F[0],lt=F[1];return Y.useEffect(function(){var rt=Zn(I.current);function pt(Ot){!r||dt.current||r({coordinates:L.invert(_g(w,N,Ot.transform)),zoom:Ot.transform.k},Ot)}function zt(Ot){if(!dt.current){var Ve=Ot.transform,fn=Ot.sourceEvent;K({x:Ve.x,y:Ve.y,k:Ve.k,dragging:fn}),f&&f({x:Ve.x,y:Ve.y,zoom:Ve.k,dragging:fn},Ot)}}function Xt(Ot){if(dt.current){dt.current=!1;return}var Ve=L.invert(_g(w,N,Ot.transform)),fn=de(Ve,2),Ka=fn[0],Vi=fn[1];W.current={x:Ka,y:Vi,k:Ot.transform.k},s&&s({coordinates:[Ka,Vi],zoom:Ot.transform.k},Ot)}function ne(Ot){return o?o(Ot):Ot?!Ot.ctrlKey&&!Ot.button:!1}var re=MS().filter(ne).scaleExtent([ot,lt]).translateExtent([[z,j],[X,J]]).on("start",pt).on("zoom",zt).on("end",Xt);it.current=re,rt.call(re)},[w,N,z,j,X,J,ot,lt,L,r,f,s,o]),Y.useEffect(function(){if(!(R===W.current.x&&Z===W.current.y&&x===W.current.k)){var rt=L([R,Z]),pt=rt[0]*x,zt=rt[1]*x,Xt=Zn(I.current);dt.current=!0,Xt.call(it.current.transform,pd.translate(w/2-pt,N/2-zt).scale(x)),K({x:w/2-pt,y:N/2-zt,k:x}),W.current={x:R,y:Z,k:x}}},[R,Z,x,w,N,L]),{mapRef:I,position:Q,transformString:"translate(".concat(Q.x," ").concat(Q.y,") scale(").concat(Q.k,")")}}var $S=["center","zoom","minZoom","maxZoom","translateExtent","filterZoomEvent","onMoveStart","onMove","onMoveEnd","className"],P1=Y.forwardRef(function(a,l){var o=a.center,r=o===void 0?[0,0]:o,s=a.zoom,f=s===void 0?1:s,h=a.minZoom,p=h===void 0?1:h,v=a.maxZoom,y=v===void 0?8:v,g=a.translateExtent,x=a.filterZoomEvent,S=a.onMoveStart,w=a.onMove,N=a.onMoveEnd,L=a.className,H=an(a,$S),R=Y.useContext(jn),Z=R.width,D=R.height,U=WS({center:r,filterZoomEvent:x,onMoveStart:S,onMove:w,onMoveEnd:N,scaleExtent:[p,y],translateExtent:g,zoom:f}),Q=U.mapRef,K=U.transformString,W=U.position;return te.createElement(I1,{value:{x:W.x,y:W.y,k:W.k,transformString:K}},te.createElement("g",{ref:Q},te.createElement("rect",{width:Z,height:D,fill:"transparent"}),te.createElement("g",Te({ref:l,transform:K,className:"rsm-zoomable-group ".concat(L)},H))))});P1.displayName="ZoomableGroup";P1.propTypes={center:$.array,zoom:$.number,minZoom:$.number,maxZoom:$.number,translateExtent:$.arrayOf($.array),onMoveStart:$.func,onMove:$.func,onMoveEnd:$.func,className:$.string};var FS=["id","fill","stroke","strokeWidth","className"],bd=Y.forwardRef(function(a,l){var o=a.id,r=o===void 0?"rsm-sphere":o,s=a.fill,f=s===void 0?"transparent":s,h=a.stroke,p=h===void 0?"currentcolor":h,v=a.strokeWidth,y=v===void 0?.5:v,g=a.className,x=g===void 0?"":g,S=an(a,FS),w=Y.useContext(jn),N=w.path,L=Y.useMemo(function(){return N({type:"Sphere"})},[N]);return te.createElement(Y.Fragment,null,te.createElement("defs",null,te.createElement("clipPath",{id:r},te.createElement("path",{d:L}))),te.createElement("path",Te({ref:l,d:L,fill:f,stroke:p,strokeWidth:y,style:{pointerEvents:"none"},className:"rsm-sphere ".concat(x)},S)))});bd.displayName="Sphere";bd.propTypes={id:$.string,fill:$.string,stroke:$.string,strokeWidth:$.number,className:$.string};Y.memo(bd);var IS=["coordinates","children","onMouseEnter","onMouseLeave","onMouseDown","onMouseUp","onFocus","onBlur","style","className"],Sd=Y.forwardRef(function(a,l){var o=a.coordinates,r=a.children,s=a.onMouseEnter,f=a.onMouseLeave,h=a.onMouseDown,p=a.onMouseUp,v=a.onFocus,y=a.onBlur,g=a.style,x=g===void 0?{}:g,S=a.className,w=S===void 0?"":S,N=an(a,IS),L=Y.useContext(jn),H=L.projection,R=Y.useState(!1),Z=de(R,2),D=Z[0],U=Z[1],Q=Y.useState(!1),K=de(Q,2),W=K[0],I=K[1],it=H(o),dt=de(it,2),et=dt[0],ht=dt[1];function Et(J){I(!0),s&&s(J)}function _(J){I(!1),D&&U(!1),f&&f(J)}function z(J){I(!0),v&&v(J)}function j(J){I(!1),D&&U(!1),y&&y(J)}function T(J){U(!0),h&&h(J)}function X(J){U(!1),p&&p(J)}return te.createElement("g",Te({ref:l,transform:"translate(".concat(et,", ").concat(ht,")"),className:"rsm-marker ".concat(w),onMouseEnter:Et,onMouseLeave:_,onFocus:z,onBlur:j,onMouseDown:T,onMouseUp:X,style:x[D||W?D?"pressed":"hover":"default"]},N),r)});Sd.displayName="Marker";Sd.propTypes={coordinates:$.array,children:$.oneOfType([$.node,$.arrayOf($.node)]),onMouseEnter:$.func,onMouseLeave:$.func,onMouseDown:$.func,onMouseUp:$.func,onFocus:$.func,onBlur:$.func,style:$.object,className:$.string};var PS=["from","to","coordinates","stroke","strokeWidth","fill","className"],tv=Y.forwardRef(function(a,l){var o=a.from,r=o===void 0?[0,0]:o,s=a.to,f=s===void 0?[0,0]:s,h=a.coordinates,p=a.stroke,v=p===void 0?"currentcolor":p,y=a.strokeWidth,g=y===void 0?3:y,x=a.fill,S=x===void 0?"transparent":x,w=a.className,N=w===void 0?"":w,L=an(a,PS),H=Y.useContext(jn),R=H.path,Z={type:"LineString",coordinates:h||[r,f]};return te.createElement("path",Te({ref:l,d:R(Z),className:"rsm-line ".concat(N),stroke:v,strokeWidth:g,fill:S},L))});tv.displayName="Line";tv.propTypes={from:$.array,to:$.array,coordinates:$.array,stroke:$.string,strokeWidth:$.number,fill:$.string,className:$.string};var t6=["subject","children","connectorProps","dx","dy","curve","className"],ev=Y.forwardRef(function(a,l){var o=a.subject,r=a.children,s=a.connectorProps,f=a.dx,h=f===void 0?30:f,p=a.dy,v=p===void 0?30:p,y=a.curve,g=y===void 0?0:y,x=a.className,S=x===void 0?"":x,w=an(a,t6),N=Y.useContext(jn),L=N.projection,H=L(o),R=de(H,2),Z=R[0],D=R[1],U=HS(h,v,g);return te.createElement("g",Te({ref:l,transform:"translate(".concat(Z+h,", ").concat(D+v,")"),className:"rsm-annotation ".concat(S)},w),te.createElement("path",Te({d:U,fill:"transparent",stroke:"#000"},s)),r)});ev.displayName="Annotation";ev.propTypes={subject:$.array,children:$.oneOfType([$.node,$.arrayOf($.node)]),dx:$.number,dy:$.number,curve:$.number,connectorProps:$.object,className:$.string};const e6="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json",sf=[{name:"Northern",coordinates:[80.5,9],delay:0},{name:"North Central",coordinates:[80.4,8.35],delay:120},{name:"North Western",coordinates:[79.88,7.85],delay:200},{name:"Eastern",coordinates:[81.2,7.8],delay:290},{name:"Western",coordinates:[79.92,6.92],delay:360},{name:"Central",coordinates:[80.63,7.29],delay:430},{name:"Sabaragamuwa",coordinates:[80.4,6.68],delay:500},{name:"Uva",coordinates:[81.05,6.99],delay:570},{name:"Southern",coordinates:[80.55,6.1],delay:640}],n6=()=>{const a=Y.useRef(null),[l,o]=Y.useState(!1),[r,s]=Y.useState(Array(9).fill(!1));return Y.useEffect(()=>{const f=a.current;if(!f)return;const h=new IntersectionObserver(([p])=>{p.isIntersecting&&(o(!0),h.disconnect())},{threshold:.2});return h.observe(f),()=>h.disconnect()},[]),Y.useEffect(()=>{if(!l)return;const f=sf.map((h,p)=>setTimeout(()=>{s(v=>{const y=[...v];return y[p]=!0,y})},400+h.delay));return()=>f.forEach(clearTimeout)},[l]),d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        .map-section {
          background: #06060f;
          padding: 100px 48px;
          position: relative;
          overflow: hidden;
        }

        .map-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,169,110,0.25), transparent);
        }

        .map-ambient {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 600px; height: 600px;
          background: radial-gradient(ellipse, rgba(232,127,42,0.06) 0%, transparent 65%);
          pointer-events: none;
        }

        .map-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .map-eyebrow {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(201,169,110,0.7);
          margin: 0 0 20px;
        }

        .map-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(34px, 4vw, 56px);
          font-weight: 300;
          color: #ffffff;
          margin: 0 0 20px;
          line-height: 1.12;
        }

        .map-title span {
          background: linear-gradient(135deg, #c9a96e, #e87f2a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .map-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          color: rgba(255,255,255,0.42);
          line-height: 1.75;
          margin: 0 0 48px;
          max-width: 380px;
        }

        .map-province-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px 24px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .map-province-item {
          font-family: 'Outfit', sans-serif;
          font-size: 12px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.5s ease;
        }
        .map-province-item.active { color: rgba(255,255,255,0.68); }

        .map-province-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(232,127,42,0.25);
          flex-shrink: 0;
          transition: background 0.5s ease, box-shadow 0.5s ease;
        }
        .map-province-item.active .map-province-dot {
          background: #e87f2a;
          box-shadow: 0 0 8px rgba(232,127,42,0.6);
        }

        .map-svg-col {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .map-svg-wrap {
          width: 220px;
          filter: drop-shadow(0 0 40px rgba(232,127,42,0.12));
        }

        .map-svg-wrap svg {
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .prov-pulse {
          animation: provPulse 2.5s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        @keyframes provPulse {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50%       { opacity: 0.85; transform: scale(1.55); }
        }

        @media (max-width: 900px) {
          .map-inner { grid-template-columns: 1fr; gap: 48px; }
          .map-svg-col { order: -1; }
          .map-svg-wrap { width: 180px; }
          .map-desc { max-width: 100%; }
        }

        @media (max-width: 600px) {
          .map-section { padding: 64px 20px; }
          .map-province-list { grid-template-columns: 1fr; }
        }
      `}),d.jsxs("section",{className:"map-section",ref:a,children:[d.jsx("div",{className:"map-ambient","aria-hidden":"true"}),d.jsxs("div",{className:"map-inner",children:[d.jsxs("div",{className:"map-text-col",children:[d.jsx("p",{className:"map-eyebrow",children:"Nationwide Reach"}),d.jsxs("h2",{className:"map-title",children:["All ",d.jsx("span",{children:"9 Provinces."}),d.jsx("br",{}),"One Partner."]}),d.jsx("p",{className:"map-desc",children:"From Jaffna in the north to Matara in the south, our field teams operate across every province in Sri Lanka — giving your brand true nationwide coverage."}),d.jsx("ul",{className:"map-province-list",children:sf.map((f,h)=>d.jsxs("li",{className:`map-province-item${r[h]?" active":""}`,children:[d.jsx("span",{className:"map-province-dot"}),f.name]},h))})]}),d.jsx("div",{className:"map-svg-col",children:d.jsx("div",{className:"map-svg-wrap",children:d.jsxs(gd,{projection:"geoMercator",projectionConfig:{scale:3800,center:[80.77,7.875]},width:200,height:280,children:[d.jsx(vd,{geography:e6,children:({geographies:f})=>f.filter(h=>h.id==="144").map(h=>d.jsx(VS,{geography:h,fill:"rgba(255,255,255,0.05)",stroke:"rgba(201,169,110,0.35)",strokeWidth:.8,style:{default:{outline:"none"},hover:{outline:"none"},pressed:{outline:"none"}}},h.rsmKey))}),sf.map((f,h)=>d.jsx(Sd,{coordinates:f.coordinates,children:d.jsxs("g",{style:{opacity:r[h]?1:0,transition:`opacity 0.6s ease ${f.delay}ms`},children:[d.jsx("circle",{r:10,fill:"rgba(232,127,42,0.08)",stroke:"rgba(232,127,42,0.2)",strokeWidth:.8,className:"prov-pulse",style:{animationDelay:`${h*.28}s`}}),d.jsx("circle",{r:3,fill:"#e87f2a",opacity:.9}),d.jsx("circle",{r:1.5,fill:"#f5c878"})]})},h))]})})})]})]})]})},a6=["Home","Projects","About"],i6=["Brand Activations","Mall Activations","Roadshows & SMMT","Sampling Campaigns","Selling Operations","Corporate Events","Government Activations","Promoter Deployment"],l6=()=>{const a=new Date().getFullYear(),l=o=>{document.querySelector(`[data-section="${o}"]`)?.scrollIntoView({behavior:"smooth"})};return d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        .site-footer {
          background: #06060f;
          padding: 80px 48px 0;
          position: relative;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        .site-footer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent);
        }

        .footer-ambient {
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 300px;
          background: radial-gradient(ellipse at 50% 100%, rgba(232,127,42,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .footer-main {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.8fr 1fr 1.4fr 1.4fr;
          gap: 64px;
          padding-bottom: 64px;
          position: relative;
          z-index: 1;
        }

        /* Column 1 — Brand */
        .footer-brand-logo {
          height: 36px;
          width: auto;
          object-fit: contain;
          display: block;
          margin-bottom: 20px;
          filter: brightness(0) invert(1);
          opacity: 0.85;
        }

        .footer-brand-tagline {
          font-size: 13px;
          color: rgba(255,255,255,0.38);
          line-height: 1.7;
          max-width: 240px;
          margin: 0 0 28px;
        }

        .footer-socials {
          display: flex;
          gap: 12px;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.4);
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.3s ease, color 0.3s ease, background 0.3s ease;
        }
        .footer-social-btn:hover {
          border-color: rgba(201,169,110,0.45);
          color: rgba(201,169,110,0.9);
          background: rgba(201,169,110,0.05);
        }

        /* Column headers */
        .footer-col-title {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          margin: 0 0 24px;
        }

        /* Nav links */
        .footer-nav {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-nav a,
        .footer-nav button {
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: color 0.25s ease;
          text-align: left;
        }
        .footer-nav a:hover,
        .footer-nav button:hover { color: rgba(201,169,110,0.9); }

        /* Services list */
        .footer-services {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-services li {
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          line-height: 1.5;
        }

        /* Contact */
        .footer-contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .footer-contact-icon {
          color: rgba(201,169,110,0.55);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .footer-contact-text {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          line-height: 1.6;
        }

        .footer-contact-text a {
          color: inherit;
          text-decoration: none;
          transition: color 0.25s ease;
        }
        .footer-contact-text a:hover { color: rgba(201,169,110,0.85); }

        /* Bottom bar */
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 20px 0;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }

        .footer-copy {
          font-size: 11.5px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.5px;
        }

        .footer-copy span {
          color: rgba(201,169,110,0.45);
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }

        .footer-bottom-links a {
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.18);
          text-decoration: none;
          transition: color 0.25s ease;
        }
        .footer-bottom-links a:hover { color: rgba(255,255,255,0.45); }

        @media (max-width: 1024px) {
          .footer-main { grid-template-columns: 1fr 1fr; gap: 48px; }
          .site-footer { padding: 64px 32px 0; }
        }

        @media (max-width: 600px) {
          .footer-main { grid-template-columns: 1fr; gap: 40px; }
          .site-footer { padding: 48px 20px 0; }
          .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
          .footer-bottom-links { gap: 16px; }
        }
      `}),d.jsxs("footer",{className:"site-footer",children:[d.jsx("div",{className:"footer-ambient","aria-hidden":"true"}),d.jsxs("div",{className:"footer-main",children:[d.jsxs("div",{children:[d.jsx("img",{src:kg,alt:"Strabso",className:"footer-brand-logo"}),d.jsx("p",{className:"footer-brand-tagline",children:"Sri Lanka's premier on-ground brand activation agency — connecting brands with consumers nationwide since 2020."}),d.jsxs("div",{className:"footer-socials",children:[d.jsx("a",{href:"#",className:"footer-social-btn","aria-label":"Facebook",children:d.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:d.jsx("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})}),d.jsx("a",{href:"#",className:"footer-social-btn","aria-label":"Instagram",children:d.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[d.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),d.jsx("circle",{cx:"12",cy:"12",r:"4"}),d.jsx("circle",{cx:"17.5",cy:"6.5",r:"0.8",fill:"currentColor"})]})}),d.jsx("a",{href:"#",className:"footer-social-btn","aria-label":"LinkedIn",children:d.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:[d.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"}),d.jsx("circle",{cx:"4",cy:"4",r:"2"})]})})]})]}),d.jsxs("div",{children:[d.jsx("p",{className:"footer-col-title",children:"Navigation"}),d.jsx("ul",{className:"footer-nav",children:a6.map(o=>d.jsx("li",{children:d.jsx("button",{onClick:()=>l(o),children:o})},o))})]}),d.jsxs("div",{children:[d.jsx("p",{className:"footer-col-title",children:"Our Services"}),d.jsx("ul",{className:"footer-services",children:i6.map(o=>d.jsx("li",{children:o},o))})]}),d.jsxs("div",{children:[d.jsx("p",{className:"footer-col-title",children:"Contact"}),d.jsxs("ul",{className:"footer-contact-list",children:[d.jsxs("li",{className:"footer-contact-item",children:[d.jsx("span",{className:"footer-contact-icon",children:d.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:d.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.74 19.79 19.79 0 01.01 3.1 2 2 0 012 .92h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"})})}),d.jsx("span",{className:"footer-contact-text",children:d.jsx("a",{href:"tel:+94777188485",children:"0777 188 485"})})]}),d.jsxs("li",{className:"footer-contact-item",children:[d.jsx("span",{className:"footer-contact-icon",children:d.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),d.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),d.jsx("span",{className:"footer-contact-text",children:d.jsx("a",{href:"mailto:info@strabso.lk",children:"info@strabso.lk"})})]}),d.jsxs("li",{className:"footer-contact-item",children:[d.jsx("span",{className:"footer-contact-icon",children:d.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),d.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),d.jsx("span",{className:"footer-contact-text",children:"Colombo, Sri Lanka"})]})]})]})]}),d.jsxs("div",{className:"footer-bottom",children:[d.jsxs("p",{className:"footer-copy",children:["© ",a," ",d.jsx("span",{children:"Strabso"}),". All rights reserved."]}),d.jsxs("div",{className:"footer-bottom-links",children:[d.jsx("a",{href:"#",children:"Privacy Policy"}),d.jsx("a",{href:"#",children:"Terms of Service"})]})]})]})]})},Og=80,Dg=20,r6=()=>{const[a,l]=Y.useState("Home"),o=Y.useRef(null),r=Y.useRef(null),s=Y.useRef(null),f=Y.useRef(null),h=Y.useMemo(()=>({Home:o,Projects:r,About:s,Contact:f}),[]),p=v=>{const y=h[v];if(y&&y.current){const x=y.current.getBoundingClientRect().top+window.pageYOffset-Og-Dg;window.scrollTo({top:x,behavior:"smooth"})}};return Y.useEffect(()=>{const v=()=>{const y=window.scrollY+Og+Dg+100,g=Object.entries(h);for(let x=g.length-1;x>=0;x--){const[S,w]=g[x];if(w.current){const N=w.current.offsetTop;if(y>=N){l(S);break}}}};return window.addEventListener("scroll",v),v(),()=>window.removeEventListener("scroll",v)},[h]),d.jsxs(d.Fragment,{children:[d.jsx(Hy,{activeTab:a,onTabClick:p}),d.jsxs("main",{className:"sections-container",children:[d.jsx("section",{ref:o,"data-section":"Home",className:"full-section",children:d.jsx(wx,{})}),d.jsx("section",{ref:r,"data-section":"Projects",className:"full-section",children:d.jsx(Ax,{})}),d.jsx("section",{ref:s,"data-section":"About",className:"full-section",children:d.jsx(_x,{})}),d.jsx("section",{ref:f,"data-section":"Contact",className:"full-section",children:d.jsx(Tx,{})})]}),d.jsx(n6,{}),d.jsx(l6,{})]})};function o6(){return d.jsx(Uy,{children:d.jsx(Ay,{basename:"/Strabso",children:d.jsx("div",{className:"App",children:d.jsx(_y,{children:d.jsx(Ty,{path:"/",element:d.jsx(r6,{})})})})})})}Ly.createRoot(document.getElementById("root")).render(d.jsx(Y.StrictMode,{children:d.jsx(o6,{})}));
