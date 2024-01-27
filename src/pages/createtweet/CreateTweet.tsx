import Layout from "../../components/Layout";
import PreviewTweetCard from "../../components/Tweet/Card/PreviewTweetCard";
import TweetCardEdit from "../../components/Tweet/Card/TweetCardEdit";
import { toJpeg, toPng, toSvg } from "html-to-image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { useEffect, useRef, useState } from "react";
import { useTweetContext } from "../../store/context";
import InfoHoverCard from "../../components/other-comps/InfoHoverCard";
import FloatingMenu from "../../components/other-comps/FloatingMenu";

const CreateTweet = () => {
  const { theme, selectedBgColor } = useTweetContext();
  const tweetCardRef = useRef(null);
  const [darkMode, setDarkMode] = useState(theme === "dark");
  const [tabValue, setTabValue] = useState<string>('')

  console.log(darkMode)

  useEffect(() => {
    setDarkMode(theme === "dark");
  }, [theme, selectedBgColor]);

  useEffect(() => {
    if (tweetCardRef.current && darkMode) {
      tweetCardRef.current.classList.add("dark", darkMode);
    }else {
      if(tweetCardRef.current){
        tweetCardRef.current.classList.remove("dark", darkMode);
      } 
    }
  }, [darkMode, theme, selectedBgColor, tabValue]);

 

  const onSaveAs = (type: string) => {
    if (tweetCardRef.current === null) {
      return;
    }

    if (type === "png") {
      toPng(tweetCardRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "fake-tweet.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (type === "jpg") {
      toJpeg(tweetCardRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "fake-tweet.jpeg";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (type === "svg") {
      toSvg(tweetCardRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "fake-tweet.svg";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Layout>
      <h2 className="mb-4 text-center text-4xl mt-10 font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Create Your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-purple-400">
          Tweet
        </span>{" "}
      </h2>
      <div className="bg-white py-13 sm:py-10">
        <div className=" sm:px-6 lg:px-8">
          <Tabs defaultValue="edit" className="w-full mb-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="edit" onClick={() => setTabValue('edit')}>Edit Tweet ✨</TabsTrigger>
              <TabsTrigger value="preview" onClick={() => setTabValue('preview')}>Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="edit">
              <div className="w-full relative shadow-md py-20 mt-6 flex justify-center sm:rounded-md border bg-slate-200 border-slate-300">
                <div className="absolute top-1 left-1">
                  <InfoHoverCard />
                </div>
                <div className="flex justify-center w-full">
                  <TweetCardEdit />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="preview">
              <div
                
                className="w-full relative shadow-md mt-6 flex justify-center sm:rounded-md border bg-slate-100 border-slate-300"
              >
                <PreviewTweetCard ref={tweetCardRef} />
              </div>
              <div id="card-contents-tweet" className="w-full relative flex justify-center">
                <FloatingMenu onSaveAs={onSaveAs} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default CreateTweet;
