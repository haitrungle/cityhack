const button = document.getElementById("menu-control")
const menu = document.getElementById("mobile-menu")

const closedIcon = button.children[1]
const openedIcon = button.children[2]

function toggleVisibility(e) {
  if (e.classList.contains("hidden")) {
    e.classList.replace("hidden", "block")
  } else {
    e.classList.replace("block", "hidden")
  }
}

function toggleMenu() {
  if (button.dataset.menuState === "closed") {
    button.dataset.menuState = "opened"
  } else {
    button.dataset.menuState = "closed"
  }
  toggleVisibility(closedIcon)
  toggleVisibility(openedIcon)
  toggleVisibility(menu)
}

button.addEventListener("click", toggleMenu)
menu.addEventListener("click", toggleMenu)
