import { action, observable } from 'mobx';

const state = observable({
    seconds: 0,
    mins: 0
});

type IState = typeof state;

const incrementSeconds = action((state: IState) => {
    state.seconds += 1;
});

const incrementMins = action((state: IState) => {
    state.mins += 1;
});

export { incrementMins, incrementSeconds, state };

