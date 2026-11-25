import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(children: ReactNode) {
  return function Icon({ className = "h-5 w-5", ...rest }: IconProps) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
        className={className}
        {...rest}
      >
        {children}
      </svg>
    );
  };
}

export const ArrowRight = base(<><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>);
export const Menu = base(<><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>);
export const Close = base(<><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>);
export const Check = base(<path d="m5 12.5 4.5 4.5L19 7.5" />);
export const Timer = base(<><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2" /><path d="M9.5 2.5h5" /></>);
export const History = base(<><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /><path d="M12 7.5V12l3 2" /></>);
export const BarChart = base(<><path d="M4 20V4" /><path d="M4 20h16" /><path d="M9 20v-7" /><path d="M14 20V9" /><path d="M19 20v-5" /></>);
export const Quote = base(<><path d="M10 8H6.5A2.5 2.5 0 0 0 4 10.5V14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2H6" /><path d="M20 8h-3.5A2.5 2.5 0 0 0 14 10.5V14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2h-4" /></>);
export const Clipboard = base(<><rect x="5" y="4" width="14" height="17" rx="2.5" /><path d="M9 4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V6H9z" /><path d="M9 11h6" /><path d="M9 15h4" /></>);
export const Heart = base(<path d="M12 20s-7.5-4.6-9-9.6A4.9 4.9 0 0 1 12 7a4.9 4.9 0 0 1 9 3.4C19.5 15.4 12 20 12 20z" />);
export const HandHeart = base(<><path d="M12 11.5s-3.2-1.9-3.2-4.1A1.8 1.8 0 0 1 12 6.3a1.8 1.8 0 0 1 3.2 1.1c0 2.2-3.2 4.1-3.2 4.1z" /><path d="M3 15.5l3-1.5 4 .5 4.5-1.3a1.7 1.7 0 0 1 .9 3.2L10 18.5l-3.5.5L3 18z" /><path d="M14.5 17.5 20 15" /></>);
export const Lock = base(<><rect x="5" y="11" width="14" height="9.5" rx="2.5" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>);
export const Calendar = base(<><rect x="4" y="5" width="16" height="15" rx="2.5" /><path d="M8 3v4" /><path d="M16 3v4" /><path d="M4 10h16" /></>);
export const Flame = base(<path d="M12 3c.5 3-2 4.5-3.5 6.8A6 6 0 0 0 12 21a6 6 0 0 0 5-9c-.8 1-1.6 1.4-2.5 1.5C15 9.5 13.5 5.5 12 3z" />);
export const Coffee = base(<><path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" /><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16" /><path d="M8 3v3" /><path d="M12 3v3" /></>);
export const GraduationCap = base(<><path d="m2.5 9.5 9.5-5 9.5 5-9.5 5z" /><path d="M6.5 11.8v4.2c0 1.2 2.5 2.8 5.5 2.8s5.5-1.6 5.5-2.8v-4.2" /><path d="M21.5 9.5V15" /></>);
export const Briefcase = base(<><rect x="3" y="7" width="18" height="13" rx="2.5" /><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" /><path d="M3 13h18" /></>);
export const Sparkle = base(<><path d="M12 3v4" /><path d="M12 17v4" /><path d="M3 12h4" /><path d="M17 12h4" /><path d="m6 6 2.5 2.5" /><path d="m15.5 15.5 2.5 2.5" /><path d="m18 6-2.5 2.5" /><path d="M8.5 15.5 6 18" /></>);
export const Monitor = base(<><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8" /><path d="M12 16v4" /></>);
export const Laptop = base(<><rect x="5" y="5" width="14" height="10" rx="1.5" /><path d="M2.5 19h19l-1.5-4H4z" /></>);
export const Tablet = base(<><rect x="5" y="3" width="14" height="18" rx="2.5" /><path d="M11 18h2" /></>);
export const Smartphone = base(<><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></>);
export const Globe = base(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.8 3 2.8 15 0 18" /><path d="M12 3c-2.8 3-2.8 15 0 18" /></>);
export const Shield = base(<><path d="M12 3 5 6v5.5c0 4.3 3 7.7 7 9.5 4-1.8 7-5.2 7-9.5V6z" /><path d="m9 12 2.2 2.2L15 10" /></>);
export const Moon = base(<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />);
export const Scale = base(<><path d="M12 4v16" /><path d="M7 20h10" /><path d="M5 7h14" /><path d="m5 7-3 6a3.5 3.5 0 0 0 6 0z" /><path d="m19 7-3 6a3.5 3.5 0 0 0 6 0z" /></>);
export const Eye = base(<><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="2.8" /></>);
export const LifeBuoy = base(<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.5" /><path d="m5.6 5.6 3.9 3.9" /><path d="m14.5 14.5 3.9 3.9" /><path d="m18.4 5.6-3.9 3.9" /><path d="m9.5 14.5-3.9 3.9" /></>);
export const Home = base(<><path d="M4 11 12 4l8 7" /><path d="M6 10v9.5h12V10" /><path d="M10 19.5V14h4v5.5" /></>);
export const User = base(<><circle cx="12" cy="8" r="3.8" /><path d="M4.5 20c.8-4 3.8-6 7.5-6s6.7 2 7.5 6" /></>);
export const Plus = base(<><path d="M12 5v14" /><path d="M5 12h14" /></>);
export const Play = base(<path d="M8 5.5v13l11-6.5z" />);
export const Search = base(<><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></>);
export const Bell = base(<><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z" /><path d="M10 21h4" /></>);
export const ChevronDown = base(<path d="m6 9 6 6 6-6" />);
export const Sliders = base(<><circle cx="6" cy="7" r="2.2" /><path d="M10 7h10" /><circle cx="18" cy="17" r="2.2" /><path d="M4 17h10" /></>);
export const ListIcon = base(<><path d="M9 6h11" /><path d="M9 12h11" /><path d="M9 18h11" /><path d="M4 6h.01" /><path d="M4 12h.01" /><path d="M4 18h.01" /></>);
