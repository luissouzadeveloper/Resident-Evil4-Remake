let slides = document.querySelectorAll('.slider-container')
let index = 0

function next(){
    slides[index].classList.remove('active')
    index = (index + 1) % slides.length
    slides[index].classList.add('active')
}

function prev(){
    slides[index].classList.remove('active')
    index = (index - 1 + slides.length) % slides.length
    slides[index].classList.add('active')
}

// Edições de Resident Evil 4 
// Edição padrão

function padrão(){
    ps5();
    ps4();
    xbox();
    steam();
}

function ps5(){
    let image = document.querySelector('#jogo')
    image.src = 'img/jogo-ps5.jpg'
    let paragrafo = document.querySelector('#txt-jogo')
    paragrafo.innerHTML = '<p>Exclusivo com a pré-venda digital no PlayStation®4 e PlayStation®5</p>'
    let botao = document.querySelector('#botao')
    botao.style.backgroundColor = '#0248A0'
    botao.style.color = '#fff'
    botao.innerHTML = '<a href="#">PlayStation Store</a>'
}
function ps4(){
    let image = document.querySelector('#jogo')
    image.src = 'img/jogo-ps4.jpg'
    let paragrafo = document.querySelector('#txt-jogo')
    paragrafo.innerHTML = '<p>Exclusivo com a pré-venda digital no PlayStation®4 e PlayStation®5</p>'
    let botao = document.querySelector('#botao')
    botao.style.backgroundColor = '#0248A0'
    botao.style.color = '#fff'
    botao.innerHTML = '<a href="#">PlayStation Store</a>'
}
function xbox(){
    let image = document.querySelector('#jogo')
    image.src = 'img/jogo-xbox.jpg'
    let botao = document.querySelector('#botao')
    botao.style.backgroundColor = '#107A10'
    botao.style.color = '#fff'
    botao.innerHTML = '<a href="https://www.xbox.com/pt-BR/games/store/resident-evil-4/9NNMTSTGMKFZ" target="_blank">Xbox Games Store</a>'
    let paragrafo = document.querySelector('#txt-jogo')
    paragrafo.innerHTML = '<p>Otimizado para Xbox X|S</p>'
}
function steam(){
    let image = document.querySelector('#jogo')
    image.src = 'img/jogo-steam.jpg'
    let paragrafo = document.querySelector('#txt-jogo')
    paragrafo.innerHTML = '<p>Divirta-se jogando pelo PC via Steam!</p>'
    let botao = document.querySelector('#botao')
    botao.style.backgroundColor = '#0248A0'
    botao.style.color = '#fff'
    botao.innerHTML = '<a href="https://store.steampowered.com/app/2050650/Resident_Evil_4/" target="_blank">Steam PC</a>'
}


