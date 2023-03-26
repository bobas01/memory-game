// let emoji=['🗻','👹','🌸','⛩️','👺','👘','🍣','🍥','🍙','🍱','🏮','🍲','🍡','🍜','🎏','🏯']

// let doubleEmoji = emoji.concat(emoji).sort(() =>Math.random() -0.5 );;
// let nb= doubleEmoji.length;
// const lancer = document.getElementById("presentation");
// const btn = document.getElementById("btn")
// const jeux = document.getElementById('jeu');
// const card =document.getElementsByClassName ('flip-box');
// const cardFront =document.getElementsByClassName ('flip-box-front');
// const cardBack =document.getElementsByClassName ('flip-box-back');
// let card1=document.getElementsByClassName ('flip-box-back');
// let card2=document.getElementsByClassName ('flip-box-back');
// let hasFlippedCard = false;

// btn.addEventListener('click', function(){               
//   lancer.classList.add('play')
//   jeux.classList.add('play')



// for (const dEmoji of doubleEmoji ) {
//   jeux.prepend(createCards(dEmoji))
// }
// for (const cards of card){
// cards.addEventListener('click', function(){
//   if (!hasFlippedCard) {
//     hasFlippedCard = true;
//     card1 = this;
//     this.classList.add('active');
//   } else {
//     hasFlippedCard = false;
//     card2 = this;
//     this.classList.add('active');
//     if (card1.innerHTML === card2.innerHTML) {
//       card1.removeEventListener('click', flipCard);
//       card2.removeEventListener('click', flipCard);
//       card1.classList.add('found');
//       card2.classList.add('found');

//     } else {
//       card1.classList.add('wrong');
//       card2.classList.add('wrong');
//       console.log(card1, card2);
//       setTimeout(flipCard, 2000);
//     }
//   }
// })}

// function createCards (emojis) {
//  const flipBox = document.createElement("div");
//  flipBox.classList.add('flip-box');

//  let flipBoxFront = document.createElement("div");
//  flipBoxFront.classList.add('flip-box-front'); 

//  let flipBoxBack = document.createElement("div");
//  flipBoxBack.classList.add('flip-box-back');
//  flipBoxBack.innerHTML=emojis

//  let h2 =document.createElement("h2")

//  flipBox.prepend( flipBoxFront );
//  flipBox.prepend( flipBoxBack );
//  flipBoxFront.prepend(h2);
//  h2.prepend("MEMORY");

// return flipBox;

// }
// function flipCard() {
//   card1.classList.remove('active');
//   card2.classList.remove('active');
// }

// })






















// let emoji = ['🗻', '👹', '🌸', '⛩️', '👺', '👘', '🍣', '🍥', '🍙', '🍱', '🏮', '🍲', '🍡', '🍜', '🎏', '🏯'];

// let doubleEmoji = emoji.concat(emoji).sort(() => Math.random() - 0.5);;
// let nb = doubleEmoji.length;
// const jeux = document.getElementById('jeu');
// const card = document.getElementsByClassName('flip-box');
// const cardFront = document.getElementsByClassName('flip-box-front');
// const cardBack = document.getElementsByClassName('flip-box-back');

// let card1;
// let card2;
// let hasFlippedCard = false;
// let lockBoard = false;

// for (const dEmoji of doubleEmoji) {
//   jeux.prepend(createCards(dEmoji))
// }

// for (const cards of card) {
//   cards.addEventListener('click', flipCard);
// }

// function createCards(emojis) {
//   const flipBox = document.createElement("div");
//   flipBox.classList.add('flip-box');

//   let flipBoxFront = document.createElement("div");
//   flipBoxFront.classList.add('flip-box-front');

//   let flipBoxBack = document.createElement("div");
//   flipBoxBack.classList.add('flip-box-back');
//   flipBoxBack.innerHTML = emojis;

//   let h2 = document.createElement("h2");

//   flipBox.prepend(flipBoxFront);
//   flipBox.prepend(flipBoxBack);
//   flipBoxFront.prepend(h2);
//   h2.prepend("MEMORY");

