const domestication = [
    {
        id: 1,
        src: './pictures/Photography/Domestication/_SRN8338-3.jpg',
        alt: 'domestication1',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 2,
        src: './pictures/Photography/Domestication/_SRN8656.jpg',
        alt: 'domestication2',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 3,
        src: './pictures/Photography/Domestication/13.jpg',
        alt: 'domestication3',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 4,
        src: './pictures/Photography/Domestication/_SRN9146-2-5.jpg',
        alt: 'domestication4',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 5,
        src: './pictures/Photography/Domestication/_SRN8920.jpg',
        alt: 'domestication5',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 6,
        src: './pictures/Photography/Domestication/SRN01229.jpg',
        alt: 'domestication6',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 7,
        src: './pictures/Photography/Domestication/_SRN8996.jpg',
        alt: 'domestication7',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 8,
        src: './pictures/Photography/Domestication/_SRN7354.jpg',
        alt: 'domestication8',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 9,
        src: './pictures/Photography/Domestication/_SRN8677-2.jpg',
        alt: 'domestication9',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 10,
        src: './pictures/Photography/Domestication/_SRN8352.jpg',
        alt: 'domestication10',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 11,
        src: './pictures/Photography/Domestication/_SRN8092.jpg',
        alt: 'domestication11',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 12,
        src: './pictures/Photography/Domestication/_SRN9046.jpg',
        alt: 'domestication12',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 13,
        src: './pictures/Photography/Domestication/_SRN6803.jpg',
        alt: 'domestication13',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    // {
    //     id: 14,
    //     src: './pictures/Photography/Domestication/IMG_9704.mp4',
    //     alt: 'domestication14',
    //     category: 'photography',
    //     subcategory: 'domestication',
    //     type: 'mp4',
    //     best: 0,
    // },
];

const leftBtn = document.getElementById('btnLeft');
const rightBtn = document.getElementById('btnRight');
const target = document.querySelector('.image');
const home = document.getElementById('bestWork');


// console.log(leftBtn);
let i = 0;
length = domestication.length;
const functionalBtns = () => {
    target.src = domestication[i].src;
    target.alt = domestication[i].alt;
    target.id = domestication[i].id;

    rightBtn.addEventListener('click', () => {
        if(i >= length - 1){
            i = 0;
        }
        else{
            i++;
        }
        target.src = domestication[i].src;
        target.alt = domestication[i].alt;
        target.id = domestication[i].id;
    });

    leftBtn.addEventListener('click', () => {
        if(i <= 0){
            i = length-1;
        }
        else{
            i--;
        }
        target.src = domestication[i].src;
        target.alt = domestication[i].alt;
        target.id = domestication[i].id;
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
        target.src = domestication[i].src;
        target.alt = domestication[i].alt;
        target.id = domestication[i].id;

    } 
    if(keycode === 39){
        // console.log('right arrow was pressed');
        if(i >= length - 1){
            i = 0;
        }
        else{
            i++;
        }
        target.src = domestication[i].src;
        target.alt = domestication[i].alt;
        target.id = domestication[i].id;
    }
});

//artist statement

    const text = 'This project documents the cultural and physical marginalization of plants and animals in our urban societies.<br /><br />The gaze between animal and man is unique and intriguing. It is a window to the untapped world inside the mind of an animal, a world easily accessed by language amongst humans.<br />Therefore the silence of nature guarantees its distance, its distinction, its exclusion from man.<br /><br />The work aims to pose questions on man’s need of control on his surroundings or at least maintaining the illusion of control.';

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
const moveStuff = document.querySelector('.moveStuff');
const crossBtn = document.querySelector('.crossBtn');

const functionToDisplayGrid = () => {
    imageHolder.style.display = 'none';
    imageText.style.display = 'none';

    let tempArrayHolder = domestication.map(item => {
        // if(item.type === 'mp4') {
        //     return `<video controls loop><source src = "${item.src}" class = "thumbImg" id = "${item.id}"></video>`
        // }
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
                domestication.forEach(item => {
                    if(item.id == element.id){
                        // console.log('hey, same id');
                        i = item.id - 1;
                        // console.log(i);
                        target.src = domestication[i].src;
                        target.alt = domestication[i].alt;
                        target.id = domestication[i].id;
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
    moveStuff.style.setProperty('--heightOfStuff','inherit');
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

//removing underline and putting under photography
const domUnderline = document.getElementById('domestication');
const peopleUnderline = document.getElementById('people');

peopleUnderline.style.textDecoration = 'underline';
domUnderline.style.textDecoration = 'underline';
// sareeUnderline.style.textDecorationColor = '#e68a00';


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
        target.src = domestication[i].src;
        target.alt = domestication[i].alt;
        target.id = domestication[i].id;

    }else if(deltaX > 0){
        if(i <= 0){
            i = length-1;
            // console.log(i);
        }
        else{
            i--;
            // console.log(i);
        }
        target.src = domestication[i].src;
        target.alt = domestication[i].alt;
        target.id = domestication[i].id;
        
    }
    e.preventDefault();
});