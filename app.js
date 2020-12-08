const background = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

// set starting load point
let load = 0;
// interval set to load the blurring function every 5 milliseconds
let INTERVAL = setInterval(blurring, 5);

// function set to create blurring effect on page
function blurring() {
  // increment the load if it is less than 100, in this case 100%
  load++;
  if (load > 99) {
    //   clear the interval once condition is met
    clearInterval(INTERVAL);
  }

  //   function to map one range of numbers to another number range
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
  //   implement the load count onto the page where loading-text class is
  loadText.textContent = `${load}%`;
  //   add scale function on the opacity of the text count
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  //   apply scale function to background as well
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
