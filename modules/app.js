// NodeJS doesn't impose 'use strict' by default
'use strict';

const MyClass = require('./myClass.js');
const MyClassES6 = require('./myClassES6.js');
const MyClassDerived = require('./myClassDerived.js');
const MyClassES6Derived = require('./myClassES6Derived.js');
const functions = require('./functions.js');
const printMessage = require('./printMessage.js');

// Main

console.log('--');

const myClass = new MyClass();
myClass.printMessage();

console.log('--');

const myClassEs6 = new MyClassES6();
myClassEs6.printMessage();

console.log('--');

const myClassDerived = new MyClassDerived();
myClassDerived.printMessage();

console.log('--');

const myClassES6Derived = new MyClassES6Derived();
myClassES6Derived.printMessage();

console.log('--');

functions.printMessage();

console.log('--');

printMessage();

console.log('--');