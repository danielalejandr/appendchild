

let bodyPagina = document.querySelector("body")
let sectionHijoBody = document.createElement("section")
sectionHijoBody.classList.add("img")
bodyPagina.appendChild(sectionHijoBody)

let navHijoSection = document.createElement("nav")
navHijoSection.classList.add("navbar", "navbar-expand-lg", "sticky-top", "pading")
sectionHijoBody.appendChild(navHijoSection)

let divHijoNav = document.createElement("div")
divHijoNav.classList.add("container-fluid")
navHijoSection.appendChild(divHijoNav)

let aHijoDiv = document.createElement("a")
aHijoDiv.classList.add("navbar-brand", "icon")
aHijoDiv.setAttribute("hre", "#")
divHijoNav.append(aHijoDiv)

let buttonHijoDiv = document.createElement("button")
buttonHijoDiv.classList.add("navbar-toggler")
buttonHijoDiv.setAttribute("type", "button")
buttonHijoDiv.setAttribute("data-bs-toggle", "collapse")
buttonHijoDiv.setAttribute("data-bs-target", "#navbarSupportedContent")
buttonHijoDiv.setAttribute("aria-controls", "navbarSupportedContent")
buttonHijoDiv.setAttribute("aria-expanded","false")
buttonHijoDiv.setAttribute("aria-label","Toggle navigation")

let spanHijoButton = document.createElement("span")
spanHijoButton.classList.add("navbar-toggler-icon")
buttonHijoDiv.appendChild(spanHijoButton)

let divHijoDiv = document.createElement("div")
divHijoDiv.classList.add("collapse", "navbar-collapse")
divHijoDiv.setAttribute("id", "navbarSupportedContent")
divHijoNav.appendChild(divHijoDiv)

let ulDivHijoDiv = document.createElement("ul")
ulDivHijoDiv.classList.add("navbar-nav", "me-auto", "mb-2", "mb-lg-0", "lado1")
divHijoDiv.appendChild(ulDivHijoDiv)

let liHijoUl = document.createElement("li")
liHijoUl.classList.add("nav-item", "d-flex", "border-start")
ulDivHijoDiv.appendChild(liHijoUl)

let divHijoLi = document.createElement("div")
divHijoLi.classList.add("nav-link", "lado")
divHijoLi.setAttribute("style","padding-inline-start: 20px;")
divHijoLi.innerText = "HALO:"
liHijoUl.appendChild(divHijoLi)

let div1HijoLi = document.createElement("div")
div1HijoLi.classList.add("nav-link", "text-light")
div1HijoLi.setAttribute("style", "padding-inline-start: 0px;     font-size: 12px; padding-top: 11px;")
div1HijoLi.innerText = "VER AHORA"
liHijoUl.appendChild(div1HijoLi)

let formHijoDiv = document.createElement("form")
formHijoDiv.classList.add("d-flex")
formHijoDiv.setAttribute("role","search")
divHijoDiv.appendChild(formHijoDiv)

let aHijoForm = document.createElement("a")
aHijoForm.classList.add("link-light", "letra2")
aHijoForm.setAttribute("href", "#")
aHijoForm.innerText = "INCIAR SESION"
formHijoDiv.appendChild(aHijoForm)

let sectionHijoSection = document.createElement("section")
sectionHijoBody.appendChild(sectionHijoSection)

let divHijoSection = document.createElement("div")
divHijoSection.classList.add("grid", "tamano")
sectionHijoSection.appendChild(divHijoSection)

let div2HijoDiv = document.createElement("div")
div2HijoDiv.classList.add("grid-row")
divHijoSection.appendChild(div2HijoDiv)

let h1HijoDiv2 = document.createElement("h1")
h1HijoDiv2.classList.add("includeInScrollTracking", "text-light", "letra")
h1HijoDiv2.setAttribute("data-row-position", "0")
h1HijoDiv2.innerText = "HISTORIAS ÚNICAS. ESTRELLAS ICÓNICAS. UNA MONTAÑA DE ENTRETENIMIENTO."
div2HijoDiv.appendChild(h1HijoDiv2)

let divHijoDiv2 = document.createElement("div")
divHijoDiv2.classList.add("upsell-text", "text-light", "letra1")
div2HijoDiv.appendChild(divHijoDiv2)

let strongHijoDiv = document.createElement("strong")
strongHijoDiv.innerText = "Suscríbete por $13,900.00&nbsp;COP al Mes."
divHijoDiv2.appendChild(strongHijoDiv)

let brHijoStrong = document.createElement("br")
strongHijoDiv.appendChild(brHijoStrong)

let strong2HijoDiv = document.createElement("strong")
strong2HijoDiv.innerText = "Cancela en cualquier momento."
divHijoDiv2.appendChild(strong2HijoDiv)

let br = document.createElement("br")
strong2HijoDiv.appendChild(br)

let strong3HijoDiv = document.createElement("strong")
strong3HijoDiv.innerText = "Únete ahora y obtén 7 días gratis."
divHijoDiv2.appendChild(strong3HijoDiv)

let div3HijoDiv2 = document.createElement("div")
div3HijoDiv2.classList.add("hero__cta")
div2HijoDiv.appendChild(div3HijoDiv2)

let div4HijoDiv3 = document.createElement("div")
div3HijoDiv2.appendChild(div4HijoDiv3)

let aHijoDiv4 = document.createElement("a")
aHijoDiv4.classList.add("button")
aHijoDiv4.setAttribute( "href","#")
div4HijoDiv3.appendChild(aHijoDiv4)

