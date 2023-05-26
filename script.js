const container = document.querySelector('.container'); 
const seats = document.querySelectorAll('.row .seat:not(.occupied'); 
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();//liczba wybranych miejsc
let ticketPrice = +movieSelect.value; 

// zapsuje film i cenę
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex); //przechowuje wybrany film
    localStorage.setItem('selectedMoviePrice', moviePrice); //przechowuje cene filmu
}

// update total i count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));//przechowuje tylko dane tekstowe 

    const selectedSeatsCount = selectedSeats.length;//przypisuje ilość wybranych miejsc do count 

    count.innerText = selectedSeatsCount;//aktualizuje count 
    total.innerText = selectedSeatsCount * ticketPrice;
}

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected'); //zmiana koloru miejsca
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex'); //zapamiętuje wybrane miejsca

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// wybór filmu - sprawdza czy film nie został zmieniony, wtedy aktualizuje cene i film
movieSelect.addEventListener('change', (e) => { 
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

// wybór siedzeń - sprawdza czy miejsce nie jest zajęte i obsługuje kliknięcie
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});

// aktulaizuje info o liczbie miejsc i ceny
updateSelectedCount();