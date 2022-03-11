// counter to dictate which question to be displayed
let counter = -1;
// user score counter
let score = 0;
// // target each element that needs to be manipulated when 'start' or 'next' button is clicked
// buttons
let startBtn = document.getElementById('startBtn');
let nextBtn = document.getElementById('nextBtn');
let endBtn = document.getElementById('endBtn');
let tryAgainBtn = document.getElementById('tryAgain');
let checkAns = document.getElementById('checkAns');

// Question field
let questionField = document.getElementById('questionField');

// Answers Field
let ansList = document.getElementById('ansList');
// hide ansList when the page loads
ansList.classList.add('hide');

// Right and Wrong
let correct = document.getElementById('correct');
let wrong = document.getElementById('wrong');

// Quiz complete element
let complete = document.getElementById('complete');

// Answer fields
let Ans0 = document.getElementById('0');
let Ans1 = document.getElementById('1');
let Ans2 = document.getElementById('2');
let Ans3 = document.getElementById('3');
// Assign all answer fields to an array for easy targeting
let ansFields = [Ans0, Ans1, Ans2, Ans3];
// radio answer buttons
let one = document.getElementById('11');
let two = document.getElementById('22');
let three = document.getElementById('33');
let four = document.getElementById('44');

// Questions
let question = [
    '1) Which type of JavaScript language is ___',
    '2) Which one of the following also known as Conditional Expression:',
    '3) Which of the following keywords is used to define a variable in JavaScript',
    '4) Which of the following methods is used to access HTML elements using Javascript?',
    '5) Upon encountering empty statements, what does the Javascript Interpreter do?',
    '6) Which of the following methods can be used to display data in some form using Javascript?',
    '7) How can a datatype be declared to be a constant type?',
    '8) When the switch statement matches the expression with the given labels, how is the comparison done?',
    '9) What keyword is used to check whether a given property is valid or not?',
    '10) What is the use of the <noscript> tag in Javascript?'
];
// Answers
let answer = [
    { Q1: ['Object-Oriented', 'Object-Based', 'Assembly-language', 'High-level', 2] },
    { Q2: ['Alternative to if-else', 'Switch statement', 'If-then-else statement', 'immediate if', 4] },
    { Q3: ['var', 'let', 'Both A and B', 'None of the Above', 3] },
    { Q4: ['getElementById()', 'getElementByClassName()', 'Both A and B', 'None of the above', 3] },
    { Q5: ['Throws an error', 'Ignores the statements', 'Gives a warning', 'None of the Above', 2] },
    { Q6: ['document.write()', 'console.log()', 'window.alert()', 'All of the above', 4] },
    { Q7: ['const', 'var', 'let', 'constant', 1] },
    { Q8: ['Both the datatype and the result of the expression are compared.', 'Only the datatype of the expression is compared.', 'Only the value of the expression is compared.', 'None of the above.', 1] },
    { Q9: ['in', 'is in', 'exists', 'lies', 1] },
    { Q10: ['The contents are displayed by non-JS-based browsers.', 'Clears all the cookies and cache.', 'Both A and B.', 'None of the above.', 1] }
];

// Start Quiz on button click
function startQuiz() {
    // hide 'Start Quiz' button
    startBtn.classList.add('hide');
    // un-hide 'Check Answer' button
    checkAns.classList.remove('hide');
    
    // set the value of counter to 0 to initial the question displays
    counter = 0;

    displayQuestion(counter);
    displayAnswers(counter);
};

function tryAgain() {
    console.log(counter);
    // hide 'Try Again' button
    tryAgainBtn.classList.add('hide');
    // un-hide 'Check Answer' Button
    checkAns.classList.remove('hide');
    
    // incremenet counter to '0' from its starting value of '-1'
    counter = 0;
    
    displayQuestion(counter);
    displayAnswers(counter);
};

