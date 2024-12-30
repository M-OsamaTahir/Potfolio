// About.js
import { Briefcase, User } from 'lucide-react';

export function About() {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-gradient-to-r from-teal-500 to-teal-700 text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Introduction on the Left */}
        <div className="flex flex-col items-start">
          <h1 className="text-4xl sm:text-5xl font-bold text-teal-100 mb-4">
            Hi, I'm
          </h1>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-teal-200 mb-6">
            Muhammad Osama Tahir
          </h1>
          <p className="text-lg sm:text-xl font-medium italic leading-relaxed">
            A passionate Data Scientist dedicated to transforming data into
            actionable insights and solutions.
          </p>
        </div>

        {/* Professional Summary on the Right */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-200 mb-4">
            Professional Summary
          </h3>
          <p className="text-lg text-white leading-relaxed mb-4">
            I specialize in machine learning, statistical analysis, and
            data-driven decision-making. My work bridges the gap between complex
            datasets and meaningful business insights through predictive
            modeling and intuitive visualizations.
          </p>
          <p className="text-lg text-white leading-relaxed">
            With expertise in data analytics, Python, and visualization tools
            like Power BI, I apply data science principles across diverse
            industries such as healthcare, finance, and environmental science. I
            thrive on learning, experimenting, and uncovering innovative ways to
            harness the power of data.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
