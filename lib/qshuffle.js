/**
 * Shuffle the elements of the array.
 * Modifies the array in-place and returns the shuffled array.
 *
 * 2014-09-01 - AR.
 *
 * Copyright (C) 2014 Andras Radics
 * Licensed under the Apache License, Version 2.0
 *
 * Looks like I reinvented the Fisher-Yates shuffle.  Ok then.
 * See npm array-shuffle and shuffle-array.
 */

module.exports = function shuffle( arr ) {
    if (!Array.isArray(arr)) throw new Error("shuffle takes an array argument");

    // shuffle by swapping into the next position i some remaining element from position idx
    // walk positions from back to front for simpler, faster arithmetic
    for (var i = arr.length; i > 0; ) {
        var idx = Math.floor(Math.random() * i);
        --i;
        var t = arr[i];
        arr[i] = arr[idx];
        arr[idx] = t;
    }

    // return the in-place modified array
    return arr;
}


// note: Math.floor() is faster than >>> 0.
// note: faster to always swap(x,x) than to test-else-swap
// note: faster to use a global function (23%) than an internal function
//       still 10% faster even if having to pass a third call param
//       inlining the swap is 3% faster still
// note: code speed can be affected by comment lines in the code
// note: virtually no speedup (0.3%) from inlining the global swap() function
// note: faster to pre-decrement after the idx expression
