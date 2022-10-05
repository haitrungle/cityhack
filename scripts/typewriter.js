const elements = document.getElementsByClassName("typewriter")
function onVisible(element, callback) {
  new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        callback(element)
        observer.disconnect()
      }
    })
  }).observe(element)
}
for (const e of elements) {
  const str = `${e.innerText}`
  e.innerText = ""
  let i = 0
  function write() {
    e.innerText = str.slice(0, i + 1)
    i += 1
    if (i < str.length) {
      setTimeout(write, 150)
    }
  }
  onVisible(e, () => setTimeout(write, 2000))
}
