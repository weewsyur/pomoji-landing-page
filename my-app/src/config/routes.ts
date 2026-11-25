/**
 * Central place for every link the landing page uses.
 *
 * NOTE: This repository currently contains only the landing page scaffold.
 * The existing PomoJI app (router, auth, Firebase) is not present here, so
 * `register` and `login` are the paths the landing page *expects* the app to
 * serve. Change them here if the real app uses different URLs.
 *
 * Optional routes (`terms`, `privacyPolicy`) are `null` because no such pages
 * exist yet. Links that point to a `null` route are not rendered.
 */
export const APP_ROUTES = {
  register: "https://software-engineering1-pomoji.web.app/welcome",
  login: "https://software-engineering1-pomoji.web.app/welcome",
  terms: null as string | null,
  privacyPolicy: null as string | null,
};

/** In-page anchors on the landing page. */
export const SECTIONS = {
  about: "#about",
  features: "#features",
  howItWorks: "#how-it-works",
  preview: "#preview",
  useCases: "#use-cases",
  wellness: "#wellness",
  privacy: "#privacy",
};
