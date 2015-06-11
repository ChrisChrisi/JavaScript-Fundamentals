


function solve(args){
    var parseMatrix = function(matr){
        return matr.map(function(el){ return el.split("");});
    };

    var dimentions = args.shift().split(" ");
    dimentions[0] = parseInt(dimentions[0]);
    dimentions[1] = parseInt(dimentions[1]);
    var path = parseMatrix(args);
    var sum = 0;
    var r = dimentions[0] -1;
    var c = dimentions[1] -1;
    var visited = [];
    while( c > -1 && r > -1 && c < dimentions[1] && r < dimentions[0]){
        if(visited.indexOf("" + r + "_"+c) >-1){
            return "Sadly the horse is doomed in "+visited.length+" jumps";
        }
        sum += Math.pow(2, r) - c;
        visited.push("" + r + "_"+c);
        switch(path[r][c]){
            case "1":
                r-=2;
                c+=1;
                break;
            case "2":
                r-=1;
                c+=2;
                break;
            case "3":
                r+=1;
                c+=2;
                break;
            case "4":
                r+=2;
                c+=1;
                break;
            case "5":
                r+=2;
                c-=1;
                break;
            case "6":
                r+=1;
                c-=2;
                break;
            case "7":
                r-=1;
                c-=2;
                break;
            case "8":
                r-=2;
                c-=1;
                break;
        }

    }
    return "Go go Horsy! Collected "+sum+" weeds";
}

args = [
    '3 5',
    '54361',
    '43326',
    '52188'
];

console.log(solve(args));