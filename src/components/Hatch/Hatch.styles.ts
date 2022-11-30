import styled from 'styled-components';
//import hatchBackdrop from '../../img/hatch_backdrop.jpg';  // v1
//import hatchBackdrop from '../../img/hatch_backdrop_v2.jpg';  // v2
//import hatchBackdrop from '../../img/hatch_backdrop_v3.jpg';  // v3
//import hatchBackdrop from '../../img/hatch_backdrop_v4.jpg';  // v4
import hatchBackdrop from '../../img/hatch_backdrop_v5.jpg';  // v5
//import img_1_b from '../../img/1_b.jpg';

// type Props = {
//   open: boolean;
//   background: string;
//   backsideimg: string;
//   enabled: boolean;
// };
type Props = {
  open: boolean;
  background: string;
  enabled: boolean;
};

export const Wrapper = styled.div<Props>`
  padding-top: 100%; /* padding-top is based on the width - believe it or not!!! */
  position: relative;
  cursor: pointer;
  pointer-events: ${({ enabled }) => (enabled ? '' : 'none')};

  .front {
    background: center / cover url(${props => props.background});
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transform: ${props => (props.open ? 'rotateY(180deg)' : 'rotateY(0deg)')};
    
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
      background: center / cover url(${hatchBackdrop});
      font-weight: 700; /* 700 */
      font-size: 6rem; /* 4rem */
      user-select: none;
    }
  }

  .back {
    background: center / cover url(${props => props.background});
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: ${props => (props.open ? 2 : 1)};
    transform: ${props => (props.open ? 'rotateY(0deg)' : 'rotateY(180deg)')};

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
`;
