import { getLocalScores, setLocalScores } from '../src/js/storage';

describe('getLocalScores', () => {
  it('show store the array and show it', () => {
    const data = [100, 200];
    setLocalScores(data);
    const scores = getLocalScores();
    expect(scores.length).toBe(data.length);
    expect(scores[1]).toBe(200);
    expect(scores[0]).toBe(100);
  });
  it('shows error when the input is wrong', () => {
    const data = [100, 200];
    setLocalScores(data);
    const scores = getLocalScores();
    expect(scores.length).toBe(data.length);
    expect(scores[1]).not.toBe(400);
    expect(scores[0]).not.toBe(300);
  });
});