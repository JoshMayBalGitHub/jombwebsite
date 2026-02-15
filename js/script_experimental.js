// the function below makes the manual-button timer work. 
function MouseClickTest() {
    var mct_OriginalValue = document.getElementById("mcbutton").innerHTML
    var mct_NewValue = 0;
    if (mct_OriginalValue > 0) {
        mct_NewValue = mct_OriginalValue - 1;
    }
    document.getElementById("mcbutton").innerHTML = mct_NewValue;
}
function BPJ() {
    window.location.href = "index.html";
}
// TO INDEX BUTTONS TODO: pls fix | idk how the hell to do that, just ask anyone else??
function gohome() {
    window.location.href = "../index.html";
}

function gohome_more() {
    window.location.href = "../../navigator.html";
}

function gohome_archive() {
    window.location.href = "../SSDR-TMEA.html";
}

// temp fix??
function archivenav() {
    window.location.href = "SSDR-TMEA.html";
}


function gohome_less() {
    window.location.href = "../navigator.html";
}
// TO INDEX BUTTONS todo: pls fix

/*Kinda wish this is not what i have to do every darn time i have to link stuff* - fixed 21 May 2023*/
function Unhide1() {
    document.getElementById("HM").style.display = "block"
}

function math() {
    document.getElementById("mathans").style.display = "block"
}
function math2() {
    document.getElementById("mathans").style.display = "none"
}
function chapix() {
    document.getElementById("js-ddcont").classList.toggle("show-ddcont");
}
