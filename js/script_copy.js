
// the function "CD" makes the manual-button timer work. 
function CD() {
    var CV = document.getElementById("CDB").innerHTML
    var NV = 0;
    if (CV > 0) {
        NV = CV - 1;
    }
    document.getElementById("CDB").innerHTML = NV;
}
// Oh btw the function AG is not used
function AG() {
    var NT = "LOL"
    document.getElementById("ABS").innerHTML = NT;
}

function J1() {
    window.location.href = "gallery.html";
}

function NP2J() {
    window.location.href = "axie.html";
}

function BPJ() {
    window.location.href = "index.html";
}
// This function is used to make text not hide when the mouse is over it.
function W() {
    document.getElementById("Q").style.display = "block";
}
function W2() {
    document.getElementById("Q").style.display = "none";
    console.log("Code works dumbass");
}