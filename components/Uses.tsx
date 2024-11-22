import { uses } from "@/constants/uses";
import React from "react";

export const Uses = () => {
  return (
    <div>
      <h2 className="font-bold text-zinc-50 mb-2">Uses</h2>
      {uses.map((el, idx) => (
        <div key={`uses-${idx}`} className="my-8">
          <h4 className="text-base font-bold text-zinc-100">{el.name}</h4>
          <p className="text-sm text-zinc-400 leading-loose">
            {el.description}
          </p>
        </div>
      ))}
    </div>
  );
};
