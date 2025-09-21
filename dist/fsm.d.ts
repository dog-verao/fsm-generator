type State = 'S0' | 'S1' | 'S2';
type Symbol = '0' | '1';
export declare class FSM {
    states: State[];
    alphabet: Symbol[];
    readonly initialState: State;
    currentState: State;
    transitions: Record<State, Record<Symbol, State>>;
    errorHandler(char: string): void;
    transition(symbol: Symbol): void;
    run(input: string): State;
}
export {};
//# sourceMappingURL=fsm.d.ts.map