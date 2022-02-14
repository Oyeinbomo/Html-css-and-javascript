let firstNum = document.getElementById('first-num').innerHTML
let secondNum = document.getElementById('second-num').innerHTML

let addition = document.getElementById('addition')
let subtraction = document.getElementById('subtraction')
let multiplication = document.getElementById('multiplication')
let division = document.getElementById('division')

let result = document.getElementById('result-line')
let clrBtn = document.getElementById('clr-btn')

function add() {
  result.innerHTML = firstNum | secondNum
}

function sub() {
  result.innerHTML = firstNum - secondNum
}

function mul() {
  result.innerHTML = firstNum * secondNum
}

function div() {
  result.innerHTML = firstNum / secondNum
}

function clear() {
  result.innerHTML = 0
}


addition.addEventListener('click', function (){
  add()
})

subtraction.addEventListener('click', function (){
  sub()
})

multiplication.addEventListener('click', function (){
  mul()
})

division.addEventListener('click', function (){
  div()
})

clrBtn.addEventListener('click', function () {
  clear()
})