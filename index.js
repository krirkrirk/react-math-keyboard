const React = require("react");
const ReactDOM = require("react-dom");
require("./src/style.css");
require("mathquill4keyboard/build/mathquill.css");
const Example = require("./examples/example");
console.log(Example);
ReactDOM.render(<Example.Example />, document.getElementById("root"));
