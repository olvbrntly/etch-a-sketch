
const grid = document.createElement('div');
let gridBoxes =document.querySelectorAll('.grid')
let button = document.querySelectorAll('button');

let container = document.getElementById("container");
let blackBtn = document.getElementById("blackBtn");
let rainbowBtn = document.getElementById("rainbowBtn");
let eraseBtn = document.getElementById("eraseBtn");
let resetBtn = document.getElementById("resetBtn");


//COLOR FUNCTIONS ---------------------------------------

function getDefaultColor(){
    (this).style.backgroundColor = 'black';
    //console.log('black');

};

function getRandomColor() {
    const LETTERS = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color +=LETTERS[Math.floor((Math.random()*LETTERS.length))
        ];
        
    }
    (this).style.backgroundColor = color;
    return color;
   
};


function eraseColor() {
    (this).style.backgroundColor = "white"
};

function resetGrid() {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}


let currentFunction = getDefaultColor;

let v = prompt('number', '8');

//MAKE THE GRID------------------------------------------------

function createDivs(v) {
    
    currentFunction = getDefaultColor;
    container.style.gridTemplateColumns = `repeat(${v},1fr)`;
    for(let i=0; i <v*v; i++){
        const gridBoxes = document.createElement('div');
        gridBoxes.classList.add('grid');
        container.appendChild(gridBoxes); 
        gridBoxes.addEventListener('mouseover', currentFunction);
    }  
    
}

createDivs(v);

//EVENT LISTENERS --------

rainbowBtn.addEventListener('click', () => {
    myDivs = document.querySelectorAll('.grid');
    for(let i=0; i < myDivs.length; i++)
    {
        myDivs[i].removeEventListener('mouseover', currentFunction);
        myDivs[i].addEventListener('mouseover', getRandomColor);
    }
    currentFunction = getRandomColor;
})

blackBtn.addEventListener('click', () => {
    myDivs = document.querySelectorAll('.grid');
    for(let i=0; i < myDivs.length; i++)
    {
        myDivs[i].removeEventListener('mouseover', currentFunction);
        myDivs[i].addEventListener('mouseover', getDefaultColor);
    }
    currentFunction = getDefaultColor;
})

eraseBtn.addEventListener('click', () => {
    myDivs = document.querySelectorAll('.grid');
    for(let i=0; i < myDivs.length; i++)
    {
        myDivs[i].removeEventListener('mouseover', currentFunction);
        myDivs[i].addEventListener('mouseover', eraseColor);
    }
    currentFunction = eraseColor;
})

resetBtn.addEventListener('click', () => {
    resetGrid();
    
    createDivs(v);
});
 