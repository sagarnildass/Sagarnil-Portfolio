import { stack } from "./stack";

export const projects = [
  {
    title: "Atlassoft",
    description:
      "A web app that handles a lot of retail operations like Inventory Management with Reinforcement Learning, CLTV Prediction, etc.",
    image: "/images/projects/atlassoft_v2.png",
    stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
    link: "https://preprodapp.atlassoft.com/",
  },
  {
    title: "Mind Matters",
    description:
      "A mental health app that detects emotions and suicidal tendencies with AI. It guides users to the right resources and professionals.",
    image: "/images/projects/mind_matters.png",
    stack: [stack.react, stack.tailwindcss, stack.typescript],
    link: "https://mindmatters.artelus.in/",
  },

  {
    title: "Filmpire",
    description:
      "A web app that helps you discover movies and TV shows. It also has a recommendation engine based on your watch history.",
    image: "/images/projects/filmpire.png",
    stack: [stack.react, stack.tailwindcss, stack.typescript],
    link: "https://filmpiresagarnil.netlify.app/",
  },
  {
    title: "ShareMe",
    description:
      "A Pinterest clone that lets you share images and videos with the world. It has a like and comment system. It also has a search feature.",
    image: "/images/projects/shareme.png",
    stack: [stack.react, stack.tailwindcss, stack.typescript],
    link: "https://shareme-sagarnil.netlify.app/",
  },
];
