import _ from 'lodash';
import $ from 'jquery';
import common from "./common";
import "./styles/common.css";
import "./styles/other.css";

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = _.concat(arr1, arr2);
console.log(arr3);

const styleObj = {
  "width": "200px",
  "height": "200px",
  "background": "#ccc",
  "color": "#fff",
  "font-weight": "bold",
  "font-size": "24px",
  "text-align": "center",
  "line-height": "200px",
  "border-radius": "50%",
  "margin": "0 auto",
  "box-shadow": "0 0 10px #000",
  "cursor": "pointer",
  "transition": "all 0.5s"
}

const mouseenter = function () {
  $(this).css({ 'color': 'red', 'background': 'yellow' });
}

const mouseleave = function () {
  $(this).css({ "color": "blue", "background": "green" });
}

$("body")[0].append($('<div></div>').css(styleObj).html('Hover me!').hover(mouseenter, mouseleave)[0]);

console.log(common);