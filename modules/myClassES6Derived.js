'use strict';

const MyClassES6 = require('./myClassES6.js');

class MyClassES6Derived extends MyClassES6 {
    printMessage() {
        console.log('MyClassES6Derived.printMessage called')

        super.printMessage();
    }
}

module.exports = MyClassES6Derived;