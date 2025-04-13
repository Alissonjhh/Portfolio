const icone = document.getElementById("toggle");
const iconeGit = document.getElementById("IconGit");
const iconeInta = document.getElementById("IconInsta");
const iconeLink = document.getElementById("IconLink");
const body = document.body;
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "dark") {
  body.classList.add("dark-mode");
  icone.src = "./Img/Sol.png";
  iconeGit.src = "./Img/github-Light.png";
  iconeLink.src = "./Img/linkedin-Light.png";
  iconeInta.src = "./Img/instagram-Light.png";
} else {
    icone.src = "./Img/Lua.png"; 
    iconeGit.src = "./Img/github-Dark.png";
    iconeLink.src = "./Img/linkedin-Dark.png";
    iconeInta.src = "./Img/instagram-Dark.png";
}

icone.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icone.src = "./Img/Sol.png";
    iconeGit.src = "./Img/github-Light.png";
    iconeLink.src = "./Img/linkedin-Light.png";
    iconeInta.src = "./Img/instagram-Light.png";
    localStorage.setItem("tema", "dark");
  } else {
    icone.src = "./Img/Lua.png";
    iconeGit.src = "./Img/github-Dark.png";
    iconeLink.src = "./Img/linkedin-Dark.png";
    iconeInta.src = "./Img/instagram-Dark.png";
    localStorage.setItem("tema", "light");
  }
});
