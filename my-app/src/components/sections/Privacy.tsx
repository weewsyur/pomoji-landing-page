import { Lock, Shield, Calendar } from "../icons";
import { Container, SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

const items = [
  {
    Icon: Lock,
    title: "Your account, your records",
    body: "Assessment responses and results are saved to your private account. Only you can access them.",
  },
  {
    Icon: Shield,
    title: "You stay in control",
    body: "You can review, export, or delete your assessment records from Profile → Privacy.",
  },
  {
    Icon: Calendar,
    title: "Participation is your choice",
    body: "The DASS-21 is voluntary. You can stop at any time before submitting, or choose \u201CNot now\u201D.",
  },
];

export function Privacy() {
  return (
    <section id="privacy" className="bg-white py-20 sm:py-24" aria-labelledby="privacy-title">
      <Container>
        <Reveal>
          <SectionHeader
            id="privacy-title"
            eyebrow="Privacy"
            title="Your well-being data is yours."
          >
            Clear notices before any assessment, so you always know what's collected and why.
          </SectionHeader>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 80} className="h-full">
              <article className="h-full rounded-card border border-line bg-cream p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
