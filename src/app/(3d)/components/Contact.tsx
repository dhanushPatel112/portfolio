"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        toast.success("Message sent — I'll get back to you soon.");
        reset();
      } else {
        const data = await res.json().catch(() => null);
        toast.error(data?.message ?? "Something went wrong. Try again later.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="contact-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                data-cursor="disable"
                aria-invalid={!!errors.name}
                {...register("name")}
              />
              {errors.name && <span className="contact-error">{errors.name.message}</span>}
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                data-cursor="disable"
                aria-invalid={!!errors.email}
                {...register("email")}
              />
              {errors.email && <span className="contact-error">{errors.email.message}</span>}
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="What would you like to build?"
                data-cursor="disable"
                aria-invalid={!!errors.message}
                {...register("message")}
              />
              {errors.message && (
                <span className="contact-error">{errors.message.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="contact-submit"
              data-cursor="disable"
              disabled={submitting}
            >
              {submitting ? "Sending…" : "Send message"}
            </button>
          </form>

          <div className="contact-side">
            <div className="contact-box">
              <h4>Email</h4>
              <p>
                <a href="mailto:pateldhanush1208@gmail.com" data-cursor="disable">
                  pateldhanush1208@gmail.com
                </a>
              </p>
              <h4>Education</h4>
              <p>BE in Computer Engineering</p>
            </div>
            <div className="contact-box">
              <h4>Social</h4>
              <a
                href="https://github.com/dhanushPatel112"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                Github <MdArrowOutward />
              </a>
              <a
                href="https://www.linkedin.com/in/dhanush-patel-2185291ab"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                Linkedin <MdArrowOutward />
              </a>
              <a
                href="https://leetcode.com/u/dev-d-patel"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                LeetCode <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>
        <h5 className="contact-copyright">
          <MdCopyright /> {new Date().getFullYear()} Dhanush Patel — All rights reserved
        </h5>
      </div>
    </div>
  );
};

export default Contact;
