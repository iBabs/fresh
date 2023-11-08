// let arr = [23, 56,78.90, 69]

// console.log(arr)


// // arr.splice(1, 1, "hey"), take 3 props, first is the index you want to 
// //remove from, the second propr is the number of items you want to remove and
// // the last is the item you want to add

// // const arr2 =arr.slice(3, -1), does as splice but assign to a new arr

// //arr.pop() removes the last element of an array
// //arr.push() adds what you put in the bracket to the arr from the last
// //arr.shift() removes the first element of an array
// //arr.unshift() add fromthe index 0


// for(let i =0; i < arr.length; i++){
//     console.log(i,arr[i])
// }


// //for of loops through array
// let j = 0
// for(j of arr){
//     console.log(j)
// }

// //for in loops through object
// let person = {
//     name: 'Anthony',
//     age: 23,
//     school: 'Michael Faraday'
// }

// for (j in person){
//     console.log(j +':'+person[j])
// }
// const newArr = arr.map(per=>per*2)

// console.log(newArr)

// const {name, age, school }= person

// console.log(school)


const mem = ['Jane', 'Jack', 'Toba', 'Yemi', 'Audu']
const m12 = [12, 34, 43, 54, 45]

const m13 = [...mem, ...m12]

console.log(m13)

const groce = {
    garri: 1000,
    rice: 12000,
    beans: 7500,
    Peak: 2100,
    milo: 1850
}

const { rice, garri, ...food } = groce
console.log(rice, garri)

console.log(food)

const newnum = m12.map(i => i * 10)

console.log(newnum.sort())

const sortedArr = (arr) => {
    return arr.sort((a, b) => a - b)
}
const bull = [1, 23, 32, 13, 4, 8, 7, 4, 34]

const are = sortedArr(bull)

console.log(are)

const pupils= [
    {name: 'Mabel', age: 3},
    {name: 'Olaoluwa', age: 4},
    {name: 'Rachelle', age: 2},
    {name: 'Jonathan', age: 3},
]
const higher= pupils.filter(i=> i.age==3).map(i=>i.name)
console.log(higher)

const total = bull.reduce((a,b)=>{ return a+b},0)

console.log(total)

