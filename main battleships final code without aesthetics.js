import R from "./ramda.js";

const gamesboardcontainer = document.getElementById('gamesboard-container')

// console.log(gamesboardcontainer)

const optioncontainer= document.querySelector('.options-container');

//searches through anyhting in flip buttop
const flipbutton = document.querySelector('#flip-button')

const startbutton = document.querySelector('#start-button')

const infoDisplay = document.querySelector('#info')
const turnDisplay = document.querySelector('#turn-display')



//if we click on flip button it will flip it 90 degrees
//start off with angle being 0 ,we click flip so we get 0 and asign the angle 90 to it and thats what gets passed through. if else  check again if its not zero it must be something eslse so we make it 0



// CHOOSING OPTIONS
let angle = 0;
function flip () {
    const optionships = Array.from(optioncontainer.children);
    if (angle === 0 ){
        angle = 90;
    }else{
        angle = 0;
    }
    // console.log("flipping")
// ADVANCED version of code below which will replace the 5 lines above , if angle = 90 return 90 or else retun 0
    // angle = angle ===0? 90: 0
    optionships.forEach(optionship => optionship.style.transform=`rotate(${angle}deg)`)
    console.log("done")
}
flipbutton.addEventListener('click', flip)

//CREATING BOARDS - creates a pink and yellow bboard
const width = 10

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

//yellow for player and pick for comouter
createBoard('yellow', 'player')
createBoard('pink', 'computer')



