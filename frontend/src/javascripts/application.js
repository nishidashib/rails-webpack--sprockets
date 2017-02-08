import Person from './person';

class Friend extends Person{
    constructor(name) {
      super(name);
    }
    sayHello() {
    	console.log('Hello I\'m ' + this.name);
    }
}

var friend = new Friend('Trump');

friend.sayHello();