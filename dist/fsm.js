"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FSM = void 0;
class FSM {
    constructor() {
        this.states = ['S0', 'S1', 'S2'];
        this.alphabet = ['0', '1'];
        this.initialState = 'S0';
        this.currentState = 'S0';
        this.transitions = {
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
        };
    }
    errorHandler(char) {
        if (char !== '0' && char !== '1') {
            throw new Error;
        }
    }
    transition(symbol) {
        this.currentState = this.transitions[this.currentState][symbol];
    }
    run(input) {
        this.currentState = this.initialState;
        for (const char of input) {
            this.errorHandler(char);
            this.transition(char);
        }
        return this.currentState;
    }
}
exports.FSM = FSM;
//# sourceMappingURL=fsm.js.map