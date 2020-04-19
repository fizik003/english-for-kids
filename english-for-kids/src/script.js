import './styles/style.css';
import cards from './cards.js'

const burger_line = document.querySelector('.hamburger');
const burger_all = document.querySelector('.navigation')

burger_line.addEventListener('click', closeBurg)

function closeBurg() {

  if (burger_all.classList.contains('show-burger')){
    burger_all.classList.remove('show-burger');
    burger_line.classList.remove('hamburger-transform');
    
  }
  else{
    
    burger_all.classList.add('show-burger');
    burger_line.classList.add('hamburger-transform');
  }
}


const wrapper_content = document.querySelector('.wrapper-content');
cards[0].forEach((el,index)=>{
  const card = document.createElement('div');
  const front = document.createElement('div');
  const image = document.createElement('img');
  const card_title = document.createElement('div');
  
  card.className = 'card';
  card_title.classList = 'card-title';
  front.className ='front';
  image.className = 'img-card';
 
  
  card.append(front)
  front.append(image)
  front.append(card_title)

  card_title.textContent = String(el)

  image.src = require('./' + cards[1][index]).default
  wrapper_content.append(card)
})



const nav = document.querySelector('.nav')

nav.addEventListener('click', (e) => {
  nav.querySelectorAll('.nav-item').forEach((el) => {
    el.classList.remove('select-nav-item');
  })
    
    e.target.classList.add('select-nav-item');
    burger_all.classList.remove('show-burger');
    burger_line.classList.remove('hamburger-transform');

})



