// night's numbers of hours of sleep
const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 9;
      break;
    case 'thursday':
      return 10;
      break;
    case 'friday':
      return 5;
      break;
    case 'saturday':
      return 0;
      break;
    case 'sunday':
      return 9;
      break;
    default:
      return 'Error!'
      break;
  }
};

// calculate actual total hours of sleep per week
const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};

// calculate ideal hours of sleep per week
const getIdealSleepHours = () => {
  const idealHours = 8;
  // multiple by 7 to get hours per week
  return 8 * 7;
}

// calculate 
const calculateSleepDebt = () => {
  const actualSleepHour = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if(actualSleepHour === idealSleepHours) {
    console.log('You got the perfect amount of sleep');
  } else if(actualSleepHour > idealSleepHours) {
    console.log('You got ' + (actualSleepHour-idealSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  } else {
    // if the actual sleep is less than the ideal sleep
    console.log('You need '+ (idealSleepHours-actualSleepHour) + ' hour(s) more of sleep!');
  }
}

calculateSleepDebt()
