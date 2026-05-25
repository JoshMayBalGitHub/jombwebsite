// the functons to fix all button functions (finally) - jmb | 24 May 2026 | 12:41 |
// There are around 3 to 4 variants of each function that basically adds '../' from root to the lowest subfolder. - jmb 25 May 2026 08:18

function gohome_final(pageBase) {
    window.location.href = pageBase + 'navigator.html';
}

function gohome_index(pageBase) {
    window.location.href = pageBase + "index.html";
}

function gohome_archive(pageBase) {
    window.location.href = pageBase + "SSDR-TMEA.html";
}

// The cries of a novice programmer:
// Kinda wish this is not what i have to do every darn time i have to link stuff* - fixed 21 May 2023
// Go to navigator.html, duh! But please this is not good can someone change this? - jmb 19 June 2023
// This is used to go back to navigator, archive edition! Yes, this is stupid, help me fix it then. - jmb 03 Feb 2026
// Rejoice jmb! For it has been fixed and made maintainable! It's still embedded in javascript, but... we're getting there. - jmb 25 May 2026 | 08:08
// HACK: Button code is embedded in javascript, ideally navigation shouldn't be so restricted to javascript, but I don't care enough to change it - jmb 25 May 2026 | 08:10