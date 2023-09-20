// Открыть модальное око
document.getElementById("submit").addEventListener("click", function() {
    document.getElementById("backdrop").classList.add("yes")
    document.getElementById("pop_vis").classList.add("yes")
    document.getElementById("google").classList.add("yes")
    document.getElementById("tg").classList.add("yes")
})

document.getElementById("google").addEventListener("click", function() {
    document.getElementById("alert").classList.remove("none")
    document.getElementById("alert").classList.add("alert-danger")
    setTimeout(() => {
        document.getElementById("alert").classList.remove("alert-danger")
        document.getElementById("alert").classList.add("none")
      }, 5000);

})


window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("pop_vis").classList.remove("yes")
        document.getElementById("backdrop").classList.remove("yes")
        document.getElementById("google").classList.remove("yes")
        document.getElementById("tg").classList.remove("yes")
    }
});


// Закрыть модальное окно
document.getElementById("svg_x").addEventListener("click", function() {
    document.getElementById("pop_vis").classList.remove("yes")
    document.getElementById("backdrop").classList.remove("yes")
    document.getElementById("google").classList.remove("yes")
    document.getElementById("tg").classList.remove("yes")
})

// Закрыть модальное окно при нажатии на Esc

function auth_tg() {
    window.open("https://vk.com", "newWindow", "width=500,height=500");
  }