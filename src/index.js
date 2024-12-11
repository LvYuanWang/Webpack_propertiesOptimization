const text = "world";

text === "world" ? console.log('world') : console.log('hello');

if (text !== "world") {
  console.log('hello');
}

const test = {
  a: 1,
  b: 2,
  // eslint-disable-next-line no-dupe-keys
  get a() {
    return this.a;
  }
}

console.log(test);