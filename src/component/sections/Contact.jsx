import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";

function Contact() {
  const [fromData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const SERVICE_ID = "";
  const TEMPLATE_ID = "";
  const PUBLIC_KEY = "";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm( import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Somthing want wrong.Please try again"));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="mane"
                required
                value={fromData.name}
                className="w-full h-10 bg-white/5 border border-white/9 rounded px-3 py-5 text-white transition focus:outline-none focus:border-blue-400 focus:bg-blue-500/2"
                placeholder="Name...."
                onChange={(e) =>
                  setFormData({ ...fromData, name: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={fromData.email}
                className="w-full h-10 bg-white/5 border border-white/9 rounded px-3 py-5 text-white transition focus:outline-none focus:border-blue-400 focus:bg-blue-500/2"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...fromData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={fromData.message}
                className="w-full bg-white/5 border border-white/9 rounded px-3 py-5 text-white transition focus:outline-none focus:border-blue-400 focus:bg-blue-500/2"
                placeholder="Your Message"
                onChange={(e) =>
                  setFormData({ ...fromData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-md font-medium transition relative overflow-hidden cursor-pointer hover:-translate-y-0.5"
            >
              Sent message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Contact;
