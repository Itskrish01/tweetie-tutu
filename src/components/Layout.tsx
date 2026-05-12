import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Feather } from "lucide-react";
import Header from "./Header/Header";

const socials = [
  { name: "GitHub",   href: "https://github.com/Itskrish01",                  Icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/krish-t-138400217/", Icon: Linkedin },
];

const Layout = ({ children }: { children: ReactNode }) => {
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col bg-bg text-ink">
      <Header />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="mt-24 border-t border-rule bg-bg-soft">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-12 sm:px-6 lg:px-8">
          <div className="sm:col-span-6">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-white">
                <Feather className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="text-[18px] font-extrabold tracking-tight text-ink">
                Tweetie<span className="text-accent">TuTu</span>
              </span>
            </Link>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-muted">
              The fastest way to mock up a tweet that looks pixel-perfect — no
              account, no upload, all in your browser.
            </p>
          </div>

          <div className="sm:col-span-3">
            <p className="text-[13px] font-bold uppercase tracking-wider text-ink-faint">
              Product
            </p>
            <ul className="mt-3 space-y-2 text-[15px]">
              <li><Link to="/" className="text-ink hover:text-accent">Home</Link></li>
              <li><Link to="/create-tweet" className="text-ink hover:text-accent">Create a tweet</Link></li>
            </ul>
          </div>

          <div className="sm:col-span-3">
            <p className="text-[13px] font-bold uppercase tracking-wider text-ink-faint">
              Follow
            </p>
            <div className="mt-3 flex gap-2">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full text-ink-muted transition-colors hover:bg-accent-soft hover:text-accent"
                  aria-label={name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-rule">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-4 text-[13px] text-ink-muted sm:flex-row sm:items-center sm:px-6 lg:px-8">
            <span>© {year} Tweetie TuTu · Not affiliated with X / Twitter.</span>
            <span>Made with <span className="text-like">♥</span> by Krish</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
