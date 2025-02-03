class First
{
    //this is the property 
    age = 25

    //another way to define the property 

    get location()
    {
        return "india"
    }


    //constuctor 
constructor(firstname,lastname)
{
this.firstname=firstname
this.lastname=lastname
}

fullname()
{
    console.log(this.firstname+this.lastname)
}
}

//if want to call the class then we have to create the Object for the class
var first = new First("santu","sk")
console.log(first.age)
console.log(first.location)

//calling the above method {in () we can access this method }
first.fullname()

var first1 = new First("basava","hugar")
first1.fullname()

