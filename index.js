const data = [
    {
        id: 1,
        src: './pictures/lowres_Website/HomePage/1_2020_Andalucia_mosque-church.jpg',
        alt: 'mosque church',
        best: 0,

    },
    {
        id: 2,
        src: './pictures/lowres_Website/HomePage/3-2020_Andalucia_architecture.jpg',
        alt: 'greywood house',
        best: 0,
    },
    {
        id: 3,
        src: './pictures/lowres_Website/HomePage/4-Exospheres.jpg',
        alt: 'andalucia',
        best: 0,
    },
    {
        id: 4,
        src: './pictures/lowres_Website/HomePage/5-SRN03643.jpg',
        alt: 'andalucia',
        best: 0,
    },
    {
        id: 5,
        src: './pictures/lowres_Website/HomePage/8-Reflection_Woman-crossing.jpg',
        alt: 'reflections',
        best: 0,
    },
    {
        id: 6,
        src: './pictures/lowres_Website/HomePage/9-Time-travel copy.png',
        alt: 'domestication',
        best: 0,
    },
    {
        id: 7,
        src: './pictures/lowres_Website/HomePage/9.jpg',
        alt: 'yellow saree',
        best: 0,
    },
    {
        id: 8,
        src: './pictures/lowres_Website/HomePage/10-QueenOfSpades.jpg',
        alt: 'sheep in madrid',
        best: 0,
    },
    {
        id: 9,
        src: './pictures/lowres_Website/HomePage/11-2020_Saree_Presentation-7.jpg',
        alt: 'green saree',
        best: 0,
    },
    {
        id: 10,
        src: './pictures/lowres_Website/HomePage/12-SRN03571.jpg',
        alt: 'photography',
        best: 0,
    },
    {
        id: 11,
        src: './pictures/lowres_Website/HomePage/13_SRN8352.jpg',
        alt: 'artworks',
        best: 0,
    },
    {
        id: 12,
        src: './pictures/lowres_Website/HomePage/14_SRN6803.jpg',
        alt: 'artworks',
        best: 0,
    }
];

//back and forth buttons
const leftBtn = document.getElementById('btnLeft');
const rightBtn = document.getElementById('btnRight');
const target = document.querySelector('.image');
const fullScreenImg = document.querySelector('.fullScreenImg')


// console.log(leftBtn);
let i = 0;
length = data.length;
const functionalBtns = () => {
    // fullScreenImg.href = data[i].src;
    target.src = data[i].src;
    target.alt = data[i].alt;
    target.id = data[i].id;

    rightBtn.addEventListener('click', () => {
        if(i >= length-1){
            i = 0;
        }
        else{
            i++;
        }
        // fullScreenImg.href = data[i].src;
        target.src = data[i].src;
        target.alt = data[i].alt;
        target.id = data[i].id;
    });

    leftBtn.addEventListener('click', () => {
        if(i <= 0){
            i = length-1;
        }
        else{
            i--;
        }
        // fullScreenImg.href = data[i].src;
        target.src = data[i].src;
        target.alt = data[i].alt;
        target.id = data[i].id;
    });
}

functionalBtns();

// autoscroll
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
const moveStuff = document.querySelector('.moveStuff');
const body = document.querySelector('.body');
const deviceHeight = window.innerHeight;


let setInt;

setInt = setInterval(() => {
    i >= length - 1? i = 0 : i++;
    // fullScreenImg.href = data[i].src;
   target.src = data[i].src;
   target.alt = data[i].alt;
   target.id = data[i].id;
   body.style.setProperty('--heightOfBody',`${deviceHeight}px`);
//    moveStuff.style.setProperty('--heightOfMoveStuff',`${target.height}px`);
//    console.log(target.style.height);

},2500);

    playBtn.addEventListener('click', () => {
        setInt = setInterval(() => {
            i > length - 2? i = 0 : i++;
   
           target.src = data[i].src;
           target.alt = data[i].alt;
           target.id = data[i].id;
           body.style.setProperty('--heightOfBody',`${deviceHeight}px`);
        //    moveStuff.style.setProperty('--heightOfMoveStuff',`${target.height}px`);
       },2500);

    playBtn.style.display = 'none';
    pauseBtn.style.display =  'block';
    });

pauseBtn.addEventListener('click', () => {
    clearInterval(setInt);
    playBtn.style.display = 'block';
    playBtn.style.textAlign = 'center';
    pauseBtn.style.display =  'none';
});

//imageClick event

