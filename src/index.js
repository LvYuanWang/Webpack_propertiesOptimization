const button = document.createElement('button');
button.innerText = "lodash chunk arr";
button.onclick = async () => {
  // 异步chunk加载
  // 先打包出lodash-es的chunk文件, 然后在点击按钮时异步加载chunk文件
  const { chunk } = await import(/* webpackChunkName: "lodash" */ 'lodash-es');
  console.log(chunk(['a', 'b', 'c', 'd', 'e'], 2));
}
document.body.appendChild(button);