let div5HijoA = document.createElement("div")
div5HijoA.classList.add("btn", "btn-primary", "tamano1")
div5HijoA.innerText = "SUSCRÍBETE A PARAMOUNT+"
aHijoDiv4.appendChild(div5HijoA)

let div6HijoDiv3 = document.createElement("div")
div3HijoDiv2.appendChild(div6HijoDiv3)

let aHijoDiv7 = document.createElement("a")
aHijoDiv7.classList.add("button")
aHijoDiv7.setAttribute( "href","#")
div6HijoDiv3.appendChild(aHijoDiv7)

let div8HijoA = document.createElement("div")
div8HijoA.classList.add("btn", "btn-outline-light", "tamano2")
div8HijoA.innerText = "YA TENGO PARAMOUNT+ "
aHijoDiv7.appendChild(div8HijoA)

let div9HijoDiv3 = document.createElement("div")
div3HijoDiv2.appendChild(div9HijoDiv3)

let aHijoDiv9 = document.createElement("a")
aHijoDiv9.classList.add("button")
aHijoDiv9.setAttribute( "href","#")
div9HijoDiv3.appendChild(aHijoDiv9)

let div10HijoA = document.createElement("div")
div10HijoA.classList.add("btn", "btn-outline-light", "tamano3")
div10HijoA.innerText = "INICIA SESIÓN CON TU PROVEEDOR"
aHijoDiv9.appendChild(div10HijoA)

let section1HijoBody= document.createElement("section")
section1HijoBody.classList.add("img1")
bodyPagina.appendChild(section1HijoBody)

let div11HijoSection1 = document.createElement("div")
div11HijoSection1.classList.add("grid")
section1HijoBody.appendChild(div11HijoSection1)

let div12HijoDiv11 = document.createElement("div")
div12HijoDiv11.classList.add("grid-item",  "espacio1")
div11HijoSection1.appendChild(div12HijoDiv11)

let h3HijoDiv12 = document.createElement("h3")
h3HijoDiv12.classList.add("letra3", "text-light")
h3HijoDiv12.setAttribute("data-row-position", "3")
h3HijoDiv12.innerText = "SOMOS"
div12HijoDiv11.appendChild(h3HijoDiv12)

let br1 = document.createElement("br")
h3HijoDiv12.appendChild(br1)

let strongHijoH3 = document.createElement("strong")
strongHijoH3.innerText = "ORIGINALES Y"
h3HijoDiv12.appendChild(strongHijoH3)

let br2 = document.createElement("br")
strongHijoH3.appendChild(br2)

let strong1HijoH3 = document.createElement("strong")
strong1HijoH3.innerText = "EXCLUSIVOS"
h3HijoDiv12.appendChild(strong1HijoH3)

let div13HijoDiv11 = document.createElement("div")
div13HijoDiv11.classList.add("upsell-text", "text-light")
div13HijoDiv11.innerText = "Disfruta de historias únicas, estrellas icónicas y programas"
div12HijoDiv11.appendChild(div13HijoDiv11)

let br3 = document.createElement("br")
div13HijoDiv11.appendChild(br3)

let strongHijoDiv13 = document.createElement("p")
strongHijoDiv13.innerText ="exclusivos que no encontrarás en ningún otro lugar."
div13HijoDiv11.appendChild(strongHijoDiv13)

let section2HijoBody = document.createElement("section")
section2HijoBody .classList.add("img2")
bodyPagina.appendChild(section2HijoBody)

let sectionHijoSection2 = document.createElement("section")
sectionHijoSection2.classList.add("padded-container")
section2HijoBody.appendChild(sectionHijoSection2)

let div14HijoSection = document.createElement("div")
div14HijoSection.classList.add("grid")
sectionHijoSection2.appendChild(div14HijoSection)

let div15HijoDiv14 = document.createElement("div")
div15HijoDiv14.classList.add("grid-item", "espacio2")
div14HijoSection.appendChild(div15HijoDiv14)

let h3HijoDiv15 = document.createElement("h3")
h3HijoDiv15.classList.add("includeInScrollTracking", "text-light", "letra4")
h3HijoDiv15.setAttribute("data-row-position","4")
h3HijoDiv15.innerText = "TENEMOS TU "
div15HijoDiv14.appendChild(h3HijoDiv15)

let br4 = document.createElement("br")
h3HijoDiv15.appendChild(br4)

let strong4 = document.createElement("strong")
strong4.innerText = "CONTENIDO"
h3HijoDiv15.appendChild(strong4)

let br5 = document.createElement("br")
strong4.appendChild(br5)

let strong5 = document.createElement("strong")
strong5.innerText ="FAVORITO"
h3HijoDiv15.appendChild(strong5)

let div16HijoDiv15 = document.createElement("div")
div16HijoDiv15.classList.add("upsell-text", "text-light")
div16HijoDiv15.innerText = "Desde películas taquilleras y series reconocidas a tus"
div15HijoDiv14.appendChild(div16HijoDiv15)

let br6 = document.createElement("br")
div16HijoDiv15.appendChild(br6)

let p = document.createElement("p")
p.innerText = "programas favoritos, en Paramount+ podrás disfrutarlo todo"
div16HijoDiv15.appendChild(p)

let br7 = document.createElement("br")
p.appendChild(br7)


let p1 = document.createElement("p")
p1.innerText = "una y otra vez."
p.appendChild(p1)