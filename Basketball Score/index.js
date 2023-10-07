let points = 0
let pointsHome = document.getElementById("points-home")


function addingOne(){
    points += 1
    pointsHome.textContent = points
}
function addingTwo(){
    points += 2
    pointsHome.textContent = points
}
function addingThree(){
    points += 3
    pointsHome.textContent = points
}

let pointsG = 0
let pointsGuest = document.getElementById("points-guest")

function addingOneG(){
    pointsG += 1
    pointsGuest.innerText = pointsG
}
function addingTwoG(){
    pointsG += 2
    pointsGuest.innerText = pointsG
}
function addingThreeG(){
    pointsG += 3
    pointsGuest.innerText = pointsG
    
}

function reset(){
    points = 0
    pointsG = 0
    pointsHome.textContent = points
    pointsGuest.textContent = pointsG
}