import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Features } from "./components/sections/Features";
import { HowItWorks } from "./components/sections/HowItWorks";
import { AppPreview } from "./components/sections/AppPreview";
import { UseCases } from "./components/sections/UseCases";
import { Wellness } from "./components/sections/Wellness";
import { Privacy } from "./components/sections/Privacy";
import { FinalCTA } from "./components/sections/FinalCTA";

export default function App() {
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <AppPreview />
        <UseCases />
        <Wellness />
        <Privacy />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
