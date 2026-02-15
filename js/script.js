// Go to experiment.html
function experimentbutton() {
    window.location.href = "experiment.html";
}
// This function is used to make text not hide when the mouse is over it.
function Unhide1() {
    document.getElementById("hiddentext1").style.visibility = "visible";
}
// This function is used to make text hide when the mouse is not over it.
function Hide1() {
    document.getElementById("hiddentext1").style.visibility = "hidden";
}
/* event button, change every time:
school - default event
christmas - december (and or vacation during the "ber" months: September, October, November and December)
*/
function eventbutton() {
    window.location.href = "christmas.html";
}
// Go to intro.html, duh! But please this is not good can someone change this? - jmb 21 April 2023
function introbutton() {
    window.location.href = "intro.html";
}

// This is used to go back to home page.
function indexbutton() {
    window.location.href = "index.html";
}

// Go to navigator.html, duh! But please this is not good can someone change this? - jmb 19 June 2023
function navbutton() {
    window.location.href = "navigator.html";
}

// This is used to go back to navigator, archive edition! Yes, this is stupid, help me fix it then. - jmb 03 Feb 2026
function navbutton2() {
    window.location.href = "../../navigator.html";
}

// Used in FAQ hidden text
// This function is used to make text not hide when the user clicks on it.
function Unhide2() {
    const K = document.getElementById("hiddentext2");
    K.classList.toggle("hiddentext2-1");
}
/* Dropdown Toggle using Event Click */
function tablecontextdd() {
    document.getElementById("table-content-dd").classList.toggle("show-dd");
  }

