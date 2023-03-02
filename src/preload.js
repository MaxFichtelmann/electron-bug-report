const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("test_api", {
  iterate(iterable) {
    const values = [];
    for (const item of iterable) {
      values.push(item);
    }
    return values;
  },
  sayHello() {
    console.log("Hello");
  },
  async sayBye() {
    console.log("wait a moment");
    await new Promise((resolve) => setTimeout(resolve, 300));
    console.log("Bye");
  },
});
