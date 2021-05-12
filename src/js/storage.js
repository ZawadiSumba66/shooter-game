import 'regenerator-runtime'
const setLocalScores = (score) => {
  localStorage.setItem('scores', JSON.stringify(score));
};

const getLocalScores = () => {
  const score = localStorage.getItem('scores');
  let result = JSON.parse(score);

  if (result === null) {
    result = [1, 1];
    setLocalScores(result);
  }

  return result;
};

const storeScores = (score) => {
  const localScoreArr = getLocalScores();
  localScoreArr[0] = score;
  localScoreArr[1] = Math.max(...localScoreArr);
  setLocalScores(localScoreArr);
};

export { getLocalScores, setLocalScores, storeScores };