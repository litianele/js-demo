define(function(require,exports,module){
	var m2 = require('./M2');
	exports.run = function(){
		alert('M1');
		m2.runM2();
	}
});