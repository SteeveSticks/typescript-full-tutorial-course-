let score: number | string = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hitesh: User | Admin = { name: "stephen", id: 333 };

hitesh = { username: "hc", id: 220 };

// function getDbId(id: number | string) {
//   // making api calls
//   console.log(`DB id is: ${id}`);
// }

getDbId(3);
getDbId("string");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

//arrays
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
// all number all string wrap up in a parenthesis to use both
const data3: (string | number | boolean)[] = [1, 2, "3", true];

// very strict
let setAllotment: "aisle" | "middle" | "window";

setAllotment = "aisle";
setAllotment = "crew";
