
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

function RM() {
    document.getElementById("HM").style.display = "block"
}
function BPJ() {
    window.location.href = "index.html";
}

// test submodule brilliance
function TEST() {
    window.location.href = "mathejomb/index.html";
}

function math() {
    document.getElementById("mathans").style.display = "block"
}
function math2() {
    document.getElementById("mathans").style.display = "none"
}
