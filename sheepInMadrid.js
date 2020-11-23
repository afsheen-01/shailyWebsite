const sheepInMadrid = [
    {
        id: 32,
        src: './pictures/Photography/SheepInMadrid/SRN01226.jpg',
        alt: 'sheep in madrid 1',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 33,
        src: './pictures/Photography/SheepInMadrid/SRN01281.jpg',
        alt: 'sheep in madrid 2',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 34,
        src: './pictures/Photography/SheepInMadrid/SRN01307.jpg',
        alt: 'sheep in madrid 3',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 35,
        src: './pictures/Photography/SheepInMadrid/SRN01330.jpg',
        alt: 'sheep in madrid 4',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 36,
        src: './pictures/Photography/SheepInMadrid/SRN01339.jpg',
        alt: 'sheep in madrid 5',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 37,
        src: './pictures/Photography/SheepInMadrid/SRN03174.jpg',
        alt: 'sheep in madrid 6',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 38,
        src: './pictures/Photography/SheepInMadrid/SRN03258.jpg',
        alt: 'sheep in madrid 7',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 39,
        src: './pictures/Photography/SheepInMadrid/SRN03571.jpg',
        alt: 'sheep in madrid 8',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 40,
        src: './pictures/Photography/SheepInMadrid/SRN03603.jpg',
        alt: 'sheep in madrid 9',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 41,
        src: './pictures/Photography/SheepInMadrid/SRN03643.jpg',
        alt: 'sheep in madrid 10',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 42,
        src: './pictures/Photography/SheepInMadrid/SRN03749.jpg',
        alt: 'sheep in madrid 11',
        category: 'photography',
        subcategory: 'sheepInMadrid',
        best: 0,
    },
    {
        id: 43,
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

functionalBtns();

//artist statement
const artistStatement = document.getElementById('as');
const heading = document.querySelector('.fdidot');
const text = document.querySelector('.fjost');
const imageText = document.querySelector('.imageText');
const minusBtn = document.querySelector('.minus');

artistStatement.addEventListener('click',() => {
    imageText.style.display = 'block';
    text.innerHTML = 'this is a style for the page. hopefully, this will work';
    
});
minusBtn.addEventListener('click', () => {
    imageText.style.display = 'none';
});

//removing underline and putting under photography
const sareeUnderline = document.getElementById('saree');
const domesticationUnderline = document.getElementById('domestication');
const reflectionsUnderline = document.getElementById('reflections');
const simUnderline = document.getElementById('sheepInMadrid');

sareeUnderline.style.textDecoration = 'none';
domesticationUnderline.style.textDecoration = 'none';
reflectionsUnderline.style.textDecoration = 'none';
simUnderline.style.textDecoration = 'underline';