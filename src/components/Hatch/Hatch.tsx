import React from 'react';

// Types
//import { HatchType } from '../../helpers';
import { HatchType } from '../../App';

// Styles
import { Wrapper } from './Hatch.styles';

type Props = {
  hatch: HatchType;
  handleClick: (nr: number) => void;
  enabledCallback: (nr: number) => boolean;
};

// The front side of the hatch is going to have a number and when we click on it turns around and shows the text
// (Properties "open", "background", "backsideimg" and "enabled" are defined in "Props" in Hatch.styles.ts)
// const Hatch: React.FC<Props> = ({ hatch: { nr, img, imgb, open }, handleClick, enabledCallback }) => (  // "FC" stands for "Function" and "Component"
//   <Wrapper open={open} background={img} backsideimg={imgb} enabled={enabledCallback(nr)} onClick={() => handleClick(nr)}>
//     {console.log('re-render')}
//     <div className='front'>
//       <p>{nr}</p>
//     </div>
//     <div className='back'>
//       <p>{imgb}</p>
//     </div>
//   </Wrapper>
// );
const Hatch: React.FC<Props> = ({ hatch: { nr, text, img, open }, handleClick, enabledCallback }) => (
  <Wrapper open={open} background={img} enabled={enabledCallback(nr)} onClick={() => handleClick(nr)}>
    {console.log('re-render')}
    <div className='front'>
      <p>{nr}</p>
    </div>
    <div className='back'>
      <p>{text}</p>
    </div>
  </Wrapper>
);

export default React.memo(Hatch);
