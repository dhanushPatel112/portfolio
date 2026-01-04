"use client";
import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      form.reset();
    } else {
      setStatus("Failed to send. Try again later.");
    }
  }

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Get in touch</h2>
        <p className="text-center text-slate-700 mb-6">
          Interested in working together or have a question? Send me a message or download my resume.
        </p>

        <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <label className="flex flex-col">
              <span className="text-sm text-slate-700">Name</span>
              <input className="mt-1 p-2 border rounded-md" type="text" name="name" required />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-slate-700">Email</span>
              <input className="mt-1 p-2 border rounded-md" type="email" name="email" required />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-slate-700">Message</span>
              <textarea className="mt-1 p-2 border rounded-md" name="message" rows={4} required />
            </label>

            <div className="flex items-center gap-3 mt-1">
              <button type="submit" className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">
                Send message
              </button>
              <a
                className="inline-flex items-center text-sm text-slate-700 hover:underline"
                href="/resume/Dhanush's Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download resume
              </a>
            </div>
          </form>
          {status && <p className="mt-3 text-sm text-slate-700">{status}</p>}
        </div>
      </div>
    </section>
  );
}
