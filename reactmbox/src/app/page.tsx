'use client'

import { incrementMins, state } from "@/state/timer";
import { autorun } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

export default function Home() {
  console.log('eder render')

  return (
    <>
      <Demo1 />
      <Demo2 seconds={state.seconds} />
    </>
  );
};


const Demo1 = observer(function () {
  console.log('eder render demo1')

  useEffect(() => {
    const dispose = autorun(() => {
      console.log('eder mins', state.mins);
    });

    incrementMins(state);

    return () => {
      dispose();
    }
  }, []);

  return (
    <div>
      timer: {state.seconds}
    </div>
  );
});

const Demo2 = observer(function (props: { seconds: number }) {
  console.log('eder render demo2')

  return (
    <div>
      timer: {props.seconds}
    </div>
  );
});