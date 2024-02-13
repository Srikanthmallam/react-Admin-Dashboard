import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const formatTime = (timeInSeconds:number)=>{
    const hours = Math.floor(timeInSeconds/36000);
    const minutes = Math.floor((timeInSeconds%3600)/60);
    const seconds = timeInSeconds%60;

    const hoursInString = hours.toString().padStart(2,"0");
    const minutesInString = minutes.toString().padStart(2,"0");
    const secondsInString = seconds.toString().padStart(2,"0");

    return `${hoursInString}:${minutesInString}:${secondsInString}`;
}

const StopWatch = () => {

    const [time,setTime] = useState<number>(0);
    const [isRunning,setIsRinning]=useState<boolean>(false);

    const resetHandler = () => {
        setTime(0);
        setIsRinning(false);
    }

    useEffect(()=>{
        let intervalId: number;
        if(isRunning){
            intervalId = setInterval(()=>{
            setTime(prev=>prev+1);
            },1000)
        }
    

        return () => {
            clearInterval(intervalId)
        };
    },[isRunning]);



  return (

    <div className='adminContainer'>
      <AdminSidebar/>
      <main className='dashboardappcontainer'>
        <h1>Stopwatch</h1>
        <section>
            <div className="stopwatch">
                <h2>{formatTime(time)}</h2>
                <button onClick={()=>setIsRinning(prev=>!prev)}>{isRunning?"Stop":"Start"}</button>
                <button onClick={resetHandler}>reset</button>
            </div>
        </section>
      </main>
    </div>
    
  )
}

export default StopWatch
