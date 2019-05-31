/**
 * Number
 * String
 * Boolean
 * Undefined
 * Null
 * Array
 * Object
 */
var a = 1.5;
var b = 5.5;
var c = a + b;
console.log(c);

// String
var str = 'Hello World';
var str_1 = 'I\'m Anh';     // escape character
console.log(str);
console.log(str_1);

// Boolean-->for status Object
var isHidden = true;
console.log(isHidden);

// undefined
var A;
console.log(A);

// Null
B = null;
console.log(B);

// Object
var dog = {
    name: 'cho',
    weight: 20.2,
    isLive: true
};
dog.weight = 20;
console.log(dog['isLive']);
console.log(dog);

var friend = {
    nickName: 'Tien',
    age: 23,
    gender: 'male'
};
console.log(friend.nickName);

// Array
var dog1 = {
    type: 'cho 1'
};
var dog2 = {
    type: 'cho 2'
}
var total_dog = [dog1,dog2];
console.log(total_dog[1]);

// List contact
var contacts = [
    {name: 'Anh',no: '01234'},
    {name: 'ANh',no:'2245'}
];