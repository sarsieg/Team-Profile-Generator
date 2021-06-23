const Engineer = require("../Lib/engineer");

test("Can set GitHub account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Bob", 1, "test@test.com", testValue, "Engineer");
    expect(e.github).toBe(testValue);
});

test("Can get GibHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Bob", 1, "test@test.com", testValue, "Engineer");
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Bob", 1, "test@test.com", "GitHubUser", "Engineer");
    expect(e.getRole()).toBe(testValue);
});