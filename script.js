/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}

// Image Preview Modal
const previewModal = document.createElement('div');
previewModal.className = 'preview-modal';
previewModal.innerHTML = `
  <div class="modal-content">
    <button class="close-modal">
      <i class="fas fa-times"></i>
    </button>
    <img src="" class="preview-image" id="previewImage">
  </div>
`;
document.body.appendChild(previewModal);

const previewImage = document.getElementById('previewImage');
const closeModal = document.querySelector('.close-modal');

// Add click events to all preview buttons
document.querySelectorAll('.preview-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const imageUrl = this.getAttribute('data-image');
    previewImage.src = imageUrl;
    previewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// Close modal
closeModal.addEventListener('click', () => {
  previewModal.classList.remove('active');
  document.body.style.overflow = '';
});

previewModal.addEventListener('click', (e) => {
  if (e.target === previewModal) {
    previewModal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});
