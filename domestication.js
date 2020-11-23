const domestication = [
    {
        id: 10,
        src: './pictures/Photography/Domestication/_SRN6803.jpg',
        alt: 'domestication1',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 11,
        src: './pictures/Photography/Domestication/_SRN7354.jpg',
        alt: 'domestication2',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 12,
        src: './pictures/Photography/Domestication/_SRN8092.jpg',
        alt: 'domestication3',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 13,
        src: './pictures/Photography/Domestication/_SRN8338.jpg',
        alt: 'domestication4',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 14,
        src: './pictures/Photography/Domestication/_SRN8352.jpg',
        alt: 'domestication5',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 15,
        src: './pictures/Photography/Domestication/_SRN8377.jpg',
        alt: 'domestication6',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 16,
        src: './pictures/Photography/Domestication/_SRN8656.jpg',
        alt: 'domestication7',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 17,
        src: './pictures/Photography/Domestication/_SRN8677-2.jpg',
        alt: 'domestication8',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 18,
        src: './pictures/Photography/Domestication/_SRN8920.jpg',
        alt: 'domestication9',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 19,
        src: './pictures/Photography/Domestication/_SRN8996.jpg',
        alt: 'domestication10',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 20,
        src: './pictures/Photography/Domestication/_SRN9032.jpg',
        alt: 'domestication11',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 21,
        src: './pictures/Photography/Domestication/_SRN9046.jpg',
        alt: 'domestication12',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    },
    {
        id: 22,
        src: './pictures/Photography/Domestication/13.jpg',
        alt: 'domestication13',
        category: 'photography',
        subcategory: 'domestication',
        best: 0,
    }
];

const leftBtn = document.getElementById('btnLeft');
const rightBtn = document.getElementById('btnRight');
const target = document.querySelector('.image');
const home = document.getElementById('bestWork');


// console.log(leftBtn);
let i = 0;
length = domestication.length;
const functionalBtns = () => {
    target.src = domestication[i].src;
    target.alt = domestication[i].alt;

    rightBtn.addEventListener('click', () => {
        if(i > length - 2){
            i = 0;
        }
        else{
            i++;
        }
        target.src = domestication[i].src;
        target.alt = domestication[i].alt;
    });

    leftBtn.addEventListener('click', () => {
        if(i < 0){
            i = 0;
        }
        else{
            i--;
        }
        target.src = domestication[i].src;
        target.alt = domestication[i].alt;

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
    text.innerHTML = 'The relationship between man and animal dates back 2 million years when humans evolved from apes marking the distinction between the two.<br/>the first subject for painting was animals, magical or sacred animals appear in myths and epics to express the metaphorical relationship between man and animal.<br/>The eyes of the animal when they consider a man are attentive and wary. The gaze between two men can be bridged by language, even if they don’t understand the same language, their interaction can confirm positively or negatively their understanding, ignorance and fear. No animal confirms man. It can be killed and eaten, tamed and trained but its lack of common language, its silence, guarantees its distance, its distinctness, its exclusion from and of man. This silence is filled with secrets of the animal’s likeness to and unlikeness from man. The secrets whose existence man recognized as soon as he intercepted an animal’s gaze.<br/>In the last two centuries, the natural world has gradually disappeared or rather replaced with a domesticated idea of nature. the industrial revolution saw animals being used as machines. Later, in post-industrial societies, nature and animals were treated as raw material, reduced to isolated productive and consuming units.<br/>The one-way nature flourished in urban modern society were as household pets and for beautification. Never has there been a bigger house-pet and house-plant industry.<br/>The cultural marginalization of nature is a more complex process than its physical marginalization. The animals and plants of the mind cannot be so easily dispersed. Stories, dreams, games, superstitions, sayings and language itself, have held on to them. Children of an industrialized world often see animals all around them, in cartoons, toys, games, animated films. However the essence of the animal is often completely lost and representing a human way of life in animal appearance. Trees and plants are systematically planned in urban environments and chosen by a man to bring back home, like memorabilia collected during travels. The ability to train and adapt are important factors for this dependency.<br/>This work attempts to document and catalog the domestication of nature through photos. To pose questions on man’s need to exert control its surroundings or at least maintaining the illusion of control.';
    
});
minusBtn.addEventListener('click', () => {
    imageText.style.display = 'none';
});

//removing underline and putting under photography
const sareeUnderline = document.getElementById('saree');
const domesticationUnderline = document.getElementById('domestication');

sareeUnderline.style.textDecoration = 'none';
domesticationUnderline.style.textDecoration = 'underline';