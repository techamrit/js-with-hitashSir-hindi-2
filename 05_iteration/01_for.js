// for

for (let i = 1; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number");
  }
  //   console.log(element);
}

for (let j = 0; j <= 10; j++) {
  // console.log(`outer loop value ${j}`);

  for (let i = 0; i <= 10; i++) {
    // console.log(`Inner loop value ${i} and inner loop ${j}`);
    // console.log(`${j} * ${i} = ${j * i}`);
  }
}

let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);

for (let i = 0; i <= myArray.length - 1; i++) {
  const element = myArray[i];
  // console.log(element);
}

// braeak and continue

for (let i = 1; i < 20; i++) {
  if (i == 5) {
    // console.log(`Dectected 5 `);
    break;
  }
  // console.log(`value of i is ${i}`);
}

for (let i = 1; i < 20; i++) {
  if (i == 5) {
    console.log(`Dectected 5 `);
    continue;
  }
  console.log(`value of i is ${i}`);
}
