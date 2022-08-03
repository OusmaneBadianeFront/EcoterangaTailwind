const navButton = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu')








navButton.addEventListener('click',function(){
navButton.classList.toggle('open')
menu.classList.toggle('flex')
menu.classList.toggle('hidden')
})