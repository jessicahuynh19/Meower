console.log("Hello World");

const form = document.querySelector('form'); //grabbing element on the page
const loadingElement = document.querySelector('.loading');
const API_URL = 'http://localhost:5000/mews';

loadingElement.style.display = 'none';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');
    //when form is submitted we grab the stuff from the form, we put it in an object
    //we show the loading spinner, and we attempt to send the data off to our backend server

    const mew = {
        name,
        content
    };
   
    form.style.display = 'none';
    loadingElement.style.display = '';

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(mew),
        headers: {
            'content-type': 'application/json'
            //this tells in the body of the server that in the body of the request is JSON, using JSON
            //.stringify will the object and turn it in JSON parse the data
        }
    }).then(response => response.json())
      .then(createdMew => {
        console.log(createdMew);
        form.style.display = '';
        loadingElement.style.display = 'none';
      });
});