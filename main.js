"use strict";

let currentCardIndex = 0;
const totalCards = document.querySelectorAll(".card").length;

function showCard(index) {
  const cards = document.querySelectorAll(".card");
  const [back, next] = document.querySelectorAll(".slider button");
  if (index >= 0 && index < totalCards) {
    cards.forEach((card) => (card.style.display = "none"));
    cards[index].style.display = "block";
    currentCardIndex = index;
    
    if (index == 0) {
      back.style.opacity = "0.2";
    } else {
      back.style.opacity = "1";
    }
    if (index == totalCards - 1) {
      next.style.opacity = "0.2";
    } else {
      next.style.opacity = "1";
    }
  }
}

function swapCards(offset) {
  const newIndex = (currentCardIndex + offset + totalCards) % totalCards;
  showCard(newIndex);
}

showCard(currentCardIndex);