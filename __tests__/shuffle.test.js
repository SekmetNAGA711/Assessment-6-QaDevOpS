const shuffle = require("../src/shuffle");

describe("Shuffle should...", ()=>{
  test('shuffle shuffles the array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(inputArray.slice());
  
    // Check if the length remains the same
    expect(shuffledArray.length).toBe(inputArray.length);
  
    // Check if the content is different from the input array
    expect(shuffledArray).not.toEqual(inputArray);
  
    // Check if the shuffled array contains the same elements as the input array
    expect(shuffledArray.sort()).toEqual(inputArray.sort());
  });
  
  test('shuffleArray handles empty arrays', () => {
    const emptyArray = [];
    const shuffledArray = shuffle(emptyArray.slice());
  
    expect(shuffledArray.length).toBe(0);
    expect(shuffledArray).toEqual([]);
  });
});
