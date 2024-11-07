class Player{
    constructor(json){
        this.firstName = json.first_name;
        this.lastName = json.last_name
        this.weight = json.weight
        this.teamName = json.team.full_name
        this.conference = json.team.conference
    }

    toDiv(){    
        let playerDivText=
            `<div id="player">
                <div style="text-align:center">${firstName}</div>
                <div style="text-align:center">Los angeles lakers</div>
                <div style="text-align:start">Peso: 190</div>
                <div style="text-align:start">Conferencia: West</div>
            </div>`

        let playerDiv = document.createElement("div")
        playerDiv.innerHTML = playerDivText

        return playerDiv
    }
}