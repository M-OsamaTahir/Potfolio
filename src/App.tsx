import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { Experience } from './components/Experience/Experience';
import { Contact } from './components/Contact';
import { projects } from './data/projects';
import Navbar from './components/navbar';
import About from './components/about';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />

      <Experience />

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore my latest data science and machine learning projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <Contact />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
