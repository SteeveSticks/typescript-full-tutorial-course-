"use strict";
// classes in typescript
// class User {
//   public email: string;
//   name: string;
//   private readonly city: string = "Jaipour";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    deleteToken() {
        console.log("Token deleted successfully!");
    }
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._coureCount = 1; // can only e accessed outside the class
        this.city = "Jaipour";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._coureCount;
    }
    // no retur type
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._coureCount = courseNum;
    }
}
// inheritance
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._coureCount = 4;
    }
}
const hitesh = new User("h@h.com", "email", "333333 ");
