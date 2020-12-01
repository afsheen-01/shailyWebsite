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
const fullScreenImg = document.querySelector('.fullScreenImg')


// console.log(leftBtn);
let i = 0;
length = data.length;
const functionalBtns = () => {
    // fullScreenImg.href = data[i].src;
    target.src = data[i].src;
    target.alt = data[i].alt;

    rightBtn.addEventListener('click', () => {
        if(i > length){
            i = 0;
        }
        else{
            i++;
        }
        // fullScreenImg.href = data[i].src;
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
        // fullScreenImg.href = data[i].src;
        target.src = data[i].src;
        target.alt = data[i].alt;

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
    playBtn.style.textAlign = 'center';
    pauseBtn.style.display =  'none';
});

//imageClick event

target.addEventListener('click', () => {
    clearInterval(setInt);
    target.requestFullscreen()
        // .then(() => {
        //     target.fullscreenchange(() => {
        //         let elHolder = target.fullscreenElement();
        //         if(elHolder === null){
        //             console.log('going back out.');
        //         }
        //         else{

        //         }
        //     });
        // })
        .catch(err => {
            console.log(err);
        });
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
const navCloseBtn = document.querySelector('.navCloseBtn');
const rightSection = document.querySelector('.right');

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

/* I WILL GET BACK TO YOU IN 20 MINS */

// window.addEventListener('keydown',() => {
//     console.log('did you press a key?');
// });
// window.addEventListener('keyup',() => {
//     console.log('did you unpress a key?');
// });