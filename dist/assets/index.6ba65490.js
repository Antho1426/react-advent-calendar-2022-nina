var j=Object.defineProperty,y=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var p=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))M.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>y(e,v(t));import{s as f,j as m,R as l,W as w,a as C}from"./vendor.43d5f896.js";const S=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};S();var $="/react-advent-calendar-2022-nina/assets/hatch_backdrop_v5.b61df97a.jpg";const z=f.div`
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
`,i=m.exports.jsx,u=m.exports.jsxs,D=({hatch:{nr:e,text:t,img:n,open:a},handleClick:s,enabledCallback:r})=>u(z,{open:a,background:n,enabled:r(e),onClick:()=>s(e),children:[console.log("re-render"),i("div",{className:"front",children:i("p",{children:e})}),i("div",{className:"back",children:i("p",{children:t})})]});var H=l.memo(D);const L=e=>{for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e},N=[{nr:1,img:"./public/assets/img/1.jpg",text:"",open:!1},{nr:2,img:"./public/assets/img/2.jpg",text:"",open:!1},{nr:3,img:"./public/assets/img/3.jpg",text:"",open:!1},{nr:4,img:"./public/assets/img/4.jpg",text:"",open:!1},{nr:5,img:"./public/assets/img/5.jpg",text:"",open:!1},{nr:6,img:"./public/assets/img/6.jpg",text:"",open:!1},{nr:7,img:"./public/assets/img/7.jpg",text:"",open:!1},{nr:8,img:"./public/assets/img/8.jpg",text:"",open:!1},{nr:9,img:"./public/assets/img/9.jpg",text:"",open:!1},{nr:10,img:"./public/assets/img/10.jpg",text:"",open:!1},{nr:11,img:"./public/assets/img/11.jpg",text:"",open:!1},{nr:12,img:"./public/assets/img/12.jpg",text:"",open:!1},{nr:13,img:"./public/assets/img/13.jpg",text:"",open:!1},{nr:14,img:"./public/assets/img/14.jpg",text:"",open:!1},{nr:15,img:"./public/assets/img/15.jpg",text:"",open:!1},{nr:16,img:"./public/assets/img/16.jpg",text:"",open:!1},{nr:17,img:"./public/assets/img/17.jpg",text:"",open:!1},{nr:18,img:"./public/assets/img/18.jpg",text:"",open:!1},{nr:19,img:"./public/assets/img/19.jpg",text:"",open:!1},{nr:20,img:"./public/assets/img/20.jpg",text:"",open:!1},{nr:21,img:"./public/assets/img/21.jpg",text:"",open:!1},{nr:22,img:"./public/assets/img/22.jpg",text:"",open:!1},{nr:23,img:"./public/assets/img/23.jpg",text:"",open:!1},{nr:24,img:"./public/assets/img/24.jpg",text:"",open:!1}],O=()=>L(N),Y=w`
  body {
    background: center / cover url("./public/assets/img/calendar_backdrop.jpg");
    margin: 0;
    height: 100vh;
  }
`,q=f.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 40px; /* 40px */
`,A=()=>{const[e,t]=l.useState(O()),n=l.useCallback(s=>{t(r=>r.map(o=>o.nr===s?d(g({},o),{open:!o.open}):o))},[]),a=l.useCallback(s=>{const r=new Date,o=r.getUTCDate(),b=r.getMonth(),h=r.getFullYear(),x=10;return h>2022||b===x&&s<=o},[]);return u(q,{children:[i(Y,{}),e.map(s=>i(H,{hatch:s,handleClick:n,enabledCallback:a},s.nr))]})};C.render(i(l.StrictMode,{children:i(A,{})}),document.getElementById("root"));
