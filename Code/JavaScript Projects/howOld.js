function howOld(age, year) {
    const yearsPassed = year - 2024
    const calculatedAge = yearsPassed + age;
    if (calculatedAge >= age) {
      return `You will be ${calculatedAge} in the year ${year}.`;
    } else if (calculatedAge >= 0) {
      return `You were ${calculatedAge} in the year ${year}.`;
    } else if (calculatedAge < 0) {
      const yearsBeforeBorn = -calculatedAge;
      return `The year ${year} was ${yearsBeforeBorn} years before you were born.`
    }
  }
  console.log(howOld(18, 2030));