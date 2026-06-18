import { useState } from "react";
import { ChevronDown, ChevronUp, Calendar, Monitor, Users, CreditCard, Clock, CheckCircle2, Bot, Menu, X, Star } from "lucide-react";

const TEAL = "#2BBFAD";
const ORANGE = "#FF6B35";

function KidroveLogo() {
  return (
    <a href="https://kidrove.com">
      <img src="/logo.jpeg" alt="Kidrove Logo" className="h-7 md:h-10 w-auto" />
    </a>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <KidroveLogo />
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-700">
            <a href="https://kidrove.com/search" className="hover:text-teal-500 transition-colors">Find Activities</a>
            <a href="https://kidrove.com/blog" className="hover:text-teal-500 transition-colors">Blog</a>
            <a href="https://kidrove.com/about" className="hover:text-teal-500 transition-colors">About</a>
            <a href="https://kidrove.com/faq" className="hover:text-teal-500 transition-colors">FAQ</a>
            <a href="https://kidrove.com/contact" className="hover:text-teal-500 transition-colors">Get In Touch</a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="https://kidrove.com/search" className="text-gray-500 hover:text-teal-500 transition-colors p-2">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.35-4.35" /></svg>
            </a>
            <a
              href="https://kidrove.com/login"
              data-testid="button-login"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-white text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: TEAL }}
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" /></svg>
              Login
            </a>
          </div>
          <button className="md:hidden p-2 text-gray-600" onClick={() => setMenuOpen(!menuOpen)} data-testid="button-menu-toggle">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-gray-100 flex flex-col gap-3 text-sm font-medium text-gray-700">
            <a href="https://kidrove.com/search" className="hover:text-teal-500 py-1">Find Activities</a>
            <a href="https://kidrove.com/blog" className="hover:text-teal-500 py-1">Blog</a>
            <a href="https://kidrove.com/about" className="hover:text-teal-500 py-1">About</a>
            <a href="https://kidrove.com/faq" className="hover:text-teal-500 py-1">FAQ</a>
            <a href="https://kidrove.com/contact" className="hover:text-teal-500 py-1">Get In Touch</a>
            <a href="https://kidrove.com/login" className="self-start flex items-center gap-1.5 px-4 py-2 rounded-full text-white text-sm font-semibold" style={{ backgroundColor: TEAL }}>
              Login
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-1 h-6 rounded-full" style={{ backgroundColor: TEAL }} />
      <h2 className="text-xl font-bold text-gray-900">{children}</h2>
    </div>
  );
}

