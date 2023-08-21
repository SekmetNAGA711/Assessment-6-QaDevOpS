const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test("Shuffle should return an array", ()=>{
   expect(shuffle()).tobe()
  })
  test("Shuffle should return same length of an array", ()=>{
    expect(shuffle([1, 2, 3])).toEqual([1, 2, 3])
  })
});
