//Needed to wrap full code in document.ready since code was loading before page
$( function () {
    //Global variables
    let handValue = 0;
    //Scores:[Player, Dealer]
    let scores=[0,0];
    let card= {
            suite:"",
            value:0
        }
    let isGameOver = false;

    
    //Creates card object with randomized suite and card value
    function drawCard(currentHandValue){
        //Below randomizes card suite to generate using formula to create number 1-4
        const randomSuite = Math.floor(Math.random()*4)+1;
        switch (randomSuite){
            case 1:
                card.suite="♠";
                break;
            case 2:
                card.suite="♥";
                break;
            case 3:
                card.suite="♦";
                break;
            case 4:
                card.suite="♣";
                break;
            }

        //Below randomizes card value to generate using formula to create number 1-13
        const randomValue = Math.floor(Math.random()*13)+1;
        switch (randomValue){
            case 1:
                card.value=1;
                if (currentHandValue<11){
                    handValue+=11;
                } else {
                    handValue+=1;
                }
                break;
            case 2:
                card.value=2;
                handValue+=2;
                break;
            case 3:
                card.value=3;
                handValue+=3;
                break;
            case 4:
                card.value=4;
                handValue+=4;
                break;
            case 5:
                card.value=5;
                handValue+=5;
                break;
            case 6:
                card.value=6;
                handValue+=6;
                break;
            case 7:
                card.value=7;
                handValue+=7;
                break;
            case 8:
                card.value=8;
                handValue+=8;
                break;
            case 9:
                card.value=9;
                handValue+=9;
                break;
            case 10:
                card.value=10;
                handValue+=10;
                break;
            case 11:
                card.value="J";
                handValue+=10;
                break;
            case 12:
                card.value="Q";
                handValue+=10;
                break;
            case 13:
                card.value="K";
                handValue+=10;
                break;
        }
    }
    //Below generates a HTML and CSS built card based on card object key values then appends them as they are drawn
    function createCardDiv(value, suite, isPlayer) {
        let cardDiv = $('<div>', { class: "card",
                                });

        let valueDiv = $('<div>', { class: "card-value",
                                    text: value,
                                    css:{
                                        color:'red'
                                    }
                                });
        
        let suiteDiv = $('<div>', { class: "suite-value",
                                    text: suite,
                                    css:{
                                        color:'red'
                                    }
                                });

        if(suite=="♣" || suite=="♠"){
            suiteDiv = $('<div>', { class: "suite-value",
                                    text: suite,
                                    css:{
                                        color:'black'
                                    }
                        });
            valueDiv = $('<div>', { class: "card-value",
                                    text: value,
                                    css:{
                                        color:'black'
                                    }
                        });
        }

        cardDiv.append(valueDiv);
        cardDiv.append(suiteDiv);
        
        if(isPlayer) {
            $('#playerDiv').append(cardDiv);
        } else {
            $('#computerDiv').append(cardDiv);            
        }
    }


    function startGame(){
        isGameOver=false;
        //Clears out previous game cards
        $('#computerDiv').html("");
        $('#playerDiv').html("");
        $('#gameOver').html("");
        //Deals two cards to Player and Computer
        function drawInitialCards(isPlayer) {
            handValue=0;
            for(i=2; i>0; i--){
                if(isPlayer) {
                    drawCard(scores[0]);
                    scores[0] = handValue;
                    createCardDiv(card.value,card.suite,true);
                    $('#playerScore').html(scores[0]); 
                } else {
                    drawCard(scores[1]);
                    scores[1] = handValue;
                    createCardDiv(card.value,card.suite,false);  
                    $('#computerScore').html(scores[1]); 
                }
            }
        }
        drawInitialCards(true);
        drawInitialCards(false);   

        //Below ends game if Player or Computer get 21 on intial draw
        if(scores[0] == 21 || scores[1] == 21) {
            isGameOver = true;
            if(scores[0]==21){
                $('#gameOver').html("Player Wins!");
            } else {
                $('#gameOver').html("Computer Wins!");
            }
        }
    }

    function hit(isPlayer) {
        //If gameover is true turn the hit button off
        if(isGameOver) {
            return;  
        }
        handValue=0;
        if(isPlayer) {
            drawCard(scores[0]);
            scores[0] += handValue; 
            createCardDiv(card.value,card.suite,true);
            $('#playerScore').html(scores[0]);
            //If player busts run submit game through stand function
            if(scores[0] >= 21) {
                stand();
            }
        } else {
            drawCard(scores[1]);
            scores[1] += handValue; 
            createCardDiv(card.value,card.suite,false);
            $('#computerScore').html(scores[1]); 
        }
    }

    //Below needs to be here to move hit, stand and startGame funtions globally outside jQuery document.ready scope
    document.hit = hit;
    document.stand = stand;
    document.startGame = startGame;


    function stand(){
        //If gameover is true turn the stand button off
        if(isGameOver) {
            return;
        }
        // computer turn
        while(scores[1]<17){
            hit(false);
            $('#computerScore').html(scores[1]); 
            console.log(scores)
        }
        //Gameover switch is flipped on disabiling buttons
        isGameOver = true;
        if(scores[0]>21){
            $('#gameOver').html("Player Busts - Dealer Wins!");
        } else if (scores[1]>21){
            $('#gameOver').html("Dealer Busts - Player Wins!");
        } else{
            if (scores[0]<scores[1]){
                $('#gameOver').html("Dealer Wins!");
            } else if (scores[0]>scores[1]){
                $('#gameOver').html("Player Wins!");
            } else if(scores[0]==scores[1]){
                $('#gameOver').html("Tie!");
            } else{
                $('#gameOver').html("Error");
            }
        }
    }

    startGame();
});

