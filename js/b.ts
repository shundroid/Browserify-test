import m = require("./manager");
module b {
  export function changeDataValue() {
    console.log("2: " + m.data);
    m.data = "fuga";
    console.log("3: " + m.data);
  }
}
export = b;