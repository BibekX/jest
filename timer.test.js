const timer = require("./timer");

beforeAll(() => jest.useFakeTimers("legacy"));

test("testing timer", () => {
  expect(setTimeout).not.toHaveBeenCalled();
  video();
  expect(setTimeout).toHaveBeenCalled();
});
