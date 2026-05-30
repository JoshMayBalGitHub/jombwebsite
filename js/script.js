// This function is used to make text not hide when the mouse is over it.
function Unhide1() {
    document.getElementById("hiddentext1").style.visibility = "visible";
}
// This function is used to make text hide when the mouse is not over it.
function Hide1() {
    document.getElementById("hiddentext1").style.visibility = "hidden";
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

