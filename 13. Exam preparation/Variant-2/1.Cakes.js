function solve(params) {
    var s = +params[0],
        c1 = params[1],
        c2 = params[2],
        c3 = params[3],
        i, j, k, sum;
    var answer = 0;
    for(i = 0; i * c1 <= s; i+= 1){
        for(j = 0; j * c2 <= s; j+= 1){
            for(k = 0; k * c1 <= s; k+= 1){
                sum = i* c1 + j*c2 + k*c3;
                if(sum > answer && sum <= s){
                    answer = sum;
                }
            }
        }
    }
    console.log(answer);
}