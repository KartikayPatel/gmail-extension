const { calcTotalTip, studentNumber } = require("./content");

test("total of student", () => {
  const boys = studentNumber(25, 16);
  expect(boys).toBe(66);
});

test("should calculate total tip", () => {
  const total = calcTotalTip(10, 0.3);
  expect(total).toBe(13);
});
