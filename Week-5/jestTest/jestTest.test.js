const { expect } = require('@jest/globals');
const mathOperations = require('./jestTest.js');

test ("Add 2 + 2 equal 4",() => {
    expect(mathOperations.sum(2,2)).toBe(4);
});
test ("Add 2 + string equal 2string",() => {
    expect(mathOperations.sum(2,"string")).toBe("2string");
});
test ("Add 2 + undefined equal NaN",() => {
    expect(mathOperations.sum(2)).toBe(NaN);
});
test ("Diff 2 - 2 equal 0",() => {
    expect(mathOperations.diff(2,2)).toBe(0);
});
test ("Diff 2 - string equal NaN",() => {
    expect(mathOperations.diff(2,"string")).toBe(NaN);
});
test ("Product String x 2 equal NaN",() => {
    expect(mathOperations.product("string",2)).toBe(NaN);
});