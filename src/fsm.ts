export type TransitionMap<S extends string, A extends string> = {
  [Q in S]: {
    [X in A]: S
  };
}

export interface FSMOptions<S extends string, A extends string> {
  states: S[];
  alphabet: A[];
  initialState: S;
  transitions: TransitionMap<S, A>
}

export class FSM<S extends string, A extends string> {
  private states: Set<S>
  private alphabet: Set<A>
  private initialState: S;
  private transitions: TransitionMap<S, A>;


  constructor(opts: FSMOptions<S, A>) {
    const { states, alphabet, initialState, transitions } = opts;
    this.states = new Set(states);
    this.alphabet = new Set(alphabet);
    this.initialState = initialState;
    this.transitions = transitions;

  }

  verifyCharSanity(char: string) {
    if (char !== '0' && char !== '1') {
      throw new Error(`Invalid character: ${char}`);
    }
  }

  transition(state: S, symbol: A): S {
    return this.transitions[state][symbol];
  }

  run(input: string): S {
    let cur: S = this.initialState;
    for (const char of input) {
      this.verifyCharSanity(char);
      cur = this.transition(cur, char as A);
    }
    return cur;
  }
}