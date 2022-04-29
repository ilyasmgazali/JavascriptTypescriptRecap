# less than

===========
1 < 3;

# equal to

==========
4 == 4;
'4' == 4;

# strict equal to

=================
'4' === 4;
1 === 1.0;

# not equal to

==============
2 !== 2;

# less than or equal to

=======================
4 >= 8

# logical operators

===================
true && true
true || false
!true

# read it all together

======================
const num1 = 400;
const num2 = 300;
const num3 = 800;

if (num1 > num2 && num1 > num3) {
console.log("num1 is bigger then num2 and num3");
} else if (num2 > num1 && num2 > num3) {
console.log("num2 is bigger num1 and num3");
} else {
console.log("num3 is bigger then num1 and num2");
}

# further reading

=================
https://www.w3schools.com/js/js_comparisons.asp