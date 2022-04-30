# understanding sync
# Sync runs from top to bottom 
==============================

console.log('Start')

console.log('Middle')

console.log('End')

# Async runs like Sync but will also factor time and 
# can skip and return to pending executions
===========================================

console.log('Start program')

setTimeout(() => {
  console.log('Wait for 2 seconds')
}, 2000)

console.log('End program')

# further reading
=================
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing