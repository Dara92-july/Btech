import React from "react";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="container mx-auto py-20 px-6">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get in touch with us
          </h2>
          <p className="text-gray-600 mb-8">
            When you hire us for construction services, you know you’re getting
            highly qualified professionals who have the expertise and experience
            to make sure your project is done properly and functions.
          </p>

          <div className="flex items-start space-x-4">
            <Mail className="text-red-600 w-8 h-8" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-600">btechheritageassociates@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="bg-white shadow-md rounded-lg p-8">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-md w-full transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
