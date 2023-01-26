
let button = document.querySelector('.btn__kaz');
let button2 = document.querySelector('.btn__rus');

button.addEventListener("click",function(){
    button2.classList.remove('active');
    button.classList.add('active');
    
})



button2.addEventListener("click",function(){
    button2.classList.add('active');
    button.classList.remove('active');
    
})