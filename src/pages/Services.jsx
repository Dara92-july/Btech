import React from "react";
import { Briefcase, Building2, Hammer, Ruler, ClipboardList, Settings } from "lucide-react";

const services = [
  { name: "Commercial Buildings", icon: Building2 },
  { name: "Residential Developments", icon: Building2 },
  { name: "Highway Construction", icon: Hammer },
  { name: "Bridge Engineering", icon: Ruler },
  { name: "Road Maintenance & Repair", icon: Hammer },
  { name: "Infrastructure Development", icon: ClipboardList },
  { name: "Consultancy", icon: Briefcase },
  { name: "Project Management", icon: ClipboardList },
  { name: "Cost/Quality Control", icon: Settings },
  { name: "Structural Designs", icon: Ruler },
  { name: "Design & Build", icon: Hammer },
];

const Services = () => {
  return (
    <section id="services-section" className="container mx-auto py-20 px-6">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600">
          At <span className="font-semibold">BTECH Heritage Associates</span>, we
          provide a wide range of engineering, construction, and consultancy services 
          tailored to meet the highest industry standards. Our expertise ensures 
          quality delivery on every project.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-sm rounded-xl p-8 text-center hover:shadow-lg hover:border-yellow-600 transition"
            >
              <div className="flex justify-center mb-4">
                <Icon className="w-12 h-12 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We deliver reliable solutions in <span className="font-medium">{service.name}</span>,
                leveraging innovation, experience, and professional excellence.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
