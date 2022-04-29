# what is an array

==================
An array is a special variable, which can hold more than one value.

# creating an array

===================
let names = ['Ryan', 'Eric', 'Stephen', 'Laura'];

// retrieve values from array
names[1];

names.length;

# changing array values

=======================
let names = ['Ryan', 'Eric', 'Stephen', 'Laura'];
names.push('Janet');

# deleting items in array

=========================
let names = ['Ryan', 'Eric', 'Stephen', 'Laura'];
delete names[1];
names.splice(0,1); //input is (index, how many to delete)

# further reading

=================
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array