
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
    window.location.href = "experiment.html";
}

// Seperation

/*function J2() {
    window.location.href = "axie.html";
}*/

// Seperation

function BPJ() {
    window.location.href = "index.html";
}
// This function is used to make text not hide when the mouse is over it.
function W() {
    document.getElementById("Q").style.visibility = "visible";
}
// This function is used to make text hide when the mouse is not over it.
function W2() {
    document.getElementById("Q").style.visibility = "hidden";
}

// Seperation

// This function is used to make text not hide when the mouse is over it.
/*function W3() {
    document.getElementById("E").style.display = "block";
}
// This function is used to make text hide when the mouse is not over it.
function W4() {
    document.getElementById("E").style.display = "none";
} */

// Seperation

// This function is used to make text not hide when the user clicks on it.
function P() {
    const K = document.getElementById("K");
    K.classList.toggle("K1");
}

