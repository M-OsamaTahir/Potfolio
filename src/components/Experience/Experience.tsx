import React, { useState } from 'react';
import { ExperienceCard } from './ExperienceCard';
import { CVTemplate } from '../CV/CVTemplate';
import { FileDown, BriefcaseIcon } from 'lucide-react';

export function Experience() {
  const [showCV, setShowCV] = useState(false);
  
  const experience = {
    title: 'Data Scientist',
    company: 'Data Dot',
    location: 'Chicago, USA',
    period: 'Feb 2024 - Present',
    description: [
      "Conducted data analysis and predictive modeling, extracting actionable insights from large datasets, while applying Principal Component Analysis (PCA) to retain 95% of variance and reduce computational costs by 20%.",
      "Assisted in developing and deploying machine learning models and NLP solutions, enhancing AI capabilities for language-based applications, and implemented secure, scalable data pipelines in cloud environments (AWS, Azure, GCP).",
      "Developed a Meeting Minutes Assistant on Google Cloud Platform (GCP) utilizing OpenAI's GPT model to automatically generate meeting summaries and provide insightful, chatbot-based interactions for users."
    ]
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-teal-50 rounded-full mb-4">
            <BriefcaseIcon className="w-6 h-6 text-teal-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Professional Journey</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Over 7 years of experience transforming complex data challenges into actionable insights
          </p>
          
          <button
            onClick={() => setShowCV(!showCV)}
            className="inline-flex items-center px-6 py-3 mt-8 border border-transparent text-base font-medium rounded-full text-white bg-teal-600 hover:bg-teal-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            <FileDown className="w-5 h-5 mr-2" />
            {showCV ? 'Hide CV' : 'View CV'}
          </button>
        </div>

        {showCV ? (
          <div className="mb-16">
            <CVTemplate />
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <ExperienceCard {...experience} />
          </div>
        )}
      </div>
    </section>
  );
}