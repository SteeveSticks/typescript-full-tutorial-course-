// // const user = {
// //   name: "Stephen",
// //   email: "test@test.com",
// //   isActive: true,
// // };

// // function createUser({ name: string, isPaid: boolean }) {}

// // // Werid behaivior
// // let newUser = { name: "stephen", isPaid: true, email: "test@test.com" };

// // createUser(newUser);

// // //bad syntax

// // // object inside object
// // function createCourse(): { name: string; price: number } {
// //   return { name: "reactjs", price: 3.99 };
// // }

// // typescipt interface

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User) {
//   console.log("The first user is", +user.name);
// }

// createUser({ name: "", email: "", isActive: true });

// export {};

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myUser: User = {
  _id: "123456789",
  name: "s",
  email: "h@h.com",
  isActive: false,
};

// has to be all lowercase
type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "h@gmail.com";
// won't work because we used _id as readonly not editable
myUser._id = "asa";
