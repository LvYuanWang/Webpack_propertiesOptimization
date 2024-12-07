import createElement from "../utils/createElement";

const elementObj = {
  inputContainer: createElement("div", "inputContainer"),
  leftNumberTitle: createElement("div", "numberTitle", "leftNumber: "),
  leftNumberContainer: createElement("div", "numberContainer"),
  rightNumberTitle: createElement("div", "numberTitle", "rightNumber: "),
  rightNumberContainer: createElement("div", "numberContainer")
}

/**
 * @param {HTMLElement} elementContainer
 */
export default (elementContainer, leftNumber, rightNumber) => {
  elementContainer.appendChild(elementObj.inputContainer);

  elementObj.leftNumberContainer.appendChild(elementObj.leftNumberTitle);
  leftNumber.setAttribute("type", "number");
  elementObj.leftNumberContainer.appendChild(leftNumber);
  elementObj.inputContainer.appendChild(elementObj.leftNumberContainer);

  elementObj.rightNumberContainer.appendChild(elementObj.rightNumberTitle);
  rightNumber.setAttribute("type", "number");
  elementObj.rightNumberContainer.appendChild(rightNumber);
  elementObj.inputContainer.appendChild(elementObj.rightNumberContainer);
}