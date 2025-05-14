// cautionary tales not bussiness
function detectType(val: number | string) {
  if (typeof val == "string") {
    return val.toLowerCase();
  }

  return val + 3;
}

// treat null with extra caution
function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide id");
    return;
  }
  id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdmin(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// calling method in type
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  // here we're saying pet is a fish if it's has a method of swim and it's not undefined
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "Fish food";
  } else {
    pet;
    return "Bird food";
  }
}

interface Circle {
  kind: "circle ";
  radius: number;
}

interface Square {
  kind: "Square";
  side: number;
}

interface rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

function getTrueShape(shape: Circle | Square | rectangle) {
  if (shape.kind === "circle ") {
    return Math.PI * shape.radius ** 2; //piR2
  }
  //return shape.side * shape.side;
}

function getArea(shape: Circle | Square | rectangle) {
  switch (shape.kind) {
    case "circle ":
      return Math.PI * shape.radius ** 2; //piR2

    case "Square":
      return shape.side * shape.side;

    case "rectangle":
      return shape.length * shape.width;
    default:
      const _defaltforshape: never = shape;
      return _defaltforshape;
  }
}
