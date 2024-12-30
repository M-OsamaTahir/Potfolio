import React from 'react';
import { FileDown } from 'lucide-react';
import { downloadCV } from '../../utils/downloadCV';

export function DownloadButton() {
  return (
    <button
      onClick={downloadCV}
      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-teal-600 bg-teal-50 hover:bg-teal-100 transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <FileDown className="w-5 h-5 mr-2" />
      Download CV
    </button>
  );
}