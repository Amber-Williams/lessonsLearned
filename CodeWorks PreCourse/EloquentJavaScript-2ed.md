# **Chapter 6**

==Methods== : object properties that hold functions and their values

- When a ==object.method()== is called on the special varible *==this==* in its body will point to the object that it was called on.

----



==appy()==  and ==call()== are both similar in that they both call the function it is a method of,

​	 BUT *call() takes its aruments normally,* 

​	rather then taking *aruments as an array like apply()*

```javascript
function speak(line) {
    console.log("The" + this.type + "rabbit says" + line);
}

speak.apply(fatRabbit, ["Burp!"]);
// > The fat rabbit says Burp!
speak.call({type: "old"}, "Oh my.");
// > The old rabbit says Oh my.
```



==bind()== method: creates a new function that, when called, has its ***this*** keyword set to the provided value.

	- is useful because you call that function and expect the orignial object to be used as its *this* but the scope of the function can cause an issue with this.

```javascript
this.x = 9;    // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();   
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
```



____

#### Prototypes

``` javascript
var empty = {};
console.log(empty.toString);
// > function toString(){...}
console.log(empty.toString());
// > [object Object]
```

:dart:When calling an object with the toString() method it will return [object Object] by default if it is an object. Useful to know when trying to classify the *typeof* apart from an array.



When an objet gets a request for a property that it does not have, its prototype will be searched for the property, then the prototype's prototype and so on. THINK OF A TREE OF PROTOTYPES

The greatest ancestral prototype behind almost all objects is ==Object.prototype== (THINK TREE ROOTS)



==Object.getPrototypeOf== function returns the prototype of an object. 

```
console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
// > true
console.log(Object.getPrototypeOf([]) == Array.prototype);
// > true
```



Functions derive from ==Function.prototype==

Arrays derive from ==Array.prototype==

---

You can use ==Object.create== to create an object with a specific prototype.

```javascript
var protoGuy = {
    speak: function(line) {
        console.log("The" + this.type + "guy says" + line);
    }
};

var asianGuy = Object.create(protoguy);
asianGuy.type = "asian";
asianGuy.speak =("Hello world!");
// The asian guy says Hello world!
```

:dart: not sure why you would use the above verse creating a new contructor though (see below in constructors)

___

#### Constructors

A more convient way to create objects that derive from some sahred prototype is to use a constructor. Calling a function with the *new* keyword in front of it causes it to be created as a constructor. 

**It is good practice to capitalize the names of constuctors so they are easily distingusished from other functions**

```javascript
fuction Person(hairColor, height, language) {
    this.hairColor = hairColor;
    this.height = height;
    this.language = language;
}

var amberWilliams = new Person("Blonde", "5'7", "English");
console.log(amberWilliams.language);
// > English
```



**The actual prototype of a constructor is Function.prototype since constructors are functions**

____

#### Overriding Derived Properties

When there is a property already added to the Object.prototype of an object, and you add a new value on a specific object with the same property name. It only changes for that specific object instance's property, not the Object.prototype. (Think of the z-index layers)

```javascript
Person.prototype.blood = "red";
console.log(amberWilliams.blood);
// > red
amberWilliams.blood = "warm";
console.log(amberWilliams.blood);
// > warm
console.log(markWilliams.blood);
// > red
console.log(Person.protoype.blood);
// > red
```



Layers (1 top most visible... 3 bottom) :

 	1. amberWilliams.blood = warm
 	2. Person.prototype.blood = red
 	3. Person.prototype.toString (base default object model)

____



#### **Prototype Interference**

Below demonstrates how you can run into issues with **Prototype Interference**

```javascript
Object.prototype.nonsense = "hi";
for (var name in map)
    console.log(name);
// > pizza
// > touched tree
// > nonsense

console.log("nonsense" in map);
// > true
console.log("toString" in map);
// > true
```



toString did not show up in the *for/i*n loop (but the *in* operator retured true for it)

- This is because *for/in* object loops don't show "built in" protopypes like toString that lay underneath the object tree
- User created protoypes are = **enumerable**
  - HOWEVER it is possible to create our own user *nonenumerable* properties using ==Object.defineProperty== function (SEE BELOW)
