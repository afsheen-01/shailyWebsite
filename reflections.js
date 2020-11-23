const reflections = [
    {
        id: 23,
        src: './pictures/Photography/Reflection/Reflection_bees.jpg',
        alt: 'reflection1',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 24,
        src: './pictures/Photography/Reflection/Reflection_Bridge-Lamp.jpg',
        alt: 'reflection2',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 25,
        src: './pictures/Photography/Reflection/Reflection_framed-window.jpg',
        alt: 'reflection3',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 26,
        src: './pictures/Photography/Reflection/Reflection_Plant-in-window.jpg',
        alt: 'reflection4',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 27,
        src: './pictures/Photography/Reflection/Reflection_Plaza-100blocks.jpg',
        alt: 'reflection5',
        height: '',
        width:'',
        category: 'photography',
    subcategory: 'reflection',
    best: 0,
    },
    {
        id: 28,
        src: './pictures/Photography/Reflection/Reflection_Plaza-Colon-diptic.jpg',
        alt: 'reflection6',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 29,
        src: './pictures/Photography/Reflection/Reflection_portal.jpg',
        alt: 'reflection7',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 30,
        src: './pictures/Photography/Reflection/Reflection_Water-angles-diptic.jpg',
        alt: 'reflection8',
        category: 'photography',
        subcategory: 'reflection',
        best: 0,
    },
    {
        id: 31,
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

functionalBtns();

//artist statement
const artistStatement = document.getElementById('as');
const heading = document.querySelector('.fdidot');
const text = document.querySelector('.fjost');
const imageText = document.querySelector('.imageText');
const minusBtn = document.querySelector('.minus');

artistStatement.addEventListener('click',() => {
    imageText.style.display = 'block';
    text.innerHTML = 'The project is an exploration into reflections led by a fascination of the way light reacts differently to different surfaces in the form of reflections and how the build world interacts with these surfaces. <br/>The series invites the viewer to see the world through unique portals that are juxtaposed to make double exposure like frames. Throughout the project we see the subject as a reflection of itself on another object. The subject and the object on which it casts its reflection are often facing each other. <br/>In this series, I attempt to reflect on architecture through photography, as I review and renew my relationship with the two disciplines.';
    
});
minusBtn.addEventListener('click', () => {
    imageText.style.display = 'none';
});

//removing underline and putting under photography
const sareeUnderline = document.getElementById('saree');
const domesticationUnderline = document.getElementById('domestication');
const reflectionsUnderline = document.getElementById('reflections');

sareeUnderline.style.textDecoration = 'none';
domesticationUnderline.style.textDecoration = 'none';
reflectionsUnderline.style.textDecoration = 'underline';