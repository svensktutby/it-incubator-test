'use strict';

const form = document.getElementById('form-search');
const input = document.getElementById('input-search');

const googleStr = 'google';
const yandexStr = 'Yandex круче. Но это не точно';

const people = [
  {
    name: 'Andrei',
    age: 43,
  },
  {
    name: 'Someone',
    age: 25,
  },
  {
    name: 'Another person',
    age: 60,
  },
  {
    name: 'Child',
    age: 10,
  },
];

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  // showQueryAnswer();
  showQueryAnswerWithDelay(3);
  showPersonName();
});

// 3, 4
function showQueryAnswer() {
  if (input.value.trim()) {
    if (input.value.trim() === googleStr) {
      alert(yandexStr);
    } else {
      alert(input.value);
    }
  }
}

// 5
function showPersonName() {
  alert(people[0].name);
}

// 6
const superSum = (a, b) => alert(+a + +b);
// superSum(1, 2);

// 7
const randomNumbers = [9, 100, 15, 3e10, -14];

function findMinAndMaxNumbers(arr) {
  let numbers = {
    min: Infinity,
    max: -Infinity,
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < numbers.min) {
      numbers.min = arr[i];
    }
    if (arr[i] > numbers.max) {
      numbers.max = arr[i];
    }
  }

  return numbers;
}
console.log(findMinAndMaxNumbers(randomNumbers));

// 8
let a = 'XXX';
let b = 'YYY';

// тут ваш код
const temp = a;
a = b;
b = temp;

console.log(a); // то что было изначально в b
console.log(b); // то что было изначально в a

// 9
const findMax = (arr) => Math.max(...arr);
console.log(findMax(randomNumbers));

// 10
function showQueryAnswerWithDelay(delay) {
  if (input.value.trim()) {
    setTimeout(() => {
      if (input.value.trim() === googleStr) {
        alert(yandexStr);
      } else {
        alert(input.value);
      }
    }, delay * 1000);
  }
}
