// Function keylog will run onload
function keylog() {

    // Grab input element by its ID
    let inputEl = document.getElementById("inp");

    // Provide last saved item from localStorage
    document.getElementById("lastValue").innerHTML = localStorage.getItem('Value');

    // OnKeyPress event handler. Every time something is typed in the field, we will capture the key
    inputEl.onkeypress = function (event) {

        // Save current key to local storage
        saveToLocalStorage(String.fromCharCode(event.keyCode))

        // Converts unicode values into character. Provides typed output
        document.getElementById("res").innerHTML = String.fromCharCode(event.keyCode);
        document.getElementById("allValues").innerHTML = localStorage.getItem('Value');
    }
}

// Create function to save to local storage
function saveToLocalStorage(inputEl) {

    // If 'Value' does not exist
    if (localStorage.getItem('Value') === null) {
        // Set item based on first value
        localStorage.setItem('Value', inputEl);
    }
    else {
        // Get current local storage value
        let currentStorage = localStorage.getItem('Value');

        // set value as current local storage + input element
        localStorage.setItem('Value', currentStorage.toString() + inputEl)
    }
}

// Create function to clear all values
function clearStorage() {
    window.localStorage.clear();
}