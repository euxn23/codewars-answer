/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.


https://www.codewars.com/kata/514b92a657cdc65150000006/train/typescript
 */

type NumberNamePair = [number, number];

function divide3or5(toBeDividedNumbers: NumberNamePair[]): NumberNamePair[] {
  const tripleNestedNumbersList = [3, 5].map(dividingNumber =>
    toBeDividedNumbers.map(([originNum, num]) =>
      num >= dividingNumber && num % dividingNumber === 0
        ? [
            [originNum, num / dividingNumber],
            ...divide3or5([[originNum, num / dividingNumber]])
          ]
        : []
    )
  );

  const flattenNumbersNamePairList = tripleNestedNumbersList.reduce(
    (numberNamePairList: NumberNamePair[], doubleNesterNumberNamePairList) => [
      ...numberNamePairList,
      ...doubleNesterNumberNamePairList.reduce(
        (nesterNumberNamePairList: NumberNamePair[], numberNamePairList) => [
          ...nesterNumberNamePairList,
          ...(numberNamePairList as NumberNamePair[])
        ],
        []
      )
    ],
    []
  );

  return flattenNumbersNamePairList as NumberNamePair[];
}

function solution(inputNum: number) {
  if (inputNum < 1 || !Number.isInteger(inputNum)) {
    return 0;
  }

  const numbers = new Array(inputNum)
    .fill(null)
    .map((_, idx) => idx)
    .slice(1);

  const result = divide3or5(numbers.map(num => [num, num]) as NumberNamePair[])
    .map(([originNum]) => originNum)
    .reduce(
      (uniqueNumbers: number[], duplicatableNumber) =>
        uniqueNumbers.indexOf(duplicatableNumber) !== -1
          ? uniqueNumbers
          : [...uniqueNumbers, duplicatableNumber],
      []
    )
    .reduce((sum, next) => sum + next, 0);

  return result;
}

export const Challenge = { solution };
