const alarms = process.argv.slice(2); // removes the path of node and file
//for (let i = 0; i < alarms.length; i ++) {
const beeper = (delay) => {
  setTimeout(() => {
    //process.stdout.write('\x07');
    console.log("beep");
  }, (delay * 1000));
};
for (let element of alarms) {
  if (element > 0 || (!isNaN(Number(element)))) {
    // if an argument is negative, or not a number
    //if (alarms[i] < 0 || (isNaN(Number(alarms[i]))) ) {
    beeper(element);
  }
  //beeper(element);

  // setTimeout( () => {
  //   //process.stdout.write('\x07');
  //    console.log("beep");
  // }, (element * 1000));
}

/**EDGE CASES
 * No numbers passed: It shouldn't beep and will end immediately since no beeps are
 * scheduled/ input
 * If the input is a negative number: Ignore/skip it. We can't schedule anything in
 * the past.
 * If the input is not a number: Ignore/skip it as well
 **/
