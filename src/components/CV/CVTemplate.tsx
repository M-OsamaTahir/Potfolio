

// import React, { useRef } from 'react';
// // import jsPDF from 'jspdf';
// // import html2canvas from 'html2canvas';
// import {
//   Mail,
//   Phone,
//   MapPin,
//   // Globe,
//   Github,
//   Linkedin,
//   Award,
//   GraduationCap,
//   Code,
//   Briefcase,
// } from 'lucide-react';
// import {
//   personalInfo,
//   skills,
//   education,
//   certifications,
//   experience,
// } from './cv-data';
// import pdf from "../pdf/Muhammad Osama Tahir_Resume.pdf"

// export function CVTemplate() {
//   const pdfRef = useRef<HTMLDivElement>(null);

//   // const exportToPDF = async () => {
//   //   const element = pdfRef.current;
//   //   if (!element) return;
  
//   //   // Use html2canvas to capture the element's content
//   //   const canvas = await html2canvas(element, { scale: 2 });
//   //   const imgData = canvas.toDataURL('image/png');
  
//   //   const pdf = new jsPDF('p', 'mm', 'a4');
//   //   const pdfWidth = pdf.internal.pageSize.getWidth();
//   //   const pdfHeight = pdf.internal.pageSize.getHeight();
  
//   //   // Calculate the height of the full content
//   //   const contentHeight = (canvas.height * pdfWidth) / canvas.width;
  
//   //   // Start by adding the first page with the content image
//   //   pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  
//   //   // If the content height exceeds one page, we will handle pagination
//   //   if (contentHeight > pdfHeight) {
//   //     let remainingHeight = contentHeight - pdfHeight;
//   //     let yOffset = -pdfHeight;
  
//   //     // Add additional pages if necessary
//   //     while (remainingHeight > 0) {
//   //       pdf.addPage();
//   //       pdf.addImage(imgData, 'PNG', 0, yOffset, pdfWidth, pdfHeight);
//   //       remainingHeight -= pdfHeight;
//   //       yOffset -= pdfHeight;  // Adjust the yOffset to shift content upwards
//   //     }
//   //   }
  
//     // Save the generated PDF
//   //   pdf.save('CV_Muhammad_Osama_Tahir.pdf');
//   // };

//   const exportToPDF = async () => {
//     const pdfPath = '../pdf/Muhammad Osama Tahir_Resume.pdf'; // Path relative to the public folder
//     window.open(pdfPath, '_blank'); // Open the file in a new tab
//   };
  
  

//   return (
//     <div>
//       {/* Download Button */}
//       <div className="flex justify-center mb-4">
//         <button
//           onClick={exportToPDF}
//           className="bg-teal-500 text-white px-2 py-1 rounded-md text-sm"
//         >
//           Download as PDF
//         </button>
//       </div>

//       {/* CV Template Content */}
//       <div
//         ref={pdfRef}
//         className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto"
//       >
//         {/* Header */}
//         <header className="border-b border-gray-200 pb-6 mb-6">
//           <div className="flex justify-between items-start">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">
//                 {personalInfo.name}
//               </h1>
//               <h2 className="text-xl text-teal-600 mt-1">{personalInfo.title}</h2>
//             </div>
//           </div>

//           <div className="mt-4 grid grid-cols-2 gap-4 text-gray-600">
//             <div className="flex items-center gap-2">
//               <Mail className="w-4 h-4" />
//               <span>{personalInfo.email}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Phone className="w-4 h-4" />
//               <span>{personalInfo.phone}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <MapPin className="w-4 h-4" />
//               <span>{personalInfo.location}</span>
//             </div>
//             {/* <div className="flex items-center gap-2">
//               <Globe className="w-4 h-4" />
//               <span>{personalInfo.website}</span>
//             </div> */}
//              <div className="mt-auto flex gap-4">
//             <a
//               href={personalInfo.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-gray-600 hover:text-teal-600"
//             >
//               <Github className="w-5 h-5" />
//               <span>GitHub</span>
//             </a>
//             <a
//               href={personalInfo.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-gray-600 hover:text-teal-600"
//             >
//               <Linkedin className="w-5 h-5" />
//               <span>LinkedIn</span>
//             </a>
//           </div>
//           </div>

         
//         </header>

//         {/* Summary */}
//         <section className="mb-8">
//           <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
//         </section>

