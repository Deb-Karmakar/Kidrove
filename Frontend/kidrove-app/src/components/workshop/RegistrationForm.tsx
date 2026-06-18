import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { TEAL, ORANGE } from "@/lib/constants";

export default function RegistrationForm() {
    const [form, setForm] = useState({ name: "", email: "", phone: "" });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);

    const [serverError, setServerError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const validate = () => {
        const e: Record<string, string> = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!form.email.trim()) e.email = "Email is required";
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) e.email = "Enter a valid email";
        if (!form.phone.trim()) e.phone = "Phone number is required";
        else if (!/^[6789]\d{9}$/.test(form.phone)) e.phone = "Enter a valid 10-digit Indian phone number";
        return e;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setServerError("");
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }

        setSubmitting(true);
        try {
            const response = await fetch("http://localhost:5000/api/enquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to submit enquiry");
            }

            setSubmitted(true);
        } catch (err: any) {
            setServerError(err.message || "An unexpected error occurred. Please try again.");
        } finally {
            setSubmitting(false);
        }
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
            {serverError && (
                <div className="p-3 text-sm text-red-700 bg-red-50 rounded-lg border border-red-200">
                    {serverError}
                </div>
            )}
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
                    maxLength={10}
                    data-testid="input-phone"
                    placeholder="9876543210"
                    value={form.phone}
                    onChange={e => {
                        const numericValue = e.target.value.replace(/\D/g, '');
                        setForm(f => ({ ...f, phone: numericValue }));
                        setErrors(ev => ({ ...ev, phone: "" }));
                    }}
                    className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: errors.phone ? "#EF4444" : "#e5e7eb" }}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>
            <button
                type="submit"
                disabled={submitting}
                data-testid="button-submit-registration"
                className="w-full py-3 rounded-xl text-white text-sm font-bold transition-all hover:opacity-90 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ backgroundColor: ORANGE }}
            >
                {submitting ? "Enrolling..." : "Enroll Now"}
            </button>
        </form>
    );
}
