const Intern = require("../Lib/intern");

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Bob", 1, "test@test.com", "Harvard", "Intern");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "HU";
    const e = new Intern("Bob", 1, "test@test.com", testValue, "Intern");
    expect(e.getSchool()).toBe(testValue);
});

test("Can set school via constructor", () => {
    const testValue = "HU";
    const e = new Intern("Bob", 1, "test@test.com", testValue, "Intern");
    expect(e.school).toBe(testValue);
});