# without function
==================
name = 'John';
score = 50;

if (score > 80) {
  console.log(`Wow ${name} you are a genius!`);
} else if (score > 55) {
  console.log(`Hey ${name} You passed`);
} else {
  console.log(`Try again ${name}`);
}

# as a function
===============
function gradeEssay(score, name) {
  if (score > 80) {
    return `Wow ${name} you are a genius!`;
  } else if (score > 55) {
    return `Hey ${name} You passed`;
  } else {
    return `Try again ${name}`;
  }
}

console.log(gradeEssay(90, 'Kingsley'));
console.log(gradeEssay(70, 'Dayana'));
console.log(gradeEssay(50, 'Peter'));

# no returns
============
function sum(a, b) {
  a + b;
  return;
}

sum(10, 15);

# self invoking // -------------------------------- Good feedback
==============
(function () {
  console.log("I can run myself!!!");
})();

# further reading:
==================
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions