duck1=document.getElementById('duck1')
duck2=document.getElementById('duck2')
duck3=document.getElementById('duck3')
duck4=document.getElementById('duck4')
duck5=document.getElementById('duck5')
scoretext=document.getElementById('score')
leveltext=document.getElementById('level')
duck1ani=document.querySelector('.duck:nth-last-of-type(1)')
duck2ani=document.querySelector('.duck:nth-last-of-type(2)')
duck3ani=document.querySelector('.duck:nth-last-of-type(3)')
duck4ani=document.querySelector('.duck:nth-last-of-type(4)')
duck5ani=document.querySelector('.duck:nth-last-of-type(5)')
score=0;
level=1;
function level2(){
    window.open('Quiz Application with Timer/index.html')
    document.body.classList.add('level2bg')
    duck1ani.style.animation='duckfly 5s linear 0.5s infinite';
     duck2ani.style.animation='duckfly 10s linear 1s infinite';
     duck3ani.style.animation='duckfly 12s linear 1.5s infinite';
     duck4ani.style.animation='duckfly 15s linear 2s infinite';
     duck5ani.style.animation='duckfly 25s linear 2.5s infinite';
}
function level3(){
    window.open('Quiz Application with Timer/second.html')
    document.body.classList.remove('level2bg')
    document.body.classList.add('level3bg')
    duck1ani.style.animation='duckfly 4s linear 0.5s infinite';
     duck2ani.style.animation='duckfly 5s linear 0.5s infinite';
     duck3ani.style.animation='duckfly 6s linear 0.75s infinite';
     duck4ani.style.animation='duckfly 7.5s linear 1s infinite';
     duck5ani.style.animation='duckfly 13s linear 1.5s infinite';
}
async function counter(){
    score++;
    scoretext.innerHTML=score;
    if(score==5){ 
        if(level==3 && score==5){ 
            await document.getElementById('sound2').play();
            alert('Game Over! You Win! Press OK for New Game')
            
            window.location.reload();
    
        }
       
       
        level++;
        if(level==2){
           await document.getElementById('sound3').play();
            level2();
        }
        if(level==3){
           await document.getElementById('sound3').play();
            level3();
        }
        leveltext.innerHTML=level;
        
     duck1.checked=false;
     duck2.checked=false;
     duck3.checked=false;
     duck4.checked=false;
     duck5.checked=false;
     score=0;
     scoretext.innerHTML=0;
  
    
    }

}
duck1.addEventListener('click', counter)
duck2.addEventListener('click', counter)
duck3.addEventListener('click', counter)
duck4.addEventListener('click', counter)
duck5.addEventListener('click', counter)