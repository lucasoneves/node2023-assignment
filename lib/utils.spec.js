const { getNewUser, mapObjectToArray } = require("./utils");
describe("mapObjectToArray()", () => {
  test("maps values to array using callback", () => {
    const result = mapObjectToArray({ age: 30, height: 65 }, (key, val) => {
      return val + 10
    });
    expect(result).toEqual([40, 75])
  });

  test('callback gets called', () => {
    const mockCb = jest.fn()
    const result = mapObjectToArray({ age: 30, height: 65 }, mockCb)
    expect(mockCb.mock.calls.length).toBe(2)
  })

});
