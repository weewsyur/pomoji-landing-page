import { APP_ROUTES } from "../../config/routes";
import { Button } from "../ui/Button";
import { Container } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { ArrowRight } from "../icons";

export function FinalCTA() {
  return (
    <section id="get-started" className="py-20 sm:py-28" aria-labelledby="cta-title">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-600 px-6 py-16 text-center text-white sm:px-12 sm:py-20">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-white/10" />
              <div className="absolute -bottom-24 -right-12 h-72 w-72 rounded-full bg-white/10" />
            </div>
            <div className="relative mx-auto max-w-2xl">
              <h2
                id="cta-title"
                className="text-3xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-5xl"
              >
                Ready to focus, and feel better doing it?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/90">
                Create your free PomoJI account and start your first focus session today.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={APP_ROUTES.register} variant="light" size="lg">
                  Get Started <ArrowRight className="h-5 w-5" />
                </Button>
                <a
                  href={APP_ROUTES.login}
                  className="inline-flex h-14 items-center rounded-full px-6 font-semibold text-white underline-offset-4 hover:underline"
                >
                  I already have an account
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
