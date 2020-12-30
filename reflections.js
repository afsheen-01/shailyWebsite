const reflections = [
    {
        id: 1,
        src: './pictures/Photography/Reflection/Reflection_Plaza-100blocks.jpg',
        alt: 'reflection1',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 2,
        src: './pictures/Photography/Reflection/Reflection_Plaza-Colon-diptic.jpg',
        alt: 'reflection2',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 3,
        src:'./pictures/Photography/Reflection/Reflection_framed-window.jpg',
        alt: 'reflection3',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 4,
        src: './pictures/Photography/Reflection/Reflection_portal.jpg',
        alt: 'reflection4',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 5,
        src: './pictures/Photography/Reflection/Reflection_Bridge-Lamp.jpg',
        alt: 'reflection5',
        height: '',
        width:'',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 6,
        src: './pictures/Photography/Reflection/Reflection_Water-angles-diptic.jpg',
        alt: 'reflection6',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 7,
        src:  './pictures/Photography/Reflection/Reflection_Woman-crossing.jpg',
        alt: 'reflection7',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 8,
        src: './pictures/Photography/Reflection/Reflection_bees.jpg',
        alt: 'reflection8',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 9,
        src: './pictures/Photography/Reflection/Reflection_Plant-in-window.jpg',
        alt: 'reflection9',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    }
];

const leftBtn = document.getElementById('btnLeft');
const rightBtn = document.getElementById('btnRight');
const target = document.querySelector('.image');
const home = document.getElementById('bestWork');


// console.log(leftBtn);
let i = 0;
length = reflections.length;
const functionalBtns = () => {
    target.src = reflections[i].src;
    target.alt = reflections[i].alt;
    target.id = reflections[i].id;

    rightBtn.addEventListener('click', () => {
        if(i >= length - 1){
            i = 0;
        }
        else{
            i++;
        }
        target.src = reflections[i].src;
        target.alt = reflections[i].alt;
        target.id = reflections[i].id;
    });

    leftBtn.addEventListener('click', () => {
        if(i <= 0){
            i = length-1;
        }
        else{
            i--;
        }
        target.src = reflections[i].src;
        target.alt = reflections[i].alt;
        target.id = reflections[i].id;
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

//additions for phone
// target.addEventListener('touchmove', (e) => {
//     e.preventDefault();
//     window.alert('the screen was clicked');
//     console.log(target.width);
// });

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
        target.src = reflections[i].src;
        target.alt = reflections[i].alt;
        target.id = reflections[i].id;

    } 
    if(keycode === 39){
        // console.log('right arrow was pressed');
        if(i >= length - 1){
            i = 0;
        }
        else{
            i++;
        }
        target.src = reflections[i].src;
        target.alt = reflections[i].alt;
        target.id = reflections[i].id;
    }
});

//artist statement
    const text = 'The project is an exploration into reflections led by a fascination of the way light reacts differently to different surfaces in the form of reflections and how the build world interacts with these surfaces. <br /><br />The series invites the viewer to see the world through unique portals that are juxtaposed to make double exposure like frames. Throughout the project we see the subject as a reflection of itself on another object. The subject and the object on which it casts its reflection are often facing each other. <br /><br />In this series, I attempt to reflect on architecture through photography, as I review and renew my relationship with the two disciplines.';

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

    let tempArrayHolder = reflections.map(item => {
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
                reflections.forEach(item => {
                    if(item.id == element.id){
                        // console.log('hey, same id');
                        i = item.id - 1;
                        // console.log(i);
                        target.src = reflections[i].src;
                        target.alt = reflections[i].alt;
                        target.id = reflections[i].id;
                        imageHolder.style.display = 'block';
                        thumbnailContainer.style.display = 'none';
                        arrowBtns.forEach(arrow => {
                            arrow.style.visibility = 'visible';
                        });

                        //height of body on smaller resolutions
                        
                        // console.log(deviceHeight);
                        body.style.setProperty('--heightOfBody',`${deviceHeight}px`);
                        // console.log(target.height);
                        moveStuff.style.setProperty('--heightOfMoveStuff',`${target.height}px`);
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
    moveStuff.style.setProperty('--heightOfMoveStuff','auto');
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


/*DO NOT FUCKING TOUCH ME OR YOU'RE DEAD */

//removing underline and putting under photography
const reflectionsUnderline = document.getElementById('reflections');
const spacesUnderline = document.getElementById('spaces');

spacesUnderline.style.textDecoration = 'underline';
reflectionsUnderline.style.textDecoration = 'underline';


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
        target.src = reflections[i].src;
        target.alt = reflections[i].alt;
        target.id = reflections[i].id;

    }else if(deltaX > 0){
        if(i <= 0){
            i = length-1;
            // console.log(i);
        }
        else{
            i--;
            // console.log(i);
        }
        target.src = reflections[i].src;
        target.alt = reflections[i].alt;
        target.id = reflections[i].id;
        
    }
    e.preventDefault();
});