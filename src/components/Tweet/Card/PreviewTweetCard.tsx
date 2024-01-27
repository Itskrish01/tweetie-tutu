import React from "react";
import { useTweetContext } from "../../../store/context";
import UserAvatar from "../PreviewCardComponents/UserAvatar";
import { cn, getFormattedNumber, getVerifiedIcon } from "../../../lib/utils";
import { format } from "date-fns";
import Interaction from "../PreviewCardComponents/Interaction";
import {
  BookmarkIcon,
  CommentTweet,
  LikeIcon,
  ReTweet,
} from "../../../icons/getIcons";
import { UploadIcon } from "lucide-react";

const PreviewTweetCard = React.forwardRef(
  (props, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { tweetData, selectedBgColor } = useTweetContext();
    return (
      <div
        ref={ref}
        id="card-contents-tweet"
        className={cn("bg-white  sm:w-[90%] py-20 md:w-1/2 lg:w-2/4 px-4 sm:px-20", selectedBgColor.colorCode)}
      >
        <div className="w-full p-4 bg-white/80 dark:bg-slate-900 shadow-lg border dark:border-gray-700 border-gray-200 rounded-lg">
          <div className="flex gap-4 items-center">
            <UserAvatar
              src={tweetData.userProfileImage as string}
              username={tweetData.username}
            />
            <div>
              <div className="flex gap-2 items-center">
                <h6 className="font-semibold dark:text-slate-200">
                  {tweetData.displayName}
                </h6>
                {tweetData.tickType !== "none" && (
                  <img
                    className="h-5 w-5 object-contain"
                    src={getVerifiedIcon(tweetData.tickType)}
                  />
                )}
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-4">
                @{tweetData.username}
              </p>
            </div>
          </div>
          <div className="mt-3">
            <p className="dark:text-slate-200">{tweetData.content}</p>
            {tweetData.contentImage.toString().length !== 0 && (
              <img
                src={tweetData.contentImage as string}
                alt="image"
                className="mt-2 rounded-md h-full w-full  border  border-slate-200"
              />
            )}
          </div>
          <div className="mt-4 pb-2 border-b gap-1 flex items-center dark:border-slate-400 border-slate-200">
            <div className="flex gap-3 items-center dark:text-slate-400 text-slate-500 text-sm">
              {tweetData.timestamp ? (
                tweetData.time ? (
                  tweetData.time + " · " + format(tweetData.timestamp, "PP")
                ) : (
                  "3:50" + " · " + format(tweetData.timestamp, "PP")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </div>
            <Interaction value={tweetData.views} label="Views" />
          </div>
          <div className="flex items-center g justify-between mt-4">
            <div className="flex items-center gap-1 dark:text-slate-400 text-slate-500 text-sm">
              {CommentTweet} {getFormattedNumber(tweetData.retweets)}
            </div>
            <div className="flex items-center gap-1 dark:text-slate-400 text-slate-500 text-sm">
              {ReTweet} {getFormattedNumber(tweetData.quotes)}
            </div>
            <div className="flex items-center gap-1 dark:text-slate-400 text-slate-500 text-sm">
              {LikeIcon} {getFormattedNumber(tweetData.likes)}
            </div>
            <div className="flex items-center gap-1 dark:text-slate-400 text-slate-500 text-sm">
              {BookmarkIcon} {getFormattedNumber(tweetData.bookmarks)}
            </div>
            <UploadIcon className="h-5 w-5 dark:text-slate-200 text-slate-500" />
          </div>
        </div>
      </div>
    );
  }
);

export default PreviewTweetCard;
