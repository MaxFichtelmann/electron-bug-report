const { expect } = chai;

describe("a basic test suite", function () {
  it("a basic test case", function () {
    expect(window.test_api.add(1, 2)).to.equal(3);
  });
});
