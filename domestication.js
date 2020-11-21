const domestication = [
    {
        id: 10,
        src: './pictures/Photography/Domestication/_SRN6803.jpg',
        alt: 'domestication1',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 11,
        src: './pictures/Photography/Domestication/_SRN7354.jpg',
        alt: 'domestication2',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 12,
        src: './pictures/Photography/Domestication/_SRN8092.jpg',
        alt: 'domestication3',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 13,
        src: './pictures/Photography/Domestication/_SRN8338.jpg',
        alt: 'domestication4',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 14,
        src: './pictures/Photography/Domestication/_SRN8352.jpg',
        alt: 'domestication5',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 15,
        src: './pictures/Photography/Domestication/_SRN8377.jpg',
        alt: 'domestication6',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 16,
        src: './pictures/Photography/Domestication/_SRN8656.jpg',
        alt: 'domestication7',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 17,
        src: './pictures/Photography/Domestication/_SRN8677-2.jpg',
        alt: 'domestication8',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 18,
        src: './pictures/Photography/Domestication/_SRN8920.jpg',
        alt: 'domestication9',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 19,
        src: './pictures/Photography/Domestication/_SRN8996.jpg',
        alt: 'domestication10',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 20,
        src: './pictures/Photography/Domestication/_SRN9032.jpg',
        alt: 'domestication11',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 21,
        src: './pictures/Photography/Domestication/_SRN9046.jpg',
        alt: 'domestication12',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 22,
        src: './pictures/Photography/Domestication/13.jpg',
        alt: 'domestication13',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    }
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

    rightBtn.addEventListener('click', () => {
        if(i > length - 2){
            i = 0;
        }
        else{
            i++;
        }
        target.src = domestication[i].src;
        target.alt = domestication[i].alt;
    });

    leftBtn.addEventListener('click', () => {
        if(i < 0){
            i = 0;
        }
        else{
            i--;
        }
        target.src = domestication[i].src;
        target.alt = domestication[i].alt;

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
    heading.innerHTML = 'heading';
    text.innerHTML = 'this is a style for the page. hopefully, this will work';
    
});
minusBtn.addEventListener('click', () => {
    imageText.style.display = 'none';
});

//removing underline and putting under photography
const bestWork = document.getElementById('bestWork');
const photographyUnderline = document.getElementById('photography');
const sareeUnderline = document.getElementById('saree');
const domesticationUnderline = document.getElementById('domestication');

bestWork.style.textDecoration = 'none';
photographyUnderline.style.textDecoration = 'none';
sareeUnderline.style.textDecoration = 'none';
domesticationUnderline.style.textDecoration = 'underline';