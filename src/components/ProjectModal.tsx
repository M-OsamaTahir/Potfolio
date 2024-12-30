import React from 'react';
import { X } from 'lucide-react';

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    problem: string;
    approach: string;
    results: string;
    image: string;
    githubUrl: string;
  };
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="absolute right-0 top-0 pr-4 pt-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 className="text-2xl leading-6 font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Problem Statement</h4>
                    <p className="text-gray-600">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Approach</h4>
                    <p className="text-gray-600">{project.approach}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Results</h4>
                    <p className="text-gray-600">{project.results}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}