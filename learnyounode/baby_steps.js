//console.log(process.argv);
var len = process.argv.length;
var sum = 0;
//console.log(len.toString());
for (var i = 2; i < len; ++i){
    if (process.argv[i]){
        sum += +process.argv[i];
    }
}
console.log(sum.toString(10));
