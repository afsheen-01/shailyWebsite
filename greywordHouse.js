const greywordHouse = [
    {
        id: 44,
        src: './pictures/Architecture/GreywoodHouse/_SRN1203-Edit.jpg',
        alt: 'gh1',
        category: 'architecture',
        subcategory: 'greywordHouse',
        best: 0,
    },
    {
        id: 45,
        src: './pictures/Architecture/GreywoodHouse/_SRN1208-Edit.jpg',
        alt: 'gh2',
        category: 'architecture',
        subcategory: 'greywordHouse',
        best: 0,
    },
    {
        id: 46,
        src: './pictures/Architecture/GreywoodHouse/_SRN1211-Edit.jpg',
        alt: 'gh3',
        category: 'architecture',
        subcategory: 'greywordHouse',
        best: 0,
    },
    {
        id: 47,
        src: './pictures/Architecture/GreywoodHouse/_SRN1226.jpg',
        alt: 'gh4',
        category: 'architecture',
        subcategory: 'greywordHouse',
        best: 0,
    },
    {
        id: 48,
        src: './pictures/Architecture/GreywoodHouse/_SRN1234-Edit1.jpg',
        alt: 'gh5',
        category: 'architecture',
        subcategory: 'greywordHouse',
        best: 0,
    },
    {
        id: 49,
        src: './pictures/Architecture/GreywoodHouse/_SRN1261.jpg',
        alt: 'gh6',
        category: 'architecture',
        subcategory: 'greywordHouse',
        best: 0,
    },
    {
        id: 50,
        src: './pictures/Architecture/GreywoodHouse/_SRN1266.jpg',
        alt: 'gh7',
        category: 'architecture',
        subcategory: 'greywordHouse',
        best: 0,
    },
    {
        id: 51,
        src: './pictures/Architecture/GreywoodHouse/_SRN1276-Edit.jpg',
        alt: 'gh8',
        category: 'architecture',
        subcategory: 'greywordHouse',
        best: 0,
    },
    {
        id: 52,
        src: './pictures/Architecture/GreywoodHouse/_SRN1288-Edit.jpg',
        alt: 'gh9',
        category: 'architecture',
        subcategory: 'greywordHouse',
        best: 0,
    },
    {
        id: 53,
        src: './pictures/Architecture/GreywoodHouse/_SRN1308.jpg',
        alt: 'gh10',
        category: 'architecture',
        subcategory: 'greywordHouse',
        best: 0,
    },
    {
        id: 54,
        src: './pictures/Architecture/GreywoodHouse/_SRN1333-Edit.jpg',
        alt: 'gh11',
        category: 'architecture',
        subcategory: 'greywordHouse',
        best: 0,
    },
    {
        id: 55,
        src: './pictures/Architecture/GreywoodHouse/_SRN1339.jpg',
        alt: 'gh12',
        category: 'architecture',
        subcategory: 'greywordHouse',
        best: 0,
    },
    {
        id: 56,
        src: './pictures/Architecture/GreywoodHouse/_SRN1343-Edit.jpg',
        alt: 'gh13',
        category: 'architecture',
        subcategory: 'greywordHouse',
        best: 0,
    },
    {
        id: 57,
        src: './pictures/Architecture/GreywoodHouse/_SRN1344-2.jpg',
        alt: 'gh14',
        category: 'architecture',
        subcategory: 'greywordHouse',
        best: 0,
    },
    {
        id: 58,
        src: './pictures/Architecture/GreywoodHouse/_SRN1369.jpg',
        alt: 'gh15',
        category: 'architecture',
        subcategory: 'greywordHouse',
        best: 0,
    },
    {
        id: 59,
        src: './pictures/Architecture/GreywoodHouse/cover_SRN1261.jpg',
        alt: 'gh16',
        category: 'architecture',
        subcategory: 'greywordHouse',
        best: 0,
    },
    {
        id: 60,
        src: './pictures/Architecture/GreywoodHouse/WickerBasket.gif',
        alt: 'gh17',
        category: 'architecture',
        subcategory: 'greywordHouse',
        best: 0,
    },
    {
        id: 61,
        src: './pictures/Architecture/GreywoodHouse/_SRN1234.jpg',
        alt: 'gh18',
        category: 'architecture',
        subcategory: 'greywordHouse',
        best: 0,
    }
];

const leftBtn = document.getElementById('btnLeft');
const rightBtn = document.getElementById('btnRight');
const target = document.querySelector('.image');
const home = document.getElementById('bestWork');


// console.log(leftBtn);
let i = 0;
length = greywordHouse.length;
const functionalBtns = () => {
    target.src = greywordHouse[i].src;
    target.alt = greywordHouse[i].alt;

    rightBtn.addEventListener('click', () => {
        if(i > length - 2){
            i = 0;
        }
        else{
            i++;
        }
        target.src = greywordHouse[i].src;
        target.alt = greywordHouse[i].alt;
    });

    leftBtn.addEventListener('click', () => {
        if(i < 0){
            i = 0;
        }
        else{
            i--;
        }
        target.src = greywordHouse[i].src;
        target.alt = greywordHouse[i].alt;

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
const reflectionsUnderline = document.getElementById('reflections');
const simUnderline = document.getElementById('sheepInMadrid');
const archUnderline = document.getElementById('architecture');
const ghUnderline = document.getElementById('greywordHouse');

bestWork.style.textDecoration = 'none';
photographyUnderline.style.textDecoration = 'none';
sareeUnderline.style.textDecoration = 'none';
domesticationUnderline.style.textDecoration = 'none';
reflectionsUnderline.style.textDecoration = 'none';
simUnderline.style.textDecoration = 'none';
archUnderline.style.textDecoration = 'none';
ghUnderline.style.textDecoration = 'underline';