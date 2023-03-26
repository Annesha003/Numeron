// Generate 2 random numbers, select the dom for numberbox 1 and 2 
var number1 = Math.round(Math.random()*100)
let number1box = document.getElementById("number1")
var number2 = Math.round(Math.random()*100)
let number2box = document.getElementById("number2")
var operator;
var score = 0;

//Select the dom for numberbox 3
let number3box = document.getElementById("number3")


function randomise() {
    // generate 2 random numbers again
    number1 = Math.round(Math.random()*100) 
    number2 = Math.round(Math.random()*100) 
    // if number 1 is less that number 2 then swap (since we want the result to be positive)
   if(number1<number2){
    var extra = number1
    number1 = number2
    number2 = extra
   }

    // Generate a random number between 0 to 5:
    /*if the number is:
    1. number 3 should be addition of number 1 and 2
    2. number 3 should be difference of number 1 and 2
    3. number 3 should be multiplication of number 1 and 2
    4. number 3 should be floor of division of number 1 and 2
    5. number 3 should be modulous of number 1 and 2
    0. Call the randomise function again
    */
    operator = Math.round(Math.random() * 5)
    if(operator == 1){
        number3 = number1 + number2
    }else if(operator == 2){
        number3 = number1 - number2
    }else if(operator == 3){
        number3 = number1 *number2
    }else if(operator == 4){
        number3 = Math.floor(number1/number2)
    }else if(operator == 5){
        number3 = number1 % number2
    }else{
        randomise()
    }

    // Place the numbers in their boxes by making use of innerhtml
   document.querySelector("#number1").innerHTML = number1
   document.querySelector("#number2").innerHTML = number2
   document.querySelector("#number3").innerHTML = number3
    console.log(number1 + " " + number2 + " " + number3 + " " + operator);
}

randomise();

//select the plus, minus,mul,divide,modulus buttons
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const mul = document.getElementById("mul")
const divide = document.getElementById("divide")
const modulus = document.getElementById("modulus")

// When these buttons are clicked, check if the selection is correct,
/**if the selection is correct then: 
 1. Increment the score 
 2. generate random numbers again 
 3. reset timer

 otherwise: redirect to gameover.html
**/
plus.addEventListener("click",()=>{
    if(number1+number2 == number3){
        score++
        randomise()
        resetTime(timerId)
        console.log("abc+score",score)
localStorage.setItem("myScore",score);

    }else{
        location.href = "gameover.html"
    }
})

minus.addEventListener("click",()=>{
    if(number1-number2 == number3){
        score++
        randomise()
        resetTime(timerId)
        console.log("abc-score",score)
localStorage.setItem("myScore",score);

    }else{
        location.href = "gameover.html"
    }
})

mul.addEventListener("click",()=>{
    if(number1*number2 == number3){
        score++
        randomise()
        resetTime(timerId)
        console.log("abc*score",score)
localStorage.setItem("myScore",score);

    }else{
        location.href = "gameover.html"
    }
})

divide.addEventListener("click",()=>{
    if(Math.floor(number1/number2) == number3){
        score++
        randomise()
        resetTime(timerId)
        console.log("abc/score",score)
localStorage.setItem("myScore",score);

    }else{
        location.href = "gameover.html"
    }
})

modulus.addEventListener("click",()=>{
    if(number1%number2 == number3){
        score++
        randomise()
        resetTime(timerId)
        console.log("abc%score",score)
    }else{
        location.href = "gameover.html"
    }
}) 
// setInterval(()=>{
//     console.log(1+3)
// },3000)

// timer functions
var time = 20;
var timerId;
const timer = document.getElementById("timer")
function startTimer() {
    time = 20;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if (time == 0) {
            location.href = "./gameover.html"
        }
        timer.innerHTML = time;
    }, 1000);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();
