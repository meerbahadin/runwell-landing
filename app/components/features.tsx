"use client";

import { useState } from "react";

const FEATURES = [
  {
    label: "Live application list",
    benefit:
      "See energy, CPU, memory and disk per app — grouped by application, not scattered across helper processes.",
    detail:
      "Handles ~166 grouped applications smoothly. The expensive work runs once per sampler cycle, not once per row per frame.",
    rows: [
      ["Google Chrome", "34 processes · 6.39 GB", "0.00 W", ""],
      ["Code", "48 processes · 10.14 GB", "0.03 W", ""],
      ["Xcode", "5 processes · 851.4 MB", "0.00 W", ""],
      ["Siri", "1 process · 131.5 MB", "0.31 W", ""],
    ],
  },
  {
    label: "Quit a whole app",
    benefit:
      "End an application and all its helpers in one decision, and be told per process what actually happened.",
    detail:
      "Reports terminated, refused by policy, or asked and did not comply — never a blanket “done” over a partial failure.",
    rows: [
      ["Google Chrome", "PID 2,098", "Terminated", "ok"],
      ["Chrome Helper (Renderer)", "PID 82,747", "Terminated", "ok"],
      ["Chrome Helper (GPU)", "PID 2,166", "Did not comply", "warn"],
      ["kernel_task", "PID 0", "Refused by policy", "refused"],
    ],
  },
  {
    label: "History",
    benefit:
      "Find out what drained your battery earlier today, yesterday, or last week.",
    detail:
      "Battery sessions grouped by day. Raw samples 2 hours, per-minute 7 days, 15-minute 30 days.",
    rows: [
      ["Raw samples", "every 2s", "2 hours", ""],
      ["Per-minute", "aggregated", "7 days", ""],
      ["15-minute", "aggregated", "30 days", ""],
      ["Database growth", "after tiering", "14.6 MB/day", ""],
    ],
  },
  {
    label: "Insights",
    benefit:
      "Plain-language notices when something is genuinely worth knowing.",
    detail:
      "An app holding a power assertion while the screen is off, an unusual background wakeup rate, sustained energy you did not ask for.",
    rows: [
      ["Power assertion held", "screen off", "Notice", ""],
      ["Background wakeups", "unusual rate", "Notice", ""],
      ["Sustained energy", "unrequested", "Notice", ""],
      ["Memory pressure", "6.4 GB held", "Notice", ""],
    ],
  },
  {
    label: "Uninstall",
    benefit:
      "Remove an application and the support files it leaves behind.",
    detail:
      "Everything goes to the Trash, never straight to unlink. Support files matched by exact bundle identifier only.",
    rows: [
      ["Application bundle", "/Applications", "→ Trash", ""],
      ["Preferences", "~/Library/Preferences", "→ Trash", ""],
      ["Caches", "~/Library/Caches", "→ Trash", ""],
      ["System paths", "protected", "Refused", "refused"],
    ],
  },
  {
    label: "Diagnostics",
    benefit: "See what your specific Mac can and cannot report.",
    detail: "Probed at launch rather than assumed.",
    rows: [
      ["Per-process energy", "user-owned only", "Available", "ok"],
      ["System daemons", "~200 processes", "Unavailable", "refused"],
      ["GPU metrics", "no public API", "Unavailable", "refused"],
      ["Process coverage", "this Mac", "~67%", ""],
    ],
  },
  {
    label: "Menu bar",
    benefit: "A compact live summary without opening the window.",
    detail: "Sampled less often than the main window, on purpose.",
    rows: [
      ["Window open", "sampling", "every 2s", ""],
      ["Menu bar only", "sampling", "every 5s", ""],
      ["Idle on battery", "sampling", "every 10s", ""],
      ["Recording off", "sampling", "paused", ""],
    ],
  },
] as const;

const STATUS: Record<string, string> = {
  ok: "bg-[#14351f] text-[#5fd48a]",
  warn: "bg-[#3a2e12] text-[#e0b257]",
  refused: "bg-[#3a1d1d] text-[#e58a8a]",
};

export function FeaturePanel() {
  const [tab, setTab] = useState(0);
  const active = FEATURES[tab];

  return (
    <div className="mt-9 grid items-start gap-4 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
      <div className="flex flex-col gap-2">
        {FEATURES.map((f, i) => {
          const on = i === tab;
          return (
            <button
              key={f.label}
              type="button"
              onClick={() => setTab(i)}
              aria-pressed={on}
              className={`flex w-full cursor-pointer items-center gap-2.5 rounded-xl px-[18px] py-[13px] text-left text-[14.5px] font-extrabold tracking-[-0.02em] transition-colors ${
                on ? "bg-ink text-white" : "bg-surface text-ink hover:bg-white"
              }`}
            >
              <span
                className={`size-2 shrink-0 rounded-full ${on ? "bg-brand" : "bg-[#d4dcf2]"}`}
                aria-hidden="true"
              />
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="flex min-h-[360px] flex-col rounded-[18px] bg-surface p-[26px]">
        <h3 className="max-w-[34ch] text-[17px] font-extrabold leading-[1.35] tracking-[-0.025em]">
          {active.benefit}
        </h3>
        <p className="mt-2.5 max-w-[46ch] text-[13.5px] font-medium leading-[1.55] text-muted">
          {active.detail}
        </p>

        <div className="mt-[22px] rounded-2xl bg-[#181818] p-3">
          {active.rows.map(([name, meta, value, status]) => (
            <div
              key={name}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-t border-[#2a2a2c] px-2 py-[11px] first:border-t-0"
            >
              <span className="min-w-0">
                <span className="block truncate text-[12.5px] font-bold text-canvas">
                  {name}
                </span>
                <span className="mt-0.5 block truncate text-[11.5px] font-medium text-[#8a8a90]">
                  {meta}
                </span>
              </span>
              {status && STATUS[status] ? (
                <span
                  className={`rounded-md px-2 py-[3px] text-[10.5px] font-bold ${STATUS[status]}`}
                >
                  {value}
                </span>
              ) : (
                <span className="font-mono text-[11.5px] font-semibold tabular-nums text-[#cfd2dc]">
                  {value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
