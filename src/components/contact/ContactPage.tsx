"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const ContactPage = () => {
  return (
    <div className="bg-brand-dark text-white">
      <section className="bg-white text-gray-900 py-20 px-6">
        <div className="max-w-300 mx-auto grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">We&apos;re Here to Help</h2>
            <p className="text-gray-500">
              Fill out the form and our team will get back to you as soon as
              possible.
            </p>
            {[
              { icon: Mail, label: "Email", val: "garudaforge.tech@gmail.com" },
              {
                icon: Phone,
                label: "Phone",
                val: "+95 925 249 4454 / +95 9 77777777",
              },
              { icon: MapPin, label: "Location", val: "Yangon | Myanmar" },
              {
                icon: Clock,
                label: "Business Hours",
                val: "Mon - Fri, 9:00 AM - 5:00 PM (UTC+6:30)",
              },
            ].map((item, i) => (
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
            <form className="space-y-6">
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
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full p-4 rounded-xl border border-gray-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full p-4 rounded-xl border border-gray-200"
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
                  placeholder="Tell us about your project or idea..."
                  className="w-full p-4 rounded-xl border border-gray-200 h-32"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="bg-[#625FFC] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#4a4dc8] transition flex items-center gap-2">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
