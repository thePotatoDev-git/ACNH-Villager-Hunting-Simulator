//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', randomizeVillager);

function randomizeVillager() {
    let randomVillager = Math.floor(Math.random() * 390)
    

    fetch(`https://acnhapi.com/v1/villagers/${randomVillager}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.querySelector('h2').innerText = data.name["name-USen"];
        document.querySelector('.birthday').innerText = data["birthday-string"];
        document.querySelector('img').src = data.image_uri;
        document.querySelector('.gender').innerText = data.gender;
        document.querySelector('.phrase').innerText = data["catch-phrase"];
        document.querySelector('.personality').innerText = data.personality;
        document.querySelector('.species').innerText = data.species;
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}
