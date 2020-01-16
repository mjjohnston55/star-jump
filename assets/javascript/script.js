const clock = document.querySelector(`.timer`);
const easy = document.querySelector(`.box1`);
const medium = document.querySelector(`.box2`);
const hard = document.querySelector(`.box3`);
let firstAnswer = document.querySelector(`.first`);
let secondAnswer = document.querySelector(`.second`);
let thirdAnswer = document.querySelector(`.third`);
let operator = document.querySelector(`.operator`)
let allAnswers = document.querySelectorAll(`.answer`)

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let counter = 20;
let score = 0;

function retrieveProblem(){
    let a = numbers[Math.floor(Math.random() * numbers.length)];
    let b =  numbers[Math.floor(Math.random() * (numbers.length - a + 1))];
    console.log(a, b);
    let result = add(a, b);
    return console.log(result)
};

// const timer = setInterval(function(){
//     if (counter <= 0){
//         clearInterval(timer);
//         alert(`loser`)
//     } else {
//         counter--;
//         console.log(counter)
//     }
// }, 1000)


function displayAnswer(result){
    console.log(result)
    if (Math.floor(Math.random() * 3) == 0){
        firstAnswer.textContent = result - 1;
    secondAnswer.textContent = result + 1;
    thirdAnswer.textContent = result;
    } else if (Math.floor(Math.random() * 3) == 1){
        firstAnswer.textContent = result - 1;
    secondAnswer.textContent = result
    thirdAnswer.textContent = result + 1;
    } else if (Math.floor(Math.random() * 3) == 2){
        firstAnswer.textContent = result;
        secondAnswer.textContent = result + 1;
        thirdAnswer.textContent = result - 1;
    }
    allAnswers.forEach( button => button.addEventListener(`click`, handleAnswer));
}


function handleAnswer(event){
    console.log(event)
    let a = parseInt(easy.textContent);
    let b = parseInt(medium.textContent);
    console.log(parseInt(event.target.innerText))
    if(parseInt(event.target.innerText) == (a + b)) {
        console.log(`yes`)
        event.toElement.classList.add(`correct`);
        hard.textContent = a + b
        score++;
        console.log(score);
        if (score == 5){
            resetGame()
        } else {
            setTimeout(function(){
                event.toElement.classList.remove(`correct`);
                allAnswers.forEach(button => button.classList.remove(`strike`))
                hard.textContent = "";
                startEasy();
            }, 1000)
        }
    } else {
        console.log(`no`)
        event.toElement.classList.add(`strike`);
    }
}

function resetGame() {
    
};

function startEasy(){
    let a = numbers[Math.floor(Math.random() * numbers.length)];
    let b =  numbers[Math.floor(Math.random() * numbers.length)];
    let result;
    easy.textContent = a;
    medium.textContent = b;
    hard.textContent = "";
    result = a + b;
    console.log(result);
    displayAnswer(result)
}

function startMedium(){
    console.log(`dick`)
}

function startHard(){
    let a = numbers[Math.floor(Math.random() * numbers.length)];
    let b =  numbers[Math.floor(Math.random() * numbers.length)];
    let middle;
    let result;
    if (Math.random() < 0.5){
        operator.textContent = `+`
        middle = "+"
    } else {
        operator.textContent = `-`
        middle = "-"
    }
    easy.textContent = a;
    medium.textContent = b;
    if (middle == "-"){
        result = a - b
    }
    if (middle == "+"){
        result = a + b
    };
    console.log(result);
    displayAnswerHard(result)
}


easy.addEventListener(`click`, startEasy);
medium.addEventListener(`click`, startMedium);
hard.addEventListener(`click`, startHard);


function resetGame(){

}



