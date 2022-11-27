// this file is the main file and also where we
// will put our dice-rolling function(s)

function roll(sides, num_dice, times_rolled) {
  // make array to store results
  let results = [];

  for (let i = 0; i < times_rolled; i++) { // for each roll
    let sum = 0;
    console.log("On roll " + (i+1))
    for (let j = 0; j < num_dice; j++){ // roll all the dice
      // get value of dice that was rolled and add to sum for the roll
      let current_roll = Math.floor(Math.random() * sides) + 1;
      console.log("Current die " + (j+1) + " has value of " + current_roll);
      sum += current_roll;
      console.log("Running total for this roll is " + sum);
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

console.log(roll(6, 2, 2));
