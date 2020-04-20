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
function main_page(){
  
  cards[0].forEach((el,index)=>{
    const card = document.createElement('div');
    const front = document.createElement('div');
    const image = document.createElement('img');
    const card_title = document.createElement('div'); 
    
    card.className = 'main-card';
    card_title.classList = 'card-title';
    front.className ='front-main';
    image.className = 'img-card-main';
   
    
    card.append(front)
    front.append(image)
    front.append(card_title)
  
    card_title.textContent = String(el)
  
    image.src = require('./' + cards[1][index]).default
    wrapper_content.append(card)
  })
  
}
main_page()






const nav = document.querySelector('.nav')

nav.addEventListener('click', (e) => {
  nav.querySelectorAll('.nav-item').forEach((el) => {
    el.classList.remove('select-nav-item');
  })
    
    e.target.classList.add('select-nav-item');
    burger_all.classList.remove('show-burger');
    burger_line.classList.remove('hamburger-transform');
    show_category(e.target.textContent)
    console.log(e.target.textContent)
    console.log(cards[0].indexOf(e.target.textContent))

})

function show_category(category){
  wrapper_content.innerHTML = ' '
  if (category === 'Main') main_page()
  else  create_category(cards[0].indexOf(category))
}

function create_category(index){
  cards[index + 2].forEach((el) =>{
    const card = document.createElement('div');
    const image = document.createElement('img');
    const card_title = document.createElement('div');
    const front = document.createElement('div');
    const btn_rotate = document.createElement('div');

    card.className = 'card';
    // image.className = 'img-card';
    front.className = 'front';
    card_title.className= 'title-card';
    btn_rotate.className = 'btn-rotate';

    card_title.textContent = String(el.word)
    // image.src = require('./' + el.image).default
    front.style.cssText = "background-image: url(" + require('./' + el.image).default + ");"
    // btn_rotate.style.cssText = "background-image: url(" + require('./img/arrows.png').default + ");"
    console.log(require('./'+ el.image).default)


    card.append(front);
    card.append(card_title);
    card.append(btn_rotate);
    // front.append(image);

    wrapper_content.append(card)
  })
  

}







