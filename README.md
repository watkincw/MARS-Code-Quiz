# MARS-Code-Quiz

Quiz App

When a user click on an option,
if selected answer is correct, turn background green
if selected answer is incorrect, turn background red

Force user to select an answer

OPTIONAL: Display Question *current* of *total*

APPROACH:
A) Store Questions and Answers in a object as key-value pairs. Questions as the Key. Answers (*as an Array*) as the value. Use for loop to iterate through and display each question and its answers to the page. For Example:
let QandA = {

}

B) Store Questions and Answers in a single 2 key-value paired object. For Example:
let QandA = {
    questions: ['Q', 'Q', 'Q', etc.],
    answers: ['A', 'A', 'A', etc.]
}

C) Store Questions and Answers in 2 seperate Arrays.


Decided to go with C. This is because of the ease of iterability of Arrays, as opposed to objects. While doable, iterating through Arrays is much simpler. The Arrays look like the following:

Questions:
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
    '10) What is the use of the  < noscript >  tag in Javascript?'
];

Answers:
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