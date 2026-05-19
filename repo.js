// main repo adding stuff
window.repoSettings = {"type": "JSON"};

const repoAdd = document.getElementById("repoMenu");
function openRepoMenu() {
    repoAdd.classList.add("open");
}

function closeRepoMenu() {
    repoAdd.classList.remove("open");
}

function selectRepoType(e) {
    for (let el of document.getElementsByClassName("repoTypeButton")) {
         el.classList.remove("selected");
    }

    e.target.classList.add("selected");
}