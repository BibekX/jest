const axios = require("axios").default;

class User {
  async getAll() {
    const res = await axios.get("/users");
    return res.data;
  }
}

jest.mock("axios");

test("fetch user", () => {
  const users = [{ user: "Bob" }, { user: "Randy" }];
  const response = { data: users };
  axios.get.mockImplementation(() => Promise.resolve(response));
  return new User().getAll().then((data) => {
    console.log(data);
    expect(data).toEqual(users);
  });
});
