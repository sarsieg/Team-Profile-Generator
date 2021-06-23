const Employee = require("../Lib/employee");

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Bob", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("Can get Id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Bob", testValue);
    expect(e.getId()).toBe(testValue);
});