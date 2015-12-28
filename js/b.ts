import a = require("./a");
module b {
  export var v = "hoge";
  export function init() {
    console.log("Aloha! I'm B! a.v = " + a.v);
  }
  init();
}
export = b;