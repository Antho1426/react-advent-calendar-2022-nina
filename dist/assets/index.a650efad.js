var j=Object.defineProperty,y=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var f=(e,a,n)=>a in e?j(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,m=(e,a)=>{for(var n in a||(a={}))S.call(a,n)&&f(e,n,a[n]);if(g)for(var n of g(a))w.call(a,n)&&f(e,n,a[n]);return e},v=(e,a)=>y(e,k(a));import{s as u,j as h,R as c,W as M,a as $}from"./vendor.43d5f896.js";const D=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}};D();var C="/react-advent-calendar-2022-nina/assets/hatch_backdrop.b61df97a.jpg";const I=u.div`
  padding-top: 100%; /* padding-top is based on the width - believe it or not!!! */
  position: relative;
  cursor: pointer;
  pointer-events: ${({enabled:e})=>e?"":"none"};

  .front {
    background: center / cover url(${e=>e.background});
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transform: ${e=>e.open?"rotateY(180deg)":"rotateY(0deg)"};
    
    /* Style of the front side of the hatches */
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Dancing Script', cursive;
      /* color: expression("rgb(" + Math.floor(Math.random() * 255)
        + "," + Math.floor(Math.random() * 255) + ","
        + Math.floor(Math.random() * 255) + ")"); */
      color: #fff; /* text color completely white) */
      padding: 0px;  /* 20px */
      width: 100%;  /* 100% (square) */ /* 50% (circle) */
      height: 100%;  /* 100% (square) */ /* 50% (circle) */
      border-radius: 9.5%;  /* 50% is circle, 9.5% is a square with rounded angles */
      /* background: rgba(0, 0, 0, 1); */ /* completely black! */ /* rgba(0, 0, 0, 0.7); */
      background: center / cover url(${C});
      font-weight: 700; /* 700 */
      font-size: 6rem; /* 4rem */
      user-select: none;
    }
  }

  .back {
    background: center / cover url(${e=>e.background});
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: ${e=>e.open?2:1};
    transform: ${e=>e.open?"rotateY(0deg)":"rotateY(180deg)"};

    p {
      font-family: 'Dancing Script', cursive;
      color: #fff;
      padding: 10px;
      font-size: 1.2rem;
      text-align: center;
      user-select: none;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all 1.0s;
    transform-style: preserve-3d;
    border-radius: 20px;
    border: 1px solid #fff;
    box-sizing: border-box;
  }
`,o=h.exports.jsx,x=h.exports.jsxs,L=({hatch:{nr:e,text:a,img:n,open:i},handleClick:t,enabledCallback:r})=>x(I,{open:i,background:n,enabled:r(e),onClick:()=>t(e),children:[console.log("re-render"),o("div",{className:"front",children:o("p",{children:e})}),o("div",{className:"back",children:o("p",{children:a})})]});var N=c.memo(L),O="/react-advent-calendar-2022-nina/assets/calendar_backdrop.59174000.jpg",A="/react-advent-calendar-2022-nina/assets/1.286196a7.jpg",z="/react-advent-calendar-2022-nina/assets/2.3de7fc83.jpg",H="/react-advent-calendar-2022-nina/assets/3.1061078c.jpg",q="/react-advent-calendar-2022-nina/assets/4.64c20a9b.jpg",E="/react-advent-calendar-2022-nina/assets/5.1cda6f7f.jpg",R="/react-advent-calendar-2022-nina/assets/6.8edf9690.jpg",Y="/react-advent-calendar-2022-nina/assets/7.c5cb000e.jpg",W="/react-advent-calendar-2022-nina/assets/8.3934e031.jpg",_="/react-advent-calendar-2022-nina/assets/9.ad4c9148.jpg",B="/react-advent-calendar-2022-nina/assets/10.79b3c376.jpg",J="/react-advent-calendar-2022-nina/assets/11.e083ac9c.jpg",P="/react-advent-calendar-2022-nina/assets/12.e73c63cb.jpg",F="/react-advent-calendar-2022-nina/assets/13.a27e86ad.jpg",G="/react-advent-calendar-2022-nina/assets/14.b9442583.jpg",K="/react-advent-calendar-2022-nina/assets/15.76895c31.jpg",U="/react-advent-calendar-2022-nina/assets/16.14b57ce7.jpg",Z="/react-advent-calendar-2022-nina/assets/17.3eca09ac.jpg",Q="/react-advent-calendar-2022-nina/assets/18.bc0929bd.jpg",T="/react-advent-calendar-2022-nina/assets/19.417f6471.jpg",V="/react-advent-calendar-2022-nina/assets/20.c4c8cbf9.jpg",X="/react-advent-calendar-2022-nina/assets/21.12793fb4.jpg",ee="/react-advent-calendar-2022-nina/assets/22.a9686536.jpg",ae="/react-advent-calendar-2022-nina/assets/23.4f068442.jpg",te="/react-advent-calendar-2022-nina/assets/24.2f3c0ee2.jpg";const ne=M`
  body {
    background: center / cover url(${O});
    margin: 0;
    height: 100vh;
  }
`,re=u.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 40px; /* 40px */
`,se=e=>{for(let a=e.length-1;a>0;a--){const n=Math.floor(Math.random()*(a+1));[e[a],e[n]]=[e[n],e[a]]}return e},oe=[{nr:1,img:A,text:"",open:!1},{nr:2,img:z,text:"",open:!1},{nr:3,img:H,text:"",open:!1},{nr:4,img:q,text:"",open:!1},{nr:5,img:E,text:"",open:!1},{nr:6,img:R,text:"",open:!1},{nr:7,img:Y,text:"",open:!1},{nr:8,img:W,text:"",open:!1},{nr:9,img:_,text:"",open:!1},{nr:10,img:B,text:"",open:!1},{nr:11,img:J,text:"",open:!1},{nr:12,img:P,text:"",open:!1},{nr:13,img:F,text:"",open:!1},{nr:14,img:G,text:"",open:!1},{nr:15,img:K,text:"",open:!1},{nr:16,img:U,text:"",open:!1},{nr:17,img:Z,text:"",open:!1},{nr:18,img:Q,text:"",open:!1},{nr:19,img:T,text:"",open:!1},{nr:20,img:V,text:"",open:!1},{nr:21,img:X,text:"",open:!1},{nr:22,img:ee,text:"",open:!1},{nr:23,img:ae,text:"",open:!1},{nr:24,img:te,text:"",open:!1}],ie=()=>se(oe),ce=()=>{const[e,a]=c.useState(localStorage.getItem("calendar")!==void 0?JSON.parse(localStorage.calendar):ie());c.useEffect(()=>{localStorage.setItem("calendar",JSON.stringify(e))},[e]);const n=c.useCallback(t=>{a(r=>r.map(s=>s.nr===t?v(m({},s),{open:!s.open}):s))},[]),i=c.useCallback(t=>{const s=new Date().toLocaleString("en-US",{timeZone:"Australia/Darwin"}).split("/"),l=parseInt(s[1]),d=parseInt(s[0]),p=parseInt(s[2].split(",")[0]),b=12;return p>2022||l>=24||d===b&&t<=l?!0:(console.log("Local date in Darwin: "+p+"-"+d+"-"+l),!1)},[]);return x(re,{children:[o(ne,{}),e.map(t=>o(N,{hatch:t,handleClick:n,enabledCallback:i},t.nr))]})};$.render(o(c.StrictMode,{children:o(ce,{})}),document.getElementById("root"));
