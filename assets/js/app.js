const navbar = document.querySelector('.js-custom-navbar');
const menuIcon = document.querySelector('.js-menu-icon');
const menuClose = document.querySelector('.js-menu-close');
const modalEle = document.querySelector(".modal");
const modalImage = document.querySelector(".js-modal-image");
modalClose = document.querySelector(".js-close");

menuIcon.addEventListener('click', e => {
  e.preventDefault();
  navbar.classList.add("open");
});

menuClose.addEventListener('click', e => {
  e.preventDefault();
  navbar.classList.remove("open");
});


Array.from(document.querySelectorAll(".js-img-thumb")).forEach(item => {
  item.addEventListener("click", e => {
    modalEle.style.display = "block";
    modalImage.src = e.target.src;
  });
});

modalClose.addEventListener("click", () => {
  modalEle.style.display = "none";
});
