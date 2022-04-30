# further reading
=================

// Promise
function start() {
  return new Promise((resolve, reject) => {
    resolve(console.log('Start program'));
  });
}

function middle() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('Wait for 2 seconds'));
    }, 2000);
  });
}

function end() {
  return new Promise((resolve, reject) => {
    resolve(console.log('End program'));
  });
}

// console.log(start());
//start().then(middle).then(end); // cann do it this way too

start()
  .then(middle)
  .then(end)
  .catch((error) => console.log(error.message));  

# further reading
=================
https://www.w3schools.com/js/js_promise.asp