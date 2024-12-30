// Utility function to handle CV download
export const downloadCV = () => {
  // Create a link element
  const link = document.createElement('a');
  link.href = '/cv.pdf'; // CV file should be in the public directory
  link.download = 'john-doe-cv.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};