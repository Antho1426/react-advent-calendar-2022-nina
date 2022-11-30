var b=Object.defineProperty,j=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var d=(e,a,n)=>a in e?b(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,g=(e,a)=>{for(var n in a||(a={}))k.call(a,n)&&d(e,n,a[n]);if(l)for(var n of l(a))M.call(a,n)&&d(e,n,a[n]);return e},p=(e,a)=>j(e,y(a));import{s as f,j as m,R as c,W as w,a as C}from"./vendor.43d5f896.js";const S=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}};S();var $="/react-advent-calendar-2022-nina/assets/hatch_backdrop_v5.b61df97a.jpg";const z=f.div`
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
      background: center / cover url(${$});
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
`,o=m.exports.jsx,v=m.exports.jsxs,D=({hatch:{nr:e,text:a,img:n,open:i},handleClick:t,enabledCallback:r})=>v(z,{open:i,background:n,enabled:r(e),onClick:()=>t(e),children:[console.log("re-render"),o("div",{className:"front",children:o("p",{children:e})}),o("div",{className:"back",children:o("p",{children:a})})]});var H=c.memo(D);const L=w`
  body {
    background: center / cover url("./src/img/calendar_backdrop.jpg");
    margin: 0;
    height: 100vh;
  }
`,N=f.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 40px; /* 40px */
`;var O="/react-advent-calendar-2022-nina/assets/1.54bf4f29.jpg",Y="/react-advent-calendar-2022-nina/assets/2.ac2af20d.jpg",q="/react-advent-calendar-2022-nina/assets/3.44e8582f.jpg",A="/react-advent-calendar-2022-nina/assets/4.ab203330.jpg",R="/react-advent-calendar-2022-nina/assets/5.d825a101.jpg",E="/react-advent-calendar-2022-nina/assets/6.6a5f2802.jpg",W="/react-advent-calendar-2022-nina/assets/7.ca78df92.jpg",_="/react-advent-calendar-2022-nina/assets/8.5fc786b6.jpg",B="/react-advent-calendar-2022-nina/assets/9.d0c3867b.jpg",F="/react-advent-calendar-2022-nina/assets/10.95e4c01a.jpg",I="/react-advent-calendar-2022-nina/assets/11.f9fa6130.jpg",P="/react-advent-calendar-2022-nina/assets/12.a0af6a86.jpg",G="/react-advent-calendar-2022-nina/assets/13.fff90b8d.jpg",K="/react-advent-calendar-2022-nina/assets/14.8cfc9900.jpg",T="/react-advent-calendar-2022-nina/assets/15.a671c81f.jpg",U="/react-advent-calendar-2022-nina/assets/16.54042af4.jpg",J="/react-advent-calendar-2022-nina/assets/17.36f98401.jpg",Q="/react-advent-calendar-2022-nina/assets/18.5de14ba1.jpg",V="/react-advent-calendar-2022-nina/assets/19.2f1e987c.jpg",X="/react-advent-calendar-2022-nina/assets/20.67daa176.jpg",Z="/react-advent-calendar-2022-nina/assets/21.06131101.jpg",ee="/react-advent-calendar-2022-nina/assets/22.e170c335.jpg",ae="/react-advent-calendar-2022-nina/assets/23.dba113c2.jpg",te="/react-advent-calendar-2022-nina/assets/24.429fd500.jpg";const ne=e=>{for(let a=e.length-1;a>0;a--){const n=Math.floor(Math.random()*(a+1));[e[a],e[n]]=[e[n],e[a]]}return e},re=[{nr:1,img:O,text:"",open:!1},{nr:2,img:Y,text:"",open:!1},{nr:3,img:q,text:"",open:!1},{nr:4,img:A,text:"",open:!1},{nr:5,img:R,text:"",open:!1},{nr:6,img:E,text:"",open:!1},{nr:7,img:W,text:"",open:!1},{nr:8,img:_,text:"",open:!1},{nr:9,img:B,text:"",open:!1},{nr:10,img:F,text:"",open:!1},{nr:11,img:I,text:"",open:!1},{nr:12,img:P,text:"",open:!1},{nr:13,img:G,text:"",open:!1},{nr:14,img:K,text:"",open:!1},{nr:15,img:T,text:"",open:!1},{nr:16,img:U,text:"",open:!1},{nr:17,img:J,text:"",open:!1},{nr:18,img:Q,text:"",open:!1},{nr:19,img:V,text:"",open:!1},{nr:20,img:X,text:"",open:!1},{nr:21,img:Z,text:"",open:!1},{nr:22,img:ee,text:"",open:!1},{nr:23,img:ae,text:"",open:!1},{nr:24,img:te,text:"",open:!1}],se=()=>ne(re),oe=()=>{const[e,a]=c.useState(se()),n=c.useCallback(t=>{a(r=>r.map(s=>s.nr===t?p(g({},s),{open:!s.open}):s))},[]),i=c.useCallback(t=>{const r=new Date,s=r.getUTCDate(),u=r.getMonth(),h=r.getFullYear(),x=10;return h>2022||u===x&&t<=s},[]);return v(N,{children:[o(L,{}),e.map(t=>o(H,{hatch:t,handleClick:n,enabledCallback:i},t.nr))]})};C.render(o(c.StrictMode,{children:o(oe,{})}),document.getElementById("root"));
