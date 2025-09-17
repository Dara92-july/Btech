import React, { useState } from "react";

const projects = [
  {
    title: "Highway Construction",
    desc: "Major road development and expansion project.",
    img: "https://res.cloudinary.com/dzo14hk18/image/upload/v1757420643/men_at_work_mn9otg.jpg",
  },
  {
    title: "Commercial Complex",
    desc: "Design and construction of modern office spaces.",
    img: "https://res.cloudinary.com/dzo14hk18/image/upload/v1757420599/building_kc34wh.jpg",
  },
  {
    title: "Smart Housing",
    desc: "Eco-friendly housing units with smart technology.",
    img: "https://res.cloudinary.com/dzo14hk18/image/upload/v1757420801/building2_s6ozuy.jpg",
  },
  {
    title: "Industrial Park",
    desc: "Large-scale industrial facility construction.",
    img: "https://images.unsplash.com/photo-1581091215367-59ab9b6a113b?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Stadium Renovation",
    desc: "Renovation of sports stadium with modern facilities.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=60",
  },
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3); // show 3 initially

  const handleSeeMore = () => {
    setVisibleCount(projects.length); // show all
  };

  return (
    <section className="container mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Projects</h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, visibleCount).map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={project.img}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-yellow-600">
                {project.title}
              </h3>
              <p className="text-gray-700 mt-2">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {visibleCount < projects.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleSeeMore}
            className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
