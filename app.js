const hamburger = document.querySelector(".hamburger");
const menuItems = document.querySelector(".menu-items");
const menuList = document.querySelectorAll(".menulist");
const blog = document.getElementById("blog");
const websiteTitle = document.querySelector(".website-title");
const home = document.getElementById("home");

//event listener
hamburger.addEventListener("click", menuBtn);
window.addEventListener("DOMContentLoaded", allSet);

//functions
function menuBtn(e) {
  hamburger.classList.toggle("active");
  menuItems.classList.toggle("active");
  menuList.forEach(function (menu) {
    menu.addEventListener("click", function () {
      hamburger.classList.remove("active");
      menuItems.classList.remove("active");
    });
  });
}

//social media
const smBtn = document.querySelectorAll(".sMedia");

smBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const socialItem = e.currentTarget.dataset.id;
    window.location = `https://www.${socialItem}.com/rencalago`;
  });
});

function allSet(e) {
  websiteTitle.addEventListener("click", function (e) {
    const value = e.currentTarget.dataset.id;
    if (value === "mainHome") {
      window.location = "./index.html";
    }
    if (value === "blog") {
      window.location = "./blog.html";
    }
  });

  menuList.forEach(function (menu) {
    menu.addEventListener("click", function (e) {
      const value = e.currentTarget.dataset.id;
      let bestName = e.currentTarget.textContent;
      if (value === "mainHome") {
        window.location = `./index.html`;
      } else if (value === "blog") {
        window.location = `./blog.html`;
      } else {
        window.location = `./${bestName}.html`;
      }
    });
  });
}
