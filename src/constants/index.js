import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN-Stack Developer",
    icon: nodejs,
  },
  {
    title: "Front-End Developer",
    icon: reactjs,
  },
  {
    title: "Intrested In Three.js",
    icon: threejs,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Crinix Labs",
    icon: reactjs,
    iconBg: "#383E56",
    date: "December 2023 - Ongoing",
    points: [
      "My First React Project, I Devloping And Maintaining Frontend Designs",
      "Game-Server Management Web Panel | Inspired By Pterodactyl",
      "Collaborating with cross-functional teams including Backend Devs, Production managers, and other developers to create high-quality Panel.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Water MC Network",
    company_name: "tailwind",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "13 September 2024 - 27 September 2024",
    points: [
      "Website For a Minecraft Network!",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a Panel as beautiful as our Hosting, but Vspcoderz proved me wrong.",
    name: "Tha_YT",
    designation: "Founder",
    company: "Quakz",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients And Their Projects!' success like Vspcoderz does.",
    name: "Urilax",
    designation: "Owner",
    company: "Crinix Cloud",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Faulty Calculator",
    description:
      "Javascript Based Simple Faulty Calculator That Answers Incorrect Everytime!",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML 5",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Lunix-x Panel",
    description:
      "Web Panel That Manage Game-servers With ease!, With Minimal UI With React.js And Backend By Node.js Sleek And Morden Ui And Best Features",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/crinix-labs/lunix-x-panel",
  },
  {
    name: "3D Portfolio",
    description:
      "my First Three.js And React-Three-Fibre Project",
    tags: [
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwid",
        color: "pink-text-gradient",
      },
      {
          name: "React Three Fibre",
          color: "blue-text-gradient",
        },

    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
