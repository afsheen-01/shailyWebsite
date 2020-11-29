
const aboutUnderline = document.getElementById('about');
aboutUnderline.style.textDecoration = 'underline';

// const navBtn = document.querySelector('.navBtn');
// const sideNav = document.querySelector('.sideNav');

// navBtn.style.display = 'none';
// sideNav.style.display = 'block';
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