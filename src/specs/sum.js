// import sum from ;
const {sum} = require("../sum.js")

describe("sum function", () => {
  it("sums up two integers", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
