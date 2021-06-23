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

test("Can get name via getName()", () => {
    const testValue = "Frank";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Bob", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Frank", 1, "test@test.com", "Employee");
    expect(e.getRole()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Bob", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Bob", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Frank";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("Bob", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set name via constructor argument", () => {
    const name = "Frank";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});