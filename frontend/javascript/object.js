const student ={
    name:"Shinchan",
    age:17,
    characters:["Messy", "Harry", "Himawary","Sheero"],
    timing:{
        monday:"10AM",
        sunday:"8AM"
    },
    greet:function(){
        return "Hello"+this.name
    }
}
console.log(typeof(student))
console.log(student.name)
console.log(student.characters[1])
console.log(student.timing.monday)
console.log(student.greet())

student.age = 18 
student.timing.sunday = "7AM"
student.numOfEpisodes = 5000 
console.log(student)

for(x in student){
    console.log(x)
    console.log(student[x])
}
console.log(Object.keys(student))

console.log(Object.values(student))

console.log(Object.entries(student))


product = {
    id:1,
    title:"iPhone",
    price:1234567,
    cat:"Electronics"
}