const saree = [
    {
        id: 1,
            src: './pictures/Photography/Saree/2020_Saree_Red-1.jpg',
            alt: 'red saree',
            category: 'photography',
            subcategory: 'saree',
            best: 0,
    
        },
        {
        id: 2,
            src: './pictures/Photography/Saree/2020_Saree_Red-2.jpg',
            alt: 'red saree',
            category: 'photography',
            subcategory: 'saree',
            best: 0,
        },
        {
        id: 3,
            src: './pictures/Photography/Saree/2020_Saree_Red-3.jpg',
            alt: 'red saree',
            category: 'photography',
            subcategory: 'saree',
            best: 0,
        },
        {
        id: 4,
            src: './pictures/Photography/Saree/2020_Saree_Red-4.jpg',
            alt: 'red saree',
            category: 'photography',
            subcategory: 'saree',
            best: 0,
    },
        {
        id: 5,
            src: './pictures/Photography/Saree/2020_Saree_Green-5.jpg',
            alt: 'green saree',
            category: 'photography',
            subcategory: 'saree',
            best: 0,
        },
        {
        id: 6,
            src: './pictures/Photography/Saree/2020_Saree_Green-6.jpg',
            alt: 'green saree',
            category: 'photography',
            subcategory: 'saree',
            best: 0,
        },
        {
        id: 7,
            src: './pictures/Photography/Saree/2020_Saree_Green-7-.jpg',
            alt: 'green saree',
            category: 'photography',
            subcategory: 'saree',
            best: 0,
        },
        {
        id: 8,
            src: './pictures/Photography/Saree/2020_Saree_Yellow-8.jpg',
            alt: 'yellow saree',
            category: 'photography',
            subcategory: 'saree',
            best: 0,
        },
        {
        id: 9,
            src: './pictures/Photography/Saree/2020_Saree_Yellow-9.jpg',
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

    rightBtn.addEventListener('click', () => {
        if(i > length - 2){
            i = 0;
        }
        else{
            i++;
        }
        target.src = saree[i].src;
        target.alt = saree[i].alt;
    });

    leftBtn.addEventListener('click', () => {
        if(i < 0){
            i = 0;
        }
        else{
            i--;
        }
        target.src = saree[i].src;
        target.alt = saree[i].alt;

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
    heading.innerHTML = 'Saree//Sari';
    text.innerHTML = 'This project is about the saree, <br/>A sari / saree is a women’s garment from the Indian subcontinent that consists of an unstitched drape varying from 5.5 to 9 meters in length and 600 to 1,200 mm in breadth that is typically wrapped around the waist, with one end draped over the shoulder, baring a portion of the midriff.<br/>The series captures the simplicity of the saree and enhances and draws attention to fabric, flow and colour.<br/>This project is very close to home, quite literally. My family has been in the buisness of sarees since 54 years, supporting local craftsmen and traditional techniques. After a few cancelled shoots due to the current circumstances, I convinced my mother to be the model and it was such a lucky decision, she quickly became my muse for this series.<br/>Through this work I want to open a window to the rich Indian culture brimming with colour, tradition and grace.';
    
});
minusBtn.addEventListener('click', () => {
    imageText.style.display = 'none';
});

//removing underline and putting under photography
const sareeUnderline = document.getElementById('saree');

sareeUnderline.style.textDecoration = 'underline';