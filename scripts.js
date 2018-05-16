window.onload = function() {
  document.getElementById("topmenubutton").addEventListener('click', openNav);
  document.getElementById("close-menu").addEventListener('click', closeNav);
}

function openNav() {
  document.getElementById("nav").style.height = "100%";
  document.body.classList.add("open");
}

function closeNav() {
  document.getElementById("nav").style.height = "0%";
  document.body.classList.remove("open");
}
