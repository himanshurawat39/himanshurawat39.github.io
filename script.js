function scrollToTop(e) {
  e.preventDefault();
  document.getElementById("home").scrollIntoView({
    behavior: "smooth"
  });
}

function toggleForm() {
  const form = document.getElementById("contact-form");
  if (form.style.display === "none") {
    form.style.display = "block";
    form.scrollIntoView({ behavior: "smooth" });
  } else {
    form.style.display = "none";
  }
}
