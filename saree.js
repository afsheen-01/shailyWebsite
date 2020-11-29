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
    target.id = saree[i].id;

    rightBtn.addEventListener('click', () => {
        if(i > length - 2){
            i = 0;
        }
        else{
            i++;
        }
        target.src = saree[i].src;
        target.alt = saree[i].alt;
        target.id = saree[i].id;
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
        target.id = saree[i].id;

    });
}

//artist statement
const text = 'This project is about the saree, <br/><div class = "indent">A sari / saree is a women’s garment from the Indian subcontinent that consists of an unstitched drape varying from 5.5 to 9 meters in length and 600 to 1,200 mm in breadth that is typically wrapped around the waist, with one end draped over the shoulder, baring a portion of the midriff.</div><br/>The series captures the simplicity of the saree and enhances and draws attention to fabric, flow and colour.<br/>This project is very close to home, quite literally. My family has been in the buisness of sarees since 54 years, supporting local craftsmen and traditional techniques. After a few cancelled shoots due to the current circumstances, I convinced my mother to be the model and it was such a lucky decision, she quickly became my muse for this series.<br/>Through this work I want to open a window to the rich Indian culture brimming with colour, tradition and grace.';
    
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
    imageText.style.display = 'block';
    rightSide.style.margin = '17vw 0';
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
    rightSide.style.margin = '0';
    imageHolder.style.width = '60vw';
    minusBtn.style.display = 'none';
});

//fucking asshole you hover element. you've been a big fucking pain in my ass since the beginning.
const arrowBtns = document.querySelectorAll('.newArrow');
imageHolder.addEventListener('mouseover', () => {
    console.log('you hovered over me:):)');
    // e.preventDefault();
    arrowBtns.forEach(arrow => {
        arrow.style.visibility = 'visible';
    });
});


//proved to be pretty fucking useless as a piece of code!
// const imageContainer = document.querySelector('.imageContainer');

// rightSide.addEventListener('mouseout', (e) => {
//     console.log('you hovered out of me:):)');
//     e.preventDefault();
//     arrowBtns.forEach(arrow => {
//         arrow.style.visibility = 'hidden';
//     });
// });

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


    tempArrayHolder = saree.map(item => {
        return `<img src = "${item.src}" alt = "${item.alt}" class = "thumbImg" id = "${item.id}" style = "height: 10vw; width: 15vw; object-fit: contain; margin: 1em;" />`

    });
    // console.log(tempArrayHolder);
    tempArrayHolder = tempArrayHolder.join("");

   thumbnailsGrid.innerHTML =  tempArrayHolder;

    thumbImg = document.querySelectorAll('.thumbImg');
    console.log(thumbImg);

});

crossBtn.addEventListener('click', () => {
    thumbnailContainer.style.display = 'none';
    imageHolder.style.display = 'block';
    // imageText.style.display = 'block';
});


//removing underline and putting under photography
const sareeUnderline = document.getElementById('saree');

sareeUnderline.style.textDecoration = 'underline';
// sareeUnderline.style.textDecorationColor = '#e68a00';

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

//function call for buttons
functionalBtns();