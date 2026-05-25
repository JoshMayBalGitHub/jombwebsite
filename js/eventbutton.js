// TODO: Uh yeah there probably should be parameters in the first if-else statement if we want to expand to three, but for now, the code is fine. - jmb | 25 May 2026 | 09:26
// Date tracking logic
function getEventInfo() {
    const now = new Date();
    const month = now.getMonth(); // 0 = January, 8 = September, 11 = December

    // "Ber" months: September (8), October (9), November (10), December (11)
    const isBerMonth = month >= 8 && month <= 11;

    if (isBerMonth) {
        return {
            type: 'christmas',
            label: 'Christmas!!!',
            display: 'Christmas',
            url: 'christmas.html'
        };
    } else {
        return {
            type: 'school',
            label: 'School...',
            display: 'School',
            url: 'school.html'
        };
    }
}

// The button click function — updates dynamically, finally.
function eventbutton() {
    const event = getEventInfo();
    window.location.href = event.url;
}

// Update button text and preview on page load (crazy)
function updateButtonDisplay() {
    const event = getEventInfo();
    const buttonSpan = document.querySelector('#christmas-button .Buttons');
    const infoEl = document.getElementById('infoDisplay');

    if (buttonSpan) {
        buttonSpan.textContent = event.label;
    }
    if (infoEl) {
        const monthName = new Date().toLocaleString('default', { month: 'long' });
        infoEl.innerHTML = `Current month is: <span>${monthName}</span> so, <span>${event.display}.</span>`;
    }
}

// Attach event listener (gotta start doing better practices now, better than later)
document.getElementById('christmas-button').addEventListener('click', eventbutton);

// Run on page load (didn't know this existed honestly)
updateButtonDisplay();

// event button, change every time: school - default event
// christmas - december (and or vacation during the "ber" months: September, October, November and December)
// // Wait this can be done with a function that tracks the date right? I.. I am not doing that, this is for a page and button I don't use anymore. - jmb | 24 May 2026 | 11:46
// jokes on you jmb! i have decided to fix it now! finally, free from window.location.href()! - jmb | 25 May 2026 | 09:11 |
// there's also a brief explanation just in case I forgot how this works, because getEventInfo() checks live, the next click WILL change, it just might need a page load.
// defer vs async, defer waits for page to load, async executes with page loading, especially important distinction for this script | 9:46
// the previous 2 lines are by jmb | 25 May 2026 | 09:28 |