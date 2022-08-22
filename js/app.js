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
const buttons = document.querySelectorAll('section button')
let disabledBtnCount = 1
for (const button of buttons) {
    button.addEventListener('click', function () {
        if (disabledBtnCount <= 5) {
            button.disabled = true
        }
        disabledBtnCount++
    })
}

// get element with id selector 

function getNameById(elementId) {
    const element = document.getElementById(elementId)
    const elementValue = element.innerText
    return elementValue
}

// onclick function define here 
let count = 1;
function addPlayer(playerName) {
    let name = getNameById(playerName)
    addPlayerInDom(name, count)
    count++
}



// calculate budget 

// display player cost 
function displayCost(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value
}

// get value from input and return 
function getValueFromInput(elementId) {
    const element = document.getElementById(elementId)
    const elementString = element.value
    const elementValue = parseFloat(elementString)
    return elementValue
}
// total expense for all players calculate here 
function budgetCalculate() {
    // get information by id 
    const players = document.querySelectorAll('li')
    // validation 
    if (players.length < 1) {
        alert('You have to add minimum one player')
    } else {
        const costPerPlayer = getValueFromInput('expenses-field')
        // calculate cost per player and display 
        const playerExpenses = players.length * costPerPlayer
        displayCost('player-expenses', playerExpenses)
        return playerExpenses
    }


}
// add event listener in calculate button 
document.getElementById('calculate').addEventListener('click', function () {
    budgetCalculate()
})

// add event listener in calculate total button 

document.getElementById('calculate-total').addEventListener('click', function () {
    const playerExpenses = budgetCalculate()
    const managerCost = getValueFromInput('manager-field')
    const coachCost = getValueFromInput('coach-field')
    // calculate and display total cost 
    const totalCost = playerExpenses + managerCost + coachCost
    displayCost('total-expenses', totalCost)
})