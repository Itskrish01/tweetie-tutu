import React, { SetStateAction, useEffect, useRef, useState } from "react";
import { TweetData } from "../../store/context";
import { Textarea } from "../ui/textarea";

interface Editable_I {
  value: TweetData;
  className: string;
  name: string;
  setValue: React.Dispatch<SetStateAction<TweetData>>;
  maxChar: number;
}

const EditableInput = (props: Editable_I) => {
  const [isEditable, setIsEditable] = useState(false);
  const [value, setValue] = useState(props.value[props.name]);
  const textAreaRef = useRef<HTMLTextAreaElement>();
  useEffect(() => {
    if (textAreaRef && props.name === "content" && isEditable) {
      textAreaRef.current.style.height = "100px";
      const { scrollHeight } = textAreaRef.current;
      textAreaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [textAreaRef, value, isEditable, props.name]);
  return (
    <div className="w-full">
      {isEditable ? (
        props.name === "content" ? (
          <Textarea
            ref={textAreaRef}
            className={`p-0 dark:bg-slate-800 dark:border-slate-300 bg-slate-200 w-full rounded-md focus:outline-none outline-none ${props.className}`}
            value={isEditable ? value : props.value[props.name]}
            onChange={(e) => setValue(e.target.value)}
            maxLength={props.maxChar}
            autoFocus
            onFocus={(e) => e.target.select()}
            onBlur={() => {
              if (value.length !== 0) {
                setIsEditable(false);
                props.setValue({ ...props.value, [props.name]: value });
              }
            }}
            rows={6}
          />
        ) : (
          <input
            className={`p-0 bg-slate-200 h-[16px] w-full rounded-md border-none focus:outline-none outline-none ${props.className}`}
            value={isEditable ? value : props.value[props.name]}
            onChange={(e) => setValue(e.target.value)}
            maxLength={props.maxChar}
            autoFocus
            onFocus={(e) => e.target.select()}
            onBlur={() => {
              if (value.length !== 0) {
                setIsEditable(false);
                props.setValue({ ...props.value, [props.name]: value });
              }
            }}
          />
        )
      ) : (
        <div
          className="hover:bg-slate-100 border-2 border-slate-300 border-dashed dark:text-slate-200 dark:hover:bg-slate-600 transition-all duration-150 rounded-md cursor-pointer"
          onClick={() => {
            setIsEditable(true);
          }}
        >
          <span className={props.className + " "}>
            {props.name === "username"
              ? "@" + props.value[props.name]
              : props.value[props.name]}
          </span>
        </div>
      )}
      {/* {isEditable && ( */}
      <div
        className={`${
          isEditable ? "max-h-4" : "max-h-0"
        } overflow-hidden text-slate-400 transition-[max-height] duration-150 ease-in text-xs`}
      >
        {value.length}/{props.maxChar} Characters
      </div>
      {/* )}  */}
    </div>
  );
};

export default EditableInput;
