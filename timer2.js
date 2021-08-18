const alarms = process.argv.slice(2);
const beeper = (delay) => {
  setTimeout(() => {
    process.stdout.write('\x07');
    //console.log("beep");
  }, (delay * 1000));
};
for (let element of alarms) {
  if (element > 0 || (!isNaN(Number(element)))) {
    beeper(element);
  }

}
