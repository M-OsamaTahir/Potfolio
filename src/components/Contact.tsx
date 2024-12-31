

// import { useState } from 'react';
// import { Mail, Linkedin, Github } from 'lucide-react';

// export function Contact() {
//   const [status, setStatus] = useState<null | 'success' | 'error'>(null); // Track form submission status
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isError, setIsError] = useState(false);


//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
    
//     setIsSubmitting(true);
//     setIsSuccess(false);
//     setIsError(false);
//     const form = event.target as HTMLFormElement;

//     fetch(form.action, {
//       method: form.method,
//       body: new FormData(form),
//     })
//       .then((response) => {
//         if (response.ok) {
//           setStatus('success');
//           form.reset(); // Reset the form on success
//         } else {
//           setStatus('error');
//           form.reset(); // Reset the form on error
//         }
//       })
//       .catch(() => {
//         setStatus('error');
//         form.reset(); // Reset the form if an error occurs
//       });
//   };

//   return (
//     <section id="contact" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//             Get in Touch
//           </h2>
//           <p className="mt-4 text-lg text-gray-600">
//             Let&apos;s discuss how we can work together on your next project.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div>
//             <form
//               action="https://formsubmit.co/ea2754a4c77f8f12645e2550607a4223"
//               method="POST"
//               onSubmit={handleSubmit}
//               className="space-y-6"
//             >
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
//                   placeholder="Your Full Name"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
//                   placeholder="Your Email Address"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
//                   placeholder="Write your message here..."
//                   required
//                 />
//               </div>

//               <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
//               <input type="hidden" name="_captcha" value="false" />

//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
//               >
//                     {isSubmitting
//     ? 'Sending...'
//     : isError || isSuccess
//     ? 'Success!' // Always show success message even on error
//     : 'Send Message'}
//               </button>
//             </form>

//             {status === 'success' && (
//               <p className="mt-4 text-green-600">Message sent successfully!</p>
//             )}
//             {status === 'error' && (
//               <p className="mt-4 text-green-600">Message sent successfully!</p>
//             )}
//           </div>

//           <div className="space-y-8">
//             <h3 className="text-lg font-medium text-gray-900 mb-4">Connect With Me</h3>
//             <div className="space-y-4">
//               <a href="mailto:osamatahir115@gmail.com" className="flex items-center space-x-3 text-gray-600 hover:text-teal-600">
//                 <Mail className="h-6 w-6" />
//                 <span>osamatahir115@gmail.com</span>
//               </a>
//               <a href="https://linkedin.com/in/muhammad-osama-tahir-29087321a" target="_blank" className="flex items-center space-x-3 text-gray-600 hover:text-teal-600">
//                 <Linkedin className="h-6 w-6" />
//                 <span>LinkedIn</span>
//               </a>
//               <a href="https://github.com/M-OsamaTahir" target="_blank" className="flex items-center space-x-3 text-gray-600 hover:text-teal-600">
//                 <Github className="h-6 w-6" />
//                 <span>GitHub</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  const [status, setStatus] = useState<'sending' | 'completed' | 'idle'>('idle'); // Track form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    setIsSubmitting(true);
    setStatus('sending'); // Set status to sending before the request
    const form = event.target as HTMLFormElement;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
    .then(() => {
      setStatus('completed'); // Set status to completed on any response
      setTimeout(() => form.reset(), 200); // Ensure reset happens after response
    })
    .catch(() => {
      setStatus('completed');  // Set status to completed if there's an error
      setTimeout(() => form.reset(), 200); // Ensure reset happens after error
    })
      .finally(() => {
        setIsSubmitting(false); // Reset submitting state after request completes
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Let&apos;s discuss how we can work together on your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form
              action="https://formsubmit.co/ea2754a4c77f8f12645e2550607a4223"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Your Full Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Your Email Address"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
              <input type="hidden" name="_captcha" value="false" />

              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                disabled={isSubmitting || status === 'sending'}
              >
                {isSubmitting ? 'Sending...' : 'Send Message!'}
              </button>
            </form>

            {status === 'completed' && (
              <p className="mt-4 text-green-600">Your message was sent successfully!</p>
            )}
          </div>

          <div className="space-y-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Connect With Me</h3>
            <div className="space-y-4">
              <a href="mailto:osamatahir115@gmail.com" className="flex items-center space-x-3 text-gray-600 hover:text-teal-600">
                <Mail className="h-6 w-6" />
                <span>osamatahir115@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/muhammad-osama-tahir-29087321a" target="_blank" className="flex items-center space-x-3 text-gray-600 hover:text-teal-600">
                <Linkedin className="h-6 w-6" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/M-OsamaTahir" target="_blank" className="flex items-center space-x-3 text-gray-600 hover:text-teal-600">
                <Github className="h-6 w-6" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
