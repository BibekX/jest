const video = require("./video");

const spy = jest.spyOn(video, "play");
let isPlaying = video.play("funny");

afterEach(() => spy.mockRestore());

// spy.mockImplementation(() => "true");
test("spy video", () => {
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith("funny");
});

test("play video", () => {
  expect(isPlaying).toEqual(true);
});
