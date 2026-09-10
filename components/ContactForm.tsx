"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

const fieldClass =
  "rounded-md border border-line bg-surface px-3.5 py-2.5 text-[0.95rem] text-ink placeholder:text-ink-soft/70 focus:outline-2 focus:outline-offset-1 focus:outline-accent";
const labelClass =
  "text-[0.78rem] uppercase tracking-[0.06em] text-ink-soft";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `Portfolio enquiry from ${name || "your site"}`;
    const body = `${message}\n\n—\n${name}\n${email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          className={fieldClass}
          type="text"
          required
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          className={fieldClass}
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          className={fieldClass}
          rows={4}
          required
          placeholder="Say hello, or share a role you're hiring for"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <button
        type="submit"
        data-track="contact-submit"
        className="rounded-full border border-accent bg-accent px-[18px] py-2.5 text-[0.88rem] font-semibold text-paper transition hover:-translate-y-px hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Send message
      </button>
      <p className="text-[0.76rem] text-ink-soft">
        Opens in your email app so you can review before sending.
      </p>
    </form>
  );
}
