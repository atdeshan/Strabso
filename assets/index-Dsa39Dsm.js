import{r as Ry,a as Ly,b as T,g as By,R as ce,B as Uy,c as Hy,d as qy}from"./react-vendor-D5DiMwbd.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function o(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(s){if(s.ep)return;s.ep=!0;const d=o(s);fetch(s.href,d)}})();var $s={exports:{}},Gl={};var Mp;function Yy(){if(Mp)return Gl;Mp=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(r,s,d){var h=null;if(d!==void 0&&(h=""+d),s.key!==void 0&&(h=""+s.key),"key"in s){d={};for(var p in s)p!=="key"&&(d[p]=s[p])}else d=s;return s=d.ref,{$$typeof:a,type:r,key:h,ref:s!==void 0?s:null,props:d}}return Gl.Fragment=l,Gl.jsx=o,Gl.jsxs=o,Gl}var Ep;function Gy(){return Ep||(Ep=1,$s.exports=Yy()),$s.exports}var f=Gy(),Fs={exports:{}},Xl={},Is={exports:{}},Ps={};var zp;function Xy(){return zp||(zp=1,(function(a){function l(j,C){var G=j.length;j.push(C);t:for(;0<G;){var J=G-1>>>1,F=j[J];if(0<s(F,C))j[J]=C,j[G]=F,G=J;else break t}}function o(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var C=j[0],G=j.pop();if(G!==C){j[0]=G;t:for(var J=0,F=j.length,ct=F>>>1;J<ct;){var ut=2*(J+1)-1,ot=j[ut],gt=ut+1,Mt=j[gt];if(0>s(ot,G))gt<F&&0>s(Mt,ot)?(j[J]=Mt,j[gt]=G,J=gt):(j[J]=ot,j[ut]=G,J=ut);else if(gt<F&&0>s(Mt,G))j[J]=Mt,j[gt]=G,J=gt;else break t}}return C}function s(j,C){var G=j.sortIndex-C.sortIndex;return G!==0?G:j.id-C.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var h=Date,p=h.now();a.unstable_now=function(){return h.now()-p}}var v=[],y=[],g=1,x=null,S=3,w=!1,N=!1,B=!1,q=!1,L=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(j){for(var C=o(y);C!==null;){if(C.callback===null)r(y);else if(C.startTime<=j)r(y),C.sortIndex=C.expirationTime,l(v,C);else break;C=o(y)}}function Q(j){if(B=!1,U(j),!N)if(o(v)!==null)N=!0,K||(K=!0,tt());else{var C=o(y);C!==null&&E(Q,C.startTime-j)}}var K=!1,W=-1,I=5,at=-1;function ht(){return q?!0:!(a.unstable_now()-at<I)}function P(){if(q=!1,K){var j=a.unstable_now();at=j;var C=!0;try{t:{N=!1,B&&(B=!1,Z(W),W=-1),w=!0;var G=S;try{e:{for(U(j),x=o(v);x!==null&&!(x.expirationTime>j&&ht());){var J=x.callback;if(typeof J=="function"){x.callback=null,S=x.priorityLevel;var F=J(x.expirationTime<=j);if(j=a.unstable_now(),typeof F=="function"){x.callback=F,U(j),C=!0;break e}x===o(v)&&r(v),U(j)}else r(v);x=o(v)}if(x!==null)C=!0;else{var ct=o(y);ct!==null&&E(Q,ct.startTime-j),C=!1}}break t}finally{x=null,S=G,w=!1}C=void 0}}finally{C?tt():K=!1}}}var tt;if(typeof O=="function")tt=function(){O(P)};else if(typeof MessageChannel<"u"){var jt=new MessageChannel,A=jt.port2;jt.port1.onmessage=P,tt=function(){A.postMessage(null)}}else tt=function(){L(P,0)};function E(j,C){W=L(function(){j(a.unstable_now())},C)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(j){j.callback=null},a.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<j?Math.floor(1e3/j):5},a.unstable_getCurrentPriorityLevel=function(){return S},a.unstable_next=function(j){switch(S){case 1:case 2:case 3:var C=3;break;default:C=S}var G=S;S=C;try{return j()}finally{S=G}},a.unstable_requestPaint=function(){q=!0},a.unstable_runWithPriority=function(j,C){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var G=S;S=j;try{return C()}finally{S=G}},a.unstable_scheduleCallback=function(j,C,G){var J=a.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?J+G:J):G=J,j){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=G+F,j={id:g++,callback:C,priorityLevel:j,startTime:G,expirationTime:F,sortIndex:-1},G>J?(j.sortIndex=G,l(y,j),o(v)===null&&j===o(y)&&(B?(Z(W),W=-1):B=!0,E(Q,G-J))):(j.sortIndex=F,l(v,j),N||w||(N=!0,K||(K=!0,tt()))),j},a.unstable_shouldYield=ht,a.unstable_wrapCallback=function(j){var C=S;return function(){var G=S;S=C;try{return j.apply(this,arguments)}finally{S=G}}}})(Ps)),Ps}var Np;function Vy(){return Np||(Np=1,Is.exports=Xy()),Is.exports}var Ap;function Zy(){if(Ap)return Xl;Ap=1;var a=Vy(),l=Ry(),o=Ly();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function h(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function p(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function v(t){if(d(t)!==t)throw Error(r(188))}function y(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(r(188));return e!==t?null:t}for(var n=t,i=e;;){var c=n.return;if(c===null)break;var u=c.alternate;if(u===null){if(i=c.return,i!==null){n=i;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===n)return v(c),t;if(u===i)return v(c),e;u=u.sibling}throw Error(r(188))}if(n.return!==i.return)n=c,i=u;else{for(var m=!1,b=c.child;b;){if(b===n){m=!0,n=c,i=u;break}if(b===i){m=!0,i=c,n=u;break}b=b.sibling}if(!m){for(b=u.child;b;){if(b===n){m=!0,n=u,i=c;break}if(b===i){m=!0,i=u,n=c;break}b=b.sibling}if(!m)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?t:e}function g(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=g(t),e!==null)return e;t=t.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),O=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),at=Symbol.for("react.activity"),ht=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function tt(t){return t===null||typeof t!="object"?null:(t=P&&t[P]||t["@@iterator"],typeof t=="function"?t:null)}var jt=Symbol.for("react.client.reference");function A(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===jt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case B:return"Fragment";case L:return"Profiler";case q:return"StrictMode";case Q:return"Suspense";case K:return"SuspenseList";case at:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case N:return"Portal";case O:return t.displayName||"Context";case Z:return(t._context.displayName||"Context")+".Consumer";case U:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case W:return e=t.displayName||null,e!==null?e:A(t.type)||"Memo";case I:e=t._payload,t=t._init;try{return A(t(e))}catch{}}return null}var E=Array.isArray,j=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},J=[],F=-1;function ct(t){return{current:t}}function ut(t){0>F||(t.current=J[F],J[F]=null,F--)}function ot(t,e){F++,J[F]=t.current,t.current=e}var gt=ct(null),Mt=ct(null),Kt=ct(null),ae=ct(null);function ue(t,e){switch(ot(Kt,e),ot(Mt,t),ot(gt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Km(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Km(e),t=Jm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ut(gt),ot(gt,t)}function Rt(){ut(gt),ut(Mt),ut(Kt)}function _e(t){t.memoizedState!==null&&ot(ae,t);var e=gt.current,n=Jm(e,t.type);e!==n&&(ot(Mt,t),ot(gt,n))}function it(t){Mt.current===t&&(ut(gt),ut(Mt)),ae.current===t&&(ut(ae),Ul._currentValue=G)}var vt,_t;function Tt(t){if(vt===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vt=e&&e[1]||"",_t=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vt+t+_t}var kt=!1;function Vt(t,e){if(!t||kt)return"";kt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(H){var R=H}Reflect.construct(t,[],V)}else{try{V.call()}catch(H){R=H}t.call(V.prototype)}}else{try{throw Error()}catch(H){R=H}(V=t())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(H){if(H&&R&&typeof H.stack=="string")return[H.stack,R.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),m=u[0],b=u[1];if(m&&b){var M=m.split(`
`),D=b.split(`
`);for(c=i=0;i<M.length&&!M[i].includes("DetermineComponentFrameRoot");)i++;for(;c<D.length&&!D[c].includes("DetermineComponentFrameRoot");)c++;if(i===M.length||c===D.length)for(i=M.length-1,c=D.length-1;1<=i&&0<=c&&M[i]!==D[c];)c--;for(;1<=i&&0<=c;i--,c--)if(M[i]!==D[c]){if(i!==1||c!==1)do if(i--,c--,0>c||M[i]!==D[c]){var Y=`
`+M[i].replace(" at new "," at ");return t.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",t.displayName)),Y}while(1<=i&&0<=c);break}}}finally{kt=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Tt(n):""}function Yt(t,e){switch(t.tag){case 26:case 27:case 5:return Tt(t.type);case 16:return Tt("Lazy");case 13:return t.child!==e&&e!==null?Tt("Suspense Fallback"):Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 15:return Vt(t.type,!1);case 11:return Vt(t.type.render,!1);case 1:return Vt(t.type,!0);case 31:return Tt("Activity");default:return""}}function Se(t){try{var e="",n=null;do e+=Yt(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Cn=Object.prototype.hasOwnProperty,Lc=a.unstable_scheduleCallback,Bc=a.unstable_cancelCallback,hv=a.unstable_shouldYield,mv=a.unstable_requestPaint,qe=a.unstable_now,pv=a.unstable_getCurrentPriorityLevel,Ed=a.unstable_ImmediatePriority,zd=a.unstable_UserBlockingPriority,wr=a.unstable_NormalPriority,gv=a.unstable_LowPriority,Nd=a.unstable_IdlePriority,vv=a.log,yv=a.unstable_setDisableYieldValue,$i=null,Ye=null;function aa(t){if(typeof vv=="function"&&yv(t),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode($i,t)}catch{}}var Ge=Math.clz32?Math.clz32:Sv,xv=Math.log,bv=Math.LN2;function Sv(t){return t>>>=0,t===0?32:31-(xv(t)/bv|0)|0}var jr=256,Mr=262144,Er=4194304;function Ta(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function zr(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var c=0,u=t.suspendedLanes,m=t.pingedLanes;t=t.warmLanes;var b=i&134217727;return b!==0?(i=b&~u,i!==0?c=Ta(i):(m&=b,m!==0?c=Ta(m):n||(n=b&~t,n!==0&&(c=Ta(n))))):(b=i&~u,b!==0?c=Ta(b):m!==0?c=Ta(m):n||(n=i&~t,n!==0&&(c=Ta(n)))),c===0?0:e!==0&&e!==c&&(e&u)===0&&(u=c&-c,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:c}function Fi(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function wv(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ad(){var t=Er;return Er<<=1,(Er&62914560)===0&&(Er=4194304),t}function Uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ii(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function jv(t,e,n,i,c,u){var m=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var b=t.entanglements,M=t.expirationTimes,D=t.hiddenUpdates;for(n=m&~n;0<n;){var Y=31-Ge(n),V=1<<Y;b[Y]=0,M[Y]=-1;var R=D[Y];if(R!==null)for(D[Y]=null,Y=0;Y<R.length;Y++){var H=R[Y];H!==null&&(H.lane&=-536870913)}n&=~V}i!==0&&_d(t,i,0),u!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=u&~(m&~e))}function _d(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Ge(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function Td(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ge(n),c=1<<i;c&e|t[i]&e&&(t[i]|=e),n&=~c}}function Cd(t,e){var n=e&-e;return n=(n&42)!==0?1:Hc(n),(n&(t.suspendedLanes|e))!==0?0:n}function Hc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function qc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Od(){var t=C.p;return t!==0?t:(t=window.event,t===void 0?32:vp(t.type))}function kd(t,e){var n=C.p;try{return C.p=t,e()}finally{C.p=n}}var ia=Math.random().toString(36).slice(2),me="__reactFiber$"+ia,Te="__reactProps$"+ia,ti="__reactContainer$"+ia,Yc="__reactEvents$"+ia,Mv="__reactListeners$"+ia,Ev="__reactHandles$"+ia,Dd="__reactResources$"+ia,Pi="__reactMarker$"+ia;function Gc(t){delete t[me],delete t[Te],delete t[Yc],delete t[Mv],delete t[Ev]}function ei(t){var e=t[me];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ti]||n[me]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ep(t);t!==null;){if(n=t[me])return n;t=ep(t)}return e}t=n,n=t.parentNode}return null}function ni(t){if(t=t[me]||t[ti]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function tl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function ai(t){var e=t[Dd];return e||(e=t[Dd]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function fe(t){t[Pi]=!0}var Rd=new Set,Ld={};function Ca(t,e){ii(t,e),ii(t+"Capture",e)}function ii(t,e){for(Ld[t]=e,t=0;t<e.length;t++)Rd.add(e[t])}var zv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bd={},Ud={};function Nv(t){return Cn.call(Ud,t)?!0:Cn.call(Bd,t)?!1:zv.test(t)?Ud[t]=!0:(Bd[t]=!0,!1)}function Nr(t,e,n){if(Nv(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Ar(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function On(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function Pe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Av(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,u=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return c.call(this)},set:function(m){n=""+m,u.call(this,m)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xc(t){if(!t._valueTracker){var e=Hd(t)?"checked":"value";t._valueTracker=Av(t,e,""+t[e])}}function qd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Hd(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function _r(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var _v=/[\n"\\]/g;function tn(t){return t.replace(_v,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Vc(t,e,n,i,c,u,m,b){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),e!=null?m==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Pe(e)):t.value!==""+Pe(e)&&(t.value=""+Pe(e)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),e!=null?Zc(t,m,Pe(e)):n!=null?Zc(t,m,Pe(n)):i!=null&&t.removeAttribute("value"),c==null&&u!=null&&(t.defaultChecked=!!u),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Pe(b):t.removeAttribute("name")}function Yd(t,e,n,i,c,u,m,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){Xc(t);return}n=n!=null?""+Pe(n):"",e=e!=null?""+Pe(e):n,b||e===t.value||(t.value=e),t.defaultValue=e}i=i??c,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=b?t.checked:!!i,t.defaultChecked=!!i,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m),Xc(t)}function Zc(t,e,n){e==="number"&&_r(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function li(t,e,n,i){if(t=t.options,e){e={};for(var c=0;c<n.length;c++)e["$"+n[c]]=!0;for(n=0;n<t.length;n++)c=e.hasOwnProperty("$"+t[n].value),t[n].selected!==c&&(t[n].selected=c),c&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Pe(n),e=null,c=0;c<t.length;c++){if(t[c].value===n){t[c].selected=!0,i&&(t[c].defaultSelected=!0);return}e!==null||t[c].disabled||(e=t[c])}e!==null&&(e.selected=!0)}}function Gd(t,e,n){if(e!=null&&(e=""+Pe(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Pe(n):""}function Xd(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(r(92));if(E(i)){if(1<i.length)throw Error(r(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=Pe(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),Xc(t)}function ri(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Tv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vd(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||Tv.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Zd(t,e,n){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var c in e)i=e[c],e.hasOwnProperty(c)&&n[c]!==i&&Vd(t,c,i)}else for(var u in e)e.hasOwnProperty(u)&&Vd(t,u,e[u])}function Qc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ov=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tr(t){return Ov.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function kn(){}var Kc=null;function Jc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oi=null,ci=null;function Qd(t){var e=ni(t);if(e&&(t=e.stateNode)){var n=t[Te]||null;t:switch(t=e.stateNode,e.type){case"input":if(Vc(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+tn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var c=i[Te]||null;if(!c)throw Error(r(90));Vc(i,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&qd(i)}break t;case"textarea":Gd(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&li(t,!!n.multiple,e,!1)}}}var Wc=!1;function Kd(t,e,n){if(Wc)return t(e,n);Wc=!0;try{var i=t(e);return i}finally{if(Wc=!1,(oi!==null||ci!==null)&&(yo(),oi&&(e=oi,t=ci,ci=oi=null,Qd(e),t)))for(e=0;e<t.length;e++)Qd(t[e])}}function el(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Te]||null;if(i===null)return null;n=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(r(231,e,typeof n));return n}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$c=!1;if(Dn)try{var nl={};Object.defineProperty(nl,"passive",{get:function(){$c=!0}}),window.addEventListener("test",nl,nl),window.removeEventListener("test",nl,nl)}catch{$c=!1}var la=null,Fc=null,Cr=null;function Jd(){if(Cr)return Cr;var t,e=Fc,n=e.length,i,c="value"in la?la.value:la.textContent,u=c.length;for(t=0;t<n&&e[t]===c[t];t++);var m=n-t;for(i=1;i<=m&&e[n-i]===c[u-i];i++);return Cr=c.slice(t,1<i?1-i:void 0)}function Or(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function kr(){return!0}function Wd(){return!1}function Ce(t){function e(n,i,c,u,m){this._reactName=n,this._targetInst=c,this.type=i,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(n=t[b],this[b]=n?n(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?kr:Wd,this.isPropagationStopped=Wd,this}return x(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),e}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dr=Ce(Oa),al=x({},Oa,{view:0,detail:0}),kv=Ce(al),Ic,Pc,il,Rr=x({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==il&&(il&&t.type==="mousemove"?(Ic=t.screenX-il.screenX,Pc=t.screenY-il.screenY):Pc=Ic=0,il=t),Ic)},movementY:function(t){return"movementY"in t?t.movementY:Pc}}),$d=Ce(Rr),Dv=x({},Rr,{dataTransfer:0}),Rv=Ce(Dv),Lv=x({},al,{relatedTarget:0}),tu=Ce(Lv),Bv=x({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),Uv=Ce(Bv),Hv=x({},Oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qv=Ce(Hv),Yv=x({},Oa,{data:0}),Fd=Ce(Yv),Gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Vv[t])?!!e[t]:!1}function eu(){return Zv}var Qv=x({},al,{key:function(t){if(t.key){var e=Gv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Or(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(t){return t.type==="keypress"?Or(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Or(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Kv=Ce(Qv),Jv=x({},Rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Id=Ce(Jv),Wv=x({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),$v=Ce(Wv),Fv=x({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iv=Ce(Fv),Pv=x({},Rr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),t2=Ce(Pv),e2=x({},Oa,{newState:0,oldState:0}),n2=Ce(e2),a2=[9,13,27,32],nu=Dn&&"CompositionEvent"in window,ll=null;Dn&&"documentMode"in document&&(ll=document.documentMode);var i2=Dn&&"TextEvent"in window&&!ll,Pd=Dn&&(!nu||ll&&8<ll&&11>=ll),t0=" ",e0=!1;function n0(t,e){switch(t){case"keyup":return a2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function a0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ui=!1;function l2(t,e){switch(t){case"compositionend":return a0(e);case"keypress":return e.which!==32?null:(e0=!0,t0);case"textInput":return t=e.data,t===t0&&e0?null:t;default:return null}}function r2(t,e){if(ui)return t==="compositionend"||!nu&&n0(t,e)?(t=Jd(),Cr=Fc=la=null,ui=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pd&&e.locale!=="ko"?null:e.data;default:return null}}var o2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function i0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!o2[t.type]:e==="textarea"}function l0(t,e,n,i){oi?ci?ci.push(i):ci=[i]:oi=i,e=Eo(e,"onChange"),0<e.length&&(n=new Dr("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var rl=null,ol=null;function c2(t){Ym(t,0)}function Lr(t){var e=tl(t);if(qd(e))return t}function r0(t,e){if(t==="change")return e}var o0=!1;if(Dn){var au;if(Dn){var iu="oninput"in document;if(!iu){var c0=document.createElement("div");c0.setAttribute("oninput","return;"),iu=typeof c0.oninput=="function"}au=iu}else au=!1;o0=au&&(!document.documentMode||9<document.documentMode)}function u0(){rl&&(rl.detachEvent("onpropertychange",s0),ol=rl=null)}function s0(t){if(t.propertyName==="value"&&Lr(ol)){var e=[];l0(e,ol,t,Jc(t)),Kd(c2,e)}}function u2(t,e,n){t==="focusin"?(u0(),rl=e,ol=n,rl.attachEvent("onpropertychange",s0)):t==="focusout"&&u0()}function s2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Lr(ol)}function f2(t,e){if(t==="click")return Lr(e)}function d2(t,e){if(t==="input"||t==="change")return Lr(e)}function h2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xe=typeof Object.is=="function"?Object.is:h2;function cl(t,e){if(Xe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var c=n[i];if(!Cn.call(e,c)||!Xe(t[c],e[c]))return!1}return!0}function f0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function d0(t,e){var n=f0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=f0(n)}}function h0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?h0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function m0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=_r(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_r(t.document)}return e}function lu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var m2=Dn&&"documentMode"in document&&11>=document.documentMode,si=null,ru=null,ul=null,ou=!1;function p0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ou||si==null||si!==_r(i)||(i=si,"selectionStart"in i&&lu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ul&&cl(ul,i)||(ul=i,i=Eo(ru,"onSelect"),0<i.length&&(e=new Dr("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=si)))}function ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fi={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionrun:ka("Transition","TransitionRun"),transitionstart:ka("Transition","TransitionStart"),transitioncancel:ka("Transition","TransitionCancel"),transitionend:ka("Transition","TransitionEnd")},cu={},g0={};Dn&&(g0=document.createElement("div").style,"AnimationEvent"in window||(delete fi.animationend.animation,delete fi.animationiteration.animation,delete fi.animationstart.animation),"TransitionEvent"in window||delete fi.transitionend.transition);function Da(t){if(cu[t])return cu[t];if(!fi[t])return t;var e=fi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in g0)return cu[t]=e[n];return t}var v0=Da("animationend"),y0=Da("animationiteration"),x0=Da("animationstart"),p2=Da("transitionrun"),g2=Da("transitionstart"),v2=Da("transitioncancel"),b0=Da("transitionend"),S0=new Map,uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uu.push("scrollEnd");function hn(t,e){S0.set(t,e),Ca(e,[t])}var Br=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},en=[],di=0,su=0;function Ur(){for(var t=di,e=su=di=0;e<t;){var n=en[e];en[e++]=null;var i=en[e];en[e++]=null;var c=en[e];en[e++]=null;var u=en[e];if(en[e++]=null,i!==null&&c!==null){var m=i.pending;m===null?c.next=c:(c.next=m.next,m.next=c),i.pending=c}u!==0&&w0(n,c,u)}}function Hr(t,e,n,i){en[di++]=t,en[di++]=e,en[di++]=n,en[di++]=i,su|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function fu(t,e,n,i){return Hr(t,e,n,i),qr(t)}function Ra(t,e){return Hr(t,null,null,e),qr(t)}function w0(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var c=!1,u=t.return;u!==null;)u.childLanes|=n,i=u.alternate,i!==null&&(i.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(c=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,c&&e!==null&&(c=31-Ge(n),t=u.hiddenUpdates,i=t[c],i===null?t[c]=[e]:i.push(e),e.lane=n|536870912),u):null}function qr(t){if(50<Cl)throw Cl=0,bs=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var hi={};function y2(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(t,e,n,i){return new y2(t,e,n,i)}function du(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Rn(t,e){var n=t.alternate;return n===null?(n=Ve(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function j0(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Yr(t,e,n,i,c,u){var m=0;if(i=t,typeof t=="function")du(t)&&(m=1);else if(typeof t=="string")m=jy(t,n,gt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case at:return t=Ve(31,n,e,c),t.elementType=at,t.lanes=u,t;case B:return La(n.children,c,u,e);case q:m=8,c|=24;break;case L:return t=Ve(12,n,e,c|2),t.elementType=L,t.lanes=u,t;case Q:return t=Ve(13,n,e,c),t.elementType=Q,t.lanes=u,t;case K:return t=Ve(19,n,e,c),t.elementType=K,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:m=10;break t;case Z:m=9;break t;case U:m=11;break t;case W:m=14;break t;case I:m=16,i=null;break t}m=29,n=Error(r(130,t===null?"null":typeof t,"")),i=null}return e=Ve(m,n,e,c),e.elementType=t,e.type=i,e.lanes=u,e}function La(t,e,n,i){return t=Ve(7,t,i,e),t.lanes=n,t}function hu(t,e,n){return t=Ve(6,t,null,e),t.lanes=n,t}function M0(t){var e=Ve(18,null,null,0);return e.stateNode=t,e}function mu(t,e,n){return e=Ve(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var E0=new WeakMap;function nn(t,e){if(typeof t=="object"&&t!==null){var n=E0.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Se(e)},E0.set(t,e),e)}return{value:t,source:e,stack:Se(e)}}var mi=[],pi=0,Gr=null,sl=0,an=[],ln=0,ra=null,xn=1,bn="";function Ln(t,e){mi[pi++]=sl,mi[pi++]=Gr,Gr=t,sl=e}function z0(t,e,n){an[ln++]=xn,an[ln++]=bn,an[ln++]=ra,ra=t;var i=xn;t=bn;var c=32-Ge(i)-1;i&=~(1<<c),n+=1;var u=32-Ge(e)+c;if(30<u){var m=c-c%5;u=(i&(1<<m)-1).toString(32),i>>=m,c-=m,xn=1<<32-Ge(e)+c|n<<c|i,bn=u+t}else xn=1<<u|n<<c|i,bn=t}function pu(t){t.return!==null&&(Ln(t,1),z0(t,1,0))}function gu(t){for(;t===Gr;)Gr=mi[--pi],mi[pi]=null,sl=mi[--pi],mi[pi]=null;for(;t===ra;)ra=an[--ln],an[ln]=null,bn=an[--ln],an[ln]=null,xn=an[--ln],an[ln]=null}function N0(t,e){an[ln++]=xn,an[ln++]=bn,an[ln++]=ra,xn=e.id,bn=e.overflow,ra=t}var pe=null,Zt=null,Nt=!1,oa=null,rn=!1,vu=Error(r(519));function ca(t){var e=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fl(nn(e,t)),vu}function A0(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[me]=t,e[Te]=i,n){case"dialog":wt("cancel",e),wt("close",e);break;case"iframe":case"object":case"embed":wt("load",e);break;case"video":case"audio":for(n=0;n<kl.length;n++)wt(kl[n],e);break;case"source":wt("error",e);break;case"img":case"image":case"link":wt("error",e),wt("load",e);break;case"details":wt("toggle",e);break;case"input":wt("invalid",e),Yd(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":wt("invalid",e);break;case"textarea":wt("invalid",e),Xd(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||Zm(e.textContent,n)?(i.popover!=null&&(wt("beforetoggle",e),wt("toggle",e)),i.onScroll!=null&&wt("scroll",e),i.onScrollEnd!=null&&wt("scrollend",e),i.onClick!=null&&(e.onclick=kn),e=!0):e=!1,e||ca(t,!0)}function _0(t){for(pe=t.return;pe;)switch(pe.tag){case 5:case 31:case 13:rn=!1;return;case 27:case 3:rn=!0;return;default:pe=pe.return}}function gi(t){if(t!==pe)return!1;if(!Nt)return _0(t),Nt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Rs(t.type,t.memoizedProps)),n=!n),n&&Zt&&ca(t),_0(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Zt=tp(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Zt=tp(t)}else e===27?(e=Zt,wa(t.type)?(t=qs,qs=null,Zt=t):Zt=e):Zt=pe?cn(t.stateNode.nextSibling):null;return!0}function Ba(){Zt=pe=null,Nt=!1}function yu(){var t=oa;return t!==null&&(Re===null?Re=t:Re.push.apply(Re,t),oa=null),t}function fl(t){oa===null?oa=[t]:oa.push(t)}var xu=ct(null),Ua=null,Bn=null;function ua(t,e,n){ot(xu,e._currentValue),e._currentValue=n}function Un(t){t._currentValue=xu.current,ut(xu)}function bu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Su(t,e,n,i){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var u=c.dependencies;if(u!==null){var m=c.child;u=u.firstContext;t:for(;u!==null;){var b=u;u=c;for(var M=0;M<e.length;M++)if(b.context===e[M]){u.lanes|=n,b=u.alternate,b!==null&&(b.lanes|=n),bu(u.return,n,t),i||(m=null);break t}u=b.next}}else if(c.tag===18){if(m=c.return,m===null)throw Error(r(341));m.lanes|=n,u=m.alternate,u!==null&&(u.lanes|=n),bu(m,n,t),m=null}else m=c.child;if(m!==null)m.return=c;else for(m=c;m!==null;){if(m===t){m=null;break}if(c=m.sibling,c!==null){c.return=m.return,m=c;break}m=m.return}c=m}}function vi(t,e,n,i){t=null;for(var c=e,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var m=c.alternate;if(m===null)throw Error(r(387));if(m=m.memoizedProps,m!==null){var b=c.type;Xe(c.pendingProps.value,m.value)||(t!==null?t.push(b):t=[b])}}else if(c===ae.current){if(m=c.alternate,m===null)throw Error(r(387));m.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Ul):t=[Ul])}c=c.return}t!==null&&Su(e,t,n,i),e.flags|=262144}function Xr(t){for(t=t.firstContext;t!==null;){if(!Xe(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ha(t){Ua=t,Bn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ge(t){return T0(Ua,t)}function Vr(t,e){return Ua===null&&Ha(t),T0(t,e)}function T0(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Bn===null){if(t===null)throw Error(r(308));Bn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Bn=Bn.next=e;return n}var x2=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},b2=a.unstable_scheduleCallback,S2=a.unstable_NormalPriority,ie={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wu(){return{controller:new x2,data:new Map,refCount:0}}function dl(t){t.refCount--,t.refCount===0&&b2(S2,function(){t.controller.abort()})}var hl=null,ju=0,yi=0,xi=null;function w2(t,e){if(hl===null){var n=hl=[];ju=0,yi=zs(),xi={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ju++,e.then(C0,C0),e}function C0(){if(--ju===0&&hl!==null){xi!==null&&(xi.status="fulfilled");var t=hl;hl=null,yi=0,xi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function j2(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var c=0;c<n.length;c++)(0,n[c])(e)},function(c){for(i.status="rejected",i.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),i}var O0=j.S;j.S=function(t,e){pm=qe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&w2(t,e),O0!==null&&O0(t,e)};var qa=ct(null);function Mu(){var t=qa.current;return t!==null?t:Gt.pooledCache}function Zr(t,e){e===null?ot(qa,qa.current):ot(qa,e.pool)}function k0(){var t=Mu();return t===null?null:{parent:ie._currentValue,pool:t}}var bi=Error(r(460)),Eu=Error(r(474)),Qr=Error(r(542)),Kr={then:function(){}};function D0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function R0(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(kn,kn),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,B0(t),t;default:if(typeof e.status=="string")e.then(kn,kn);else{if(t=Gt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var c=e;c.status="fulfilled",c.value=i}},function(i){if(e.status==="pending"){var c=e;c.status="rejected",c.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,B0(t),t}throw Ga=e,bi}}function Ya(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ga=n,bi):n}}var Ga=null;function L0(){if(Ga===null)throw Error(r(459));var t=Ga;return Ga=null,t}function B0(t){if(t===bi||t===Qr)throw Error(r(483))}var Si=null,ml=0;function Jr(t){var e=ml;return ml+=1,Si===null&&(Si=[]),R0(Si,t,e)}function pl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Wr(t,e){throw e.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function U0(t){function e(_,z){if(t){var k=_.deletions;k===null?(_.deletions=[z],_.flags|=16):k.push(z)}}function n(_,z){if(!t)return null;for(;z!==null;)e(_,z),z=z.sibling;return null}function i(_){for(var z=new Map;_!==null;)_.key!==null?z.set(_.key,_):z.set(_.index,_),_=_.sibling;return z}function c(_,z){return _=Rn(_,z),_.index=0,_.sibling=null,_}function u(_,z,k){return _.index=k,t?(k=_.alternate,k!==null?(k=k.index,k<z?(_.flags|=67108866,z):k):(_.flags|=67108866,z)):(_.flags|=1048576,z)}function m(_){return t&&_.alternate===null&&(_.flags|=67108866),_}function b(_,z,k,X){return z===null||z.tag!==6?(z=hu(k,_.mode,X),z.return=_,z):(z=c(z,k),z.return=_,z)}function M(_,z,k,X){var st=k.type;return st===B?Y(_,z,k.props.children,X,k.key):z!==null&&(z.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===I&&Ya(st)===z.type)?(z=c(z,k.props),pl(z,k),z.return=_,z):(z=Yr(k.type,k.key,k.props,null,_.mode,X),pl(z,k),z.return=_,z)}function D(_,z,k,X){return z===null||z.tag!==4||z.stateNode.containerInfo!==k.containerInfo||z.stateNode.implementation!==k.implementation?(z=mu(k,_.mode,X),z.return=_,z):(z=c(z,k.children||[]),z.return=_,z)}function Y(_,z,k,X,st){return z===null||z.tag!==7?(z=La(k,_.mode,X,st),z.return=_,z):(z=c(z,k),z.return=_,z)}function V(_,z,k){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=hu(""+z,_.mode,k),z.return=_,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case w:return k=Yr(z.type,z.key,z.props,null,_.mode,k),pl(k,z),k.return=_,k;case N:return z=mu(z,_.mode,k),z.return=_,z;case I:return z=Ya(z),V(_,z,k)}if(E(z)||tt(z))return z=La(z,_.mode,k,null),z.return=_,z;if(typeof z.then=="function")return V(_,Jr(z),k);if(z.$$typeof===O)return V(_,Vr(_,z),k);Wr(_,z)}return null}function R(_,z,k,X){var st=z!==null?z.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return st!==null?null:b(_,z,""+k,X);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case w:return k.key===st?M(_,z,k,X):null;case N:return k.key===st?D(_,z,k,X):null;case I:return k=Ya(k),R(_,z,k,X)}if(E(k)||tt(k))return st!==null?null:Y(_,z,k,X,null);if(typeof k.then=="function")return R(_,z,Jr(k),X);if(k.$$typeof===O)return R(_,z,Vr(_,k),X);Wr(_,k)}return null}function H(_,z,k,X,st){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return _=_.get(k)||null,b(z,_,""+X,st);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case w:return _=_.get(X.key===null?k:X.key)||null,M(z,_,X,st);case N:return _=_.get(X.key===null?k:X.key)||null,D(z,_,X,st);case I:return X=Ya(X),H(_,z,k,X,st)}if(E(X)||tt(X))return _=_.get(k)||null,Y(z,_,X,st,null);if(typeof X.then=="function")return H(_,z,k,Jr(X),st);if(X.$$typeof===O)return H(_,z,k,Vr(z,X),st);Wr(z,X)}return null}function nt(_,z,k,X){for(var st=null,Ct=null,lt=z,xt=z=0,zt=null;lt!==null&&xt<k.length;xt++){lt.index>xt?(zt=lt,lt=null):zt=lt.sibling;var Ot=R(_,lt,k[xt],X);if(Ot===null){lt===null&&(lt=zt);break}t&&lt&&Ot.alternate===null&&e(_,lt),z=u(Ot,z,xt),Ct===null?st=Ot:Ct.sibling=Ot,Ct=Ot,lt=zt}if(xt===k.length)return n(_,lt),Nt&&Ln(_,xt),st;if(lt===null){for(;xt<k.length;xt++)lt=V(_,k[xt],X),lt!==null&&(z=u(lt,z,xt),Ct===null?st=lt:Ct.sibling=lt,Ct=lt);return Nt&&Ln(_,xt),st}for(lt=i(lt);xt<k.length;xt++)zt=H(lt,_,xt,k[xt],X),zt!==null&&(t&&zt.alternate!==null&&lt.delete(zt.key===null?xt:zt.key),z=u(zt,z,xt),Ct===null?st=zt:Ct.sibling=zt,Ct=zt);return t&&lt.forEach(function(Na){return e(_,Na)}),Nt&&Ln(_,xt),st}function mt(_,z,k,X){if(k==null)throw Error(r(151));for(var st=null,Ct=null,lt=z,xt=z=0,zt=null,Ot=k.next();lt!==null&&!Ot.done;xt++,Ot=k.next()){lt.index>xt?(zt=lt,lt=null):zt=lt.sibling;var Na=R(_,lt,Ot.value,X);if(Na===null){lt===null&&(lt=zt);break}t&&lt&&Na.alternate===null&&e(_,lt),z=u(Na,z,xt),Ct===null?st=Na:Ct.sibling=Na,Ct=Na,lt=zt}if(Ot.done)return n(_,lt),Nt&&Ln(_,xt),st;if(lt===null){for(;!Ot.done;xt++,Ot=k.next())Ot=V(_,Ot.value,X),Ot!==null&&(z=u(Ot,z,xt),Ct===null?st=Ot:Ct.sibling=Ot,Ct=Ot);return Nt&&Ln(_,xt),st}for(lt=i(lt);!Ot.done;xt++,Ot=k.next())Ot=H(lt,_,xt,Ot.value,X),Ot!==null&&(t&&Ot.alternate!==null&&lt.delete(Ot.key===null?xt:Ot.key),z=u(Ot,z,xt),Ct===null?st=Ot:Ct.sibling=Ot,Ct=Ot);return t&&lt.forEach(function(Dy){return e(_,Dy)}),Nt&&Ln(_,xt),st}function qt(_,z,k,X){if(typeof k=="object"&&k!==null&&k.type===B&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case w:t:{for(var st=k.key;z!==null;){if(z.key===st){if(st=k.type,st===B){if(z.tag===7){n(_,z.sibling),X=c(z,k.props.children),X.return=_,_=X;break t}}else if(z.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===I&&Ya(st)===z.type){n(_,z.sibling),X=c(z,k.props),pl(X,k),X.return=_,_=X;break t}n(_,z);break}else e(_,z);z=z.sibling}k.type===B?(X=La(k.props.children,_.mode,X,k.key),X.return=_,_=X):(X=Yr(k.type,k.key,k.props,null,_.mode,X),pl(X,k),X.return=_,_=X)}return m(_);case N:t:{for(st=k.key;z!==null;){if(z.key===st)if(z.tag===4&&z.stateNode.containerInfo===k.containerInfo&&z.stateNode.implementation===k.implementation){n(_,z.sibling),X=c(z,k.children||[]),X.return=_,_=X;break t}else{n(_,z);break}else e(_,z);z=z.sibling}X=mu(k,_.mode,X),X.return=_,_=X}return m(_);case I:return k=Ya(k),qt(_,z,k,X)}if(E(k))return nt(_,z,k,X);if(tt(k)){if(st=tt(k),typeof st!="function")throw Error(r(150));return k=st.call(k),mt(_,z,k,X)}if(typeof k.then=="function")return qt(_,z,Jr(k),X);if(k.$$typeof===O)return qt(_,z,Vr(_,k),X);Wr(_,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,z!==null&&z.tag===6?(n(_,z.sibling),X=c(z,k),X.return=_,_=X):(n(_,z),X=hu(k,_.mode,X),X.return=_,_=X),m(_)):n(_,z)}return function(_,z,k,X){try{ml=0;var st=qt(_,z,k,X);return Si=null,st}catch(lt){if(lt===bi||lt===Qr)throw lt;var Ct=Ve(29,lt,null,_.mode);return Ct.lanes=X,Ct.return=_,Ct}}}var Xa=U0(!0),H0=U0(!1),sa=!1;function zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function da(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(Dt&2)!==0){var c=i.pending;return c===null?e.next=e:(e.next=c.next,c.next=e),i.pending=e,e=qr(t),w0(t,null,n),e}return Hr(t,i,e,n),qr(t)}function gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Td(t,n)}}function Au(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var c=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?c=u=m:u=u.next=m,n=n.next}while(n!==null);u===null?c=u=e:u=u.next=e}else c=u=e;n={baseState:i.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var _u=!1;function vl(){if(_u){var t=xi;if(t!==null)throw t}}function yl(t,e,n,i){_u=!1;var c=t.updateQueue;sa=!1;var u=c.firstBaseUpdate,m=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var M=b,D=M.next;M.next=null,m===null?u=D:m.next=D,m=M;var Y=t.alternate;Y!==null&&(Y=Y.updateQueue,b=Y.lastBaseUpdate,b!==m&&(b===null?Y.firstBaseUpdate=D:b.next=D,Y.lastBaseUpdate=M))}if(u!==null){var V=c.baseState;m=0,Y=D=M=null,b=u;do{var R=b.lane&-536870913,H=R!==b.lane;if(H?(Et&R)===R:(i&R)===R){R!==0&&R===yi&&(_u=!0),Y!==null&&(Y=Y.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var nt=t,mt=b;R=e;var qt=n;switch(mt.tag){case 1:if(nt=mt.payload,typeof nt=="function"){V=nt.call(qt,V,R);break t}V=nt;break t;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=mt.payload,R=typeof nt=="function"?nt.call(qt,V,R):nt,R==null)break t;V=x({},V,R);break t;case 2:sa=!0}}R=b.callback,R!==null&&(t.flags|=64,H&&(t.flags|=8192),H=c.callbacks,H===null?c.callbacks=[R]:H.push(R))}else H={lane:R,tag:b.tag,payload:b.payload,callback:b.callback,next:null},Y===null?(D=Y=H,M=V):Y=Y.next=H,m|=R;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;H=b,b=H.next,H.next=null,c.lastBaseUpdate=H,c.shared.pending=null}}while(!0);Y===null&&(M=V),c.baseState=M,c.firstBaseUpdate=D,c.lastBaseUpdate=Y,u===null&&(c.shared.lanes=0),va|=m,t.lanes=m,t.memoizedState=V}}function q0(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function Y0(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)q0(n[t],e)}var wi=ct(null),$r=ct(0);function G0(t,e){t=Kn,ot($r,t),ot(wi,e),Kn=t|e.baseLanes}function Tu(){ot($r,Kn),ot(wi,wi.current)}function Cu(){Kn=$r.current,ut(wi),ut($r)}var Ze=ct(null),on=null;function ha(t){var e=t.alternate;ot(ee,ee.current&1),ot(Ze,t),on===null&&(e===null||wi.current!==null||e.memoizedState!==null)&&(on=t)}function Ou(t){ot(ee,ee.current),ot(Ze,t),on===null&&(on=t)}function X0(t){t.tag===22?(ot(ee,ee.current),ot(Ze,t),on===null&&(on=t)):ma()}function ma(){ot(ee,ee.current),ot(Ze,Ze.current)}function Qe(t){ut(Ze),on===t&&(on=null),ut(ee)}var ee=ct(0);function Fr(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Us(n)||Hs(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hn=0,yt=null,Ut=null,le=null,Ir=!1,ji=!1,Va=!1,Pr=0,xl=0,Mi=null,M2=0;function Ft(){throw Error(r(321))}function ku(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xe(t[n],e[n]))return!1;return!0}function Du(t,e,n,i,c,u){return Hn=u,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,j.H=t===null||t.memoizedState===null?zh:Wu,Va=!1,u=n(i,c),Va=!1,ji&&(u=Z0(e,n,i,c)),V0(t),u}function V0(t){j.H=wl;var e=Ut!==null&&Ut.next!==null;if(Hn=0,le=Ut=yt=null,Ir=!1,xl=0,Mi=null,e)throw Error(r(300));t===null||re||(t=t.dependencies,t!==null&&Xr(t)&&(re=!0))}function Z0(t,e,n,i){yt=t;var c=0;do{if(ji&&(Mi=null),xl=0,ji=!1,25<=c)throw Error(r(301));if(c+=1,le=Ut=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}j.H=Nh,u=e(n,i)}while(ji);return u}function E2(){var t=j.H,e=t.useState()[0];return e=typeof e.then=="function"?bl(e):e,t=t.useState()[0],(Ut!==null?Ut.memoizedState:null)!==t&&(yt.flags|=1024),e}function Ru(){var t=Pr!==0;return Pr=0,t}function Lu(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Bu(t){if(Ir){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Ir=!1}Hn=0,le=Ut=yt=null,ji=!1,xl=Pr=0,Mi=null}function we(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?yt.memoizedState=le=t:le=le.next=t,le}function ne(){if(Ut===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=le===null?yt.memoizedState:le.next;if(e!==null)le=e,Ut=t;else{if(t===null)throw yt.alternate===null?Error(r(467)):Error(r(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},le===null?yt.memoizedState=le=t:le=le.next=t}return le}function to(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bl(t){var e=xl;return xl+=1,Mi===null&&(Mi=[]),t=R0(Mi,t,e),e=yt,(le===null?e.memoizedState:le.next)===null&&(e=e.alternate,j.H=e===null||e.memoizedState===null?zh:Wu),t}function eo(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return bl(t);if(t.$$typeof===O)return ge(t)}throw Error(r(438,String(t)))}function Uu(t){var e=null,n=yt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=yt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(c){return c.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=to(),yt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=ht;return e.index++,n}function qn(t,e){return typeof e=="function"?e(t):e}function no(t){var e=ne();return Hu(e,Ut,t)}function Hu(t,e,n){var i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=n;var c=t.baseQueue,u=i.pending;if(u!==null){if(c!==null){var m=c.next;c.next=u.next,u.next=m}e.baseQueue=c=u,i.pending=null}if(u=t.baseState,c===null)t.memoizedState=u;else{e=c.next;var b=m=null,M=null,D=e,Y=!1;do{var V=D.lane&-536870913;if(V!==D.lane?(Et&V)===V:(Hn&V)===V){var R=D.revertLane;if(R===0)M!==null&&(M=M.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),V===yi&&(Y=!0);else if((Hn&R)===R){D=D.next,R===yi&&(Y=!0);continue}else V={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},M===null?(b=M=V,m=u):M=M.next=V,yt.lanes|=R,va|=R;V=D.action,Va&&n(u,V),u=D.hasEagerState?D.eagerState:n(u,V)}else R={lane:V,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},M===null?(b=M=R,m=u):M=M.next=R,yt.lanes|=V,va|=V;D=D.next}while(D!==null&&D!==e);if(M===null?m=u:M.next=b,!Xe(u,t.memoizedState)&&(re=!0,Y&&(n=xi,n!==null)))throw n;t.memoizedState=u,t.baseState=m,t.baseQueue=M,i.lastRenderedState=u}return c===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function qu(t){var e=ne(),n=e.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=t;var i=n.dispatch,c=n.pending,u=e.memoizedState;if(c!==null){n.pending=null;var m=c=c.next;do u=t(u,m.action),m=m.next;while(m!==c);Xe(u,e.memoizedState)||(re=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,i]}function Q0(t,e,n){var i=yt,c=ne(),u=Nt;if(u){if(n===void 0)throw Error(r(407));n=n()}else n=e();var m=!Xe((Ut||c).memoizedState,n);if(m&&(c.memoizedState=n,re=!0),c=c.queue,Xu(W0.bind(null,i,c,t),[t]),c.getSnapshot!==e||m||le!==null&&le.memoizedState.tag&1){if(i.flags|=2048,Ei(9,{destroy:void 0},J0.bind(null,i,c,n,e),null),Gt===null)throw Error(r(349));u||(Hn&127)!==0||K0(i,e,n)}return n}function K0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e=to(),yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function J0(t,e,n,i){e.value=n,e.getSnapshot=i,$0(e)&&F0(t)}function W0(t,e,n){return n(function(){$0(e)&&F0(t)})}function $0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xe(t,n)}catch{return!0}}function F0(t){var e=Ra(t,2);e!==null&&Le(e,t,2)}function Yu(t){var e=we();if(typeof t=="function"){var n=t;if(t=n(),Va){aa(!0);try{n()}finally{aa(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:t},e}function I0(t,e,n,i){return t.baseState=n,Hu(t,Ut,typeof i=="function"?i:qn)}function z2(t,e,n,i,c){if(lo(t))throw Error(r(485));if(t=e.action,t!==null){var u={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};j.T!==null?n(!0):u.isTransition=!1,i(u),n=e.pending,n===null?(u.next=e.pending=u,P0(e,u)):(u.next=n.next,e.pending=n.next=u)}}function P0(t,e){var n=e.action,i=e.payload,c=t.state;if(e.isTransition){var u=j.T,m={};j.T=m;try{var b=n(c,i),M=j.S;M!==null&&M(m,b),th(t,e,b)}catch(D){Gu(t,e,D)}finally{u!==null&&m.types!==null&&(u.types=m.types),j.T=u}}else try{u=n(c,i),th(t,e,u)}catch(D){Gu(t,e,D)}}function th(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){eh(t,e,i)},function(i){return Gu(t,e,i)}):eh(t,e,n)}function eh(t,e,n){e.status="fulfilled",e.value=n,nh(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,P0(t,n)))}function Gu(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,nh(e),e=e.next;while(e!==i)}t.action=null}function nh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function ah(t,e){return e}function ih(t,e){if(Nt){var n=Gt.formState;if(n!==null){t:{var i=yt;if(Nt){if(Zt){e:{for(var c=Zt,u=rn;c.nodeType!==8;){if(!u){c=null;break e}if(c=cn(c.nextSibling),c===null){c=null;break e}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){Zt=cn(c.nextSibling),i=c.data==="F!";break t}}ca(i)}i=!1}i&&(e=n[0])}}return n=we(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ah,lastRenderedState:e},n.queue=i,n=jh.bind(null,yt,i),i.dispatch=n,i=Yu(!1),u=Ju.bind(null,yt,!1,i.queue),i=we(),c={state:e,dispatch:null,action:t,pending:null},i.queue=c,n=z2.bind(null,yt,c,u,n),c.dispatch=n,i.memoizedState=t,[e,n,!1]}function lh(t){var e=ne();return rh(e,Ut,t)}function rh(t,e,n){if(e=Hu(t,e,ah)[0],t=no(qn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=bl(e)}catch(m){throw m===bi?Qr:m}else i=e;e=ne();var c=e.queue,u=c.dispatch;return n!==e.memoizedState&&(yt.flags|=2048,Ei(9,{destroy:void 0},N2.bind(null,c,n),null)),[i,u,t]}function N2(t,e){t.action=e}function oh(t){var e=ne(),n=Ut;if(n!==null)return rh(e,n,t);ne(),e=e.memoizedState,n=ne();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Ei(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=yt.updateQueue,e===null&&(e=to(),yt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function ch(){return ne().memoizedState}function ao(t,e,n,i){var c=we();yt.flags|=t,c.memoizedState=Ei(1|e,{destroy:void 0},n,i===void 0?null:i)}function io(t,e,n,i){var c=ne();i=i===void 0?null:i;var u=c.memoizedState.inst;Ut!==null&&i!==null&&ku(i,Ut.memoizedState.deps)?c.memoizedState=Ei(e,u,n,i):(yt.flags|=t,c.memoizedState=Ei(1|e,u,n,i))}function uh(t,e){ao(8390656,8,t,e)}function Xu(t,e){io(2048,8,t,e)}function A2(t){yt.flags|=4;var e=yt.updateQueue;if(e===null)e=to(),yt.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function sh(t){var e=ne().memoizedState;return A2({ref:e,nextImpl:t}),function(){if((Dt&2)!==0)throw Error(r(440));return e.impl.apply(void 0,arguments)}}function fh(t,e){return io(4,2,t,e)}function dh(t,e){return io(4,4,t,e)}function hh(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mh(t,e,n){n=n!=null?n.concat([t]):null,io(4,4,hh.bind(null,e,t),n)}function Vu(){}function ph(t,e){var n=ne();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&ku(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function gh(t,e){var n=ne();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&ku(e,i[1]))return i[0];if(i=t(),Va){aa(!0);try{t()}finally{aa(!1)}}return n.memoizedState=[i,e],i}function Zu(t,e,n){return n===void 0||(Hn&1073741824)!==0&&(Et&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=vm(),yt.lanes|=t,va|=t,n)}function vh(t,e,n,i){return Xe(n,e)?n:wi.current!==null?(t=Zu(t,n,i),Xe(t,e)||(re=!0),t):(Hn&42)===0||(Hn&1073741824)!==0&&(Et&261930)===0?(re=!0,t.memoizedState=n):(t=vm(),yt.lanes|=t,va|=t,e)}function yh(t,e,n,i,c){var u=C.p;C.p=u!==0&&8>u?u:8;var m=j.T,b={};j.T=b,Ju(t,!1,e,n);try{var M=c(),D=j.S;if(D!==null&&D(b,M),M!==null&&typeof M=="object"&&typeof M.then=="function"){var Y=j2(M,i);Sl(t,e,Y,We(t))}else Sl(t,e,i,We(t))}catch(V){Sl(t,e,{then:function(){},status:"rejected",reason:V},We())}finally{C.p=u,m!==null&&b.types!==null&&(m.types=b.types),j.T=m}}function _2(){}function Qu(t,e,n,i){if(t.tag!==5)throw Error(r(476));var c=xh(t).queue;yh(t,c,e,G,n===null?_2:function(){return bh(t),n(i)})}function xh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:G},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function bh(t){var e=xh(t);e.next===null&&(e=t.alternate.memoizedState),Sl(t,e.next.queue,{},We())}function Ku(){return ge(Ul)}function Sh(){return ne().memoizedState}function wh(){return ne().memoizedState}function T2(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=We();t=fa(n);var i=da(e,t,n);i!==null&&(Le(i,e,n),gl(i,e,n)),e={cache:wu()},t.payload=e;return}e=e.return}}function C2(t,e,n){var i=We();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},lo(t)?Mh(e,n):(n=fu(t,e,n,i),n!==null&&(Le(n,t,i),Eh(n,e,i)))}function jh(t,e,n){var i=We();Sl(t,e,n,i)}function Sl(t,e,n,i){var c={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(lo(t))Mh(e,c);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var m=e.lastRenderedState,b=u(m,n);if(c.hasEagerState=!0,c.eagerState=b,Xe(b,m))return Hr(t,e,c,0),Gt===null&&Ur(),!1}catch{}if(n=fu(t,e,c,i),n!==null)return Le(n,t,i),Eh(n,e,i),!0}return!1}function Ju(t,e,n,i){if(i={lane:2,revertLane:zs(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},lo(t)){if(e)throw Error(r(479))}else e=fu(t,n,i,2),e!==null&&Le(e,t,2)}function lo(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function Mh(t,e){ji=Ir=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Eh(t,e,n){if((n&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Td(t,n)}}var wl={readContext:ge,use:eo,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useLayoutEffect:Ft,useInsertionEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useSyncExternalStore:Ft,useId:Ft,useHostTransitionStatus:Ft,useFormState:Ft,useActionState:Ft,useOptimistic:Ft,useMemoCache:Ft,useCacheRefresh:Ft};wl.useEffectEvent=Ft;var zh={readContext:ge,use:eo,useCallback:function(t,e){return we().memoizedState=[t,e===void 0?null:e],t},useContext:ge,useEffect:uh,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,ao(4194308,4,hh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ao(4194308,4,t,e)},useInsertionEffect:function(t,e){ao(4,2,t,e)},useMemo:function(t,e){var n=we();e=e===void 0?null:e;var i=t();if(Va){aa(!0);try{t()}finally{aa(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=we();if(n!==void 0){var c=n(e);if(Va){aa(!0);try{n(e)}finally{aa(!1)}}}else c=e;return i.memoizedState=i.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},i.queue=t,t=t.dispatch=C2.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=we();return t={current:t},e.memoizedState=t},useState:function(t){t=Yu(t);var e=t.queue,n=jh.bind(null,yt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Vu,useDeferredValue:function(t,e){var n=we();return Zu(n,t,e)},useTransition:function(){var t=Yu(!1);return t=yh.bind(null,yt,t.queue,!0,!1),we().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=yt,c=we();if(Nt){if(n===void 0)throw Error(r(407));n=n()}else{if(n=e(),Gt===null)throw Error(r(349));(Et&127)!==0||K0(i,e,n)}c.memoizedState=n;var u={value:n,getSnapshot:e};return c.queue=u,uh(W0.bind(null,i,u,t),[t]),i.flags|=2048,Ei(9,{destroy:void 0},J0.bind(null,i,u,n,e),null),n},useId:function(){var t=we(),e=Gt.identifierPrefix;if(Nt){var n=bn,i=xn;n=(i&~(1<<32-Ge(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Pr++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=M2++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Ku,useFormState:ih,useActionState:ih,useOptimistic:function(t){var e=we();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Ju.bind(null,yt,!0,n),n.dispatch=e,[t,e]},useMemoCache:Uu,useCacheRefresh:function(){return we().memoizedState=T2.bind(null,yt)},useEffectEvent:function(t){var e=we(),n={impl:t};return e.memoizedState=n,function(){if((Dt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}},Wu={readContext:ge,use:eo,useCallback:ph,useContext:ge,useEffect:Xu,useImperativeHandle:mh,useInsertionEffect:fh,useLayoutEffect:dh,useMemo:gh,useReducer:no,useRef:ch,useState:function(){return no(qn)},useDebugValue:Vu,useDeferredValue:function(t,e){var n=ne();return vh(n,Ut.memoizedState,t,e)},useTransition:function(){var t=no(qn)[0],e=ne().memoizedState;return[typeof t=="boolean"?t:bl(t),e]},useSyncExternalStore:Q0,useId:Sh,useHostTransitionStatus:Ku,useFormState:lh,useActionState:lh,useOptimistic:function(t,e){var n=ne();return I0(n,Ut,t,e)},useMemoCache:Uu,useCacheRefresh:wh};Wu.useEffectEvent=sh;var Nh={readContext:ge,use:eo,useCallback:ph,useContext:ge,useEffect:Xu,useImperativeHandle:mh,useInsertionEffect:fh,useLayoutEffect:dh,useMemo:gh,useReducer:qu,useRef:ch,useState:function(){return qu(qn)},useDebugValue:Vu,useDeferredValue:function(t,e){var n=ne();return Ut===null?Zu(n,t,e):vh(n,Ut.memoizedState,t,e)},useTransition:function(){var t=qu(qn)[0],e=ne().memoizedState;return[typeof t=="boolean"?t:bl(t),e]},useSyncExternalStore:Q0,useId:Sh,useHostTransitionStatus:Ku,useFormState:oh,useActionState:oh,useOptimistic:function(t,e){var n=ne();return Ut!==null?I0(n,Ut,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Uu,useCacheRefresh:wh};Nh.useEffectEvent=sh;function $u(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:x({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fu={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=We(),c=fa(i);c.payload=e,n!=null&&(c.callback=n),e=da(t,c,i),e!==null&&(Le(e,t,i),gl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=We(),c=fa(i);c.tag=1,c.payload=e,n!=null&&(c.callback=n),e=da(t,c,i),e!==null&&(Le(e,t,i),gl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=We(),i=fa(n);i.tag=2,e!=null&&(i.callback=e),e=da(t,i,n),e!==null&&(Le(e,t,n),gl(e,t,n))}};function Ah(t,e,n,i,c,u,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,u,m):e.prototype&&e.prototype.isPureReactComponent?!cl(n,i)||!cl(c,u):!0}function _h(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Fu.enqueueReplaceState(e,e.state,null)}function Za(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=x({},n));for(var c in t)n[c]===void 0&&(n[c]=t[c])}return n}function Th(t){Br(t)}function Ch(t){console.error(t)}function Oh(t){Br(t)}function ro(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function kh(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Iu(t,e,n){return n=fa(n),n.tag=3,n.payload={element:null},n.callback=function(){ro(t,e)},n}function Dh(t){return t=fa(t),t.tag=3,t}function Rh(t,e,n,i){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var u=i.value;t.payload=function(){return c(u)},t.callback=function(){kh(e,n,i)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){kh(e,n,i),typeof c!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function O2(t,e,n,i,c){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&vi(e,n,c,!0),n=Ze.current,n!==null){switch(n.tag){case 31:case 13:return on===null?xo():n.alternate===null&&It===0&&(It=3),n.flags&=-257,n.flags|=65536,n.lanes=c,i===Kr?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),js(t,i,c)),!1;case 22:return n.flags|=65536,i===Kr?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),js(t,i,c)),!1}throw Error(r(435,n.tag))}return js(t,i,c),xo(),!1}if(Nt)return e=Ze.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=c,i!==vu&&(t=Error(r(422),{cause:i}),fl(nn(t,n)))):(i!==vu&&(e=Error(r(423),{cause:i}),fl(nn(e,n))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,i=nn(i,n),c=Iu(t.stateNode,i,c),Au(t,c),It!==4&&(It=2)),!1;var u=Error(r(520),{cause:i});if(u=nn(u,n),Tl===null?Tl=[u]:Tl.push(u),It!==4&&(It=2),e===null)return!0;i=nn(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=c&-c,n.lanes|=t,t=Iu(n.stateNode,i,t),Au(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ya===null||!ya.has(u))))return n.flags|=65536,c&=-c,n.lanes|=c,c=Dh(c),Rh(c,t,n,i),Au(n,c),!1}n=n.return}while(n!==null);return!1}var Pu=Error(r(461)),re=!1;function ve(t,e,n,i){e.child=t===null?H0(e,null,n,i):Xa(e,t.child,n,i)}function Lh(t,e,n,i,c){n=n.render;var u=e.ref;if("ref"in i){var m={};for(var b in i)b!=="ref"&&(m[b]=i[b])}else m=i;return Ha(e),i=Du(t,e,n,m,u,c),b=Ru(),t!==null&&!re?(Lu(t,e,c),Yn(t,e,c)):(Nt&&b&&pu(e),e.flags|=1,ve(t,e,i,c),e.child)}function Bh(t,e,n,i,c){if(t===null){var u=n.type;return typeof u=="function"&&!du(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,Uh(t,e,u,i,c)):(t=Yr(n.type,null,i,e,e.mode,c),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!os(t,c)){var m=u.memoizedProps;if(n=n.compare,n=n!==null?n:cl,n(m,i)&&t.ref===e.ref)return Yn(t,e,c)}return e.flags|=1,t=Rn(u,i),t.ref=e.ref,t.return=e,e.child=t}function Uh(t,e,n,i,c){if(t!==null){var u=t.memoizedProps;if(cl(u,i)&&t.ref===e.ref)if(re=!1,e.pendingProps=i=u,os(t,c))(t.flags&131072)!==0&&(re=!0);else return e.lanes=t.lanes,Yn(t,e,c)}return ts(t,e,n,i,c)}function Hh(t,e,n,i){var c=i.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,t!==null){for(i=e.child=t.child,c=0;i!==null;)c=c|i.lanes|i.childLanes,i=i.sibling;i=c&~u}else i=0,e.child=null;return qh(t,e,u,n,i)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zr(e,u!==null?u.cachePool:null),u!==null?G0(e,u):Tu(),X0(e);else return i=e.lanes=536870912,qh(t,e,u!==null?u.baseLanes|n:n,n,i)}else u!==null?(Zr(e,u.cachePool),G0(e,u),ma(),e.memoizedState=null):(t!==null&&Zr(e,null),Tu(),ma());return ve(t,e,c,n),e.child}function jl(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function qh(t,e,n,i,c){var u=Mu();return u=u===null?null:{parent:ie._currentValue,pool:u},e.memoizedState={baseLanes:n,cachePool:u},t!==null&&Zr(e,null),Tu(),X0(e),t!==null&&vi(t,e,i,!0),e.childLanes=c,null}function oo(t,e){return e=uo({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Yh(t,e,n){return Xa(e,t.child,null,n),t=oo(e,e.pendingProps),t.flags|=2,Qe(e),e.memoizedState=null,t}function k2(t,e,n){var i=e.pendingProps,c=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Nt){if(i.mode==="hidden")return t=oo(e,i),e.lanes=536870912,jl(null,t);if(Ou(e),(t=Zt)?(t=Pm(t,rn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ra!==null?{id:xn,overflow:bn}:null,retryLane:536870912,hydrationErrors:null},n=M0(t),n.return=e,e.child=n,pe=e,Zt=null)):t=null,t===null)throw ca(e);return e.lanes=536870912,null}return oo(e,i)}var u=t.memoizedState;if(u!==null){var m=u.dehydrated;if(Ou(e),c)if(e.flags&256)e.flags&=-257,e=Yh(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(r(558));else if(re||vi(t,e,n,!1),c=(n&t.childLanes)!==0,re||c){if(i=Gt,i!==null&&(m=Cd(i,n),m!==0&&m!==u.retryLane))throw u.retryLane=m,Ra(t,m),Le(i,t,m),Pu;xo(),e=Yh(t,e,n)}else t=u.treeContext,Zt=cn(m.nextSibling),pe=e,Nt=!0,oa=null,rn=!1,t!==null&&N0(e,t),e=oo(e,i),e.flags|=4096;return e}return t=Rn(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function co(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(r(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function ts(t,e,n,i,c){return Ha(e),n=Du(t,e,n,i,void 0,c),i=Ru(),t!==null&&!re?(Lu(t,e,c),Yn(t,e,c)):(Nt&&i&&pu(e),e.flags|=1,ve(t,e,n,c),e.child)}function Gh(t,e,n,i,c,u){return Ha(e),e.updateQueue=null,n=Z0(e,i,n,c),V0(t),i=Ru(),t!==null&&!re?(Lu(t,e,u),Yn(t,e,u)):(Nt&&i&&pu(e),e.flags|=1,ve(t,e,n,u),e.child)}function Xh(t,e,n,i,c){if(Ha(e),e.stateNode===null){var u=hi,m=n.contextType;typeof m=="object"&&m!==null&&(u=ge(m)),u=new n(i,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Fu,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=i,u.state=e.memoizedState,u.refs={},zu(e),m=n.contextType,u.context=typeof m=="object"&&m!==null?ge(m):hi,u.state=e.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&($u(e,n,m,i),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&Fu.enqueueReplaceState(u,u.state,null),yl(e,i,u,c),vl(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){u=e.stateNode;var b=e.memoizedProps,M=Za(n,b);u.props=M;var D=u.context,Y=n.contextType;m=hi,typeof Y=="object"&&Y!==null&&(m=ge(Y));var V=n.getDerivedStateFromProps;Y=typeof V=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=e.pendingProps!==b,Y||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||D!==m)&&_h(e,u,i,m),sa=!1;var R=e.memoizedState;u.state=R,yl(e,i,u,c),vl(),D=e.memoizedState,b||R!==D||sa?(typeof V=="function"&&($u(e,n,V,i),D=e.memoizedState),(M=sa||Ah(e,n,M,i,R,D,m))?(Y||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=D),u.props=i,u.state=D,u.context=m,i=M):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{u=e.stateNode,Nu(t,e),m=e.memoizedProps,Y=Za(n,m),u.props=Y,V=e.pendingProps,R=u.context,D=n.contextType,M=hi,typeof D=="object"&&D!==null&&(M=ge(D)),b=n.getDerivedStateFromProps,(D=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==V||R!==M)&&_h(e,u,i,M),sa=!1,R=e.memoizedState,u.state=R,yl(e,i,u,c),vl();var H=e.memoizedState;m!==V||R!==H||sa||t!==null&&t.dependencies!==null&&Xr(t.dependencies)?(typeof b=="function"&&($u(e,n,b,i),H=e.memoizedState),(Y=sa||Ah(e,n,Y,i,R,H,M)||t!==null&&t.dependencies!==null&&Xr(t.dependencies))?(D||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,H,M),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,H,M)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===t.memoizedProps&&R===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&R===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=H),u.props=i,u.state=H,u.context=M,i=Y):(typeof u.componentDidUpdate!="function"||m===t.memoizedProps&&R===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&R===t.memoizedState||(e.flags|=1024),i=!1)}return u=i,co(t,e),i=(e.flags&128)!==0,u||i?(u=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&i?(e.child=Xa(e,t.child,null,c),e.child=Xa(e,null,n,c)):ve(t,e,n,c),e.memoizedState=u.state,t=e.child):t=Yn(t,e,c),t}function Vh(t,e,n,i){return Ba(),e.flags|=256,ve(t,e,n,i),e.child}var es={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ns(t){return{baseLanes:t,cachePool:k0()}}function as(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Je),t}function Zh(t,e,n){var i=e.pendingProps,c=!1,u=(e.flags&128)!==0,m;if((m=u)||(m=t!==null&&t.memoizedState===null?!1:(ee.current&2)!==0),m&&(c=!0,e.flags&=-129),m=(e.flags&32)!==0,e.flags&=-33,t===null){if(Nt){if(c?ha(e):ma(),(t=Zt)?(t=Pm(t,rn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ra!==null?{id:xn,overflow:bn}:null,retryLane:536870912,hydrationErrors:null},n=M0(t),n.return=e,e.child=n,pe=e,Zt=null)):t=null,t===null)throw ca(e);return Hs(t)?e.lanes=32:e.lanes=536870912,null}var b=i.children;return i=i.fallback,c?(ma(),c=e.mode,b=uo({mode:"hidden",children:b},c),i=La(i,c,n,null),b.return=e,i.return=e,b.sibling=i,e.child=b,i=e.child,i.memoizedState=ns(n),i.childLanes=as(t,m,n),e.memoizedState=es,jl(null,i)):(ha(e),is(e,b))}var M=t.memoizedState;if(M!==null&&(b=M.dehydrated,b!==null)){if(u)e.flags&256?(ha(e),e.flags&=-257,e=ls(t,e,n)):e.memoizedState!==null?(ma(),e.child=t.child,e.flags|=128,e=null):(ma(),b=i.fallback,c=e.mode,i=uo({mode:"visible",children:i.children},c),b=La(b,c,n,null),b.flags|=2,i.return=e,b.return=e,i.sibling=b,e.child=i,Xa(e,t.child,null,n),i=e.child,i.memoizedState=ns(n),i.childLanes=as(t,m,n),e.memoizedState=es,e=jl(null,i));else if(ha(e),Hs(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var D=m.dgst;m=D,i=Error(r(419)),i.stack="",i.digest=m,fl({value:i,source:null,stack:null}),e=ls(t,e,n)}else if(re||vi(t,e,n,!1),m=(n&t.childLanes)!==0,re||m){if(m=Gt,m!==null&&(i=Cd(m,n),i!==0&&i!==M.retryLane))throw M.retryLane=i,Ra(t,i),Le(m,t,i),Pu;Us(b)||xo(),e=ls(t,e,n)}else Us(b)?(e.flags|=192,e.child=t.child,e=null):(t=M.treeContext,Zt=cn(b.nextSibling),pe=e,Nt=!0,oa=null,rn=!1,t!==null&&N0(e,t),e=is(e,i.children),e.flags|=4096);return e}return c?(ma(),b=i.fallback,c=e.mode,M=t.child,D=M.sibling,i=Rn(M,{mode:"hidden",children:i.children}),i.subtreeFlags=M.subtreeFlags&65011712,D!==null?b=Rn(D,b):(b=La(b,c,n,null),b.flags|=2),b.return=e,i.return=e,i.sibling=b,e.child=i,jl(null,i),i=e.child,b=t.child.memoizedState,b===null?b=ns(n):(c=b.cachePool,c!==null?(M=ie._currentValue,c=c.parent!==M?{parent:M,pool:M}:c):c=k0(),b={baseLanes:b.baseLanes|n,cachePool:c}),i.memoizedState=b,i.childLanes=as(t,m,n),e.memoizedState=es,jl(t.child,i)):(ha(e),n=t.child,t=n.sibling,n=Rn(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(m=e.deletions,m===null?(e.deletions=[t],e.flags|=16):m.push(t)),e.child=n,e.memoizedState=null,n)}function is(t,e){return e=uo({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function uo(t,e){return t=Ve(22,t,null,e),t.lanes=0,t}function ls(t,e,n){return Xa(e,t.child,null,n),t=is(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),bu(t.return,e,n)}function rs(t,e,n,i,c,u){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:c,treeForkCount:u}:(m.isBackwards=e,m.rendering=null,m.renderingStartTime=0,m.last=i,m.tail=n,m.tailMode=c,m.treeForkCount=u)}function Kh(t,e,n){var i=e.pendingProps,c=i.revealOrder,u=i.tail;i=i.children;var m=ee.current,b=(m&2)!==0;if(b?(m=m&1|2,e.flags|=128):m&=1,ot(ee,m),ve(t,e,i,n),i=Nt?sl:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qh(t,n,e);else if(t.tag===19)Qh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(n=e.child,c=null;n!==null;)t=n.alternate,t!==null&&Fr(t)===null&&(c=n),n=n.sibling;n=c,n===null?(c=e.child,e.child=null):(c=n.sibling,n.sibling=null),rs(e,!1,c,n,u,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,c=e.child,e.child=null;c!==null;){if(t=c.alternate,t!==null&&Fr(t)===null){e.child=c;break}t=c.sibling,c.sibling=n,n=c,c=t}rs(e,!0,n,null,u,i);break;case"together":rs(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function Yn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),va|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(vi(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,n=Rn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function os(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Xr(t)))}function D2(t,e,n){switch(e.tag){case 3:ue(e,e.stateNode.containerInfo),ua(e,ie,t.memoizedState.cache),Ba();break;case 27:case 5:_e(e);break;case 4:ue(e,e.stateNode.containerInfo);break;case 10:ua(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Ou(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(ha(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Zh(t,e,n):(ha(e),t=Yn(t,e,n),t!==null?t.sibling:null);ha(e);break;case 19:var c=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(vi(t,e,n,!1),i=(n&e.childLanes)!==0),c){if(i)return Kh(t,e,n);e.flags|=128}if(c=e.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ot(ee,ee.current),i)break;return null;case 22:return e.lanes=0,Hh(t,e,n,e.pendingProps);case 24:ua(e,ie,t.memoizedState.cache)}return Yn(t,e,n)}function Jh(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)re=!0;else{if(!os(t,n)&&(e.flags&128)===0)return re=!1,D2(t,e,n);re=(t.flags&131072)!==0}else re=!1,Nt&&(e.flags&1048576)!==0&&z0(e,sl,e.index);switch(e.lanes=0,e.tag){case 16:t:{var i=e.pendingProps;if(t=Ya(e.elementType),e.type=t,typeof t=="function")du(t)?(i=Za(t,i),e.tag=1,e=Xh(null,e,t,i,n)):(e.tag=0,e=ts(null,e,t,i,n));else{if(t!=null){var c=t.$$typeof;if(c===U){e.tag=11,e=Lh(null,e,t,i,n);break t}else if(c===W){e.tag=14,e=Bh(null,e,t,i,n);break t}}throw e=A(t)||t,Error(r(306,e,""))}}return e;case 0:return ts(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,c=Za(i,e.pendingProps),Xh(t,e,i,c,n);case 3:t:{if(ue(e,e.stateNode.containerInfo),t===null)throw Error(r(387));i=e.pendingProps;var u=e.memoizedState;c=u.element,Nu(t,e),yl(e,i,null,n);var m=e.memoizedState;if(i=m.cache,ua(e,ie,i),i!==u.cache&&Su(e,[ie],n,!0),vl(),i=m.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:m.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Vh(t,e,i,n);break t}else if(i!==c){c=nn(Error(r(424)),e),fl(c),e=Vh(t,e,i,n);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Zt=cn(t.firstChild),pe=e,Nt=!0,oa=null,rn=!0,n=H0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ba(),i===c){e=Yn(t,e,n);break t}ve(t,e,i,n)}e=e.child}return e;case 26:return co(t,e),t===null?(n=lp(e.type,null,e.pendingProps,null))?e.memoizedState=n:Nt||(n=e.type,t=e.pendingProps,i=zo(Kt.current).createElement(n),i[me]=e,i[Te]=t,ye(i,n,t),fe(i),e.stateNode=i):e.memoizedState=lp(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return _e(e),t===null&&Nt&&(i=e.stateNode=np(e.type,e.pendingProps,Kt.current),pe=e,rn=!0,c=Zt,wa(e.type)?(qs=c,Zt=cn(i.firstChild)):Zt=c),ve(t,e,e.pendingProps.children,n),co(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Nt&&((c=i=Zt)&&(i=sy(i,e.type,e.pendingProps,rn),i!==null?(e.stateNode=i,pe=e,Zt=cn(i.firstChild),rn=!1,c=!0):c=!1),c||ca(e)),_e(e),c=e.type,u=e.pendingProps,m=t!==null?t.memoizedProps:null,i=u.children,Rs(c,u)?i=null:m!==null&&Rs(c,m)&&(e.flags|=32),e.memoizedState!==null&&(c=Du(t,e,E2,null,null,n),Ul._currentValue=c),co(t,e),ve(t,e,i,n),e.child;case 6:return t===null&&Nt&&((t=n=Zt)&&(n=fy(n,e.pendingProps,rn),n!==null?(e.stateNode=n,pe=e,Zt=null,t=!0):t=!1),t||ca(e)),null;case 13:return Zh(t,e,n);case 4:return ue(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Xa(e,null,i,n):ve(t,e,i,n),e.child;case 11:return Lh(t,e,e.type,e.pendingProps,n);case 7:return ve(t,e,e.pendingProps,n),e.child;case 8:return ve(t,e,e.pendingProps.children,n),e.child;case 12:return ve(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,ua(e,e.type,i.value),ve(t,e,i.children,n),e.child;case 9:return c=e.type._context,i=e.pendingProps.children,Ha(e),c=ge(c),i=i(c),e.flags|=1,ve(t,e,i,n),e.child;case 14:return Bh(t,e,e.type,e.pendingProps,n);case 15:return Uh(t,e,e.type,e.pendingProps,n);case 19:return Kh(t,e,n);case 31:return k2(t,e,n);case 22:return Hh(t,e,n,e.pendingProps);case 24:return Ha(e),i=ge(ie),t===null?(c=Mu(),c===null&&(c=Gt,u=wu(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=n),c=u),e.memoizedState={parent:i,cache:c},zu(e),ua(e,ie,c)):((t.lanes&n)!==0&&(Nu(t,e),yl(e,null,null,n),vl()),c=t.memoizedState,u=e.memoizedState,c.parent!==i?(c={parent:i,cache:i},e.memoizedState=c,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=c),ua(e,ie,i)):(i=u.cache,ua(e,ie,i),i!==c.cache&&Su(e,[ie],n,!0))),ve(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function Gn(t){t.flags|=4}function cs(t,e,n,i,c){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Sm())t.flags|=8192;else throw Ga=Kr,Eu}else t.flags&=-16777217}function Wh(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!sp(e))if(Sm())t.flags|=8192;else throw Ga=Kr,Eu}function so(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ad():536870912,t.lanes|=e,_i|=e)}function Ml(t,e){if(!Nt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var c=t.child;c!==null;)n|=c.lanes|c.childLanes,i|=c.subtreeFlags&65011712,i|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)n|=c.lanes|c.childLanes,i|=c.subtreeFlags,i|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function R2(t,e,n){var i=e.pendingProps;switch(gu(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return Qt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Un(ie),Rt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(gi(e)?Gn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,yu())),Qt(e),null;case 26:var c=e.type,u=e.memoizedState;return t===null?(Gn(e),u!==null?(Qt(e),Wh(e,u)):(Qt(e),cs(e,c,null,i,n))):u?u!==t.memoizedState?(Gn(e),Qt(e),Wh(e,u)):(Qt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Gn(e),Qt(e),cs(e,c,t,i,n)),null;case 27:if(it(e),n=Kt.current,c=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Gn(e);else{if(!i){if(e.stateNode===null)throw Error(r(166));return Qt(e),null}t=gt.current,gi(e)?A0(e):(t=np(c,i,n),e.stateNode=t,Gn(e))}return Qt(e),null;case 5:if(it(e),c=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Gn(e);else{if(!i){if(e.stateNode===null)throw Error(r(166));return Qt(e),null}if(u=gt.current,gi(e))A0(e);else{var m=zo(Kt.current);switch(u){case 1:u=m.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=m.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=m.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=m.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=m.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof i.is=="string"?m.createElement("select",{is:i.is}):m.createElement("select"),i.multiple?u.multiple=!0:i.size&&(u.size=i.size);break;default:u=typeof i.is=="string"?m.createElement(c,{is:i.is}):m.createElement(c)}}u[me]=e,u[Te]=i;t:for(m=e.child;m!==null;){if(m.tag===5||m.tag===6)u.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break t;for(;m.sibling===null;){if(m.return===null||m.return===e)break t;m=m.return}m.sibling.return=m.return,m=m.sibling}e.stateNode=u;t:switch(ye(u,c,i),c){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Gn(e)}}return Qt(e),cs(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Gn(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(r(166));if(t=Kt.current,gi(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,c=pe,c!==null)switch(c.tag){case 27:case 5:i=c.memoizedProps}t[me]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Zm(t.nodeValue,n)),t||ca(e,!0)}else t=zo(t).createTextNode(i),t[me]=e,e.stateNode=t}return Qt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=gi(e),n!==null){if(t===null){if(!i)throw Error(r(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[me]=e}else Ba(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Qt(e),t=!1}else n=yu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Qe(e),e):(Qe(e),null);if((e.flags&128)!==0)throw Error(r(558))}return Qt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=gi(e),i!==null&&i.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=e.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[me]=e}else Ba(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Qt(e),c=!1}else c=yu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return e.flags&256?(Qe(e),e):(Qe(e),null)}return Qe(e),(e.flags&128)!==0?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,c=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(c=i.alternate.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==c&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),so(e,e.updateQueue),Qt(e),null);case 4:return Rt(),t===null&&Ts(e.stateNode.containerInfo),Qt(e),null;case 10:return Un(e.type),Qt(e),null;case 19:if(ut(ee),i=e.memoizedState,i===null)return Qt(e),null;if(c=(e.flags&128)!==0,u=i.rendering,u===null)if(c)Ml(i,!1);else{if(It!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Fr(t),u!==null){for(e.flags|=128,Ml(i,!1),t=u.updateQueue,e.updateQueue=t,so(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)j0(n,t),n=n.sibling;return ot(ee,ee.current&1|2),Nt&&Ln(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&qe()>go&&(e.flags|=128,c=!0,Ml(i,!1),e.lanes=4194304)}else{if(!c)if(t=Fr(u),t!==null){if(e.flags|=128,c=!0,t=t.updateQueue,e.updateQueue=t,so(e,t),Ml(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Nt)return Qt(e),null}else 2*qe()-i.renderingStartTime>go&&n!==536870912&&(e.flags|=128,c=!0,Ml(i,!1),e.lanes=4194304);i.isBackwards?(u.sibling=e.child,e.child=u):(t=i.last,t!==null?t.sibling=u:e.child=u,i.last=u)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=qe(),t.sibling=null,n=ee.current,ot(ee,c?n&1|2:n&1),Nt&&Ln(e,i.treeForkCount),t):(Qt(e),null);case 22:case 23:return Qe(e),Cu(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(n&536870912)!==0&&(e.flags&128)===0&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),n=e.updateQueue,n!==null&&so(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&ut(qa),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Un(ie),Qt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function L2(t,e){switch(gu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Un(ie),Rt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return it(e),null;case 31:if(e.memoizedState!==null){if(Qe(e),e.alternate===null)throw Error(r(340));Ba()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Qe(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));Ba()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(ee),null;case 4:return Rt(),null;case 10:return Un(e.type),null;case 22:case 23:return Qe(e),Cu(),t!==null&&ut(qa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Un(ie),null;case 25:return null;default:return null}}function $h(t,e){switch(gu(e),e.tag){case 3:Un(ie),Rt();break;case 26:case 27:case 5:it(e);break;case 4:Rt();break;case 31:e.memoizedState!==null&&Qe(e);break;case 13:Qe(e);break;case 19:ut(ee);break;case 10:Un(e.type);break;case 22:case 23:Qe(e),Cu(),t!==null&&ut(qa);break;case 24:Un(ie)}}function El(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var c=i.next;n=c;do{if((n.tag&t)===t){i=void 0;var u=n.create,m=n.inst;i=u(),m.destroy=i}n=n.next}while(n!==c)}}catch(b){Bt(e,e.return,b)}}function pa(t,e,n){try{var i=e.updateQueue,c=i!==null?i.lastEffect:null;if(c!==null){var u=c.next;i=u;do{if((i.tag&t)===t){var m=i.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,c=e;var M=n,D=b;try{D()}catch(Y){Bt(c,M,Y)}}}i=i.next}while(i!==u)}}catch(Y){Bt(e,e.return,Y)}}function Fh(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Y0(e,n)}catch(i){Bt(t,t.return,i)}}}function Ih(t,e,n){n.props=Za(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){Bt(t,e,i)}}function zl(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(c){Bt(t,e,c)}}function Sn(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(c){Bt(t,e,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){Bt(t,e,c)}else n.current=null}function Ph(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(c){Bt(t,t.return,c)}}function us(t,e,n){try{var i=t.stateNode;iy(i,t.type,n,e),i[Te]=e}catch(c){Bt(t,t.return,c)}}function tm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&wa(t.type)||t.tag===4}function ss(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||tm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fs(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kn));else if(i!==4&&(i===27&&wa(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(fs(t,e,n),t=t.sibling;t!==null;)fs(t,e,n),t=t.sibling}function fo(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&wa(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(fo(t,e,n),t=t.sibling;t!==null;)fo(t,e,n),t=t.sibling}function em(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,c=e.attributes;c.length;)e.removeAttributeNode(c[0]);ye(e,i,n),e[me]=t,e[Te]=n}catch(u){Bt(t,t.return,u)}}var Xn=!1,oe=!1,ds=!1,nm=typeof WeakSet=="function"?WeakSet:Set,de=null;function B2(t,e){if(t=t.containerInfo,ks=ko,t=m0(t),lu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var c=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var m=0,b=-1,M=-1,D=0,Y=0,V=t,R=null;e:for(;;){for(var H;V!==n||c!==0&&V.nodeType!==3||(b=m+c),V!==u||i!==0&&V.nodeType!==3||(M=m+i),V.nodeType===3&&(m+=V.nodeValue.length),(H=V.firstChild)!==null;)R=V,V=H;for(;;){if(V===t)break e;if(R===n&&++D===c&&(b=m),R===u&&++Y===i&&(M=m),(H=V.nextSibling)!==null)break;V=R,R=V.parentNode}V=H}n=b===-1||M===-1?null:{start:b,end:M}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ds={focusedElem:t,selectionRange:n},ko=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){switch(e=de,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)c=t[n],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,c=u.memoizedProps,u=u.memoizedState,i=n.stateNode;try{var nt=Za(n.type,c);t=i.getSnapshotBeforeUpdate(nt,u),i.__reactInternalSnapshotBeforeUpdate=t}catch(mt){Bt(n,n.return,mt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Bs(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Bs(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}}function am(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Zn(t,n),i&4&&El(5,n);break;case 1:if(Zn(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(m){Bt(n,n.return,m)}else{var c=Za(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(c,e,t.__reactInternalSnapshotBeforeUpdate)}catch(m){Bt(n,n.return,m)}}i&64&&Fh(n),i&512&&zl(n,n.return);break;case 3:if(Zn(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Y0(t,e)}catch(m){Bt(n,n.return,m)}}break;case 27:e===null&&i&4&&em(n);case 26:case 5:Zn(t,n),e===null&&i&4&&Ph(n),i&512&&zl(n,n.return);break;case 12:Zn(t,n);break;case 31:Zn(t,n),i&4&&rm(t,n);break;case 13:Zn(t,n),i&4&&om(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Q2.bind(null,n),dy(t,n))));break;case 22:if(i=n.memoizedState!==null||Xn,!i){e=e!==null&&e.memoizedState!==null||oe,c=Xn;var u=oe;Xn=i,(oe=e)&&!u?Qn(t,n,(n.subtreeFlags&8772)!==0):Zn(t,n),Xn=c,oe=u}break;case 30:break;default:Zn(t,n)}}function im(t){var e=t.alternate;e!==null&&(t.alternate=null,im(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Gc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,Oe=!1;function Vn(t,e,n){for(n=n.child;n!==null;)lm(t,e,n),n=n.sibling}function lm(t,e,n){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount($i,n)}catch{}switch(n.tag){case 26:oe||Sn(n,e),Vn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:oe||Sn(n,e);var i=Jt,c=Oe;wa(n.type)&&(Jt=n.stateNode,Oe=!1),Vn(t,e,n),Rl(n.stateNode),Jt=i,Oe=c;break;case 5:oe||Sn(n,e);case 6:if(i=Jt,c=Oe,Jt=null,Vn(t,e,n),Jt=i,Oe=c,Jt!==null)if(Oe)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(n.stateNode)}catch(u){Bt(n,e,u)}else try{Jt.removeChild(n.stateNode)}catch(u){Bt(n,e,u)}break;case 18:Jt!==null&&(Oe?(t=Jt,Fm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Bi(t)):Fm(Jt,n.stateNode));break;case 4:i=Jt,c=Oe,Jt=n.stateNode.containerInfo,Oe=!0,Vn(t,e,n),Jt=i,Oe=c;break;case 0:case 11:case 14:case 15:pa(2,n,e),oe||pa(4,n,e),Vn(t,e,n);break;case 1:oe||(Sn(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Ih(n,e,i)),Vn(t,e,n);break;case 21:Vn(t,e,n);break;case 22:oe=(i=oe)||n.memoizedState!==null,Vn(t,e,n),oe=i;break;default:Vn(t,e,n)}}function rm(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Bi(t)}catch(n){Bt(e,e.return,n)}}}function om(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Bi(t)}catch(n){Bt(e,e.return,n)}}function U2(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new nm),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new nm),e;default:throw Error(r(435,t.tag))}}function ho(t,e){var n=U2(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var c=K2.bind(null,t,i);i.then(c,c)}})}function ke(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var c=n[i],u=t,m=e,b=m;t:for(;b!==null;){switch(b.tag){case 27:if(wa(b.type)){Jt=b.stateNode,Oe=!1;break t}break;case 5:Jt=b.stateNode,Oe=!1;break t;case 3:case 4:Jt=b.stateNode.containerInfo,Oe=!0;break t}b=b.return}if(Jt===null)throw Error(r(160));lm(u,m,c),Jt=null,Oe=!1,u=c.alternate,u!==null&&(u.return=null),c.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)cm(e,t),e=e.sibling}var mn=null;function cm(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ke(e,t),De(t),i&4&&(pa(3,t,t.return),El(3,t),pa(5,t,t.return));break;case 1:ke(e,t),De(t),i&512&&(oe||n===null||Sn(n,n.return)),i&64&&Xn&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var c=mn;if(ke(e,t),De(t),i&512&&(oe||n===null||Sn(n,n.return)),i&4){var u=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){t:{i=t.type,n=t.memoizedProps,c=c.ownerDocument||c;e:switch(i){case"title":u=c.getElementsByTagName("title")[0],(!u||u[Pi]||u[me]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=c.createElement(i),c.head.insertBefore(u,c.querySelector("head > title"))),ye(u,i,n),u[me]=t,fe(u),i=u;break t;case"link":var m=cp("link","href",c).get(i+(n.href||""));if(m){for(var b=0;b<m.length;b++)if(u=m[b],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(b,1);break e}}u=c.createElement(i),ye(u,i,n),c.head.appendChild(u);break;case"meta":if(m=cp("meta","content",c).get(i+(n.content||""))){for(b=0;b<m.length;b++)if(u=m[b],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(b,1);break e}}u=c.createElement(i),ye(u,i,n),c.head.appendChild(u);break;default:throw Error(r(468,i))}u[me]=t,fe(u),i=u}t.stateNode=i}else up(c,t.type,t.stateNode);else t.stateNode=op(c,i,t.memoizedProps);else u!==i?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,i===null?up(c,t.type,t.stateNode):op(c,i,t.memoizedProps)):i===null&&t.stateNode!==null&&us(t,t.memoizedProps,n.memoizedProps)}break;case 27:ke(e,t),De(t),i&512&&(oe||n===null||Sn(n,n.return)),n!==null&&i&4&&us(t,t.memoizedProps,n.memoizedProps);break;case 5:if(ke(e,t),De(t),i&512&&(oe||n===null||Sn(n,n.return)),t.flags&32){c=t.stateNode;try{ri(c,"")}catch(nt){Bt(t,t.return,nt)}}i&4&&t.stateNode!=null&&(c=t.memoizedProps,us(t,c,n!==null?n.memoizedProps:c)),i&1024&&(ds=!0);break;case 6:if(ke(e,t),De(t),i&4){if(t.stateNode===null)throw Error(r(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(nt){Bt(t,t.return,nt)}}break;case 3:if(_o=null,c=mn,mn=No(e.containerInfo),ke(e,t),mn=c,De(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Bi(e.containerInfo)}catch(nt){Bt(t,t.return,nt)}ds&&(ds=!1,um(t));break;case 4:i=mn,mn=No(t.stateNode.containerInfo),ke(e,t),De(t),mn=i;break;case 12:ke(e,t),De(t);break;case 31:ke(e,t),De(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,ho(t,i)));break;case 13:ke(e,t),De(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(po=qe()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,ho(t,i)));break;case 22:c=t.memoizedState!==null;var M=n!==null&&n.memoizedState!==null,D=Xn,Y=oe;if(Xn=D||c,oe=Y||M,ke(e,t),oe=Y,Xn=D,De(t),i&8192)t:for(e=t.stateNode,e._visibility=c?e._visibility&-2:e._visibility|1,c&&(n===null||M||Xn||oe||Qa(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){M=n=e;try{if(u=M.stateNode,c)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=M.stateNode;var V=M.memoizedProps.style,R=V!=null&&V.hasOwnProperty("display")?V.display:null;b.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(nt){Bt(M,M.return,nt)}}}else if(e.tag===6){if(n===null){M=e;try{M.stateNode.nodeValue=c?"":M.memoizedProps}catch(nt){Bt(M,M.return,nt)}}}else if(e.tag===18){if(n===null){M=e;try{var H=M.stateNode;c?Im(H,!0):Im(M.stateNode,!1)}catch(nt){Bt(M,M.return,nt)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,ho(t,n))));break;case 19:ke(e,t),De(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,ho(t,i)));break;case 30:break;case 21:break;default:ke(e,t),De(t)}}function De(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(tm(i)){n=i;break}i=i.return}if(n==null)throw Error(r(160));switch(n.tag){case 27:var c=n.stateNode,u=ss(t);fo(t,u,c);break;case 5:var m=n.stateNode;n.flags&32&&(ri(m,""),n.flags&=-33);var b=ss(t);fo(t,b,m);break;case 3:case 4:var M=n.stateNode.containerInfo,D=ss(t);fs(t,D,M);break;default:throw Error(r(161))}}catch(Y){Bt(t,t.return,Y)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function um(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;um(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Zn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)am(t,e.alternate,e),e=e.sibling}function Qa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:pa(4,e,e.return),Qa(e);break;case 1:Sn(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Ih(e,e.return,n),Qa(e);break;case 27:Rl(e.stateNode);case 26:case 5:Sn(e,e.return),Qa(e);break;case 22:e.memoizedState===null&&Qa(e);break;case 30:Qa(e);break;default:Qa(e)}t=t.sibling}}function Qn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,c=t,u=e,m=u.flags;switch(u.tag){case 0:case 11:case 15:Qn(c,u,n),El(4,u);break;case 1:if(Qn(c,u,n),i=u,c=i.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(D){Bt(i,i.return,D)}if(i=u,c=i.updateQueue,c!==null){var b=i.stateNode;try{var M=c.shared.hiddenCallbacks;if(M!==null)for(c.shared.hiddenCallbacks=null,c=0;c<M.length;c++)q0(M[c],b)}catch(D){Bt(i,i.return,D)}}n&&m&64&&Fh(u),zl(u,u.return);break;case 27:em(u);case 26:case 5:Qn(c,u,n),n&&i===null&&m&4&&Ph(u),zl(u,u.return);break;case 12:Qn(c,u,n);break;case 31:Qn(c,u,n),n&&m&4&&rm(c,u);break;case 13:Qn(c,u,n),n&&m&4&&om(c,u);break;case 22:u.memoizedState===null&&Qn(c,u,n),zl(u,u.return);break;case 30:break;default:Qn(c,u,n)}e=e.sibling}}function hs(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&dl(n))}function ms(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&dl(t))}function pn(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sm(t,e,n,i),e=e.sibling}function sm(t,e,n,i){var c=e.flags;switch(e.tag){case 0:case 11:case 15:pn(t,e,n,i),c&2048&&El(9,e);break;case 1:pn(t,e,n,i);break;case 3:pn(t,e,n,i),c&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&dl(t)));break;case 12:if(c&2048){pn(t,e,n,i),t=e.stateNode;try{var u=e.memoizedProps,m=u.id,b=u.onPostCommit;typeof b=="function"&&b(m,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(M){Bt(e,e.return,M)}}else pn(t,e,n,i);break;case 31:pn(t,e,n,i);break;case 13:pn(t,e,n,i);break;case 23:break;case 22:u=e.stateNode,m=e.alternate,e.memoizedState!==null?u._visibility&2?pn(t,e,n,i):Nl(t,e):u._visibility&2?pn(t,e,n,i):(u._visibility|=2,zi(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),c&2048&&hs(m,e);break;case 24:pn(t,e,n,i),c&2048&&ms(e.alternate,e);break;default:pn(t,e,n,i)}}function zi(t,e,n,i,c){for(c=c&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,m=e,b=n,M=i,D=m.flags;switch(m.tag){case 0:case 11:case 15:zi(u,m,b,M,c),El(8,m);break;case 23:break;case 22:var Y=m.stateNode;m.memoizedState!==null?Y._visibility&2?zi(u,m,b,M,c):Nl(u,m):(Y._visibility|=2,zi(u,m,b,M,c)),c&&D&2048&&hs(m.alternate,m);break;case 24:zi(u,m,b,M,c),c&&D&2048&&ms(m.alternate,m);break;default:zi(u,m,b,M,c)}e=e.sibling}}function Nl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,c=i.flags;switch(i.tag){case 22:Nl(n,i),c&2048&&hs(i.alternate,i);break;case 24:Nl(n,i),c&2048&&ms(i.alternate,i);break;default:Nl(n,i)}e=e.sibling}}var Al=8192;function Ni(t,e,n){if(t.subtreeFlags&Al)for(t=t.child;t!==null;)fm(t,e,n),t=t.sibling}function fm(t,e,n){switch(t.tag){case 26:Ni(t,e,n),t.flags&Al&&t.memoizedState!==null&&My(n,mn,t.memoizedState,t.memoizedProps);break;case 5:Ni(t,e,n);break;case 3:case 4:var i=mn;mn=No(t.stateNode.containerInfo),Ni(t,e,n),mn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Al,Al=16777216,Ni(t,e,n),Al=i):Ni(t,e,n));break;default:Ni(t,e,n)}}function dm(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function _l(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];de=i,mm(i,t)}dm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hm(t),t=t.sibling}function hm(t){switch(t.tag){case 0:case 11:case 15:_l(t),t.flags&2048&&pa(9,t,t.return);break;case 3:_l(t);break;case 12:_l(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,mo(t)):_l(t);break;default:_l(t)}}function mo(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];de=i,mm(i,t)}dm(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:pa(8,e,e.return),mo(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,mo(e));break;default:mo(e)}t=t.sibling}}function mm(t,e){for(;de!==null;){var n=de;switch(n.tag){case 0:case 11:case 15:pa(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:dl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,de=i;else t:for(n=t;de!==null;){i=de;var c=i.sibling,u=i.return;if(im(i),i===n){de=null;break t}if(c!==null){c.return=u,de=c;break t}de=u}}}var H2={getCacheForType:function(t){var e=ge(ie),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return ge(ie).controller.signal}},q2=typeof WeakMap=="function"?WeakMap:Map,Dt=0,Gt=null,St=null,Et=0,Lt=0,Ke=null,ga=!1,Ai=!1,ps=!1,Kn=0,It=0,va=0,Ka=0,gs=0,Je=0,_i=0,Tl=null,Re=null,vs=!1,po=0,pm=0,go=1/0,vo=null,ya=null,se=0,xa=null,Ti=null,Jn=0,ys=0,xs=null,gm=null,Cl=0,bs=null;function We(){return(Dt&2)!==0&&Et!==0?Et&-Et:j.T!==null?zs():Od()}function vm(){if(Je===0)if((Et&536870912)===0||Nt){var t=Mr;Mr<<=1,(Mr&3932160)===0&&(Mr=262144),Je=t}else Je=536870912;return t=Ze.current,t!==null&&(t.flags|=32),Je}function Le(t,e,n){(t===Gt&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)&&(Ci(t,0),ba(t,Et,Je,!1)),Ii(t,n),((Dt&2)===0||t!==Gt)&&(t===Gt&&((Dt&2)===0&&(Ka|=n),It===4&&ba(t,Et,Je,!1)),wn(t))}function ym(t,e,n){if((Dt&6)!==0)throw Error(r(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Fi(t,e),c=i?X2(t,e):ws(t,e,!0),u=i;do{if(c===0){Ai&&!i&&ba(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!Y2(n)){c=ws(t,e,!1),u=!1;continue}if(c===2){if(u=e,t.errorRecoveryDisabledLanes&u)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){e=m;t:{var b=t;c=Tl;var M=b.current.memoizedState.isDehydrated;if(M&&(Ci(b,m).flags|=256),m=ws(b,m,!1),m!==2){if(ps&&!M){b.errorRecoveryDisabledLanes|=u,Ka|=u,c=4;break t}u=Re,Re=c,u!==null&&(Re===null?Re=u:Re.push.apply(Re,u))}c=m}if(u=!1,c!==2)continue}}if(c===1){Ci(t,0),ba(t,e,0,!0);break}t:{switch(i=t,u=c,u){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:ba(i,e,Je,!ga);break t;case 2:Re=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(c=po+300-qe(),10<c)){if(ba(i,e,Je,!ga),zr(i,0,!0)!==0)break t;Jn=e,i.timeoutHandle=Wm(xm.bind(null,i,n,Re,vo,vs,e,Je,Ka,_i,ga,u,"Throttled",-0,0),c);break t}xm(i,n,Re,vo,vs,e,Je,Ka,_i,ga,u,null,-0,0)}}break}while(!0);wn(t)}function xm(t,e,n,i,c,u,m,b,M,D,Y,V,R,H){if(t.timeoutHandle=-1,V=e.subtreeFlags,V&8192||(V&16785408)===16785408){V={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:kn},fm(e,u,V);var nt=(u&62914560)===u?po-qe():(u&4194048)===u?pm-qe():0;if(nt=Ey(V,nt),nt!==null){Jn=u,t.cancelPendingCommit=nt(Nm.bind(null,t,e,u,n,i,c,m,b,M,Y,V,null,R,H)),ba(t,u,m,!D);return}}Nm(t,e,u,n,i,c,m,b,M)}function Y2(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var c=n[i],u=c.getSnapshot;c=c.value;try{if(!Xe(u(),c))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ba(t,e,n,i){e&=~gs,e&=~Ka,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var c=e;0<c;){var u=31-Ge(c),m=1<<u;i[u]=-1,c&=~m}n!==0&&_d(t,n,e)}function yo(){return(Dt&6)===0?(Ol(0),!1):!0}function Ss(){if(St!==null){if(Lt===0)var t=St.return;else t=St,Bn=Ua=null,Bu(t),Si=null,ml=0,t=St;for(;t!==null;)$h(t.alternate,t),t=t.return;St=null}}function Ci(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,oy(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Jn=0,Ss(),Gt=t,St=n=Rn(t.current,null),Et=e,Lt=0,Ke=null,ga=!1,Ai=Fi(t,e),ps=!1,_i=Je=gs=Ka=va=It=0,Re=Tl=null,vs=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var c=31-Ge(i),u=1<<c;e|=t[c],i&=~u}return Kn=e,Ur(),n}function bm(t,e){yt=null,j.H=wl,e===bi||e===Qr?(e=L0(),Lt=3):e===Eu?(e=L0(),Lt=4):Lt=e===Pu?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ke=e,St===null&&(It=1,ro(t,nn(e,t.current)))}function Sm(){var t=Ze.current;return t===null?!0:(Et&4194048)===Et?on===null:(Et&62914560)===Et||(Et&536870912)!==0?t===on:!1}function wm(){var t=j.H;return j.H=wl,t===null?wl:t}function jm(){var t=j.A;return j.A=H2,t}function xo(){It=4,ga||(Et&4194048)!==Et&&Ze.current!==null||(Ai=!0),(va&134217727)===0&&(Ka&134217727)===0||Gt===null||ba(Gt,Et,Je,!1)}function ws(t,e,n){var i=Dt;Dt|=2;var c=wm(),u=jm();(Gt!==t||Et!==e)&&(vo=null,Ci(t,e)),e=!1;var m=It;t:do try{if(Lt!==0&&St!==null){var b=St,M=Ke;switch(Lt){case 8:Ss(),m=6;break t;case 3:case 2:case 9:case 6:Ze.current===null&&(e=!0);var D=Lt;if(Lt=0,Ke=null,Oi(t,b,M,D),n&&Ai){m=0;break t}break;default:D=Lt,Lt=0,Ke=null,Oi(t,b,M,D)}}G2(),m=It;break}catch(Y){bm(t,Y)}while(!0);return e&&t.shellSuspendCounter++,Bn=Ua=null,Dt=i,j.H=c,j.A=u,St===null&&(Gt=null,Et=0,Ur()),m}function G2(){for(;St!==null;)Mm(St)}function X2(t,e){var n=Dt;Dt|=2;var i=wm(),c=jm();Gt!==t||Et!==e?(vo=null,go=qe()+500,Ci(t,e)):Ai=Fi(t,e);t:do try{if(Lt!==0&&St!==null){e=St;var u=Ke;e:switch(Lt){case 1:Lt=0,Ke=null,Oi(t,e,u,1);break;case 2:case 9:if(D0(u)){Lt=0,Ke=null,Em(e);break}e=function(){Lt!==2&&Lt!==9||Gt!==t||(Lt=7),wn(t)},u.then(e,e);break t;case 3:Lt=7;break t;case 4:Lt=5;break t;case 7:D0(u)?(Lt=0,Ke=null,Em(e)):(Lt=0,Ke=null,Oi(t,e,u,7));break;case 5:var m=null;switch(St.tag){case 26:m=St.memoizedState;case 5:case 27:var b=St;if(m?sp(m):b.stateNode.complete){Lt=0,Ke=null;var M=b.sibling;if(M!==null)St=M;else{var D=b.return;D!==null?(St=D,bo(D)):St=null}break e}}Lt=0,Ke=null,Oi(t,e,u,5);break;case 6:Lt=0,Ke=null,Oi(t,e,u,6);break;case 8:Ss(),It=6;break t;default:throw Error(r(462))}}V2();break}catch(Y){bm(t,Y)}while(!0);return Bn=Ua=null,j.H=i,j.A=c,Dt=n,St!==null?0:(Gt=null,Et=0,Ur(),It)}function V2(){for(;St!==null&&!hv();)Mm(St)}function Mm(t){var e=Jh(t.alternate,t,Kn);t.memoizedProps=t.pendingProps,e===null?bo(t):St=e}function Em(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Gh(n,e,e.pendingProps,e.type,void 0,Et);break;case 11:e=Gh(n,e,e.pendingProps,e.type.render,e.ref,Et);break;case 5:Bu(e);default:$h(n,e),e=St=j0(e,Kn),e=Jh(n,e,Kn)}t.memoizedProps=t.pendingProps,e===null?bo(t):St=e}function Oi(t,e,n,i){Bn=Ua=null,Bu(e),Si=null,ml=0;var c=e.return;try{if(O2(t,c,e,n,Et)){It=1,ro(t,nn(n,t.current)),St=null;return}}catch(u){if(c!==null)throw St=c,u;It=1,ro(t,nn(n,t.current)),St=null;return}e.flags&32768?(Nt||i===1?t=!0:Ai||(Et&536870912)!==0?t=!1:(ga=t=!0,(i===2||i===9||i===3||i===6)&&(i=Ze.current,i!==null&&i.tag===13&&(i.flags|=16384))),zm(e,t)):bo(e)}function bo(t){var e=t;do{if((e.flags&32768)!==0){zm(e,ga);return}t=e.return;var n=R2(e.alternate,e,Kn);if(n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);It===0&&(It=5)}function zm(t,e){do{var n=L2(t.alternate,t);if(n!==null){n.flags&=32767,St=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){St=t;return}St=t=n}while(t!==null);It=6,St=null}function Nm(t,e,n,i,c,u,m,b,M){t.cancelPendingCommit=null;do So();while(se!==0);if((Dt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(u=e.lanes|e.childLanes,u|=su,jv(t,n,u,m,b,M),t===Gt&&(St=Gt=null,Et=0),Ti=e,xa=t,Jn=n,ys=u,xs=c,gm=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,J2(wr,function(){return Om(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=j.T,j.T=null,c=C.p,C.p=2,m=Dt,Dt|=4;try{B2(t,e,n)}finally{Dt=m,C.p=c,j.T=i}}se=1,Am(),_m(),Tm()}}function Am(){if(se===1){se=0;var t=xa,e=Ti,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=j.T,j.T=null;var i=C.p;C.p=2;var c=Dt;Dt|=4;try{cm(e,t);var u=Ds,m=m0(t.containerInfo),b=u.focusedElem,M=u.selectionRange;if(m!==b&&b&&b.ownerDocument&&h0(b.ownerDocument.documentElement,b)){if(M!==null&&lu(b)){var D=M.start,Y=M.end;if(Y===void 0&&(Y=D),"selectionStart"in b)b.selectionStart=D,b.selectionEnd=Math.min(Y,b.value.length);else{var V=b.ownerDocument||document,R=V&&V.defaultView||window;if(R.getSelection){var H=R.getSelection(),nt=b.textContent.length,mt=Math.min(M.start,nt),qt=M.end===void 0?mt:Math.min(M.end,nt);!H.extend&&mt>qt&&(m=qt,qt=mt,mt=m);var _=d0(b,mt),z=d0(b,qt);if(_&&z&&(H.rangeCount!==1||H.anchorNode!==_.node||H.anchorOffset!==_.offset||H.focusNode!==z.node||H.focusOffset!==z.offset)){var k=V.createRange();k.setStart(_.node,_.offset),H.removeAllRanges(),mt>qt?(H.addRange(k),H.extend(z.node,z.offset)):(k.setEnd(z.node,z.offset),H.addRange(k))}}}}for(V=[],H=b;H=H.parentNode;)H.nodeType===1&&V.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<V.length;b++){var X=V[b];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}ko=!!ks,Ds=ks=null}finally{Dt=c,C.p=i,j.T=n}}t.current=e,se=2}}function _m(){if(se===2){se=0;var t=xa,e=Ti,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=j.T,j.T=null;var i=C.p;C.p=2;var c=Dt;Dt|=4;try{am(t,e.alternate,e)}finally{Dt=c,C.p=i,j.T=n}}se=3}}function Tm(){if(se===4||se===3){se=0,mv();var t=xa,e=Ti,n=Jn,i=gm;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?se=5:(se=0,Ti=xa=null,Cm(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ya=null),qc(n),e=e.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot($i,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=j.T,c=C.p,C.p=2,j.T=null;try{for(var u=t.onRecoverableError,m=0;m<i.length;m++){var b=i[m];u(b.value,{componentStack:b.stack})}}finally{j.T=e,C.p=c}}(Jn&3)!==0&&So(),wn(t),c=t.pendingLanes,(n&261930)!==0&&(c&42)!==0?t===bs?Cl++:(Cl=0,bs=t):Cl=0,Ol(0)}}function Cm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,dl(e)))}function So(){return Am(),_m(),Tm(),Om()}function Om(){if(se!==5)return!1;var t=xa,e=ys;ys=0;var n=qc(Jn),i=j.T,c=C.p;try{C.p=32>n?32:n,j.T=null,n=xs,xs=null;var u=xa,m=Jn;if(se=0,Ti=xa=null,Jn=0,(Dt&6)!==0)throw Error(r(331));var b=Dt;if(Dt|=4,hm(u.current),sm(u,u.current,m,n),Dt=b,Ol(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot($i,u)}catch{}return!0}finally{C.p=c,j.T=i,Cm(t,e)}}function km(t,e,n){e=nn(n,e),e=Iu(t.stateNode,e,2),t=da(t,e,2),t!==null&&(Ii(t,2),wn(t))}function Bt(t,e,n){if(t.tag===3)km(t,t,n);else for(;e!==null;){if(e.tag===3){km(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ya===null||!ya.has(i))){t=nn(n,t),n=Dh(2),i=da(e,n,2),i!==null&&(Rh(n,i,e,t),Ii(i,2),wn(i));break}}e=e.return}}function js(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new q2;var c=new Set;i.set(e,c)}else c=i.get(e),c===void 0&&(c=new Set,i.set(e,c));c.has(n)||(ps=!0,c.add(n),t=Z2.bind(null,t,e,n),e.then(t,t))}function Z2(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Gt===t&&(Et&n)===n&&(It===4||It===3&&(Et&62914560)===Et&&300>qe()-po?(Dt&2)===0&&Ci(t,0):gs|=n,_i===Et&&(_i=0)),wn(t)}function Dm(t,e){e===0&&(e=Ad()),t=Ra(t,e),t!==null&&(Ii(t,e),wn(t))}function Q2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Dm(t,n)}function K2(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,c=t.memoizedState;c!==null&&(n=c.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(r(314))}i!==null&&i.delete(e),Dm(t,n)}function J2(t,e){return Lc(t,e)}var wo=null,ki=null,Ms=!1,jo=!1,Es=!1,Sa=0;function wn(t){t!==ki&&t.next===null&&(ki===null?wo=ki=t:ki=ki.next=t),jo=!0,Ms||(Ms=!0,$2())}function Ol(t,e){if(!Es&&jo){Es=!0;do for(var n=!1,i=wo;i!==null;){if(t!==0){var c=i.pendingLanes;if(c===0)var u=0;else{var m=i.suspendedLanes,b=i.pingedLanes;u=(1<<31-Ge(42|t)+1)-1,u&=c&~(m&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Um(i,u))}else u=Et,u=zr(i,i===Gt?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||Fi(i,u)||(n=!0,Um(i,u));i=i.next}while(n);Es=!1}}function W2(){Rm()}function Rm(){jo=Ms=!1;var t=0;Sa!==0&&ry()&&(t=Sa);for(var e=qe(),n=null,i=wo;i!==null;){var c=i.next,u=Lm(i,e);u===0?(i.next=null,n===null?wo=c:n.next=c,c===null&&(ki=n)):(n=i,(t!==0||(u&3)!==0)&&(jo=!0)),i=c}se!==0&&se!==5||Ol(t),Sa!==0&&(Sa=0)}function Lm(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,c=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var m=31-Ge(u),b=1<<m,M=c[m];M===-1?((b&n)===0||(b&i)!==0)&&(c[m]=wv(b,e)):M<=e&&(t.expiredLanes|=b),u&=~b}if(e=Gt,n=Et,n=zr(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Bc(i),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Fi(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Bc(i),qc(n)){case 2:case 8:n=zd;break;case 32:n=wr;break;case 268435456:n=Nd;break;default:n=wr}return i=Bm.bind(null,t),n=Lc(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Bc(i),t.callbackPriority=2,t.callbackNode=null,2}function Bm(t,e){if(se!==0&&se!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(So()&&t.callbackNode!==n)return null;var i=Et;return i=zr(t,t===Gt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(ym(t,i,e),Lm(t,qe()),t.callbackNode!=null&&t.callbackNode===n?Bm.bind(null,t):null)}function Um(t,e){if(So())return null;ym(t,e,!0)}function $2(){cy(function(){(Dt&6)!==0?Lc(Ed,W2):Rm()})}function zs(){if(Sa===0){var t=yi;t===0&&(t=jr,jr<<=1,(jr&261888)===0&&(jr=256)),Sa=t}return Sa}function Hm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Tr(""+t)}function qm(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function F2(t,e,n,i,c){if(e==="submit"&&n&&n.stateNode===c){var u=Hm((c[Te]||null).action),m=i.submitter;m&&(e=(e=m[Te]||null)?Hm(e.formAction):m.getAttribute("formAction"),e!==null&&(u=e,m=null));var b=new Dr("action","action",null,i,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Sa!==0){var M=m?qm(c,m):new FormData(c);Qu(n,{pending:!0,data:M,method:c.method,action:u},null,M)}}else typeof u=="function"&&(b.preventDefault(),M=m?qm(c,m):new FormData(c),Qu(n,{pending:!0,data:M,method:c.method,action:u},u,M))},currentTarget:c}]})}}for(var Ns=0;Ns<uu.length;Ns++){var As=uu[Ns],I2=As.toLowerCase(),P2=As[0].toUpperCase()+As.slice(1);hn(I2,"on"+P2)}hn(v0,"onAnimationEnd"),hn(y0,"onAnimationIteration"),hn(x0,"onAnimationStart"),hn("dblclick","onDoubleClick"),hn("focusin","onFocus"),hn("focusout","onBlur"),hn(p2,"onTransitionRun"),hn(g2,"onTransitionStart"),hn(v2,"onTransitionCancel"),hn(b0,"onTransitionEnd"),ii("onMouseEnter",["mouseout","mouseover"]),ii("onMouseLeave",["mouseout","mouseover"]),ii("onPointerEnter",["pointerout","pointerover"]),ii("onPointerLeave",["pointerout","pointerover"]),Ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ty=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kl));function Ym(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],c=i.event;i=i.listeners;t:{var u=void 0;if(e)for(var m=i.length-1;0<=m;m--){var b=i[m],M=b.instance,D=b.currentTarget;if(b=b.listener,M!==u&&c.isPropagationStopped())break t;u=b,c.currentTarget=D;try{u(c)}catch(Y){Br(Y)}c.currentTarget=null,u=M}else for(m=0;m<i.length;m++){if(b=i[m],M=b.instance,D=b.currentTarget,b=b.listener,M!==u&&c.isPropagationStopped())break t;u=b,c.currentTarget=D;try{u(c)}catch(Y){Br(Y)}c.currentTarget=null,u=M}}}}function wt(t,e){var n=e[Yc];n===void 0&&(n=e[Yc]=new Set);var i=t+"__bubble";n.has(i)||(Gm(e,t,2,!1),n.add(i))}function _s(t,e,n){var i=0;e&&(i|=4),Gm(n,t,i,e)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function Ts(t){if(!t[Mo]){t[Mo]=!0,Rd.forEach(function(n){n!=="selectionchange"&&(ty.has(n)||_s(n,!1,t),_s(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mo]||(e[Mo]=!0,_s("selectionchange",!1,e))}}function Gm(t,e,n,i){switch(vp(e)){case 2:var c=Ay;break;case 8:c=_y;break;default:c=Zs}n=c.bind(null,e,n,t),c=void 0,!$c||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(c=!0),i?c!==void 0?t.addEventListener(e,n,{capture:!0,passive:c}):t.addEventListener(e,n,!0):c!==void 0?t.addEventListener(e,n,{passive:c}):t.addEventListener(e,n,!1)}function Cs(t,e,n,i,c){var u=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var m=i.tag;if(m===3||m===4){var b=i.stateNode.containerInfo;if(b===c)break;if(m===4)for(m=i.return;m!==null;){var M=m.tag;if((M===3||M===4)&&m.stateNode.containerInfo===c)return;m=m.return}for(;b!==null;){if(m=ei(b),m===null)return;if(M=m.tag,M===5||M===6||M===26||M===27){i=u=m;continue t}b=b.parentNode}}i=i.return}Kd(function(){var D=u,Y=Jc(n),V=[];t:{var R=S0.get(t);if(R!==void 0){var H=Dr,nt=t;switch(t){case"keypress":if(Or(n)===0)break t;case"keydown":case"keyup":H=Kv;break;case"focusin":nt="focus",H=tu;break;case"focusout":nt="blur",H=tu;break;case"beforeblur":case"afterblur":H=tu;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=$d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=$v;break;case v0:case y0:case x0:H=Uv;break;case b0:H=Iv;break;case"scroll":case"scrollend":H=kv;break;case"wheel":H=t2;break;case"copy":case"cut":case"paste":H=qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Id;break;case"toggle":case"beforetoggle":H=n2}var mt=(e&4)!==0,qt=!mt&&(t==="scroll"||t==="scrollend"),_=mt?R!==null?R+"Capture":null:R;mt=[];for(var z=D,k;z!==null;){var X=z;if(k=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||k===null||_===null||(X=el(z,_),X!=null&&mt.push(Dl(z,X,k))),qt)break;z=z.return}0<mt.length&&(R=new H(R,nt,null,n,Y),V.push({event:R,listeners:mt}))}}if((e&7)===0){t:{if(R=t==="mouseover"||t==="pointerover",H=t==="mouseout"||t==="pointerout",R&&n!==Kc&&(nt=n.relatedTarget||n.fromElement)&&(ei(nt)||nt[ti]))break t;if((H||R)&&(R=Y.window===Y?Y:(R=Y.ownerDocument)?R.defaultView||R.parentWindow:window,H?(nt=n.relatedTarget||n.toElement,H=D,nt=nt?ei(nt):null,nt!==null&&(qt=d(nt),mt=nt.tag,nt!==qt||mt!==5&&mt!==27&&mt!==6)&&(nt=null)):(H=null,nt=D),H!==nt)){if(mt=$d,X="onMouseLeave",_="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(mt=Id,X="onPointerLeave",_="onPointerEnter",z="pointer"),qt=H==null?R:tl(H),k=nt==null?R:tl(nt),R=new mt(X,z+"leave",H,n,Y),R.target=qt,R.relatedTarget=k,X=null,ei(Y)===D&&(mt=new mt(_,z+"enter",nt,n,Y),mt.target=k,mt.relatedTarget=qt,X=mt),qt=X,H&&nt)e:{for(mt=ey,_=H,z=nt,k=0,X=_;X;X=mt(X))k++;X=0;for(var st=z;st;st=mt(st))X++;for(;0<k-X;)_=mt(_),k--;for(;0<X-k;)z=mt(z),X--;for(;k--;){if(_===z||z!==null&&_===z.alternate){mt=_;break e}_=mt(_),z=mt(z)}mt=null}else mt=null;H!==null&&Xm(V,R,H,mt,!1),nt!==null&&qt!==null&&Xm(V,qt,nt,mt,!0)}}t:{if(R=D?tl(D):window,H=R.nodeName&&R.nodeName.toLowerCase(),H==="select"||H==="input"&&R.type==="file")var Ct=r0;else if(i0(R))if(o0)Ct=d2;else{Ct=s2;var lt=u2}else H=R.nodeName,!H||H.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?D&&Qc(D.elementType)&&(Ct=r0):Ct=f2;if(Ct&&(Ct=Ct(t,D))){l0(V,Ct,n,Y);break t}lt&&lt(t,R,D),t==="focusout"&&D&&R.type==="number"&&D.memoizedProps.value!=null&&Zc(R,"number",R.value)}switch(lt=D?tl(D):window,t){case"focusin":(i0(lt)||lt.contentEditable==="true")&&(si=lt,ru=D,ul=null);break;case"focusout":ul=ru=si=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,p0(V,n,Y);break;case"selectionchange":if(m2)break;case"keydown":case"keyup":p0(V,n,Y)}var xt;if(nu)t:{switch(t){case"compositionstart":var zt="onCompositionStart";break t;case"compositionend":zt="onCompositionEnd";break t;case"compositionupdate":zt="onCompositionUpdate";break t}zt=void 0}else ui?n0(t,n)&&(zt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(zt="onCompositionStart");zt&&(Pd&&n.locale!=="ko"&&(ui||zt!=="onCompositionStart"?zt==="onCompositionEnd"&&ui&&(xt=Jd()):(la=Y,Fc="value"in la?la.value:la.textContent,ui=!0)),lt=Eo(D,zt),0<lt.length&&(zt=new Fd(zt,t,null,n,Y),V.push({event:zt,listeners:lt}),xt?zt.data=xt:(xt=a0(n),xt!==null&&(zt.data=xt)))),(xt=i2?l2(t,n):r2(t,n))&&(zt=Eo(D,"onBeforeInput"),0<zt.length&&(lt=new Fd("onBeforeInput","beforeinput",null,n,Y),V.push({event:lt,listeners:zt}),lt.data=xt)),F2(V,t,D,n,Y)}Ym(V,e)})}function Dl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Eo(t,e){for(var n=e+"Capture",i=[];t!==null;){var c=t,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=el(t,n),c!=null&&i.unshift(Dl(t,c,u)),c=el(t,e),c!=null&&i.push(Dl(t,c,u))),t.tag===3)return i;t=t.return}return[]}function ey(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Xm(t,e,n,i,c){for(var u=e._reactName,m=[];n!==null&&n!==i;){var b=n,M=b.alternate,D=b.stateNode;if(b=b.tag,M!==null&&M===i)break;b!==5&&b!==26&&b!==27||D===null||(M=D,c?(D=el(n,u),D!=null&&m.unshift(Dl(n,D,M))):c||(D=el(n,u),D!=null&&m.push(Dl(n,D,M)))),n=n.return}m.length!==0&&t.push({event:e,listeners:m})}var ny=/\r\n?/g,ay=/\u0000|\uFFFD/g;function Vm(t){return(typeof t=="string"?t:""+t).replace(ny,`
`).replace(ay,"")}function Zm(t,e){return e=Vm(e),Vm(t)===e}function Ht(t,e,n,i,c,u){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||ri(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&ri(t,""+i);break;case"className":Ar(t,"class",i);break;case"tabIndex":Ar(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ar(t,n,i);break;case"style":Zd(t,i,u);break;case"data":if(e!=="object"){Ar(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Tr(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&Ht(t,e,"name",c.name,c,null),Ht(t,e,"formEncType",c.formEncType,c,null),Ht(t,e,"formMethod",c.formMethod,c,null),Ht(t,e,"formTarget",c.formTarget,c,null)):(Ht(t,e,"encType",c.encType,c,null),Ht(t,e,"method",c.method,c,null),Ht(t,e,"target",c.target,c,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Tr(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=kn);break;case"onScroll":i!=null&&wt("scroll",t);break;case"onScrollEnd":i!=null&&wt("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(r(61));if(n=i.__html,n!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Tr(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":wt("beforetoggle",t),wt("toggle",t),Nr(t,"popover",i);break;case"xlinkActuate":On(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":On(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":On(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":On(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":On(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":On(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":On(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":On(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":On(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Nr(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Cv.get(n)||n,Nr(t,n,i))}}function Os(t,e,n,i,c,u){switch(n){case"style":Zd(t,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(r(61));if(n=i.__html,n!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=n}}break;case"children":typeof i=="string"?ri(t,i):(typeof i=="number"||typeof i=="bigint")&&ri(t,""+i);break;case"onScroll":i!=null&&wt("scroll",t);break;case"onScrollEnd":i!=null&&wt("scrollend",t);break;case"onClick":i!=null&&(t.onclick=kn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ld.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),e=n.slice(2,c?n.length-7:void 0),u=t[Te]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,c),typeof i=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,c);break t}n in t?t[n]=i:i===!0?t.setAttribute(n,""):Nr(t,n,i)}}}function ye(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":wt("error",t),wt("load",t);var i=!1,c=!1,u;for(u in n)if(n.hasOwnProperty(u)){var m=n[u];if(m!=null)switch(u){case"src":i=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Ht(t,e,u,m,n,null)}}c&&Ht(t,e,"srcSet",n.srcSet,n,null),i&&Ht(t,e,"src",n.src,n,null);return;case"input":wt("invalid",t);var b=u=m=c=null,M=null,D=null;for(i in n)if(n.hasOwnProperty(i)){var Y=n[i];if(Y!=null)switch(i){case"name":c=Y;break;case"type":m=Y;break;case"checked":M=Y;break;case"defaultChecked":D=Y;break;case"value":u=Y;break;case"defaultValue":b=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(r(137,e));break;default:Ht(t,e,i,Y,n,null)}}Yd(t,u,b,M,D,m,c,!1);return;case"select":wt("invalid",t),i=m=u=null;for(c in n)if(n.hasOwnProperty(c)&&(b=n[c],b!=null))switch(c){case"value":u=b;break;case"defaultValue":m=b;break;case"multiple":i=b;default:Ht(t,e,c,b,n,null)}e=u,n=m,t.multiple=!!i,e!=null?li(t,!!i,e,!1):n!=null&&li(t,!!i,n,!0);return;case"textarea":wt("invalid",t),u=c=i=null;for(m in n)if(n.hasOwnProperty(m)&&(b=n[m],b!=null))switch(m){case"value":i=b;break;case"defaultValue":c=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ht(t,e,m,b,n,null)}Xd(t,i,c,u);return;case"option":for(M in n)n.hasOwnProperty(M)&&(i=n[M],i!=null)&&(M==="selected"?t.selected=i&&typeof i!="function"&&typeof i!="symbol":Ht(t,e,M,i,n,null));return;case"dialog":wt("beforetoggle",t),wt("toggle",t),wt("cancel",t),wt("close",t);break;case"iframe":case"object":wt("load",t);break;case"video":case"audio":for(i=0;i<kl.length;i++)wt(kl[i],t);break;case"image":wt("error",t),wt("load",t);break;case"details":wt("toggle",t);break;case"embed":case"source":case"link":wt("error",t),wt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in n)if(n.hasOwnProperty(D)&&(i=n[D],i!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Ht(t,e,D,i,n,null)}return;default:if(Qc(e)){for(Y in n)n.hasOwnProperty(Y)&&(i=n[Y],i!==void 0&&Os(t,e,Y,i,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(i=n[b],i!=null&&Ht(t,e,b,i,n,null))}function iy(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,m=null,b=null,M=null,D=null,Y=null;for(H in n){var V=n[H];if(n.hasOwnProperty(H)&&V!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":M=V;default:i.hasOwnProperty(H)||Ht(t,e,H,null,i,V)}}for(var R in i){var H=i[R];if(V=n[R],i.hasOwnProperty(R)&&(H!=null||V!=null))switch(R){case"type":u=H;break;case"name":c=H;break;case"checked":D=H;break;case"defaultChecked":Y=H;break;case"value":m=H;break;case"defaultValue":b=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(r(137,e));break;default:H!==V&&Ht(t,e,R,H,i,V)}}Vc(t,m,b,M,D,Y,u,c);return;case"select":H=m=b=R=null;for(u in n)if(M=n[u],n.hasOwnProperty(u)&&M!=null)switch(u){case"value":break;case"multiple":H=M;default:i.hasOwnProperty(u)||Ht(t,e,u,null,i,M)}for(c in i)if(u=i[c],M=n[c],i.hasOwnProperty(c)&&(u!=null||M!=null))switch(c){case"value":R=u;break;case"defaultValue":b=u;break;case"multiple":m=u;default:u!==M&&Ht(t,e,c,u,i,M)}e=b,n=m,i=H,R!=null?li(t,!!n,R,!1):!!i!=!!n&&(e!=null?li(t,!!n,e,!0):li(t,!!n,n?[]:"",!1));return;case"textarea":H=R=null;for(b in n)if(c=n[b],n.hasOwnProperty(b)&&c!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ht(t,e,b,null,i,c)}for(m in i)if(c=i[m],u=n[m],i.hasOwnProperty(m)&&(c!=null||u!=null))switch(m){case"value":R=c;break;case"defaultValue":H=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==u&&Ht(t,e,m,c,i,u)}Gd(t,R,H);return;case"option":for(var nt in n)R=n[nt],n.hasOwnProperty(nt)&&R!=null&&!i.hasOwnProperty(nt)&&(nt==="selected"?t.selected=!1:Ht(t,e,nt,null,i,R));for(M in i)R=i[M],H=n[M],i.hasOwnProperty(M)&&R!==H&&(R!=null||H!=null)&&(M==="selected"?t.selected=R&&typeof R!="function"&&typeof R!="symbol":Ht(t,e,M,R,i,H));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mt in n)R=n[mt],n.hasOwnProperty(mt)&&R!=null&&!i.hasOwnProperty(mt)&&Ht(t,e,mt,null,i,R);for(D in i)if(R=i[D],H=n[D],i.hasOwnProperty(D)&&R!==H&&(R!=null||H!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,e));break;default:Ht(t,e,D,R,i,H)}return;default:if(Qc(e)){for(var qt in n)R=n[qt],n.hasOwnProperty(qt)&&R!==void 0&&!i.hasOwnProperty(qt)&&Os(t,e,qt,void 0,i,R);for(Y in i)R=i[Y],H=n[Y],!i.hasOwnProperty(Y)||R===H||R===void 0&&H===void 0||Os(t,e,Y,R,i,H);return}}for(var _ in n)R=n[_],n.hasOwnProperty(_)&&R!=null&&!i.hasOwnProperty(_)&&Ht(t,e,_,null,i,R);for(V in i)R=i[V],H=n[V],!i.hasOwnProperty(V)||R===H||R==null&&H==null||Ht(t,e,V,R,i,H)}function Qm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ly(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var c=n[i],u=c.transferSize,m=c.initiatorType,b=c.duration;if(u&&b&&Qm(m)){for(m=0,b=c.responseEnd,i+=1;i<n.length;i++){var M=n[i],D=M.startTime;if(D>b)break;var Y=M.transferSize,V=M.initiatorType;Y&&Qm(V)&&(M=M.responseEnd,m+=Y*(M<b?1:(b-D)/(M-D)))}if(--i,e+=8*(u+m)/(c.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ks=null,Ds=null;function zo(t){return t.nodeType===9?t:t.ownerDocument}function Km(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Rs(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ls=null;function ry(){var t=window.event;return t&&t.type==="popstate"?t===Ls?!1:(Ls=t,!0):(Ls=null,!1)}var Wm=typeof setTimeout=="function"?setTimeout:void 0,oy=typeof clearTimeout=="function"?clearTimeout:void 0,$m=typeof Promise=="function"?Promise:void 0,cy=typeof queueMicrotask=="function"?queueMicrotask:typeof $m<"u"?function(t){return $m.resolve(null).then(t).catch(uy)}:Wm;function uy(t){setTimeout(function(){throw t})}function wa(t){return t==="head"}function Fm(t,e){var n=e,i=0;do{var c=n.nextSibling;if(t.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(c),Bi(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Rl(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Rl(n);for(var u=n.firstChild;u;){var m=u.nextSibling,b=u.nodeName;u[Pi]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=m}}else n==="body"&&Rl(t.ownerDocument.body);n=c}while(n);Bi(e)}function Im(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function Bs(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Bs(n),Gc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function sy(t,e,n,i){for(;t.nodeType===1;){var c=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Pi])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=cn(t.nextSibling),t===null)break}return null}function fy(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=cn(t.nextSibling),t===null))return null;return t}function Pm(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=cn(t.nextSibling),t===null))return null;return t}function Us(t){return t.data==="$?"||t.data==="$~"}function Hs(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function dy(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function cn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var qs=null;function tp(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return cn(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function ep(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function np(t,e,n){switch(e=zo(n),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Rl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Gc(t)}var un=new Map,ap=new Set;function No(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Wn=C.d;C.d={f:hy,r:my,D:py,C:gy,L:vy,m:yy,X:by,S:xy,M:Sy};function hy(){var t=Wn.f(),e=yo();return t||e}function my(t){var e=ni(t);e!==null&&e.tag===5&&e.type==="form"?bh(e):Wn.r(t)}var Di=typeof document>"u"?null:document;function ip(t,e,n){var i=Di;if(i&&typeof e=="string"&&e){var c=tn(e);c='link[rel="'+t+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),ap.has(c)||(ap.add(c),t={rel:t,crossOrigin:n,href:e},i.querySelector(c)===null&&(e=i.createElement("link"),ye(e,"link",t),fe(e),i.head.appendChild(e)))}}function py(t){Wn.D(t),ip("dns-prefetch",t,null)}function gy(t,e){Wn.C(t,e),ip("preconnect",t,e)}function vy(t,e,n){Wn.L(t,e,n);var i=Di;if(i&&t&&e){var c='link[rel="preload"][as="'+tn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+tn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+tn(n.imageSizes)+'"]')):c+='[href="'+tn(t)+'"]';var u=c;switch(e){case"style":u=Ri(t);break;case"script":u=Li(t)}un.has(u)||(t=x({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),un.set(u,t),i.querySelector(c)!==null||e==="style"&&i.querySelector(Ll(u))||e==="script"&&i.querySelector(Bl(u))||(e=i.createElement("link"),ye(e,"link",t),fe(e),i.head.appendChild(e)))}}function yy(t,e){Wn.m(t,e);var n=Di;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",c='link[rel="modulepreload"][as="'+tn(i)+'"][href="'+tn(t)+'"]',u=c;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Li(t)}if(!un.has(u)&&(t=x({rel:"modulepreload",href:t},e),un.set(u,t),n.querySelector(c)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Bl(u)))return}i=n.createElement("link"),ye(i,"link",t),fe(i),n.head.appendChild(i)}}}function xy(t,e,n){Wn.S(t,e,n);var i=Di;if(i&&t){var c=ai(i).hoistableStyles,u=Ri(t);e=e||"default";var m=c.get(u);if(!m){var b={loading:0,preload:null};if(m=i.querySelector(Ll(u)))b.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":e},n),(n=un.get(u))&&Ys(t,n);var M=m=i.createElement("link");fe(M),ye(M,"link",t),M._p=new Promise(function(D,Y){M.onload=D,M.onerror=Y}),M.addEventListener("load",function(){b.loading|=1}),M.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Ao(m,e,i)}m={type:"stylesheet",instance:m,count:1,state:b},c.set(u,m)}}}function by(t,e){Wn.X(t,e);var n=Di;if(n&&t){var i=ai(n).hoistableScripts,c=Li(t),u=i.get(c);u||(u=n.querySelector(Bl(c)),u||(t=x({src:t,async:!0},e),(e=un.get(c))&&Gs(t,e),u=n.createElement("script"),fe(u),ye(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(c,u))}}function Sy(t,e){Wn.M(t,e);var n=Di;if(n&&t){var i=ai(n).hoistableScripts,c=Li(t),u=i.get(c);u||(u=n.querySelector(Bl(c)),u||(t=x({src:t,async:!0,type:"module"},e),(e=un.get(c))&&Gs(t,e),u=n.createElement("script"),fe(u),ye(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(c,u))}}function lp(t,e,n,i){var c=(c=Kt.current)?No(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Ri(n.href),n=ai(c).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Ri(n.href);var u=ai(c).hoistableStyles,m=u.get(t);if(m||(c=c.ownerDocument||c,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,m),(u=c.querySelector(Ll(t)))&&!u._p&&(m.instance=u,m.state.loading=5),un.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},un.set(t,n),u||wy(c,t,n,m.state))),e&&i===null)throw Error(r(528,""));return m}if(e&&i!==null)throw Error(r(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Li(n),n=ai(c).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ri(t){return'href="'+tn(t)+'"'}function Ll(t){return'link[rel="stylesheet"]['+t+"]"}function rp(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function wy(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),ye(e,"link",n),fe(e),t.head.appendChild(e))}function Li(t){return'[src="'+tn(t)+'"]'}function Bl(t){return"script[async]"+t}function op(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+tn(n.href)+'"]');if(i)return e.instance=i,fe(i),i;var c=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),fe(i),ye(i,"style",c),Ao(i,n.precedence,t),e.instance=i;case"stylesheet":c=Ri(n.href);var u=t.querySelector(Ll(c));if(u)return e.state.loading|=4,e.instance=u,fe(u),u;i=rp(n),(c=un.get(c))&&Ys(i,c),u=(t.ownerDocument||t).createElement("link"),fe(u);var m=u;return m._p=new Promise(function(b,M){m.onload=b,m.onerror=M}),ye(u,"link",i),e.state.loading|=4,Ao(u,n.precedence,t),e.instance=u;case"script":return u=Li(n.src),(c=t.querySelector(Bl(u)))?(e.instance=c,fe(c),c):(i=n,(c=un.get(u))&&(i=x({},n),Gs(i,c)),t=t.ownerDocument||t,c=t.createElement("script"),fe(c),ye(c,"link",i),t.head.appendChild(c),e.instance=c);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,Ao(i,n.precedence,t));return e.instance}function Ao(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=i.length?i[i.length-1]:null,u=c,m=0;m<i.length;m++){var b=i[m];if(b.dataset.precedence===e)u=b;else if(u!==c)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Ys(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Gs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var _o=null;function cp(t,e,n){if(_o===null){var i=new Map,c=_o=new Map;c.set(n,i)}else c=_o,i=c.get(n),i||(i=new Map,c.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),c=0;c<n.length;c++){var u=n[c];if(!(u[Pi]||u[me]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(e)||"";m=t+m;var b=i.get(m);b?b.push(u):i.set(m,[u])}}return i}function up(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function jy(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function sp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function My(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Ri(i.href),u=e.querySelector(Ll(c));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=To.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=u,fe(u);return}u=e.ownerDocument||e,i=rp(i),(c=un.get(c))&&Ys(i,c),u=u.createElement("link"),fe(u);var m=u;m._p=new Promise(function(b,M){m.onload=b,m.onerror=M}),ye(u,"link",i),n.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=To.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Xs=0;function Ey(t,e){return t.stylesheets&&t.count===0&&Oo(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&Oo(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&Xs===0&&(Xs=62500*ly());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Oo(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Xs?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(c)}}:null}function To(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Oo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Co=null;function Oo(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Co=new Map,e.forEach(zy,t),Co=null,To.call(t))}function zy(t,e){if(!(e.state.loading&4)){var n=Co.get(t);if(n)var i=n.get(null);else{n=new Map,Co.set(t,n);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var m=c[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),i=m)}i&&n.set(null,i)}c=e.instance,m=c.getAttribute("data-precedence"),u=n.get(m)||i,u===i&&n.set(null,c),n.set(m,c),this.count++,i=To.bind(this),c.addEventListener("load",i),c.addEventListener("error",i),u?u.parentNode.insertBefore(c,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),e.state.loading|=4}}var Ul={$$typeof:O,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function Ny(t,e,n,i,c,u,m,b,M){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Uc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uc(0),this.hiddenUpdates=Uc(null),this.identifierPrefix=i,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.incompleteTransitions=new Map}function fp(t,e,n,i,c,u,m,b,M,D,Y,V){return t=new Ny(t,e,n,m,M,D,Y,V,b),e=1,u===!0&&(e|=24),u=Ve(3,null,null,e),t.current=u,u.stateNode=t,e=wu(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:i,isDehydrated:n,cache:e},zu(u),t}function dp(t){return t?(t=hi,t):hi}function hp(t,e,n,i,c,u){c=dp(c),i.context===null?i.context=c:i.pendingContext=c,i=fa(e),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=da(t,i,e),n!==null&&(Le(n,t,e),gl(n,t,e))}function mp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vs(t,e){mp(t,e),(t=t.alternate)&&mp(t,e)}function pp(t){if(t.tag===13||t.tag===31){var e=Ra(t,67108864);e!==null&&Le(e,t,67108864),Vs(t,67108864)}}function gp(t){if(t.tag===13||t.tag===31){var e=We();e=Hc(e);var n=Ra(t,e);n!==null&&Le(n,t,e),Vs(t,e)}}var ko=!0;function Ay(t,e,n,i){var c=j.T;j.T=null;var u=C.p;try{C.p=2,Zs(t,e,n,i)}finally{C.p=u,j.T=c}}function _y(t,e,n,i){var c=j.T;j.T=null;var u=C.p;try{C.p=8,Zs(t,e,n,i)}finally{C.p=u,j.T=c}}function Zs(t,e,n,i){if(ko){var c=Qs(i);if(c===null)Cs(t,e,i,Do,n),yp(t,i);else if(Cy(c,t,e,n,i))i.stopPropagation();else if(yp(t,i),e&4&&-1<Ty.indexOf(t)){for(;c!==null;){var u=ni(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=Ta(u.pendingLanes);if(m!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var M=1<<31-Ge(m);b.entanglements[1]|=M,m&=~M}wn(u),(Dt&6)===0&&(go=qe()+500,Ol(0))}}break;case 31:case 13:b=Ra(u,2),b!==null&&Le(b,u,2),yo(),Vs(u,2)}if(u=Qs(i),u===null&&Cs(t,e,i,Do,n),u===c)break;c=u}c!==null&&i.stopPropagation()}else Cs(t,e,i,null,n)}}function Qs(t){return t=Jc(t),Ks(t)}var Do=null;function Ks(t){if(Do=null,t=ei(t),t!==null){var e=d(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=h(e),t!==null)return t;t=null}else if(n===31){if(t=p(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Do=t,null}function vp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pv()){case Ed:return 2;case zd:return 8;case wr:case gv:return 32;case Nd:return 268435456;default:return 32}default:return 32}}var Js=!1,ja=null,Ma=null,Ea=null,Hl=new Map,ql=new Map,za=[],Ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yp(t,e){switch(t){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Ma=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":Hl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ql.delete(e.pointerId)}}function Yl(t,e,n,i,c,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:u,targetContainers:[c]},e!==null&&(e=ni(e),e!==null&&pp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,c!==null&&e.indexOf(c)===-1&&e.push(c),t)}function Cy(t,e,n,i,c){switch(e){case"focusin":return ja=Yl(ja,t,e,n,i,c),!0;case"dragenter":return Ma=Yl(Ma,t,e,n,i,c),!0;case"mouseover":return Ea=Yl(Ea,t,e,n,i,c),!0;case"pointerover":var u=c.pointerId;return Hl.set(u,Yl(Hl.get(u)||null,t,e,n,i,c)),!0;case"gotpointercapture":return u=c.pointerId,ql.set(u,Yl(ql.get(u)||null,t,e,n,i,c)),!0}return!1}function xp(t){var e=ei(t.target);if(e!==null){var n=d(e);if(n!==null){if(e=n.tag,e===13){if(e=h(n),e!==null){t.blockedOn=e,kd(t.priority,function(){gp(n)});return}}else if(e===31){if(e=p(n),e!==null){t.blockedOn=e,kd(t.priority,function(){gp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ro(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qs(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Kc=i,n.target.dispatchEvent(i),Kc=null}else return e=ni(n),e!==null&&pp(e),t.blockedOn=n,!1;e.shift()}return!0}function bp(t,e,n){Ro(t)&&n.delete(e)}function Oy(){Js=!1,ja!==null&&Ro(ja)&&(ja=null),Ma!==null&&Ro(Ma)&&(Ma=null),Ea!==null&&Ro(Ea)&&(Ea=null),Hl.forEach(bp),ql.forEach(bp)}function Lo(t,e){t.blockedOn===e&&(t.blockedOn=null,Js||(Js=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Oy)))}var Bo=null;function Sp(t){Bo!==t&&(Bo=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Bo===t&&(Bo=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],c=t[e+2];if(typeof i!="function"){if(Ks(i||n)===null)continue;break}var u=ni(n);u!==null&&(t.splice(e,3),e-=3,Qu(u,{pending:!0,data:c,method:n.method,action:i},i,c))}}))}function Bi(t){function e(M){return Lo(M,t)}ja!==null&&Lo(ja,t),Ma!==null&&Lo(Ma,t),Ea!==null&&Lo(Ea,t),Hl.forEach(e),ql.forEach(e);for(var n=0;n<za.length;n++){var i=za[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<za.length&&(n=za[0],n.blockedOn===null);)xp(n),n.blockedOn===null&&za.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var c=n[i],u=n[i+1],m=c[Te]||null;if(typeof u=="function")m||Sp(n);else if(m){var b=null;if(u&&u.hasAttribute("formAction")){if(c=u,m=u[Te]||null)b=m.formAction;else if(Ks(c)!==null)continue}else b=m.action;typeof b=="function"?n[i+1]=b:(n.splice(i,3),i-=3),Sp(n)}}}function wp(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(m){return c=m})},focusReset:"manual",scroll:"manual"})}function e(){c!==null&&(c(),c=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),c!==null&&(c(),c=null)}}}function Ws(t){this._internalRoot=t}Uo.prototype.render=Ws.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var n=e.current,i=We();hp(n,i,t,e,null,null)},Uo.prototype.unmount=Ws.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hp(t.current,2,null,t,null,null),yo(),e[ti]=null}};function Uo(t){this._internalRoot=t}Uo.prototype.unstable_scheduleHydration=function(t){if(t){var e=Od();t={blockedOn:null,target:t,priority:e};for(var n=0;n<za.length&&e!==0&&e<za[n].priority;n++);za.splice(n,0,t),n===0&&xp(t)}};var jp=l.version;if(jp!=="19.2.3")throw Error(r(527,jp,"19.2.3"));C.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=y(e),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var ky={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ho.isDisabled&&Ho.supportsFiber)try{$i=Ho.inject(ky),Ye=Ho}catch{}}return Xl.createRoot=function(t,e){if(!s(t))throw Error(r(299));var n=!1,i="",c=Th,u=Ch,m=Oh;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(c=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(m=e.onRecoverableError)),e=fp(t,1,!1,null,null,n,i,null,c,u,m,wp),t[ti]=e.current,Ts(t),new Ws(e)},Xl.hydrateRoot=function(t,e,n){if(!s(t))throw Error(r(299));var i=!1,c="",u=Th,m=Ch,b=Oh,M=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.formState!==void 0&&(M=n.formState)),e=fp(t,1,!0,e,n??null,i,c,M,u,m,b,wp),e.context=dp(null),n=e.current,i=We(),i=Hc(i),c=fa(i),c.callback=null,da(n,c,i),n=i,e.current.lanes=n,Ii(e,n),wn(e),t[ti]=e.current,Ts(t),new Uo(e)},Xl.version="19.2.3",Xl}var _p;function Qy(){if(_p)return Fs.exports;_p=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Fs.exports=Zy(),Fs.exports}var Ky=Qy();class Jy extends T.Component{constructor(l){super(l),this.state={hasError:!1}}static getDerivedStateFromError(l){return{hasError:!0,error:l}}render(){return this.state.hasError?f.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#0a0a0f",color:"#ffffff",fontFamily:"Outfit, sans-serif",gap:"16px",padding:"24px",textAlign:"center"},children:[f.jsx("h1",{style:{fontSize:"2rem",fontWeight:400,margin:0},children:"Something went wrong"}),f.jsx("p",{style:{color:"rgba(255,255,255,0.5)",margin:0},children:"Please refresh the page to continue."}),f.jsx("button",{onClick:()=>window.location.reload(),style:{marginTop:"8px",padding:"12px 32px",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.2)",background:"rgba(255,255,255,0.06)",color:"#ffffff",cursor:"pointer",fontSize:"14px",letterSpacing:"1px"},children:"Refresh"})]}):this.props.children}}const Zg="/Strabso/assets/logo-CaQ3yAJ2.png",Wy=({activeTab:a,onTabClick:l})=>{const o=[{name:"Home"},{name:"Projects"},{name:"About"},{name:"Contact"}];return f.jsx("nav",{className:"glass-navbar",children:f.jsx("div",{className:"navbar-wrapper",children:f.jsxs("div",{className:"navbar-container",children:[f.jsx("a",{href:"/",className:"navbar-logo",children:f.jsx("div",{className:"logo-icon",children:f.jsx("img",{src:Zg,alt:"Company Logo"})})}),f.jsx("ul",{className:"nav-links",children:o.map(r=>f.jsx("li",{className:"nav-item",children:f.jsxs("button",{onClick:()=>l(r.name),className:`nav-link ${a===r.name?"active":""}`,"aria-current":a===r.name?"page":void 0,children:[r.name,a===r.name&&f.jsx("div",{className:"nav-link-pulse"})]})},r.name))})]})})})},Qg="/Strabso/assets/coca_cola-BljjUpwk.webp",$y="/Strabso/assets/lankasoy-BJQDjWpB.png",Fy="/Strabso/assets/hemas-NRwrWOvZ.png",Iy="/Strabso/assets/fems-DxxjrCp1.jpg",Py="/Strabso/assets/vivya-p3JKc2hI.jpeg",tx="/Strabso/assets/uswaththe-CBafDdyi.png",ex="/Strabso/assets/zesta.jpg-Gkr9D_TE.webp",nx="/Strabso/assets/vibe-BjwuLHQj.jpeg",Kg="/Strabso/assets/hnb-BUw6tVsM.png",Jg="/Strabso/assets/maliban-glbHtWj_.png",ax="/Strabso/assets/watawala-Cmu5B7fW.jpg",Kl=[{id:1,image:Qg,name:"Coca-Cola",category:"Beverages",description:"On-ground brand activations and sampling campaigns driving nationwide consumer engagement.",color:"#EF4444"},{id:2,image:Fy,name:"Hemas",category:"Healthcare & FMCG",description:"Promoter deployment and retail activation programs across all 9 provinces of Sri Lanka.",color:"#3B82F6"},{id:3,image:Jg,name:"Maliban",category:"Biscuits & FMCG",description:"Nationwide sampling and selling operations delivering measurable sales uplift.",color:"#F97316"},{id:4,image:ex,name:"Zesta",category:"Tea & Beverages",description:"Mall activations and roadshows bringing the Zesta brand to communities island-wide.",color:"#10B981"},{id:5,image:ax,name:"Watawala",category:"Tea & Beverages",description:"Strategic brand activation campaigns building consumer loyalty across key markets.",color:"#22C55E"},{id:6,image:Kg,name:"HNB",category:"Banking & Finance",description:"Corporate event management and institutional activation projects across Sri Lanka.",color:"#DC2626"},{id:7,image:$y,name:"Lankasoy",category:"FMCG",description:"Product sampling and community engagement driving trial and brand awareness.",color:"#84CC16"},{id:8,image:nx,name:"Vibe",category:"Lifestyle",description:"High-energy brand activations and experiential events connecting with youth audiences.",color:"#06B6D4"},{id:9,image:Iy,name:"Fems",category:"Consumer Goods",description:"Targeted sampling campaigns and in-store promoter deployment for maximum reach.",color:"#EC4899"},{id:10,image:Py,name:"Vivya",category:"Lifestyle & Beauty",description:"Mall and SMMT activations creating memorable brand touchpoints with consumers.",color:"#8B5CF6"},{id:11,image:tx,name:"Uswaththe",category:"Natural Products",description:"Grassroots roadshow campaigns building authentic brand connections across communities.",color:"#F59E0B"}],$n=Kl.length,Vl=360/$n,ix=.04,lx=.08,rx=.13,ox=.9,Tp=({onClick:a,color:l,label:o,children:r})=>{const[s,d]=T.useState(!1);return f.jsx("button",{onClick:a,onMouseDown:h=>h.stopPropagation(),onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),"aria-label":o,style:{width:48,height:48,borderRadius:"50%",border:`1px solid ${s&&l?`${l}55`:"rgba(0,0,0,0.12)"}`,background:s&&l?`${l}15`:"rgba(0,0,0,0.04)",color:"#111",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(12px)",transition:"border-color 0.3s ease, background 0.3s ease",flexShrink:0},children:r})},cx=()=>{const[a,l]=T.useState(!1),[o,r]=T.useState(!1),[s,d]=T.useState(0),[h,p]=T.useState(!1),v=T.useRef(0),y=T.useRef(0),g=T.useRef(null),x=T.useRef(!1),S=T.useRef(!1),w=T.useRef(0),N=T.useRef(0),B=T.useRef(0),q=T.useRef(0),L=T.useRef(null),Z=T.useRef(null),O=T.useRef(null),U=a?260:o?360:440,Q=a?140:o?180:210,K=a?155:o?200:230;T.useEffect(()=>{const E=()=>{l(window.innerWidth<=767),r(window.innerWidth>767&&window.innerWidth<=1024)};return E(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[]),T.useEffect(()=>{const E=O.current;if(!E)return;const j=C=>{x.current&&(C.preventDefault(),P(C.touches[0].clientX))};return E.addEventListener("touchmove",j,{passive:!1}),()=>E.removeEventListener("touchmove",j)},[]),T.useEffect(()=>{const E=()=>{const C=(v.current%360+360)%360;let G=Math.round(C/Vl)*Vl-C;G>180&&(G-=360),G<-180&&(G+=360),g.current=v.current+G,y.current=0},j=()=>{if(!x.current)if(g.current!==null){const F=g.current-v.current;Math.abs(F)<lx?(v.current=g.current,g.current=null):v.current+=F*rx}else Math.abs(y.current)>.05?(y.current*=ox,v.current+=y.current,Math.abs(y.current)<=.05&&E()):S.current||(v.current-=ix);Z.current&&(Z.current.style.transform=`rotateY(${v.current}deg)`);const C=(v.current%360+360)%360,G=Math.round(C/Vl)%$n,J=($n-G)%$n;J!==q.current&&(q.current=J,d(J)),L.current=requestAnimationFrame(j)};return L.current=requestAnimationFrame(j),()=>{L.current&&cancelAnimationFrame(L.current)}},[]);const W=E=>{const j=(v.current%360+360)%360;let C=($n-E)*Vl-j;C>180&&(C-=360),C<-180&&(C+=360),g.current=v.current+C,y.current=0},I=()=>W((q.current+1)%$n),at=()=>W((q.current-1+$n)%$n),ht=E=>{x.current=!0,w.current=E,N.current=Date.now(),B.current=0,y.current=0,g.current=null,p(!0)},P=E=>{if(!x.current)return;const j=E-w.current,C=Math.max(Date.now()-N.current,1);y.current=j/C*12,v.current+=j*.28,B.current+=Math.abs(j),w.current=E,N.current=Date.now()},tt=()=>{x.current&&(x.current=!1,p(!1))},jt=E=>{B.current<5&&W(E)},A=Kl[s];return f.jsxs("div",{style:{position:"relative",width:"100%",padding:a?"40px 16px 60px":"60px 40px 80px",display:"flex",flexDirection:"column",alignItems:"center",gap:a?"32px":"44px",userSelect:"none",overflow:"hidden",fontFamily:"'Outfit', -apple-system, sans-serif"},onKeyDown:E=>{E.key==="ArrowRight"&&I(),E.key==="ArrowLeft"&&at()},tabIndex:0,"aria-label":"Brand partners carousel",children:[f.jsx("div",{style:{position:"absolute",top:"25%",left:"50%",width:a?"420px":"760px",height:a?"320px":"560px",transform:"translate(-50%, -50%)",background:`radial-gradient(ellipse, ${A?.color}22 0%, transparent 65%)`,filter:"blur(80px)",pointerEvents:"none",transition:"background 0.9s ease",zIndex:0}}),f.jsx("div",{ref:O,style:{position:"relative",width:"100%",height:K+40,display:"flex",alignItems:"center",justifyContent:"center",perspective:a?"900px":o?"1400px":"1900px",zIndex:5,cursor:h?"grabbing":"grab"},onMouseEnter:()=>{S.current=!0},onMouseLeave:()=>{S.current=!1,tt()},onMouseDown:E=>ht(E.clientX),onMouseMove:E=>P(E.clientX),onMouseUp:tt,onTouchStart:E=>{S.current=!0,ht(E.touches[0].clientX)},onTouchEnd:()=>{tt(),S.current=!1},children:f.jsx("div",{ref:Z,style:{position:"relative",width:Q,height:K,transformStyle:"preserve-3d"},children:Kl.map((E,j)=>{const C=j===s;return f.jsxs("div",{style:{position:"absolute",inset:0,transform:`rotateY(${j*Vl}deg) translateZ(${U}px)`,backfaceVisibility:"hidden",borderRadius:18,overflow:"hidden",cursor:"pointer",transition:"opacity 0.5s ease, filter 0.5s ease, box-shadow 0.5s ease",opacity:C?1:.45,filter:C?"none":"brightness(0.85) saturate(0.55)",boxShadow:C?`0 0 30px ${E.color}28, 0 8px 32px rgba(0,0,0,0.1), inset 0 0 0 1.5px ${E.color}35`:"0 4px 16px rgba(0,0,0,0.07)",background:`radial-gradient(ellipse at 50% 35%, ${E.color}14 0%, #f8f7f4 68%)`},onClick:()=>jt(j),children:[f.jsx("div",{style:{width:"100%",height:"100%",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",padding:36},children:f.jsx("img",{src:E.image,alt:E.name,draggable:!1,style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",filter:"drop-shadow(0 2px 8px rgba(0,0,0,0.12))"}})}),C&&f.jsx("div",{style:{position:"absolute",inset:0,borderRadius:18,border:`1.5px solid ${E.color}60`,pointerEvents:"none"}})]},E.id)})})}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:14,maxWidth:480,width:"100%",zIndex:10,textAlign:"center"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,fontSize:11,letterSpacing:"3px",color:"rgba(0,0,0,0.3)"},children:[f.jsx("span",{style:{color:A?.color,fontWeight:700,fontSize:13},children:String(s+1).padStart(2,"0")}),f.jsx("span",{style:{display:"inline-block",width:28,height:1,background:"rgba(0,0,0,0.1)"}}),f.jsx("span",{children:String($n).padStart(2,"0")})]}),f.jsx("span",{style:{fontSize:10,letterSpacing:"4px",textTransform:"uppercase",color:A?.color,fontWeight:600,transition:"color 0.5s ease"},children:A?.category}),f.jsx("span",{style:{display:"block",fontSize:a?38:52,fontFamily:"'Playfair Display', Georgia, serif",fontWeight:400,color:"#0a0a12",lineHeight:1.1,letterSpacing:"-0.5px",transition:"all 0.4s ease"},children:A?.name}),f.jsx("div",{style:{width:36,height:2,borderRadius:2,background:A?.color??"#111111",transition:"background 0.5s ease"}}),f.jsx("p",{style:{fontSize:a?13:14,color:"rgba(0,0,0,0.55)",lineHeight:1.85,margin:0,transition:"all 0.4s ease",minHeight:a?0:52},children:A?.description}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:a?14:18,marginTop:8},children:[f.jsx(Tp,{onClick:at,color:A?.color,label:"Previous brand",children:f.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("polyline",{points:"15 18 9 12 15 6"})})}),f.jsx("div",{style:{display:"flex",alignItems:"center",gap:6},children:Kl.map((E,j)=>f.jsx("button",{onClick:()=>W(j),onMouseDown:C=>C.stopPropagation(),"aria-label":`Go to ${Kl[j].name}`,style:{width:j===s?22:6,height:6,borderRadius:3,border:"none",padding:0,cursor:"pointer",transition:"width 0.35s cubic-bezier(0.4,0,0.2,1), background 0.4s ease",background:j===s?A?.color??"#111111":"rgba(0,0,0,0.12)"}},j))}),f.jsx(Tp,{onClick:I,color:A?.color,label:"Next brand",children:f.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("polyline",{points:"9 18 15 12 9 6"})})})]})]}),f.jsx("style",{children:`
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `})]})},ux=(a=.1)=>{const l=T.useRef(null),[o,r]=T.useState(!1);return T.useEffect(()=>{const s=new IntersectionObserver(([d])=>{d.isIntersecting&&r(!0)},{threshold:a});return l.current&&s.observe(l.current),()=>s.disconnect()},[a]),{ref:l,isInView:o}},sx=()=>f.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[f.jsx("circle",{cx:"24",cy:"24",r:"16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),f.jsx("circle",{cx:"24",cy:"24",r:"8",stroke:"currentColor",strokeWidth:"2",fill:"none"}),f.jsx("circle",{cx:"24",cy:"24",r:"3",fill:"currentColor"}),f.jsx("path",{d:"M24 4V8M24 40V44M4 24H8M40 24H44",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),f.jsx("path",{d:"M38 10L35 13M13 35L10 38M38 38L35 35M13 13L10 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),fx=()=>f.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[f.jsx("rect",{x:"6",y:"16",width:"36",height:"28",rx:"2",stroke:"currentColor",strokeWidth:"2",fill:"none"}),f.jsx("path",{d:"M6 16L24 4L42 16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),f.jsx("rect",{x:"14",y:"28",width:"8",height:"16",rx:"1",stroke:"currentColor",strokeWidth:"2",fill:"none"}),f.jsx("rect",{x:"26",y:"24",width:"10",height:"8",rx:"1",stroke:"currentColor",strokeWidth:"2",fill:"none"}),f.jsx("path",{d:"M16 24H20M28 36H34",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),dx=()=>f.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[f.jsx("rect",{x:"6",y:"18",width:"28",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"2",fill:"none"}),f.jsx("path",{d:"M34 24H42V32C42 33.1046 41.1046 34 40 34H34V24Z",stroke:"currentColor",strokeWidth:"2",fill:"none"}),f.jsx("circle",{cx:"14",cy:"36",r:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"}),f.jsx("circle",{cx:"30",cy:"36",r:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"}),f.jsx("path",{d:"M12 18V12L20 8L28 12V18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),hx=()=>f.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[f.jsx("path",{d:"M12 8H36C38.2091 8 40 9.79086 40 12V20L24 28L8 20V12C8 9.79086 9.79086 8 12 8Z",stroke:"currentColor",strokeWidth:"2",fill:"none"}),f.jsx("path",{d:"M8 20V36C8 38.2091 9.79086 40 12 40H36C38.2091 40 40 38.2091 40 36V20",stroke:"currentColor",strokeWidth:"2",fill:"none"}),f.jsx("circle",{cx:"24",cy:"28",r:"4",fill:"currentColor"}),f.jsx("path",{d:"M16 16H32",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),mx=()=>f.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[f.jsx("rect",{x:"4",y:"28",width:"12",height:"16",rx:"1",stroke:"currentColor",strokeWidth:"2",fill:"none"}),f.jsx("rect",{x:"18",y:"20",width:"12",height:"24",rx:"1",stroke:"currentColor",strokeWidth:"2",fill:"none"}),f.jsx("rect",{x:"32",y:"12",width:"12",height:"32",rx:"1",stroke:"currentColor",strokeWidth:"2",fill:"none"}),f.jsx("path",{d:"M10 4L24 10L38 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),f.jsx("circle",{cx:"38",cy:"8",r:"3",fill:"currentColor"})]}),px=()=>f.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[f.jsx("rect",{x:"6",y:"12",width:"36",height:"30",rx:"3",stroke:"currentColor",strokeWidth:"2",fill:"none"}),f.jsx("path",{d:"M6 20H42",stroke:"currentColor",strokeWidth:"2"}),f.jsx("path",{d:"M14 6V14M34 6V14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),f.jsx("circle",{cx:"16",cy:"28",r:"2",fill:"currentColor"}),f.jsx("circle",{cx:"24",cy:"28",r:"2",fill:"currentColor"}),f.jsx("circle",{cx:"32",cy:"28",r:"2",fill:"currentColor"}),f.jsx("circle",{cx:"16",cy:"36",r:"2",fill:"currentColor"}),f.jsx("circle",{cx:"24",cy:"36",r:"2",fill:"currentColor"})]}),gx=()=>f.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[f.jsx("path",{d:"M6 20L24 8L42 20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),f.jsx("rect",{x:"6",y:"20",width:"36",height:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"}),f.jsx("rect",{x:"10",y:"24",width:"6",height:"16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),f.jsx("rect",{x:"21",y:"24",width:"6",height:"16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),f.jsx("rect",{x:"32",y:"24",width:"6",height:"16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),f.jsx("rect",{x:"6",y:"40",width:"36",height:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"})]}),vx=()=>f.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[f.jsx("circle",{cx:"24",cy:"14",r:"8",stroke:"currentColor",strokeWidth:"2",fill:"none"}),f.jsx("path",{d:"M12 44V38C12 33.5817 15.5817 30 20 30H28C32.4183 30 36 33.5817 36 38V44",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),f.jsx("path",{d:"M36 14L44 10M36 18L44 22",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),f.jsx("circle",{cx:"44",cy:"16",r:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"})]}),yx=({service:a,onClose:l})=>(T.useEffect(()=>{const o=r=>{r.key==="Escape"&&l()};return document.addEventListener("keydown",o),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",o),document.body.style.overflow=""}},[l]),f.jsx("div",{className:"modal-backdrop",onClick:l,role:"dialog","aria-modal":"true",children:f.jsxs("div",{className:"modal-panel",style:{"--accent":a.accent},onClick:o=>o.stopPropagation(),children:[f.jsx("div",{className:"modal-glow"}),f.jsx("button",{className:"modal-close",onClick:l,"aria-label":"Close",children:f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",width:"20",height:"20",children:f.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),f.jsxs("div",{className:"modal-header-row",children:[f.jsxs("div",{className:"modal-icon-wrapper",children:[f.jsx("div",{className:"modal-icon-ring"}),a.icon]}),f.jsxs("div",{children:[f.jsx("h2",{className:"modal-title",children:a.title}),f.jsx("div",{className:"modal-divider"})]})]}),f.jsx("p",{className:"modal-description",children:a.description}),f.jsx("div",{className:"modal-stats",children:a.stats.map((o,r)=>f.jsxs("div",{className:"modal-stat",children:[f.jsx("span",{className:"modal-stat-value",children:o.value}),f.jsx("span",{className:"modal-stat-label",children:o.label})]},r))}),f.jsxs("div",{className:"modal-highlights",children:[f.jsx("p",{className:"modal-highlights-title",children:"What's included"}),f.jsx("ul",{className:"modal-highlights-list",children:a.highlights.map((o,r)=>f.jsxs("li",{className:"modal-highlight-item",children:[f.jsx("span",{className:"modal-highlight-dot"}),o]},r))})]}),f.jsx("button",{className:"modal-cta",onClick:l,children:"Got it"})]})})),xx=({service:a,index:l,isInView:o,onExplore:r})=>{const[s,d]=T.useState(!1);return f.jsx("div",{className:"service-card",style:{"--delay":`${l*.1}s`,"--accent":a.accent},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:f.jsxs("div",{className:`card-inner ${o?"animate-in":""}`,children:[f.jsx("div",{className:"card-bg"}),f.jsx("div",{className:"card-glow"}),f.jsx("div",{className:"particles",children:[...Array(5)].map((h,p)=>f.jsx("span",{className:"particle",style:{"--i":p}},p))}),f.jsxs("div",{className:"card-content",children:[f.jsxs("div",{className:`icon-wrapper ${s?"hovered":""}`,children:[f.jsx("div",{className:"icon-ring"}),f.jsx("div",{className:"icon-ring icon-ring-2"}),a.icon]}),f.jsx("h3",{className:"card-title",children:a.title}),f.jsx("p",{className:"card-description",children:a.description}),f.jsx("div",{className:"card-footer",children:f.jsxs("button",{className:"learn-more",onClick:()=>r(a),children:["Explore",f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",className:"arrow-icon",children:f.jsx("path",{d:"M5 12H19M19 12L12 5M19 12L12 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]}),f.jsx("div",{className:"corner-accent"})]})})},bx=()=>{const{ref:a,isInView:l}=ux(.1),[o,r]=T.useState(null),s=[{id:1,icon:f.jsx(sx,{}),title:"Brand Activations",description:"We bring your brand to life through engaging, on-ground experiences that capture attention, create emotional impact, and inspire meaningful connections with your target audience.",accent:"#4294f7",highlights:["Tailored on-ground activation strategies","Trained brand ambassador teams","Real-time performance tracking","Post-activation analytics & reporting"],stats:[{value:"200+",label:"Activations Done"},{value:"9",label:"Provinces Covered"},{value:"98%",label:"Client Satisfaction"}]},{id:2,icon:f.jsx(fx,{}),title:"Mall Activations",description:"Strategic mall activations that maximize footfall and engagement, creating memorable brand experiences in high-traffic retail environments across Sri Lanka.",accent:"#8B5CF6",highlights:["Premium mall locations island-wide","Interactive consumer engagement zones","Footfall & conversion measurement","Fully managed setup and teardown"],stats:[{value:"50+",label:"Mall Venues"},{value:"1M+",label:"Consumers Reached"},{value:"3x",label:"Avg. Footfall Boost"}]},{id:3,icon:f.jsx(dx,{}),title:"Roadshows & SMMT Activations",description:"Mobile marketing excellence with nationwide roadshows and SMMT activations, taking your brand directly to communities across all 9 provinces.",accent:"#EC4899",highlights:["Full nationwide route planning","Custom branded vehicles & structures","Community engagement at grassroots level","Live reporting from each location"],stats:[{value:"9",label:"Provinces Reached"},{value:"300+",label:"Locations Visited"},{value:"500K+",label:"People Engaged"}]},{id:4,icon:f.jsx(hx,{}),title:"Sampling Campaigns",description:"Product sampling campaigns that put your offerings directly in the hands of consumers, driving trial, awareness, and conversion effectively.",accent:"#F59E0B",highlights:["Targeted demographic profiling","High-volume sample distribution","Consumer feedback collection","Conversion rate optimisation"],stats:[{value:"2M+",label:"Samples Distributed"},{value:"40%",label:"Avg. Trial-to-Purchase"},{value:"100+",label:"Brands Supported"}]},{id:5,icon:f.jsx(mx,{}),title:"Selling Operations",description:"End-to-end selling operations with trained teams that drive sales, manage distribution, and deliver measurable results for your brand.",accent:"#10B981",highlights:["Dedicated trained sales teams","Territory-based coverage planning","Daily sales reporting & KPIs","Flexible short & long-term deployment"],stats:[{value:"150+",label:"Sales Specialists"},{value:"25%",label:"Avg. Sales Uplift"},{value:"60+",label:"Active Clients"}]},{id:6,icon:f.jsx(px,{}),title:"Corporate & Public Events",description:"From corporate gatherings to large-scale public events, we plan, manage, and execute seamless experiences that leave lasting impressions.",accent:"#06B6D4",highlights:["End-to-end event planning & logistics","Venue sourcing and setup","AV, staging & production management","Guest experience & crowd management"],stats:[{value:"120+",label:"Events Executed"},{value:"50K+",label:"Max Event Attendance"},{value:"100%",label:"On-time Delivery"}]},{id:7,icon:f.jsx(gx,{}),title:"Government & Institutional Activations",description:"Specialized activations for government and institutional clients, leveraging our strong relationships and expertise in public sector engagement.",accent:"#EF4444",highlights:["Deep public sector expertise","Compliance-ready execution frameworks","Multi-stakeholder coordination","Nationwide institutional reach"],stats:[{value:"30+",label:"Govt. Projects"},{value:"25",label:"Districts Covered"},{value:"10+",label:"Ministries Served"}]},{id:8,icon:f.jsx(vx,{}),title:"Promoter Deployment Projects",description:"Long-term promoter deployment solutions with trained brand ambassadors who represent your brand professionally across retail and field locations.",accent:"#14B8A6",highlights:["Rigorous promoter screening & training","Ongoing performance monitoring","Retail & field deployment flexibility","Dedicated account management"],stats:[{value:"500+",label:"Active Promoters"},{value:"1000+",label:"Retail Outlets Covered"},{value:"95%",label:"Retention Rate"}]}];return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`

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
      `}),f.jsxs("section",{className:"services-section",ref:a,children:[f.jsx("div",{className:"bg-mesh"}),f.jsx("div",{className:"grid-pattern"}),f.jsxs("div",{className:"floating-shapes",children:[f.jsx("div",{className:"shape shape-1"}),f.jsx("div",{className:"shape shape-2"}),f.jsx("div",{className:"shape shape-3"})]}),f.jsxs("div",{className:"services-container",children:[f.jsxs("header",{className:"section-header",children:[f.jsx("span",{className:"section-label",children:"What We Do"}),f.jsxs("h2",{className:"section-title",children:["Your ",f.jsx("span",{children:"360°"})," Brand Partner"]}),f.jsx("p",{className:"section-subtitle",children:"From concept to execution, we deliver end-to-end brand activation and experiential marketing solutions across all 9 provinces of Sri Lanka."})]}),f.jsx("div",{className:"services-grid",children:s.map((d,h)=>f.jsx(xx,{service:d,index:h,isInView:l,onExplore:r},d.id))})]})]}),o&&f.jsx(yx,{service:o,onClose:()=>r(null)})]})},Sx=[{to:200,suffix:"+",label:`Activations
Executed`},{to:9,suffix:"",label:`Provinces
Covered`},{to:1,suffix:"M+",label:`Consumers
Reached`},{to:500,suffix:"+",label:`Active
Promoters`}];function wx(a,l,o,r){const[s,d]=T.useState(0);return T.useEffect(()=>{if(!o)return;let h;const p=performance.now()+r,v=y=>{if(y<p){h=requestAnimationFrame(v);return}const g=Math.min((y-p)/l,1),x=1-Math.pow(1-g,3);d(Math.floor(x*a)),g<1?h=requestAnimationFrame(v):d(a)};return h=requestAnimationFrame(v),()=>cancelAnimationFrame(h)},[o,a,l,r]),s}const jx=({stat:a,active:l,index:o})=>{const r=wx(a.to,1800,l,o*180);return f.jsxs("div",{className:"stat-item",children:[f.jsxs("div",{className:"stat-number",children:[r,a.suffix]}),f.jsx("div",{className:"stat-label",children:a.label.replace("\\n",`
`)})]})},Mx=()=>{const a=T.useRef(null),[l,o]=T.useState(!1);return T.useEffect(()=>{const r=a.current;if(!r)return;const s=new IntersectionObserver(([d])=>{d.isIntersecting&&(o(!0),s.disconnect())},{threshold:.35});return s.observe(r),()=>s.disconnect()},[]),f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsx("div",{className:"stats-band",ref:a,children:f.jsx("div",{className:"stats-inner",children:Sx.map((r,s)=>f.jsx(jx,{stat:r,active:l,index:s},s))})})]})},Ex=[{num:"01",title:"Brief",desc:"We listen first. Your brand story, target audience, goals, and budget shape everything that follows.",icon:f.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"32",height:"32",children:[f.jsx("rect",{x:"6",y:"8",width:"28",height:"24",rx:"3",stroke:"currentColor",strokeWidth:"1.5"}),f.jsx("path",{d:"M12 15h16M12 20h12M12 25h8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{num:"02",title:"Strategy",desc:"We design a bespoke activation plan — channels, routes, timelines, and KPIs tailored to your market.",icon:f.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"32",height:"32",children:[f.jsx("circle",{cx:"20",cy:"20",r:"13",stroke:"currentColor",strokeWidth:"1.5"}),f.jsx("path",{d:"M20 7v4M20 29v4M7 20h4M29 20h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),f.jsx("circle",{cx:"20",cy:"20",r:"4",fill:"currentColor",opacity:"0.7"})]})},{num:"03",title:"Execution",desc:"Our trained field teams bring the plan to life — on-ground, across all 9 provinces, on schedule.",icon:f.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"32",height:"32",children:[f.jsx("path",{d:"M8 20l8 8 16-16",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),f.jsx("circle",{cx:"20",cy:"20",r:"13",stroke:"currentColor",strokeWidth:"1.5"})]})},{num:"04",title:"Report",desc:"You receive a full performance report — reach, conversions, consumer feedback, and lessons learned.",icon:f.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"32",height:"32",children:[f.jsx("rect",{x:"6",y:"6",width:"12",height:"28",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),f.jsx("rect",{x:"22",y:"14",width:"12",height:"20",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),f.jsx("path",{d:"M9 28h6M25 22h6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),f.jsx("path",{d:"M14 10l8-4 10 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}],zx=()=>{const a=T.useRef(null),[l,o]=T.useState(!1);return T.useEffect(()=>{const r=a.current;if(!r)return;const s=new IntersectionObserver(([d])=>{d.isIntersecting&&(o(!0),s.disconnect())},{threshold:.15});return s.observe(r),()=>s.disconnect()},[]),f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsx("section",{className:"hww-section",children:f.jsxs("div",{className:"hww-inner",ref:a,children:[f.jsxs("header",{className:"hww-header",children:[f.jsx("p",{className:"hww-eyebrow",children:"Our Process"}),f.jsx("h2",{className:"hww-title",children:"How We Work"}),f.jsx("p",{className:"hww-subtitle",children:"Every activation follows the same disciplined framework — from the first brief to the final report."})]}),f.jsx("div",{className:"hww-steps",children:Ex.map((r,s)=>f.jsxs("div",{className:`hww-step${l?" in":""}`,children:[f.jsx("div",{className:"step-icon-wrap",children:r.icon}),f.jsx("span",{className:"step-num",children:r.num}),f.jsx("h3",{className:"step-title",children:r.title}),f.jsx("p",{className:"step-desc",children:r.desc})]},s))})]})})]})},Nx=[{logo:Qg,brand:"Coca-Cola",category:"Brand & Sampling Activation",headline:"Taking the world's #1 beverage directly to Sri Lankan consumers.",result1:{value:"500K+",label:"Samples Distributed"},result2:{value:"7",label:"Provinces"},result3:{value:"60",label:"Days"},accent:"#EF4444",bg:"linear-gradient(135deg, rgba(239,68,68,0.06) 0%, rgba(255,255,255,0) 60%)"},{logo:Kg,brand:"HNB Bank",category:"Corporate Event Management",headline:"Delivering premium corporate experiences for Sri Lanka's leading bank.",result1:{value:"12+",label:"Events Delivered"},result2:{value:"8K+",label:"Attendees"},result3:{value:"100%",label:"On-Time"},accent:"#1D4ED8",bg:"linear-gradient(135deg, rgba(29,78,216,0.06) 0%, rgba(255,255,255,0) 60%)"},{logo:Jg,brand:"Maliban",category:"Roadshow & SMMT Activation",headline:"Nationwide grassroots campaign bringing Maliban to every community.",result1:{value:"300+",label:"Locations"},result2:{value:"9",label:"Provinces"},result3:{value:"1M+",label:"Impressions"},accent:"#e87f2a",bg:"linear-gradient(135deg, rgba(232,127,42,0.07) 0%, rgba(255,255,255,0) 60%)"}],Ax=()=>{const a=T.useRef(null),[l,o]=T.useState(!1);return T.useEffect(()=>{const r=a.current;if(!r)return;const s=new IntersectionObserver(([d])=>{d.isIntersecting&&(o(!0),s.disconnect())},{threshold:.1});return s.observe(r),()=>s.disconnect()},[]),f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsx("section",{className:"cs-section",children:f.jsxs("div",{className:"cs-inner",ref:a,children:[f.jsxs("header",{className:"cs-header",children:[f.jsx("p",{className:"cs-eyebrow",children:"Case Studies"}),f.jsx("h2",{className:"cs-title",children:"Campaigns That Delivered"}),f.jsx("p",{className:"cs-subtitle",children:"Real results for real brands — a snapshot of activations that moved the needle."})]}),f.jsx("div",{className:"cs-grid",children:Nx.map((r,s)=>f.jsxs("div",{className:`cs-card${l?" in":""}`,children:[f.jsxs("div",{className:"cs-card-top",style:{background:r.bg},children:[f.jsx("div",{className:"cs-logo-wrap",children:f.jsx("img",{src:r.logo,alt:r.brand})}),f.jsx("p",{className:"cs-category",style:{color:r.accent},children:r.category}),f.jsx("p",{className:"cs-headline",children:r.headline})]}),f.jsx("div",{className:"cs-accent-bar",style:{background:r.accent}}),f.jsx("div",{className:"cs-results",children:[r.result1,r.result2,r.result3].map((d,h)=>f.jsxs("div",{className:"cs-result",children:[f.jsx("span",{className:"cs-result-value",style:{color:r.accent},children:d.value}),f.jsx("span",{className:"cs-result-label",children:d.label})]},h))})]},s))})]})})]})},_x=[{name:"FMCG",desc:"Sampling, roadshows & shelf-push campaigns for fast-moving brands.",icon:f.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"36",height:"36",children:[f.jsx("path",{d:"M8 32V16l12-8 12 8v16H8z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),f.jsx("rect",{x:"15",y:"22",width:"10",height:"10",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),f.jsx("path",{d:"M20 8v6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Banking & Finance",desc:"Corporate events, product launches & customer acquisition drives.",icon:f.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"36",height:"36",children:[f.jsx("path",{d:"M6 18L20 8l14 10H6z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),f.jsx("rect",{x:"6",y:"18",width:"28",height:"3",stroke:"currentColor",strokeWidth:"1.5"}),f.jsx("rect",{x:"6",y:"32",width:"28",height:"3",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),f.jsx("path",{d:"M10 21v11M18 21v11M26 21v11M34 21v11",stroke:"currentColor",strokeWidth:"1.5"})]})},{name:"Telecom",desc:"Subscriber acquisition, SIM distribution & awareness activations.",icon:f.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"36",height:"36",children:[f.jsx("path",{d:"M20 8C13.373 8 8 13.373 8 20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),f.jsx("path",{d:"M20 14c-3.314 0-6 2.686-6 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),f.jsx("circle",{cx:"20",cy:"20",r:"3",fill:"currentColor",opacity:"0.8"}),f.jsx("path",{d:"M20 26v6M17 32h6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),f.jsx("path",{d:"M32 8C25.373 8 20 13.373 20 20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},{name:"Government",desc:"Public awareness campaigns, institutional events & community outreach.",icon:f.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"36",height:"36",children:[f.jsx("path",{d:"M6 18L20 9l14 9H6z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),f.jsx("rect",{x:"6",y:"18",width:"28",height:"3",fill:"currentColor",opacity:"0.2",stroke:"currentColor",strokeWidth:"1.5"}),f.jsx("path",{d:"M10 21v10M18 21v10M26 21v10M34 21v10",stroke:"currentColor",strokeWidth:"1.5"}),f.jsx("rect",{x:"6",y:"31",width:"28",height:"3",rx:"1",stroke:"currentColor",strokeWidth:"1.5"})]})},{name:"Healthcare",desc:"Patient education drives, product sampling & healthcare professional outreach.",icon:f.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"36",height:"36",children:[f.jsx("rect",{x:"8",y:"8",width:"24",height:"24",rx:"4",stroke:"currentColor",strokeWidth:"1.5"}),f.jsx("path",{d:"M20 14v12M14 20h12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})},{name:"Retail",desc:"In-store promotions, footfall drives & experiential retail activations.",icon:f.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"36",height:"36",children:[f.jsx("path",{d:"M7 10h26l-3 14H10L7 10z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),f.jsx("path",{d:"M10 24l-2 8h24l-2-8",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),f.jsx("circle",{cx:"16",cy:"36",r:"2",stroke:"currentColor",strokeWidth:"1.5"}),f.jsx("circle",{cx:"26",cy:"36",r:"2",stroke:"currentColor",strokeWidth:"1.5"}),f.jsx("path",{d:"M14 10l2-4h8l2 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]})},{name:"Consumer Goods",desc:"Trial campaigns, loyalty programs & multi-city brand activation.",icon:f.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",width:"36",height:"36",children:[f.jsx("rect",{x:"10",y:"8",width:"20",height:"26",rx:"3",stroke:"currentColor",strokeWidth:"1.5"}),f.jsx("path",{d:"M15 14h10M15 19h10M15 24h6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),f.jsx("circle",{cx:"28",cy:"28",r:"6",fill:"#f5f4f0",stroke:"currentColor",strokeWidth:"1.5"}),f.jsx("path",{d:"M26 28l2 2 4-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})},{name:"Lifestyle & Beauty",desc:"Mall activations, influencer events & premium brand experiences.",icon:f.jsx("svg",{viewBox:"0 0 40 40",fill:"none",width:"36",height:"36",children:f.jsx("path",{d:"M20 6l3.09 9.26L32 18l-7.5 5.5L27 33l-7-5.5L13 33l2.5-9.5L8 18l8.91-2.74L20 6z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})})}],Tx=()=>{const a=T.useRef(null),[l,o]=T.useState(!1);return T.useEffect(()=>{const r=a.current;if(!r)return;const s=new IntersectionObserver(([d])=>{d.isIntersecting&&(o(!0),s.disconnect())},{threshold:.1});return s.observe(r),()=>s.disconnect()},[]),f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsx("section",{className:"ind-section",children:f.jsxs("div",{className:"ind-inner",ref:a,children:[f.jsxs("header",{className:"ind-header",children:[f.jsx("p",{className:"ind-eyebrow",children:"Industries"}),f.jsx("h2",{className:"ind-title",children:"Industries We Serve"}),f.jsx("p",{className:"ind-subtitle",children:"From multinational FMCG giants to government institutions — we activate across every major sector in Sri Lanka."})]}),f.jsx("div",{className:"ind-grid",children:_x.map((r,s)=>f.jsxs("div",{className:`ind-card${l?" in":""}`,children:[f.jsx("span",{className:"ind-icon",children:r.icon}),f.jsx("h3",{className:"ind-name",children:r.name}),f.jsx("p",{className:"ind-desc",children:r.desc})]},s))})]})})]})},Cp=["ACTIVATE","INSPIRE","ELEVATE","CONNECT"],Op=["S","T","R","A","B","S","O"],Cx=["Brand Activations","Mall Activations","Roadshows & SMMT","Sampling Campaigns","Selling Operations","Corporate Events","Government Activations","Promoter Deployment","Brand Activations","Mall Activations","Roadshows & SMMT","Sampling Campaigns","Selling Operations","Corporate Events","Government Activations","Promoter Deployment"],Ox=()=>{const[a,l]=T.useState(!1),[o,r]=T.useState(!1),[s,d]=T.useState(Array(7).fill(!1)),[h,p]=T.useState(!1),[v,y]=T.useState(!1),[g,x]=T.useState(!1),[S,w]=T.useState(!1),[N,B]=T.useState(!1),[q,L]=T.useState(0),[Z,O]=T.useState("idle"),U=T.useRef(null),Q=T.useCallback(()=>{document.querySelector('[data-section="Projects"]')?.scrollIntoView({behavior:"smooth"})},[]);return T.useEffect(()=>{const K=[],W=(I,at)=>{K.push(setTimeout(at,I))};return W(200,()=>{l(!0),r(!0)}),Op.forEach((I,at)=>{W(900+at*95,()=>{d(ht=>{const P=[...ht];return P[at]=!0,P})})}),W(1680,()=>p(!0)),W(1820,()=>{y(!0),x(!0)}),W(2250,()=>w(!0)),W(2680,()=>B(!0)),W(2750,()=>{U.current=setInterval(()=>{O("exiting"),setTimeout(()=>{L(I=>(I+1)%Cp.length),O("entering")},380),setTimeout(()=>O("idle"),980)},2900)}),()=>{K.forEach(clearTimeout),U.current&&clearInterval(U.current)}},[]),f.jsxs("div",{className:"home-wrapper",role:"main",children:[f.jsxs("section",{className:"hero-cinema",children:[f.jsx("div",{className:"cinema-ambient","aria-hidden":"true"}),f.jsx("div",{className:"cinema-scanlines","aria-hidden":"true"}),f.jsx("span",{className:"c-corner c-corner--tl","aria-hidden":"true"}),f.jsx("span",{className:"c-corner c-corner--tr","aria-hidden":"true"}),f.jsx("span",{className:"c-corner c-corner--bl","aria-hidden":"true"}),f.jsx("span",{className:"c-corner c-corner--br","aria-hidden":"true"}),f.jsxs("div",{className:"cinema-stage",children:[f.jsxs("p",{className:`cinema-eyebrow${a?" in":""}`,"aria-hidden":"true",children:[f.jsx("span",{className:"eyebrow-dot",children:"◆"}),"Brand Activation Agency · Sri Lanka · Est. 2020",f.jsx("span",{className:"eyebrow-dot",children:"◆"})]}),f.jsx("div",{className:`cinema-sweep${o?" in":""}`,"aria-hidden":"true"}),f.jsxs("h1",{className:"cinema-brand","aria-label":"Strabso",children:[Op.map((K,W)=>f.jsx("span",{className:"lw","aria-hidden":"true",children:f.jsx("span",{className:`lc${s[W]?" in":""}`,children:K})},W)),h&&f.jsx("span",{className:"brand-shimmer","aria-hidden":"true"})]}),f.jsx("div",{className:`cinema-gold${v?" in":""}`,"aria-hidden":"true"}),f.jsx("p",{className:`cinema-tagline${g?" in":""}`,children:"Sri Lanka's premier on-ground marketing partner"}),f.jsx("div",{className:`cinema-cycle-wrap${S?" in":""}`,"aria-live":"polite",children:f.jsx("span",{className:`cinema-word phase-${Z}`,children:Cp[q]})}),f.jsx("div",{className:`cinema-cta${N?" in":""}`,children:f.jsxs("button",{className:"cinema-btn",onClick:Q,children:[f.jsx("span",{children:"See Our Work"}),f.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:f.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})})]}),f.jsx("div",{className:"cinema-ticker","aria-hidden":"true",children:f.jsx("div",{className:"cinema-ticker-track",children:Cx.map((K,W)=>f.jsxs("span",{className:"cinema-ticker-item",children:[K,f.jsx("span",{className:"cinema-ticker-sep",children:"·"})]},W))})})]}),f.jsx(Mx,{}),f.jsx("div",{className:"services-section",children:f.jsx(bx,{})}),f.jsx(zx,{}),f.jsx(Tx,{}),f.jsx("div",{className:"carousel-section",children:f.jsx(cx,{})}),f.jsx(Ax,{})]})},kx="/Strabso/";function pt(a,l){return`${kx}gallery/${encodeURIComponent(a)}/${encodeURIComponent(l)}`}const kp=[{id:1,title:"Coca Cola Annual Business Con 2025",category:"Business Conference",location:"Colombo",year:"2025",coverImage:pt("Coca Cola Annual Business Con 2025","cover.jpg"),photos:[pt("Coca Cola Annual Business Con 2025","cover.jpg"),pt("Coca Cola Annual Business Con 2025","coca1.jpg"),pt("Coca Cola Annual Business Con 2025","coco2.jpg"),pt("Coca Cola Annual Business Con 2025","coca3.jpg"),pt("Coca Cola Annual Business Con 2025","coca4.jpg")]},{id:2,title:"Elephant House – Vibe Activations",category:"Brand Activation",location:"Island-wide",year:"2024–2025",coverImage:pt("Elephant House – Vibe SMMT Activation","cover.jpg"),photos:[pt("Elephant House – Vibe SMMT Activation","cover.jpg"),pt("Elephant House – Vibe SMMT Activation","eh.jpg"),pt("Elephant House – Vibe SMMT Activation","eh2.jpg"),pt("Elephant House – Vibe SMMT Activation","movie_cover.jpg"),pt("Elephant House – Vibe SMMT Activation","movie_eh.jpg")]},{id:3,title:"Roza Pasta – Christmas Mall Activation",category:"Mall Activation",location:"Colombo",year:"2024",coverImage:pt("Roza Pasta – Christmas Mall Activation","cover.jpg"),photos:[pt("Roza Pasta – Christmas Mall Activation","cover.jpg"),pt("Roza Pasta – Christmas Mall Activation","ro1.jpg"),pt("Roza Pasta – Christmas Mall Activation","ro2.png")]},{id:4,title:"Uswatta – Jo-Pet Big Match Selling Operation",category:"Selling Operation",location:"Island-wide",year:"2024",coverImage:pt("Uswatta – Jo-Pet Big Match- Selling Operation ","cover.jpg"),photos:[pt("Uswatta – Jo-Pet Big Match- Selling Operation ","cover.jpg"),pt("Uswatta – Jo-Pet Big Match- Selling Operation ","us1.jpg")]},{id:5,title:"Vivya – MT Activation",category:"Modern Trade Activation",location:"Island-wide",year:"2024",coverImage:pt("Vivya – MT Activation ","cover.jpg"),photos:[pt("Vivya – MT Activation ","cover.jpg"),pt("Vivya – MT Activation ","vv1.jpg"),pt("Vivya – MT Activation ","vv2.jpg")]},{id:6,title:"Xtra – SL & AFG Cricket Tournament 2024",category:"Sports Activation",location:"Colombo",year:"2024",coverImage:pt("Xtra – SL AFG One Day Cricket Tournament 2024","cover.jpg"),photos:[pt("Xtra – SL AFG One Day Cricket Tournament 2024","cover.jpg"),pt("Xtra – SL AFG One Day Cricket Tournament 2024","ext1.jpg"),pt("Xtra – SL AFG One Day Cricket Tournament 2024","ext2.jpg"),pt("Xtra – SL AFG One Day Cricket Tournament 2024","ext3.png")]},{id:7,title:"Maliban – Non Fat Mall Activation",category:"Mall Activation",location:"Colombo",year:"2025",coverImage:pt("Maliban - Non Fat Mall Activation","cover.jpg"),photos:[pt("Maliban - Non Fat Mall Activation","cover.jpg"),pt("Maliban - Non Fat Mall Activation","mal.jpg"),pt("Maliban - Non Fat Mall Activation","mal1.jpg")]},{id:8,title:"Anchor – Nallur Festival Door to Door",category:"Door to Door Activation",location:"Jaffna",year:"2025",coverImage:pt("Anchor - Nallur Festival - Door to Door Activation","cover.jpg"),photos:[pt("Anchor - Nallur Festival - Door to Door Activation","cover.jpg"),pt("Anchor - Nallur Festival - Door to Door Activation","ac.jpg")]},{id:9,title:"Kesha – Office Activation",category:"Office Activation",location:"Colombo",year:"2025",coverImage:pt("Kesha - Office Activation","cover.jpg"),photos:[pt("Kesha - Office Activation","cover.jpg"),pt("Kesha - Office Activation","ks1.jpg")]},{id:10,title:"Lanka Soy – Town Activation",category:"Town Activation",location:"Island-wide",year:"2025",coverImage:pt("Lanka Soy Town Activation","cover.jpg"),photos:[pt("Lanka Soy Town Activation","cover.jpg"),pt("Lanka Soy Town Activation","ls.jpg"),pt("Lanka Soy Town Activation","ls1.jpg")]},{id:11,title:"Sting – Holy Activation",category:"Brand Activation",location:"Island-wide",year:"2025",coverImage:pt("Sting - Holy Activation","cover.jpg"),photos:[pt("Sting - Holy Activation","cover.jpg"),pt("Sting - Holy Activation","stng.jpg")]},{id:12,title:"HNB – SOLO Merchant Activation",category:"Merchant Activation",location:"Island-wide",year:"2025",coverImage:pt("HNB - SOLO Merchant Activation","cover.jpg"),photos:[pt("HNB - SOLO Merchant Activation","cover.jpg"),pt("HNB - SOLO Merchant Activation","hnb.jpg"),pt("HNB - SOLO Merchant Activation","hnb1.jpg")]}],Dx=[{number:"100+",label:"Activations"},{number:"25+",label:"Brand Partners"},{number:"9",label:"Provinces"}],Rx=({src:a,className:l})=>{const o=T.useRef(null),[r,s]=T.useState(!1);return T.useEffect(()=>{const d=o.current;if(!d)return;const h=new IntersectionObserver(([p])=>{p.isIntersecting&&(s(!0),h.disconnect())},{rootMargin:"300px"});return h.observe(d),()=>h.disconnect()},[]),f.jsx("div",{ref:o,className:l,style:{backgroundImage:r?`url('${a}')`:"none",backgroundColor:r?void 0:"rgba(255,255,255,0.04)",backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",transition:"background-image 0.3s ease"}})},Lx=({project:a,startIndex:l,onClose:o})=>{const[r,s]=T.useState(l),d=T.useRef(null),h=T.useCallback(()=>s(v=>(v-1+a.photos.length)%a.photos.length),[a.photos.length]),p=T.useCallback(()=>s(v=>(v+1)%a.photos.length),[a.photos.length]);return T.useEffect(()=>{const v=y=>{y.key==="Escape"&&o(),y.key==="ArrowRight"&&p(),y.key==="ArrowLeft"&&h()};return window.addEventListener("keydown",v),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",v),document.body.style.overflow=""}},[o,p,h]),f.jsx("div",{className:"lb-overlay",onClick:o,onTouchStart:v=>{d.current=v.touches[0].clientX},onTouchEnd:v=>{if(d.current===null)return;const y=d.current-v.changedTouches[0].clientX;Math.abs(y)>50&&(y>0?p():h()),d.current=null},children:f.jsxs("div",{className:"lb-box",onClick:v=>v.stopPropagation(),children:[f.jsxs("div",{className:"lb-header",children:[f.jsx("span",{className:"lb-title",children:a.title}),f.jsxs("div",{className:"lb-header-right",children:[f.jsxs("span",{className:"lb-counter",children:[r+1," / ",a.photos.length]}),f.jsx("button",{className:"lb-close",onClick:o,"aria-label":"Close",children:f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:f.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]})]}),f.jsxs("div",{className:"lb-img-wrap",children:[f.jsx("button",{className:"lb-nav lb-nav-prev",onClick:h,"aria-label":"Previous",children:f.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("path",{d:"M15 18L9 12l6-6"})})}),f.jsx("img",{src:a.photos[r],alt:`${a.title} ${r+1}`,className:"lb-img",decoding:"async"},r),f.jsx("button",{className:"lb-nav lb-nav-next",onClick:p,"aria-label":"Next",children:f.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("path",{d:"M9 18l6-6-6-6"})})})]}),a.photos.length>1&&f.jsx("div",{className:"lb-thumbs",children:a.photos.map((v,y)=>f.jsx("button",{className:`lb-thumb${y===r?" lb-thumb-active":""}`,onClick:()=>s(y),"aria-label":`Photo ${y+1}`,children:f.jsx("img",{src:v,alt:"",loading:"lazy",decoding:"async"})},y))}),f.jsx("p",{className:"lb-swipe-hint",children:"Swipe to navigate"})]})})},Bx=({project:a,index:l,onOpen:o})=>f.jsxs("article",{className:"pc-card",style:{animationDelay:`${l%4*.08}s`},onClick:()=>o(a.id),role:"button",tabIndex:0,"aria-label":`View ${a.title} gallery`,onKeyDown:r=>r.key==="Enter"&&o(a.id),children:[f.jsxs("div",{className:"pc-img-wrap",children:[f.jsx(Rx,{src:a.coverImage,className:"pc-img"}),f.jsx("div",{className:"pc-overlay"}),f.jsxs("div",{className:"pc-badge",children:[f.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),f.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5",fill:"currentColor"}),f.jsx("path",{d:"M21 15L16 10 5 21",strokeLinecap:"round",strokeLinejoin:"round"})]}),a.photos.length]}),f.jsxs("div",{className:"pc-cta",children:[f.jsx("span",{children:"View Gallery"}),f.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("path",{d:"M7 17L17 7M17 7H7M17 7v10"})})]})]}),f.jsxs("div",{className:"pc-info",children:[f.jsx("span",{className:"pc-category",children:a.category}),f.jsx("h3",{className:"pc-title",children:a.title}),f.jsxs("div",{className:"pc-meta",children:[f.jsx("span",{children:a.location}),f.jsx("span",{className:"pc-dot",children:"·"}),f.jsx("span",{children:a.year})]})]})]}),Ux=()=>{const[a,l]=T.useState(null),o=a!=null?kp.find(r=>r.id===a)??null:null;return f.jsxs("div",{className:"proj-page",children:[f.jsx("style",{children:`
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
      `}),f.jsxs("div",{className:"proj-inner",children:[f.jsxs("header",{className:"proj-header",children:[f.jsx("p",{className:"proj-eyebrow",children:"Our Work"}),f.jsx("h1",{className:"proj-heading",children:"Projects"}),f.jsx("hr",{className:"proj-rule"})]}),f.jsx("div",{className:"proj-stats",role:"list",children:Dx.map(r=>f.jsxs("div",{className:"proj-stat",role:"listitem",children:[f.jsx("span",{className:"proj-stat-num",children:r.number}),f.jsx("span",{className:"proj-stat-label",children:r.label})]},r.label))}),f.jsx("div",{className:"proj-grid",children:kp.map((r,s)=>f.jsx(Bx,{project:r,index:s,onOpen:d=>l(d)},r.id))})]}),o&&f.jsx(Lx,{project:o,startIndex:0,onClose:()=>l(null)})]})},Hx=()=>{const a=T.useRef(null),[l,o]=T.useState(!1);T.useEffect(()=>{const d=()=>{o(window.innerWidth<=767)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),T.useEffect(()=>{const d=new IntersectionObserver(p=>{p.forEach(v=>{v.isIntersecting&&v.target.classList.add("animate-in")})},{threshold:.1});return document.querySelectorAll(".fade-up").forEach(p=>d.observe(p)),()=>d.disconnect()},[]);const r=[{icon:f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"value-svg-icon",children:f.jsx("path",{d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",strokeLinecap:"round",strokeLinejoin:"round"})}),title:"Innovation",description:"Innovative event and activation concepts that set your brand apart from the competition."},{icon:f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"value-svg-icon",children:f.jsx("path",{d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",strokeLinecap:"round",strokeLinejoin:"round"})}),title:"Brand-First",description:"Deep brand-first strategic thinking — not just BTL execution, but complete brand elevation."},{icon:f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"value-svg-icon",children:f.jsx("path",{d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",strokeLinecap:"round",strokeLinejoin:"round"})}),title:"Regional Reach",description:"Strong North & East regional resource network with island-wide coverage across Sri Lanka."},{icon:f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"value-svg-icon",children:f.jsx("path",{d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",strokeLinecap:"round",strokeLinejoin:"round"})}),title:"Government Relations",description:"Government sector approvals, involvement & collaborations for seamless execution."}],s=[{year:"2020",event:"Strabso Founded",description:"Started with a vision to transform brand activations in Sri Lanka"},{year:"2021",event:"Major Brand Partnerships",description:"Partnered with Coca-Cola, HNB, and leading FMCG brands"},{year:"2022",event:"North & East Expansion",description:"Established strong presence in Northern and Eastern regions"},{year:"2023",event:"Corporate Events",description:"Executed Coca-Cola Annual Sales Conference and Award Ceremonies"},{year:"2024",event:"360° Solutions",description:"Launched complete end-to-end brand activation services"},{year:"2025",event:"Industry Leader",description:"Targeting top 5 agency position with 360° client solutions"}];return f.jsxs("div",{className:"about-us-page",children:[f.jsx("style",{children:`

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
      `}),f.jsxs("section",{className:"hero-section",children:[f.jsx("div",{className:"hero-bg"}),f.jsxs("div",{className:"hero-content",children:[f.jsxs("span",{className:"hero-label",children:[f.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",style:{width:"16px",height:"16px"},children:f.jsx("path",{d:"M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"})}),"Who We Are"]}),f.jsxs("h1",{className:"hero-title",children:["Your ",f.jsx("span",{className:"accent",children:"360°"})," Brand Partner"]}),f.jsx("p",{className:"hero-description",children:"Strabso is a full-service activation and events agency delivering end-to-end brand solutions with a strong presence across Sri Lanka, including the North and East regions."})]}),!l&&f.jsxs("div",{className:"scroll-indicator",children:[f.jsx("span",{children:"Scroll to explore"}),f.jsx("div",{className:"scroll-line"})]})]}),f.jsx("section",{className:"story-section",children:f.jsxs("div",{className:"story-container",children:[f.jsxs("div",{className:"story-heading fade-up",children:[f.jsxs("h2",{children:["Our ",f.jsx("span",{className:"accent",children:"Vision"})," & Mission"]}),f.jsx("div",{className:"story-heading-line"})]}),f.jsxs("div",{className:"vision-mission-grid fade-up",children:[f.jsxs("div",{className:"vm-card",children:[f.jsx("div",{className:"vm-card-icon",children:f.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("circle",{cx:"12",cy:"12",r:"3"}),f.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"5"}),f.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"22"}),f.jsx("line",{x1:"2",y1:"12",x2:"5",y2:"12"}),f.jsx("line",{x1:"19",y1:"12",x2:"22",y2:"12"})]})}),f.jsx("span",{className:"vm-card-label",children:"Vision"}),f.jsx("p",{className:"vm-card-text",children:"To identify ourselves as one of the top 5 agencies in the industry by 2025, while being the only agency providing a complete 360° solution to its clients."})]}),f.jsxs("div",{className:"vm-card",children:[f.jsx("div",{className:"vm-card-icon",children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})})}),f.jsx("span",{className:"vm-card-label",children:"Mission"}),f.jsx("p",{className:"vm-card-text",children:"To provide clients with a 360° business solution, reducing operational hassle, building long-term trust, and delivering high-quality execution at every touchpoint."})]})]}),f.jsxs("div",{className:"founder-quote fade-up",children:[f.jsx("blockquote",{children:'"At Strabo pvt ltd, we are driven to partnering with you to shape powerful brands and elevate them to new heights through bold events and impactful brand activations."'}),f.jsx("cite",{children:"— Rumesh Chandrakumar, Founder"})]})]})}),f.jsxs("section",{className:"values-section",children:[f.jsxs("div",{className:"section-header fade-up",children:[f.jsxs("h2",{children:["Our Key ",f.jsx("span",{className:"accent",children:"Strengths"})]}),f.jsx("p",{children:"What sets Strabso apart — our unique capabilities that deliver results for your brand."})]}),f.jsx("div",{className:"values-grid",children:r.map((d,h)=>f.jsxs("div",{className:"value-card fade-up",style:{transitionDelay:`${h*.1}s`},children:[f.jsx("div",{className:"value-icon",children:d.icon}),f.jsx("h3",{children:d.title}),f.jsx("p",{children:d.description})]},h))})]}),f.jsx("section",{className:"stats-banner",ref:a,children:f.jsxs("div",{className:"stats-grid",children:[f.jsxs("div",{className:"stat-item fade-up",children:[f.jsx("h3",{children:"100+"}),f.jsx("p",{children:"Activations Delivered"})]}),f.jsxs("div",{className:"stat-item fade-up",style:{transitionDelay:"0.1s"},children:[f.jsx("h3",{children:"25+"}),f.jsx("p",{children:"Major Brands"})]}),f.jsxs("div",{className:"stat-item fade-up",style:{transitionDelay:"0.2s"},children:[f.jsx("h3",{children:"9"}),f.jsx("p",{children:"Provinces Covered"})]}),f.jsxs("div",{className:"stat-item fade-up",style:{transitionDelay:"0.3s"},children:[f.jsx("h3",{children:"360°"}),f.jsx("p",{children:"Complete Solutions"})]})]})}),f.jsxs("section",{className:"timeline-section",children:[f.jsxs("div",{className:"section-header fade-up",children:[f.jsxs("h2",{children:["Our ",f.jsx("span",{className:"accent",children:"Journey"})]}),f.jsx("p",{children:"From humble beginnings to industry leadership, here's how we've grown."})]}),f.jsxs("div",{className:"timeline-container",children:[f.jsx("div",{className:"timeline-line"}),f.jsx("div",{className:"timeline-items",children:s.map((d,h)=>f.jsxs("div",{className:"timeline-item fade-up",children:[f.jsxs("div",{className:"timeline-content",children:[f.jsx("div",{className:"timeline-year",children:d.year}),f.jsx("div",{className:"timeline-event",children:d.event}),f.jsx("div",{className:"timeline-description",children:d.description})]}),f.jsx("div",{className:"timeline-dot"}),f.jsx("div",{style:{flex:1}})]},h))})]})]}),f.jsx("section",{className:"cta-section",children:f.jsxs("div",{className:"cta-content fade-up",children:[f.jsxs("h2",{className:"cta-title",children:["Ready to Create Something ",f.jsx("span",{className:"accent",children:"Unforgettable"}),"?"]}),f.jsx("p",{className:"cta-description",children:"Let's collaborate to bring your next event to life. Whether you have a clear vision or just the spark of an idea, we're here to make it extraordinary."})]})})]})},qx=()=>{const a=[{icon:f.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),f.jsx("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]}),label:"PHONE",value:"0777 188 485",href:"tel:+94777188485"},{icon:f.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),f.jsx("polyline",{points:"22,6 12,13 2,6"})]}),label:"EMAIL",value:"info@strabso.lk",href:"mailto:info@strabso.lk"},{icon:f.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),f.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),label:"LOCATION",value:"Colombo, Sri Lanka",href:"https://maps.google.com/?q=Colombo,Sri+Lanka"}],l={wrapper:{background:"transparent",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",position:"relative",overflow:"hidden",fontFamily:"'Outfit', sans-serif"},container:{maxWidth:"1000px",width:"100%",textAlign:"center",position:"relative",zIndex:1},headerSection:{marginBottom:"60px"},title:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(36px, 6vw, 56px)",fontWeight:500,color:"#111111",margin:"0 0 8px 0",letterSpacing:"-1px",opacity:0},subtitle:{fontFamily:"'Outfit', sans-serif",fontSize:"16px",fontWeight:300,color:"rgba(0, 0, 0, 0.5)",maxWidth:"500px",margin:"0 auto",lineHeight:1.7,opacity:0},contactGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"30px",padding:"0 20px"},contactCard:{textDecoration:"none",display:"flex",flexDirection:"column",alignItems:"center",padding:"40px 30px",background:"transparent",borderRadius:"2px",cursor:"pointer",opacity:0},iconContainer:{width:"80px",height:"80px",borderRadius:"50%",border:"1px solid rgba(0, 0, 0, 0.12)",background:"transparent",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"24px",color:"rgba(0, 0, 0, 0.45)"},contactLabel:{fontFamily:"'Outfit', sans-serif",fontSize:"11px",fontWeight:400,letterSpacing:"3px",color:"rgba(0, 0, 0, 0.38)",marginBottom:"12px",margin:"0 0 12px 0"},contactValue:{fontFamily:"'Cormorant Garamond', serif",fontSize:"18px",fontWeight:400,color:"rgba(0, 0, 0, 0.72)",margin:0}};return f.jsxs("div",{style:l.wrapper,className:"contact-wrapper",children:[f.jsx("style",{children:`
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
      `}),f.jsxs("div",{style:l.container,children:[f.jsxs("div",{style:l.headerSection,className:"contact-header",children:[f.jsx("h1",{className:"animate-in delay-1",style:l.title,children:"Let's Connect"}),f.jsx("p",{className:"animate-in delay-2",style:l.subtitle,children:"Ready to activate your brand across Sri Lanka? Get in touch with us to discuss your next activation, campaign, or event. We're here to bring your vision to life."})]}),f.jsx("div",{style:l.contactGrid,className:"contact-grid",children:a.map((o,r)=>f.jsxs("a",{href:o.href,className:`contact-item contact-card animate-in delay-${r+3}`,style:l.contactCard,children:[f.jsx("div",{className:"icon-container",style:l.iconContainer,children:o.icon}),f.jsx("h3",{style:l.contactLabel,children:o.label}),f.jsx("p",{className:"contact-value",style:l.contactValue,children:o.value})]},r))})]})]})};var tf={exports:{}},ef,Dp;function Yx(){if(Dp)return ef;Dp=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ef=a,ef}var nf,Rp;function Gx(){if(Rp)return nf;Rp=1;var a=Yx();function l(){}function o(){}return o.resetWarningCache=l,nf=function(){function r(h,p,v,y,g,x){if(x!==a){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}r.isRequired=r;function s(){return r}var d={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:s,element:r,elementType:r,instanceOf:s,node:r,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:o,resetWarningCache:l};return d.PropTypes=d,d},nf}var Lp;function Xx(){return Lp||(Lp=1,tf.exports=Gx()()),tf.exports}var Vx=Xx();const $=By(Vx);class be{constructor(){this._partials=new Float64Array(32),this._n=0}add(l){const o=this._partials;let r=0;for(let s=0;s<this._n&&s<32;s++){const d=o[s],h=l+d,p=Math.abs(l)<Math.abs(d)?l-(h-d):d-(h-l);p&&(o[r++]=p),l=h}return o[r]=l,this._n=r+1,this}valueOf(){const l=this._partials;let o=this._n,r,s,d,h=0;if(o>0){for(h=l[--o];o>0&&(r=h,s=l[--o],h=r+s,d=s-(h-r),!d););o>0&&(d<0&&l[o-1]<0||d>0&&l[o-1]>0)&&(s=d*2,r=h+s,s==r-h&&(h=r))}return h}}function*Zx(a){for(const l of a)yield*l}function Wg(a){return Array.from(Zx(a))}function Hi(a,l,o){a=+a,l=+l,o=(s=arguments.length)<2?(l=a,a=0,1):s<3?1:+o;for(var r=-1,s=Math.max(0,Math.ceil((l-a)/o))|0,d=new Array(s);++r<s;)d[r]=a+r*o;return d}var ft=1e-6,or=1e-12,bt=Math.PI,te=bt/2,ac=bt/4,ze=bt*2,Xt=180/bt,dt=bt/180,At=Math.abs,Wi=Math.atan,Ne=Math.atan2,rt=Math.cos,qo=Math.ceil,$g=Math.exp,mf=Math.hypot,ic=Math.log,af=Math.pow,et=Math.sin,fn=Math.sign||function(a){return a>0?1:a<0?-1:0},he=Math.sqrt,Kf=Math.tan;function Fg(a){return a>1?0:a<-1?bt:Math.acos(a)}function Ae(a){return a>1?te:a<-1?-te:Math.asin(a)}function Bp(a){return(a=et(a/2))*a}function $t(){}function lc(a,l){a&&Hp.hasOwnProperty(a.type)&&Hp[a.type](a,l)}var Up={Feature:function(a,l){lc(a.geometry,l)},FeatureCollection:function(a,l){for(var o=a.features,r=-1,s=o.length;++r<s;)lc(o[r].geometry,l)}},Hp={Sphere:function(a,l){l.sphere()},Point:function(a,l){a=a.coordinates,l.point(a[0],a[1],a[2])},MultiPoint:function(a,l){for(var o=a.coordinates,r=-1,s=o.length;++r<s;)a=o[r],l.point(a[0],a[1],a[2])},LineString:function(a,l){pf(a.coordinates,l,0)},MultiLineString:function(a,l){for(var o=a.coordinates,r=-1,s=o.length;++r<s;)pf(o[r],l,0)},Polygon:function(a,l){qp(a.coordinates,l)},MultiPolygon:function(a,l){for(var o=a.coordinates,r=-1,s=o.length;++r<s;)qp(o[r],l)},GeometryCollection:function(a,l){for(var o=a.geometries,r=-1,s=o.length;++r<s;)lc(o[r],l)}};function pf(a,l,o){var r=-1,s=a.length-o,d;for(l.lineStart();++r<s;)d=a[r],l.point(d[0],d[1],d[2]);l.lineEnd()}function qp(a,l){var o=-1,r=a.length;for(l.polygonStart();++o<r;)pf(a[o],l,1);l.polygonEnd()}function gn(a,l){a&&Up.hasOwnProperty(a.type)?Up[a.type](a,l):lc(a,l)}var rc=new be,oc=new be,Ig,Pg,gf,vf,yf,Nn={point:$t,lineStart:$t,lineEnd:$t,polygonStart:function(){rc=new be,Nn.lineStart=Qx,Nn.lineEnd=Kx},polygonEnd:function(){var a=+rc;oc.add(a<0?ze+a:a),this.lineStart=this.lineEnd=this.point=$t},sphere:function(){oc.add(ze)}};function Qx(){Nn.point=Jx}function Kx(){t1(Ig,Pg)}function Jx(a,l){Nn.point=t1,Ig=a,Pg=l,a*=dt,l*=dt,gf=a,vf=rt(l=l/2+ac),yf=et(l)}function t1(a,l){a*=dt,l*=dt,l=l/2+ac;var o=a-gf,r=o>=0?1:-1,s=r*o,d=rt(l),h=et(l),p=yf*h,v=vf*d+p*rt(s),y=p*r*et(s);rc.add(Ne(y,v)),gf=a,vf=d,yf=h}function Wx(a){return oc=new be,gn(a,Nn),oc*2}function cc(a){return[Ne(a[1],a[0]),Ae(a[2])]}function Fa(a){var l=a[0],o=a[1],r=rt(o);return[r*rt(l),r*et(l),et(o)]}function Yo(a,l){return a[0]*l[0]+a[1]*l[1]+a[2]*l[2]}function Vi(a,l){return[a[1]*l[2]-a[2]*l[1],a[2]*l[0]-a[0]*l[2],a[0]*l[1]-a[1]*l[0]]}function lf(a,l){a[0]+=l[0],a[1]+=l[1],a[2]+=l[2]}function Go(a,l){return[a[0]*l,a[1]*l,a[2]*l]}function uc(a){var l=he(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);a[0]/=l,a[1]/=l,a[2]/=l}var Wt,Be,Pt,Fe,$a,e1,n1,Gi,nr,Aa,ea,Fn={point:xf,lineStart:Yp,lineEnd:Gp,polygonStart:function(){Fn.point=i1,Fn.lineStart=$x,Fn.lineEnd=Fx,nr=new be,Nn.polygonStart()},polygonEnd:function(){Nn.polygonEnd(),Fn.point=xf,Fn.lineStart=Yp,Fn.lineEnd=Gp,rc<0?(Wt=-(Pt=180),Be=-(Fe=90)):nr>ft?Fe=90:nr<-ft&&(Be=-90),ea[0]=Wt,ea[1]=Pt},sphere:function(){Wt=-(Pt=180),Be=-(Fe=90)}};function xf(a,l){Aa.push(ea=[Wt=a,Pt=a]),l<Be&&(Be=l),l>Fe&&(Fe=l)}function a1(a,l){var o=Fa([a*dt,l*dt]);if(Gi){var r=Vi(Gi,o),s=[r[1],-r[0],0],d=Vi(s,r);uc(d),d=cc(d);var h=a-$a,p=h>0?1:-1,v=d[0]*Xt*p,y,g=At(h)>180;g^(p*$a<v&&v<p*a)?(y=d[1]*Xt,y>Fe&&(Fe=y)):(v=(v+360)%360-180,g^(p*$a<v&&v<p*a)?(y=-d[1]*Xt,y<Be&&(Be=y)):(l<Be&&(Be=l),l>Fe&&(Fe=l))),g?a<$a?$e(Wt,a)>$e(Wt,Pt)&&(Pt=a):$e(a,Pt)>$e(Wt,Pt)&&(Wt=a):Pt>=Wt?(a<Wt&&(Wt=a),a>Pt&&(Pt=a)):a>$a?$e(Wt,a)>$e(Wt,Pt)&&(Pt=a):$e(a,Pt)>$e(Wt,Pt)&&(Wt=a)}else Aa.push(ea=[Wt=a,Pt=a]);l<Be&&(Be=l),l>Fe&&(Fe=l),Gi=o,$a=a}function Yp(){Fn.point=a1}function Gp(){ea[0]=Wt,ea[1]=Pt,Fn.point=xf,Gi=null}function i1(a,l){if(Gi){var o=a-$a;nr.add(At(o)>180?o+(o>0?360:-360):o)}else e1=a,n1=l;Nn.point(a,l),a1(a,l)}function $x(){Nn.lineStart()}function Fx(){i1(e1,n1),Nn.lineEnd(),At(nr)>ft&&(Wt=-(Pt=180)),ea[0]=Wt,ea[1]=Pt,Gi=null}function $e(a,l){return(l-=a)<0?l+360:l}function Ix(a,l){return a[0]-l[0]}function Xp(a,l){return a[0]<=a[1]?a[0]<=l&&l<=a[1]:l<a[0]||a[1]<l}function Px(a){var l,o,r,s,d,h,p;if(Fe=Pt=-(Wt=Be=1/0),Aa=[],gn(a,Fn),o=Aa.length){for(Aa.sort(Ix),l=1,r=Aa[0],d=[r];l<o;++l)s=Aa[l],Xp(r,s[0])||Xp(r,s[1])?($e(r[0],s[1])>$e(r[0],r[1])&&(r[1]=s[1]),$e(s[0],r[1])>$e(r[0],r[1])&&(r[0]=s[0])):d.push(r=s);for(h=-1/0,o=d.length-1,l=0,r=d[o];l<=o;r=s,++l)s=d[l],(p=$e(r[1],s[0]))>h&&(h=p,Wt=s[0],Pt=r[1])}return Aa=ea=null,Wt===1/0||Be===1/0?[[NaN,NaN],[NaN,NaN]]:[[Wt,Be],[Pt,Fe]]}var Jl,sc,fc,dc,hc,mc,pc,gc,bf,Sf,wf,l1,r1,je,Me,Ee,vn={sphere:$t,point:Jf,lineStart:Vp,lineEnd:Zp,polygonStart:function(){vn.lineStart=nb,vn.lineEnd=ab},polygonEnd:function(){vn.lineStart=Vp,vn.lineEnd=Zp}};function Jf(a,l){a*=dt,l*=dt;var o=rt(l);gr(o*rt(a),o*et(a),et(l))}function gr(a,l,o){++Jl,fc+=(a-fc)/Jl,dc+=(l-dc)/Jl,hc+=(o-hc)/Jl}function Vp(){vn.point=tb}function tb(a,l){a*=dt,l*=dt;var o=rt(l);je=o*rt(a),Me=o*et(a),Ee=et(l),vn.point=eb,gr(je,Me,Ee)}function eb(a,l){a*=dt,l*=dt;var o=rt(l),r=o*rt(a),s=o*et(a),d=et(l),h=Ne(he((h=Me*d-Ee*s)*h+(h=Ee*r-je*d)*h+(h=je*s-Me*r)*h),je*r+Me*s+Ee*d);sc+=h,mc+=h*(je+(je=r)),pc+=h*(Me+(Me=s)),gc+=h*(Ee+(Ee=d)),gr(je,Me,Ee)}function Zp(){vn.point=Jf}function nb(){vn.point=ib}function ab(){o1(l1,r1),vn.point=Jf}function ib(a,l){l1=a,r1=l,a*=dt,l*=dt,vn.point=o1;var o=rt(l);je=o*rt(a),Me=o*et(a),Ee=et(l),gr(je,Me,Ee)}function o1(a,l){a*=dt,l*=dt;var o=rt(l),r=o*rt(a),s=o*et(a),d=et(l),h=Me*d-Ee*s,p=Ee*r-je*d,v=je*s-Me*r,y=mf(h,p,v),g=Ae(y),x=y&&-g/y;bf.add(x*h),Sf.add(x*p),wf.add(x*v),sc+=g,mc+=g*(je+(je=r)),pc+=g*(Me+(Me=s)),gc+=g*(Ee+(Ee=d)),gr(je,Me,Ee)}function lb(a){Jl=sc=fc=dc=hc=mc=pc=gc=0,bf=new be,Sf=new be,wf=new be,gn(a,vn);var l=+bf,o=+Sf,r=+wf,s=mf(l,o,r);return s<or&&(l=mc,o=pc,r=gc,sc<ft&&(l=fc,o=dc,r=hc),s=mf(l,o,r),s<or)?[NaN,NaN]:[Ne(o,l)*Xt,Ae(r/s)*Xt]}function Ui(a){return function(){return a}}function jf(a,l){function o(r,s){return r=a(r,s),l(r[0],r[1])}return a.invert&&l.invert&&(o.invert=function(r,s){return r=l.invert(r,s),r&&a.invert(r[0],r[1])}),o}function Mf(a,l){return[At(a)>bt?a+Math.round(-a/ze)*ze:a,l]}Mf.invert=Mf;function Wf(a,l,o){return(a%=ze)?l||o?jf(Kp(a),Jp(l,o)):Kp(a):l||o?Jp(l,o):Mf}function Qp(a){return function(l,o){return l+=a,[l>bt?l-ze:l<-bt?l+ze:l,o]}}function Kp(a){var l=Qp(a);return l.invert=Qp(-a),l}function Jp(a,l){var o=rt(a),r=et(a),s=rt(l),d=et(l);function h(p,v){var y=rt(v),g=rt(p)*y,x=et(p)*y,S=et(v),w=S*o+g*r;return[Ne(x*s-w*d,g*o-S*r),Ae(w*s+x*d)]}return h.invert=function(p,v){var y=rt(v),g=rt(p)*y,x=et(p)*y,S=et(v),w=S*s-x*d;return[Ne(x*s+S*d,g*o+w*r),Ae(w*o-g*r)]},h}function c1(a){a=Wf(a[0]*dt,a[1]*dt,a.length>2?a[2]*dt:0);function l(o){return o=a(o[0]*dt,o[1]*dt),o[0]*=Xt,o[1]*=Xt,o}return l.invert=function(o){return o=a.invert(o[0]*dt,o[1]*dt),o[0]*=Xt,o[1]*=Xt,o},l}function u1(a,l,o,r,s,d){if(o){var h=rt(l),p=et(l),v=r*o;s==null?(s=l+r*ze,d=l-v/2):(s=Wp(h,s),d=Wp(h,d),(r>0?s<d:s>d)&&(s+=r*ze));for(var y,g=s;r>0?g>d:g<d;g-=v)y=cc([h,-p*rt(g),-p*et(g)]),a.point(y[0],y[1])}}function Wp(a,l){l=Fa(l),l[0]-=a,uc(l);var o=Fg(-l[1]);return((-l[2]<0?-o:o)+ze-ft)%ze}function rb(){var a=Ui([0,0]),l=Ui(90),o=Ui(6),r,s,d={point:h};function h(v,y){r.push(v=s(v,y)),v[0]*=Xt,v[1]*=Xt}function p(){var v=a.apply(this,arguments),y=l.apply(this,arguments)*dt,g=o.apply(this,arguments)*dt;return r=[],s=Wf(-v[0]*dt,-v[1]*dt,0).invert,u1(d,y,g,1),v={type:"Polygon",coordinates:[r]},r=s=null,v}return p.center=function(v){return arguments.length?(a=typeof v=="function"?v:Ui([+v[0],+v[1]]),p):a},p.radius=function(v){return arguments.length?(l=typeof v=="function"?v:Ui(+v),p):l},p.precision=function(v){return arguments.length?(o=typeof v=="function"?v:Ui(+v),p):o},p}function s1(){var a=[],l;return{point:function(o,r,s){l.push([o,r,s])},lineStart:function(){a.push(l=[])},lineEnd:$t,rejoin:function(){a.length>1&&a.push(a.pop().concat(a.shift()))},result:function(){var o=a;return a=[],l=null,o}}}function $o(a,l){return At(a[0]-l[0])<ft&&At(a[1]-l[1])<ft}function Xo(a,l,o,r){this.x=a,this.z=l,this.o=o,this.e=r,this.v=!1,this.n=this.p=null}function f1(a,l,o,r,s){var d=[],h=[],p,v;if(a.forEach(function(N){if(!((B=N.length-1)<=0)){var B,q=N[0],L=N[B],Z;if($o(q,L)){if(!q[2]&&!L[2]){for(s.lineStart(),p=0;p<B;++p)s.point((q=N[p])[0],q[1]);s.lineEnd();return}L[0]+=2*ft}d.push(Z=new Xo(q,N,null,!0)),h.push(Z.o=new Xo(q,null,Z,!1)),d.push(Z=new Xo(L,N,null,!1)),h.push(Z.o=new Xo(L,null,Z,!0))}}),!!d.length){for(h.sort(l),$p(d),$p(h),p=0,v=h.length;p<v;++p)h[p].e=o=!o;for(var y=d[0],g,x;;){for(var S=y,w=!0;S.v;)if((S=S.n)===y)return;g=S.z,s.lineStart();do{if(S.v=S.o.v=!0,S.e){if(w)for(p=0,v=g.length;p<v;++p)s.point((x=g[p])[0],x[1]);else r(S.x,S.n.x,1,s);S=S.n}else{if(w)for(g=S.p.z,p=g.length-1;p>=0;--p)s.point((x=g[p])[0],x[1]);else r(S.x,S.p.x,-1,s);S=S.p}S=S.o,g=S.z,w=!w}while(!S.v);s.lineEnd()}}}function $p(a){if(l=a.length){for(var l,o=0,r=a[0],s;++o<l;)r.n=s=a[o],s.p=r,r=s;r.n=s=a[0],s.p=r}}function rf(a){return At(a[0])<=bt?a[0]:fn(a[0])*((At(a[0])+bt)%ze-bt)}function d1(a,l){var o=rf(l),r=l[1],s=et(r),d=[et(o),-rt(o),0],h=0,p=0,v=new be;s===1?r=te+ft:s===-1&&(r=-te-ft);for(var y=0,g=a.length;y<g;++y)if(S=(x=a[y]).length)for(var x,S,w=x[S-1],N=rf(w),B=w[1]/2+ac,q=et(B),L=rt(B),Z=0;Z<S;++Z,N=U,q=K,L=W,w=O){var O=x[Z],U=rf(O),Q=O[1]/2+ac,K=et(Q),W=rt(Q),I=U-N,at=I>=0?1:-1,ht=at*I,P=ht>bt,tt=q*K;if(v.add(Ne(tt*at*et(ht),L*W+tt*rt(ht))),h+=P?I+at*ze:I,P^N>=o^U>=o){var jt=Vi(Fa(w),Fa(O));uc(jt);var A=Vi(d,jt);uc(A);var E=(P^I>=0?-1:1)*Ae(A[2]);(r>E||r===E&&(jt[0]||jt[1]))&&(p+=P^I>=0?1:-1)}}return(h<-ft||h<ft&&v<-or)^p&1}function h1(a,l,o,r){return function(s){var d=l(s),h=s1(),p=l(h),v=!1,y,g,x,S={point:w,lineStart:B,lineEnd:q,polygonStart:function(){S.point=L,S.lineStart=Z,S.lineEnd=O,g=[],y=[]},polygonEnd:function(){S.point=w,S.lineStart=B,S.lineEnd=q,g=Wg(g);var U=d1(y,r);g.length?(v||(s.polygonStart(),v=!0),f1(g,cb,U,o,s)):U&&(v||(s.polygonStart(),v=!0),s.lineStart(),o(null,null,1,s),s.lineEnd()),v&&(s.polygonEnd(),v=!1),g=y=null},sphere:function(){s.polygonStart(),s.lineStart(),o(null,null,1,s),s.lineEnd(),s.polygonEnd()}};function w(U,Q){a(U,Q)&&s.point(U,Q)}function N(U,Q){d.point(U,Q)}function B(){S.point=N,d.lineStart()}function q(){S.point=w,d.lineEnd()}function L(U,Q){x.push([U,Q]),p.point(U,Q)}function Z(){p.lineStart(),x=[]}function O(){L(x[0][0],x[0][1]),p.lineEnd();var U=p.clean(),Q=h.result(),K,W=Q.length,I,at,ht;if(x.pop(),y.push(x),x=null,!!W){if(U&1){if(at=Q[0],(I=at.length-1)>0){for(v||(s.polygonStart(),v=!0),s.lineStart(),K=0;K<I;++K)s.point((ht=at[K])[0],ht[1]);s.lineEnd()}return}W>1&&U&2&&Q.push(Q.pop().concat(Q.shift())),g.push(Q.filter(ob))}}return S}}function ob(a){return a.length>1}function cb(a,l){return((a=a.x)[0]<0?a[1]-te-ft:te-a[1])-((l=l.x)[0]<0?l[1]-te-ft:te-l[1])}const Ef=h1(function(){return!0},ub,fb,[-bt,-te]);function ub(a){var l=NaN,o=NaN,r=NaN,s;return{lineStart:function(){a.lineStart(),s=1},point:function(d,h){var p=d>0?bt:-bt,v=At(d-l);At(v-bt)<ft?(a.point(l,o=(o+h)/2>0?te:-te),a.point(r,o),a.lineEnd(),a.lineStart(),a.point(p,o),a.point(d,o),s=0):r!==p&&v>=bt&&(At(l-r)<ft&&(l-=r*ft),At(d-p)<ft&&(d-=p*ft),o=sb(l,o,d,h),a.point(r,o),a.lineEnd(),a.lineStart(),a.point(p,o),s=0),a.point(l=d,o=h),r=p},lineEnd:function(){a.lineEnd(),l=o=NaN},clean:function(){return 2-s}}}function sb(a,l,o,r){var s,d,h=et(a-o);return At(h)>ft?Wi((et(l)*(d=rt(r))*et(o)-et(r)*(s=rt(l))*et(a))/(s*d*h)):(l+r)/2}function fb(a,l,o,r){var s;if(a==null)s=o*te,r.point(-bt,s),r.point(0,s),r.point(bt,s),r.point(bt,0),r.point(bt,-s),r.point(0,-s),r.point(-bt,-s),r.point(-bt,0),r.point(-bt,s);else if(At(a[0]-l[0])>ft){var d=a[0]<l[0]?bt:-bt;s=o*d/2,r.point(-d,s),r.point(0,s),r.point(d,s)}else r.point(l[0],l[1])}function m1(a){var l=rt(a),o=6*dt,r=l>0,s=At(l)>ft;function d(g,x,S,w){u1(w,a,o,S,g,x)}function h(g,x){return rt(g)*rt(x)>l}function p(g){var x,S,w,N,B;return{lineStart:function(){N=w=!1,B=1},point:function(q,L){var Z=[q,L],O,U=h(q,L),Q=r?U?0:y(q,L):U?y(q+(q<0?bt:-bt),L):0;if(!x&&(N=w=U)&&g.lineStart(),U!==w&&(O=v(x,Z),(!O||$o(x,O)||$o(Z,O))&&(Z[2]=1)),U!==w)B=0,U?(g.lineStart(),O=v(Z,x),g.point(O[0],O[1])):(O=v(x,Z),g.point(O[0],O[1],2),g.lineEnd()),x=O;else if(s&&x&&r^U){var K;!(Q&S)&&(K=v(Z,x,!0))&&(B=0,r?(g.lineStart(),g.point(K[0][0],K[0][1]),g.point(K[1][0],K[1][1]),g.lineEnd()):(g.point(K[1][0],K[1][1]),g.lineEnd(),g.lineStart(),g.point(K[0][0],K[0][1],3)))}U&&(!x||!$o(x,Z))&&g.point(Z[0],Z[1]),x=Z,w=U,S=Q},lineEnd:function(){w&&g.lineEnd(),x=null},clean:function(){return B|(N&&w)<<1}}}function v(g,x,S){var w=Fa(g),N=Fa(x),B=[1,0,0],q=Vi(w,N),L=Yo(q,q),Z=q[0],O=L-Z*Z;if(!O)return!S&&g;var U=l*L/O,Q=-l*Z/O,K=Vi(B,q),W=Go(B,U),I=Go(q,Q);lf(W,I);var at=K,ht=Yo(W,at),P=Yo(at,at),tt=ht*ht-P*(Yo(W,W)-1);if(!(tt<0)){var jt=he(tt),A=Go(at,(-ht-jt)/P);if(lf(A,W),A=cc(A),!S)return A;var E=g[0],j=x[0],C=g[1],G=x[1],J;j<E&&(J=E,E=j,j=J);var F=j-E,ct=At(F-bt)<ft,ut=ct||F<ft;if(!ct&&G<C&&(J=C,C=G,G=J),ut?ct?C+G>0^A[1]<(At(A[0]-E)<ft?C:G):C<=A[1]&&A[1]<=G:F>bt^(E<=A[0]&&A[0]<=j)){var ot=Go(at,(-ht+jt)/P);return lf(ot,W),[A,cc(ot)]}}}function y(g,x){var S=r?a:bt-a,w=0;return g<-S?w|=1:g>S&&(w|=2),x<-S?w|=4:x>S&&(w|=8),w}return h1(h,p,d,r?[0,-a]:[-bt,a-bt])}function db(a,l,o,r,s,d){var h=a[0],p=a[1],v=l[0],y=l[1],g=0,x=1,S=v-h,w=y-p,N;if(N=o-h,!(!S&&N>0)){if(N/=S,S<0){if(N<g)return;N<x&&(x=N)}else if(S>0){if(N>x)return;N>g&&(g=N)}if(N=s-h,!(!S&&N<0)){if(N/=S,S<0){if(N>x)return;N>g&&(g=N)}else if(S>0){if(N<g)return;N<x&&(x=N)}if(N=r-p,!(!w&&N>0)){if(N/=w,w<0){if(N<g)return;N<x&&(x=N)}else if(w>0){if(N>x)return;N>g&&(g=N)}if(N=d-p,!(!w&&N<0)){if(N/=w,w<0){if(N>x)return;N>g&&(g=N)}else if(w>0){if(N<g)return;N<x&&(x=N)}return g>0&&(a[0]=h+g*S,a[1]=p+g*w),x<1&&(l[0]=h+x*S,l[1]=p+x*w),!0}}}}}var Wl=1e9,Vo=-Wl;function Cc(a,l,o,r){function s(y,g){return a<=y&&y<=o&&l<=g&&g<=r}function d(y,g,x,S){var w=0,N=0;if(y==null||(w=h(y,x))!==(N=h(g,x))||v(y,g)<0^x>0)do S.point(w===0||w===3?a:o,w>1?r:l);while((w=(w+x+4)%4)!==N);else S.point(g[0],g[1])}function h(y,g){return At(y[0]-a)<ft?g>0?0:3:At(y[0]-o)<ft?g>0?2:1:At(y[1]-l)<ft?g>0?1:0:g>0?3:2}function p(y,g){return v(y.x,g.x)}function v(y,g){var x=h(y,1),S=h(g,1);return x!==S?x-S:x===0?g[1]-y[1]:x===1?y[0]-g[0]:x===2?y[1]-g[1]:g[0]-y[0]}return function(y){var g=y,x=s1(),S,w,N,B,q,L,Z,O,U,Q,K,W={point:I,lineStart:tt,lineEnd:jt,polygonStart:ht,polygonEnd:P};function I(E,j){s(E,j)&&g.point(E,j)}function at(){for(var E=0,j=0,C=w.length;j<C;++j)for(var G=w[j],J=1,F=G.length,ct=G[0],ut,ot,gt=ct[0],Mt=ct[1];J<F;++J)ut=gt,ot=Mt,ct=G[J],gt=ct[0],Mt=ct[1],ot<=r?Mt>r&&(gt-ut)*(r-ot)>(Mt-ot)*(a-ut)&&++E:Mt<=r&&(gt-ut)*(r-ot)<(Mt-ot)*(a-ut)&&--E;return E}function ht(){g=x,S=[],w=[],K=!0}function P(){var E=at(),j=K&&E,C=(S=Wg(S)).length;(j||C)&&(y.polygonStart(),j&&(y.lineStart(),d(null,null,1,y),y.lineEnd()),C&&f1(S,p,E,d,y),y.polygonEnd()),g=y,S=w=N=null}function tt(){W.point=A,w&&w.push(N=[]),Q=!0,U=!1,Z=O=NaN}function jt(){S&&(A(B,q),L&&U&&x.rejoin(),S.push(x.result())),W.point=I,U&&g.lineEnd()}function A(E,j){var C=s(E,j);if(w&&N.push([E,j]),Q)B=E,q=j,L=C,Q=!1,C&&(g.lineStart(),g.point(E,j));else if(C&&U)g.point(E,j);else{var G=[Z=Math.max(Vo,Math.min(Wl,Z)),O=Math.max(Vo,Math.min(Wl,O))],J=[E=Math.max(Vo,Math.min(Wl,E)),j=Math.max(Vo,Math.min(Wl,j))];db(G,J,a,l,o,r)?(U||(g.lineStart(),g.point(G[0],G[1])),g.point(J[0],J[1]),C||g.lineEnd(),K=!1):C&&(g.lineStart(),g.point(E,j),K=!1)}Z=E,O=j,U=C}return W}}function hb(){var a=0,l=0,o=960,r=500,s,d,h;return h={stream:function(p){return s&&d===p?s:s=Cc(a,l,o,r)(d=p)},extent:function(p){return arguments.length?(a=+p[0][0],l=+p[0][1],o=+p[1][0],r=+p[1][1],s=d=null,h):[[a,l],[o,r]]}}}var zf,Nf,Fo,Io,Zi={sphere:$t,point:$t,lineStart:mb,lineEnd:$t,polygonStart:$t,polygonEnd:$t};function mb(){Zi.point=gb,Zi.lineEnd=pb}function pb(){Zi.point=Zi.lineEnd=$t}function gb(a,l){a*=dt,l*=dt,Nf=a,Fo=et(l),Io=rt(l),Zi.point=vb}function vb(a,l){a*=dt,l*=dt;var o=et(l),r=rt(l),s=At(a-Nf),d=rt(s),h=et(s),p=r*h,v=Io*o-Fo*r*d,y=Fo*o+Io*r*d;zf.add(Ne(he(p*p+v*v),y)),Nf=a,Fo=o,Io=r}function p1(a){return zf=new be,gn(a,Zi),+zf}var Af=[null,null],yb={type:"LineString",coordinates:Af};function vc(a,l){return Af[0]=a,Af[1]=l,p1(yb)}var Fp={Feature:function(a,l){return yc(a.geometry,l)},FeatureCollection:function(a,l){for(var o=a.features,r=-1,s=o.length;++r<s;)if(yc(o[r].geometry,l))return!0;return!1}},Ip={Sphere:function(){return!0},Point:function(a,l){return Pp(a.coordinates,l)},MultiPoint:function(a,l){for(var o=a.coordinates,r=-1,s=o.length;++r<s;)if(Pp(o[r],l))return!0;return!1},LineString:function(a,l){return tg(a.coordinates,l)},MultiLineString:function(a,l){for(var o=a.coordinates,r=-1,s=o.length;++r<s;)if(tg(o[r],l))return!0;return!1},Polygon:function(a,l){return eg(a.coordinates,l)},MultiPolygon:function(a,l){for(var o=a.coordinates,r=-1,s=o.length;++r<s;)if(eg(o[r],l))return!0;return!1},GeometryCollection:function(a,l){for(var o=a.geometries,r=-1,s=o.length;++r<s;)if(yc(o[r],l))return!0;return!1}};function yc(a,l){return a&&Ip.hasOwnProperty(a.type)?Ip[a.type](a,l):!1}function Pp(a,l){return vc(a,l)===0}function tg(a,l){for(var o,r,s,d=0,h=a.length;d<h;d++){if(r=vc(a[d],l),r===0||d>0&&(s=vc(a[d],a[d-1]),s>0&&o<=s&&r<=s&&(o+r-s)*(1-Math.pow((o-r)/s,2))<or*s))return!0;o=r}return!1}function eg(a,l){return!!d1(a.map(xb),g1(l))}function xb(a){return a=a.map(g1),a.pop(),a}function g1(a){return[a[0]*dt,a[1]*dt]}function bb(a,l){return(a&&Fp.hasOwnProperty(a.type)?Fp[a.type]:yc)(a,l)}function ng(a,l,o){var r=Hi(a,l-ft,o).concat(l);return function(s){return r.map(function(d){return[s,d]})}}function ag(a,l,o){var r=Hi(a,l-ft,o).concat(l);return function(s){return r.map(function(d){return[d,s]})}}function $f(){var a,l,o,r,s,d,h,p,v=10,y=v,g=90,x=360,S,w,N,B,q=2.5;function L(){return{type:"MultiLineString",coordinates:Z()}}function Z(){return Hi(qo(r/g)*g,o,g).map(N).concat(Hi(qo(p/x)*x,h,x).map(B)).concat(Hi(qo(l/v)*v,a,v).filter(function(O){return At(O%g)>ft}).map(S)).concat(Hi(qo(d/y)*y,s,y).filter(function(O){return At(O%x)>ft}).map(w))}return L.lines=function(){return Z().map(function(O){return{type:"LineString",coordinates:O}})},L.outline=function(){return{type:"Polygon",coordinates:[N(r).concat(B(h).slice(1),N(o).reverse().slice(1),B(p).reverse().slice(1))]}},L.extent=function(O){return arguments.length?L.extentMajor(O).extentMinor(O):L.extentMinor()},L.extentMajor=function(O){return arguments.length?(r=+O[0][0],o=+O[1][0],p=+O[0][1],h=+O[1][1],r>o&&(O=r,r=o,o=O),p>h&&(O=p,p=h,h=O),L.precision(q)):[[r,p],[o,h]]},L.extentMinor=function(O){return arguments.length?(l=+O[0][0],a=+O[1][0],d=+O[0][1],s=+O[1][1],l>a&&(O=l,l=a,a=O),d>s&&(O=d,d=s,s=O),L.precision(q)):[[l,d],[a,s]]},L.step=function(O){return arguments.length?L.stepMajor(O).stepMinor(O):L.stepMinor()},L.stepMajor=function(O){return arguments.length?(g=+O[0],x=+O[1],L):[g,x]},L.stepMinor=function(O){return arguments.length?(v=+O[0],y=+O[1],L):[v,y]},L.precision=function(O){return arguments.length?(q=+O,S=ng(d,s,90),w=ag(l,a,q),N=ng(p,h,90),B=ag(r,o,q),L):q},L.extentMajor([[-180,-90+ft],[180,90-ft]]).extentMinor([[-180,-80-ft],[180,80+ft]])}function Sb(){return $f()()}function wb(a,l){var o=a[0]*dt,r=a[1]*dt,s=l[0]*dt,d=l[1]*dt,h=rt(r),p=et(r),v=rt(d),y=et(d),g=h*rt(o),x=h*et(o),S=v*rt(s),w=v*et(s),N=2*Ae(he(Bp(d-r)+h*v*Bp(s-o))),B=et(N),q=N?function(L){var Z=et(L*=N)/B,O=et(N-L)/B,U=O*g+Z*S,Q=O*x+Z*w,K=O*p+Z*y;return[Ne(Q,U)*Xt,Ne(K,he(U*U+Q*Q))*Xt]}:function(){return[o*Xt,r*Xt]};return q.distance=N,q}const cr=a=>a;var of=new be,_f=new be,v1,y1,Tf,Cf,In={point:$t,lineStart:$t,lineEnd:$t,polygonStart:function(){In.lineStart=jb,In.lineEnd=Eb},polygonEnd:function(){In.lineStart=In.lineEnd=In.point=$t,of.add(At(_f)),_f=new be},result:function(){var a=of/2;return of=new be,a}};function jb(){In.point=Mb}function Mb(a,l){In.point=x1,v1=Tf=a,y1=Cf=l}function x1(a,l){_f.add(Cf*a-Tf*l),Tf=a,Cf=l}function Eb(){x1(v1,y1)}var Qi=1/0,xc=Qi,ur=-Qi,bc=ur,Sc={point:zb,lineStart:$t,lineEnd:$t,polygonStart:$t,polygonEnd:$t,result:function(){var a=[[Qi,xc],[ur,bc]];return ur=bc=-(xc=Qi=1/0),a}};function zb(a,l){a<Qi&&(Qi=a),a>ur&&(ur=a),l<xc&&(xc=l),l>bc&&(bc=l)}var Of=0,kf=0,$l=0,wc=0,jc=0,qi=0,Df=0,Rf=0,Fl=0,b1,S1,jn,Mn,sn={point:Ia,lineStart:ig,lineEnd:lg,polygonStart:function(){sn.lineStart=_b,sn.lineEnd=Tb},polygonEnd:function(){sn.point=Ia,sn.lineStart=ig,sn.lineEnd=lg},result:function(){var a=Fl?[Df/Fl,Rf/Fl]:qi?[wc/qi,jc/qi]:$l?[Of/$l,kf/$l]:[NaN,NaN];return Of=kf=$l=wc=jc=qi=Df=Rf=Fl=0,a}};function Ia(a,l){Of+=a,kf+=l,++$l}function ig(){sn.point=Nb}function Nb(a,l){sn.point=Ab,Ia(jn=a,Mn=l)}function Ab(a,l){var o=a-jn,r=l-Mn,s=he(o*o+r*r);wc+=s*(jn+a)/2,jc+=s*(Mn+l)/2,qi+=s,Ia(jn=a,Mn=l)}function lg(){sn.point=Ia}function _b(){sn.point=Cb}function Tb(){w1(b1,S1)}function Cb(a,l){sn.point=w1,Ia(b1=jn=a,S1=Mn=l)}function w1(a,l){var o=a-jn,r=l-Mn,s=he(o*o+r*r);wc+=s*(jn+a)/2,jc+=s*(Mn+l)/2,qi+=s,s=Mn*a-jn*l,Df+=s*(jn+a),Rf+=s*(Mn+l),Fl+=s*3,Ia(jn=a,Mn=l)}function j1(a){this._context=a}j1.prototype={_radius:4.5,pointRadius:function(a){return this._radius=a,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(a,l){switch(this._point){case 0:{this._context.moveTo(a,l),this._point=1;break}case 1:{this._context.lineTo(a,l);break}default:{this._context.moveTo(a+this._radius,l),this._context.arc(a,l,this._radius,0,ze);break}}},result:$t};var Lf=new be,cf,M1,E1,Il,Pl,sr={point:$t,lineStart:function(){sr.point=Ob},lineEnd:function(){cf&&z1(M1,E1),sr.point=$t},polygonStart:function(){cf=!0},polygonEnd:function(){cf=null},result:function(){var a=+Lf;return Lf=new be,a}};function Ob(a,l){sr.point=z1,M1=Il=a,E1=Pl=l}function z1(a,l){Il-=a,Pl-=l,Lf.add(he(Il*Il+Pl*Pl)),Il=a,Pl=l}function N1(){this._string=[]}N1.prototype={_radius:4.5,_circle:rg(4.5),pointRadius:function(a){return(a=+a)!==this._radius&&(this._radius=a,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._string.push("Z"),this._point=NaN},point:function(a,l){switch(this._point){case 0:{this._string.push("M",a,",",l),this._point=1;break}case 1:{this._string.push("L",a,",",l);break}default:{this._circle==null&&(this._circle=rg(this._radius)),this._string.push("M",a,",",l,this._circle);break}}},result:function(){if(this._string.length){var a=this._string.join("");return this._string=[],a}else return null}};function rg(a){return"m0,"+a+"a"+a+","+a+" 0 1,1 0,"+-2*a+"a"+a+","+a+" 0 1,1 0,"+2*a+"z"}function A1(a,l){var o=4.5,r,s;function d(h){return h&&(typeof o=="function"&&s.pointRadius(+o.apply(this,arguments)),gn(h,r(s))),s.result()}return d.area=function(h){return gn(h,r(In)),In.result()},d.measure=function(h){return gn(h,r(sr)),sr.result()},d.bounds=function(h){return gn(h,r(Sc)),Sc.result()},d.centroid=function(h){return gn(h,r(sn)),sn.result()},d.projection=function(h){return arguments.length?(r=h==null?(a=null,cr):(a=h).stream,d):a},d.context=function(h){return arguments.length?(s=h==null?(l=null,new N1):new j1(l=h),typeof o!="function"&&s.pointRadius(o),d):l},d.pointRadius=function(h){return arguments.length?(o=typeof h=="function"?h:(s.pointRadius(+h),+h),d):o},d.projection(a).context(l)}function kb(a){return{stream:vr(a)}}function vr(a){return function(l){var o=new Bf;for(var r in a)o[r]=a[r];return o.stream=l,o}}function Bf(){}Bf.prototype={constructor:Bf,point:function(a,l){this.stream.point(a,l)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Ff(a,l,o){var r=a.clipExtent&&a.clipExtent();return a.scale(150).translate([0,0]),r!=null&&a.clipExtent(null),gn(o,a.stream(Sc)),l(Sc.result()),r!=null&&a.clipExtent(r),a}function Oc(a,l,o){return Ff(a,function(r){var s=l[1][0]-l[0][0],d=l[1][1]-l[0][1],h=Math.min(s/(r[1][0]-r[0][0]),d/(r[1][1]-r[0][1])),p=+l[0][0]+(s-h*(r[1][0]+r[0][0]))/2,v=+l[0][1]+(d-h*(r[1][1]+r[0][1]))/2;a.scale(150*h).translate([p,v])},o)}function If(a,l,o){return Oc(a,[[0,0],l],o)}function Pf(a,l,o){return Ff(a,function(r){var s=+l,d=s/(r[1][0]-r[0][0]),h=(s-d*(r[1][0]+r[0][0]))/2,p=-d*r[0][1];a.scale(150*d).translate([h,p])},o)}function td(a,l,o){return Ff(a,function(r){var s=+l,d=s/(r[1][1]-r[0][1]),h=-d*r[0][0],p=(s-d*(r[1][1]+r[0][1]))/2;a.scale(150*d).translate([h,p])},o)}var og=16,Db=rt(30*dt);function cg(a,l){return+l?Lb(a,l):Rb(a)}function Rb(a){return vr({point:function(l,o){l=a(l,o),this.stream.point(l[0],l[1])}})}function Lb(a,l){function o(r,s,d,h,p,v,y,g,x,S,w,N,B,q){var L=y-r,Z=g-s,O=L*L+Z*Z;if(O>4*l&&B--){var U=h+S,Q=p+w,K=v+N,W=he(U*U+Q*Q+K*K),I=Ae(K/=W),at=At(At(K)-1)<ft||At(d-x)<ft?(d+x)/2:Ne(Q,U),ht=a(at,I),P=ht[0],tt=ht[1],jt=P-r,A=tt-s,E=Z*jt-L*A;(E*E/O>l||At((L*jt+Z*A)/O-.5)>.3||h*S+p*w+v*N<Db)&&(o(r,s,d,h,p,v,P,tt,at,U/=W,Q/=W,K,B,q),q.point(P,tt),o(P,tt,at,U,Q,K,y,g,x,S,w,N,B,q))}}return function(r){var s,d,h,p,v,y,g,x,S,w,N,B,q={point:L,lineStart:Z,lineEnd:U,polygonStart:function(){r.polygonStart(),q.lineStart=Q},polygonEnd:function(){r.polygonEnd(),q.lineStart=Z}};function L(I,at){I=a(I,at),r.point(I[0],I[1])}function Z(){x=NaN,q.point=O,r.lineStart()}function O(I,at){var ht=Fa([I,at]),P=a(I,at);o(x,S,g,w,N,B,x=P[0],S=P[1],g=I,w=ht[0],N=ht[1],B=ht[2],og,r),r.point(x,S)}function U(){q.point=L,r.lineEnd()}function Q(){Z(),q.point=K,q.lineEnd=W}function K(I,at){O(s=I,at),d=x,h=S,p=w,v=N,y=B,q.point=O}function W(){o(x,S,g,w,N,B,d,h,s,p,v,y,og,r),q.lineEnd=U,U()}return q}}var Bb=vr({point:function(a,l){this.stream.point(a*dt,l*dt)}});function Ub(a){return vr({point:function(l,o){var r=a(l,o);return this.stream.point(r[0],r[1])}})}function Hb(a,l,o,r,s){function d(h,p){return h*=r,p*=s,[l+a*h,o-a*p]}return d.invert=function(h,p){return[(h-l)/a*r,(o-p)/a*s]},d}function ug(a,l,o,r,s,d){if(!d)return Hb(a,l,o,r,s);var h=rt(d),p=et(d),v=h*a,y=p*a,g=h/a,x=p/a,S=(p*o-h*l)/a,w=(p*l+h*o)/a;function N(B,q){return B*=r,q*=s,[v*B-y*q+l,o-y*B-v*q]}return N.invert=function(B,q){return[r*(g*B-x*q+S),s*(w-x*B-g*q)]},N}function An(a){return ed(function(){return a})()}function ed(a){var l,o=150,r=480,s=250,d=0,h=0,p=0,v=0,y=0,g,x=0,S=1,w=1,N=null,B=Ef,q=null,L,Z,O,U=cr,Q=.5,K,W,I,at,ht;function P(E){return I(E[0]*dt,E[1]*dt)}function tt(E){return E=I.invert(E[0],E[1]),E&&[E[0]*Xt,E[1]*Xt]}P.stream=function(E){return at&&ht===E?at:at=Bb(Ub(g)(B(K(U(ht=E)))))},P.preclip=function(E){return arguments.length?(B=E,N=void 0,A()):B},P.postclip=function(E){return arguments.length?(U=E,q=L=Z=O=null,A()):U},P.clipAngle=function(E){return arguments.length?(B=+E?m1(N=E*dt):(N=null,Ef),A()):N*Xt},P.clipExtent=function(E){return arguments.length?(U=E==null?(q=L=Z=O=null,cr):Cc(q=+E[0][0],L=+E[0][1],Z=+E[1][0],O=+E[1][1]),A()):q==null?null:[[q,L],[Z,O]]},P.scale=function(E){return arguments.length?(o=+E,jt()):o},P.translate=function(E){return arguments.length?(r=+E[0],s=+E[1],jt()):[r,s]},P.center=function(E){return arguments.length?(d=E[0]%360*dt,h=E[1]%360*dt,jt()):[d*Xt,h*Xt]},P.rotate=function(E){return arguments.length?(p=E[0]%360*dt,v=E[1]%360*dt,y=E.length>2?E[2]%360*dt:0,jt()):[p*Xt,v*Xt,y*Xt]},P.angle=function(E){return arguments.length?(x=E%360*dt,jt()):x*Xt},P.reflectX=function(E){return arguments.length?(S=E?-1:1,jt()):S<0},P.reflectY=function(E){return arguments.length?(w=E?-1:1,jt()):w<0},P.precision=function(E){return arguments.length?(K=cg(W,Q=E*E),A()):he(Q)},P.fitExtent=function(E,j){return Oc(P,E,j)},P.fitSize=function(E,j){return If(P,E,j)},P.fitWidth=function(E,j){return Pf(P,E,j)},P.fitHeight=function(E,j){return td(P,E,j)};function jt(){var E=ug(o,0,0,S,w,x).apply(null,l(d,h)),j=ug(o,r-E[0],s-E[1],S,w,x);return g=Wf(p,v,y),W=jf(l,j),I=jf(g,W),K=cg(W,Q),A()}function A(){return at=ht=null,P}return function(){return l=a.apply(this,arguments),P.invert=l.invert&&tt,jt()}}function nd(a){var l=0,o=bt/3,r=ed(a),s=r(l,o);return s.parallels=function(d){return arguments.length?r(l=d[0]*dt,o=d[1]*dt):[l*Xt,o*Xt]},s}function qb(a){var l=rt(a);function o(r,s){return[r*l,et(s)/l]}return o.invert=function(r,s){return[r/l,Ae(s*l)]},o}function _1(a,l){var o=et(a),r=(o+et(l))/2;if(At(r)<ft)return qb(a);var s=1+o*(2*r-o),d=he(s)/r;function h(p,v){var y=he(s-2*r*et(v))/r;return[y*et(p*=r),d-y*rt(p)]}return h.invert=function(p,v){var y=d-v,g=Ne(p,At(y))*fn(y);return y*r<0&&(g-=bt*fn(p)*fn(y)),[g/r,Ae((s-(p*p+y*y)*r*r)/(2*r))]},h}function Mc(){return nd(_1).scale(155.424).center([0,33.6442])}function T1(){return Mc().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function Yb(a){var l=a.length;return{point:function(o,r){for(var s=-1;++s<l;)a[s].point(o,r)},sphere:function(){for(var o=-1;++o<l;)a[o].sphere()},lineStart:function(){for(var o=-1;++o<l;)a[o].lineStart()},lineEnd:function(){for(var o=-1;++o<l;)a[o].lineEnd()},polygonStart:function(){for(var o=-1;++o<l;)a[o].polygonStart()},polygonEnd:function(){for(var o=-1;++o<l;)a[o].polygonEnd()}}}function Gb(){var a,l,o=T1(),r,s=Mc().rotate([154,0]).center([-2,58.5]).parallels([55,65]),d,h=Mc().rotate([157,0]).center([-3,19.9]).parallels([8,18]),p,v,y={point:function(S,w){v=[S,w]}};function g(S){var w=S[0],N=S[1];return v=null,r.point(w,N),v||(d.point(w,N),v)||(p.point(w,N),v)}g.invert=function(S){var w=o.scale(),N=o.translate(),B=(S[0]-N[0])/w,q=(S[1]-N[1])/w;return(q>=.12&&q<.234&&B>=-.425&&B<-.214?s:q>=.166&&q<.234&&B>=-.214&&B<-.115?h:o).invert(S)},g.stream=function(S){return a&&l===S?a:a=Yb([o.stream(l=S),s.stream(S),h.stream(S)])},g.precision=function(S){return arguments.length?(o.precision(S),s.precision(S),h.precision(S),x()):o.precision()},g.scale=function(S){return arguments.length?(o.scale(S),s.scale(S*.35),h.scale(S),g.translate(o.translate())):o.scale()},g.translate=function(S){if(!arguments.length)return o.translate();var w=o.scale(),N=+S[0],B=+S[1];return r=o.translate(S).clipExtent([[N-.455*w,B-.238*w],[N+.455*w,B+.238*w]]).stream(y),d=s.translate([N-.307*w,B+.201*w]).clipExtent([[N-.425*w+ft,B+.12*w+ft],[N-.214*w-ft,B+.234*w-ft]]).stream(y),p=h.translate([N-.205*w,B+.212*w]).clipExtent([[N-.214*w+ft,B+.166*w+ft],[N-.115*w-ft,B+.234*w-ft]]).stream(y),x()},g.fitExtent=function(S,w){return Oc(g,S,w)},g.fitSize=function(S,w){return If(g,S,w)},g.fitWidth=function(S,w){return Pf(g,S,w)},g.fitHeight=function(S,w){return td(g,S,w)};function x(){return a=l=null,g}return g.scale(1070)}function C1(a){return function(l,o){var r=rt(l),s=rt(o),d=a(r*s);return d===1/0?[2,0]:[d*s*et(l),d*et(o)]}}function yr(a){return function(l,o){var r=he(l*l+o*o),s=a(r),d=et(s),h=rt(s);return[Ne(l*d,r*h),Ae(r&&o*d/r)]}}var ad=C1(function(a){return he(2/(1+a))});ad.invert=yr(function(a){return 2*Ae(a/2)});function Xb(){return An(ad).scale(124.75).clipAngle(180-.001)}var id=C1(function(a){return(a=Fg(a))&&a/et(a)});id.invert=yr(function(a){return a});function Vb(){return An(id).scale(79.4188).clipAngle(180-.001)}function xr(a,l){return[a,ic(Kf((te+l)/2))]}xr.invert=function(a,l){return[a,2*Wi($g(l))-te]};function Zb(){return O1(xr).scale(961/ze)}function O1(a){var l=An(a),o=l.center,r=l.scale,s=l.translate,d=l.clipExtent,h=null,p,v,y;l.scale=function(x){return arguments.length?(r(x),g()):r()},l.translate=function(x){return arguments.length?(s(x),g()):s()},l.center=function(x){return arguments.length?(o(x),g()):o()},l.clipExtent=function(x){return arguments.length?(x==null?h=p=v=y=null:(h=+x[0][0],p=+x[0][1],v=+x[1][0],y=+x[1][1]),g()):h==null?null:[[h,p],[v,y]]};function g(){var x=bt*r(),S=l(c1(l.rotate()).invert([0,0]));return d(h==null?[[S[0]-x,S[1]-x],[S[0]+x,S[1]+x]]:a===xr?[[Math.max(S[0]-x,h),p],[Math.min(S[0]+x,v),y]]:[[h,Math.max(S[1]-x,p)],[v,Math.min(S[1]+x,y)]])}return g()}function Zo(a){return Kf((te+a)/2)}function k1(a,l){var o=rt(a),r=a===l?et(a):ic(o/rt(l))/ic(Zo(l)/Zo(a)),s=o*af(Zo(a),r)/r;if(!r)return xr;function d(h,p){s>0?p<-te+ft&&(p=-te+ft):p>te-ft&&(p=te-ft);var v=s/af(Zo(p),r);return[v*et(r*h),s-v*rt(r*h)]}return d.invert=function(h,p){var v=s-p,y=fn(r)*he(h*h+v*v),g=Ne(h,At(v))*fn(v);return v*r<0&&(g-=bt*fn(h)*fn(v)),[g/r,2*Wi(af(s/y,1/r))-te]},d}function Qb(){return nd(k1).scale(109.5).parallels([30,30])}function fr(a,l){return[a,l]}fr.invert=fr;function Kb(){return An(fr).scale(152.63)}function D1(a,l){var o=rt(a),r=a===l?et(a):(o-rt(l))/(l-a),s=o/r+a;if(At(r)<ft)return fr;function d(h,p){var v=s-p,y=r*h;return[v*et(y),s-v*rt(y)]}return d.invert=function(h,p){var v=s-p,y=Ne(h,At(v))*fn(v);return v*r<0&&(y-=bt*fn(h)*fn(v)),[y/r,s-fn(r)*he(h*h+v*v)]},d}function Jb(){return nd(D1).scale(131.154).center([0,13.9389])}var ar=1.340264,ir=-.081106,lr=893e-6,rr=.003796,Ec=he(3)/2,Wb=12;function ld(a,l){var o=Ae(Ec*et(l)),r=o*o,s=r*r*r;return[a*rt(o)/(Ec*(ar+3*ir*r+s*(7*lr+9*rr*r))),o*(ar+ir*r+s*(lr+rr*r))]}ld.invert=function(a,l){for(var o=l,r=o*o,s=r*r*r,d=0,h,p,v;d<Wb&&(p=o*(ar+ir*r+s*(lr+rr*r))-l,v=ar+3*ir*r+s*(7*lr+9*rr*r),o-=h=p/v,r=o*o,s=r*r*r,!(At(h)<or));++d);return[Ec*a*(ar+3*ir*r+s*(7*lr+9*rr*r))/rt(o),Ae(et(o)/Ec)]};function $b(){return An(ld).scale(177.158)}function rd(a,l){var o=rt(l),r=rt(a)*o;return[o*et(a)/r,et(l)/r]}rd.invert=yr(Wi);function Fb(){return An(rd).scale(144.049).clipAngle(60)}function Ib(){var a=1,l=0,o=0,r=1,s=1,d=0,h,p,v=null,y,g,x,S=1,w=1,N=vr({point:function(U,Q){var K=O([U,Q]);this.stream.point(K[0],K[1])}}),B=cr,q,L;function Z(){return S=a*r,w=a*s,q=L=null,O}function O(U){var Q=U[0]*S,K=U[1]*w;if(d){var W=K*h-Q*p;Q=Q*h+K*p,K=W}return[Q+l,K+o]}return O.invert=function(U){var Q=U[0]-l,K=U[1]-o;if(d){var W=K*h+Q*p;Q=Q*h-K*p,K=W}return[Q/S,K/w]},O.stream=function(U){return q&&L===U?q:q=N(B(L=U))},O.postclip=function(U){return arguments.length?(B=U,v=y=g=x=null,Z()):B},O.clipExtent=function(U){return arguments.length?(B=U==null?(v=y=g=x=null,cr):Cc(v=+U[0][0],y=+U[0][1],g=+U[1][0],x=+U[1][1]),Z()):v==null?null:[[v,y],[g,x]]},O.scale=function(U){return arguments.length?(a=+U,Z()):a},O.translate=function(U){return arguments.length?(l=+U[0],o=+U[1],Z()):[l,o]},O.angle=function(U){return arguments.length?(d=U%360*dt,p=et(d),h=rt(d),Z()):d*Xt},O.reflectX=function(U){return arguments.length?(r=U?-1:1,Z()):r<0},O.reflectY=function(U){return arguments.length?(s=U?-1:1,Z()):s<0},O.fitExtent=function(U,Q){return Oc(O,U,Q)},O.fitSize=function(U,Q){return If(O,U,Q)},O.fitWidth=function(U,Q){return Pf(O,U,Q)},O.fitHeight=function(U,Q){return td(O,U,Q)},O}function od(a,l){var o=l*l,r=o*o;return[a*(.8707-.131979*o+r*(-.013791+r*(.003971*o-.001529*r))),l*(1.007226+o*(.015085+r*(-.044475+.028874*o-.005916*r)))]}od.invert=function(a,l){var o=l,r=25,s;do{var d=o*o,h=d*d;o-=s=(o*(1.007226+d*(.015085+h*(-.044475+.028874*d-.005916*h)))-l)/(1.007226+d*(.015085*3+h*(-.044475*7+.028874*9*d-.005916*11*h)))}while(At(s)>ft&&--r>0);return[a/(.8707+(d=o*o)*(-.131979+d*(-.013791+d*d*d*(.003971-.001529*d)))),o]};function Pb(){return An(od).scale(175.295)}function cd(a,l){return[rt(l)*et(a),et(l)]}cd.invert=yr(Ae);function t5(){return An(cd).scale(249.5).clipAngle(90+ft)}function ud(a,l){var o=rt(l),r=1+rt(a)*o;return[o*et(a)/r,et(l)/r]}ud.invert=yr(function(a){return 2*Wi(a)});function e5(){return An(ud).scale(250).clipAngle(142)}function sd(a,l){return[ic(Kf((te+l)/2)),-a]}sd.invert=function(a,l){return[-l,2*Wi($g(a))-te]};function n5(){var a=O1(sd),l=a.center,o=a.rotate;return a.center=function(r){return arguments.length?l([-r[1],r[0]]):(r=l(),[r[1],-r[0]])},a.rotate=function(r){return arguments.length?o([r[0],r[1],r.length>2?r[2]+90:90]):(r=o(),[r[0],r[1],r[2]-90])},o([0,0,90]).scale(159.155)}const a5=Object.freeze(Object.defineProperty({__proto__:null,geoAlbers:T1,geoAlbersUsa:Gb,geoArea:Wx,geoAzimuthalEqualArea:Xb,geoAzimuthalEqualAreaRaw:ad,geoAzimuthalEquidistant:Vb,geoAzimuthalEquidistantRaw:id,geoBounds:Px,geoCentroid:lb,geoCircle:rb,geoClipAntimeridian:Ef,geoClipCircle:m1,geoClipExtent:hb,geoClipRectangle:Cc,geoConicConformal:Qb,geoConicConformalRaw:k1,geoConicEqualArea:Mc,geoConicEqualAreaRaw:_1,geoConicEquidistant:Jb,geoConicEquidistantRaw:D1,geoContains:bb,geoDistance:vc,geoEqualEarth:$b,geoEqualEarthRaw:ld,geoEquirectangular:Kb,geoEquirectangularRaw:fr,geoGnomonic:Fb,geoGnomonicRaw:rd,geoGraticule:$f,geoGraticule10:Sb,geoIdentity:Ib,geoInterpolate:wb,geoLength:p1,geoMercator:Zb,geoMercatorRaw:xr,geoNaturalEarth1:Pb,geoNaturalEarth1Raw:od,geoOrthographic:t5,geoOrthographicRaw:cd,geoPath:A1,geoProjection:An,geoProjectionMutator:ed,geoRotation:c1,geoStereographic:e5,geoStereographicRaw:ud,geoStream:gn,geoTransform:kb,geoTransverseMercator:n5,geoTransverseMercatorRaw:sd},Symbol.toStringTag,{value:"Module"}));function i5(a){return a}function l5(a){if(a==null)return i5;var l,o,r=a.scale[0],s=a.scale[1],d=a.translate[0],h=a.translate[1];return function(p,v){v||(l=o=0);var y=2,g=p.length,x=new Array(g);for(x[0]=(l+=p[0])*r+d,x[1]=(o+=p[1])*s+h;y<g;)x[y]=p[y],++y;return x}}function r5(a,l){for(var o,r=a.length,s=r-l;s<--r;)o=a[s],a[s++]=a[r],a[r]=o}function o5(a,l){return typeof l=="string"&&(l=a.objects[l]),l.type==="GeometryCollection"?{type:"FeatureCollection",features:l.geometries.map(function(o){return sg(a,o)})}:sg(a,l)}function sg(a,l){var o=l.id,r=l.bbox,s=l.properties==null?{}:l.properties,d=R1(a,l);return o==null&&r==null?{type:"Feature",properties:s,geometry:d}:r==null?{type:"Feature",id:o,properties:s,geometry:d}:{type:"Feature",id:o,bbox:r,properties:s,geometry:d}}function R1(a,l){var o=l5(a.transform),r=a.arcs;function s(g,x){x.length&&x.pop();for(var S=r[g<0?~g:g],w=0,N=S.length;w<N;++w)x.push(o(S[w],w));g<0&&r5(x,N)}function d(g){return o(g)}function h(g){for(var x=[],S=0,w=g.length;S<w;++S)s(g[S],x);return x.length<2&&x.push(x[0]),x}function p(g){for(var x=h(g);x.length<4;)x.push(x[0]);return x}function v(g){return g.map(p)}function y(g){var x=g.type,S;switch(x){case"GeometryCollection":return{type:x,geometries:g.geometries.map(y)};case"Point":S=d(g.coordinates);break;case"MultiPoint":S=g.coordinates.map(d);break;case"LineString":S=h(g.arcs);break;case"MultiLineString":S=g.arcs.map(h);break;case"Polygon":S=v(g.arcs);break;case"MultiPolygon":S=g.arcs.map(v);break;default:return null}return{type:x,coordinates:S}}return y(l)}function c5(a,l){var o={},r={},s={},d=[],h=-1;l.forEach(function(y,g){var x=a.arcs[y<0?~y:y],S;x.length<3&&!x[1][0]&&!x[1][1]&&(S=l[++h],l[h]=y,l[g]=S)}),l.forEach(function(y){var g=p(y),x=g[0],S=g[1],w,N;if(w=s[x])if(delete s[w.end],w.push(y),w.end=S,N=r[S]){delete r[N.start];var B=N===w?w:w.concat(N);r[B.start=w.start]=s[B.end=N.end]=B}else r[w.start]=s[w.end]=w;else if(w=r[S])if(delete r[w.start],w.unshift(y),w.start=x,N=s[x]){delete s[N.end];var q=N===w?w:N.concat(w);r[q.start=N.start]=s[q.end=w.end]=q}else r[w.start]=s[w.end]=w;else w=[y],r[w.start=x]=s[w.end=S]=w});function p(y){var g=a.arcs[y<0?~y:y],x=g[0],S;return a.transform?(S=[0,0],g.forEach(function(w){S[0]+=w[0],S[1]+=w[1]})):S=g[g.length-1],y<0?[S,x]:[x,S]}function v(y,g){for(var x in y){var S=y[x];delete g[S.start],delete S.start,delete S.end,S.forEach(function(w){o[w<0?~w:w]=1}),d.push(S)}}return v(s,r),v(r,s),l.forEach(function(y){o[y<0?~y:y]||d.push([y])}),d}function fg(a){return R1(a,u5.apply(this,arguments))}function u5(a,l,o){var r,s,d;if(arguments.length>1)r=s5(a,l,o);else for(s=0,r=new Array(d=a.arcs.length);s<d;++s)r[s]=s;return{type:"MultiLineString",arcs:c5(a,r)}}function s5(a,l,o){var r=[],s=[],d;function h(x){var S=x<0?~x:x;(s[S]||(s[S]=[])).push({i:x,g:d})}function p(x){x.forEach(h)}function v(x){x.forEach(p)}function y(x){x.forEach(v)}function g(x){switch(d=x,x.type){case"GeometryCollection":x.geometries.forEach(g);break;case"LineString":p(x.arcs);break;case"MultiLineString":case"Polygon":v(x.arcs);break;case"MultiPolygon":y(x.arcs);break}}return g(l),s.forEach(o==null?function(x){r.push(x[0].i)}:function(x){o(x[0].g,x[x.length-1].g)&&r.push(x[0].i)}),r}var f5={value:()=>{}};function fd(){for(var a=0,l=arguments.length,o={},r;a<l;++a){if(!(r=arguments[a]+"")||r in o||/[\s.]/.test(r))throw new Error("illegal type: "+r);o[r]=[]}return new Po(o)}function Po(a){this._=a}function d5(a,l){return a.trim().split(/^|\s+/).map(function(o){var r="",s=o.indexOf(".");if(s>=0&&(r=o.slice(s+1),o=o.slice(0,s)),o&&!l.hasOwnProperty(o))throw new Error("unknown type: "+o);return{type:o,name:r}})}Po.prototype=fd.prototype={constructor:Po,on:function(a,l){var o=this._,r=d5(a+"",o),s,d=-1,h=r.length;if(arguments.length<2){for(;++d<h;)if((s=(a=r[d]).type)&&(s=h5(o[s],a.name)))return s;return}if(l!=null&&typeof l!="function")throw new Error("invalid callback: "+l);for(;++d<h;)if(s=(a=r[d]).type)o[s]=dg(o[s],a.name,l);else if(l==null)for(s in o)o[s]=dg(o[s],a.name,null);return this},copy:function(){var a={},l=this._;for(var o in l)a[o]=l[o].slice();return new Po(a)},call:function(a,l){if((s=arguments.length-2)>0)for(var o=new Array(s),r=0,s,d;r<s;++r)o[r]=arguments[r+2];if(!this._.hasOwnProperty(a))throw new Error("unknown type: "+a);for(d=this._[a],r=0,s=d.length;r<s;++r)d[r].value.apply(l,o)},apply:function(a,l,o){if(!this._.hasOwnProperty(a))throw new Error("unknown type: "+a);for(var r=this._[a],s=0,d=r.length;s<d;++s)r[s].value.apply(l,o)}};function h5(a,l){for(var o=0,r=a.length,s;o<r;++o)if((s=a[o]).name===l)return s.value}function dg(a,l,o){for(var r=0,s=a.length;r<s;++r)if(a[r].name===l){a[r]=f5,a=a.slice(0,r).concat(a.slice(r+1));break}return o!=null&&a.push({name:l,value:o}),a}var Uf="http://www.w3.org/1999/xhtml";const hg={svg:"http://www.w3.org/2000/svg",xhtml:Uf,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function kc(a){var l=a+="",o=l.indexOf(":");return o>=0&&(l=a.slice(0,o))!=="xmlns"&&(a=a.slice(o+1)),hg.hasOwnProperty(l)?{space:hg[l],local:a}:a}function m5(a){return function(){var l=this.ownerDocument,o=this.namespaceURI;return o===Uf&&l.documentElement.namespaceURI===Uf?l.createElement(a):l.createElementNS(o,a)}}function p5(a){return function(){return this.ownerDocument.createElementNS(a.space,a.local)}}function L1(a){var l=kc(a);return(l.local?p5:m5)(l)}function g5(){}function dd(a){return a==null?g5:function(){return this.querySelector(a)}}function v5(a){typeof a!="function"&&(a=dd(a));for(var l=this._groups,o=l.length,r=new Array(o),s=0;s<o;++s)for(var d=l[s],h=d.length,p=r[s]=new Array(h),v,y,g=0;g<h;++g)(v=d[g])&&(y=a.call(v,v.__data__,g,d))&&("__data__"in v&&(y.__data__=v.__data__),p[g]=y);return new Ue(r,this._parents)}function B1(a){return typeof a=="object"&&"length"in a?a:Array.from(a)}function y5(){return[]}function U1(a){return a==null?y5:function(){return this.querySelectorAll(a)}}function x5(a){return function(){var l=a.apply(this,arguments);return l==null?[]:B1(l)}}function b5(a){typeof a=="function"?a=x5(a):a=U1(a);for(var l=this._groups,o=l.length,r=[],s=[],d=0;d<o;++d)for(var h=l[d],p=h.length,v,y=0;y<p;++y)(v=h[y])&&(r.push(a.call(v,v.__data__,y,h)),s.push(v));return new Ue(r,s)}function H1(a){return function(){return this.matches(a)}}function q1(a){return function(l){return l.matches(a)}}var S5=Array.prototype.find;function w5(a){return function(){return S5.call(this.children,a)}}function j5(){return this.firstElementChild}function M5(a){return this.select(a==null?j5:w5(typeof a=="function"?a:q1(a)))}var E5=Array.prototype.filter;function z5(){return this.children}function N5(a){return function(){return E5.call(this.children,a)}}function A5(a){return this.selectAll(a==null?z5:N5(typeof a=="function"?a:q1(a)))}function _5(a){typeof a!="function"&&(a=H1(a));for(var l=this._groups,o=l.length,r=new Array(o),s=0;s<o;++s)for(var d=l[s],h=d.length,p=r[s]=[],v,y=0;y<h;++y)(v=d[y])&&a.call(v,v.__data__,y,d)&&p.push(v);return new Ue(r,this._parents)}function Y1(a){return new Array(a.length)}function T5(){return new Ue(this._enter||this._groups.map(Y1),this._parents)}function zc(a,l){this.ownerDocument=a.ownerDocument,this.namespaceURI=a.namespaceURI,this._next=null,this._parent=a,this.__data__=l}zc.prototype={constructor:zc,appendChild:function(a){return this._parent.insertBefore(a,this._next)},insertBefore:function(a,l){return this._parent.insertBefore(a,l)},querySelector:function(a){return this._parent.querySelector(a)},querySelectorAll:function(a){return this._parent.querySelectorAll(a)}};function C5(a){return function(){return a}}function O5(a,l,o,r,s,d){for(var h=0,p,v=l.length,y=d.length;h<y;++h)(p=l[h])?(p.__data__=d[h],r[h]=p):o[h]=new zc(a,d[h]);for(;h<v;++h)(p=l[h])&&(s[h]=p)}function k5(a,l,o,r,s,d,h){var p,v,y=new Map,g=l.length,x=d.length,S=new Array(g),w;for(p=0;p<g;++p)(v=l[p])&&(S[p]=w=h.call(v,v.__data__,p,l)+"",y.has(w)?s[p]=v:y.set(w,v));for(p=0;p<x;++p)w=h.call(a,d[p],p,d)+"",(v=y.get(w))?(r[p]=v,v.__data__=d[p],y.delete(w)):o[p]=new zc(a,d[p]);for(p=0;p<g;++p)(v=l[p])&&y.get(S[p])===v&&(s[p]=v)}function D5(a){return a.__data__}function R5(a,l){if(!arguments.length)return Array.from(this,D5);var o=l?k5:O5,r=this._parents,s=this._groups;typeof a!="function"&&(a=C5(a));for(var d=s.length,h=new Array(d),p=new Array(d),v=new Array(d),y=0;y<d;++y){var g=r[y],x=s[y],S=x.length,w=B1(a.call(g,g&&g.__data__,y,r)),N=w.length,B=p[y]=new Array(N),q=h[y]=new Array(N),L=v[y]=new Array(S);o(g,x,B,q,L,w,l);for(var Z=0,O=0,U,Q;Z<N;++Z)if(U=B[Z]){for(Z>=O&&(O=Z+1);!(Q=q[O])&&++O<N;);U._next=Q||null}}return h=new Ue(h,r),h._enter=p,h._exit=v,h}function L5(){return new Ue(this._exit||this._groups.map(Y1),this._parents)}function B5(a,l,o){var r=this.enter(),s=this,d=this.exit();return r=typeof a=="function"?a(r):r.append(a+""),l!=null&&(s=l(s)),o==null?d.remove():o(d),r&&s?r.merge(s).order():s}function U5(a){if(!(a instanceof Ue))throw new Error("invalid merge");for(var l=this._groups,o=a._groups,r=l.length,s=o.length,d=Math.min(r,s),h=new Array(r),p=0;p<d;++p)for(var v=l[p],y=o[p],g=v.length,x=h[p]=new Array(g),S,w=0;w<g;++w)(S=v[w]||y[w])&&(x[w]=S);for(;p<r;++p)h[p]=l[p];return new Ue(h,this._parents)}function H5(){for(var a=this._groups,l=-1,o=a.length;++l<o;)for(var r=a[l],s=r.length-1,d=r[s],h;--s>=0;)(h=r[s])&&(d&&h.compareDocumentPosition(d)^4&&d.parentNode.insertBefore(h,d),d=h);return this}function q5(a){a||(a=Y5);function l(x,S){return x&&S?a(x.__data__,S.__data__):!x-!S}for(var o=this._groups,r=o.length,s=new Array(r),d=0;d<r;++d){for(var h=o[d],p=h.length,v=s[d]=new Array(p),y,g=0;g<p;++g)(y=h[g])&&(v[g]=y);v.sort(l)}return new Ue(s,this._parents).order()}function Y5(a,l){return a<l?-1:a>l?1:a>=l?0:NaN}function G5(){var a=arguments[0];return arguments[0]=this,a.apply(null,arguments),this}function X5(){return Array.from(this)}function V5(){for(var a=this._groups,l=0,o=a.length;l<o;++l)for(var r=a[l],s=0,d=r.length;s<d;++s){var h=r[s];if(h)return h}return null}function Z5(){let a=0;for(const l of this)++a;return a}function Q5(){return!this.node()}function K5(a){for(var l=this._groups,o=0,r=l.length;o<r;++o)for(var s=l[o],d=0,h=s.length,p;d<h;++d)(p=s[d])&&a.call(p,p.__data__,d,s);return this}function J5(a){return function(){this.removeAttribute(a)}}function W5(a){return function(){this.removeAttributeNS(a.space,a.local)}}function $5(a,l){return function(){this.setAttribute(a,l)}}function F5(a,l){return function(){this.setAttributeNS(a.space,a.local,l)}}function I5(a,l){return function(){var o=l.apply(this,arguments);o==null?this.removeAttribute(a):this.setAttribute(a,o)}}function P5(a,l){return function(){var o=l.apply(this,arguments);o==null?this.removeAttributeNS(a.space,a.local):this.setAttributeNS(a.space,a.local,o)}}function t4(a,l){var o=kc(a);if(arguments.length<2){var r=this.node();return o.local?r.getAttributeNS(o.space,o.local):r.getAttribute(o)}return this.each((l==null?o.local?W5:J5:typeof l=="function"?o.local?P5:I5:o.local?F5:$5)(o,l))}function G1(a){return a.ownerDocument&&a.ownerDocument.defaultView||a.document&&a||a.defaultView}function e4(a){return function(){this.style.removeProperty(a)}}function n4(a,l,o){return function(){this.style.setProperty(a,l,o)}}function a4(a,l,o){return function(){var r=l.apply(this,arguments);r==null?this.style.removeProperty(a):this.style.setProperty(a,r,o)}}function i4(a,l,o){return arguments.length>1?this.each((l==null?e4:typeof l=="function"?a4:n4)(a,l,o??"")):Ki(this.node(),a)}function Ki(a,l){return a.style.getPropertyValue(l)||G1(a).getComputedStyle(a,null).getPropertyValue(l)}function l4(a){return function(){delete this[a]}}function r4(a,l){return function(){this[a]=l}}function o4(a,l){return function(){var o=l.apply(this,arguments);o==null?delete this[a]:this[a]=o}}function c4(a,l){return arguments.length>1?this.each((l==null?l4:typeof l=="function"?o4:r4)(a,l)):this.node()[a]}function X1(a){return a.trim().split(/^|\s+/)}function hd(a){return a.classList||new V1(a)}function V1(a){this._node=a,this._names=X1(a.getAttribute("class")||"")}V1.prototype={add:function(a){var l=this._names.indexOf(a);l<0&&(this._names.push(a),this._node.setAttribute("class",this._names.join(" ")))},remove:function(a){var l=this._names.indexOf(a);l>=0&&(this._names.splice(l,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(a){return this._names.indexOf(a)>=0}};function Z1(a,l){for(var o=hd(a),r=-1,s=l.length;++r<s;)o.add(l[r])}function Q1(a,l){for(var o=hd(a),r=-1,s=l.length;++r<s;)o.remove(l[r])}function u4(a){return function(){Z1(this,a)}}function s4(a){return function(){Q1(this,a)}}function f4(a,l){return function(){(l.apply(this,arguments)?Z1:Q1)(this,a)}}function d4(a,l){var o=X1(a+"");if(arguments.length<2){for(var r=hd(this.node()),s=-1,d=o.length;++s<d;)if(!r.contains(o[s]))return!1;return!0}return this.each((typeof l=="function"?f4:l?u4:s4)(o,l))}function h4(){this.textContent=""}function m4(a){return function(){this.textContent=a}}function p4(a){return function(){var l=a.apply(this,arguments);this.textContent=l??""}}function g4(a){return arguments.length?this.each(a==null?h4:(typeof a=="function"?p4:m4)(a)):this.node().textContent}function v4(){this.innerHTML=""}function y4(a){return function(){this.innerHTML=a}}function x4(a){return function(){var l=a.apply(this,arguments);this.innerHTML=l??""}}function b4(a){return arguments.length?this.each(a==null?v4:(typeof a=="function"?x4:y4)(a)):this.node().innerHTML}function S4(){this.nextSibling&&this.parentNode.appendChild(this)}function w4(){return this.each(S4)}function j4(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function M4(){return this.each(j4)}function E4(a){var l=typeof a=="function"?a:L1(a);return this.select(function(){return this.appendChild(l.apply(this,arguments))})}function z4(){return null}function N4(a,l){var o=typeof a=="function"?a:L1(a),r=l==null?z4:typeof l=="function"?l:dd(l);return this.select(function(){return this.insertBefore(o.apply(this,arguments),r.apply(this,arguments)||null)})}function A4(){var a=this.parentNode;a&&a.removeChild(this)}function _4(){return this.each(A4)}function T4(){var a=this.cloneNode(!1),l=this.parentNode;return l?l.insertBefore(a,this.nextSibling):a}function C4(){var a=this.cloneNode(!0),l=this.parentNode;return l?l.insertBefore(a,this.nextSibling):a}function O4(a){return this.select(a?C4:T4)}function k4(a){return arguments.length?this.property("__data__",a):this.node().__data__}function D4(a){return function(l){a.call(this,l,this.__data__)}}function R4(a){return a.trim().split(/^|\s+/).map(function(l){var o="",r=l.indexOf(".");return r>=0&&(o=l.slice(r+1),l=l.slice(0,r)),{type:l,name:o}})}function L4(a){return function(){var l=this.__on;if(l){for(var o=0,r=-1,s=l.length,d;o<s;++o)d=l[o],(!a.type||d.type===a.type)&&d.name===a.name?this.removeEventListener(d.type,d.listener,d.options):l[++r]=d;++r?l.length=r:delete this.__on}}}function B4(a,l,o){return function(){var r=this.__on,s,d=D4(l);if(r){for(var h=0,p=r.length;h<p;++h)if((s=r[h]).type===a.type&&s.name===a.name){this.removeEventListener(s.type,s.listener,s.options),this.addEventListener(s.type,s.listener=d,s.options=o),s.value=l;return}}this.addEventListener(a.type,d,o),s={type:a.type,name:a.name,value:l,listener:d,options:o},r?r.push(s):this.__on=[s]}}function U4(a,l,o){var r=R4(a+""),s,d=r.length,h;if(arguments.length<2){var p=this.node().__on;if(p){for(var v=0,y=p.length,g;v<y;++v)for(s=0,g=p[v];s<d;++s)if((h=r[s]).type===g.type&&h.name===g.name)return g.value}return}for(p=l?B4:L4,s=0;s<d;++s)this.each(p(r[s],l,o));return this}function K1(a,l,o){var r=G1(a),s=r.CustomEvent;typeof s=="function"?s=new s(l,o):(s=r.document.createEvent("Event"),o?(s.initEvent(l,o.bubbles,o.cancelable),s.detail=o.detail):s.initEvent(l,!1,!1)),a.dispatchEvent(s)}function H4(a,l){return function(){return K1(this,a,l)}}function q4(a,l){return function(){return K1(this,a,l.apply(this,arguments))}}function Y4(a,l){return this.each((typeof l=="function"?q4:H4)(a,l))}function*G4(){for(var a=this._groups,l=0,o=a.length;l<o;++l)for(var r=a[l],s=0,d=r.length,h;s<d;++s)(h=r[s])&&(yield h)}var J1=[null];function Ue(a,l){this._groups=a,this._parents=l}function br(){return new Ue([[document.documentElement]],J1)}function X4(){return this}Ue.prototype=br.prototype={constructor:Ue,select:v5,selectAll:b5,selectChild:M5,selectChildren:A5,filter:_5,data:R5,enter:T5,exit:L5,join:B5,merge:U5,selection:X4,order:H5,sort:q5,call:G5,nodes:X5,node:V5,size:Z5,empty:Q5,each:K5,attr:t4,style:i4,property:c4,classed:d4,text:g4,html:b4,raise:w4,lower:M4,append:E4,insert:N4,remove:_4,clone:O4,datum:k4,on:U4,dispatch:Y4,[Symbol.iterator]:G4};function Pn(a){return typeof a=="string"?new Ue([[document.querySelector(a)]],[document.documentElement]):new Ue([[a]],J1)}function V4(a){let l;for(;l=a.sourceEvent;)a=l;return a}function Ja(a,l){if(a=V4(a),l===void 0&&(l=a.currentTarget),l){var o=l.ownerSVGElement||l;if(o.createSVGPoint){var r=o.createSVGPoint();return r.x=a.clientX,r.y=a.clientY,r=r.matrixTransform(l.getScreenCTM().inverse()),[r.x,r.y]}if(l.getBoundingClientRect){var s=l.getBoundingClientRect();return[a.clientX-s.left-l.clientLeft,a.clientY-s.top-l.clientTop]}}return[a.pageX,a.pageY]}function Hf(a){a.preventDefault(),a.stopImmediatePropagation()}function Z4(a){var l=a.document.documentElement,o=Pn(a).on("dragstart.drag",Hf,!0);"onselectstart"in l?o.on("selectstart.drag",Hf,!0):(l.__noselect=l.style.MozUserSelect,l.style.MozUserSelect="none")}function Q4(a,l){var o=a.document.documentElement,r=Pn(a).on("dragstart.drag",null);l&&(r.on("click.drag",Hf,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in o?r.on("selectstart.drag",null):(o.style.MozUserSelect=o.__noselect,delete o.__noselect)}function md(a,l,o){a.prototype=l.prototype=o,o.constructor=a}function W1(a,l){var o=Object.create(a.prototype);for(var r in l)o[r]=l[r];return o}function Sr(){}var dr=.7,Nc=1/dr,Xi="\\s*([+-]?\\d+)\\s*",hr="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",zn="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",K4=/^#([0-9a-f]{3,8})$/,J4=new RegExp("^rgb\\("+[Xi,Xi,Xi]+"\\)$"),W4=new RegExp("^rgb\\("+[zn,zn,zn]+"\\)$"),$4=new RegExp("^rgba\\("+[Xi,Xi,Xi,hr]+"\\)$"),F4=new RegExp("^rgba\\("+[zn,zn,zn,hr]+"\\)$"),I4=new RegExp("^hsl\\("+[hr,zn,zn]+"\\)$"),P4=new RegExp("^hsla\\("+[hr,zn,zn,hr]+"\\)$"),mg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};md(Sr,mr,{copy:function(a){return Object.assign(new this.constructor,this,a)},displayable:function(){return this.rgb().displayable()},hex:pg,formatHex:pg,formatHsl:t3,formatRgb:gg,toString:gg});function pg(){return this.rgb().formatHex()}function t3(){return $1(this).formatHsl()}function gg(){return this.rgb().formatRgb()}function mr(a){var l,o;return a=(a+"").trim().toLowerCase(),(l=K4.exec(a))?(o=l[1].length,l=parseInt(l[1],16),o===6?vg(l):o===3?new Ie(l>>8&15|l>>4&240,l>>4&15|l&240,(l&15)<<4|l&15,1):o===8?Qo(l>>24&255,l>>16&255,l>>8&255,(l&255)/255):o===4?Qo(l>>12&15|l>>8&240,l>>8&15|l>>4&240,l>>4&15|l&240,((l&15)<<4|l&15)/255):null):(l=J4.exec(a))?new Ie(l[1],l[2],l[3],1):(l=W4.exec(a))?new Ie(l[1]*255/100,l[2]*255/100,l[3]*255/100,1):(l=$4.exec(a))?Qo(l[1],l[2],l[3],l[4]):(l=F4.exec(a))?Qo(l[1]*255/100,l[2]*255/100,l[3]*255/100,l[4]):(l=I4.exec(a))?bg(l[1],l[2]/100,l[3]/100,1):(l=P4.exec(a))?bg(l[1],l[2]/100,l[3]/100,l[4]):mg.hasOwnProperty(a)?vg(mg[a]):a==="transparent"?new Ie(NaN,NaN,NaN,0):null}function vg(a){return new Ie(a>>16&255,a>>8&255,a&255,1)}function Qo(a,l,o,r){return r<=0&&(a=l=o=NaN),new Ie(a,l,o,r)}function e3(a){return a instanceof Sr||(a=mr(a)),a?(a=a.rgb(),new Ie(a.r,a.g,a.b,a.opacity)):new Ie}function qf(a,l,o,r){return arguments.length===1?e3(a):new Ie(a,l,o,r??1)}function Ie(a,l,o,r){this.r=+a,this.g=+l,this.b=+o,this.opacity=+r}md(Ie,qf,W1(Sr,{brighter:function(a){return a=a==null?Nc:Math.pow(Nc,a),new Ie(this.r*a,this.g*a,this.b*a,this.opacity)},darker:function(a){return a=a==null?dr:Math.pow(dr,a),new Ie(this.r*a,this.g*a,this.b*a,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:yg,formatHex:yg,formatRgb:xg,toString:xg}));function yg(){return"#"+uf(this.r)+uf(this.g)+uf(this.b)}function xg(){var a=this.opacity;return a=isNaN(a)?1:Math.max(0,Math.min(1,a)),(a===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(a===1?")":", "+a+")")}function uf(a){return a=Math.max(0,Math.min(255,Math.round(a)||0)),(a<16?"0":"")+a.toString(16)}function bg(a,l,o,r){return r<=0?a=l=o=NaN:o<=0||o>=1?a=l=NaN:l<=0&&(a=NaN),new En(a,l,o,r)}function $1(a){if(a instanceof En)return new En(a.h,a.s,a.l,a.opacity);if(a instanceof Sr||(a=mr(a)),!a)return new En;if(a instanceof En)return a;a=a.rgb();var l=a.r/255,o=a.g/255,r=a.b/255,s=Math.min(l,o,r),d=Math.max(l,o,r),h=NaN,p=d-s,v=(d+s)/2;return p?(l===d?h=(o-r)/p+(o<r)*6:o===d?h=(r-l)/p+2:h=(l-o)/p+4,p/=v<.5?d+s:2-d-s,h*=60):p=v>0&&v<1?0:h,new En(h,p,v,a.opacity)}function n3(a,l,o,r){return arguments.length===1?$1(a):new En(a,l,o,r??1)}function En(a,l,o,r){this.h=+a,this.s=+l,this.l=+o,this.opacity=+r}md(En,n3,W1(Sr,{brighter:function(a){return a=a==null?Nc:Math.pow(Nc,a),new En(this.h,this.s,this.l*a,this.opacity)},darker:function(a){return a=a==null?dr:Math.pow(dr,a),new En(this.h,this.s,this.l*a,this.opacity)},rgb:function(){var a=this.h%360+(this.h<0)*360,l=isNaN(a)||isNaN(this.s)?0:this.s,o=this.l,r=o+(o<.5?o:1-o)*l,s=2*o-r;return new Ie(sf(a>=240?a-240:a+120,s,r),sf(a,s,r),sf(a<120?a+240:a-120,s,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var a=this.opacity;return a=isNaN(a)?1:Math.max(0,Math.min(1,a)),(a===1?"hsl(":"hsla(")+(this.h||0)+", "+(this.s||0)*100+"%, "+(this.l||0)*100+"%"+(a===1?")":", "+a+")")}}));function sf(a,l,o){return(a<60?l+(o-l)*a/60:a<180?o:a<240?l+(o-l)*(240-a)/60:l)*255}const F1=a=>()=>a;function a3(a,l){return function(o){return a+o*l}}function i3(a,l,o){return a=Math.pow(a,o),l=Math.pow(l,o)-a,o=1/o,function(r){return Math.pow(a+r*l,o)}}function l3(a){return(a=+a)==1?I1:function(l,o){return o-l?i3(l,o,a):F1(isNaN(l)?o:l)}}function I1(a,l){var o=l-a;return o?a3(a,o):F1(isNaN(a)?l:a)}const Sg=(function a(l){var o=l3(l);function r(s,d){var h=o((s=qf(s)).r,(d=qf(d)).r),p=o(s.g,d.g),v=o(s.b,d.b),y=I1(s.opacity,d.opacity);return function(g){return s.r=h(g),s.g=p(g),s.b=v(g),s.opacity=y(g),s+""}}return r.gamma=a,r})(1);function _a(a,l){return a=+a,l=+l,function(o){return a*(1-o)+l*o}}var Yf=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ff=new RegExp(Yf.source,"g");function r3(a){return function(){return a}}function o3(a){return function(l){return a(l)+""}}function c3(a,l){var o=Yf.lastIndex=ff.lastIndex=0,r,s,d,h=-1,p=[],v=[];for(a=a+"",l=l+"";(r=Yf.exec(a))&&(s=ff.exec(l));)(d=s.index)>o&&(d=l.slice(o,d),p[h]?p[h]+=d:p[++h]=d),(r=r[0])===(s=s[0])?p[h]?p[h]+=s:p[++h]=s:(p[++h]=null,v.push({i:h,x:_a(r,s)})),o=ff.lastIndex;return o<l.length&&(d=l.slice(o),p[h]?p[h]+=d:p[++h]=d),p.length<2?v[0]?o3(v[0].x):r3(l):(l=v.length,function(y){for(var g=0,x;g<l;++g)p[(x=v[g]).i]=x.x(y);return p.join("")})}var wg=180/Math.PI,Gf={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function P1(a,l,o,r,s,d){var h,p,v;return(h=Math.sqrt(a*a+l*l))&&(a/=h,l/=h),(v=a*o+l*r)&&(o-=a*v,r-=l*v),(p=Math.sqrt(o*o+r*r))&&(o/=p,r/=p,v/=p),a*r<l*o&&(a=-a,l=-l,v=-v,h=-h),{translateX:s,translateY:d,rotate:Math.atan2(l,a)*wg,skewX:Math.atan(v)*wg,scaleX:h,scaleY:p}}var Ko;function u3(a){const l=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(a+"");return l.isIdentity?Gf:P1(l.a,l.b,l.c,l.d,l.e,l.f)}function s3(a){return a==null||(Ko||(Ko=document.createElementNS("http://www.w3.org/2000/svg","g")),Ko.setAttribute("transform",a),!(a=Ko.transform.baseVal.consolidate()))?Gf:(a=a.matrix,P1(a.a,a.b,a.c,a.d,a.e,a.f))}function tv(a,l,o,r){function s(y){return y.length?y.pop()+" ":""}function d(y,g,x,S,w,N){if(y!==x||g!==S){var B=w.push("translate(",null,l,null,o);N.push({i:B-4,x:_a(y,x)},{i:B-2,x:_a(g,S)})}else(x||S)&&w.push("translate("+x+l+S+o)}function h(y,g,x,S){y!==g?(y-g>180?g+=360:g-y>180&&(y+=360),S.push({i:x.push(s(x)+"rotate(",null,r)-2,x:_a(y,g)})):g&&x.push(s(x)+"rotate("+g+r)}function p(y,g,x,S){y!==g?S.push({i:x.push(s(x)+"skewX(",null,r)-2,x:_a(y,g)}):g&&x.push(s(x)+"skewX("+g+r)}function v(y,g,x,S,w,N){if(y!==x||g!==S){var B=w.push(s(w)+"scale(",null,",",null,")");N.push({i:B-4,x:_a(y,x)},{i:B-2,x:_a(g,S)})}else(x!==1||S!==1)&&w.push(s(w)+"scale("+x+","+S+")")}return function(y,g){var x=[],S=[];return y=a(y),g=a(g),d(y.translateX,y.translateY,g.translateX,g.translateY,x,S),h(y.rotate,g.rotate,x,S),p(y.skewX,g.skewX,x,S),v(y.scaleX,y.scaleY,g.scaleX,g.scaleY,x,S),y=g=null,function(w){for(var N=-1,B=S.length,q;++N<B;)x[(q=S[N]).i]=q.x(w);return x.join("")}}}var f3=tv(u3,"px, ","px)","deg)"),d3=tv(s3,", ",")",")"),h3=1e-12;function jg(a){return((a=Math.exp(a))+1/a)/2}function m3(a){return((a=Math.exp(a))-1/a)/2}function p3(a){return((a=Math.exp(2*a))-1)/(a+1)}const g3=(function a(l,o,r){function s(d,h){var p=d[0],v=d[1],y=d[2],g=h[0],x=h[1],S=h[2],w=g-p,N=x-v,B=w*w+N*N,q,L;if(B<h3)L=Math.log(S/y)/l,q=function(W){return[p+W*w,v+W*N,y*Math.exp(l*W*L)]};else{var Z=Math.sqrt(B),O=(S*S-y*y+r*B)/(2*y*o*Z),U=(S*S-y*y-r*B)/(2*S*o*Z),Q=Math.log(Math.sqrt(O*O+1)-O),K=Math.log(Math.sqrt(U*U+1)-U);L=(K-Q)/l,q=function(W){var I=W*L,at=jg(Q),ht=y/(o*Z)*(at*p3(l*I+Q)-m3(Q));return[p+ht*w,v+ht*N,y*at/jg(l*I+Q)]}}return q.duration=L*1e3*l/Math.SQRT2,q}return s.rho=function(d){var h=Math.max(.001,+d),p=h*h,v=p*p;return a(h,p,v)},s})(Math.SQRT2,2,4);var Ji=0,tr=0,Zl=0,ev=1e3,Ac,er,_c=0,Pa=0,Dc=0,pr=typeof performance=="object"&&performance.now?performance:Date,nv=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(a){setTimeout(a,17)};function pd(){return Pa||(nv(v3),Pa=pr.now()+Dc)}function v3(){Pa=0}function Tc(){this._call=this._time=this._next=null}Tc.prototype=av.prototype={constructor:Tc,restart:function(a,l,o){if(typeof a!="function")throw new TypeError("callback is not a function");o=(o==null?pd():+o)+(l==null?0:+l),!this._next&&er!==this&&(er?er._next=this:Ac=this,er=this),this._call=a,this._time=o,Xf()},stop:function(){this._call&&(this._call=null,this._time=1/0,Xf())}};function av(a,l,o){var r=new Tc;return r.restart(a,l,o),r}function y3(){pd(),++Ji;for(var a=Ac,l;a;)(l=Pa-a._time)>=0&&a._call.call(null,l),a=a._next;--Ji}function Mg(){Pa=(_c=pr.now())+Dc,Ji=tr=0;try{y3()}finally{Ji=0,b3(),Pa=0}}function x3(){var a=pr.now(),l=a-_c;l>ev&&(Dc-=l,_c=a)}function b3(){for(var a,l=Ac,o,r=1/0;l;)l._call?(r>l._time&&(r=l._time),a=l,l=l._next):(o=l._next,l._next=null,l=a?a._next=o:Ac=o);er=a,Xf(r)}function Xf(a){if(!Ji){tr&&(tr=clearTimeout(tr));var l=a-Pa;l>24?(a<1/0&&(tr=setTimeout(Mg,a-pr.now()-Dc)),Zl&&(Zl=clearInterval(Zl))):(Zl||(_c=pr.now(),Zl=setInterval(x3,ev)),Ji=1,nv(Mg))}}function Eg(a,l,o){var r=new Tc;return l=l==null?0:+l,r.restart(s=>{r.stop(),a(s+l)},l,o),r}var S3=fd("start","end","cancel","interrupt"),w3=[],iv=0,zg=1,Vf=2,tc=3,Ng=4,Zf=5,ec=6;function Rc(a,l,o,r,s,d){var h=a.__transition;if(!h)a.__transition={};else if(o in h)return;j3(a,o,{name:l,index:r,group:s,on:S3,tween:w3,time:d.time,delay:d.delay,duration:d.duration,ease:d.ease,timer:null,state:iv})}function gd(a,l){var o=yn(a,l);if(o.state>iv)throw new Error("too late; already scheduled");return o}function _n(a,l){var o=yn(a,l);if(o.state>tc)throw new Error("too late; already running");return o}function yn(a,l){var o=a.__transition;if(!o||!(o=o[l]))throw new Error("transition not found");return o}function j3(a,l,o){var r=a.__transition,s;r[l]=o,o.timer=av(d,0,o.time);function d(y){o.state=zg,o.timer.restart(h,o.delay,o.time),o.delay<=y&&h(y-o.delay)}function h(y){var g,x,S,w;if(o.state!==zg)return v();for(g in r)if(w=r[g],w.name===o.name){if(w.state===tc)return Eg(h);w.state===Ng?(w.state=ec,w.timer.stop(),w.on.call("interrupt",a,a.__data__,w.index,w.group),delete r[g]):+g<l&&(w.state=ec,w.timer.stop(),w.on.call("cancel",a,a.__data__,w.index,w.group),delete r[g])}if(Eg(function(){o.state===tc&&(o.state=Ng,o.timer.restart(p,o.delay,o.time),p(y))}),o.state=Vf,o.on.call("start",a,a.__data__,o.index,o.group),o.state===Vf){for(o.state=tc,s=new Array(S=o.tween.length),g=0,x=-1;g<S;++g)(w=o.tween[g].value.call(a,a.__data__,o.index,o.group))&&(s[++x]=w);s.length=x+1}}function p(y){for(var g=y<o.duration?o.ease.call(null,y/o.duration):(o.timer.restart(v),o.state=Zf,1),x=-1,S=s.length;++x<S;)s[x].call(a,g);o.state===Zf&&(o.on.call("end",a,a.__data__,o.index,o.group),v())}function v(){o.state=ec,o.timer.stop(),delete r[l];for(var y in r)return;delete a.__transition}}function nc(a,l){var o=a.__transition,r,s,d=!0,h;if(o){l=l==null?null:l+"";for(h in o){if((r=o[h]).name!==l){d=!1;continue}s=r.state>Vf&&r.state<Zf,r.state=ec,r.timer.stop(),r.on.call(s?"interrupt":"cancel",a,a.__data__,r.index,r.group),delete o[h]}d&&delete a.__transition}}function M3(a){return this.each(function(){nc(this,a)})}function E3(a,l){var o,r;return function(){var s=_n(this,a),d=s.tween;if(d!==o){r=o=d;for(var h=0,p=r.length;h<p;++h)if(r[h].name===l){r=r.slice(),r.splice(h,1);break}}s.tween=r}}function z3(a,l,o){var r,s;if(typeof o!="function")throw new Error;return function(){var d=_n(this,a),h=d.tween;if(h!==r){s=(r=h).slice();for(var p={name:l,value:o},v=0,y=s.length;v<y;++v)if(s[v].name===l){s[v]=p;break}v===y&&s.push(p)}d.tween=s}}function N3(a,l){var o=this._id;if(a+="",arguments.length<2){for(var r=yn(this.node(),o).tween,s=0,d=r.length,h;s<d;++s)if((h=r[s]).name===a)return h.value;return null}return this.each((l==null?E3:z3)(o,a,l))}function vd(a,l,o){var r=a._id;return a.each(function(){var s=_n(this,r);(s.value||(s.value={}))[l]=o.apply(this,arguments)}),function(s){return yn(s,r).value[l]}}function lv(a,l){var o;return(typeof l=="number"?_a:l instanceof mr?Sg:(o=mr(l))?(l=o,Sg):c3)(a,l)}function A3(a){return function(){this.removeAttribute(a)}}function _3(a){return function(){this.removeAttributeNS(a.space,a.local)}}function T3(a,l,o){var r,s=o+"",d;return function(){var h=this.getAttribute(a);return h===s?null:h===r?d:d=l(r=h,o)}}function C3(a,l,o){var r,s=o+"",d;return function(){var h=this.getAttributeNS(a.space,a.local);return h===s?null:h===r?d:d=l(r=h,o)}}function O3(a,l,o){var r,s,d;return function(){var h,p=o(this),v;return p==null?void this.removeAttribute(a):(h=this.getAttribute(a),v=p+"",h===v?null:h===r&&v===s?d:(s=v,d=l(r=h,p)))}}function k3(a,l,o){var r,s,d;return function(){var h,p=o(this),v;return p==null?void this.removeAttributeNS(a.space,a.local):(h=this.getAttributeNS(a.space,a.local),v=p+"",h===v?null:h===r&&v===s?d:(s=v,d=l(r=h,p)))}}function D3(a,l){var o=kc(a),r=o==="transform"?d3:lv;return this.attrTween(a,typeof l=="function"?(o.local?k3:O3)(o,r,vd(this,"attr."+a,l)):l==null?(o.local?_3:A3)(o):(o.local?C3:T3)(o,r,l))}function R3(a,l){return function(o){this.setAttribute(a,l.call(this,o))}}function L3(a,l){return function(o){this.setAttributeNS(a.space,a.local,l.call(this,o))}}function B3(a,l){var o,r;function s(){var d=l.apply(this,arguments);return d!==r&&(o=(r=d)&&L3(a,d)),o}return s._value=l,s}function U3(a,l){var o,r;function s(){var d=l.apply(this,arguments);return d!==r&&(o=(r=d)&&R3(a,d)),o}return s._value=l,s}function H3(a,l){var o="attr."+a;if(arguments.length<2)return(o=this.tween(o))&&o._value;if(l==null)return this.tween(o,null);if(typeof l!="function")throw new Error;var r=kc(a);return this.tween(o,(r.local?B3:U3)(r,l))}function q3(a,l){return function(){gd(this,a).delay=+l.apply(this,arguments)}}function Y3(a,l){return l=+l,function(){gd(this,a).delay=l}}function G3(a){var l=this._id;return arguments.length?this.each((typeof a=="function"?q3:Y3)(l,a)):yn(this.node(),l).delay}function X3(a,l){return function(){_n(this,a).duration=+l.apply(this,arguments)}}function V3(a,l){return l=+l,function(){_n(this,a).duration=l}}function Z3(a){var l=this._id;return arguments.length?this.each((typeof a=="function"?X3:V3)(l,a)):yn(this.node(),l).duration}function Q3(a,l){if(typeof l!="function")throw new Error;return function(){_n(this,a).ease=l}}function K3(a){var l=this._id;return arguments.length?this.each(Q3(l,a)):yn(this.node(),l).ease}function J3(a,l){return function(){var o=l.apply(this,arguments);if(typeof o!="function")throw new Error;_n(this,a).ease=o}}function W3(a){if(typeof a!="function")throw new Error;return this.each(J3(this._id,a))}function $3(a){typeof a!="function"&&(a=H1(a));for(var l=this._groups,o=l.length,r=new Array(o),s=0;s<o;++s)for(var d=l[s],h=d.length,p=r[s]=[],v,y=0;y<h;++y)(v=d[y])&&a.call(v,v.__data__,y,d)&&p.push(v);return new na(r,this._parents,this._name,this._id)}function F3(a){if(a._id!==this._id)throw new Error;for(var l=this._groups,o=a._groups,r=l.length,s=o.length,d=Math.min(r,s),h=new Array(r),p=0;p<d;++p)for(var v=l[p],y=o[p],g=v.length,x=h[p]=new Array(g),S,w=0;w<g;++w)(S=v[w]||y[w])&&(x[w]=S);for(;p<r;++p)h[p]=l[p];return new na(h,this._parents,this._name,this._id)}function I3(a){return(a+"").trim().split(/^|\s+/).every(function(l){var o=l.indexOf(".");return o>=0&&(l=l.slice(0,o)),!l||l==="start"})}function P3(a,l,o){var r,s,d=I3(l)?gd:_n;return function(){var h=d(this,a),p=h.on;p!==r&&(s=(r=p).copy()).on(l,o),h.on=s}}function tS(a,l){var o=this._id;return arguments.length<2?yn(this.node(),o).on.on(a):this.each(P3(o,a,l))}function eS(a){return function(){var l=this.parentNode;for(var o in this.__transition)if(+o!==a)return;l&&l.removeChild(this)}}function nS(){return this.on("end.remove",eS(this._id))}function aS(a){var l=this._name,o=this._id;typeof a!="function"&&(a=dd(a));for(var r=this._groups,s=r.length,d=new Array(s),h=0;h<s;++h)for(var p=r[h],v=p.length,y=d[h]=new Array(v),g,x,S=0;S<v;++S)(g=p[S])&&(x=a.call(g,g.__data__,S,p))&&("__data__"in g&&(x.__data__=g.__data__),y[S]=x,Rc(y[S],l,o,S,y,yn(g,o)));return new na(d,this._parents,l,o)}function iS(a){var l=this._name,o=this._id;typeof a!="function"&&(a=U1(a));for(var r=this._groups,s=r.length,d=[],h=[],p=0;p<s;++p)for(var v=r[p],y=v.length,g,x=0;x<y;++x)if(g=v[x]){for(var S=a.call(g,g.__data__,x,v),w,N=yn(g,o),B=0,q=S.length;B<q;++B)(w=S[B])&&Rc(w,l,o,B,S,N);d.push(S),h.push(g)}return new na(d,h,l,o)}var lS=br.prototype.constructor;function rS(){return new lS(this._groups,this._parents)}function oS(a,l){var o,r,s;return function(){var d=Ki(this,a),h=(this.style.removeProperty(a),Ki(this,a));return d===h?null:d===o&&h===r?s:s=l(o=d,r=h)}}function rv(a){return function(){this.style.removeProperty(a)}}function cS(a,l,o){var r,s=o+"",d;return function(){var h=Ki(this,a);return h===s?null:h===r?d:d=l(r=h,o)}}function uS(a,l,o){var r,s,d;return function(){var h=Ki(this,a),p=o(this),v=p+"";return p==null&&(v=p=(this.style.removeProperty(a),Ki(this,a))),h===v?null:h===r&&v===s?d:(s=v,d=l(r=h,p))}}function sS(a,l){var o,r,s,d="style."+l,h="end."+d,p;return function(){var v=_n(this,a),y=v.on,g=v.value[d]==null?p||(p=rv(l)):void 0;(y!==o||s!==g)&&(r=(o=y).copy()).on(h,s=g),v.on=r}}function fS(a,l,o){var r=(a+="")=="transform"?f3:lv;return l==null?this.styleTween(a,oS(a,r)).on("end.style."+a,rv(a)):typeof l=="function"?this.styleTween(a,uS(a,r,vd(this,"style."+a,l))).each(sS(this._id,a)):this.styleTween(a,cS(a,r,l),o).on("end.style."+a,null)}function dS(a,l,o){return function(r){this.style.setProperty(a,l.call(this,r),o)}}function hS(a,l,o){var r,s;function d(){var h=l.apply(this,arguments);return h!==s&&(r=(s=h)&&dS(a,h,o)),r}return d._value=l,d}function mS(a,l,o){var r="style."+(a+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(l==null)return this.tween(r,null);if(typeof l!="function")throw new Error;return this.tween(r,hS(a,l,o??""))}function pS(a){return function(){this.textContent=a}}function gS(a){return function(){var l=a(this);this.textContent=l??""}}function vS(a){return this.tween("text",typeof a=="function"?gS(vd(this,"text",a)):pS(a==null?"":a+""))}function yS(a){return function(l){this.textContent=a.call(this,l)}}function xS(a){var l,o;function r(){var s=a.apply(this,arguments);return s!==o&&(l=(o=s)&&yS(s)),l}return r._value=a,r}function bS(a){var l="text";if(arguments.length<1)return(l=this.tween(l))&&l._value;if(a==null)return this.tween(l,null);if(typeof a!="function")throw new Error;return this.tween(l,xS(a))}function SS(){for(var a=this._name,l=this._id,o=ov(),r=this._groups,s=r.length,d=0;d<s;++d)for(var h=r[d],p=h.length,v,y=0;y<p;++y)if(v=h[y]){var g=yn(v,l);Rc(v,a,o,y,h,{time:g.time+g.delay+g.duration,delay:0,duration:g.duration,ease:g.ease})}return new na(r,this._parents,a,o)}function wS(){var a,l,o=this,r=o._id,s=o.size();return new Promise(function(d,h){var p={value:h},v={value:function(){--s===0&&d()}};o.each(function(){var y=_n(this,r),g=y.on;g!==a&&(l=(a=g).copy(),l._.cancel.push(p),l._.interrupt.push(p),l._.end.push(v)),y.on=l}),s===0&&d()})}var jS=0;function na(a,l,o,r){this._groups=a,this._parents=l,this._name=o,this._id=r}function ov(){return++jS}var Wa=br.prototype;na.prototype={constructor:na,select:aS,selectAll:iS,filter:$3,merge:F3,selection:rS,transition:SS,call:Wa.call,nodes:Wa.nodes,node:Wa.node,size:Wa.size,empty:Wa.empty,each:Wa.each,on:tS,attr:D3,attrTween:H3,style:fS,styleTween:mS,text:vS,textTween:bS,remove:nS,tween:N3,delay:G3,duration:Z3,ease:K3,easeVarying:W3,end:wS,[Symbol.iterator]:Wa[Symbol.iterator]};function MS(a){return((a*=2)<=1?a*a*a:(a-=2)*a*a+2)/2}var ES={time:null,delay:0,duration:250,ease:MS};function zS(a,l){for(var o;!(o=a.__transition)||!(o=o[l]);)if(!(a=a.parentNode))throw new Error(`transition ${l} not found`);return o}function NS(a){var l,o;a instanceof na?(l=a._id,a=a._name):(l=ov(),(o=ES).time=pd(),a=a==null?null:a+"");for(var r=this._groups,s=r.length,d=0;d<s;++d)for(var h=r[d],p=h.length,v,y=0;y<p;++y)(v=h[y])&&Rc(v,a,l,y,h,o||zS(v,l));return new na(r,this._parents,a,l)}br.prototype.interrupt=M3;br.prototype.transition=NS;const Jo=a=>()=>a;function AS(a,{sourceEvent:l,target:o,transform:r,dispatch:s}){Object.defineProperties(this,{type:{value:a,enumerable:!0,configurable:!0},sourceEvent:{value:l,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:s}})}function ta(a,l,o){this.k=a,this.x=l,this.y=o}ta.prototype={constructor:ta,scale:function(a){return a===1?this:new ta(this.k*a,this.x,this.y)},translate:function(a,l){return a===0&l===0?this:new ta(this.k,this.x+this.k*a,this.y+this.k*l)},apply:function(a){return[a[0]*this.k+this.x,a[1]*this.k+this.y]},applyX:function(a){return a*this.k+this.x},applyY:function(a){return a*this.k+this.y},invert:function(a){return[(a[0]-this.x)/this.k,(a[1]-this.y)/this.k]},invertX:function(a){return(a-this.x)/this.k},invertY:function(a){return(a-this.y)/this.k},rescaleX:function(a){return a.copy().domain(a.range().map(this.invertX,this).map(a.invert,a))},rescaleY:function(a){return a.copy().domain(a.range().map(this.invertY,this).map(a.invert,a))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var yd=new ta(1,0,0);ta.prototype;function df(a){a.stopImmediatePropagation()}function Ql(a){a.preventDefault(),a.stopImmediatePropagation()}function _S(a){return(!a.ctrlKey||a.type==="wheel")&&!a.button}function TS(){var a=this;return a instanceof SVGElement?(a=a.ownerSVGElement||a,a.hasAttribute("viewBox")?(a=a.viewBox.baseVal,[[a.x,a.y],[a.x+a.width,a.y+a.height]]):[[0,0],[a.width.baseVal.value,a.height.baseVal.value]]):[[0,0],[a.clientWidth,a.clientHeight]]}function Ag(){return this.__zoom||yd}function CS(a){return-a.deltaY*(a.deltaMode===1?.05:a.deltaMode?1:.002)*(a.ctrlKey?10:1)}function OS(){return navigator.maxTouchPoints||"ontouchstart"in this}function kS(a,l,o){var r=a.invertX(l[0][0])-o[0][0],s=a.invertX(l[1][0])-o[1][0],d=a.invertY(l[0][1])-o[0][1],h=a.invertY(l[1][1])-o[1][1];return a.translate(s>r?(r+s)/2:Math.min(0,r)||Math.max(0,s),h>d?(d+h)/2:Math.min(0,d)||Math.max(0,h))}function DS(){var a=_S,l=TS,o=kS,r=CS,s=OS,d=[0,1/0],h=[[-1/0,-1/0],[1/0,1/0]],p=250,v=g3,y=fd("start","zoom","end"),g,x,S,w=500,N=150,B=0,q=10;function L(A){A.property("__zoom",Ag).on("wheel.zoom",I).on("mousedown.zoom",at).on("dblclick.zoom",ht).filter(s).on("touchstart.zoom",P).on("touchmove.zoom",tt).on("touchend.zoom touchcancel.zoom",jt).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}L.transform=function(A,E,j,C){var G=A.selection?A.selection():A;G.property("__zoom",Ag),A!==G?Q(A,E,j,C):G.interrupt().each(function(){K(this,arguments).event(C).start().zoom(null,typeof E=="function"?E.apply(this,arguments):E).end()})},L.scaleBy=function(A,E,j,C){L.scaleTo(A,function(){var G=this.__zoom.k,J=typeof E=="function"?E.apply(this,arguments):E;return G*J},j,C)},L.scaleTo=function(A,E,j,C){L.transform(A,function(){var G=l.apply(this,arguments),J=this.__zoom,F=j==null?U(G):typeof j=="function"?j.apply(this,arguments):j,ct=J.invert(F),ut=typeof E=="function"?E.apply(this,arguments):E;return o(O(Z(J,ut),F,ct),G,h)},j,C)},L.translateBy=function(A,E,j,C){L.transform(A,function(){return o(this.__zoom.translate(typeof E=="function"?E.apply(this,arguments):E,typeof j=="function"?j.apply(this,arguments):j),l.apply(this,arguments),h)},null,C)},L.translateTo=function(A,E,j,C,G){L.transform(A,function(){var J=l.apply(this,arguments),F=this.__zoom,ct=C==null?U(J):typeof C=="function"?C.apply(this,arguments):C;return o(yd.translate(ct[0],ct[1]).scale(F.k).translate(typeof E=="function"?-E.apply(this,arguments):-E,typeof j=="function"?-j.apply(this,arguments):-j),J,h)},C,G)};function Z(A,E){return E=Math.max(d[0],Math.min(d[1],E)),E===A.k?A:new ta(E,A.x,A.y)}function O(A,E,j){var C=E[0]-j[0]*A.k,G=E[1]-j[1]*A.k;return C===A.x&&G===A.y?A:new ta(A.k,C,G)}function U(A){return[(+A[0][0]+ +A[1][0])/2,(+A[0][1]+ +A[1][1])/2]}function Q(A,E,j,C){A.on("start.zoom",function(){K(this,arguments).event(C).start()}).on("interrupt.zoom end.zoom",function(){K(this,arguments).event(C).end()}).tween("zoom",function(){var G=this,J=arguments,F=K(G,J).event(C),ct=l.apply(G,J),ut=j==null?U(ct):typeof j=="function"?j.apply(G,J):j,ot=Math.max(ct[1][0]-ct[0][0],ct[1][1]-ct[0][1]),gt=G.__zoom,Mt=typeof E=="function"?E.apply(G,J):E,Kt=v(gt.invert(ut).concat(ot/gt.k),Mt.invert(ut).concat(ot/Mt.k));return function(ae){if(ae===1)ae=Mt;else{var ue=Kt(ae),Rt=ot/ue[2];ae=new ta(Rt,ut[0]-ue[0]*Rt,ut[1]-ue[1]*Rt)}F.zoom(null,ae)}})}function K(A,E,j){return!j&&A.__zooming||new W(A,E)}function W(A,E){this.that=A,this.args=E,this.active=0,this.sourceEvent=null,this.extent=l.apply(A,E),this.taps=0}W.prototype={event:function(A){return A&&(this.sourceEvent=A),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(A,E){return this.mouse&&A!=="mouse"&&(this.mouse[1]=E.invert(this.mouse[0])),this.touch0&&A!=="touch"&&(this.touch0[1]=E.invert(this.touch0[0])),this.touch1&&A!=="touch"&&(this.touch1[1]=E.invert(this.touch1[0])),this.that.__zoom=E,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(A){var E=Pn(this.that).datum();y.call(A,this.that,new AS(A,{sourceEvent:this.sourceEvent,target:L,transform:this.that.__zoom,dispatch:y}),E)}};function I(A,...E){if(!a.apply(this,arguments))return;var j=K(this,E).event(A),C=this.__zoom,G=Math.max(d[0],Math.min(d[1],C.k*Math.pow(2,r.apply(this,arguments)))),J=Ja(A);if(j.wheel)(j.mouse[0][0]!==J[0]||j.mouse[0][1]!==J[1])&&(j.mouse[1]=C.invert(j.mouse[0]=J)),clearTimeout(j.wheel);else{if(C.k===G)return;j.mouse=[J,C.invert(J)],nc(this),j.start()}Ql(A),j.wheel=setTimeout(F,N),j.zoom("mouse",o(O(Z(C,G),j.mouse[0],j.mouse[1]),j.extent,h));function F(){j.wheel=null,j.end()}}function at(A,...E){if(S||!a.apply(this,arguments))return;var j=K(this,E,!0).event(A),C=Pn(A.view).on("mousemove.zoom",ut,!0).on("mouseup.zoom",ot,!0),G=Ja(A,J),J=A.currentTarget,F=A.clientX,ct=A.clientY;Z4(A.view),df(A),j.mouse=[G,this.__zoom.invert(G)],nc(this),j.start();function ut(gt){if(Ql(gt),!j.moved){var Mt=gt.clientX-F,Kt=gt.clientY-ct;j.moved=Mt*Mt+Kt*Kt>B}j.event(gt).zoom("mouse",o(O(j.that.__zoom,j.mouse[0]=Ja(gt,J),j.mouse[1]),j.extent,h))}function ot(gt){C.on("mousemove.zoom mouseup.zoom",null),Q4(gt.view,j.moved),Ql(gt),j.event(gt).end()}}function ht(A,...E){if(a.apply(this,arguments)){var j=this.__zoom,C=Ja(A.changedTouches?A.changedTouches[0]:A,this),G=j.invert(C),J=j.k*(A.shiftKey?.5:2),F=o(O(Z(j,J),C,G),l.apply(this,E),h);Ql(A),p>0?Pn(this).transition().duration(p).call(Q,F,C,A):Pn(this).call(L.transform,F,C,A)}}function P(A,...E){if(a.apply(this,arguments)){var j=A.touches,C=j.length,G=K(this,E,A.changedTouches.length===C).event(A),J,F,ct,ut;for(df(A),F=0;F<C;++F)ct=j[F],ut=Ja(ct,this),ut=[ut,this.__zoom.invert(ut),ct.identifier],G.touch0?!G.touch1&&G.touch0[2]!==ut[2]&&(G.touch1=ut,G.taps=0):(G.touch0=ut,J=!0,G.taps=1+!!g);g&&(g=clearTimeout(g)),J&&(G.taps<2&&(x=ut[0],g=setTimeout(function(){g=null},w)),nc(this),G.start())}}function tt(A,...E){if(this.__zooming){var j=K(this,E).event(A),C=A.changedTouches,G=C.length,J,F,ct,ut;for(Ql(A),J=0;J<G;++J)F=C[J],ct=Ja(F,this),j.touch0&&j.touch0[2]===F.identifier?j.touch0[0]=ct:j.touch1&&j.touch1[2]===F.identifier&&(j.touch1[0]=ct);if(F=j.that.__zoom,j.touch1){var ot=j.touch0[0],gt=j.touch0[1],Mt=j.touch1[0],Kt=j.touch1[1],ae=(ae=Mt[0]-ot[0])*ae+(ae=Mt[1]-ot[1])*ae,ue=(ue=Kt[0]-gt[0])*ue+(ue=Kt[1]-gt[1])*ue;F=Z(F,Math.sqrt(ae/ue)),ct=[(ot[0]+Mt[0])/2,(ot[1]+Mt[1])/2],ut=[(gt[0]+Kt[0])/2,(gt[1]+Kt[1])/2]}else if(j.touch0)ct=j.touch0[0],ut=j.touch0[1];else return;j.zoom("touch",o(O(F,ct,ut),j.extent,h))}}function jt(A,...E){if(this.__zooming){var j=K(this,E).event(A),C=A.changedTouches,G=C.length,J,F;for(df(A),S&&clearTimeout(S),S=setTimeout(function(){S=null},w),J=0;J<G;++J)F=C[J],j.touch0&&j.touch0[2]===F.identifier?delete j.touch0:j.touch1&&j.touch1[2]===F.identifier&&delete j.touch1;if(j.touch1&&!j.touch0&&(j.touch0=j.touch1,delete j.touch1),j.touch0)j.touch0[1]=this.__zoom.invert(j.touch0[0]);else if(j.end(),j.taps===2&&(F=Ja(F,this),Math.hypot(x[0]-F[0],x[1]-F[1])<q)){var ct=Pn(this).on("dblclick.zoom");ct&&ct.apply(this,arguments)}}}return L.wheelDelta=function(A){return arguments.length?(r=typeof A=="function"?A:Jo(+A),L):r},L.filter=function(A){return arguments.length?(a=typeof A=="function"?A:Jo(!!A),L):a},L.touchable=function(A){return arguments.length?(s=typeof A=="function"?A:Jo(!!A),L):s},L.extent=function(A){return arguments.length?(l=typeof A=="function"?A:Jo([[+A[0][0],+A[0][1]],[+A[1][0],+A[1][1]]]),L):l},L.scaleExtent=function(A){return arguments.length?(d[0]=+A[0],d[1]=+A[1],L):[d[0],d[1]]},L.translateExtent=function(A){return arguments.length?(h[0][0]=+A[0][0],h[1][0]=+A[1][0],h[0][1]=+A[0][1],h[1][1]=+A[1][1],L):[[h[0][0],h[0][1]],[h[1][0],h[1][1]]]},L.constrain=function(A){return arguments.length?(o=A,L):o},L.duration=function(A){return arguments.length?(p=+A,L):p},L.interpolate=function(A){return arguments.length?(v=A,L):v},L.on=function(){var A=y.on.apply(y,arguments);return A===y?L:A},L.clickDistance=function(A){return arguments.length?(B=(A=+A)*A,L):Math.sqrt(B)},L.tapDistance=function(A){return arguments.length?(q=+A,L):q},L}function _g(a,l){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);l&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable})),o.push.apply(o,r)}return o}function Yi(a){for(var l=1;l<arguments.length;l++){var o=arguments[l]!=null?arguments[l]:{};l%2?_g(Object(o),!0).forEach(function(r){RS(a,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):_g(Object(o)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(o,r))})}return a}function Qf(a){"@babel/helpers - typeof";return Qf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},Qf(a)}function RS(a,l,o){return l in a?Object.defineProperty(a,l,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[l]=o,a}function He(){return He=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(a[r]=o[r])}return a},He.apply(this,arguments)}function LS(a,l){if(a==null)return{};var o={},r=Object.keys(a),s,d;for(d=0;d<r.length;d++)s=r[d],!(l.indexOf(s)>=0)&&(o[s]=a[s]);return o}function dn(a,l){if(a==null)return{};var o=LS(a,l),r,s;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);for(s=0;s<d.length;s++)r=d[s],!(l.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(a,r)&&(o[r]=a[r])}return o}function xe(a,l){return BS(a)||US(a,l)||HS(a,l)||qS()}function BS(a){if(Array.isArray(a))return a}function US(a,l){var o=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(o!=null){var r=[],s=!0,d=!1,h,p;try{for(o=o.call(a);!(s=(h=o.next()).done)&&(r.push(h.value),!(l&&r.length===l));s=!0);}catch(v){d=!0,p=v}finally{try{!s&&o.return!=null&&o.return()}finally{if(d)throw p}}return r}}function HS(a,l){if(a){if(typeof a=="string")return Tg(a,l);var o=Object.prototype.toString.call(a).slice(8,-1);if(o==="Object"&&a.constructor&&(o=a.constructor.name),o==="Map"||o==="Set")return Array.from(a);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Tg(a,l)}}function Tg(a,l){(l==null||l>a.length)&&(l=a.length);for(var o=0,r=new Array(l);o<l;o++)r[o]=a[o];return r}function qS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var YS=["width","height","projection","projectionConfig"],GS=A1,XS=dn(a5,["geoPath"]),Tn=T.createContext(),VS=function(l){var o=l.projectionConfig,r=o===void 0?{}:o,s=l.projection,d=s===void 0?"geoEqualEarth":s,h=l.width,p=h===void 0?800:h,v=l.height,y=v===void 0?600:v,g=typeof d=="function";if(g)return d;var x=XS[d]().translate([p/2,y/2]),S=[x.center?"center":null,x.rotate?"rotate":null,x.scale?"scale":null,x.parallels?"parallels":null];return S.forEach(function(w){w&&(x=x[w](r[w]||x[w]()))}),x},cv=function(l){var o=l.width,r=l.height,s=l.projection,d=l.projectionConfig,h=dn(l,YS),p=d.center||[],v=xe(p,2),y=v[0],g=v[1],x=d.rotate||[],S=xe(x,3),w=S[0],N=S[1],B=S[2],q=d.parallels||[],L=xe(q,2),Z=L[0],O=L[1],U=d.scale||null,Q=T.useMemo(function(){return VS({projectionConfig:{center:y||y===0||g||g===0?[y,g]:null,rotate:w||w===0||N||N===0?[w,N,B]:null,parallels:Z||Z===0||O||O===0?[Z,O]:null,scale:U},projection:s,width:o,height:r})},[o,r,s,y,g,w,N,B,Z,O,U]),K=T.useCallback(Q,[Q]),W=T.useMemo(function(){return{width:o,height:r,projection:K,path:GS().projection(K)}},[o,r,K]);return ce.createElement(Tn.Provider,He({value:W},h))};cv.propTypes={width:$.number,height:$.number,projection:$.oneOfType([$.string,$.func]),projectionConfig:$.object};var ZS=["width","height","projection","projectionConfig","className"],xd=T.forwardRef(function(a,l){var o=a.width,r=o===void 0?800:o,s=a.height,d=s===void 0?600:s,h=a.projection,p=h===void 0?"geoEqualEarth":h,v=a.projectionConfig,y=v===void 0?{}:v,g=a.className,x=g===void 0?"":g,S=dn(a,ZS);return ce.createElement(cv,{width:r,height:d,projection:p,projectionConfig:y},ce.createElement("svg",He({ref:l,viewBox:"0 0 ".concat(r," ").concat(d),className:"rsm-svg ".concat(x)},S)))});xd.displayName="ComposableMap";xd.propTypes={width:$.number,height:$.number,projection:$.oneOfType([$.string,$.func]),projectionConfig:$.object,className:$.string};function Cg(a,l,o){var r=(a*o.k-a)/2,s=(l*o.k-l)/2;return[a/2-(r+o.x)/o.k,l/2-(s+o.y)/o.k]}function QS(a){return fetch(a).then(function(l){if(!l.ok)throw Error(l.statusText);return l.json()}).catch(function(l){console.log("There was a problem when fetching the data: ",l)})}function Og(a,l){var o=a.type==="Topology";if(!o)return l?l(a.features||a):a.features||a;var r=o5(a,a.objects[Object.keys(a.objects)[0]]).features;return l?l(r):r}function kg(a){var l=a.type==="Topology";if(!l)return null;var o=fg(a,a.objects[Object.keys(a.objects)[0]],function(s,d){return s===d}),r=fg(a,a.objects[Object.keys(a.objects)[0]],function(s,d){return s!==d});return{outline:o,borders:r}}function KS(a,l,o){return a&&l?{outline:Yi(Yi({},a),{},{rsmKey:"outline",svgPath:o(a)}),borders:Yi(Yi({},l),{},{rsmKey:"borders",svgPath:o(l)})}:{}}function JS(a,l){return a?a.map(function(o,r){return Yi(Yi({},o),{},{rsmKey:"geo-".concat(r),svgPath:l(o)})}):[]}function WS(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:30,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:30,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.5,r=Array.isArray(o)?o:[o,o],s=a/2*r[0],d=l/2*r[1];return"M".concat(0,",",0," Q",-a/2-s,",").concat(-l/2+d," ").concat(-a,",").concat(-l)}function $S(a){return typeof a=="string"}function FS(a){var l=a.geography,o=a.parseGeographies,r=T.useContext(Tn),s=r.path,d=T.useState({}),h=xe(d,2),p=h[0],v=h[1];T.useEffect(function(){(typeof window>"u"?"undefined":Qf(window))!=="undefined"&&l&&($S(l)?QS(l).then(function(w){w&&v({geographies:Og(w,o),mesh:kg(w)})}):v({geographies:Og(l,o),mesh:kg(l)}))},[l,o]);var y=T.useMemo(function(){var w=p.mesh||{},N=KS(w.outline,w.borders,s);return{geographies:JS(p.geographies,s),outline:N.outline,borders:N.borders}},[p,s]),g=y.geographies,x=y.outline,S=y.borders;return{geographies:g,outline:x,borders:S}}var IS=["geography","children","parseGeographies","className"],bd=T.forwardRef(function(a,l){var o=a.geography,r=a.children,s=a.parseGeographies,d=a.className,h=d===void 0?"":d,p=dn(a,IS),v=T.useContext(Tn),y=v.path,g=v.projection,x=FS({geography:o,parseGeographies:s}),S=x.geographies,w=x.outline,N=x.borders;return ce.createElement("g",He({ref:l,className:"rsm-geographies ".concat(h)},p),S&&S.length>0&&r({geographies:S,outline:w,borders:N,path:y,projection:g}))});bd.displayName="Geographies";bd.propTypes={geography:$.oneOfType([$.string,$.object,$.array]),children:$.func,parseGeographies:$.func,className:$.string};var PS=["geography","onMouseEnter","onMouseLeave","onMouseDown","onMouseUp","onFocus","onBlur","style","className"],Sd=T.forwardRef(function(a,l){var o=a.geography,r=a.onMouseEnter,s=a.onMouseLeave,d=a.onMouseDown,h=a.onMouseUp,p=a.onFocus,v=a.onBlur,y=a.style,g=y===void 0?{}:y,x=a.className,S=x===void 0?"":x,w=dn(a,PS),N=T.useState(!1),B=xe(N,2),q=B[0],L=B[1],Z=T.useState(!1),O=xe(Z,2),U=O[0],Q=O[1];function K(tt){Q(!0),r&&r(tt)}function W(tt){Q(!1),q&&L(!1),s&&s(tt)}function I(tt){Q(!0),p&&p(tt)}function at(tt){Q(!1),q&&L(!1),v&&v(tt)}function ht(tt){L(!0),d&&d(tt)}function P(tt){L(!1),h&&h(tt)}return ce.createElement("path",He({ref:l,tabIndex:"0",className:"rsm-geography ".concat(S),d:o.svgPath,onMouseEnter:K,onMouseLeave:W,onFocus:I,onBlur:at,onMouseDown:ht,onMouseUp:P,style:g[q||U?q?"pressed":"hover":"default"]},w))});Sd.displayName="Geography";Sd.propTypes={geography:$.object,onMouseEnter:$.func,onMouseLeave:$.func,onMouseDown:$.func,onMouseUp:$.func,onFocus:$.func,onBlur:$.func,style:$.object,className:$.string};var tw=T.memo(Sd),ew=["fill","stroke","step","className"],wd=T.forwardRef(function(a,l){var o=a.fill,r=o===void 0?"transparent":o,s=a.stroke,d=s===void 0?"currentcolor":s,h=a.step,p=h===void 0?[10,10]:h,v=a.className,y=v===void 0?"":v,g=dn(a,ew),x=T.useContext(Tn),S=x.path;return ce.createElement("path",He({ref:l,d:S($f().step(p)()),fill:r,stroke:d,className:"rsm-graticule ".concat(y)},g))});wd.displayName="Graticule";wd.propTypes={fill:$.string,stroke:$.string,step:$.array,className:$.string};T.memo(wd);var nw=["value"],aw=T.createContext(),iw={x:0,y:0,k:1,transformString:"translate(0 0) scale(1)"},uv=function(l){var o=l.value,r=o===void 0?iw:o,s=dn(l,nw);return ce.createElement(aw.Provider,He({value:r},s))};uv.propTypes={x:$.number,y:$.number,k:$.number,transformString:$.string};function lw(a){var l=a.center,o=a.filterZoomEvent,r=a.onMoveStart,s=a.onMoveEnd,d=a.onMove,h=a.translateExtent,p=h===void 0?[[-1/0,-1/0],[1/0,1/0]]:h,v=a.scaleExtent,y=v===void 0?[1,8]:v,g=a.zoom,x=g===void 0?1:g,S=T.useContext(Tn),w=S.width,N=S.height,B=S.projection,q=xe(l,2),L=q[0],Z=q[1],O=T.useState({x:0,y:0,k:1}),U=xe(O,2),Q=U[0],K=U[1],W=T.useRef({x:0,y:0,k:1}),I=T.useRef(),at=T.useRef(),ht=T.useRef(!1),P=xe(p,2),tt=P[0],jt=P[1],A=xe(tt,2),E=A[0],j=A[1],C=xe(jt,2),G=C[0],J=C[1],F=xe(y,2),ct=F[0],ut=F[1];return T.useEffect(function(){var ot=Pn(I.current);function gt(Rt){!r||ht.current||r({coordinates:B.invert(Cg(w,N,Rt.transform)),zoom:Rt.transform.k},Rt)}function Mt(Rt){if(!ht.current){var _e=Rt.transform,it=Rt.sourceEvent;K({x:_e.x,y:_e.y,k:_e.k,dragging:it}),d&&d({x:_e.x,y:_e.y,zoom:_e.k,dragging:it},Rt)}}function Kt(Rt){if(ht.current){ht.current=!1;return}var _e=B.invert(Cg(w,N,Rt.transform)),it=xe(_e,2),vt=it[0],_t=it[1];W.current={x:vt,y:_t,k:Rt.transform.k},s&&s({coordinates:[vt,_t],zoom:Rt.transform.k},Rt)}function ae(Rt){return o?o(Rt):Rt?!Rt.ctrlKey&&!Rt.button:!1}var ue=DS().filter(ae).scaleExtent([ct,ut]).translateExtent([[E,j],[G,J]]).on("start",gt).on("zoom",Mt).on("end",Kt);at.current=ue,ot.call(ue)},[w,N,E,j,G,J,ct,ut,B,r,d,s,o]),T.useEffect(function(){if(!(L===W.current.x&&Z===W.current.y&&x===W.current.k)){var ot=B([L,Z]),gt=ot[0]*x,Mt=ot[1]*x,Kt=Pn(I.current);ht.current=!0,Kt.call(at.current.transform,yd.translate(w/2-gt,N/2-Mt).scale(x)),K({x:w/2-gt,y:N/2-Mt,k:x}),W.current={x:L,y:Z,k:x}}},[L,Z,x,w,N,B]),{mapRef:I,position:Q,transformString:"translate(".concat(Q.x," ").concat(Q.y,") scale(").concat(Q.k,")")}}var rw=["center","zoom","minZoom","maxZoom","translateExtent","filterZoomEvent","onMoveStart","onMove","onMoveEnd","className"],sv=T.forwardRef(function(a,l){var o=a.center,r=o===void 0?[0,0]:o,s=a.zoom,d=s===void 0?1:s,h=a.minZoom,p=h===void 0?1:h,v=a.maxZoom,y=v===void 0?8:v,g=a.translateExtent,x=a.filterZoomEvent,S=a.onMoveStart,w=a.onMove,N=a.onMoveEnd,B=a.className,q=dn(a,rw),L=T.useContext(Tn),Z=L.width,O=L.height,U=lw({center:r,filterZoomEvent:x,onMoveStart:S,onMove:w,onMoveEnd:N,scaleExtent:[p,y],translateExtent:g,zoom:d}),Q=U.mapRef,K=U.transformString,W=U.position;return ce.createElement(uv,{value:{x:W.x,y:W.y,k:W.k,transformString:K}},ce.createElement("g",{ref:Q},ce.createElement("rect",{width:Z,height:O,fill:"transparent"}),ce.createElement("g",He({ref:l,transform:K,className:"rsm-zoomable-group ".concat(B)},q))))});sv.displayName="ZoomableGroup";sv.propTypes={center:$.array,zoom:$.number,minZoom:$.number,maxZoom:$.number,translateExtent:$.arrayOf($.array),onMoveStart:$.func,onMove:$.func,onMoveEnd:$.func,className:$.string};var ow=["id","fill","stroke","strokeWidth","className"],jd=T.forwardRef(function(a,l){var o=a.id,r=o===void 0?"rsm-sphere":o,s=a.fill,d=s===void 0?"transparent":s,h=a.stroke,p=h===void 0?"currentcolor":h,v=a.strokeWidth,y=v===void 0?.5:v,g=a.className,x=g===void 0?"":g,S=dn(a,ow),w=T.useContext(Tn),N=w.path,B=T.useMemo(function(){return N({type:"Sphere"})},[N]);return ce.createElement(T.Fragment,null,ce.createElement("defs",null,ce.createElement("clipPath",{id:r},ce.createElement("path",{d:B}))),ce.createElement("path",He({ref:l,d:B,fill:d,stroke:p,strokeWidth:y,style:{pointerEvents:"none"},className:"rsm-sphere ".concat(x)},S)))});jd.displayName="Sphere";jd.propTypes={id:$.string,fill:$.string,stroke:$.string,strokeWidth:$.number,className:$.string};T.memo(jd);var cw=["coordinates","children","onMouseEnter","onMouseLeave","onMouseDown","onMouseUp","onFocus","onBlur","style","className"],Md=T.forwardRef(function(a,l){var o=a.coordinates,r=a.children,s=a.onMouseEnter,d=a.onMouseLeave,h=a.onMouseDown,p=a.onMouseUp,v=a.onFocus,y=a.onBlur,g=a.style,x=g===void 0?{}:g,S=a.className,w=S===void 0?"":S,N=dn(a,cw),B=T.useContext(Tn),q=B.projection,L=T.useState(!1),Z=xe(L,2),O=Z[0],U=Z[1],Q=T.useState(!1),K=xe(Q,2),W=K[0],I=K[1],at=q(o),ht=xe(at,2),P=ht[0],tt=ht[1];function jt(J){I(!0),s&&s(J)}function A(J){I(!1),O&&U(!1),d&&d(J)}function E(J){I(!0),v&&v(J)}function j(J){I(!1),O&&U(!1),y&&y(J)}function C(J){U(!0),h&&h(J)}function G(J){U(!1),p&&p(J)}return ce.createElement("g",He({ref:l,transform:"translate(".concat(P,", ").concat(tt,")"),className:"rsm-marker ".concat(w),onMouseEnter:jt,onMouseLeave:A,onFocus:E,onBlur:j,onMouseDown:C,onMouseUp:G,style:x[O||W?O?"pressed":"hover":"default"]},N),r)});Md.displayName="Marker";Md.propTypes={coordinates:$.array,children:$.oneOfType([$.node,$.arrayOf($.node)]),onMouseEnter:$.func,onMouseLeave:$.func,onMouseDown:$.func,onMouseUp:$.func,onFocus:$.func,onBlur:$.func,style:$.object,className:$.string};var uw=["from","to","coordinates","stroke","strokeWidth","fill","className"],fv=T.forwardRef(function(a,l){var o=a.from,r=o===void 0?[0,0]:o,s=a.to,d=s===void 0?[0,0]:s,h=a.coordinates,p=a.stroke,v=p===void 0?"currentcolor":p,y=a.strokeWidth,g=y===void 0?3:y,x=a.fill,S=x===void 0?"transparent":x,w=a.className,N=w===void 0?"":w,B=dn(a,uw),q=T.useContext(Tn),L=q.path,Z={type:"LineString",coordinates:h||[r,d]};return ce.createElement("path",He({ref:l,d:L(Z),className:"rsm-line ".concat(N),stroke:v,strokeWidth:g,fill:S},B))});fv.displayName="Line";fv.propTypes={from:$.array,to:$.array,coordinates:$.array,stroke:$.string,strokeWidth:$.number,fill:$.string,className:$.string};var sw=["subject","children","connectorProps","dx","dy","curve","className"],dv=T.forwardRef(function(a,l){var o=a.subject,r=a.children,s=a.connectorProps,d=a.dx,h=d===void 0?30:d,p=a.dy,v=p===void 0?30:p,y=a.curve,g=y===void 0?0:y,x=a.className,S=x===void 0?"":x,w=dn(a,sw),N=T.useContext(Tn),B=N.projection,q=B(o),L=xe(q,2),Z=L[0],O=L[1],U=WS(h,v,g);return ce.createElement("g",He({ref:l,transform:"translate(".concat(Z+h,", ").concat(O+v,")"),className:"rsm-annotation ".concat(S)},w),ce.createElement("path",He({d:U,fill:"transparent",stroke:"#000"},s)),r)});dv.displayName="Annotation";dv.propTypes={subject:$.array,children:$.oneOfType([$.node,$.arrayOf($.node)]),dx:$.number,dy:$.number,curve:$.number,connectorProps:$.object,className:$.string};const fw="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json",hf=[{name:"Northern",coordinates:[80.5,9],delay:0},{name:"North Central",coordinates:[80.4,8.35],delay:120},{name:"North Western",coordinates:[79.88,7.85],delay:200},{name:"Eastern",coordinates:[81.2,7.8],delay:290},{name:"Western",coordinates:[79.92,6.92],delay:360},{name:"Central",coordinates:[80.63,7.29],delay:430},{name:"Sabaragamuwa",coordinates:[80.4,6.68],delay:500},{name:"Uva",coordinates:[81.05,6.99],delay:570},{name:"Southern",coordinates:[80.55,6.1],delay:640}],dw=()=>{const a=T.useRef(null),[l,o]=T.useState(!1),[r,s]=T.useState(Array(9).fill(!1));return T.useEffect(()=>{const d=a.current;if(!d)return;const h=new IntersectionObserver(([p])=>{p.isIntersecting&&(o(!0),h.disconnect())},{threshold:.2});return h.observe(d),()=>h.disconnect()},[]),T.useEffect(()=>{if(!l)return;const d=hf.map((h,p)=>setTimeout(()=>{s(v=>{const y=[...v];return y[p]=!0,y})},400+h.delay));return()=>d.forEach(clearTimeout)},[l]),f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsxs("section",{className:"map-section",ref:a,children:[f.jsx("div",{className:"map-ambient","aria-hidden":"true"}),f.jsxs("div",{className:"map-inner",children:[f.jsxs("div",{className:"map-text-col",children:[f.jsx("p",{className:"map-eyebrow",children:"Nationwide Reach"}),f.jsxs("h2",{className:"map-title",children:["All ",f.jsx("span",{children:"9 Provinces."}),f.jsx("br",{}),"One Partner."]}),f.jsx("p",{className:"map-desc",children:"From Jaffna in the north to Matara in the south, our field teams operate across every province in Sri Lanka — giving your brand true nationwide coverage."}),f.jsx("ul",{className:"map-province-list",children:hf.map((d,h)=>f.jsxs("li",{className:`map-province-item${r[h]?" active":""}`,children:[f.jsx("span",{className:"map-province-dot"}),d.name]},h))})]}),f.jsx("div",{className:"map-svg-col",children:f.jsx("div",{className:"map-svg-wrap",children:f.jsxs(xd,{projection:"geoMercator",projectionConfig:{scale:3800,center:[80.77,7.875]},width:200,height:280,children:[f.jsx(bd,{geography:fw,children:({geographies:d})=>d.filter(h=>h.id==="144").map(h=>f.jsx(tw,{geography:h,fill:"rgba(255,255,255,0.05)",stroke:"rgba(201,169,110,0.35)",strokeWidth:.8,style:{default:{outline:"none"},hover:{outline:"none"},pressed:{outline:"none"}}},h.rsmKey))}),hf.map((d,h)=>f.jsx(Md,{coordinates:d.coordinates,children:f.jsxs("g",{style:{opacity:r[h]?1:0,transition:`opacity 0.6s ease ${d.delay}ms`},children:[f.jsx("circle",{r:10,fill:"rgba(232,127,42,0.08)",stroke:"rgba(232,127,42,0.2)",strokeWidth:.8,className:"prov-pulse",style:{animationDelay:`${h*.28}s`}}),f.jsx("circle",{r:3,fill:"#e87f2a",opacity:.9}),f.jsx("circle",{r:1.5,fill:"#f5c878"})]})},h))]})})})]})]})]})},hw=["Home","Projects","About"],mw=["Brand Activations","Mall Activations","Roadshows & SMMT","Sampling Campaigns","Selling Operations","Corporate Events","Government Activations","Promoter Deployment"],pw=()=>{const a=new Date().getFullYear(),l=o=>{document.querySelector(`[data-section="${o}"]`)?.scrollIntoView({behavior:"smooth"})};return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsxs("footer",{className:"site-footer",children:[f.jsx("div",{className:"footer-ambient","aria-hidden":"true"}),f.jsxs("div",{className:"footer-main",children:[f.jsxs("div",{children:[f.jsx("img",{src:Zg,alt:"Strabso",className:"footer-brand-logo"}),f.jsx("p",{className:"footer-brand-tagline",children:"Sri Lanka's premier on-ground brand activation agency — connecting brands with consumers nationwide since 2020."}),f.jsxs("div",{className:"footer-socials",children:[f.jsx("a",{href:"#",className:"footer-social-btn","aria-label":"Facebook",children:f.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})}),f.jsx("a",{href:"#",className:"footer-social-btn","aria-label":"Instagram",children:f.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[f.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),f.jsx("circle",{cx:"12",cy:"12",r:"4"}),f.jsx("circle",{cx:"17.5",cy:"6.5",r:"0.8",fill:"currentColor"})]})}),f.jsx("a",{href:"#",className:"footer-social-btn","aria-label":"LinkedIn",children:f.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:[f.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"}),f.jsx("circle",{cx:"4",cy:"4",r:"2"})]})})]})]}),f.jsxs("div",{children:[f.jsx("p",{className:"footer-col-title",children:"Navigation"}),f.jsx("ul",{className:"footer-nav",children:hw.map(o=>f.jsx("li",{children:f.jsx("button",{onClick:()=>l(o),children:o})},o))})]}),f.jsxs("div",{children:[f.jsx("p",{className:"footer-col-title",children:"Our Services"}),f.jsx("ul",{className:"footer-services",children:mw.map(o=>f.jsx("li",{children:o},o))})]}),f.jsxs("div",{children:[f.jsx("p",{className:"footer-col-title",children:"Contact"}),f.jsxs("ul",{className:"footer-contact-list",children:[f.jsxs("li",{className:"footer-contact-item",children:[f.jsx("span",{className:"footer-contact-icon",children:f.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:f.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.74 19.79 19.79 0 01.01 3.1 2 2 0 012 .92h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"})})}),f.jsx("span",{className:"footer-contact-text",children:f.jsx("a",{href:"tel:+94777188485",children:"0777 188 485"})})]}),f.jsxs("li",{className:"footer-contact-item",children:[f.jsx("span",{className:"footer-contact-icon",children:f.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[f.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),f.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),f.jsx("span",{className:"footer-contact-text",children:f.jsx("a",{href:"mailto:info@strabso.lk",children:"info@strabso.lk"})})]}),f.jsxs("li",{className:"footer-contact-item",children:[f.jsx("span",{className:"footer-contact-icon",children:f.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[f.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),f.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),f.jsx("span",{className:"footer-contact-text",children:"Colombo, Sri Lanka"})]})]})]})]}),f.jsxs("div",{className:"footer-bottom",children:[f.jsxs("p",{className:"footer-copy",children:["© ",a," ",f.jsx("span",{children:"Strabso"}),". All rights reserved."]}),f.jsxs("div",{className:"footer-bottom-links",children:[f.jsx("a",{href:"#",children:"Privacy Policy"}),f.jsx("a",{href:"#",children:"Terms of Service"})]})]})]})]})},Dg={hero:["hi human!","welcome :3","oo a visitor","blorp blorp","wave!","👋","hey hey"],work:["ooh shiny","this one slaps","fav project","art!","cool one","they made this :)","I helped","good taste"],about:["that's us!","nice humans","they feed me","two humans + me","we're a team","yawn","cozy"],contact:["say hiii!","they bite. jk.","send a message!","be friends?","don't be shy","mailbox time","✉ ✉ ✉"],default:["blorp","...","*hum*","★",":3","oo"]},Rg=["<3","yay!","hehe","blorp!",":3","more!","teehee","♥"],Lg=["ooh shiny","cool one","they made this :)","art!","good taste"],Bg=["ooh","click it!","what's this?","go on","press it!"],Ug=["wheee","slow down!","where we going?","zoom!"],Hg="hi! :3",qg=["aw, leaving already?","come back soon! :)","bye human!! 👋","don't forget about me!","thanks for petting me 💜"],Yg={1:"first one!",10:"we friends now :)",50:"you really like me huh",100:"I'd die for u"},Wo=()=>({x:window.innerWidth-120,y:window.innerHeight-120}),Gg=()=>{const a=new Date;return`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`},gw=({blorpPos:a,onCollect:l})=>{const[o]=T.useState(()=>({x:140+Math.random()*(window.innerWidth-280-40),y:140+Math.random()*(window.innerHeight-280-40)})),[r,s]=T.useState(o),[d,h]=T.useState(!1),p=T.useRef({mx:0,my:0,ox:0,oy:0}),v=T.useCallback((y,g)=>{const x=a.x+32,S=a.y+32;Math.hypot(y-x,g-S)<64?l():s(o)},[a,l,o]);return T.useEffect(()=>{if(!d)return;const y=x=>{s({x:p.current.ox+x.clientX-p.current.mx,y:p.current.oy+x.clientY-p.current.my})},g=x=>{h(!1),v(p.current.ox+x.clientX-p.current.mx+20,p.current.oy+x.clientY-p.current.my+20)};return window.addEventListener("mousemove",y),window.addEventListener("mouseup",g),()=>{window.removeEventListener("mousemove",y),window.removeEventListener("mouseup",g)}},[d,v]),f.jsx("div",{className:`blorp-treat${d?" blorp-treat-drag":""}`,style:{left:r.x,top:r.y},onMouseDown:y=>{y.preventDefault(),h(!0),p.current={mx:y.clientX,my:y.clientY,ox:r.x,oy:r.y}},onTouchEnd:()=>l(),onClick:()=>l(),role:"button",tabIndex:0,"aria-label":"Daily treat — drag to Blorp or click!",onKeyDown:y=>y.key==="Enter"&&l(),children:f.jsxs("svg",{viewBox:"0 0 16 16",shapeRendering:"crispEdges",width:"40",height:"40",children:[f.jsx("rect",{x:"3",y:"4",width:"10",height:"8",fill:"#ff9b6a"}),f.jsx("rect",{x:"2",y:"5",width:"1",height:"6",fill:"#ff9b6a"}),f.jsx("rect",{x:"13",y:"5",width:"1",height:"6",fill:"#ff9b6a"}),f.jsx("rect",{x:"4",y:"3",width:"8",height:"1",fill:"#ff9b6a"}),f.jsx("rect",{x:"4",y:"12",width:"8",height:"1",fill:"#ff9b6a"}),f.jsx("rect",{x:"3",y:"4",width:"10",height:"2",fill:"#ff5d8f"}),f.jsx("rect",{x:"2",y:"5",width:"1",height:"1",fill:"#ff5d8f"}),f.jsx("rect",{x:"13",y:"5",width:"1",height:"1",fill:"#ff5d8f"}),f.jsx("rect",{x:"7",y:"7",width:"2",height:"2",fill:"#faf8f3"}),f.jsx("rect",{x:"5",y:"4",width:"1",height:"1",fill:"#fff066"}),f.jsx("rect",{x:"9",y:"4",width:"1",height:"1",fill:"#6b3eff"}),f.jsx("rect",{x:"11",y:"5",width:"1",height:"1",fill:"#06d6a0"})]})})},vw=()=>{const[a,l]=T.useState(()=>{try{return localStorage.removeItem("blorp-affection"),localStorage.removeItem("blorp-seen-tutorial"),Math.max(0,parseInt(localStorage.getItem("blorp-pet-count")??"0",10)||0)}catch{return 0}}),o=T.useRef(Wo()),r=T.useRef(Wo()),s=T.useRef(Wo()),[d,h]=T.useState(r.current);T.useEffect(()=>{const it=()=>{o.current=Wo()};return window.addEventListener("resize",it),()=>window.removeEventListener("resize",it)},[]);const p=T.useRef({x:0,y:0}),v=T.useRef(Date.now()),[y,g]=T.useState({px:0,py:0}),[x,S]=T.useState("hero"),[w,N]=T.useState(!1),[B,q]=T.useState(!1),[L,Z]=T.useState(!1),[O,U]=T.useState(!1),[Q,K]=T.useState(!1),W=T.useRef(!1);T.useEffect(()=>{W.current=w},[w]);const[I,at]=T.useState(null),ht=T.useRef(0),P=T.useRef(null),tt=T.useCallback((it,vt=2600)=>{const _t=++ht.current;at({text:it,key:_t}),P.current&&clearTimeout(P.current),P.current=setTimeout(()=>{at(Tt=>Tt?.key===_t?null:Tt)},vt)},[]),[jt,A]=T.useState([]),E=T.useRef(0),j=T.useCallback((it=3)=>{const{x:vt,y:_t}=r.current,Tt=Array.from({length:it},()=>({id:E.current++,x:vt+8+Math.random()*48,y:_t+4+Math.random()*24}));A(kt=>[...kt,...Tt]),setTimeout(()=>A(kt=>kt.filter(Vt=>!Tt.some(Yt=>Yt.id===Vt.id))),1600)},[]),[C,G]=T.useState([]),J=T.useRef(0),[F,ct]=T.useState(!1),[ut,ot]=T.useState(!1);T.useEffect(()=>{const it=5e3+Math.random()*5e3,vt=setTimeout(()=>{try{localStorage.getItem("blorp-last-treat-date")!==Gg()&&ct(!0)}catch{}},it);return()=>clearTimeout(vt)},[]);const gt=T.useCallback(()=>{ct(!1);try{localStorage.setItem("blorp-last-treat-date",Gg())}catch{}K(!0),setTimeout(()=>K(!1),1e3),j(8),tt("TREAT DAY!! 🍪",3200),ot(!0),setTimeout(()=>ot(!1),3600)},[j,tt]);T.useEffect(()=>{const it={Home:"hero",Projects:"work",About:"about",Contact:"contact"},vt=document.querySelectorAll("[data-section]");if(!vt.length)return;const _t=new Map,Tt=new IntersectionObserver(kt=>{kt.forEach(Yt=>_t.set(Yt.target,Yt.intersectionRatio));let Vt={ratio:0,section:"hero"};_t.forEach((Yt,Se)=>{const Cn=it[Se.dataset.section??""];Cn&&Yt>Vt.ratio&&(Vt={ratio:Yt,section:Cn})}),Vt.ratio>0&&S(Vt.section)},{threshold:[0,.1,.25,.5,.75,1]});return vt.forEach(kt=>Tt.observe(kt)),()=>Tt.disconnect()},[]),T.useEffect(()=>{const it=vt=>{p.current={x:vt.clientX,y:vt.clientY},v.current=Date.now(),W.current&&(N(!1),tt(Hg,2e3));const _t=r.current.x+32,Tt=r.current.y+32,kt=vt.clientX-_t,Vt=vt.clientY-Tt,Yt=Math.atan2(Vt,kt),Se=Math.min(Math.hypot(kt,Vt)/280,1);g({px:Math.round(Math.cos(Yt)*Se),py:Math.round(Math.sin(Yt)*Se)})};return window.addEventListener("mousemove",it,{passive:!0}),()=>window.removeEventListener("mousemove",it)},[tt]),T.useEffect(()=>{const it=setInterval(()=>{Date.now()-v.current>6e3&&!W.current&&(s.current={...o.current},setTimeout(()=>{!W.current&&Date.now()-v.current>6e3&&N(!0)},2500))},2e3);return()=>clearInterval(it)},[]),T.useEffect(()=>{if(!w){G([]);return}const it=setInterval(()=>{const vt=J.current++,_t=r.current.x+50+Math.random()*18,Tt=r.current.y-6;G(kt=>[...kt.slice(-6),{id:vt,x:_t,y:Tt}]),setTimeout(()=>G(kt=>kt.filter(Vt=>Vt.id!==vt)),2300)},1600);return()=>clearInterval(it)},[w]),T.useEffect(()=>{const it=()=>{if(W.current)return;const _t=o.current,Tt=Math.random(),kt=window.innerWidth-64,Vt=window.innerHeight-64;if(Tt<.6){const Yt=Math.random()*Math.PI*2,Se=Math.random()*200;s.current={x:Math.max(40,Math.min(kt-40,_t.x+Math.cos(Yt)*Se)),y:Math.max(40,Math.min(Vt-40,_t.y+Math.sin(Yt)*Se))}}else Tt<.85?s.current={x:80+Math.random()*(kt-160),y:80+Math.random()*(Vt-160)}:p.current.x>0&&(s.current={x:Math.max(40,Math.min(kt-40,p.current.x-32+(Math.random()-.5)*130)),y:Math.max(40,Math.min(Vt-40,p.current.y-32+(Math.random()-.5)*130))})},vt=setInterval(it,4e3);return setTimeout(it,800),()=>clearInterval(vt)},[]),T.useEffect(()=>{let it;const vt=()=>{const{x:_t,y:Tt}=r.current,{x:kt,y:Vt}=s.current,Yt=x==="about"?.025:.04,Se=_t+(kt-_t)*Yt,Cn=Tt+(Vt-Tt)*Yt;Math.abs(Se-_t)>.3&&q(Se<_t),r.current={x:Se,y:Cn},h({x:Se,y:Cn}),it=requestAnimationFrame(vt)};return it=requestAnimationFrame(vt),()=>cancelAnimationFrame(it)},[x]),T.useEffect(()=>{const vt=setInterval(()=>{const _t=r.current.x+32,Tt=r.current.y+32;let kt=!1;document.querySelectorAll(".pc-card").forEach(Vt=>{const Yt=Vt.getBoundingClientRect();Math.hypot(_t-(Yt.left+Yt.width/2),Tt-(Yt.top+Yt.height/2))<220&&(kt=!0)}),U(kt),kt&&Math.random()<.22&&tt(Lg[Math.floor(Math.random()*Lg.length)])},2e3);return()=>clearInterval(vt)},[tt]),T.useEffect(()=>{const it=setInterval(()=>{if(!W.current&&Math.random()<.4){const vt=Dg[x]??Dg.default;tt(vt[Math.floor(Math.random()*vt.length)])}},3e3);return()=>clearInterval(it)},[tt,x]),T.useEffect(()=>{let it=null;const vt=Tt=>{Tt.target.closest("a, button, .pc-card")&&(it=setTimeout(()=>{Math.random()<.3&&tt(Bg[Math.floor(Math.random()*Bg.length)])},500))},_t=()=>{it&&(clearTimeout(it),it=null)};return document.addEventListener("mouseover",vt,{passive:!0}),document.addEventListener("mouseout",_t,{passive:!0}),()=>{document.removeEventListener("mouseover",vt),document.removeEventListener("mouseout",_t),it&&clearTimeout(it)}},[tt]),T.useEffect(()=>{let it=window.scrollY,vt=Date.now(),_t=!1;const Tt=()=>{const kt=Date.now(),Vt=Math.abs(window.scrollY-it),Yt=kt-vt;Yt>0&&Vt/Yt*1e3>800&&!_t&&!W.current&&(tt(Ug[Math.floor(Math.random()*Ug.length)]),_t=!0,setTimeout(()=>{_t=!1},4e3)),it=window.scrollY,vt=kt};return window.addEventListener("scroll",Tt,{passive:!0}),()=>window.removeEventListener("scroll",Tt)},[tt]),T.useEffect(()=>{const it=vt=>{if(!(vt.clientY>0)){try{if(sessionStorage.getItem("blorp-said-bye")||parseInt(localStorage.getItem("blorp-pet-count")??"0",10)===0)return;sessionStorage.setItem("blorp-said-bye","1")}catch{return}s.current={x:window.innerWidth/2-32,y:window.innerHeight*.28},setTimeout(()=>{tt(qg[Math.floor(Math.random()*qg.length)],3200),j(5)},900),setTimeout(()=>{s.current={...o.current}},4200)}};return document.documentElement.addEventListener("mouseleave",it),()=>document.documentElement.removeEventListener("mouseleave",it)},[tt,j]);const Mt=T.useCallback(it=>{if(it.stopPropagation(),W.current){N(!1),tt(Hg,2e3);return}const vt=a+1;l(vt);try{localStorage.setItem("blorp-pet-count",String(vt))}catch{}j(),Z(!0),setTimeout(()=>Z(!1),700),tt(Yg[vt]??Rg[Math.floor(Math.random()*Rg.length)],Yg[vt]?3500:2600)},[a,j,tt]),Kt=["blorp-mascot",w&&"blorp-sleeping",(L||Q)&&"blorp-wiggle",O&&!w&&"blorp-excited"].filter(Boolean).join(" "),ae=12+y.px,ue=17+y.py,Rt=18+y.px,_e=17+y.py;return f.jsxs(f.Fragment,{children:[F&&f.jsx(gw,{blorpPos:d,onCollect:gt}),ut&&f.jsx("div",{className:"blorp-toast",role:"status",children:"★ daily treat collected — come back tomorrow!"}),f.jsxs("div",{className:Kt,style:{left:Math.round(d.x),top:Math.round(d.y)},onClick:Mt,role:"img","aria-label":"Blorp — click to pet!",title:"Click to pet Blorp!",children:[f.jsx("div",{className:"blorp-mascot-body",style:{transform:`scaleX(${B?-1:1})`},"aria-hidden":"true",children:f.jsxs("svg",{viewBox:"0 0 32 32",shapeRendering:"crispEdges",style:{width:"100%",height:"100%"},children:[f.jsx("rect",{x:"8",y:"14",width:"16",height:"12",fill:"#5b2fd4"}),f.jsx("rect",{x:"6",y:"16",width:"2",height:"8",fill:"#5b2fd4"}),f.jsx("rect",{x:"24",y:"16",width:"2",height:"8",fill:"#5b2fd4"}),f.jsx("rect",{x:"10",y:"12",width:"12",height:"2",fill:"#5b2fd4"}),f.jsx("rect",{x:"12",y:"10",width:"8",height:"2",fill:"#5b2fd4"}),f.jsx("rect",{x:"10",y:"14",width:"2",height:"4",fill:"#7a52e8"}),f.jsx("rect",{x:"12",y:"12",width:"2",height:"2",fill:"#7a52e8"}),f.jsx("rect",{x:"13",y:"6",width:"2",height:"4",fill:"#5b2fd4"}),f.jsx("rect",{x:"17",y:"4",width:"2",height:"6",fill:"#5b2fd4"}),f.jsx("rect",{x:"12",y:"4",width:"4",height:"2",fill:"#e87f2a"}),f.jsx("rect",{x:"16",y:"2",width:"4",height:"2",fill:"#e87f2a"}),w?f.jsxs(f.Fragment,{children:[f.jsx("rect",{x:"11",y:"19",width:"4",height:"1",fill:"#7a52e8"}),f.jsx("rect",{x:"17",y:"19",width:"4",height:"1",fill:"#7a52e8"})]}):f.jsxs(f.Fragment,{children:[f.jsx("rect",{x:"11",y:"16",width:"4",height:"4",fill:"white"}),f.jsx("rect",{x:"17",y:"16",width:"4",height:"4",fill:"white"}),f.jsx("rect",{x:ae,y:ue,width:"2",height:"2",fill:"#06060f"}),f.jsx("rect",{x:Rt,y:_e,width:"2",height:"2",fill:"#06060f"})]}),w?f.jsx("rect",{x:"13",y:"22",width:"6",height:"1",fill:"#5b2fd4"}):f.jsxs(f.Fragment,{children:[f.jsx("rect",{x:"13",y:"22",width:"2",height:"2",fill:"#06060f"}),f.jsx("rect",{x:"17",y:"22",width:"2",height:"2",fill:"#06060f"}),f.jsx("rect",{x:"15",y:"23",width:"2",height:"1",fill:"#06060f"})]}),f.jsx("rect",{x:"10",y:"26",width:"4",height:"2",fill:"#3d1d9e"}),f.jsx("rect",{x:"18",y:"26",width:"4",height:"2",fill:"#3d1d9e"}),f.jsx("rect",{x:"4",y:"10",width:"1",height:"1",fill:"#c9a96e",opacity:"0.75"}),f.jsx("rect",{x:"27",y:"8",width:"1",height:"1",fill:"#c9a96e",opacity:"0.75"}),f.jsx("rect",{x:"3",y:"21",width:"1",height:"1",fill:"#e87f2a",opacity:"0.5"}),f.jsx("rect",{x:"28",y:"20",width:"1",height:"1",fill:"#e87f2a",opacity:"0.4"})]})}),I&&f.jsx("div",{className:"blorp-bubble",role:"status","aria-live":"polite",children:I.text},I.key)]}),jt.map(it=>f.jsx("div",{className:"blorp-heart",style:{left:it.x,top:it.y},"aria-hidden":"true",children:"♥"},it.id)),C.map(it=>f.jsx("div",{className:"blorp-z",style:{left:it.x,top:it.y},"aria-hidden":"true",children:"z"},it.id))]})},Xg=80,Vg=20,yw=()=>{const[a,l]=T.useState("Home"),o=T.useRef(null),r=T.useRef(null),s=T.useRef(null),d=T.useRef(null),h=T.useMemo(()=>({Home:o,Projects:r,About:s,Contact:d}),[]),p=v=>{const y=h[v];if(y&&y.current){const x=y.current.getBoundingClientRect().top+window.pageYOffset-Xg-Vg;window.scrollTo({top:x,behavior:"smooth"})}};return T.useEffect(()=>{const v=()=>{const y=window.scrollY+Xg+Vg+100,g=Object.entries(h);for(let x=g.length-1;x>=0;x--){const[S,w]=g[x];if(w.current){const N=w.current.offsetTop;if(y>=N){l(S);break}}}};return window.addEventListener("scroll",v),v(),()=>window.removeEventListener("scroll",v)},[h]),f.jsxs(f.Fragment,{children:[f.jsx(vw,{}),f.jsx(Wy,{activeTab:a,onTabClick:p}),f.jsxs("main",{className:"sections-container",children:[f.jsx("section",{ref:o,"data-section":"Home",className:"full-section",children:f.jsx(Ox,{})}),f.jsx("section",{ref:r,"data-section":"Projects",className:"full-section",children:f.jsx(Ux,{})}),f.jsx("section",{ref:s,"data-section":"About",className:"full-section",children:f.jsx(Hx,{})}),f.jsx("section",{ref:d,"data-section":"Contact",className:"full-section",children:f.jsx(qx,{})})]}),f.jsx(dw,{}),f.jsx(pw,{})]})};function xw(){return f.jsx(Jy,{children:f.jsx(Uy,{basename:"/Strabso",children:f.jsx("div",{className:"App",children:f.jsx(Hy,{children:f.jsx(qy,{path:"/",element:f.jsx(yw,{})})})})})})}Ky.createRoot(document.getElementById("root")).render(f.jsx(T.StrictMode,{children:f.jsx(xw,{})}));
