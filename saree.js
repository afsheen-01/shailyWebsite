const saree = [
    {
        id: 1,
        src: './pictures/Photography/Saree-w-border/2020_Saree_Presentation-3.jpg',
        alt: 'red saree',
        category: 'photography',
        subcategory: 'saree',
        best: 0,
    
    },
    {
        id: 2,
        src: './pictures/Photography/Saree-w-border/2020_Saree_Presentation-4.jpg',
        alt: 'red saree',
        category: 'photography',
        subcategory: 'saree',
        best: 0,
    },
    {
        id: 3,
        src: './pictures/Photography/Saree-w-border/2020_Saree_Presentation-5.jpg',
        alt: 'red saree',
        category: 'photography',
        subcategory: 'saree',
        best: 0,
    },
    {
        id: 4,
        src: './pictures/Photography/Saree-w-border/2020_Saree_Presentation-6.jpg',
        alt: 'red saree',
        category: 'photography',
        subcategory: 'saree',
        best: 0,
    },
    {
        id: 5,
        src: './pictures/Photography/Saree-w-border/2020_Saree_Presentation-7.jpg',
        alt: 'green saree',
        category: 'photography',
        subcategory: 'saree',
        best: 0,
    },
    {
        id: 6,
        src: './pictures/Photography/Saree-w-border/2020_Saree_Presentation-8.jpg',
        alt: 'green saree',
        category: 'photography',
        subcategory: 'saree',
        best: 0,
    },
    {
        id: 7,
        src: './pictures/Photography/Saree-w-border/2020_Saree_Presentation-9.jpg',
        alt: 'green saree',
        category: 'photography',
        subcategory: 'saree',
        best: 0,
    },
    {
        id: 8,
        src: './pictures/Photography/Saree-w-border/2020_Saree_Presentation-10.jpg',
        alt: 'yellow saree',
        category: 'photography',
        subcategory: 'saree',
        best: 0,
    },
    {
        id: 9,
        src: './pictures/Photography/Saree-w-border/2020_Saree_Presentation-11-50op.jpg',
        alt: 'yellow saree',
        category: 'photography',
        subcategory: 'saree',
        best: 0,
    }
];

const leftBtn = document.getElementById('btnLeft');
const rightBtn = document.getElementById('btnRight');
const target = document.querySelector('.image');
const home = document.getElementById('bestWork');


// console.log(leftBtn);
let i = 0;
length = saree.length;
const functionalBtns = () => {
    target.src = saree[i].src;
    target.alt = saree[i].alt;
    target.id = saree[i].id;

    rightBtn.addEventListener('click', () => {
        if(i >= length - 1){
            i = 0;
        }
        else{
            i++;
        }
        target.src = saree[i].src;
        target.alt = saree[i].alt;
        target.id = saree[i].id;
    });

    leftBtn.addEventListener('click', () => {
        if(i <= 0){
            i = length-1;
        }
        else{
            i--;
        }
        target.src = saree[i].src;
        target.alt = saree[i].alt;
        target.id = saree[i].id;

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
        target.src = saree[i].src;
        target.alt = saree[i].alt;
        target.id = saree[i].id;

    } 
    if(keycode === 39){
        // console.log('right arrow was pressed');
        if(i >= length-1){
            i = 0;
        }
        else{
            i++;
        }
        target.src = saree[i].src;
        target.alt = saree[i].alt;
        target.id = saree[i].id;
    }
});

//artist statement
const text = 'This project is about the saree, <br/><div class = "indent">A sari / saree is a women’s garment from the Indian subcontinent that consists of an unstitched drape varying from 5.5 to 9 meters in length and 600 to 1,200 mm in breadth that is typically wrapped around the waist, with one end draped over the shoulder, baring a portion of the midriff.</div><br/><br />The series captures the simplicity of the saree and enhances and draws attention to fabric, flow and colour.<br/>This project is very close to home, quite literally. My family has been in the buisness of sarees since 54 years, supporting local craftsmen and traditional techniques. After a few cancelled shoots due to the current circumstances, I convinced my mother to be the model and it was such a lucky decision, she quickly became my muse for this series.<br/>Through this work I want to open a window to the rich Indian culture brimming with colour, tradition and grace.';
    
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


