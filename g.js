let arr1=["b0.png","b1.png","b2.png","b3.png","b4.png","b5.png","b6.png",]
let arr2=["c0.png","c1.png","c2.png","c3.png","c4.png","c5.png","c6.png"]
let arr3=["ca0.png","ca1.png","ca2.png","ca3.png","ca4.png","ca5.png","ca6.png"]
let arr4=["d0.png","d1.png","d2.png","d3.png","d4.png","d5.png","d6.png"]
let arr5=["e0.png","e1.png","e2.png","e3.png","e4.png","e5.png","e6.png"]
let arr6=["s0.png","s1.png","s2.png","s3.png","s4.png","s5.png","s6.png"]
let arr7=["m0.png","m1.png","m2.png","m3.png","m4.png","m5.png","m6.png"]
let arrA=["b1.png","c1.png","ca1.png","d1.png","e1.png","s1.png","t1.png","m1.png", "owl.png", "cow.png"]
let arrAll=[arr1,arr2,arr3,arr4,arr5,arr6,arr7];
let timerArr=["0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png"];
let arrIn=[];
let selectedarr=[]
let a=[];
let r;
let q;
let myInterval;
let score=0;
let d;
let y;
let timer=60;
let w=0;
let m;
if(localStorage.getItem('top')==null)
    {
        localStorage.setItem('top',0)
    }
document.querySelector("#startImg").addEventListener("click",function(){
    document.getElementById("click").play();
    document.querySelector("#startImg").style.display='none';
    document.querySelector("#hard").style.display='inline-block';
    document.querySelector("#easy").style.display='inline-block';
})
document.querySelector("#hard").addEventListener("click",createGameB);
document.querySelector('#easy').addEventListener("click",createGameA);
function startTimer() {
    timer = 60;
    clearInterval(m);
    m = setInterval(time, 1000);
}
function createGameB()
{
    document.querySelector("body").style.backgroundImage='url(pictures/zoo1.jpg)';
    if(timer==60) 
    {
        document.getElementById("click").play();
        document.getElementById("t").setAttribute("src","pictures/"+timerArr[0]);
    }
    document.getElementById("score").setAttribute("src","pictures/score.png");
    document.getElementById("text").innerHTML=score;
    document.querySelector("#hard").style.display='none';
    document.querySelector("#easy").style.display='none';
    let y=Math.floor(Math.random()*7);
    selectedarr=arrAll[y];
    r=Math.floor(Math.random()*6)+0;
    for (let j = 0; j < 7; j++) {
        arrIn[j]=0;
    }
    for (let i = 0; i < 7; i++) {
        if( r!=i)
        {
           do{
            q=Math.floor(Math.random()*6)+0;
        }
        while(arrIn[q]!=0) 
        arrIn[q]=selectedarr[i];
        }       
    }
    let ab=document.createElement("div");
    ab.id="abs";
    for (let i = 0; i <7; i++) {
        if(arrIn[i]!=0)
        {
            let x=document.createElement("img");
            x.setAttribute("src","pictures/"+arrIn[i]); 
            x.setAttribute("id",arrIn[i]);
            ab.appendChild(x);
        }
    }
    document.body.appendChild(ab);
    let f=document.createElement("div");
    f.id="full";
    for (let i = 0; i <7; i++) {
        let x=document.createElement("img");
        x.setAttribute("src","pictures/"+selectedarr[i]); 
        x.setAttribute("id",selectedarr[i]);
        f.appendChild(x);
        x.addEventListener("click",function(){check(x.getAttribute("id"),"B")});
    }
    document.body.appendChild(f);
    if (timer === 60) startTimer();}
