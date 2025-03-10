import { action, autorun, observable } from "mobx";

// clone a new object & return
const doubler = observable({
    value: 1
});

const increment = action(state => {
    state.value++
    state.value++
})

autorun(() => {
    console.log(doubler.value)
});

increment(doubler);
