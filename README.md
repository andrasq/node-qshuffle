qhuffle
=======

Rearrange the order of the elements of the array.  Works in-place,
but also returns the input array.

So it turns out my approach is already known as the Fisher-Yates shuffle.
See `npm array-shuffle` and `shuffle-array`.

----

Sample usage:

        var shuffle = require('shuffle');

        var a = [1,2,3,4];
        shuffle(a);

        console.log(a);
        // outputs eg [ 4, 1, 3, 2 ]

----
