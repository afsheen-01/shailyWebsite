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
        alt: 'greyword house',
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
        alt: 'green saree',
        best: 0,
    },
    {
        id: 6,
        src: './pictures/bestWork/2020_portfolio_207.jpg',
        alt: 'green saree',
        best: 0,
    },
    {
        id: 7,
        src: './pictures/bestWork/2020_portfolio_208.jpg',
        alt: 'yellow saree',
        best: 0,
    },
    {
        id: 8,
        src: './pictures/bestWork/2020_portfolio_209.jpg',
        alt: 'yellow saree',
        best: 0,
    },
    {
        id: 9,
        src: './pictures/bestWork/2020_portfolio_2010.jpg',
        alt: 'domestication1',
        best: 0,
    },
    {
        id: 10,
        src: './pictures/bestWork/2020_portfolio_2011.jpg',
        alt: 'domestication2',
        best: 0,
    },
    {
        id: 11,
        src: './pictures/bestWork/2020_portfolio_2012.jpg',
        alt: 'domestication3',
        best: 0,
    }
];

//back and forth buttons
const leftBtn = document.getElementById('btnLeft');
const rightBtn = document.getElementById('btnRight');
const target = document.querySelector('.image');
const home = document.getElementById('bestWork');


// console.log(leftBtn);
let i = 0;
length = data.length;
const functionalBtns = () => {
    target.src = data[i].src;
    target.alt = data[i].alt;

    rightBtn.addEventListener('click', () => {
        if(i > length){
            i = 0;
        }
        else{
            i++;
        }
        target.src = data[i].src;
        target.alt = data[i].alt;
    });

    leftBtn.addEventListener('click', () => {
        if(i < 0){
            i = 0;
        }
        else{
            i--;
        }
        target.src = data[i].src;
        target.alt = data[i].alt;

    });
}

functionalBtns();

// autoscroll
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');

let setInt;

setInt = setInterval(() => {
    i > length - 2? i = 0 : i++;

   target.src = data[i].src;
   target.alt = data[i].alt;
},4000);

    playBtn.addEventListener('click', () => {
        setInt = setInterval(() => {
            i > length - 2? i = 0 : i++;
   
           target.src = data[i].src;
           target.alt = data[i].alt;
       },2500);

    playBtn.style.display = 'none';
    pauseBtn.style.display =  'block';
    });

pauseBtn.addEventListener('click', () => {
    clearInterval(setInt);
    playBtn.style.display = 'block';
    pauseBtn.style.display =  'none';
});

//imageClick event
const body = document.querySelector('.body');
const arrowBtns = document.querySelectorAll('.arrowBtn');
const crossBtn = document.querySelector('.crossBtn');
const sideNavColor = document.querySelector('.sideNav');

target.addEventListener('click', () => {
    clearInterval(setInt);
    // console.log('you clicked me:)');
    target.style.width = '70vw';
    target.style.height = '65vw';
    target.style.objectFit = 'contain';
    crossBtn.style.display = 'block';
    body.style.backgroundColor  = 'rgba(25,25,25,.5)';
    sideNavColor.style.backgroundColor  = 'rgba(25,25,25,.5)';
    console.log(arrowBtns);
    // arrowBtns.style.backgroundColor  = 'rgba(25,25,25,.5)';
});

crossBtn.addEventListener('click', () => {
    target.style.width = '60vw';
    target.style.height = '45vw';
    target.style.objectFit = 'contain';
    body.style.backgroundColor  = '#fff';

});



//prevent right click
document.addEventListener('contextmenu', event => event.preventDefault());

const navBtn = document.querySelector('.navBtn');
const sideNav = document.querySelector('.sideNav');
const navCloseBtn = document.querySelector('.navCloseBtn');

// navBtn.addEventListener('click',() => {
//     // body.style.color = '#fff';
//     // body.style.backgroundColor = '#fff';
//     if(sideNav.style.display === 'block'){
//         sideNav.style.display = 'none';
//     }
//     else{
//         sideNav.style.display = 'block';
//     }
//     // navCloseBtn.style.dsplay = 'block';
    
// });