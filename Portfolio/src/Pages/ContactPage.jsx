import React from "react";
import mail from "../assets/mail.png";
import keyboard from "../assets/keyboard.png";
import contact from "../assets/contact.png";

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-900 text-white min-h-screen p-20 relative">
     
      <div className="md:w-1/2 space-y-8">
        <h1 className="text-7xl font-bold">
          Got a project in <span className="text-teal-400">mind?</span>
        </h1>
        <div className="w-80 h-96 rounded-lg flex items-center justify-center mx-auto">
          <img src={contact} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2 p-12 rounded-lg shadow-lg w-full max-w-2xl relative">
        {/* Keyboard Image Above Form */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-16">
          <img src={keyboard} alt="Keyboard" className="w-full h-full object-contain" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div>
            <label className="block text-lg mb-2">Your name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 rounded bg-gray-700 text-white border-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div>
            <label className="block text-lg mb-2">Your email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded bg-gray-700 text-white border-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-lg mb-2">Your Message</label>
          <textarea
            placeholder="Message"
            className="w-full p-4 h-40 rounded bg-gray-700 text-white border-none focus:ring-2 focus:ring-teal-400"
          ></textarea>
        </div>
        <button className="mt-6 w-72 bg-teal-500 p-4 rounded-lg text-white font-bold flex items-center justify-center gap-3 hover:bg-teal-600 relative">
          Send Message
          <span className="text-xl">✈️</span>
          <div className="absolute right-[-50px] bottom-0 w-12 h-12">
            <img src={mail} alt="Mail" className="w-full h-full object-contain" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
