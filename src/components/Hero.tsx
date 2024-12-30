import React from 'react';
import { Brain } from 'lucide-react';

// export function Hero() {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage:
//             'url("https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           filter: 'brightness(0.3)',
//         }}
//       />
//       <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
//         <Brain className="w-16 h-16 mx-auto mb-8 text-teal-400" />
//         <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
//           Data Science & ML Portfolio
//         </h1>
//         <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
//           Transforming complex data into actionable insights through machine
//           learning and artificial intelligence
//         </p>
//         <a
//           href="#projects"
//           className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300"
//         >
//           View Projects
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Hero;

// Hero.js (with id="hero")
export function Hero() {
  return (
    <div
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
        }}
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <Brain className="w-16 h-16 mx-auto mb-8 text-teal-400" />
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
          Unlock Data's Secrets with Osama
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
        "Every dataset tells a story, and I’m here to make it unforgettable."
        </p>
        <a
          href="#projects"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300"
        >
          View Projects
        </a>
      </div>
    </div>
  );
}

export default Hero;
