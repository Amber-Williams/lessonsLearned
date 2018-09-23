JavaScript Constructors 

```javascript
var emp1 ={};
emp1.firstName = "Mike";
emp1.lastName = "Shoe";
emp1.gender = "M";
emp1.designation = "Regional Manager";

function CreateEmployeeObject (firstName, lastName, gender, designation) {
    //var this = {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.designation = designation;
    //return this;
}
//"new" key word ques JavaScript to populate object using JavaScript Constructor function createEmpoyeeObject (thus removing the need for the two lines above)
var emp2 = new CreateEmployeeObject ("Amber", "Williams", "F", "Web Developer");

//It is general pratice to capitalize the constructor function's first letter rather then camel code...to signal to other developers
```

Working with JS Object data and changing it in a function 

```javascript
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if(prop !=="tracks" && value !== ""){
    collection[id][prop] = value;
  }else {
    if (prop === "tracks" && !collection[id].hasOwnProperty('tracks')){
      collection[id]['tracks'] = [];
      collection[id]['tracks'].push(value);
    }
  }
  if(prop === "tracks" && value !== ""){
          collection[id]['tracks'].push(value);
  }
  if(value === ""){
    delete collection[id][prop];
  }
  
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
```



Nesting For Loops

```javascript
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for(var i = 0; i < arr.length; i++){
    console.log("level i: "+arr[i]);
    for(var j = 0; j < arr[i].length; j++){
      console.log("level J: "+arr[i][j]);
      product *= arr[i][j];
   }
  }
  // Only change code above this line
  console.log(product)
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]); //Answer: 5040
multiplyAll([[1],[2],[3]]); //Answer: 6
```

Conditional Operator

-The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

```javascript
// The syntax is
// condition ? statement-if-true : statement-if-false;

// so this
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}

//turns into that
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
```

Multiple conditional Operators

-You can also chain them together to check for multiple conditions. 

```javascript
//This
function findGreaterOrEqual(a, b) {
  if(a === b) {
    return "a and b are equal";
  }
  else if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}

//Turns into that
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

