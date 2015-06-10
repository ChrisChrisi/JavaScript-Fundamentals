


function solve(args){
    var parseMatrix = function(matr){
        return matr.map(function(el){ return el.split(" ");});
    };

    var dimentions = args.shift().split(" ");
    dimentions[0] = parseInt(dimentions[0]);
    dimentions[1] = parseInt(dimentions[1]);
    var path = parseMatrix(args);
    var sum = 0;
    var r = 0;
    var c = 0;
    var visited = [];
    while( c > -1 && r > -1 && c < dimentions[1] && r < dimentions[0]){
        if(visited.indexOf("" + r + "_"+c) >-1){
            return "failed at ("+r+", "+c+")";
        }
        sum += Math.pow(2, r) + c;
        visited.push("" + r + "_"+c);
        switch(path[r][c]){
            case "dr":
                r+=1;
                c+=1;
                break;
            case "dl":
                r+=1;
                c-=1;
                break;
            case "ur":
                r-=1;
                c+=1;
                break;
            case "ul":
                r-=1;
                c-=1;
                break;
        }
    }
    return "successed with " + sum;
}

var args =[
    '3 5',
    'dr dl dr ur ul',
    'dr dr ul ur ur',
    'dl dr ur dl ur'
];

console.log(solve(args));