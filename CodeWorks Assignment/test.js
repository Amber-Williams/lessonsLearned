$( function() {
    let handValue = 0;
    //Scores:[Player, Dealer]
    let scores=[0,0];
    var Pdiv = document.getElementById('playerDiv');
    var Cdiv = document.getElementById('computerDiv');
    let card= {
            suite:"",
            value:0
        }

    let isGameOver = false;

    function drawCard(currentHandValue){
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
        console.log(card.value + " of " + card.suite);
    }

    function startGame(){

        function drawInitialCards(isPlayer) {
            handValue=0;
            for(i=2; i>0; i--){
                if(isPlayer) {
                    drawCard(scores[0]);
                    scores[0] = handValue;
                    createCardDiv(card.value,card.suite,true);
                } else {
                    drawCard(scores[1]);
                    scores[1] = handValue;
                    createCardDiv(card.value,card.suite,false);                    
                }
            }


            console.log(handValue);
        }
        drawInitialCards(true);
        drawInitialCards(false);   
        
        if(scores[0] == 21 || scores[1] == 21) {
            isGameOver = true;
        }
    }

    function hit(isPlayer) {

        if(isGameOver) {
            return;  
        }

        handValue=0;
        if(isPlayer) {
            drawCard(scores[0]);
            
            scores[0] += handValue; 

            createCardDiv(card.value,card.suite,true);

            if(scores[0] >= 21) {
                stand();
            }
        }
        else {
            drawCard(scores[1]);
            
            scores[1] += handValue; 

            createCardDiv(card.value,card.suite,false);
            
        }
        console.log(scores);
    }

    document.hit = hit;
    document.stand = stand;


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

    function stand(){
        if(isGameOver) {
            return;
        }
        console.log(scores)
        // computer turn
        while(scores[1]<17){
            hit(false);
            console.log(scores)
        }
        isGameOver = true;
        if(scores[0]>21){
            console.log("Player Busts - Dealer Wins!")
        } else if (scores[1]>21){
            console.log("Dealer Busts - Player Wins!")
        } else{
            if (scores[0]<scores[1]){
                console.log("Dealer Wins!");
            } else if (scores[0]>scores[1]){
                console.log("Player Wins!");
            } else if(scores[0]==scores[1]){
                console.log("Tie!");
            } else{
                console.log("Error");
            }
        }
    }

    startGame();
    console.log( "ready!" );
});

