import m = require("./manager");
import b = require("./b");
module a {
  function init() {
    console.log("1: " + m.data);
    m.data = "hoge";
    b.changeDataValue();
    console.log("4: " + m.data);
  }
  init();
}
export = a;