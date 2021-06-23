const Manager = require("../Lib/manager");
const Employee = require("../Lib/employee");

test("Can set office number via constructor", () => {
    const testValue = 100;
    const e = new Manager("Bob", 1, "test@test.com", testValue, "Manager");
    expect(e.officeNumber).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Bob", 1, "test@test.com", testValue, "Manager");
    expect(e.getOfficeNumber()).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Bob", 1, "test@test.com", 100, "Manager");
    expect(e.getRole()).toBe(testValue);
});