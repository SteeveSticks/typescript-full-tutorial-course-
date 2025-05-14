// classes in typescript
class User {
  email: string;
  name: string;
  readonly city: string = "Jaipour";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const hitesh = new User("h@h.com", "email");
// hitesh.city = "dlhi";
