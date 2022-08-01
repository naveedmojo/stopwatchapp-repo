let sec='00';
let hour='00';
let min='00';
let flag=false;
function starttimer(){
    if(flag==false){
        flag=true;
        Timer()
    }  
}
function stoptimer(){

        flag=false;
}
function resettimer(){  
    document.getElementById("hourstext").innerHTML='00';
    document.getElementById("secondstext").innerHTML='00';
    document.getElementById("minutestext").innerHTML='00';
    flag=false;
    sec=0;
    hour=0;
    min=0;
}
function Timer(){
    if(flag==true){
        sec=parseInt(sec)
        min=parseInt(min)
        hour=parseInt(hour)
        sec=sec+1;
        if(sec==60){
            sec=00;
            min=min+1;
            
        }
        if(min==60){
            sec=00;
            min=00;
            hour=hour+1
        }
        if(hour==12){
            hour=00;
            min=00
            sec=00
        }

        if(min==0 && hour==0 && sec==0){
            min=00
            hour=00
            sec=00
        }
        if(sec<10 || sec==0){
            document.getElementById("secondstext").innerHTML='0'+sec;
        }
        else{
            document.getElementById("secondstext").innerHTML=sec;

        }
        if(min<10 || min==0){
            document.getElementById("minutestext").innerHTML='0'+min;
        }
        else{
            document.getElementById("minutestext").innerHTML=min;
        }
        if(hour<12 || hour==0){
            document.getElementById("hourstext").innerHTML='0'+hour;
        }
        else{
            document.getElementById("hourstext").innerHTML=hour;
        }
        window.setTimeout("Timer()",1000);
    }
   
}


