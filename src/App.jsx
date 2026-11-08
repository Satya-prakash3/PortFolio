import React, { useMemo, useState } from "react";
import data from "./content/profile.json";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Experience from "./components/Experience";
import Security from "./components/Security";
import Projects from "./components/Projects";
import Toolkit from "./components/Toolkit";
import Contact from "./components/Contact";

const { profile, metrics, capabilities, work, caseStudies, projects, navigation } = data;

function App() {
  const [active, setActive] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllCases, setShowAllCases] = useState(false);
  const [theme, setTheme] = useState("dark");
  const year = useMemo(() => new Date().getFullYear(), []);

  React.useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === "dark" ? "light" : "dark");

  const goTo = (id) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#080d16] text-slate-200">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-48 left-[28%] h-[32rem] w-[32rem] rounded-full bg-teal-500/[0.08] blur-[120px]" />
        <div className="absolute right-[-12rem] top-[35%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/[0.05] blur-[120px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1440px]">
        <Sidebar profile={profile} navigation={navigation} active={active} goTo={goTo} />
        <main className="min-w-0 flex-1 px-4 pb-12 sm:px-7 lg:px-10">
          <Header profile={profile} navigation={navigation} menuOpen={menuOpen} setMenuOpen={setMenuOpen} goTo={goTo} toggleTheme={toggleTheme} theme={theme} />
          <Overview profile={profile} metrics={metrics} goTo={goTo} />
          <Experience work={work} />
          <Security caseStudies={caseStudies} showAllCases={showAllCases} setShowAllCases={setShowAllCases} />
          <Projects projects={projects} profile={profile} />
          <Toolkit capabilities={capabilities} />
          <Contact profile={profile} year={year} />
        </main>
      </div>
    </div>
  );
}

export default App;
