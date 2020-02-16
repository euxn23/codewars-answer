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

export function wave(inputStr: string): Array<string> {
  const chars = inputStr.split('');

  let mexicanWavedStr: string[] = [];
  for (let ptr = 0; ptr < chars.length; ptr++) {
    const char = chars[ptr];
    if (char === ' ') {
      continue;
    }

    const ctxChars = inputStr.split('');
    ctxChars[ptr] = ctxChars[ptr].toUpperCase();

    mexicanWavedStr.push(ctxChars.join(''));
  }

  return mexicanWavedStr;
}
