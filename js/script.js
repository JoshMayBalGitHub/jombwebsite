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