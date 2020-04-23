export class ArtService {
  async getArt() {
    try {
      // eslint-disable-next-line 
      let response = await fetch(`https://api.harvardartmuseums.org/object?apikey=${process.env.API_KEY}&hasimage=1&q=ghost|rooster|cat&page=${Math.floor(Math.random()*200)}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
        let { records } = jsonifiedResponse; 
        let randArt = records[Math.floor(Math.random()*9)];
        let {title, people, images } = randArt;
        jsonifiedResponse = {title, people, images};
        console.log(jsonifiedResponse);
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      console.log(error);
      return false;
    }
  }
}

  