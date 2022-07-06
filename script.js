const menuBtn = document.getElementById('menu')
const navList = document.getElementById('navList')

function toggleButton() {
    navList.classList.toggle('show')
}

menuBtn.addEventListener('click', toggleButton)

