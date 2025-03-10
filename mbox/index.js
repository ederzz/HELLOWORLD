import { action, autorun, computed, makeAutoObservable, makeObservable, observable } from "mobx";

class Doubler {
    value

    constructor(value) {
        makeObservable(this, {
            value: observable,
            double: computed,
            increment: action,
        })
        this.value = value
    }

    get double() {
        return this.value * 2
    }

    increment() {
        this.value++
    }
}

const doubler = new Doubler(1)

autorun(() => {
    console.log(doubler.double)
});

doubler.increment()


class Doubler2 {
    value

    constructor(value) {
        makeAutoObservable(this);
        this.value = value
    }

    get double() {
        return this.value * 2
    }

    increment() {
        this.value++
    }
}

const doubler2 = new Doubler2(5)

autorun(() => {
    console.log(doubler2.double)
});

doubler2.increment()
doubler2.increment()