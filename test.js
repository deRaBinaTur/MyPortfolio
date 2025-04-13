/*
let first_number = 11;                        // Klasicna if else  petlja
let second_number = 10;
if (first_number > second_number) {
  console.log("The first number is greater than second number");
}
else {
  console.log("The second number is greater than first number");
}
  let time = 8;
  if (time < 10) {
    console.log("Good morning");
    }
    else {
      console.log("Good evening");
    }
 */





    /*
let month = 6;                        // Switch petlja
switch(month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
}
*/




/*                      //While petlja
let bils = 35;
let value_of_bill = 10;
let counted_bills = 0;
while (counted_bills < bils ){
   counted_bills++;
}
console.log(counted_bills * value_of_bill);  
*/      

/*
let bils = [10,20,50,20,100,200,5,10,20];
let number_of_bills = bils.length;
let counter = 0;
while (counter < number_of_bills){
  console.log('------------');
  console.log(`Bill on position [${counter}] is:${bils[counter]}`);
  counter++;
}
console.log('End of loop');
if (counter < number_of_bills){
  console.log('Counter is smaller than number of bills ');
}
else {
  console.log('Counter is greater than number of bills');
}
console.log('counter is:' + counter);

while (counter < number_of_bills){
  console.log(bils[counter]);
  counter++;
}
let counted_bills = 0;
let number_of_bills = bils.length;
while (counted_bills < number_of_bills){
  counted_bills++;
}
console.log('Number of counted bills is: ' + counted_bills);
console.log(bils[4]);
*/


                             //For petlja 
/*
let bils = [10,20,50,20,100,200,5,10,20,];
let number_of_bills = bils.length;
let sum_of_bills = 0;
for(let counter = 0; counter < number_of_bills; counter++){
  console.log(bils[counter]);

  sum_of_bills += bils[counter];
}
console.log(sum_of_bills);
for(let counter in bils){
  console.log(counter);
  console.log(bils[counter]);
  sum_of_bills += bils[counter];
}


let bils = [10,20,50,20,100,200,5,10,20];
for(let bill of bils){
  console.log(bill);
}


let cars = ['audi','bmw','mercedes','vw','seat','skoda'];
for(let car of cars){
  console.log(car);
}

let cars = ['audi','bmw','mercedes'];
cars.forEach(function (car){
  console.log(car);
});

let cars = {
  audi:['70000','2018','a4'],
  bmw:['80000', '2019','x5'],
  mercedes:['90000','2020','s500'],
  vw:['60000','2017','golf'],
  seat:['30000','2016','ibiza']
};


for(let car in cars){
  console.log(car);
  console.log(cars[car]);
}
  
for(let car in cars){
  let name = car;
  let car_info = cars[car];
  console.log(`${name} model: ${car_info[2]},
     price: ${car_info[0]} eura, year: ${car_info[1]}`);}

console.log(cars.audi);

let person = {
  name: 'Rade',
  surname: 'Zivanovic',
  age: '28',
  job: 'programer',
  city: 'Novi Sad'
}
console.log(`Name: ${person.name}, Surname: ${person.surname}, Age: ${person.age}, Job: ${person.job}, City: ${person.city}`);

let nekretnine = {
  stan:70000,
  kuca:100000,
  plac:40000
};

let godine = 20;
let meseci = godine*12;
let rata = nekretnine.stan / meseci;
rata = rata.toFixed(2);
console.log(meseci + ' meseci ');
console.log(rata + ' rata');
console.log(`Mesecna rata za stan iznosi ${rata} eura ${godine} godina`);
let rata_kuce = nekretnine.kuca / meseci;
rata_kuce = rata_kuce.toFixed(2);
console.log(`Mesecna rata za kucu iznosi ${rata_kuce} eura na ${godine} godina`);
*/
/*

let nekretnine = {
  stan:70000,
  kuca:100000,
  plac:40000
};
// proracun za stan na 15god
racunanje_mesecne_rate (15, 'stan');
// proracun za kucu na 20god
racunanje_mesecne_rate (20, 'kuca');
// proracun za plac na 10god
racunanje_mesecne_rate (10, 'plac');

// ova funkcija racuna mesecnu ratu za odredjenu nekretninu na odredjeni broj godina
function racunanje_mesecne_rate (godine, vrsta_nekretnine){
  let meseci = godine*12;
  let rata = nekretnine[vrsta_nekretnine] / meseci;
  rata = rata.toFixed(2);
  console.log(`Mesecna rata za ${vrsta_nekretnine} iznosi ${rata} eura na ${godine} godina`);
}
*/
/*
let brend = document.getElementsByTagName('span');
for(let auto of brend){
  console.log(auto.innerText);
}
let modeli = document.getElementsByClassName('automobil-model');
for(let model of modeli){
  console.log(model.innerText);
}

let najbolji = document.getElementById('test');
console.log(test.innerText);
*/
/*
let brend = document.querySelectorAll('span');
for(let auto of brend){
  console.log(auto.innerText);
}
let modeli = document.querySelectorAll('.automobil-model');
for(let model of modeli){
  console.log(model.innerText);
}
let najbolji = document.querySelector('#test');
console.log(test.innerText);
*/
/*
let recenica = document.querySelector('#test');
recenica.remove();

let novi_el
*/

 