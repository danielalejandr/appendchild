let bodyPagina = document.querySelector("body")
let navbar = document.createElement("nav")
bodyPagina.className = "img"
navbar.classList.add("navbar", "navbar-expand-lg",)
bodyPagina.appendChild(navbar)

let divHijoNavbar = document.createElement("div")
divHijoNavbar.classList.add("container-fluuid", "offset-1")
navbar.appendChild(divHijoNavbar)

let aHijoDiv = document.createElement("a")
aHijoDiv.className = "navbar-brand"
aHijoDiv.setAttribute("href", "#")
divHijoNavbar.appendChild(aHijoDiv)

let imgHijoA = document.createElement("img")
imgHijoA.setAttribute("src", "assets/img/img3.png")
imgHijoA.className = "w-25"
aHijoDiv.appendChild(imgHijoA)


let btnHijoA = document.createElement("button")
btnHijoA.setAttribute("type", "button")
btnHijoA.setAttribute("data-bs-toggle", "collapse")
btnHijoA.setAttribute("data-bs-target", "#navbarSupportedContent")
btnHijoA.setAttribute("aria-controls", "navbarSupportedContent")
btnHijoA.setAttribute("aria-expanded", "false")
btnHijoA.setAttribute("aria-label", "Toggle navigation")
btnHijoA.className = "navbar-toggler"
divHijoNavbar.appendChild(btnHijoA)

let spanHijoBtn = document.createElement("span")
spanHijoBtn.className = "navbar-toggler-icon"
btnHijoA.appendChild(spanHijoBtn)

let divHijoDivNavbar = document.createElement("div")
divHijoDivNavbar.setAttribute("id", "navbarSupportedContent")
divHijoDivNavbar.className = "collapse navbar-collapse"
divHijoNavbar.appendChild(divHijoDivNavbar)
