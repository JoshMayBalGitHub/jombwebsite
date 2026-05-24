// the function below makes the manual-button timer work. 
function MouseClickTest() {
    var mct_OriginalValue = document.getElementById("mcbutton").innerHTML
    var mct_NewValue = 0;
    if (mct_OriginalValue > 0) {
        mct_NewValue = mct_OriginalValue - 1;
    }
    document.getElementById("mcbutton").innerHTML = mct_NewValue;
}

// the functons to fix all button functions (finally) - jmb | 24 May 2026 | 12:41 |

function gohome_final(pageBase) {
    window.location.href = pageBase + 'navigator.html';
}

function gohome_index(pageBase) {
    window.location.href = pageBase + "index.html";
}

function gohome_archive(pageBase) {
    window.location.href = pageBase + "SSDR-TMEA.html";
}

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
