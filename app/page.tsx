import Image from "next/image";
import { Reveal } from "./components/reveal";
import { FeaturePanel } from "./components/features";
import { Shot } from "./components/shot";
import shotApplications from "../public/shot-applications.png";
import shotHistory from "../public/shot-history.png";
import shotInsight from "../public/shot-insight.png";

const REPO = "https://github.com/meerbahadin/runwell";
/** The pinned release every download button points at. */
const RELEASES = `${REPO}/releases/tag/v1.0.1`;
/** The full release list, for the footer link. */
const ALL_RELEASES = `${REPO}/releases`;

const PROBLEMS = [
  [
    "The number means nothing",
    "“Energy Impact: 47” — 47 of what? Compared to what? There is no unit and no source.",
  ],
  [
    "One app is a dozen rows",
    "Helper processes are listed separately, so quitting a browser is twelve decisions, and killing the wrong helper leaves the app running broken.",
  ],
  [
    "Zero and unknown look identical",
    "An app that cannot be measured shows the same 0 as an app that is genuinely idle.",
  ],
] as const;

const BADGES = [
  [
    "Measured",
    "Read straight from a system counter.",
    "text-measured",
    "bg-measured-soft",
  ],
  [
    "Derived",
    "Computed from two or more measurements.",
    "text-derived",
    "bg-derived-soft",
  ],
  [
    "Estimated",
    "Inferred from a model. Treat as approximate.",
    "text-estimated",
    "bg-estimated-soft",
  ],
  [
    "Unavailable",
    "macOS would not say. Shown as —, never as 0.",
    "text-unavailable",
    "bg-unavailable-soft",
  ],
] as const;

const CADENCES = [
  ["Window open", "2s"],
  ["Menu bar", "5s"],
  ["Idle on battery", "10s"],
  ["Low Power Mode", "15s"],
  ["Recording off", "paused"],
] as const;

const SAFETY = [
  "Critical system processes are refused outright.",
  "Root-owned and other users' processes are never touched.",
  "Helper processes warn that they belong to a parent app.",
  "Force quit always requires explicit confirmation.",
  "The uninstaller refuses system paths, Runwell itself, and running apps.",
  "Runwell will not offer to kill Runwell.",
] as const;

const PRIVACY = [
  [
    "Stays on your Mac",
    "No account, no analytics, no network calls, no telemetry. Nothing to opt out of, because nothing is collected.",
  ],
  [
    "A local database",
    "History is a SQLite file in ~/Library/Application Support/Runwell/. “Delete All History” genuinely deletes it — the file shrinks rather than the rows being hidden.",
  ],
  [
    "Redacted by default",
    "Bundle identifiers and display names are stored. Executable paths are redacted before they reach a row, and command-line arguments are never collected at all.",
  ],
  [
    "Signed and notarized",
    "Developer ID certificate, hardened runtime, and the app and disk image notarized separately. Gatekeeper opens it without complaint.",
  ],
] as const;

const NUMBERS = [
  ["~67%", "Process coverage on the development machine"],
  ["~166", "Grouped applications the list handles smoothly"],
  ["38 ms → 0.02 ms", "App icon lookup, per frame"],
  ["3.44 ms → 0.07 ms", "Coverage confidence calculation, per frame"],
] as const;

const REQS = [
  ["macOS", "15 or later"],
  ["Architecture", "Universal — Apple silicon and Intel"],
  ["Current version", "1.0.1"],
  ["Price", "Free, MIT licensed"],
  ["Account required", "None"],
] as const;

const INSTALL = [
  "Open the .dmg",
  "Drag Runwell to Applications",
  "Launch it",
] as const;

