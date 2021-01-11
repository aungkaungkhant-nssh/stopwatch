let stopwatch=document.querySelector(".stopwatch");
let mili=document.getElementById("mili");
let start=document.getElementsByClassName("startButton")[0];
let pause=document.getElementsByClassName("pauseButton")[0];
let con=document.getElementsByClassName("continueButton")[0];
let restart=document.getElementsByClassName("restartButton")[0];


let interval;
let inter;
let hr=0,min=0,sec=0,mis=0;

let runtime=()=>{
   
    // mis+=1;
    // if(mis===1000){
        // mis=0;
        sec+=1;
        if(sec===60){
            sec=0;
            min+=1;
            if(min===60){
                min=0;
                hr+=1;
            }
        }
    // }
        // sec+=1;
        // if(sec===60){
        //     sec=0;
        //     min+=1;
        //     if(min===60){
        //         min=0;
        //         hr+=1;
        //     }
        // }
    // stopwatch.textContent=hr+":"+min+":"+sec+":"+mis;
    
    
    // let milisecondText=mis<1000? "0"+mis.toString():mis;
    let secondText=sec<10? "0"+sec.toString():sec;
    let minuteText=min<10? "0"+min.toString():min;
    let hourText=hr<10? "0"+hr.toString():hr;
    stopwatch.textContent=hourText+":"+minuteText+":"+secondText
}
let militime=()=>{
    mis+=1;
    if(mis===1000){
        mis=0;
    }
    let milisecondText=mis<1000? "0"+mis.toString():mis;
    mili.textContent=milisecondText;
}
start.addEventListener("click",()=>{
    interval=setInterval(runtime,1000);
    inter=setInterval(militime,10);
})
pause.addEventListener("click",()=>{
    clearInterval(interval);
    clearInterval(inter);
});
con.addEventListener("click",()=>{
    clearInterval(interval);
    clearInterval(inter);
    interval=setInterval(runtime,1000);
    inter=setInterval(militime,10);
});
restart.addEventListener("click",()=>{
    clearInterval(interval);
    clearInterval(inter);
    hr=0,min=0,sec=0,mis=0;
    interval=setInterval(runtime,1000);
    inter=setInterval(militime,10);

})




