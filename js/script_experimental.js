// the function below makes the manual-button timer work. 
function MouseClickTest() {
    var mct_OriginalValue = document.getElementById("mcbutton").innerHTML
    var mct_NewValue = 0;
    if (mct_OriginalValue > 0) {
        mct_NewValue = mct_OriginalValue - 1;
    }
    document.getElementById("mcbutton").innerHTML = mct_NewValue;
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
function chapix() {
    document.getElementById("js-ddcont").classList.toggle("show-ddcont");
}
