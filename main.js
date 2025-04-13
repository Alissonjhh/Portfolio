const icone = document.getElementById("toggle");
const iconeGit = document.getElementById("IconGit");
const iconeInta = document.getElementById("IconInsta");
const iconeLink = document.getElementById("IconLink");
const body = document.body;
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "dark") {
  body.classList.add("dark-mode");
  icone.src = "/Portfolio/Img/Sol.png";
  iconeGit.src = "./img/github-Light.png";
  iconeLink.src = "./img/linkedin-Light.png";
  iconeInta.src = "./img/instagram-Light.png";
} else {
    icone.src = "/Portfolio/Img/Lua.png"; 
    iconeGit.src = "./img/github-Dark.png";
    iconeLink.src = "./img/linkedin-Dark.png";
    iconeInta.src = "./img/instagram-Dark.png";
}

icone.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icone.src = "/Portfolio/Img/Sol.png";
    iconeGit.src = "./img/github-Light.png";
    iconeLink.src = "./img/linkedin-Light.png";
    iconeInta.src = "./img/instagram-Light.png";
    localStorage.setItem("tema", "dark");
  } else {
    icone.src = "/Portfolio/Img/Lua.png";
    iconeGit.src = "./img/github-Dark.png";
    iconeLink.src = "./img/linkedin-Dark.png";
    iconeInta.src = "./img/instagram-Dark.png";
    localStorage.setItem("tema", "light");
  }
});
