var counter=function (arr) {
    return '一共有'+arr.length+"个元素在数组中"
}
var adder=function(a,b){
    return `您需要计算的两数之和为${a+b}`;
}
module.exports={
    counter:counter,
    adder:adder
};
