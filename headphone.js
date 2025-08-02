// function openModal() {
//   document.getElementById("ringModal").classList.remove("modalhidden");
// }

// function closeModal() {
//   document.getElementById("ringModal").classList.add("modalhidden");
// }
// function openNecklaceModal() {
//   document.getElementById("necklaceModal").classList.remove("modalhidden");
// }

// function closeNecklaceModal() {
//   document.getElementById("necklaceModal").classList.add("modalhidden");
// }
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function openModal(id) {
  document.getElementById(id).classList.remove("modalhidden");
}

function closeModal() {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => modal.classList.add("modalhidden"));
}
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}
window.addEventListener('scroll', () => {
  document.querySelectorAll('.slide').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('show');
    }
  });
});

// Show the first section (home) on page load
document.querySelector('#home').classList.add('show');
document.querySelectorAll('.slide-left, .slide-right').forEach(section => {
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    section.classList.add('show');
  }
});