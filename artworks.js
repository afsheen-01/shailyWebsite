const artwork = [
    {
        id: 1,
        src: './pictures/Artworks/Churchgate-station-mumbai.jpg',
        alt: 'artworks1',
        caption:''
    },
    {
        id: 2,
        src: './pictures/Artworks/Darkroom-for-housing.jpg',
        alt: 'artworks2',
        caption:'Darkroom architecture'
    },
    {
        id: 3,
        src: './pictures/Artworks/Ducktails.jpg',
        alt: 'artworks3',
        caption:'Getting my ducks in a row'
    },
    {
        id: 4,
        src: './pictures/Artworks/Exospheres.jpg',
        alt: 'artworks4',
        caption:'Microscopic - macroscopic'
    },
    {
        id: 5,
        src: './pictures/Artworks/Next-door-stangers-.jpg',
        alt: 'artworks5',
        caption:'Next door stangers'
    },
    {
        id: 6,
        src: './pictures/Artworks/Postcard_of_a_figmental_biosphere.jpg',
        alt: 'artworks6',
        caption:'Postcards from figmental biosphere'
    },
    {
        id: 7,
        src: './pictures/Artworks/Time-capsule-of-mumbai.jpg',
        alt: 'artworks7',
        caption:'An exercise in time capsuling'
    },
    {
        id: 8,
        src: './pictures/Artworks/Time-travel.png',
        alt: 'artworks8',
        caption:'Time-traveling tourists.'
    },
    {
        id: 9,
        src: './pictures/Artworks/When-pigs-fly.png',
        alt: 'artworks9',
        caption:''
    },
    {
        id: 10,
        src: './pictures/Artworks/Whirlpool-mind.jpg',
        alt: 'artworks10',
        caption:'Brainwashing'
    }
];

const leftBtn = document.getElementById('btnLeft');
const rightBtn = document.getElementById('btnRight');
const target = document.querySelector('.image');
const caption = document.querySelector('.caption');


// console.log(leftBtn);
let i = 0;
length = artwork.length;
const functionalBtns = () => {
    target.src = artwork[i].src;
    target.alt = artwork[i].alt;
    target.id = artwork[i].id;

    rightBtn.addEventListener('click', () => {
        if(i >= length-1){
            i = 0;
        }
        else{
            i++;
        }
        target.src = artwork[i].src;
        target.alt = artwork[i].alt;
        target.id = artwork[i].id;
        caption.innerHTML = artwork[i].caption;
    });

    leftBtn.addEventListener('click', () => {
        if(i < 0){
            i = length-1;
            
        }
        else{
            i--;
        }
        
        target.src = artwork[i].src;
        target.alt = artwork[i].alt;
        target.id = artwork[i].id;
        caption.innerHTML = artwork[i].caption;

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
        
        target.src = artwork[i].src;
        target.alt = artwork[i].alt;
        target.id = artwork[i].id;
        caption.innerHTML = artwork[i].caption;

    } 
    if(keycode === 39){
        // console.log('right arrow was pressed');
        if(i >= length-1){
            i = 0;
        }
        else{
            i++;
        }
        target.src = artwork[i].src;
        target.alt = artwork[i].alt;
        target.id = artwork[i].id;
        caption.innerHTML = artwork[i].caption;
    }
});

functionalBtns();


//removing underline and putting under photography
const artworkUnderline = document.getElementById('artworks');

artworkUnderline.style.textDecoration = 'underline';


const imageHolder = document.querySelector('.imageHolder');

//imageHolder fuckign css not working after click!
//somebody please fucking kill me!!


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
    // imageText.style.display = 'none';

    let tempArrayHolder = artwork.map(item => {
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
                artwork.forEach(item => {
                    if(item.id == element.id){
                        // console.log('hey, same id');
                        i = item.id - 1;
                        // console.log(i);
                        target.src = artwork[i].src;
                        target.alt = artwork[i].alt;
                        caption.innerHTML = artwork[i].caption;
                        // functionalBtns();
                        // target.id = artwork[i].id;
                        imageHolder.style.display = 'block';
                        thumbnailContainer.style.display = 'none';
                        // thumbnail.style.textDecoration = 'none';
                        // console.log(target);
                        imageHolder.style.display = 'flex';
                        imageHolder.style.flexDirection = 'column';
                        imageHolder.style.justifyContent = 'center';
                        imageHolder.style.alignItems = 'center';
                        arrowBtns.forEach(arrow => {
                            arrow.style.visibility = 'visible';
                        });
                    }
                });
            });
        });

}



crossBtn.addEventListener('click', () => {
    thumbnailContainer.style.display = 'block';
    imageHolder.style.display = 'none';
    arrowBtns.forEach(arrow => {
        arrow.style.visibility = 'hidden';
    });
    // imageText.style.display = 'block';
});

window.addEventListener('load', functionToDisplayGrid());


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
