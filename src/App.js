"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
function App() {
    function calc(a, b) {
        return a + b;
    }
    var list = ["Willow", "Bobby", "Ralphi"];
    for (var person = 0; person < list.length; person++) {
        console.log("".concat(list[person]));
    }
    var result = calc(20, 40);
    return <div>{result}</div>;
}
exports.default = App;
