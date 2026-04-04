import{j as e,m as W}from"./motion-DNKZ1EBc.js";import{r as s,B as _,R as J,c as Q}from"./react-vendor-GX_tzJy5.js";import{c as ee}from"./three-BLQzbxjd.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const t of a.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&c(t)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();class te extends s.Component{constructor(i){super(i),this.state={hasError:!1}}static getDerivedStateFromError(i){return{hasError:!0,error:i}}render(){return this.state.hasError?e.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#0a0a0f",color:"#ffffff",fontFamily:"Outfit, sans-serif",gap:"16px",padding:"24px",textAlign:"center"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:400,margin:0},children:"Something went wrong"}),e.jsx("p",{style:{color:"rgba(255,255,255,0.5)",margin:0},children:"Please refresh the page to continue."}),e.jsx("button",{onClick:()=>window.location.reload(),style:{marginTop:"8px",padding:"12px 32px",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.2)",background:"rgba(255,255,255,0.06)",color:"#ffffff",cursor:"pointer",fontSize:"14px",letterSpacing:"1px"},children:"Refresh"})]}):this.props.children}}const P=[{color:"#ffffff",weight:30},{color:"#fff8f0",weight:25},{color:"#fffaf5",weight:20},{color:"#ffeedd",weight:10},{color:"#ffddbb",weight:5},{color:"#ffcc99",weight:3},{color:"#ffaa77",weight:2},{color:"#aaccff",weight:3},{color:"#99bbff",weight:2}],re=()=>{const r=P.reduce((o,c)=>o+c.weight,0);let i=Math.random()*r;for(const o of P)if(i-=o.weight,i<=0)return o.color;return P[0].color},O=(r,i,o)=>Array.from({length:r},()=>{const c=Math.pow(Math.random(),2),n=i[0]+c*(i[1]-i[0]),a=re(),t=o[0]+Math.random()*(o[1]-o[0]),d=3+Math.random()*6;return{size:n,color:a,top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,baseOpacity:t,peakOpacity:Math.min(1,t+.2+Math.random()*.3),twinkleDuration:d,twinkleDelay:Math.random()*d,isBright:n>i[1]*.7,isBrilliant:n>i[1]*.9&&Math.random()>.5}}),oe=r=>Array.from({length:r},()=>({top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,driftX:(Math.random()-.5)*100,driftY:-50-Math.random()*150,duration:20+Math.random()*40,opacity:.2+Math.random()*.3,delay:Math.random()*30})),ie=({size:r,color:i,top:o,left:c,baseOpacity:n,peakOpacity:a,twinkleDuration:t,twinkleDelay:d,isBright:p,isBrilliant:u})=>e.jsxs("div",{className:"star",style:{position:"absolute",width:r,height:r,top:o,left:c,background:i,borderRadius:"50%",boxShadow:`0 0 ${r*2}px ${r*.5}px ${i}`,animation:`twinkle ${t}s ease-in-out infinite`,animationDelay:`${d}s`,"--base-opacity":n,"--peak-opacity":a,"--star-color":i},children:[p&&e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"300%",height:"300%",background:`radial-gradient(circle, ${i} 0%, transparent 70%)`,opacity:.4,borderRadius:"50%"}}),u&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:1,height:20,background:`linear-gradient(to bottom, transparent, ${i}, transparent)`,opacity:.6}}),e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:20,height:1,background:`linear-gradient(to right, transparent, ${i}, transparent)`,opacity:.6}})]})]}),ne=({top:r,left:i,driftX:o,driftY:c,duration:n,opacity:a,delay:t})=>e.jsx("div",{className:"dust",style:{position:"absolute",width:1,height:1,top:r,left:i,background:"rgba(255,255,255,0.3)",borderRadius:"50%",animation:`floatDust ${n}s linear infinite`,animationDelay:`${t}s`,"--dust-x":`${o}px`,"--dust-y":`${c}px`,"--dust-opacity":a}}),H=({stars:r,animationDuration:i})=>e.jsx("div",{style:{position:"absolute",width:"100%",height:"200%",top:0,left:0,animation:`verticalDrift ${i}s linear infinite`},children:r.map((o,c)=>e.jsx(ie,{...o},c))}),ae=({className:r="",style:i={}})=>{const o=s.useMemo(()=>O(10,[.5,1],[.2,.5]),[]),c=s.useMemo(()=>O(10,[1,1.5],[.4,.7]),[]),n=s.useMemo(()=>O(10,[1.5,2],[.6,.9]),[]),a=s.useMemo(()=>oe(30),[]);return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:r,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",background:"transparent",zIndex:0,pointerEvents:"none",...i},children:[e.jsx("div",{style:{position:"absolute",width:"100%",height:"100%"}}),[{width:600,height:400,top:"10%",left:"60%",color:"rgba(100, 50, 120, 0.15)",delay:0},{width:500,height:300,top:"50%",left:"10%",color:"rgba(30, 60, 100, 0.12)",delay:7},{width:400,height:500,top:"60%",right:"20%",color:"rgba(80, 40, 80, 0.1)",delay:14}].map((t,d)=>e.jsx("div",{style:{position:"absolute",width:t.width,height:t.height,top:t.top,left:t.left,right:t.right,borderRadius:"50%",filter:"blur(80px)",background:`radial-gradient(ellipse, ${t.color} 0%, transparent 70%)`,animation:"nebulaPulse 20s ease-in-out infinite",animationDelay:`${t.delay}s`}},d)),e.jsx(H,{stars:o,animationDuration:120}),e.jsx(H,{stars:c,animationDuration:80}),e.jsx(H,{stars:n,animationDuration:50}),a.map((t,d)=>e.jsx(ne,{...t},d))]})]})},se="/Strabso/assets/logo-CaQ3yAJ2.png",ce=({activeTab:r,onTabClick:i})=>{const o=[{name:"Home"},{name:"Projects"},{name:"About"}];return e.jsx("nav",{className:"glass-navbar",children:e.jsx("div",{className:"navbar-wrapper",children:e.jsxs("div",{className:"navbar-container",children:[e.jsx("a",{href:"/",className:"navbar-logo",children:e.jsx("div",{className:"logo-icon",children:e.jsx("img",{src:se,alt:"Company Logo"})})}),e.jsx("ul",{className:"nav-links",children:o.map(c=>e.jsx("li",{className:"nav-item",children:e.jsxs("button",{onClick:()=>i(c.name),className:`nav-link ${r===c.name?"active":""}`,"aria-current":r===c.name?"page":void 0,children:[c.name,r===c.name&&e.jsx("div",{className:"nav-link-pulse"})]})},c.name))})]})})})},le="/Strabso/assets/coca_cola-BljjUpwk.webp",de="/Strabso/assets/lankasoy-BJQDjWpB.png",pe="/Strabso/assets/hemas-DgYjRGl9.png",me="/Strabso/assets/fems-DxxjrCp1.jpg",he="/Strabso/assets/vivya-p3JKc2hI.jpeg",ge="/Strabso/assets/uswaththe-CyuNi98c.png",xe="/Strabso/assets/zesta.jpg-Gkr9D_TE.webp",ue="/Strabso/assets/vibe-BjwuLHQj.jpeg",fe="/Strabso/assets/hnb-DekpbSuN.png",ve="/Strabso/assets/maliban-glbHtWj_.png",be="/Strabso/assets/watawala-Cmu5B7fW.jpg",T=[{id:1,image:le,name:"Coca-Cola",category:"Beverages",description:"On-ground brand activations and sampling campaigns driving nationwide consumer engagement.",color:"#EF4444"},{id:2,image:pe,name:"Hemas",category:"Healthcare & FMCG",description:"Promoter deployment and retail activation programs across all 9 provinces of Sri Lanka.",color:"#3B82F6"},{id:3,image:ve,name:"Maliban",category:"Biscuits & FMCG",description:"Nationwide sampling and selling operations delivering measurable sales uplift.",color:"#F97316"},{id:4,image:xe,name:"Zesta",category:"Tea & Beverages",description:"Mall activations and roadshows bringing the Zesta brand to communities island-wide.",color:"#10B981"},{id:5,image:be,name:"Watawala",category:"Tea & Beverages",description:"Strategic brand activation campaigns building consumer loyalty across key markets.",color:"#22C55E"},{id:6,image:fe,name:"HNB",category:"Banking & Finance",description:"Corporate event management and institutional activation projects across Sri Lanka.",color:"#DC2626"},{id:7,image:de,name:"Lankasoy",category:"FMCG",description:"Product sampling and community engagement driving trial and brand awareness.",color:"#84CC16"},{id:8,image:ue,name:"Vibe",category:"Lifestyle",description:"High-energy brand activations and experiential events connecting with youth audiences.",color:"#06B6D4"},{id:9,image:me,name:"Fems",category:"Consumer Goods",description:"Targeted sampling campaigns and in-store promoter deployment for maximum reach.",color:"#EC4899"},{id:10,image:he,name:"Vivya",category:"Lifestyle & Beauty",description:"Mall and SMMT activations creating memorable brand touchpoints with consumers.",color:"#8B5CF6"},{id:11,image:ge,name:"Uswaththe",category:"Natural Products",description:"Grassroots roadshow campaigns building authentic brand connections across communities.",color:"#F59E0B"}],L=T.length,E=360/L,ye=.04,je=.08,we=.13,ke=.9,U=({onClick:r,color:i,label:o,children:c})=>{const[n,a]=s.useState(!1);return e.jsx("button",{onClick:r,onMouseDown:t=>t.stopPropagation(),onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),"aria-label":o,style:{width:48,height:48,borderRadius:"50%",border:`1px solid ${n&&i?`${i}55`:"rgba(255,255,255,0.14)"}`,background:n&&i?`${i}20`:"rgba(255,255,255,0.05)",color:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(12px)",transition:"border-color 0.3s ease, background 0.3s ease",flexShrink:0},children:c})},Ce=()=>{const[r,i]=s.useState(!1),[o,c]=s.useState(!1),[n,a]=s.useState(0),[t,d]=s.useState(!1),p=s.useRef(0),u=s.useRef(0),g=s.useRef(null),j=s.useRef(!1),k=s.useRef(!1),w=s.useRef(0),M=s.useRef(0),I=s.useRef(0),v=s.useRef(0),y=s.useRef(null),l=s.useRef(null),h=s.useRef(null),C=r?260:o?360:440,A=r?140:o?180:210,N=r?155:o?200:230;s.useEffect(()=>{const m=()=>{i(window.innerWidth<=767),c(window.innerWidth>767&&window.innerWidth<=1024)};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]),s.useEffect(()=>{const m=h.current;if(!m)return;const b=f=>{j.current&&(f.preventDefault(),$(f.touches[0].clientX))};return m.addEventListener("touchmove",b,{passive:!1}),()=>m.removeEventListener("touchmove",b)},[]),s.useEffect(()=>{const m=()=>{const f=(p.current%360+360)%360;let z=Math.round(f/E)*E-f;z>180&&(z-=360),z<-180&&(z+=360),g.current=p.current+z,u.current=0},b=()=>{if(!j.current)if(g.current!==null){const G=g.current-p.current;Math.abs(G)<je?(p.current=g.current,g.current=null):p.current+=G*we}else Math.abs(u.current)>.05?(u.current*=ke,p.current+=u.current,Math.abs(u.current)<=.05&&m()):k.current||(p.current-=ye);l.current&&(l.current.style.transform=`rotateY(${p.current}deg)`);const f=(p.current%360+360)%360,z=Math.round(f/E)%L,D=(L-z)%L;D!==v.current&&(v.current=D,a(D)),y.current=requestAnimationFrame(b)};return y.current=requestAnimationFrame(b),()=>{y.current&&cancelAnimationFrame(y.current)}},[]);const B=m=>{const b=(p.current%360+360)%360;let f=(L-m)*E-b;f>180&&(f-=360),f<-180&&(f+=360),g.current=p.current+f,u.current=0},F=()=>B((v.current+1)%L),V=()=>B((v.current-1+L)%L),Y=m=>{j.current=!0,w.current=m,M.current=Date.now(),I.current=0,u.current=0,g.current=null,d(!0)},$=m=>{if(!j.current)return;const b=m-w.current,f=Math.max(Date.now()-M.current,1);u.current=b/f*12,p.current+=b*.28,I.current+=Math.abs(b),w.current=m,M.current=Date.now()},R=()=>{j.current&&(j.current=!1,d(!1))},Z=m=>{I.current<5&&B(m)},S=T[n];return e.jsxs("div",{style:{position:"relative",width:"100%",padding:r?"40px 16px 60px":"60px 40px 80px",display:"flex",flexDirection:"column",alignItems:"center",gap:r?"32px":"44px",userSelect:"none",overflow:"hidden",fontFamily:"'Outfit', -apple-system, sans-serif"},onKeyDown:m=>{m.key==="ArrowRight"&&F(),m.key==="ArrowLeft"&&V()},tabIndex:0,"aria-label":"Brand partners carousel",children:[e.jsx("div",{style:{position:"absolute",top:"25%",left:"50%",width:r?"420px":"760px",height:r?"320px":"560px",transform:"translate(-50%, -50%)",background:`radial-gradient(ellipse, ${S?.color}22 0%, transparent 65%)`,filter:"blur(80px)",pointerEvents:"none",transition:"background 0.9s ease",zIndex:0}}),e.jsx("div",{ref:h,style:{position:"relative",width:"100%",height:N+40,display:"flex",alignItems:"center",justifyContent:"center",perspective:r?"900px":o?"1400px":"1900px",zIndex:5,cursor:t?"grabbing":"grab"},onMouseEnter:()=>{k.current=!0},onMouseLeave:()=>{k.current=!1,R()},onMouseDown:m=>Y(m.clientX),onMouseMove:m=>$(m.clientX),onMouseUp:R,onTouchStart:m=>{k.current=!0,Y(m.touches[0].clientX)},onTouchEnd:()=>{R(),k.current=!1},children:e.jsx("div",{ref:l,style:{position:"relative",width:A,height:N,transformStyle:"preserve-3d"},children:T.map((m,b)=>{const f=b===n;return e.jsxs("div",{style:{position:"absolute",inset:0,transform:`rotateY(${b*E}deg) translateZ(${C}px)`,backfaceVisibility:"hidden",borderRadius:18,overflow:"hidden",cursor:"pointer",transition:"opacity 0.5s ease, filter 0.5s ease, box-shadow 0.5s ease",opacity:f?1:.4,filter:f?"none":"brightness(0.4) saturate(0.5)",boxShadow:f?`0 0 50px ${m.color}45, 0 24px 60px rgba(0,0,0,0.65), inset 0 0 0 1.5px ${m.color}35`:"0 8px 24px rgba(0,0,0,0.5)",background:`radial-gradient(ellipse at 50% 35%, ${m.color}18 0%, rgba(10,10,18,0.97) 65%)`},onClick:()=>Z(b),children:[e.jsx("div",{style:{width:"100%",height:"100%",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",padding:36},children:e.jsx("img",{src:m.image,alt:m.name,draggable:!1,style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",filter:"drop-shadow(0 2px 10px rgba(0,0,0,0.55))"}})}),f&&e.jsx("div",{style:{position:"absolute",inset:0,borderRadius:18,border:`1.5px solid ${m.color}60`,pointerEvents:"none"}})]},m.id)})})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:14,maxWidth:480,width:"100%",zIndex:10,textAlign:"center"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,fontSize:11,letterSpacing:"3px",color:"rgba(255,255,255,0.3)"},children:[e.jsx("span",{style:{color:S?.color,fontWeight:700,fontSize:13},children:String(n+1).padStart(2,"0")}),e.jsx("span",{style:{display:"inline-block",width:28,height:1,background:"rgba(255,255,255,0.15)"}}),e.jsx("span",{children:String(L).padStart(2,"0")})]}),e.jsx("span",{style:{fontSize:10,letterSpacing:"4px",textTransform:"uppercase",color:S?.color,fontWeight:600,transition:"color 0.5s ease"},children:S?.category}),e.jsx("span",{style:{display:"block",fontSize:r?38:52,fontFamily:"'Playfair Display', Georgia, serif",fontWeight:400,color:"#ffffff",lineHeight:1.1,letterSpacing:"-0.5px",transition:"all 0.4s ease"},children:S?.name}),e.jsx("div",{style:{width:36,height:2,borderRadius:2,background:S?.color??"#ffffff",transition:"background 0.5s ease"}}),e.jsx("p",{style:{fontSize:r?13:14,color:"rgba(255,255,255,0.45)",lineHeight:1.85,margin:0,transition:"all 0.4s ease",minHeight:r?0:52},children:S?.description}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:r?14:18,marginTop:8},children:[e.jsx(U,{onClick:V,color:S?.color,label:"Previous brand",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})})}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:6},children:T.map((m,b)=>e.jsx("button",{onClick:()=>B(b),onMouseDown:f=>f.stopPropagation(),"aria-label":`Go to ${T[b].name}`,style:{width:b===n?22:6,height:6,borderRadius:3,border:"none",padding:0,cursor:"pointer",transition:"width 0.35s cubic-bezier(0.4,0,0.2,1), background 0.4s ease",background:b===n?S?.color??"#ffffff":"rgba(255,255,255,0.18)"}},b))}),e.jsx(U,{onClick:F,color:S?.color,label:"Next brand",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})})})]})]}),e.jsx("style",{children:`
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `})]})},Se="/Strabso/assets/welcome-DDtTxY2T.png",Le=(r=.1)=>{const i=s.useRef(null),[o,c]=s.useState(!1);return s.useEffect(()=>{const n=new IntersectionObserver(([a])=>{a.isIntersecting&&c(!0)},{threshold:r});return i.current&&n.observe(i.current),()=>n.disconnect()},[r]),{ref:i,isInView:o}},Ne=()=>e.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[e.jsx("circle",{cx:"24",cy:"24",r:"16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("circle",{cx:"24",cy:"24",r:"8",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("circle",{cx:"24",cy:"24",r:"3",fill:"currentColor"}),e.jsx("path",{d:"M24 4V8M24 40V44M4 24H8M40 24H44",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e.jsx("path",{d:"M38 10L35 13M13 35L10 38M38 38L35 35M13 13L10 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),Me=()=>e.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[e.jsx("rect",{x:"6",y:"16",width:"36",height:"28",rx:"2",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("path",{d:"M6 16L24 4L42 16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("rect",{x:"14",y:"28",width:"8",height:"16",rx:"1",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("rect",{x:"26",y:"24",width:"10",height:"8",rx:"1",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("path",{d:"M16 24H20M28 36H34",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),Ie=()=>e.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[e.jsx("rect",{x:"6",y:"18",width:"28",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("path",{d:"M34 24H42V32C42 33.1046 41.1046 34 40 34H34V24Z",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("circle",{cx:"14",cy:"36",r:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("circle",{cx:"30",cy:"36",r:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("path",{d:"M12 18V12L20 8L28 12V18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),ze=()=>e.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[e.jsx("path",{d:"M12 8H36C38.2091 8 40 9.79086 40 12V20L24 28L8 20V12C8 9.79086 9.79086 8 12 8Z",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("path",{d:"M8 20V36C8 38.2091 9.79086 40 12 40H36C38.2091 40 40 38.2091 40 36V20",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("circle",{cx:"24",cy:"28",r:"4",fill:"currentColor"}),e.jsx("path",{d:"M16 16H32",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),Ee=()=>e.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[e.jsx("rect",{x:"4",y:"28",width:"12",height:"16",rx:"1",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("rect",{x:"18",y:"20",width:"12",height:"24",rx:"1",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("rect",{x:"32",y:"12",width:"12",height:"32",rx:"1",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("path",{d:"M10 4L24 10L38 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e.jsx("circle",{cx:"38",cy:"8",r:"3",fill:"currentColor"})]}),Te=()=>e.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[e.jsx("rect",{x:"6",y:"12",width:"36",height:"30",rx:"3",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("path",{d:"M6 20H42",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M14 6V14M34 6V14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e.jsx("circle",{cx:"16",cy:"28",r:"2",fill:"currentColor"}),e.jsx("circle",{cx:"24",cy:"28",r:"2",fill:"currentColor"}),e.jsx("circle",{cx:"32",cy:"28",r:"2",fill:"currentColor"}),e.jsx("circle",{cx:"16",cy:"36",r:"2",fill:"currentColor"}),e.jsx("circle",{cx:"24",cy:"36",r:"2",fill:"currentColor"})]}),Be=()=>e.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[e.jsx("path",{d:"M6 20L24 8L42 20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("rect",{x:"6",y:"20",width:"36",height:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("rect",{x:"10",y:"24",width:"6",height:"16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("rect",{x:"21",y:"24",width:"6",height:"16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("rect",{x:"32",y:"24",width:"6",height:"16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("rect",{x:"6",y:"40",width:"36",height:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"})]}),We=()=>e.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"w-12 h-12",children:[e.jsx("circle",{cx:"24",cy:"14",r:"8",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("path",{d:"M12 44V38C12 33.5817 15.5817 30 20 30H28C32.4183 30 36 33.5817 36 38V44",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e.jsx("path",{d:"M36 14L44 10M36 18L44 22",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e.jsx("circle",{cx:"44",cy:"16",r:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"})]}),Ae=({service:r,onClose:i})=>(s.useEffect(()=>{const o=c=>{c.key==="Escape"&&i()};return document.addEventListener("keydown",o),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",o),document.body.style.overflow=""}},[i]),e.jsx("div",{className:"modal-backdrop",onClick:i,role:"dialog","aria-modal":"true",children:e.jsxs("div",{className:"modal-panel",style:{"--accent":r.accent},onClick:o=>o.stopPropagation(),children:[e.jsx("div",{className:"modal-glow"}),e.jsx("button",{className:"modal-close",onClick:i,"aria-label":"Close",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",width:"20",height:"20",children:e.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),e.jsxs("div",{className:"modal-header-row",children:[e.jsxs("div",{className:"modal-icon-wrapper",children:[e.jsx("div",{className:"modal-icon-ring"}),r.icon]}),e.jsxs("div",{children:[e.jsx("h2",{className:"modal-title",children:r.title}),e.jsx("div",{className:"modal-divider"})]})]}),e.jsx("p",{className:"modal-description",children:r.description}),e.jsx("div",{className:"modal-stats",children:r.stats.map((o,c)=>e.jsxs("div",{className:"modal-stat",children:[e.jsx("span",{className:"modal-stat-value",children:o.value}),e.jsx("span",{className:"modal-stat-label",children:o.label})]},c))}),e.jsxs("div",{className:"modal-highlights",children:[e.jsx("p",{className:"modal-highlights-title",children:"What's included"}),e.jsx("ul",{className:"modal-highlights-list",children:r.highlights.map((o,c)=>e.jsxs("li",{className:"modal-highlight-item",children:[e.jsx("span",{className:"modal-highlight-dot"}),o]},c))})]}),e.jsx("button",{className:"modal-cta",onClick:i,children:"Got it"})]})})),Re=({service:r,index:i,isInView:o,onExplore:c})=>{const[n,a]=s.useState(!1);return e.jsx("div",{className:"service-card",style:{"--delay":`${i*.1}s`,"--accent":r.accent},onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:e.jsxs("div",{className:`card-inner ${o?"animate-in":""}`,children:[e.jsx("div",{className:"card-bg"}),e.jsx("div",{className:"card-glow"}),e.jsx("div",{className:"particles",children:[...Array(5)].map((t,d)=>e.jsx("span",{className:"particle",style:{"--i":d}},d))}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{className:`icon-wrapper ${n?"hovered":""}`,children:[e.jsx("div",{className:"icon-ring"}),e.jsx("div",{className:"icon-ring icon-ring-2"}),r.icon]}),e.jsx("h3",{className:"card-title",children:r.title}),e.jsx("p",{className:"card-description",children:r.description}),e.jsx("div",{className:"card-footer",children:e.jsxs("button",{className:"learn-more",onClick:()=>c(r),children:["Explore",e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",className:"arrow-icon",children:e.jsx("path",{d:"M5 12H19M19 12L12 5M19 12L12 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]}),e.jsx("div",{className:"corner-accent"})]})})},De=()=>{const{ref:r,isInView:i}=Le(.1),[o,c]=s.useState(null),n=[{id:1,icon:e.jsx(Ne,{}),title:"Brand Activations",description:"We bring your brand to life through engaging, on-ground experiences that capture attention, create emotional impact, and inspire meaningful connections with your target audience.",accent:"#4294f7",highlights:["Tailored on-ground activation strategies","Trained brand ambassador teams","Real-time performance tracking","Post-activation analytics & reporting"],stats:[{value:"200+",label:"Activations Done"},{value:"9",label:"Provinces Covered"},{value:"98%",label:"Client Satisfaction"}]},{id:2,icon:e.jsx(Me,{}),title:"Mall Activations",description:"Strategic mall activations that maximize footfall and engagement, creating memorable brand experiences in high-traffic retail environments across Sri Lanka.",accent:"#8B5CF6",highlights:["Premium mall locations island-wide","Interactive consumer engagement zones","Footfall & conversion measurement","Fully managed setup and teardown"],stats:[{value:"50+",label:"Mall Venues"},{value:"1M+",label:"Consumers Reached"},{value:"3x",label:"Avg. Footfall Boost"}]},{id:3,icon:e.jsx(Ie,{}),title:"Roadshows & SMMT Activations",description:"Mobile marketing excellence with nationwide roadshows and SMMT activations, taking your brand directly to communities across all 9 provinces.",accent:"#EC4899",highlights:["Full nationwide route planning","Custom branded vehicles & structures","Community engagement at grassroots level","Live reporting from each location"],stats:[{value:"9",label:"Provinces Reached"},{value:"300+",label:"Locations Visited"},{value:"500K+",label:"People Engaged"}]},{id:4,icon:e.jsx(ze,{}),title:"Sampling Campaigns",description:"Product sampling campaigns that put your offerings directly in the hands of consumers, driving trial, awareness, and conversion effectively.",accent:"#F59E0B",highlights:["Targeted demographic profiling","High-volume sample distribution","Consumer feedback collection","Conversion rate optimisation"],stats:[{value:"2M+",label:"Samples Distributed"},{value:"40%",label:"Avg. Trial-to-Purchase"},{value:"100+",label:"Brands Supported"}]},{id:5,icon:e.jsx(Ee,{}),title:"Selling Operations",description:"End-to-end selling operations with trained teams that drive sales, manage distribution, and deliver measurable results for your brand.",accent:"#10B981",highlights:["Dedicated trained sales teams","Territory-based coverage planning","Daily sales reporting & KPIs","Flexible short & long-term deployment"],stats:[{value:"150+",label:"Sales Specialists"},{value:"25%",label:"Avg. Sales Uplift"},{value:"60+",label:"Active Clients"}]},{id:6,icon:e.jsx(Te,{}),title:"Corporate & Public Events",description:"From corporate gatherings to large-scale public events, we plan, manage, and execute seamless experiences that leave lasting impressions.",accent:"#06B6D4",highlights:["End-to-end event planning & logistics","Venue sourcing and setup","AV, staging & production management","Guest experience & crowd management"],stats:[{value:"120+",label:"Events Executed"},{value:"50K+",label:"Max Event Attendance"},{value:"100%",label:"On-time Delivery"}]},{id:7,icon:e.jsx(Be,{}),title:"Government & Institutional Activations",description:"Specialized activations for government and institutional clients, leveraging our strong relationships and expertise in public sector engagement.",accent:"#EF4444",highlights:["Deep public sector expertise","Compliance-ready execution frameworks","Multi-stakeholder coordination","Nationwide institutional reach"],stats:[{value:"30+",label:"Govt. Projects"},{value:"25",label:"Districts Covered"},{value:"10+",label:"Ministries Served"}]},{id:8,icon:e.jsx(We,{}),title:"Promoter Deployment Projects",description:"Long-term promoter deployment solutions with trained brand ambassadors who represent your brand professionally across retail and field locations.",accent:"#14B8A6",highlights:["Rigorous promoter screening & training","Ongoing performance monitoring","Retail & field deployment flexibility","Dedicated account management"],stats:[{value:"500+",label:"Active Promoters"},{value:"1000+",label:"Retail Outlets Covered"},{value:"95%",label:"Retention Rate"}]}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`

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
      `}),e.jsxs("section",{className:"services-section",ref:r,children:[e.jsx("div",{className:"bg-mesh"}),e.jsx("div",{className:"grid-pattern"}),e.jsxs("div",{className:"floating-shapes",children:[e.jsx("div",{className:"shape shape-1"}),e.jsx("div",{className:"shape shape-2"}),e.jsx("div",{className:"shape shape-3"})]}),e.jsxs("div",{className:"services-container",children:[e.jsxs("header",{className:"section-header",children:[e.jsx("span",{className:"section-label",children:"What We Do"}),e.jsxs("h2",{className:"section-title",children:["Your ",e.jsx("span",{children:"360°"})," Brand Partner"]}),e.jsx("p",{className:"section-subtitle",children:"From concept to execution, we deliver end-to-end brand activation and experiential marketing solutions across all 9 provinces of Sri Lanka."})]}),e.jsx("div",{className:"services-grid",children:n.map((a,t)=>e.jsx(Re,{service:a,index:t,isInView:i,onExplore:c},a.id))})]})]}),o&&e.jsx(Ae,{service:o,onClose:()=>c(null)})]})},Pe=()=>{const[r,i]=s.useState(""),[o,c]=s.useState(0),[n,a]=s.useState(!1),t="Welcome to Strabso",d=100;s.useEffect(()=>{if(o<t.length){const g=setTimeout(()=>{i(j=>j+t[o]),c(j=>j+1)},d);return()=>clearTimeout(g)}else a(!0)},[o,t]);const p=s.useCallback(()=>{const g=document.querySelector(".services-section");g&&g.scrollIntoView({behavior:"smooth"})},[]),u=s.useCallback(()=>{const g=document.querySelector('[data-section="About"]');g&&g.scrollIntoView({behavior:"smooth"})},[]);return e.jsxs(W.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0},transition:{duration:.8},className:"home-wrapper",role:"main","aria-label":"Home page",children:[e.jsxs("div",{className:"home-container",children:[e.jsx("div",{className:"home-content",children:e.jsxs("header",{className:"home-header",children:[e.jsxs("h1",{className:"typing-text","aria-label":t,children:[e.jsx("span",{"aria-hidden":"true",children:r}),e.jsx("span",{className:`cursor ${n?"cursor-idle":""}`,"aria-hidden":"true",children:"|"})]}),e.jsxs(W.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:2,duration:.8},className:"subtitle",children:["Your gateway to stunning visuals and seamless navigation.",e.jsx("br",{}),"We create unforgettable experiential events."]}),e.jsxs(W.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:2.5,duration:.6},className:"cta-buttons",children:[e.jsx("button",{className:"primary-btn",onClick:p,"aria-label":"Explore our services",children:"Explore Services"}),e.jsx("button",{className:"secondary-btn",onClick:u,"aria-label":"Contact us",children:"Contact Us"})]})]})}),e.jsx(W.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{delay:1,duration:.8},className:"home-image",children:e.jsxs("div",{className:"image-container",children:[e.jsx("img",{src:Se,alt:"Strabso - Creative event experiences illustration",className:"hero-image",loading:"eager"}),e.jsx("div",{className:"image-glow","aria-hidden":"true"})]})})]}),e.jsx("div",{className:"services-section",children:e.jsx(De,{})}),e.jsx("div",{className:"carousel-section",children:e.jsx(Ce,{})})]})},Oe="/Strabso/";function x(r,i){return`${Oe}gallery/${encodeURIComponent(r)}/${encodeURIComponent(i)}`}const X=[{id:1,title:"Coca Cola Annual Business Con 2025",category:"Business Conference",location:"Colombo",year:"2025",guests:"500+",coverImage:x("Coca Cola Annual Business Con 2025","coca.jpg"),photos:[x("Coca Cola Annual Business Con 2025","coca.jpg"),x("Coca Cola Annual Business Con 2025","coca1.jpg"),x("Coca Cola Annual Business Con 2025","coco2.jpg"),x("Coca Cola Annual Business Con 2025","coca3.jpg"),x("Coca Cola Annual Business Con 2025","coca4.jpg")],color:"#1a1a2e"},{id:2,title:"Elephant House – Vibe SMMT Activation",category:"Brand Activation",location:"Island-wide",year:"2024",guests:"50K+",coverImage:x("Elephant House – Vibe SMMT Activation","eh.jpg"),photos:[x("Elephant House – Vibe SMMT Activation","eh.jpg"),x("Elephant House – Vibe SMMT Activation","eh1.jpg"),x("Elephant House – Vibe SMMT Activation","eh2.jpg")],color:"#2d3436"},{id:3,title:"Roza Pasta – Christmas Mall Activation",category:"Mall Activation",location:"Colombo",year:"2024",guests:"10K+",coverImage:x("Roza Pasta – Christmas Mall Activation","ro.jpg"),photos:[x("Roza Pasta – Christmas Mall Activation","ro.jpg"),x("Roza Pasta – Christmas Mall Activation","ro1.jpg"),x("Roza Pasta – Christmas Mall Activation","ro2.png")],color:"#0c0c1d"},{id:4,title:"Uswatta – Jo-Pet Big Match Selling Operation",category:"Selling Operation",location:"Island-wide",year:"2024",guests:"25K+",coverImage:x("Uswatta – Jo-Pet Big Match- Selling Operation ","us.jpg"),photos:[x("Uswatta – Jo-Pet Big Match- Selling Operation ","us.jpg"),x("Uswatta – Jo-Pet Big Match- Selling Operation ","us1.jpg")],color:"#1e272e"},{id:5,title:"Vivya – MT Activation",category:"Modern Trade Activation",location:"Island-wide",year:"2024",guests:"20K+",coverImage:x("Vivya – MT Activation ","vv.jpg"),photos:[x("Vivya – MT Activation ","vv.jpg"),x("Vivya – MT Activation ","vv1.jpg"),x("Vivya – MT Activation ","vv2.jpg")],color:"#192a56"},{id:6,title:"Xtra – SL & AFG One Day Cricket Tournament 2024",category:"Sports Activation",location:"Colombo",year:"2024",guests:"30K+",coverImage:x("Xtra – SL AFG One Day Cricket Tournament 2024","ext.jpg"),photos:[x("Xtra – SL AFG One Day Cricket Tournament 2024","ext.jpg"),x("Xtra – SL AFG One Day Cricket Tournament 2024","ext1.jpg"),x("Xtra – SL AFG One Day Cricket Tournament 2024","ext2.jpg"),x("Xtra – SL AFG One Day Cricket Tournament 2024","ext3.png")],color:"#192a56"}],He=[{id:1,number:"100+",label:"Activations",description:"Successful brand activations delivered nationwide",icon:e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M12 2L2 7L12 12L22 7L12 2Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M2 17L12 22L22 17",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M2 12L12 17L22 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),gradient:"linear-gradient(135deg, rgba(255, 107, 107, 0.15) 0%, rgba(255, 107, 107, 0.05) 100%)",accentColor:"#ff6b6b"},{id:2,number:"25+",label:"Brand Partners",description:"Trusted by leading brands in Sri Lanka",icon:e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),gradient:"linear-gradient(135deg, rgba(78, 205, 196, 0.15) 0%, rgba(78, 205, 196, 0.05) 100%)",accentColor:"#4ecdc4"},{id:3,number:"9",label:"Provinces",description:"Island-wide reach across Sri Lanka",icon:e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M2 12H22",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z",stroke:"currentColor",strokeWidth:"1.5"})]}),gradient:"linear-gradient(135deg, rgba(255, 209, 102, 0.15) 0%, rgba(255, 209, 102, 0.05) 100%)",accentColor:"#ffd166"}],Fe=({src:r,style:i,className:o,children:c})=>{const n=s.useRef(null),[a,t]=s.useState(!1);return s.useEffect(()=>{const d=n.current;if(!d)return;const p=new IntersectionObserver(([u])=>{u.isIntersecting&&(t(!0),p.disconnect())},{rootMargin:"200px"});return p.observe(d),()=>p.disconnect()},[]),e.jsx("div",{ref:n,className:o,style:{...i,backgroundImage:a?`url('${r}')`:"none",backgroundColor:a?void 0:"rgba(255,255,255,0.05)"},children:c})},Ve=({photos:r,currentIndex:i,onClose:o,onNext:c,onPrev:n,onSelectPhoto:a,projectTitle:t,isMobile:d})=>{const[p,u]=s.useState(null),[g,j]=s.useState(null),k=50,w=y=>{j(null),u(y.targetTouches[0].clientX)},M=y=>{j(y.targetTouches[0].clientX)},I=()=>{if(!p||!g)return;const y=p-g,l=y>k,h=y<-k;l&&c(),h&&n()};s.useEffect(()=>{const y=l=>{l.key==="Escape"&&o(),l.key==="ArrowRight"&&c(),l.key==="ArrowLeft"&&n()};return window.addEventListener("keydown",y),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",y),document.body.style.overflow="auto"}},[o,c,n]);const v={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.98)",zIndex:1e4,display:"flex",alignItems:"center",justifyContent:"center",animation:"fadeIn 0.3s ease"},content:{width:"100%",height:"100%",display:"flex",flexDirection:"column",padding:d?"10px":"20px"},closeBtn:{position:"absolute",top:d?"10px":"20px",right:d?"10px":"20px",background:"rgba(255, 255, 255, 0.1)",border:"none",borderRadius:"50%",width:d?"44px":"50px",height:d?"44px":"50px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"white",transition:"all 0.3s ease",zIndex:10},header:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:d?"0 10px":"0 60px",marginBottom:d?"10px":"20px",marginTop:d?"50px":"0"},projectName:{fontFamily:"'Playfair Display', serif",fontSize:d?"18px":"24px",color:"white"},counter:{fontFamily:"'Outfit', sans-serif",fontSize:d?"12px":"14px",letterSpacing:"2px",color:"rgba(255, 255, 255, 0.6)"},imageContainer:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden"},mainImage:{maxWidth:d?"95%":"85%",maxHeight:d?"60vh":"70vh",objectFit:"contain",borderRadius:"8px",animation:"scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)"},navBtn:{position:"absolute",top:"50%",transform:"translateY(-50%)",background:"rgba(255, 255, 255, 0.1)",border:"none",borderRadius:"50%",width:d?"44px":"60px",height:d?"44px":"60px",display:d?"none":"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"white",transition:"all 0.3s ease",backdropFilter:"blur(10px)"},thumbnailStrip:{display:"flex",justifyContent:d?"flex-start":"center",gap:d?"8px":"12px",padding:d?"15px 0":"20px 0",overflowX:"auto",WebkitOverflowScrolling:"touch"},thumbnail:{width:d?"60px":"80px",height:d?"45px":"60px",borderRadius:"6px",overflow:"hidden",cursor:"pointer",transition:"all 0.3s ease",flexShrink:0},thumbnailImg:{width:"100%",height:"100%",objectFit:"cover"},swipeHint:{display:d?"flex":"none",alignItems:"center",justifyContent:"center",gap:"8px",color:"rgba(255, 255, 255, 0.4)",fontSize:"12px",marginTop:"10px"}};return e.jsx("div",{style:v.overlay,onClick:o,children:e.jsxs("div",{style:v.content,onClick:y=>y.stopPropagation(),onTouchStart:w,onTouchMove:M,onTouchEnd:I,children:[e.jsx("button",{style:v.closeBtn,onClick:o,children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),e.jsxs("div",{style:v.header,children:[e.jsx("span",{style:v.projectName,children:t}),e.jsxs("span",{style:v.counter,children:[i+1," / ",r.length]})]}),e.jsxs("div",{style:v.imageContainer,children:[e.jsx("button",{style:{...v.navBtn,left:"20px"},onClick:n,children:e.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M15 18L9 12L15 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("img",{src:r[i],alt:`${t} - Photo ${i+1}`,style:v.mainImage,decoding:"async"},i),e.jsx("button",{style:{...v.navBtn,right:"20px"},onClick:c,children:e.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M9 18L15 12L9 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),e.jsxs("div",{style:v.swipeHint,children:[e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M14 8l4 4-4 4M10 16l-4-4 4-4"})}),"Swipe to navigate"]}),e.jsx("div",{style:v.thumbnailStrip,children:r.map((y,l)=>e.jsx("div",{style:{...v.thumbnail,opacity:l===i?1:.4,transform:l===i?"scale(1.1)":"scale(1)",border:l===i?"2px solid white":"2px solid transparent"},onClick:()=>a(l),children:e.jsx("img",{src:y,alt:`${t} photo ${l+1}`,style:v.thumbnailImg,loading:"lazy",decoding:"async"})},l))})]})})},Ye=({card:r,index:i,isMobile:o,isTablet:c})=>{const[n,a]=s.useState(!1),t={card:{position:"relative",padding:o?"24px":c?"28px":"32px",borderRadius:o?"16px":"20px",border:"1px solid rgba(255, 255, 255, 0.08)",backdropFilter:"blur(20px)",display:"flex",flexDirection:"column",alignItems:"flex-start",gap:o?"8px":"12px",transition:"all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",cursor:"default",overflow:"hidden",animation:"cardSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",opacity:0,background:r.gradient,animationDelay:`${i*.15}s`,transform:n&&!o?"translateY(-8px) scale(1.02)":"translateY(0) scale(1)",boxShadow:n&&!o?`0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px ${r.accentColor}30`:"0 10px 40px -15px rgba(0, 0, 0, 0.3)"},cornerDecoration:{position:"absolute",top:o?"12px":"16px",right:o?"12px":"16px",width:o?"20px":"24px",height:o?"20px":"24px",borderTop:"2px solid",borderRight:"2px solid",borderRadius:"0 8px 0 0",transition:"all 0.4s ease",borderColor:r.accentColor,opacity:n?1:.3},iconWrapper:{padding:o?"10px":"14px",borderRadius:o?"10px":"14px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",marginBottom:o?"4px":"8px",color:r.accentColor,background:`${r.accentColor}15`,transform:n&&!o?"scale(1.1) rotate(5deg)":"scale(1) rotate(0deg)"},number:{fontSize:o?"36px":c?"42px":"48px",fontFamily:"'Playfair Display', serif",fontWeight:600,lineHeight:1,letterSpacing:"-2px",color:r.accentColor},label:{fontSize:o?"14px":"16px",fontWeight:500,letterSpacing:"1px",textTransform:"uppercase",color:"rgba(255, 255, 255, 0.9)"},description:{fontSize:o?"12px":"14px",color:"rgba(255, 255, 255, 0.5)",lineHeight:1.5,transition:"opacity 0.4s ease",opacity:n?1:.6},accentLine:{position:"absolute",bottom:0,left:0,height:"3px",borderRadius:"3px 3px 0 0",transition:"width 0.5s cubic-bezier(0.16, 1, 0.3, 1)",background:r.accentColor,width:n?"100%":"40%"},icon:{width:o?"24px":"32px",height:o?"24px":"32px"}};return e.jsxs("div",{className:"stats-card",style:t.card,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[e.jsx("div",{style:t.cornerDecoration}),e.jsx("div",{style:t.iconWrapper,children:e.jsx("div",{style:t.icon,children:r.icon})}),e.jsx("div",{style:t.number,children:r.number}),e.jsx("div",{style:t.label,children:r.label}),e.jsx("div",{style:t.description,children:r.description}),e.jsx("div",{style:t.accentLine})]})},$e=()=>{const[r,i]=s.useState({x:0,y:0}),[o,c]=s.useState(!1),[n,a]=s.useState(null),[t,d]=s.useState(!1),[p,u]=s.useState(!1),g=s.useRef(null);s.useEffect(()=>{const h=()=>{d(window.innerWidth<=767),u(window.innerWidth>767&&window.innerWidth<=1024)};return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),s.useEffect(()=>{if(t||p)return;const h=C=>{i({x:C.clientX,y:C.clientY})};return window.addEventListener("mousemove",h),()=>window.removeEventListener("mousemove",h)},[t,p]);const j=(h,C)=>{a({projectId:h,photoIndex:C})},k=()=>{a(null)},w=n?X.find(h=>h.id===n.projectId):null,M=()=>{n&&w&&a({...n,photoIndex:(n.photoIndex+1)%w.photos.length})},I=()=>{n&&w&&a({...n,photoIndex:(n.photoIndex-1+w.photos.length)%w.photos.length})},v=h=>{n&&a({...n,photoIndex:h})},l={container:{minHeight:"100vh",backgroundColor:"transparent",color:"#ffffff",fontFamily:"'Outfit', sans-serif",position:"relative",overflow:"hidden",padding:t?"30px 16px":p?"40px 24px":"60px 40px"},backgroundGradient:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"radial-gradient(ellipse at 20% 20%, rgba(120, 80, 160, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(80, 120, 160, 0.1) 0%, transparent 50%)",pointerEvents:"none"},noiseOverlay:{position:"fixed",top:0,left:0,right:0,bottom:0,opacity:.03,backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,pointerEvents:"none"},header:{maxWidth:"1400px",margin:t?"0 auto 40px":"0 auto 60px",position:"relative"},mainTitle:{fontSize:t?"clamp(36px, 12vw, 48px)":p?"clamp(48px, 8vw, 80px)":"clamp(48px, 10vw, 120px)",fontFamily:"'Playfair Display', serif",fontWeight:400,lineHeight:1,margin:0,display:"flex",flexDirection:"column"},titleLine:{display:"block",color:"rgba(255, 255, 255, 0.9)"},titleLineAccent:{display:"block",fontStyle:"italic",background:"linear-gradient(135deg, #f0261b 0%, #0095ff 50%, #09ff00 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},headerLine:{width:t?"60px":"80px",height:"2px",background:"rgba(255, 255, 255, 0.3)",marginTop:t?"20px":"30px"},statsSection:{maxWidth:"1400px",margin:t?"0 auto 50px":"0 auto 80px"},statsGrid:{display:"grid",gridTemplateColumns:t?"1fr":p?"repeat(2, 1fr)":"repeat(3, 1fr)",gap:t?"16px":"24px"},projectsContainer:{maxWidth:"1400px",margin:"0 auto",display:"grid",gridTemplateColumns:t?"1fr":p?"repeat(2, 1fr)":"repeat(auto-fit, minmax(350px, 1fr))",gap:t?"50px":p?"40px":"80px"},projectItem:{position:"relative",cursor:"pointer"},projectNumber:{position:"absolute",top:t?"-15px":"-20px",left:t?"-5px":"-10px",fontSize:t?"80px":p?"100px":"120px",fontFamily:"'Playfair Display', serif",fontWeight:400,color:"rgba(255, 255, 255, 0.08)",lineHeight:1,transition:"all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",zIndex:0,pointerEvents:"none"},imageWrapper:{position:"relative",aspectRatio:t?"3/4":"4/5",borderRadius:t?"12px":"8px",overflow:"hidden",marginBottom:t?"12px":"16px"},projectImage:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)"},imageGradient:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)",opacity:t?.6:0,transition:"opacity 0.5s ease"},photoCountBadge:{position:"absolute",top:t?"12px":"16px",right:t?"12px":"16px",background:"rgba(0, 0, 0, 0.6)",backdropFilter:"blur(10px)",padding:t?"6px 10px":"8px 14px",borderRadius:"20px",fontSize:t?"11px":"12px",fontWeight:500,letterSpacing:"1px",display:"flex",alignItems:"center",color:"white"},viewProject:{position:"absolute",bottom:t?"16px":"24px",left:t?"16px":"24px",display:"flex",alignItems:"center",gap:t?"8px":"12px",opacity:t?1:0,transform:t?"translateY(0)":"translateY(20px)",transition:"all 0.5s cubic-bezier(0.16, 1, 0.3, 1)"},viewProjectText:{fontSize:t?"11px":"13px",letterSpacing:"2px",textTransform:"uppercase",fontWeight:500},arrowIcon:{width:t?"16px":"20px",height:t?"16px":"20px"},photoGrid:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:t?"6px":"8px",marginBottom:t?"16px":"20px",opacity:t?1:.7,transform:"translateY(0)",transition:"all 0.5s cubic-bezier(0.16, 1, 0.3, 1)"},photoThumb:{aspectRatio:"1",borderRadius:t?"4px":"6px",overflow:"hidden",position:"relative",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"},photoThumbImg:{width:"100%",height:"100%",objectFit:"cover"},photoOverlay:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",justifyContent:"center",opacity:0,transition:"opacity 0.3s ease",color:"white"},morePhotos:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:t?"14px":"18px",fontWeight:600,fontFamily:"'Playfair Display', serif",color:"white"},projectInfo:{position:"relative",zIndex:1},projectMeta:{display:"flex",alignItems:"center",gap:t?"10px":"16px",marginBottom:t?"8px":"12px",flexWrap:"wrap"},projectCategory:{fontSize:t?"10px":"11px",letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255, 255, 255, 0.5)"},projectMetaLine:{height:"1px",width:t?"30px":"40px",backgroundColor:"rgba(255, 255, 255, 0.2)",transition:"width 0.5s cubic-bezier(0.16, 1, 0.3, 1)"},projectLocation:{fontSize:t?"10px":"11px",letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255, 255, 255, 0.5)"},projectTitle:{margin:t?"0 0 12px":"0 0 16px"},projectTitleText:{fontSize:t?"clamp(24px, 6vw, 32px)":p?"clamp(28px, 4vw, 36px)":"clamp(28px, 4vw, 40px)",fontFamily:"'Playfair Display', serif",fontWeight:400,backgroundImage:"linear-gradient(90deg, rgba(255,255,255,0.3), rgba(255,255,255,0.3))",backgroundSize:"0% 2px",backgroundPosition:"0 100%",backgroundRepeat:"no-repeat",transition:"background-size 0.5s cubic-bezier(0.16, 1, 0.3, 1)",paddingBottom:"4px"},projectStats:{display:"flex",alignItems:"center",gap:t?"16px":"24px",flexWrap:"wrap"},statItem:{display:"flex",flexDirection:"column",gap:"4px"},statLabel:{fontSize:t?"9px":"10px",letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255, 255, 255, 0.4)"},statValue:{fontSize:t?"14px":"16px",fontFamily:"'Playfair Display', serif",color:"rgba(255, 255, 255, 0.9)"}};return e.jsxs("div",{ref:g,style:l.container,children:[e.jsx("style",{children:`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes borderDraw {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0 0 0); }
        }

        @keyframes photoReveal {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes cardSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }
          50% { box-shadow: 0 0 40px rgba(255, 255, 255, 0.2); }
        }
        
        .project-item {
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        
        /* Desktop-only hover effects */
        @media (hover: hover) and (pointer: fine) {
          .project-item:hover .project-image {
            transform: scale(1.08);
          }
          
          .project-item:hover .project-overlay {
            opacity: 1;
          }
          
          .project-item:hover .project-number {
            transform: translateX(-10px);
            opacity: 0.3;
          }
          
          .project-item:hover .view-project {
            opacity: 1;
            transform: translateY(0);
          }
          
          .project-item:hover .project-meta-line {
            width: 100%;
          }
          
          .project-item:hover .project-title-text {
            background-size: 100% 2px;
          }

          .project-item:hover .photo-grid {
            opacity: 1;
            transform: translateY(0);
          }

          .photo-thumb:hover {
            transform: scale(1.08) !important;
            z-index: 2;
          }

          .photo-thumb:hover .photo-overlay {
            opacity: 1;
          }
          
          .nav-btn:hover {
            background: rgba(255, 255, 255, 0.2);
          }

          .close-btn:hover {
            background: rgba(255, 255, 255, 0.2);
          }
          
          .photo-count-badge:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.05);
          }
        }

        .photo-thumb {
          animation: photoReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        /* Custom cursor - only on non-touch devices */
        .custom-cursor {
          pointer-events: none;
          position: fixed;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: white;
          z-index: 9999;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
          transform: translate(-50%, -50%) scale(0);
        }

        .custom-cursor.active {
          transform: translate(-50%, -50%) scale(1);
        }

        .section-header {
          animation: fadeIn 1s ease forwards;
        }

        .header-line {
          animation: borderDraw 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.3s;
        }

        /* Touch device active states */
        @media (hover: none) and (pointer: coarse) {
          .project-item:active .project-image {
            transform: scale(1.02);
          }
          
          .photo-thumb:active {
            transform: scale(0.95);
          }
          
          .stats-card:active {
            transform: scale(0.98);
          }
        }
        
        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Tablet-specific styles */
        @media screen and (min-width: 768px) and (max-width: 1024px) {
          .stats-card:nth-child(3) {
            grid-column: span 2;
            max-width: 50%;
            margin: 0 auto;
          }
        }
      `}),n&&w&&e.jsx(Ve,{photos:w.photos,currentIndex:n.photoIndex,onClose:k,onNext:M,onPrev:I,onSelectPhoto:v,projectTitle:w.title,isMobile:t}),!t&&!p&&e.jsx("div",{className:`custom-cursor ${o?"active":""}`,style:{left:r.x,top:r.y},children:"View"}),e.jsx("div",{style:l.backgroundGradient}),e.jsx("div",{style:l.noiseOverlay}),e.jsxs("header",{style:l.header,className:"section-header",children:[e.jsxs("h1",{style:l.mainTitle,children:[e.jsx("span",{style:l.titleLine,children:"Our"}),e.jsx("span",{style:l.titleLineAccent,children:"Successful"}),e.jsx("span",{style:l.titleLine,children:"Projects"})]}),e.jsx("div",{style:l.headerLine,className:"header-line"})]}),e.jsx("div",{style:l.statsSection,children:e.jsx("div",{style:l.statsGrid,children:He.map((h,C)=>e.jsx(Ye,{card:h,index:C,isMobile:t,isTablet:p},h.id))})}),e.jsx("div",{style:l.projectsContainer,children:X.map((h,C)=>e.jsxs("article",{className:"project-item",style:{...l.projectItem,animationDelay:`${C*.15}s`},onMouseEnter:()=>{!t&&!p&&c(!0)},onMouseLeave:()=>{!t&&!p&&c(!1)},children:[e.jsx("span",{style:l.projectNumber,className:"project-number",children:(C+1).toString().padStart(2,"0")}),e.jsxs("div",{style:l.imageWrapper,onClick:()=>j(h.id,0),children:[e.jsx(Fe,{src:h.coverImage,className:"project-image",style:l.projectImage}),e.jsx("div",{style:l.imageGradient,className:"project-overlay"}),e.jsxs("div",{style:l.photoCountBadge,className:"photo-count-badge",children:[e.jsxs("svg",{width:t?"14":"16",height:t?"14":"16",viewBox:"0 0 24 24",fill:"none",style:{marginRight:"6px"},children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5",fill:"currentColor"}),e.jsx("path",{d:"M21 15L16 10L5 21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),h.photos.length," Photos"]}),e.jsxs("div",{style:l.viewProject,className:"view-project",children:[e.jsx("span",{style:l.viewProjectText,children:"View Gallery"}),e.jsx("svg",{width:t?"18":"24",height:t?"18":"24",viewBox:"0 0 24 24",fill:"none",style:l.arrowIcon,children:e.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})]}),e.jsx("div",{style:l.photoGrid,className:"photo-grid",children:h.photos.slice(0,4).map((A,N)=>e.jsxs("div",{className:"photo-thumb",style:{...l.photoThumb,animationDelay:`${N*.1}s`},onClick:()=>j(h.id,N),children:[e.jsx("img",{src:A,alt:`${h.title} photo ${N+1}`,style:l.photoThumbImg,loading:"lazy",decoding:"async"}),e.jsx("div",{style:l.photoOverlay,className:"photo-overlay",children:e.jsx("svg",{width:t?"16":"20",height:t?"16":"20",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M15 3H21V9M21 3L13 11M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),N===3&&h.photos.length>4&&e.jsxs("div",{style:l.morePhotos,children:["+",h.photos.length-4]})]},N))}),e.jsxs("div",{style:l.projectInfo,children:[e.jsxs("div",{style:l.projectMeta,children:[e.jsx("span",{style:l.projectCategory,children:h.category}),e.jsx("div",{style:l.projectMetaLine,className:"project-meta-line"}),e.jsx("span",{style:l.projectLocation,children:h.location})]}),e.jsx("h2",{style:l.projectTitle,children:e.jsx("span",{style:l.projectTitleText,className:"project-title-text",children:h.title})}),e.jsxs("div",{style:l.projectStats,children:[e.jsxs("div",{style:l.statItem,children:[e.jsx("span",{style:l.statLabel,children:"Year"}),e.jsx("span",{style:l.statValue,children:h.year})]}),e.jsxs("div",{style:l.statItem,children:[e.jsx("span",{style:l.statLabel,children:"Photos"}),e.jsx("span",{style:l.statValue,children:h.photos.length})]})]})]})]},h.id))})]})},Ge=()=>{const r=[{icon:e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),e.jsx("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]}),label:"PHONE",value:"0777 188 485",href:"tel:+94777188485"},{icon:e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.jsx("polyline",{points:"22,6 12,13 2,6"})]}),label:"EMAIL",value:"info@strabso.lk",href:"mailto:info@strabso.lk"},{icon:e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),e.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),label:"LOCATION",value:"Colombo, Sri Lanka",href:"https://maps.google.com/?q=Colombo,Sri+Lanka"}],i={wrapper:{background:"transparent",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",position:"relative",overflow:"hidden",fontFamily:"'Outfit', sans-serif"},container:{maxWidth:"1000px",width:"100%",textAlign:"center",position:"relative",zIndex:1},headerSection:{marginBottom:"60px"},title:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(36px, 6vw, 56px)",fontWeight:500,color:"#ffffff",margin:"0 0 8px 0",letterSpacing:"-1px",opacity:0},subtitle:{fontFamily:"'Outfit', sans-serif",fontSize:"16px",fontWeight:300,color:"rgba(255, 255, 255, 0.6)",maxWidth:"500px",margin:"0 auto",lineHeight:1.7,opacity:0},contactGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"30px",padding:"0 20px"},contactCard:{textDecoration:"none",display:"flex",flexDirection:"column",alignItems:"center",padding:"40px 30px",background:"transparent",borderRadius:"2px",cursor:"pointer",opacity:0},iconContainer:{width:"80px",height:"80px",borderRadius:"50%",border:"1px solid rgba(255, 255, 255, 0.2)",background:"transparent",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"24px",color:"rgba(255, 255, 255, 0.7)"},contactLabel:{fontFamily:"'Outfit', sans-serif",fontSize:"11px",fontWeight:400,letterSpacing:"3px",color:"rgba(255, 255, 255, 0.5)",marginBottom:"12px",margin:"0 0 12px 0"},contactValue:{fontFamily:"'Cormorant Garamond', serif",fontSize:"18px",fontWeight:400,color:"rgba(255, 255, 255, 0.85)",margin:0}};return e.jsxs("div",{style:i.wrapper,className:"contact-wrapper",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{style:i.container,children:[e.jsxs("div",{style:i.headerSection,className:"contact-header",children:[e.jsx("h1",{className:"animate-in delay-1",style:i.title,children:"Let's Connect"}),e.jsx("p",{className:"animate-in delay-2",style:i.subtitle,children:"Ready to activate your brand across Sri Lanka? Get in touch with us to discuss your next activation, campaign, or event. We're here to bring your vision to life."})]}),e.jsx("div",{style:i.contactGrid,className:"contact-grid",children:r.map((o,c)=>e.jsxs("a",{href:o.href,className:`contact-item contact-card animate-in delay-${c+3}`,style:i.contactCard,children:[e.jsx("div",{className:"icon-container",style:i.iconContainer,children:o.icon}),e.jsx("h3",{style:i.contactLabel,children:o.label}),e.jsx("p",{className:"contact-value",style:i.contactValue,children:o.value})]},c))})]})]})},Ue=()=>{const r=s.useRef(null),[i,o]=s.useState(!1);s.useEffect(()=>{const a=()=>{o(window.innerWidth<=767)};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),s.useEffect(()=>{const a=new IntersectionObserver(d=>{d.forEach(p=>{p.isIntersecting&&p.target.classList.add("animate-in")})},{threshold:.1});return document.querySelectorAll(".fade-up").forEach(d=>a.observe(d)),()=>a.disconnect()},[]);const c=[{icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"value-svg-icon",children:e.jsx("path",{d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",strokeLinecap:"round",strokeLinejoin:"round"})}),title:"Innovation",description:"Innovative event and activation concepts that set your brand apart from the competition."},{icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"value-svg-icon",children:e.jsx("path",{d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",strokeLinecap:"round",strokeLinejoin:"round"})}),title:"Brand-First",description:"Deep brand-first strategic thinking — not just BTL execution, but complete brand elevation."},{icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"value-svg-icon",children:e.jsx("path",{d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",strokeLinecap:"round",strokeLinejoin:"round"})}),title:"Regional Reach",description:"Strong North & East regional resource network with island-wide coverage across Sri Lanka."},{icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"value-svg-icon",children:e.jsx("path",{d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",strokeLinecap:"round",strokeLinejoin:"round"})}),title:"Government Relations",description:"Government sector approvals, involvement & collaborations for seamless execution."}],n=[{year:"2020",event:"Strabso Founded",description:"Started with a vision to transform brand activations in Sri Lanka"},{year:"2021",event:"Major Brand Partnerships",description:"Partnered with Coca-Cola, HNB, and leading FMCG brands"},{year:"2022",event:"North & East Expansion",description:"Established strong presence in Northern and Eastern regions"},{year:"2023",event:"Corporate Events",description:"Executed Coca-Cola Annual Sales Conference and Award Ceremonies"},{year:"2024",event:"360° Solutions",description:"Launched complete end-to-end brand activation services"},{year:"2025",event:"Industry Leader",description:"Targeting top 5 agency position with 360° client solutions"}];return e.jsxs("div",{className:"about-us-page",children:[e.jsx("style",{children:`

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
      `}),e.jsxs("section",{className:"hero-section",children:[e.jsx("div",{className:"hero-bg"}),e.jsxs("div",{className:"hero-content",children:[e.jsxs("span",{className:"hero-label",children:[e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",style:{width:"16px",height:"16px"},children:e.jsx("path",{d:"M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"})}),"Who We Are"]}),e.jsxs("h1",{className:"hero-title",children:["Your ",e.jsx("span",{className:"accent",children:"360°"})," Brand Partner"]}),e.jsx("p",{className:"hero-description",children:"Strabso is a full-service activation and events agency delivering end-to-end brand solutions with a strong presence across Sri Lanka, including the North and East regions."})]}),!i&&e.jsxs("div",{className:"scroll-indicator",children:[e.jsx("span",{children:"Scroll to explore"}),e.jsx("div",{className:"scroll-line"})]})]}),e.jsx("section",{className:"story-section",children:e.jsxs("div",{className:"story-container",children:[e.jsxs("div",{className:"story-heading fade-up",children:[e.jsxs("h2",{children:["Our ",e.jsx("span",{className:"accent",children:"Vision"})," & Mission"]}),e.jsx("div",{className:"story-heading-line"})]}),e.jsxs("div",{className:"vision-mission-grid fade-up",children:[e.jsxs("div",{className:"vm-card",children:[e.jsx("div",{className:"vm-card-icon",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"5"}),e.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"22"}),e.jsx("line",{x1:"2",y1:"12",x2:"5",y2:"12"}),e.jsx("line",{x1:"19",y1:"12",x2:"22",y2:"12"})]})}),e.jsx("span",{className:"vm-card-label",children:"Vision"}),e.jsx("p",{className:"vm-card-text",children:"To identify ourselves as one of the top 5 agencies in the industry by 2025, while being the only agency providing a complete 360° solution to its clients."})]}),e.jsxs("div",{className:"vm-card",children:[e.jsx("div",{className:"vm-card-icon",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})})}),e.jsx("span",{className:"vm-card-label",children:"Mission"}),e.jsx("p",{className:"vm-card-text",children:"To provide clients with a 360° business solution, reducing operational hassle, building long-term trust, and delivering high-quality execution at every touchpoint."})]})]}),e.jsxs("div",{className:"founder-quote fade-up",children:[e.jsx("blockquote",{children:'"We look forward to the opportunity to prove how we can elevate your brand to new heights."'}),e.jsx("cite",{children:"— Rumesh Chandrakumar, Founder"})]})]})}),e.jsxs("section",{className:"values-section",children:[e.jsxs("div",{className:"section-header fade-up",children:[e.jsxs("h2",{children:["Our Key ",e.jsx("span",{className:"accent",children:"Strengths"})]}),e.jsx("p",{children:"What sets Strabso apart — our unique capabilities that deliver results for your brand."})]}),e.jsx("div",{className:"values-grid",children:c.map((a,t)=>e.jsxs("div",{className:"value-card fade-up",style:{transitionDelay:`${t*.1}s`},children:[e.jsx("div",{className:"value-icon",children:a.icon}),e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.description})]},t))})]}),e.jsx("section",{className:"stats-banner",ref:r,children:e.jsxs("div",{className:"stats-grid",children:[e.jsxs("div",{className:"stat-item fade-up",children:[e.jsx("h3",{children:"100+"}),e.jsx("p",{children:"Activations Delivered"})]}),e.jsxs("div",{className:"stat-item fade-up",style:{transitionDelay:"0.1s"},children:[e.jsx("h3",{children:"25+"}),e.jsx("p",{children:"Major Brands"})]}),e.jsxs("div",{className:"stat-item fade-up",style:{transitionDelay:"0.2s"},children:[e.jsx("h3",{children:"9"}),e.jsx("p",{children:"Provinces Covered"})]}),e.jsxs("div",{className:"stat-item fade-up",style:{transitionDelay:"0.3s"},children:[e.jsx("h3",{children:"360°"}),e.jsx("p",{children:"Complete Solutions"})]})]})}),e.jsxs("section",{className:"timeline-section",children:[e.jsxs("div",{className:"section-header fade-up",children:[e.jsxs("h2",{children:["Our ",e.jsx("span",{className:"accent",children:"Journey"})]}),e.jsx("p",{children:"From humble beginnings to industry leadership, here's how we've grown."})]}),e.jsxs("div",{className:"timeline-container",children:[e.jsx("div",{className:"timeline-line"}),e.jsx("div",{className:"timeline-items",children:n.map((a,t)=>e.jsxs("div",{className:"timeline-item fade-up",children:[e.jsxs("div",{className:"timeline-content",children:[e.jsx("div",{className:"timeline-year",children:a.year}),e.jsx("div",{className:"timeline-event",children:a.event}),e.jsx("div",{className:"timeline-description",children:a.description})]}),e.jsx("div",{className:"timeline-dot"}),e.jsx("div",{style:{flex:1}})]},t))})]})]}),e.jsx("section",{className:"cta-section",children:e.jsxs("div",{className:"cta-content fade-up",children:[e.jsxs("h2",{className:"cta-title",children:["Ready to Create Something ",e.jsx("span",{className:"accent",children:"Unforgettable"}),"?"]}),e.jsx("p",{className:"cta-description",children:"Let's collaborate to bring your next event to life. Whether you have a clear vision or just the spark of an idea, we're here to make it extraordinary."})]})}),e.jsx("div",{children:e.jsx(Ge,{})})]})},q=80,K=20,Xe=()=>{const[r,i]=s.useState("Home"),o=s.useRef(null),c=s.useRef(null),n=s.useRef(null),a=s.useMemo(()=>({Home:o,Projects:c,About:n}),[]),t=d=>{const p=a[d];if(p&&p.current){const g=p.current.getBoundingClientRect().top+window.pageYOffset-q-K;window.scrollTo({top:g,behavior:"smooth"})}};return s.useEffect(()=>{const d=()=>{const p=window.scrollY+q+K+100,u=Object.entries(a);for(let g=u.length-1;g>=0;g--){const[j,k]=u[g];if(k.current){const w=k.current.offsetTop;if(p>=w){i(j);break}}}};return window.addEventListener("scroll",d),d(),()=>window.removeEventListener("scroll",d)},[a]),e.jsxs(e.Fragment,{children:[e.jsx(ce,{activeTab:r,onTabClick:t}),e.jsxs("main",{className:"sections-container",children:[e.jsx("section",{ref:o,"data-section":"Home",className:"full-section",children:e.jsx(Pe,{})}),e.jsx("section",{ref:c,"data-section":"Projects",className:"full-section",children:e.jsx($e,{})}),e.jsx("section",{ref:n,"data-section":"About",className:"full-section",children:e.jsx(Ue,{})})]})]})};function qe(){return e.jsx(te,{children:e.jsx(_,{basename:"/Strabso",children:e.jsxs("div",{className:"App",children:[e.jsx(ae,{}),e.jsx(J,{children:e.jsx(Q,{path:"/",element:e.jsx(Xe,{})})})]})})})}ee.createRoot(document.getElementById("root")).render(e.jsx(s.StrictMode,{children:e.jsx(qe,{})}));
