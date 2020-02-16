import { Challenge } from './multiple-of-3-or-5';
const { solution } = Challenge;

describe('multiple-of-3-or-5', () => {
  describe('in expected cases', () => {
    it('given 2 should be 0', () => {
      expect(solution(2)).toBe(0);
    });
    it('given 3 should be 0', () => {
      expect(solution(3)).toBe(0);
    });
    it('given 4 should be 3', () => {
      expect(solution(4)).toBe(3);
    });
    it('given 5 should be 1', () => {
      expect(solution(5)).toBe(3);
    });
    it('given 6 should be 2', () => {
      expect(solution(6)).toBe(8);
    });
    it('given  should be 7', () => {
      expect(solution(7)).toBe(14);
    });
    it('given 10 should be 23', () => {
      expect(solution(10)).toBe(23);
    });
    it('given 11 should be 33', () => {
      expect(solution(11)).toBe(33);
    });
  });

  describe('in anomaly cases', () => {
    // 0 is not a natural number!
    it('given 0 should be 0', () => {
      expect(solution(0)).toBe(0);
    });
    // 1 is not a natural number!!!
    it('given 1 should be 0', () => {
      expect(solution(1)).toBe(0);
    });
    // 0.1 is not a natural number
    it('given 0 should be 0', () => {
      expect(solution(0.1)).toBe(0);
    });
    // 10.1 is not a natural number
    it('given 0 should be 0', () => {
      expect(solution(10.1)).toBe(0);
    });
    // -1 is not a natural number
    it('given 0 should be 0', () => {
      expect(solution(-1)).toBe(0);
    });
  });
});
