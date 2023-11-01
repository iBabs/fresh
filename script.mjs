import  {addnum}  from "./recharge.mjs"


const ozo = document.getElementById('ozo')

console.log(ozo)
const h1 = document.createElement('h1')


function greet() {
    alert("hello user")
}

let count = 10

setInterval(function () {
    count--
    h1.innerHTML = count
    if (count === 0) { count = 10 }
}, 1000)

ozo.appendChild(h1)

const date = new Date()

const newDate = document.querySelector('.date')

newDate.innerHTML = date.toUTCString()

const prosper = document.querySelector('#name')
const blessing = document.querySelector('#submit')
const maleek = document.querySelector('.todo')

const pablo = num => num * num

console.log(pablo(20))

blessing.addEventListener('click', (e) => {
    e.preventDefault();
    // alert('I am working')
    const li = document.createElement('li')

    li.innerText = prosper.value

    maleek.appendChild(li)

    li.addEventListener('click', () => {
        li.style.color = 'red'
        li.style.fontWeight = 600
    })
    li.addEventListener('dblclick', () => {
        maleek.removeChild(li)
    })
    prosper.value = ""

})


let yu = 10
let mi = 25
console.log(`I have the sum of ${yu + mi}, this is because i added ${yu} and ${mi}`)

console.log(addnum(56))