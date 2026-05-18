// define all menu stuff
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
const settingsMenu = document.getElementById("settingsMenu");

// vars
let searchBarOpen = true;

// local storage

// top bar
function toggleSearchBar() {
    if (searchBarOpen)
        searchBar.classList.add("closed");
    else
        searchBar.classList.remove("closed");

    searchBarOpen = !searchBarOpen;
}

function toggleSettingsMenu() {

}

// games
let hover;

// mouse rotate effect things
window.addEventListener("load", (e) => {
    const games = document.getElementsByClassName("game");
    for (game of games) {
        game.addEventListener("mousemove", (e) => {
            mouseEffect(e);
        });

        game.addEventListener("mouseleave", (e) => {
            e.currentTarget.querySelector(".gameImage").style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    }
});

function mouseEffect(e) {
    const el = e.currentTarget.querySelector(".gameImage");
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 30 - 15;
    const y = ((e.clientY - rect.top) / rect.height) * 30 - 15;
    el.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
}

function ripples() {
    const ripple = document.getElementById('ripple')
    const scale = document.getElementById('scale')

    // add slight randomness
    ripple.setAttribute('values', `${0.005 + Math.random()/100}; 0`)
    scale.setAttribute('values', `0; ${15.5 + Math.random()*3}; 0`)

    ripple.beginElement()
}