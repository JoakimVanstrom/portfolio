import { g00print, joakimPortfolio, defaultProject } from "../assets";

const projects = [
  {
    name: "G00print AB",
    description:
      "Web-based platform that allows users to contact and watch the company's services.",
    tags: [
      {
        name: "NX monorepo",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      
    
    ],
    image: g00print,
    source_code_link: "https://github.com/JoakimVanstrom/g00print-pg",
  },
  {
    name: "Joakim Portfolio",
    description:
      "My personal portfolio website.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
     
    ],
    image: joakimPortfolio,
    source_code_link: "https://github.com/JoakimVanstrom/portfolio",
  },
  {
    name: "PhoneCall app",
    description:
      "a web-based application that allows users to answer the incoming calls to the company's phone number.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: ".net",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: defaultProject,
    source_code_link: "https://github.com/JoakimVanstrom/lia-project",
  },
];

export default projects;
