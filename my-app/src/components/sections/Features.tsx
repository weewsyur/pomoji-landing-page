import { BarChart, Clipboard, History, Quote, Timer, HandHeart } from "../icons";
import { Container, SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

const features = [
  {
    Icon: Timer,
    title: "Pomodoro Focus Timer",
    body: "Switch between Focus and Break, choose an active task, and work in clear, intentional blocks.",
  },
  {
    Icon: History,
    title: "Focus Session Tracking",
    body: "Every session is logged, so you can see how many you've completed and how much time you've focused.",
  },
  {
    Icon: BarChart,
    title: "Productivity Analytics",
    body: "Turn your sessions into easy-to-read stats that show your habits and progress over time.",
  },
  {
    Icon: Quote,
    title: "Motivational Quotes",
    body: "A little encouragement to help you start — and keep going — when motivation dips.",
  },
  {
    Icon: HandHeart,
    title: "DASS-21 Assessment",
    body: "An optional, voluntary self-report check-in on depression, anxiety and stress, for personal reflection.",
  },
  {
    Icon: Clipboard,
    title: "Personal Productivity Records",
    body: "Your streaks, sessions and tasks are kept in your own account so you can look back and learn.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28" aria-labelledby="features-title">
      <Container>
        <Reveal>
          <SectionHeader
            id="features-title"
            eyebrow="Features"
            title="Everything you need to focus, track and reflect."
          >
            Simple tools that work together — without the clutter.
          </SectionHeader>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={(i % 3) * 70} className="h-full">
              <article className="group h-full rounded-card border border-line bg-cream p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold tracking-tight">{title}</h3>
                <p className="mt-2.5 leading-relaxed text-muted">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
