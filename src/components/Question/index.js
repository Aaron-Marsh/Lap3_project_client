
// import { useSelect } from '@mui/base';
import react, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import useAxios from '../../hooks/useAxios';
import Timer from '../Timer'
import NotHostMessage from '../NotHostMessage'
import Setup from '../../pages/Setup'
import './index.module.css'
import { io } from 'socket.io-client'
const socket = io('https://lap3quizzer.herokuapp.com',{query:{name:'AARON'}});

let playing = false;
let firstQuestionHappened = false; 

let host = false
socket.on('hostStatus', (data) => {
    if (data.hostStatus) {
        host = true
    }
})
// https://lap3quizzer.herokuapp.com
// 'http://localhost:4000/'

// io({query: { name: 'Sally'}})

// fake data for first run
let questionData={questions:[{category:'blank', incorrect_answers:['option 1', 'option 2', 'option 3'], correct_answer:'option 4'}]}; // questionchange


// socket.emit('start', {category: 11, difficulty: 'medium', questionsAmount: 10})
socket.on('ready', (data) => {
    questionData = data;
    console.log(questionData);
    document.getElementById('not-host-message').style.display='none'
    document.getElementById('whole-page').style.display=''
    playing = true
})
socket.on('noQuestionsLeft', () => {
    document.getElementById('quiz-section').style.display='none';
    document.getElementById('end-message').style.display='';
}
)
let scores = [{id:1, username:'user',score:0}];
socket.on('scoreBoard', (data)=> {
    scores = data;
})

const Question = () => {

   
    
    
    // useEffect( () => {
        //     socket.emit('start', {category: 11, difficulty: 'medium', questionsAmount: 7})
        // },[]
        // )
        
        
        const [score, setScore] = useState(0);
        const [question, setQuestion] = useState('')
        const [options, setOptions] = useState([]);
        const [startTime, setStartTime] = useState(0);
        const [answered, setAnswered] = useState(false);
        const [questionNumber, setQuestionNumber] = useState(0)
        
        useEffect(()=>{
            if (playing) {
                setTimer(10);
            }
            socket.emit('name', {username: username} )
        },[playing])

        const interval = 10
        const [ timer, setTimer ] = useState(10000)
        useEffect(() => {
            const countdown = () => {
                
                setTimer(t => {
                    if (t === 1) {
                        endQuestion()
                        return t-1
                    } else if (t === -2) {
                        setQuestionNumber(prevState=>prevState+1)
                        newQuestion()
                        return interval
                    } else {
                        return t - 1
                    }
                })
            
            };
    
            const int = setInterval(countdown, 1000);

            return () => clearInterval(int);
        }, []);

        

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
                    setScore(0)
                }
                if (document.getElementById('message').textContent === '') {
                    document.getElementById('message').textContent = 'Too Slow!'
                    document.getElementById('question-score').textContent = `+0`
                    document.getElementById('question-score').style.color = 'red'
                }
                document.getElementById('question').style.display = 'none'
                document.getElementById('all-options').style.display = 'none'
                socket.emit('getPlayersData', {questionScore: score})
                if (firstQuestionHappened) {
                    questionData.questions.shift();
                } else {
                    socket.emit('getPlayersData', {questionScore: 0});
                }
            }
            
            const newQuestion = () => {
                // e.preventDefault()
                // thisQuestion = questionData.
                // console.log(questionData)
                firstQuestionHappened = true
                let questionsRemaining = questionData.questions.length
                if (questionsRemaining != 0) {

                    setQuestion(questionData.questions[0].question) //questionchange
                    
                    let options = questionData.questions[0].incorrect_answers //questionchange
                    options.push(questionData.questions[0].correct_answer) //questionchange
                    options = options.sort(() => Math.random() - 0.5)
                    setOptions(options)
                    document.getElementById('question').style.display = ''
                    document.getElementById('all-options').style.display=''
                    document.getElementById('question-score').textContent = ''
                    document.getElementById('message').textContent = ''
                    
                    setStartTime(Date.now)
                } else {
                    document.getElementById('quiz-section').style.display='none';
                    document.getElementById('end-message').style.display='';
                }

            }

        const answerQuestion = e => {
            e.preventDefault()
            if (e.target.value === questionData.questions[0].correct_answer) {
                let elapsedTime = Date.now() - startTime;
                let currentScore = 10000-elapsedTime;
                console.log('correct')
                document.getElementById('question-score').textContent = `+${currentScore}`
                document.getElementById('question-score').style.color = 'green'
                document.getElementById('message').textContent = 'Correct!'
                setScore(currentScore);
            } else {
                console.log('incorrect')
                document.getElementById('question-score').textContent = `+0`
                document.getElementById('question-score').style.color = 'red'
                document.getElementById('message').textContent = `Incorrect! The answer was ${questionData.questions[0].correct_answer}`
                setScore(0);
            }
            // console.log(elapsedTime);
            document.getElementById('all-options').style.display='none';
            document.getElementById('question').style.display='none';
            setAnswered(true);
        }
        
        const {
            question_category,
            question_difficulty,
            question_type,
            questionsAmount,
            intScore,
          } = useSelector((state) => state);

      const startQuiz = (e) => {
        e.preventDefault()
        
        
        document.getElementById('setup').style.display='none'
        playing = true
        socket.emit('start', {category: question_category, difficulty: question_difficulty, questionsAmount: questionsAmount})
        document.getElementById('not-host-message').style.display='none'
        document.getElementById('whole-page').style.display=''
        // startTimer()
        setTimer(10)
      }

      let username = useSelector(state => state.username)
        
        // useEffect(() => {
            //     socket.on('noQuestionsLeft', (data) => {
                //         console.log('data'+data.score)
                //     })
                // })
                
        return (
            <>
            <h2>Hello {username}</h2>
            <div id="setup" style={{display: host ? '':'none'}}>
                <p>i am the host</p>
                <Setup start={startQuiz}/>
            <button onClick={startQuiz}>Start</button>
            </div>
            <div id="not-host-message"style={{display: host ? 'none':''}}>
                <p>You are not the host</p>
                <NotHostMessage />
            </div>

        <div id="whole-page" style={{display:'none'}}>
        <div id="quiz-section">
        <h2 aria-label="question-title">Let's Play!</h2>
        <Timer isPlaying={playing}/>
        <h3 id="question-score"></h3>
        <p>Question Number {questionNumber}</p>
        <p id='message'>Get Ready, the Game is starting Soon!</p>
        <h3 id="question" style={{display:'none'}}>{question}</h3>
        <form id='all-options' style={{display:'none'}}>
            <input type="submit" onClick={answerQuestion} value={options[0] || 'option'}></input>
            <input type="submit" onClick={answerQuestion} value={options[1] || 'option'}></input>
            <input type="submit" onClick={answerQuestion} value={options[2] || 'option'}></input>
            <input type="submit" onClick={answerQuestion} value={options[3] || 'option'}></input>
        </form>
        {/* <button onClick={newQuestion}>New Question</button> */}
        <p>{timer}</p>
        <p>{score}</p>
        </div>
        <div id="end-message" style={{display:'none'}}>
        <h3>Congraulations! You Have Finished The Quiz!</h3>
        <h3>It's About Time!</h3>
        </div>
        </div>         
            </>
    )
}

export default Question;
