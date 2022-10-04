let myArray = [
  "Habib",
  "Mhamad",
  "Hasan",
  "Fawzeya",
  "Najla",
  "Rawya",
  "Loulou",
  "Noura",
];

let randomized = Math.random() * myArray.length;

let final = Math.floor(randomized);

document.write(myArray[final]);
