const mobileMenu = document.querySelector("[data-mobile-menu]");
const mobileMenuNavLinks = document.querySelector("[data-mobile-menu] li a");
const openMenuButton = document.querySelector("[data-open-menu-button]");
const closeMenuButton = document.querySelector("[data-close-menu-button]");

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);
mobileMenuNavLinks.addEventListener("click", closeMenu);

function openMenu() {
  mobileMenu.classList.remove("hidden");
}

function closeMenu() {
  mobileMenu.classList.add("hidden");
}
