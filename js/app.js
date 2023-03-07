// Get the photo container and the image
const photoContainer = document.querySelector('.photo-container');
const photo = photoContainer.querySelector('img.animate');

// Create a new IntersectionObserver object
const observer = new IntersectionObserver(
  (entries, observer) => {
    // Loop through each entry
    entries.forEach(entry => {
      // If the entry is in view
      if (entry.isIntersecting) {
        // Add the 'animated' class to the image
        photo.classList.add('animated');
        // Stop observing the image
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

// Start observing the image
observer.observe(photo);
