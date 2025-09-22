# Modulo Three FSM in TypeScript

## Thought Process

I started with the challenge:

> *"I need to write a function in TypeScript that figures out the remainder when a binary number is divided by 3."*

A binary number is just a string of `"0"` and `"1"`.

For example:

- `"1101"` → 13 in decimal → `13 % 3 = 1`  
- `"1110"` → 14 in decimal → `14 % 3 = 2`  
- `"1111"` → 15 in decimal → `15 % 3 = 0`

So my function call:

```ts
modThree("1101") // should return 1
```

## First Approach (and why I didn’t use it)

The “obvious” solution would be:

```ts
return parseInt(input, 2) % 3;
```

That works, but it completely skips the point of the exercise.
The goal is to solve this using a Finite State Machine (FSM), which is a more interesting and extensible approach.

## FSM Approach

In this context, a finite state machine is like a little machine with three states:

S0 → remainder 0
S1 → remainder 1
S2 → remainder 2

As I read each bit (0 or 1), I move from one state to another.
The state I end up in at the end tells me the remainder.

Example WAlkthrough
```
Input: "1010"
Start at S0 (always start at S0).
Read 1 → move to S1.
Read 0 → move to S2.
Read 1 → stay in S2.
Read 0 → move to S1.
End at S1 → remainder is 1.

```

## Project Setup
```
npm install
npm run build
npm test
```

## Folder Structure

```
src/
  fsm.ts        # Generic FSM engine
  modThree.ts   # Mod-3 implementation using the FSM

tests/
  fsm.test.ts       # Unit tests for FSM engine
  modThree.test.ts  # Unit tests for modThree function
```

## Assumptions

Input is always a string of '0' and '1'.
Empty string input is treated as 0, so the result is 0.
Any other characters (like '2', 'a', etc.) will throw an error.

## Design Notes

I built a generic FSM class that can be configured with any states, alphabet, and transition table.
The modThree function is just one example of how to use this FSM.
Transitions are encoded as a lookup table (nested objects), which makes the logic a little bit more explicit and easier to test.
The FSM is fully reusable for other problems (e.g., modulo N, pattern recognition).

## Future Improvements

Extend the FSM to handle larger alphabets or multi-character symbols.
Add support for defining “accepting states” (useful in pattern-matching problems).
Provide CLI or API endpoints for demonstration.