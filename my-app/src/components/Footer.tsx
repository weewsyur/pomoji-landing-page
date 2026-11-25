import { APP_ROUTES, SECTIONS } from "../config/routes";
import { Logo } from "./Logo";
import { Container } from "./ui/SectionHeader";

export function Footer() {
  const links: { label: string; href: string }[] = [
    { label: "About", href: SECTIONS.about },
    { label: "Features", href: SECTIONS.features },
    // Privacy Policy / Terms only render when those routes exist (see config/routes.ts)
    { label: "Privacy", href: APP_ROUTES.privacyPolicy ?? SECTIONS.privacy },
    ...(APP_ROUTES.terms ? [{ label: "Terms and Conditions", href: APP_ROUTES.terms }] : []),
  ];

  return (
    <footer className="border-t border-line bg-white">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
            A productivity and progress monitoring system for students and everyone who wants to
            focus with care.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="font-medium text-ink/75 transition-colors hover:text-brand-700"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-6 text-sm text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} PomoJI. All rights reserved.</p>
          <p>DASS-21 is a self-report screening tool, not a clinical diagnosis.</p>
        </Container>
      </div>
    </footer>
  );
}