//Creating ships
//
class Ship{
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

function getvalidity(allBoardBlocks, ishorizontal, startIndex, ship){
       //VALID START HERE ENSUURES THE SHIPS ARE NOT PLACES OUTSIDE THE GAMEBOARD by making sure its not over 100
    //a valid start if horizonal is true, then we want to get the random start index and check if it is small than width*width which is less than 100
//we are pushing it to a valid inndex
    let validStart = ishorizontal ? startIndex <= width * width - ship.length ? startIndex:
        width*width -ship.length:
//VERTICAL checking is is smaller than 100- ship lenngth *width then its valid so we return the start index (:randomstart indea 2nd time means otherwise...)
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
//checking every singl shipblock and loopover each shipblock, we want to get id of the first one (indicated by [0])
//the width should not the width-shipblockslength
//underscorse is used because we only care about the index for this code
//THIS BIT IS A BIT DIFFERENT

    let valid
    if(ishorizontal){
        valid = shipblocks.every((_shipblock,index) => shipblocks[0].id %width!==width- (shipblocks.length-(index+1)))
    }else{
//we know its validdue to code:
        valid = shipblocks.every((_shipblock,index) => shipblocks[0].id <90 + (width*index + 1))
    }

//check if space is taken for every shipblock that exists we are checking its class list and if it is in take we can count it as nottaken
//RETURNS THE SHIPBLOCKA IF ITS VALID AND IF ITS TAKEN
    const nottaken = shipblocks.every(shipblock=>!shipblock.classList.contains('taken'))
    return {shipblocks, valid, nottaken}

}


//maths floor will give you a number from 0 to 99 each time and it will be assigned to random start index. is horzbtal will cgeck for angle if it =0 horizotnal is tru othwerwise we will get a boolean
function addshippiece(user, ship, startId) {
    const allBoardBlocks = document.querySelectorAll(`#${user} div`)
    let randomBoolean= Math.random() <0.5
    let ishorizontal= user ==='player'? angle ===0: randomBoolean
    let randomStartIndex= Math.floor(Math.random() *width *width)

//if start id exsits we retun start id othrwise we retun ranomstart inde
    let startIndex= startId? startId: randomStartIndex

    const {shipblocks, valid, nottaken} = getvalidity(allBoardBlocks, ishorizontal, startIndex, ship)


//this code will keep running a  loop unti all the ships can be placed on the board without them being off limits

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
//tells you the ships name and if it has a ship in the posotion
  

//adds all 5 ships to the board
}
ships.forEach(ship => addshippiece('computer', ship))


//DRAG PLAYER SHIPS
//for each ship its llistening out for it to be draagged,  2nd part to get all playerbloacks
let draggedShip
const optionships = Array.from(optioncontainer.children);
optionships.forEach(optionship => optionship.addEventListener('dragstart', dragStart))

const allplayerblocks = document.querySelectorAll('#player div')
allplayerblocks.forEach(playerblock=> {
    playerblock.addEventListener('dragover',dragOver)
    playerblock.addEventListener('drop',dropShip)
}
)


function dragStart(e){
    notDropped = false
    draggedShip= (e.target)
}


function dragOver(e){
    e.preventDefault()
    const ship = ships[draggedShip.id]
    highlightArea(e.target.id, ship)
}
////getting the ships that we are dropping to add them, if nto dropped line says if it is dropped we want to remove it  but not if its nto dropped as it would be false then
function dropShip(e){
    const startId = e.target.id
    // console.log("I AM GETTING DRAGGED", e)
    const ship = ships[draggedShip.id]
    addshippiece('player', ship, startId)
    if (!notDropped) {
        draggedShip.remove()
    }
}

//ADD HIGHLIGHT whilst dragging the pieces
//WE COULD DELETE THIS BIT
function highlightArea (startIndex,ship) {
    const allBoardBlocks = document.querySelectorAll('#player div')
    let ishorizontal= angle ===0
//retuns sipsblock if its valid and id its not taken
    const{shipblocks, valid, nottaken}= getvalidity(allBoardBlocks, ishorizontal, startIndex, ship)

    //if its a valid move and noot taken, makes sure hover has a timout
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


//START GAME
//if stuff iss still in there in the option cotnainer of blockks aka ships to place it will send amessage tor rmind user to plac bloack

function startgame() {
    if(playerturn===undefined){
        if(optioncontainer.children.length !=0){
            infoDisplay.textContent= 'Place all pieces first to begin!'
        }else{
            //this below allows you to click on the computer bpard
    
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

//if player clicks on computer board and its taken we know there is a ship there and it will go boom and turn red
//it will also display a mssage  telling you hit computer ship
function handleClick(e){
    if (!gameover){
        if (e.target.classList.contains('taken'))
            e.target.classList.add('boom')
            infoDisplay.textContent= 'You hit the computers ship!!!'
            let classes = Array.apply(e.target.classList)
            // the classes will not have following names,m therfore only the ship names
            classes = classes.filter(className => className!=='block')
            classes = classes.filter(className => className!=='boom')
            classes = classes.filter(className => className!=='taken')
            playerhits.push(...classes)
            // console.log(playerhits)
            checksScore('player',playerhits, playersunkships)

    }
    // if the square doesn't contaons suare with take we know we didn't hit so it will display the mssage of no hit
    if (!e.target.classList.contains('takem')){
        infoDisplay.textContent= 'No hit this time round.'
        e.target.classList.add('empty')
    }
    // wwaits 3000ms (3 seconds) after your trun before computeer goes - delay
    playerturn = false
    const allBoardBlocks = document.querySelectorAll('#computer div')
    allBoardBlocks.forEach(block => block. replaceWith(block.cloneNode(true)))
    setTimeout(computerGO, 3000)
}


// DEFINE COMPUTERS GO
function computerGO(){
    // if game is not over the it will go tcomouters go
    if (!gameover){
        turnDisplay.textContent= "Computers go now!"
        infoDisplay.textContent= "Computer is thinking..."
        // creates time before computr chooses 
        setTimeout (() => {
            // will give you a number between 1-99 that comoutrr will choose from to hit
            let randomGO = Math.floor(Math.random() * width *width)
            const allBoardBlocks = document.querySelectorAll('#player div')
            // we know if container is taken and boom then computer gets 2nd chance
            if (allBoardBlocks[randomGO].classList.contains('taken') &&
                allBoardBlocks[randomGO].classList.contains('boom')
            // // computr hits ship will display msg and show the 3classes of block boom and taken
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
            // otherwise it will miss ad send this message, it will display after 300ms
            } else{
                infoDisplay.textContent= 'Miss!'
                allBoardBlocks[randomGO].classList.contains('empty')
             }
        }, 3000)
            // putting it back to player turn
        setTimeout(() => {
            playerturn = true
            turnDisplay.textContent = 'Your turn!'
            infoDisplay.textContent = "Please take your go."
            const allBoardBlocks = document.querySelectorAll('#computer div')
            allBoardBlocks.forEach(block => block.addEventListener('click', handleClick))
        // 3000+3000 = 6000
        }, 6000)
    }
}
// check for the sunken ship name by checking length and notfies player which ship they sunk
function checksScore(user, userhits,usersunkships){
    function checkship (shipname, shipblockslength){
        if(
            userhits.filter(storedshipname => storedshipname === shipname).length  === shipblockslength
        ){
            // updates user on which ship they hit
            if (user === 'player') {
                infoDisplay.textContent= `You sunk the computer's $shipname'`
                playerhits=userhits.filter(storedshipname => storedshipname!== shipname)
            }
            if (user === 'computer') {
                infoDisplay.textContent= `Computer sunk your $shipname'`
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
    if(playersunkships===5) {
        infoDisplay.textContent='You have successfully sunken all 5 computer ships! YOU WIN!!!'
        gameover=true
    }
    if(computersunkships===5) {
        infoDisplay.textContent='The computer has sunken all 5 of your ships. You lost :( Better luck next time!'
        gameover=true
    }

}

// listens for click ot start game
startbutton.addEventListener('click',startgame)