define(function(require,exports,module){
	var m1 = require('./M1');
	exports.init = function(){
		m1.run();
	}
});
//define(id?,dependencies?,factory);
/*
require 函数用来访问其他模块提供的API;
exports 用于向外提供模块的API;
define(function(require,exports,module){
	
});
*/