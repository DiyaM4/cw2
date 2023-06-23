import R from "./ramda.js";
/**
 * The code uses document.getElementById method to retrieve the HTML element with the 'gamesboard-container' then assigns it the constant gamesboardcontainer. It can then be used to  mainuplate element properties
 */
const gamesboardcontainer = document.getElementById('gamesboard-container')
// console.log(gamesboardcontainer)


/**
 * This code selects the HTML element with the class "options-container" and assigns it to the variable "optioncontainer
 */
const optioncontainer= document.querySelector('.options-container');

//searches through anything in rotate button
const rotatebutton = document.querySelector('#flip-button')

const startbutton = document.querySelector('#start-button')

const infoDisplay = document.querySelector('#info')
const turnDisplay = document.querySelector('#turn-display')


// CHOOSING OPTIONS
let angle = 0;

/**s
 * THIS ROTATES THE SHIPS - if we click on rotate button it will rotate it 90 degrees
 */
function rotate () {
    //start off with angle being 0 ,we click rotate so we get 0 and asign the angle 90 to it and thats what gets passed through. 
    //if else check it again, if its not zero it must be something else so we make it 0.
    const optionships = Array.from(optioncontainer.children);
    if (angle === 0 ){
        angle = 90;
    }else{
        angle = 0;
    }
    // console.log("rotateping")
// ADVANCED version of code below which will replace the 5 lines above , if angle = 90 return 90 or else retun 0
    // angle = angle ===0? 90: 0
    optionships.forEach(optionship => optionship.style.transform=`rotate(${angle}deg)`)
    console.log("done")
}
rotatebutton.addEventListener('click', rotate)

//CREATING BOARDS
const width = 10


/**
 * This part of the code creates two different coloured boards for the two users player and computer
 * @param {*} colour this is the input for the colour of the gameboard
 * @param {*} user this includes two parameters: player and computer
 */
function createBoard(colour, user) {
    const gameboardcontainer = document.createElement('div')
    gameboardcontainer.classList.add('game-board')
    gameboardcontainer.style.backgroundColor=colour
    gameboardcontainer.id= user
//this turns the gameboard into 100 squares within the gameboard
    for (let i=0; i< width*width; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        block.id = i
        gameboardcontainer.append(block)
    }
    gamesboardcontainer.append(gameboardcontainer)
}


/**
 * This creates two boards, one for player(Dodgerblue in colour), one for computer(pink)
 */
createBoard('DodgerBlue', 'player')
createBoard('teal', 'computer')



//CREATING THE SHIPS
/**
 * The class ship holds the name of the individual ships and their size
 */
class Ship{
    /**
     * the Ship class constructor takes in two parameters listed below "name" and "length"
     * @param {*} name This holds the name of the different types of ship
     * @param {*} length This input is used to represent the length of each ship
     */
    constructor(name, length){
        this.name = name
        this.length = length
    }
}

//ship lengths
const destroyer = new Ship('destroyer', 2)
const submarine = new Ship('submarine', 3)
const cruiser = new Ship('cruiser', 3)
const battleship = new Ship('battleship', 4)
const carrier = new Ship('carrier', 5)

const ships = [destroyer, submarine, cruiser, battleship, carrier]
let notDropped

/**
 * Validity and valid start here is used to ensure ships ar not placed outside the gameboard
 * @param {*} allBoardBlocks this input is for all the block elements on the board
 * @param {*} ishorizontal this input checks if the  ships are horizontal using a boolean
 * @param {*} startIndex the index refers to the starting place the ship will be placed on the board of the 100 elements
 * @param {*} ship array that contains all the blocks needed to place the ship  on the gameboard
 * @returns return the function - here it returns shipsblocks if they are placed  outside gameboard.
 */
