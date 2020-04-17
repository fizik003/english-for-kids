import './styles/style.css';

const burger_line = document.querySelector('.hamburger');
const burger_all = document.querySelector('.navigation')

burger_line.addEventListener('click', closeBurg)

function closeBurg() {
  if (burger_all.classList.contains('show-burger')){
    burger_all.classList.remove('show-burger');
    
  }
  else{
    
    burger_all.classList.add('show-burger');
  }
}


console.log('ffffffff');


