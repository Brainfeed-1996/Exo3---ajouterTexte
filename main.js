const btn = document.querySelector("button");
const texte = document.querySelector("#texteParagraphe01");

function afficherNom() {
  texte.innerHTML = "John";
}

btn.addEventListener("click", afficherNom);
