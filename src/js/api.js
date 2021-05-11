import axios from 'axios'
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jG08FYAVYjOAbHm0zNyx/scores/'

const setScores = async (player, scores) => {
  const data = await axios
    .post(
      url, {
      user: player,
      score: scores
    })
    .then((response) => response.data)
    .catch((error) => error);
  return data;
}

const getScores = async () => {
  const data = await axios
    .get(
      url,
    )
    .then((response) => response.data)
    .catch((error) => error);
  const result = await data.result
  return result.sort((a, b) => (a.score > b.score ? -1 : 1)).slice(0, 5);
};


export { setScores, getScores };