function createMultiplier() {
    function multiplyByFive(args) {
        return args * 5
    }
    return multiplyByFive;
}

const multiplyByFive = createMultiplier()
console.log(multiplyByFive(5))