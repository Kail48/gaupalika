import { PasswordInput } from '@mantine/core';
import NepaliDate from 'nepali-date-converter';

export default function getNepaliDates() {
//returns nepali time/Meridian of the day by taking in the hour in 24 hr format
    const getMeridian=(hour)=>{                                                             
        if(hour>0 & hour<12) return 'बिहान';
        else if(hour>11 & hour<17) return 'दिउँसो';
        else if(hour>17 & hour<=23) return 'बेलुकी';
        else return '';
    }
//english to nepali alphanumberic and month and day mapping
    const numbers={
        '0':'०',
        '1':'१',
        '2':'२',
        '3':'३',
        '4':'४',
        '5':'५',
        '6':'६',
        '7':'७',
        '8':'८',
        '9':'९',
    };
    const days={
        '0':'आइतबार',
        '1':'सोमबार',
        '2':'मंगलबार',
        '3':'बुधबार',
        '4':'बिहिबार',
        '5':'शुक्रबार',
        '6':'शनिबार',
    };
    const monthNames={
        '0':'वैशाख',
        '1':'ज्येष्ठ',
        '2':'आषाढ़ ',
        '3':'श्रावण ',
        '4':'भाद्र ',
        '5':'आश्विन ',
        '6':'कार्तिक',
        '7':'मंसिर',
        '8':'पौस',
        '9':'माघ',
        '10':'फाल्गुन',
        '11':'चैत्र'
    };
/*
    the nepali-date-converter package uses Symbol as object Id
    so below is the code for getting values which are extracted to a least
    as [year,month,date,day....] 
*/
    let date=new NepaliDate();                                      
    let dateProperties =  Object.getOwnPropertySymbols(date);
    let valueList=[];
    for (const dates of dateProperties) valueList.push(date[dates]);
    
//get nepali equivalent of dates using maps defined above
    let year=valueList[0].toString();
    let nepaliYear='';
    for(let i=0;i<year.length;i++){
        nepaliYear+=numbers[year[i]];
    }

    let month=valueList[1].toString();
    let nepaliMonth='';
    for(let i=0;i<month.length;i++){
        nepaliMonth+=numbers[month[i]];
    }
    let date1=valueList[2].toString();
    let nepaliDate1=[];
    for(let i=0;i<date1.length;i++){
        nepaliDate1+=numbers[date1[i]];
    }
    let day=valueList[3].toString();
    let nepaliDayInWords=days[day];
    let nepaliMonthInWord=monthNames[month];
    
    let currentTime=new Date();
    let currentLocalHour=currentTime.getHours();
    let currentLocalMinute=currentTime.getMinutes()
    let nepaliMeridian=getMeridian(currentLocalHour);

    let currentNepaliHour='';
    for(let i=0;i<4;i++){
        currentNepaliHour+=numbers[currentLocalHour.toString()[i]];
    }
    let currentNepaliMinute='';
    for(let i=0;i<4;i++){
        currentNepaliMinute+=numbers[currentLocalMinute.toString()[i]];
    }
    return {
            'nepaliYear':nepaliYear,
            'nepaliMonth':nepaliMonth,
            'nepaliDate1':nepaliDate1,
            'nepaliMonthInWord':nepaliMonthInWord,
            'nepaliDayInWord':nepaliDayInWords,
            'nepaliMeridian':nepaliMeridian
        };
  };

  //this function converts a string output of Date.tolocaleString() to nepali equivalent
  export function getNepaliTime(time){
    const numbers={
        '0':'०',
        '1':'१',
        '2':'२',
        '3':'३',
        '4':'४',
        '5':'५ ',
        '6':'६',
        '7':'७ ',
        '8':'८',
        '9':'९',
    };
    function isNumber(char) {
        return /^\d$/.test(char);
      }
      function isCharacterALetter(char) {
        return (/[a-zA-Z]/).test(char)
      }
    let nepaliTime="";
    for(let i=0;i<time.length;i++){
        if(isNumber(time[i])) nepaliTime+=numbers[time[i]];
        else if(isCharacterALetter(time[i])) {
            const pass='pass';
        }
        else
        {nepaliTime+=time[i]};

    }
    return nepaliTime;
  }