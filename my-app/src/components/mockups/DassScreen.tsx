import type { ComponentType, SVGProps } from "react";
import { Calendar, Clipboard, HandHeart, Lock } from "../icons";

const notices: { Icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; body: string }[] = [
  {
    Icon: Clipboard,
    title: "Instructions",
    body: "For each statement, choose how much it applied to you over the past week. You may stop at any time before submitting.",
  },
  {
    Icon: HandHeart,
    title: "What we collect",
    body: "Your 21 responses, calculated results, and completion time are saved to your private account.",
  },
  {
    Icon: Lock,
    title: "Privacy and support",
    body: "Only you can access your account's assessment records. DASS-21 is a screening tool, not a clinical diagnosis.",
  },
  {
    Icon: Calendar,
    title: "Assessment frequency",
    body: "One assessment can be completed each day before a focus session. Participation is your choice.",
  },
];

export function DassScreen() {
  return (
    <div className="relative h-full bg-surface px-3 pt-4">
      <p className="text-[8px] font-extrabold tracking-[0.14em] text-brand-600">
        YOUR WELLBEING CHECK-IN
      </p>
      <p className="mt-1 text-[19px] font-extrabold leading-tight">DASS-21 assessment</p>
      <p className="mt-1 text-[9px] leading-snug text-zinc-500">
        A voluntary 21-question self-report about how you have felt over the past week. It usually
        takes about 3–5 minutes.
      </p>

      <div className="mt-2.5 space-y-2">
        {notices.map(({ Icon, title, body }) => (
          <div key={title} className="flex gap-2 rounded-2xl bg-white p-2.5 shadow-sm">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
              <Icon className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-[10px] font-extrabold">{title}</p>
              <p className="mt-0.5 text-[8px] leading-snug text-zinc-500">{body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface via-surface to-transparent px-3 pb-3 pt-6">
        <span className="flex h-8 items-center justify-center rounded-full bg-brand-200 text-[10px] font-bold text-white">
          Start assessment
        </span>
        <span className="mt-1.5 flex h-8 items-center justify-center rounded-full bg-white text-[10px] font-bold text-zinc-500 shadow-sm">
          Not now
        </span>
      </div>
    </div>
  );
}
