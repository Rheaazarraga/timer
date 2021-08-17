const alarms = process.argv.slice(2); // removes the path of node and file

for (let i = 0; i < alarms.length; i ++) {

    // if an argument is negative, or not a number
    if (alarms[i] < 0 || (isNaN(Number(alarms[i]))) ) {
      continue;
    }

  setTimeout( () => {
    //process.stdout.write('\x07');
     console.log("beep");
  }, (alarms[i] * 1000));
}

/**EDGE CASES
 * No numbers passed: It shouldn't beep and will end immediately since no beeps are 
 * scheduled/ input
 * If the input is a negative number: Ignore/skip it. We can't schedule anything in 
 * the past.
 * If the input is not a number: Ignore/skip it as well
 **/
