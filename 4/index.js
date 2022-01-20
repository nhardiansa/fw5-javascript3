const fetch = require('cross-fetch');
const URL = 'https://jsonplaceholder.typicode.com/user';

const getUser = async (url) => {
  try {
    const result = await fetch(url);
    const final = await result.json();

    if (result.status >= 400) {
      throw new Error(`Respon status server adalah ${result.status}`);
    }

    final.forEach((element, idx) => {
      const name = element.name;
      console.log(`${idx+1}. ${name}`);
    });

  } catch (err) {
    console.error(err);
  }
}

getUser(URL);
