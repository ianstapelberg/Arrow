const remote = require('electron').remote;

// Close window script

document.getElementById("titlebar-close").addEventListener("click", closeWin);

function closeWin() {
    var window = remote.getCurrentWindow();
    window.close();
}

// Expand or collapse window script

setExpColIcon();

document.getElementById("titlebar-exp-col").addEventListener("click", expColWindow);

function expColWindow() {
    // Expand or collapse the window
    
    var window = remote.getCurrentWindow();

    if (windowExpColState()) {
        window.maximize();
    } else {
        window.unmaximize(); 
    }

    setExpColIcon();
}

function setExpColIcon() {
    // Set class for icon to be used
    
    if (windowExpColState()) {
        document.getElementById("titlebar-exp-col").style.backgroundImage =  'url("./assets/Max.png")';
    } else {
        document.getElementById("titlebar-exp-col").style.backgroundImage =  'url("./assets/Col.png")'; 
    }
}

function windowExpColState() {
    var window = remote.getCurrentWindow();
    
    // Return true if window is collapsed
    // Return flase if window is expanded

    if (!window.isMaximized()) {
        return true;           
    } else {
        return false;
    }
}

// document.getElementById("collinkitem").addEventListener("click", colWin);

// function colWin() {
//     var window = remote.getCurrentWindow();
//     if (!window.isMaximized()) {
//         window.maximize();
//         document.getElementById("maxico").classList.add("hidden");
//         document.getElementById("colico").classList.remove("hidden");            
//     } else {
//         window.unmaximize();
//         document.getElementById("maxico").classList.remove("hidden");
//         document.getElementById("colico").classList.add("hidden");
//     }
// }

document.getElementById("titlebar-min").addEventListener("click", minWin);

function minWin() {
    var window = remote.getCurrentWindow();
    window.minimize();
}