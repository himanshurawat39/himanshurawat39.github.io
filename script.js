function scrollToTop(e) {
  e.preventDefault();
  document.getElementById("home").scrollIntoView({
    behavior: "smooth"
  });
}

function toggleForm() {
  const wrapper = document.getElementById("contact-form-wrapper");
  wrapper.classList.toggle("show");

  if (wrapper.classList.contains("show")) {
    wrapper.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

