const artwork = [
    {
        id: 1,
        src: './pictures/lowres_Website/Artworks/0-Darkroom-for-housing.jpg',
        alt: 'artworks1',
        caption:'Darkroom architecture'
    },
    {
        id: 2,
        src: './pictures/lowres_Website/Artworks/0.2-QueenOfSpades.jpg',
        alt: 'artworks2',
        caption:'Queen of Spades - Album art for musician Jose Neil Gomes'
    },
    {
        id: 3,
        src: './pictures/lowres_Website/Artworks/0.5-Exospheres.jpg',
        alt: 'artworks3',
        caption:'Microscopic - macroscopic'
    },
    {
        id: 4,
        src: './pictures/lowres_Website/Artworks/0.8-Time-travel copy.png',
        alt: 'artworks4',
        caption:'Time-traveling tourists.'
    },
    {
        id: 5,
        src: './pictures/lowres_Website/Artworks/1-Next-door-stangers-.jpg',
        alt: 'artworks5',
        caption:'Next door stangers'
    },
    {
        id: 6,
        src: './pictures/lowres_Website/Artworks/5-Whirlpool-mind.jpg',
        alt: 'artworks6',
        caption:'Brainwashing'
    },
    {
        id: 7,
        src: './pictures/lowres_Website/Artworks/6-Churchgate-station-mumbai.jpg',
        alt: 'artworks7',
        caption:''
    },
    {
        id: 8,
        src: './pictures/lowres_Website/Artworks/7-Ducktails.jpg',
        alt: 'artworks8',
        caption:'Getting my ducks in a row'
    },
    {
        id: 9,
        src: './pictures/lowres_Website/Artworks/7.5-Postcard_of_a_figmental_biosphere.jpg',
        alt: 'artworks9',
        caption:'Postcards from a  gmental biosphere'
    },
    {
        id: 10,
        src: './pictures/lowres_Website/Artworks/8-Satelite-Housing.jpg',
        alt: 'artworks10',
        caption:''
    },
    {
        id: 11,
        src: './pictures/lowres_Website/Artworks/9-Time-capsule-of-mumbai.jpg',
        alt: 'artworks11',
        caption:'An exercise in time capsuling'
    }
];

const leftBtn = document.getElementById('btnLeft');
const rightBtn = document.getElementById('btnRight');
const target = document.querySelector('.image');
const caption = document.querySelector('.caption');


// console.log(leftBtn);
let i = 0;
length = artwork.length;
const functionalBtns = () => {
    target.src = artwork[i].src;
    target.alt = artwork[i].alt;
    target.id = artwork[i].id;

    rightBtn.addEventListener('click', () => {
        if(i >= length-1){
            i = 0;
        }
        else{
            i++;
        }
        target.src = artwork[i].src;
        target.alt = artwork[i].alt;
        target.id = artwork[i].id;
        caption.innerHTML = artwork[i].caption;
    });

    leftBtn.addEventListener('click', () => {
        if(i < 0){
            i = length-1;
            
        }
        else{
            i--;
        }
        
        target.src = artwork[i].src;
        target.alt = artwork[i].alt;
        target.id = artwork[i].id;
        caption.innerHTML = artwork[i].caption;

    });
}

//fullscreen 
target.addEventListener('click', (e) => {
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
        
        target.src = artwork[i].src;
        target.alt = artwork[i].alt;
        target.id = artwork[i].id;
        caption.innerHTML = artwork[i].caption;

    } 
    if(keycode === 39){
        // console.log('right arrow was pressed');
        if(i >= length-1){
            i = 0;
        }
        else{
            i++;
        }
        target.src = artwork[i].src;
        target.alt = artwork[i].alt;
        target.id = artwork[i].id;
        caption.innerHTML = artwork[i].caption;
    }
});

functionalBtns();


//removing underline and putting under photography
const artworkUnderline = document.getElementById('artworks');

artworkUnderline.style.textDecoration = 'underline';


const imageHolder = document.querySelector('.imageHolder');

//imageHolder fuckign css not working after click!
//somebody please fucking kill me!!


const arrowBtns = document.querySelectorAll('.newArrow');
imageHolder.addEventListener('mouseover', () => {
    // console.log('you hovered over me:):)');
    // e.preventDefault();
    arrowBtns.forEach(arrow => {
        arrow.style.visibility = 'visible';
    });
});

//thumbnail attempt 100110010010001110010
// const thumbnail = document.getElementById('thumbnail');
const thumbnailContainer = document.querySelector('.thumbnailsContainer');
const thumbnailsGrid = document.querySelector('.thumbnailsGrid');
const body = document.querySelector('.body');
const deviceHeight = window.innerHeight;
const moveStuff = document.querySelector('.moveStuff');
const crossBtn = document.querySelector('.crossBtn');

const functionToDisplayGrid = () => {
    imageHolder.style.display = 'none';
    // imageText.style.display = 'none';

    let tempArrayHolder = artwork.map(item => {
        return `<img src = "${item.src}" alt = "${item.alt}" class = "thumbImg" id = "${item.id}" />`

    });
    // console.log(tempArrayHolder);
    tempArrayHolder = tempArrayHolder.join("");

   thumbnailsGrid.innerHTML =  tempArrayHolder;
    arrowBtns.forEach(arrow => {
        arrow.style.visibility = 'hidden';
    });

    thumbImg = document.querySelectorAll('.thumbImg');
    // console.log(thumbImg);

        thumbImg.forEach(element => {
            element.addEventListener('click', () => {
                // console.log(element.id);
                artwork.forEach(item => {
                    if(item.id == element.id){
                        // console.log('hey, same id');
                        i = item.id - 1;
                        // console.log(i);
                        target.src = artwork[i].src;
                        target.alt = artwork[i].alt;
                        caption.innerHTML = artwork[i].caption;
                        // functionalBtns();
                        // target.id = artwork[i].id;
                        imageHolder.style.display = 'block';
                        thumbnailContainer.style.display = 'none';
                        // thumbnail.style.textDecoration = 'none';
                        // console.log(target);
                        imageHolder.style.display = 'flex';
                        imageHolder.style.flexDirection = 'column';
                        imageHolder.style.justifyContent = 'center';
                        imageHolder.style.alignItems = 'center';
                        arrowBtns.forEach(arrow => {
                            arrow.style.visibility = 'visible';
                        });

                        //height of body on smaller resolutions
                        // console.log(deviceHeight);
                        body.style.setProperty('--heightOfBody',`${deviceHeight}px`);
                        // console.log(target.height);
                        // moveStuff.style.setProperty('--heightOfMoveStuff',`${target.height}px`);
                    }
                });
            });
        });

}



crossBtn.addEventListener('click', () => {
    thumbnailContainer.style.display = 'block';
    imageHolder.style.display = 'none';
    arrowBtns.forEach(arrow => {
        arrow.style.visibility = 'hidden';
    });
    body.style.setProperty('--heightOfBody',`100%`);
    // moveStuff.style.setProperty('--heightOfMoveStuff','auto');
    // imageText.style.display = 'block';
});

window.addEventListener('load', functionToDisplayGrid());


//three bars
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
        target.src = artwork[i].src;
        target.alt = artwork[i].alt;
        target.id = artwork[i].id;
        caption.innerHTML = artwork[i].caption;

    }else if(deltaX > 0){
        if(i <= 0){
            i = length-1;
            // console.log(i);
        }
        else{
            i--;
            // console.log(i);
        }
        target.src = artwork[i].src;
        target.alt = artwork[i].alt;
        target.id = artwork[i].id;
        caption.innerHTML = artwork[i].caption;
        
    }
    e.preventDefault();
});