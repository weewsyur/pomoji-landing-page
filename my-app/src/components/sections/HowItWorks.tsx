import { Container, SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

const steps = [
  {
    title: "Create your PomoJI account",
    body: "Sign up in moments. Your records stay in your own private account.",
  },
  {
    title: "Start a focus session",
    body: "Pick a task, press play, and give it your full attention for one session.",
  },
  {
    title: "Track your productivity",
    body: "Sessions, focus time and streaks are recorded automatically as you go.",
  },
  {
    title: "Review your progress",
    body: "Look back at your patterns and insights to plan a healthier routine.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28" aria-labelledby="how-title">
      <Container>
        <Reveal>
          <SectionHeader id="how-title" eyebrow="How it works" title="Four simple steps to a steadier routine." />
        </Reveal>

        <ol className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="list-none">
              <Reveal delay={i * 80} className="h-full">
                <div className="h-full rounded-card bg-white p-7 shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-lg font-extrabold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-bold leading-snug">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
