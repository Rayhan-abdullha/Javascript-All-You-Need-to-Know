let obj = {
    start: 1,
    end: 5,
    [Symbol.iterator]: function () {
        let currV = this.start;
        const self = this
        return {
            next() {
                return {
                    done: currV > self.end,
                    value: currV > self.end ? undefined : currV++
                }
            }
        }
    }
}

let itert = obj[Symbol.iterator]()
console.log(itert.next());
console.log(itert.next());
console.log(itert.next());
console.log(itert.next());
console.log(itert.next());
console.log(itert.next());