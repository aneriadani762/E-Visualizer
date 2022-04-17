// creating an array and passing the number, questions, options, and answers

let questions = [
  {
  numb: 1,
  question: "A  solid object has 6 faces, 12 edges and 8 corners. This object could be a...?",
  answer: "Cuboid",
  options: [
      "Cylinder",
      "Cuboid",
      "Cone",
      "Sphere"
  ]
},
  {
  numb: 2,
  question: "How many faces does a Cube have?",
  answer: "6",
  options: [
    "8",
    "6",
    "10",
    "12"
  ]
},
  {
  numb: 3,
  question: "A perfectly round solid is called a...?",
  answer: "Sphere",
  options: [
    "Cylinder",
    "Cuboid",
    "Cone",
    "Sphere"
  ]
},
  {
  numb: 4,
  question: "How many flat faces does a Cylinder have?",
  answer: "2",
  options: [
    "0",
    "2",
    "4",
    "1"
  ]
},
  {
  numb: 5,
  question: "How many edges does a cube have?",
  answer: "12",
  options: [
    "6",
    "8",
    "12",
    "10"
  ]
},
// you can uncomment the below codes and make duplicate as more as you want to add question
// but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

//   {
//   numb: 6,
//   question: "Your Question is Here",
//   answer: "Correct answer of the question is here",
//   options: [
//     "Option 1",
//     "option 2",
//     "option 3",
//     "option 4"
//   ]
// },
];










// const quizShapes = [ 
//     {
//         question: "Q1 : A  solid object has 6 faces, 12 edges and 8 corners. This object could be a...?",
//         a: "Cylinder",
//         b: "Cuboid",
//         c: "Cone",
//         d: "Sphere",
//         ans: "ans2" 
//     },
    
//     {
//         question: "Q2 : How many faces does a Cube have?",
//         a: "6",
//         b: "8",
//         c: "4",
//         d: "12",
//         ans: "ans1" 
//     },
//     {
//         question: "Q3 : A perfectly round solid is called a...?",
//         a: "Cylinder",
//         b: "Cuboid",
//         c: "Cone",
//         d: "Sphere",
//         ans: "ans4" 
//     },
//     {
//         question: "Q4 : How many flat faces does a Cylinder have? ",
//         a: "2",
//         b: "0",
//         c: "3",
//         d: "6",
//         ans: "ans1" 
//     },
//     {
//         question: "Q5 : How many edges does a cube have? ",
//         a: "8",
//         b: "4",
//         c: "6",
//         d: "12",
//         ans: "ans4" 
//     },
//     {
//         question: "Q6 : What 3D shape looks like a book?",
//         a: "Cylinder",
//         b: "Cuboid",
//         c: "Cone",
//         d: "Sphere",
//         ans: "ans2" 
//     },
//     {
//         question: "Q7 : How many faces does a Sphere have?",
//         a: "0",
//         b: "2",
//         c: "1",
//         d: "4",
//         ans: "ans3" 
//     },
//     {
//         question: "Q8 : What 3D shape looks like a ball?",
//         a: "Cylinder",
//         b: "Cuboid",
//         c: "Cone",
//         d: "Sphere",
//         ans: "ans4" 
//     },
//     {
//         question: "Q9 : Which 3D shape has all equal edges?",
//         a: "Cylinder",
//         b: "Cube",
//         c: "Cone",
//         d: "Sphere",
//         ans: "ans2" 
//     },
//     {
//         question: "Q10 : How many vertices does a Cone have?",
//         a: "0",
//         b: "1",
//         c: "2",
//         d: "3",
//         ans: "ans2" 
//     }
// ];

// const question = document.querySelector('.question');
// const option1 = document.querySelector('#option1');
// const option2 = document.querySelector('#option2');
// const option3 = document.querySelector('#option3');
// const option4 = document.querySelector('#option4');
// const submit = document.querySelector('#submit');

// const answers = document.querySelectorAll('.answer');

// const showScore = document.querySelector('#showScore');

// let questionCount = 0;
// let score = 0;

// const loadQuestion = ( ) => {
//     const questionList = quizShapes[questionCount];

//     question.innerText = questionList.question;

//     option1.innerText = questionList.a;
//     option2.innerText = questionList.b;
//     option3.innerText = questionList.c;
//     option4.innerText = questionList.d;
// }

// loadQuestion();

// const getCheckAnswer = () => {
//     let answer;

//     answers.forEach((curAnsElem) => {
//         if(curAnsElem.checked){
//             answer = curAnsElem.id;
//         }
//     });

//     return answer;
// };

// const deselectAll = () => {
//     answers.forEach((curAnsElem) => curAnsElem.checked = false );
// }

// submit.addEventListener('click', () => {
//     const checkedAnswer = getCheckAnswer();
//     console.log(checkedAnswer);

//     if(checkedAnswer === quizShapes[questionCount].ans){
//         score++;
//     };

//     questionCount++;

//     deselectAll();

//     if(questionCount < quizShapes.length){
//         loadQuestion();
//     }else{

//         showScore.innerHTML = `
//         <h3> You scored ${score}/${quizShapes.length} ✌️</h3>
//         <button class="btn" onclick="location.reload()">Play Again!</button>

//         `;

//         showScore.classList.remove('scoreArea');
//     }
// });