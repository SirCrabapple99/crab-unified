/* define all menu stuff */
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
const settingsMenu = document.getElementById("settingsMenu");

/* vars */
let searchBarOpen = true;

/* localstorage */

function toggleSearchBar() {
    if (searchBarOpen)
        searchBar.classList.add("closed");
    else
        searchBar.classList.remove("closed");

    searchBarOpen = !searchBarOpen;
}

function toggleSettingsMenu() {

}