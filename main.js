var x=3456;
var step=-10;
var st;
var autoBt;
var txt;
var cat;
var btn1;
var btn2;
var btn3;
var btn4;
let p;
let life=1;
let iscollision=false;
let timerId;
let time = 0;
let pig;
let jump=false;
let y=0;
let sI;
let jH=0;
let isPlay=false;
const stopwatch = document.getElementById("stopwatch");
let hour, min, sec;
let reconnect=document.getElementById("pleaseReconnect");
btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');
btn3 = document.getElementById('btn3');
btn4 = document.getElementById('btn4');
function init(){
    p=document.getElementById("information");
    autoBt=document.getElementById("autoBt");
    txt=document.getElementById("txt");
    cat=document.getElementById("cat");
    pig=document.getElementById("pig");
}
function manual(){
    x+=step;
    if(x>=3456){
        step=-step;
    }
    else if(x<=-104){
        x=3456;
    }
    cat.style.left= x+"px";
}
function moveAuto(){
    isPlay = true;
    st=setInterval("manual()", 10);
}

function autoStop(){
    isPlay = false;
  	clearTimeout(st);
    p.style.visibility="visible";
  	btn1.style.visibility = 'visible';
    btn2.style.visibility = 'visible';
	btn3.style.visibility = 'visible';
    btn4.style.visibility = 'visible';
}
function printTime() {
    time++;
    stopwatch.innerText = getTimeFormatString();
}
function startClock() {
    printTime();
    stopClock();
    timerId = setTimeout(startClock, 1000);
}
function stopClock() {
    if (timerId != null) {
        clearTimeout(timerId);
    }
}
function resetClock() {
    stopClock();
    stopwatch.innerText = "00:00:00";
    time = 0;
}
function getTimeFormatString() {
    hour = parseInt(String(time / (60 * 60)));
    min = parseInt(String((time - (hour * 60 * 60)) / 60));
    sec = time % 60;

    return String(hour).padStart(2, '0') + ":" + String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
}


function toggleBtn1() {
    p.style.visibility="hidden";
    btn1.style.visibility = 'hidden';
    btn2.style.visibility = 'hidden';
    btn3.style.visibility = 'hidden';
    btn4.style.visibility = 'hidden';
}

document.addEventListener('keydown', (e)=>{
    if(!isPlay){
        return;
    }

    if(e.code == 'Space'){
        jump=true;
        frameAction();
        sI=setInterval("frameAction()",510);
    }  
})
function frameAction(){
    if(jump==true){

        // jH = (jH>= 100 || jH<=0 ) ? -jH : 0;

        if( jH === 0) {
            jH= -100;
        }else{
            jH= 0;
            jump=false;
        }

        pig.style.marginTop=jH+"px";
        document.getElementById("line").style.marginTop=-jH+"px";
        clearTimeout(sI);
        gameOver();
    }
}

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    const element = document.getElementById("moblieHidden");
    element.style.display="none";
    reconnect.style.visibility="visible";
}


function gameOver(){
    if(906<=x&&jH!=-100&&jump!=true&&x<=1056&&pig.style.marginTop==0+"px"){
        console.log('zz');
        iscollision=true;
        life=0;
    }
    if(life == 0&&iscollision===true){
        clearTimeout(timerId);
        stopwatch.innerText = "00:00:00";
        time = 0;
        clearTimeout(st);
        p.style.visibility="visible";
        btn1.style.visibility = 'visible';
        btn2.style.visibility = 'visible';
        btn3.style.visibility = 'visible';
        btn4.style.visibility = 'visible';
        life=1;
        x=3456;
    }
    
}













