function start() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log('Start'));
      }, 1000);
    });
  }
  function middle() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log('Middle'));
      }, 2000)
    });
  }
  function end() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log('End'));
      }, 1000)
    });
  }

  // the top can stay the same as previous, just change this
  // added extra setTimeout at the top
  async function runAsync() { 
    await start();
    await middle();
    await end();
  }
  runAsync();

//arrow function, calls itself
  // (async () => { 
  //   await start();
  //   await middle();
  //   await end();
  // })();
  
//arrow function, calls itself, with try catch
  // (async () => {
  //   try {
  //     await start();
  //     await middle();
  //     await end();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // })();
  
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await