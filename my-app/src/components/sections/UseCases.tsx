import type { ComponentType, SVGProps } from "react";
import { Briefcase, Check, GraduationCap, Laptop, Monitor, Smartphone, Sparkle, Tablet } from "../icons";
import { Container, SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { cn } from "../../utils/cn";

type Case = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  items: string[];
  card: string;
  badge: string;
  text: string;
  tick: string;
};

const cases: Case[] = [
  {
    Icon: GraduationCap,
    title: "Students and Academic Life",
    items: [
      "Studying for examinations",
      "Completing academic requirements and assignments",
      "Reviewing lessons",
      "Managing research and school projects",
      "Developing consistent study routines",
    ],
    card: "bg-brand-600 text-white border-transparent",
    badge: "bg-white/20 text-white",
    text: "text-white/90",
    tick: "text-white",
  },
  {
    Icon: Briefcase,
    title: "Work and Professional Environment",
    items: [
      "Managing daily workloads",
      "Completing tasks and projects",
      "Improving concentration",
      "Organizing work sessions",
      "Reducing unnecessary distractions",
    ],
    card: "bg-white border-line",
    badge: "bg-brand-50 text-brand-600",
    text: "text-muted",
    tick: "text-brand-600",
  },
  {
    Icon: Sparkle,
    title: "Personal Productivity",
    items: [
      "Reading and self-learning",
      "Personal projects and hobbies",
      "Building productive daily habits",
      "Managing individual goals",
    ],
    card: "bg-ink text-white border-transparent",
    badge: "bg-white/10 text-brand-400",
    text: "text-white/80",
    tick: "text-brand-400",
  },
];

const devices = [
  { Icon: Monitor, label: "Desktop" },
  { Icon: Laptop, label: "Laptop" },
  { Icon: Tablet, label: "Tablet" },
  { Icon: Smartphone, label: "Mobile" },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 sm:py-28" aria-labelledby="use-title">
      <Container>
        <Reveal>
          <SectionHeader id="use-title" eyebrow="Where can you use PomoJI?" title="Wherever you need to get focused.">
            From the library to the office to your own side projects, PomoJI fits into the way you
            already work and learn.
          </SectionHeader>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 80} className="h-full">
              <article className={cn("h-full rounded-card border p-7 shadow-card", c.card)}>
                <span className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", c.badge)}>
                  <c.Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold leading-snug tracking-tight">{c.title}</h3>
                <ul className="mt-5 space-y-3">
                  {c.items.map((it) => (
                    <li key={it} className={cn("flex gap-3 leading-snug", c.text)}>
                      <Check className={cn("mt-0.5 h-5 w-5 shrink-0", c.tick)} />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex flex-col items-start gap-6 rounded-card border border-line bg-white p-7 shadow-card sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold">Open it in your browser — nothing to install</h3>
              <p className="mt-2 leading-relaxed text-muted">
                PomoJI is a web-based application. Use it through supported web browsers on desktop
                computers, laptops, tablets, and mobile devices.
              </p>
            </div>
            <ul className="flex shrink-0 gap-3" aria-label="Supported device types">
              {devices.map(({ Icon, label }) => (
                <li
                  key={label}
                  className="flex w-[4.5rem] flex-col items-center gap-1.5 rounded-2xl bg-brand-50 py-3 text-brand-700"
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-xs font-semibold">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
