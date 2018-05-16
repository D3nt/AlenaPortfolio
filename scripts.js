window.onload = function() {
  document.getElementById("topmenubutton").addEventListener('click', openNav);
  document.getElementById("close-menu").addEventListener('click', closeNav);
  document.getElementById("page1").addEventListener('click', scroll2);
  document.getElementById("page2").addEventListener('click', scroll1);
}

function openNav() {
  document.getElementById("nav").style.height = "100%";
  document.body.classList.add("open");
}

function closeNav() {
  document.getElementById("nav").style.height = "0%";
  document.body.classList.remove("open");
}

function scroll2() {
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "block";
}

function scroll1() {
  document.getElementById("page1").style.display = "block";
  document.getElementById("page2").style.display = "none";
}
