import _ from "lodash";
import $ from "jquery";
import common from "./common";
import "./styles/common.css";
import "./styles/index.css";

const obj = {
  "a": 1,
  "b": 2,
  "c": 3,
  "length": 3
}

const isArray = _.isArray(obj);
console.log(isArray);

$("body")[0].append($("<div></div>").css({ "css": "red", "font-size": "24px" }).html("Hello Webpack!")[0]);

console.log("Hello Webpack!");

console.log(common);