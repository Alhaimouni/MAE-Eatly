let currentCardIndex = 0;
const totalCards = 3;

function showCard(index) {
  const cards = document.querySelectorAll(".card");
  if (index >= 0 && index < totalCards) {
    cards.forEach((card) => (card.style.display = "none"));
    cards[index].style.display = "block";
    currentCardIndex = index;
  }
}

function swapCards(offset) {
  const newIndex = (currentCardIndex + offset + totalCards) % totalCards;
  showCard(newIndex);
}

showCard(currentCardIndex);
