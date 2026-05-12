import { useEffect, useRef, useState } from "react";
import { toJpeg, toPng, toSvg } from "html-to-image";
import { Link } from "react-router-dom";
import { ArrowLeft, Pencil, Eye, Sparkles } from "lucide-react";

import Layout from "../../components/Layout";
import PreviewTweetCard from "../../components/Tweet/Card/PreviewTweetCard";
import TweetCardEdit from "../../components/Tweet/Card/TweetCardEdit";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { useTweetContext } from "../../store/context";
import InfoHoverCard from "../../components/other-comps/InfoHoverCard";
import FloatingMenu from "../../components/other-comps/FloatingMenu";

const CreateTweet = () => {
  const { theme, selectedBgColor } = useTweetContext();
  const tweetCardRef = useRef<HTMLDivElement | null>(null);
  const [darkMode, setDarkMode] = useState(theme === "dark");
  const [tabValue, setTabValue] = useState<string>("edit");

  useEffect(() => {
    setDarkMode(theme === "dark");
  }, [theme, selectedBgColor]);

  useEffect(() => {
    const node = tweetCardRef.current;
    if (!node) return;
    if (darkMode) node.classList.add("dark");
    else node.classList.remove("dark");
  }, [darkMode, theme, selectedBgColor, tabValue]);

  const onSaveAs = (type: string) => {
    if (!tweetCardRef.current) return;

    const handle = (dataUrl: string, ext: string) => {
      const link = document.createElement("a");
      link.download = `fake-tweet.${ext}`;
      link.href = dataUrl;
      link.click();
    };

    if (type === "png") {
      toPng(tweetCardRef.current, { cacheBust: true })
        .then((d) => handle(d, "png"))
        .catch(console.error);
    } else if (type === "jpg") {
      toJpeg(tweetCardRef.current, { cacheBust: true })
        .then((d) => handle(d, "jpeg"))
        .catch(console.error);
    } else if (type === "svg") {
      toSvg(tweetCardRef.current, { cacheBust: true })
        .then((d) => handle(d, "svg"))
        .catch(console.error);
    }
  };

  return (
    <Layout>
      {/* Page header */}
      <div className="pt-10">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink-muted hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-[13px] font-semibold text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              The composer
            </span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Compose your <span className="text-accent">tweet</span>
            </h1>
            <p className="mt-2 max-w-xl text-[15px] text-ink-muted">
              Edit every detail in the <strong>Edit</strong> tab, then switch to{" "}
              <strong>Preview</strong> to export your image.
            </p>
          </div>
        </div>
      </div>

      {/* Workbench */}
      <div className="mt-8">
        <Tabs
          defaultValue="edit"
          onValueChange={(v) => setTabValue(v)}
          className="w-full"
        >
          <TabsList className="inline-flex h-auto gap-1 rounded-full border border-rule-strong bg-bg-soft p-1">
            <TabsTrigger
              value="edit"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[14px] font-semibold text-ink-muted transition-colors data-[state=active]:bg-ink data-[state=active]:text-white data-[state=active]:shadow-none"
            >
              <Pencil className="h-3.5 w-3.5" /> Edit
            </TabsTrigger>
            <TabsTrigger
              value="preview"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[14px] font-semibold text-ink-muted transition-colors data-[state=active]:bg-ink data-[state=active]:text-white data-[state=active]:shadow-none"
            >
              <Eye className="h-3.5 w-3.5" /> Preview
            </TabsTrigger>
          </TabsList>

          <TabsContent value="edit" className="mt-5">
            <div className="relative overflow-hidden rounded-3xl border border-rule-strong bg-bg-soft">
              <div className="absolute left-3 top-3 z-10">
                <InfoHoverCard />
              </div>
              <div className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-bg px-3 py-1 text-[12px] font-semibold text-ink-muted shadow-sm">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Live · Edit mode
              </div>
              <div className="flex w-full justify-center px-4 py-16 sm:px-10 sm:py-20">
                <TweetCardEdit />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preview" className="mt-5">
            <div className="relative overflow-hidden rounded-3xl border border-rule-strong bg-bg-soft">
              <div className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-bg px-3 py-1 text-[12px] font-semibold text-ink-muted shadow-sm">
                <Eye className="h-3 w-3" /> Preview
              </div>
              <div className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[12px] font-bold text-white shadow-sm">
                Ready to export
              </div>
              <div className="flex w-full justify-center px-4 py-12 sm:px-10">
                <PreviewTweetCard ref={tweetCardRef} />
              </div>
            </div>

            <div
              id="card-contents-tweet"
              className="relative mt-6 flex w-full justify-center"
            >
              <FloatingMenu onSaveAs={onSaveAs} />
            </div>
          </TabsContent>
        </Tabs>

        {/* Tips */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { k: "Tip 01", v: "Click any text in the card to edit it inline." },
            { k: "Tip 02", v: "Use the toolbar to flip badges, themes and counts." },
            { k: "Tip 03", v: "Preview, then export as PNG, JPG or SVG." },
          ].map((t) => (
            <div
              key={t.k}
              className="rounded-2xl border border-rule-strong bg-bg p-5"
            >
              <p className="text-[13px] font-bold text-accent">{t.k}</p>
              <p className="mt-1.5 text-[15px] text-ink-muted">{t.v}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CreateTweet;
