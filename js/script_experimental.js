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

/* i have to keep up the local copy with the other 
   repo instead of submodule, brilliant suffering. */
function TEST() {
    window.location.href = "mathejomb/index.html";
}

function TEST2() {
    window.location.href = "https://joshmaybaljomb.tk/";
}

function Unhide1() {
    document.getElementById("HM").style.display = "block"
}

function math() {
    document.getElementById("mathans").style.display = "block"
}
function math2() {
    document.getElementById("mathans").style.display = "none"
}
