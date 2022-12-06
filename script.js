const filter = document.querySelector("input");
const cards = document.querySelectorAll(".cards li");
document.addEventListener("input", filterCards);

function filterCards() {
  if (filter.value !== "") {
    cards.forEach((card) => {
      let cardHeading = card.querySelector("h2");
      
      cardHeading = cardHeading.textContent.toLowerCase();
      let filterText = filter.value.toLowerCase();
      
      if (!cardHeading.includes(filterText)) {
        card.style.display = "none";
      }
      else {
        card.style.display = "block";
      }
    });
  }
  else {
    cards.forEach((card) => {
      card.style.display = "block"
    }) 
  }
}
