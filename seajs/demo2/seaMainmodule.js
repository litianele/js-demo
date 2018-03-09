//sea主模块

define(function(require,exports,module){

    //require 加载子模块
    var seademomodule = require("./seademomodule.js");

    var red = document.getElementById("red");
    var blue = document.getElementById("blue");

    red.onclick = function(){
        seademomodule.setColorRedById("hiht");
    }

    blue.onclick = function(){
        seademomodule.setColorBlueById("hiht");
    }

});