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

        const interval = 100
        const [ timer, setTimer ] = useState(interval)
        useEffect(() => {
            const countdown = () => {
                setTimer(t => {
                    if (t === 0) {
                        newQuestion()
                        return t-1
                    } else if (t === -2) {
                        return interval
                    } else {
                        return t - 1
                    }
                })
            };
    
            /* Creating an interval that calls the countdown function every 1 second (1000ms)*/
            const int = setInterval(countdown, 1000);
    
            /* Return the function you want trigger on clean up.
            In this case, I need to clear the interval */
            return () => clearInterval(int);
        }, [questions]);

        // useEffect(() => {
            //     setQuestions(questionData)
            //     let options = questionData.incorrect_answers
            //     options.push(questionData.correct_answer)
            //     options = options.sort(() => Math.random() - 0.5)
            //     setOptions(options)
            //     setStartTime(Date.now())
            
            // },[questionData])
            
            const newQuestion = () => {
                // e.preventDefault(e)
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
                let elapsedTime = Date.now() - startTime;
                console.log('correct')
                document.getElementById('question-score').textContent = `+${elapsedTime}`
                setScore(elapsedTime);
            } else {
                console.log('incorrect')
            }
            // console.log(elapsedTime);
            document.getElementById('all-options').style.display='none';
        }
        
      
        
        // useEffect(() => {
            //     socket.on('noQuestionsLeft', (data) => {
                //         console.log('data'+data.score)
                //     })
                // })
                
                return (
                    
                    <>
                
        <h2 aria-label="question-title">Questions</h2>

        {/* <Timer /> */}

        <h3 id="question">{questions.question}</h3>
        <form id='all-options'>
            <input type="submit" onClick={answerQuestion} value={options[0] || 'option'}></input>
            <input type="submit" onClick={answerQuestion} value={options[1] || 'option'}></input>
            <input type="submit" onClick={answerQuestion} value={options[2] || 'option'}></input>
            <input type="submit" onClick={answerQuestion} value={options[3] || 'option'}></input>
        </form>
        <h3 id="question-score"></h3>
        
        <button onClick={newQuestion}>New Question</button>
        <p>{timer}</p>
        </>
    )
}

export default Question;
