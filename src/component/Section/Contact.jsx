import React from "react";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <section
      id="contact"
      className="border-y border-white/5 bg-white/[0.02] px-5 py-24 lg:px-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="GET IN TOUCH"
          title="Let's Connect."
          text="Open to new opportunities and exciting projects. Feel free to reach out."
        />

        <div className="mt-12">
          <div className="grid gap-4 sm:grid-cols-3">
            {/* Phone */}
            <a
              href="tel:+918148425373"
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <span className="text-2xl">📞</span>
              <span className="text-sm text-gray-400">Phone</span>
              <span className="text-sm font-medium text-white">
                +91 81484 25373
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:shanthia78@gmail.com"
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <span className="text-2xl">✉️</span>
              <span className="text-sm text-gray-400">Email</span>
              <span className="break-all text-sm font-medium text-white">
                shanthia78@gmail.com
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shanthi-arunachalam-b5a22b102/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <span className="text-2xl font-bold text-cyan-400">in</span>
              <span className="text-sm text-gray-400">LinkedIn</span>
              <span className="text-sm font-medium text-white">
                View Profile ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
