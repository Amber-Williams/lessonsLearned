let handValue = 0;
let scores=[];

function drawCard(){
    let card= {
        suite:"",
        value:0
    }

    const randomSuite = Math.floor(Math.random()*4)+1;
    switch (randomSuite){
        case 1:
            card.suite="Spades";
            break;
        case 2:
            card.suite="Hearts";
            break;
        case 3:
            card.suite="Diamonds";
            break;
        case 4:
            card.suite="Clubs";
            break;
        }

    const randomValue = Math.floor(Math.random()*13)+1;
    switch (randomValue){
        case 1:
            card.value=1;
            if (handValue<11){
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
            card.value="Jack";
            handValue+=10;
            break;
        case 12:
            card.value="Queen";
            handValue+=10;
            break;
        case 13:
            card.value="King";
            handValue+=10;
            break;
    }
    console.log(card.value + " of " + card.suite)
}

function drawFirstCards(){
    handValue=0;
    for(i=2; i>0; i--){
        drawCard();
    }
    scores.push(handValue);
    console.log(handValue);
}

function hit(){
    handValue=0;
    drawCard();
    let hitValue=handValue+scores[0];
    scores.shift();
    scores.unshift(hitValue);
    console.log(scores);
}

function computerHit(){
    handValue=0;
    drawCard();
    let hitValue=handValue+scores[1];
    scores.pop();
    scores.push(hitValue);
    console.log(scores);
}

//Scores:[Player, Dealer]

function stand(){
    console.log(scores)
    if(scores[1]<17){
        computerHit();
        console.log(scores)
    }
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
console.log("Player")
drawFirstCards();

console.log("Dealer")
drawFirstCards();