function getvalidity(allBoardBlocks, ishorizontal, startIndex, ship){
       //VALID START HERE ENSURES THE SHIPS ARE NOT PLACES OUTSIDE THE GAMEBOARD by making sure its not over 100
    //a valid start if horizonal is true, then we want to get the random start index and check if it is small than width*width which is less than 100
//we are pushing it to a valid index
    let validStart = ishorizontal ? startIndex <= width * width - ship.length ? startIndex:
        width*width -ship.length:
//VERTICAL checking if smaller than 100- ship lenngth *width+width then its valid so we return the start index
        startIndex <= width * width - width * ship.length ? startIndex :
            startIndex - ship.length * width + width


    let shipblocks=[]
// console.log(validStart)
//this allows you to get the bloacks adjacent to each other (up and downwards)
    for(let i=0; i<ship.length; i++){
        if (ishorizontal){
            shipblocks.push( allBoardBlocks[Number(validStart) + i ])
        }else{
            shipblocks.push( allBoardBlocks[Number(validStart) + i * width])
        }
    }   
//THIS PART OF THE CODE MAKES SURE THE PIECES DO NOT OVERLAP

//checks every single shipblock and it loopovers each shipblock
//we want to get id of the first one (indicated by [0])
//the width should not = the width-shipblockslength
//underscore is used because we only care about the index for this code

    let valid
    if(ishorizontal){
        valid = shipblocks.every((_shipblock,index) => shipblocks[0].id %width!==width- (shipblocks.length-(index+1)))
    }else{
//we know its valid due to code:
        valid = shipblocks.every((_shipblock,index) => shipblocks[0].id <90 + (width*index + 1))
    }

//checks if space is taken for every shipblock that exists by checking the class list
// we are checking its class list and if it is in take we can count it as nottaken
//RETURNS THE SHIPBLOCKS IF ITS VALID AND IF ITS TAKEN
    const nottaken = shipblocks.every(shipblock=>!shipblock.classList.contains('taken'))
    return {shipblocks, valid, nottaken}

}


//maths floor will give you a number from 0 to 99 each time and it will be assigned to random start index and ensure its and integer
//is horizontal will check for angle, if =0 horizontal is true, othwerwise we will get a boolean
/**
 * @param {*} user The user paramter here is used to specify whether the function is adding a ship piece for the player or computer
 * @param {*} ship This parameter defines the type of ship being added
 * @param {*} startId This check if the starting id exists and if not passed it will return a random start index for the ship piece
 */
function addshippiece(user, ship, startId) {
    const allBoardBlocks = document.querySelectorAll(`#${user} div`)
    let randomBoolean= Math.random() <0.5
    let ishorizontal= user ==='player'? angle ===0: randomBoolean
    let randomStartIndex= Math.floor(Math.random() *width *width)
    let startIndex= startId? startId: randomStartIndex

    const {shipblocks, valid, nottaken} = getvalidity(allBoardBlocks, ishorizontal, startIndex, ship)


//THIS LOOP WILL KEEP RUUNING in a loop unti all the ships can be placed on the board without them being off limits
//tells you the ships name and if it has a ship in the position
    if (valid && nottaken){
        shipblocks.forEach(shipblock =>{
            shipblock.classList.add(ship.name)
            shipblock.classList.add('taken')
        })
    }else{
        if (user=== 'computer') addshippiece('computer',ship, startId)
        if (user=== 'player') notDropped=true
    }

    // console.log(shipblocks) 

//ADDS ALL 5 of the computer's ships to the board
}
ships.forEach(ship => addshippiece('computer', ship))


//DRAG PLAYER SHIPS

//for each ship its listening out for it to be dragged,  
//2nd part to get all playerbloacks dragged and dropped to the board
let draggedShip
const optionships = Array.from(optioncontainer.children);
optionships.forEach(optionship => optionship.addEventListener('dragstart', dragStart))

const allplayerblocks = document.querySelectorAll('#player div')
allplayerblocks.forEach(playerblock=> {
    playerblock.addEventListener('dragover',dragOver)
    playerblock.addEventListener('drop',dropShip)
}
)

/**
 * @param {*} element Here the element represents the piece being dragged
 * 
 */
function dragStart(element){
    notDropped = false
    draggedShip= (element.target)
}

/**
 * @param {*} element This input refers to te element being dragged over the board
 * The element being dragged is assigned to a variable named "draggedShip" using the "element.target" property
 */
