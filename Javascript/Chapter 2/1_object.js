# creating an object
====================
-- object with no variable
{
    name: 'Jane',
    lastname: 'Tailor',
    age: 34
}

====================
const student = {
  name: 'Jane',
  lastname: 'Tailor',
  age: 34
}

# retrieve value
================
student['name']

# add / change value
====================
student['name'] = 'Bumi'
console.log(student) //------------ will print the whole object

student['subject'] = 'Science' //----- add whole new pair into object
console.log(student)

# delete value
==============
delete student['subject']
console.log(student)

# check key exists
==================
student.hasOwnProperty('subject') //--------- false, as not addedd yet
student.hasOwnProperty('name') // ----------- true, as it exists

# further reading
=================
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects