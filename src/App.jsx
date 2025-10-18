import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { useEffect } from 'react';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-mauve">
      <SpeedInsights/>
      <Analytics/>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App