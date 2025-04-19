let display = document.getElementById("display");
let darkMode = false;

function appendValue(value) {
    display.value += value;
}

function appendFunction(func) {
    try {
        display.value = eval(func + "(" + display.value + ")");
    } catch (e) {
        alert("Invalid operation");
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert("Invalid operation");
    }
}

function clearDisplay() {
    display.value = "";
}

function toggleTheme() {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode");
}

function backspace() {
    display.value = display.value.slice(0, -1);
}