import { Bell, Flame, Search } from "../icons";
import { TabBar } from "./PhoneFrame";

const days = [
  ["M", 23],
  ["T", 24],
  ["W", 25],
  ["T", 26],
  ["F", 27],
  ["S", 28],
  ["S", 29],
] as const;

function SessionCard({ time, sessions }: { time: string; sessions: number }) {
  return (
    <div className="rounded-2xl bg-white p-3 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-[10px] font-bold text-brand-600">
          YN
        </span>
        <div className="leading-tight">
          <p className="text-[11px] font-bold">Your Name</p>
          <p className="text-[9px] text-zinc-400">{time}</p>
        </div>
      </div>
      <p className="mt-2.5 text-[14px] font-extrabold">Focus Session</p>
      <div className="mt-1.5 flex items-center gap-3">
        <div>
          <p className="text-[9px] text-zinc-400">Session</p>
          <p className="text-[15px] font-extrabold leading-none">{sessions}</p>
        </div>
        <span className="h-6 w-px bg-line" />
        <div>
          <p className="text-[9px] text-zinc-400">Total Hours</p>
          <p className="text-[15px] font-extrabold leading-none">1m</p>
        </div>
      </div>
    </div>
  );
}

export function HomeScreen() {
  return (
    <div className="relative h-full bg-surface px-3 pt-3">
      <div className="flex items-center justify-between px-1 pb-2">
        <span className="text-[9px] font-bold tracking-[0.2em] text-zinc-400">HOME</span>
        <span className="flex items-center gap-2.5 text-ink">
          <Search className="h-4 w-4" />
          <span className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -right-1.5 -top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-brand-600 text-[7px] font-bold text-white">
              1
            </span>
          </span>
        </span>
      </div>

      <div className="rounded-2xl bg-white p-3 shadow-sm">
        <p className="text-[11px] font-bold">Your Streak</p>
        <div className="mt-2 flex items-start gap-2">
          <div className="text-center">
            <span className="flex h-11 w-11 items-center justify-center gap-0.5 rounded-xl bg-brand-500 text-white">
              <Flame className="h-4 w-4" fill="currentColor" />
              <span className="text-sm font-extrabold">1</span>
            </span>
            <span className="text-[8px] text-zinc-400">Days</span>
          </div>
          <div className="flex flex-1 justify-between pt-0.5">
            {days.map(([d, n], i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className={`text-[8px] font-bold ${i === 3 ? "text-brand-600" : "text-zinc-400"}`}>
                  {d}
                </span>
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-[8px] font-bold ${
                    i === 3 ? "bg-brand-500 text-white" : "text-zinc-400"
                  }`}
                >
                  {n}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2.5 rounded-2xl bg-white p-3 shadow-sm">
        <p className="text-[9px] font-extrabold tracking-wide">DAILY READINESS CHECK</p>
        <p className="mt-1 text-[15px] font-extrabold leading-tight">Ready when you are</p>
        <p className="mt-1 text-[9.5px] leading-snug text-zinc-500">
          Take the short DASS-21 check before your first focus session each day.
        </p>
        <span className="mt-2 flex h-8 items-center justify-center rounded-full bg-brand-500 text-[10px] font-bold text-white">
          Take readiness check
        </span>
      </div>

      <div className="mt-2.5 space-y-2.5">
        <SessionCard time="Nov 25, 02:00 PM" sessions={1} />
        <SessionCard time="Nov 25, 01:28 PM" sessions={0} />
      </div>

      <TabBar active="home" />
    </div>
  );
}
