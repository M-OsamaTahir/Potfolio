import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export function ExperienceCard({ title, company, location, period, description }: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mb-2">
            {company}
          </span>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-3">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-teal-600" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-teal-600" />
              <span>{period}</span>
            </div>
          </div>
        </div>

        <ul className="space-y-2 text-gray-600 list-none">
          {description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-2 h-2 bg-teal-400 rounded-full mt-2 mr-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}