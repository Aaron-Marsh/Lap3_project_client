
// import { useSelect } from '@mui/base';
import react, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import useAxios from '../../hooks/useAxios';
import Timer from '../Timer'
import './index.module.css'
import { io } from 'socket.io-client'
const socket = io('https://lap3quizzer.herokuapp.com');

// https://lap3quizzer.herokuapp.com
// 'http://localhost:4000/'

io({query: { name: 'Sally'}})

// fake data for first run
let questionData={question:{category:'blank', incorrect_answers:['option 1', 'option 2', 'option 3'], correct_answer:'option 4'}};


socket.on('ready', (data) => {
    questionData = data;
    console.log(questionData);
})
socket.on('noQuestionsLeft', () => {
    console.log('finished')
}
)
// socket.emit('start', {category: 0, difficulty: 'medium', questionsAmount: 12})

const Question = () => {
    useEffect( () => {
        socket.emit('start', {category: 0, difficulty: 'medium', questionsAmount: 12})
    },[]
    )
    

// Nasiima

//     const {
//     question_category,
//     question_difficulty,
//     question_type,
//     questionsAmount,
//     intScore,
//   } = useSelector(state => state);
//   console.log(

//     question_difficulty,
//     question_category,
//     question_type,
 
//     // questionsAmount,
//     // intScore
//   );
  
//     let apiUrl = `/api.php?amount=${questionsAmount}`;
  
//   // const { response, loading } = useAxios({ url: apiUrl });
//   //  console.log(response);
  
  // Nasiima


  
        const [score, setScore] = useState(0);
        const [questions, setQuestions] = useState('')
        const [options, setOptions] = useState([]);
        const [startTime, setStartTime] = useState(0);
        const [answered, setAnswered] = useState(false);
        const [totalScore, setTotalScore] = useState(0)


        const interval = 10
        const [ timer, setTimer ] = useState(interval)
        useEffect(() => {
            const countdown = () => {
                setTimer(t => {
                    if (t === 1) {
                        endQuestion()
                        return t-1
                    } else if (t === -2) {
                        newQuestion()
                        return interval
                    } else {
                        return t - 1
                    }
                })
            };
    
            const int = setInterval(countdown, 1000);

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

            const endQuestion = () => {
                if (answered) {
                    setAnswered(false)
                } else {
                    // setScore(0)
                }
                if (document.getElementById('message').textContent === '') {
                    document.getElementById('message').textContent = 'Too Slow!'
                    document.getElementById('question-score').textContent = `+0`
                    document.getElementById('question-score').style.color = 'red'
                }
                document.getElementById('question').style.display = 'none'
                document.getElementById('all-options').style.display = 'none'
            
            }
            
            const newQuestion = () => {
                // e.preventDefault()
                socket.emit('retrieveQuestion', {questionScore: score})
                // console.log(questionData)
                setQuestions(questionData.question)
                
                
                let options = questionData.question.incorrect_answers
                options.push(questionData.question.correct_answer)
                options = options.sort(() => Math.random() - 0.5)
                setOptions(options)
                document.getElementById('question').style.display = ''
                document.getElementById('all-options').style.display=''
                document.getElementById('question-score').textContent = ''
                document.getElementById('message').textContent = ''

                setStartTime(Date.now)
            }
            // let newTotalScore=0
        const answerQuestion = e => {
            e.preventDefault()
            if (e.target.value === questions.correct_answer) {
                let elapsedTime = Date.now() - startTime;
                console.log('correct')
                document.getElementById('question-score').textContent = `+${10000-elapsedTime}`
                document.getElementById('question-score').style.color = 'green'
                document.getElementById('message').textContent = 'Correct!'
                // setScore(100);
            } else {
                console.log('incorrect')
                document.getElementById('question-score').textContent = `+0`
                document.getElementById('question-score').style.color = 'red'
                document.getElementById('message').textContent = `Incorrect! The answer was ${questions.correct_answer}`
                // setScore(0);
            }
            // console.log(elapsedTime);
            console.log(score)
            // newTotalScore = score;
            // setTotalScore(newTotalScore)
            document.getElementById('all-options').style.display='none';
            document.getElementById('question').style.display='none';
            setAnswered(true);
        }
        
      
        
        // useEffect(() => {
            //     socket.on('noQuestionsLeft', (data) => {
                //         console.log('data'+data.score)
                //     })
                // })
                
                return (
                    
                    <>
                
        <h2 aria-label="question-title">Let's Play!</h2>

        <Timer />

        <h3 id="question-score"></h3>
        <p id='message'>Get Ready, the Game is starting Soon!</p>
        <h3 id="question" style={{display:'none'}}>{questions.question}</h3>
        <form id='all-options' style={{display:'none'}}>
            <input type="submit" onClick={answerQuestion} value={options[0] || 'option'}></input>
            <input type="submit" onClick={answerQuestion} value={options[1] || 'option'}></input>
            <input type="submit" onClick={answerQuestion} value={options[2] || 'option'}></input>
            <input type="submit" onClick={answerQuestion} value={options[3] || 'option'}></input>
        </form>
        <h3>Total Score: {totalScore}</h3>
        {/* <button onClick={newQuestion}>New Question</button> */}
        <p>{timer}</p>
        <p>{score}</p>
        </>
    )
}

export default Question;