//proved to be pretty fucking useless as a piece of code!
// const imageContainer = document.querySelector('.imageContainer');

// rightSide.addEventListener('mouseout', (e) => {
//     console.log('you hovered out of me:):)');
//     e.preventDefault();
//     arrowBtns.forEach(arrow => {
//         arrow.style.visibility = 'hidden';
//     });
// });

//thumbnail attempt 100110010010001110010
// const thumbnail = document.getElementById('thumbnail');
const thumbnailContainer = document.querySelector('.thumbnailsContainer');
const thumbnailsGrid = document.querySelector('.thumbnailsGrid');
const body = document.querySelector('.body');
const deviceHeight = window.innerHeight;
const crossBtn = document.querySelector('.crossBtn');

const functionToDisplayGrid = () => {

    imageHolder.style.display = 'none';
    imageText.style.display = 'none';

    let tempArrayHolder = saree.map(item => {
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
                saree.forEach(item => {
                    if(item.id == element.id){
                        // console.log('hey, same id');
                        i = item.id - 1;
                        // console.log(i);
                        target.src = saree[i].src;
                        target.alt = saree[i].alt;
                        target.id = saree[i].id;
                        imageHolder.style.display = 'block';
                        thumbnailContainer.style.display = 'none';
                        arrowBtns.forEach(arrow => {
                            arrow.style.visibility = 'visible';
                        });

                        //height of body on smaller resolutions
                        
                        // console.log(deviceHeight);
                        body.style.setProperty('--heightOfBody',`${deviceHeight}px`);
                        // console.log(target.height);
                        // moveStuff.style.setProperty('--heightOfMoveStuff',`${target.height}px`);
                        // thumbnail.style.textDecoration = 'none';
                        // console.log(target);
                    }
                });
            });
        });
}



crossBtn.addEventListener('click', () => {
    thumbnailContainer.style.display = 'block';
    // thumbnail.style.textDecoration = 'none';
    imageHolder.style.display = 'none';
    arrowBtns.forEach(arrow => {
        arrow.style.visibility = 'hidden';
    });
    body.style.setProperty('--heightOfBody',`100%`);
    // moveStuff.style.setProperty('--heightOfMoveStuff','auto');
    // imageText.style.display = 'block';
});


window.addEventListener('load', functionToDisplayGrid() );

//removing underline and putting under photography
const sareeUnderline = document.getElementById('saree');
const peopleUnderline = document.getElementById('people');

peopleUnderline.style.textDecoration = 'underline';
sareeUnderline.style.textDecoration = 'underline';
// sareeUnderline.style.textDecorationColor = '#e68a00';

//three bars
const navBtn = document.querySelector('.navBtn');
const sideNav = document.querySelector('.sideNav');
const navCloseBtn = document.querySelector('.navCloseBtn');
// const leftSection = document.querySelector('.left');

navBtn.addEventListener('click',() => {
    if(sideNav.style.display === 'block'){
        sideNav.style.display = 'none';
        // leftSection.style.boxShadow = '.5px .5px #000';
    }
    else{
        sideNav.style.display = 'block';
        // leftSection.style.boxShadow = 'none';
        // rightSection.style.display = 'none';
    }
    
});

//function call for buttons
functionalBtns();

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
        target.src = saree[i].src;
        target.alt = saree[i].alt;
        target.id = saree[i].id;

    }else if(deltaX > 0){
        if(i <= 0){
            i = length-1;
            // console.log(i);
        }
        else{
            i--;
            // console.log(i);
        }
        target.src = saree[i].src;
        target.alt = saree[i].alt;
        target.id = saree[i].id;
        
    }
    e.preventDefault();
});