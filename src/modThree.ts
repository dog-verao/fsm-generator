import { FSM, TransitionMap } from './fsm';

type MState = 'S0' | 'S1' | 'S2';
type MSymbol = '0' | '1';

const transitions: TransitionMap<MState, MSymbol> = {
  S0: { '0': 'S0', '1': 'S1' },
  S1: { '0': 'S2', '1': 'S0' },
  S2: { '0': 'S1', '1': 'S2' },
};

const mod3FSM = new FSM<MState, MSymbol>({
  states: ['S0', 'S1', 'S2'],
  alphabet: ['0', '1'],
  initialState: 'S0',
  transitions,
});

export function modThree(input: string): number {
  const finalState = mod3FSM.run(input);
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