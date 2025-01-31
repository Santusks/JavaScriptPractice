let s="tuesday"
//toget length of string
console.log(s.length)

//get from substring 
console.log(s.slice(0,4))

//toget the value as per index
console.log( s[3])

//to split the string 
let splitstring = s.split("s")
console.log(splitstring[0]) 
console.log(splitstring[1].length) 
console.log(splitstring[1].trim().length)

//to convert string to interger and know the diffrenece 

let dateone='28'
let datetwo='23'

let diff = parseInt(dateone) - parseInt(datetwo)
console.log(diff)
