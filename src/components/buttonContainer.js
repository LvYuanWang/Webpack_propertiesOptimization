import computerNumberSum from "../utils/getSumMethod.js";
import createElement from "../utils/createElement.js";

const elementObj = {
  buttonContainer: createElement("div", "buttonContainer"),
  addNumberBtn: createElement("button", "button", "addNumber"),
  subtractNumberBtn: createElement("button", "button", "subtractNumber"),
  resultContent: createElement("div", "resultContent", "result: 0"),
}

const computerNumber = (leftNumberValue, rightNumberValue, computerType = "add") => {
  elementObj.resultContent.innerText = `${computerType}: ${computerType === "subtract" ? computerNumberSum.subtractNumber(leftNumberValue, rightNumberValue) : computerNumberSum.addNumber(leftNumberValue, rightNumberValue)}`;
}

/**
 * @param {HTMLElement} elementContainer
 */
export default (elementContainer, leftNumber, rightNumber) => {
  elementContainer.appendChild(elementObj.buttonContainer);

  elementObj.buttonContainer.appendChild(elementObj.addNumberBtn);
  elementObj.addNumberBtn.addEventListener("click", () => computerNumber(leftNumber.value, rightNumber.value));

  elementObj.buttonContainer.appendChild(elementObj.subtractNumberBtn);
  elementObj.subtractNumberBtn.addEventListener("click", () => computerNumber(leftNumber.value, rightNumber.value, "subtract"));

  elementContainer.appendChild(elementObj.resultContent);
}