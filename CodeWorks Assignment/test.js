
function findSuite(){
    var randomSuite = Math.floor(Math.random()*4)+1;
    switch (randomSuite){
        case 1:
            console.log("Spades");
            break;
        case 2:
            console.log("Hearts");
            break;
        case 3:
            console.log("Diamonds");
            break;
        case 4:
            console.log("Clubs");
            break;
    }
}

function findValue(){
    var randomValue = Math.floor(Math.random()*13)+1;
    switch (randomValue){
        case 1:
            console.log("Ace - 1 or 11");
            break;
        case 2:
            console.log("Two");
            break;
        case 3:
            console.log("Three");
            break;
        case 4:
            console.log("Four");
            break;
        case 5:
            console.log("Five");
            break;
        case 6:
            console.log("Six");
            break;
        case 7:
            console.log("Seven");
            break;
        case 8:
            console.log("Eight");
            break;
        case 9:
            console.log("Nine");
            break;
        case 10:
            console.log("Ten");
            break;
        case 11:
            console.log("Jack - 10");
            break;
        case 12:
            console.log("Queen - 10");
            break;
        case 13:
            console.log("King - 10");
            break;
    }
}

findSuite();
findValue();