const reflections = [
    {
        id: 1,
        src: './pictures/Photography/Reflection/Reflection_bees.jpg',
        alt: 'reflection1',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 2,
        src: './pictures/Photography/Reflection/Reflection_Bridge-Lamp.jpg',
        alt: 'reflection2',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 3,
        src: './pictures/Photography/Reflection/Reflection_framed-window.jpg',
        alt: 'reflection3',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 4,
        src: './pictures/Photography/Reflection/Reflection_Plant-in-window.jpg',
        alt: 'reflection4',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 5,
        src: './pictures/Photography/Reflection/Reflection_Plaza-100blocks.jpg',
        alt: 'reflection5',
        height: '',
        width:'',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 6,
        src: './pictures/Photography/Reflection/Reflection_Plaza-Colon-diptic.jpg',
        alt: 'reflection6',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 7,
        src: './pictures/Photography/Reflection/Reflection_portal.jpg',
        alt: 'reflection7',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 8,
        src: './pictures/Photography/Reflection/Reflection_Water-angles-diptic.jpg',
        alt: 'reflection8',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 9,
        src: './pictures/Photography/Reflection/Reflection_Woman-crossing.jpg',
        alt: 'reflection9',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    }
];

const leftBtn = document.getElementById('btnLeft');
const rightBtn = document.getElementById('btnRight');
const target = document.querySelector('.image');
const home = document.getElementById('bestWork');


// console.log(leftBtn);
let i = 0;
length = reflections.length;
const functionalBtns = () => {
    target.src = reflections[i].src;
    target.alt = reflections[i].alt;

    rightBtn.addEventListener('click', () => {
        if(i > length - 2){
            i = 0;
        }
        else{
            i++;
        }
        target.src = reflections[i].src;
        target.alt = reflections[i].alt;
    });

    leftBtn.addEventListener('click', () => {
        if(i < 0){
            i = 0;
        }
        else{
            i--;
        }
        target.src = reflections[i].src;
        target.alt = reflections[i].alt;

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

//artist statement
    const text = 'The project is an exploration into reflections led by a fascination of the way light reacts differently to different surfaces in the form of reflections and how the build world interacts with these surfaces. <br/>The series invites the viewer to see the world through unique portals that are juxtaposed to make double exposure like frames. Throughout the project we see the subject as a reflection of itself on another object. The subject and the object on which it casts its reflection are often facing each other. <br/>In this series, I attempt to reflect on architecture through photography, as I review and renew my relationship with the two disciplines.';

//DOM elements
const imageHolder = document.querySelector('.imageHolder');
const artistStatement = document.getElementById('as');
const rightSide = document.querySelector('.right');
const imageText = document.querySelector('.imageText');
const textElement = document.querySelector('.fjost');
const minusBtn = document.querySelector('.minus');


as.addEventListener('click', () => {
    artistStatement.style.textDecoration = 'underline';
    imageHolder.style.display = 'none';
    thumbnailContainer.style.display = 'none';
    thumbnail.style.textDecoration = 'none';
    textElement.innerHTML = text;
    // imageText.style.display = 'block';
    // rightSide.style.margin = '17vw 0';
    // imageHolder.style.width = '45vw';
    minusBtn.style.display = 'block';
    arrowBtns.forEach(arrow => {
        arrow.style.visibility = 'hidden';
    });
    // arrowBtns.style.visibility = 'hidden';
});

minusBtn.addEventListener('click', () => {
    artistStatement.style.textDecoration = 'none';
    imageHolder.style.display = 'block';
    imageText.style.display = 'none';
    // rightSide.style.margin = '0';
    // imageHolder.style.width = '60vw';
    minusBtn.style.display = 'none';
});

//fucking asshole you hover element. you've been a big fucking pain in my ass since the beginning.
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


    tempArrayHolder = reflections.map(item => {
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
                reflections.forEach(item => {
                    if(item.id == element.id){
                        // console.log('hey, same id');
                        i = item.id - 1;
                        // console.log(i);
                        target.src = reflections[i].src;
                        target.alt = reflections[i].alt;
                        target.id = reflections[i].id;
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


/*DO NOT FUCKING TOUCH ME OR YOU'RE DEAD */

//removing underline and putting under photography
const sareeUnderline = document.getElementById('saree');
const domesticationUnderline = document.getElementById('domestication');
const reflectionsUnderline = document.getElementById('reflections');

sareeUnderline.style.textDecoration = 'none';
domesticationUnderline.style.textDecoration = 'none';
reflectionsUnderline.style.textDecoration = 'underline';