const andalucia = [
    {
        id: 1,
        src: './pictures/Architecture/Arch/2_2.jpg',
        alt: 'anda1',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 2,
        src: './pictures/Architecture/Arch/4.jpeg',
        alt: 'anda2',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 3,
        src: './pictures/Architecture/Arch/7.jpg',
        alt: 'anda3',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 4,
        src: './pictures/Architecture/Arch/09_SRN7153.jpg',
        alt: 'anda4',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 5,
        src: './pictures/Architecture/Arch/12.jpg',
        alt: 'anda5',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 6,
        src: './pictures/Architecture/Arch/2020_Andalucia_architecture.jpg',
        alt: 'anda6',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 7,
        src: './pictures/Architecture/Arch/2020_Andalucia_catreflection.jpg',
        alt: 'anda7',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 8, 
        src: './pictures/Architecture/Arch/2020_Andalucia_connection.jpg',
        alt: 'anda8',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 9,
        src: './pictures/Architecture/Arch/2020_Andalucia_goldenhour.jpg',
        alt: 'anda9',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 10,
        src: './pictures/Architecture/Arch/2020_Andalucia_mosque-church.jpg',
        alt: 'anda10',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 11,
        src: './pictures/Architecture/Arch/2020_Andalucia_riverslopes.jpg',
        alt: 'anda11',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 12,
        src: './pictures/Architecture/Arch/2020_Andalucia_stained-columns.jpg',
        alt: 'anda12',
        category: 'architecture',
        subcategory: 'andalucia',
        best: 0,
    },
    {
        id: 13,
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
            i = length;
        }
        else{
            i--;
        }
        target.src = andalucia[i].src;
        target.alt = andalucia[i].alt;
        target.id = andalucia[i].id;

    } 
    if(keycode === 39){
        // console.log('right arrow was pressed');
        if(i > length - 2){
            i = 0;
        }
        else{
            i++;
        }
        target.src = andalucia[i].src;
        target.alt = andalucia[i].alt;
        target.id = andalucia[i].id;
    }
});
functionalBtns();

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

//artist statement
const artistStatement = document.getElementById('as');
const heading = document.querySelector('.fdidot');
const text = document.querySelector('.fjost');
const imageText = document.querySelector('.imageText');
const minusBtn = document.querySelector('.minus');

// artistStatement.addEventListener('click',() => {
//     imageText.style.display = 'block';
//     text.innerHTML = 'this is a style for the page. hopefully, this will work';
    
// });
// minusBtn.addEventListener('click', () => {
//     imageText.style.display = 'none';
// });
const imageHolder = document.querySelector('.imageHolder');
const arrowBtns = document.querySelectorAll('.newArrow');
imageHolder.addEventListener('mouseover', () => {
    // console.log('you hovered over me:):)');
    // e.preventDefault();
    arrowBtns.forEach(arrow => {
        arrow.style.visibility = 'visible';
    });
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


    tempArrayHolder = andalucia.map(item => {
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
                andalucia.forEach(item => {
                    if(item.id == element.id){
                        // console.log('hey, same id');
                        i = item.id - 1;
                        // console.log(i);
                        target.src = andalucia[i].src;
                        target.alt = andalucia[i].alt;
                        target.id = andalucia[i].id;
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