export default function Home() {
  return (
    <>
      <Reveal />

      {/* Announcement bar */}
      <div className="flex flex-wrap justify-center gap-3.5 bg-ink px-5 py-[9px] text-xs font-medium tracking-[0.01em] text-canvas">
        <span>Free and open source · MIT</span>
        <span className="opacity-40" aria-hidden="true">
          ·
        </span>
        <a
          href={RELEASES}
          className="transition-colors hover:text-[#7ea3ff]"
        >
          Download 1.0.1 for macOS →
        </a>
      </div>

      <header className="sticky top-0 z-40 bg-canvas/[0.86] backdrop-blur-[14px]">
        <div className="mx-auto flex w-full max-w-[1080px] flex-wrap items-center gap-6 px-6 py-3.5">
          <span className="flex items-center gap-2 text-[17px] font-extrabold tracking-[-0.03em]">
            <Image
              src="/app-icon-dark.png"
              alt=""
              width={26}
              height={26}
              className="block size-[26px]"
              priority
            />
            Runwell
          </span>
          <nav className="flex flex-wrap gap-5 text-[13.5px] font-medium text-muted">
            <a href="#honesty" className="transition-colors hover:text-brand">
              Coverage
            </a>
            <a href="#features" className="transition-colors hover:text-brand">
              Features
            </a>
            <a href="#privacy" className="transition-colors hover:text-brand">
              Privacy
            </a>
            <a href="#download" className="transition-colors hover:text-brand">
              Download
            </a>
          </nav>
          <a
            href={RELEASES}
            className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-brand"
          >
            Download{" "}
            <span className="opacity-70" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1080px] px-6">
        {/* 1 — Hero */}
        <section className="pt-[72px] text-center">
          <h1
            data-reveal
            className="mx-auto max-w-[17ch] text-[clamp(40px,7vw,78px)] font-extrabold leading-[0.99] tracking-[-0.045em] text-balance"
          >
            A battery monitor that admits what it can&apos;t see.
          </h1>
          <p
            data-reveal
            className="mx-auto mt-[22px] max-w-[54ch] text-[17px] font-medium leading-[1.55] text-muted"
          >
            macOS hides two thirds of the processes on your Mac. Runwell shows
            you the rest, tells you it&apos;s the rest, and never invents the
            difference.
          </p>
          <div
            data-reveal
            className="mt-[30px] flex flex-wrap justify-center gap-2.5"
          >
            <a
              href={RELEASES}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-[13px] text-[15px] font-semibold text-white transition-colors hover:bg-brand"
            >
              Download for macOS{" "}
              <span className="opacity-70" aria-hidden="true">
                →
              </span>
            </a>
            <a
              href={REPO}
              className="rounded-full bg-surface px-6 py-[13px] text-[15px] font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              View source
            </a>
          </div>
          <p data-reveal className="mt-4 text-[12.5px] font-medium text-muted-2">
            Free and open source · MIT · Universal · Signed and notarized
          </p>

          <div data-reveal className="mt-12 rounded-[22px] bg-[#dcdcdc] p-3.5">
            <div className="flex items-center justify-between px-2 pt-0.5 pb-3 text-[11.5px] font-semibold text-[#6e6e73]">
              <span>Runwell — Applications</span>
              <span>Grouped by app, not by helper process</span>
            </div>
            <Shot
              src={shotApplications}
              alt="Runwell's Applications view, listing apps with their energy, CPU and memory, with Google Chrome expanded to show its 34 helper processes."
              fade="#dcdcdc"
              priority
              sizes="(max-width: 1080px) 100vw, 1080px"
            />
          </div>
        </section>

        {/* 2 — The problem */}
        <section className="pt-24 text-center">
          <h2
            data-reveal
            className="mx-auto max-w-[20ch] text-[clamp(30px,4.6vw,50px)] font-extrabold leading-[1.02] tracking-[-0.042em] text-balance"
          >
            Activity Monitor gives you a number with{" "}
            <span className="text-brand">no units</span> and no source.
          </h2>
          <p
            data-reveal
            className="mx-auto mt-[18px] max-w-[50ch] text-[15.5px] font-medium leading-[1.55] text-muted"
          >
            There is no way to tell a measurement from a guess. Three things
            every Mac user has already run into.
          </p>

          <div className="mt-11 grid gap-[18px] text-left [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
            {PROBLEMS.map(([title, body], i) => (
              <div
                key={title}
                data-reveal
                className="rounded-2xl bg-surface p-[22px]"
              >
                <div className="flex size-7 items-center justify-center rounded-lg bg-brand-soft text-xs font-extrabold text-brand">
                  {i + 1}
                </div>
                <h3 className="mt-4 mb-1.5 text-base font-extrabold tracking-[-0.02em]">
                  {title}
                </h3>
                <p className="text-sm font-medium leading-[1.55] text-muted">
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* Side-by-side: Activity Monitor row vs Runwell row */}
          <div
            data-reveal
            className="mt-4 grid gap-4 text-left [grid-template-columns:repeat(auto-fit,minmax(290px,1fr))]"
          >
            <div className="rounded-[20px] border-2 border-dashed border-[#c9c9c9] bg-[#e9e9e9] p-[22px]">
              <div className="mb-4 flex items-center gap-2">
                <span
                  className="size-2 rounded-full bg-muted-2"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.07em] text-muted-2">
                  Activity Monitor
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-[10px] bg-surface px-3 py-[11px]">
                <span className="truncate text-[12.5px] font-semibold text-muted">
                  Google Chrome
                </span>
                <span className="font-mono text-[12.5px] font-bold text-ink">
                  47
                </span>
              </div>
              <p className="mt-3.5 text-[13px] font-medium leading-[1.5] text-muted-2">
                Energy Impact. No unit, no provenance, no way to compare it to
                anything.
              </p>
            </div>

            <div className="rounded-[20px] bg-ink p-[22px]">
              <div className="mb-4 flex items-center gap-2">
                <span
                  className="size-2 rounded-full bg-brand"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.07em] text-faint">
                  Runwell
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="flex items-center justify-between gap-3 rounded-[10px] bg-ink-soft px-3 py-[11px]">
                  <span className="truncate text-[12.5px] font-semibold text-canvas">
                    Google Chrome
                    <span className="ml-2 font-normal text-[#8a8a90]">
                      34 processes
                    </span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-[12.5px] font-bold text-canvas">
                      0.21 W
                    </span>
                    <span className="rounded bg-measured-soft px-1.5 py-[2px] text-[10px] font-bold text-measured">
                      Measured
                    </span>
                  </span>
                </span>
                <span className="flex items-center justify-between gap-3 rounded-[10px] bg-ink-soft px-3 py-[11px]">
                  <span className="truncate text-[12.5px] font-semibold text-canvas">
                    WindowServer
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-[12.5px] font-bold text-faint">
                      —
                    </span>
                    <span className="rounded bg-unavailable-soft px-1.5 py-[2px] text-[10px] font-bold text-unavailable">
                      Unavailable
                    </span>
                  </span>
                </span>
              </div>
              <p className="mt-3.5 text-[13px] font-medium leading-[1.5] text-[#a8a8ae]">
                A watt figure, the helpers folded in, and a label saying where
                the number came from.
              </p>
            </div>
          </div>
        </section>

        {/* 3 — What it can't see */}
        <section id="honesty" className="pt-24">
          <div
            data-reveal
            className="rounded-[20px] bg-ink px-[34px] py-12 text-canvas"
          >
            <span className="inline-block rounded-full bg-ink-soft px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.06em] text-brand">
              What Runwell can&apos;t see
            </span>
            <h2 className="mt-[18px] max-w-[20ch] text-[clamp(28px,4.2vw,46px)] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              A missing reading is not a reading of zero.
            </h2>

            <div className="mt-8 grid items-center gap-9 [grid-template-columns:repeat(auto-fit,minmax(290px,1fr))]">
              <div>
                <p className="max-w-[52ch] text-[15px] font-medium leading-[1.6] text-[#a8a8ae]">
                  macOS only reports per-process energy for processes your own
                  user owns.{" "}
                  <span className="font-mono text-[14px] text-canvas">
                    kernel_task
                  </span>
                  ,{" "}
                  <span className="font-mono text-[14px] text-canvas">
                    WindowServer
                  </span>{" "}
                  and roughly 200 other system daemons are unreadable — not
                  estimated, simply unavailable. No permission or entitlement
                  fixes this.
                </p>
                <p className="mt-4 max-w-[52ch] text-[15px] font-medium leading-[1.6] text-[#a8a8ae]">
                  On the development machine that worked out to about 67%
                  coverage, and measured app energy accounted for roughly an
                  eighth of real battery draw. Runwell puts that figure on
                  screen instead of hiding it.
                </p>
              </div>

              <div className="rounded-2xl bg-ink-soft p-7 text-center">
                <span className="block font-mono text-[clamp(52px,9vw,76px)] font-extrabold leading-none tracking-[-0.04em] text-white">
                  ~67%
                </span>
                <span className="mt-3 block text-[13px] font-semibold text-faint">
                  of processes measurable on this Mac
                </span>
                <div
                  className="mt-6 h-2.5 overflow-hidden rounded-full bg-[#2a2a2e]"
                  aria-hidden="true"
                >
                  <div className="h-full w-[67%] rounded-full bg-brand" />
                </div>
                <span className="mt-3 block text-[12px] font-medium leading-[1.5] text-[#8a8a90]">
                  The remaining third is system-owned and unreadable by any app.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 4 — Provenance badges */}
        <section className="pt-6">
          <div data-reveal className="rounded-[20px] bg-brand-tint p-[34px]">
            <span className="inline-block rounded-full bg-surface px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.06em] text-brand">
              Provenance
            </span>
            <h2 className="mt-[18px] max-w-[20ch] text-[clamp(26px,3.6vw,38px)] font-extrabold leading-[1.04] tracking-[-0.038em]">
              Every number carries where it came from.
            </h2>
            <p className="mt-3.5 max-w-[52ch] text-[15px] font-medium leading-[1.55] text-[#47506b]">
              Measured, derived, estimated, or unavailable — labelled, not
              blended. A reading macOS refuses to give is shown as an em dash.
            </p>

            <div className="mt-7 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
              {BADGES.map(([label, meaning, text, bg]) => (
                <div key={label} className="rounded-2xl bg-surface p-[22px]">
                  <span
                    className={`inline-block rounded-md px-2.5 py-1 text-[11.5px] font-extrabold ${bg} ${text}`}
                  >
                    {label}
                  </span>
                  <p className="mt-3.5 text-[13.5px] font-medium leading-[1.5] text-muted">
                    {meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5 — Features */}
        <section id="features" className="pt-24 text-center">
          <h2
            data-reveal
            className="mx-auto max-w-[18ch] text-[clamp(30px,4.6vw,50px)] font-extrabold leading-[1.02] tracking-[-0.042em] text-balance"
          >
            Seven surfaces in <span className="text-brand">1.0.1</span>.
          </h2>
          <p
            data-reveal
            className="mx-auto mt-[18px] max-w-[46ch] text-[15.5px] font-medium leading-[1.55] text-muted"
          >
            Each one built around the same rule: show the number, and show where
            it came from.
          </p>

          <div data-reveal className="text-left">
            <FeaturePanel />
          </div>
        </section>

        {/* History screenshot */}
        <section className="pt-6">
          <div data-reveal className="rounded-[20px] bg-surface p-[34px]">
            <div className="mb-[26px] max-w-[54ch]">
              <span className="inline-block rounded-full bg-brand-soft px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.06em] text-brand">
                History
              </span>
              <h3 className="mt-[18px] max-w-[20ch] text-[clamp(26px,3.6vw,38px)] font-extrabold leading-[1.04] tracking-[-0.038em]">
                What drained it yesterday, still on record.
              </h3>
              <p className="mt-3.5 text-[15px] font-medium leading-[1.55] text-muted">
                Battery sessions grouped by day, with the share each app is
                responsible for — and a note, on the same screen, saying those
                shares only cover the processes Runwell could measure.
              </p>
            </div>
            <div className="rounded-2xl bg-[#dcdcdc] p-2.5">
              <Shot
                src={shotHistory}
                alt="Runwell's History view over seven days: a battery level chart, then a ranked list of the apps that used the most energy, footnoted with the coverage figure."
                radius="rounded-lg"
                fade="#dcdcdc"
                sizes="(max-width: 1080px) 100vw, 1080px"
              />
            </div>
          </div>
        </section>

        {/* Insights, with the notification inset */}
        <section className="pt-6">
          <div
            data-reveal
            className="grid items-center gap-8 rounded-[20px] bg-surface p-[34px] [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]"
          >
            <div>
              <span className="inline-block rounded-full bg-brand-soft px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.06em] text-brand">
                Insights
              </span>
              <h3 className="mt-[18px] max-w-[18ch] text-[clamp(26px,3.6vw,38px)] font-extrabold leading-[1.04] tracking-[-0.038em]">
                It speaks up only when it&apos;s worth knowing.
              </h3>
              <p className="mt-3.5 max-w-[46ch] text-[15px] font-medium leading-[1.55] text-muted">
                An app holding a power assertion while the screen is off, an
                unusual background wakeup rate, sustained energy you did not ask
                for. Plain language, no badge counts, no daily digest.
              </p>
            </div>
            <div className="flex justify-center rounded-2xl bg-brand-wash p-7">
              <Shot
                src={shotInsight}
                alt="A Runwell notification reading “Using a lot of memory — Google Chrome is using a lot of memory and slowing your Mac down.”"
                fade="#f3f7fe"
                className="w-full max-w-[340px]"
                sizes="340px"
              />
            </div>
          </div>
        </section>

        {/* 6 — Sampling */}
        <section className="pt-6">
          <div data-reveal className="rounded-[20px] bg-surface p-[34px]">
            <span className="inline-block rounded-full bg-brand-soft px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.06em] text-brand">
              Sampling
            </span>
            <h3 className="mt-[18px] max-w-[24ch] text-[clamp(26px,3.6vw,38px)] font-extrabold leading-[1.04] tracking-[-0.038em]">
              A battery monitor that flattens your battery is a contradiction.
            </h3>
            <p className="mt-3.5 max-w-[52ch] text-[15px] font-medium leading-[1.55] text-muted">
              Sampling adapts to what you are doing. Turn recording off and it
              genuinely stops — a real paused state, not the slowest cadence.
            </p>

            <div className="mt-7 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(170px,1fr))]">
              {CADENCES.map(([label, rate]) => {
                const paused = rate === "paused";
                return (
                  <div
                    key={label}
                    className={`rounded-2xl p-[18px] text-center ${paused ? "bg-ink" : "bg-brand-wash"}`}
                  >
                    <span
                      className={`block font-mono text-[26px] font-extrabold tracking-[-0.03em] ${paused ? "text-brand" : "text-ink"}`}
                    >
                      {rate}
                    </span>
                    <span
                      className={`mt-1.5 block text-[12.5px] font-semibold ${paused ? "text-faint" : "text-muted-2"}`}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Safety */}
        <section className="pt-6">
          <div
            data-reveal
            className="rounded-[20px] bg-ink px-[34px] py-10 text-canvas"
          >
            <h3 className="max-w-[18ch] text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.02] tracking-[-0.04em]">
              Quitting and uninstalling are guarded.
            </h3>
            <p className="mt-3.5 max-w-[52ch] text-[15px] font-medium leading-[1.55] text-[#a8a8ae]">
              Both surfaces end processes or remove files, so both refuse more
              than they accept.
            </p>
            <div className="mt-7 grid gap-x-10 gap-y-3.5 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
              {SAFETY.map((rule) => (
                <span
                  key={rule}
                  className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-2.5 text-sm font-medium leading-[1.55] text-[#a8a8ae]"
                >
                  <span
                    className="font-extrabold text-brand"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {rule}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 7 — Privacy */}
        <section id="privacy" className="pt-24 text-center">
          <h2
            data-reveal
            className="mx-auto max-w-[18ch] text-[clamp(30px,4.6vw,50px)] font-extrabold leading-[1.02] tracking-[-0.042em] text-balance"
          >
            No account. No analytics.{" "}
            <span className="text-brand">No network calls.</span>
          </h2>
          <p
            data-reveal
            className="mx-auto mt-[18px] max-w-[46ch] text-[15.5px] font-medium leading-[1.55] text-muted"
          >
            Absolutes, because they are true. Turn off Wi-Fi and Runwell behaves
            exactly the same.
          </p>

          <div className="mt-11 grid gap-[18px] text-left [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
            {PRIVACY.map(([title, body]) => (
              <div
                key={title}
                data-reveal
                className="rounded-2xl bg-surface p-[22px]"
              >
                <h3 className="mb-1.5 text-base font-extrabold tracking-[-0.02em]">
                  {title}
                </h3>
                <p className="text-sm font-medium leading-[1.55] text-muted">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 8 — Open source + measured numbers */}
        <section className="pt-24">
          <div
            data-reveal
            className="rounded-[20px] bg-surface p-[34px] text-center"
          >
            <span className="inline-block rounded-full bg-brand-soft px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.06em] text-brand">
              Measured, not claimed
            </span>
            <h2 className="mx-auto mt-[18px] max-w-[20ch] text-[clamp(26px,3.6vw,38px)] font-extrabold leading-[1.04] tracking-[-0.038em]">
              Every figure here came off a profiler.
            </h2>

            <div className="mt-8 grid gap-3 text-left [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
              {NUMBERS.map(([figure, label]) => (
                <div key={label} className="rounded-2xl bg-brand-wash p-[22px]">
                  <span className="block font-mono text-[19px] font-extrabold tracking-[-0.03em] text-ink">
                    {figure}
                  </span>
                  <span className="mt-2 block text-[13px] font-semibold leading-[1.45] text-muted-2">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-6 max-w-[58ch] text-[13.5px] font-medium leading-[1.55] text-muted-2">
              For context on the two per-frame rows: a 60 Hz frame budget is
              16.7 ms, and the icon lookup alone was more than twice that before
              anything was drawn.
            </p>
          </div>
        </section>

        {/* Repository card */}
        <section className="pt-6">
          <div
            data-reveal
            className="grid items-center gap-8 rounded-[20px] bg-ink p-[34px] text-canvas [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]"
          >
            <div>
              <span className="inline-block rounded-full bg-ink-soft px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.06em] text-brand">
                Open source
              </span>
              <h3 className="mt-[18px] max-w-[18ch] text-[clamp(26px,3.6vw,36px)] font-extrabold leading-[1.04] tracking-[-0.038em] text-white">
                MIT licensed. Read it before you run it.
              </h3>
              <p className="mt-3.5 max-w-[46ch] text-[15px] font-medium leading-[1.55] text-[#a8a8ae]">
                A utility that reads system data and deletes files should be
                inspectable. The whole thing is on GitHub.
              </p>
              <a
                href={REPO}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-[22px] py-3 text-[14px] font-bold text-white transition-colors hover:bg-white hover:text-ink"
              >
                View source on GitHub{" "}
                <span className="opacity-70" aria-hidden="true">
                  →
                </span>
              </a>
            </div>

            <div className="rounded-2xl bg-ink-soft p-[22px]">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.07em] text-faint">
                Build from source
              </span>
              <pre className="mt-3.5 overflow-x-auto font-mono text-[12.5px] leading-[1.7] text-canvas">
                <code>{`git clone ${REPO}.git
cd runwell
swift test
Scripts/build-app.sh`}</code>
              </pre>
              <p className="mt-3.5 text-[12.5px] font-medium leading-[1.5] text-[#8a8a90]">
                For local development only.{" "}
                <span className="font-mono">build-app.sh</span> produces an
                ad-hoc signed build that Gatekeeper rejects on any other Mac —
                the download above is the distributable one.
              </p>
            </div>
          </div>
        </section>

        {/* 9 — Download */}
        <section id="download" className="pt-24">
          <div
            data-reveal
            className="rounded-3xl bg-brand px-[34px] py-16 text-center text-white"
          >
            <Image
              src="/app-icon-dark.png"
              alt=""
              width={88}
              height={88}
              className="mx-auto block size-[88px]"
            />
            <h2 className="mx-auto mt-[22px] max-w-[18ch] text-[clamp(30px,5.2vw,56px)] font-extrabold leading-none tracking-[-0.045em] text-white">
              Know what&apos;s draining it. And what you don&apos;t know.
            </h2>
            <a
              href={RELEASES}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-[26px] py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-white hover:text-ink"
            >
              Download for macOS{" "}
              <span className="opacity-70" aria-hidden="true">
                →
              </span>
            </a>
            <p className="mt-4 text-[12.5px] font-semibold text-white/80">
              Free and open source · MIT · Universal · Signed and notarized
            </p>
          </div>
        </section>

        {/* Requirements + install */}
        <section className="pt-6">
          <div className="grid items-stretch gap-[18px] [grid-template-columns:repeat(auto-fit,minmax(290px,1fr))]">
            <div data-reveal className="rounded-[18px] bg-surface p-7">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.07em] text-muted-2">
                Requirements
              </span>
              <div className="mt-4 flex flex-col">
                {REQS.map(([title, body]) => (
                  <div
                    key={title}
                    className="flex items-baseline justify-between gap-4 border-t border-hairline py-[13px] first:border-t-0"
                  >
                    <span className="whitespace-nowrap text-sm font-extrabold tracking-[-0.02em]">
                      {title}
                    </span>
                    <span className="text-right text-[13.5px] font-medium leading-[1.5] text-muted">
                      {body}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              data-reveal
              className="flex flex-col rounded-[18px] bg-ink p-7 text-canvas"
            >
              <span className="text-[11px] font-extrabold uppercase tracking-[0.07em] text-faint">
                Installing
              </span>
              <div className="mt-4 flex flex-col gap-2.5">
                {INSTALL.map((step, i) => (
                  <span
                    key={step}
                    className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 text-sm font-semibold text-canvas"
                  >
                    <span className="flex size-[22px] items-center justify-center rounded-md bg-ink-soft text-[11px] font-extrabold text-brand">
                      {i + 1}
                    </span>
                    {step}
                  </span>
                ))}
              </div>
              <p className="mt-[18px] text-[13.5px] font-medium leading-[1.55] text-[#a8a8ae]">
                Both the app and the disk image are notarized, so there is no
                Gatekeeper workaround to explain. No right-click Open, no
                terminal command.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-[22px]">
                {["Universal binary", "No account", "Works offline"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-ink-soft px-[13px] py-[7px] text-xs font-bold text-canvas"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 flex flex-wrap items-center gap-[18px] border-t border-hairline pt-[26px] pb-12 text-[12.5px] font-medium text-muted-2">
          <span className="flex items-center gap-2 font-extrabold tracking-[-0.03em] text-ink">
            <Image
              src="/app-icon-dark.png"
              alt=""
              width={20}
              height={20}
              className="block size-5"
            />
            Runwell
          </span>
          <span>MIT licensed · © 2026</span>
          <a
            href={REPO}
            className="ml-auto transition-colors hover:text-brand"
          >
            GitHub
          </a>
          <a
            href={`${REPO}/issues`}
            className="transition-colors hover:text-brand"
          >
            Issues
          </a>
          <a href={ALL_RELEASES} className="transition-colors hover:text-brand">
            Releases
          </a>
        </footer>
      </main>
    </>
  );
}
