"use strict";
//interface PostId = stringOrNumber --> It won't work!
//Functions
const add = (a, b) => {
    return a + b;
};
//Void Function
const logMsg = (message) => {
    console.log('Void');
};
const multiply = (a, b) => {
    return a * b;
};
//Optional parameters --> optional parameters have to be the lasts.
const addAll = (a, b, c) => {
    if (c) {
        return a + b + c;
    }
    return a + b;
};
//Never
const createError = (errMsg) => {
    throw new Error(errMsg);
}; // if you see the type never in your function, it it's not throwing an erro, it have something wrong!
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return 'Nunca vai entrar aqui';
};
