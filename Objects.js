 //objects must be on key and value pair and key should be on string formate 
 let person = {

    firstname : "santosh",
    lastname : "sk",
    fullname : function()
 {
   console.log (this.firstname+this.lastname)
 }

 }
 console.log(person.firstname)
 console.log(person.lastname)
 
 //we can assign key and value pair
 person.gender = "male"

 console.log(person.gender)

 //to print the function 
 console.log(person.fullname())
 
 //to get all the values of person object 
 console.log(person)

 //session 2
 //to wheather the given property present on the object or not it will written true or false
 console.log('firstname' in person)

 //to print all the vaie from the object 
 for(let key in person)
 {
    console.log(person[key])
    
 }


