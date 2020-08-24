const navbar = document.querySelector('.js-custom-navbar');
const menuIcon = document.querySelector('.js-menu-icon');
const menuIconClose = document.querySelector('.js-menu-icon span');
const modalEle = document.querySelector(".modal");
const modalImage = document.querySelector(".js-modal-image");
const modalClose = document.querySelector(".js-close");

menuIcon.addEventListener('click', e => {
  e.preventDefault();
  navbar.classList.toggle("open");
  menuIconClose.classList.toggle("fa-times");
});

Array.from(document.querySelectorAll(".js-img-thumb")).forEach(item => {
  item.addEventListener("click", e => {
    modalEle.classList.add("open");
    modalImage.src = e.target.src;
  });
});

modalClose.addEventListener("click", () => {
  modalEle.classList.remove("open");
});