function DetailChip({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
      <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${TEAL}20`, color: TEAL }}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900 leading-tight">{value}</p>
        <p className="text-xs text-gray-500 uppercase tracking-wide mt-0.5">{label}</p>
      </div>
    </div>
  );
}

const LEARNING_OUTCOMES = [
  "Build and program your own AI-powered robot from scratch using Python and Raspberry Pi",
  "Understand core machine learning concepts — training models, data sets, and real-world AI applications",
  "Develop problem-solving skills through weekly hands-on STEM challenges and mini-hackathons",
  "Learn how sensors, actuators, and computer vision work together in modern robotics",
  "Collaborate with peers on a final group project and present a working AI prototype",
  "Gain industry-recognized digital literacy skills that prepare you for future STEM pathways",
];

const FAQS = [
  {
    q: "Does my child need prior coding experience?",
    a: "No prior experience is needed! The workshop is designed for beginners aged 8-14. We start from the very basics and guide every child step-by-step. Our instructors ensure the pace is comfortable for all participants.",
  },
  {
    q: "What equipment or tools does my child need?",
    a: "Your child needs a laptop or desktop computer (Windows/Mac) with a stable internet connection. All software tools are free and web-based. A robot kit will be provided digitally in the form of a simulator — no physical hardware is required.",
  },
  {
    q: "How are the online sessions conducted?",
    a: "Sessions are held live via Zoom/Google Meet every weekday. Each session is 90 minutes and includes a mix of teaching, hands-on coding, and Q&A. Recordings are available for 48 hours after each session in case your child misses a class.",
  },
  {
    q: "What is the refund policy?",
    a: "We offer a full refund if you cancel within 48 hours of enrollment. After that, a 50% refund is available up to 7 days before the workshop starts. No refunds are available once the workshop has begun.",
  },
  {
    q: "Will there be a certificate at the end?",
    a: "Yes! Every child who completes the workshop receives a digitally signed Certificate of Completion from Kidrove, recognizing their achievement in AI & Robotics. It's a great addition to any school portfolio.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors group"
        onClick={onToggle}
        data-testid={`button-faq-${q.slice(0, 20).replace(/\s/g, "-").toLowerCase()}`}
      >
        <span className="text-sm font-semibold text-gray-900 pr-4 group-hover:text-teal-600 transition-colors">{q}</span>
        <span className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={18} />
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-4">
            <div className="h-px bg-gray-100 mb-4" />
            <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegistrationForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) e.phone = "Enter a valid phone number";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8 px-2">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${TEAL}20` }}>
          <CheckCircle2 size={32} style={{ color: TEAL }} />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">You're registered!</h3>
        <p className="text-sm text-gray-500">We've received your details. Our team will reach out to you shortly with payment and session links.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="reg-name">Full Name</label>
        <input
          id="reg-name"
          type="text"
          data-testid="input-name"
          placeholder="Enter your full name"
          value={form.name}
          onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(ev => ({ ...ev, name: "" })); }}
          className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all"
          style={{
            borderColor: errors.name ? "#EF4444" : "#e5e7eb",
            boxShadow: errors.name ? "" : undefined,
          }}
        />
        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="reg-email">Email Address</label>
        <input
          id="reg-email"
          type="email"
          data-testid="input-email"
          placeholder="you@example.com"
          value={form.email}
          onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(ev => ({ ...ev, email: "" })); }}
          className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all"
          style={{ borderColor: errors.email ? "#EF4444" : "#e5e7eb" }}
        />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="reg-phone">Phone Number</label>
        <input
          id="reg-phone"
          type="tel"
          data-testid="input-phone"
          placeholder="+91 98765 43210"
          value={form.phone}
          onChange={e => { setForm(f => ({ ...f, phone: e.target.value })); setErrors(ev => ({ ...ev, phone: "" })); }}
          className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all"
          style={{ borderColor: errors.phone ? "#EF4444" : "#e5e7eb" }}
        />
        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
      </div>
      <button
        type="submit"
        data-testid="button-submit-registration"
        className="w-full py-3 rounded-xl text-white text-sm font-bold transition-all hover:opacity-90 active:scale-95"
        style={{ backgroundColor: ORANGE }}
      >
        Enroll Now
      </button>
      <p className="text-xs text-center text-gray-400">No payment collected yet. We'll contact you with details.</p>
    </form>
  );
}

