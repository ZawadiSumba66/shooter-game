let url ='https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/'
const getScores = async() =>{
    const response = fetch(url)
    const data = await response.json();
    return data.sort((a, b) => (a.score > b.score ? -1 : 1)).slice(0, 5);
}

const setScores = async()=>{
    const playerData = { user: player, score: scores };
    try {
    const response = fetch(url, {
        method: "POST",
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: JSON.stringify(playerData)
      })
      const data = await response.json()
      return data
    }catch(error){
        return error
    }
}

export {setScores,getScores}