const a = 2;
const obj = {
  name: "webpack",
  version: "5.0.0"
}

const { name, version } = obj;

function testMethod() {
  (() => {
    console.log(this);
  })()
}

testMethod();