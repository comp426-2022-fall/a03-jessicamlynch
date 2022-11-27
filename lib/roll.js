// this file is the main file and also where we
// will put our dice-rolling function(s)

function roll(sides, num_dice, times_rolled) {
  // make array to store results
  let results = [];

  for (let i = 0; i < times_rolled; i++) { // for each roll
    let sum = 0;
    for (let j = 0; j < num_dice; j++){ // roll all the dice
      // get value of dice that was rolled and add to sum for the roll
      let current_roll = Math.floor(Math.random() * sides) + 1;
      sum += current_roll;
    }
    // add sum of all dice for the roll to results
    results.push(sum);
  }

  // build info to return
  let info = {
    sides: sides,
    dice: num_dice,
    rolls: times_rolled,
    results: results
  }
  return (info);
}
