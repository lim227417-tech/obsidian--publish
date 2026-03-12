const savedWideMode = localStorage.getItem("wide-mode")
if (savedWideMode === "on") {
  document.documentElement.setAttribute("wide-mode", "on")
}

document.addEventListener("nav", () => {
  const switchWideMode = () => {
    const current = document.documentElement.getAttribute("wide-mode")
    const next = current === "on" ? "off" : "on"
    document.documentElement.setAttribute("wide-mode", next)
    localStorage.setItem("wide-mode", next)
  }

  for (const btn of document.getElementsByClassName("widthtoggle")) {
    btn.addEventListener("click", switchWideMode)
    window.addCleanup(() => btn.removeEventListener("click", switchWideMode))
  }
})
