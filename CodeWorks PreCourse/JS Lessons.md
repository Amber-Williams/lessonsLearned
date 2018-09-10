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



