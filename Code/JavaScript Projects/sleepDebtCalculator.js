function getSleepHours(day) {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 8;
    } else if (day === 'wednesday') {
      return 8;
    } else if (day === 'thursday') {
      return 8;
    } else if (day === 'friday') {
      return 8;
    } else if (day === 'saturday') {
      return 8;
    } else if (day === 'sunday') {
      return 7;
    }
  }
  
  function getActualSleepHours() {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  }
  console.log(`This week you got ${getActualSleepHours()} hours of sleep,`)
  
  function getIdealSleepHours() {
    const idealHours = 8
    return idealHours * 7;
  }
  console.log(`and your weekly sleep goal is: ${getIdealSleepHours()} Hours`)
  
  if (getActualSleepHours() === getIdealSleepHours()) {
    console.log('You got the perfect amount of sleep!');
  } else if (getActualSleepHours() > getIdealSleepHours()) {
    console.log('You got more sleep than you needed');
  } else if(getActualSleepHours() < getIdealSleepHours()) {
    console.log('You need to get some more sleep!');
  }
  
  function calculateSleepDebt() {
    if (getActualSleepHours() < getIdealSleepHours()) {
      const sleepDebt = getIdealSleepHours() - getActualSleepHours();
      console.log(`You need ${sleepDebt} more hours of sleep.`);
    } else if (getActualSleepHours() > getIdealSleepHours()) {
      const extraSleep = getActualSleepHours() - getIdealSleepHours();
      console.log(`You slept for an extra ${extraSleep} hours.`)
    }
  }
  
  calculateSleepDebt();