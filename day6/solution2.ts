let viableTimeCount = 0;

for (let timeHeld = 1; timeHeld < 46828479; timeHeld++) {
  const timeLeftToTravel = 46828479 - timeHeld;
  if (timeLeftToTravel * timeHeld > 347152214061471) {
    viableTimeCount += 1;
  }
}

console.log(viableTimeCount);
