import { useState, useEffect } from 'react';
import {getNepaliTime} from '../Services/nepaliDate';
export default function NepaliClock(){
    const [date, setDate] = useState(new Date());
    
    function refreshClock() {
      setDate(new Date());
    }  
    useEffect(() => {
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }, []);
    
    return (
    
      <span>
        {getNepaliTime(date.toLocaleTimeString())}
      </span>
    );
  };