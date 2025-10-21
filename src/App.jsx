import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { useEffect } from 'react';
import Navbar from './components/Navbar'
import { lazy, Suspense } from 'react';
import { Loader } from "lucide-react";

const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Whyme = lazy(() => import('./components/WhyMe'));

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-mauve">
      
      <SpeedInsights/>
      <Analytics/>
      <Suspense fallback={<Loader />}>
      <Navbar />
      <Hero />
      <About />
      <Whyme />
      </Suspense>
    </div>
  )
}

export default App