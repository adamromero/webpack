import './main.scss';
import $ from 'jquery'
import Foundation from 'foundation-sites';
import greet from './scripts/greeter.js';

let app = (function() {

	let init = function() {
		$("#main").text("I'm the entry point 000 -> " + greet());
	}

	return {
		init: init
	}

})();

$(document).foundation();

app.init();