const navBar = document.querySelector('header ul'),
      harmburger = document.querySelector('.harmburger');


harmburger.addEventListener('click', ()=>{
    harmburger.classList.toggle('active');
    navBar.classList.toggle('active');
})

window.addEventListener('scroll', ()=>{
    harmburger.classList.remove('active');
    navBar.classList.remove('active');
})