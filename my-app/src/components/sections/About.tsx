import { Heart, GraduationCap, Scale, Timer } from "../icons";
import { Container, SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

const cards = [
  {
    Icon: Timer,
    title: "What PomoJI is",
    body: "A web-based app that turns focus sessions, productivity records and an optional wellbeing check-in into one simple routine.",
  },
  {
    Icon: Scale,
    title: "The problem it addresses",
    body: "Many students push through long hours without structure or rest, and rarely stop to look at how they're doing. PomoJI makes both visible.",
  },
  {
    Icon: GraduationCap,
    title: "Who it's for",
    body: "Students first — but also anyone who wants steadier focus, clearer progress and healthier work habits.",
  },
  {
    Icon: Heart,
    title: "Why balance matters",
    body: "Sustainable progress needs focus and rest. Looking after your well-being is part of getting things done, not a detour from it.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28" aria-labelledby="about-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeader
              id="about-title"
              align="left"
              eyebrow="About PomoJI"
              title={<>More than just a Pomodoro timer.</>}
            >
              PomoJI is a web-based productivity and student wellness application designed to help
              individuals build better study habits, maintain focus, monitor their productivity, and
              become more aware of their mental well-being.
            </SectionHeader>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              It provides tools that encourage intentional work sessions, self-reflection,
              productivity tracking, and awareness of mental health — in a calm, approachable
              interface.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 70} className="h-full">
                <article className="h-full rounded-card border border-line bg-white p-6 shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