function createGameA()
{
    document.querySelector("body").style.backgroundImage='url(pictures/zoo1.jpg)';
    if(timer==60) 
    {   
        document.getElementById("click").play();
        document.getElementById("t").setAttribute("src","pictures/"+timerArr[0]);
    }

    document.getElementById("text").innerHTML=score;
    document.getElementById("score").setAttribute("src","pictures/score.png");
    document.querySelector("#hard").style.display='none';
    document.querySelector("#easy").style.display='none';
    
    for (let j = 0; j < 6; j++) 
    {
        a[j]=0;
    }
    for (let i = 0; i < 6; i++) 
    {
        do
        {
            q=Math.floor(Math.random()*arrA.length)+0;
            a[i]=arrA[q];
        } while(arrA[q]==0)
        arrA[q]=0;
 
    }
    let f=document.createElement("div");
    f.id="full";
    for (let i = 0; i <a.length; i++) 
    {
        let x=document.createElement("img");
        x.setAttribute("src","pictures/"+a[i]); 
        x.setAttribute("id",a[i]);
        f.appendChild(x);
    }
    document.body.appendChild(f);
    r=Math.floor(Math.random()*5)+0;
    for (let j = 0; j < 6; j++) {
        arrIn[j]=0;
    }
    for (let i = 0; i < 6; i++) 
    {
        if( r!=i)
        {
           do
           {
            q=Math.floor(Math.random()*5)+0;
        }
            while(arrIn[q]!=0) 
        arrIn[q]=a[i];
        }       
    }
    let ab=document.createElement("div");
    ab.id="abs";
    for (let i = 0; i <6; i++) {
        if(arrIn[i]!=0)
        {
            let x=document.createElement("img");
            x.setAttribute("src","pictures/"+arrIn[i]); 
            x.setAttribute("id",arrIn[i]);
            ab.appendChild(x);
        }
    }
    document.body.appendChild(ab);
    for (let i = 0; i <a.length; i++) 
    {
        let x=document.getElementById(a[i]);
        x.addEventListener("click",function(){check(x.getAttribute("id"),"A")});    
    }
    if (timer === 60) startTimer();
}
function check(t, l)
{
    if(l=="B")
    {
        if(selectedarr[r]==t)
        {
            score+=10;
            document.getElementById("v").play();
        }
        else if(score>=5)
        {
            document.getElementById("x").play();
            score-=5; 
        }
    }
    else
    {
        arrA=["b1.png","c1.png","ca1.png","d1.png","e1.png","s1.png","t1.png","m1.png", "owl.png", "cow.png"]
        if(a[r]==t)
        {
            score+=10;
            document.getElementById("v").play();
        }
        else if(score>=5)
        {
            document.getElementById("x").play();
            score-=5;

        }
    } 
    document.getElementById("text").innerHTML=score;
    let fullDiv = document.getElementById('full');
    let absDiv = document.getElementById('abs');
    if (fullDiv) fullDiv.remove();
    if (absDiv) absDiv.remove();
    if(l=="B")
        createGameB();
    else
        createGameA();
}
function game_over()
{   
    if(score>localStorage.getItem('top'))
    {
        localStorage.setItem('top',score)
    }
    document.querySelector("#top").innerHTML=localStorage.getItem('top');
    if(w>0) return;
    clearInterval(m);
    w++; 
    let fullDiv = document.getElementById('full');
    let absDiv = document.getElementById('abs');
    if (fullDiv) fullDiv.remove();
    if (absDiv) absDiv.remove();
    let gameOverPicture=document.createElement("img");
    gameOverPicture.setAttribute("id","gameOver");
    gameOverPicture.setAttribute("src","pictures/game over.png");
    document.body.appendChild(gameOverPicture);
    let newGamePicture=document.createElement("img");
    newGamePicture.setAttribute("id","newGame");
    newGamePicture.setAttribute("src","pictures/restart.png");
    newGamePicture.addEventListener("click", function() {    document.getElementById("click").play(); location.reload();});
    document.body.appendChild(newGamePicture);
    document.getElementById("text").setAttribute("id","finalScore");
    timer=-1; 
}
let count=0;
function time()
{ 
    if(timer%5==0)
    {
         document.getElementById("t").setAttribute("src","pictures/"+timerArr[count]);
         count++;
    } 
    if (timer > 0) 
    {
        timer--;
    }
   
    else if(timer==0)
    {
        clearInterval(m);
        game_over();
        timer=-1;
    }
}

