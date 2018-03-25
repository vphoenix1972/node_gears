'use strict';

function MyClass() {

}

MyClass.prototype.printMessage = function () {
    const self = this;

    console.log('MyClass.printMessage() called');
}


module.exports = MyClass;