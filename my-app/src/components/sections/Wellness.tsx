import { Coffee, Eye, Heart, LifeBuoy, Moon, Scale, HandHeart } from "../icons";
import { Container } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

const principles = [
  { Icon: Heart, title: "Recognise stress and difficulty", body: "Noticing how you feel is a healthy first step." },
  { Icon: Scale, title: "Balance study, work and rest", body: "Progress is steadier when rest is part of the plan." },
  { Icon: Coffee, title: "Take intentional breaks", body: "Short breaks help you return with a clearer mind." },
  { Icon: Eye, title: "Understand your patterns", body: "Your records show when and how you focus best." },
  { Icon: Moon, title: "Stay mindful of your well-being", body: "Small, regular check-ins build self-awareness." },
  { Icon: LifeBuoy, title: "Know when to ask for help", body: "Support from qualified professionals is always a valid choice." },
];

const dimensions = ["Depression", "Anxiety", "Stress"];

export function Wellness() {
  return (
    <section
      id="wellness"
      className="relative overflow-hidden bg-[#fff6ef] py-20 sm:py-28"
      aria-labelledby="wellness-title"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-breathe absolute -left-32 top-24 h-96 w-96 rounded-full bg-brand-100" />
        <div className="animate-breathe absolute -right-40 bottom-10 h-[28rem] w-[28rem] rounded-full bg-brand-100/80 [animation-delay:3s]" />
      </div>

      <Container className="relative">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-[0.14em] text-brand-700">
            Mental health matters — beyond productivity
          </p>
          <h2
            id="wellness-title"
            className="mx-auto mt-4 max-w-3xl text-center text-3xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-5xl"
          >
            Your productivity matters, but your mental health matters just as much.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted text-pretty">
            Taking care of yourself is part of making progress. PomoJI encourages you to stay focused,
            recognise your limits, take meaningful breaks, and become more aware of your mental
            well-being.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={(i % 3) * 70} className="h-full">
              <div className="flex h-full gap-4 rounded-card bg-white/85 p-6 shadow-card">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold leading-snug">{title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* DASS-21 */}
        <Reveal>
          <div className="mt-16 overflow-hidden rounded-[2rem] bg-white shadow-card">
            <div className="grid lg:grid-cols-[1.1fr_1fr]">
              <div className="p-8 sm:p-12">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-bold text-brand-700">
                  <HandHeart className="h-4 w-4" /> Introducing the DASS-21 check-in
                </span>
                <h3 className="mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl">
                  A gentle way to reflect on how you've been feeling.
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  PomoJI includes the Depression Anxiety Stress Scales (DASS-21), a self-report
                  assessment that helps you reflect on symptoms associated with depression, anxiety
                  and stress. It's voluntary, takes about 3–5 minutes, and is yours to take on your
                  own terms.
                </p>

                <ul className="mt-6 space-y-3 text-[1.02rem]">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                    A structured 21-item assessment
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                    An opportunity for self-awareness and reflection
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                    A way to better understand your own reported experiences
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-center gap-6 bg-brand-50 p-8 sm:p-12">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-700">
                    Three dimensions
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {dimensions.map((d) => (
                      <div
                        key={d}
                        className="rounded-2xl bg-white px-2 py-5 text-center shadow-sm"
                      >
                        <span className="text-[1.65rem] font-extrabold leading-none text-brand-600">
                          7
                        </span>
                        <p className="mt-1 text-[0.7rem] font-medium text-muted">items</p>
                        <p className="mt-2 text-[0.85rem] font-bold sm:text-sm">{d}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  role="note"
                  className="rounded-2xl border border-brand-200 bg-white p-5 text-[0.95rem] leading-relaxed text-ink/85"
                >
                  <p className="font-bold">Important to know</p>
                  <p className="mt-1.5">
                    DASS-21 is a self-report screening and assessment instrument, <strong>not a
                    clinical diagnosis</strong>. PomoJI does not diagnose, treat, or prevent any
                    mental health condition. If you're finding things difficult, consider reaching out
                    to a qualified mental health professional. If you may harm yourself or are in
                    immediate danger, contact local emergency services or a crisis support line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
