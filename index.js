const isArmstrongNumber = (num) => {
    return num.toString().split('').reduce((acc,n,i,s) => {return acc+=Math.pow(Number(n),s.length)},0) === num
}
console.log(OneLine(153))