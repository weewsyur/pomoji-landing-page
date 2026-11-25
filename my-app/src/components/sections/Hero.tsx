import { APP_ROUTES, SECTIONS } from "../../config/routes";
import { Button } from "../ui/Button";
import { Container } from "../ui/SectionHeader";
import { ArrowRight, Check } from "../icons";
import { AppScreen } from "../mockups/AppScreen";

const points = ["Focus sessions", "Productivity tracking", "Optional DASS-21 check-in"];

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      {/* Soft circles echo the PomoJI welcome screen */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-28 h-72 w-72 rounded-full bg-brand-200/70" />
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-600 sm:-right-10 sm:-top-12 sm:h-40 sm:w-40 lg:-top-16 lg:h-72 lg:w-72" />
        <div className="absolute right-[18%] top-[22rem] hidden h-14 w-14 rounded-full bg-brand-400/80 lg:block" />
      </div>

      <Container className="relative grid items-center gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-28 lg:pt-24">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-brand-700">
            <span className="h-2 w-2 rounded-full bg-brand-600" />
            Productivity &amp; student wellness
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-[4.25rem]"
          >
            Focus with intention.{" "}
            <span className="text-brand-600">Rest without guilt.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            PomoJI is a web-based productivity and progress monitoring system that helps you build
            better study habits, track your focus, and stay aware of your well-being — all in one
            place.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={APP_ROUTES.register} size="lg">
              Get Started <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href={SECTIONS.features} variant="secondary" size="lg">
              Explore Features
            </Button>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] font-medium text-ink/80">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand-600" /> {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto flex w-full max-w-md justify-center lg:max-w-none lg:justify-end">
          <div className="relative h-[580px] w-full max-w-[460px]">
            <div className="absolute left-0 top-10 hidden -rotate-3 opacity-95 sm:block">
              <AppScreen screen="home" className="scale-[0.92]" />
            </div>
            <div className="absolute right-1/2 top-0 translate-x-1/2 sm:right-0 sm:translate-x-0">
              <div className="animate-float">
                <AppScreen screen="timer" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