// display next question on button click
function nextQuestion() {
    // if we have gone through all of the questions, counter will equal 10
    if (counter == 10) {
        // hide 'Check Answer' button
        checkAns.classList.add('hide');
        // un-hide 'Submit Answers' button
        endBtn.classList.remove('hide');
    };
    displayQuestion(counter);
    displayAnswers(counter);
};

// Check answer
function checkAnswer() {
    // target selected radio button and decide weather or not that was the correct answer
    document.getElementsByName('answerBtn').forEach(radio => {
        if (radio.checked) {
            if (radio.value == 'correct') {
                // increment counter
                counter++;
                
                // hide/un-hide certain elements
                body.classList.add('correct');
                questionField.classList.add('hide');
                ansList.classList.add('hide');
                correct.classList.remove('hide');
                checkAns.classList.add('hide');
                
                setTimeout(function() {
                    checkAns.classList.remove('hide');
                    body.classList.remove('correct');
                    questionField.classList.remove('hide');
                    ansList.classList.remove('hide');
                    correct.classList.add('hide');
                    
                    // display next question
                    nextQuestion(counter);
                }, 1500);
                score++;
            } else {
                // hide/un-hide certain elements
                checkAns.classList.add('hide');
                body.classList.add('wrong');
                questionField.classList.add('hide');
                ansList.classList.add('hide');
                wrong.classList.remove('hide');
                
                setTimeout(function() {
                    checkAns.classList.remove('hide');
                    body.classList.remove('wrong');
                    questionField.classList.remove('hide');
                    ansList.classList.remove('hide');
                    wrong.classList.add('hide');
                    
                    // display same question again
                    displayQuestion(counter);
                    displayAnswers(counter);
                }, 1500);
                score--;
            };
            console.log(score);
            radio.checked = false;
        }
    });
}

// When user finished the quiz ans submits their answers,
function endQuiz() {
    // hide 'Submit Quiz' button and 'complete' message
    endBtn.classList.add('hide');
    complete.classList.add('hide');
    // Hide answers table
    ansList.classList.add('hide');

    // display user score
    if (score == 10) {
        questionField.innerHTML = 'Your final score was ' + score + '/10!!!';
    } else if (score > 6) {
        questionField.innerHTML = 'Your final score was ' + score + '/10.'
    } else {
        questionField.innerHTML = 'Your final score was ' + score + '/10... Would you like to try again?'
    };

    // un-hide 'Try Again!' button and the question field to display results
    tryAgainBtn.classList.remove('hide');
    questionField.classList.remove('hide');

    // reset score
    score = 0;
}

function displayQuestion(index) {
    // if we have gone through all of the questions, counter will equal 10
    if (counter == 10) {
        // hide the question field
        questionField.classList.add('hide');
    } else {
        // display next question[index]
        questionField.innerHTML = question[index];
    }
};

function displayAnswers(index) {
    // if we have gone through all the questions, counter will equal 10
    if (counter == 10) {
        // hide the answers list
        ansList.classList.add('hide');
        // dispaly 'Quiz complete!' message
        complete.classList.remove('hide');
    } else {
        // un-hide Answers buttons
        ansList.classList.remove('hide');
    
        // get all values from the currently targeted question object inside the answers array
        let eachAnswer = Object.entries(answer[index]);
        
        // input text for answers[index]
        for (let i = 0; i < ansFields.length; i++) {
            // console.log(eachAnswer[0][1][i]);
            ansFields[i].innerHTML = eachAnswer[0][1][i];
        };
    
        // Clear value of each radio button
        one.value, two.value, three.value, four.value = '';

        // assign a value to the radio button that holds the corerct answer
        if (eachAnswer[0][1][4] == 1) {
            one.value = 'correct';
        } else if (eachAnswer[0][1][4] == 2) {
            two.value = 'correct';
        } else if (eachAnswer[0][1][4] == 3) {
            three.value = 'correct';
        } else {
            four.value = 'correct';
        };
    };
};