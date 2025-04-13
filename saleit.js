// Fade-in animation for the offer section
window.addEventListener("load", function() {
  const offerSection = document.querySelector(".offer");
  offerSection.classList.add("visible");
});

// Optional: Add hover effect using JS if you want to control the hover interaction more precisely
const offerCols = document.querySelectorAll('.offer-col');

offerCols.forEach(x => {
  x.addEventListener("mouseover", function() {
    x.style.transform = "scale(1.05)";
    x.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.2)";
  });

  x.addEventListener("mouseleave", function() {
    x.style.transform = "scale(1)";
    x.style.boxShadow = "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const serviceBoxes = document.querySelectorAll(".service-box");
  const serviceDetails = document.querySelector(".service-details");
  const serviceTitle = document.getElementById("service-title");
  const serviceDescription = document.getElementById("service-description");
  const closeBtn = document.querySelector(".close");

  const serviceData = {
    web: {
      title: "Web Development",
      description: "We build fast, responsive, and scalable websites tailored to your needs.",
    },
    app: {
      title: "App Development",
      description: "Custom mobile and desktop applications with a seamless user experience.",
    },
    seo: {
      title: "SEO & Optimization",
      description: "Boosting your website's ranking, performance, and visibility.",
    },
  };

  serviceBoxes.forEach( box=> {
    box.addEventListener("click", () => {
      const serviceType = box.dataset.service;
      serviceTitle.textContent = serviceData[serviceType].title;
      serviceDescription.textContent = serviceData[serviceType].description;
      serviceDetails.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    serviceDetails.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === serviceDetails) {
      serviceDetails.style.display = "none";
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const serviceBoxes = document.querySelectorAll('.service-box');

  serviceBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      const h3 = box.querySelector('h3');
      h3.classList.add('animate');
    });

    box.addEventListener('mouseleave', () => {
      const h3 = box.querySelector('h3');
      h3.classList.remove('animate');
    });
  });
});