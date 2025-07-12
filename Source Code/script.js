const form = document.getElementById('contactForm');
const responseDiv = document.getElementById('formResponse');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    responseDiv.textContent = "Please fill in all fields.";
    responseDiv.className = "error";
    return;
  }

  responseDiv.textContent = "Sending...";
  responseDiv.className = "";

  setTimeout(() => {
    responseDiv.textContent = "Thank you for contacting us! We'll reply soon.";
    responseDiv.className = "success";
    form.reset();
    setTimeout(() => { responseDiv.textContent = ""; }, 4000);
  }, 1200);
});