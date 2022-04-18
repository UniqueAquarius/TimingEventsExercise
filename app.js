// 1. Use a setTimeout method to have "Hi" displayed as a p element/tag inside the div with the id of "first" 1 second after the page loads.
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
  const p1  = document.createElement(`p`);
  p1.innerText = `Hi`;
  div1.append(p1);
}, 1000);

// 2. Use nested setTimeout methods to complete the following: Have the text of "One" displayed as a p element/tag inside the div with the id of "timeout-nesting" 2 seconds after the page loads. Also, below the "One" p element/tag, have the text of "Two" also displayed as a p element/tag inside the same div 3 seconds after the page loads.
setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
    const p2  = document.createElement(`p`);
    p2.innerText = `One`;
    div2.append(p2);
    setTimeout(() => {
      const p3 = document.createElement(`p`);
      p3.innerText = `Two`;
      div2.append(p3);
    }, 3000);
  }, 2000);
// 3a.  Use a setInterval method to display a counter in the console that starts at 1 and continues going up one number at a time every second.
let count = 1;
const stop = setInterval(() => {
  console.log(count);
  count++;
}, 1000);

// 3b. Have the "STOP" button set up so that when it is pressed the setInterval method created in 3a will stop continuously running (HINT: Need to create a variable).
const button = document.querySelector(`button`);
button.addEventListener(`click`, () => {
    clearInterval(stop);
  });
// BONUS

//4. Using setInterval, display a countdown clock as a p element/tag inside the div with the id of "countdown". Have the countdown clock start at 2 minutes and count down. The countdown clock should display in the following format (Example: 2:00 to start and 0:00 at end). ALSO, when the countdown timer hits zero have it display a message saying… "TIME IS UP" instead of the clock (AKA 0:00).
const div3 = document.querySelector(`#countdown`);
const p4 = document.createElement(`p`);
let num = 120;
const timer = setInterval(() => {
    if (num > 0) {
        let min = Math.floor(num/60);
        let sec = num - min * 60;
        p4.innerText = `${min} : ${sec}`;
        div3.append(p4);
    } else {
        clearInterval(timer);
        p4.innerText = `TIME IS UP`;
        div3.append(p4);
    }
    num--;
}, 1000);




