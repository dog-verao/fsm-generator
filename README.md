Thought process:

"I need to write a function in Typescript that figures out the remainder when a binary number is divided by 3".

Assumptions:
1. A binary number is just a string of "1" and "0".
For example:
"1101" = 13 in decimal -> Remainder of 13 / 3 is 1.
"1110" = 14 in decimal -> Remainder is 2.
"1111" = 15 in decimal -> Remainder is 0.

So, my function modThree("1101") should return 1.

First Approach:

"Normally, the easiest way to do that would be:"

reutrn parseInt(input, 2) % 3

"But that's too easy, of course we don't want that.
Instead, we'll use a Finite State Machine

Assumptions:

Finite State Machine in this context is:
Imagine we have a little machine with three states:
S0 -> Remainder 0
S1 -> Remainder 1
S2 -> remainder 2

As we read each bit (0 or 1) we move from one state to another and the state that we end up at the very end tells me the answer (the remainder).
For example:

Input "1010"
1. Start at S0 (always starts at S0) - right to left
2. Read 1 -> move to S1.
3. Read 0 -> move to S2
4. Read 1 -> move to S2
5. REad 0 -> move to S1
6. No more digits. Ends at S1 -> remainder is 1.