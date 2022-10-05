import { onVisible } from "./utils"

const elements = document.getElementsByClassName("typewriter")

for (const e of elements) {
  const str = `${e.innerText}`
  e.innerText = ""
  let i = 0
  function write() {
    e.innerText = str.slice(0, i + 1)
    i += 1
    if (i < str.length) {
      setTimeout(write, 200)
    }
  }
  onVisible(e, () => setTimeout(write, 1500))
}
