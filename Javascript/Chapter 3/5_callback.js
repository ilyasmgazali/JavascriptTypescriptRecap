//callbacks
function start(callback) {
    console.log('Start program');
    callback();
}
  
function middle(callback) {
setTimeout(() => {
    console.log('Wait for 2 seconds');
    callback();
}, 2000);
}
  
function end() {
console.log('End program');
}
  
start(() => {
    middle(() => {
        end();
        });
    }
);

# further reading
=================
https://www.w3schools.com/js/js_callback.asp