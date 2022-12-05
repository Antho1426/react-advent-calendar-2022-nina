import React from 'react';
import Hatch from './components/Hatch/Hatch';

// Styles
//import { GlobalStyle, StyledApp } from './App.styles';

//=== Content from App.styles.ts ===
//==================================

import styled, { createGlobalStyle } from 'styled-components';

import calendar_backdrop from './img/calendar_backdrop.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    background: center / cover url(${calendar_backdrop});
    margin: 0;
    height: 100vh;
  }
`;

const StyledApp = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 40px; /* 40px */
`;

//==================================
//==================================

// DONE: change those pictures with actual pictures of Nina and I from the beginning of our story
// Image paths
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';
import img9 from './img/9.jpg';
import img10 from './img/10.jpg';
import img11 from './img/11.jpg';
import img12 from './img/12.jpg';
import img13 from './img/13.jpg';
import img14 from './img/14.jpg';
import img15 from './img/15.jpg';
import img16 from './img/16.jpg';
import img17 from './img/17.jpg';
import img18 from './img/18.jpg';
import img19 from './img/19.jpg';
import img20 from './img/20.jpg';
import img21 from './img/21.jpg';
import img22 from './img/22.jpg';
import img23 from './img/23.jpg';
import img24 from './img/24.jpg';

// Helpers
//import { HatchType, createCalendar } from './helpers';

//=== Content from helpers.ts ===
//===============================

/**
 * Found this on Stackoverflow https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Shuffles array in place. ES6 version
 * @param {Array} a - An array containing the items.
 */
 const shuffle = (a: any[]) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export type HatchType = {
  nr: number;
  img: string;  // URL of the image in the "img" folder; all images are taken from "Unsplash" (https://unsplash.com) (when the application is built, it will go inside the "img" folder and grab the corresponding image based on its URL)
  text: string;
  open: boolean;  // By default all hatch are closed, so "open" boolean field is set to "false" by default
};

const hatchArray: HatchType[] = [
  {
    nr: 1,
    img: img1,
    text: "",  //'Can I have your picture so I can show Santa what I want for Christmas?',
    open: false
  },
  {
    nr: 2,
    img: img2,
    text: "",  //'What do you call people who are afraid of Santa Claus? Claustrophobic',
    open: false
  },
  {
    nr: 3,
    img: img3,
    text: "",  //"What is the best Christmas present ever? A broken drum - you can't beat it!",
    open: false
  },
  {
    nr: 4,
    img: img4,
    text: "",  //"How do you know when Santa's in the room? You can sense his presents.",
    open: false
  },
  {
    nr: 5,
    img: img5,
    text: "",  //'STRESSED is just DESSERTS spelled backward.',
    open: false
  },
  {
    nr: 6,
    img: img6,
    text: "",  //'What is the difference between snowmen and snowwomen? Snowballs.',
    open: false
  },
  {
    nr: 7,
    img: img7,
    text: "",  //'What nationality is Santa Claus? North Polish',
    open: false
  },
  {
    nr: 8,
    img: img8,
    text: "",  //'What kind of motorbike does Santa ride? A Holly Davidson!',
    open: false
  },
  {
    nr: 9,
    img: img9,
    text: "",  //"Who is never hungry at Christmas? The turkey - he's always stuffed!",
    open: false
  },
  {
    nr: 10,
    img: img10,
    text: "",  //'When you stop believing in Santa Claus is when you start getting clothes for Christmas!',
    open: false
  },
  {
    nr: 11,
    img: img11,
    text: "",  //"What goes 'oh oh oh'? Santa walking backwards.",
    open: false
  },
  {
    nr: 12,
    img: img12,
    text: "",  //"According to my kids' Christmas lists, they think this parenting gig pays pretty well.",
    open: false
  },
  {
    nr: 13,
    img: img13,
    text: "",  //"Which of Santa's reindeers needs to mind his manners the most? 'Rude'olph",
    open: false
  },
  {
    nr: 14,
    img: img14,
    text: "",  //'What will fall on the lawn first? An autumn leaf or a Christmas catalog?',
    open: false
  },
  {
    nr: 15,
    img: img15,
    text: "",  //'What do elves learn in school? The Elf-abet!',
    open: false
  },
  {
    nr: 16,
    img: img16,
    text: "",  //'How do you scare a snowman? You get a hairdryer!',
    open: false
  },
  {
    nr: 17,
    img: img17,
    text: "",  //"The main thing I want this holiday season is for someone to wake me when it's over.",
    open: false
  },
  {
    nr: 18,
    img: img18,
    text: "",  //'Remember, children. The best way to get a puppy for Christmas is to beg for a baby brother.',
    open: false
  },
  {
    nr: 19,
    img: img19,
    text: "",  //"I bought my son a fridge for Christmas. – I can't wait to see his face light up when he opens it.",
    open: false
  },
  {
    nr: 20,
    img: img20,
    text: "",  //"Santa's elves are just a bunch of subordinate Clauses.",
    open: false
  },
  {
    nr: 21,
    img: img21,
    text: "",  //'What is the best evidence that Microsoft has a monopoly? Santa Claus had to switch from Chimneys to Windows.',
    open: false
  },
  {
    nr: 22,
    img: img22,
    text: "",  //'Why do programmers always mix up Halloween and Christmas? Because 31 OCT = 25 DEC.',
    open: false
  },
  {
    nr: 23,
    img: img23,
    text: "",  //'What does Santa suffer from if he gets stuck in a chimney? Claustrophobia!',
    open: false
  },
  {
    nr: 24,
    img: img24,
    text: "",  //"What's red and white, red and white, red and white? Sant rolling off your roof.",
    open: false
  }
];