- Base default created prototypes are = **nonenumerable**



```javascript
Object.defineProperty(Object.prototype, "hiddenNonsense",
                     {enumerable:false, value: "hi"});
for (var name in map)
    console.log(name);
// > pizza
// > touched tree

console.log(map.hiddenNonsense);
// >hi
```



**Thus this fixes the issue making the property there, but won't show up in a loop**



___________________

```javascript
console.log(map.hasOwnProperty("toString"));
// > false
```

==hasOwnProperty== method tells us weather the object *itself* has the property without looking at its base default prototypes (such as user input properties vs object.prototype default model...which includes methods like toString)



**Generally a good idea (incase someone/code loaded into your program has changed the base default object prototype) to write *for/in* loops like this:**

```javascript
for (var name in map) {
    if (map.hasOwnProperty(name)){
        //action you wish such as console.log
        console.log(name);
    }
}
```



----

####  Prototype-less objects

==Object.create(null)== creates a fresh object with no prototype



______

#### Laying out a Table Example problem

string method ==.split()==  - cuts up a sring at every occurance of its argument and returns an array of the pieces

==Object.keys== function returns an array of property names in an object

 

***TTD

_______

#### *Get and Set* notation for object properties

Developers have adopted the princible of never inclubing nonmethod properties in interfaces. Rather than directly access a simple value property, they'd use *getSomething* and *setSomething* methods to read and write the property.

```javascript
var pile = {
    elements: ["Eggshell", "orange peel", "worm"],
    get height() {
        return this.elements.length;
    }
    set height(value) {
    	console.log("Ignoring attempt to set height to", value);
	}
};
console.log(pile.height);
// > 3
pile.height = 100;
// > Ignoring attempt to set height to 100
```

Get and set notion for object properties allows you to specify a function to be run when the property is read or written. 



You can also add get/set to an existing object (for example a protoype) using the ==Object.defineProperty== function 

```javascript
Object.defineProperty(TextCell.prototype, "heightProp",{
    get: function() { return this.text.length};
});

var cell = new TextCell ("no \n way");
console.log(cell.heightProp);
// > 2
cell.heightProp = 100;
console.log(cell.heightProp);
// > 2
```

**When a getter but no setter is defined, wrtiing to the property is simply ignored (like above example)**



____

#### Inheritance

Inheritance allows us to build slightly different data types from existing data types with relatively little work.



```javascript
thingOne(text){
    this.text = text + "hello world";
}
thingOne.prototype.doSomething = function (num1, num2){
    return num1 + num2;
}


function thingTwo(text){
    thingOne.call(this, text);
}
//Now thingTwo is equivent to thingOne (it inheritated it from the origninal)
thingTwo.prototype.doSomething = function (num1, num2){
    return num2 - num1;
}

//However how its basically the same, only now thingTwo has a doSomething method containing a different function
```

*Allows us to build slightly differnt data types from existing data types with relatively little work*

- The above helps to use the ==call== method to be able to give the new object as its *this* value on top of the old properties
- Then the new and old objects are aligned so if we change the old the new will change and function the same
- Finally if we want something different from the new we can override some of these properties by adding them to our new prototype



**Inheritance** is a fundamental part of the object-oriented tradition, along side **encapsulation** and **polymorphism**. Wheras encapsulation and polymorphism can be used to *seprate* pieces of code from each other, reducing the tangled ness of the overall program. Inheritance fundamentally ties types together, creating *more tangle*.



:dart: My thoughts :dart: 

inheritance seems good to use if you generally want the original to be very similar to the contructor. Otherwise could cause lengthy code edits.



----

#### The instanceof operator

==instanceof== operator is occasionally useful to know wheather an object was derieved from a specific constructor. 



```javascript
console.log(new thingTwo(500) instanceof thingTwo);
// > true
console.log(new thingTwo(500) instanceof thingOne);
// > true
console.log(new thingOne(500) instanceof thingTwo);
// > false
console.log([1] instanceof Array);
// > true
```

