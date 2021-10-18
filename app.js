// ? Task:


// Solution 1

let c = 45;

function draw() {
  document.documentElement.style.setProperty("--direction", c++ + "deg");
  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);

// ! Explanation: 
