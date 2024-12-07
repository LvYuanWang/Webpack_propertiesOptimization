/**
 * 根据传入的两个数字计算他们的和
 * @param {number} a 数字a
 * @param {number} b 数字b
 * @returns {number} 返回a和b的和
 */
const addNumber = (a, b) => {
  return (a * 1) + (b * 1);
}

/**
 * 根据传入的两个数字计算他们的差
 * @param {number} a 数字a
 * @param {number} b 数字b
 * @returns {number} 返回a和b的差
 */
const subtractNumber = (a, b) => {
  return a - b;
}

export default {
  addNumber,
  subtractNumber
}