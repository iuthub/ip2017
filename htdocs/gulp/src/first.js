var $ = require("jquery");

function myFirstFunction(name) {
    return "Hi, " + name + "!";
}

function hideSomeData(selector){
    $(selector).hide();
}

function showSomeData(selector) {
    $(selector).show();
}
