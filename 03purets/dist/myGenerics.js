"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const score = [];
const name = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(true)
function identityFour(val) {
    return val;
}
// You can use generics with an interface
// identityFour<Bottle>({});
function getSearchProduct(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProduct = (products) => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
};
