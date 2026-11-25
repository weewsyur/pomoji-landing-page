import { SCREENS, type ScreenKey } from "../../config/screenshots";
import { PhoneFrame } from "./PhoneFrame";
import { HomeScreen } from "./HomeScreen";
import { TimerScreen } from "./TimerScreen";
import { DassScreen } from "./DassScreen";

/** Renders a configured screenshot if available, otherwise the mockup. */
export function AppScreen({ screen, className }: { screen: ScreenKey; className?: string }) {
  const cfg = SCREENS[screen];
  return (
    <PhoneFrame className={className}>
      {cfg.image ? (
        <img
          src={cfg.image}
          alt={cfg.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
      ) : (
        <div role="img" aria-label={cfg.alt} className="h-full w-full select-none">
          {screen === "home" && <HomeScreen />}
          {screen === "timer" && <TimerScreen />}
          {screen === "dass" && <DassScreen />}
        </div>
      )}
    </PhoneFrame>
  );
}
