import React from "react";

const About = () => {
  return (
    <section className="container mx-auto py-20 px-6">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        About Us
      </h2>

      {/* Intro + Image */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <span className="font-semibold">Btech Heritage</span> is a consortium of certified
            experts in the construction industry, with vast experience handling
            projects of all sizes — from large-scale infrastructure to private
            developments. We pride ourselves on being{" "}
            <span className="font-semibold">Modern, Professional, and Affordable</span>,
            providing innovative solutions that stand the test of time.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our team of engineers, architects, and project managers work
            seamlessly to bring every client’s vision to life while ensuring
            safety, durability, and cost-effectiveness.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <img
            src="https://res.cloudinary.com/dzo14hk18/image/upload/v1757420541/construction_r3zpvk.jpg"
            alt="Btech Heritage Team at Work"
            className="rounded-lg shadow-lg object-cover w-full h-[400px]"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            At Btech Heritage Associates, our mission is to deliver exceptional building and road construction projects that exceed client expectations, prioritizing quality, safety, and timely completion. We strive to build lasting relationships with our clients, partners, and communities, while fostering a culture of innovation, integrity, and sustainability. Through our expertise and dedication, we aim to create structures that stand the test of time and contribute to the growth and development of our society
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
           At Btech Heritage Associates, our vision is to be a leading construction company, renowned for our excellence in building and road construction, and our commitment to delivering sustainable, innovative, and client-centric solutions that shape the future of our communities. We envision a future where our structures not only stand the test of time but also contribute to the well-being and prosperity of society, while setting new benchmarks for quality, safety, and environmental responsibility in the construction industry.
          </p>
        </div>
      </div>

      {/* Profile & History */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Profile & History</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Founded on the principles of excellence and reliability, Btech Heritage
          has successfully executed numerous residential, commercial, and
          industrial projects nationwide. Our legacy is built on trust,
          craftsmanship, and a commitment to continuous improvement.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With a dedicated team and state-of-the-art equipment, we ensure
          every project is completed on schedule, within budget, and to the
          highest quality standards.
        </p>
      </div>

      {/* Core Values */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Core Values</h3>
        <ul className="grid md:grid-cols-2 gap-6 list-disc list-inside text-gray-700 text-lg">
          <li>Professionalism & Integrity</li>
          <li>Innovation & Excellence</li>
          <li>Client-Centered Solutions</li>
          <li>Safety & Sustainability</li>
          <li>Teamwork & Collaboration</li>
          <li>On-Time Project Delivery</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
