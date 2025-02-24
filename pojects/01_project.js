#projects related to DOM 
#projectlink 
[click hear]

## project 1 
const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);

  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```
## project 2 solution

```javascript

const form = document.querySelector('form');
// console.log(form)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   }  else {
//     const BMI = (weight / ((height * height) / 1000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${BMI}</span>`;
//   }
// });
const bmi = (weight / ((height * height) / 1000)).toFixed(2);

if (height === '' || height < 0 || isNaN(height)) {
  results.innerHTML = `Please give a valid height ${height}`;
} else if (weight === '' || weight < 0 || isNaN(weight)) {
  results.innerHTML = `Please give a valid weight ${weight}`;
} else if (bmi<=18.6){
  //show the result
  results.innerHTML = `<span>under weight ${bmi}</span>`;
}
else if (bmi>18.6&&bmi<=25){
  //show the result
  results.innerHTML = `<span>normal weight ${bmi}</span>`;
}
 else if (bmi>25){
  //show the result
  results.innerHTML = `<span>over weight ${bmi}</span>`;
}else{
  results.innerHTML =` <span>wrong input</span>`
}

});
