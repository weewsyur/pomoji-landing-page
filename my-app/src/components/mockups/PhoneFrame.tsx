import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { BarChart, Home, History, User } from "../icons";

/** Device-style frame. Fixed internal size so mockup text scales as a unit. */
export function PhoneFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto h-[560px] w-[272px] shrink-0 overflow-hidden rounded-[2.4rem] border-[7px] border-ink bg-surface shadow-[0_30px_60px_-25px_rgb(31_29_27/0.45)]",
        className
      )}
    >
      {children}
    </div>
  );
}

/** Bottom tab bar used by the Home and Timer mockups. */
export function TabBar({ active }: { active: "home" | "timer" }) {
  const items = [
    { key: "home", Icon: Home },
    { key: "timer", Icon: History },
    { key: "stats", Icon: BarChart },
    { key: "profile", Icon: User },
  ];
  return (
    <div className="absolute inset-x-0 bottom-0 flex h-14 items-center justify-around border-t border-line bg-white">
      {items.map(({ key, Icon }) => (
        <span key={key} className="flex flex-col items-center gap-0.5">
          <Icon className={cn("h-5 w-5", key === active ? "text-brand-600" : "text-zinc-400")} />
          <span
            className={cn(
              "h-0.5 w-4 rounded-full",
              key === active ? "bg-brand-600" : "bg-transparent"
            )}
          />
        </span>
      ))}
    </div>
  );
}
