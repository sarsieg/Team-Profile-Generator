class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.title = title;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
    getRole() {
        return this.title;
    }
}

module.exports = Employee;