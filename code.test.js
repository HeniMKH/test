
 const stringToCharArray = require("./code");

 
 
 test("stringToCharArray abc -> ['a', 'b', 'c', 'd']", () => {

  expect(stringToCharArray("abcd")).toStrictEqual(["a", "b", "c", "d"]);
});
