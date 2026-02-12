const corpo= document.querySelector('body');
const titulo= document.querySelector('.titulo'); //se utiliza ponto (.) para chamar uma classe
const container= document.querySelector('#container') // utliza hashtag (#) porque container é  um ID
const imagem= document.querySelector('#imagem')
const botao=document.querySelector('.botao')

corpo.style.backgroundColor = '#ef4f4f';
corpo.style.color = '#21a2c2';
titulo.textContent= 'Adicionando elementos via JS';
container.style.width = '94%';
container.style.margin= '0 auto';
container.style.backgroundColor='#ebe7e7';

let anuncio='<h2>Curso dev com IA - Novidade!</h2>';
container.innerHTML += anuncio;    // (+=) serve para acrescentar uma variável, neste caso o anúncio


//Adicionando atributos
imagem.setAttribute('src','./img/https://ufsb.edu.br/progepe/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png');
//imagem.removeAttribute('src')//remove atributos

//adicionando classes
imagem.classList.add('imagem');

//eventos
botao.addEventListener('click',() =>{
    alert('Cliquei no botão'+ contator++);
})
