import React from "react";
import { getFormattedNumber } from "../../../lib/utils";

interface Interaction_I {
  value: number;
  label: string;
}

const Interaction = (props: Interaction_I) => {
  return (
    <div className="flex items-center gap-1 text-sm  transition-all duration-150 rounded-md px-1">
      {" "}
      <div className="font-bold dark:text-slate-200">{getFormattedNumber(props.value)}</div>
      <span className="text-slate-500 dark:text-slate-400">{props.label}</span>
    </div>
  );
};

export default Interaction;
