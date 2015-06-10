"use strict";
/**
  Cars with 4 wheels
  Trucks with 10 wheels
  Trikes with 3 wheels
 */

function solve(params) {
    var s = +params[0];
    var result = [],
        i, j, k;
    for (i = 0; i * 3 <= s; i++) {

        for (j = 0; j * 4 <= s; j++) {

            for (k = 0; k * 10 <= s; k++) {

                if (i * 3 + j*4+ k*10 === s) {
                    result.push('i' + i + '_j' + j +  '_k' + k);
                }

            }
        }

    }
    return result.length;
}
