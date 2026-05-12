import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Feather } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navLink = (to: string, label: string) => {
    const active = pathname === to;
    return (
      <Link
        to={to}
        className={`relative inline-flex items-center px-3 py-2 text-[15px] font-semibold transition-colors ${
          active ? "text-ink" : "text-ink-muted hover:text-ink"
        }`}
      >
        {label}
        {active && (
          <span className="absolute -bottom-[1px] left-3 right-3 h-1 rounded-full bg-accent" />
        )}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-30 border-b border-rule bg-bg/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        {/* Brand */}
        <Link to="/" className="group flex items-center gap-2.5">
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-full bg-accent text-white transition-transform group-hover:scale-105"
          >
            <Feather className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="flex items-baseline gap-1 text-[20px] font-extrabold tracking-tight text-ink">
            Tweetie<span className="text-accent">TuTu</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLink("/", "Home")}
          {navLink("/create-tweet", "Create")}
          <a
            href="https://github.com/Itskrish01"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 text-[15px] font-semibold text-ink-muted hover:text-ink"
          >
            GitHub
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link to="/create-tweet" className="btn-tw-blue">
            <Feather className="h-4 w-4" />
            Compose
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-bg-hover md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-rule md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            <Link
              to="/"
              className="rounded-full px-4 py-3 text-[15px] font-semibold text-ink hover:bg-bg-hover"
            >
              Home
            </Link>
            <Link
              to="/create-tweet"
              className="rounded-full px-4 py-3 text-[15px] font-semibold text-ink hover:bg-bg-hover"
            >
              Create
            </Link>
            <a
              href="https://github.com/Itskrish01"
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-4 py-3 text-[15px] font-semibold text-ink hover:bg-bg-hover"
            >
              GitHub
            </a>
            <Link
              to="/create-tweet"
              className="btn-tw-blue mt-2 w-full"
            >
              <Feather className="h-4 w-4" />
              Compose
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