function dragOver(element){
    element.preventDefault()
    const ship = ships[draggedShip.id]
    highlightArea(element.target.id, ship)
}
////getting the ships that we are dropping to add them onto the board, If the ship was not dropped successfully, "notDropped" will be set to true so this dragged ship will be removed from the game board
  //The function "dropShip" is triggered when the user drops a ship on the game board and retirieves the id of the ship
/**.
 * the function is used to add a ship to the game board when the user drops it, using the ship object and starting position ID passed in as arguments but removes them if not successful
 * @param {*} element  is an arguement contains information about the element triggered in the event
 */
function dropShip(element){
    const startId = element.target.id
    const ship = ships[draggedShip.id]
    addshippiece('player', ship, startId)
    if (!notDropped) {
        draggedShip.remove()
    }
}
 // console.log("I AM GETTING DRAGGED", e)


//ADD TRAIL whilst dragging the pieces
/**
 * This function is used to add trail whilst dragging the pieces onto the gameboard
 * @param {*} startIndex  it specifies the starting index of the ship on the game board
 * @param {*} ship it specifies the type of ship being checked for validity and its positioning on the game board
 */
function highlightArea (startIndex,ship) {
    const allBoardBlocks = document.querySelectorAll('#player div')
    let ishorizontal= angle ===0
//retuns shipsblock if its valid and its not taken
    const{shipblocks, valid, nottaken}= getvalidity(allBoardBlocks, ishorizontal, startIndex, ship)

//if its a valid move and not taken, makes sure hover has a timeout
    if (valid &&nottaken){
        shipblocks.forEach(shipblock => {
            shipblock.classList.add('hover')
            setTimeout(() => shipblock.classList.remove('hover'), 500)
        })
    }
}

//
let gameover=false
let playerturn


//START GAME and DIFFERENT player turns

/**
 * If ships still remains in the optioncontainer, it stops you for progressong with a game and will send a message to tell yoou to place the ship pieces first
 */
function startgame() {
    if(playerturn===undefined){
        if(optioncontainer.children.length !=0){
            infoDisplay.textContent= 'Place all pieces first to begin!'
        }else{
            //this below allows you to click on the computer board
            const allBoardBlocks = document.querySelectorAll('#computer div')
            allBoardBlocks.forEach(block => block.addEventListener ('click' , handleClick))
            playerturn=true
            turnDisplay.textContent= 'Your Go!'
            infoDisplay.textContent= 'Game has begun!'
        }
    }
}

let playerhits = []
let comouterhits = []
const playersunkships = []
const computersunkships = []


/**
 * If player clicks on the class computerboard of the computer and its taken (ship present there) it will boom and turn red where it will display a message notifying the player that they hit the computer's ship
 * @param {*} element this input refers to the handclick element used to record what the player has clicked on
 */
function handleClick(element){
    if (!gameover){
        if (element.target.classList.contains('taken'))
            element.target.classList.add('boom')
            infoDisplay.textContent= 'You hit the computers ship!!!'
            console.log("class3", element)
            console.log("class0", element.target.classList)
            let classes = Array.from(element.target.classList)
            console.log("class", classes)
            // the classes will not have following names below and therfore only the ship names
            classes = classes.filter(className => className!=='block')
            classes = classes.filter(className => className!=='boom')
            classes = classes.filter(className => className!=='taken')
            playerhits.push(...classes)
            // console.log(playerhits)
            checksScore('player',playerhits, playersunkships)

    }
    // if the square clicked on doesn't contains part of a ship, it will display the message of no hit
    if (!element.target.classList.contains('taken')){
        infoDisplay.textContent= 'No hit this time round.'
        element.target.classList.add('empty')
    }
    // waits 2000ms (3 seconds) after your trun before computeer goes - delay
    playerturn = false
    const allBoardBlocks = document.querySelectorAll('#computer div')
    allBoardBlocks.forEach(block => block. replaceWith(block.cloneNode(true)))
    setTimeout(computerGO, 2000)
}


// DEFINES THE COMPUTERS GO

