let linkRes = document.querySelector(".res-link");

let tech = 0,
  guman = 0,
  bis = 0;

function result() {
  let arrayBalls = [];
  
  const inputs = document.querySelectorAll('input[type="radio"]:checked');

  inputs.forEach((input) => {
    arrayBalls.push(input.value);
    input.addEventListener('click', () => {
     console.log('я инпут');
    })
  });

  arrayBalls.forEach((value) => {
    if (value === "1") {
      tech += 1;
    } else if (value === "2") {
      guman += 1;
    } else if (value === "3") {
      bis += 1;
    }

  });

  localStorage.setItem('techBall', tech)
  localStorage.setItem('gumanBall', guman)
  localStorage.setItem('bisBall', bis)
}


linkRes.addEventListener("click", result);