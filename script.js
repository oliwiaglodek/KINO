
const seats = document.querySelectorAll(".seat");
const count = document.getElementById("count");
const total = document.getElementById("total");

let selectedSeats = [];
let ticketPrice = 10; // Cena biletu

// Aktualizacja liczby wybranych miejsc i kosztu
function updateSelectedCount() {
  const selected = document.querySelectorAll(".seat.selected");
  const selectedSeatsCount = selected.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Obsługa kliknięcia na miejsce
function seatClickHandler() {
  this.classList.toggle("selected");

  updateSelectedCount();
}

// Dodajemy nasłuchiwanie kliknięcia dla każdego miejsca
seats.forEach((seat) => {
  seat.addEventListener("click", seatClickHandler);
});
