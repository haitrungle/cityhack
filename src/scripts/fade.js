import { onVisible } from "./utils"

const elements = document.getElementsByClassName("fade-in-up")
for (const e of elements) {
  onVisible(e, (ele) => {
    ele.classList.add("fade-in-up-animation")
  })
}
