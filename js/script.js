"use strict"

const introParagraph = document.getElementById("intro")
const headerEl = document.getElementById("page-header")
const gradientBtn = document.getElementById("header-button")
let filtertag = "toutes les couleurs"

// funtions
function addRandomGradientBg() {
  if (headerEl) {
    const random = Math.floor(gradients.length * Math.random())
    const randomGradient = gradients[random]
    const bgImage = `linear-gradient(to right, ${randomGradient.start}, ${randomGradient.end})`
    headerEl.style.background = bgImage
  }
}

// app
if (introParagraph) {
  introParagraph.textContent = `Voici une collection de ${gradients.length} dégradés prêts à utiliser dans vos feuilles de styles`
}

addRandomGradientBg() // execute la fontion une fois quand le script charge
if (gradientBtn) {
  gradientBtn.addEventListener("click", addRandomGradientBg)
}

console.log("tous les dégradés", gradients)
console.log("tags uniques", uniqueTags)

function insertGradients() {
  const ulEl = document.createElement("ul");
  const gridContainer = document.getElementById("grid-container");
  ulEl.classList.add("row", "list-unstyled");
  const filterGradients = gradients.filter (el =>{
    //on utilise ici filterTag
    if (filtertag === "toutes les couleurs"){
      return true
    } else {
      return el.tags.includes(filtertag)
    }
  })
  for (let gradient of filterGradients) {
    console.log(gradient);
    const li = document.createElement("li");
    li.classList.add("col-sm-6", "col-md-4", "col-lg-3");
    const gradientCode = `background-image: linear-gradient(90deg, ${gradient.start}, ${gradient.end});`;
    console.log(gradientCode);
    li.innerHTML = `<div class="card p-3 mb-4 shadow">
      <div class="card-gradient rounded-pill mx-auto mb-4" style="${gradientCode}"></div>
      <h2 class="h5 text-center">${gradient.name}</h2>
      <code>${gradientCode}</code>
    </div>`;
    ulEl.append(li);
  }
  //Pour remettre gridContainer à zéro -> div vide
  gridContainer.innerHTML = ""
  console.log(ulEl);
  gridContainer.append(ulEl);
}
  
insertGradients()
  //     crée une structure pour le li
  //     attache li au ulEl
  // attache ulEl à la fin de gridEl

  function activateFilterByTag() {
    // selectEl <- élément du dom avec l'id filtertags
    const selectEl = document.getElementById("filtertags")
    //trier uniqueTags dans l'ordre alphabétique
    uniqueTags.sort()
    console.log(uniqueTags)
    console.log(selectEl)
    // tags <- liste des tags uniques dans l'order alphabétique
    // parcourir la liste des tags (for of)
    for (let tag of uniqueTags) {
      const option = document.createElement("option")
      option.textContent = tag
      option.value = tag
      console.log(option)
      selectEl.append(option)
    }
    selectEl.addEventListener("change", ()=> {
    
    alert (`Vous avez choisi la couleur ${selectEl.value}`)
    console.dir(selectEl)
    filtertag = selectEl.value
    insertGradients()
    console.log(filtertag)
  
  })
    //    crée un élément option
    //    avec le texte qui est égal au tag
    //    avec la valeur de "value" égale au tag
    //    attache l'option à la fin de selectEl
    // selectEl devrait réagir à l'action de utilisateur qui choisi une nouvelle valeur (change)
    // affecter la value d'option choisi par utilisateur à tagFilter. On a accès à cette inforamtion via event.currentTarget.value
    // appelle insertGradients() pour réinserer les gradients
  }

  activateFilterByTag()