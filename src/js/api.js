import axios from 'axios'
//  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JEsLUihmCMuLpplPt45n/scores/';

 const userScore = async (userData) => {
  const data = await axios
    .post(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jG08FYAVYjOAbHm0zNyx/scores/',
      userData,
    )
    .then((response) => response.data)
    .catch((error) => error);
  return data;
    }

    const setScores = async (player, scores) => {
      const userData = { user: player, score: scores };
      const message = await userScore(userData);
    
      return message;
    };
    
    const getGameResult = async () => {
      const data = await axios
        .get(
          'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jG08FYAVYjOAbHm0zNyx/scores/',
        )
        .then((response) => response.data)
        .catch((error) => error);
    
      return data.result;
    };
    
    const getScores = async () => {
      const data = await getGameResult();
    
      return data.sort((a, b) => (a.score > b.score ? -1 : 1)).slice(0, 5);
    };

export { setScores, getScores };