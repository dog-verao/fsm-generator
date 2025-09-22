import { FSM, TransitionMap } from '../src/fsm';

type State = 'A' | 'B';
type Symbol = 'x' | 'y';

const transitions: TransitionMap<State, Symbol> = {
  A: { x: 'B', y: 'A' },
  B: { x: 'A', y: 'B' },
};


describe('FSM generic engine', () => {
  const fsm = new FSM<State, Symbol>({
    states: ['A', 'B'],
    alphabet: ['x', 'y'],
    initialState: 'A',
    transitions,
  });

  test('stays in same state with repeated y', () => {
    expect(fsm.run('yyy')).toBe('A');
  });

  test('switches between states with x', () => {
    expect(fsm.run('x')).toBe('B');
    expect(fsm.run('xx')).toBe('A');
  });

  test('throws error on invalid input', () => {
    expect(() => fsm.run('z')).toThrow();
  });

  test('empty input returns initial state', () => {
    expect(fsm.run('')).toBe('A');
  });
});