
function getPlayers(){
    showSpinner()

    let url = "https://api.balldontlie.io/v1/players"
    let headers = new Headers()

    headers.append('Authorization', 'e1332d60-dc1b-4070-b072-ebf1c2713823');
    
    fetch(url, 
        {
            method:'GET',
            headers: headers,
        })
        .then(respuesta => respuesta.json()
            .then(content => showPlayers(getPlayersArray(content.data))));
}

//convert json array into players array
function getPlayersArray(jsonArray){
    return jsonArray.map(json => new Player(json))
}

function showPlayers(playersArray){
    document.getElementById("playersContainer")
        .appendChild(playersArray[0].toDiv())

    hideSpinner()
}

function showSpinner(){
    document.getElementById("spinner").style.display = "block"
}
function hideSpinner(){
    document.getElementById("spinner").style.display = "none"
}