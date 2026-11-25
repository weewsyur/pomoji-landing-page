import { SCREENS, type ScreenKey } from "../../config/screenshots";
import { Container, SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { AppScreen } from "../mockups/AppScreen";

const order: ScreenKey[] = ["home", "timer", "dass"];

export function AppPreview() {
  return (
    <section
      id="preview"
      className="overflow-hidden bg-brand-50 py-20 sm:py-28"
      aria-labelledby="preview-title"
    >
      <Container>
        <Reveal>
          <SectionHeader id="preview-title" eyebrow="Inside the app" title="A calm, clear interface.">
            A look at the screens you'll use every day.
          </SectionHeader>
        </Reveal>

        <div
          className="no-scrollbar -mx-5 mt-14 flex snap-x snap-mandatory gap-8 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0"
          role="group"
          aria-label="PomoJI app screens"
          tabIndex={0}
        >
          {order.map((key, i) => (
            <Reveal key={key} delay={i * 90} className="snap-center">
              <figure className="w-[272px] shrink-0 lg:mx-auto lg:w-auto">
                <AppScreen screen={key} />
                <figcaption className="mx-auto mt-6 max-w-[272px] text-center">
                  <p className="text-lg font-bold">{SCREENS[key].title}</p>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">
                    {SCREENS[key].caption}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
