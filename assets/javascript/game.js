// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = function(event) {

	// Captures the key press, converts it to lowercase, and saves it to a variable.
	var letter = String.fromCharCode(event.keyCode).toLowerCase();

	// fill in the code :)
};



function random_character() {
    var chars = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
    return chars.substr( Math.floor(Math.random() * 52), 1);
}