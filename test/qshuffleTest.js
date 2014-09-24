// nodeunit test
// Copyright (C) 2014 Andras Radics
// Licensed under the Apache License, Version 2.0

var assert = require('assert');
var shuffle = require('../index.js');

function uniqid() {
    return Math.floor(Math.random() * 0x100000000).toString(16);
}

module.exports = {
    testShouldReturnInputArray: function(test) {
        var a = [1,2,3,4];
        assert(shuffle(a) === a, "not same array");
        test.done();
    },

    testShouldShuffleOneItem: function(test) {
        var id = uniqid();
        var a = [id];
        assert(shuffle(a)[0] === id);
        test.done();
    },

    testShouldShuffleTwoItems: function(test) {
        var id1 = uniqid(), id2 = uniqid();
        var a = [id1, id2];
        assert(shuffle(a).length === 2);
        test.done();
    },

    testShouldReturnSameItemsInChangedOrder: function(test) {
        var i, j, a = [];
        for (i=0; i<100; i++) a.push(i);
        shuffle(a);

        var ret = [];
        for (i in a) ret[a[i]] = a[i];
        assert(ret.length === 100);
        assert(ret[0] === 0 && ret[50] === 50 && ret[99] === 99);

        // note: there is a (1 / 100!) chance that the shuffle will not change the order
        for (i=0; i<100; i++) if (a[i] !== i) return test.done();
        assert(false);
        test.done();
    }
}
