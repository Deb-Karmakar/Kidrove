import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { TEAL, ORANGE } from "@/lib/constants";

export default function RegistrationForm() {
    const [form, setForm] = useState({ name: "", email: "", phone: "" });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);

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
