fetch('https://random-word-api.herokuapp.com/word')
  .then(response => response.json())
  .then(word => {
    let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`;
    return fetch(apiUrl);
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
