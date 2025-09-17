import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react"; // ✅ icon

// --- Hero Slides ---
const slides = [
  {
    image: "https://res.cloudinary.com/dzo14hk18/image/upload/v1757420801/building2_s6ozuy.jpg", 
    title: "Building Excellence",
    description: "Delivering top-notch construction and engineering solutions.",
  },
  {
    image: "https://res.cloudinary.com/dzo14hk18/image/upload/v1757420738/building_in_progress_u23qgk.jpg",
    title: "Trusted Engineering",
    description: "Quality you can rely on for every project.",
  },
  {
    image: "https://res.cloudinary.com/dzo14hk18/image/upload/v1757420835/building3_f5heuy.jpg",
    title: "Project Management",
    description: "Efficient planning and execution from start to finish.",
  },
];


// --- Why Choose Us ---
const reasons = [
  "Certified Professional Team",
  "State-of-the-Art Equipment",
  "On-Time Project Completion",
  "Competitive Pricing",
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Auto change every 5s
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {slides[current].title}
          </h1>
          <p className="text-lg md:text-2xl mb-6 max-w-2xl">
            {slides[current].description}
          </p>

          {/* CTA Buttons */}
          <div className="space-x-4">
            <Link
              to="/services"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We go beyond construction — we deliver trust, quality, and efficiency in every project.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition"
              >
                <CheckCircle className="text-yellow-500 w-8 h-8 mr-4 flex-shrink-0" />
                <p className="text-lg text-gray-700 font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
