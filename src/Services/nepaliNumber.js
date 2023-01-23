//expects a list of strings containing english numbers and returns concatenated numbers string

export default function getNepaliNumber(englishNum){
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
    const convert=(EN)=>{
    let nepaliNum=[];
    for(let i=0;i<EN.length;i++){
        nepaliNum+=numbers[EN[i]];
    }
    return nepaliNum;}
    const nepaliNumList=englishNum.map(convert);
    return nepaliNumList.join('/')
  };