"use client";

import { Mail, Phone, MapPin, Clock, ArrowRightIcon } from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { createPortal } from "react-dom";
import ContactSuccessMessage from "./ContactSuccessMessage";

const contactInfo = [
  { icon: Mail, label: "Email", val: "garudaforge.tech@gmail.com" },
  {
    icon: Phone,
    label: "Phone",
    val: "+95 925 249 4454 / +95 979 355 8834",
  },
  { icon: MapPin, label: "Location", val: "Yangon | Myanmar" },
  {
    icon: Clock,
    label: "Business Hours",
    val: "Mon - Fri, 9:00 AM - 5:00 PM (UTC+6:30)",
  },
];

const TIME_TO_SHOW_MESSAGE = 6000;

export const ContactPage = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [disableForm, setDisableForm] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const fd = new FormData(form.current);
    // Honeypot: if this field is filled, likely a bot — abort
    if (fd.get("last_name")) return;

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "SERVICE_ID";
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "TEMPLATE_ID";
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "PUBLIC_KEY";

    setDisableForm(true);

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          form.current!.reset();

          setShowSuccessMessage(true);
          setTimeout(() => setShowSuccessMessage(false), TIME_TO_SHOW_MESSAGE);
        },
        (error) => {
          // keep it simple — show error message
          alert("Failed to send message. Please try again later.");

          console.error("EmailJS error:", error);
        },
      )
      .finally(() => {
        setDisableForm(false);
      });
  };

  return (
    <div className="relative bg-brand-dark/50 text-white">
      {showSuccessMessage &&
        createPortal(
          <ContactSuccessMessage visibleStatus={showSuccessMessage} />,
          window.document.body,
        )}
      <section className="bg-white text-gray-900 py-20 px-6">
        <div className="max-w-300 mx-auto grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">We&apos;re Here to Help</h2>
            <p className="text-gray-500">
              Fill out the form and our team will get back to you as soon as
              possible.
            </p>
            {contactInfo.map((item, i) => (
              <div key={i} className="flex gap-4">
                <item.icon className="text-[#625FFC]" />
                <div>
                  <p className="font-bold text-sm">{item.label}</p>
                  <p className="text-gray-500 text-sm">{item.val}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="md:col-span-2 bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Name & Email (Grid) */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="from_name"
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full p-4 rounded-xl border border-gray-200"
                    required
                  />
                </div>

                {/* Honeypot field - keep hidden from users */}
                <input
                  type="text"
                  name="last_name"
                  style={{ display: "none" }}
                  autoComplete="off"
                  tabIndex={-1}
                />

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="reply_to"
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full p-4 rounded-xl border border-gray-200"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-semibold text-gray-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is this regrading?"
                  className="w-full p-4 rounded-xl border border-gray-200"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or idea..."
                  className="w-full p-4 rounded-xl border border-gray-200 h-32"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={disableForm}
                className="bg-[#625FFC] text-white px-8 py-4 rounded-xl font-bold hover:cursor-pointer hover:bg-[#4a4dc8] transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Message <ArrowRightIcon />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
