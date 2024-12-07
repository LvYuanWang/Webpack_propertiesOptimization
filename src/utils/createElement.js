/**
 * 根据元素名称和类名创建元素
 * @param {Element} createElementName 元素名称
 * @param {String} elementClassName 元素类名
 * @returns {Element} 返回创建的元素
 */
const createElement = (createElementName, elementClassName, elementContent = "") => {
  const element = document.createElement(createElementName);
  element.className = elementClassName;
  element.innerText = elementContent;
  return element;
}

export default createElement;