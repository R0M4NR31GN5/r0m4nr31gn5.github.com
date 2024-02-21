let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = false;

let runnerAge = 18;

if (runnerAge >= 18 && earlyRegister === true) {
  raceNumber = raceNumber + 1000;
}

if (runnerAge >= 18 && earlyRegister === true) {
  console.log(`Your race number is ${raceNumber} and your race will start at 9:30 am.`);
} else if (runnerAge >= 18 && earlyRegister === false){
  console.log(`Your race number is ${raceNumber} and your race will start at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber} and your race will start at 12:30 pm.`)
}