let user=[];
let game=[];
let purple=document.querySelector(".purple");
let green=document.querySelector(".green");
let yellow=document.querySelector(".yellow");
let red=document.querySelector(".red");
let allbtns=document.querySelectorAll(".box");
let colors=[purple,green,yellow,red];
let score=[]
let high_score=0;

let h3=document.querySelector("h3");
level=0;
started=false;

document.addEventListener("keypress",function(){
  if(started==false){
  console.log("The Game Started...")
  started=true;
  levelup();
  }
  
  }

)
function levelup(){
    level++;
    h3.innerText=`Level ${level}`;
    random_color();

}

function flashbox(btn_colors){
    btn_colors.classList.add("flash")
    setTimeout(function(){
        btn_colors.classList.remove("flash")
    },250)
}

function random_color(){
    user=[];
    let btn_index=Math.floor(Math.random()*4);
    let btn=colors[btn_index];
    let btn_color=btn.getAttribute("id");
    console.log(btn_color);
    let btn_colors=document.querySelector(`#${btn_color}`);
    game.push(btn_colors);
    flashbox(btn_colors);
    }
function btn_press(){
    let p=this.getAttribute("id");
    p1=document.querySelector(`#${p}`);
    flashbox(p1);
    user.push(p1);
    check();


}
for(btn of allbtns){
    btn.addEventListener("click",btn_press)
}
function check(){
    for(let i=0; i<user.length;i++){
        if(user[i]==game[i]){
            if(i==(level-1)){
                setTimeout(levelup,1000);}}
        else{
            score.push(level);
            highest_score();
            h3.innerHTML=`Game Over!! <b>Your score is ${level} and <b>Your highest score till now is ${high_score}</b> Press any key to start the game again`
            started=false;
            game=[];
            document.querySelector("body").style.backgroundColor=("red");
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor=("white"); },150);
            level=0;

        }

        }
    }
    function highest_score(){
        let max_score=score[0];
        for(scores of score){
            if(max_score<scores){
                max_score=scores;
            }
        }
        high_score=max_score;
    }