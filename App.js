import { useState } from "react";
function App()
{
  const questions=[
    {
      questionText:"1)which is the frontend framework used for creating web apps??",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"React js",isCorrect:true},
        {answerText:"Express js",isCorrect:false},
        {answerText:"Mongo DB",isCorrect:false},
      ]
    },
    {
      questionText:"2)which is the web server among this??",
      answerOption:[
        {answerText:"Node js",isCorrect:true},
        {answerText:"React js",isCorrect:false},
        {answerText:"Express js",isCorrect:false},
        {answerText:"Angular js",isCorrect:false},
      ]
    },
    {
      questionText:"3)which doccument database is used for to store the data??",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"React js",isCorrect:false},
        {answerText:"Express js",isCorrect:false},
        {answerText:"Mongo DB",isCorrect:true},
      ]
    },
    {
      questionText:"4)Mention at least four frontend technologies??",
      answerOption:[
        {answerText:"HTML",isCorrect:false},
        {answerText:"CSS",isCorrect:false},
        {answerText:"JAVA SCRIPT",isCorrect:false},
        {answerText:"ALL THE ABOVE",isCorrect:true},
      ]
    },
    {
      questionText:"5)Which is one of the core building blocks of React??", 
      answerOption:[
        {answerText:"Props",isCorrect:false},
        {answerText:"Lists",isCorrect:false},
        {answerText:"Components",isCorrect:true},
        {answerText:"Variables",isCorrect:false},
      ]
    },
    {
      questionText:"6)Which is a web application framework??",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"React js",isCorrect:false},
        {answerText:"Express js",isCorrect:true},
        {answerText:"Mongo DB",isCorrect:false},
      ]
    },
    {
      questionText:"7)MERN Stands for??",
      answerOption:[
        {answerText:"MongoDB, Express, React, Node",isCorrect:true},
        {answerText:"Express, MongoDB, React, Node",isCorrect:false},
        {answerText:"React, Express, MongoDB, Node",isCorrect:false},
        {answerText:"Node, Express, React, MongoDB",isCorrect:false},
      ]
    },
    {
      questionText:"8)React.JS was first used in 2011 for??",
      answerOption:[
        {answerText:"Twitter",isCorrect:false},
        {answerText:"Instagram",isCorrect:false},
        {answerText:"Face book",isCorrect:true},
        {answerText:"whats app",isCorrect:false},
      ]
    },
    {
      questionText:"9)Who is created react??",
      answerOption:[
        {answerText:"Guido van Rossum",isCorrect:false},
        {answerText:"Jordan Walke",isCorrect:true},
        {answerText:"Ryan Dahl ",isCorrect:false},
        {answerText:"Dwight Merriman",isCorrect:false},
      ]
    },
    {
      questionText:"10)Which year node js was initial released??",
      answerOption:[
        {answerText:"February 11, 2009",isCorrect:false},
        {answerText:"November 16, 2010",isCorrect:false},
        {answerText:"May 29, 2013 ",isCorrect:false},
        {answerText:"May 27, 2009",isCorrect:true},
      ]
    }

  ]
  const [currentQuestion,setCurrentQuestion]=useState(0)
  const [showScore,setShowScore]=useState(false)
  const [score,setScore]=useState(0)
  const Handle=(isCorrect)=>{
    if(isCorrect)
    {
      setScore(score+1)
    }
    const nextQuestion=currentQuestion+1
    if(nextQuestion<questions.length)
    {
      setCurrentQuestion(nextQuestion)
    }
    else
    {
      setShowScore(true)
    }
  }
  return(
    <div className="quiz">
      {showScore ?(
          <div className="score-section">
            YOU HAVE SCORED {score} OUT OF {questions.length}!!!
       </div>
      
        ):(
          <>
          <div className="question-section">
            {questions[currentQuestion].questionText}
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOption.map((answerOption) =>(
              <button onClick={() => Handle(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
          </>
        )
            }
            </div>
           )}
            export default App