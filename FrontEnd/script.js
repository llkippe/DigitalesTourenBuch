const url = 'http://localhost:8090/api/touren/skitouren';

fetch(url)
  .then(res => {
    // handle the response
    console.log(res);
  })
  .catch(function() {
    // handle the error
  });