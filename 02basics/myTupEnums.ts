// const user: (string | number)[] = ["hc"]

// convert into a tupule
let tuser: [string, number, boolean];

// tupuple will restrict you to change the order of the varable, not just the types
tuser = ["hc", 131, true];

let rbg: [number, number, number] = [255, 123, 112];

type user = [number, string];

const newUser: user = [112, "example@google.com"];

newUser[1] = "hc.com";
// error
newUser.push(true);
export {};
