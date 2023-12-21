// 'use strict';
// console.log(document.querySelector('.message').textContent );

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// console.log(document.querySelector('.message').textContent );


// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.number').textContent);
// console.log(document.querySelector('.score').textContent);

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value = 23); 



const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;



document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);
    //when there is no input
    if(!guess){
        document.querySelector('.message').textContent = '⛔No Number';

    //when players win    
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🎉Correct Number';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

            //when guess is wrong   
        }else if(guess !== secretNumber){
            if (score > 1){
                document.querySelector('.message').textContent = 
                guess > secretNumber ? '📈Too High' : '📉Too Low';
                score--;
                document.querySelector('.score').textContent = score;
            }else{
                document.querySelector('.message').textContent =
                'You Lost the game';
                document.querySelector('.score').textContent = 0;
            }
        }



        

    //when guess is too high    
    // }else if(guess > secretNumber){
    //     if(score> 1){
    //     document.querySelector('.message').textContent = '📈Too High';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent =
    //         'You Lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     };
     
    //when guess is too low    
    // }else if(guess < secretNumber){
    //     if(score> 1){
    //     document.querySelector('.message').textContent = '📉Too Low';    
    //     score--;
    //     document.querySelector('.score').textContent = score;
    // }else{
    //     document.querySelector('.message').textContent =
    //     'You Lost the game';
    //     document.querySelector('.score').textContent = 0;
    // };
    // }
});

document.querySelector('.again').addEventListener
('click', function(){
    score = 20;
    // secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style = 'background-color:none';
    document.querySelector('.number').style.width = '15rem';
});


