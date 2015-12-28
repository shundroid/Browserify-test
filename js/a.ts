import b = require("./b");
module a {
  export var v = "fuga";
  export function init() {
    console.log("hello, this is A! b.v = " + b.v);
  }
  init();
}
export = a;