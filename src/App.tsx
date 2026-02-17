import { Navbar } from '@/components/ui';
import { Hero } from '@/features/Hero';
import { Services } from '@/features/Services';
import { Projects } from '@/features/Projects';
import { About } from '@/features/About';
import { Contact } from '@/features/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#06080f] text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}
