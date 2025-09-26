import React, { useState } from "react";

const projects = [
  {
    title: "Heavy Engineering Construction",
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
    title: "Modern Building Construction",
    desc: "Ongoing development of state-of-the-art commercial and residential structures with modern designs.",
    img: "https://res.cloudinary.com/dzo14hk18/image/upload/v1758880752/constructions_tqhkl2.jpg",
  },
  {
    title: "Tech Infrastructure at Work",
    desc: "Installation and maintenance of advanced technology systems to support construction and business operations.",
    img: "https://res.cloudinary.com/dzo14hk18/image/upload/v1758880727/btechatwork_p6inqd.jpg",
  },
  {
    title: "Excavation and Machinery Work",
    desc: "Use of heavy machinery for digging, earthworks, and site preparation.",
    img: "https://res.cloudinary.com/dzo14hk18/image/upload/v1758887696/machine_tdjp3w.jpg",
  },
  {
    title: "Site Supervision",
    desc: "Project supervision and inspection to ensure standards and quality compliance.",
    img: "https://res.cloudinary.com/dzo14hk18/image/upload/v1758887668/ceo_hmqtjh.jpg",
  },
  {
    title: "Drainage System Construction",
    desc: "Development of underground and surface drainage to control water flow.",
    img: "https://res.cloudinary.com/dzo14hk18/image/upload/v1758887646/drainagework_x20uvj.jpg",
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
