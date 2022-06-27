import react, { useEffect, useState } from 'react';
import Timer from '../Timer'
import { io } from 'socket.io-client'
const socket = io('http://localhost:4000');

io({query: { name: 'Sally'}})

let questionData={category:'blank', incorrect_answers:[]};


socket.on('ready', (data) => {
    questionData = data;
    // console.log(questionData);
})


const Question = () => {
        const [score, setScore] = useState(0);
        const [questions, setQuestions] = useState(questionData)
        const [options, setOptions] = useState([]);
        const [startTime, setStartTime] = useState(0)

        socket.emit('start', {category: 2, difficulty: 'easy', questionsAmount: 12})

          
        useEffect(() => {
            setQuestions(questionData)
            let options = questionData.incorrect_answers
            options.push(questionData.correct_answer)
            options = options.sort(() => Math.random() - 0.5)
            setOptions(options)
            setStartTime(Date.now())

        },[questionData])
        
        const newQuestion = (e) => {
            e.preventDefault(e)
            socket.emit('retrieveQuestion', {questionScore: score})
            console.log(questionData)
            setQuestions(questionData)
            let elapsedTime = Date.now() - startTime;
            console.log(elapsedTime)
        }
        
      
        
        // useEffect(() => {
            //     socket.on('noQuestionsLeft', (data) => {
                //         console.log('data'+data.score)
                //     })
                // })
                
                return (
                    
                    <>
                
        <h2>Questions</h2>

        {/* <Timer /> */}

        <h3>{questions.question}</h3>
        <ul>
            <li>{options[0]}</li>
            <li>{options[1]}</li>
            <li>{options[2]}</li>
            <li>{options[3]}</li>
        </ul>
        
        <button onClick={newQuestion}>hello</button>
   
        </>
    )
}

export default Question;
