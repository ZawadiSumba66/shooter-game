let url ='https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/'
const postScores = async() =>{
    const response = fetch(url)
    const data = await response.json();
    return data
}