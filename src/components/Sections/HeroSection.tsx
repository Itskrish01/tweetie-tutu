import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Download,
  Heart,
  Image as ImageIcon,
  MessageCircle,
  Moon,
  Palette,
  Repeat2,
  BarChart3,
  Feather,
  Sparkles,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pb-20 pt-12 sm:pt-16">
      {/* ─── Hero ───────────────────────────────────────── */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="rise rise-delay-1 inline-flex items-center gap-2 rounded-full border border-rule-strong bg-bg-soft px-3 py-1 text-[13px] font-semibold text-ink-muted">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            New · Export to PNG, JPG &amp; SVG
          </span>

          <h1 className="rise rise-delay-2 mt-6 text-[44px] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Make a tweet that{" "}
            <span className="text-accent">looks real</span> — without
            posting one.
          </h1>

          <p className="rise rise-delay-3 mt-6 max-w-xl text-[17px] leading-relaxed text-ink-muted sm:text-lg">
            Tweetie TuTu is a tiny composer for pixel-perfect fake tweets.
            Edit the avatar, name, badge, body, replies, retweets, likes — even
            the time stamp — then export as an image in one click.
          </p>

          <div className="rise rise-delay-4 mt-8 flex flex-wrap items-center gap-3">
            <Link to="/create-tweet" className="btn-tw-blue px-6 py-3 text-[15px]">
              <Feather className="h-4 w-4" />
              Compose a tweet
            </Link>
            <a href="#features" className="btn-tw-ghost px-6 py-3 text-[15px]">
              See features
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rise rise-delay-5 mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4 text-accent" /> No sign-up
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4 text-accent" /> 100% in-browser
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4 text-accent" /> Open source
            </span>
          </div>
        </div>

        {/* ─── Sample tweet card ──────────────────────────── */}
        <div className="rise rise-delay-3 lg:col-span-5">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-accent-soft via-bg to-bg-soft blur-md"
            />
            <article className="rounded-2xl border border-rule-strong bg-bg p-5 shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:p-6">
              <div className="flex items-start gap-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent text-white">
                  <Feather className="h-6 w-6" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-x-1 gap-y-0.5">
                    <span className="font-bold text-ink">Tweetie TuTu</span>
                    <BadgeCheck className="h-[18px] w-[18px] text-accent" />
                    <span className="text-[15px] text-ink-muted">
                      @tweetietutu · 2h
                    </span>
                  </div>
                  <p className="mt-1 text-[17px] leading-snug text-ink">
                    Reminder: this isn't a real tweet. But it{" "}
                    <span className="text-accent">looks</span> like one,
                    doesn't it? ✨
                  </p>

                  <div className="mt-4 flex max-w-md items-center justify-between text-ink-muted">
                    <button className="group inline-flex items-center gap-1.5 text-[13px] hover:text-accent">
                      <span className="grid h-8 w-8 place-items-center rounded-full transition-colors group-hover:bg-accent-soft">
                        <MessageCircle className="h-[18px] w-[18px]" />
                      </span>
                      128
                    </button>
                    <button className="group inline-flex items-center gap-1.5 text-[13px] hover:text-retweet">
                      <span className="grid h-8 w-8 place-items-center rounded-full transition-colors group-hover:bg-emerald-50">
                        <Repeat2 className="h-[18px] w-[18px]" />
                      </span>
                      1.2K
                    </button>
                    <button className="group inline-flex items-center gap-1.5 text-[13px] hover:text-like">
                      <span className="grid h-8 w-8 place-items-center rounded-full transition-colors group-hover:bg-pink-50">
                        <Heart className="h-[18px] w-[18px]" />
                      </span>
                      9.8K
                    </button>
                    <button className="group inline-flex items-center gap-1.5 text-[13px] hover:text-accent">
                      <span className="grid h-8 w-8 place-items-center rounded-full transition-colors group-hover:bg-accent-soft">
                        <BarChart3 className="h-[18px] w-[18px]" />
                      </span>
                      204K
                    </button>
                  </div>
                </div>
              </div>
            </article>

            <span className="absolute -right-3 -top-3 rounded-full bg-ink px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
              Live preview
            </span>
          </div>
        </div>
      </div>

      {/* ─── Features ───────────────────────────────────── */}
      <div id="features" className="mt-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-wider text-accent">
              Features
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Everything you need to fake a tweet.
            </h2>
          </div>
          <Link
            to="/create-tweet"
            className="hidden text-[15px] font-semibold text-accent hover:underline sm:inline-flex"
          >
            Try it now →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              Icon: Sparkles,
              title: "Inline editing",
              body: "Click any text in the card — name, handle, body, time — and just type.",
            },
            {
              Icon: BadgeCheck,
              title: "Badges that matter",
              body: "Verified blue, gold business, grey government — pick your flavour.",
            },
            {
              Icon: ImageIcon,
              title: "Avatars & images",
              body: "Drop in a profile picture or attachment image. Renders in the export.",
            },
            {
              Icon: Palette,
              title: "Theme it",
              body: "Light, Dim, Lights-Out — and a custom background colour.",
            },
            {
              Icon: Heart,
              title: "Real interactions",
              body: "Tune replies, retweets, likes & views with smooth animated counters.",
            },
            {
              Icon: Moon,
              title: "Dark mode card",
              body: "Toggle the card between light & dark independent of the app theme.",
            },
            {
              Icon: Download,
              title: "Three export formats",
              body: "PNG for socials, JPG for messaging, SVG for the meticulous.",
            },
            {
              Icon: Feather,
              title: "No sign-up",
              body: "All the work happens in your browser. Nothing leaves your device.",
            },
          ].map(({ Icon, title, body }) => (
            <article
              key={title}
              className="group rounded-2xl border border-rule-strong bg-bg p-5 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_8px_24px_rgba(29,155,240,0.12)]"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-soft text-accent transition-transform group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[17px] font-bold text-ink">{title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">{body}</p>
            </article>
          ))}
        </div>
      </div>

      {/* ─── How it works ───────────────────────────────── */}
      <div className="mt-24 rounded-3xl border border-rule-strong bg-bg-soft p-8 sm:p-12">
        <p className="text-[13px] font-bold uppercase tracking-wider text-accent">
          How it works
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          From blank canvas to shareable image — in three steps.
        </h2>

        <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { n: "01", title: "Compose", body: "Open the workshop and type your tweet inline." },
            { n: "02", title: "Style",   body: "Pick a badge, theme, avatar and counts." },
            { n: "03", title: "Export",  body: "Hit download — PNG, JPG or SVG, your call." },
          ].map(({ n, title, body }) => (
            <li
              key={n}
              className="rounded-2xl border border-rule-strong bg-bg p-5"
            >
              <span className="text-[13px] font-bold text-accent">Step {n}</span>
              <h3 className="mt-2 text-xl font-bold text-ink">{title}</h3>
              <p className="mt-1.5 text-[15px] text-ink-muted">{body}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* ─── Final CTA ──────────────────────────────────── */}
      <div className="mt-24 overflow-hidden rounded-3xl bg-ink p-10 text-white sm:p-14">
        <div className="grid items-center gap-6 sm:grid-cols-12">
          <div className="sm:col-span-8">
            <h3 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Stop screenshotting.
              <br />
              <span className="text-accent">Start composing.</span>
            </h3>
            <p className="mt-3 max-w-lg text-[15px] text-white/70">
              Open the workshop and have your first fake tweet ready in under
              a minute. Truly.
            </p>
          </div>
          <div className="sm:col-span-4 sm:text-right">
            <Link
              to="/create-tweet"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-bold text-ink transition-transform hover:-translate-y-0.5"
            >
              <Feather className="h-4 w-4" />
              Compose a tweet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
