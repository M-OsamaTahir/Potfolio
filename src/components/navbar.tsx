// import React, { useState } from 'react';
// import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="fixed w-full bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo/Brand */}
//           <div className="flex-shrink-0 flex items-center">
//             <a href="/" className="text-xl font-bold text-gray-800">
//               Portfolio
//             </a>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-center space-x-8">
//               <a href="#about" className="text-gray-600 hover:text-gray-900">
//                 About
//               </a>
//               <a
//                 href="#experience"
//                 className="text-gray-600 hover:text-gray-900"
//               >
//                 Experience
//               </a>
//               <a href="#projects" className="text-gray-600 hover:text-gray-900">
//                 Projects
//               </a>
//               <a href="#contact" className="text-gray-600 hover:text-gray-900">
//                 Contact
//               </a>
//             </div>
//           </div>

//           {/* Social Links - Desktop */}
//           <div className="hidden md:flex items-center space-x-4">
//             <a
//               href="https://github.com/M-OsamaTahir"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-gray-900"
//             >
//               <Github className="h-5 w-5" />
//             </a>
//             <a
//               href="https://linkedin.com/in/muhammad-osama-tahir-29087321a"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-gray-900"
//             >
//               <Linkedin className="h-5 w-5" />
//             </a>
//             <a
//               href="osamatahir115@gmail.com"
//               className="text-gray-600 hover:text-gray-900"
//             >
//               <Mail className="h-5 w-5" />
//             </a>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isOpen ? (
//                 <X className="block h-6 w-6" />
//               ) : (
//                 <Menu className="block h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <a
//             href="#about"
//             className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//           >
//             About
//           </a>
//           <a
//             href="#experience"
//             className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//           >
//             Experience
//           </a>
//           <a
//             href="#projects"
//             className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//           >
//             Projects
//           </a>
//           <a
//             href="#contact"
//             className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//           >
//             Contact
//           </a>
//         </div>
//         {/* Social Links - Mobile */}
//         <div className="pt-4 pb-3 border-t border-gray-200">
//           <div className="flex items-center justify-around px-5">
//             <a
//               href="https://github.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-gray-900"
//             >
//               <Github className="h-5 w-5" />
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-gray-900"
//             >
//               <Linkedin className="h-5 w-5" />
//             </a>
//             <a
//               href="mailto:your.email@example.com"
//               className="text-gray-600 hover:text-gray-900"
//             >
//               <Mail className="h-5 w-5" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-bold text-gray-800">
              Portfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a
                href="#experience"
                className="text-gray-600 hover:text-gray-900"
              >
                Experience
              </a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">
                Projects
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/M-OsamaTahir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-osama-tahir-29087321a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:osamatahir115@gmail.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#about"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            Contact
          </a>
        </div>

        {/* Social Links - Mobile */}
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center justify-around px-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
