//子模块

//调用define函数定义一个模块
define(function(require,exports,module){

    //子模块提供函数
    function setColorRedById(id){
        document.getElementById(id).style.color = "red";
    }
    function setColorBlueById(id){
        document.getElementById(id).style.color = "blue";
    }

    //暴露出去的是个对象，将要暴露的函数包装进对象中
    module.exports = {
        setColorRedById:setColorRedById,
        setColorBlueById:setColorBlueById
    };

});