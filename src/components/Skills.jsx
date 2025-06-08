import React from 'react';
import InfiniteScroll from './InfiniteScroll';

const skills = [
  "Artificial Intelligence (AI)",
  "AI Agent Design",
  "Big Data",
  "Cloud Computing",
  "Computer Vision",
  "Data Analysis",
  "Data Management",
  "Data Visualization",
  "Deep Learning",
  "Easily Adaptable",
  "Ethical Judgment & Responsibility",
  "Image Processing",
  "Machine Learning",
  "Problem Solving",
  "Prompt Engineering",
  "Real-Time Systems & API",
  "Teamwork",
  "Python & Automation"
];

const items = skills.map((skill, index) => ({
  content: (
    <div className="text-xl font-medium text-gray-800 dark:text-gray-100 px-6 py-4">
      {index + 1}. {skill}
    </div>
  ),
}));

const Skills = () => (
  <section className="py-20 ">
    <div className="text-xl font-medium text-white px-6 py-4">
      <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">Skills</h3>
    </div>
    <div style={{ height: '500px', position: 'relative' }}>
      <InfiniteScroll
        items={items}
        isTilted={true}
        tiltDirection="left"
        autoplay={true}
        autoplaySpeed={1.2}
        autoplayDirection="up"
        pauseOnHover={true}
      />
    </div>
  </section>
);

export default Skills;
