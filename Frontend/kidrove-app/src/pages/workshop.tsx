import { useState } from "react";
import { Calendar, Monitor, Users, CreditCard, Clock, CheckCircle2 } from "lucide-react";
import Navbar, { KidroveLogo } from "@/components/layout/Navbar";
import SectionHeader from "@/components/workshop/SectionHeader";
import DetailChip from "@/components/workshop/DetailChip";
import FAQItem from "@/components/workshop/FAQItem";
import RegistrationForm from "@/components/workshop/RegistrationForm";
import { TEAL, ORANGE, LEARNING_OUTCOMES, FAQS } from "@/lib/constants";


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
