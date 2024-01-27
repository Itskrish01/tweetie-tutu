import React, { SetStateAction, useState } from "react";
import { TweetData } from "../../store/context";
import { getFormattedNumber } from "../../lib/utils";

interface Editable_I {
  value: TweetData;
  className: string;
  name: string;
  setValue: React.Dispatch<SetStateAction<TweetData>>;
  label: string;
}

const NumberEditable = (props: Editable_I) => {
  const [isEditable, setIsEditable] = useState(false);
  const [value, setValue] = useState<number>(props.value[props.name]);

  return (
    <div
      className="flex border-2 border-slate-300 border-dashed items-center gap-1 text-sm dark:hover:bg-slate-600 hover:bg-slate-100 transition-all duration-150 rounded-md cursor-pointer px-1"
      onClick={() => setIsEditable(true)}
    >
      {isEditable ? (
        <input
          type="number"
          onFocus={(e) => e.target.select()}
          autoFocus
          value={Number.isNaN(value) ? 0 : value}
          style={{ maxWidth: `${(value.toString().length + 1) * 7}px` }}
          className="p-0 bg-transparent font-bold h-[17px]  rounded-md border-none focus:outline-none outline-none"
          onChange={(e) => setValue(parseInt(e.target.value))}
          onBlur={() => {
            if (value !== 0 && !Number.isNaN(value)) {
              setIsEditable(false);
              props.setValue({ ...props.value, [props.name]: value });
            } else {
              setIsEditable(false);
              props.setValue({ ...props.value, [props.name]: 0 });
            }
          }}
        />
      ) : (
        <div className="font-bold dark:text-slate-100 ">{Number.isNaN(value) ? 0 : getFormattedNumber(value)}</div>
      )}
      <span className="text-slate-500 dark:text-slate-400">{props.label}</span>
    </div>
  );
};

export default NumberEditable;
