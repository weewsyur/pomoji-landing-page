/**
 * Application preview screens.
 *
 * To use a real screenshot, drop the image in `public/screenshots/` and set
 * `image` (e.g. "/screenshots/timer.png"). When `image` is undefined, an
 * illustrative mockup that follows the app's UI is shown instead.
 */
export type ScreenKey = "home" | "timer" | "dass";

export const SCREENS: Record<
  ScreenKey,
  { title: string; caption: string; alt: string; image?: string }
> = {
  home: {
    title: "Home",
    caption: "Your daily streak, readiness check and recent focus sessions in one place.",
    alt: "PomoJI home screen showing a streak, daily readiness check and focus session cards",
    image: undefined,
  },
  timer: {
    title: "Focus timer",
    caption: "Switch between Focus and Break, pick a task, and press play.",
    alt: "PomoJI timer screen with a 25 minute focus countdown, active task and task list",
    image: undefined,
  },
  dass: {
    title: "DASS-21 check-in",
    caption: "A voluntary self-report with a clear notice before you begin.",
    alt: "PomoJI DASS-21 assessment notice explaining instructions, data collected, privacy and frequency",
    image: undefined,
  },
};
