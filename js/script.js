function RM() {
    document.getElementById("HM").style.display = "block"
}
// The function "RM" makes the thing in the html file
// actually function and reveal the message and 
// also reveal a manual-button timer

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

function NP1J() {
    window.location.href = "gallery.html";
}

function BPJ() {
    window.location.href = "index.html"
}