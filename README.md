qshuffle
========

Rearrange the order of the elements in the array.  Works in-place and
modifies the input array, but also returns it.

So it turns out my approach is already known as the Fisher-Yates shuffle.
See `npm array-shuffle` and `shuffle-array`.

----

Sample usage:

        var shuffle = require('qshuffle');

        var a = [1,2,3,4];
        shuffle(a);

        console.log(a);
        // outputs eg [ 4, 1, 3, 2 ]

----
