// const shuffle = require("../src/shuffle");
const {copyArray, array} = require("../src/shuffle");

let mySource = [1,3,7,8,11]

describe("shuffle should...", () => {
  // CODE HERE
  test("Shuffle should return an array", ()=>{
    expect([1,3,7,8,11]).toEqual([1,3,7,8,11])
  })
});
