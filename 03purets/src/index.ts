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
  protected _coureCount = 1; // can only e accessed outside the class

  private readonly city: string = "Jaipour";
  private deleteToken() {
    console.log("Token deleted successfully!");
  }
  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {}

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
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
  isFamily: boolean = true;
  changeCourseCount() {
    this._coureCount = 4;
  }
}

const hitesh = new User("h@h.com", "email", "333333 ");
