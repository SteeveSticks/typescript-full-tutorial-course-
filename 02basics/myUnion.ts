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

function getDbId(id: number | string) {
  // making api calls
  console.log(`DB id is: ${id}`);
}

getDbId(3);
getDbId("string");
