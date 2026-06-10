const fruits = ["Apple","Mango","Banana","Orange", "Watermelon"]
console.log(typeof(fruits))

console.log(fruits[0])
len = fruits.length
console.log(fruits[len-1])

fruits.push("Kiwi")
console.log(fruits)

fruits.unshift("Strawberry")
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.shift()
console.log(fruits)


console.log(fruits.slice(0,2))

fruits.splice(1,1)
console.log(fruits)

fruits.splice(2, 0, "Grapes", "Lichy")

console.log(fruits)

const num1 = [1,2,3,4,5,6,7,8,9,10]

for(let i=0; i<=num1.length-1; i++){
    console.log(num1[i])
}
const evenArr = []
for(let i=0; i<=num1.length-1; i++){
    if(num1[i] % 2 == 0){
        console.log(num1[i])
        evenArr.push(num1[i])
    }
}
console.log(evenArr)

for(index in fruits){
    console.log(index)
    console.log(fruits[index])
}
for(value of fruits){
    console.log(value)
}

fruits.map((val, ind)=>{
    console.log("I like to eat", val)
})

num1.map((num,i)=>{
    console.log(num*num)
})

const evenArray2 = num1.filter((v,i)=>v % 2 == 0)
console.log(evenArray2)


const oddArray = num1.filter((elmt)=> elmt % 2 != 0)
console.log(oddArray)


products = [
    {
    id:1,
    title:"iPhone",
    price:1234567,
    cat:"Electronics"
},
{
    id:2,
    title:"iPhone 15",
    price:91234567,
    cat:"Electronics"
},
{
    id:3,
    title:"iPhone 17",
    price:91234567,
    cat:"Electronics"
},
{
    id:4,
    title:"shirt",
    price:4567,
    cat:"Cloths"
},
{
    id:5,
    title:"T-shirt",
    price:567,
    cat:"Cloths"
}
]

products.filter((prod)=>prod.cat == "Electronics")

minprice = 100
maxprice = 1000
products.filter((p,i) => p.price > minprice && p.price < maxprice)

iphone17Index = products.findIndex((v,i)=>v.id == 3)

console.log(iphone17Index)
products[iphone17Index]

iPhone17 = products.find((v,i)=>v.id = 2)
console.log(iPhone17)