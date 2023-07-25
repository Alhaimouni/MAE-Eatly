"use strict";
const { log } = console;
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
      back.disabled = true;
    } else {
      back.style.opacity = "1";
      back.disabled = false;
    }
    if (index == totalCards - 1) {
      next.style.opacity = "0.2";
      next.disabled = true;
    } else {
      next.style.opacity = "1.0";
      next.disabled = false;
    }
  }
}

function swapCards(offset) {
  const newIndex = (currentCardIndex + offset + totalCards) % totalCards;
  showCard(newIndex);
}

showCard(currentCardIndex);

//============================================================================================

//section five slider

const [back5, next5] = document.querySelectorAll(".slide-5 .btns button");
const pds = document.querySelectorAll(".slide-5 .pd");

let head = 0;

next5.addEventListener("click", () => {
  if (head > pds.length - 3) {
    return;
  }
  pds[head].style.display = "none";
  head++;
});

back5.addEventListener("click", () => {
  if (head < 1) {
    for (let i = 0; i < pds.length; i++) {
      pds[i].style.display = "inline-block";
    }
    head = 0;
    return;
  }
  for (let i = 0; i < pds.length; i++) {
    pds[i].style.display = "none";
  }
  pds[head - 1].style.display = "inline-block";
  pds[head].style.display = "inline-block";
  head--;
});
