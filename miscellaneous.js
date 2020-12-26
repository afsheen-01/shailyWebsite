const saree = [
    {
        id: 1,
        src: './pictures/Architecture/miscellaneous/SRN02794.jpg',
        alt: 'misc1',
        category: 'architecture',
        subcategory: 'misc',
        best: 0,
    
    },
    {
        id: 2,
        src: './pictures/Architecture/miscellaneous/09_SRN7153.jpg',
        alt: 'misc2',
        category: 'architecture',
        subcategory: 'misc',
        best: 0,
    },
    {
        id: 3,
        src: './pictures/Architecture/miscellaneous/2_2.jpg',
        alt: 'misc3',
        category: 'architecture',
        subcategory: 'misc',
        best: 0,
    },
    {
        id: 4,
        src: './pictures/Architecture/miscellaneous/7.jpg',
        alt: 'misc4',
        category: 'architecture',
        subcategory: 'misc',
        best: 0,
    },
    {
        id: 5,
        src: './pictures/Architecture/miscellaneous/12.jpg',
        alt: 'misc5',
        category: 'architecture',
        subcategory: 'misc',
        best: 0,
    },
    {
        id: 6,
        src: './pictures/Architecture/miscellaneous/4.jpeg',
        alt: 'misc6',
        category: 'architecture',
        subcategory: 'misc',
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
        if(i >= length - 1){
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

//DOM elements
const imageHolder = document.querySelector('.imageHolder');
const artistStatement = document.getElementById('as');
const rightSide = document.querySelector('.right');
const imageText = document.querySelector('.imageText');
const textElement = document.querySelector('.fjost');
const minusBtn = document.querySelector('.minus');

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
    // imageText.style.display = 'block';
});


window.addEventListener('load', functionToDisplayGrid() );

//removing underline and putting under photography
const miscUnderline = document.getElementById('miscellaneous');
const spacesUnderline = document.getElementById('spaces');

spacesUnderline.style.textDecoration = 'underline';
miscUnderline.style.textDecoration = 'underline';
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
inSpaces.style.display = 'block';

people.addEventListener('click', () => {
    inSpaces.style.display = 'none';
    inPeople.style.display = 'block';
    // console.log('do something!');
});
