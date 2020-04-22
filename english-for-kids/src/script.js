import './styles/style.css';
import cards from './cards.js';


window.addEventListener('mouseup' , (e)=> { 
  if( burger_all.classList.contains('show-burger') && !e.target.classList.contains('navigation')  && !e.target.classList.contains('nav') && !e.target.classList.contains('nav_item') && 
  !e.target.classList.contains('hamburger') && !e.target.classList.contains('burger')  ){
    closeBurg()
  }
})

// burger minu
const burger_line = document.querySelector('.hamburger');
const burger_all = document.querySelector('.navigation')
let pwd = NaN
let index_category = -1
let errors = 0
let correct_answ = 0

burger_line.addEventListener('click', closeBurg)
// document.addEventListener('click', (e) =>{
//   if (burger_all.classList.contains('show-burger') && e.target.className != 'navigation') closeBurg()
// })
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

const nav = document.querySelector('.nav')

nav.addEventListener('click', (e) => {
  if(e.target.className == 'nav-item'){

    nav.querySelectorAll('.nav-item').forEach((el) => {
      el.classList.remove('select-nav-item');
    })
      
      e.target.classList.add('select-nav-item');
      burger_all.classList.remove('show-burger');
      burger_line.classList.remove('hamburger-transform');
      show_category(e.target.textContent)

  }
  

})


// _____________________________________


const wrapper_content = document.querySelector('.wrapper-content');
function main_page(){
  wrapper_content.innerHTML = ''
  const rating = document.createElement('div')
  rating.className = 'rating'
  rating.classList.add('none')
  wrapper_content.append(rating)
  
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

    card.addEventListener('click', ()=>{
      show_category(cards[0][index])
      index_category = index
      const nav_item = document.querySelectorAll('.nav-item')
      nav_item.forEach((el) =>{
        el.classList.remove('select-nav-item')
      })
      nav_item[index + 1].classList.add('select-nav-item')

    })
    wrapper_content.append(card)
  })
  pwd = 'main'
  
  
}
main_page()









function show_category(category){
  wrapper_content.innerHTML = ' '
  if (category === 'Main') {
    main_page()
    add_red_color(checkbox)
    
  }
  else  create_category(cards[0].indexOf(category))
  go_to_play_mod(checkbox)
  src_songs = []
  rating_show_hide(checkbox)
}

function create_category(index){
  const rating = document.createElement('div')
  rating.className = 'rating'
  rating.classList.add('none')
  wrapper_content.append(rating)
  cards[index + 2].forEach((el) =>{
    const card = document.createElement('div');
    const image = document.createElement('img');
    const card_title = document.createElement('div');
    const card_title_back = document.createElement('div');
    
    const front = document.createElement('div');
    const back = document.createElement('div');
    const btn_rotate = document.createElement('div');
  

    card.className = 'card';
    front.className = 'front';
    back.className = 'back';
    card_title.className= 'title-card';
    card_title_back.className = 'title-card';
    btn_rotate.className = 'btn-rotate';

    card_title.textContent = String(el.word)
    card_title_back.textContent = String(el.translation)
   
    front.style.cssText = "background-image: url(" + require('./' + el.image).default + ");"
    back.style.cssText = "background-image: url(" + require('./' + el.image).default + ");"
    card.addEventListener('click', function(e){
      
      if (e.target.className == 'btn-rotate') this.classList.add('rotated')
      if (e.target.className =='title-card') {
        const voice = new Audio(require('./' + el.audioSrc).default);
        voice.play()
      }
      
    })
    card.addEventListener('mouseleave', function(){
      this.classList.remove('rotated')
    })
    
    card.append(front);
    card.append(back);
    front.append(card_title);
    front.append(btn_rotate);
    
    back.append(card_title_back);
    

    wrapper_content.append(card)
  })

  pwd = 'categor'
  index_category = index
  create_btn_start(wrapper_content)
  show_hide_btn_start(checkbox)
}
const checkbox = document.getElementById('myonoffswitch');
function add_red_color(checkbox){
  if (checkbox.checked == true){
    document.querySelector('.navigation').classList.add('navigation-red')
    document.querySelectorAll('.main-card').forEach((el) =>{
      el.classList.add('main-card-red')
    })
  }
  
}
function delete_red_color (checkbox){
  if(checkbox.checked == false){
    document.querySelector('.navigation').classList.remove('navigation-red')
    document.querySelectorAll('.main-card').forEach((el) =>{
      el.classList.remove('main-card-red')
    })
  }
}

function go_to_play_mod(checkbox) {
  if (checkbox.checked == true){
    document.querySelectorAll('.front').forEach((el) =>{
      el.classList.add('game-mod')
    })
    document.querySelectorAll('.title-card').forEach((el) =>{
      el.classList.add('title-card-none')
    })
    document.querySelectorAll('.btn-rotate').forEach((el) =>{
      el.classList.add('btn-rotate-none')
    })
  }
}

