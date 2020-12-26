const data = [
    {
        id: 1,
        src: './pictures/bestWork/2020_portfolio_202.jpg',
        alt: 'mosque church',
        best: 0,

    },
    {
        id: 2,
        src: './pictures/bestWork/2020_portfolio_203.jpg',
        alt: 'greywood house',
        best: 0,
    },
    {
        id: 3,
        src: './pictures/bestWork/2020_portfolio_204.jpg',
        alt: 'andalucia',
        best: 0,
    },
    {
        id: 4,
        src: './pictures/bestWork/2020_portfolio_205.jpg',
        alt: 'andalucia',
        best: 0,
    },
    {
        id: 5,
        src: './pictures/bestWork/2020_portfolio_206.jpg',
        alt: 'reflections',
        best: 0,
    },
    {
        id: 6,
        src: './pictures/bestWork/2020_portfolio_207.jpg',
        alt: 'domestication',
        best: 0,
    },
    // {
    //     id: 7,
    //     src: './pictures/bestWork/2020_portfolio_208.jpg',
    //     alt: 'yellow saree',
    //     best: 0,
    // },
    {
        id: 8,
        src: './pictures/bestWork/2020_portfolio_209.jpg',
        alt: 'sheep in madrid',
        best: 0,
    },
    {
        id: 9,
        src: './pictures/bestWork/2020_portfolio_2010.jpg',
        alt: 'green saree',
        best: 0,
    },
    {
        id: 10,
        src: './pictures/bestWork/2020_portfolio_2011.jpg',
        alt: 'photography',
        best: 0,
    },
    {
        id: 11,
        src: './pictures/bestWork/2020_portfolio_2012.jpg',
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
const pauseBtn = document.querySelector('.pause');;

let setInt;

setInt = setInterval(() => {
    i > length - 2? i = 0 : i++;
    // fullScreenImg.href = data[i].src;
   target.src = data[i].src;
   target.alt = data[i].alt;
   target.id = data[i].id;
},4000);

    playBtn.addEventListener('click', () => {
        setInt = setInterval(() => {
            i > length - 2? i = 0 : i++;
   
           target.src = data[i].src;
           target.alt = data[i].alt;
           target.id = data[i].id;
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


//spaces and peopel (apparently).
const spaces = document.getElementById('spaces');
const inSpaces = document.getElementById('inSpaces');
const people = document.getElementById('people');
const inPeople = document.getElementById('inPeople');

spaces.addEventListener('click', () => {
    inSpaces.style.display = 'block';
    inPeople.style.display = 'none';
    console.log('do something!');
});

people.addEventListener('click', () => {
    inSpaces.style.display = 'none';
    inPeople.style.display = 'block';
    console.log('do something!');
});

//swipe for phone
let clientX;

target.addEventListener('touchstart',(e) => {
    e.preventDefault();
    clientX = e.touches[0].clientX;
    console.log('start'+clientX);
    
});

target.addEventListener('touchend',(e) => {
    let deltaX;
    deltaX = e.changedTouches[0].clientX - clientX;
    console.log('computed'+deltaX);
    if(deltaX < 0){
        if(i >= length - 1){
            i = 0;
            console.log(i);
        }
        else{
            i++;
            console.log(i);
        }
        target.src = data[i].src;
        target.alt = data[i].alt;
        target.id = data[i].id;

    }else if(deltaX > 0){
        if(i <= 0){
            i = length-1;
            console.log(i);
        }
        else{
            i--;
            console.log(i);
        }
        target.src = data[i].src;
        target.alt = data[i].alt;
        target.id = data[i].id;
        
    }
    e.preventDefault();
});