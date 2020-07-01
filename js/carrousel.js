const wrapper = document.querySelector('.wrapper-cards');
const card = document.querySelector('.card');
const btPrev = document.getElementById('btPrevCar');
const btNext = document.getElementById('btNextCar');


btPrev.addEventListener('click', ()=>{
    wrapper.scrollLeft -= wrapper.offsetWidth;
})

btNext.addEventListener('click', ()=>{
    wrapper.scrollLeft += wrapper.offsetWidth;
})
