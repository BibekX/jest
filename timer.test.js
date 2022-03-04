const timer = require("./timer");

beforeEach(() => jest.useFakeTimers("legacy"));

test("testing timer", () => {
  expect(setTimeout).not.toHaveBeenCalled();
  video();
  expect(setTimeout).toHaveBeenCalled();
});
