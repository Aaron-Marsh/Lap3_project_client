// placeholder data. fetch function will go here

let data = [
  {
    id: '1tfjiELNrwYAJeafRYlT9RwOIiD',
    name: 'Grace',
    score: 100
  },
  {
    id: '1tfjiFoinFrbdLWlPI52dRLhNlD',
    name: 'Bob',
    score: 98
  },
  {
    id: '1tfjiDIAS8f2UYgV9ynCqWi7rZD',
    name: 'Ada',
    score: 50
  },
  {
    id: '1tfjiEIWBZz2I9lOQYTEeMICALg',
    name: 'Grete',
    score: 20
  },
  {
    id: '1tfjiCMU9SdFM9BAaIF3mS5UpYf',
    name: 'Chieko',
    score: 10
  },
  {
    id: '6',
    name: 'Grace',
    score: 9
  },
  {
    id: '7',
    name: 'Bob',
    score: 8
  },
  {
    id: '8',
    name: 'Ada',
    score: 7
  },
  {
    id: '9',
    name: 'Grete',
    score: 6
  },
  {
    id: '10',
    name: 'Chieko',
    score: 5
  }
].map((winner, position) => ({ ...winner, position }))

const trophyImgs = ['https://i.imgur.com/sRcjCDA.png', 'https://i.imgur.com/LZr8Arh.png', 'https://i.imgur.com/eGgxQKa.png']

for (let i=0; i<3;i++){
  let datum = data[i]
  let trophy = trophyImgs[i]
  data[i]={ ...datum, trophy }
}

export default data;
  