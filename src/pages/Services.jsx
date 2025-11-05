import React from "react";
import { Briefcase, Building2, Hammer, Ruler, ClipboardList, Settings } from "lucide-react";

const services = [
  { name: "Commercial and Residential Developments", icon: Building2 },
  { name: "Highway ,Bridge Engineering, Infrastructure Development ", icon: Ruler },
  { name: "Consultancy", icon: Briefcase },
  { name: "Project Manager", icon: ClipboardList },
  { name: "Cost/Quality Control", icon: Settings },
  { name: "Design & Build", icon: Hammer },
];

const Services = () => {
  return (
    <section id="services-section" className="container px-6 py-20 mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="mb-4 text-4xl font-bold text-gray-800">Our Services</h2>
        <p className="text-gray-600">
          At <span className="font-semibold">BTECH Heritage Associates</span>, we
          provide a wide range of engineering, construction, and consultancy services 
          tailored to meet the highest industry standards. Our expertise ensures 
          quality delivery on every project.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="p-8 text-center transition bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-lg hover:border-yellow-600"
            >
              <div className="flex justify-center mb-4">
                <Icon className="w-12 h-12 text-yellow-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                {service.name}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
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
