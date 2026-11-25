import { ChevronDown, ListIcon, Play, Plus, Sliders } from "../icons";
import { TabBar } from "./PhoneFrame";

export function TimerScreen() {
  return (
    <div className="relative h-full bg-surface px-3 pt-3">
      <div className="flex items-center justify-between px-1 pb-2">
        <span className="text-[9px] font-bold tracking-[0.2em] text-zinc-400">TIMER</span>
        <span className="flex items-center gap-2.5 text-brand-500">
          <ListIcon className="h-4 w-4" />
          <Sliders className="h-4 w-4 text-zinc-400" />
        </span>
      </div>

      <div className="flex rounded-xl bg-white p-1 text-[10px] font-bold shadow-sm">
        <span className="flex-1 rounded-lg bg-brand-500 py-1.5 text-center text-white">Focus</span>
        <span className="flex-1 py-1.5 text-center text-zinc-400">Break</span>
      </div>

      <div className="mx-auto mt-4 flex h-[152px] w-[152px] flex-col items-center justify-center rounded-full border-[7px] border-brand-500 shadow-[0_0_24px_-6px_rgb(255_107_53/0.5)]">
        <span className="text-[32px] font-extrabold leading-none tracking-tight">25:00</span>
        <span className="mt-1 text-[9px] text-zinc-400">Focus · 25 min</span>
      </div>

      <div className="mt-4 rounded-2xl bg-white p-2.5 shadow-sm">
        <p className="px-0.5 text-[8px] font-bold tracking-[0.15em] text-zinc-400">ACTIVE TASK</p>
        <div className="mt-1.5 flex items-center justify-between rounded-xl border border-line px-2.5 py-1.5">
          <div className="leading-tight">
            <p className="text-[11px] font-extrabold">Unassigned Session</p>
            <p className="text-[8.5px] text-zinc-400">Tap to choose task</p>
          </div>
          <ChevronDown className="h-3.5 w-3.5 text-zinc-400" />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-4">
        <span className="h-9 w-9 rounded-full bg-white shadow-sm" />
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white shadow-[0_10px_18px_-8px_rgb(255_107_53/0.8)]">
          <Play className="h-6 w-6" />
        </span>
        <span className="flex h-9 w-9 flex-col items-center justify-center rounded-full bg-white leading-none shadow-sm">
          <span className="text-[11px] font-extrabold">1</span>
          <span className="text-[6px] text-zinc-400">done</span>
        </span>
      </div>

      <div className="mt-3 grid grid-cols-3 divide-x divide-line rounded-2xl bg-white py-2.5 text-center shadow-sm">
        {[
          ["Sessions Today", "1"],
          ["Focus Time", "0h 1m"],
          ["Tasks Left", "0"],
        ].map(([l, v]) => (
          <div key={l}>
            <p className="text-[7.5px] text-zinc-400">{l}</p>
            <p className="text-[14px] font-extrabold leading-tight">{v}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-2xl bg-white p-2.5 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-extrabold">Tasks</p>
          <span className="flex items-center gap-1 rounded-lg bg-brand-500 px-2 py-1 text-[8px] font-bold text-white">
            <Plus className="h-2.5 w-2.5" /> Add Task
          </span>
        </div>
      </div>

      <TabBar active="timer" />
    </div>
  );
}
