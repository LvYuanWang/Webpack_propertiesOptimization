import inputContainer from "../components/inputContainer.js";
import buttonContainer from "../components/buttonContainer.js";
import createElement from "../utils/createElement.js";

const elementObj = {
  container: createElement("div", "container"),
  input: createElement("input", "input"),
  computerNumberContainer: createElement("div", "computer-number-container"),
  leftNumber: createElement("input", "numberInput"),
  rightNumber: createElement("input", "numberInput"),
}

elementObj.container.appendChild(elementObj.input);

elementObj.container.appendChild(elementObj.computerNumberContainer);

// inputContainer
inputContainer(elementObj.computerNumberContainer, elementObj.leftNumber, elementObj.rightNumber);

// buttonContainer
buttonContainer(elementObj.computerNumberContainer, elementObj.leftNumber, elementObj.rightNumber);

document.body.appendChild(elementObj.container);