import React from 'react';
import SpotlightCard from './SpotlightCard';

const projects = [
  {
    title: 'Autonomous Trading Agent',
    description: 'AI-based trading bot leveraging real-time market vision data and predictive analytics.',
    link: '#',
  },
  {
    title: 'Vision-Based Alert System',
    description: 'OpenCV system to detect safety hazards in dynamic environments.',
    link: '#',
  },
];

const Projects = () => (
  <section className="py-20">
    <div className="max-w-6xl mx-auto px-4">
      <h3 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-10">Projects</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <SpotlightCard
  key={project.title}
  className="rounded-2xl bg-[#121212] border border-[#2a2a2a] p-6 shadow-lg"
 spotlightColor="rgba(0, 229, 255, 0.2)"
>
  <div className="flex flex-col items-start gap-4">
    {/* Optional: Icon */}
    <div className="text-white text-2xl">✨</div>

    {/* Title */}
    <h4 className="text-xl font-semibold text-white">{project.title}</h4>

    {/* Description */}
    <p className="text-gray-400 text-sm">{project.description}</p>

    {/* Button */}
    <a
      href={project.link}
      className="mt-2 inline-flex items-center justify-center px-5 py-2 rounded-lg bg-[#1f1f1f] text-white font-medium text-sm hover:bg-[#2a2a2a] transition"
    >
      Learn more
    </a>
  </div>
</SpotlightCard>

        ))}
      </div>
    </div>
  </section>
);

export default Projects;
