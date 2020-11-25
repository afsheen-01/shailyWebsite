const artwork = [
    {
        id: 75,
        src: './pictures/Artworks/Churchgate-station-mumbai.jpg',
        alt: 'artworks1',
        caption:''
    },
    {
        id: 76,
        src: './pictures/Artworks/Darkroom-for-housing.jpg',
        alt: 'artworks2',
        caption:'Darkroom architecture'
    },
    {
        id: 77,
        src: './pictures/Artworks/Ducktails.jpg',
        alt: 'artworks3',
        caption:'Getting my ducks in a row'
    },
    {
        id: 78,
        src: './pictures/Artworks/Exospheres.jpg',
        alt: 'artworks4',
        caption:'Microscopic - macroscopic'
    },
    {
        id: 79,
        src: './pictures/Artworks/Next-door-stangers-.jpg',
        alt: 'artworks5',
        caption:'Next door stangers'
    },
    {
        id: 80,
        src: './pictures/Artworks/Postcard_of_a_figmental_biosphere.jpg',
        alt: 'artworks6',
        caption:'Postcards from a  gmental biosphere'
    },
    {
        id: 81,
        src: './pictures/Artworks/Time-capsule-of-mumbai.jpg',
        alt: 'artworks7',
        caption:'An exercise in time capsuling'
    },
    {
        id: 82,
        src: './pictures/Artworks/Time-travel.png',
        alt: 'artworks8',
        caption:'Time-traveling tourists.'
    },
    {
        id: 83,
        src: './pictures/Artworks/When-pigs-fly.png',
        alt: 'artworks9',
        caption:''
    },
    {
        id: 84,
        src: './pictures/Artworks/Whirlpool-mind.jpg',
        alt: 'artworks10',
        caption:'Brainwashing'
    }
];

const leftBtn = document.getElementById('btnLeft');
const rightBtn = document.getElementById('btnRight');
const target = document.querySelector('.image');
const caption = document.getElementById('caption');


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
        caption.innerHTML = artwork[i].caption;
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
        caption.innerHTML = artwork[i].caption;

    });
}

functionalBtns();

//artist statement
const artistStatement = document.getElementById('as');
const heading = document.querySelector('.fdidot');
const text = document.querySelector('.fjost');
const imageText = document.querySelector('.imageText');
const minusBtn = document.querySelector('.minus');


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