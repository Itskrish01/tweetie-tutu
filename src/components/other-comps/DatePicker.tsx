"use client";

import { format } from "date-fns";
import TimePicker from 'react-time-picker';

import { Calendar } from "../../components/ui/calendar";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { useTweetContext } from "../../store/context";

export function DatePicker() {
  const { tweetData, setTweetData } = useTweetContext();

  return (
    <div>
        <Popover>
          <PopoverTrigger className="w-auto" asChild>
            <div className="flex gap-2 px-1 w-[120px] cursor-pointer items-center dark:text-slate-400 text-slate-500 text-sm hover:bg-slate-100 rounded-lg">
              {tweetData.timestamp ? (
                tweetData.time ? tweetData.time + " · " + format(tweetData.timestamp, "PP") : "3:50" + " · " + format(tweetData.timestamp, "PP") 
              ) : (
                <span>Pick a date</span>
              )}
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={tweetData.timestamp}
              onSelect={(date) =>
                setTweetData({ ...tweetData, timestamp: date })
              }
              initialFocus
            />
            <TimePicker className='w-full' value={tweetData.time} onChange={(time) =>
                setTweetData({ ...tweetData, time: time })
              } 
              />
          </PopoverContent>
        </Popover>
  
    </div>
  );
}
