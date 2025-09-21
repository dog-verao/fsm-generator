type State = 'S0' | 'S1' | 'S2';
type Symbol = '0' | '1';

export class FSM {
  states: State[] = ['S0', 'S1', 'S2'];
  alphabet: Symbol[] = ['0', '1'];
  readonly initialState: State = 'S0';
  currentState: State = 'S0';

  transitions: Record<State, Record<Symbol, State>> = {
    S0: {
      '0': 'S0',
      '1': 'S1'
    },
    S1: {
      '0': 'S2',
      '1': 'S0'
    },
    S2: {
      '0': 'S1',
      '1': 'S2'
    }
  }

  errorHandler(char: string) {
    if (char !== '0' && char !== '1') {
      throw new Error
    }
  }

  transition(symbol: Symbol) {
    this.currentState = this.transitions[this.currentState][symbol];
  }

  run(input: string): State {
    this.currentState = this.initialState;
    for (const char of input) {
      this.errorHandler(char);
      this.transition(char as Symbol);
    }
    return this.currentState;
  }
}