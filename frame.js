// this file is mostly misc menu stuff

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

function openSettingsMenu() {

}

const gamesMenu = document.getElementById("gamePopup");
function openGamesMenu() {
    gamesMenu.classList.add("open");
}

function closeGamesMenu() {
    gamesMenu.classList.remove("open");
}

// mouse effect stuff
function mouseEffect(e) {
    const el = e.currentTarget.querySelector(".gameImage");
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 30 - 15;
    const y = ((e.clientY - rect.top) / rect.height) * 30 - 15;
    el.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
}

// game frame
function openGameInfo() {
    gamesMenu
}