const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("test_api", {
  add(a, b) {
    return a + b;
  },
});
