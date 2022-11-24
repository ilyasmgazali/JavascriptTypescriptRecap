// # creating an object
// ====================
-- object with no variable!!!!!!!!
{
    name: 'Jane',
    lastname: 'Tailor',
    age: 34
}

// variable = object student 
====================
const student = {
  name: 'Jane',
  lastname: 'Tailor',
  age: 34
}

# retrieve value
================
student['name']
//remember student[0] gives index,, but I are retriving string pairs instead

# add / change value
====================
student['name'] = 'Bumi' //--- will add name, and change/overwrite
console.log(student) //------------ will print the whole object

student['subject'] = 'Science' //----- add whole new item into object, invented new name
console.log(student) //----- 

# delete value
==============
delete student['subject'] 
console.log(student)

# check key exists // you might want to check before deleting to not get error
==================
student.hasOwnProperty('subject') //--------- false, as not addedd yet
student.hasOwnProperty('name') // ----------- true, as it exists

# further reading
=================
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects