
const seats = document.querySelectorAll(".seat");
const count = document.getElementById("count");
const total = document.getElementById("total");

let selectedSeats = [];
let ticketPrice = 10; // Cena biletu

// Aktualizacja liczby wybranych miejsc i kosztu
function updateSelectedCount() {
  const selected = document.querySelectorAll(".seat.selected:not(.showcase)");
  const selectedSeatsCount = selected.length;
  
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Obsługa kliknięcia na miejsce
function seatClickHandler() {
  if(!this.classList.contains("occupied")){
    if (!this.closest(".showcase")){
      this.classList.toggle("selected");
      updateSelectedCount();
    }    
  }    
}

// Dodajemy nasłuchiwanie kliknięcia dla każdego miejsca
seats.forEach((seat) => {
  seat.addEventListener("click", seatClickHandler);
});

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//błedne dane
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//poprawne dane
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//poprawność email
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Nieprawidłowy adres email');
  }
}

//nazwa użytkownika
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} jest wymagana`);
    } else {
      showSuccess(input);
    }
  });
}

//poprawnośc hasła
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} musi mieć co najmniej ${min} znaków`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} musi mieć mniej niż ${max} znaków`);
  } else {
    showSuccess(input);
  }
}

//porównienie dwóch haseł
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Hasła nie są identyczne');
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Zdarzenie zarejestrownia
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});