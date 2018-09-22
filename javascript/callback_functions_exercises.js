class Clock {
  constructor() {
    let time_now = new Date();
    this.hour = time_now.getHours();
    this.minutes = time_now.getMinutes();
    this.seconds = time_now.getSeconds();
  }

  printTime() {
    console.log(`${this.hour}:${(this.minutes).toString().padStart(2, `0`)}:${(this.seconds).toString().padStart(2, `0`)}`);
  }

  _tick() {
    window.setInterval(() => {
      this.seconds += 1;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes += 1;
        if (this.minutes === 60) {
          this.minutes = 0;
          this.hour += 1;
        }
      }
      return this.printTime();
    }, 1000);
  }
}

const clock = new Clock();




// addNumbers
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

  if (numsLeft > 0) {
    reader.question('Give me a number', (res) => {
      sum += parseInt(res);
      numsLeft--;
      console.log(`You added ${res}, current sum is ${sum}`);
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    reader.close();
    completionCallback(sum);
  }
}

// addNumbers(0, 5, sum => console.log(`Total Sum: ${sum}`));

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}?`, (res) => {
    let isGreaterThan = res === "yes" ? true : false;
    // reader.close();
    // console.log(isGreaterThan);
    callback(isGreaterThan);
  });
}

// askIfGreaterThan('el1', 'el2', (isGreaterThan) => console.log(isGreaterThan));

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if ((i < arr.length - 1) && madeAnySwaps == true) {
    madeAnySwaps = false;
    askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {
      if (isGreaterThan) {
        arr[i] = [arr[i+1], (arr[i+1] = arr[i])][0];

        madeAnySwaps = true;
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
      }else {
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
      }
    });
  } else {
    outerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
  }
}

function outerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  // console.log('i am the outer function');
  if (madeAnySwaps) {
    innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
  } else {
    return console.log(`your array is sorted = ${arr}`);
  }
}

innerBubbleSortLoop([12,10,3,1,4,9,2], 0, true, outerBubbleSortLoop);
