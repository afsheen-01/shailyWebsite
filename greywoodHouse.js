const greywoodHouse = [
    {
        id: 1,
        src: './pictures/Architecture/GreywoodHouse/_SRN1333-Edit.jpg',
        alt: 'gh1',
        category: 'architecture',
        subcategory: 'greywoodHouse',
        best: 0,
    },
    {
        id: 2,
        src: './pictures/Architecture/GreywoodHouse/WickerBasket.gif',
        alt: 'gh2',
        category: 'architecture',
        subcategory: 'greywoodHouse',
        best: 0,
    },
    {
        id: 3,
        src: './pictures/Architecture/GreywoodHouse/_SRN1308.jpg',
        alt: 'gh3',
        category: 'architecture',
        subcategory: 'greywoodHouse',
        best: 0,
    },
    {
        id: 4,
        src: './pictures/Architecture/GreywoodHouse/_SRN1343-Edit.jpg',
        alt: 'gh4',
        category: 'architecture',
        subcategory: 'greywoodHouse',
        best: 0,
    },
    {
        id: 5,
        src: './pictures/Architecture/GreywoodHouse/_SRN1339.jpg',
        alt: 'gh5',
        category: 'architecture',
        subcategory: 'greywoodHouse',
        best: 0,
    },
    {
        id: 6,
        src: './pictures/Architecture/GreywoodHouse/_SRN1344-2.jpg',
        alt: 'gh6',
        category: 'architecture',
        subcategory: 'greywoodHouse',
        best: 0,
    },
    {
        id: 7,
        src: './pictures/Architecture/GreywoodHouse/_SRN1266.jpg',
        alt: 'gh7',
        category: 'architecture',
        subcategory: 'greywoodHouse',
        best: 0,
    },
    {
        id: 8,
        src: './pictures/Architecture/GreywoodHouse/_SRN1234-Edit1.jpg',
        alt: 'gh8',
        category: 'architecture',
        subcategory: 'greywoodHouse',
        best: 0,
    },
    {
        id: 9,
        src: './pictures/Architecture/GreywoodHouse/_SRN1266.jpg',
        alt: 'gh9',
        category: 'architecture',
        subcategory: 'greywoodHouse',
        best: 0,
    },
    {
        id: 10,
        src: './pictures/Architecture/GreywoodHouse/_SRN1261.jpg',
        alt: 'gh10',
        category: 'architecture',
        subcategory: 'greywoodHouse',
        best: 0,
    },
    {
        id: 11,
        src: './pictures/Architecture/GreywoodHouse/_SRN1276-Edit.jpg',
        alt: 'gh11',
        category: 'architecture',
        subcategory: 'greywoodHouse',
        best: 0,
    },
    {
        id: 12,
        src: './pictures/Architecture/GreywoodHouse/_SRN1203-Edit.jpg',
        alt: 'gh12',
        category: 'architecture',
        subcategory: 'greywoodHouse',
        best: 0,
    },
    {
        id: 13,
        src: './pictures/Architecture/GreywoodHouse/_SRN1211-Edit.jpg',
        alt: 'gh13',
        category: 'architecture',
        subcategory: 'greywoodHouse',
        best: 0,
    },
    {
        id: 14,
        src: './pictures/Architecture/GreywoodHouse/_SRN1208-Edit.jpg',
        alt: 'gh14',
        category: 'architecture',
        subcategory: 'greywoodHouse',
        best: 0,
    },
    {
        id: 15,
        src: './pictures/Architecture/GreywoodHouse/_SRN1369.jpg',
        alt: 'gh15',
        category: 'architecture',
        subcategory: 'greywoodHouse',
        best: 0,
    },
    // {
    //     id: 16,
    //     src: './pictures/Architecture/GreywoodHouse/cover_SRN1261.jpg',
    //     alt: 'gh16',
    //     category: 'architecture',
    //     subcategory: 'greywoodHouse',
    //     best: 0,
    // },
    // {
    //     id: 17,
    //     src: './pictures/Architecture/GreywoodHouse/WickerBasket.gif',
    //     alt: 'gh17',
    //     category: 'architecture',
    //     subcategory: 'greywoodHouse',
    //     best: 0,
    // },
    // {
    //     id: 18,
    //     src: './pictures/Architecture/GreywoodHouse/_SRN1234.jpg',
    //     alt: 'gh18',
    //     category: 'architecture',
    //     subcategory: 'greywoodHouse',
    //     best: 0,
    // }
];

const leftBtn = document.getElementById('btnLeft');
const rightBtn = document.getElementById('btnRight');
const target = document.querySelector('.image');
const home = document.getElementById('bestWork');


// console.log(leftBtn);
let i = 0;
length = greywoodHouse.length;
const functionalBtns = () => {
    target.src = greywoodHouse[i].src;
    target.alt = greywoodHouse[i].alt;

    rightBtn.addEventListener('click', () => {
        if(i > length - 2){
            i = 0;
        }
        else{
            i++;
        }
        target.src = greywoodHouse[i].src;
        target.alt = greywoodHouse[i].alt;
    });

    leftBtn.addEventListener('click', () => {
        if(i < 0){
            i = 0;
        }
        else{
            i--;
        }
        target.src = greywoodHouse[i].src;
        target.alt = greywoodHouse[i].alt;

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
        target.src = greywoodHouse[i].src;
        target.alt = greywoodHouse[i].alt;
        target.id = greywoodHouse[i].id;

    } 
    if(keycode === 39){
        // console.log('right arrow was pressed');
        if(i > length - 2){
            i = 0;
        }
        else{
            i++;
        }
        target.src = greywoodHouse[i].src;
        target.alt = greywoodHouse[i].alt;
        target.id = greywoodHouse[i].id;
    }
});

functionalBtns();

//artist statement
const artistStatement = document.getElementById('as');
// const text = document.querySelector('.fjost');
const imageText = document.querySelector('.imageText');
const minusBtn = document.querySelector('.minus');


//removing underline and putting under photography
const sareeUnderline = document.getElementById('saree');
const domesticationUnderline = document.getElementById('domestication');
const reflectionsUnderline = document.getElementById('reflections');
const simUnderline = document.getElementById('sheepInMadrid');
const ghUnderline = document.getElementById('greywoodHouse');

sareeUnderline.style.textDecoration = 'none';
domesticationUnderline.style.textDecoration = 'none';
reflectionsUnderline.style.textDecoration = 'none';
simUnderline.style.textDecoration = 'none';
ghUnderline.style.textDecoration = 'underline';

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


    tempArrayHolder = greywoodHouse.map(item => {
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
                greywoodHouse.forEach(item => {
                    if(item.id == element.id){
                        // console.log('hey, same id');
                        i = item.id - 1;
                        // console.log(i);
                        target.src = greywoodHouse[i].src;
                        target.alt = greywoodHouse[i].alt;
                        target.id = greywoodHouse[i].id;
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