import React from 'react';
import ResultModal from './ResultModal';
export default function TimerChallenge({title,targetTime}){
    const timer=React.useRef();
    const dialog=React.useRef();
    const [timeRemaining,setTimeRemaining]=React.useState(targetTime*1000);
    const timerIsActive=timeRemaining>0 && timeRemaining<targetTime*1000;
    if (timeRemaining<=0){
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handleReset(){
        setTimeRemaining(targetTime*1000);
    }
    function handleStart(){
        timer.current=setInterval(()=>{
            setTimeRemaining(timeRemaining=>timeRemaining-10);
        },10);
    }
    function handleStop(){
        clearInterval(timer.current);
        dialog.current.open();
    }
    return (
    <>
    <ResultModal ref={dialog} remainingTime={timeRemaining} onReset={handleReset}targetTime={targetTime}/>
    <section className="challenge">
        <h2>{title}</h2>
        <p className='challenge-time'>{targetTime} second{targetTime>1?'s':''}</p>
        <p>
            <button onClick={timerIsActive ? handleStop : handleStart}>
                {timerIsActive ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
            {timerIsActive ? 'Timer is running...' : 'Timer inactive'}
        </p>
        </section>
        </>
    )
}