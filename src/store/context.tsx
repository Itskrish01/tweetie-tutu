import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
  SetStateAction,
} from "react";

export interface TweetData {
  displayName: string;
  username: string;
  content: string;
  timestamp: Date;
  contentImage: string | ArrayBuffer;
  tickType: "gold" | "blue" | "none";
  userProfileImage: string | ArrayBuffer;
  views: number;
  retweets: number;
  quotes: number;
  likes: number;
  bookmarks: number;
  time: string;
}

interface BackgroundColor_I {
  label: string;
  colorCode: string;
}

interface TweetContextType {
  tweetData: TweetData;
  setTweetData: React.Dispatch<SetStateAction<TweetData>>;
  theme: "dark" | "light";
  setTheme: React.Dispatch<SetStateAction<"dark" | "light">>;
  selectedBgColor: BackgroundColor_I;
  setSelectedBgColor: React.Dispatch<SetStateAction<BackgroundColor_I>>;
}

const TweetContext = createContext<TweetContextType | undefined>(undefined);

interface TweetProviderProps {
  children: ReactNode;
}

export const TweetProvider: React.FC<TweetProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [selectedBgColor, setSelectedBgColor] = useState<BackgroundColor_I>({
    label: "Lavender",
    colorCode: "bg-gradient-to-r from-indigo-300 to-purple-400",
  });
  const [tweetData, setTweetData] = useState<TweetData>({
    displayName: "Tweetie Tutu",
    userProfileImage: "/images/user.png",
    username: "tweetietutu",
    content: "Create your own fake tweet with the help of Tweetie TuTu ✨✨",
    contentImage: "",
    timestamp: new Date(),
    time: "2:50",
    tickType: "none",
    bookmarks: 0,
    views: 0,
    retweets: 0,
    quotes: 0,
    likes: 0,
  });

  return (
    <TweetContext.Provider
      value={{
        tweetData,
        setTweetData,
        theme,
        setTheme,
        selectedBgColor,
        setSelectedBgColor,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTweetContext = (): TweetContextType => {
  const context = useContext(TweetContext);
  if (!context) {
    throw new Error("useTweetContext must be used within a TweetProvider");
  }
  return context;
};
