const sayHi = (name) => {
  console.log(`Hello ${name}`);
};
const doSomething1 = (name, cb) => {
  if (!cb) return;
  cb(name);
};

doSomething1("john", sayHi);

const sayHello = (name) => {
  console.log(`Hello ${name}`);
};
const doSomething = (name, cb) => {
  if (!cb) return;
  cb(name);
};

doSomething("john", sayHello("peter"));
