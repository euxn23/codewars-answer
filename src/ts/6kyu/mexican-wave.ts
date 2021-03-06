/*
Task
 	In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
Rules
 	1.  The input string will always be lower case but maybe empty.
2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
Example
wave("hello") => []string{"Hello", "hEllo", "heLlo", "helLo", "hellO"}

https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/typescript
 */

type WithPtr<T> = [T, number];
export const wave = (inputStr: string): Array<string> =>
  inputStr.split('').reduce(
    ([waved, ptr], char) =>
      char === ' '
        ? ([waved, ptr + 1] as WithPtr<string[]>)
        : ([
            [
              ...waved,
              inputStr
                .split('')
                .reduce(
                  (chars: string[], char, idx) =>
                    idx === ptr
                      ? [...chars, char.toUpperCase()]
                      : [...chars, char],
                  [] as string[]
                )
                .join('')
            ],
            ptr + 1
          ] as WithPtr<string[]>),
    [[], 0] as WithPtr<string[]>
  )[0];
