
const heroButton = document.querySelector("#hero button");
const letterSection = document.querySelector("#letter");

if (heroButton && letterSection) {
  heroButton.addEventListener("click", () => {
    letterSection.scrollIntoView({ behavior: "smooth" });
  });
}


const animatedElements = document.querySelectorAll(
  "#letter p, #memories figure, #closing p"
);


animatedElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

const images = document.querySelectorAll("#memories img");

const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");

const lightboxImage = document.createElement("img");
lightbox.appendChild(lightboxImage);

document.body.appendChild(lightbox);

images.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImage.src = img.src;
    lightbox.classList.add("active");
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});
const hiddenMessage = document.createElement("div");
hiddenMessage.textContent = "Gracias por ser parte de mi vida ❤️";
hiddenMessage.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--accent);
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.4s ease;
`;
document.body.appendChild(hiddenMessage);

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    hiddenMessage.style.opacity = "1";
  }
});

animatedElements.forEach(el => observer.observe(el));
