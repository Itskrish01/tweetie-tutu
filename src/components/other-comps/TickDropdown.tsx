"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTweetContext } from "../../store/context";
import { BlueTick, GoldTick, NoneTick } from "../../icons/getIcons";

export function TickDropdown() {
  const { tweetData, setTweetData } = useTweetContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="bg-slate-200 dark:bg-slate-800 cursor-pointer rounded border-2 border-dashed border-gray-400">
          <div>{tweetData.tickType === "blue" && BlueTick}</div>
          <div>{tweetData.tickType === "gold" && GoldTick}</div>
          <div>{tweetData.tickType === "none" && NoneTick}</div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={tweetData.tickType} onValueChange={(value: "none" | "blue" | "gold") => setTweetData({...tweetData, tickType: value})}>
          <DropdownMenuRadioItem value="none" className="flex gap-2">
            {NoneTick} No Tick
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="blue" className="flex gap-2">
            {BlueTick} Blue Tick
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="gold" className="flex gap-2">
            {GoldTick} Gold Tick
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
