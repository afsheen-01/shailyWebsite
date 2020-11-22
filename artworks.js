const artwork = [
    {
        id: 75,
        src: './pictures/Artworks/Churchgate-station-mumbai.jpg',
        alt: 'artworks1',
        category: 'artworks',
        subcategory: '',
        best: 0,
    },
    {
        id: 76,
        src: './pictures/Artworks/Darkroom-for-housing.jpg',
        alt: 'artworks2',
        category: 'artworks',
        subcategory: '',
        best: 0,
    },
    {
        id: 77,
        src: './pictures/Artworks/Ducktails.jpg',
        alt: 'artworks3',
        category: 'artworks',
        subcategory: '',
        best: 0,
    },
    {
        id: 78,
        src: './pictures/Artworks/Exospheres.jpg',
        alt: 'artworks4',
        category: 'artworks',
        subcategory: '',
        best: 0,
    },
    {
        id: 79,
        src: './pictures/Artworks/Next-door-stangers-.jpg',
        alt: 'artworks5',
        category: 'artworks',
        subcategory: '',
        best: 0,
    },
    {
        id: 80,
        src: './pictures/Artworks/Postcard_of_a_figmental_biosphere.jpg',
        alt: 'artworks6',
        category: 'artworks',
        subcategory: '',
        best: 0,
    },
    {
        id: 81,
        src: './pictures/Artworks/Time-capsule-of-mumbai.jpg',
        alt: 'artworks7',
        category: 'artworks',
        subcategory: '',
        best: 0,
    },
    {
        id: 82,
        src: './pictures/Artworks/Time-travel.png',
        alt: 'artworks8',
        category: 'artworks',
        subcategory: '',
        best: 0,
    },
    {
        id: 83,
        src: './pictures/Artworks/When-pigs-fly.png',
        alt: 'artworks9',
        category: 'artworks',
        subcategory: '',
        best: 0,
    },
    {
        id: 84,
        src: './pictures/Artworks/Whirlpool-mind.jpg',
        alt: 'artworks10',
        category: 'artworks',
        subcategory: '',
        best: 0,
    }
];

const leftBtn = document.getElementById('btnLeft');
const rightBtn = document.getElementById('btnRight');
const target = document.querySelector('.image');
const home = document.getElementById('bestWork');


// console.log(leftBtn);
let i = 0;
length = artwork.length;
const functionalBtns = () => {
    target.src = artwork[i].src;
    target.alt = artwork[i].alt;

    rightBtn.addEventListener('click', () => {
        if(i > length - 2){
            i = 0;
        }
        else{
            i++;
        }
        target.src = artwork[i].src;
        target.alt = artwork[i].alt;
    });

    leftBtn.addEventListener('click', () => {
        if(i < 0){
            i = 0;
        }
        else{
            i--;
        }
        target.src = artwork[i].src;
        target.alt = artwork[i].alt;

    });
}

functionalBtns();

//artist statement
const artistStatement = document.getElementById('as');
const heading = document.querySelector('.fdidot');
const text = document.querySelector('.fjost');
const imageText = document.querySelector('.imageText');
const minusBtn = document.querySelector('.minus');

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
const artworkUnderline = document.getElementById('artworks');

sareeUnderline.style.textDecoration = 'none';
domesticationUnderline.style.textDecoration = 'none';
reflectionsUnderline.style.textDecoration = 'none';
simUnderline.style.textDecoration = 'none';
ghUnderline.style.textDecoration = 'none';
andaUnderline.style.textDecoration = 'none';
artworkUnderline.style.textDecoration = 'underline';