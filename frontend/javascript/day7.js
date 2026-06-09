console.log("Hello World")


// age = 15 

// year = "15"

// if(age === year){

// }else{

// }

// name = 'wisdom'
// n1 = 10 
// n1 = n1+ 10 
// n1 += 10
// n1-=10
// *= 
// /= 
// %=

// age >18 &&   nationality = "Indian" 

// age > 18 || nationality = "Indian"  

// ! age >18


/* 


*/

function greeting(){
    console.log("Welcome to Javscript")
    return "We Will LEARN REACTJS"
}
console.log(greeting())


function addition(n1,n2){
    num = n1+n2
    console.log(num)
}
addition(23,54)

function add(n, m){
    return n+m
}

numADD = add(23,54)
console.log(numADD)

// ARROW FUNCTION 

subtraction = () => {}

sub = (n1,n2) => n1-n2 
subOf1020 = sub(10,20)
sub1 = (n1,n2) =>{
    return n1-n2
}


(()=>{})()

// 1. Create a function to check number is even or odd 

function checkOddEven(num){
    if(num % 2 == 0){
        return "number is even"
    }else{
        return "number is odd"
    }
}

console.log(checkOddEven(5))

// create grade system using else if 
/*
    FAIL ====> 0-34 
    C ====> 35-59 
    B =====> 60 -74 
    A =====> 75 -100

*/

function gradeSystem(marks){
    if(marks>0){
        if(marks > 0 && marks <=34){
            console.log("FAIL")
        }else if(marks >=35 && marks <=59){
            console.log("C ")
        }else if(marks >= 60 && marks <=74){
            console.log("B ")
        }else{
            console.log("A")
        }
    }
}

gradeSystem(30)
gradeSystem(53)
gradeSystem(81)

// create function to show todays day 

let today = new Date()
day = today.getDay()
switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break

    case 3:
        console.log("Wednesday")
        break

    case 4:
        console.log("Thursday")
        break

    case 5:
        console.log("Friday")
        break

    case 6:
        console.log("Saturday")
        break

    case 7:
        console.log("Sunday")
        break


default :ß``
console.log("This is invalid on EARTH")
    
}

// create table for 14 

for(let i=1;i<=10;i++){
    console.log("14 * " , i , " = ", 14*i)
}

i = 1
while(i<=10){
    console.log("14 * " , i , " = ", 14*i)

    i++
}


j = 10
do{
    console.log("HELLO")
}while(j<=5)


str = "I am learning Javascript..."

console.log(str.length)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.charAt(10))
console.log(str.slice(0,5))
console.log(str.replace("Javascript", "REACTJS"))
