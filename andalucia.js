const andalucia = [
    {
        id: 62,
        src: './pictures/Architecture/Arch/2_2.jpg',
        alt: 'anda1',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 63,
        src: './pictures/Architecture/Arch/4.jpeg',
        alt: 'anda2',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 64,
        src: './pictures/Architecture/Arch/7.jpg',
        alt: 'anda3',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 65,
        src: './pictures/Architecture/Arch/09_SRN7153.jpg',
        alt: 'anda4',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 66,
        src: './pictures/Architecture/Arch/12.jpg',
        alt: 'anda5',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 67,
        src: './pictures/Architecture/Arch/2020_Andalucia_architecture.jpg',
        alt: 'anda6',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 68,
        src: './pictures/Architecture/Arch/2020_Andalucia_catreflection.jpg',
        alt: 'anda7',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 69, 
        src: './pictures/Architecture/Arch/2020_Andalucia_connection.jpg',
        alt: 'anda8',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 70,
        src: './pictures/Architecture/Arch/2020_Andalucia_goldenhour.jpg',
        alt: 'anda9',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 71,
        src: './pictures/Architecture/Arch/2020_Andalucia_mosque-church.jpg',
        alt: 'anda10',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 72,
        src: './pictures/Architecture/Arch/2020_Andalucia_riverslopes.jpg',
        alt: 'anda11',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 73,
        src: './pictures/Architecture/Arch/2020_Andalucia_stained-columns.jpg',
        alt: 'anda12',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 74,
        src: './pictures/Architecture/Arch/SRN02794.jpg',
        alt: 'anda13',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    }
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

    rightBtn.addEventListener('click', () => {
        if(i > length - 2){
            i = 0;
        }
        else{
            i++;
        }
        target.src = andalucia[i].src;
        target.alt = andalucia[i].alt;
    });

    leftBtn.addEventListener('click', () => {
        if(i < 0){
            i = 0;
        }
        else{
            i--;
        }
        target.src = andalucia[i].src;
        target.alt = andalucia[i].alt;

    });
}

functionalBtns();

//artist statement
// const artistStatement = document.getElementById('as');
// const heading = document.querySelector('.fdidot');
// const text = document.querySelector('.fjost');
// const imageText = document.querySelector('.imageText');
// const minusBtn = document.querySelector('.minus');

// artistStatement.addEventListener('click',() => {
//     imageText.style.display = 'block';
//     heading.innerHTML = 'heading';
//     text.innerHTML = 'this is a style for the page. hopefully, this will work';
    
// });
// minusBtn.addEventListener('click', () => {
//     imageText.style.display = 'none';
// });

//removing underline and putting under photography
const sareeUnderline = document.getElementById('saree');
const domesticationUnderline = document.getElementById('domestication');
const reflectionsUnderline = document.getElementById('reflections');
const simUnderline = document.getElementById('sheepInMadrid');
const ghUnderline = document.getElementById('greywordHouse');
const andaUnderline = document.getElementById('andalucia');

sareeUnderline.style.textDecoration = 'none';
domesticationUnderline.style.textDecoration = 'none';
reflectionsUnderline.style.textDecoration = 'none';
simUnderline.style.textDecoration = 'none';
ghUnderline.style.textDecoration = 'none';
andaUnderline.style.textDecoration = 'underline';