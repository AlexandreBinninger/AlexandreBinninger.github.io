document.addEventListener('DOMContentLoaded', () => {
  const publicationInfoElements = document.querySelectorAll('.publication-info');
  let minWidth = Infinity;

  // Determine the minimum width
  publicationInfoElements.forEach(element => {
    const width = element.getBoundingClientRect().width;
    if (width < minWidth) minWidth = width;
  });

  // Set the width of all publication-info elements to the minimum width
  publicationInfoElements.forEach(element => {
    element.style.width = `${minWidth}px`;
  });
});