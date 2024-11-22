import {
  TbBrandNextjs,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";

export const stack = {
  nextjs: {
    name: "Next.js",
    id: "nextjs",
    icon: <TbBrandNextjs className="h-5 w-5 stroke-1" />,
  },
  tailwindcss: {
    name: "Tailwind CSS",
    id: "tailwindcss",
    icon: <TbBrandTailwind className="h-5 w-5 stroke-1" />,
  },
  typescript: {
    name: "Typescript",
    id: "typescript",
    icon: <TbBrandTypescript className="h-5 w-5 stroke-1" />,
  },
  react: {
    name: "React",
    id: "react",
    icon: <TbBrandReact className="h-5 w-5 stroke-1" />,
  },
};
