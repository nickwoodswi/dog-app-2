function callDog(dogUrl) {
    fetch(dogUrl)
    .then(response => response.json())
    .then(responseJson => populateDogs(responseJson));
};

function getDog() {
    $('form').submit(event => {
        event.preventDefault();
        $('.dog-results').empty();
        let dogBreed = document.getElementById('userInput').value.toLowerCase();
        let dogUrl = 'https://dog.ceo/api/breed/'+`${dogBreed}`+'/images/random';
        callDog(dogUrl);
    });
};

function populateDogs(responseJson) {
    let dogStatus = responseJson.status;
    let dogImage = responseJson.message;
    if (dogStatus === "error") {
        alert('Cannot find that breed, or something went wrong!')
    }
    else {$('.dog-results').append(
        `<img src="${dogImage}">`
    );};
    console.log(responseJson);
};

getDog();