//   return flipBox;
// }

// function flipCard() {
//   if (lockBoard)
//     return;
//   if (this === card1)
//     return;
//   this.classList.add('active');
//   if (!hasFlippedCard) {
//     hasFlippedCard = true;
//     card1 = this;
//     return;
//   }
//   card2 = this;
//   checkMatch();
// }

// function checkMatch() {
//   let isMatch = card1.querySelector('.flip-box-back').innerHTML === card2.querySelector('.flip-box-back').innerHTML;
//   isMatch ? disableCards() : unflipCards();
// }

// function disableCards() {
//   card1.removeEventListener('click', flipCard);
//   card2.removeEventListener('click', flipCard);
//   card1.classList.add('found');
//   card2.classList.add('found');
//   resetBoard();
// }

// function unflipCards() {
//   lockBoard = true;
//   card1.classList.add('wrong');
//   card2.classList.add('wrong');
//   setTimeout(() => {
//     card1.classList.remove('active', 'wrong');
//     card2.classList.remove('active', 'wrong');
//     resetBoard();
//   }, 1500);
// }

// function resetBoard() {
//   [hasFlippedCard, lockBoard] = [false, false];
//   [card1, card2] = [null, null];
// }

// Définition de la liste des emojis
const emojis = ['🗻','👹','🌸','⛩️','👺','👘','🍣','🍥','🍙','🍱','🏮','🍲','🍡','🍜','🎏','🏯'];

// Duplication de la liste des emojis, mélange des éléments
const doubleEmojis = emojis.concat(emojis).sort(() => Math.random() - 0.5);
const nbEmojis = doubleEmojis.length;

// Récupération des éléments HTML
const launchButton = document.getElementById("presentation");
const playButton = document.getElementById("btn");
const gameBoard = document.getElementById('jeu');
const cards = document.getElementsByClassName('flip-box');
const cardFronts = document.getElementsByClassName('flip-box-front');
const cardBacks = document.getElementsByClassName('flip-box-back');
let card1 = null;
let card2 = null;
let hasFlippedCard = false;

// Ajout de l'événement click sur le bouton "Jouer"
playButton.addEventListener('click', function() {
  launchButton.classList.add('play');
  gameBoard.classList.add('play');

  // Création des cartes et insertion dans le jeu
  for (const emoji of doubleEmojis) {
    gameBoard.prepend(createCard(emoji));
  }

  // Ajout de l'événement click sur chaque carte
  for (const card of cards) {
    card.addEventListener('click', function() {
      // Si aucune carte n'est retournée
      if (!hasFlippedCard) {
        hasFlippedCard = true;
        card1 = this;
        this.classList.add('active');
      }
      // Si une carte est déjà retournée
      else {
        hasFlippedCard = false;
        card2 = this;
        this.classList.add('active');
        // Si les deux cartes sont identiques
        if (card1.innerHTML === card2.innerHTML) {
          card1.removeEventListener('click', flipCard);
          card2.removeEventListener('click', flipCard);
          card1.classList.add('found');
          card2.classList.add('found');
        }
        // Si les deux cartes sont différentes
        else {
          card1.classList.add('wrong');
          card2.classList.add('wrong');
          setTimeout(flipCard, 2000);
        }
      }
    })
  }
});

// Fonction qui crée une carte avec un emoji donné
function createCard(emoji) {
  const flipBox = document.createElement("div");
  flipBox.classList.add('flip-box');

  let flipBoxFront = document.createElement("div");
  flipBoxFront.classList.add('flip-box-front');

  let flipBoxBack = document.createElement("div");
  flipBoxBack.classList.add('flip-box-back');
  flipBoxBack.innerHTML = emoji;

  let h2 = document.createElement("h2");
  h2.innerHTML = "MEMORY";

  flipBox.prepend(flipBoxFront);
  flipBox.prepend(flipBoxBack);
  flipBoxFront.prepend(h2);

  return flipBox;
}

// Fonction qui retourne les cartes si elles ne sont pas identiques
function flipCard() {
  card1.classList.remove('active');
  card2.classList.remove('active');
}
