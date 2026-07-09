'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'General Enquiry',
    message: '',
  });

  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    // Simulate API request to Resend / endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: 'General Enquiry',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status === 'error') setStatus('idle');
  };

  return (
    <div className="bg-card border-border space-y-6 rounded-2xl border p-6 shadow-sm sm:p-8">
      <h3 className="font-heading border-accent border-l-2 pl-4 text-lg font-bold tracking-wider text-[#0F2747] uppercase sm:text-xl dark:text-white">
        Send An Inquiry
      </h3>

      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-success/5 border-success/20 space-y-4 rounded-xl border p-6 text-center"
        >
          <div className="flex justify-center">
            <CheckCircle2 className="text-success size-12" />
          </div>
          <div className="space-y-2">
            <h4 className="font-heading text-foreground text-lg font-bold">
              Inquiry Submitted Successfully
            </h4>
            <p className="text-muted-foreground mx-auto max-w-sm text-xs sm:text-sm">
              Thank you for reaching out. Our engineering department will review your details and
              contact you shortly.
            </p>
          </div>
          <button
            onClick={() => setStatus('idle')}
            className="bg-accent hover:bg-accent/80 rounded-lg px-6 py-2 text-xs font-bold tracking-widest text-white uppercase transition-colors"
          >
            Send Another message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase"
            >
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className="bg-background/50 border-border text-foreground placeholder-muted-foreground/50 focus:border-accent focus:ring-accent w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:ring-1 focus:outline-none"
            />
          </div>

          {/* Email & Phone Split */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john@company.com"
                className="bg-background/50 border-border text-foreground placeholder-muted-foreground/50 focus:border-accent focus:ring-accent w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:ring-1 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className="bg-background/50 border-border text-foreground placeholder-muted-foreground/50 focus:border-accent focus:ring-accent w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:ring-1 focus:outline-none"
              />
            </div>
          </div>

          {/* Service Dropdown */}
          <div className="space-y-2">
            <label
              htmlFor="serviceType"
              className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase"
            >
              Requirement Specialty
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="bg-background border-border text-foreground focus:border-accent focus:ring-accent w-full cursor-pointer rounded-xl border px-4 py-3 text-sm transition-colors focus:ring-1 focus:outline-none"
            >
              <option value="General Enquiry" className="bg-card text-foreground">
                General Enquiry
              </option>
              <option value="Electrical Engineering" className="bg-card text-foreground">
                Electrical Engineering
              </option>
              <option value="HVAC Systems" className="bg-card text-foreground">
                HVAC & Climate Control
              </option>
              <option value="Plumbing & PHE" className="bg-card text-foreground">
                Plumbing & Public Health Engineering
              </option>
              <option value="Fire Fighting Solutions" className="bg-card text-foreground">
                Fire Fighting & Life Safety
              </option>
              <option value="ELV Networks" className="bg-card text-foreground">
                ELV & CCTV Automation
              </option>
              <option value="Turnkey Interior Fitouts" className="bg-card text-foreground">
                Turnkey Interior Fitouts
              </option>
            </select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase"
            >
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your project size, timelines, and utility specifications..."
              className="bg-background/50 border-border text-foreground placeholder-muted-foreground/50 focus:border-accent focus:ring-accent w-full resize-none rounded-xl border px-4 py-3 text-sm transition-colors focus:ring-1 focus:outline-none"
            />
          </div>

          {status === 'error' && (
            <div className="text-danger flex items-center gap-2 text-xs font-semibold">
              <AlertCircle className="size-4 shrink-0" />
              <span>Please fill in all required fields marked with *</span>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            style={{ height: '48px', letterSpacing: '0.5px' }}
            className="group relative inline-flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[12px] bg-[#D4A63A] px-6 font-bold text-[#0F2747] transition-all duration-300 select-none hover:-translate-y-0.5 hover:bg-[#c3962d] hover:shadow-[0_10px_25px_rgba(212,166,58,0.25)] focus-visible:ring-2 focus-visible:ring-[#D4A63A] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            {status === 'submitting' ? (
              <div className="flex items-center gap-2 text-[#0F2747]">
                <svg
                  className="mr-2 -ml-1 h-4 w-4 animate-spin text-[#0F2747]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span className="text-xs font-bold tracking-[0.5px] uppercase">Sending...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-[#0F2747]">
                <span className="text-xs font-bold tracking-[0.5px] uppercase">SEND INQUIRY</span>
                <span className="text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
