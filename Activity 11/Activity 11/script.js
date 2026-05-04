// FOR LOOP logic
function runForLoop() {
    const num = parseInt(document.getElementById('forNum').value);
    const text = document.getElementById('forText').value;
    const display = document.getElementById('forDisplay');
    display.innerHTML = "";
 
    for (let i = 1; i <= num; i++) {
        display.innerHTML += i + ". " + text + "<br>";
    }
}
 
// WHILE LOOP logic
function runWhileLoop() {
    const num = parseInt(document.getElementById('whileNum').value);
    const text = document.getElementById('whileText').value;
    const display = document.getElementById('whileDisplay');
    display.innerHTML = "";
 
    let i = 1;
    while (i <= num) {
        display.innerHTML += i + ". " + text + "<br>";
        i++;
    }
}
 
// DO-WHILE LOOP logic
function runDoWhileLoop() {
    const num = parseInt(document.getElementById('doWhileNum').value);
    const text = document.getElementById('doWhileText').value;
    const display = document.getElementById('doWhileDisplay');
    display.innerHTML = "";
 
    let i = 1;
    if (num > 0) {
        do {
            display.innerHTML += i + ". " + text + "<br>";
            i++;
        } while (i <= num);
    }
}
 
// Clear Function
function clearArea(displayId, inputIds) {
    document.getElementById(displayId).innerHTML = "";
    inputIds.forEach(id => {
        document.getElementById(id).value = "";
    });
}