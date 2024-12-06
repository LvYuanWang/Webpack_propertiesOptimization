import _ from "lodash";

const obj = {
  "a": 1,
  "b": 2,
  "c": 3,
  "length": 3
}

const isArray = _.isArray(obj);
console.log(isArray);

console.log("Hello webpack cache");