const andalucia = [
    {
        id: 1,
        src: './pictures/Architecture/Arch/2020_Andalucia_mosque-church.jpg',
        alt: 'anda1',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 2,
        src: './pictures/Architecture/Arch/2020_Andalucia_goldenhour.jpg',
        alt: 'anda2',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 3,
        src: './pictures/Architecture/Arch/2020_Andalucia_connection.jpg',
        alt: 'anda3',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 4,
        src: './pictures/Architecture/Arch/2020_Andalucia_architecture.jpg',
        alt: 'anda4',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 5,
        src: './pictures/Architecture/Arch/2020_Andalucia_stained-columns.jpg',
        alt: 'anda5',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 6,
        src: './pictures/Architecture/Arch/2020_Andalucia_catreflection.jpg',
        alt: 'anda6',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 7,
        src: './pictures/Architecture/Arch/2020_Andalucia_riverslopes.jpg',
        alt: 'anda10',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
];

const leftBtn = document.getElementById('btnLeft');
const rightBtn = document.getElementById('btnRight');
const target = document.querySelector('.image');
const home = document.getElementById('bestWork');


// console.log(leftBtn);
let i = 0;
length = andalucia.length;
const functionalBtns = () => {
    target.src = andalucia[i].src;
    target.alt = andalucia[i].alt;
    target.id = andalucia[i].id;

    rightBtn.addEventListener('click', () => {
        if(i >= length - 1){
            i = 0;
        }
        else{
            i++;
        }
        target.src = andalucia[i].src;
        target.alt = andalucia[i].alt;
        target.id = andalucia[i].id;
    });

    leftBtn.addEventListener('click', () => {
        if(i <= 0){
            i = length-1;
        }
        else{
            i--;
        }
        target.src = andalucia[i].src;
        target.alt = andalucia[i].alt;
        target.id = andalucia[i].id;
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
        target.src = andalucia[i].src;
        target.alt = andalucia[i].alt;
        target.id = andalucia[i].id;

    } 
    if(keycode === 39){
        // console.log('right arrow was pressed');
        if(i >= length - 1){
            i = 0;
        }
        else{
            i++;
        }
        target.src = andalucia[i].src;
        target.alt = andalucia[i].alt;
        target.id = andalucia[i].id;
    }
});
functionalBtns();

//removing underline and putting under photography
const andaUnderline = document.getElementById('andalucia');
const spacesUnderline = document.getElementById('spaces');

spacesUnderline.style.textDecoration = 'underline';
andaUnderline.style.textDecoration = 'underline';

//artist statement
const text = "Travel photos from the autonomous regions of Andalucia in the south of Spain. The region has a great amalgamation of Moorish influences, that reflect in its architecture such as Alcazar castle in Seville, Córdoba’s Mesquite Mosque-Cathedral and Granada’s Alambra Palace.";

//DOM elements
const imageHolder = document.querySelector('.imageHolder');
const artistStatement = document.getElementById('as');
const rightSide = document.querySelector('.right');
const imageText = document.querySelector('.imageText');
const textElement = document.querySelector('.fjost');
const minusBtn = document.querySelector('.minus');
let checkBeforeAs;


artistStatement.addEventListener('click', () => {
    if(imageHolder.style.display === 'block'){
        checkBeforeAs = true;
    } else{
        checkBeforeAs = false;
    }
    artistStatement.style.textDecoration = 'underline';
    imageHolder.style.display = 'none';
    thumbnailContainer.style.display = 'none';
    // thumbnail.style.textDecoration = 'none';
    textElement.innerHTML = text;
    imageText.style.display = 'block';
    minusBtn.style.display = 'block';
    arrowBtns.forEach(arrow => {
        arrow.style.visibility = 'hidden';
    });
});

minusBtn.addEventListener('click', () => {
    if(checkBeforeAs){
        imageHolder.style.display = 'block';
        arrowBtns.forEach(arrow => {
            arrow.style.visibility = 'visible';
        });
    } else{
        thumbnailContainer.style.display = 'block';
    }
    artistStatement.style.textDecoration = 'none'; 
    imageText.style.display = 'none';
    minusBtn.style.display = 'none';
});

//imageHolder
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
const moveStuff = document.querySelector('.moveStuff');
const crossBtn = document.querySelector('.crossBtn');

const functionToDisplayGrid = () => {
    imageHolder.style.display = 'none';
    imageText.style.display = 'none';

    let tempArrayHolder = andalucia.map(item => {
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
                andalucia.forEach(item => {
                    if(item.id == element.id){
                        // console.log('hey, same id');
                        i = item.id - 1;
                        // console.log(i);
                        target.src = andalucia[i].src;
                        target.alt = andalucia[i].alt;
                        target.id = andalucia[i].id;
                        imageHolder.style.display = 'block';
                        thumbnailContainer.style.display = 'none';
                        arrowBtns.forEach(arrow => {
                            arrow.style.visibility = 'visible';
                        });

                        //height of body on smaller resolutions
                        const body = document.querySelector('.body');
                        const deviceHeight = window.innerHeight;
                        // console.log(deviceHeight);
                        body.style.setProperty('--heightOfBody',`${deviceHeight}px`);
                        // console.log(target.height);
                        moveStuff.style.setProperty('--heightOfStuff',`${target.height}px`);
                        // thumbnail.style.textDecoration = 'none';
                        // console.log(target);
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
    moveStuff.style.setProperty('--heightOfStuff','auto');
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
inSpaces.style.display = 'block';

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
        target.src = andalucia[i].src;
        target.alt = andalucia[i].alt;
        target.id = andalucia[i].id;

    }else if(deltaX > 0){
        if(i <= 0){
            i = length-1;
            // console.log(i);
        }
        else{
            i--;
            // console.log(i);
        }
        target.src = andalucia[i].src;
        target.alt = andalucia[i].alt;
        target.id = andalucia[i].id;
        
    }
    e.preventDefault();
});