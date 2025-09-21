import { FSM } from "./fsm";

export function modThree(input: string): number {
  const fsm = new FSM();

  const finalState = fsm.run(input);
  switch (finalState) {
    case 'S0':
      return 0;
    case 'S1':
      return 1;
    default:
      return 2;
  }
}

// Example runs
console.log(modThree('1101')); // 1
console.log(modThree('1110')); // 2
console.log(modThree('1111')); // 0