/**
 * This defines the computers go - whether there is a hit. miss or the computer is thinking (2000ms)
 */
function computerGO(){
    // if game is not over, it will proceed to the computer's go
    if (!gameover){
        turnDisplay.textContent= "Computers go now!"
        infoDisplay.textContent= "Computer is thinking..."
        // creates timeout before computer chooses
        setTimeout (() => {
            // will give you a number between 1-99 that computer will choose from to hit
            let randomGO = Math.floor(Math.random() * width *width)
            const allBoardBlocks = document.querySelectorAll('#player div')
            // we know if container is taken and boom then computer gets 2nd chance
            if (allBoardBlocks[randomGO].classList.contains('taken') &&
                allBoardBlocks[randomGO].classList.contains('boom')
            // if computer hits ship, it will display msg and show the 3classes of block boom and taken
            ){
                computerGO()
                return
            } else if (
                allBoardBlocks[randomGO].classList.contains('taken')&&
                !allBoardBlocks[randomGO].classList.contains('boom')
            ){
                allBoardBlocks[randomGO].classList.add('boom')
                infoDisplay.textContent = "Computer hit your ship!!!"
                let classes = Array.apply(allBoardBlocks[randomGO].classList)
                classes = classes.filter(className => className!=='block')
                classes = classes.filter(className => className!=='boom')
                classes = classes.filter(className => className!=='taken')
                comouterhits.push(...classes)
            // checks scores
                checksScore('comouter', comouterhits, computersunkships)
            // otherwise it will miss ad send this message, it will display after 2000ms (2 seconds)
            } else{
                infoDisplay.textContent= 'Miss!'
                allBoardBlocks[randomGO].classList.contains('empty')
             }
        }, 2000)
            // after 2sec timeout, its the players turn
        setTimeout(() => {
            playerturn = true
            turnDisplay.textContent = 'Your turn!'
            infoDisplay.textContent = "Please take your go."
            const allBoardBlocks = document.querySelectorAll('#computer div')
            allBoardBlocks.forEach(block => block.addEventListener('click', handleClick))
        // 2000+2000 = 4000
        }, 4000)
    }
}


/**
 * Here it checks for the sunken ship through its name and length then notfies player which ship they sunk
 * @param {*} user  is the player of the game, used to check if they have hit.sunk ships
 * @param {*} userhits  its an array that contains the names of the ships hit by the user
 * @param {*} usersunkships its an array of ship names that the user has successfully sunk and checks all blocks within it to make sure it has sunk
 */
function checksScore(user, userhits,usersunkships){
    function checkship (shipname, shipblockslength){
        if(
            userhits.filter(storedshipname => storedshipname === shipname).length  === shipblockslength
        ){
            // updates user on which ship they hit
            if (user === 'player') {
                console.log("test")
                infoDisplay.textContent= `You sunk the computer's ${shipname}`
                playerhits=userhits.filter(storedshipname => storedshipname!== shipname)
            }
            if (user === 'computer') {
                console.log("test")
                infoDisplay.textContent= `Computer sunk your ${shipname}`
                comouterhitsrhits=userhits.filter(storedshipname => storedshipname!== shipname)
            }
            usersunkships.push(shipname)
        }
    }
    checkship('destroyer', 2)
    checkship('submarine', 3)
    checkship('cruiser', 3)
    checkship('battleship', 4)
    checkship('carrier', 5)

    console.log ('playerhits', playerhits)
    console.log('playersunkships', playersunkships)

    // WIN/ LOST MESSAGE
    // checks for each user if all 5 ships are sunken and respecitvely says who won or lost
    // gameover ensures you can't interact with it later
    if(playersunkships.length===5) {
        infoDisplay.textContent='You have successfully sunken all 5 computer ships! YOU WIN!!!'
        gameover=true
    }
    if(computersunkships.length===5) {
        infoDisplay.textContent='The computer has sunken all 5 of your ships. You lost :( Better luck next time!'
        gameover=true
    }

}

// listens for click of the start button to start the game
startbutton.addEventListener('click',startgame)