export default function WorkshopPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (i: number) => {
    setOpenFaq(prev => (prev === i ? null : i));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f4f7f9" }}>
      <Navbar />



      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* LEFT COLUMN — main content */}
          <div className="flex-1 min-w-0 space-y-6">

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{ backgroundColor: TEAL }}>AI & Robotics</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium text-white bg-blue-500">Online</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{ backgroundColor: ORANGE }}>Summer Workshop</span>
            </div>

            {/* Hero Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                AI &amp; Robotics Summer Workshop
              </h1>
            </div>

            {/* Hero Banner */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl group"
              style={{ minHeight: "360px" }}
              data-testid="hero-banner"
            >
              {/* Background Image */}
              <img
                src="/ai.jpg"
                alt="AI Robotics Workshop"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay for Text Readability */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
                }}
              />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center px-8 py-14 md:pr-48">
                <div className="flex items-center gap-3 font-bold text-white/90 mb-4 tracking-wider uppercase text-sm">
                  <span className="w-10 h-1 bg-teal-400 rounded-full"></span>
                  Online Summer Program
                </div>

                <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
                  AI &amp; Robotics <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">Workshop</span>
                </h2>

                <p className="mt-5 text-white/90 text-base sm:text-lg font-medium max-w-lg leading-relaxed drop-shadow">
                  Build smart robots, learn AI fundamentals, and launch your tech journey — all from home this summer.
                </p>


              </div>
            </div>

            {/* Info chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" data-testid="workshop-details">
              <DetailChip icon={<Users size={16} />} value="8 – 14 Years" label="Age Group" />
              <DetailChip icon={<Clock size={16} />} value="4 Weeks" label="Duration" />
              <DetailChip icon={<Monitor size={16} />} value="Online" label="Mode" />
              <DetailChip icon={<CreditCard size={16} />} value="₹2,999" label="Fee" />
              <DetailChip icon={<Calendar size={16} />} value="15 July 2026" label="Start Date" />
            </div>

            {/* What You'll Learn */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm" data-testid="section-learning">
              <SectionHeader>What You'll Learn</SectionHeader>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                This 4-week online workshop blends AI fundamentals with hands-on robotics coding. Kids will finish with a real working project and the confidence to explore STEM further.
              </p>
              <ul className="space-y-3">
                {LEARNING_OUTCOMES.map((point, i) => (
                  <li key={i} className="flex gap-3 items-start" data-testid={`outcome-item-${i}`}>
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: `${TEAL}20`, color: TEAL }}
                    >
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Topics */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <SectionHeader>Topics</SectionHeader>
              <div className="flex flex-wrap gap-2">
                {["#ai", "#robotics", "#python", "#machinelearning", "#stem", "#coding", "#kids", "#summer2026"].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors hover:bg-teal-50 cursor-pointer"
                    style={{ borderColor: `${TEAL}40`, color: TEAL, backgroundColor: `${TEAL}08` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>



            {/* FAQ */}
            <div id="faq" data-testid="section-faq">
              <SectionHeader>Frequently Asked Questions</SectionHeader>
              <div className="space-y-3">
                {FAQS.map((faq, i) => (
                  <FAQItem
                    key={i}
                    q={faq.q}
                    a={faq.a}
                    isOpen={openFaq === i}
                    onToggle={() => toggleFaq(i)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — sidebar */}
          <div className="w-full lg:w-[360px] flex-shrink-0">
            <div className="space-y-6 lg:sticky lg:top-24 pb-8">

              {/* Secure Registration Card */}
              <div id="register" className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden" data-testid="section-registration">
                <div className="relative border-b border-gray-100 overflow-hidden bg-gradient-to-br from-teal-50 to-blue-50 px-6 py-6 text-center">
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>

                  <div className="relative z-10">
                    <p className="text-4xl font-extrabold text-gray-900 tracking-tight">₹2,999</p>
                    <p className="mt-1 text-sm font-semibold text-teal-700">One-time enrollment fee</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-5 text-center">
                    <h2 className="text-xl font-extrabold text-gray-900">Secure Your Spot</h2>
                    <p className="text-xs text-gray-500 mt-1">Fill details below. No upfront payment required.</p>
                  </div>
                  <RegistrationForm />
                </div>
              </div>

              {/* Organizer card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-gray-900 text-sm">Workshop Organizer</h3>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ backgroundColor: TEAL }}>
                    KR
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Kidrove Education</p>
                    <p className="text-xs text-gray-500">workshops@kidrove.com</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">Specializing in STEM and technology workshops for children aged 5–18.</p>
                <a
                  href="mailto:workshops@kidrove.com"
                  data-testid="button-contact-organizer"
                  className="mt-3 w-full py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 block text-center"
                  style={{ backgroundColor: TEAL }}
                >
                  Contact
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <KidroveLogo />
          <p className="text-xs text-gray-400 text-center sm:text-right">
            © 2026 Kidrove. Empowering kids through learning and exploration.
          </p>
        </div>
      </footer>
    </div>
  );
}
