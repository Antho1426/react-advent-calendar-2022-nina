import React from 'react';
import Hatch from './components/Hatch/Hatch';
import { HatchType, createCalendar } from './helpers';
// Styles
import { GlobalStyle, StyledApp } from './App.styles';

const App: React.FC = () => {
  
  // TODO: Switch to localStorage mode when development and testing will be finished!
  // A) === localStorage ===
  // // This will populate the state with the hatches
  // // const [hatches, setHatches] = React.useState<HatchType[]>(
  // //   localStorage.calendar ? JSON.parse(localStorage.calendar) : createCalendar()
  // // );
  // // const [hatches, setHatches] = React.useState<HatchType[]>(
  // //   localStorage.calendar !== 'undefined' ? JSON.parse(localStorage.calendar) : createCalendar()
  // // );
  // const [hatches, setHatches] = React.useState<HatchType[]>(localStorage.getItem("calendar") !== undefined ? JSON.parse(localStorage.calendar) : createCalendar());  // cf. "Stack Overflow - "undefined" is not valid JSON" (https://stackoverflow.com/questions/73455972/undefined-is-not-valid-json)
  // // const isObject = (object: unknown): object is { [key: string]: any } => typeof object === "object" && object !== null;
  // // const [hatches, setHatches] = React.useState<HatchType[]>(
  // //   if (isObject(localStorage.getItem('calendar'))) {
  // //     JSON.parse(localStorage.getItem('calendar'));
  // //   } else {
  // //     createCalendar();
  // //   }
  // // );
    
  // // Store calendar in localStorage (every time the hatches will change, we are going to save them to localStorage)
  // React.useEffect(() => {
  //   localStorage.setItem('calendar', JSON.stringify(hatches));
  // }, [hatches]);
  //========================

  // A) === No localStorage ===
  const [hatches, setHatches] = React.useState<HatchType[]>(createCalendar());
  //===========================

  const handleClickHatch = React.useCallback((nr: number): void => {
    setHatches(prev => prev.map(hatch => (hatch.nr === nr ? { ...hatch, open: !hatch.open } : hatch)));  // with "!hatch.open", if it is "true" it will become "false" and if it is "false" it will become "true" 
  }, []);

  // Making sure the user can't click on a hatch if its date is not yet passed or it is not today
  const isHatchEnabled = React.useCallback((nr: number): boolean => {
    const date = new Date();

    const day = date.getUTCDate();
    const month = date.getMonth();  // starts with 0, meaning that 11 ≡ December
    const year = date.getFullYear();

    const targetMonth = 10;  // 11 ≡ December // TODO: change to 11 and not 10 after final testing!!!

    if (year > 2022) return true;  // in case 2022 is over, then we enable all of the hatches (there is no use to block the user from clicking on the hatches after 2022)
    if (month === targetMonth && nr <= day) return true;  // with this line, if the month is december and the number of the hatch is less or equal to the current date, then it's possible to click the hatch!

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
