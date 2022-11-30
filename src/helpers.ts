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

// export type HatchType = {
//   nr: number;
//   img: string;  // URL of the image in the "img" folder; all images are taken from "Unsplash" (https://unsplash.com) (when the application is built, it will go inside the "img" folder and grab the corresponding image based on its URL)
//   imgb: string;
//   open: boolean;  // By default all hatch are closed, so "open" boolean field is set to "false" by default
// };
export type HatchType = {
  nr: number;
  img: string;  // URL of the image in the "img" folder; all images are taken from "Unsplash" (https://unsplash.com) (when the application is built, it will go inside the "img" folder and grab the corresponding image based on its URL)
  text: string;
  open: boolean;  // By default all hatch are closed, so "open" boolean field is set to "false" by default
};

// Bad one-liners from https://onelinefun.com/christmas
// export const hatchArray: HatchType[] = [
//   {
//     nr: 1,
//     img: './public/assets/img/1.jpg',
//     imgb: './public/assets/img/1_b.jpg',
//     open: false
//   },
//   {
//     nr: 2,
//     img: './public/assets/img/2.jpg',
//     imgb: './public/assets/img/2_b.jpg',
//     open: false
//   },
//   {
//     nr: 3,
//     img: './public/assets/img/3.jpg',
//     imgb: './public/assets/img/3_b.jpg',
//     open: false
//   },
//   {
//     nr: 4,
//     img: './public/assets/img/4.jpg',
//     imgb: './public/assets/img/4_b.jpg',
//     open: false
//   },
//   {
//     nr: 5,
//     img: './public/assets/img/5.jpg',
//     imgb: './public/assets/img/5_b.jpg',
//     open: false
//   },
//   {
//     nr: 6,
//     img: './public/assets/img/6.jpg',
//     imgb: './public/assets/img/6_b.jpg',
//     open: false
//   },
//   {
//     nr: 7,
//     img: './public/assets/img/7.jpg',
//     imgb: './public/assets/img/7_b.jpg',
//     open: false
//   },
//   {
//     nr: 8,
//     img: './public/assets/img/8.jpg',
//     imgb: './public/assets/img/8_b.jpg',
//     open: false
//   },
//   {
//     nr: 9,
//     img: './public/assets/img/9.jpg',
//     imgb: './public/assets/img/9_b.jpg',
//     open: false
//   },
//   {
//     nr: 10,
//     img: './public/assets/img/10.jpg',
//     imgb: './public/assets/img/10_b.jpg',
//     open: false
//   },
//   {
//     nr: 11,
//     img: './public/assets/img/11.jpg',
//     imgb: './public/assets/img/11_b.jpg',
//     open: false
//   },
//   {
//     nr: 12,
//     img: './public/assets/img/12.jpg',
//     imgb: './public/assets/img/12_b.jpg',
//     open: false
//   },
//   {
//     nr: 13,
//     img: './public/assets/img/13.jpg',
//     imgb: './public/assets/img/13_b.jpg',
//     open: false
//   },
//   {
//     nr: 14,
//     img: './public/assets/img/14.jpg',
//     imgb: './public/assets/img/14_b.jpg',
//     open: false
//   },
//   {
//     nr: 15,
//     img: './public/assets/img/15.jpg',
//     imgb: './public/assets/img/15_b.jpg',
//     open: false
//   },
//   {
//     nr: 16,
//     img: './public/assets/img/16.jpg',
//     imgb: './public/assets/img/16_b.jpg',
//     open: false
//   },
//   {
//     nr: 17,
//     img: './public/assets/img/17.jpg',
//     imgb: './public/assets/img/17_b.jpg',
//     open: false
//   },
//   {
//     nr: 18,
//     img: './public/assets/img/18.jpg',
//     imgb: './public/assets/img/18_b.jpg',
//     open: false
//   },
//   {
//     nr: 19,
//     img: './public/assets/img/19.jpg',
//     imgb: './public/assets/img/19_b.jpg',
//     open: false
//   },
//   {
//     nr: 20,
//     img: './public/assets/img/20.jpg',
//     imgb: './public/assets/img/20_b.jpg',
//     open: false
//   },
//   {
//     nr: 21,
//     img: './public/assets/img/21.jpg',
//     imgb: './public/assets/img/21_b.jpg',
//     open: false
//   },
//   {
//     nr: 22,
//     img: './public/assets/img/22.jpg',
//     imgb: './public/assets/img/22_b.jpg',
//     open: false
//   },
//   {
//     nr: 23,
//     img: './public/assets/img/23.jpg',
//     imgb: './public/assets/img/23_b.jpg',
//     open: false
//   },
//   {
//     nr: 24,
//     img: './public/assets/img/24.jpg',
//     imgb: './public/assets/img/24_b.jpg',
//     open: false
//   }
// ];
export const hatchArray: HatchType[] = [
  {
    nr: 1,
    img: './public/assets/img/1.jpg',
    text: "",  //'Can I have your picture so I can show Santa what I want for Christmas?',
    open: false
  },
  {
    nr: 2,
    img: './public/assets/img/2.jpg',
    text: "",  //'What do you call people who are afraid of Santa Claus? Claustrophobic',
    open: false
  },
  {
    nr: 3,
    img: './public/assets/img/3.jpg',
    text: "",  //"What is the best Christmas present ever? A broken drum - you can't beat it!",
    open: false
  },
  {
    nr: 4,
    img: './public/assets/img/4.jpg',
    text: "",  //"How do you know when Santa's in the room? You can sense his presents.",
    open: false
  },
  {
    nr: 5,
    img: './public/assets/img/5.jpg',
    text: "",  //'STRESSED is just DESSERTS spelled backward.',
    open: false
  },
  {
    nr: 6,
    img: './public/assets/img/6.jpg',
    text: "",  //'What is the difference between snowmen and snowwomen? Snowballs.',
    open: false
  },
  {
    nr: 7,
    img: './public/assets/img/7.jpg',
    text: "",  //'What nationality is Santa Claus? North Polish',
    open: false
  },
  {
    nr: 8,
    img: './public/assets/img/8.jpg',
    text: "",  //'What kind of motorbike does Santa ride? A Holly Davidson!',
    open: false
  },
  {
    nr: 9,
    img: './public/assets/img/9.jpg',
    text: "",  //"Who is never hungry at Christmas? The turkey - he's always stuffed!",
    open: false
  },
  {
    nr: 10,
    img: './public/assets/img/10.jpg',
    text: "",  //'When you stop believing in Santa Claus is when you start getting clothes for Christmas!',
    open: false
  },
  {
    nr: 11,
    img: './public/assets/img/11.jpg',
    text: "",  //"What goes 'oh oh oh'? Santa walking backwards.",
    open: false
  },
  {
    nr: 12,
    img: './public/assets/img/12.jpg',
    text: "",  //"According to my kids' Christmas lists, they think this parenting gig pays pretty well.",
    open: false
  },
  {
    nr: 13,
    img: './public/assets/img/13.jpg',
    text: "",  //"Which of Santa's reindeers needs to mind his manners the most? 'Rude'olph",
    open: false
  },
  {
    nr: 14,
    img: './public/assets/img/14.jpg',
    text: "",  //'What will fall on the lawn first? An autumn leaf or a Christmas catalog?',
    open: false
  },
  {
    nr: 15,
    img: './public/assets/img/15.jpg',
    text: "",  //'What do elves learn in school? The Elf-abet!',
    open: false
  },
  {
    nr: 16,
    img: './public/assets/img/16.jpg',
    text: "",  //'How do you scare a snowman? You get a hairdryer!',
    open: false
  },
  {
    nr: 17,
    img: './public/assets/img/17.jpg',
    text: "",  //"The main thing I want this holiday season is for someone to wake me when it's over.",
    open: false
  },
  {
    nr: 18,
    img: './public/assets/img/18.jpg',
    text: "",  //'Remember, children. The best way to get a puppy for Christmas is to beg for a baby brother.',
    open: false
  },
  {
    nr: 19,
    img: './public/assets/img/19.jpg',
    text: "",  //"I bought my son a fridge for Christmas. – I can't wait to see his face light up when he opens it.",
    open: false
  },
  {
    nr: 20,
    img: './public/assets/img/20.jpg',
    text: "",  //"Santa's elves are just a bunch of subordinate Clauses.",
    open: false
  },
  {
    nr: 21,
    img: './public/assets/img/21.jpg',
    text: "",  //'What is the best evidence that Microsoft has a monopoly? Santa Claus had to switch from Chimneys to Windows.',
    open: false
  },
  {
    nr: 22,
    img: './public/assets/img/22.jpg',
    text: "",  //'Why do programmers always mix up Halloween and Christmas? Because 31 OCT = 25 DEC.',
    open: false
  },
  {
    nr: 23,
    img: './public/assets/img/23.jpg',
    text: "",  //'What does Santa suffer from if he gets stuck in a chimney? Claustrophobia!',
    open: false
  },
  {
    nr: 24,
    img: './public/assets/img/24.jpg',
    text: "",  //"What's red and white, red and white, red and white? Sant rolling off your roof.",
    open: false
  }
];

export const createCalendar = (): HatchType[] => shuffle(hatchArray);
