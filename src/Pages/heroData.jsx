import mobile from "../assets/Images/mobile.png";
import tablet from "../assets/Images/tablet.png";
import laptop from "../assets/Images/laptop.jpg";
import heroImage2 from "../assets/Images/person.png";

const heroData = [
  {
    id: 1,
    images: [
      { src: heroImage2, className: "person" }
    ],
    title: "Hello, I'm MAI MOHAMED!",
    desc: "I’m passionate about growing into a Full Stack Developer and love blending logic with creativity — both in code and in art....",
    buttons: ["Download CV"]
  },
  {
    id: 2,
    images: [
      { src: laptop, className: "laptop" },
      { src: tablet, className: "tablet" },
      { src: mobile, className: "mobile" }
    ],
    title: "I'm FrontEnd React Developer",
    desc: "Skilled in building responsive websites that adapt seamlessly to all screen sizes and devices.",
    buttons: ["Explore My Work"]
  },
];

export default heroData;