// console.log(target.documentElement);

//fullscreen 
target.addEventListener('click', (e) => {
    clearInterval(setInt);
    playBtn.style.display = 'block';
    playBtn.style.textAlign = 'center';
    pauseBtn.style.display =  'none';
    e.preventDefault();
    if(target.requestFullscreen){
        target.requestFullscreen();
    } else if(target.webkitRequestFullscreen) {
        target.webkitRequestFullscreen();
    } else if (target.msRequestFullscreen) { 
        target.msRequestFullscreen();
    }
});

//going back and forth with arrow keys
window.addEventListener('keydown', (e) => {
    let keycode = e.keyCode;
    // console.log(keycode);
    if(keycode === 37){
        // console.log('left arrow was pressed');
        if(i <= 0){
            i = length-1;
        }
        else{
            i--;
        }
        target.src = data[i].src;
        target.alt = data[i].alt;
        target.id = data[i].id;

    } 
    if(keycode === 39){
        // console.log('right arrow was pressed');
        if(i >= length - 1){
            i = 0;
        }
        else{
            i++;
        }
        target.src = data[i].src;
        target.alt = data[i].alt;
        target.id = data[i].id;
    }
});

//fucking asshole you hover element. you've been a big fucking pain in my ass since the beginning.
const imageHolder = document.querySelector('.imageHolder');
const arrowBtns = document.querySelectorAll('.newArrow');
imageHolder.addEventListener('mouseover', () => {
    arrowBtns.forEach(arrow => {
        arrow.style.visibility = 'visible';
    });
});

//prevent right click
document.addEventListener('contextmenu', event => event.preventDefault());

//on smaller screen - not working right now -.
const navBtn = document.querySelector('.navBtn');
const sideNav = document.querySelector('.sideNav');
// const navCloseBtn = document.querySelector('.navCloseBtn');


navBtn.addEventListener('click',() => {
    if(sideNav.style.display === 'block'){
        sideNav.style.display = 'none';
        // rightSection.style.display = 'block';
    }
    else{
        sideNav.style.display = 'block';
        // rightSection.style.display = 'none';
    }
    
});

//height of body on smaller resolutions
const heightAdjust = () => {

    // console.log(deviceHeight);
    body.style.setProperty('--heightOfBody',`${deviceHeight}px`);
    // console.log(target.height);
    // moveStuff.style.setProperty('--heightOfMoveStuff',`${target.height}px`);
}
window.addEventListener('load', heightAdjust());


//spaces and peopel (apparently).
const spaces = document.getElementById('spaces');
const inSpaces = document.getElementById('inSpaces');
const people = document.getElementById('people');
const inPeople = document.getElementById('inPeople');

spaces.addEventListener('click', () => {
    inSpaces.style.display = 'block';
    inPeople.style.display = 'none';
    // console.log('do something!');
});

people.addEventListener('click', () => {
    inSpaces.style.display = 'none';
    inPeople.style.display = 'block';
    // console.log('do something!');
});

//swipe for phone
let clientX;

target.addEventListener('touchstart',(e) => {
    e.preventDefault();
    clientX = e.touches[0].clientX;
    // console.log('start'+clientX);
    
});

target.addEventListener('touchend',(e) => {
    let deltaX;
    deltaX = e.changedTouches[0].clientX - clientX;
    // console.log('computed'+deltaX);
    if(deltaX < 0){
        if(i >= length - 1){
            i = 0;
            // console.log(i);
        }
        else{
            i++;
            // console.log(i);
        }
        target.src = data[i].src;
        target.alt = data[i].alt;
        target.id = data[i].id;

    }else if(deltaX > 0){
        if(i <= 0){
            i = length-1;
            // console.log(i);
        }
        else{
            i--;
            // console.log(i);
        }
        target.src = data[i].src;
        target.alt = data[i].alt;
        target.id = data[i].id;
        
    }
    else if(deltaX === 0){
        if(pauseBtn.style.display === 'block') {
            setInt = setInterval(() => {
                i > length - 2? i = 0 : i++;
       
               target.src = data[i].src;
               target.alt = data[i].alt;
               target.id = data[i].id;
           },2500);
        //    console.log('if block');
            playBtn.style.display = 'block';
            pauseBtn.style.display =  'none';

        } else {
            clearInterval(setInt);
        //    console.log('else block');

            playBtn.style.display = 'none';
            pauseBtn.style.display =  'block';
        }

    }
    e.preventDefault();
});