const createCalendar = (): HatchType[] => shuffle(hatchArray);

//===============================
//===============================

const App: React.FC = () => {

  // DONE: Switch to "localStorage" mode when development and testing are finished.
  // A) ==== localStorage =====
  //===========================
  // // This will populate the state with the hatches
  // const [hatches, setHatches] = React.useState<HatchType[]>(localStorage.getItem("calendar") !== undefined ? JSON.parse(localStorage.calendar) : createCalendar());  // cf. "Stack Overflow - "undefined" is not valid JSON" (https://stackoverflow.com/questions/73455972/undefined-is-not-valid-json)
  const [hatches, setHatches] = React.useState<HatchType[]>(
    localStorage.calendar === undefined ? createCalendar() : JSON.parse(localStorage.calendar)
  );
    
  // // Store calendar in localStorage (every time the hatches will change, we are going to save them to localStorage)
  React.useEffect(() => {
    localStorage.setItem('calendar', JSON.stringify(hatches));
  }, [hatches]);
  //===========================
  //===========================

  // B) === No localStorage ===
  //===========================
  //const [hatches, setHatches] = React.useState<HatchType[]>(createCalendar());
  //===========================
  //===========================

  const handleClickHatch = React.useCallback((nr: number): void => {
    setHatches(prev => prev.map(hatch => (hatch.nr === nr ? { ...hatch, open: !hatch.open } : hatch)));  // with "!hatch.open", if it is "true" it will become "false" and if it is "false" it will become "true" 
  }, []);

  // Making sure the user can't click on a hatch if its date is not yet passed or it is not today
  const isHatchEnabled = React.useCallback((nr: number): boolean => {
  
    // /!\ UTC time is the local time at Greenwich England! Since Nina will be in Australia during the entire month of December 2022, I am interested in the local date in Darwin, in the middle of Australia in terms of time zone!
    /*
    const date = new Date();
    const day = date.getUTCDate();
    const month = date.getMonth();  // starts with 0, meaning that 11 ≡ December
    const year = date.getFullYear();
    */
    const dateDarwin = new Date().toLocaleString("en-US", {timeZone: "Australia/Darwin"});  // cf. "Stack Overflow - How to get the Australian Time Zone using Javascript? (Not JQuery)" (https://stackoverflow.com/questions/29984895/how-to-get-the-australian-time-zone-using-javascript-not-jquery)
    const dateArray = dateDarwin.split("/");
    const day = parseInt(dateArray[1]);
    const month = parseInt(dateArray[0]);
    const year = parseInt(dateArray[2].split(",")[0]);

    // DONE: change from "11" (i.e., November) to "12" (i.e., December) after final testing of the app.
    const targetMonth = 12;  // 12 ≡ December

    if (year > 2022 || day >= 24) return true;  // in case 2022 is over or the 24th of December is passed, then we enable all of the hatches (there is no use to block the user from clicking on the hatches after 2022)
    if (month === targetMonth && nr <= day) return true;  // with this line, if the month is december and the number of the hatch is less or equal to the current date, then it's possible to click the hatch!
    console.log("Local date in Darwin: " + year + "-" + month + "-" + day);

    return false;
  }, []);  // "[]" is the dependency array (it is empty because this function does not depend on anything outside of it)

  return (
    <StyledApp>
      <GlobalStyle />
      {hatches.map(hatch => (
        <Hatch key={hatch.nr} hatch={hatch} handleClick={handleClickHatch} enabledCallback={isHatchEnabled} />
      ))}
    </StyledApp>
  );
};

export default App;
