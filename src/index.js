// 不推荐: 这样导入会导致tree shaking将所有的方法都打包进来, 并且不能更改方法名
// import myMethods from "./myMethods";

// console.log(myMethods);
// myMethods.sub = "computer sub number";  // 报错, 不能更改方法名


// 推荐: 这样导入可以更改方法名, 并且tree shaking只会打包使用到的方法
import "./index.css";
import { add } from "./myMethods";
// 因为lodash使用commonjs导出的方式, 所以不能使用tree shaking, 但是我们能使用lodash-es来解决这个问题
// import { chunk } from "lodash";
import { chunk } from "lodash-es";
import { mathNum } from "./common";

const addResult = add(1, 2);
const arrChunk = chunk([1, 2, 3, 4, 5], 2);
console.log(addResult);
console.log(arrChunk);
console.log(mathNum);

const title = document.createElement("div");
title.innerHTML = "hello world";
title.className = "blue";
document.body.appendChild(title);