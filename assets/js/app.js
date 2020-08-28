const navbar = document.querySelector('.js-custom-navbar');
const menuIcon = document.querySelector('.js-menu-icon');
const menuIconClose = document.querySelector('.js-menu-icon span');
const modalImage = document.querySelector(".js-modal-image");
const modalOpen = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-close");
const imgList = document.querySelectorAll(".js-img-thumb");

menuIcon.addEventListener('click', e => {
  e.preventDefault();
  navbar.classList.toggle("open");
  menuIconClose.classList.toggle("fa-times");
});

Array.from(imgList).forEach(item => {
  item.addEventListener("click", e => {
    modalOpen.classList.add("open");
    modalImage.src = e.target.src;
  });
});

modalClose.addEventListener("click", () => {
  modalOpen.classList.remove("open");
});
