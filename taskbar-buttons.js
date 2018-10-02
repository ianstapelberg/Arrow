const remote = require('electron').remote;

document.getElementById("closelinkitem").addEventListener("click", closeWin);

function closeWin() {
    var window = remote.getCurrentWindow();
    window.close();
}

document.getElementById("collinkitem").addEventListener("click", colWin);

function colWin() {
    var window = remote.getCurrentWindow();
    if (!window.isMaximized()) {
        window.maximize();
        document.getElementById("maxico").classList.add("hidden");
        document.getElementById("colico").classList.remove("hidden");            
    } else {
        window.unmaximize();
        document.getElementById("maxico").classList.remove("hidden");
        document.getElementById("colico").classList.add("hidden");
    }
}

document.getElementById("minlinkitem").addEventListener("click", minWin);

function minWin() {
    var window = remote.getCurrentWindow();
    window.minimize();
}