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
