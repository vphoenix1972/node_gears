'use strict';

const MyClass = require('./myClass.js');

function MyClassDerived() {
    MyClass.apply(this, arguments);
}

MyClassDerived.prototype = Object.create(MyClass.prototype);
MyClassDerived.prototype.constructor = MyClassDerived;

MyClassDerived.prototype.printMessage = function () {
    const self = this;

    console.log('MyClassDerived.printMessage() called');

    MyClass.prototype.printMessage.apply(this, arguments);    
}


module.exports = MyClassDerived;