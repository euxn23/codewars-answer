import { wave } from './mexican-wave';

describe('Sample Tests', function() {
  it('Should pass sample tests', function() {
    expect(wave('hello')).toStrictEqual([
      'Hello',
      'hEllo',
      'heLlo',
      'helLo',
      'hellO'
    ]);
  });
});
