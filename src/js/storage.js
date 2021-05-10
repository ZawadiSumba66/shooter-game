 const setLocalScores=(score)=>{
      localStorage.setItem('scores',JSON.stringify(score) );
 }

 const getLocalScores =()=>{
   let score = localStorage.getItem('scores')
   let result = JSON.parse(score)

   if (result === null) {
    result = [1, 1];
    setLocalScores(result);
  }

  return result;
 }

 export {getLocalScores,setLocalScores }