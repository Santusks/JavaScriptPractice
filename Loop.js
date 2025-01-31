const flag = true

if(!flag)
{
    console.log("condition is satisfied")
}

else
{
    console.log(flag)
    console.log("condition is not satisfied")
}

let i=0
while(i<10)
{
    console.log(i)
    i++
}
console.log("**************************")
let k =0

for(let k=0;k<=50;k++)
{
    if(k%2==0 && k%5==0)  // here both conditions should be pass
    {
        console.log(k)
    }
}
console.log("**************************")
let j =0

for(let j=0;j<=50;j++)
{
    if(j%2==0 || j%5==0)  // here both conditions should be pass
    {
        console.log(j)
    }
}