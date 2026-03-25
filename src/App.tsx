/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ArrowRight, 
  Beaker, 
  Database, 
  Network, 
  CheckCircle2, 
  Microscope, 
  ClipboardCheck, 
  Upload, 
  Puzzle
} from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-100">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <div className="flex items-center gap-3">
          <img 
            src="https://raw.githubusercontent.com/MDPP-ops/website/main/assets/images/M-DPP_header_logo_horizontal_1000px.jpg" 
            alt="M-DPP Logo" 
            className="h-10 w-auto"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-primary font-semibold text-sm" href="#">Home</a>
          <a className="text-gray-600 hover:text-primary transition-colors text-sm font-medium" href="#">About</a>
          <a className="text-gray-600 hover:text-primary transition-colors text-sm font-medium" href="#">Work</a>
          <a className="text-gray-600 hover:text-primary transition-colors text-sm font-medium" href="#">Outputs</a>
          <a className="text-gray-600 hover:text-primary transition-colors text-sm font-medium" href="#">Contact</a>
        </div>
        <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-all active:scale-95 shadow-sm">
          Get in touch
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          className="w-full h-full object-cover" 
          src="https://raw.githubusercontent.com/MDPP-ops/website/main/assets/images/Landing_background.jpg" 
          alt="Macro textile fibers"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-3 py-1 bg-blue-50 text-primary font-label text-xs tracking-widest rounded-full mb-6 border border-blue-100">
            TOPSECTOR ICT • DIGITAL PRODUCT PASSPORTS
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-gray-900 leading-[1.1] mb-8">
            Linking textile identity to the <span className="text-primary italic">material</span> itself—from fibre to passport.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl font-light leading-relaxed mb-12">
            M-DPP is a two-year applied research project (2025–2027) investigating how molecular-level material identification can underpin reliable, persistent Digital Product Passports for the textile sector.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-primary hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-primary/20">
              Research challenge
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-gray-100 text-gray-900 px-10 py-4 rounded-lg font-semibold transition-all hover:bg-gray-200">
              Our approach
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FocusAreas = () => {
  const areas = [
    {
      title: "Molecular identification",
      description: "Investigating whether molecular fingerprints embedded in the textile material itself can serve as a durable, tamper-resistant alternative to external identifiers.",
      icon: Beaker,
      color: "bg-primary"
    },
    {
      title: "Composition verification",
      description: "Studying how composition, recycled content, and processing history can be independently verified using established analytical methods (FTIR, Raman, chromatography).",
      icon: Microscope,
      color: "bg-teal-700"
    },
    {
      title: "Open standards",
      description: "Exploring open standards and modular architectures that allow different actors to participate on equal terms, avoiding proprietary platform lock-in.",
      icon: Database,
      color: "bg-blue-600"
    },
    {
      title: "Interoperable data exchange",
      description: "Building, testing, and evaluating working prototypes in realistic contexts with real companies to ensure seamless data flow across the value chain.",
      icon: Network,
      color: "bg-teal-600"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-label text-sm uppercase tracking-[0.3em] text-teal-700 mb-4">Focus Areas</h2>
          <h3 className="text-4xl font-bold font-headline tracking-tight text-gray-900">Foundations of the Molecular Passport</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {areas.map((area, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between group hover:border-primary transition-all duration-300 cursor-pointer"
            >
              <div>
                <div className={`w-12 h-12 rounded-lg ${area.color} flex items-center justify-center mb-6`}>
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold font-headline mb-4 text-gray-900">{area.title}</h4>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ResearchChallenge = () => {
  return (
    <section className="py-32 bg-white overflow-hidden relative" id="challenge">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <h2 className="font-label text-sm uppercase tracking-[0.3em] text-teal-700 mb-6">The Research Challenge</h2>
          <h3 className="text-5xl font-bold font-headline tracking-tighter text-gray-900 mb-8 leading-tight">Closing the gap in textile circularity.</h3>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>The EU is mandating Digital Product Passports under ESPR, yet the predominantly SME-based textile industry lacks practical methods for persistent material verification.</p>
            <p>Conventional identifiers—QR codes, RFID tags, printed labels—degrade, detach, or get lost during use, creating a traceability gap exactly when verification is needed most.</p>
            <p>M-DPP investigates whether <span className="text-primary font-semibold">molecular fingerprints</span> embedded in the textile material itself can serve as a durable, tamper-resistant alternative to external identifiers.</p>
          </div>
          <div className="mt-12 flex items-center gap-4 p-4 border-l-4 border-teal-700 bg-gray-50 rounded-r-xl">
            <CheckCircle2 className="w-8 h-8 text-teal-700" />
            <p className="font-label text-sm italic text-gray-700">Linking physical material to digital transaction records.</p>
          </div>
        </div>
        <div className="space-y-6">
          {[
            { title: "Identity beyond labels", desc: "Physical tags can be detached. Molecular markers reside inside the polymer, surviving the entire product lifecycle." },
            { title: "Verifiable claims", desc: "Combat greenwashing with lab-verified proof of origin and recycled content percentages.", offset: true },
            { title: "Open and interoperable", desc: "No vendor lock-in. Our standards are designed for a global ecosystem of circular fashion stakeholders." }
          ].map((item, i) => (
            <div key={i} className={`glass-panel p-8 rounded-xl border border-gray-100 shadow-sm ${item.offset ? 'lg:translate-x-8' : ''}`}>
              <h5 className="font-headline font-bold text-xl mb-2 text-gray-900">{item.title}</h5>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ResearchApproach = () => {
  const steps = [
    { id: "01", title: "Characterise", desc: "Defining the chemical signature of diverse textile substrates.", icon: Microscope },
    { id: "02", title: "Validate", desc: "Testing durability against industrial washing and mechanical recycling.", icon: ClipboardCheck },
    { id: "03", title: "Publish", desc: "Registering fingerprint data to a secure, open-source reference ledger.", icon: Upload },
    { id: "04", title: "Integrate", desc: "Deploying APIs for circular supply chain stakeholders.", icon: Puzzle }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl font-bold font-headline tracking-tight mb-4 text-gray-900">Research Approach</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">The project follows a design-science methodology, combining material science with information systems research.</p>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 relative gap-8">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/20 via-teal-700/20 to-primary/20 -z-0"></div>
          {steps.map((step, i) => (
            <div key={i} className="px-6 pb-12 md:pb-0 relative z-10 group text-center">
              <div className="w-24 h-24 rounded-full bg-white border border-gray-100 flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <step.icon className="w-8 h-8" />
              </div>
              <h6 className="font-label text-xs uppercase tracking-widest text-primary mb-2">Step {step.id}</h6>
              <h5 className="font-headline font-bold text-xl mb-3 text-gray-900">{step.title}</h5>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustrySection = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold font-headline tracking-tight text-gray-900 mb-8">Co-designed with industry, validated in living labs.</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              M-DPP follows a participatory approach: prototypes are developed and tested together with Dutch textile partners including <span className="text-primary font-semibold">BYBORRE</span>, <span className="text-primary font-semibold">Knitwear Lab</span>, and <span className="text-primary font-semibold">New Order of Fashion (NOoF)</span>.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="text-3xl font-bold text-primary block mb-1">08+</span>
                <span className="font-label text-xs uppercase tracking-widest text-gray-500">Consortium Partners</span>
              </div>
              <div>
                <span className="text-3xl font-bold text-teal-700 block mb-1">03</span>
                <span className="font-label text-xs uppercase tracking-widest text-gray-500">Active Living Labs</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-inner">
              <img 
                className="w-full h-full object-cover" 
                src="https://raw.githubusercontent.com/MDPP-ops/website/main/assets/images/RGF180129-1716.jpg" 
                alt="Lab research"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-square bg-gray-100 rounded-xl mt-8 overflow-hidden shadow-inner">
              <img 
                className="w-full h-full object-cover" 
                src="https://raw.githubusercontent.com/MDPP-ops/website/main/assets/images/Landing_background.jpg" 
                alt="Textile samples"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center text-center">
        <h2 className="text-5xl font-bold font-headline tracking-tighter mb-6">Interested in collaborating?</h2>
        <p className="text-xl text-white/80 max-w-2xl mb-12">Join our network of Living Labs or become an associate research partner as we shape the future of the EU Digital Product Passport.</p>
        <button className="bg-white text-primary px-12 py-5 rounded-xl font-bold text-lg hover:bg-surface-container-low transition-all shadow-xl">
          Get in touch
        </button>
      </div>
    </section>
  );
};

const Partners = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center font-label text-xs uppercase tracking-[0.3em] text-gray-400 mb-12">Research Consortium & Partners</p>
        <div className="flex justify-center">
          <img 
            src="https://raw.githubusercontent.com/MDPP-ops/website/main/assets/images/M-DPP_footer_consortium_line.jpg" 
            alt="Consortium Partners" 
            className="max-w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img 
            src="https://raw.githubusercontent.com/MDPP-ops/website/main/assets/images/M-DPP_header_logo_horizontal_1000px.jpg" 
            alt="M-DPP Logo" 
            className="h-8 w-auto mb-6 grayscale opacity-70"
            referrerPolicy="no-referrer"
          />
          <p className="text-gray-500 max-w-md text-sm leading-relaxed">
            M-DPP is an applied research project co-funded by <span className="font-semibold">NWO/SIA</span> for the <span className="font-semibold">Top-Sector ICT Digital Product Passports</span> programme.
          </p>
        </div>
        <div className="flex flex-col md:items-end justify-between">
          <div className="flex flex-wrap gap-8 mb-8">
            {["About", "Work", "Outputs", "Contact"].map((link, i) => (
              <a key={i} className="text-gray-500 hover:text-primary transition-all font-label text-xs uppercase tracking-widest" href="#">{link}</a>
            ))}
          </div>
          <p className="text-gray-400 font-label text-[10px] uppercase tracking-widest">
            © 2025 M-DPP Research Consortium. Hosted on GitHub Pages.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-tertiary-container selection:text-on-tertiary-container">
      <Navbar />
      <Hero />
      <FocusAreas />
      <ResearchChallenge />
      <ResearchApproach />
      <IndustrySection />
      <CTA />
      <Partners />
      <Footer />
    </div>
  );
}
