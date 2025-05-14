interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail : ()  => string
  startTrial(): string;
  getCoupon(coupoonName: string, value: number): number;
}

// can be called types
interface User {
  githubToken: string;
}

// inheritance
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const hitesh: Admin = {
  dbId: 123456,
  email: "h@h.com",
  userId: 2211,
  role: "admin",
  githubToken: "github",
  startTrial: () => {
    return "trial stated ";
  },
  getCoupon: (name: "sting sting", off: 10) => {
    return 20;
  },
};

hitesh.email = "test@test.com";
// impossible because of the readonly in dbId
// hitesh.dbId= 223

export {};
