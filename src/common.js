export const mathNum = Math.random();

import { compact } from "lodash-es";

export function getArrNumber(arr = []) {
  console.log("getArrNumber");
  return compact(arr);
}