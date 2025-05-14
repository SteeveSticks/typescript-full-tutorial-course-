const score: Array<number> = [];
const name: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree(true)

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

// You can use generics with an interface
// identityFour<Bottle>({});

function getSearchProduct<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProduct = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 4;
  return products[myIndex];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFuNction<T, U extends Database>(
  valueOne: T,
  valueTwo: U
): object {
  return {
    valueOne,
    valueTwo,
  };
}

// anotherFuNction("string", {
//   connection: "genric",
//   password: "1233",
//   username: "string",
// });

interface Quiz {
  name: string;
  type: string;
}

const exam: Quiz = {
  name: "ade",
  type: "common",
};

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(products: T) {
    this.cart.push(products);
  }
}
export {};
