// get element with id selector 

function getNameById(elementId) {
    const element = document.getElementById(elementId)
    const elementValue = element.innerText
    return elementValue
}

// add player name in player list 
function addPlayerInDom(player, count) {
    if (count > 5) {
        alert('You can not add more than five player!!!')
    } else {
        const playerList = document.getElementById('player-list')
        const li = document.createElement('li')
        li.innerText = count + '. ' + player
        playerList.appendChild(li)
    }

}

// disabled button 
const buttons = document.getElementsByTagName('button')
let disabledBtnCount = 1
for (const button of buttons) {
    button.addEventListener('click', function dis(name) {     
        if(disabledBtnCount <= 5){
            button.disabled = true
        }
        disabledBtnCount++
    })
}



// onclick function define here 
let count = 1;
function addPlayer(playerName) {
    let name = getNameById(playerName)
    addPlayerInDom(name, count)
    count++
}

