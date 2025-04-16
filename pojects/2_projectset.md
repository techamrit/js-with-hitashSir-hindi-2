#projects related to Dom

## project link

[]()
#solution code

## project 1

```javascript
console.log("amrit");
const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    const target = e.target.id;
    switch (target) {
      case "grey":
        body.style.backgroundColor = e.target.id;

        break;
      case "white":
        body.style.backgroundColor = e.target.id;

        break;
      case "blue":
        body.style.backgroundColor = e.target.id;

        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;

        break;

      default:
        console.log("wrong inupt");

        break;
    }
    // if(e.target.id === "grey"){
    //   body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === "white"){
    //   body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === "blue"){
    //   body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === "yellow"){
    //   body.style.backgroundColor = e.target.id;
    // }
  });
});
```

## project 2 solution

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height  ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid height  ${weight}`;
  } else if (bmi < 18.6) {
    // show the result

    results.innerHTML = `<span> under Wight ${bmi}</span>`;
  } else if (bmi < 18.6) {
    // show the result

    results.innerHTML = `<span> under Wight ${bmi}</span>`;
  } else if (bmi > 18.6 && bmi < 24.9) {
    // show the result

    results.innerHTML = `<span> normal Range ${bmi}</span>`;
  } else if (bmi >= 24.9) {
    // show the result

    results.innerHTML = `<span> Overweight ${bmi}</span>`;
  } else {
    results.innerHTML = " wrong input";
  }
});
```