function exit_play_mod(checkbox){
  if (checkbox.checked == false){
    document.querySelectorAll('.front').forEach((el) =>{
      el.classList.remove('game-mod')
    })
    document.querySelectorAll('.title-card').forEach((el) =>{
      el.classList.remove('title-card-none')
    })
    document.querySelectorAll('.btn-rotate').forEach((el) =>{
      el.classList.remove('btn-rotate-none')
    })
  }
}
let src_songs = []
 function start_game (index, src_songs){
  // let src_songs = []
  cards[index+2].forEach((el) =>{
    src_songs.push(el.audioSrc)
  })
  src_songs.sort(function(){
    return Math.random() - 0.5;
  })

}

const add_listen_to_card = function(){
  if(String(src_songs[src_songs.length-1]).includes(String(this.children[0].textContent))){
    const correct_voice = new Audio(require('./audio/correct.mp3').default)
    correct_voice.play()
    src_songs.pop()
    if (src_songs.length == 0 & errors == 0){
      wrapper_content.innerHTML = ''
      const h = document.createElement('h1')
      h.innerText = 'Поздравляю'
      const wrap = document.createElement('div')
      wrap.className ='wrap'
      const im = document.createElement('div')
      im.className = 'cool'
      wrapper_content.append(h)
      wrap.append(im)
      wrapper_content.append(wrap)
      setTimeout(()=>{
        main_page()
        add_red_color(checkbox)
      }, 3000 )
    }
    if(src_songs.length == 0 & errors != 0){
      wrapper_content.innerHTML = ''
      const h = document.createElement('h1')
      h.innerText = String(errors) + ' Errors'
      const wrap = document.createElement('div')
      wrap.className ='wrap'
      const im = document.createElement('div')
      im.className = 'bad'
      wrapper_content.append(h)
      wrap.append(im)
      wrapper_content.append(wrap)
      setTimeout(()=>{
        main_page()
        add_red_color(checkbox)
      }, 3000 )
    }
    if (src_songs.length > 0){
      const next_voice = new Audio (require('./' + src_songs[src_songs.length - 1]).default)
      next_voice.play()
    }
    
    const star_succes = document.createElement('div')
    star_succes.classList = 'star-succes'
    document.querySelector('.rating').append(star_succes)
    this.removeEventListener('click', add_listen_to_card)
    this.classList.add('opasit')
  }
  else{
    const error_voice = new Audio (require('./audio/error.mp3').default)
    error_voice.play()
    
    const star_error = document.createElement('div')
    star_error.classList = 'star-error'
    document.querySelector('.rating').append(star_error)
    errors ++
  }

  
}

function create_btn_start(wrapper_content){
  const btn_start = document.createElement('div')
  btn_start.className = 'btn'
  btn_start.classList.add('none')
  btn_start.innerText = 'Start game'
  wrapper_content.append(btn_start)

  
}
function show_hide_btn_start(checkbox){
  const btn = document.querySelector('.btn')
  btn.classList.remove('repeat')
  if (checkbox.checked == true){
    
    btn.classList.remove('none')
    btn.addEventListener('click', function(e){
      start_game(index_category, src_songs)
      e.target.classList.add('repeat');
      const  f = new Audio(require('./'+ src_songs[src_songs.length-1]).default)
      f.play()
      document.querySelector('.repeat').addEventListener('click', function(){
        const repeat_voice = new Audio (require('./' + src_songs[src_songs.length -1 ]).default)
        repeat_voice.play()
      })
      document.querySelectorAll('.front').forEach((el) =>{
        el.addEventListener('click', add_listen_to_card)
      })
    }, {once:true} )

  }
  else{
    
    btn.classList.add('none')
    src_songs = []
  }
}
function rating_show_hide(checkbox){
  if (checkbox.checked){
    document.querySelector('.rating').classList.remove('none')
  }
  else{
    document.querySelector('.rating').classList.add('none')
  }
}




checkbox.addEventListener('change', ()=>{
  
  add_red_color(checkbox)
  delete_red_color(checkbox)
  go_to_play_mod(checkbox)
  exit_play_mod(checkbox)
  if (document.querySelector('.btn')){
    show_hide_btn_start(checkbox)
  }
  
  rating_show_hide(checkbox)
  src_songs = []
  document.querySelectorAll('.front').forEach((el) =>{
    el.removeEventListener('click', add_listen_to_card)

  })
  document.querySelector('.rating').innerHTML = ''

  document.querySelectorAll('.front').forEach((el) => {
    el.classList.remove('opasit')
  })
  

  
  
})
  

  
  












