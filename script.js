var sideBar = document.querySelector('.sidebar_container')
var links = document.querySelector('.links') 

sideBar.addEventListener('click',function(){
    links.classList.toggle('links')
})