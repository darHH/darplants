"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaInstagram } from "react-icons/fa"; // 

const ContactMe: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  // EmailJS Config
  const SERVICE_ID = "service_21lc63h";
  const TEMPLATE_ID = "template_7eib41h";
  const USER_ID = "Lo3I-kl1AvCHD4_9g";

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_email: email,
      message: message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setStatus("Message sent successfully!");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatus("Failed to send message.");
      });
  };

  return (
    <div className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400">
          Have questions about my plants? Want to adopt one? Send me a message!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col items-center">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full max-w-md p-3 rounded-md border border-gray-700 bg-gray-800 text-white outline-none focus:border-green-400 mb-4"
            required
          />

          {/* Message Input */}
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full max-w-md p-3 rounded-md border border-gray-700 bg-gray-800 text-white outline-none focus:border-green-400 mb-4"
            rows={4}
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition"
          >
            Send Message
          </button>

          {/* Status Message */}
          {status && <p className="mt-3 text-sm">{status}</p>}
        </form>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://instagram.com/darplants_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 text-2xl transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;