//         {/* Experience */}
//         <section className="mb-8">
//           <div className="flex items-center gap-2 mb-4">
//             <Briefcase className="w-5 h-5 text-teal-600" />
//             <h2 className="text-xl font-bold text-gray-900">Experience</h2>
//           </div>
//           <div className="space-y-4">
//             {experience.map((job, index) => (
//               <div key={index} className="flex justify-between items-start">
//                 <div>
//                   <h3 className="font-semibold text-gray-900">{job.position}</h3>
//                   <p className="text-gray-600 text-justify">{job.company}</p>
//                   <p className="text-sm text-gray-500 text-justify">{job.period}</p>
//                   <ul className="mt-2 text-gray-600 list-disc pl-6 text-justify">
//                     {job.responsibilities.map((responsibility, i) => (
//                       <li key={i}>{responsibility}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Skills */}
//         <section className="mb-8">
//           <div className="flex items-center gap-2 mb-4">
//             <Code className="w-5 h-5 text-teal-600" />
//             <h2 className="text-xl font-bold text-gray-900">Technical Skills</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {Object.entries(skills).map(([category, items]) => (
//               <div key={category} className="bg-gray-50 rounded-lg p-4">
//                 <h3 className="font-semibold text-gray-900 mb-2">{category}</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {items.map((skill) => (
//                     <span
//                       key={skill}
//                       className="px-3 py-1 bg-white text-teal-600 rounded-full text-sm border border-teal-100"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Education */}
//         <section className="mb-8">
//           <div className="flex items-center gap-2 mb-4">
//             <GraduationCap className="w-5 h-5 text-teal-600" />
//             <h2 className="text-xl font-bold text-gray-900">Education</h2>
//           </div>
//           <div className="space-y-4">
//             {education.map((edu, index) => (
//               <div key={index} className="flex justify-between items-start">
//                 <div>
//                   <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
//                   <p className="text-gray-600">{edu.school}</p>
//                   <p className="text-gray-500">{edu.city}</p>
//                 </div>
//                 {/* <span className="text-sm text-gray-500">{edu.city}</span> */}
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Certifications */}
//         <section>
//           <div className="flex items-center gap-2 mb-4">
//             <Award className="w-5 h-5 text-teal-600" />
//             <h2 className="text-xl font-bold text-gray-900">Certifications</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {certifications.map((cert, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between items-start bg-gray-50 p-4 rounded-lg"
//               >
//                 <div>
//                   <h3 className="font-semibold text-gray-900">{cert.name}</h3>
//                   <p className="text-gray-600">{cert.issuer}</p>
//                 </div>
//                 <span className="text-sm text-teal-600 font-medium">
//                   {cert.year}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

import React, { useRef } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Award,
  GraduationCap,
  Code,
  Briefcase,
} from 'lucide-react';
import {
  personalInfo,
  skills,
  education,
  certifications,
  experience,
} from './cv-data';



export function CVTemplate() {
  const pdfRef = useRef<HTMLDivElement>(null);

  const openAndDownloadPDF = () => {
    // Path to the PDF file in the public folder
    const pdfPath = '/Muhammad Osama Tahir_Resume.pdf';

    // Open the file in a new tab
    window.open(pdfPath, '_blank');

    // Trigger the file download
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Muhammad Osama Tahir_Resume.pdf'; // Optional: You can customize the filename here
    document.body.appendChild(link);
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up
  };
  return (
     <div>
     {/* Download Button */}
     <div className="flex justify-center mb-4">
        <button
          onClick={openAndDownloadPDF}
          className="bg-teal-500 text-white px-2 py-1 rounded-md text-sm"
        >
          Download as PDF
        </button>
      </div>

      

      {/* CV Template Content */}
      <div
        ref={pdfRef}
        className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto"
      >
        {/* Header */}
        <header className="border-b border-gray-200 pb-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl text-teal-600 mt-1">{personalInfo.title}</h2>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="mt-auto flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-teal-600"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-teal-600"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-teal-600" />
            <h2 className="text-xl font-bold text-gray-900">Experience</h2>
          </div>
          <div className="space-y-4">
            {experience.map((job, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{job.position}</h3>
                  <p className="text-gray-600 text-justify">{job.company}</p>
                  <p className="text-sm text-gray-500 text-justify">{job.period}</p>
                  <ul className="mt-2 text-gray-600 list-disc pl-6 text-justify">
                    {job.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-5 h-5 text-teal-600" />
            <h2 className="text-xl font-bold text-gray-900">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white text-teal-600 rounded-full text-sm border border-teal-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-teal-600" />
            <h2 className="text-xl font-bold text-gray-900">Education</h2>
          </div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.school}</p>
                  <p className="text-gray-500">{edu.city}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-teal-600" />
            <h2 className="text-xl font-bold text-gray-900">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex justify-between items-start bg-gray-50 p-4 rounded-lg"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                  <p className="text-gray-600">{cert.issuer}</p>
                </div>
                <span className="text-sm text-teal-600 font-medium">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CVTemplate;
