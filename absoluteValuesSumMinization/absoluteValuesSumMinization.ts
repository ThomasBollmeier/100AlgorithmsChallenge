function absoluteValuesSumMinimization(a: number[]): number {

    const half = Math.ceil(a.reduce((s, i) => s + i, 0) / 2);
    
    let sum = 0;
    let median = null;

    for (let value of a) {
        if (sum + value <= half) {
            sum += value;
            median = value;
        } else {
            break;
        }
    }

    return median;    
}

//console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
