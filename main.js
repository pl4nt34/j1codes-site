document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Contact form: submit to Formspree via fetch, no page reload
  var form = document.querySelector(".contact-form");
  var status = document.getElementById("form-status");
  if (form && status) {
    var submitButton = form.querySelector('button[type="submit"]');
    var submitting = false; // guards Enter-key submits too, not just button clicks

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (submitting) return;
      submitting = true;
      if (submitButton) submitButton.disabled = true;
      status.className = "form-status";
      status.textContent = "";

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (!response.ok) throw new Error("Formspree responded " + response.status);
          status.textContent = "✓ Message sent — we'll be in touch";
          status.classList.add("form-status--success");
          form.reset();
        })
        .catch(function () {
          status.textContent = "Something went wrong — please try again, or email us directly at contact@j1codes.com.";
          status.classList.add("form-status--error");
        })
        .finally(function () {
          submitting = false;
          if (submitButton) submitButton.disabled = false;
        });
    });
  }
});
