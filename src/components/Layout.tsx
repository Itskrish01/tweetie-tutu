import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Feather } from "lucide-react";
import Header from "./Header/Header";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5C5.73.5.86 5.37.86 11.64c0 4.93 3.2 9.11 7.64 10.59.56.1.77-.24.77-.54 0-.27-.01-.97-.02-1.9-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.5 0-1.21.43-2.21 1.14-2.99-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.07 1.14a10.6 10.6 0 0 1 5.59 0c2.13-1.44 3.07-1.14 3.07-1.14.61 1.54.23 2.68.11 2.96.71.78 1.14 1.78 1.14 2.99 0 4.27-2.61 5.21-5.1 5.49.4.34.76 1.02.76 2.05 0 1.48-.01 2.67-.01 3.03 0 .3.21.65.78.54 4.43-1.48 7.63-5.66 7.63-10.59C23.14 5.37 18.27.5 12 .5z"/>
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z"/>
  </svg>
);

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
