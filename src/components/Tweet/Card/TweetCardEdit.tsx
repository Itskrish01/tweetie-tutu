import { UploadIcon } from "lucide-react";
import {
  BookmarkIcon,
  CommentTweet,
  LikeIcon,
  ReTweet,
} from "../../../icons/getIcons";
import AnimatedNumber from "react-animated-number";
import { useTweetContext } from "../../../store/context";
import { DatePicker } from "../../other-comps/DatePicker";
import EditableInput from "../../other-comps/EditableInput";
import FileUpload from "../../other-comps/FileUpload";
import ImageUpload from "../../other-comps/ImageUpload";
import NumberEditable from "../../other-comps/NumberEditable";
import { TickDropdown } from "../../other-comps/TickDropdown";
import { getFormattedNumber } from "../../../lib/utils";

const TweetCardEdit = () => {
  const { tweetData, setTweetData } = useTweetContext();

  return (
    <div  className="w-full md:w-1/2 lg:w-2/5 p-4 bg-white dark:bg-slate-800 shadow-lg border border-gray-200 rounded-lg">
      <div className="flex gap-4">
        <ImageUpload />
        <div>
          <div className="flex gap-2">
            <EditableInput
              className="font-bold"
              value={tweetData}
              name="displayName"
              setValue={setTweetData}
              maxChar={20}
            />
            <div>
              <TickDropdown />
            </div>
          </div>
          <EditableInput
            className="text-gray-500 text-sm"
            value={tweetData}
            name="username"
            setValue={setTweetData}
            maxChar={15}
          />
        </div>
      </div>
      <div className="mt-3">
        <EditableInput
          className=""
          value={tweetData}
          name="content"
          setValue={setTweetData}
          maxChar={280}
        />
      </div>
      <div className="mt-2">
        <FileUpload />
      </div>
      <div className="mt-4 pb-2 border-b gap-1 flex items-center dark:border-slate-500 border-slate-200">
        <DatePicker />
        <NumberEditable
          value={tweetData}
          setValue={setTweetData}
          label="Views"
          className=""
          name="views"
        />
      </div>
      <div className="mt-4 pb-2 border-b-2 flex items-center gap-2 dark:border-slate-500 border-slate-200">
        <NumberEditable
          value={tweetData}
          setValue={setTweetData}
          label="Retweets"
          className=""
          name="retweets"
        />
        <NumberEditable
          value={tweetData}
          setValue={setTweetData}
          label="Quotes"
          className=""
          name="quotes"
        />
        <NumberEditable
          value={tweetData}
          setValue={setTweetData}
          label="Likes"
          className=""
          name="likes"
        />
        <NumberEditable
          value={tweetData}
          setValue={setTweetData}
          label="Bookmarks"
          className=""
          name="bookmarks"
        />
      </div>
      <div className="flex items-center g justify-between px-4 mt-4">
        <div className="flex items-center gap-1 dark:text-slate-400 text-slate-500 text-sm">
          {CommentTweet}{" "}
          <AnimatedNumber
            component="text"
            value={tweetData.retweets}
            style={{
              transition: "0.8s ease-out",
              fontSize: 14,
              transitionProperty: "background-color, color, opacity",
            }}
            
            duration={300}
            formatValue={(n) => getFormattedNumber(n)}
          />
        </div>
        <div className="flex items-center gap-1 dark:text-slate-400 text-slate-500 text-sm">
          {ReTweet}
          <AnimatedNumber
            component="text"
            value={tweetData.quotes}
            style={{
              transition: "0.8s ease-out",
              fontSize: 14,
              transitionProperty: "background-color, color, opacity",
            }}
            
            duration={300}
            formatValue={(n) => getFormattedNumber(n)}
          />
        </div>
        <div className="flex items-center gap-1 dark:text-slate-400 text-slate-500 text-sm">
          {LikeIcon}{" "}
          <AnimatedNumber
            component="text"
            value={tweetData.likes}
            style={{
              transition: "0.8s ease-out",
              fontSize: 14,
              transitionProperty: "background-color, color, opacity",
            }}
            
            duration={300}
            formatValue={(n) => getFormattedNumber(n)}
          />
        </div>
        <div className="flex items-center gap-1 dark:text-slate-400 text-slate-500 text-sm">
          {BookmarkIcon}{" "}
          <AnimatedNumber
            component="text"
            value={tweetData.bookmarks}
            style={{
              transition: "0.8s ease-out",
              fontSize: 14,
            }}
     
            duration={300}
            formatValue={(n) => getFormattedNumber(n)}
          />
        </div>
        <UploadIcon className="h-5 w-5 dark:text-slate-300 text-slate-500" />
      </div>
    </div>
  );
};

export default TweetCardEdit;
