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
chirstmas - december
*/
function eventbutton() {
    window.location.href = "school.html";
}
// This is used to go back to home page.
function indexbutton() {
    window.location.href = "index.html";
}
// Used in FAQ hidden text
// This function is used to make text not hide when the user clicks on it.
function Unhide2() {
    const K = document.getElementById("hiddentext2");
    K.classList.toggle("hiddentext2-1");
}

