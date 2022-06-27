import react, { useEffect, useState } from 'react';
import Timer from '../Timer'
import { io } from 'socket.io-client'
const socket = io('http://localhost:4000');

io({query: { name: 'Sally'}})

let questionData={category:'blank', incorrect_answers:['option 1', 'option 2', 'option 3'], correct_answer:'option 4'};


socket.on('ready', (data) => {
    questionData = data;
    // console.log(questionData);
})


const Question = () => {
        const [score, setScore] = useState(0);
        const [questions, setQuestions] = useState('')
        const [options, setOptions] = useState([]);
        const [startTime, setStartTime] = useState(0)

        socket.emit('start', {category: 2, difficulty: 'easy', questionsAmount: 12})

        // useEffect(() => {
            //     setQuestions(questionData)
            //     let options = questionData.incorrect_answers
            //     options.push(questionData.correct_answer)
            //     options = options.sort(() => Math.random() - 0.5)
            //     setOptions(options)
            //     setStartTime(Date.now())
            
            // },[questionData])
            
            const newQuestion = (e) => {
                e.preventDefault(e)
                socket.emit('retrieveQuestion', {questionScore: score})
                console.log(questionData)
                setQuestions(questionData)
                
                
                let options = questionData.incorrect_answers
                options.push(questionData.correct_answer)
                options = options.sort(() => Math.random() - 0.5)
                setOptions(options)
                
                setStartTime(Date.now)
                
                
            }
            
        const answerQuestion = e => {
            e.preventDefault()
            if (e.target.value === questions.correct_answer) {
                console.log('correct')
            } else {
                console.log('incorrect')
            }
            let elapsedTime = Date.now() - startTime;
            console.log(elapsedTime);
            setScore(elapsedTime);

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
        <form>
            <input type="submit" onClick={answerQuestion} value={options[0] || 'option'}></input>
            <input type="submit" onClick={answerQuestion} value={options[1] || 'option'}></input>
            <input type="submit" onClick={answerQuestion} value={options[2] || 'option'}></input>
            <input type="submit" onClick={answerQuestion} value={options[3] || 'option'}></input>
        </form>
        
        <button onClick={newQuestion}>New Question</button>
   
        </>
    )
}

export default Question;
