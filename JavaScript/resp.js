var typed = new Typed('#element', {
    strings: ['Java Developer', 'Web Developer'],
    typeSpeed: 50,
});




burger=document.querySelector('.burger')
nav=document.querySelector('.nav')
left=document.querySelector('.left')
right=document.querySelector('.right')

burger.addEventListener('click',()=>{
    nav.classList.toggle('h-nav-resp')
    left.classList.toggle('v-class-resp')
    right.classList.toggle('v-class-resp')
})