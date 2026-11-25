import { useEffect, useState } from "react";
import { APP_ROUTES, SECTIONS } from "../config/routes";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";
import { Close, Menu } from "./icons";
import { Container } from "./ui/SectionHeader";
import { cn } from "../utils/cn";

const links = [
  { label: "Features", href: SECTIONS.features },
  { label: "About", href: SECTIONS.about },
  { label: "Privacy", href: SECTIONS.privacy },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled || open
          ? "border-line bg-cream/95 backdrop-blur-sm"
          : "border-transparent bg-cream"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" aria-label="PomoJI home" className="rounded-lg">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.95rem] font-medium text-ink/75 transition-colors hover:text-brand-700"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button href={APP_ROUTES.login} variant="ghost">
            Sign In
          </Button>
          <Button href={APP_ROUTES.register}>Get Started</Button>
        </div>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-xl text-ink hover:bg-black/5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-cream md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            <nav aria-label="Mobile" className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-lg font-semibold hover:bg-brand-50"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Button href={APP_ROUTES.login} variant="secondary" size="lg">
                Sign In
              </Button>
              <Button href={APP_ROUTES.register} size="lg">
                Get Started
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
