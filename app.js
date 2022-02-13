const container = document.querySelector(".container")
const memes = [
  { name: "Nikol", image: "images/1.jpg" },
  { name: "Ramses", image: "images/2.jpg" },
  { name: "Bond", image: "images/3.jpg" },
  { name: "Beatles", image: "images/4.jpg" }
]

const showMemes = () => {
  let output = ""
  memes.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Meme</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showMemes)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}