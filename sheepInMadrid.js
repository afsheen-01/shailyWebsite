const sheepInMadrid = [
    {
        id: 1,
        src: './pictures/Photography/SheepInMadrid/SRN01226.jpg',
        alt: 'sheep in madrid 1',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 2,
        src: './pictures/Photography/SheepInMadrid/SRN01281.jpg',
        alt: 'sheep in madrid 2',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 3,
        src: './pictures/Photography/SheepInMadrid/SRN01307.jpg',
        alt: 'sheep in madrid 3',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 4,
        src: './pictures/Photography/SheepInMadrid/SRN01330.jpg',
        alt: 'sheep in madrid 4',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 5,
        src: './pictures/Photography/SheepInMadrid/SRN01339.jpg',
        alt: 'sheep in madrid 5',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 6,
        src: './pictures/Photography/SheepInMadrid/SRN03174.jpg',
        alt: 'sheep in madrid 6',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 7,
        src: './pictures/Photography/SheepInMadrid/SRN03258.jpg',
        alt: 'sheep in madrid 7',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 8,
        src: './pictures/Photography/SheepInMadrid/SRN03571.jpg',
        alt: 'sheep in madrid 8',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 9,
        src: './pictures/Photography/SheepInMadrid/SRN03603.jpg',
        alt: 'sheep in madrid 9',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 10,
        src: './pictures/Photography/SheepInMadrid/SRN03643.jpg',
        alt: 'sheep in madrid 10',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 11,
        src: './pictures/Photography/SheepInMadrid/SRN04036.jpg',
        alt: 'sheep in madrid 11',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 12,
        src: './pictures/Photography/SheepInMadrid/SRN03749.jpg',
        alt: 'sheep in madrid 12',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    }
];

const leftBtn = document.getElementById('btnLeft');
const rightBtn = document.getElementById('btnRight');
const target = document.querySelector('.image');
const home = document.getElementById('bestWork');


// console.log(leftBtn);
let i = 0;
length = sheepInMadrid.length;
const functionalBtns = () => {
    target.src = sheepInMadrid[i].src;
    target.alt = sheepInMadrid[i].alt;
    target.id = sheepInMadrid[i].id;

    rightBtn.addEventListener('click', () => {
        if(i >= length - 1){
            i = 0;
        }
        else{
            i++;
        }
        target.src = sheepInMadrid[i].src;
        target.alt = sheepInMadrid[i].alt;
        target.id = sheepInMadrid[i].id;
    });

    leftBtn.addEventListener('click', () => {
        if(i <= 0){
            i = length-1;
        }
        else{
            i--;
        }
        target.src = sheepInMadrid[i].src;
        target.alt = sheepInMadrid[i].alt;
        target.id = sheepInMadrid[i].id;

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
        target.src = sheepInMadrid[i].src;
        target.alt = sheepInMadrid[i].alt;
        target.id = sheepInMadrid[i].id;

    } 
    if(keycode === 39){
        // console.log('right arrow was pressed');
        if(i >= length-1){
            i = 0;
        }
        else{
            i++;
        }
        target.src = sheepInMadrid[i].src;
        target.alt = sheepInMadrid[i].alt;
        target.id = sheepInMadrid[i].id;
    }
});

//artist statement
const text = 'Every year in October, Madrid’s streets get taken over by thousands of sheep, as shepherds steer their flocks through the heart of the Spanish capital, following ancient migratory routes. The animals cross from northern Spain to southern pastures for winter grazing. This marks the beginning of winter, the sheep leave the city that day but their wool remains, worn by people to keep themselves warm though the winter.';
    
//DOM elements
const imageHolder = document.querySelector('.imageHolder');
const artistStatement = document.getElementById('as');
const rightSide = document.querySelector('.right');
const imageText = document.querySelector('.imageText');
const textElement = document.querySelector('.fjost');
const minusBtn = document.querySelector('.minus');
const moveStuff = document.querySelector('.moveStuff');
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


    //height of body on smaller resolutions
    const body = document.querySelector('.body');
    const deviceHeight = window.innerHeight;
    // console.log(deviceHeight);
    body.style.setProperty('--heightOfBody',`${deviceHeight}px`);
    // console.log(target.height);
    // moveStuff.style.setProperty('--heightOfStuff',`${target.height}px`);
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
//fucking asshole you hover element. you've been a big fucking pain in my ass since the beginning.
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
const crossBtn = document.querySelector('.crossBtn');

const functionToDisplayGrid = () => {

    imageHolder.style.display  = 'none';
    imageText.style.display = 'none';

    let tempArrayHolder = sheepInMadrid.map(item => {
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
                
                sheepInMadrid.forEach(item => {
                    if(item.id == element.id){
                        // console.log('hey, same id');
                        i = item.id - 1;
                        // console.log(i);
                        target.src = sheepInMadrid[i].src;
                        target.alt = sheepInMadrid[i].alt;
                        target.id = sheepInMadrid[i].id;
                        imageHolder.style.display = 'block';
                        thumbnailContainer.style.display = 'none';
                        arrowBtns.forEach(arrow => {
                            arrow.style.visibility = 'visible';
                        });
                        
                        //height of body on smaller resolutions
                        
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
    // console.log('btn clicked');
    thumbnailContainer.style.display = 'block';
    imageHolder.style.display = 'none';
    arrowBtns.forEach(arrow => {
        arrow.style.visibility = 'hidden';
    });
    body.style.setProperty('--heightOfBody',`100%`);
    // console.log(target.height);
    // moveStuff.style.setProperty('--heightOfStuff',`${target.height}px`);
    // imageText.style.display = 'block';
});

//function call for buttons
functionalBtns();
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


/*DO NOT TOUCH THIS PART */
//removing underline and putting under photography
const simUnderline = document.getElementById('sheepInMadrid');
const peopleUnderline = document.getElementById('people');

peopleUnderline.style.textDecoration = 'underline';
simUnderline.style.textDecoration = 'underline';

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
inPeople.style.display = 'block';


//swipe for phone
let clientX; //clientY;

target.addEventListener('touchstart',(e) => {
    e.preventDefault();
    clientX = e.touches[0].clientX;
    // clientY = e.touches[0].clientY;
    // console.log('start'+clientX);
    
});

target.addEventListener('touchend',(e) => {
    let deltaX; // deltaY;

    e.preventDefault();
    deltaX = e.changedTouches[0].clientX - clientX;
    // deltaY = e.changedTouches[0].clientY - clientY;
    // console.log('computed'+deltaY);

    // if (deltaY < 50) {
    //     target.style.overflowY = "hidden";

    // } else {
    //     target.style.overflowY = "scroll";
    // }

    if(deltaX < 0){
        if(i >= length - 1){
            i = 0;
            // console.log(i);
        }
        else{
            i++;
            // console.log(i);
        }
        target.src = sheepInMadrid[i].src;
        target.alt = sheepInMadrid[i].alt;
        target.id = sheepInMadrid[i].id;

    }else if(deltaX > 0){
        if(i <= 0){
            i = length-1;
            // console.log(i);
        }
        else{
            i--;
            // console.log(i);
        }
        target.src = sheepInMadrid[i].src;
        target.alt = sheepInMadrid[i].alt;
        target.id = sheepInMadrid[i].id;
    }
});

