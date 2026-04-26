'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ToastType = 'success' | 'error' | null;

export default function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast]   = useState<{ type: ToastType; msg: string }>({ type: null, msg: '' });
  const formRef = useRef<HTMLFormElement>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!fields.name.trim() || fields.name.trim().length < 2)
      e.name = 'Name must be at least 2 characters.';
    if (!fields.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      e.email = 'Please enter a valid email address.';
    if (!fields.message.trim() || fields.message.trim().length < 10)
      e.message = 'Message must be at least 10 characters.';
    return e;
  };

  const showToast = (type: ToastType, msg: string) => {
    setToast({ type, msg });
    setTimeout(() => setToast({ type: null, msg: '' }), 4500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      // Shake invalid fields
      Object.keys(errs).forEach(k => {
        const el = document.getElementById(`field-${k}`);
        el?.classList.add('shake');
        setTimeout(() => el?.classList.remove('shake'), 500);
      });
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      
      const data = await res.json();
      
      if (res.ok && data.success) {
        showToast('success', '✓ Message sent! We\'ll reply within 24h.');
        setFields({ name: '', email: '', message: '' });
      } else {
        showToast('error', data.error || 'Something went wrong. Try again.');
      }
    } catch (error) {
      console.error('Form Submission Error:', error);
      showToast('error', 'Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fieldClass = (key: keyof typeof fields) =>
    `form-input ${errors[key] ? 'error' : fields[key] ? 'success' : ''}`;

  return (
    <>
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto w-full max-w-xl space-y-5"
        noValidate
      >
        {/* Name */}
        <div id="field-name" className="form-field">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            Your Name
          </label>
          <input
            type="text"
            className={fieldClass('name')}
            placeholder="Alex Johnson"
            value={fields.name}
            onChange={e => setFields(p => ({ ...p, name: e.target.value }))}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
        </div>

        {/* Email */}
        <div id="field-email" className="form-field">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            Email Address
          </label>
          <input
            type="email"
            className={fieldClass('email')}
            placeholder="hello@company.com"
            value={fields.email}
            onChange={e => setFields(p => ({ ...p, email: e.target.value }))}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
        </div>

        {/* Message */}
        <div id="field-message" className="form-field">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            Message
          </label>
          <textarea
            rows={5}
            className={`${fieldClass('message')} resize-none`}
            placeholder="Tell us about your project..."
            value={fields.message}
            onChange={e => setFields(p => ({ ...p, message: e.target.value }))}
          />
          {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="group relative w-full overflow-hidden rounded-full bg-neon-blue py-4 text-sm font-bold text-ink transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(93,178,255,0.45)] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {loading ? (
              <>
                <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                Sending…
              </>
            ) : (
              <>
                Send Message
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </>
            )}
          </span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </button>

        <p className="text-center text-xs text-white/20">
          We reply within 24 hours · mernstackstudio.pk@gmail.com
        </p>
      </motion.form>

      {/* Toast */}
      <AnimatePresence>
        {toast.type && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`toast ${toast.type}`}
          >
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
