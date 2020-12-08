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
        src: './pictures/Photography/SheepInMadrid/SRN03749.jpg',
        alt: 'sheep in madrid 11',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 12,
        src: './pictures/Photography/SheepInMadrid/SRN04036.jpg',
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

    rightBtn.addEventListener('click', () => {
        if(i > length - 2){
            i = 0;
        }
        else{
            i++;
        }
        target.src = sheepInMadrid[i].src;
        target.alt = sheepInMadrid[i].alt;
    });

    leftBtn.addEventListener('click', () => {
        if(i < 0){
            i = 0;
        }
        else{
            i--;
        }
        target.src = sheepInMadrid[i].src;
        target.alt = sheepInMadrid[i].alt;

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
            i = 0;
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
        if(i > length - 2){
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


as.addEventListener('click', () => {
    artistStatement.style.textDecoration = 'underline';
    imageHolder.style.display = 'none';
    thumbnailContainer.style.display = 'none';
    thumbnail.style.textDecoration = 'none';
    textElement.innerHTML = text;
    imageText.style.display = 'block';
    /* please remove the 2 of us from all files :):(*/
    // rightSide.style.margin = '17vw 0';
    // imageHolder.style.width = '45vw';
    minusBtn.style.display = 'block';
    arrowBtns.forEach(arrow => {
        arrow.style.visibility = 'hidden';
    });
    // arrowBtns.style.visibility = 'hidden';
});

minusBtn.addEventListener('click', () => {
    artistStatement.style.textDecoration = 'none';
    imageHolder.style.display = 'block';
    imageText.style.display = 'none';
    /* please remove the 2 of us from all files :):(*/
    // rightSide.style.margin = '0';
    // imageHolder.style.width = '60vw';
    minusBtn.style.display = 'none';
});

//thumbnail attempt 100110010010001110010
const thumbnail = document.getElementById('thumbnail');
const thumbnailContainer = document.querySelector('.thumbnailsContainer');
const thumbnailsGrid = document.querySelector('.thumbnailsGrid');
const crossBtn = document.querySelector('.crossBtn');


thumbnail.addEventListener('click', () => {
    thumbnailContainer.style.display = 'block';
    imageHolder.style.display = 'none';
    imageText.style.display = 'none';
    thumbnail.style.textDecoration = 'underline';
    as.style.textDecoration = 'none';
    arrowBtns.forEach(arrow => {
        arrow.style.visibility = 'hidden';
    });


    tempArrayHolder = sheepInMadrid.map(item => {
        return `<img src = "${item.src}" alt = "${item.alt}" class = "thumbImg" id = "${item.id}" style = "height: 10vw; width: 15vw; object-fit: contain; margin: 1em;" />`

    });
    // console.log(tempArrayHolder);
    tempArrayHolder = tempArrayHolder.join("");

   thumbnailsGrid.innerHTML =  tempArrayHolder;

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
                        thumbnail.style.textDecoration = 'none';
                        // console.log(target);
                    }
                });
            });
        });

});

crossBtn.addEventListener('click', () => {
    thumbnailContainer.style.display = 'none';
    imageHolder.style.display = 'block';
    // imageText.style.display = 'block';
});

//function call for buttons
functionalBtns();


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
const sareeUnderline = document.getElementById('saree');
const domesticationUnderline = document.getElementById('domestication');
const reflectionsUnderline = document.getElementById('reflections');
const simUnderline = document.getElementById('sheepInMadrid');

sareeUnderline.style.textDecoration = 'none';
domesticationUnderline.style.textDecoration = 'none';
reflectionsUnderline.style.textDecoration = 'none';
simUnderline.style.textDecoration = 'underline';

