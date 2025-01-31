/*let marks = Array(6)
var maeks = new (10,12,13,17,20,25.30)*/   // this is one way to declare array 


 // 2nd way to declare array
var marksone = [10,12,13,17,20,25,30]

console.log(marksone[2]) 

marksone[3]=35
console.log(marksone)

//to get the length of the array 
console.log( "length odf the array is "+ marksone.length)

// to add any number at the end 
marksone.push(55)

// to delete any number from the end 
marksone.pop()

//to add intial value 
marksone.unshift(8)

console.log(marksone)


//to get the index of any number 
console.log(marksone.indexOf(35)) 

//to know whether any value present in the array or not 
console.log(marksone.includes(13))  // true
console.log(marksone.includes(88)) // false

//to get all vales inbetween any numbers 
console.log("numbers between the index are" + marksone.slice(2,5)) 

//for loop use to print 
let sum=0
for(let i=0;i<marksone.length;i++)
{
    console.log("all the numbers are " + marksone[i])
    sum=sum + marksone[i]

}
console.log("Sum of all the numbers is"+ " " + sum)

//doing sum of all the values 
let totalvalue =  marksone.reduce((sum,mark)=>sum+mark,0)
console.log("total value after doing sum bu using reduce is"+ " "+ totalvalue)

//filter functionality 
var scores=[99,87,92,66,82] // i want to get the evev numbers from this 
var evennumbers=[]

//method 1 
for(let h=0;h<scores.length;h++)
{
    if(scores[h]%2==0)
    {
        //console.log(scores[h]) 
        //if want to print the in array
      evennumbers.push(scores[h])
    }
    
}
console.log(evennumbers)

// method 2 
var arrayofevenno = scores.filter(score=>score%2==0)
console.log("printing the even no using filter method"+ " "+arrayofevenno)

//map===> here we can alter the value taken from the above array 

var mappedarray = arrayofevenno.map(score=>score*3)
console.log(mappedarray)

//now i want to sum all the multiplied values 
var sumaftermultple = mappedarray.reduce((sum,singleval)=>sum+singleval,0)
console.log("sum of all values after multikply"+ " "+sumaftermultple)

// we can write all the above codes in the single line 

var single_line_sum_value = scores.filter(score=>score%2==0).map(score=>score*3).reduce((sum,singleval)=>sum+singleval,0)
console.log("single line print value" + " " + single_line_sum_value)