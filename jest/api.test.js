import  { setScores, getScores } from '../src/js/api'
import axios from 'axios';
jest.mock('axios');

describe('getScores',() => {
  it('fetches successfully data from an API', async () => {
    const data = {
      data: {
        result: [
          { user: 'peter', score: 340 },
          { user: 'max', score: 250 },
        ],
      },
    };
    axios.get.mockResolvedValue(data);
    const res = await getScores()
    expect(res.length).toBe(2);
    expect(res[0].user).toBe('peter');
    expect(res[0].score).toBe(340);
  })
})

describe('setScores',()=>{
  it('sets data to an Api',async()=>{
      const data = { data: { result: 'Leaderboard score created correctly.' } };
      axios.post.mockResolvedValue(data);
      const res = await setScores('Jok', 100);
      axios.get.mockResolvedValue(res);
      const dataGet = getScores();
      expect(dataGet.length).not.toBe(0);
  })
})