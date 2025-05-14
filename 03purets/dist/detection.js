"use strict";
// cautionary tales not bussiness
function detectType(val) {
    if (typeof val == "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
// treat null with extra caution
function provideId(id) {
    if (!id) {
        console.log("Please provide id");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
function isAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    // here we're saying pet is a fish if it's has a method of swim and it's not undefined
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish food";
    }
    else {
        pet;
        return "Bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle ") {
        return Math.PI * shape.radius ** 2; //piR2
    }
    //return shape.side * shape.side;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle ":
            return Math.PI * shape.radius ** 2; //piR2
        case "Square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaltforshape = shape;
            return _defaltforshape;
    }
}
