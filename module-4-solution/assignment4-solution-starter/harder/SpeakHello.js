/*
This function prints out he user defined speakWord concatenated with the passed in name.
*/

(function (window) {
	var helloSpeaker = {};
	var speakWord = "Hello";
	helloSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
	}
	window.helloSpeaker = helloSpeaker;
})(window);