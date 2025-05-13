function addTwo(num: number): number {
  return num + 2;
  // return "Hello world";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(
  name: string,
  email: string,
  password: number,
  isPaid: boolean
) {}

let loginUser = (name: string, email: string, isPaid: boolean = true) => {};

let myValue = addTwo(5);
getUpper("4");
signUpUser("stephen", "test@test.com", 3, true);
loginUser("h", "h@h.com");

// function getValue(myVal: number): Boolean{
//   if (myVal > 10) {
//     return true;
//   }
//   return "200 OK"
// }

const getHello = (s: string): string => {
  return "";
};

// const heros = ["thor", "siperman", "ironman"]
const heros = [1, 2, 3];

heros.map((hero): string => {
  return `heros is ${hero}`;
});

// viod means that the function will not have any calling will not return anything
function consoleError(errMsg: string): void {
  console.log(errMsg);
}

function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

export {};
