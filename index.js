const getredlight = document.getElementById("redlight");
const getamberlight = document.getElementById("amberlight");
const greenlight = document.getElementById("greenlight");
const gettimer = document.querySelector(".timer");
const getdiscobtn = document.querySelector(".disco");

let timeleft = 10;
const timerfn = () => {
  const getcurrenttimer = (document.getElementById("timer").innerHTML =
    timeleft);
  timeleft -= 1;

  if (timeleft > 3) {
    greenlight.classList.add("turnongreen");
  }
  if (timeleft < 2) {
    getamberlight.classList.add("turnonamber");
    greenlight.classList.remove("turnongreen");
    getredlight.classList.remove("turnonred");
  }

  if (timeleft === 0) {
    clearInterval(myinterval);
    const getcurrenttimer = (document.getElementById("timer").innerHTML =
      "timeout");
    getredlight.classList.add("turnonred");
    getamberlight.classList.remove("turnonamber");
  }
};

const myinterval = setInterval(timerfn, 1000);

// if (!timeleft ==0){
//   greenlight.classList.add('turnongreen')
// };

// let pizza = 10;
// pizza -= 1;
// console.log("pizza", pizza);

function turnonredfn() {
  if (getredlight.classList.contains("turnonred")) {
    const redoff = document.querySelector(".red").classList.remove("turnonred");
  } else {
    const redoff = document.querySelector(".red").classList.add("turnonred");
  }
}

const turnonamber = () => {
  if (getamberlight.classList.contains("turnonamber")) {
    const amber = document
      .querySelector(".amber")
      .classList.remove("turnonamber");
  } else {
    const amber = document.querySelector(".amber").classList.add("turnonamber");
  }
};

const turnongreen = () => {
  if (greenlight.classList.contains("turnongreen")) {
    const green = document
      .querySelector(".green")
      .classList.remove("turnongreen");
  } else {
    const green = document.querySelector(".green").classList.add("turnongreen");
  }
};

const resetfn = () => {
  const resetgreen = document
    .querySelector(".green")
    .classList.remove("turnongreen");
  const resetamber = document
    .querySelector(".amber")
    .classList.remove("turnonamber");
  const resetred = document.querySelector(".red").classList.remove("turnonred");
};

// get butons
const getstopbtn = document
  .querySelector(".stopbtn")
  .addEventListener("click", turnonredfn);
const getcautionbtn = document
  .querySelector(".cautionbtn")
  .addEventListener("click", turnonamber);
const getgobtn = document
  .querySelector(".gobtn")
  .addEventListener("click", turnongreen);

const reserbtn = document
  .querySelector(".reset")
  .addEventListener("click", resetfn);

// functions to remove clases to turn off lights
