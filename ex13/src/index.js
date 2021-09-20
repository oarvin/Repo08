function randomRangeNumber(minNumber, maxNumber) {
    
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber

}


console.log(randomRangeNumber(10, 20));

module.exports = randomRangeNumber;