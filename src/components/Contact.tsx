// import React, { useState } from 'react';
// import { Mail, Linkedin, Github } from 'lucide-react';

// export function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <section id="contact" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//             Get in Touch
//           </h2>
//           <p className="mt-4 text-lg text-gray-600">
//             Let's discuss how we can work together on your next data science
//             project
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div>
//             <form onSubmit={handleSubmit} className="space-y-6" action="https://formsubmit.co/osamatahir2gmail.com" method="POST">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={4}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
//                   value={formData.message}
//                   onChange={(e) =>
//                     setFormData({ ...formData, message: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           <div className="space-y-8">
//             <div>
//               <h3 className="text-lg font-medium text-gray-900 mb-4">
//                 Connect With Me
//               </h3>
//               <div className="space-y-4">
//                 <a
//                   href="osamatahir115@gmail.com"
//                   className="flex items-center space-x-3 text-gray-600 hover:text-teal-600 transition-colors"
//                 >
//                   <Mail className="h-6 w-6" />
//                   <span>osamatahir115@gmail.com</span>
//                 </a>
//                 <a
//                   href="https://linkedin.com/in/muhammad-osama-tahir-29087321a"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center space-x-3 text-gray-600 hover:text-teal-600 transition-colors"
//                 >
//                   <Linkedin className="h-6 w-6" />
//                   <span>Osama's Linkedin</span>
//                 </a>
//                 <a
//                   href="https://github.com/M-OsamaTahir"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center space-x-3 text-gray-600 hover:text-teal-600 transition-colors"
//                 >
//                   <Github className="h-6 w-6" />
//                   <span>Osama's GitHub</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate form submission to the server
      const response = await fetch('https://formsubmit.co/ea2754a4c77f8f12645e2550607a4223', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Let's discuss how we can work together on your next data science project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Send Message
              </button>
            </form>

            {/* Success and Error Messages */}
            {status === 'success' && (
              <p className="mt-4 text-green-600 text-sm">
                Your message has been sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-600 text-sm">
                Oops! Something went wrong. Please try again.
              </p>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Connect With Me
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:osamatahir115@gmail.com"
                  className="flex items-center space-x-3 text-gray-600 hover:text-teal-600 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                  <span>osamatahir115@gmail.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/muhammad-osama-tahir-29087321a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-teal-600 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span>Osama's LinkedIn</span>
                </a>
                <a
                  href="https://github.com/M-OsamaTahir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-teal-600 transition-colors"
                >
                  <Github className="h-6 w-6" />
                  <span>Osama's GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
